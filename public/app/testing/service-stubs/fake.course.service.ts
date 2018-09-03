
import { Observable } from 'rxjs';
import { Course, Student, AdminStudent, _User } from '../../interfaces';
import { listOfCourses, listOfStudents, sampleInstr, instructorToAdd } from '../sample-data';

export class CourseServiceStub {
  private courses: Course[] = listOfCourses;
  private _instrAdd: AdminStudent = instructorToAdd;

  private _findCourse(courseNum: string): Course {
    let course = this.courses.find(h => h.courseNum === courseNum);
    return course;
  }
  private _findCourseIndex(courseNum: string): number {
    let courseIndex = this.courses.findIndex(h => h.courseNum === courseNum);
    return courseIndex;
  }

  listCourses(adminId: number): Observable<Course[]>{
    return Observable.of(this.courses)
  }

  createCourse(admin: number, body: any): Observable<Course>{
    if(body.courseNum === undefined){
      // return error
      return Observable.throw({message: 'Course num cannot be blank'});
    } else {
      let tmp: Course = <Course>body;
      this.courses.push(tmp);
      return Observable.of(tmp);
    }
  }

  getCourse(admin: number, courseNum: string): Observable<Course> {
    let course = this._findCourse(courseNum);
    if(course){
      return Observable.of(course);
    } else {
      return Observable.throw({message: 'Failed to load course '+courseNum});
    }
  }

  getStudents(adminId: number, courseNum: string): Observable<Student[]>{
    let students: Student[] = listOfStudents.filter((student)=>{
      return (student.course && student.course.courseNum === courseNum)
    });
    return Observable.of(students);
  }

  getPossibleInstructors(adminId: number, courseNum: string): Observable<AdminStudent[]>{
    return Observable.of([this._instrAdd]);;
  }

  addInstructor(adminId: number, courseNum: string, newInstrId: number): Observable<Course>{
    let course = this._findCourse(courseNum);
    let newIn = course.instructors.concat([this._instrAdd]);
    let newCourse: Course = {
      courseNum: course.courseNum,
      description: course.description,
      instructors: newIn
    }
    return Observable.of(newCourse);
  }

  editCourse(adminId: number, courseNum: string, body: any): Observable<Course>{
    let cIndex = this._findCourseIndex(courseNum);
    if(cIndex === -1){
      return Observable.throw('Course does not exist');
    }
    this.courses[cIndex].description = body.description;
    return Observable.of(this.courses[cIndex]);
  }

  deleteCourse(adminId: number, courseNum: string): Observable<any>{
    return Observable.of(true);
  }

  deleteStudents(adminId: number, courseNum: string): Observable<any> {
    return Observable.of(true);
  }

  getScenarioStatus(adminId: number, courseNum: string, scenId: string): Observable<Student[]>{
    let cIndex = this._findCourseIndex(courseNum);
    if(cIndex === -1){
      return Observable.throw({message: 'Failed to load course '+courseNum});
    }
    let students: Student[] = listOfStudents.filter((student)=>{
      return (student.course && student.course.courseNum === courseNum)
    });
    let x = students.map((student)=>{
      return { firstName: student.firstName, lastName: student.lastName,
             userId: student.userId, status: student.accessGranted[scenId]}
    });
    return Observable.of(x);
  }

  getCourseList(): Observable<any>{
    let tmp = this.courses.map((el, i)=>{return {courseNum: el.courseNum, id: 'id'+i}});
    return Observable.of(tmp);
  }
}
