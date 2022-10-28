import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tarjeta-poema-chica-propio',
  templateUrl: './tarjeta-poema-chica-propio.component.html',
  styleUrls: ['./tarjeta-poema-chica-propio.component.css']
})
export class TarjetaPoemaChicaPropioComponent implements OnInit {


  @Input() titulo!: string;

  @Input() autor!: string;

  @Input() calificacion!: number;

  @Input() texto!: string;

  @Input() fecha!: string;
  
  constructor() { }

  ngOnInit(): void { }
}
