import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url = 'auth'

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }


  login(dataLogin:any): Observable<any> {  
    return this.httpClient.post(this.url + '/login', dataLogin).pipe(take(1))

  }

  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem('id');
    localStorage.removeItem('admin');
    this.router.navigate(["/", "Home/1"])
  }
}
