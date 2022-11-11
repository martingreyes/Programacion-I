import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './../../servicios/auth.service'

@Component({
  selector: 'app-menu-con-usuario',
  templateUrl: './menu-con-usuario.component.html',
  styleUrls: ['./menu-con-usuario.component.css']
})
export class MenuConUsuarioComponent implements OnInit {

  @Input() usuario_id!: string;
  @Input() alias!: string;

  //Hora deberia hacer una consulta a la BD con el usuario ID :)? Para obtener el nombre y la foto

  constructor(
    private authService:AuthService,
    ) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.authService.logout()
  } 

}

