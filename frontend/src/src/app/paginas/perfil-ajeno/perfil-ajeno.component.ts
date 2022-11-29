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
  num_paginas:any;
  pag_actual = 1;
  desde: string = "perfilAjeno";

  

  login = false;
  admin = false;

  constructor(
    private route:ActivatedRoute,
    private postPerfilUsuarioService: PostPerfilUsuarioService,
    private postUsuarioService: PostUsuarioService
  ) { }

  
  ngOnInit(): void {
    this.usuario_id = this.route.snapshot.paramMap.get('id') || ''; 
    this.pag_actual = Number(this.route.snapshot.paramMap.get('pagina') || '1');


    this.postPerfilUsuarioService.getUsuarioPoema(this.pag_actual, this.usuario_id).subscribe((data:any) =>{
      console.log('JSON Poemas: ', data);
      this.arrayPoemas = data.Poemas;
      this.num_paginas = data.Total_de_paginas;
      this.pag_actual = data.Pagina_actual;
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