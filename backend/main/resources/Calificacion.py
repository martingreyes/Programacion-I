from flask_restful import Resource
from flask import request


CALIFICACIONES = {
    1: {"usuario_id": 2, "poema_id":2, "puntaje": 5, "comentario":"GOOOD"},
    2: {"usuario_id": 8, "poema_id":3, "puntaje": 4, "comentario":"Muy bueno"},
    3: {"usuario_id": 2, "poema_id":5, "puntaje": 1, "comentario":"Muy malo"},
}


class Calificacion(Resource):
    def get(self,calificacion_id):
        if int(calificacion_id) in CALIFICACIONES:
            return CALIFICACIONES[int(calificacion_id)]
        return '', 404


    def delete(self,calificacion_id):
        if int(calificacion_id) in CALIFICACIONES:
            del CALIFICACIONES[int(calificacion_id)]
            return '', 204
        return '', 404


class Calificaciones(Resource):
    def get(self):
        return CALIFICACIONES

    def post(self):
        calificacion = request.get_json()
        calificacion_id = int(max(CALIFICACIONES.keys())) + 1
        CALIFICACIONES[calificacion_id] = calificacion
        return CALIFICACIONES[calificacion_id], 201