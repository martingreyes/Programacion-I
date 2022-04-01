from .. import db

class Poema(db.Model):
    poema_id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100),nullable=False)
    contenido = db.Column(db.String(1000),nullable=False)
    autor_id = db.Column(db.Integer,nullable=False)

    def __repr__(self) -> str:
        return '<Poema: %r %r %r>' % (self.poema_id, self.titulo, self.contenido)

    def to_json(self):
        json_str = {
            'poema_id':self.poema_id,
            'titulo':self.titulo,
            'contenido':self.contenido,
            'autor_id':self.autor_id,
        }
        return json_str


    @staticmethod
    def from_json(json_str):
        poema_id = json_str.get('poema_id')
        titulo = json_str.get('titulo')
        contenido = json_str.get('contenido')
        autor_id = json_str.get('autor_id')

        return Poema(poema_id=poema_id,
                       titulo=titulo,
                       contenido=contenido,
                       autor_id=autor_id,
                       )
        
