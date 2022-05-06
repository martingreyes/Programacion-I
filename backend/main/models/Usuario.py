from .. import db
from werkzeug.security import generate_password_hash, check_password_hash

class Usuario(db.Model):
    usuario_id = db.Column(db.Integer, primary_key=True)
    alias = db.Column(db.String(100),nullable=False)
    correo = db.Column(db.String(100),nullable=False)
    contra = db.Column(db.String(100),nullable=False)
    admin = db.Column(db.Boolean,nullable=False,default=False)

    calificaciones = db.relationship("Calificacion", back_populates="usuario",cascade="all, delete-orphan")

    poemas = db.relationship("Poema", back_populates="autor",cascade="all, delete-orphan")

    @property
    def contra_plana(self):
        raise AttributeError("No  permitido.")

    @contra_plana.setter
    def contra_plana(self, c):
        self.contra = generate_password_hash(c)

    def validacion_contra(self, c):
        return check_password_hash(self.contra, c)

    def __repr__(self):
        return '<Usuario: %r >' % (self.alias)


    def to_json(self, admin=0):
        poemas = [poema.to_json_poema() for poema in self.poemas]
        calificaciones =[calificacion.to_json_corto() for calificacion in self.calificaciones]
        json_str = {
            # 'usuario_id':self.usuario_id,
            'alias':self.alias,
            'cantidad_poemas': len(poemas),
            'cantidad_calificacion': len(calificaciones),
        }
        if admin:
            json_str["correo"]=self.correo
            json_str["Usuario_id"]=self.usuario_id
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
            'alias':self.alias,
            'poemas':poemas
        }
        return json_str


    def to_json_usuario_calificacion(self):
        calificaciones = [calificacion.to_json_corto() for calificacion in self.calificaciones]
        json_str = {
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
                       contra_plana=contra,
                       admin=admin,
                       )
        
