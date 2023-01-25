import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/dashboard/navbar/navbar.component';
import { SidenavComponent } from './shared/components/dashboard/sidenav/sidenav.component';
import { TimeOutComponent } from './shared/components/features/time-out/time-out.component';
import { AttendanceComponent } from './shared/components/features/attendance/attendance.component';
import { TaskProgressComponent } from './shared/components/features/task-progress/task-progress.component';
import { MyProfileComponent } from './shared/components/features/my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidenavComponent,
    TimeOutComponent,
    AttendanceComponent,
    TaskProgressComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
