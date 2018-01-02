import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { CourseService } from '../course.service';
//import { AuthenticationService } from '../../../authentication/authentication.service';

import { Course } from '../../../interfaces/course.interface';
import { Student } from '../../../interfaces/student.interface';

@Component({
  selector: 'course-edit',
  templateUrl: 'app/admin/course/edit/edit.template.html',
  styleUrls: ['app/admin/course/edit/edit.style.css']
})

export class EditComponent{

  private courseInfo: Course;
  private subscription: Subscription;
  private subscription2: Subscription;
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
              this.courseInfo = info;
            },
                (error) => {
              this.errorMessage = error.message;
            });
        });
  }

  update(){
    this.subscription2 = this._courseService
      .editCourse(this.courseInfo.courseNum, this.courseInfo)
    .subscribe( (result)=>{
      // success
      this._router.navigate(['../'], {relativeTo: this._route})
    }, (err)=>{
      this.errorMessage = err.error.message;
    });
  }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.subscription.unsubscribe();
  }

}
