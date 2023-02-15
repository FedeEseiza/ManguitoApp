import { Component, Input } from '@angular/core';
import { Emprendimiento } from 'src/app/models/emprendimiento/emprendimiento';

@Component({
  selector: 'app-ver-emprendimiento',
  templateUrl: './ver-emprendimiento.component.html',
  styleUrls: ['./ver-emprendimiento.component.css']
})
export class VerEmprendimientoComponent {
  @Input() item : any;
}
