import { Component, OnInit } from '@angular/core';
import { PostUsuariosService } from './../../servicios/post.service';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  // arrayusuarios:any;
  arrayusuarios = [
    {usuario:"usuario1",
     email:"eperez@gmial.com"},

     {usuario:"usuario2",
     email:"martin@gmial.com"},

     {usuario:"usuario3",
     email:"facu@gmial.com"},

     {usuario:"usuario4",
     email:"luisma@gmial.com"},
  ]
  constructor(
    private postUsuariosService: PostUsuariosService
  ) { }

  ngOnInit(): void {

    // this.postUsuariosService.getUsuarios().subscribe((data:any) =>{
    //   console.log('JSON data: ', data);
    // this.arrayusuarios = data.data;})

  }

}
