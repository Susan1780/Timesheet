import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogRoutingModule } from './log-routing.module';
import { TimeOutComponent } from './time-out/time-out.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TaskProgressComponent } from './task-progress/task-progress.component';

@NgModule({
  declarations: [
    TimeOutComponent,
    AttendanceComponent,
    TaskProgressComponent,
    MyProfileComponent,
  ],
  imports: [
    CommonModule,
    LogRoutingModule
  ]
})
export class LogModule { }
