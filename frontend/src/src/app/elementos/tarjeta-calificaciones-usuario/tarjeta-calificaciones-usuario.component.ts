import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-calificaciones-usuario',
  templateUrl: './tarjeta-calificaciones-usuario.component.html',
  styleUrls: ['./tarjeta-calificaciones-usuario.component.css']
})
export class TarjetaCalificacionesUsuarioComponent implements OnInit {

  @Input() usuario_id!: string;

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


// <Slider Script
//     <script>
//         var slider = document.getElementById("myRange");
//         var output = document.getElementById("demo");
//         output.innerHTML = slider.value; // Display the default slider value

//         // Update the current slider value (each time you drag the slider handle)
//         slider.oninput = function() {
//         output.innerHTML = this.value;
//         }
//     </script> 

//     <script>
//         var RGBChange = function() {
//             if (r.getValue() < 5) {
//               $('#demo').css('color', "rgb(0,255,0)")  
//             } 
            
//         };

//         var r = $('#myRange').slider()
//                 .on('slide', RGBChange)
//                 .data('slider');
//     </script>