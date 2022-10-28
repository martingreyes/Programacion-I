import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capsula-usuario',
  templateUrl: './capsula-usuario.component.html',
  styleUrls: ['./capsula-usuario.component.css']
})
export class CapsulaUsuarioComponent implements OnInit {

  @Input() usuario!: string;

  @Input() email!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
