import { Component, OnInit , Input} from '@angular/core';
import { AuthService } from './../../servicios/auth.service'
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  @Input() usuario_id!: string;

  constructor(
    private authService:AuthService,
    ) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.authService.logout()
  } 

}
