from .. import db
import math
from werkzeug.security import generate_password_hash, check_password_hash

class Usuario(db.Model):
    usuario_id = db.Column(db.Integer, primary_key=True)
    alias = db.Column(db.String(100),nullable=False)
    correo = db.Column(db.String(100),nullable=False)
    contra = db.Column(db.String(100),nullable=False)
    admin = db.Column(db.Boolean,nullable=False,default=False)
    pendiente = db.Column(db.Boolean,nullable=False,default=1)

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

    

    def to_json(self):
        poemas = [poema.to_json() for poema in self.poemas]
        suma = 0
        cont = 0
        
        for x in poemas:
            if  type(x["promedio"]) == float:
                suma += x["promedio"]
                cont += 1
        if cont != 0:
            promedio = round((suma / cont),1)
        else:
            promedio = 0
            
        calificaciones =[calificacion.to_json() for calificacion in self.calificaciones] #Calificaciones que él hizo
        
        
        poemas_disponibles = math.floor( (len(calificaciones) / 3 ) + (3 - len(poemas)))
        
        json_str = {
            'usuario_id':self.usuario_id,
            'alias':self.alias,
            'correo':self.correo,
            'Pendiente':self.pendiente,
            
            'poemas':poemas,
            "Promedio_poema": promedio,
            'cantidad_poemas': len(poemas),
            
            "calificaciones": calificaciones,
            'cantidad_calificacion': len(calificaciones),
            
            "poemas_disponibles": poemas_disponibles,
        }
        return json_str

    # def to_json_corto(self):
    #     json_str = {
    #         'usuario_id':self.usuario_id,
    #         'alias':self.alias,
    #     }
    #     return json_str


    def to_json_usuario_poema(self):                #otro get
        poemas = [poema.to_json() for poema in self.poemas]
        json_str = {
            'alias':self.alias,
            'poemas':poemas
        }
        return json_str


    # def to_json_usuario_calificacion(self):
    #     calificaciones = [calificacion.to_json() for calificacion in self.calificaciones]
    #     json_str = {
    #         'alias':self.alias,
    #         'calificaciones': calificaciones
    #     }
    #     return json_str
    

    @staticmethod
    def from_json(json_str):
        usuario_id = json_str.get('usuario_id')
        alias = json_str.get('alias')
        correo = json_str.get('correo')
        contra = json_str.get('contra')
        # admin = 0
        return Usuario(
            usuario_id=usuario_id,
            alias=alias,
            correo=correo,
            contra_plana=contra,
            # admin=admin,
            )
        

