import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './shared/components/features/attendance/attendance.component';
import { MyProfileComponent } from './shared/components/features/my-profile/my-profile.component';
import { TaskProgressComponent } from './shared/components/features/task-progress/task-progress.component';
import { TimeInTimeOutComponent } from './shared/components/features/time-in-time-out/time-in-time-out.component';

const routes: Routes = [
  {path:'attendance',component: AttendanceComponent},
  {path:'time-in',component:TimeInTimeOutComponent},
  {path:'task',component: TaskProgressComponent},
  {path:'profile',component: MyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
