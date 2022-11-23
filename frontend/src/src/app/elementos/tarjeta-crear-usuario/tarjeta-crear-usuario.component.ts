import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { PostCrearUsuarioService } from './../../servicios/post.service'

@Component({
  selector: 'app-tarjeta-crear-usuario',
  templateUrl: './tarjeta-crear-usuario.component.html',
  styleUrls: ['./tarjeta-crear-usuario.component.css']
})
export class TarjetaCrearUsuarioComponent implements OnInit {

  usuarioForm: any
  token: any

  constructor(
    private postCrearUsuarioService:PostCrearUsuarioService,
    private router: Router,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      alias: ["juan", Validators.required],
      contra: ["12345", Validators.required],
      correo: ["juan@gmail.com", Validators.required]
    })
  }
  submit() {
    if(this.usuarioForm.valid) {
      let alias = this.usuarioForm.value.alias
      let contra = this.usuarioForm.value.contra
      let correo = this.usuarioForm.value.correo
      let admin = this.usuarioForm.value.admin
      this.token = localStorage.getItem("token") || undefined 
      
      console.log("Enviando el contenido: ",  {alias: alias, contra: contra, correo: correo, admin: admin});
      console.log("Con el token: ", this.token)
      this.postCrearUsuarioService.postUsuario({alias: alias, contra: contra, correo: correo, admin: admin},this.token).subscribe()
      console.log("Contenido enviado");  
      alert("Usuario Publicado!")
      this.router.navigate(["Home/1"])
      
    } else {
      console.log("Debe llenar todos los campos.")
      alert(`Verifique que los datos hayan sido ingresados correctamente

            El email debe ser de formato: ejemplo@dominio.com 
            Contraseña debe:
                Tener 5 caracteres como minimo`)
    }
  }
}


