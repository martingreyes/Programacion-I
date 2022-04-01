from .. import db

class Calificacion(db.Model):
    cal_id =db.Column(db.Integer,primary_key=True)
    usuario_id = db.Column(db.Integer, nullable=False)
    poema_id = db.Column(db.Integer,nullable=False)
    puntaje = db.Column(db.Integer,nullable=False)
    comentario = db.Column(db.String(300),nullable=False)

    def __repr__(self) -> str:
        return '<Calificacion: %r  >' % (self.cal_id)

    def to_json(self):
        json_str = {
            'cal_id':self.cal_id,
            'usuario_id':self.usuario_id,
            'poema_id':self.poema_id,
            'puntaje':self.puntaje,
            'comentario':self.comentario

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
        
