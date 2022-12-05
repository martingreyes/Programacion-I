import { Component, OnInit, Type } from '@angular/core';
import { AuthService } from './../../servicios/auth.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import jwt_decode from 'jwt-decode';



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
      correo: ["juan@gmail.com", Validators.required], 
      contra: ["12345", Validators.required]
    })
  }


  login(dataLogin:any) {

    console.log('Comprobando credenciales...');
    this.authService.login(dataLogin).subscribe({
      
      next: (rta) => {
        localStorage.setItem('token', rta.access_token) ;

        this.id_usuario = this.getDecodedAccessToken(rta.access_token).usuario_id
        this.admin = this.getDecodedAccessToken(rta.access_token).admin

        if(this.admin){
          this.router.navigate(["HomeAdmin/1"])
        } else {
          this.router.navigate(["HomeUsuario/" + this.id_usuario.toString() + "/1"])
        }
      }, 
      
      error: (error) =>{

        if (error.error === 'Usuario Pendiente de Aceptación') {
          alert("Todavia no estas aceptado")
        }

        else {

          alert('Credenciales incorrectas');
          console.log('Error: ', error);
          localStorage.removeItem('token');

        }


      }, 
      
      complete: () => {
        console.log('Terminó el login');
      }
    })
  }



//   this.postCrearPoemaService.postPoema({titulo: titulo2, contenido: poema},this.token).subscribe(
//     (rta)=>{    
//       alert("Poema Publicado!"+rta)
//       console.log("####################################################RTA", rta)

//     }, (error) =>{
//       alert("No tenes poemas disponibles!" + error)
//       console.log("####################################################ERROR", error)

//     }
//   )
  
//   console.log("Contenido enviado");  
//   this.router.navigate(["HomeUsuario/" + this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id.toString()+"/1"])
  
// } else {
//   console.log("Debe llenar todos los campos.")
// }
// }







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
  // tipo = document.getElementById("password");
  // num = 50;

  getDecodedAccessToken(token: string): any {
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