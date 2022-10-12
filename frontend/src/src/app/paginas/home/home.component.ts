import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayPoemas = [
    {
      titulo:"Poema1",
      calificacion: 7,
      autor:"Autor 1",
      texto: "1Some quick example text to buildwea<br>2on the card title and make up<br>3the bulk of the card's content.",
      fecha: "DD/MM/YYYY"
    },
    {
      titulo:"Poema2",
      calificacion: 2,
      autor:"Autor 2",
      texto: "1Some quick example text to buildwea<br>2on the card title and make up<br>3the bulk of the card's content.",
      fecha: "22/12/2222"
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
