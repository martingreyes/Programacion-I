import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './paginas/home/home.component'; 
import { HomeAdminComponent } from './paginas/home-admin/home-admin.component'; 
import { HomeUsuarioComponent } from './paginas/home-usuario/home-usuario.component'; 
import { CrearPoemaComponent } from './paginas/crear-poema/crear-poema.component';
import { CrearUsuarioComponent } from './paginas/crear-usuario/crear-usuario.component';
import { ListaUsuariosComponent } from './paginas/lista-usuarios/lista-usuarios.component';
import { ModificarDatosAdminComponent } from './paginas/modificar-datos-admin/modificar-datos-admin.component';
import { ModificarDatosComponent } from './paginas/modificar-datos/modificar-datos.component';
import { PerfilGrillaComponent } from './paginas/perfil-grilla/perfil-grilla.component';
import { PerfilListaComponent } from './paginas/perfil-lista/perfil-lista.component';
import { PerfilAjenoComponent } from './paginas/perfil-ajeno/perfil-ajeno.component';
import { PerfilAjenoAdminComponent } from './paginas/perfil-ajeno-admin/perfil-ajeno-admin.component';
import { PerfilAjenoUsuarioComponent } from './paginas/perfil-ajeno-usuario/perfil-ajeno-usuario.component';
import { VerPoemaComponent } from './paginas/ver-poema/ver-poema.component';
import { VerPoemaAdminComponent } from './paginas/ver-poema-admin/ver-poema-admin.component';
import { VerPoemaUsuarioComponent } from './paginas/ver-poema-usuario/ver-poema-usuario.component'; 
import { AuthsessionGuard } from './guardianes/authsession.guard';
import { AdminGuardGuard } from './guardianes/admin-guard.guard';

// Distintas pag dependiendo del link (path)

//TODO Ver a que paginas ponemos guardianes, 
//? En las paginas que tengan guardianes activados si no estas logueado (sin token) te redirije a Home/1
const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'Home/:pagina', component: HomeComponent },
  { path: 'HomeAdmin/:pagina', component: HomeAdminComponent, canActivate:[AdminGuardGuard]},
  { path: 'HomeUsuario/:id/:pagina', component: HomeUsuarioComponent, canActivate: [AuthsessionGuard]},

  { path: 'CrearPoema', component: CrearPoemaComponent, canActivate: [AuthsessionGuard] },
  { path: 'CrearUsuario', component: CrearUsuarioComponent},

  { path: 'ListaUsuarios', component: ListaUsuariosComponent, canActivate:[AdminGuardGuard]}, 
  
  { path: 'ModificarDatosAdmin/:id', component: ModificarDatosAdminComponent, canActivate:[AdminGuardGuard]},
  { path: 'ModificarDatos/:id', component: ModificarDatosComponent , canActivate: [AuthsessionGuard]},

  { path: 'PerfilGrilla/:id', component: PerfilGrillaComponent, canActivate: [AuthsessionGuard] },
  { path: 'PerfilLista/:id', component: PerfilListaComponent, canActivate: [AuthsessionGuard] },


  { path: 'PerfilAjeno/:id', component: PerfilAjenoComponent },
  { path: 'PerfilAjenoUsuario/:id', component: PerfilAjenoUsuarioComponent , canActivate: [AuthsessionGuard]},
  { path: 'PerfilAjenoAdmin/:id', component: PerfilAjenoAdminComponent, canActivate: [AdminGuardGuard] },

  { path: 'VerPoema/:id', component: VerPoemaComponent },
  { path: 'VerPoemaAdmin/:id', component: VerPoemaAdminComponent, canActivate: [AdminGuardGuard] },
  { path: 'VerPoemaUsuario/:id', component: VerPoemaUsuarioComponent , canActivate: [AuthsessionGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
