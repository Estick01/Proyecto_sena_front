import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { CoreService } from './shared/services/core.service';
import { ServicioToggleService } from 'src/app/servicio-toggle.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logout() {
    window.location.href = '/login';
  }

  title = 'frontend_frabrica';
  constructor(
    private router: Router,
    public iconSet: IconSetService,
    private ToggleServis:ServicioToggleService 
  ) {
    // iconSet singleton
    iconSet.icons = { ...freeSet };
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.ToggleServis.ChaneColor.subscribe((style) => {
      if (style.classToAdd) {
        document.body.classList.add(style.classToAdd);
      }
      if (style.classToRemove) {
        document.body.classList.remove(style.classToRemove);
      }
    });
  }
}

