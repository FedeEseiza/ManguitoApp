import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Categoria } from '../models/admin/categorias/categoria';


@Injectable({
    providedIn: 'root'
})

export class CategoriaService{
    endpoint: string = 'categoria/'
    constructor(private http: HttpClient, private authService:AuthService) { }

    public getCategorias():Observable<Array<Categoria>>{
        let url = environment.apiJava + this.endpoint + 'categorias';
        return this.http.get<Array<Categoria>>(url);
    }

    public nuevaCategoria(cat:Categoria):Observable<any>{
        let url = environment.apiJava + this.endpoint + 'nueva-categoria';
        return this.http.post(url,cat);
    }

    public editarCategoria(cat:Categoria):Observable<any>{
        let url = environment.apiJava + "categoria" + `/${cat.id}`;
        return this.http.put(url,cat);
    }

    public eliminarCategoria(idCategoria: String):Observable<any>{
        let url = environment.apiJava + "categoria" + `/${idCategoria}`;
        return this.http.delete(url)
    }
}