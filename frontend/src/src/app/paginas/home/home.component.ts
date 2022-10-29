import { Component, OnInit } from '@angular/core';
import { PostPoemasService } from './../../servicios/post.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayPoemas:any;

  constructor(
    private postPoemasService: PostPoemasService,
  ) { }

  ngOnInit(): void {

    this.postPoemasService.getPoemas().subscribe((data:any) =>{
        console.log('JSON data: ', data);
        this.arrayPoemas = data.Poemas;
      }
    )

  }

}