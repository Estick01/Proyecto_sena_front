import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ServicioToggleService } from 'src/app/servicio-toggle.service';
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
  @ViewChild('menu') public menu!: ElementRef;
  @ViewChild('modal') public modal!: ElementRef;
 

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
  ngAfterViewInit(): void {
    const liElements = this.modal.nativeElement.querySelectorAll('li');
    liElements.forEach((liElement: HTMLElement) => {
      liElement.addEventListener('click', () => {
        liElements.forEach((otherLi: HTMLElement) => {
          if (otherLi !== liElement) {
            otherLi.classList.remove('activa--li');
          }
        });
        liElement.classList.toggle('activa--li');
      });
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
  Activa_Menu() {
    const menuElement = this.menu.nativeElement;
    const modalElement = this.modal.nativeElement;
    const h4 = modalElement.querySelectorAll('h4') as HTMLElement[];
    const li = modalElement.querySelectorAll('li') as HTMLElement[];
    const ul = modalElement.querySelector('ul');

    const toggleMenu = () => {
      const isMenuActive = menuElement.classList.contains('bot--activa');
      if (isMenuActive) {
        menuElement.classList.remove('bot--activa');
        h4.forEach(h4 => h4.style.display = '');
        li.forEach(li => li.style.margin = '');
      } else {
        menuElement.classList.add('bot--activa');
        modalElement.style.left = '0';
        h4.forEach(h4 => h4.style.display = '');
        li.forEach(li => li.style.padding = '');
        li.forEach(li => li.style.margin = '');
        ul.style.alignItems = '';
      }
    };
    const clickListener = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      const isMenuClicked = menuElement.contains(targetElement);
      const isModalClicked = modalElement.contains(targetElement);
      if (!isMenuClicked && !isModalClicked) {
        toggleMenu();
        document.removeEventListener('click', clickListener);
      }
    };
    toggleMenu();
    document.addEventListener('click', clickListener);
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


