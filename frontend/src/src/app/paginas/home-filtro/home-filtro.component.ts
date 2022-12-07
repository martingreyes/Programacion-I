import { Component, OnInit, Input } from '@angular/core';
import { PostPoemasFiltroService } from './../../servicios/post.service'
import { ActivatedRoute } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home-filtro',
  templateUrl: './home-filtro.component.html',
  styleUrls: ['./home-filtro.component.css']
})
export class HomeFiltroComponent implements OnInit {

  arrayPoemas:any;
  num_paginas:any;
  pag_actual:any;
  desde:any; 
  id:any;
  pagina!: number;
  filtro: any;
  login = false;
  admin = false;

  get reloadFunc() {
    return this.reload.bind(this);
  }
  
  reload() {
    window.location.reload()
  }

  constructor(
    private route:ActivatedRoute,
    private postPoemasFiltroService: PostPoemasFiltroService,
    ) { }
    
  
  ngOnInit(): void {

      
    this.pagina = Number(this.route.snapshot.paramMap.get('pagina') || '1'); 

    this.filtro = localStorage.getItem("filtropoema")

    console.log("++++++++++++++++++++++++++++", this.filtro)

    this.postPoemasFiltroService.postPoemasFiltro(this.filtro, this.pagina).subscribe((data:any) =>{
        console.log("DATA:", data)
        this.arrayPoemas = data.Poemas;
        this.num_paginas = data.Total_de_paginas;
        this.pag_actual = data.Pagina_actual;
        console.log("Array:", this.arrayPoemas)

      }
    )

    if (this.getDecodedAccessToken(localStorage.getItem("token")) !== null) {
      this.login = true
      this.admin = this.getDecodedAccessToken(localStorage.getItem("token")).admin
    }

  this.desde = "HomeFiltro"

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

