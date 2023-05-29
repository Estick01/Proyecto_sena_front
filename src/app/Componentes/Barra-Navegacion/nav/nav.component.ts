import { style } from '@angular/animations';
import { ViewEncapsulation } from '@angular/compiler';
import { ProgramaFormativoComponent } from '../../programa-formativo/programa-formativo.component';
import { Component, ViewChild ,Renderer2 ,ElementRef,ViewChildren, Input } from '@angular/core';
import { ServicioToggleService } from 'src/app/servicio-toggle.service';
var Toggle="Dark";
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  @ViewChild('luna') public luna!: ElementRef;
  @ViewChild('sol') public sol!: ElementRef;
  @ViewChild('campana') public campana!: ElementRef;
  
  constructor(private  ToggleServis:ServicioToggleService) {}
  Toggle() {
    if(Toggle == "Dark"){
      Toggle="Light"
      this.ToggleServis.ChaneColor.emit({ classToAdd: 'color-change' });
      this.luna.nativeElement.style.opacity = "0";
      this.sol.nativeElement.style.opacity = "1";
    }
    else{
      Toggle="Dark"
      this.ToggleServis.ChaneColor.emit({ classToRemove: 'color-change' });
      this.luna.nativeElement.style.opacity = "1";
      this.sol.nativeElement.style.opacity = "0";
    } 
    
  }
  
}
