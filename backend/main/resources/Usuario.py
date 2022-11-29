from flask_restful import Resource
from flask import request, jsonify, session
from .. import db
from main.models import UsuarioModel, PoemaModel, CalificacionModel
from sqlalchemy import func 
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from main.auth.decorators import admin_required  
from werkzeug.security import generate_password_hash, check_password_hash


class Usuario(Resource):

    @jwt_required(optional=True)
    def get(self,usuario_id):
        usuario = db.session.query(UsuarioModel).get_or_404(usuario_id)
        token_id = get_jwt_identity()
        claims = get_jwt()
        if token_id == None:
            return usuario.to_json()
        elif token_id == usuario.usuario_id or claims["admin"]:
            return usuario.to_json(admin=True)
            


    @admin_required
    def delete(self,usuario_id):
        usuario = db.session.query(UsuarioModel).get_or_404(usuario_id)
        db.session.delete(usuario)
        db.session.commit()
        return 'Usuario eliminado', 204
        
    #Modificar
    @jwt_required()
    def put(self,usuario_id):
        usuario = db.session.query(UsuarioModel).get_or_404(usuario_id)
        data = request.get_json().items()
        token_id = get_jwt_identity()
        claims = get_jwt()
        if token_id == usuario.usuario_id or claims["admin"]:
            for clave, valor in data:
                if clave == "contra":
                    valor = generate_password_hash(valor)   # Lo deberia hacer UsuarioModel
                setattr(usuario,clave,valor)
            db.session.add(usuario)
            db.session.commit()
            return usuario.to_json(), 201
        else:
            return 'No permitido', 405


class Usuarios(Resource):
    
    # @admin_required
    def get(self):
        pagina = 1
        por_pagina = 4
        usuarios = db.session.query(UsuarioModel).order_by(UsuarioModel.pendiente.desc(),UsuarioModel.alias)

        claves = [
            'pagina',
            'por_pagina',
            'alias',
            'poemas',
            'calificaciones',
            'ordenar_por'
        ]
        
        filtros = {}
        for clave in claves:
            arg = request.args.get(clave)
            if arg != None:
                filtros.update({clave: int(arg) if arg.isnumeric() else arg})
                
        if filtros == {}:
            filtros = {'ordenar_por': 'alias'}
            

        for clave, valor in filtros.items():
            if clave == "pagina":
                pagina = int(valor)
            
            if clave == "por_pagina":
                por_pagina = int(valor)
            
            if clave == "alias":
                usuarios = usuarios.filter(UsuarioModel.alias.like("%"+valor+"%")).order_by(UsuarioModel.alias)

                # http://127.0.0.1:5000/usuarios?ordenar_por=alias&pagina=1&alias=juan
                # http://127.0.0.1:5000/usuarios?pagina=1&alias=juan&ordenar
            
            # if clave == "poemas":               #Usuarios que tengan 'valor' o mas poemas.  
            #     usuarios = usuarios.outerjoin(UsuarioModel.poemas).group_by(UsuarioModel.usuario_id).having(func.count(PoemaModel.poema_id) >= valor)

            # if clave == "calificaciones":       #Usuarios que tengan 'valor' o mas calificaciones.  
            #     usuarios=usuarios.outerjoin(UsuarioModel.calificaciones).group_by(UsuarioModel.usuario_id).having(func.count(CalificacionModel.cal_id) >= valor)

            # if clave == "ordenar_por":          #Si no se usa, ordena por id CREO.
            #     if valor == "alias[desc]":      #Ordena por alias descendencia. 
            #         usuarios = usuarios.order_by(UsuarioModel.alias.desc())
            #     elif valor == "alias":
            #         usuarios = usuarios.order_by(UsuarioModel.alias)
                            
            #     elif valor == 'poemas[desc]':   #Por cantidad de poemas(asc,desc). 
            #         usuarios = usuarios.outerjoin(UsuarioModel.poemas).group_by(UsuarioModel.usuario_id).order_by(func.count(PoemaModel.autor_id).desc())
            #     elif valor == "poemas":                        
            #         usuarios = usuarios.outerjoin(UsuarioModel.poemas).group_by(UsuarioModel.usuario_id).order_by(func.count(PoemaModel.autor_id))
                        

        usuarios = usuarios.paginate(pagina, por_pagina, True, 20)
        return jsonify({
                'Usuarios': [usuario.to_json() for usuario in usuarios.items],
                'Total_de_usuarios': usuarios.total, 
                'Total_de_paginas': usuarios.pages,
                'Pagina_actual': pagina, 
            })


    def post(self):
        usuario = UsuarioModel.from_json(request.get_json())
        # usuario.admin = 0 
        db.session.add(usuario)
        db.session.commit()
        return usuario.to_json(), 201


class UsuarioPoema(Resource):
    @jwt_required(optional=True)
    def get(self,usuario_id):
        pagina = 1
        por_pagina = 4
        poemas = db.session.query(PoemaModel).filter(PoemaModel.autor_id == usuario_id)
        
        claves = [
            'pagina',
        ]
        
        filtros = {}
        
        for clave in claves:
            arg = request.args.get(clave)
            if arg != None:
                filtros.update({clave: int(arg) if arg.isnumeric() else arg})
        
        for clave, valor in filtros.items():
            if clave == "pagina":
                pagina = int(valor)
        
        poemas = poemas.paginate(pagina, por_pagina, True, 20)
        return jsonify({
                'Poemas': [poema.to_json() for poema in poemas.items],
                'Total_de_poema': poemas.total, 
                'Total_de_paginas': poemas.pages,
                'Pagina_actual': pagina, 
            })

class UsuarioCalificacion(Resource):
    @jwt_required(optional=True)
    def get(self,usuario_id):
        usuario = db.session.query(UsuarioModel).get_or_404(usuario_id)
        return usuario.to_json()