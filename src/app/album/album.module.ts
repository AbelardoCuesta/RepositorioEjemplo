import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { AppHeaderModule } from '../app-header/app-header.module';
import { AlbumJoinCancionComponent } from './album-join-cancion/album-join-cancion.component';
import { AlbumCompartirComponent } from './album-compartir/album-compartir.component';
import { AlbumListCompartirComponent } from './album-list-compartir/album-list-compartir.component';
import { AlbumComentarioComponent } from './album-comentario/album-comentario.component';
import { ComentarioModule } from '../comentario/comentario.module';


@NgModule({
  declarations: [AlbumListComponent, AlbumDetailComponent, AlbumCreateComponent, AlbumEditComponent, AlbumJoinCancionComponent, AlbumCompartirComponent, AlbumListCompartirComponent, AlbumComentarioComponent],
  imports: [
    CommonModule, ReactiveFormsModule, AppHeaderModule, ComentarioModule
  ],
  exports:[AlbumListComponent, AlbumDetailComponent, AlbumCreateComponent, AlbumEditComponent, AlbumJoinCancionComponent, AlbumCompartirComponent, AlbumComentarioComponent]
})
export class AlbumModule { }
