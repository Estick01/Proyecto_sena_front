import { Component,OnInit } from '@angular/core';
import { ProgramaModel } from 'src/app/shared/models/programa.model';
import { CoreService } from 'src/app/shared/services/core.service';
import { ProgramaService } from 'src/app/shared/services/programa.service';
import { UINotificationService } from 'src/app/shared/services/uinotification.service';

@Component({
  selector: 'app-programa-formativo',
  templateUrl: './programa-formativo.component.html',
  styleUrls: ['./programa-formativo.component.css']
})
export class ProgramaFormativoComponent  implements OnInit{
  filesPrograma :FileList | null = null;;
  protected showModalPrograma = false;
  programa: ProgramaModel | null = null;
  programas: ProgramaModel[] = [];

  constructor(
    private _uiNotificationService: UINotificationService,
    private _programaService: ProgramaService
  ) { }

  ngOnInit(): void {
    this.getPrograma(); 
    }
  getPrograma() {
    this._programaService.traerProgramas()
      .subscribe(programa => {
        this.programas = programa;
      }, error => {
        this._uiNotificationService.error("Error de conexión");
      });
    }
}
