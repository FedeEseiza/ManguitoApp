import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { NuevoEmprendimientoComponent } from './components/emprendimiento/nuevo-emprendimiento/nuevo-emprendimiento/nuevo-emprendimiento.component';

const routes: Routes = [
  {path: 'registro', component:RegistroComponent},
  {path : 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'nuevo-emprendimiento', component: NuevoEmprendimientoComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
