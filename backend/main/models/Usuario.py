from .. import db

class Usuario(db.Model):
    usuario_id = db.Column(db.Integer, primary_key=True)
    alias = db.Column(db.String(100),nullable=False)
    correo = db.Column(db.String(100),nullable=False)
    contra = db.Column(db.String(100),nullable=False)

    def __repr__(self) -> str:
        return '<Usuario: %r >' % (self.alias)

    def to_json(self):
        json_str = {
            'usuario_id':self.usuario_id,
            'alias':self.alias,
            'correo':self.correo,
        }
        return json_str


    @staticmethod
    def from_json(json_str):
        usuario_id = json_str.get('usuario_id')
        alias = json_str.get('alias')
        correo = json_str.get('correo')
        contra = json_str.get('contra')
        return Usuario(usuario_id=usuario_id,
                       alias=alias,
                       correo=correo,
                       contra=contra)
        
