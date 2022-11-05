import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPoemasService } from './../../servicios/post.service';


@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {

  arrayPoemas:any;

  usuario_id!: string;
  desde: string = "homeUsuario";
  num_paginas:any;
  pag_actual:any;

  pagina!: number;

  constructor(
    private route:ActivatedRoute,
    private postPoemasService: PostPoemasService
  ) { }

  ngOnInit(): void {
    this.usuario_id = this.route.snapshot.paramMap.get('id') || ''; 
    this.pagina = Number(this.route.snapshot.paramMap.get('pagina') || '1'); 

    this.postPoemasService.getPoemas(this.pagina).subscribe((data:any) =>{
      console.log('JSON data: ', data);
    this.arrayPoemas = data.Poemas;
    this.num_paginas = data.Total_de_paginas;
    this.pag_actual = data.Pagina_actual;
  })

}








// private postService: PostService,
    
//     ) { }

//   ngOnInit(): void {

//   this.postService.getPoemas().subscribe((data:any) =>{
//       // console.log('JSON data PEPE: ', data);
//       this.arrayPoemas = data.data;
//     })

}