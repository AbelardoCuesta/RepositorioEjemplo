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

@NgModule({
  declarations: [CancionListComponent, CancionDetailComponent, CancionCreateComponent, CancionEditComponent, CancionCompartirComponent,CancionListCompartirComponent],
  imports: [
    CommonModule, AppHeaderModule, ReactiveFormsModule
  ],
  exports:[CancionListComponent, CancionDetailComponent, CancionCreateComponent, CancionEditComponent, CancionCompartirComponent,CancionListCompartirComponent]
})
export class CancionModule { }
