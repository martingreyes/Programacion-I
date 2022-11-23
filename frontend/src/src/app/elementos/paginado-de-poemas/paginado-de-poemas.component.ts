import { Component, OnInit, Input } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-paginado-de-poemas',
  templateUrl: './paginado-de-poemas.component.html',
  styleUrls: ['./paginado-de-poemas.component.css']
})
export class PaginadoDePoemasComponent implements OnInit {

  @Input() desde!: string;
  id: any;
  @Input() num!: number;
  @Input() actual!: number;
  arrayNum : any;
  
  constructor() {
  }

  ngOnInit(): void {
    this.id = this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id
  }

  array() {
    return this.arrayNum = Array.from(Array(this.num)).map((e,i)=>i+1);
  }

  pag_act(i: number) {
    return this.actual === i;
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
