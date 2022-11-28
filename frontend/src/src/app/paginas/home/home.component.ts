import { Component, OnInit } from '@angular/core';
import { PostPoemasService } from './../../servicios/post.service'
import { ActivatedRoute } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayPoemas:any;
  num_paginas:any;
  pag_actual:any;
  desde: string = "home";
  id:any;
  admin: any; 
  pagina!: number;


  constructor(
    private route:ActivatedRoute,
    private postPoemasService: PostPoemasService,
    ) { }
    
    ngOnInit(): void {
    this.pagina = Number(this.route.snapshot.paramMap.get('pagina') || '1'); 

    this.postPoemasService.getPoemas(this.pagina).subscribe((data:any) =>{
        this.arrayPoemas = data.Poemas;
        this.num_paginas = data.Total_de_paginas;
        this.pag_actual = data.Pagina_actual;
      }
    )
  }
}

