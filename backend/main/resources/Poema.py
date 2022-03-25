from flask_restful import Resource
from flask import request

POEMAS = {
    1:{'titulo':'Poema A','autor':'Juan_123'},     #Autor seria id/nombre del usuario
    2:{'titulo':'Poema B','autor':'Paco'},
    3:{'titulo':'Poema C','autor':'Guarnold'}
}


class Poema(Resource):
    def get(self, poema_id):
        if poema_id in POEMAS:
            return POEMAS[poema_id]
        return 'El poema con id:(',poema_id,')es erroneo:',404
        