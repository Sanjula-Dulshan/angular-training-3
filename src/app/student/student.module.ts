import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { EditStudentComponent } from './edit-student/edit-student.component';



@NgModule({
  declarations: [
    AddStudentComponent,
    ShowStudentsComponent,
    EditStudentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
