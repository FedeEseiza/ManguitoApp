import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario/usuario';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit{
  usuario: any
  perfilActual: Usuario = { id: 999999, email:"", password:""}
  constructor(private usuarioService: UsuarioService, private router: Router){}

  ngOnInit(): void {
    this.usuario = new FormGroup({
      id: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])    
    })
    this.usuarioService.getDatos().subscribe(data => {
      this.usuario.patchValue(data)
    })
  }

  onSubmitEdit() {
    var datos = this.usuario.value
    this.confirmTestEdit(datos)
    console.log(datos)
  }

  confirmTestEdit(datos: any) {
    Swal.fire({
      title: '¿Está seguro que desea modificar su contraseña?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(datos)
        this.usuarioService.editarDatos(datos).subscribe(() => {
          Swal.fire(
            '¡Listo!',
            'Tu usuario ha sido editado.',
            'success'
          )
          this.router.navigate(["home"]);
        });
      }
    })
    
  }
}
