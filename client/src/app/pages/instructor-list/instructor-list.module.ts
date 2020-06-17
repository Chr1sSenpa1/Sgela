import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorListComponent } from './instructor-list.component';
import { InstructorListRoutingModule } from './instructor-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    InstructorListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    InstructorListComponent
  ]
})
export class InstructorListModule { }
