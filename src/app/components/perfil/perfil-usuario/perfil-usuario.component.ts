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
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
    this.usuarioService.getDatos().subscribe(data => {
      this.usuario.patchValue(data)
    })
  }

  onSubmit() {
    this.usuarioService.editarDatos(this.usuario.value).subscribe(
      () => {
        this.successUpdate();
        this.router.navigate(["home"])
      }
    )
  }

  successUpdate(){
    Swal.fire(
      'Actualizado!',
      'Usuario editado correctamente',
      'success'
    )
  }
}
