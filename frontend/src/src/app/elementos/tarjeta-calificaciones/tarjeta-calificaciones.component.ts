import { Component, OnInit, Input } from '@angular/core';
import { PostPoemaCalificacionService } from './../../servicios/post.service'

@Component({
  selector: 'app-tarjeta-calificaciones',
  templateUrl: './tarjeta-calificaciones.component.html',
  styleUrls: ['./tarjeta-calificaciones.component.css']
})
export class TarjetaCalificacionesComponent implements OnInit {

  @Input() poema_id!: string;

  arrayPoemaComentarios: any;


  constructor(
    private postPoemaCalificacionService: PostPoemaCalificacionService,
  ) { }

  ngOnInit(): void {    
    this.postPoemaCalificacionService.getPoemaCalificacion(this.poema_id).subscribe((data:any) =>{
        console.log('JSON data Calificaciones: ', data);
        this.arrayPoemaComentarios = data.calificaciones;
      }
    )
  }

}
