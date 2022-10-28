import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capsula-usuario-pendiente',
  templateUrl: './capsula-usuario-pendiente.component.html',
  styleUrls: ['./capsula-usuario-pendiente.component.css']
})
export class CapsulaUsuarioPendienteComponent implements OnInit {

  @Input() usuario!: string;

  @Input() email!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
