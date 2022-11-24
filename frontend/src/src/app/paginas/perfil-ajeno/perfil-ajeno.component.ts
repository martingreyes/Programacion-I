import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPerfilUsuarioService } from './../../servicios/post.service'
import { PostUsuarioService } from './../../servicios/post.service'
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-perfil-ajeno',
  templateUrl: './perfil-ajeno.component.html',
  styleUrls: ['./perfil-ajeno.component.css']
})

export class PerfilAjenoComponent implements OnInit {
  
  usuario_id!: string;
  arrayPoemas:any;
  datos:any;

  login = false;
  admin = false;

  constructor(
    private route:ActivatedRoute,
    private postPerfilUsuarioService: PostPerfilUsuarioService,
    private postUsuarioService: PostUsuarioService
  ) { }

  
  ngOnInit(): void {
    this.usuario_id = this.route.snapshot.paramMap.get('id') || ''; 

    this.postPerfilUsuarioService.getUsuarioPoema(this.usuario_id).subscribe((data:any) =>{
      console.log("JSON data Poemas: ", data)
      this.arrayPoemas = data.poemas;
      }
    )
    
    this.postUsuarioService.getUsuario(this.usuario_id).subscribe((data:any) =>{
      console.log("JSON data datos usuarios: ", data)
      data.poemas = data.poemas.length
      this.datos = data;
      }
    )

    if (this.getDecodedAccessToken(localStorage.getItem("token")) !== null) {
      this.login = true
      this.admin = this.getDecodedAccessToken(localStorage.getItem("token")).admin
    }

    console.log("/ / / / / / / / / / / / / / / / login:", this.login)
    console.log("/ / / / / / / / / / / / / / / / admin:", this.admin)
  }

  getDecodedAccessToken(token: any): any {
    try {
      return jwt_decode(token);
            // "admin"
            // "usuario_id"
            // "correo"
           // "alias"
    } catch(Error) {
      return null;
    }
  }



}