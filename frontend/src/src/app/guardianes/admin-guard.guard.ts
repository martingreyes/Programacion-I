import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AdminGuardGuard implements CanActivate {
  constructor(
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      console.log("Guardian: admin-guard")
      console.log("LOCALSTORAGE: ", localStorage)
      let token = localStorage.getItem("token")
      console.log("TOKEN:", token)
      console.log("INFOTOKEN:", this.getDecodedAccessToken(token))

      if (token === null) {
        console.log("++++++++++++++++++ No tenes token +++++++++++++++++++")
        this.router.navigate(["Home/1"]) 
        return false 

      } else {
        console.log("++++++++++++++++++ SI tenes token +++++++++++++++++++")
        
        let rol = this.getDecodedAccessToken(token).admin
        let id_usuario = this.getDecodedAccessToken(token).usuario_id
        
        if (rol){
          console.log("++++++++++++++++++ Sos Admin +++++++++++++++++++")

          return true
        
        } else {
          console.log("++++++++++++++++++ NO sos Admin +++++++++++++++++++")
          this.router.navigate(["HomeUsuario/" + id_usuario + "/1"])
          return false
        } 
      }
    }

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


