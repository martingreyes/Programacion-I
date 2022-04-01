from flask_restful import Resource
from flask import jsonify, request, session
from .. import db
from main.models import UsuarioModel

class Usuario(Resource):

    def get(self,usuario_id):
        usuario = db.session.query(UsuarioModel).get_or_404(usuario_id)
        return usuario.to_json()

    def delete(self,usuario_id):
        usuario = db.session.query(UsuarioModel).get_or_404(usuario_id)
        db.session.delete(usuario)
        db.session.commit()
        return '',204

    def put(self,usuario_id):
        usuario = db.session.query(UsuarioModel).get_or_404(usuario_id)
        data = request.get_json().items()
        for clave,valor in data:
            setattr(usuario,clave,valor)
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(),201


class Usuarios(Resource):
    def get(self):
        usuarios = db.session.query(UsuarioModel).all()
        return jsonify([usuario.to_json() for usuario in usuarios])
        
    '''
        lista_usuarios = []
        for usuario in usuarios:
            lista_usuarios.append(usuario.to_json())
        return jsonify(lista_usuarios)
    '''



    def post(self):
        usuario = UsuarioModel.from_json(request.get_json())
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201
