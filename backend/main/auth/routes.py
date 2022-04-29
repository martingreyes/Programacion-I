from flask import request, jsonify, Blueprint
from .. import db
from main.models import UsuarioModel
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

print("++++++++++++++++++++++++++++++++++++")
auth = Blueprint('auth', __name__, url_prefix='/auth')
print("+++++++++++++++++++++++++++++++++++++++++++++++++")

@auth.route('/login', methods=['POST'])
def login():
    usuario = db.session.query(UsuarioModel).filter(UsuarioModel.correo == request.get_json().get("correo")).first_or_404()
    if usuario.validate_pass(request.get_json().get("password")):
        access_token = create_access_token(identity=usuario)
        data = {
            'id': str(usuario.usuario_id),
            'correo': usuario.correo,
            'access_token': access_token
        }

        return data, 200
    else:
        return 'Incorrect password', 401


@auth.route('/register', methods=['POST'])
def register():
    usuario = UsuarioModel.from_json(request.get_json())
    exists = db.session.query(UsuarioModel).filter(UsuarioModel.correo == usuario.correo).scalar() is not None
    if exists:
        return 'Duplicated mail', 409
    else:
        try:
            db.session.add(usuario)
            db.session.commit()
        except Exception as error:
            db.session.rollback()
            return str(error), 409
        return usuario.to_json() , 201