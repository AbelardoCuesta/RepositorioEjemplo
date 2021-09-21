import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { JwtHelperService } from "@auth0/angular-jwt";
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  helper = new JwtHelperService();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
    ) { }

  error: boolean = false

  ngOnInit() {
    if(this.usuarioService.isLoggedIn){
      const userId = localStorage.getItem('user');
      const token =  localStorage.getItem('token');
      this.router.navigate([`/albumes/${userId}/${token}`])
    }
  }

  onLogInUsuario(nombre: string, contrasena: string){
    this.error = false

    this.usuarioService.userLogIn(nombre, contrasena)
    .subscribe(res => {
      this.usuarioService.successLogin();
      const decodedToken = this.helper.decodeToken(res.token);
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('username', nombre);
      localStorage.setItem('user',decodedToken.sub)
      localStorage.setItem('token',res.token)
      this.router.navigate([`/albumes/${decodedToken.sub}/${res.token}`])
    },
    error => {
      this.error=true
    })
  }

}