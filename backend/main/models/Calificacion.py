from .. import db
from . import UsuarioModel
from . import PoemaModel


class Calificacion(db.Model):
    cal_id =db.Column(db.Integer,primary_key=True)
    puntaje = db.Column(db.Integer,nullable=False)
    comentario = db.Column(db.String(300),nullable=False)
    
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.usuario_id'), nullable=False)
    usuario = db.relationship('Usuario',back_populates="calificaciones",uselist=False,single_parent=True)

    poema_id = db.Column(db.Integer, db.ForeignKey('poema.poema_id'), nullable=False)
    poema = db.relationship('Poema',back_populates="calificaciones",uselist=False,single_parent=True)

    def __repr__(self) -> str:
        return '<Calificacion: %r  >' % (self.cal_id)

    def to_json(self, admin=False):
        self.usuario = db.session.query(UsuarioModel).get_or_404(self.usuario_id)
        self.poema = db.session.query(PoemaModel).get_or_404(self.poema_id)
        json_str = {
            'puntaje':self.puntaje,
            'comentario':self.comentario,
            'usuario': self.usuario.alias,
            'poema': self.poema.titulo,
        }
        if admin:
            json_str["Cal_id"]=self.cal_id
        return json_str


    def to_json_corto(self):
        self.usuario = db.session.query(UsuarioModel).get_or_404(self.usuario_id)
        self.poema = db.session.query(PoemaModel).get_or_404(self.poema_id)
        json_str = {
            'cal_id':self.cal_id,
            'puntaje':self.puntaje,
            'comentario':self.comentario,
            'poema':self.poema_id
        }
        return json_str


    def to_json_corto_poema(self):
        self.usuario = db.session.query(UsuarioModel).get_or_404(self.usuario_id)
        json_str = {
            'cal_id':self.cal_id,
            'puntaje':self.puntaje,
            'comentario':self.comentario,
            'usuario_id':self.usuario_id,
        }
        return json_str


    @staticmethod
    def from_json(json_str):
        cal_id =json_str.get('cal_id')
        usuario_id = json_str.get('usuario_id')
        poema_id = json_str.get('poema_id')
        puntaje = json_str.get('puntaje')
        comentario = json_str.get('comentario')
        return Calificacion(cal_id=cal_id,
                       usuario_id=usuario_id,
                       poema_id=poema_id,
                       puntaje=puntaje,
                       comentario=comentario)
        
