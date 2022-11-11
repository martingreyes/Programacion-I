import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPerfilUsuarioService } from './../../servicios/post.service'
import { PostUsuarioService } from './../../servicios/post.service';

@Component({
  selector: 'app-perfil-grilla',
  templateUrl: './perfil-grilla.component.html',
  styleUrls: ['./perfil-grilla.component.css']
})
export class PerfilGrillaComponent implements OnInit {
  usuario_id!: string;
  arrayDatos:any;
  num_paginas:any;
  pag_actual:any;
  pagina!: number;
  arrayPoemas:any;


  constructor(
    private route:ActivatedRoute,
    private postPerfilUsuarioService: PostPerfilUsuarioService,
    private postUsuarioService: PostUsuarioService,
  ) { }

  ngOnInit(): void {
    this.usuario_id = this.route.snapshot.paramMap.get('id') || '';

    this.postPerfilUsuarioService.getUsuarioPoema(this.usuario_id).subscribe((data:any) =>{
      console.log("JSON data Poemas: ", data)
      this.arrayPoemas = data.poemas;
      }
    )

    this.postUsuarioService.getUsuario(this.usuario_id).subscribe((data:any) =>{
      console.log('JSON data: ', data);
    this.arrayDatos = data;
    // this.num_paginas = data.Total_de_paginas;
    // this.pag_actual = data.Pagina_actual;
  })

  }

}
