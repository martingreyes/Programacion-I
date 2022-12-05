import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { PostCrearPoemaService } from './../../servicios/post.service'
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-tarjeta-crear-poema',
  templateUrl: './tarjeta-crear-poema.component.html',
  styleUrls: ['./tarjeta-crear-poema.component.css']
})
export class TarjetaCrearPoemaComponent implements OnInit {
  
  poemaForm: any;
  token: any;
  id: any;

  @Input() titulo!: string;
  @Input() contenido!: string;


  constructor(
    private postCrearPoemaService:PostCrearPoemaService,

    private router: Router,
    private formBuilder: FormBuilder,

  ) {
    this.poemaForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      poema: ["", Validators.required]
      }
    )
  }
    
  ngOnInit(): void {
    this.id = this.getDecodedAccessToken(this.token).usuario_id
  }

  submit() {
    if(this.poemaForm.valid) {
      let poema = this.poemaForm.value.poema
      let titulo2 = this.poemaForm.value.titulo
      this.token = localStorage.getItem("token") || undefined
      console.log("Enviando el contenido: ", {titulo: titulo2, contenido: poema});
      console.log("Con el token: ", this.token)
      this.postCrearPoemaService.postPoema({titulo: titulo2, contenido: poema},this.token).subscribe(rta=>{
        console.log("++++++++++++++++++RESPUESTA: ", rta)
      }, error=>{
        console.log("+++++++++++++++++ERROR: ", error)
      })
      console.log("Contenido enviado");  
      alert("Poema Publicado!")
      this.router.navigate(["HomeUsuario/" + this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id.toString()+"/1"])
      
    } else {
      console.log("Debe llenar todos los campos.")
    }
  }


  cancelar() {
    if(this.poemaForm.valid) {
      this.router.navigate(["HomeUsuario/" + this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id.toString()+"/1"])

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



