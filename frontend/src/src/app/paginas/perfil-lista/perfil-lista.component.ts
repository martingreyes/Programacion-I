import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPerfilUsuarioService } from './../../servicios/post.service'
import { PostUsuarioService } from './../../servicios/post.service';

@Component({
  selector: 'app-perfil-lista',
  templateUrl: './perfil-lista.component.html',
  styleUrls: ['./perfil-lista.component.css']
})
export class PerfilListaComponent implements OnInit {
  usuario_id!: string;
  arrayDatos:any;
  num_paginas:any;
  pag_actual:any;
  pagina!: number;
  arrayPoemas:any;
  desde: string = "perfilLista";

  get reloadFunc() {
    return this.reload.bind(this);
  }
  
  reload() {
    window.location.reload()
  }

    // {
    //   titulo:"Poema1",
    //   calificacion: 7,
    //   autor:"Autor 1",
    //   texto: "1Some quick example text to buildwea<br>2on the card title and make up<br>3the bulk of the card's content.",
    //   fecha: "DD/MM/YYYY"
    // }


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
        this.num_paginas = data.Total_de_paginas;
        this.pag_actual = data.Pagina_actual;
    })
  
    }

}
