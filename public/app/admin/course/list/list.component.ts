import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CourseService } from '../course.service';

import { Course } from '../../../interfaces/course.interface';

@Component({
    selector: 'course-list',
    templateUrl: './app/admin/course/list/list.template.html'
})
export class ListComponent implements OnInit, OnDestroy{
    private courses: Course[];
  private subscription: Subscription;

    constructor(private _courseService: CourseService) {

    }

    ngOnInit() {
      this.subscription = this._courseService.listCourses()
        .subscribe((courses) => {
        this.courses = courses
      });
    }

  ngOnDestroy(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }
}
