import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPoemaService } from './../../servicios/post.service'

@Component({
  selector: 'app-ver-poema',
  templateUrl: './ver-poema.component.html',
  styleUrls: ['./ver-poema.component.css']
})
export class VerPoemaComponent implements OnInit {

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
}
