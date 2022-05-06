from ast import alias
from datetime import datetime, timedelta 
from itertools import groupby
from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import PoemaModel,UsuarioModel, CalificacionModel
from sqlalchemy import func, true 
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt


class Poema(Resource):
    
    @jwt_required(optional=True)
    def get(self, poema_id):
        poema = db.session.query(PoemaModel).get_or_404(poema_id)
        token_id = get_jwt_identity()
        claims = get_jwt()
        if token_id == None or not claims["admin"]:
            return poema.to_json()
        elif claims["admin"]:
            return poema.to_json(admin=True)


    @jwt_required()
    def put(self, poema_id):
        poema = db.session.query(PoemaModel).get_or_404(poema_id)
        data = request.get_json().items()
        token_id = get_jwt_identity()
        claims = get_jwt()
        if token_id == poema.autor_id or claims["admin"]:
            for clave,valor in data:
                setattr(poema,clave,valor)
            db.session.add(poema)
            db.session.commit()
        if claims["admin"]:
            return poema.to_json(admin=True), 201
        else:
            return poema.to_json(), 201

    

    #NUEVO++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @jwt_required
    #Hay que usar el id del usuario en el token
    def delete(self, poema_id):
        usuario_id = get_jwt_identity()              #Extrae el id del token
        poema = db.session.query(PoemaModel).get_or_404(poema_id)
        claims = get_jwt()
        if not claims:
            claims['admin'] = 1
        if usuario_id == poema.autor_id or claims["admin"] == 1:
            db.session.delete(poema)
            db.session.commit()
            return 'Poema eliminado',204
        else:
            return 'Error de autenticacion', 403


class Poemas(Resource):
    @jwt_required(optional=True)        #No hace falta estar logueado
    def get(self):
        pagina = 1 
        por_pagina = 5
        usuario_id = get_jwt_identity()
        poemas = db.session.query(PoemaModel)
        
        if request.get_json().items():
            filtros = request.get_json().items()
            for clave, valor in filtros:
                if clave == "pagina":
                    pagina = int(valor)
                
                if clave == "por_pagina":
                    por_pagina = int(valor)
                
                if not usuario_id:      #NUEVO+++++++++++++++++++++++++++++++++++++++++++++++++++++
                    if clave == "titulo":
                        poemas = poemas.filter(PoemaModel.titulo.like("%"+valor+"%"))

                    if clave == 'autor':                        #Los poemas que tienen el 'valor' autor.
                        poemas = poemas.outerjoin(PoemaModel.autor).filter(UsuarioModel.alias.like("%"+valor+"%"))         

                    if clave == "calificacion[menor]":
                        poemas = poemas.outerjoin(PoemaModel.calificaciones).group_by(PoemaModel.autor_id).having(func.avg(CalificacionModel.puntaje) <= valor)
                    
                    if clave == "calificacion[mayor]":
                        poemas = poemas.outerjoin(PoemaModel.calificaciones).group_by(PoemaModel.autor_id).having(func.avg(CalificacionModel.puntaje) >= valor)

                    if clave == "fecha[antes]":
                        poemas = poemas.filter(PoemaModel.fecha <= datetime.strptime(valor, '%Y-%m-%d') + timedelta(days=1))

                    if clave == "fecha[despues]":
                        poemas = poemas.filter(PoemaModel.fecha >= datetime.strptime(valor, '%Y-%m-%d')) 
                        
                    if clave == "ordenar_por":                  #Si no se usa, ordena por id
                        if valor == "calificacion[desc]":       #Ordena por calificacion descendencia. 
                            poemas = poemas.outerjoin(PoemaModel.calificaciones).group_by(PoemaModel.poema_id).order_by(func.count(CalificacionModel.poema_id).desc())
                        elif valor == "calificacion":
                            poemas = poemas.outerjoin(PoemaModel.calificaciones).group_by(PoemaModel.poema_id).order_by(func.count(CalificacionModel.poema_id))

                        elif valor == "fecha[desc]":            #Ordena por fecha descendencia. 
                            poemas = poemas.order_by(PoemaModel.fecha.desc())
                        elif valor == "fecha":
                            poemas = poemas.order_by(PoemaModel.fecha)
                        
                        elif valor == "titulo[desc]":           #Ordena por titulo descendencia. 
                            poemas = poemas.order_by(PoemaModel.titulo.desc())
                        elif valor == "titulo":
                            poemas = poemas.order_by(PoemaModel.titulo)

                else:                   #NUEVO+++++++++++++++++++++++++++++++++++++++++++++++++++++
                    poemas = poemas.outerjoin(PoemaModel.calificaciones).group_by(PoemaModel.poema_id).order_by(PoemaModel.fecha, func.count(CalificacionModel.puntaje))


        poemas = poemas.paginate(pagina, por_pagina, True, 20)
        return jsonify({
                'usuarios': [poema.to_json_poema() for poema in poemas.items],
                'Total de poema': poemas.total, 
                'Total de paginas': poemas.pages,
                'Pagina actual': pagina, 
            })

    #NUEVO++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @jwt_required
    def post(self):
        poema = PoemaModel.from_json(request.get_json())
        usuario_id = get_jwt_identity()
        poema.autor_id = usuario_id         #El que esta logueado es el autor
        
        usuario = db.session.query(UsuarioModel).get_or_404(usuario_id)
        cantidad_poema = len(usuario.poemas)                #REvisar usario.poemas
        cantidad_comentarios = len(usuario.calificaciones)

        if cantidad_poema != 0:
            div = cantidad_comentarios/cantidad_poema
        
        if cantidad_poema == 0 or div >= 3:
            db.session.add(poema)
            db.session.commit()
            return poema.to_json(), 201
        else:
            return 'No permitido', 405

class PoemasCalificacion(Resource):
    @jwt_required(optional=True)
    def get(self,poema_id):
        poema = db.session.query(PoemaModel).get_or_404(poema_id)
        return poema.to_json_poema_calificacion()