webpackJsonp([1],{922:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c};Object.defineProperty(t,"__esModule",{value:!0});const o=s(1),i=s(15),c=s(54),n=s(928),a=s(929),u=s(930),d=s(931),h=s(932),l=s(934),p=s(420),f=s(957),m=s(935);let b=class{};b=r([o.NgModule({imports:[c.SharedModule,i.RouterModule.forChild(f.CourseRoutes)],declarations:[n.CourseCreateComponent,a.CourseIndivComponent,u.CourseEditComponent,d.CourseListComponent,h.CourseScenarioComponent,l.CourseMendelScenarioComponent],entryComponents:[p.ConfirmDeleteDialogComponent],providers:[m.CourseResolver]})],b),t.CourseModule=b},926:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sortStudents=function(e,t){var s=e.lastName.toLowerCase().localeCompare(t.lastName.toLowerCase());return 0===s?e.firstName.toLowerCase().localeCompare(t.firstName.toLowerCase()):s}},928:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(15),n=s(122),a=s(17),u=s(53);let d=class{constructor(e,t,s,r){this._courseService=e,this._router=t,this._route=s,this._authService=r,this.errorMessage="",this.courseDetails={}}ngOnInit(){this.admin=this._authService.getUser()}createCourse(){""===this.courseDetails.courseNum?this.errorMessage="Course number is required":this.subscription=this._courseService.createCourse(this.admin.id,this.courseDetails).subscribe(e=>{this._router.navigate(["../",e.courseNum],{relativeTo:this._route})},e=>{this.errorMessage=u.readErrorMessage(e)})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}};d=r([i.Component({selector:"course-create",templateUrl:s(947),styleUrls:[s(948)]}),o("design:paramtypes",[n.CourseService,c.Router,c.ActivatedRoute,a.AuthenticationService])],d),t.CourseCreateComponent=d},929:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(15),n=s(27),a=s(122),u=s(121),d=s(65),h=s(17),l=s(53),p=s(949);let f=class{constructor(e,t,s,r,o,i){this._router=e,this._route=t,this._courseService=s,this._authService=r,this._scenarioService=o,this._mpedeScenarioService=i,this.students=[],this.errorMessage="",this.mpedeScenarios=Array(),this.quizes=Array(),this.discoveries=Array(),this.pathways=Array(),this.isDestroyed$=new n.Subject}ngOnInit(){let e=this._authService.getUser();this.paramObserver=this._route.params.subscribe(t=>{let s=t.courseNum;this._courseService.getCourse(e.id,s).takeUntil(this.isDestroyed$).subscribe(t=>{this.courseInfo=t,this._courseService.getStudents(e.id,s).takeUntil(this.isDestroyed$).subscribe(e=>{this.students=e.sort(p.sortStudents),this._scenarioService.listScenarios().takeUntil(this.isDestroyed$).subscribe(e=>{this.scenarios=e}),this._mpedeScenarioService.listScenarios().takeUntil(this.isDestroyed$).subscribe(e=>{this.mpedeOptions=e,this.mpedeOptions.forEach(e=>{"scenario"===e.scenType?this.mpedeScenarios.push(e):"quiz"===e.scenType?this.quizes.push(e):"discovery"===e.scenType?this.discoveries.push(e):"pathway"===e.scenType&&this.pathways.push(e)}),this.mpedeScenarios=this.mpedeScenarios.sort((e,t)=>e.ordOfScen<t.ordOfScen?-1:e.ordOfScen>t.ordOfScen?1:0),this.quizes=this.quizes.sort((e,t)=>e.ordOfScen<t.ordOfScen?-1:e.ordOfScen>t.ordOfScen?1:0),this.discoveries=this.discoveries.sort((e,t)=>e.ordOfScen<t.ordOfScen?-1:e.ordOfScen>t.ordOfScen?1:0),this.pathways=this.pathways.sort((e,t)=>e.ordOfScen<t.ordOfScen?-1:e.ordOfScen>t.ordOfScen?1:0)})})},e=>{this.errorMessage=l.readErrorMessage(e)})})}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};f=r([i.Component({selector:"course-indiv",templateUrl:s(950),styleUrls:[s(951)]}),o("design:paramtypes",[c.Router,c.ActivatedRoute,a.CourseService,h.AuthenticationService,u.CricketService,d.MendelpedeScenarioService])],f),t.CourseIndivComponent=f},930:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(15),n=s(70),a=s(27),u=s(122),d=s(17),h=s(420),l=s(926),p=s(53);let f=class{constructor(e,t,s,r,o){this._router=e,this._route=t,this._courseService=s,this._authService=r,this._modalService=o,this.errorMessage="",this.isDestroyed$=new a.Subject}ngOnInit(){this._admin=this._authService.getUser(),this.paramObserver=this._route.params.subscribe(e=>{let t=e.courseNum;this._courseService.getCourse(this._admin.id,t).takeUntil(this.isDestroyed$).subscribe(e=>{this.courseInfo=e,this._courseService.getPossibleInstructors(this._admin.id,t).takeUntil(this.isDestroyed$).subscribe(e=>{this.possibleInstr=e.sort(l.sortStudents)},e=>{this.errorMessage=p.readErrorMessage(e),this.possibleInstr=[]})},e=>{this.errorMessage=p.readErrorMessage(e)})})}onCancel(){this._router.navigate(["../"],{relativeTo:this._route})}update(){this._courseService.editCourse(this._admin.id,this.courseInfo.courseNum,this.courseInfo).takeUntil(this.isDestroyed$).subscribe(e=>{this._router.navigate(["../"],{relativeTo:this._route})},e=>{this.errorMessage=p.readErrorMessage(e)})}addInstructor(){this.selectedAdd&&this._courseService.addInstructor(this._admin.id,this.courseInfo.courseNum,this.selectedAdd).takeUntil(this.isDestroyed$).subscribe(e=>{this.courseInfo=e,this.possibleInstr=this.possibleInstr.filter(e=>e.userId!=this.selectedAdd)},e=>{this.errorMessage=p.readErrorMessage(e)})}deleteCourse(){const e=this._modalService.open(h.ConfirmDeleteDialogComponent,{size:"sm",windowClass:"delete-modal"});e.componentInstance.message="Are you sure you want to delete course "+this.courseInfo.courseNum+"?",e.result.then(e=>{"delete"===e&&this._callDeleteCourse()},e=>{})}_callDeleteCourse(){this._courseService.deleteCourse(this._admin.id,this.courseInfo.courseNum).takeUntil(this.isDestroyed$).subscribe(e=>{this._router.navigate(["/admin/courses"])},e=>{this.errorMessage=p.readErrorMessage(e)})}deleteCourseStudents(){const e=this._modalService.open(h.ConfirmDeleteDialogComponent,{size:"sm"});e.componentInstance.message="Are you sure you want to delete all students in course "+this.courseInfo.courseNum+"?",e.result.then(e=>{"delete"===e&&this._callDeleteCourseStudents()},e=>{})}_callDeleteCourseStudents(){this._courseService.deleteStudents(this._admin.id,this.courseInfo.courseNum).takeUntil(this.isDestroyed$).subscribe(e=>{this._router.navigate(["/admin/courses/",this.courseInfo.courseNum])},e=>{this.errorMessage=p.readErrorMessage(e)})}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};f=r([i.Component({selector:"course-edit",templateUrl:s(952),styleUrls:[s(953)]}),o("design:paramtypes",[c.Router,c.ActivatedRoute,u.CourseService,d.AuthenticationService,n.NgbModal])],f),t.CourseEditComponent=f},931:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(122),n=s(17);let a=class{constructor(e,t){this._courseService=e,this._authService=t}ngOnInit(){let e=this._authService.getUser();this.subscription=this._courseService.listCourses(e.id).subscribe(e=>{this.courses=e})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}};a=r([i.Component({selector:"course-list",templateUrl:s(954)}),o("design:paramtypes",[c.CourseService,n.AuthenticationService])],a),t.CourseListComponent=a},932:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(15),n=s(27),a=s(122),u=s(121),d=s(17),h=s(419),l=s(53);let p=class{constructor(e,t,s,r,o,i){this._router=e,this._route=t,this._authService=s,this._courseService=r,this._studentService=o,this._scenarioService=i,this.students=[],this.errorMessage="",this.isDestroyed$=new n.Subject}ngOnInit(){this.admin=this._authService.getUser(),this.paramObserver=this._route.params.subscribe(e=>{let t=e.courseNum,s=e.scenId;this.courseNum=t.toUpperCase(),this._scenarioService.getScenario(s).takeUntil(this.isDestroyed$).subscribe(e=>{this.scenario=e,this._courseService.getScenarioStatus(this.admin.id,t,s).takeUntil(this.isDestroyed$).subscribe(e=>{this.students=e},e=>{this.errorMessage=l.readErrorMessage(e)})},e=>{this.errorMessage=l.readErrorMessage(e)})})}formatAccess(e){return e?"Access granted":"Access not granted"}grantAccess(e){let t=this.scenario.scenCode,s=this.students[e].userId;this._studentService.grantScenAccess(this.admin.id,s,t,!0).takeUntil(this.isDestroyed$).subscribe(s=>{void 0!==s&&null!==s&&(this.students[e].status=s.accessGranted[t])},e=>{this.errorMessage=l.readErrorMessage(e)})}goToFridge(e){this._router.navigate(["/admin/students/",e,"cricket",this.scenario.scenCode])}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};p=r([i.Component({selector:"course-scen",templateUrl:s(955),styleUrls:[s(933)]}),o("design:paramtypes",[c.Router,c.ActivatedRoute,d.AuthenticationService,a.CourseService,h.StudentService,u.CricketService])],p),t.CourseScenarioComponent=p},933:function(e,t,s){e.exports=s.p+"public/app/admin/course/course-scenario/course-scenario.style.css"},934:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(15),n=s(27),a=s(122),u=s(65),d=s(17),h=s(419),l=s(53);let p=class{constructor(e,t,s,r,o,i){this._router=e,this._route=t,this._authService=s,this._courseService=r,this._studentService=o,this._scenarioService=i,this.students=[],this.errorMessage="",this.isDestroyed$=new n.Subject}ngOnInit(){this.admin=this._authService.getUser(),this.paramObserver=this._route.params.subscribe(e=>{let t=e.courseNum,s=e.scenShortCode;this.courseNum=t.toUpperCase(),this._scenarioService.getScenario(s).takeUntil(this.isDestroyed$).subscribe(e=>{this.scenario=e,this._courseService.getMendelScenarioStatus(this.admin.id,t,s).takeUntil(this.isDestroyed$).subscribe(e=>{this.students=e},e=>{this.errorMessage=l.readErrorMessage(e)})},e=>{this.errorMessage=l.readErrorMessage(e)})})}formatAccess(e){return e?"Access granted":"Access not granted"}goToFridge(e){this._router.navigate(["/admin/students/",e,"mendelpede",this.scenario.shortCode])}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};p=r([i.Component({selector:"course-scen",templateUrl:s(956),styleUrls:[s(933)]}),o("design:paramtypes",[c.Router,c.ActivatedRoute,d.AuthenticationService,a.CourseService,h.StudentService,u.MendelpedeScenarioService])],p),t.CourseMendelScenarioComponent=p},935:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(c=(i<3?o(c):i>3?o(t,s,c):o(t,s))||c);return i>3&&c&&Object.defineProperty(t,s,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),c=s(27),n=s(122),a=s(17);let u=class{constructor(e,t){this._courseService=e,this._authService=t}resolve(e,t){let s=this._authService.getUser();const r=e.params.courseNum;return r?this._courseService.getCourse(s.id,r):new c.Observable}};u=r([i.Injectable(),o("design:paramtypes",[n.CourseService,a.AuthenticationService])],u),t.CourseResolver=u},947:function(e,t,s){e.exports=s.p+"public/app/admin/course/course-create/course-create.template.html"},948:function(e,t,s){e.exports=s.p+"public/app/admin/course/course-create/course-create.style.css"},949:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var s in e)t.hasOwnProperty(s)||(t[s]=e[s])}(s(926))},950:function(e,t,s){e.exports=s.p+"public/app/admin/course/course-indiv/course-indiv.template.html"},951:function(e,t,s){e.exports=s.p+"public/app/admin/course/course-indiv/course-indiv.style.css"},952:function(e,t,s){e.exports=s.p+"public/app/admin/course/course-edit/course-edit.template.html"},953:function(e,t,s){e.exports=s.p+"public/app/admin/course/course-edit/course-edit.style.css"},954:function(e,t,s){e.exports=s.p+"public/app/admin/course/course-list/course-list.template.html"},955:function(e,t,s){e.exports=s.p+"public/app/admin/course/course-scenario/course-scenario.template.html"},956:function(e,t,s){e.exports=s.p+"public/app/admin/course/course-mendel-scenario/course-mendel-scenario.template.html"},957:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s(935),o=s(185),i=s(186),c=s(928),n=s(929),a=s(930),u=s(931),d=s(932),h=s(934);t.CourseRoutes=[{path:"",children:[{path:"create",component:c.CourseCreateComponent,data:{breadcrumbs:"Create new course"}},{path:":courseNum",resolve:{course:r.CourseResolver},data:{breadcrumbs:"{{course.courseNum}}"},children:[{path:"edit",component:a.CourseEditComponent},{path:":scenId",component:d.CourseScenarioComponent,resolve:{scenario:o.ScenarioResolver},data:{breadcrumbs:"{{ scenario.label }}"}},{path:"mendelpede/:scenShortCode",component:h.CourseMendelScenarioComponent,resolve:{mendelpedeScenario:i.MendelpedeScenarioResolver},data:{breadcrumbs:"{{ mendelpedeScenario.label }}"}},{path:"",component:n.CourseIndivComponent}]},{path:"",component:u.CourseListComponent}]}]}});