import os
from flask import Flask
from dotenv import load_dotenv

from flask_restful import Api

from flask_sqlalchemy import SQLAlchemy

from flask_jwt_extended import JWTManager



api = Api()

db = SQLAlchemy()

jwt = JWTManager()


def create_app():
	app = Flask(__name__)
	load_dotenv()


	if not os.path.exists(os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME')):
		os.mknod(os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME'))

	app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

	app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////'+os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME')
	db.init_app(app)


	import main.resources as resources

	api.add_resource(resources.PoemaResource, '/poema/<poema_id>')
	api.add_resource(resources.PoemaCalificacionResource, '/poema-calificacion/<poema_id>')
	api.add_resource(resources.PoemasResource, '/poemas')
	
	api.add_resource(resources.UsuarioResource, '/usuario/<usuario_id>')
	api.add_resource(resources.UsuarioPoemaResource, '/usuario-poema/<usuario_id>')
	api.add_resource(resources.UsuarioCalificacionResource, '/usuario-calificacion/<usuario_id>')
	api.add_resource(resources.UsuariosResource, '/usuarios')

	api.add_resource(resources.CalificacionResource, '/calificacion/<cal_id>')
	api.add_resource(resources.CalificacionesResource, '/calificaciones')
	
	api.init_app(app)
	
	app.config['PROPAGATE_EXCEPTIONS'] = True
	app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
	app.config['JWT_ACCESS_TOKEN_EXPIRES'] = int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES'))
	jwt.init_app(app)

	from main.auth import routes

	app.register_blueprint(auth.routes.auth)

	return app

