import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginado-de-poemas',
  templateUrl: './paginado-de-poemas.component.html',
  styleUrls: ['./paginado-de-poemas.component.css']
})
export class PaginadoDePoemasComponent implements OnInit {

  @Input() desde!: string;
  
  @Input() num!: number;
  @Input() actual!: number;
  arrayNum : any;
  
  constructor() {
  }

  ngOnInit(): void {
  }

  array() {
    return this.arrayNum = Array.from(Array(this.num)).map((e,i)=>i+1);
  }

  pag_act(i: number) {
    return this.actual === i;
  }

}
