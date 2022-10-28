import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-poema-chica',
  templateUrl: './tarjeta-poema-chica.component.html',
  styleUrls: ['./tarjeta-poema-chica.component.css']
})
export class TarjetaPoemaChicaComponent implements OnInit {

  @Input() titulo!: string;

  @Input() autor!: string;

  @Input() calificacion!: number;

  @Input() texto!: string;

  @Input() fecha!: string;
  
  constructor() { }

  ngOnInit(): void { }

}