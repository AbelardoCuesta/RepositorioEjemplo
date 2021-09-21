import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaComponent } from './acerca/acerca.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AcercaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AcercaDeModule { }
