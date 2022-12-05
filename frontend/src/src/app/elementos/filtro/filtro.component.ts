import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  filtroForm: any;
  token: any;
  filtro = ""

  get reloadFunc() {
    return this.reload.bind(this);
  }
  
  reload() {
    window.location.reload()
  }

  constructor(
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private router: Router,
  )  {
    this.filtroForm = this.formBuilder.group({
      titulobox: [false, Validators.required],
      titulo: ["", Validators.required],
      autorbox: [false, Validators.required],
      autor: ["", Validators.required],
      promediobox: [false, Validators.required],
      promedio: ["", Validators.required],
      fechabox: [false, Validators.required],
      fecha: ["", Validators.required],
      fecha_asc: [false, Validators.required],
      fecha_des: [false, Validators.required],
      titulo_asc: [false, Validators.required],
      titulo_des: [false, Validators.required],
      promedio_asc: [false, Validators.required],
      promedio_des: [false, Validators.required],                      
      }
    )
  }

  ngOnInit(): void {
  }


  submit() {

      let titulobox = this.filtroForm.value.titulobox
      let titulo = this.filtroForm.value.titulo

      if (titulobox) {
        this.filtro = this.filtro + "titulo=" + titulo + "&"
      }
      
      let autorbox = this.filtroForm.value.autorbox
      let autor = this.filtroForm.value.autor
      
      if (autorbox) {
      this.filtro = this.filtro + "autor=" + autor + "&"
      }


      let promediobox = this.filtroForm.value.promediobox
      let promedio = this.filtroForm.value.promedio

      if (promediobox) {
        this.filtro = this.filtro + "promedio=" + promedio + "&"
        }
      
      let fechabox = this.filtroForm.value.fechabox
      let fecha = this.filtroForm.value.fecha
      

      if (fecha) {
        this.filtro = this.filtro + "fecha=" + fecha + "&"
        }

        
      //Ordenar por
      let fecha_asc = this.filtroForm.value.fecha_asc
      if (fecha_asc) {
        this.filtro = this.filtro + "ordenar_por=fecha&"
        }
      
      let fecha_des = this.filtroForm.value.fecha_des
      if (fecha_des) {
        this.filtro = this.filtro + "ordenar_por=fecha[desc]&"
        }

      let titulo_asc = this.filtroForm.value.titulo_asc
      if (titulo_asc) {
        this.filtro = this.filtro + "ordenar_por=titulo&"
        }

      let titulo_des = this.filtroForm.value.titulo_des
      if (titulo_des) {
        this.filtro = this.filtro + "ordenar_por=titulo[desc]&"
        }

      let promedio_asc = this.filtroForm.value.promedio_asc
      if (promedio_asc) {
        this.filtro = this.filtro + "ordenar_por=calificacion&"
        }
        
      let promedio_des = this.filtroForm.value.promedio_des
      if (promedio_des) {
        this.filtro = this.filtro + "ordenar_por=calificacion[desc]&"
        }

      console.log("FILTRO:", this.filtro)

      this.router.navigate(["HomeFiltro/1/" + this.filtro])

  }


}


