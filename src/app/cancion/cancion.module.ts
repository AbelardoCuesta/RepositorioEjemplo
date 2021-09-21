import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionListComponent } from './cancion-list/cancion-list.component';
import { AppHeaderModule } from '../app-header/app-header.module';
import { CancionDetailComponent } from './cancion-detail/cancion-detail.component';
import { CancionCreateComponent } from './cancion-create/cancion-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CancionEditComponent } from './cancion-edit/cancion-edit.component';
import { CancionCompartirComponent } from './cancion-compartir/cancion-compartir.component'
import { CancionListCompartirComponent } from './cancion-list-compartir/cancion-list-compartir.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TimePipe } from '../utils/TimePipe';
import { ComentarioModule } from '../comentario/comentario.module';
import { CancionComentarioComponent } from './cancion-comentario/cancion-comentario.component';

@NgModule({
  declarations: [CancionListComponent, CancionDetailComponent, CancionCreateComponent, CancionEditComponent, CancionCompartirComponent,CancionListCompartirComponent,CancionComentarioComponent, TimePipe],
  imports: [
    CommonModule, AppHeaderModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, ComentarioModule
  ],
  exports:[CancionListComponent, CancionDetailComponent, CancionCreateComponent, CancionEditComponent, CancionCompartirComponent,CancionListCompartirComponent]
})
export class CancionModule { }
