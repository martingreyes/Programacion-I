import { Component, OnInit } from '@angular/core';
import { PostUsuarioService } from './../../servicios/post.service'
import jwt_decode from 'jwt-decode';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { PostActualizarUsuarioService } from './../../servicios/post.service'

@Component({
  selector: 'app-tarjeta-datos-de-usuario',
  templateUrl: './tarjeta-datos-de-usuario.component.html',
  styleUrls: ['./tarjeta-datos-de-usuario.component.css']
})
export class TarjetaDatosDeUsuarioComponent implements OnInit {

  datos:any;
  disponibles:any; 
  usuarioForm: any;
  
  
  constructor(
    private postUsuarioService: PostUsuarioService,
    private postActualizarUsuarioService:PostActualizarUsuarioService,
    private router: Router,
    private formBuilder: FormBuilder,  
  ) { }


  ngOnInit(): void {
    this.postUsuarioService.getUsuario(this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id).subscribe((data:any) =>{
      console.log("JSON data datos usuarios: ", data)
      data.poemas = data.poemas.length
      this.datos = data;
      this.disponibles = Math.round(data.cantidad_calificacion / data.poemas)
      }
    )
    this.usuarioForm = this.formBuilder.group({
      alias: [this.datos.alias, Validators.required],
      contra: ["2", Validators.required],
    })
    
  }


  submit() {
    if(this.usuarioForm.valid) {
      let alias = this.usuarioForm.value.alias
      let contra = this.usuarioForm.value.contra
      
      console.log("Enviando el contenido: ",  {alias: alias, contra: contra});
      console.log("Con el token: ", localStorage.getItem("token"))
      this.postActualizarUsuarioService.putUsuario({alias: alias, contra: contra}, localStorage.getItem("token"), this.datos.usuario_id).subscribe()
      console.log("Contenido enviado");  
      alert("Usuario Actualizado!")

      //TODO Ng IF depende del rol (si es HomeAdmin/1 o HomeUsuario/id/1)
      this.router.navigate(["Home/1"])
      
    } 
  }


  // "alias": "Pedro",
	// "usuario_id": 18,
	// "cantidad_poemas": 7,
	// "poemas": []
	// "correo": "pedro@gmail.com",
	// "Usuario_id": 18,
	// "Pendiente": true,
	// "Promedio_poema": 0,
	// "cantidad_calificacion": 0,
	// "calificaciones": []

  getDecodedAccessToken(token: any): any {
    try {
      return jwt_decode(token);
            // "admin": true,
            // "usuario_id": 14,
            // "correo": "elAdmin2@gmail.com"
    } catch(Error) {
      return null;
    }
  }


}
