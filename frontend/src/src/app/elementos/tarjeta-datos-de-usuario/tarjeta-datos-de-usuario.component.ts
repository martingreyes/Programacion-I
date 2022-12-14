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
  @Input() id!: string;
  @Input() alias!: string;
  usuario_id!: string;
  modificarForm: any;

  

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
      this.datos_usuario = data;
    }
    )

    this.modificarForm = this.formBuilder.group({
      alias: ["",Validators.required],
      contra: ["", Validators.required]
    })

  }

    
  submit() {
      let alias = this.modificarForm.value.alias
      let contra = this.modificarForm.value.contra

      let token = localStorage.getItem("token") || undefined 

      let datos = {}

      console.log("Alias original: ", this.alias) 
      console.log("Alias new: ", alias)
      console.log("Contra new: ", contra)  
      
      
      if (alias !== "" &&  contra === "") {
        datos = {"alias": alias}
      } 
      
      if (alias === "" &&  contra !== "") {
        datos = {"contra": contra}
      }
      
      if (alias !== "" &&  contra !== "") {
        datos = {"alias": alias, "contra": contra}
      }

      console.log("DATOS: ", datos)

      this.postActualizarUsuarioService.putUsuario(datos, token, Number(this.usuario_id)).subscribe()


      console.log("Contenido enviado");  
      alert("Usuario Actualizado!")

      if (this.getDecodedAccessToken(localStorage.getItem("token")).admin){
        console.log("VOLVIENDO a ListaUsuarios")
        this.router.navigate(["ListaUsuarios/1"]) 
      } else {
        console.log("VOLVIENDO a perfilGrilla")
        this.router.navigate(["PerfilGrilla/" + this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id.toString()+ "/1"])
      }
  
  }

  cancelar() {
    if (this.getDecodedAccessToken(localStorage.getItem("token")).admin){
      console.log("VOLVIENDO a ListaUsuarios")
      this.router.navigate(["ListaUsuarios/1"]) 
    } else {
      console.log("VOLVIENDO a perfilGrilla")
      this.router.navigate(["PerfilGrilla/" + this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id.toString()+ "/1"])
    }
  }
  

  getDecodedAccessToken(token: any): any {
    try {
      return jwt_decode(token);
            // "admin"
            // "usuario_id"
            // "correo":
            // alias
    } catch(Error) {
      return null;
    }
  }

}
