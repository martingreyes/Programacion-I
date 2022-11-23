import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './../../servicios/auth.service'
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-menu-con-usuario',
  templateUrl: './menu-con-usuario.component.html',
  styleUrls: ['./menu-con-usuario.component.css']
})
export class MenuConUsuarioComponent implements OnInit {

  usuario_id: any;
  alias: any;


  constructor(
    private authService:AuthService,
    private router: Router
    ) { }

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

