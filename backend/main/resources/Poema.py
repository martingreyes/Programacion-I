from flask_restful import Resource
from flask import request

POEMAS = {
    1:{'titulo':'Poema A','autor':'Juan_123'},     #Autor seria id/nombre del usuario
    2:{'titulo':'Poema B','autor':'Paco'},
    3:{'titulo':'Poema C','autor':'Guarnold'}
}


class Poema(Resource):
    def get(self, poema_id):        #Obtener
        if int(poema_id) in POEMAS:
            return POEMAS[int(poema_id)]
        return 'El poema con id:(',poema_id,') es erroneo:', 404

    def put(self, poema_id):        #Editar
        if int(poema_id) in POEMAS:
            poema = POEMAS[int(poema_id)]  
            data = request.get_json()
            poema.update(data)
            return poema, 201
        return 'El poema con id:(',poema_id,') es erroneo:', 404
    
    def delete(self, poema_id):     #Eliminar
        if int(poema_id) in POEMAS:
            del POEMAS[int(poema_id)]
            return '', 204
        return 'El poema con id:(',poema_id,') es erroneo:', 404


class Poemas(Resource):
    def get(self):      #Obtener
        return POEMAS

    def post(self):     #Insertar
        poema = request.get_json()
        poema_id = int(max(POEMAS.keys())) + 1
        POEMAS[poema_id] = poema
        return POEMAS[poema_id], 201