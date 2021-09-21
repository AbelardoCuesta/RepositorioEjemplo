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
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';








@NgModule({
  declarations: [AlbumListComponent, AlbumDetailComponent, AlbumCreateComponent, AlbumEditComponent, AlbumJoinCancionComponent, AlbumCompartirComponent, AlbumListCompartirComponent, AlbumComentarioComponent],
  imports: [
    CommonModule, ReactiveFormsModule, AppHeaderModule, ComentarioModule, MatButtonModule, MatIconModule, MatTooltipModule, MatInputModule, MatFormFieldModule, MatSelectModule
  ],
  exports:[AlbumListComponent, AlbumDetailComponent, AlbumCreateComponent, AlbumEditComponent, AlbumJoinCancionComponent, AlbumCompartirComponent, AlbumComentarioComponent]
})
export class AlbumModule { }
