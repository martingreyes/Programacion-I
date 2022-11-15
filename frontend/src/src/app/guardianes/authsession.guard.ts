import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthsessionGuard implements CanActivate {
  constructor(
    private router: Router
  ) {}

  canActivate( 
    // next: ActivatedRouteSnapshot,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const rol = localStorage.getItem("admin")
    let id_usuario = localStorage.getItem("id")
    const token = localStorage.getItem("token")
    console.log("LOCALSTORAGE: ", localStorage)

    // const routeGuards = route.data.id;
    // let id_usuario2 = route.data["id"] || id_usuario



    if (token==="false") {
      this.router.navigate(["Home/1"]) //? Si no tenes token generado (no logueado) te redirije a Home/1
      return false} 
    else {
      // console.log("ANTES DE ENTRAR AL IF DOBLE, id_usuario2: " + id_usuario2)
      // if (rol==="false" && id_usuario===id_usuario2){
      if (rol==="false") {
        console.log("ENTRASTE AL IF DOBLE")
        return true
      } 
      else {
        this.router.navigate(["HomeAdmin/1"])
        return false
      } 
    }
  }
}


