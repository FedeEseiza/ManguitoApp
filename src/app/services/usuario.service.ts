import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  endpoint: string = 'api/usuarios'
  constructor() { }
}
