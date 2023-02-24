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

  public nuevoEmprendimiento(emp: Emprendimiento): Observable<any>{
    let url = environment.apiJava + 'emprendimiento'
    return this.http.post(url, emp)
  }

  public getEmprendimiento(id: string){
    let url = environment.apiJava + `emprendimiento/${id}`;
    return this.http.get<Emprendimiento>(url)
  }

  public editarEmprendimiento(emp:Emprendimiento, id:string): Observable<any>{
    let url = environment.apiJava + `emprendimiento/editar-emprendimiento/${id}`;
    return this.http.put(url,emp)
  }
}
