import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {


  arrayPoemas = [
    {
      titulo:"Poema1",
      calificacion: 7,
      autor:"Autor 1",
      texto: `
      1Some quick example text to buildwea
      2on the card title and make up
      3the bulk of the card's content.`,
      fecha: "DD/MM/YYYY"
    },
    {
      titulo:"Poema2",
      calificacion: 2,
      autor:"Autor 3",
      texto: `
      1Some quick example text to buildwea
      2on the card title and make up
      3the bulk of the card's content.`,
      fecha: "DD/MM/YYYY"
    },{
      titulo:"Poema4",
      calificacion: 4,
      autor:"Autor 4",
      texto: `
      1Some quick example text to buildwea
      2on the card title and make up
      3the bulk of the card's content.`,
      fecha: "DD/MM/YYYY"
    },{
      titulo:"Poema5",
      calificacion: 5,
      autor:"Autor 5",
      texto: `
      1Some quick example text to buildwea
      2on the card title and make up
      3the bulk of the card's content.`,
      fecha: "DD/MM/YYYY"
    },{
      titulo:"Poema6",
      calificacion: 6,
      autor:"Autor 6",
      texto: `
      1Some quick example text to buildwea
      2on the card title and make up
      3the bulk of the card's content.`,
      fecha: "DD/MM/YYYY"
    },{
      titulo:"Poema7",
      calificacion: 7,
      autor:"Autor 7",
      texto: `
      1Some quick example text to buildwea
      2on the card title and make up
      3the bulk of the card's content.`,
      fecha: "DD/MM/YYYY"
    },{
      titulo:"Poema8",
      calificacion: 8,
      autor:"Autor 8",
      texto: `
      1Some quick example text to buildwea
      2on the card title and make up
      3the bulk of the card's content.`,
      fecha: "DD/MM/YYYY"
    },{
      titulo:"Poema9",
      calificacion: 9,
      autor:"Autor 9",
      texto: `
      1Some quick example text to buildwea
      2on the card title and make up
      3the bulk of the card's content.`,
      fecha: "DD/MM/YYYY"
    },{
      titulo:"Poema10",
      calificacion: 10,
      autor:"Autor 10",
      texto: `
      1Some quick example text to buildwea
      2on the card title and make up
      3the bulk of the card's content.`,
      fecha: "DD/MM/YYYY"
    },
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
