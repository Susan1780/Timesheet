import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CoreRoutingModule } from './core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
