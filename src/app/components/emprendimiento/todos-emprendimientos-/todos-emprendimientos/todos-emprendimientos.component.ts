import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Emprendimiento } from 'src/app/models/emprendimiento/emprendimiento';
import { AuthService } from 'src/app/services/auth.service';
import { EmprendimientoService } from 'src/app/services/emprendimiento.service';

@Component({
  selector: 'app-todos-emprendimientos',
  templateUrl: './todos-emprendimientos.component.html',
  styleUrls: ['./todos-emprendimientos.component.css']
})
export class TodosEmprendimientosComponent implements OnInit {
  public listEmprendimeintos: Array<Emprendimiento> = [];

  constructor(public authService:AuthService, private empService:EmprendimientoService){}

  ngOnInit():void{
    this.obtenerEmprendimientos()
    console.log(this.obtenerEmprendimientos())
    
  }

  obtenerEmprendimientos(){
    this.empService.getEmprendimientos().subscribe(res => {
      this.listEmprendimeintos = res  
    })
  }
}
