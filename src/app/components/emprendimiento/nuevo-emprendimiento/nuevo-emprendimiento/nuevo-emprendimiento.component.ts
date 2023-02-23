import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from 'src/app/models/emprendimiento/emprendimiento';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EmprendimientoService } from 'src/app/services/emprendimiento.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/admin/categorias/categoria';

@Component({
  selector: 'app-nuevo-emprendimiento',
  templateUrl: './nuevo-emprendimiento.component.html',
  styleUrls: ['./nuevo-emprendimiento.component.css']
})
export class NuevoEmprendimientoComponent implements OnInit{
  emprendimiento: any;
  categorias: Array<Categoria> = []
  myRadio = "0";
  checked = true
  ngOnInit() {
    this.obtenerCategorias();
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

  constructor(private authService: AuthService,  private emprendimientoService: EmprendimientoService,  private router: Router, private categoriaService:CategoriaService) { }

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
          window.localStorage.setItem("emp",datos);
          this.router.navigate(["home"]);

          },
          error => {
            if (error.status == 400){
              alert("Ya existe un emprendimiento con ese nombre");
            }
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

  obtenerCategorias(){
    this.categoriaService.getCategorias().subscribe(res => {
      this.categorias = res 
    })
  }

}
