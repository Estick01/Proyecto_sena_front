import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { CompanyComponent } from './company/company.component';
import { SnotifyService } from 'ng-snotify';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CompanyComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutModule

  ],
  exports:[
    LoginComponent,
    CompanyComponent,
  ]
})
export class AuthModule { }
