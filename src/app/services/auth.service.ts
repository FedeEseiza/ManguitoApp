import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Auth } from '../models/auth/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'login'

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
        this.router.navigate(["home"])
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
}
