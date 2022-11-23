import { Component, OnInit } from '@angular/core';
import { PostUsuariosService } from './../../servicios/post.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  arrayUsuarios:any
  token: any

  get reloadFunc() {
    return this.reload.bind(this);
  }
  
  reload() {
    window.location.reload()
  }
  
  constructor(
    private postUsuariosService: PostUsuariosService,
    ) { }
    
    ngOnInit(): void {
      
    this.token = localStorage.getItem("token") || undefined
    
    this.postUsuariosService.getUsuarios(this.token).subscribe((data:any) =>{
      console.log('JSON data: ', data);
    this.arrayUsuarios = data.Usuarios;})

  }

}
