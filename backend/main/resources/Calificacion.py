from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import CalificacionModel
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt


class Calificacion(Resource):
    
    def get(self, cal_id):
        calificacion = db.session.query(CalificacionModel).get_or_404(cal_id)
        return calificacion.to_json()
    
    def delete(self, cal_id):
        calificacion = db.session.query(CalificacionModel).get_or_404(cal_id)
        db.session.delete(calificacion)
        db.session.commit()
        return '', 204
    
    def put(self, cal_id):
        calificacion = db.session.query(CalificacionModel).get_or_404(cal_id)
        data = request.get_json().items()
        for clave, valor in data:
            setattr(calificacion, clave, valor)
        db.session.add(calificacion)
        db.session.commit()
        return calificacion.to_json() , 201


class Calificaciones(Resource):
        
    def get(self):
        calificaciones = db.session.query(CalificacionModel).all()
        return jsonify([calificacion.to_json() for calificacion in calificaciones])

  # ----------- Nuevo ---------------  
    @jwt_required()
    def post(self):
        calificacion = CalificacionModel.from_json(request.get_json())
        usuario_id = get_jwt_identity()
        calificacion.usuario_id = usuario_id 
        db.session.add(calificacion)
        db.session.commit()
        return calificacion.to_json(), 201