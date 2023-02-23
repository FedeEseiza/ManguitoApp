import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenizerService } from './services/tokenizer.service';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { TodosEmprendimientosComponent } from './components/emprendimiento/todos-emprendimientos-/todos-emprendimientos/todos-emprendimientos.component';
import { NuevoEmprendimientoComponent } from './components/emprendimiento/nuevo-emprendimiento/nuevo-emprendimiento/nuevo-emprendimiento.component';
import { PerfilUsuarioComponent } from './components/perfil/perfil-usuario/perfil-usuario.component';
import { AdministrarCategoriasComponent } from './components/admin/administrar-categorias/administrar-categorias.component';
import { VerEmprendimientoComponent } from './components/emprendimiento/ver-emprendimiento/ver-emprendimiento.component';
import { EditarEmprendimientoComponent } from './components/emprendimiento/editar-emprendimiento/editar-emprendimiento.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    TodosEmprendimientosComponent,
    NuevoEmprendimientoComponent,
    PerfilUsuarioComponent,
    AdministrarCategoriasComponent,
    VerEmprendimientoComponent,
    EditarEmprendimientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: TokenizerService, multi:true},
    
  ],
  bootstrap: [AppComponent] /*Primer componente que se carga cuando se inicializa la app*/ 
})
export class AppModule { }
