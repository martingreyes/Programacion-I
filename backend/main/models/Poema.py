from datetime import datetime
from .. import db
from . import UsuarioModel


class Poema(db.Model):
    poema_id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100),nullable=False)
    contenido = db.Column(db.String(1000),nullable=False)
    fecha = db.Column(db.DateTime, nullable=False)
    autor_id = db.Column(db.Integer, db.ForeignKey('usuario.usuario_id'), nullable=False)
    
    calificaciones = db.relationship("Calificacion", back_populates="poema",cascade="all, delete-orphan")
    autor = db.relationship('Usuario',back_populates="poemas",uselist=False,single_parent=True)


    def __repr__(self):
        return '<Poema: %r %r %r>' % (self.poema_id, self.titulo, self.contenido)

    def to_json(self):
        self.autor = db.session.query(UsuarioModel).get_or_404(self.autor_id)
        calificaciones = [calificacion.to_json_corto_poema() for calificacion in self.calificaciones]
        puntaje_total = 0 
        if len(calificaciones) > 0:
            for calificacion in calificaciones:
                puntaje_total += calificacion["puntaje"]
            promedio = puntaje_total / len(calificaciones)
        else: 
            promedio = ":("
        json_str = {
            'poema_id': self.poema_id,
            'titulo':self.titulo,
            'contenido':self.contenido,
            'autor': self.autor.alias,
            'fecha': self.fecha.strftime("%Y-%m-%d %H:%M:%S"),
            'promedio': promedio
        }
        return json_str



    def to_json_poema_calificacion(self):
        calificaciones = [calificacion.to_json_corto_poema() for calificacion in self.calificaciones]
        json_str = {
            'poema_id': self.poema_id,
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