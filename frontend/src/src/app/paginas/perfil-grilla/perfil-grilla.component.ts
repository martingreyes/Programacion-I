import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPerfilUsuarioService } from './../../servicios/post.service'
import { PostPoemasService } from './../../servicios/post.service'
import { PostUsuarioService } from './../../servicios/post.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';



@Component({
  selector: 'app-perfil-grilla',
  templateUrl: './perfil-grilla.component.html',
  styleUrls: ['./perfil-grilla.component.css']
})
export class PerfilGrillaComponent implements OnInit {
  usuario_id!: string;
  arrayDatos:any;
  num_paginas:any;
  pag_actual = 1;
  arrayPoemas:any;
  desde: string = "perfilGrilla";

  get reloadFunc() {
    return this.reload.bind(this);
  }
  
  reload() {
    window.location.reload()
  }

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private postPerfilUsuarioService: PostPerfilUsuarioService,
    private postUsuarioService: PostUsuarioService,
    private postPoemasService: PostPoemasService,

  ) { }

  ngOnInit(): void {
    this.usuario_id = this.route.snapshot.paramMap.get('id') || '';
    this.pag_actual = Number(this.route.snapshot.paramMap.get('pagina') || '1');

    if (this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id !== this.usuario_id) {
      this.usuario_id = this.getDecodedAccessToken(localStorage.getItem("token")).usuario_id
      this.router.navigate(["PerfilGrilla/" + this.usuario_id + "/1"])
    }
    
    this.postUsuarioService.getUsuario(this.usuario_id).subscribe((data2:any) =>{
      console.log('JSON Usuario: ', data2);
      this.arrayDatos = data2;
    })
    
    this.postPerfilUsuarioService.getUsuarioPoema(this.pag_actual, this.usuario_id).subscribe((data:any) =>{
        console.log('JSON Poemas: ', data);
        this.arrayPoemas = data.Poemas;
        this.num_paginas = data.Total_de_paginas;
        this.pag_actual = data.Pagina_actual;
      }
    )

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
