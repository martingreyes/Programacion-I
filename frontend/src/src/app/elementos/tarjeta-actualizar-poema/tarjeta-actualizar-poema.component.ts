import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { PostActualizarPoemaService } from './../../servicios/post.service'
import jwt_decode from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarjeta-actualizar-poema',
  templateUrl: './tarjeta-actualizar-poema.component.html',
  styleUrls: ['./tarjeta-actualizar-poema.component.css']
})

export class TarjetaActualizarPoemaComponent implements OnInit {
  token: any;
  usuario_id: any;
  modificarForm!: any;

  
  @Input() poema!: any;
  @Input() poema_id!: string;
  
  titulo: any
  
  constructor(
    private postActualizarPoemaService:PostActualizarPoemaService,
    private route:ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    ) {
  this.modificarForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      contenido: ["", Validators.required]
    })
      
      
    }
    
      
  ngOnInit(): void {
    // console.log('BBBBBBBBBBBBBBBBBBBBBB',this.poema.contenido)
    // console.log('AAAAAAAAAAAAAAAAAAAAAAAAA',this.)
  
  // this.modificarForm = this.formBuilder.group({
    //   titulo: ["", Validators.required],
    //   contenido: ["", Validators.required]
    // })
    
  }
  

  submit() {

    if(this.modificarForm.valid) {
      let titulo = this.modificarForm.value.titulo
      let contenido = this.modificarForm.value.contenido

      let token = localStorage.getItem("token") || undefined 


      console.log("DATOS: ", {titulo: titulo, contenido: contenido})

      this.postActualizarPoemaService.putPoema({titulo: titulo, contenido: contenido}, token, Number(this.poema_id)).subscribe()


      console.log("Contenido enviado");  
      alert("Poema Actualizado!")

      this.router.navigate(["PerfilGrilla/" + this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id.toString() + "/1"])
    }
}

cancelar() {
  this.router.navigate(["PerfilGrilla/" + this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id.toString() + "/1"])
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



