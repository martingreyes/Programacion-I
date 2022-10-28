import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})

export class PostPoemasService {
  // url = 'https://reqres.in/api/users?page=2'
  url = "http://127.0.0.1:5000/poema/2"

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getPoemas() {
    return this.httpClient.get(this.url);
  } 
}



export class PostUsuariosService {
  url = "http://127.0.0.1:5000/usuarios"

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getUsuarios() {
    return this.httpClient.get(this.url);
  }  
}

