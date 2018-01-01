import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { CourseService } from '../course.service';
//import { AuthenticationService } from '../../../authentication/authentication.service';

import { Course } from '../../../interfaces/course.interface';
import { Student } from '../../../interfaces/student.interface';

@Component({
  selector: 'course-indiv',
  templateUrl: 'app/admin/course/indiv/indiv.template.html',
  styleUrls: ['app/admin/course/indiv/indiv.style.css']
})

export class IndivComponent{

  private students: Student[] = [];
  private courseInfo: Course;
  private subscription: Subscription;
  private paramObserver: any;

  //private courseNum: string;
  private errorMessage: string = '';

  constructor(private _router: Router,
        private _route: ActivatedRoute,
               private _courseService: CourseService){
  }

  ngOnInit(){
    this.paramObserver = this._route.params.subscribe(params => {
            let course = params['courseNum'];

            this.subscription = this._courseService.getCourse(course).subscribe((info) => {
              console.log(info);
                //this.students = info.students;
              this.courseInfo = info;
            },
                (error) => {
              this.errorMessage = error.message;
            });
        });
  }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.subscription.unsubscribe();
  }

}
