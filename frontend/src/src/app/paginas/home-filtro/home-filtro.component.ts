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
  desde: string = "home";
  id:any;
  pagina!: number;
  filtro!: string;

  login = false;
  admin = false;



  constructor(
    private route:ActivatedRoute,
    private postPoemasFiltroService: PostPoemasFiltroService,
    ) { }
    
  
  ngOnInit(): void {
      
    this.pagina = Number(this.route.snapshot.paramMap.get('pagina') || '1'); 
    this.filtro = this.route.snapshot.paramMap.get('filtro') || '';
    
    console.log("JAJAJAJAAJ", this.filtro)

    this.postPoemasFiltroService.postPoemasFiltro(this.filtro, this.pagina).subscribe((data:any) =>{
        this.arrayPoemas = data.Poemas;
        this.num_paginas = data.Total_de_paginas;
        this.pag_actual = data.Pagina_actual;
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

