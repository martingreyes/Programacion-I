import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPoemaService } from './../../servicios/post.service'

@Component({
  selector: 'app-ver-poema-admin',
  templateUrl: './ver-poema-admin.component.html',
  styleUrls: ['./ver-poema-admin.component.css']
})
export class VerPoemaAdminComponent implements OnInit {

  usuario_id!: string;

  poema_id!: string;
  poema!: any;

  constructor(
    private route:ActivatedRoute,
    private postPoemaService: PostPoemaService,
  ) { }


  ngOnInit(): void {
    this.poema_id = this.route.snapshot.paramMap.get('id') || '';
    
    this.postPoemaService.getPoema(this.poema_id).subscribe((data:any) =>{
        console.log('JSON data: ', data);
        this.poema = data;
      }
    )
  }

  // arrayPoemas = [
  //   {
  //     titulo:"Poema1",
  //     calificacion: 7,
  //     autor:"Autor 1",
  //     texto: `1Some quick example text to buildwea
  //             2on the card title and make up
  //             3the bulk of the card's content.
  //             1Some quick example text to buildwea
  //             2on the card title and make up
  //             3the bulk of the card's content.
  //             1Some quick example text to buildwea
  //             2on the card title and make up
  //             3the bulk of the card's content.
  //             1Some quick example text to buildwea
  //             2on the card title and make up
  //             3the bulk of the card's content.
  //             1Some quick example text to buildwea
  //             2on the card title and make up
  //             3the bulk of the card's content.
  //             1Some quick example text to buildwea
  //             2on the card title and make up
  //             3the bulk of the card's content.
  //             1Some quick example text to buildwea
  //             2on the card title and make up
  //             3the bulk of the card's content.
  //             1Some quick example text to buildwea
  //             2on the card title and make up
  //             3the bulk of the card's content.`,
  //     fecha: "DD/MM/YYYY"
  //   }
  // ]

  // constructor(
  //   private route:ActivatedRoute
  // ) { }

  // ngOnInit(): void {
  //   this.usuario_id = this.route.snapshot.paramMap.get('id') || ''; 
  // }

}
