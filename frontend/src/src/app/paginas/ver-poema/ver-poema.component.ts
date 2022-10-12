import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-poema',
  templateUrl: './ver-poema.component.html',
  styleUrls: ['./ver-poema.component.css']
})
export class VerPoemaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // script de Deslizador
  // slider = document.getElementById("myRange");
  // output = document.getElementById("demo");
  // output.innerHTML = slider.value; 
  // slider.oninput = function() {
  // output.innerHTML = this.value;
  // }
}
