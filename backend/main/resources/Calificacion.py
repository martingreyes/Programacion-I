from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import CalificacionModel, PoemaModel
from main.auth.decorators import admin_required  
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from main.mail.funciones import sendMail
from sqlalchemy import func 


class Calificacion(Resource):
    
    @jwt_required(optional=True)
    def get(self, cal_id):
        calificacion = db.session.query(CalificacionModel).get_or_404(cal_id)
        return calificacion.to_json()
    
    @admin_required
    def delete(self, cal_id):
        calificacion = db.session.query(CalificacionModel).get_or_404(cal_id)
        db.session.delete(calificacion)
        db.session.commit()
        return 'Calificacion eliminada.', 204
    
    @jwt_required()
    def put(self, cal_id):
        calificacion = db.session.query(CalificacionModel).get_or_404(cal_id)
        data = request.get_json().items()
        token_id = get_jwt_identity()
        claims = get_jwt()
        if token_id == calificacion.usuario_id or claims["admin"]:
            for clave, valor in data:
                setattr(calificacion, clave, valor)
            db.session.add(calificacion)
            db.session.commit()
            return calificacion.to_json() , 201
        else:
            return "Error, debe loguearse", 403


class Calificaciones(Resource):

    def get(self):
        pagina = 1 
        por_pagina = 3
        arg = request.args.get('titulo')
        calificaciones = db.session.query(CalificacionModel).all()

        poemas = poemas.filter(CalificacionModel.titulo.like(arg))

        return jsonify([calificacion.to_json() for calificacion in calificaciones])



    @jwt_required()
    #El mismo usario no puede hacer 2 calificaciones a un mismo poema. 
    def post(self):
        calificacion_nueva = CalificacionModel.from_json(request.get_json())
        calificacion_nueva.usuario_id = get_jwt_identity()

        calificaciones = db.session.query(CalificacionModel).all()
        for calificacion in calificaciones:
            if calificacion.usuario_id == get_jwt_identity() and calificacion.poema_id == calificacion_nueva.poema_id :
                return "Ya comentaste este poema",403

        try:
            db.session.add(calificacion_nueva)
            db.session.commit()
            result = sendMail([calificacion_nueva.poema.autor.correo], "Nueva calificacion!", "nuevo_comentario", calificacion = calificacion_nueva )
            return calificacion_nueva.to_json(), 201
        except Exception as error:
            # db.session.rollback()   
            return str(error), 409
        
