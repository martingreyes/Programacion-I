import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capsula-poema',
  templateUrl: './capsula-poema.component.html',
  styleUrls: ['./capsula-poema.component.css']
})
export class CapsulaPoemaComponent implements OnInit {

  @Input() titulo!: string;

  @Input() autor!: string;

  @Input() calificacion!: number;

  @Input() texto!: string;

  @Input() fecha!: string;
  
  constructor() { }

  ngOnInit(): void { }


}
