import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TaskProgressComponent } from './task-progress/task-progress.component';
import { TimeInTimeOutComponent } from './time-in-time-out/time-in-time-out.component';

export const routes: Routes = [
  {path:'attendance',component: AttendanceComponent},
  {path:'time-in',component:TimeInTimeOutComponent},
  {path:'task',component: TaskProgressComponent},
  {path:'profile',component: MyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
