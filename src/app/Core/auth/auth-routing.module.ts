import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layoutComponent } from '../layout/layout.component';

const routes: Routes = [
  { path: 'inicio', 
    component:layoutComponent,
    loadChildren: () => import('../layout/layout.module').then(m => m.LayoutModule),
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
