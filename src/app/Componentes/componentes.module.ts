import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { CoreModule } from '../Core/core.module';
import { ProgramaFormativoComponent } from 'src/app/Componentes/programa-formativo/programa-formativo.component';
import { GuiaMonitoreoColoresComponent } from 'src/app/Componentes/guia-monitoreo-colores/guia-monitoreo-colores.component';
import { ElipseInformationComponent } from 'src/app/Componentes/elipse-information/elipse-information.component';
import { FiltroSearchComponent } from 'src/app/Componentes/filtro-search/filtro-search.component';
import { DireccionComponent } from 'src/app/Componentes/Barra-Navegacion/direccion/direccion.component';
import { DescripcionComponent } from 'src/app/Componentes/descripcion/descripcion.component';
import { ChargeWheelComponent } from 'src/app/Componentes/charge-wheel/charge-wheel.component';
import { ProyectoFormativoComponent } from 'src/app/Componentes/proyecto-formativo/proyecto-formativo.component';
import { CoreService } from 'src/app/shared/services/core.service';
import { AreasComponent } from './areas/areas.component';



@NgModule({
  declarations: [
    ChargeWheelComponent,
    ProyectoFormativoComponent,
    ProgramaFormativoComponent,
    GuiaMonitoreoColoresComponent,
    ElipseInformationComponent,
    FiltroSearchComponent,
    DireccionComponent,
    DescripcionComponent,
    AreasComponent,
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
    CoreModule,

  ],
  exports:[
    ChargeWheelComponent,
    ProyectoFormativoComponent,
    ComponentesRoutingModule,
    ProgramaFormativoComponent,
    GuiaMonitoreoColoresComponent,
    ElipseInformationComponent,
    FiltroSearchComponent,
    DireccionComponent,
    DescripcionComponent,
  ]
})
export class ComponentesModule { }
