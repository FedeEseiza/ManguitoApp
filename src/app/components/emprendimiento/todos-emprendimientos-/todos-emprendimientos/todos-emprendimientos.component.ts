import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Emprendimiento } from 'src/app/models/emprendimiento/emprendimiento';
import { AuthService } from 'src/app/services/auth.service';
import { EmprendimientoService } from 'src/app/services/emprendimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos-emprendimientos',
  templateUrl: './todos-emprendimientos.component.html',
  styleUrls: ['./todos-emprendimientos.component.css']
})
export class TodosEmprendimientosComponent implements OnInit {
  public listEmprendimeintos: Array<Emprendimiento> = [];
  public emprendimientoActual: any;

  constructor(public authService:AuthService, private empService:EmprendimientoService, private router: Router){}

  ngOnInit():void{
    this.obtenerEmprendimientos()
    console.log(this.obtenerEmprendimientos())
    
  }

  obtenerEmprendimientos(){
    this.empService.getEmprendimientos().subscribe(res => {
      this.listEmprendimeintos = res  
    })
  }

  tieneEmprendimiento(id:string){
    var aux = false;
    this.obtenerEmprendimientos();
    
    this.listEmprendimeintos.forEach(element => {
      if (element.id_usuario == parseInt(id)){
        aux = true;
      }
    });
    return aux;
  }

  setearEmpActual(emp: Emprendimiento){
    this.emprendimientoActual = this.empService.getEmprendimiento(emp.id.toString());
  }
}
