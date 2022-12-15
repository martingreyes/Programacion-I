import { Component, OnInit, Input} from '@angular/core';
import { PostEliminarPoemaService } from './../../servicios/post.service'
import { PostActualizarPoemaService } from './../../servicios/post.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-tarjeta-poema-chica-propio',
  templateUrl: './tarjeta-poema-chica-propio.component.html',
  styleUrls: ['./tarjeta-poema-chica-propio.component.css']
})
export class TarjetaPoemaChicaPropioComponent implements OnInit {


  @Input() titulo!: string;

  @Input() autor!: string;

  @Input() calificacion!: number;

  @Input() texto!: string;

  @Input() poema_id!: string;

  @Input() fecha!: string;

  @Input() reload!: Function;

  token: any

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
