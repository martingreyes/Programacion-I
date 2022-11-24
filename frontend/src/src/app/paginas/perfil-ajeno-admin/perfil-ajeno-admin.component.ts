import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPerfilUsuarioService } from './../../servicios/post.service'
import { PostUsuarioService } from './../../servicios/post.service'

@Component({
  selector: 'app-perfil-ajeno-admin',
  templateUrl: './perfil-ajeno-admin.component.html',
  styleUrls: ['./perfil-ajeno-admin.component.css']
})
export class PerfilAjenoAdminComponent implements OnInit {
    usuario_id!: string;
    arrayPoemas:any;
    datos:any;
    
    constructor(
      private route:ActivatedRoute,
      private postPerfilUsuarioService: PostPerfilUsuarioService,
      private postUsuarioService: PostUsuarioService
    ) { }
  
    ngOnInit(): void {
      this.usuario_id = this.route.snapshot.paramMap.get('id') || ''; 
      
      this.postPerfilUsuarioService.getUsuarioPoema(this.usuario_id).subscribe((data:any) =>{
        console.log("JSON data Poemas: ", data)
        this.arrayPoemas = data.poemas;
        }
      )

      this.postUsuarioService.getUsuario(this.usuario_id).subscribe((data:any) =>{
        console.log("JSON data datos usuarios: ", data)
        data.poemas = data.poemas.length
        this.datos = data;
        }
      )
    }

  
}
