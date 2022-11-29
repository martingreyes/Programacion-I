import { Component, OnInit } from '@angular/core';
import { PostUsuariosFiltroService } from './../../servicios/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios-filtro',
  templateUrl: './lista-usuarios-filtro.component.html',
  styleUrls: ['./lista-usuarios-filtro.component.css']
})
export class ListaUsuariosFiltroComponent implements OnInit {

  arrayUsuarios:any;
  num_paginas:any;
  pag_actual:any;
  pagina!: number;
  token: any;
  filtro!: string;
  desde = "ListaUsuariosFiltro"

  get reloadFunc() {
    return this.reload.bind(this);
  }
  
  reload() {
    window.location.reload()
  }
  
  
  constructor(
    private route:ActivatedRoute,
    private postUsuariosFiltroService: PostUsuariosFiltroService,
    ) { }
    
    ngOnInit(): void {
    this.pagina = Number(this.route.snapshot.paramMap.get('pagina') || '1'); 
    this.token = localStorage.getItem("token") || undefined  
    this.filtro = this.route.snapshot.paramMap.get('filtro') || '';
    console.log("<<<<<<<<<<<<<<<<VIEJO", this.filtro)

    console.log('>>>>>>>>>>>>>>>NUEVO',(decodeURIComponent(this.filtro)))
   
    this.postUsuariosFiltroService.postUsuariosFiltro(this.filtro, this.pagina).subscribe((data:any) =>{
      console.log('JSON data: ', data);
      this.arrayUsuarios = data.Usuarios;
      this.num_paginas = data.Total_de_paginas;
      this.pag_actual = data.Pagina_actual;
    
    })
    


      
    }


}





