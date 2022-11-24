import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPerfilUsuarioService } from './../../servicios/post.service'
import { PostPoemasService } from './../../servicios/post.service'
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
  desde: string = "perfilGrilla";

  get reloadFunc() {
    return this.reload.bind(this);
  }
  
  reload() {
    window.location.reload()
  }

  constructor(
    private route:ActivatedRoute,
    private postPerfilUsuarioService: PostPerfilUsuarioService,
    private postUsuarioService: PostUsuarioService,
    private postPoemasService: PostPoemasService,

  ) { }

  ngOnInit(): void {
    this.usuario_id = this.route.snapshot.paramMap.get('id') || '';

    this.postPerfilUsuarioService.getUsuarioPoema(this.usuario_id).subscribe((data:any) =>{
      console.log("JSON Poemas: ", data)
      this.arrayPoemas = data.poemas;
      }
    )

    this.postUsuarioService.getUsuario(this.usuario_id).subscribe((data2:any) =>{
      console.log('JSON Usuario: ', data2);
      this.arrayDatos = data2;
  })

  this.postPoemasService.getPoemas(this.pagina).subscribe((data:any) =>{
    this.arrayPoemas = data.Poemas;
    this.num_paginas = data.Total_de_paginas;
    this.pag_actual = data.Pagina_actual;
  }
)

  }

}
