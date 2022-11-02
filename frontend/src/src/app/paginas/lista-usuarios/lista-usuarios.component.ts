import { Component, OnInit } from '@angular/core';
import { PostUsuariosService } from './../../servicios/post.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  arrayUsuarios:any
// arrayUsuarios=[
//   {
//     'usuario':'u1',
//     'email':'email`1'
//   }
//]

  constructor(
    private postUsuariosService: PostUsuariosService,
  ) { }

  ngOnInit(): void {

    this.postUsuariosService.getUsuarios().subscribe((data:any) =>{
      console.log('JSON data: ', data);
    this.arrayUsuarios = data.Usuarios;})

  }

}
