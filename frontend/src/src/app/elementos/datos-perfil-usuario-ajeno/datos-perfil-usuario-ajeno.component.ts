import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datos-perfil-usuario-ajeno',
  templateUrl: './datos-perfil-usuario-ajeno.component.html',
  styleUrls: ['./datos-perfil-usuario-ajeno.component.css']
})
export class DatosPerfilUsuarioAjenoComponent implements OnInit {

  @Input() datos!: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
