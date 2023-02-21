import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoRoutingModule } from './curso-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    CursoRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CursoModuleModule { }
