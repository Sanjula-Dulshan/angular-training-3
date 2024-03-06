import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrivateBaseComponent } from './private-base/private-base.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { PublicBaseComponent } from './public-base/public-base.component';

const routes: Routes = [
  {
    path: 'private',
    component: PrivateBaseComponent,
    children: [
      {
        path: 'student',
        loadChildren: () =>
          import('./student/student.module').then((m) => m.StudentModule),
      },
      {
        path: 'course',
        loadChildren: () =>
          import('./courses/courses.module').then((m) => m.CoursesModule),
      },
    ],
  },
  {
    path: 'public',
    component: PublicBaseComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  { path: '', redirectTo: 'public/login', pathMatch: 'full' },

  { path: '**', redirectTo: '/public/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
