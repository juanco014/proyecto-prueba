import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearSalaComponent } from './crear-sala/crear-sala.component';
import { DetalleSalaComponent } from './detalle-sala/detalle-sala.component';
import { ListarSalaComponent } from './listar-sala/listar-sala.component';
import { EditarSalaComponent } from './editar-sala/editar-sala.component';



@NgModule({
  declarations: [
    CrearSalaComponent,
    DetalleSalaComponent,
    ListarSalaComponent,
    EditarSalaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SalasModule { }
