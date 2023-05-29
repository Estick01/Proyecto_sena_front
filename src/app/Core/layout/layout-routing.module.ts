import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramaFormativoComponent } from 'src/app/Componentes/programa-formativo/programa-formativo.component';
import { ProyectoFormativoComponent } from 'src/app/Componentes/proyecto-formativo/proyecto-formativo.component';
import { layoutComponent } from './layout.component';
const routes: Routes = [

  {
  path:'',
    component:ProgramaFormativoComponent
  },
  {path:'ProyectoFormativo',
   component : ProyectoFormativoComponent
  },   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
