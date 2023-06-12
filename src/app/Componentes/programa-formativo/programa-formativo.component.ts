import { Component,OnInit,ViewChild,ElementRef, AfterContentChecked} from '@angular/core';
import { ProgramaModel } from 'src/app/shared/models/programa.model';
import { CoreService } from 'src/app/shared/services/core.service';
import { ProgramaService } from 'src/app/shared/services/programa.service';
import { UINotificationService } from 'src/app/shared/services/uinotification.service';
import { ServicioToggleService } from 'src/app/servicio-toggle.service';
import 'slick-carousel';
import * as $ from 'jquery';

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
  @ViewChild('slickElement') slickElement!: ElementRef;


  constructor(
    private ToggleServis:ServicioToggleService,
    private _uiNotificationService: UINotificationService,
    private _programaService: ProgramaService,
    
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
  ngAfterViewChecked(): void {
    if (this.slickElement.nativeElement.children.length > 3) {
      $(this.slickElement.nativeElement).slick({
        rows: 5,
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:3,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              rows: 4
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 3
            }
          },
          {
            breakpoint: 630,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 2
            }
          }
        ]
      });
    }
  }
}