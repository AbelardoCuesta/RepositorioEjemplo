import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioSignupComponent } from './usuario-signup/usuario-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [UsuarioLoginComponent, UsuarioSignupComponent],
  imports: [
    CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule
  ],
  exports: [UsuarioLoginComponent, UsuarioSignupComponent]
})
export class UsuarioModule { }
