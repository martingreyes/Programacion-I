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

  canActivate( //Tiene token
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem("token")
    console.log("LOCALSTORAGE: ", localStorage)

    if (!token) {
      this.router.navigate(["Home/1"]) //? Si no tenes token generado (no logueado) te redirije a Home/1
      return false
    } else {
      return true
    }
  }
}


