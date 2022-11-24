import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { PostActualizarPoemaService } from './../../servicios/post.service'
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-tarjeta-actualizar-poema',
  templateUrl: './tarjeta-actualizar-poema.component.html',
  styleUrls: ['./tarjeta-actualizar-poema.component.css']
})

export class TarjetaActualizarPoemaComponent implements OnInit {
  token: any;
  usuario_id: any;
  modificarForm: any;


  @Input() poema!: any;
  @Input() poema_id!: string;

  constructor(
    private postActualizarPoemaService:PostActualizarPoemaService,

    private router: Router,
    private formBuilder: FormBuilder,
  ) { }



  ngOnInit(): void {
    this.usuario_id = this.getDecodedAccessToken(this.token).usuario_id

    console.log("+++++++++++++++++++++++++ POEMA:", this.poema)

    this.modificarForm = this.formBuilder.group({
      titulo: [this.poema.titulo, Validators.required],
      contenido: [this.poema.contenido, Validators.required]
      }
    )


  }


  submit() {
    let titulo = this.modificarForm.value.titulo
    let contenido = this.modificarForm.value.contenido

    let token = localStorage.getItem("token") || undefined 


    console.log("DATOS: ", {titulo: titulo, contenido: contenido})

    this.postActualizarPoemaService.putPoema({titulo: titulo, contenido: contenido}, token, Number(this.usuario_id)).subscribe()


    console.log("Contenido enviado");  
    alert("Poema Actualizado!")

    this.router.navigate(["VerPoemaUsuario/" + this.poema_id])
  
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



