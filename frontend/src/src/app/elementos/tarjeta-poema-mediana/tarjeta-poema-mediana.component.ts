import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
