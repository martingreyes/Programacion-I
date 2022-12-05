import { Component, OnInit, Input } from '@angular/core';
import { PostPoemaCalificacionService } from './../../servicios/post.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { PostCrearCalificacionService } from './../../servicios/post.service'
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-tarjeta-calificaciones-usuario',
  templateUrl: './tarjeta-calificaciones-usuario.component.html',
  styleUrls: ['./tarjeta-calificaciones-usuario.component.css']
})
export class TarjetaCalificacionesUsuarioComponent implements OnInit {

  // @Input() usuario_id!: string;
  alias: any;
  @Input() poema_id!: string;

  arrayPoemaComentarios: any;

  @Input() reload!: Function;

  calificacionForm: any;
  token: any;
  id: any;

  constructor(
    private postPoemaCalificacionService: PostPoemaCalificacionService,
    private postCrearCalificacionService:PostCrearCalificacionService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {    
    this.postPoemaCalificacionService.getPoemaCalificacion(this.poema_id).subscribe((data:any) =>{
        console.log('JSON data Calificaciones: ', data);
        this.arrayPoemaComentarios = data.calificaciones;
      }
    )
    
    this.alias = this.getDecodedAccessToken(localStorage.getItem("token")).alias

    this.calificacionForm = this.formBuilder.group({
      puntaje: ["", Validators.required],
      comentario: ["",Validators.required]
    })

  
  }

  submit() {
    if(this.calificacionForm.valid) {
      let poema_id = this.poema_id
      let puntaje = this.calificacionForm.value.puntaje
      let comentario = this.calificacionForm.value.comentario
      this.token = localStorage.getItem("token") || undefined
      
      console.log("Enviando el contenido: ", {poema_id: poema_id, puntaje: puntaje, comentario: comentario});
      console.log("Con el token: ", this.token)




      this.postCrearCalificacionService.postCalificacion({poema_id: poema_id, puntaje: puntaje, comentario: comentario},this.token).subscribe(
        (rta)=> {
          console.log("####################################### RTA", rta)
          alert("Comentario Publicado!")

        }, (error)=> {
          console.log("####################################### ERROR", error)
          if (error.error === 'No se permite comentar un poema propio' ) {
            alert('No Se permite comentar un poema propio')

          } else if (error.error === 'Ya comentaste este poema') {
            alert("Ya comentaste este poema")
          }


        }
      ) 
      
      console.log("Contenido enviado");  
      // this.reload()
      
      
    } else {
      console.log("Debe llenar todos los campos.")

    }








  }

  getDecodedAccessToken(token: any): any {
    try {
      return jwt_decode(token);
            // "admin": true,
            // "usuario_id": 14,
            // "correo": "elAdmin2@gmail.com"
    } catch(Error) {
      return null;
    }
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