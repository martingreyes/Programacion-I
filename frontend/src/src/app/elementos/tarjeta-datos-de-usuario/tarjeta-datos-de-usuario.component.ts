import { Component, OnInit, Input } from '@angular/core';
import { PostUsuarioService } from './../../servicios/post.service'
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { PostActualizarUsuarioService } from './../../servicios/post.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { delay, timeout } from 'rxjs';


@Component({
  selector: 'app-tarjeta-datos-de-usuario',
  templateUrl: './tarjeta-datos-de-usuario.component.html',
  styleUrls: ['./tarjeta-datos-de-usuario.component.css']
})
export class TarjetaDatosDeUsuarioComponent implements OnInit {

  datos_usuario:any;
  disponibles:any; 
  @Input() id!: string;
  usuario_id!: string;
  modificarForm: any;
  pepe = "juan";

  constructor(
    private postUsuarioService: PostUsuarioService,
    private postActualizarUsuarioService:PostActualizarUsuarioService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.usuario_id = this.route.snapshot.paramMap.get('id') || ''; 
    this.postUsuarioService.getUsuario(this.id).subscribe((data:any) =>{
      console.log("JSON data datos usuarios: ", data)
      data.poemas = data.poemas.length
      this.datos_usuario = data;
      this.disponibles = Math.round(data.cantidad_calificacion / data.poemas)
    }
    )
  // "alias": "Pedro",
	// "usuario_id": 18,
	// "cantidad_poemas": 7,
	// "poemas": []
	// "correo": "pedro@gmail.com",
	// "Usuario_id": 18,
	// "Pendiente": true,
	// "Promedio_poema": 0,
	// "cantidad_calificacion": 0,
	// "calificaciones": []
    console.log("+++++++++++++++++ALIAS:++++++++++++++++++++", this.datos_usuario)
    
    
    
    this.modificarForm = this.formBuilder.group({

      alias: [this.pepe,Validators.required],
      contra: [, Validators.required]
    })

   
    
  }

    
  submit() {
      let alias = this.modificarForm.value.alias
      let contra = this.modificarForm.value.contra

      let token = localStorage.getItem("token") || undefined 
      console.log("Enviando el contenido: ",  {alias: alias, contra: contra});

      console.log("Con el token: ", token)
      this.postActualizarUsuarioService.putUsuario({alias: alias, contra: contra}, token, Number(this.usuario_id)).subscribe()
      console.log("Contenido enviado");  
      alert("Usuario Actualizado!")
      this.router.navigate(["ListaUsuarios"])
  }

  cancelar() {
    if (this.getDecodedAccessToken(localStorage.getItem("token")).admin){
      console.log("VOLVIENDO a ListaUsuarios")
      this.router.navigate(["ListaUsuarios"]) 
    } else {
      console.log("VOLVIENDO a perfilGrilla")
      this.router.navigate(["PerfilGrilla/" + this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id.toString()])
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
