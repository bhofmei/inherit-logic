// fake course service used in testing
import { Observable } from 'rxjs/Observable';
import { Course } from '../../interfaces';
import { listOfCourses } from '../sample-data';

export class CourseServiceStub {
  private courses: Course[] = listOfCourses;

  listCourses(adminId: number): Observable<Course[]>{
    return Observable.of(this.courses)
  }

  createCourse(admin: number, body: any): Observable<Course>{
    if(body.courseNum === undefined){
      // return error
      return Observable.throw(new Error('this is an error'));
    } else {
      let tmp: Course = <Course>body;
      return Observable.of(tmp);
    }
  }

  getCourse(admin: number, courseNum: string): Observable<Course> {
    let course = this.courses.find(h => h.courseNum === courseNum);
    if(course){
      return Observable.of(course);
    } else {
      return Observable.throw({message: 'Failed to load course '+courseNum});
    }
  }

  getStudents(adminId: number, courseNum: string){
    return Observable.of([])
  }
}
