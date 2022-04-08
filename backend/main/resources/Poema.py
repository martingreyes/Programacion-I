from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import PoemaModel

class Poema(Resource):

    def get(self, poema_id):
        poema = db.session.query(PoemaModel).get_or_404(poema_id)
        return poema.to_json()

    def put(self, poema_id):
        poema = db.session.query(PoemaModel).get_or_404(poema_id)
        data = request.get_json().items()
        for clave,valor in data:
            setattr(poema,clave,valor)
        db.session.add(poema)
        db.session.commit()
        return poema.to_json(),201
    
    def delete(self, poema_id):
        poema = db.session.query(PoemaModel).get_or_404(poema_id)
        db.session.delete(poema)
        db.session.commit()
        return '',204


class Poemas(Resource):
    def get(self):
        poemas = db.session.query(PoemaModel).all()
        return jsonify([poema.to_json() for poema in poemas])
        
    """
        lista_poema = []
        for poema in poemas:
            lista_poema.append(poema.to_json())
        return jsonify(lista_poema)
    """

    def post(self):
        poema = PoemaModel.from_json(request.get_json())
        db.session.add(poema)
        db.session.commit()
        return poema.to_json(), 201

class PoemasCalificacion(Resource):
    def get(self,poema_id):
        poema = db.session.query(PoemaModel).get_or_404(poema_id)
        return poema.to_json_poema_calificacion()