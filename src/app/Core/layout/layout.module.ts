import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule} from './layout-routing.module';
import { ProgramaFormativoComponent } from 'src/app/Componentes/programa-formativo/programa-formativo.component';
import { GuiaMonitoreoColoresComponent } from 'src/app/Componentes/guia-monitoreo-colores/guia-monitoreo-colores.component';
import { ElipseInformationComponent } from 'src/app/Componentes/elipse-information/elipse-information.component';
import { FiltroSearchComponent } from 'src/app/Componentes/filtro-search/filtro-search.component';
import { DireccionComponent } from 'src/app/Componentes/Barra-Navegacion/direccion/direccion.component';
import { DescripcionComponent } from 'src/app/Componentes/descripcion/descripcion.component';
import { FooterComponent } from './recursos/footer/footer.component';
import { NavComponent } from './recursos/nav/nav.component';
import { layoutComponent } from './layout.component';
import { ProyectoFormativoComponent } from 'src/app/Componentes/proyecto-formativo/proyecto-formativo.component';
import { CoreService } from 'src/app/shared/services/core.service';
import { ComponentesModule } from 'src/app/Componentes/componentes.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    layoutComponent, 
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
    ComponentesModule
  ],
  exports:[
    layoutComponent,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
