import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Auth } from '../models/auth/auth';
import { Observable } from 'rxjs';
import { Emprendimiento } from '../models/emprendimiento/emprendimiento';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'login'
  aux: any

  simpleAlert(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ocurrió un error!',
    })
  }
  constructor(private http: HttpClient, private router: Router) { }
  public login(data: string){
    let url = environment.apiJava + this.endpoint;
    this.http.post<Auth>(url,data)
    .subscribe(
      data => {
        window.localStorage.setItem("id_usuario", data.user_id);
        window.localStorage.setItem("email", data.email);
        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("rol",data.rol);
        this.aux = this.obtenerEmprendimientoById(data.user_id).subscribe(res =>{});
        console.log("ACAAAAAAAAAAA " +this.aux);
        console.log(data);
        // this.obtenerEmprendimientoById(data.user_id).subscribe(res => {window.localStorage.setItem("emp",res)});
        console.log("En Auth service " + window.localStorage.getItem("emp"))
        this.router.navigate(["home"])
      },
      error => {
        if (error.status != 200){
          alert("El email o contraseña son incorrectos");
        }
      });
  }

  public logout(){
    window.localStorage.clear()
    this.router.navigate([""])
  }

  public obtenerToken(){
    return  window.localStorage.getItem("token")
  }

  public obtenerIdUsuario(){
    return  window.localStorage.getItem("id_usuario")
  }

  public obtenerEmailUsuario(){
    return  window.localStorage.getItem("email")
  }

  public existeToken(){
    return this.obtenerToken() != null
  }

  public obtenerRol(){
    return window.localStorage.getItem("rol");
  }

  public obtenerEmprendimientoById(emp_id:string){
    let url = environment.apiJava + 'emprendimiento' + `/${emp_id}`;
    return this.http.get<Emprendimiento>(url);
     
  }
}
