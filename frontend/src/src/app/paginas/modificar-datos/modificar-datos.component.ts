import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostActualizarUsuarioService } from './../../servicios/post.service'
import { ActivatedRoute } from '@angular/router';
import { PostUsuarioService } from './../../servicios/post.service';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.css']
})


export class ModificarDatosComponent implements OnInit {
  usuario_id!: string;
  token: any;
  arrayDatos:any;
  


  constructor(
    private postActualizarUsuarioService:PostActualizarUsuarioService,
    private postUsuarioService: PostUsuarioService,
    private router: Router,
    // private formBuilder: FormBuilder,  
    private route:ActivatedRoute
  ) { }

  
  ngOnInit(): void {
    this.usuario_id = this.route.snapshot.paramMap.get('id') || '';

    

    this.postUsuarioService.getUsuario(this.usuario_id).subscribe((data:any) =>{
      console.log('JSON data: ', data);
      this.arrayDatos = data;
  })
  }
}
