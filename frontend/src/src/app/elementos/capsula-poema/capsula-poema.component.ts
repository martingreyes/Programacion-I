import { Component, OnInit, Input } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { PostEliminarPoemaService } from './../../servicios/post.service'

@Component({
  selector: 'app-capsula-poema',
  templateUrl: './capsula-poema.component.html',
  styleUrls: ['./capsula-poema.component.css']
})
export class CapsulaPoemaComponent implements OnInit {

  @Input() titulo!: string;

  @Input() autor!: string;

  @Input() calificacion!: number;

  @Input() texto!: string;

  @Input() fecha!: string;

  token: any

  @Input() usuario!: string;

  @Input() email!: string;

  @Input() poema_id!: string;

  @Input() reload!: Function;
  
  constructor(
    private postEliminarPoemaService:PostEliminarPoemaService,
  ) { }

  ngOnInit(): void { }

  eliminar() {
 
    this.token = localStorage.getItem("token") || undefined 
    
    console.log("Enviando el contenido: ",  {poema_id: this.poema_id});
    console.log("Con el token: ", this.token)
    this.postEliminarPoemaService.deletePoema(this.token, Number(this.poema_id)).subscribe()
    console.log("Contenido enviado");  
    alert("Poema Eliminado!")

    this.reload()

}

getDecodedAccessToken(token: string): any {
  try {
    return jwt_decode(token);
          // "admin"
          // "usuario_id"
          // "correo"
  } catch(Error) {
    return null;
  }
}


}
