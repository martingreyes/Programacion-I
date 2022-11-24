import { Component, OnInit } from '@angular/core';
import { PostUsuariosService } from './../../servicios/post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  arrayUsuarios:any;
  num_paginas:any;
  pag_actual:any;
  pagina!: number;
  token: any;

  get reloadFunc() {
    return this.reload.bind(this);
  }
  
  reload() {
    window.location.reload()
  }
  
  
  constructor(
    private route:ActivatedRoute,
    private postUsuariosService: PostUsuariosService,
    ) { }
    
    ngOnInit(): void {
    this.pagina = Number(this.route.snapshot.paramMap.get('pagina') || '1'); 
    this.token = localStorage.getItem("token") || undefined
    
    this.postUsuariosService.getUsuarios(this.token, this.pagina).subscribe((data:any) =>{
      console.log('JSON data: ', data);
      this.arrayUsuarios = data.Usuarios;
      this.num_paginas = data.Total_de_paginas;
      this.pag_actual = data.Pagina_actual;
    })
    }

}
