import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-menu-sin-usuario',
  templateUrl: './menu-sin-usuario.component.html',
  styleUrls: ['./menu-sin-usuario.component.css']
})
export class MenuSinUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Acá van los scripts
  example(){
    alert("Hola papá")
  }

  // Estos son atributos de la clase MenuSinUsuarioComponent
  tipo = document.getElementById("password");
  num = 50;

  mostrarContrasena() {
    if (this.num === 50) {
      alert("entraste en el if " + this.tipo);
    } else {
      alert("entraste en el else");
    }
  }
  // var tipo = document.getElementById("password");
  // if(tipo.type == "password"){
  //     tipo.type = "text";
  // }else{
  //     tipo.type = "password";
  // }

}