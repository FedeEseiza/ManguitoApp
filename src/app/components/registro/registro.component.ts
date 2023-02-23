import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private userService: UsuarioService, private router: Router) { }

  onSubmit(data: string){
    this.userService.registrar(data)
    .subscribe(
      () => {

        this.router.navigate(["login"])
      },
      error => {
        if (error.status == 409){
          alert("El email ya existe");
        }else if (error.status == 403){
          alert("La contraseña no puede contener menos de 5 caracteres");
        }
      });
  }
}
