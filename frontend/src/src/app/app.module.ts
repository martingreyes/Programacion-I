import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// --------------------- Elementos --------------------- 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSinUsuarioComponent } from './elementos/menu-sin-usuario/menu-sin-usuario.component';
import { MenuConUsuarioComponent } from './elementos/menu-con-usuario/menu-con-usuario.component';
import { MenuAdminComponent } from './elementos/menu-admin/menu-admin.component';
import { PaginadoDePoemasComponent } from './elementos/paginado-de-poemas/paginado-de-poemas.component';
import { PaginadoDeCalificacionesComponent } from './elementos/paginado-de-calificaciones/paginado-de-calificaciones.component';
import { TarjetaCalificacionesComponent } from './elementos/tarjeta-calificaciones/tarjeta-calificaciones.component';
import { TarjetaPoemaChicaComponent } from './elementos/tarjeta-poema-chica/tarjeta-poema-chica.component';
import { TarjetaPoemaGrandeComponent } from './elementos/tarjeta-poema-grande/tarjeta-poema-grande.component';
import { CapsulaPoemaComponent } from './elementos/capsula-poema/capsula-poema.component';
import { CapsulaUsuarioComponent } from './elementos/capsula-usuario/capsula-usuario.component';
import { TarjetaCrearUsuarioComponent } from './elementos/tarjeta-crear-usuario/tarjeta-crear-usuario.component';
import { TarjetaCrearPoemaComponent } from './elementos/tarjeta-crear-poema/tarjeta-crear-poema.component';
import { TarjetaDatosDeUsuarioComponent } from './elementos/tarjeta-datos-de-usuario/tarjeta-datos-de-usuario.component';
import { FiltroComponent } from './elementos/filtro/filtro.component';

// --------------------- Paginas --------------------- 
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
import { CapsulaUsuarioPendienteComponent } from './elementos/capsula-usuario-pendiente/capsula-usuario-pendiente.component';
import { DatosPerfilUsuarioAjenoComponent } from './elementos/datos-perfil-usuario-ajeno/datos-perfil-usuario-ajeno.component';
import { DatosPerfilUsuarioComponent } from './elementos/datos-perfil-usuario/datos-perfil-usuario.component';
import { VentanaCargarArchivoComponent } from './elementos/ventana-cargar-archivo/ventana-cargar-archivo.component';
import { TarjetaPoemaChicaPropioComponent } from './elementos/tarjeta-poema-chica-propio/tarjeta-poema-chica-propio.component';
import { TarjetaPoemaMedianaComponent } from './elementos/tarjeta-poema-mediana/tarjeta-poema-mediana.component';
import { ComentarioComponent } from './elementos/comentario/comentario.component';
import { TarjetaCalificacionesUsuarioComponent } from './elementos/tarjeta-calificaciones-usuario/tarjeta-calificaciones-usuario.component'; 

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { PaginadoDeUsuariosComponent } from './elementos/paginado-de-usuarios/paginado-de-usuarios.component';
import { TarjetaActualizarPoemaComponent } from './elementos/tarjeta-actualizar-poema/tarjeta-actualizar-poema.component';
import { ActualizarPoemaComponent } from './paginas/actualizar-poema/actualizar-poema.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuSinUsuarioComponent,
    MenuConUsuarioComponent,
    MenuAdminComponent,
    PaginadoDePoemasComponent,
    PaginadoDeCalificacionesComponent,
    TarjetaCalificacionesComponent,
    TarjetaPoemaChicaComponent,
    TarjetaPoemaGrandeComponent,
    CapsulaPoemaComponent,
    CapsulaUsuarioComponent,
    TarjetaCrearUsuarioComponent,
    TarjetaCrearPoemaComponent,
    TarjetaDatosDeUsuarioComponent,
    FiltroComponent,
    HomeUsuarioComponent,
    HomeAdminComponent,
    HomeComponent,
    CrearPoemaComponent,
    CrearUsuarioComponent,
    ListaUsuariosComponent,
    ModificarDatosAdminComponent,
    ModificarDatosComponent,
    PerfilGrillaComponent,
    PerfilListaComponent,
    PerfilAjenoComponent,
    PerfilAjenoAdminComponent,
    PerfilAjenoUsuarioComponent,
    VerPoemaComponent,
    VerPoemaAdminComponent,
    VerPoemaUsuarioComponent,
    CapsulaUsuarioPendienteComponent,
    DatosPerfilUsuarioAjenoComponent,
    DatosPerfilUsuarioComponent,
    VentanaCargarArchivoComponent,
    TarjetaPoemaChicaPropioComponent,
    TarjetaPoemaMedianaComponent,
    ComentarioComponent,
    TarjetaCalificacionesUsuarioComponent,
    PaginadoDeUsuariosComponent,
    TarjetaActualizarPoemaComponent,
    ActualizarPoemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
