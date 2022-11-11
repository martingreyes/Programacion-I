import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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

      const rol = localStorage.getItem("admin")
      let id_usuario = localStorage.getItem("id") 
      const token = localStorage.getItem("token")
      console.log("LOCALSTORAGE: ", localStorage)

      if (token==="false") {
        this.router.navigate(["Home/1"]) //? Si no tenes token generado (no logueado) te redirije a Home/1
        return false} 
      else {
        if (rol==="true"){
          return true
        } 
        else {
          this.router.navigate(["HomeUsuario/" + id_usuario + "/1"])
          return false} 
      }
    }
}


