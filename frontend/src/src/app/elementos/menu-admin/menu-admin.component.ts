import { Component, OnInit , Input} from '@angular/core';
import { AuthService } from './../../servicios/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  @Input() usuario_id!: string;

  constructor(
    private authService:AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  cerrarSesion(){

    this.router.navigate(["Home/1"])
    this.authService.logout()
  } 

}
