
import { Component,ViewChild,ElementRef } from '@angular/core';
import 'slick-carousel';
import * as $ from 'jquery';

@Component({
  selector: 'app-proyecto-formativo',
  templateUrl: './proyecto-formativo.component.html',
  styleUrls: ['./proyecto-formativo.component.css']
})
export class ProyectoFormativoComponent {
  @ViewChild('slickElement') slickElement!: ElementRef;
  porcentajeNumericos: number[];
  colores: string[];

  constructor() {
    this.porcentajeNumericos = [1,5,10,20,30,40,50,60,70,80,90,100];
    this.colores = [];
    for (let i = 0; i < this.porcentajeNumericos.length; i++) {
      const currentPorcentaje = this.porcentajeNumericos[i];
      let currentColor = "";

      if (currentPorcentaje < 16.6) {
        currentColor = "#A92020";
      } else if (currentPorcentaje < 33.2 && currentPorcentaje > 16.6) {
        currentColor = "#F8762D";
      } else if (currentPorcentaje < 49.8 && currentPorcentaje > 33.2) {
        currentColor = "#C68F02";
      } else if (currentPorcentaje < 66.4 && currentPorcentaje > 49.8) {
        currentColor = "#C1A928";
      } else if (currentPorcentaje < 83.3 && currentPorcentaje > 66.4) {
        currentColor = "#8C9F15";
      } else if (currentPorcentaje <= 100 && currentPorcentaje > 83.3) {
        currentColor = "#54A920";
      }
      this.colores.push(currentColor);
    }
  }
  
  ngAfterViewChecked(): void {
    if (this.slickElement.nativeElement.children.length > 3) {
      $(this.slickElement.nativeElement).slick({
        rows: 3,
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
              rows: 3
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 2
            }
          },
          {
            breakpoint: 730,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 1
            }
          }
        ]
      });
    }
  }
  
}
