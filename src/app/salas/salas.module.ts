import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearSalaComponent } from './crear-sala/crear-sala.component';
import { DetalleSalaComponent } from './detalle-sala/detalle-sala.component';



@NgModule({
  declarations: [
    CrearSalaComponent,
    DetalleSalaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SalasModule { }
