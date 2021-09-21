import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderModule } from '../app-header/app-header.module';
import { ComentarioCreateComponent } from './comentario-create/comentario-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [  ComentarioCreateComponent],
  imports: [
    CommonModule, AppHeaderModule, ReactiveFormsModule
  ],
  exports:[ ComentarioCreateComponent]
})
export class ComentarioModule { }
