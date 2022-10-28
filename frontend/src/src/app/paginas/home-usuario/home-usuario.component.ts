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
  // arrayPoemas = [
  //   {
  //     titulo:"Poema1",
  //     calificacion: 7,
  //     autor:"Autor 1",
  //     texto: "1Some quick example text to buildwea<br>2on the card title and make up<br>3the bulk of the card's content.",
  //     fecha: "DD/MM/YYYY"
  //   },
  //   {
  //     titulo:"Poema2",
  //     calificacion: 2,
  //     autor:"Autor 2",
  //     texto: "1Some quick example text to buildwea<br>2on the card title and make up<br>3the bulk of the card's content.",
  //     fecha: "22/12/2222"
  //   },
  //   {
  //     titulo:"Poema3",
  //     calificacion: 2,
  //     autor:"Autor 3",
  //     texto: "1Some quick example text to buildwea<br>2on the card title and make up<br>3the bulk of the card's content.",
  //     fecha: "22/12/2222"
  //   },
  //   {
  //     titulo:"Poema4",
  //     calificacion: 2,
  //     autor:"Autor 4",
  //     texto: "1Some quick example text to buildwea<br>2on the card title and make up<br>3the bulk of the card's content.",
  //     fecha: "22/12/2222"
  //   },
  //   {
  //     titulo:"Poema5",
  //     calificacion: 2,
  //     autor:"Autor 5",
  //     texto: "1Some quick example text to buildwea<br>2on the card title and make up<br>3the bulk of the card's content.",
  //     fecha: "22/12/2222"
  //   }
  // ]

  

  usuario_id!: string;

  constructor(
    private route:ActivatedRoute,
    private postPoemasService: PostPoemasService
  ) { }

  ngOnInit(): void {
    this.usuario_id = this.route.snapshot.paramMap.get('id') || ''; 

    this.postPoemasService.getPoemas().subscribe((data:any) =>{
      console.log('JSON data: ', data);
    this.arrayPoemas = data.data;
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