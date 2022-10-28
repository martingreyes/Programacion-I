import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-con-usuario',
  templateUrl: './menu-con-usuario.component.html',
  styleUrls: ['./menu-con-usuario.component.css']
})
export class MenuConUsuarioComponent implements OnInit {

  @Input() usuario_id!: string;

  //Hora deberia hacer una consulta a la BD con el usuario ID :)? Para obtener el nombre y la foto

  constructor(
    ) { }

  ngOnInit(): void {
  }

}
