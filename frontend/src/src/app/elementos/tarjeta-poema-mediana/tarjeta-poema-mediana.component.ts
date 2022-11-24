import { Component, OnInit, Input } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-poema-mediana',
  templateUrl: './tarjeta-poema-mediana.component.html',
  styleUrls: ['./tarjeta-poema-mediana.component.css']
})
export class TarjetaPoemaMedianaComponent implements OnInit {

  @Input() titulo!: string;

  @Input() calificacion!: number;

  @Input() fecha!: string;
  
  @Input() texto!: string;
  
  @Input() autor!: string;

  @Input() poema_id!: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  direccionar() {
    if (this.getDecodedAccessToken(localStorage.getItem("token")) === null) {
      this.router.navigate(["VerPoema/"+ this.poema_id])
    } else if (this.getDecodedAccessToken(localStorage.getItem("token")).admin) {
      this.router.navigate(["VerPoemaAdmin/"+ this.poema_id])
    } else {
      this.router.navigate(["VerPoemaUsuario/"+ this.poema_id])
    }
  }

  getDecodedAccessToken(token: any): any {
      try {
        return jwt_decode(token);
            // "admin"
            // "usuario_id"
            // "correo"
            // "alias"
      } catch(Error) {
        return null;
      }
    } 
}
