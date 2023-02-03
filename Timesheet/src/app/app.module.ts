import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeOutComponent } from './log/time-out/time-out.component';
import { AttendanceComponent } from './log/attendance/attendance.component';
import { TaskProgressComponent } from './log/task-progress/task-progress.component';
import { MyProfileComponent } from './log/my-profile/my-profile.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { LogModule } from './log/log.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    LogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
