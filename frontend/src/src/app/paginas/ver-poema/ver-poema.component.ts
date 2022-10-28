import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-poema',
  templateUrl: './ver-poema.component.html',
  styleUrls: ['./ver-poema.component.css']
})
export class VerPoemaComponent implements OnInit {

  arrayPoemas = [
    {
      titulo:"Poema1",
      calificacion: 7,
      autor:"Autor 1",
      texto: "1Some quick example text to buildwea<br>2on the card title and make up<br>3the bulk of the card's content.",
      fecha: "DD/MM/YYYY"
    }
  ]

  arraycomentarios = [

    {
      calificacion: 2,
      usuario:"Autor 5",
      texto: "Nefa",
    },
    {
      calificacion: 10,
      usuario:"Autor 4",
      texto: "God",
    },
    {
      calificacion: 11,
      usuario:"Autor 2",
      texto: "Maso",
    }

  ]
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
