import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-poema-usuario',
  templateUrl: './ver-poema-usuario.component.html',
  styleUrls: ['./ver-poema-usuario.component.css']
})
export class VerPoemaUsuarioComponent implements OnInit {

  usuario_id!: string;


  arrayPoemas = [
    {
      titulo:"Poema1",
      calificacion: 7,
      autor:"Autor 1",
      texto: `1Some quick example text to buildwea
              2on the card title and make up
              3the bulk of the card's content.
              1Some quick example text to buildwea
              2on the card title and make up
              3the bulk of the card's content.
              1Some quick example text to buildwea
              2on the card title and make up
              3the bulk of the card's content.
              1Some quick example text to buildwea
              2on the card title and make up
              3the bulk of the card's content.
              1Some quick example text to buildwea
              2on the card title and make up
              3the bulk of the card's content.
              1Some quick example text to buildwea
              2on the card title and make up
              3the bulk of the card's content.
              1Some quick example text to buildwea
              2on the card title and make up
              3the bulk of the card's content.
              1Some quick example text to buildwea
              2on the card title and make up
              3the bulk of the card's content.`,
      fecha: "DD/MM/YYYY"
    }
  ]

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuario_id = this.route.snapshot.paramMap.get('id') || ''; 
  }

}
