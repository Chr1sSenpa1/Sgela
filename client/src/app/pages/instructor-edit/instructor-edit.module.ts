import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorEditComponent } from './instructor-edit.component';
import { InstructorEditRoutingModule } from './instructor-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    InstructorEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    InstructorEditComponent
  ]
})
export class InstructorEditModule { }
