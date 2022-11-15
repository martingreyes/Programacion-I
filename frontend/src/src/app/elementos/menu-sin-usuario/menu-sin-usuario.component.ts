import { Component, OnInit, Type } from '@angular/core';
import { AuthService } from './../../servicios/auth.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-menu-sin-usuario',
  templateUrl: './menu-sin-usuario.component.html',
  styleUrls: ['./menu-sin-usuario.component.css']
})
export class MenuSinUsuarioComponent implements OnInit {
  loginForm: any
  id_usuario: any
  admin: any

  constructor(
    private authService:AuthService,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }
 
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      correo: ["elAdmin1@gmail.com", Validators.required], 
      contra: ["12345", Validators.required]
    })
  }

  
  login(dataLogin:any) {

    console.log('Comprobando credenciales...');
    this.authService.login(dataLogin).subscribe({
      
      next: (rta) => {
        localStorage.setItem('token', rta.access_token);
        localStorage.setItem('id', rta.id);
        localStorage.setItem('admin', rta.admin);
        localStorage.setItem('correo', rta.correo);
        this.id_usuario = rta.id
        this.admin = rta.admin 
        if(this.admin){
          this.router.navigate(["HomeAdmin/1"])
        } else {
          this.router.navigate(["HomeUsuario/" + this.id_usuario.toString() + "/1"])
        }
      }, 
      
      error: (error) =>{
        alert('Credenciales incorrectas');
        console.log('Error: ', error);
        localStorage.removeItem('token');
      }, 
      
      complete: () => {
        console.log('Terminó el login');
      }
    })
  }


  submit() {
    
    if(this.loginForm.valid) {
      let correo = this.loginForm.value.correo
      let contra = this.loginForm.value.contra
      this.login({correo, contra})

      
    } else {
      console.log("Debe llenar todos los campos.")
    }
  }

  get isToken() {
    return localStorage.getItem("token") || undefined
  }

  cerrarSesion(){
    this.authService.logout()
  } 


  // Estos son atributos de la clase MenuSinUsuarioComponent
  tipo = document.getElementById("password");
  num = 50;


  // var tipo = document.getElementById("password");
  // if(tipo.type == "password"){
  //     tipo.type = "text";
  // }else{
  //     tipo.type = "password";
  // }

}