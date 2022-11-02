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

// Distintas pag dependiendo del link (path)
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'HomeAdmin', component: HomeAdminComponent },
  { path: 'HomeUsuario/:id', component: HomeUsuarioComponent },
  { path: 'CrearPoema', component: CrearPoemaComponent },
  { path: 'CrearUsuario', component: CrearUsuarioComponent },
  { path: 'ListaUsuarios', component: ListaUsuariosComponent },
  { path: 'ModificarDatosAdmin', component: ModificarDatosAdminComponent },
  { path: 'ModificarDatos/:id', component: ModificarDatosComponent },
  { path: 'PerfilGrilla/:id', component: PerfilGrillaComponent },
  { path: 'PerfilLista/:id', component: PerfilListaComponent },
  { path: 'PerfilAjeno/:id', component: PerfilAjenoComponent },
  { path: 'PerfilAjenoAdmin/:id', component: PerfilAjenoAdminComponent },
  { path: 'PerfilAjenoUsuario/:id', component: PerfilAjenoUsuarioComponent },
  { path: 'VerPoema/:id', component: VerPoemaComponent },
  { path: 'VerPoemaAdmin/:id', component: VerPoemaAdminComponent },
  { path: 'VerPoemaUsuario/:id', component: VerPoemaUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
