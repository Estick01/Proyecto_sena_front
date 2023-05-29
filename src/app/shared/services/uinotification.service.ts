import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SnotifyPosition, SnotifyService, SnotifyToastConfig } from 'ng-snotify';

@Injectable({
  providedIn: 'root'
})
export class UINotificationService {

  private config: SnotifyToastConfig = {
    
  };

  constructor(private snotifyService: SnotifyService) { }

  success(body: string, title: string = null!) {
    if (title || body) {
      this.snotifyService.success(body, title, this.config);
    } else {
      this.snotifyService.success(body, this.config);
    }
  }
  error(body: string, title: string = null!) {
    if (title) {
      this.snotifyService.error(body, title, this.config);
    } else {
      this.snotifyService.error(body, this.config);
    }
  }
  clearAll() {
    this.snotifyService.clear();
  }
}
