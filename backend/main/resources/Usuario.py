from flask_restful import Resource
from flask import request

USUARIOS = {
    1:{'alias':'alex123','contra':'12345','correo':'alex123@gmail.com'},    #Tipo??
    2:{'alias':'pepePro','contra':'0012345','correo':'pepepro@gmail.com'},
    3:{'alias':'Reyes','contra':'0012345','correo':'reyes@gmail.com'}
}


class Usuario(Resource):
    def get(self,usuario_id):
        if int(usuario_id) in USUARIOS:
            return USUARIOS[int(usuario_id)]
        return '', 404

    def delete(self,usuario_id):
        if int(usuario_id) in USUARIOS:
            del USUARIOS[int(usuario_id)]
            return '', 204
        return '', 404

    def put(self,usuario_id):
        if int(usuario_id) in USUARIOS:
            usuario = USUARIOS[int(usuario_id)]
            data = request.get_json()
            usuario.update(data)
            return usuario, 201
        return '', 404

class Usuarios(Resource):
    def get(self):              #Obtener
        return USUARIOS

    def post(self):             #Insertar
        usuario = request.get_json()
        usuario_id = int(max(USUARIOS.keys())) + 1
        USUARIOS[usuario_id] = usuario
        return USUARIOS[usuario_id], 201