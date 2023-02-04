import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogRoutingModule } from './log-routing.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TaskProgressComponent } from './task-progress/task-progress.component';
import { MaterialModule } from '../shared/material.module';
import { TimeInTimeOutComponent } from './time-in-time-out/time-in-time-out.component';

@NgModule({
  declarations: [ 
    AttendanceComponent,
    TaskProgressComponent,
    MyProfileComponent,
    TimeInTimeOutComponent
  ],
  imports: [
    CommonModule,
    LogRoutingModule,
    MaterialModule
  ]
})
export class LogModule { }
