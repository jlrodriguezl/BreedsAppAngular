import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';

import { AutenticacionService } from '../Services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public error: boolean = false;

  constructor(
    private autenticationService: AutenticacionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  Autenticar(){
    this.autenticationService.getUsuario(this.usuario.usuario, this.usuario.password)
      .subscribe(usuario => this.PermitirAcceso(usuario));
  }

  PermitirAcceso(usuario: Usuario){
    if(usuario!= null){
      this.usuario.tipoUsuario = usuario.tipoUsuario;
      this.router.navigate(['menu',this.usuario.tipoUsuario.toString()]);
    }
    else{
      this.error = true;
    }
  }
}
