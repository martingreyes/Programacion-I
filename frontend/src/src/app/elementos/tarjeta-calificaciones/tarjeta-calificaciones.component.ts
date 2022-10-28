import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-calificaciones',
  templateUrl: './tarjeta-calificaciones.component.html',
  styleUrls: ['./tarjeta-calificaciones.component.css']
})
export class TarjetaCalificacionesComponent implements OnInit {

  @Input() usuario!: string;

  @Input() calificacion!: number;

  @Input() texto!: string;

  arraycomentarios = [

    {
      calificacion: 2,
      usuario:"Autor 5",
      texto: "sum dolor sit amet. Sit quas harum et iste dolores quo delectus laudantium sit voluptatem eveniet et nesciunt culpa! Hic cupiditate earum et harum incidunt sit aperiam fuga et od",
    },
    {
      calificacion: 10,
      usuario:"Autor 4",
      texto: "Non voluptas odit aut quos expedita aut sequi dolorum aut tenetur quis ut velit consequatur. In saepe voluptatem quo optio voluptatem ut sint illo.",
    },
    {
      calificacion: 11,
      usuario:"Autor 2",
      texto: "Nam pariatur laudantium eum ducimus aliquam id sapiente illum sed repellat voluptates rem assumenda fugiat.",
    }

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
