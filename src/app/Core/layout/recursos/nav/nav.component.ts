import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ServicioToggleService } from 'src/app/servicio-toggle.service';
import { EmpresaModel } from 'src/app/shared/models/empresa.model';
import { PersonaModel } from 'src/app/shared/models/persona.model';
import { CoreService } from 'src/app/shared/services/core.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public sidebarMinimized = false;
  public persona: PersonaModel | null = null;
  @ViewChild('luna') public luna!: ElementRef;
  @ViewChild('sol') public sol!: ElementRef;
  @ViewChild('campana') public campana!: ElementRef;
  @ViewChild('option') public option!: ElementRef;

  public toggle: 'Dark' | 'Light' = 'Dark';

  constructor(
    private toggleService: ServicioToggleService,
    private coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.coreService.getUserAuthenticated();
    this.coreService.persona.subscribe((persona) => {
      this.persona = persona;
    });
  }
  optionsElen(){
    this.option.nativeElement.style.display ='none';
  }
  options(){
    this.option.nativeElement.style.display ='flex';

  }
  Toggle(): void {
    if (this.toggle === 'Dark') {
      this.toggle = 'Light';
      this.toggleService.ChaneColor.emit({ classToAdd: 'color-change' });
      this.luna.nativeElement.style.opacity = '0';
      this.sol.nativeElement.style.opacity = '1';
    } else {
      this.toggle = 'Dark';
      this.toggleService.ChaneColor.emit({ classToRemove: 'color-change' });
      this.luna.nativeElement.style.opacity = '1';
      this.sol.nativeElement.style.opacity = '0';
    }
  }
  logout(): void {
    window.location.href = '/login';
  }
  get Nombre() {
    return this.persona ? this.persona.nombre1 : '';
  }
  get Apellido() {
    return this.persona ? this.persona.apellido1 : '';
  }
  get imagen_perfil(){
    return this.persona ? this.persona.rutaFotoUrl: '';
  }
  
}


