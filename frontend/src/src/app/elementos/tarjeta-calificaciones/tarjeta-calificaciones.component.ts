import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-calificaciones',
  templateUrl: './tarjeta-calificaciones.component.html',
  styleUrls: ['./tarjeta-calificaciones.component.css']
})
export class TarjetaCalificacionesComponent implements OnInit {

  @Input() usuario!: string;

  @Input() calificacion!: number;

  @Input() texto!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
