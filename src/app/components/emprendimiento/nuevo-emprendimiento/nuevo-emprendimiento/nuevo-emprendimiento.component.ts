import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from 'src/app/models/emprendimiento/emprendimiento';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EmprendimientoService } from 'src/app/services/emprendimiento.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-emprendimiento',
  templateUrl: './nuevo-emprendimiento.component.html',
  styleUrls: ['./nuevo-emprendimiento.component.css']
})
export class NuevoEmprendimientoComponent implements OnInit{
  emprendimiento: any;
  categorias: any
  myRadio = "0";
  checked = true
  ngOnInit() {
    this.categorias = ["ONG", "Arte"]
    this.emprendimiento = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      mostrarManguitosRecibidos: new FormControl('', [Validators.required]),
      mostrarTopDonadores: new FormControl(''),
      precioPorManguito: new FormControl('', [Validators.required]),
      twitter: new FormControl(''),
      instagram: new FormControl(''),
      facebook: new FormControl('')
    });
  }

  constructor(private authService: AuthService,  private emprendimientoService: EmprendimientoService,  private router: Router) { }

  confirmTest(datos: any){
    Swal.fire({
      title: '¿Está seguro que desea crear este Emprendimiento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(datos)
        this.emprendimientoService.nuevoEmprendimiento(datos).subscribe(() =>{
          Swal.fire(
            '¡Listo!',
            'Tu emprendimiento ha sido creado.',
            'success'
          )
          this.router.navigate(["home"]);

          });
      }
    })
  }
  onSubmit(){
    var datos= this.emprendimiento.value
    datos["usuario"] = {
      id: this.authService.obtenerIdUsuario()
    }
    this.confirmTest(datos)
    console.log(datos)
    }

}
