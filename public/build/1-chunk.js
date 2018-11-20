webpackJsonp([1],{

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(15);
const shared_module_1 = __webpack_require__(54);
const course_create_component_1 = __webpack_require__(927);
const course_indiv_component_1 = __webpack_require__(928);
const course_edit_component_1 = __webpack_require__(929);
const course_list_component_1 = __webpack_require__(930);
const course_scenario_component_1 = __webpack_require__(931);
const course_mendel_scenario_component_1 = __webpack_require__(933);
const confirm_delete_dialog_component_1 = __webpack_require__(420);
const course_routes_1 = __webpack_require__(956);
const course_resolver_1 = __webpack_require__(934);
let CourseModule = class CourseModule {
};
CourseModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(course_routes_1.CourseRoutes)
        ],
        declarations: [
            course_create_component_1.CourseCreateComponent,
            course_indiv_component_1.CourseIndivComponent,
            course_edit_component_1.CourseEditComponent,
            course_list_component_1.CourseListComponent,
            course_scenario_component_1.CourseScenarioComponent,
            course_mendel_scenario_component_1.CourseMendelScenarioComponent
        ],
        entryComponents: [
            confirm_delete_dialog_component_1.ConfirmDeleteDialogComponent
        ],
        providers: [
            course_resolver_1.CourseResolver
        ]
    })
], CourseModule);
exports.CourseModule = CourseModule;


/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sortStudents = function (a, b) {
    var comparison = a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase());
    if (comparison === 0) {
        return a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase());
    }
    return comparison;
};


/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(15);
const course_service_1 = __webpack_require__(122);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(53);
let CourseCreateComponent = class CourseCreateComponent {
    constructor(_courseService, _router, _route, _authService) {
        this._courseService = _courseService;
        this._router = _router;
        this._route = _route;
        this._authService = _authService;
        this.errorMessage = '';
        this.courseDetails = {};
    }
    ngOnInit() {
        this.admin = this._authService.getUser();
    }
    createCourse() {
        if (this.courseDetails.courseNum === '') {
            this.errorMessage = 'Course number is required';
        }
        else {
            this.subscription = this._courseService
                .createCourse(this.admin.id, this.courseDetails)
                .subscribe((result) => {
                this._router.navigate(['../', result.courseNum], { relativeTo: this._route });
            }, (err) => {
                this.errorMessage = read_error_1.readErrorMessage(err);
            });
        }
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
CourseCreateComponent = __decorate([
    core_1.Component({
        selector: 'course-create',
        templateUrl: __webpack_require__(946),
        styleUrls: [__webpack_require__(947)]
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService])
], CourseCreateComponent);
exports.CourseCreateComponent = CourseCreateComponent;


/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(15);
const rxjs_1 = __webpack_require__(27);
const course_service_1 = __webpack_require__(122);
const cricket_service_1 = __webpack_require__(121);
const mendelpede_scenarios_service_1 = __webpack_require__(65);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(53);
const interfaces_1 = __webpack_require__(948);
let CourseIndivComponent = class CourseIndivComponent {
    constructor(_router, _route, _courseService, _authService, _scenarioService, _mpedeScenarioService) {
        this._router = _router;
        this._route = _route;
        this._courseService = _courseService;
        this._authService = _authService;
        this._scenarioService = _scenarioService;
        this._mpedeScenarioService = _mpedeScenarioService;
        this.students = [];
        this.errorMessage = '';
        this.mpedeScenarios = Array();
        this.quizes = Array();
        this.discoveries = Array();
        this.pathways = Array();
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        let admin = this._authService.getUser();
        this.paramObserver = this._route.params.subscribe(params => {
            let course = params['courseNum'];
            this._courseService.getCourse(admin.id, course)
                .takeUntil(this.isDestroyed$)
                .subscribe((info) => {
                this.courseInfo = info;
                this._courseService.getStudents(admin.id, course)
                    .takeUntil(this.isDestroyed$)
                    .subscribe((students) => {
                    this.students = students.sort(interfaces_1.sortStudents);
                    this._scenarioService.listScenarios()
                        .takeUntil(this.isDestroyed$)
                        .subscribe((scens) => {
                        this.scenarios = scens;
                    });
                    this._mpedeScenarioService.listScenarios().takeUntil(this.isDestroyed$)
                        .subscribe((scens) => {
                        this.mpedeOptions = scens;
                        this.mpedeOptions.forEach((option) => {
                            if (option.scenType === 'scenario') {
                                this.mpedeScenarios.push(option);
                            }
                            else if (option.scenType === 'quiz') {
                                this.quizes.push(option);
                            }
                            else if (option.scenType === 'discovery') {
                                this.discoveries.push(option);
                            }
                            else if (option.scenType === 'pathway') {
                                this.pathways.push(option);
                            }
                        });
                        this.mpedeScenarios = this.mpedeScenarios.sort((o1, o2) => {
                            if (o1.ordOfScen < o2.ordOfScen) {
                                return -1;
                            }
                            else if (o1.ordOfScen > o2.ordOfScen) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        });
                        this.quizes = this.quizes.sort((o1, o2) => {
                            if (o1.ordOfScen < o2.ordOfScen) {
                                return -1;
                            }
                            else if (o1.ordOfScen > o2.ordOfScen) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        });
                        this.discoveries = this.discoveries.sort((o1, o2) => {
                            if (o1.ordOfScen < o2.ordOfScen) {
                                return -1;
                            }
                            else if (o1.ordOfScen > o2.ordOfScen) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        });
                        this.pathways = this.pathways.sort((o1, o2) => {
                            if (o1.ordOfScen < o2.ordOfScen) {
                                return -1;
                            }
                            else if (o1.ordOfScen > o2.ordOfScen) {
                                return 1;
                            }
                            else {
                                return 0;
                            }
                        });
                    });
                });
            }, (error) => {
                this.errorMessage = read_error_1.readErrorMessage(error);
            });
        });
    }
    ngOnDestroy() {
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
CourseIndivComponent = __decorate([
    core_1.Component({
        selector: 'course-indiv',
        templateUrl: __webpack_require__(949),
        styleUrls: [__webpack_require__(950)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        course_service_1.CourseService,
        authentication_service_1.AuthenticationService,
        cricket_service_1.CricketService,
        mendelpede_scenarios_service_1.MendelpedeScenarioService])
], CourseIndivComponent);
exports.CourseIndivComponent = CourseIndivComponent;


/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(15);
const ng_bootstrap_1 = __webpack_require__(70);
const rxjs_1 = __webpack_require__(27);
const course_service_1 = __webpack_require__(122);
const authentication_service_1 = __webpack_require__(17);
const confirm_delete_dialog_component_1 = __webpack_require__(420);
const student_interface_1 = __webpack_require__(925);
const read_error_1 = __webpack_require__(53);
let CourseEditComponent = class CourseEditComponent {
    constructor(_router, _route, _courseService, _authService, _modalService) {
        this._router = _router;
        this._route = _route;
        this._courseService = _courseService;
        this._authService = _authService;
        this._modalService = _modalService;
        this.errorMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        this._admin = this._authService.getUser();
        this.paramObserver = this._route.params.subscribe(params => {
            let course = params['courseNum'];
            this._courseService.getCourse(this._admin.id, course)
                .takeUntil(this.isDestroyed$)
                .subscribe((info) => {
                this.courseInfo = info;
                this._courseService.getPossibleInstructors(this._admin.id, course)
                    .takeUntil(this.isDestroyed$)
                    .subscribe((instrs) => {
                    this.possibleInstr = instrs.sort(student_interface_1.sortStudents);
                }, (err2) => {
                    this.errorMessage = read_error_1.readErrorMessage(err2);
                    this.possibleInstr = [];
                });
            }, (error) => {
                this.errorMessage = read_error_1.readErrorMessage(error);
            });
        });
    }
    onCancel() {
        this._router.navigate(['../'], { relativeTo: this._route });
    }
    update() {
        this._courseService
            .editCourse(this._admin.id, this.courseInfo.courseNum, this.courseInfo)
            .takeUntil(this.isDestroyed$)
            .subscribe((result) => {
            this._router.navigate(['../'], { relativeTo: this._route });
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    addInstructor() {
        if (this.selectedAdd) {
            this._courseService
                .addInstructor(this._admin.id, this.courseInfo.courseNum, this.selectedAdd)
                .takeUntil(this.isDestroyed$)
                .subscribe((updated) => {
                this.courseInfo = updated;
                this.possibleInstr = this.possibleInstr.filter((elm) => {
                    return elm.userId != this.selectedAdd;
                });
            }, (err) => {
                this.errorMessage = read_error_1.readErrorMessage(err);
            });
        }
    }
    deleteCourse() {
        const modelRef = this._modalService.open(confirm_delete_dialog_component_1.ConfirmDeleteDialogComponent, { size: 'sm', windowClass: 'delete-modal' });
        modelRef.componentInstance.message = 'Are you sure you want to delete course ' + this.courseInfo.courseNum + '?';
        modelRef.result.then((result) => {
            if (result === 'delete') {
                this._callDeleteCourse();
            }
        }, (dismiss) => {
        });
    }
    _callDeleteCourse() {
        this._courseService.deleteCourse(this._admin.id, this.courseInfo.courseNum)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            this._router.navigate(['/admin/courses']);
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    deleteCourseStudents() {
        const modelRef = this._modalService.open(confirm_delete_dialog_component_1.ConfirmDeleteDialogComponent, { size: 'sm' });
        modelRef.componentInstance.message = 'Are you sure you want to delete all students in course ' + this.courseInfo.courseNum + '?';
        modelRef.result.then((result) => {
            if (result === 'delete') {
                this._callDeleteCourseStudents();
            }
        }, (dismiss) => {
        });
    }
    _callDeleteCourseStudents() {
        this._courseService.deleteStudents(this._admin.id, this.courseInfo.courseNum)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            this._router.navigate(['/admin/courses/', this.courseInfo.courseNum]);
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    ngOnDestroy() {
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
CourseEditComponent = __decorate([
    core_1.Component({
        selector: 'course-edit',
        templateUrl: __webpack_require__(951),
        styleUrls: [__webpack_require__(952)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        course_service_1.CourseService,
        authentication_service_1.AuthenticationService,
        ng_bootstrap_1.NgbModal])
], CourseEditComponent);
exports.CourseEditComponent = CourseEditComponent;


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const course_service_1 = __webpack_require__(122);
const authentication_service_1 = __webpack_require__(17);
let CourseListComponent = class CourseListComponent {
    constructor(_courseService, _authService) {
        this._courseService = _courseService;
        this._authService = _authService;
    }
    ngOnInit() {
        let admin = this._authService.getUser();
        this.subscription = this._courseService.listCourses(admin.id)
            .subscribe((courses) => {
            this.courses = courses;
        });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
CourseListComponent = __decorate([
    core_1.Component({
        selector: 'course-list',
        templateUrl: __webpack_require__(953)
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        authentication_service_1.AuthenticationService])
], CourseListComponent);
exports.CourseListComponent = CourseListComponent;


/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(15);
const rxjs_1 = __webpack_require__(27);
const course_service_1 = __webpack_require__(122);
const cricket_service_1 = __webpack_require__(121);
const authentication_service_1 = __webpack_require__(17);
const student_service_1 = __webpack_require__(419);
const read_error_1 = __webpack_require__(53);
let CourseScenarioComponent = class CourseScenarioComponent {
    constructor(_router, _route, _authService, _courseService, _studentService, _scenarioService) {
        this._router = _router;
        this._route = _route;
        this._authService = _authService;
        this._courseService = _courseService;
        this._studentService = _studentService;
        this._scenarioService = _scenarioService;
        this.students = [];
        this.errorMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        this.admin = this._authService.getUser();
        this.paramObserver = this._route.params
            .subscribe(params => {
            let course = params['courseNum'];
            let scenCode = params['scenId'];
            this.courseNum = course.toUpperCase();
            this._scenarioService.getScenario(scenCode)
                .takeUntil(this.isDestroyed$)
                .subscribe((res) => {
                this.scenario = res;
                this._courseService.getScenarioStatus(this.admin.id, course, scenCode)
                    .takeUntil(this.isDestroyed$)
                    .subscribe((stats) => {
                    this.students = stats;
                }, (err2) => {
                    this.errorMessage = read_error_1.readErrorMessage(err2);
                });
            }, (err) => {
                this.errorMessage = read_error_1.readErrorMessage(err);
            });
        });
    }
    formatAccess(isGranted) {
        return (isGranted ? 'Access granted' : 'Access not granted');
    }
    grantAccess(studentIndex) {
        let scenId = this.scenario.scenCode;
        let studentId = this.students[studentIndex].userId;
        this._studentService.grantScenAccess(this.admin.id, studentId, scenId, true)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            if (res !== undefined && res !== null) {
                this.students[studentIndex].status = res.accessGranted[scenId];
            }
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    goToFridge(studentId) {
        this._router.navigate(['/admin/students/', studentId, 'cricket', this.scenario.scenCode]);
    }
    ngOnDestroy() {
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
CourseScenarioComponent = __decorate([
    core_1.Component({
        selector: 'course-scen',
        templateUrl: __webpack_require__(954),
        styleUrls: [__webpack_require__(932)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        course_service_1.CourseService,
        student_service_1.StudentService,
        cricket_service_1.CricketService])
], CourseScenarioComponent);
exports.CourseScenarioComponent = CourseScenarioComponent;


/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-scenario/course-scenario.style.css";

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(15);
const rxjs_1 = __webpack_require__(27);
const course_service_1 = __webpack_require__(122);
const mendelpede_scenarios_service_1 = __webpack_require__(65);
const authentication_service_1 = __webpack_require__(17);
const student_service_1 = __webpack_require__(419);
const read_error_1 = __webpack_require__(53);
let CourseMendelScenarioComponent = class CourseMendelScenarioComponent {
    constructor(_router, _route, _authService, _courseService, _studentService, _scenarioService) {
        this._router = _router;
        this._route = _route;
        this._authService = _authService;
        this._courseService = _courseService;
        this._studentService = _studentService;
        this._scenarioService = _scenarioService;
        this.students = [];
        this.errorMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        this.admin = this._authService.getUser();
        this.paramObserver = this._route.params
            .subscribe(params => {
            let course = params['courseNum'];
            let scenCode = params['scenShortCode'];
            this.courseNum = course.toUpperCase();
            this._scenarioService.getScenario(scenCode)
                .takeUntil(this.isDestroyed$)
                .subscribe((res) => {
                this.scenario = res;
                this._courseService.getMendelScenarioStatus(this.admin.id, course, scenCode)
                    .takeUntil(this.isDestroyed$)
                    .subscribe((stats) => {
                    this.students = stats;
                }, (err2) => {
                    this.errorMessage = read_error_1.readErrorMessage(err2);
                });
            }, (err) => {
                this.errorMessage = read_error_1.readErrorMessage(err);
            });
        });
    }
    formatAccess(isGranted) {
        return (isGranted ? 'Access granted' : 'Access not granted');
    }
    goToFridge(studentId) {
        this._router.navigate(['/admin/students/', studentId, 'mendelpede', this.scenario.shortCode]);
    }
    ngOnDestroy() {
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
CourseMendelScenarioComponent = __decorate([
    core_1.Component({
        selector: 'course-scen',
        templateUrl: __webpack_require__(955),
        styleUrls: [__webpack_require__(932)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        course_service_1.CourseService,
        student_service_1.StudentService,
        mendelpede_scenarios_service_1.MendelpedeScenarioService])
], CourseMendelScenarioComponent);
exports.CourseMendelScenarioComponent = CourseMendelScenarioComponent;


/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(27);
const course_service_1 = __webpack_require__(122);
const authentication_service_1 = __webpack_require__(17);
let CourseResolver = class CourseResolver {
    constructor(_courseService, _authService) {
        this._courseService = _courseService;
        this._authService = _authService;
    }
    resolve(route, state) {
        let admin = this._authService.getUser();
        const courseNum = route.params['courseNum'];
        if (courseNum) {
            return this._courseService.getCourse(admin.id, courseNum);
        }
        else {
            return new rxjs_1.Observable();
        }
    }
};
CourseResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        authentication_service_1.AuthenticationService])
], CourseResolver);
exports.CourseResolver = CourseResolver;


/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-create/course-create.template.html";

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-create/course-create.style.css";

/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(925));


/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-indiv/course-indiv.template.html";

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-indiv/course-indiv.style.css";

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-edit/course-edit.template.html";

/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-edit/course-edit.style.css";

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-list/course-list.template.html";

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-scenario/course-scenario.template.html";

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-mendel-scenario/course-mendel-scenario.template.html";

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const course_resolver_1 = __webpack_require__(934);
const scenario_resolver_1 = __webpack_require__(185);
const mendelpede_scenario_resolver_1 = __webpack_require__(186);
const course_create_component_1 = __webpack_require__(927);
const course_indiv_component_1 = __webpack_require__(928);
const course_edit_component_1 = __webpack_require__(929);
const course_list_component_1 = __webpack_require__(930);
const course_scenario_component_1 = __webpack_require__(931);
const course_mendel_scenario_component_1 = __webpack_require__(933);
exports.CourseRoutes = [
    { path: '',
        children: [
            {
                path: 'create',
                component: course_create_component_1.CourseCreateComponent,
                data: { breadcrumbs: 'Create new course' }
            },
            { path: ':courseNum',
                resolve: { course: course_resolver_1.CourseResolver },
                data: { breadcrumbs: '{{course.courseNum}}' },
                children: [
                    { path: 'edit',
                        component: course_edit_component_1.CourseEditComponent
                    },
                    {
                        path: ':scenId',
                        component: course_scenario_component_1.CourseScenarioComponent,
                        resolve: { scenario: scenario_resolver_1.ScenarioResolver },
                        data: { breadcrumbs: '{{ scenario.label }}' }
                    },
                    {
                        path: 'mendelpede/:scenShortCode',
                        component: course_mendel_scenario_component_1.CourseMendelScenarioComponent,
                        resolve: { mendelpedeScenario: mendelpede_scenario_resolver_1.MendelpedeScenarioResolver },
                        data: { breadcrumbs: '{{ mendelpedeScenario.label }}' }
                    },
                    { path: '',
                        component: course_indiv_component_1.CourseIndivComponent }
                ]
            },
            {
                path: '',
                component: course_list_component_1.CourseListComponent
            }
        ]
    }
];


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLW1lbmRlbC1zY2VuYXJpby9jb3Vyc2UtbWVuZGVsLXNjZW5hcmlvLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UucmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2ludGVyZmFjZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWluZGl2L2NvdXJzZS1pbmRpdi50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYuc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWVkaXQvY291cnNlLWVkaXQuc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1tZW5kZWwtc2NlbmFyaW8vY291cnNlLW1lbmRlbC1zY2VuYXJpby50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMseUNBQStDO0FBQy9DLGdEQUEwRDtBQUUxRCwyREFBZ0Y7QUFDaEYsMERBQTZFO0FBQzdFLHlEQUEwRTtBQUMxRSx5REFBMEU7QUFDMUUsNkRBQXNGO0FBQ3RGLG9FQUF5RztBQUN6RyxtRUFBNEY7QUFFNUYsaURBQStDO0FBQy9DLG1EQUFtRDtBQTBCbkQsSUFBYSxZ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RSxFQUFFO2dCQUNSLFNBQVMsRUFBRSwyQ0FBbUI7YUFDL0I7U0FDRztLQUNMO0NBQ0EsQ0FBQyIsImZpbGUiOiIxLWNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IENvdXJzZUNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VJbmRpdkNvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWluZGl2L2NvdXJzZS1pbmRpdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWVkaXQvY291cnNlLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VTY2VuYXJpb0NvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlTWVuZGVsU2NlbmFyaW9Db21wb25lbnQgfSBmcm9tICcuL2NvdXJzZS1tZW5kZWwtc2NlbmFyaW8vY291cnNlLW1lbmRlbC1zY2VuYXJpby5jb21wb25lbnQnXG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb3Vyc2VSb3V0ZXMgfSBmcm9tICcuL2NvdXJzZS5yb3V0ZXMnO1xuaW1wb3J0IHsgQ291cnNlUmVzb2x2ZXIgfSBmcm9tICcuL2NvdXJzZS5yZXNvbHZlcic7XG5cbi8qKlxuICogTW9kdWxlIGZvciBjb3Vyc2UtcmVsYXRlZCB0YXNrcyBsaWtlIGFkZGluZywgZWRpdGluZywgXG4gKiBkZWxldGluZywgYW5kIHZpZXdpbmcgYSBjb3Vyc2UgYW5kIHRoZSBzdHVkZW50cyBpbiBhIGNvdXJzZVxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChDb3Vyc2VSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvdXJzZUNyZWF0ZUNvbXBvbmVudCxcbiAgICBDb3Vyc2VJbmRpdkNvbXBvbmVudCxcbiAgICBDb3Vyc2VFZGl0Q29tcG9uZW50LFxuICAgIENvdXJzZUxpc3RDb21wb25lbnQsXG4gICAgQ291cnNlU2NlbmFyaW9Db21wb25lbnQsXG4gICAgQ291cnNlTWVuZGVsU2NlbmFyaW9Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb3Vyc2VSZXNvbHZlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvdXJzZU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb3Vyc2UgfSBmcm9tICcuL2NvdXJzZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgX1VzZXIgfSBmcm9tICcuL3VzZXIuaW50ZXJmYWNlJztcbi8vICBmaXJzdE5hbWU6IHN0cmluZztcbi8vICBsYXN0TmFtZTogc3RyaW5nO1xuLy8gIHVzZXJJZDogbnVtYmVyO1xuXG4vKipcbiAqIEluZm9ybWF0aW9uIG5lZWRlZCBhcyBhIHVzZXIgdXNpbmcgdGhlIGFwcCBpbiBzY2VuYXJpb3NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHVkZW50IGV4dGVuZHMgX1VzZXIge1xuICBlbWFpbD86IHN0cmluZztcbiAgYWNjZXNzR3JhbnRlZD86IGFueTtcbiAgc3RhdHVzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIG5lZWRlZCBmb3IgYWRtaW4gcGFnZXMgYWJvdXQgYSB1c2VyL3N0dWRlbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZG1pblN0dWRlbnQgZXh0ZW5kcyBTdHVkZW50IHtcbiAgY291cnNlOiBDb3Vyc2U7XG4gIHJvbGU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBzb3J0IHN0dWRlbnRzIGFscGhhYmV0aWNhbGx5IGJ5IGxhc3QgbmFtZTtcbiAqIFVzZXMgZmlyc3QgbmFtZSBmb3IgdGllc1xuICpcbiAqIE1ha2VzIHRoZSBuYW1lIGxvd2VyY2FzZSBiZWZvcmUgc29ydGluZyB0byBlbnN1cmUgc29ydCBpc1xuICogY2FzZSBpbnNlbnNpdGl2ZVxuICovXG5leHBvcnQgY29uc3Qgc29ydFN0dWRlbnRzID0gZnVuY3Rpb24oYSxiKXtcbiAgICB2YXIgY29tcGFyaXNvbiA9IGEubGFzdE5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIubGFzdE5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKGNvbXBhcmlzb24gPT09IDApIHtcbiAgICAgIHJldHVybiBhLmZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi5maXJzdE5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wYXJpc29uO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcidcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gY3JlYXRlIGEgbmV3IGNvdXJzZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3Vyc2UtY3JlYXRlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWNyZWF0ZS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vY291cnNlLWNyZWF0ZS5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb3Vyc2VDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBiYWNrZW5kIHNlcnZlciB3aGVuIHRyeWluZyB0b1xuICAgKiBjcmVhdGUgdGhlIGNvdXJzZVxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogLSBDb3Vyc2UgZGV0YWlscyB0byBiZSBzZW50IHRvIHRoZSBiYWNrZW5kIHNlcnZlclxuICAgKiAtIEluY2x1ZGVzIGBjb3Vyc2VOdW1gIGFuZCBgZGVzY3JpcHRpb25gXG4gICAqL1xuICBwcml2YXRlIGNvdXJzZURldGFpbHM6IGFueSA9IHt9O1xuICAvKipcbiAgICogTG9nZ2VkIGluIGFkbWluIHVzZXJcbiAgICovXG4gIHByaXZhdGUgYWRtaW46IFVzZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgKXt9XG5cbiAgLyoqXG4gICAqIFdoZW4gaW5pdGlhbGl6aW5nIHRoZSBjb21wb25lbnQsIGdldCB0aGUgY3VycmVudGx5IGxvZ2dlZFxuICAgKiBpbiB1c2VyXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhhdCBhIGNvdXJzZSBudW1iZXIgaGFzIGJlZW4gZW50ZXJlZCB0aGVuXG4gICAqIHN1Ym1pdCBjb3Vyc2UgZGV0YWlscyB0byBiYWNrZW5kXG4gICAqXG4gICAqIElmIGNvdXJzZSBzdWNjZXNzZnVsbHkgY3JlYXRlZCwgZ28gYmFjayB0byBsaXN0IG9mIGNvdXJzZXNcbiAgICogSWYgZXJyb3IsIGRpc3BsYXkgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgY3JlYXRlQ291cnNlKCl7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvdXJzZURldGFpbHMpXG4gICAgaWYodGhpcy5jb3Vyc2VEZXRhaWxzLmNvdXJzZU51bT09PScnKXtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0NvdXJzZSBudW1iZXIgaXMgcmVxdWlyZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fY291cnNlU2VydmljZVxuICAgICAgLmNyZWF0ZUNvdXJzZSh0aGlzLmFkbWluLmlkLCB0aGlzLmNvdXJzZURldGFpbHMpXG4gICAgLnN1YnNjcmliZSggKHJlc3VsdCk9PntcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy4uLycsIHJlc3VsdC5jb3Vyc2VOdW1dLCB7cmVsYXRpdmVUbzogdGhpcy5fcm91dGV9KVxuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RvcnksIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4uL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IENyaWNrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY3JpY2tldC9jcmlja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL21lbmRlbHBlZGUvc2NlbmFyaW9zL21lbmRlbHBlZGUtc2NlbmFyaW9zLnNlcnZpY2UnXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbmltcG9ydCB7IENvdXJzZSwgU3R1ZGVudCwgc29ydFN0dWRlbnRzLCBTY2VuYXJpbywgVXNlciwgTWVuZGVscGVkZVNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvdXJzZS1pbmRpdicsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2NvdXJzZS1pbmRpdi50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vY291cnNlLWluZGl2LnN0eWxlLmNzcycpXVxufSlcblxuXG4vKipcbiAqIENvbXBvbmVudCB0byB2aWV3IGFuIGluZGl2aWR1YWwgY291cnNlXG4gKiBJbmNsdWRlcyBpbmZvcm1hdGlvbiBzdWNoIGFzIGNvdXJzZSBudW1iZXIsIGRlc2NyaXB0aW9uLCBpbnN0cnVjdG9ycywgYW5kIHN0dWRlbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBDb3Vyc2VJbmRpdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHN0dWRlbnRzIGVucm9sbGVkIGluIHRoZSBjb3Vyc2VcbiAgICovXG4gIHByaXZhdGUgc3R1ZGVudHM6IFN0dWRlbnRbXSA9IFtdO1xuICAvKipcbiAgICogQ291cnNlIGluZm8gaW5jbHVkaW5nIGBjb3Vyc2VOdW1gLCBgZGVzY3JpcHRpb25gLCBgaW5zdHJ1Y3RvcnNgXG4gICAqL1xuICBjb3Vyc2VJbmZvOiBDb3Vyc2U7XG4gIC8qKlxuICAgKiBsaXN0IG9mIGF2YWlsYWJsZSBzY2VuYXJpb3MgKHVzZWQgZm9yIGxpbmtpbmcpXG4gICAqL1xuICBwcml2YXRlIHNjZW5hcmlvczogU2NlbmFyaW9bXTtcbiAgLyoqXG4gICAqIFN0YXRlIHZhcmlhYmxlIHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIHNlcnZpY2VzIGVhc2llclxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuXG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZSB0aGF0IGNvdWxkIGFyaXNlXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIE1lbmRlbHBlZGUgc2NlbmFyaW9zXG4gICAqL1xuICBwcml2YXRlIG1wZWRlT3B0aW9uczogTWVuZGVscGVkZVNjZW5hcmlvW107XG4gIFxuICBtcGVkZVNjZW5hcmlvczogTWVuZGVscGVkZVNjZW5hcmlvW10gPSBBcnJheSgpO1xuICBxdWl6ZXM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcbiAgZGlzY292ZXJpZXM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcbiAgcGF0aHdheXM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogQ3JpY2tldFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbXBlZGVTY2VuYXJpb1NlcnZpY2U6IE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2UsKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhbGwgY29udGVudCBvbiB0aGUgcGFnZSB1c2luZyBzZXZlcmFsIHNlcnZpY2VzXG4gICAqIDEuIEdldCB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogMi4gR2V0IHRoZSBjb3Vyc2UgaW5mb3JtYXRpb24gKGRlc2NyaXB0aW9uLCBpbnN0cnVjdG9ycylcbiAgICogMy4gR2V0IHRoZSBsaXN0IG9mIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2VcbiAgICogNC4gR2V0IHRoZSBsaXN0IG9mIHNjZW5hcmlvc1xuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICBsZXQgYWRtaW46IFVzZXIgPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdXJzZSA9IHBhcmFtc1snY291cnNlTnVtJ107XG4gICAgICAgICAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldENvdXJzZShhZG1pbi5pZCwgY291cnNlKVxuICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY291cnNlSW5mbyA9IGluZm87XG4gICAgICAgICAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0U3R1ZGVudHMoYWRtaW4uaWQsIGNvdXJzZSlcbiAgICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc3R1ZGVudHMpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50cyA9IHN0dWRlbnRzLnNvcnQoc29ydFN0dWRlbnRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UubGlzdFNjZW5hcmlvcygpXG4gICAgICAgICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc2NlbnMpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmFyaW9zID0gc2NlbnM7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbXBlZGVTY2VuYXJpb1NlcnZpY2UubGlzdFNjZW5hcmlvcygpLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc2NlbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1wZWRlT3B0aW9ucyA9IHNjZW5zO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXBlZGVPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5zY2VuVHlwZSA9PT0gJ3NjZW5hcmlvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1wZWRlU2NlbmFyaW9zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihvcHRpb24uc2NlblR5cGUgPT09ICdxdWl6Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVpemVzLnB1c2gob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihvcHRpb24uc2NlblR5cGUgPT09ICdkaXNjb3ZlcnknKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNjb3Zlcmllcy5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihvcHRpb24uc2NlblR5cGUgPT09ICdwYXRod2F5Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aHdheXMucHVzaChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXBlZGVTY2VuYXJpb3MgPSB0aGlzLm1wZWRlU2NlbmFyaW9zLnNvcnQoKG8xLCBvMikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8xLm9yZE9mU2NlbiA8IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobzEub3JkT2ZTY2VuID4gbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6ZXMgPSB0aGlzLnF1aXplcy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvMS5vcmRPZlNjZW4gPCBvMi5vcmRPZlNjZW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG8xLm9yZE9mU2NlbiA+IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzY292ZXJpZXMgPSB0aGlzLmRpc2NvdmVyaWVzLnNvcnQoKG8xLCBvMikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8xLm9yZE9mU2NlbiA8IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobzEub3JkT2ZTY2VuID4gbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRod2F5cyA9IHRoaXMucGF0aHdheXMuc29ydCgobzEsIG8yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobzEub3JkT2ZTY2VuIDwgbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvMS5vcmRPZlNjZW4gPiBvMi5vcmRPZlNjZW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHN1YnNjcmlwdGlvbnMgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi4vY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb3Vyc2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2NvdXJzZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3R1ZGVudCwgQWRtaW5TdHVkZW50LCBzb3J0U3R1ZGVudHMgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvdXJzZS1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWVkaXQudGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2NvdXJzZS1lZGl0LnN0eWxlLmNzcycpXVxufSlcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVkaXR0aW5nIGNvdXJzZSBkZXRhaWxzIHN1Y2ggYXNcbiAqIGFkZGluZy9yZW1vdmluZyBpbnN0cnVjdG9ycywgdXBkYXRpbmcgY291cnNlIGRlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb3Vyc2VFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG5cbiAgLyoqXG4gICAqIENvdXJzZSBiZWluZyBlZGl0ZWRcbiAgICovXG4gIGNvdXJzZUluZm86IENvdXJzZTtcbiAgLyoqXG4gICAqIExpc3Qgb2YgcG9zc2libGUgaW5zdHJ1Y3RvcnMgd2hvIGNvdWxkIGJlIGFkZGVkXG4gICAqL1xuICBwcml2YXRlIHBvc3NpYmxlSW5zdHI6IEFkbWluU3R1ZGVudFtdO1xuICAvKipcbiAgICogVmFyaWFibGUgdXNlZCB0byByZW1lbWJlciBpbnN0ciBzZWxlY3RlZCB3aGVuIGFkZGluZ1xuICAgKi9cbiAgc2VsZWN0ZWRBZGQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBsb2dnZWQgaW4gdXNlclxuICAgKi9cbiAgcHJpdmF0ZSBfYWRtaW46IFVzZXI7XG4gIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuICAvKipcbiAgICogU3RhdGUgdmFyaWFibGUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gc2VydmljZXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlcyBmcm9tIHRoZSBiYWNrZW5kIHNlcnZlclxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGluaXRcbiAgICogMS4gZ2V0IHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKiAyLiBVc2UgdGhlIHVybCBwYXJhbSB0byBnZXQgY291cnNlIG51bWJlclxuICAgKiAzLiBHZXQgY291cnNlIGRldGFpbHMgKHVzaW5nIGNvdXJlTnVtKVxuICAgKiA0LiBHZXQgcG9zc2libGUgaW5zdHJ1Y3RvcnMgKHVzaW5nIGNvdXJzZU51bSlcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5fYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdXJzZSA9IHBhcmFtc1snY291cnNlTnVtJ107XG5cbiAgICAgICAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0Q291cnNlKHRoaXMuX2FkbWluLmlkLCBjb3Vyc2UpXG4gICAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZUluZm8gPSBpbmZvO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0UG9zc2libGVJbnN0cnVjdG9ycyh0aGlzLl9hZG1pbi5pZCwgY291cnNlKVxuICAgICAgICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGluc3Rycyk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZUluc3RyID0gaW5zdHJzLnNvcnQoc29ydFN0dWRlbnRzKTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyMik9PntcbiAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIyKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGVJbnN0ciA9IFtdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9LChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBjYW5jZWwgYnV0dG9uIGlzIHByZXNzZWQsIG5hdmlnYXRlIGJhY2sgdG8gY291cnNlIHZpZXcgcGFnZVxuICAgKi9cbiAgb25DYW5jZWwoKXtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycuLi8nXSwge3JlbGF0aXZlVG86IHRoaXMuX3JvdXRlfSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQsIHN1Ym1pdCB0aGUgdXBkYXRlcyB0byBiZVxuICAgKiBzYXZlZCBpbiB0aGUgYmFja2VuZFxuICAgKi9cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy5fY291cnNlU2VydmljZVxuICAgICAgLmVkaXRDb3Vyc2UodGhpcy5fYWRtaW4uaWQsIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW0sIHRoaXMuY291cnNlSW5mbylcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoIChyZXN1bHQpPT57XG4gICAgICAvLyBzdWNjZXNzXG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycuLi8nXSwge3JlbGF0aXZlVG86IHRoaXMuX3JvdXRlfSlcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogLSBXaGVuIGFkZCBpbnN0cnVjdG9yIGJ1dHRvbiBpcyBjbGlja2VkLCBzZW5kIHRoZSBzZWxlY3RlZFxuICAgKiBpbnN0cnVjdG9yIChieSB1c2VySWQpIHRvIHRoZSBiYWNrZW5kIHRvIGJlIGFkZGVkIGFzIGFuIGluc3RydWN0b3JcbiAgICogLSBJZiBzdWNjZXNzZnVsLCB1cGRhdGUgbGlzdCBvZiBwb3NzaWJsZSBpbnN0cnVjdG9yc1xuICAgKi9cbiAgYWRkSW5zdHJ1Y3Rvcigpe1xuICAgIGlmKHRoaXMuc2VsZWN0ZWRBZGQpe1xuICAgIHRoaXMuX2NvdXJzZVNlcnZpY2VcbiAgICAgIC5hZGRJbnN0cnVjdG9yKHRoaXMuX2FkbWluLmlkLCB0aGlzLmNvdXJzZUluZm8uY291cnNlTnVtLCB0aGlzLnNlbGVjdGVkQWRkKVxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHVwZGF0ZWQpPT57XG4gICAgICB0aGlzLmNvdXJzZUluZm8gPSB1cGRhdGVkO1xuICAgICAgdGhpcy5wb3NzaWJsZUluc3RyID0gdGhpcy5wb3NzaWJsZUluc3RyLmZpbHRlcigoZWxtKT0+e1xuICAgICAgICByZXR1cm4gZWxtLnVzZXJJZCAhPSB0aGlzLnNlbGVjdGVkQWRkXG4gICAgICB9KTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gICAgfVxuICB9XG4gIC8vIFRPRE86IHJlbW92ZSBpbnN0cnVjdG9yXG5cbiAgLyoqXG4gICAqIC0gV2hlbiBjbGlja2luZyBkZWxldGUgY291cnNlIGJ1dHRvbiwgb3BlbiBhIGRpYWxvZ1xuICAgKiB0byBjb25maXJtIGRlbGV0aW9uXG4gICAqIC0gSWYgY29uZmlybWVkLCBjYWxsIGhlbHBlciBtZXRob2RcbiAgICogLSBJZiBjYW5jZWwsIGRvIG5vdGhpbmdcbiAgICovXG4gIGRlbGV0ZUNvdXJzZSgpe1xuICAgIGNvbnN0IG1vZGVsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudCwge3NpemU6ICdzbScsIHdpbmRvd0NsYXNzOiAnZGVsZXRlLW1vZGFsJ30pO1xuICAgIG1vZGVsUmVmLmNvbXBvbmVudEluc3RhbmNlLm1lc3NhZ2UgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBjb3Vyc2UgJyArIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW0gKyAnPyc7XG5cbiAgICBtb2RlbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KT0+e1xuICAgICAgaWYocmVzdWx0ID09PSAnZGVsZXRlJyl7XG4gICAgICAgIHRoaXMuX2NhbGxEZWxldGVDb3Vyc2UoKVxuICAgICAgfVxuICAgIH0sIChkaXNtaXNzKT0+e1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB3aGljaCB1c2VzIHNlcnZpY2UgdG8gdGVsbCBzZXJ2ZXIgdG8gZGVsZXRlIHRoZSBjb3Vyc2VcbiAgICovXG4gIF9jYWxsRGVsZXRlQ291cnNlKCl7XG4gICAgdGhpcy5fY291cnNlU2VydmljZS5kZWxldGVDb3Vyc2UodGhpcy5fYWRtaW4uaWQsIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW0pXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAvLyBzdWNjZXNzZnVsXG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4vY291cnNlcyddKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiAtIFdoZW4gZGVsZXRlIHN0dWRlbnRzIGJ1dHRvbiBpcyBjbGljayxcbiAgICogb3BlbiBhIGRpYWxvZyB0byBjb25maXJtIGRlbGV0aW9uXG4gICAqIC0gSWYgY29uZmlybSwgY2FsbCBoZWxwZXIgbWV0aG9kXG4gICAqIC0gSWYgY2FuY2VsLCBkbyBub3RoaW5nXG4gICAqL1xuICBkZWxldGVDb3Vyc2VTdHVkZW50cygpe1xuICAgIGNvbnN0IG1vZGVsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudCwge3NpemU6ICdzbSd9KTtcbiAgICBtb2RlbFJlZi5jb21wb25lbnRJbnN0YW5jZS5tZXNzYWdlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHN0dWRlbnRzIGluIGNvdXJzZSAnICsgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bSArICc/JztcblxuICAgIG1vZGVsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpPT57XG4gICAgICBpZihyZXN1bHQgPT09ICdkZWxldGUnKXtcbiAgICAgICAgdGhpcy5fY2FsbERlbGV0ZUNvdXJzZVN0dWRlbnRzKClcbiAgICAgIH1cbiAgICB9LCAoZGlzbWlzcyk9PntcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2Qgd2l0aCB0ZWxscyBzZXJ2aWNlIHRvIGRlbGV0ZSBhbGwgb2YgdGhlXG4gICAqIHN0dWRlbnRzIGluIHRoaXMgY291cnNlXG4gICAqL1xuICBfY2FsbERlbGV0ZUNvdXJzZVN0dWRlbnRzKCl7XG4gICAgdGhpcy5fY291cnNlU2VydmljZS5kZWxldGVTdHVkZW50cyh0aGlzLl9hZG1pbi5pZCwgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bSlcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIC8vIHN1Y2Nlc3NmdWxcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9jb3Vyc2VzLycsIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW1dKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIHRvIHByZXZlbnQgYSBtZW1vcnkgbGVha1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi4vY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbmltcG9ydCB7IENvdXJzZSwgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB3aGljaCBsaXN0cyBhdmFpbGFibGUgY291cnNlcyBiYXNlZCBvbiBsb2dnZWQtaW4gdXNlciByb2xlXG4gKiAtIElmIGFkbWluLCBsaXN0cyBhbGwgYXZhaWxhYmxlIGNvdXJzZXNcbiAqIC0gSWYgaW5zdHIsIGxpc3QgY291cnNlcyB3aGljaCBpbnN0cnVjdG9yIG9mXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY291cnNlLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2NvdXJzZS1saXN0LnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBDb3Vyc2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBMaXN0IG9mIGNvdXJzZXNcbiAgICovXG4gICAgcHJpdmF0ZSBjb3Vyc2VzOiBDb3Vyc2VbXTtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byBjb3Vyc2Ugc2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICApIHt9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGNvbXBvbmVudCBieSBnZXR0aW5nIGxpc3Qgb2YgY291cnNlc1xuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgbGV0IGFkbWluOiBVc2VyID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmxpc3RDb3Vyc2VzKGFkbWluLmlkKVxuICAgICAgICAuc3Vic2NyaWJlKChjb3Vyc2VzKSA9PiB7XG4gICAgICAgIHRoaXMuY291cnNlcyA9IGNvdXJzZXNcbiAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RydWN0aW9uLCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDcmlja2V0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NyaWNrZXQvY3JpY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3R1ZGVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zdHVkZW50L3N0dWRlbnQuc2VydmljZSc7XG5cbmltcG9ydCB7IENvdXJzZSwgU3R1ZGVudCwgU2NlbmFyaW8sIFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzLyc7XG5cbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgZGlzcGxheXMgdGhlIHNjZW5hcmlvIHN0YXR1cyBvZiBhbGwgc3R1ZGVudHNcbiAqIHdpdGhpbiB0aGUgY291cnNlIGFuZCBhbGxvd3MgZm9yIG5hdmlnYXRpb24gdG8gc3R1ZGVudCBmcmlkZ2VzXG4gKiBhbmQgZ3JhbnQgYWNjZXNzIGZvciBhIHN0dWRlbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291cnNlLXNjZW4nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb3Vyc2Utc2NlbmFyaW8udGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2NvdXJzZS1zY2VuYXJpby5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb3Vyc2VTY2VuYXJpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogTGlzdCBvZiBzdHVkZW50cyBpbiB0aGUgY291cnNlXG4gICAqL1xuICBwcm90ZWN0ZWQgc3R1ZGVudHM6IFN0dWRlbnRbXSA9IFtdO1xuICAvKipcbiAgICogVGhlIGNvdXJzZSBudW1iZXJcbiAgICovXG4gIHByaXZhdGUgY291cnNlTnVtOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc2NlbmFyaW9cbiAgICovXG4gIHByb3RlY3RlZCBzY2VuYXJpbzogU2NlbmFyaW87XG4gIC8qKlxuICAgKiBTdGF0ZSB2YXJpYWJsZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbSBzZXJ2aWNlcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIG9ic2VydmUgdXJsIGBjb3Vyc2VOdW1gIHBhcmFtZXRlclxuICAgKi9cbiAgcHJpdmF0ZSBwYXJhbU9ic2VydmVyOiBhbnk7XG4gIC8qKlxuICAqIFRoZSBsb2dnZWQgaW4gYWRtaW4gdXNlclxuICAqL1xuICBwcml2YXRlIGFkbWluOiBVc2VyO1xuICAvKipcbiAgICogUG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3N0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IENyaWNrZXRTZXJ2aWNlXG4gICAgICAgICAgICAgICl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRhbGl6ZSB0aGUgY29tcG9uZW50XG4gICAqIDEuIEdldCB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogMi4gQmFzZWQgb24gdGhlIFVSTCwgZ2V0IHRoZSBjb3Vyc2UgbnVtYmVyIGFuZCBzY2VuYXJpbyBjb2RlXG4gICAqIDMuIEdldCB0aGUgc2NlbmFyaW8gaW5mb3JtYXRpb25cbiAgICogNC4gR2V0IHRoZSBzY2VuYXJpbyBzdGF0dXMgb2Ygc3R1ZGVudHMgaW4gdGhlIGNvdXJzZVxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZG1pbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXNcbiAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICBsZXQgY291cnNlID0gcGFyYW1zWydjb3Vyc2VOdW0nXTtcbiAgICAgICAgICBsZXQgc2NlbkNvZGUgPSBwYXJhbXNbJ3NjZW5JZCddO1xuICAgICAgdGhpcy5jb3Vyc2VOdW0gPSBjb3Vyc2UudG9VcHBlckNhc2UoKTtcbiAgICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5nZXRTY2VuYXJpbyhzY2VuQ29kZSlcbiAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICB0aGlzLnNjZW5hcmlvID0gcmVzO1xuICAgICAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldFNjZW5hcmlvU3RhdHVzKHRoaXMuYWRtaW4uaWQsIGNvdXJzZSwgc2NlbkNvZGUpXG4gICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAuc3Vic2NyaWJlKChzdGF0cyk9PntcblxuICAgICAgICAgICAgdGhpcy5zdHVkZW50cyA9IHN0YXRzO1xuICAgICAgICB9LCAoZXJyMik9PntcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyMik7XG4gICAgICAgIH0pO1xuXG4gICAgICB9LCAoZXJyKT0+e1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1wbGUgZm9ybWF0dGluZyBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGZvcm1hdHRlZCBzdHJpbmdcbiAgICogZGVwZW5kaW5nIG9uIGlmIHN0dWRlbnQgaGFzIGFjY2VzcyBncmFudGVkIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzR3JhbnRlZCAtIGhhcyBhY2Nlc3MgYmVlbiBncmFudGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gZm9ybWF0dGVkIHN0cmluZzsgXCJBY2Nlc3MgZ3JhbnRlZFwiIGlmIGFjY2VzcyBoYXMgYmVlbiBncmFudGVkLCBcIkFjY2VzcyBub3QgZ3JhbnRlZFwiIG90aGVyd2lzZVxuICAgKi9cbiAgZm9ybWF0QWNjZXNzKGlzR3JhbnRlZDogYm9vbGVhbik6IHN0cmluZ3tcbiAgICByZXR1cm4gKGlzR3JhbnRlZCA/ICdBY2Nlc3MgZ3JhbnRlZCcgOiAnQWNjZXNzIG5vdCBncmFudGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgc2VydmljZSB0byBncmFudCB0aGUgc3R1ZGVudCBhY2Nlc3MgdG8gdGhlIHNjZW5hcmlvXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2YgXCJHcmFudCBhY2Nlc3NcIiBidXR0b24gZm9yIGEgc3R1ZGVudFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3R1ZGVudEluZGV4IC0gcG9zaXRpb25hbCBpbmRleCBvZiBzdHVkZW50IGluIHRoZSBsaXN0IG9mIHN0dWRlbnRzO1xuICAgKiBUaGlzIGlzICoqTk9UKiogdGhlIHN0dWRlbnQncyB1c2VySWRcbiAgICovXG4gIGdyYW50QWNjZXNzKHN0dWRlbnRJbmRleDogbnVtYmVyKXtcbiAgICBsZXQgc2NlbklkID0gdGhpcy5zY2VuYXJpby5zY2VuQ29kZTtcbiAgICBsZXQgc3R1ZGVudElkID0gdGhpcy5zdHVkZW50c1tzdHVkZW50SW5kZXhdLnVzZXJJZDtcbiAgICB0aGlzLl9zdHVkZW50U2VydmljZS5ncmFudFNjZW5BY2Nlc3ModGhpcy5hZG1pbi5pZCwgc3R1ZGVudElkLCBzY2VuSWQsIHRydWUpXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICBpZihyZXMgIT09IHVuZGVmaW5lZCAmJiByZXMgIT09IG51bGwpe1xuICAgICAgICAgIHRoaXMuc3R1ZGVudHNbc3R1ZGVudEluZGV4XS5zdGF0dXMgPSByZXMuYWNjZXNzR3JhbnRlZFtzY2VuSWRdO1xuICAgICAgICB9XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogT24gXCJWaWV3IEZyaWRnZVwiIGJ1dHRvbiwgbmF2aWdhdGVzIHRvIHRoYXQgc3R1ZGVudCdzIGZyaWRnZVxuICAgKiBmb3IgdGhpcyBzY2VuYXJpb1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIFwiVmlldyBGcmlkZ2VcIiBidXR0b24gb2YgYSBzdHVkZW50XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB0aGUgc3R1ZGVudCdzIHVzZXJJRFxuICAgKi9cbiAgZ29Ub0ZyaWRnZShzdHVkZW50SWQ6IG51bWJlcil7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL3N0dWRlbnRzLycsIHN0dWRlbnRJZCwnY3JpY2tldCcsIHRoaXMuc2NlbmFyaW8uc2NlbkNvZGVdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgY29tcG9uZW50LCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbWVuZGVscGVkZS9zY2VuYXJpb3MvbWVuZGVscGVkZS1zY2VuYXJpb3Muc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3R1ZGVudC9zdHVkZW50LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDb3Vyc2UsIFN0dWRlbnQsIFVzZXIsIE1lbmRlbHBlZGVTY2VuYXJpbyB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvJztcblxuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBkaXNwbGF5cyB0aGUgc2NlbmFyaW8gc3RhdHVzIG9mIGFsbCBzdHVkZW50c1xuICogd2l0aGluIHRoZSBjb3Vyc2UgYW5kIGFsbG93cyBmb3IgbmF2aWdhdGlvbiB0byBzdHVkZW50IGZyaWRnZXNcbiAqIGFuZCBncmFudCBhY2Nlc3MgZm9yIGEgc3R1ZGVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3Vyc2Utc2NlbicsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2NvdXJzZS1tZW5kZWwtc2NlbmFyaW8udGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuLi9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLnN0eWxlLmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIENvdXJzZU1lbmRlbFNjZW5hcmlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2VcbiAgICovXG4gIHByb3RlY3RlZCBzdHVkZW50czogU3R1ZGVudFtdID0gW107XG4gIC8qKlxuICAgKiBUaGUgY291cnNlIG51bWJlclxuICAgKi9cbiAgcHJpdmF0ZSBjb3Vyc2VOdW06IHN0cmluZztcbiAgLyoqXG4gICAqIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzY2VuYXJpb1xuICAgKi9cbiAgcHJvdGVjdGVkIHNjZW5hcmlvOiBNZW5kZWxwZWRlU2NlbmFyaW87XG4gIC8qKlxuICAgKiBTdGF0ZSB2YXJpYWJsZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbSBzZXJ2aWNlcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIG9ic2VydmUgdXJsIGBjb3Vyc2VOdW1gIHBhcmFtZXRlclxuICAgKi9cbiAgcHJpdmF0ZSBwYXJhbU9ic2VydmVyOiBhbnk7XG4gIC8qKlxuICAqIFRoZSBsb2dnZWQgaW4gYWRtaW4gdXNlclxuICAqL1xuICBwcml2YXRlIGFkbWluOiBVc2VyO1xuICAvKipcbiAgICogUG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3N0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2VcbiAgICAgICAgICAgICAgKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGFsaXplIHRoZSBjb21wb25lbnRcbiAgICogMS4gR2V0IHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKiAyLiBCYXNlZCBvbiB0aGUgVVJMLCBnZXQgdGhlIGNvdXJzZSBudW1iZXIgYW5kIHNjZW5hcmlvIGNvZGVcbiAgICogMy4gR2V0IHRoZSBzY2VuYXJpbyBpbmZvcm1hdGlvblxuICAgKiA0LiBHZXQgdGhlIHNjZW5hcmlvIHN0YXR1cyBvZiBzdHVkZW50cyBpbiB0aGUgY291cnNlXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIHRoaXMucGFyYW1PYnNlcnZlciA9IHRoaXMuX3JvdXRlLnBhcmFtc1xuICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgIGxldCBjb3Vyc2UgPSBwYXJhbXNbJ2NvdXJzZU51bSddO1xuICAgICAgICAgIGxldCBzY2VuQ29kZSA9IHBhcmFtc1snc2NlblNob3J0Q29kZSddO1xuICAgICAgdGhpcy5jb3Vyc2VOdW0gPSBjb3Vyc2UudG9VcHBlckNhc2UoKTtcbiAgICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5nZXRTY2VuYXJpbyhzY2VuQ29kZSlcbiAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICB0aGlzLnNjZW5hcmlvID0gcmVzO1xuICAgICAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldE1lbmRlbFNjZW5hcmlvU3RhdHVzKHRoaXMuYWRtaW4uaWQsIGNvdXJzZSwgc2NlbkNvZGUpXG4gICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAuc3Vic2NyaWJlKChzdGF0cyk9PntcblxuICAgICAgICAgICAgdGhpcy5zdHVkZW50cyA9IHN0YXRzO1xuICAgICAgICB9LCAoZXJyMik9PntcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyMik7XG4gICAgICAgIH0pO1xuXG4gICAgICB9LCAoZXJyKT0+e1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1wbGUgZm9ybWF0dGluZyBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGZvcm1hdHRlZCBzdHJpbmdcbiAgICogZGVwZW5kaW5nIG9uIGlmIHN0dWRlbnQgaGFzIGFjY2VzcyBncmFudGVkIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzR3JhbnRlZCAtIGhhcyBhY2Nlc3MgYmVlbiBncmFudGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gZm9ybWF0dGVkIHN0cmluZzsgXCJBY2Nlc3MgZ3JhbnRlZFwiIGlmIGFjY2VzcyBoYXMgYmVlbiBncmFudGVkLCBcIkFjY2VzcyBub3QgZ3JhbnRlZFwiIG90aGVyd2lzZVxuICAgKi9cbiAgZm9ybWF0QWNjZXNzKGlzR3JhbnRlZDogYm9vbGVhbik6IHN0cmluZ3tcbiAgICByZXR1cm4gKGlzR3JhbnRlZCA/ICdBY2Nlc3MgZ3JhbnRlZCcgOiAnQWNjZXNzIG5vdCBncmFudGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogT24gXCJWaWV3IEZyaWRnZVwiIGJ1dHRvbiwgbmF2aWdhdGVzIHRvIHRoYXQgc3R1ZGVudCdzIGZyaWRnZVxuICAgKiBmb3IgdGhpcyBzY2VuYXJpb1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIFwiVmlldyBGcmlkZ2VcIiBidXR0b24gb2YgYSBzdHVkZW50XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB0aGUgc3R1ZGVudCdzIHVzZXJJRFxuICAgKi9cbiAgZ29Ub0ZyaWRnZShzdHVkZW50SWQ6IG51bWJlcil7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL3N0dWRlbnRzLycsIHN0dWRlbnRJZCwnbWVuZGVscGVkZScsIHRoaXMuc2NlbmFyaW8uc2hvcnRDb2RlXSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlcyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1tZW5kZWwtc2NlbmFyaW8vY291cnNlLW1lbmRlbC1zY2VuYXJpby5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSZXNvbHZlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291cnNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9jb3Vyc2UuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBGb3IgdGhlIG5hdmlnYXRpb24gYnJlYWRjcnVtYiwgcmVzb2x2ZXMgYSBVUkwgY291cnNlTnVtIHBhcmFtZWV0ZXJcbiAqIHRvIHRoZSBjb3Vyc2UgbnVtYmVyXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb3Vyc2VSZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8Q291cnNlPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgICAgICAgICApIHsgfVxuICAvKipcbiAgICogQmFzZWQgb24gdGhlIFVSTCBgY291cnNlTnVtYCBwYXJhbWV0ZXIsIGZpbmQgdGhlIGNvdXJzZVxuICAgKiBpdCBiZWxvbmdzIHRvXG4gICAqXG4gICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gcm91dGUgLSByb3V0ZSBVUkwgYXQgdGhlIG1vbWVudFxuICAgKiBAcGFyYW0ge1JvdXRlclN0YXRlU25hcHNob3R9IHN0YXRlIC0gcm91dGVyIHN0YXRlOyBuZWVkZWQgdG8gaW1wbGVtZW50IGludGVyZmFjZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSBUaGUgY291cnNlIGluZm8gZm9yIHRoZSBjb3Vyc2VOdW1cbiAgICogb3IgYW4gZW1wdHkgb2JzZXJ2YWJsZSBpZiB0aGUgaWQgZG9lc24ndCBiZWxvbmcgdG8gYW55IGNvdXJzZVxuICAgKi9cbiAgcHVibGljIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxDb3Vyc2U+IHtcbiAgICBsZXQgYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgY29uc3QgY291cnNlTnVtID0gcm91dGUucGFyYW1zWydjb3Vyc2VOdW0nXTtcblxuICAgIGlmIChjb3Vyc2VOdW0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldENvdXJzZShhZG1pbi5pZCwgY291cnNlTnVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLnJlc29sdmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1jcmVhdGUvY291cnNlLWNyZWF0ZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydCAqIGZyb20gJy4vY291cnNlLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZyaWRnZS5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9waGFnZS5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zY2VuYXJpby5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHVkZW50LmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwZXJpbWVudC5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tZW5kZWxwZWRlLXNjZW5hcmlvcy5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tZW5kZWxwZWRlLXBlZGUuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbWVuZGVscGVkZS1mcmlkZ2UuaW50ZXJmYWNlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2ludGVyZmFjZXMvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1zY2VuYXJpby9jb3Vyc2Utc2NlbmFyaW8udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1tZW5kZWwtc2NlbmFyaW8vY291cnNlLW1lbmRlbC1zY2VuYXJpby50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbWVuZGVsLXNjZW5hcmlvL2NvdXJzZS1tZW5kZWwtc2NlbmFyaW8udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENvdXJzZVJlc29sdmVyIH0gZnJvbSAnLi9jb3Vyc2UucmVzb2x2ZXInO1xuaW1wb3J0IHsgU2NlbmFyaW9SZXNvbHZlciB9IGZyb20gJy4uLy4uL2NyaWNrZXQvc2NlbmFyaW8ucmVzb2x2ZXInO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9tZW5kZWxwZWRlL21lbmRlbHBlZGUtc2NlbmFyaW8ucmVzb2x2ZXInXG5cbmltcG9ydCB7IENvdXJzZUNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VJbmRpdkNvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWluZGl2L2NvdXJzZS1pbmRpdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWVkaXQvY291cnNlLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VTY2VuYXJpb0NvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlTWVuZGVsU2NlbmFyaW9Db21wb25lbnQgfSBmcm9tICcuL2NvdXJzZS1tZW5kZWwtc2NlbmFyaW8vY291cnNlLW1lbmRlbC1zY2VuYXJpby5jb21wb25lbnQnXG5cbmV4cG9ydCBjb25zdCBDb3Vyc2VSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnJyxcbiAgIGNoaWxkcmVuOiBbXG4gIHtcbiAgICBwYXRoOiAnY3JlYXRlJyxcbiAgICBjb21wb25lbnQ6IENvdXJzZUNyZWF0ZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7YnJlYWRjcnVtYnM6ICdDcmVhdGUgbmV3IGNvdXJzZSd9XG4gIH0sXG4gIHsgcGF0aDogJzpjb3Vyc2VOdW0nLFxuICAgcmVzb2x2ZToge2NvdXJzZTogQ291cnNlUmVzb2x2ZXJ9LFxuICAgZGF0YToge2JyZWFkY3J1bWJzOiAne3tjb3Vyc2UuY291cnNlTnVtfX0nIH0sXG4gICBjaGlsZHJlbjogW1xuICAgICB7IHBhdGg6ICdlZGl0JyxcbiAgICBjb21wb25lbnQ6IENvdXJzZUVkaXRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICc6c2NlbklkJyxcbiAgICBjb21wb25lbnQ6IENvdXJzZVNjZW5hcmlvQ29tcG9uZW50LFxuICAgIHJlc29sdmU6IHtzY2VuYXJpbzogU2NlbmFyaW9SZXNvbHZlcn0sXG4gICAgZGF0YToge2JyZWFkY3J1bWJzOiAne3sgc2NlbmFyaW8ubGFiZWwgfX0nfVxuICB9LFxuICB7XG4gICAgcGF0aDogJ21lbmRlbHBlZGUvOnNjZW5TaG9ydENvZGUnLFxuICAgIGNvbXBvbmVudDogQ291cnNlTWVuZGVsU2NlbmFyaW9Db21wb25lbnQsXG4gICAgcmVzb2x2ZToge21lbmRlbHBlZGVTY2VuYXJpbzogTWVuZGVscGVkZVNjZW5hcmlvUmVzb2x2ZXJ9LFxuICAgIGRhdGE6IHticmVhZGNydW1iczogJ3t7IG1lbmRlbHBlZGVTY2VuYXJpby5sYWJlbCB9fSd9XG4gIH0sXG4gICAgIHtwYXRoOiAnJyxcbiAgICAgY29tcG9uZW50OiBDb3Vyc2VJbmRpdkNvbXBvbmVudH1cbiAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogQ291cnNlTGlzdENvbXBvbmVudFxuICB9XG4gICAgIF1cbn1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLnJvdXRlcy50cyJdLCJzb3VyY2VSb290IjoiIn0=