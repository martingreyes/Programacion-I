import { Component, OnInit } from '@angular/core';
import { PostPoemasService } from './../../servicios/post.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  arrayPoemas:any;
  num_paginas:any;
  pag_actual:any;
  desde: string = 'homeAdmin';
  
  pagina!: number;

  constructor(
    private route:ActivatedRoute,
    private postPoemasService: PostPoemasService,
  ) { }

  ngOnInit(): void {
    this.pagina = Number(this.route.snapshot.paramMap.get('pagina') || '1'); 
    this.postPoemasService.getPoemas(this.pagina).subscribe((data:any) =>{
        // console.log('JSON data: ', data);
        this.arrayPoemas = data.Poemas;
        this.num_paginas = data.Total_de_paginas;
        this.pag_actual = data.Pagina_actual;
      }
    )
  }

}


