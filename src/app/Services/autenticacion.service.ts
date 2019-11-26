import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { USUARIOS } from '../models/UsuariosConst';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

  constructor(
    private http: HttpClient
  ) {}

  getUsuario(usuario: string, password: string): Observable<Usuario>{
    return of(USUARIOS.find(usr => usr.usuario == usuario && usr.password == password));
  }

}
