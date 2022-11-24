import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginado-de-usuarios',
  templateUrl: './paginado-de-usuarios.component.html',
  styleUrls: ['./paginado-de-usuarios.component.css']
})
export class PaginadoDeUsuariosComponent implements OnInit {

  @Input() num!: number;
  @Input() actual!: number;
  arrayNum : any;
  

  constructor() { }

  ngOnInit(): void {
  }

  array() {
    return this.arrayNum = Array.from(Array(this.num)).map((e,i)=>i+1);
  }

  pag_act(i: number) {
    return this.actual === i;
  }

}
