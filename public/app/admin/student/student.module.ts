import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { StudentRouteModule } from './student.route.module';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentIndivComponent } from './student-indiv/student-indiv.component';
import { StudentFridgeComponent } from './student-fridge/student-fridge.component';
import { StudentPhageComponent } from './student-fridge/student-phage.component';
import { StudentNamePipe } from './student-name.pipe';

import { StudentResolver } from './student.resolver';

@NgModule({
  imports: [
    SharedModule,
    StudentRouteModule
  ],
  declarations: [
    StudentListComponent,
    StudentIndivComponent,
    StudentFridgeComponent,
    StudentPhageComponent,
    StudentNamePipe
  ],
  providers: [
    StudentResolver
  ]
})
export class StudentModule {}
