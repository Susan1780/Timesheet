import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './shared/components/features/attendance/attendance.component';
import { MyProfileComponent } from './shared/components/features/my-profile/my-profile.component';
import { TaskProgressComponent } from './shared/components/features/task-progress/task-progress.component';
import { TimeOutComponent } from './shared/components/features/time-out/time-out.component';

const routes: Routes = [
  {path:'attendance',component: AttendanceComponent},
  {path:'time-in',component:TimeOutComponent},
  {path:'task',component: TaskProgressComponent},
  {path:'profile',component: MyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
