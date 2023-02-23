import { Component } from '@angular/core';
import { Emprendimiento } from 'src/app/models/emprendimiento/emprendimiento';
import { OnInit } from '@angular/core';
import { EmprendimientoService } from 'src/app/services/emprendimiento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-emprendimiento',
  templateUrl: './ver-emprendimiento.component.html',
  styleUrls: ['./ver-emprendimiento.component.css']
})

export class VerEmprendimientoComponent {
  emprendimiento: any
  emprendimientoId: any ;
  constructor(private empService:EmprendimientoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit():void{
    this.route.paramMap.subscribe(params => { 
      
      this.emprendimientoId = params.get('id');
      this.empService.getEmprendimiento(this.emprendimientoId).subscribe(emp => {
        this.emprendimiento = emp
      });
    
    });
    
  }

  back(): void {
    this.router.navigate(["home"]);
  }

}
