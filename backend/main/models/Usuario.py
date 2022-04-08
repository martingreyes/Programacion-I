from email.policy import default
from .. import db

class Usuario(db.Model):
    usuario_id = db.Column(db.Integer, primary_key=True)
    alias = db.Column(db.String(100),nullable=False)
    correo = db.Column(db.String(100),nullable=False)
    contra = db.Column(db.String(100),nullable=False)
    admin = db.Column(db.Boolean,nullable=False,default=False)

    calificaciones = db.relationship("Calificacion", back_populates="usuario",cascade="all, delete-orphan")

    poemas = db.relationship("Poema", back_populates="autor",cascade="all, delete-orphan")


    def __repr__(self) -> str:
        return '<Usuario: %r >' % (self.alias)

    def to_json(self):                             #get 1
        json_str = {
            'usuario_id':self.usuario_id,
            'alias':self.alias,
            'correo':self.correo,
            'admin':self.admin,
        }
        return json_str

    def to_json_corto(self):
        json_str = {
            'usuario_id':self.usuario_id,
            'alias':self.alias,
        }
        return json_str


    def to_json_usuario_poema(self):                #otro get
        poemas = [poema.to_json_poema() for poema in self.poemas]
        json_str = {
            'usuario_id':self.usuario_id,
            'alias':self.alias,
            'poemas':poemas
        }
        return json_str


    def to_json_usuario_calificacion(self):
        calificaciones = [calificacion.to_json_corto() for calificacion in self.calificaciones]
        json_str = {
            'usuario_id':self.usuario_id,
            'alias':self.alias,
            'calificaciones': calificaciones
        }
        return json_str

    

    @staticmethod
    def from_json(json_str):
        usuario_id = json_str.get('usuario_id')
        alias = json_str.get('alias')
        correo = json_str.get('correo')
        contra = json_str.get('contra')
        admin = json_str.get('admin')
        return Usuario(usuario_id=usuario_id,
                       alias=alias,
                       correo=correo,
                       contra=contra,
                       admin=admin
                       )
        
