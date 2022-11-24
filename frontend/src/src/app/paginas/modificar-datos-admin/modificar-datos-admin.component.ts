import { Component, OnInit, Input } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { PostActualizarUsuarioService } from './../../servicios/post.service'
import { ActivatedRoute } from '@angular/router';
import { PostUsuarioService } from './../../servicios/post.service';



@Component({
  selector: 'app-modificar-datos-admin',
  templateUrl: './modificar-datos-admin.component.html',
  styleUrls: ['./modificar-datos-admin.component.css']
})
export class ModificarDatosAdminComponent implements OnInit {

  // usuarioForm: any
  usuario_id!: string;
  token: any;
  arrayDatos:any;
  
  @Input() usuario!: string;

  constructor(
  
    private postActualizarUsuarioService:PostActualizarUsuarioService,
    private postUsuarioService: PostUsuarioService,
    private router: Router,
    // private formBuilder: FormBuilder,  
    private route:ActivatedRoute

  ) {}
  
  ngOnInit(): void {
    this.usuario_id = this.route.snapshot.paramMap.get('id') || '';

    this.postUsuarioService.getUsuario(this.usuario_id).subscribe((data:any) =>{
      console.log('JSON data: ', data);
      this.arrayDatos = data;
  })

    // this.usuarioForm = this.formBuilder.group({
    //   alias: [this.usuario, Validators.required],
    //   contra: [, Validators.required],
    // })
  }

  // submit() {
  //   if(this.usuarioForm.valid) {
  //     let alias = this.usuarioForm.value.alias
  //     let contra = this.usuarioForm.value.contra
  //     let admin = this.usuarioForm.value.admin
  //     this.token = localStorage.getItem("token") || undefined 
      
  //     console.log("Enviando el contenido: ",  {alias: alias, contra: contra});
  //     console.log("Con el token: ", this.token)
  //     this.postActualizarUsuarioService.putUsuario({alias: alias, contra: contra},this.token, Number(this.usuario_id)).subscribe()
  //     console.log("Contenido enviado");  
  //     alert("Usuario Actualizado!")

  //     this.router.navigate(["ListaUsuarios/1"])
      
  //   } 
  // }

  

}
