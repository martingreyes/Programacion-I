from flask_restful import Resource
from flask import jsonify, request, session
from .. import db
from main.models import UsuarioModel, PoemaModel, CalificacionModel
from sqlalchemy import func 

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
        pagina = 1
        por_pagina = 5
        usuarios = db.session.query(UsuarioModel)
        if request.get_json():
            filtros = request.get_json().items()
            for clave, valor in filtros:
                if clave == "pagina":
                    pagina = int(valor)
                
                if clave == "por_pagina":
                    por_pagina = int(valor)
                
                if clave == "alias":
                    usuarios = usuarios.filter(UsuarioModel.alias.like("%"+valor+"%"))
                
                if clave == "poemas":               #Usuarios que tengan 'valor' o mas poemas.  
                    usuarios = usuarios.outerjoin(UsuarioModel.poemas).group_by(UsuarioModel.usuario_id).having(func.count(PoemaModel.poema_id) >= valor)

                if clave == "calificaciones":       #Usuarios que tengan 'valor' o mas calificaciones.  
                    usuarios=usuarios.outerjoin(UsuarioModel.calificaciones).group_by(UsuarioModel.usuario_id).having(func.count(CalificacionModel.cal_id) >= valor)

                if clave == "ordenar_por":          #Si no se usa, ordena por id CREO.
                    if valor == "alias[desc]":      #Ordena por alias descendencia. 
                        usuarios = usuarios.order_by(UsuarioModel.alias.desc())
                    elif valor == "alias":
                        usuarios = usuarios.order_by(UsuarioModel.alias)
                                
                    elif valor == 'poemas[desc]':   #Por cantidad de poemas(asc,desc). 
                        usuarios = usuarios.outerjoin(UsuarioModel.poemas).group_by(UsuarioModel.usuario_id).order_by(func.count(PoemaModel.autor_id).desc())
                    elif valor == "poemas":                        
                        usuarios = usuarios.outerjoin(UsuarioModel.poemas).group_by(UsuarioModel.usuario_id).order_by(func.count(PoemaModel.autor_id))
                        


        usuarios = usuarios.paginate(pagina, por_pagina, True, 20)
        return jsonify({
                'usuarios': [usuario.to_json() for usuario in usuarios.items],
                'total de usuarios': usuarios.total, 
                'Total de paginas': usuarios.pages,
                'Pagina actual': pagina, 
            })


    def post(self):
        usuario = UsuarioModel.from_json(request.get_json())
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201

class UsuarioPoema(Resource):
    def get(self,usuario_id):
        usuario = db.session.query(UsuarioModel).get_or_404(usuario_id)
        return usuario.to_json_usuario_poema()

class UsuarioCalificacion(Resource):
    def get(self,usuario_id):
        usuario = db.session.query(UsuarioModel).get_or_404(usuario_id)
        return usuario.to_json_usuario_calificacion()

        