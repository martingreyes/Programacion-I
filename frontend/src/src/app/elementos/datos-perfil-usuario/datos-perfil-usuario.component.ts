import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datos-perfil-usuario',
  templateUrl: './datos-perfil-usuario.component.html',
  styleUrls: ['./datos-perfil-usuario.component.css']
})
export class DatosPerfilUsuarioComponent implements OnInit {
  @Input() usuario_id!: string;
  @Input() datos!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
