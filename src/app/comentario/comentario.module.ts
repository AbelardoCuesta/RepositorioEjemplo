import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderModule } from '../app-header/app-header.module';
import { ComentarioCreateComponent } from './comentario-create/comentario-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ComentarioListAlbumComponent } from './comentario-list-album/comentario-list-album.component'
import { ComentarioListCancionComponent } from './comentario-list-cancion/comentario-list-cancion.component';
@NgModule({
  declarations: [  ComentarioCreateComponent,ComentarioListAlbumComponent,ComentarioListCancionComponent],
  imports: [
    CommonModule, AppHeaderModule, ReactiveFormsModule
  ],
  exports:[ ComentarioCreateComponent,ComentarioListAlbumComponent,ComentarioListCancionComponent]
})
export class ComentarioModule { }
