import { Component, OnInit, Input } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-tarjeta-poema-chica',
  templateUrl: './tarjeta-poema-chica.component.html',
  styleUrls: ['./tarjeta-poema-chica.component.css']
})
export class TarjetaPoemaChicaComponent implements OnInit {

  @Input() desde!: string;

  @Input() usuario_id!: string;

  @Input() poema_id!: string;

  @Input() titulo!: string;

  @Input() autor!: string;

  @Input() autor_id!: string;

  @Input() calificacion!: number;

  @Input() texto!: string;

  @Input() fecha!: string;
  
  @Input() link_foto!: string;

  login = false;
  admin = false;

  constructor() { }

  ngOnInit(): void {
    if (this.getDecodedAccessToken(localStorage.getItem("token")) !== null) {
      this.login = true
      this.admin = this.getDecodedAccessToken(localStorage.getItem("token")).admin
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