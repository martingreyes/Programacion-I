import { Component, OnInit , Input} from '@angular/core';
import { AuthService } from './../../servicios/auth.service'
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  
  usuario_id: any;
  alias: any;
  aliasForm: any;
  filtro = ""

  constructor(
    private authService:AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,

    ) {
      this.aliasForm = this.formBuilder.group({
        alias: ["", Validators.required]                     
        }
      )
    }

    buscar() {

      let filtro = ""

      let alias = this.aliasForm.value.alias

      filtro = filtro + "alias=" + alias + "&"
    
      console.log("ALIAS FILTRO:", filtro)

      localStorage.setItem("filtro", filtro) 
      
      this.router.navigate(["ListaUsuariosFiltro/1/"])   

  }

  ngOnInit(): void {
    this.usuario_id = this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id 
    this.alias = this.getDecodedAccessToken(localStorage.getItem("token")).alias 
    console.log("DATOS JWT:", this.getDecodedAccessToken(localStorage.getItem("token")))
    console.log("ALIAS:", this.alias)
  }

  cerrarSesion(){

    this.router.navigate(["Home/1"])
    this.authService.logout()
  } 



  getDecodedAccessToken(token: any): any {
    try {
      return jwt_decode(token);
            // "admin": true,
            // "usuario_id": 14,
            // "correo": "elAdmin2@gmail.com"
            // alias
    } catch(Error) {
      return null;
    }
  }

}
