import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Emprendimiento } from '../models/emprendimiento/emprendimiento';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmprendimientoService {
  endpoint: string = 'emprendimiento/emprendimientos'
  constructor(private http: HttpClient, private authService:AuthService) { }

  public getEmprendimientos(): Observable<Array<Emprendimiento>>{
    let url = environment.apiJava + this.endpoint;
    return this.http.get<Array<Emprendimiento>>(url);
  }
}
