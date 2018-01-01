import { Component } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';
import { CourseService } from './course.service';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

@Component({
  selector: 'course-cmp',
  templateUrl: 'app/admin/course/course.template.html'
})

export class CourseComponent{

}
