import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from 'src/app/models/emprendimiento/emprendimiento';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EmprendimientoService } from 'src/app/services/emprendimiento.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from 'src/app/models/admin/categorias/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-editar-emprendimiento',
  templateUrl: './editar-emprendimiento.component.html',
  styleUrls: ['./editar-emprendimiento.component.css']
})
export class EditarEmprendimientoComponent implements OnInit{
  emprendimiento: any;
  emprendimientoActual: any
  emprendimientoId: any
  categorias: Array<Categoria> = []
  myRadio = "0";
  checked = true
  ngOnInit() {
    this.obtenerCategorias()
    this.route.paramMap.subscribe(params => {       
      this.emprendimientoId = params.get('id');
      this.emprendimientoService.getEmprendimiento(this.emprendimientoId).subscribe(emp => {
        this.emprendimientoActual= emp
      });
    
    });
    console.log("Editar Emprendimiento vista "+ this.emprendimientoActual);
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

  constructor(private authService: AuthService,  private emprendimientoService: EmprendimientoService,private route: ActivatedRoute,  private router: Router, private categoriaService:CategoriaService) { }

  confirmTestEdit(datos: any){
    Swal.fire({
      title: '¿Está seguro que desea editar este Emprendimiento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(datos)
        this.emprendimientoService.editarEmprendimiento(datos,this.emprendimientoId).subscribe(() =>{
          Swal.fire(
            '¡Listo!',
            'Tu emprendimiento ha sido editado.',
            'success'
          )
          this.router.navigate(["home"]);
          });
      }
    })
  }
  onEdit(){
    var datos= this.emprendimiento.value
    datos["usuario"] = {
      id: this.authService.obtenerIdUsuario()
    }
    this.confirmTestEdit(datos)
    console.log(datos)
    }
  
    obtenerCategorias(){
      this.categoriaService.getCategorias().subscribe(res => {
        this.categorias = res 
      })
    }
}
