import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-ajeno',
  templateUrl: './perfil-ajeno.component.html',
  styleUrls: ['./perfil-ajeno.component.css']
})
export class PerfilAjenoComponent implements OnInit {
  usuario_id!: string;

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
    {
      titulo:"Poema3",
      calificacion: 2,
      autor:"Autor 3",
      texto: "1Some quick example text to buildwea<br>2on the card title and make up<br>3the bulk of the card's content.",
      fecha: "22/12/2222"
    },
    {
      titulo:"Poema4",
      calificacion: 2,
      autor:"Autor 4",
      texto: "1Some quick example text to buildwea<br>2on the card title and make up<br>3the bulk of the card's content.",
      fecha: "22/12/2222"
    },
    {
      titulo:"Poema5",
      calificacion: 2,
      autor:"Autor 5",
      texto: "1Some quick example text to buildwea<br>2on the card title and make up<br>3the bulk of the card's content.",
      fecha: "22/12/2222"
    }
  ]
  

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuario_id = this.route.snapshot.paramMap.get('id') || ''; 
  }
}


