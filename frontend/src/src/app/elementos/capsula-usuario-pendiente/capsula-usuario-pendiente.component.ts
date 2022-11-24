import { Component, OnInit, Input, Output } from '@angular/core';
import { PostEliminarUsuarioService } from './../../servicios/post.service'
// import {ListaUsuariosComponent} from  './../../paginas/lista-usuarios'
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { PostActualizarUsuarioService } from './../../servicios/post.service'


@Component({
  selector: 'app-capsula-usuario-pendiente',
  templateUrl: './capsula-usuario-pendiente.component.html',
  styleUrls: ['./capsula-usuario-pendiente.component.css']
})
export class CapsulaUsuarioPendienteComponent implements OnInit {
  token: any

  @Input() usuario!: string;

  @Input() email!: string;

  @Input() id!: string;

  @Input() reload!: Function;


  constructor(
    private postEliminarUsuarioService:PostEliminarUsuarioService,
    // private ListaUsuariosComponent:ListaUsuariosComponent,
    private postActualizarUsuarioService:PostActualizarUsuarioService,
    private router: Router,   
  ) { }

  ngOnInit(): void {
  }

  

  submit() {
 
      this.token = localStorage.getItem("token") || undefined 
      
      console.log("Enviando el contenido: ",  {id: this.id});
      console.log("Con el token: ", this.token)
      this.postEliminarUsuarioService.deleteUsuario(this.token, Number(this.id)).subscribe()
      console.log("Contenido enviado");  
      alert("Usuario Eliminado!")
 
      this.reload()

  }


  aceptar() {
  
    this.token = localStorage.getItem("token") || undefined 
    console.log("Enviando el contenido: ",  {id: this.id});
    this.postActualizarUsuarioService.putUsuario({"pendiente": 0}, this.token, Number(this.id)).subscribe()
    console.log("Contenido enviado");  
    alert("Usuario Aceptado!")

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
