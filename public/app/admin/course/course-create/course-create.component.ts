import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CourseService } from '../course.service';

@Component({
  selector: 'course-create-cmp',
  templateUrl: 'app/admin/course/course-create/course-create.template.html',
  styleUrls: ['app/admin/course/course-create/course-create.style.css']
})

export class CourseCreateComponent {
  private errorMessage: string = '';
  private subscription: Subscription;
  private courseDetails: any = {};

  constructor(
    private _courseService: CourseService,
    private _router: Router,
    private _route: ActivatedRoute
  ){}

  createCourse(){
    //let newCourse = this.courseDetails.courseNum;
    if(this.courseDetails.courseNum===''){
      this.errorMessage = 'Course number is required'
    } else {
      this.subscription = this._courseService
      .createCourse(this.courseDetails)
    .subscribe( (result)=>{
      this._router.navigate(['../', result.courseNum], {relativeTo: this._route})
    }, (err)=>{
      this.errorMessage = err.error.message;
    });
    }
  }

  ngOnDestory(){
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
