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
        arg = request.args.get('titulo')
        calificaciones = db.session.query(CalificacionModel).all()

        poemas = poemas.filter(CalificacionModel.titulo.like(arg))

        return jsonify([calificacion.to_json() for calificacion in calificaciones])




    @jwt_required()
    def post(self):
        calificacion_nueva = CalificacionModel.from_json(request.get_json())

        calificacion_nueva.usuario_id = get_jwt_identity()


        
        poem = db.session.query(PoemaModel).get(calificacion_nueva.poema_id)

        calificaciones = db.session.query(CalificacionModel).filter(CalificacionModel.poema_id == calificacion_nueva.poema_id)


        calificaciones_usuario = [calificacion_vieja.to_json() for calificacion_vieja in calificaciones if calificacion_vieja.usuario_id == get_jwt_identity()]


        if poem.autor_id == get_jwt_identity():
            return 'No se permite comentar un poema propio', 403

        elif len(calificaciones_usuario) > 0:
            return 'Ya comentaste este poema', 403

        try:
            db.session.add(calificacion_nueva)
            db.session.commit()
            # result = sendMail([calificacion_nueva.poema.autor.correo], "Nueva calificacion!", "nuevo_comentario", calificacion = calificacion_nueva )
            return calificacion_nueva.to_json(), 201

        except Exception as error:
            return str(error), 400

    
    