import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/admin/categorias/categoria';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-administrar-categorias',
  templateUrl: './administrar-categorias.component.html',
  styleUrls: ['./administrar-categorias.component.css']
})
export class AdministrarCategoriasComponent {
  public listCategorias: Array<Categoria> = [];
  categoria: any;
  id= window.location.pathname.split("/").pop();
  actual : Categoria = {id: 9999999, nombre: "Example"} ;

  constructor(public authService: AuthService, private catService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCategorias()
    this.categoria = new FormGroup({
      nombre: new FormControl('', Validators.required)
    })
  }

  public obtenerCategorias() {
    this.catService.getCategorias().subscribe(res => {
      this.listCategorias = res;
    })
  }

  confirmTest(datos: any) {
    Swal.fire({
      title: '¿Está seguro que desea crear esta categoria?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(datos)
        this.catService.nuevaCategoria(datos).subscribe(() => {
          Swal.fire(
            '¡Listo!',
            'Tu categoria ha sido creada.',
            'success'
          )
          this.router.navigate(["administrar-categorias"]);

        });
      }
    })
  }

  confirmTestEdit(datos: any) {
    Swal.fire({
      title: '¿Está seguro que desea editar esta categoria?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(datos)
        this.catService.editarCategoria(datos).subscribe(() => {
          Swal.fire(
            '¡Listo!',
            'Tu categoria ha sido editada.',
            'success'
          )
          this.router.navigate(["administrar-categorias"]);
          this.obtenerCategorias()
        });
      }
    })
    
  }


  onSubmit() {
    var datos = this.categoria.value
    datos["usuario"] = {
      id: this.authService.obtenerIdUsuario()
    }
    this.confirmTest(datos)
    console.log(datos)
  }

  onSubmitEdit() {
    var datos = this.categoria.value
    datos["id"] = this.actual.id
    this.confirmTestEdit(datos)
    console.log(datos)
  }

  setearActual(item:Categoria){
    this.actual = item;
  }

}
