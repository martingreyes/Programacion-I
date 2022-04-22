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
        
        # FILTRO: Poemas: por usuario, valoración ><, titulo, fecha > < fecha. 
        if request.get_json().items():
            filtros = request.get_json().items()
            for clave, valor in filtros:
                if clave == "pagina":
                    pagina = int(valor)
                
                if clave == "por_pagina":
                    por_pagina = int(valor)

                if clave == 'autor':
                    poemas = poemas.filter(PoemaModel.autor.like("%"+valor+"%"))
                    
                # if clave == "calificacion":
                #     poemas = poemas.outerjoin(PoemaModel.calificaciones).group_by(PoemaModel.usuario_id).having(func.count(CalificacionModel.cal_id) >= valor)
                
                if clave == "titulo":
                    poemas = poemas.filter(PoemaModel.titulo.like("%"+valor+"%"))
                    
                # if clave == "fecha":
                #     poemas = poemas.outerjoin(PoemaModel.fecha).group_by(PoemaModel.poema_id).having(func.count(PoemaModel.poema_id) == valor)

        #ORDENAR: Poemas: calificacion(asc,desc), fecha(asc,desc), titulo(asc,desc). 
                # if clave == "ordenar_por":          #Si no se usa, ordena por id CREO.
                    # if valor == "alias[desc]":      #Ordena por alias descendencia. 
                    #     usuarios = usuarios.order_by(UsuarioModel.alias.desc())
                    # elif valor == "alias":
                    #     usuarios = usuarios.order_by(UsuarioModel.alias)
        
        # return jsonify([poema.to_json() for poema in poemas])
        
        poemas = poemas.paginate(pagina, por_pagina, True, 20)
        return jsonify({
                'usuarios': [poema.to_json() for poema in poemas.items],
                'total de usuarios': poemas.total, 
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