import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrearSalaComponent} from "./crear-sala/crear-sala.component";
import {DetalleSalaComponent} from "./detalle-sala/detalle-sala.component";
import {EditarSalaComponent} from "./editar-sala/editar-sala.component";
import {ListarSalasComponent} from "./listar-salas/listar-sala.component";

const routes: Routes = [
  {
    path: '',
    component: ListarSalasComponent
  },
  {
    path: 'listar',
    component: ListarSalasComponent
  },
  {
    path: 'crear',
    component: CrearSalaComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleSalaComponent
  },
  {
    path: 'editar/:id',
    component: EditarSalaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalasRoutingModule { }
