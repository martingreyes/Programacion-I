from datetime import datetime
from .. import db
from . import UsuarioModel


class Poema(db.Model):
    poema_id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100),nullable=False)
    contenido = db.Column(db.String(1000),nullable=False)
    fecha = db.Column(db.DateTime, nullable=False)

    calificaciones = db.relationship("Calificacion", back_populates="poema",cascade="all, delete-orphan")

    autor_id = db.Column(db.Integer, db.ForeignKey('usuario.usuario_id'), nullable=False)
    autor = db.relationship('Usuario',back_populates="poemas",uselist=False,single_parent=True)


    def __repr__(self) -> str:
        return '<Poema: %r %r %r>' % (self.poema_id, self.titulo, self.contenido)

    def to_json(self):
        self.autor = db.session.query(UsuarioModel).get_or_404(self.autor_id)
        json_str = {
            'poema_id':self.poema_id,
            'titulo':self.titulo,
            'contenido':self.contenido,
            'autor': self.autor.to_json_corto(),
            'fecha': self.fecha.strftime("%Y-%m-%d %H:%M:%S"),
        }
        return json_str

    def to_json_poema(self):
        self.autor = db.session.query(UsuarioModel).get_or_404(self.autor_id)
        json_str = {
            'poema_id':self.poema_id,
            'titulo':self.titulo,
        }
        return json_str

    def to_json_poema_calificacion(self):
        calificaciones = [calificacion.to_json_corto_poema() for calificacion in self.calificaciones]
        json_str = {
            'poema_id':self.poema_id,
            'titulo':self.titulo,
            'calificaciones':calificaciones
        }
        return json_str      


    @staticmethod
    def from_json(json_str):
        poema_id = json_str.get('poema_id')
        titulo = json_str.get('titulo')
        contenido = json_str.get('contenido')
        autor_id = json_str.get('autor_id')
        fecha =  datetime.now()

        return Poema(poema_id=poema_id,
                       titulo=titulo,
                       contenido=contenido,
                       autor_id=autor_id,
                       fecha=fecha
                       )
        
