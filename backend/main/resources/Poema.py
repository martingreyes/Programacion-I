from ast import alias
from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import PoemaModel,UsuarioModel, CalificacionModel
from sqlalchemy import func 

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
        pagina = 1 
        por_pagina = 5
        poemas = db.session.query(PoemaModel)
        
        if request.get_json().items():
            filtros = request.get_json().items()
            for clave, valor in filtros:
                if clave == "pagina":
                    pagina = int(valor)
                
                if clave == "por_pagina":
                    por_pagina = int(valor)
                
                if clave == "titulo":           #SI ANDA
                    poemas = poemas.filter(PoemaModel.titulo.like("%"+valor+"%"))

                if clave == 'autor':            #Los poemas que tienen el 'valor' autor.
                    poemas = poemas.join(UsuarioModel).filter_by(alias = valor)
                    
                    """
                        TODOS andan:
                        poemas = poemas.join(PoemaModel.autor).group_by(PoemaModel.autor).having(UsuarioModel.alias == valor)
                        poemas = poemas.join(PoemaModel.autor).group_by(PoemaModel.autor).filter_by(alias = valor)
                        poemas = poemas.join(UsuarioModel).group_by(PoemaModel.autor).filter_by(alias = valor)
                    """
                
                #TODO          
                # if clave == "calificacion":     #
                #     poemas = poemas.outerjoin(PoemaModel.calificaciones).group_by(PoemaModel.usuario_id).having(func.count(CalificacionModel.cal_id) >= valor)
                
                #TODO
                if clave == "fecha":
                #     poemas = poemas.outerjoin(PoemaModel.fecha).group_by(PoemaModel.poema_id).having(func.count(PoemaModel.poema_id) == valor)
                    poemas = poemas.filter(fecha = valor)

                #TODO
                if clave == "ordenar_por":          #Si no se usa, ordena por id CREO.
                    # if valor == "calificacion[desc]":      #Ordena por calificacion descendencia. 
                    #     poemas = poemas.order_by(PoemaModel.calificacion.desc())
                    # elif valor == "calificaion":
                    #     poemas = poemas.order_by(PoemaModel.calificacion)
                    
                    if valor == "fecha[desc]":      #Ordena por fecha descendencia. 
                        poemas = poemas.order_by(PoemaModel.fecha.desc())
                    elif valor == "fecha":
                        poemas = poemas.order_by(PoemaModel.fecha)
                    
                    if valor == "titulo[desc]":      #Ordena por titulo descendencia. 
                        poemas = poemas.order_by(PoemaModel.titulo.desc())
                    elif valor == "titulo":
                        poemas = poemas.order_by(PoemaModel.titulo)
                
                
        poemas = poemas.paginate(pagina, por_pagina, True, 20)
        return jsonify({
                'usuarios': [poema.to_json_poema() for poema in poemas.items],
                'Total de poema': poemas.total, 
                'Total de paginas': poemas.pages,
                'Pagina actual': pagina, 
            })



    def post(self):
        poema = PoemaModel.from_json(request.get_json())
        db.session.add(poema)
        db.session.commit()
        return poema.to_json(), 201

class PoemasCalificacion(Resource):
    def get(self,poema_id):
        poema = db.session.query(PoemaModel).get_or_404(poema_id)
        return poema.to_json_poema_calificacion()