import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datos-perfil-usuario-ajeno',
  templateUrl: './datos-perfil-usuario-ajeno.component.html',
  styleUrls: ['./datos-perfil-usuario-ajeno.component.css']
})
export class DatosPerfilUsuarioAjenoComponent implements OnInit {

  @Input() usuario_id!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
