import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramaFormativoComponent } from 'src/app/Componentes/programa-formativo/programa-formativo.component';
import { ProyectoFormativoComponent } from 'src/app/Componentes/proyecto-formativo/proyecto-formativo.component';
import { layoutComponent } from './layout.component';
import { AreasComponent } from 'src/app/Componentes/areas/areas.component';
const routes: Routes = [

  {
  path:'',
    component:AreasComponent
  },
  {path:'areas',
   component : AreasComponent
  },
  {path:'proyecto_formativo',
   component : ProyectoFormativoComponent
  },
  {path:'programa_formativo',
   component : ProgramaFormativoComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
