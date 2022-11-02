import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})

//No tocar
export class PostService {
  url = 'https://reqres.in/api/users?page=1'

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers() {
    return this.httpClient.get(this.url);
  }
}
//No tocar

@Injectable({
  providedIn: "root",
})

export class PostPoemasService {
  // url = 'https://reqres.in/api/users?page=2'
  url = 'poemas'

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getPoemas() {
    return this.httpClient.get(this.url);
  } 
}

@Injectable({
  providedIn: "root",
})

export class PostPoemaService {
  // url = 'https://reqres.in/api/users?page=2'
  url = 'poema'

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getPoema(id_poema: string) {
    return this.httpClient.get(this.url + "/" + id_poema.toString());
  } 
}

@Injectable({
  providedIn: "root",
})

export class PostUsuariosService {
  url = 'usuarios'

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getUsuarios() { 
    return this.httpClient.get(this.url);
  }  
}

@Injectable({
  providedIn: "root",
})

export class PostPoemaCalificacionService {
  url = "poema-calificacion"

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getPoemaCalificacion(id_poema: string) { 
    return this.httpClient.get(this.url + "/" + id_poema.toString());
  }  
}

