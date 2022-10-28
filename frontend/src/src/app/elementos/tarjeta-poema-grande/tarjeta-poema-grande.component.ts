import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-poema-grande',
  templateUrl: './tarjeta-poema-grande.component.html',
  styleUrls: ['./tarjeta-poema-grande.component.css']
})
export class TarjetaPoemaGrandeComponent implements OnInit {

  @Input() titulo!: string;

  @Input() autor!: string;

  @Input() calificacion!: number;

  @Input() texto!: string;

  @Input() fecha!: string;
  
  constructor() { }

  ngOnInit(): void { }

}
