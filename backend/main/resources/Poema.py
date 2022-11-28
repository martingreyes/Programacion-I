from datetime import datetime, timedelta 
from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import PoemaModel,UsuarioModel, CalificacionModel
from sqlalchemy import func 
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt


class Poema(Resource):
    
    @jwt_required(optional=True)
    def get(self, poema_id):
        poema = db.session.query(PoemaModel).get_or_404(poema_id)
        return poema.to_json()


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
        else:
            return "Error, debe loguearse", 403
        if claims["admin"]:
            return poema.to_json(admin=True), 201
        else:
            return poema.to_json(), 201

    # @jwt_required()
    # def post(self):
    #     poema = PoemaModel.from_json(request.get_json())
    #     usuario_id = get_jwt_identity()
        
    #     poema.autor_id = usuario_id
    #     db.session.add(poema)
    #     db.session.commit()

    @jwt_required()
    #Hay que usar el id del usuario en el token
    def delete(self, poema_id):
        poema = db.session.query(PoemaModel).get_or_404(poema_id)
        usuario_id = get_jwt_identity()              #Extrae el id del token
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
        # http://127.0.0.1:5000/poemas?ordenar_por=titulo&pagina=1&autor=emaperez1
        # http://127.0.0.1:5000/poemas?ordenar_por=titulo
        # http://127.0.0.1:5000/poemas?autor=emaperez1
        
        pagina = 1 
        por_pagina = 6
        poemas = db.session.query(PoemaModel)
        
        claves = [
            'pagina',
            'por_pagina',
            'titulo',
            'autor',
            'fecha',
            'fecha[desc]',
            'calificacion',
            'calificacion[desc]',
            'ordenar_por'
        ]
        
        filtros = {}
        for clave in claves:
            arg = request.args.get(clave)
            if arg != None:
                filtros.update({clave: int(arg) if arg.isnumeric() else arg})
                
        if filtros == {}:
            filtros = {'ordenar_por': 'fecha[desc]'}
        
        for clave, valor in filtros.items():
            if clave == "pagina":
                pagina = int(valor)
            
            if clave == "por_pagina":
                por_pagina = int(valor)
            
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

        
        poemas = poemas.paginate(pagina, por_pagina, True, 20)
        return jsonify({
                'Poemas': [poema.to_json() for poema in poemas.items],
                'Total_de_poema': poemas.total, 
                'Total_de_paginas': poemas.pages,
                'Pagina_actual': pagina, 
            })


    @jwt_required()
    def post(self):
        poema = PoemaModel.from_json(request.get_json())
        usuario_id = get_jwt_identity()
        
        poema.autor_id = usuario_id
        db.session.add(poema)
        db.session.commit()
        
        return poema.to_json(), 201
        
        # usuario = db.session.query(UsuarioModel).get_or_404(usuario_id)
        # cantidad_poema = len(usuario.poemas)                #REvisar usario.poemas
        # cantidad_comentarios = len(usuario.calificaciones)

        # if cantidad_poema != 0:
        #     div = cantidad_comentarios/cantidad_poema
        
        # if cantidad_poema == 0 or div >= 3:
        #     db.session.add(poema)
        #     db.session.commit()
        #     return poema.to_json(), 201
        # else:
        #     return 'No permitido', 405
        

class PoemasCalificacion(Resource):
    @jwt_required(optional=True)
    def get(self,poema_id):
        poema = db.session.query(PoemaModel).get_or_404(poema_id)
        return poema.to_json_poema_calificacion()
        