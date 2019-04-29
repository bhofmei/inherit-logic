webpackJsonp([2],{

/***/ 926:
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
const router_1 = __webpack_require__(16);
const shared_module_1 = __webpack_require__(54);
const course_create_component_1 = __webpack_require__(932);
const course_indiv_component_1 = __webpack_require__(933);
const course_edit_component_1 = __webpack_require__(934);
const course_list_component_1 = __webpack_require__(935);
const course_scenario_component_1 = __webpack_require__(936);
const course_mendel_scenario_component_1 = __webpack_require__(937);
const confirm_delete_dialog_component_1 = __webpack_require__(422);
const course_routes_1 = __webpack_require__(959);
const course_resolver_1 = __webpack_require__(938);
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

/***/ 930:
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

/***/ 932:
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
const router_1 = __webpack_require__(16);
const forms_1 = __webpack_require__(13);
const course_service_1 = __webpack_require__(122);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(45);
let CourseCreateComponent = class CourseCreateComponent {
    constructor(_courseService, _router, _route, _authService) {
        this._courseService = _courseService;
        this._router = _router;
        this._route = _route;
        this._authService = _authService;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.admin = this._authService.getUser();
        this.course = new forms_1.FormGroup({
            'courseNum': new forms_1.FormControl('', forms_1.Validators.required),
            'description': new forms_1.FormControl(''),
            'level': new forms_1.FormControl('all')
        });
    }
    get courseNum() { return this.course.get('courseNum'); }
    get description() { return this.course.get('description'); }
    get level() { return this.course.get('level'); }
    createCourse() {
        this.subscription = this._courseService
            .createCourse(this.admin.id, this.course.value)
            .subscribe((result) => {
            this._router.navigate(['../', result.courseNum], { relativeTo: this._route });
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    onCancel() {
        this._router.navigate(['../'], { relativeTo: this._route });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
CourseCreateComponent = __decorate([
    core_1.Component({
        selector: 'course-create',
        templateUrl: __webpack_require__(950)
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService])
], CourseCreateComponent);
exports.CourseCreateComponent = CourseCreateComponent;


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
const router_1 = __webpack_require__(16);
const rxjs_1 = __webpack_require__(26);
const course_service_1 = __webpack_require__(122);
const cricket_service_1 = __webpack_require__(121);
const mendelpede_scenarios_service_1 = __webpack_require__(65);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(45);
const interfaces_1 = __webpack_require__(951);
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
                    this._mpedeScenarioService.listScenarios(this.courseInfo.level).takeUntil(this.isDestroyed$)
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
        templateUrl: __webpack_require__(953)
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
const router_1 = __webpack_require__(16);
const ng_bootstrap_1 = __webpack_require__(70);
const rxjs_1 = __webpack_require__(26);
const course_service_1 = __webpack_require__(122);
const authentication_service_1 = __webpack_require__(17);
const confirm_delete_dialog_component_1 = __webpack_require__(422);
const student_interface_1 = __webpack_require__(930);
const read_error_1 = __webpack_require__(45);
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
    deleteInstructor(userId) {
        console.log('Deleting ' + userId);
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
        templateUrl: __webpack_require__(954),
        styleUrls: [__webpack_require__(955)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        course_service_1.CourseService,
        authentication_service_1.AuthenticationService,
        ng_bootstrap_1.NgbModal])
], CourseEditComponent);
exports.CourseEditComponent = CourseEditComponent;


/***/ }),

/***/ 935:
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
        templateUrl: __webpack_require__(956)
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        authentication_service_1.AuthenticationService])
], CourseListComponent);
exports.CourseListComponent = CourseListComponent;


/***/ }),

/***/ 936:
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
const router_1 = __webpack_require__(16);
const rxjs_1 = __webpack_require__(26);
const course_service_1 = __webpack_require__(122);
const cricket_service_1 = __webpack_require__(121);
const authentication_service_1 = __webpack_require__(17);
const student_service_1 = __webpack_require__(421);
const read_error_1 = __webpack_require__(45);
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
        templateUrl: __webpack_require__(957),
        styles: ['.access-status { color: #495057; }', '.student-label {font-weight: 500; }']
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

/***/ 937:
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
const router_1 = __webpack_require__(16);
const rxjs_1 = __webpack_require__(26);
const course_service_1 = __webpack_require__(122);
const mendelpede_scenarios_service_1 = __webpack_require__(65);
const authentication_service_1 = __webpack_require__(17);
const student_service_1 = __webpack_require__(421);
const read_error_1 = __webpack_require__(45);
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
        this.scoreMap = new Map();
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
                    this.students.forEach((student) => {
                        this._studentService.getMendelFridge(this.admin.id, student.userId, scenCode)
                            .takeUntil(this.isDestroyed$)
                            .subscribe((mfridge) => {
                            let score = 'Quiz not submitted yet';
                            if (mfridge.quiz) {
                                score = mfridge.quiz.score.toString();
                            }
                            this.scoreMap[student.userId] = score;
                        }, (error) => {
                            this.errorMessage = read_error_1.readErrorMessage(error);
                        });
                    });
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
    getQuizScore(studentId) {
        return this.scoreMap[studentId];
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
        templateUrl: __webpack_require__(958),
        styles: []
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

/***/ 938:
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
const rxjs_1 = __webpack_require__(26);
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

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-create/course-create.template.html";

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(952));
__export(__webpack_require__(930));
__export(__webpack_require__(423));


/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLevels = ['all', 'graduate', 'undergraduate'];


/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-indiv/course-indiv.template.html";

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-edit/course-edit.template.html";

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-edit/course-edit.style.css";

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-list/course-list.template.html";

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-scenario/course-scenario.template.html";

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-mendel-scenario/course-mendel-scenario.template.html";

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const course_resolver_1 = __webpack_require__(938);
const scenario_resolver_1 = __webpack_require__(185);
const mendelpede_scenario_resolver_1 = __webpack_require__(186);
const course_create_component_1 = __webpack_require__(932);
const course_indiv_component_1 = __webpack_require__(933);
const course_edit_component_1 = __webpack_require__(934);
const course_list_component_1 = __webpack_require__(935);
const course_scenario_component_1 = __webpack_require__(936);
const course_mendel_scenario_component_1 = __webpack_require__(937);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLW1lbmRlbC1zY2VuYXJpby9jb3Vyc2UtbWVuZGVsLXNjZW5hcmlvLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UucmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9pbnRlcmZhY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaW50ZXJmYWNlcy9jb3Vyc2UuaW50ZXJmYWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1zY2VuYXJpby9jb3Vyc2Utc2NlbmFyaW8udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbWVuZGVsLXNjZW5hcmlvL2NvdXJzZS1tZW5kZWwtc2NlbmFyaW8udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHlDQUErQztBQUMvQyxnREFBMEQ7QUFFMUQsMkRBQWdGO0FBQ2hGLDBEQUE2RTtBQUM3RSx5REFBMEU7QUFDMUUseURBQTBFO0FBQzFFLDZEQUFzRjtBQUN0RixvRUFBeUc7QUFDekcsbUVBQTRGO0FBRTVGLGlEQUErQztBQUMvQyxtREFBbUQ7QUEwQm5ELElBQWEsWUFBWSxHQUF6QjtDQUE0QjtBQUFmLFlBQVk7SUFwQnhCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDRCQUFZO1lBQ1oscUJBQVksQ0FBQyxRQUFRLENBQUMsNEJBQVksQ0FBQztTQUNwQztRQUNELFlBQVksRUFBRTtZQUNaLCtDQUFxQjtZQUNyQiw2Q0FBb0I7WUFDcEIsMkNBQW1CO1lBQ25CLDJDQUFt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QUFTLENBQUMsQ0FBQyxDQUFDO2dDQUN2QyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUNYLENBQUM7NEJBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDWCxDQUFDO3dCQUNILENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7NEJBQ3BDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDWixDQUFDOzRCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dDQUN2QyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUNYLENBQUM7NEJBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDWCxDQUFDO3dCQUNILENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7NEJBQzlDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDWixDQUFDOzRCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dDQUN2QyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUNYLENBQUM7NEJBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDWCxDQUFDO3dCQUNILENBQUMsQ0FBQzt3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c0JBQXNCLEVBQUM7cUJBQzVDO29CQUNEO3dCQUNFLElBQUksRUFBRSwyQkFBMkI7d0JBQ2pDLFNBQVMsRUFBRSxnRUFBNkI7d0JBQ3hDLE9BQU8sRUFBRSxFQUFDLGtCQUFrQixFQUFFLHlEQUEwQixFQUFDO3dCQUN6RCxJQUFJLEVBQUUsRUFBQyxXQUFXLEVBQUUsZ0NBQWdDLEVBQUM7cUJBQ3REO29CQUNFLEVBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ1QsU0FBUyxFQUFFLDZDQUFvQixFQUFDO2lCQUNqQzthQUNEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLDJDQUFtQjthQUMvQjtTQUNHO0tBQ0w7Q0FDQSxDQUFDIiwiZmlsZSI6IjItY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgQ291cnNlQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZUluZGl2Q29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZVNjZW5hcmlvQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VNZW5kZWxTY2VuYXJpb0NvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLW1lbmRlbC1zY2VuYXJpby9jb3Vyc2UtbWVuZGVsLXNjZW5hcmlvLmNvbXBvbmVudCdcbmltcG9ydCB7IENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvdXJzZVJvdXRlcyB9IGZyb20gJy4vY291cnNlLnJvdXRlcyc7XG5pbXBvcnQgeyBDb3Vyc2VSZXNvbHZlciB9IGZyb20gJy4vY291cnNlLnJlc29sdmVyJztcblxuLyoqXG4gKiBNb2R1bGUgZm9yIGNvdXJzZS1yZWxhdGVkIHRhc2tzIGxpa2UgYWRkaW5nLCBlZGl0aW5nLCBcbiAqIGRlbGV0aW5nLCBhbmQgdmlld2luZyBhIGNvdXJzZSBhbmQgdGhlIHN0dWRlbnRzIGluIGEgY291cnNlXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKENvdXJzZVJvdXRlcylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ291cnNlQ3JlYXRlQ29tcG9uZW50LFxuICAgIENvdXJzZUluZGl2Q29tcG9uZW50LFxuICAgIENvdXJzZUVkaXRDb21wb25lbnQsXG4gICAgQ291cnNlTGlzdENvbXBvbmVudCxcbiAgICBDb3Vyc2VTY2VuYXJpb0NvbXBvbmVudCxcbiAgICBDb3Vyc2VNZW5kZWxTY2VuYXJpb0NvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIENvdXJzZVJlc29sdmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ291cnNlTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLm1vZHVsZS50cyIsImltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4vY291cnNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBfVXNlciB9IGZyb20gJy4vdXNlci5pbnRlcmZhY2UnO1xuLy8gIGZpcnN0TmFtZTogc3RyaW5nO1xuLy8gIGxhc3ROYW1lOiBzdHJpbmc7XG4vLyAgdXNlcklkOiBudW1iZXI7XG5cbi8qKlxuICogSW5mb3JtYXRpb24gbmVlZGVkIGFzIGEgdXNlciB1c2luZyB0aGUgYXBwIGluIHNjZW5hcmlvc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0dWRlbnQgZXh0ZW5kcyBfVXNlciB7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBhY2Nlc3NHcmFudGVkPzogYW55O1xuICBzdGF0dXM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gbmVlZGVkIGZvciBhZG1pbiBwYWdlcyBhYm91dCBhIHVzZXIvc3R1ZGVudFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFkbWluU3R1ZGVudCBleHRlbmRzIFN0dWRlbnQge1xuICBjb3Vyc2U6IENvdXJzZTtcbiAgcm9sZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHNvcnQgc3R1ZGVudHMgYWxwaGFiZXRpY2FsbHkgYnkgbGFzdCBuYW1lO1xuICogVXNlcyBmaXJzdCBuYW1lIGZvciB0aWVzXG4gKlxuICogTWFrZXMgdGhlIG5hbWUgbG93ZXJjYXNlIGJlZm9yZSBzb3J0aW5nIHRvIGVuc3VyZSBzb3J0IGlzXG4gKiBjYXNlIGluc2Vuc2l0aXZlXG4gKi9cbmV4cG9ydCBjb25zdCBzb3J0U3R1ZGVudHMgPSBmdW5jdGlvbihhLGIpe1xuICAgIHZhciBjb21wYXJpc29uID0gYS5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAoY29tcGFyaXNvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGEuZmlyc3ROYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLmZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBhcmlzb247XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4uL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJ1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBjcmVhdGUgYSBuZXcgY291cnNlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvdXJzZS1jcmVhdGUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb3Vyc2UtY3JlYXRlLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIENvdXJzZUNyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlIGZyb20gdGhlIGJhY2tlbmQgc2VydmVyIHdoZW4gdHJ5aW5nIHRvXG4gICAqIGNyZWF0ZSB0aGUgY291cnNlXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiAtIENvdXJzZSBkZXRhaWxzIHRvIGJlIHNlbnQgdG8gdGhlIGJhY2tlbmQgc2VydmVyXG4gICAqIC0gSW5jbHVkZXMgYGNvdXJzZU51bWAgYW5kIGBkZXNjcmlwdGlvbmBcbiAgICovXG4gIHByaXZhdGUgY291cnNlOiBGb3JtR3JvdXA7XG4gIC8qKlxuICAgKiBMb2dnZWQgaW4gYWRtaW4gdXNlclxuICAgKi9cbiAgcHJpdmF0ZSBhZG1pbjogVXNlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICApe1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gaW5pdGlhbGl6aW5nIHRoZSBjb21wb25lbnQsIGdldCB0aGUgY3VycmVudGx5IGxvZ2dlZFxuICAgKiBpbiB1c2VyXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgLy8gc2V0IHVwIGZvciBncm91cDtcbiAgICB0aGlzLmNvdXJzZSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgJ2NvdXJzZU51bSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAnZGVzY3JpcHRpb24nOiBuZXcgRm9ybUNvbnRyb2woJycpLFxuICAgICAgJ2xldmVsJzogbmV3IEZvcm1Db250cm9sKCdhbGwnKVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGNvdXJzZU51bSgpeyByZXR1cm4gdGhpcy5jb3Vyc2UuZ2V0KCdjb3Vyc2VOdW0nKTsgfVxuICBnZXQgZGVzY3JpcHRpb24oKXsgcmV0dXJuIHRoaXMuY291cnNlLmdldCgnZGVzY3JpcHRpb24nKTsgfVxuICBnZXQgbGV2ZWwoKXsgcmV0dXJuIHRoaXMuY291cnNlLmdldCgnbGV2ZWwnKTsgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGF0IGEgY291cnNlIG51bWJlciBoYXMgYmVlbiBlbnRlcmVkIHRoZW5cbiAgICogc3VibWl0IGNvdXJzZSBkZXRhaWxzIHRvIGJhY2tlbmRcbiAgICpcbiAgICogSWYgY291cnNlIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLCBnbyBiYWNrIHRvIGxpc3Qgb2YgY291cnNlc1xuICAgKiBJZiBlcnJvciwgZGlzcGxheSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBjcmVhdGVDb3Vyc2UoKXtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2NvdXJzZVNlcnZpY2VcbiAgICAgIC5jcmVhdGVDb3Vyc2UodGhpcy5hZG1pbi5pZCwgdGhpcy5jb3Vyc2UudmFsdWUpXG4gICAgICAuc3Vic2NyaWJlKCAocmVzdWx0KT0+e1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycuLi8nLCByZXN1bHQuY291cnNlTnVtXSwge3JlbGF0aXZlVG86IHRoaXMuX3JvdXRlfSlcbiAgICAgIH0sIChlcnIpPT57XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiogV2hlbiBjYW5jZWwgYnV0dG9uIGlzIHByZXNzZWQsIGdvIGJhY2sgdG8gdGhlIGNvdXJzZSBsaXN0aW5nIHBhZ2UgKi9cbiAgb25DYW5jZWwoKXtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycuLi8nXSwge3JlbGF0aXZlVG86IHRoaXMuX3JvdXRlfSk7XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RvcnksIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4uL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IENyaWNrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY3JpY2tldC9jcmlja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL21lbmRlbHBlZGUvc2NlbmFyaW9zL21lbmRlbHBlZGUtc2NlbmFyaW9zLnNlcnZpY2UnXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbmltcG9ydCB7IENvdXJzZSwgQ291cnNlTGV2ZWxzLCBTdHVkZW50LCBzb3J0U3R1ZGVudHMsIFNjZW5hcmlvLCBVc2VyLCBNZW5kZWxwZWRlU2NlbmFyaW8gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291cnNlLWluZGl2JyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWluZGl2LnRlbXBsYXRlLmh0bWwnKVxufSlcblxuXG4vKipcbiAqIENvbXBvbmVudCB0byB2aWV3IGFuIGluZGl2aWR1YWwgY291cnNlXG4gKiBJbmNsdWRlcyBpbmZvcm1hdGlvbiBzdWNoIGFzIGNvdXJzZSBudW1iZXIsIGRlc2NyaXB0aW9uLCBpbnN0cnVjdG9ycywgYW5kIHN0dWRlbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBDb3Vyc2VJbmRpdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogTGlzdCBvZiBzdHVkZW50cyBlbnJvbGxlZCBpbiB0aGUgY291cnNlXG4gICAqL1xuICBwcml2YXRlIHN0dWRlbnRzOiBTdHVkZW50W10gPSBbXTtcbiAgLyoqXG4gICAqIENvdXJzZSBpbmZvIGluY2x1ZGluZyBgY291cnNlTnVtYCwgYGRlc2NyaXB0aW9uYCwgYGluc3RydWN0b3JzYFxuICAgKi9cbiAgY291cnNlSW5mbzogQ291cnNlO1xuICAvKipcbiAgICogbGlzdCBvZiBhdmFpbGFibGUgc2NlbmFyaW9zICh1c2VkIGZvciBsaW5raW5nKVxuICAgKi9cbiAgcHJpdmF0ZSBzY2VuYXJpb3M6IFNjZW5hcmlvW107XG4gIC8qKlxuICAgKiBTdGF0ZSB2YXJpYWJsZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbSBzZXJ2aWNlcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICBwcml2YXRlIHBhcmFtT2JzZXJ2ZXI6IGFueTtcblxuICAvKipcbiAgICogUG90ZW50aWFsIGVycm9yIG1lc3NhZ2UgdGhhdCBjb3VsZCBhcmlzZVxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBNZW5kZWxwZWRlIHNjZW5hcmlvc1xuICAgKi9cbiAgcHJpdmF0ZSBtcGVkZU9wdGlvbnM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdO1xuXG4gIG1wZWRlU2NlbmFyaW9zOiBNZW5kZWxwZWRlU2NlbmFyaW9bXSA9IEFycmF5KCk7XG4gIHF1aXplczogTWVuZGVscGVkZVNjZW5hcmlvW10gPSBBcnJheSgpO1xuICBkaXNjb3ZlcmllczogTWVuZGVscGVkZVNjZW5hcmlvW10gPSBBcnJheSgpO1xuICBwYXRod2F5czogTWVuZGVscGVkZVNjZW5hcmlvW10gPSBBcnJheSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBDcmlja2V0U2VydmljZSxcbiAgICBwcml2YXRlIF9tcGVkZVNjZW5hcmlvU2VydmljZTogTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSwgKSB7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYWxsIGNvbnRlbnQgb24gdGhlIHBhZ2UgdXNpbmcgc2V2ZXJhbCBzZXJ2aWNlc1xuICAgKiAxLiBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqIDIuIEdldCB0aGUgY291cnNlIGluZm9ybWF0aW9uIChkZXNjcmlwdGlvbiwgaW5zdHJ1Y3RvcnMpXG4gICAqIDMuIEdldCB0aGUgbGlzdCBvZiBzdHVkZW50cyBpbiB0aGUgY291cnNlXG4gICAqIDQuIEdldCB0aGUgbGlzdCBvZiBzY2VuYXJpb3NcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBhZG1pbjogVXNlciA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBsZXQgY291cnNlID0gcGFyYW1zWydjb3Vyc2VOdW0nXTtcbiAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0Q291cnNlKGFkbWluLmlkLCBjb3Vyc2UpXG4gICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgIC5zdWJzY3JpYmUoKGluZm8pID0+IHtcbiAgICAgICAgICB0aGlzLmNvdXJzZUluZm8gPSBpbmZvO1xuICAgICAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0U3R1ZGVudHMoYWRtaW4uaWQsIGNvdXJzZSlcbiAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChzdHVkZW50cykgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzID0gc3R1ZGVudHMuc29ydChzb3J0U3R1ZGVudHMpO1xuICAgICAgICAgICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UubGlzdFNjZW5hcmlvcygpXG4gICAgICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChzY2VucykgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuYXJpb3MgPSBzY2VucztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5fbXBlZGVTY2VuYXJpb1NlcnZpY2UubGlzdFNjZW5hcmlvcyh0aGlzLmNvdXJzZUluZm8ubGV2ZWwpLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChzY2VucykgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5tcGVkZU9wdGlvbnMgPSBzY2VucztcbiAgICAgICAgICAgICAgICAgIHRoaXMubXBlZGVPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnNjZW5UeXBlID09PSAnc2NlbmFyaW8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5tcGVkZVNjZW5hcmlvcy5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uLnNjZW5UeXBlID09PSAncXVpeicpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXplcy5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uLnNjZW5UeXBlID09PSAnZGlzY292ZXJ5Jykge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzY292ZXJpZXMucHVzaChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbi5zY2VuVHlwZSA9PT0gJ3BhdGh3YXknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRod2F5cy5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5tcGVkZVNjZW5hcmlvcyA9IHRoaXMubXBlZGVTY2VuYXJpb3Muc29ydCgobzEsIG8yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvMS5vcmRPZlNjZW4gPCBvMi5vcmRPZlNjZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobzEub3JkT2ZTY2VuID4gbzIub3JkT2ZTY2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB0aGlzLnF1aXplcyA9IHRoaXMucXVpemVzLnNvcnQoKG8xLCBvMikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobzEub3JkT2ZTY2VuIDwgbzIub3JkT2ZTY2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG8xLm9yZE9mU2NlbiA+IG8yLm9yZE9mU2Nlbikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgdGhpcy5kaXNjb3ZlcmllcyA9IHRoaXMuZGlzY292ZXJpZXMuc29ydCgobzEsIG8yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvMS5vcmRPZlNjZW4gPCBvMi5vcmRPZlNjZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobzEub3JkT2ZTY2VuID4gbzIub3JkT2ZTY2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB0aGlzLnBhdGh3YXlzID0gdGhpcy5wYXRod2F5cy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8xLm9yZE9mU2NlbiA8IG8yLm9yZE9mU2Nlbikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvMS5vcmRPZlNjZW4gPiBvMi5vcmRPZlNjZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHN1YnNjcmlwdGlvbnMgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWluZGl2L2NvdXJzZS1pbmRpdi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4uL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ291cnNlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9jb3Vyc2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFN0dWRlbnQsIEFkbWluU3R1ZGVudCwgc29ydFN0dWRlbnRzIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3Vyc2UtZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2NvdXJzZS1lZGl0LnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9jb3Vyc2UtZWRpdC5zdHlsZS5jc3MnKV1cbn0pXG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBlZGl0dGluZyBjb3Vyc2UgZGV0YWlscyBzdWNoIGFzXG4gKiBhZGRpbmcvcmVtb3ZpbmcgaW5zdHJ1Y3RvcnMsIHVwZGF0aW5nIGNvdXJzZSBkZXNjcmlwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ291cnNlRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuXG4gIC8qKlxuICAgKiBDb3Vyc2UgYmVpbmcgZWRpdGVkXG4gICAqL1xuICBjb3Vyc2VJbmZvOiBDb3Vyc2U7XG4gIC8qKlxuICAgKiBMaXN0IG9mIHBvc3NpYmxlIGluc3RydWN0b3JzIHdobyBjb3VsZCBiZSBhZGRlZFxuICAgKi9cbiAgcHJpdmF0ZSBwb3NzaWJsZUluc3RyOiBBZG1pblN0dWRlbnRbXTtcbiAgLyoqXG4gICAqIFZhcmlhYmxlIHVzZWQgdG8gcmVtZW1iZXIgaW5zdHIgc2VsZWN0ZWQgd2hlbiBhZGRpbmdcbiAgICovXG4gIHNlbGVjdGVkQWRkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgbG9nZ2VkIGluIHVzZXJcbiAgICovXG4gIHByaXZhdGUgX2FkbWluOiBVc2VyO1xuICBwcml2YXRlIHBhcmFtT2JzZXJ2ZXI6IGFueTtcbiAgLyoqXG4gICAqIFN0YXRlIHZhcmlhYmxlIHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIHNlcnZpY2VzIGVhc2llclxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZXMgZnJvbSB0aGUgYmFja2VuZCBzZXJ2ZXJcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTmdiTW9kYWwpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBpbml0XG4gICAqIDEuIGdldCB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogMi4gVXNlIHRoZSB1cmwgcGFyYW0gdG8gZ2V0IGNvdXJzZSBudW1iZXJcbiAgICogMy4gR2V0IGNvdXJzZSBkZXRhaWxzICh1c2luZyBjb3VyZU51bSlcbiAgICogNC4gR2V0IHBvc3NpYmxlIGluc3RydWN0b3JzICh1c2luZyBjb3Vyc2VOdW0pXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuX2FkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIHRoaXMucGFyYW1PYnNlcnZlciA9IHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGxldCBjb3Vyc2UgPSBwYXJhbXNbJ2NvdXJzZU51bSddO1xuXG4gICAgICAgICAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldENvdXJzZSh0aGlzLl9hZG1pbi5pZCwgY291cnNlKVxuICAgICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3Vyc2VJbmZvID0gaW5mbztcbiAgICAgICAgICAgICAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldFBvc3NpYmxlSW5zdHJ1Y3RvcnModGhpcy5fYWRtaW4uaWQsIGNvdXJzZSlcbiAgICAgICAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChpbnN0cnMpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGVJbnN0ciA9IGluc3Rycy5zb3J0KHNvcnRTdHVkZW50cyk7XG4gICAgICAgICAgICAgICAgfSwgKGVycjIpPT57XG4gICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyMik7XG4gICAgICAgICAgICAgICAgICB0aGlzLnBvc3NpYmxlSW5zdHIgPSBbXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSwoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgY2FuY2VsIGJ1dHRvbiBpcyBwcmVzc2VkLCBuYXZpZ2F0ZSBiYWNrIHRvIGNvdXJzZSB2aWV3IHBhZ2VcbiAgICovXG4gIG9uQ2FuY2VsKCl7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLi4vJ10sIHtyZWxhdGl2ZVRvOiB0aGlzLl9yb3V0ZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkLCBzdWJtaXQgdGhlIHVwZGF0ZXMgdG8gYmVcbiAgICogc2F2ZWQgaW4gdGhlIGJhY2tlbmRcbiAgICovXG4gIHVwZGF0ZSgpe1xuICAgIHRoaXMuX2NvdXJzZVNlcnZpY2VcbiAgICAgIC5lZGl0Q291cnNlKHRoaXMuX2FkbWluLmlkLCB0aGlzLmNvdXJzZUluZm8uY291cnNlTnVtLCB0aGlzLmNvdXJzZUluZm8pXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAuc3Vic2NyaWJlKCAocmVzdWx0KT0+e1xuICAgICAgLy8gc3VjY2Vzc1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLi4vJ10sIHtyZWxhdGl2ZVRvOiB0aGlzLl9yb3V0ZX0pXG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIC0gV2hlbiBhZGQgaW5zdHJ1Y3RvciBidXR0b24gaXMgY2xpY2tlZCwgc2VuZCB0aGUgc2VsZWN0ZWRcbiAgICogaW5zdHJ1Y3RvciAoYnkgdXNlcklkKSB0byB0aGUgYmFja2VuZCB0byBiZSBhZGRlZCBhcyBhbiBpbnN0cnVjdG9yXG4gICAqIC0gSWYgc3VjY2Vzc2Z1bCwgdXBkYXRlIGxpc3Qgb2YgcG9zc2libGUgaW5zdHJ1Y3RvcnNcbiAgICovXG4gIGFkZEluc3RydWN0b3IoKXtcbiAgICBpZih0aGlzLnNlbGVjdGVkQWRkKXtcbiAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlXG4gICAgICAuYWRkSW5zdHJ1Y3Rvcih0aGlzLl9hZG1pbi5pZCwgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bSwgdGhpcy5zZWxlY3RlZEFkZClcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKCh1cGRhdGVkKT0+e1xuICAgICAgdGhpcy5jb3Vyc2VJbmZvID0gdXBkYXRlZDtcbiAgICAgIHRoaXMucG9zc2libGVJbnN0ciA9IHRoaXMucG9zc2libGVJbnN0ci5maWx0ZXIoKGVsbSk9PntcbiAgICAgICAgcmV0dXJuIGVsbS51c2VySWQgIT0gdGhpcy5zZWxlY3RlZEFkZFxuICAgICAgfSk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUluc3RydWN0b3IodXNlcklkOiBudW1iZXIpe1xuICAgIGNvbnNvbGUubG9nKCdEZWxldGluZyAnK3VzZXJJZCk7XG4gIH1cblxuICAvKipcbiAgICogLSBXaGVuIGNsaWNraW5nIGRlbGV0ZSBjb3Vyc2UgYnV0dG9uLCBvcGVuIGEgZGlhbG9nXG4gICAqIHRvIGNvbmZpcm0gZGVsZXRpb25cbiAgICogLSBJZiBjb25maXJtZWQsIGNhbGwgaGVscGVyIG1ldGhvZFxuICAgKiAtIElmIGNhbmNlbCwgZG8gbm90aGluZ1xuICAgKi9cbiAgZGVsZXRlQ291cnNlKCl7XG4gICAgY29uc3QgbW9kZWxSZWYgPSB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50LCB7c2l6ZTogJ3NtJywgd2luZG93Q2xhc3M6ICdkZWxldGUtbW9kYWwnfSk7XG4gICAgbW9kZWxSZWYuY29tcG9uZW50SW5zdGFuY2UubWVzc2FnZSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGNvdXJzZSAnICsgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bSArICc/JztcblxuICAgIG1vZGVsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpPT57XG4gICAgICBpZihyZXN1bHQgPT09ICdkZWxldGUnKXtcbiAgICAgICAgdGhpcy5fY2FsbERlbGV0ZUNvdXJzZSgpXG4gICAgICB9XG4gICAgfSwgKGRpc21pc3MpPT57XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHdoaWNoIHVzZXMgc2VydmljZSB0byB0ZWxsIHNlcnZlciB0byBkZWxldGUgdGhlIGNvdXJzZVxuICAgKi9cbiAgX2NhbGxEZWxldGVDb3Vyc2UoKXtcbiAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmRlbGV0ZUNvdXJzZSh0aGlzLl9hZG1pbi5pZCwgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bSlcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIC8vIHN1Y2Nlc3NmdWxcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9jb3Vyc2VzJ10pO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIC0gV2hlbiBkZWxldGUgc3R1ZGVudHMgYnV0dG9uIGlzIGNsaWNrLFxuICAgKiBvcGVuIGEgZGlhbG9nIHRvIGNvbmZpcm0gZGVsZXRpb25cbiAgICogLSBJZiBjb25maXJtLCBjYWxsIGhlbHBlciBtZXRob2RcbiAgICogLSBJZiBjYW5jZWwsIGRvIG5vdGhpbmdcbiAgICovXG4gIGRlbGV0ZUNvdXJzZVN0dWRlbnRzKCl7XG4gICAgY29uc3QgbW9kZWxSZWYgPSB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50LCB7c2l6ZTogJ3NtJ30pO1xuICAgIG1vZGVsUmVmLmNvbXBvbmVudEluc3RhbmNlLm1lc3NhZ2UgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBhbGwgc3R1ZGVudHMgaW4gY291cnNlICcgKyB0aGlzLmNvdXJzZUluZm8uY291cnNlTnVtICsgJz8nO1xuXG4gICAgbW9kZWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCk9PntcbiAgICAgIGlmKHJlc3VsdCA9PT0gJ2RlbGV0ZScpe1xuICAgICAgICB0aGlzLl9jYWxsRGVsZXRlQ291cnNlU3R1ZGVudHMoKVxuICAgICAgfVxuICAgIH0sIChkaXNtaXNzKT0+e1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB3aXRoIHRlbGxzIHNlcnZpY2UgdG8gZGVsZXRlIGFsbCBvZiB0aGVcbiAgICogc3R1ZGVudHMgaW4gdGhpcyBjb3Vyc2VcbiAgICovXG4gIF9jYWxsRGVsZXRlQ291cnNlU3R1ZGVudHMoKXtcbiAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmRlbGV0ZVN0dWRlbnRzKHRoaXMuX2FkbWluLmlkLCB0aGlzLmNvdXJzZUluZm8uY291cnNlTnVtKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgLy8gc3VjY2Vzc2Z1bFxuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL2NvdXJzZXMvJywgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bV0pO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgdG8gcHJldmVudCBhIG1lbW9yeSBsZWFrXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWVkaXQvY291cnNlLWVkaXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ291cnNlLCBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHdoaWNoIGxpc3RzIGF2YWlsYWJsZSBjb3Vyc2VzIGJhc2VkIG9uIGxvZ2dlZC1pbiB1c2VyIHJvbGVcbiAqIC0gSWYgYWRtaW4sIGxpc3RzIGFsbCBhdmFpbGFibGUgY291cnNlc1xuICogLSBJZiBpbnN0ciwgbGlzdCBjb3Vyc2VzIHdoaWNoIGluc3RydWN0b3Igb2ZcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb3Vyc2UtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWxpc3QudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIENvdXJzZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgLyoqXG4gICAqIExpc3Qgb2YgY291cnNlc1xuICAgKi9cbiAgICBwcml2YXRlIGNvdXJzZXM6IENvdXJzZVtdO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIGNvdXJzZSBzZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICkge31cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgY29tcG9uZW50IGJ5IGdldHRpbmcgbGlzdCBvZiBjb3Vyc2VzXG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICBsZXQgYWRtaW46IFVzZXIgPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2NvdXJzZVNlcnZpY2UubGlzdENvdXJzZXMoYWRtaW4uaWQpXG4gICAgICAgIC5zdWJzY3JpYmUoKGNvdXJzZXMpID0+IHtcbiAgICAgICAgdGhpcy5jb3Vyc2VzID0gY291cnNlc1xuICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4uL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IENyaWNrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY3JpY2tldC9jcmlja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3N0dWRlbnQvc3R1ZGVudC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ291cnNlLCBTdHVkZW50LCBTY2VuYXJpbywgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvJztcblxuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBkaXNwbGF5cyB0aGUgc2NlbmFyaW8gc3RhdHVzIG9mIGFsbCBzdHVkZW50c1xuICogd2l0aGluIHRoZSBjb3Vyc2UgYW5kIGFsbG93cyBmb3IgbmF2aWdhdGlvbiB0byBzdHVkZW50IGZyaWRnZXNcbiAqIGFuZCBncmFudCBhY2Nlc3MgZm9yIGEgc3R1ZGVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3Vyc2Utc2NlbicsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2NvdXJzZS1zY2VuYXJpby50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlczogWycuYWNjZXNzLXN0YXR1cyB7IGNvbG9yOiAjNDk1MDU3OyB9JywgJy5zdHVkZW50LWxhYmVsIHtmb250LXdlaWdodDogNTAwOyB9J11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb3Vyc2VTY2VuYXJpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogTGlzdCBvZiBzdHVkZW50cyBpbiB0aGUgY291cnNlXG4gICAqL1xuICBwcm90ZWN0ZWQgc3R1ZGVudHM6IFN0dWRlbnRbXSA9IFtdO1xuICAvKipcbiAgICogVGhlIGNvdXJzZSBudW1iZXJcbiAgICovXG4gIHByaXZhdGUgY291cnNlTnVtOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc2NlbmFyaW9cbiAgICovXG4gIHByb3RlY3RlZCBzY2VuYXJpbzogU2NlbmFyaW87XG4gIC8qKlxuICAgKiBTdGF0ZSB2YXJpYWJsZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbSBzZXJ2aWNlcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIG9ic2VydmUgdXJsIGBjb3Vyc2VOdW1gIHBhcmFtZXRlclxuICAgKi9cbiAgcHJpdmF0ZSBwYXJhbU9ic2VydmVyOiBhbnk7XG4gIC8qKlxuICAqIFRoZSBsb2dnZWQgaW4gYWRtaW4gdXNlclxuICAqL1xuICBwcml2YXRlIGFkbWluOiBVc2VyO1xuICAvKipcbiAgICogUG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3N0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IENyaWNrZXRTZXJ2aWNlXG4gICAgICAgICAgICAgICl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRhbGl6ZSB0aGUgY29tcG9uZW50XG4gICAqIDEuIEdldCB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogMi4gQmFzZWQgb24gdGhlIFVSTCwgZ2V0IHRoZSBjb3Vyc2UgbnVtYmVyIGFuZCBzY2VuYXJpbyBjb2RlXG4gICAqIDMuIEdldCB0aGUgc2NlbmFyaW8gaW5mb3JtYXRpb25cbiAgICogNC4gR2V0IHRoZSBzY2VuYXJpbyBzdGF0dXMgb2Ygc3R1ZGVudHMgaW4gdGhlIGNvdXJzZVxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZG1pbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXNcbiAgICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICBsZXQgY291cnNlID0gcGFyYW1zWydjb3Vyc2VOdW0nXTtcbiAgICAgICAgICBsZXQgc2NlbkNvZGUgPSBwYXJhbXNbJ3NjZW5JZCddO1xuICAgICAgdGhpcy5jb3Vyc2VOdW0gPSBjb3Vyc2UudG9VcHBlckNhc2UoKTtcbiAgICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5nZXRTY2VuYXJpbyhzY2VuQ29kZSlcbiAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgICB0aGlzLnNjZW5hcmlvID0gcmVzO1xuICAgICAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldFNjZW5hcmlvU3RhdHVzKHRoaXMuYWRtaW4uaWQsIGNvdXJzZSwgc2NlbkNvZGUpXG4gICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAuc3Vic2NyaWJlKChzdGF0cyk9PntcblxuICAgICAgICAgICAgdGhpcy5zdHVkZW50cyA9IHN0YXRzO1xuICAgICAgICB9LCAoZXJyMik9PntcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyMik7XG4gICAgICAgIH0pO1xuXG4gICAgICB9LCAoZXJyKT0+e1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1wbGUgZm9ybWF0dGluZyBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGZvcm1hdHRlZCBzdHJpbmdcbiAgICogZGVwZW5kaW5nIG9uIGlmIHN0dWRlbnQgaGFzIGFjY2VzcyBncmFudGVkIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzR3JhbnRlZCAtIGhhcyBhY2Nlc3MgYmVlbiBncmFudGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gZm9ybWF0dGVkIHN0cmluZzsgXCJBY2Nlc3MgZ3JhbnRlZFwiIGlmIGFjY2VzcyBoYXMgYmVlbiBncmFudGVkLCBcIkFjY2VzcyBub3QgZ3JhbnRlZFwiIG90aGVyd2lzZVxuICAgKi9cbiAgZm9ybWF0QWNjZXNzKGlzR3JhbnRlZDogYm9vbGVhbik6IHN0cmluZ3tcbiAgICByZXR1cm4gKGlzR3JhbnRlZCA/ICdBY2Nlc3MgZ3JhbnRlZCcgOiAnQWNjZXNzIG5vdCBncmFudGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgc2VydmljZSB0byBncmFudCB0aGUgc3R1ZGVudCBhY2Nlc3MgdG8gdGhlIHNjZW5hcmlvXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2YgXCJHcmFudCBhY2Nlc3NcIiBidXR0b24gZm9yIGEgc3R1ZGVudFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3R1ZGVudEluZGV4IC0gcG9zaXRpb25hbCBpbmRleCBvZiBzdHVkZW50IGluIHRoZSBsaXN0IG9mIHN0dWRlbnRzO1xuICAgKiBUaGlzIGlzICoqTk9UKiogdGhlIHN0dWRlbnQncyB1c2VySWRcbiAgICovXG4gIGdyYW50QWNjZXNzKHN0dWRlbnRJbmRleDogbnVtYmVyKXtcbiAgICBsZXQgc2NlbklkID0gdGhpcy5zY2VuYXJpby5zY2VuQ29kZTtcbiAgICBsZXQgc3R1ZGVudElkID0gdGhpcy5zdHVkZW50c1tzdHVkZW50SW5kZXhdLnVzZXJJZDtcbiAgICB0aGlzLl9zdHVkZW50U2VydmljZS5ncmFudFNjZW5BY2Nlc3ModGhpcy5hZG1pbi5pZCwgc3R1ZGVudElkLCBzY2VuSWQsIHRydWUpXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICBpZihyZXMgIT09IHVuZGVmaW5lZCAmJiByZXMgIT09IG51bGwpe1xuICAgICAgICAgIHRoaXMuc3R1ZGVudHNbc3R1ZGVudEluZGV4XS5zdGF0dXMgPSByZXMuYWNjZXNzR3JhbnRlZFtzY2VuSWRdO1xuICAgICAgICB9XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogT24gXCJWaWV3IEZyaWRnZVwiIGJ1dHRvbiwgbmF2aWdhdGVzIHRvIHRoYXQgc3R1ZGVudCdzIGZyaWRnZVxuICAgKiBmb3IgdGhpcyBzY2VuYXJpb1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIFwiVmlldyBGcmlkZ2VcIiBidXR0b24gb2YgYSBzdHVkZW50XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB0aGUgc3R1ZGVudCdzIHVzZXJJRFxuICAgKi9cbiAgZ29Ub0ZyaWRnZShzdHVkZW50SWQ6IG51bWJlcil7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL3N0dWRlbnRzLycsIHN0dWRlbnRJZCwnY3JpY2tldCcsIHRoaXMuc2NlbmFyaW8uc2NlbkNvZGVdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgY29tcG9uZW50LCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbWVuZGVscGVkZS9zY2VuYXJpb3MvbWVuZGVscGVkZS1zY2VuYXJpb3Muc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3R1ZGVudC9zdHVkZW50LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDb3Vyc2UsIFN0dWRlbnQsIFVzZXIsIE1lbmRlbHBlZGVTY2VuYXJpbyB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvJztcblxuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBkaXNwbGF5cyB0aGUgc2NlbmFyaW8gc3RhdHVzIG9mIGFsbCBzdHVkZW50c1xuICogd2l0aGluIHRoZSBjb3Vyc2UgYW5kIGFsbG93cyBmb3IgbmF2aWdhdGlvbiB0byBzdHVkZW50IGZyaWRnZXNcbiAqIGFuZCBncmFudCBhY2Nlc3MgZm9yIGEgc3R1ZGVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3Vyc2Utc2NlbicsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2NvdXJzZS1tZW5kZWwtc2NlbmFyaW8udGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZXM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgQ291cnNlTWVuZGVsU2NlbmFyaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2Ygc3R1ZGVudHMgaW4gdGhlIGNvdXJzZVxuICAgKi9cbiAgcHJvdGVjdGVkIHN0dWRlbnRzOiBTdHVkZW50W10gPSBbXTtcbiAgLyoqXG4gICAqIFRoZSBjb3Vyc2UgbnVtYmVyXG4gICAqL1xuICBwcml2YXRlIGNvdXJzZU51bTogc3RyaW5nO1xuICAvKipcbiAgICogSW5mb3JtYXRpb24gYWJvdXQgdGhlIHNjZW5hcmlvXG4gICAqL1xuICBwcm90ZWN0ZWQgc2NlbmFyaW86IE1lbmRlbHBlZGVTY2VuYXJpbztcbiAgLyoqXG4gICAqIFN0YXRlIHZhcmlhYmxlIHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIHNlcnZpY2VzIGVhc2llclxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gb2JzZXJ2ZSB1cmwgYGNvdXJzZU51bWAgcGFyYW1ldGVyXG4gICAqL1xuICBwcml2YXRlIHBhcmFtT2JzZXJ2ZXI6IGFueTtcbiAgLyoqXG4gICogVGhlIGxvZ2dlZCBpbiBhZG1pbiB1c2VyXG4gICovXG4gIHByaXZhdGUgYWRtaW46IFVzZXI7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgYmFja2VuZCBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogU2NvcmVtYXAgd2hpY2ggY29udGFpbnMgcXVpeiBzY29yZSBmb3IgYWxsIGxpc3RlZCBzdHVkZW50cyBpZiBhbnlcbiAgICovXG4gIHByaXZhdGUgc2NvcmVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX2NvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZVxuICAgICAgICAgICAgICApe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0YWxpemUgdGhlIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqIDIuIEJhc2VkIG9uIHRoZSBVUkwsIGdldCB0aGUgY291cnNlIG51bWJlciBhbmQgc2NlbmFyaW8gY29kZVxuICAgKiAzLiBHZXQgdGhlIHNjZW5hcmlvIGluZm9ybWF0aW9uXG4gICAqIDQuIEdldCB0aGUgc2NlbmFyaW8gc3RhdHVzIG9mIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2VcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zXG4gICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgbGV0IGNvdXJzZSA9IHBhcmFtc1snY291cnNlTnVtJ107XG4gICAgICAgICAgbGV0IHNjZW5Db2RlID0gcGFyYW1zWydzY2VuU2hvcnRDb2RlJ107XG4gICAgICAgICAgdGhpcy5jb3Vyc2VOdW0gPSBjb3Vyc2UudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0U2NlbmFyaW8oc2NlbkNvZGUpXG4gICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgICAgICAgIHRoaXMuc2NlbmFyaW8gPSByZXM7XG4gICAgICAgICAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldE1lbmRlbFNjZW5hcmlvU3RhdHVzKHRoaXMuYWRtaW4uaWQsIGNvdXJzZSwgc2NlbkNvZGUpXG4gICAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0YXRzKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudHMgPSBzdGF0cztcbiAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzLmZvckVhY2goKHN0dWRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldE1lbmRlbEZyaWRnZSh0aGlzLmFkbWluLmlkLCBzdHVkZW50LnVzZXJJZCwgc2NlbkNvZGUpXG4gICAgICAgICAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKG1mcmlkZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd3ZSBnb3QgZnJpZGdlIGZyb20gZGInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NvbWluZyBmb3IgcXVpeicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzY29yZSA9ICdRdWl6IG5vdCBzdWJtaXR0ZWQgeWV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1mcmlkZ2UucXVpeil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZSA9IG1mcmlkZ2UucXVpei5zY29yZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTWFwW3N0dWRlbnQudXNlcklkXSA9IHNjb3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgKGVycjIpPT57XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfSwgKGVycik9PntcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIGZvcm1hdHRpbmcgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBmb3JtYXR0ZWQgc3RyaW5nXG4gICAqIGRlcGVuZGluZyBvbiBpZiBzdHVkZW50IGhhcyBhY2Nlc3MgZ3JhbnRlZCBvciBub3RcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0dyYW50ZWQgLSBoYXMgYWNjZXNzIGJlZW4gZ3JhbnRlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGZvcm1hdHRlZCBzdHJpbmc7IFwiQWNjZXNzIGdyYW50ZWRcIiBpZiBhY2Nlc3MgaGFzIGJlZW4gZ3JhbnRlZCwgXCJBY2Nlc3Mgbm90IGdyYW50ZWRcIiBvdGhlcndpc2VcbiAgICovXG4gIGZvcm1hdEFjY2Vzcyhpc0dyYW50ZWQ6IGJvb2xlYW4pOiBzdHJpbmd7XG4gICAgcmV0dXJuIChpc0dyYW50ZWQgPyAnQWNjZXNzIGdyYW50ZWQnIDogJ0FjY2VzcyBub3QgZ3JhbnRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc2NvcmUgb2YgdGhlIHN0dWRlbnRcbiAgICogQHBhcmFtIHN0dWRlbnRJZDogc3R1ZGVudCB1c2VyaWQgXG4gICAqL1xuICBnZXRRdWl6U2NvcmUoc3R1ZGVudElkOiBzdHJpbmcpe1xuICAgIC8vY29uc29sZS5sb2codGhpcy5zY29yZU1hcCk7XG4gICAgLy9jb25zb2xlLmxvZyhzY2VuSWQpO1xuICAgIHJldHVybiB0aGlzLnNjb3JlTWFwW3N0dWRlbnRJZF07XG4gIH1cblxuICAvKipcbiAgICogT24gXCJWaWV3IEZyaWRnZVwiIGJ1dHRvbiwgbmF2aWdhdGVzIHRvIHRoYXQgc3R1ZGVudCdzIGZyaWRnZVxuICAgKiBmb3IgdGhpcyBzY2VuYXJpb1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIFwiVmlldyBGcmlkZ2VcIiBidXR0b24gb2YgYSBzdHVkZW50XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB0aGUgc3R1ZGVudCdzIHVzZXJJRFxuICAgKi9cbiAgZ29Ub0ZyaWRnZShzdHVkZW50SWQ6IG51bWJlcil7XG4gICAgLy8gc3R1ZGVudC1pbmRpdlxuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9zdHVkZW50cy8nLCBzdHVkZW50SWQsJ21lbmRlbHBlZGUnLCB0aGlzLnNjZW5hcmlvLnNob3J0Q29kZV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbWVuZGVsLXNjZW5hcmlvL2NvdXJzZS1tZW5kZWwtc2NlbmFyaW8uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUmVzb2x2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvY291cnNlLmludGVyZmFjZSc7XG5cbi8qKlxuICogRm9yIHRoZSBuYXZpZ2F0aW9uIGJyZWFkY3J1bWIsIHJlc29sdmVzIGEgVVJMIGNvdXJzZU51bSBwYXJhbWVldGVyXG4gKiB0byB0aGUgY291cnNlIG51bWJlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ291cnNlUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPENvdXJzZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICAgICAgICAgICAgKSB7IH1cbiAgLyoqXG4gICAqIEJhc2VkIG9uIHRoZSBVUkwgYGNvdXJzZU51bWAgcGFyYW1ldGVyLCBmaW5kIHRoZSBjb3Vyc2VcbiAgICogaXQgYmVsb25ncyB0b1xuICAgKlxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIC0gcm91dGUgVVJMIGF0IHRoZSBtb21lbnRcbiAgICogQHBhcmFtIHtSb3V0ZXJTdGF0ZVNuYXBzaG90fSBzdGF0ZSAtIHJvdXRlciBzdGF0ZTsgbmVlZGVkIHRvIGltcGxlbWVudCBpbnRlcmZhY2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gVGhlIGNvdXJzZSBpbmZvIGZvciB0aGUgY291cnNlTnVtXG4gICAqIG9yIGFuIGVtcHR5IG9ic2VydmFibGUgaWYgdGhlIGlkIGRvZXNuJ3QgYmVsb25nIHRvIGFueSBjb3Vyc2VcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Q291cnNlPiB7XG4gICAgbGV0IGFkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIGNvbnN0IGNvdXJzZU51bSA9IHJvdXRlLnBhcmFtc1snY291cnNlTnVtJ107XG5cbiAgICBpZiAoY291cnNlTnVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY291cnNlU2VydmljZS5nZXRDb3Vyc2UoYWRtaW4uaWQsIGNvdXJzZU51bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS5yZXNvbHZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1jcmVhdGUvY291cnNlLWNyZWF0ZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydCAqIGZyb20gJy4vY291cnNlLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZyaWRnZS5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9waGFnZS5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zY2VuYXJpby5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHVkZW50LmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwZXJpbWVudC5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tZW5kZWxwZWRlLXNjZW5hcmlvcy5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tZW5kZWxwZWRlLXBlZGUuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbWVuZGVscGVkZS1mcmlkZ2UuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbWVuZGVscGVkZS1xdWl6LmludGVyZmFjZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9pbnRlcmZhY2VzL2luZGV4LnRzIiwiaW1wb3J0IHsgU3R1ZGVudCB9IGZyb20gJy4vc3R1ZGVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgX1VzZXIgfSBmcm9tICcuL3VzZXIuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IENvdXJzZUxldmVscyA9IFsnYWxsJywgJ2dyYWR1YXRlJywgJ3VuZGVyZ3JhZHVhdGUnXTtcbi8qKlxuICogSW5mb3JtYXRpb24gYWJvdXQgYSBjb3Vyc2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb3Vyc2Uge1xuICAvKipcbiAgICogQ291cnNlIG51bWJlclxuICAgKi9cbiAgY291cnNlTnVtOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBvZiB0aGUgY291cnNlXG4gICAqL1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvKipcbiAgICogTGlzdCBvZiBzdHVkZW50cyBpbiB0aGUgY291cnNlLCBpZiBhbnlcbiAgICovXG4gIHN0dWRlbnRzPzogU3R1ZGVudFtdO1xuICAvKipcbiAgICogSW5zdHJ1Y3RvcnMgb2YgdGhlIGNvdXJzZSwgaWYgYW55XG4gICAqL1xuICBpbnN0cnVjdG9ycz86IF9Vc2VyW107XG5cbiAgLyoqXG4gICAqIENvdXJzZSBsZXZlbDogJ2FsbCcsICdncmFkdWF0ZScsIG9yICd1bmRlcmdyYWR1YXRlJ1xuICAgKi9cbiAgbGV2ZWw6IHN0cmluZztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2ludGVyZmFjZXMvY291cnNlLmludGVyZmFjZS50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWluZGl2L2NvdXJzZS1pbmRpdi50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWVkaXQvY291cnNlLWVkaXQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWVkaXQvY291cnNlLWVkaXQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWVkaXQvY291cnNlLWVkaXQuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5NTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWxpc3QvY291cnNlLWxpc3QudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWxpc3QvY291cnNlLWxpc3QudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1zY2VuYXJpby9jb3Vyc2Utc2NlbmFyaW8udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLW1lbmRlbC1zY2VuYXJpby9jb3Vyc2UtbWVuZGVsLXNjZW5hcmlvLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1tZW5kZWwtc2NlbmFyaW8vY291cnNlLW1lbmRlbC1zY2VuYXJpby50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ291cnNlUmVzb2x2ZXIgfSBmcm9tICcuL2NvdXJzZS5yZXNvbHZlcic7XG5pbXBvcnQgeyBTY2VuYXJpb1Jlc29sdmVyIH0gZnJvbSAnLi4vLi4vY3JpY2tldC9zY2VuYXJpby5yZXNvbHZlcic7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9SZXNvbHZlciB9IGZyb20gJy4uLy4uL21lbmRlbHBlZGUvbWVuZGVscGVkZS1zY2VuYXJpby5yZXNvbHZlcidcblxuaW1wb3J0IHsgQ291cnNlQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZUluZGl2Q29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZVNjZW5hcmlvQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VNZW5kZWxTY2VuYXJpb0NvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLW1lbmRlbC1zY2VuYXJpby9jb3Vyc2UtbWVuZGVsLXNjZW5hcmlvLmNvbXBvbmVudCdcblxuZXhwb3J0IGNvbnN0IENvdXJzZVJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLFxuICAgY2hpbGRyZW46IFtcbiAge1xuICAgIHBhdGg6ICdjcmVhdGUnLFxuICAgIGNvbXBvbmVudDogQ291cnNlQ3JlYXRlQ29tcG9uZW50LFxuICAgIGRhdGE6IHticmVhZGNydW1iczogJ0NyZWF0ZSBuZXcgY291cnNlJ31cbiAgfSxcbiAgeyBwYXRoOiAnOmNvdXJzZU51bScsXG4gICByZXNvbHZlOiB7Y291cnNlOiBDb3Vyc2VSZXNvbHZlcn0sXG4gICBkYXRhOiB7YnJlYWRjcnVtYnM6ICd7e2NvdXJzZS5jb3Vyc2VOdW19fScgfSxcbiAgIGNoaWxkcmVuOiBbXG4gICAgIHsgcGF0aDogJ2VkaXQnLFxuICAgIGNvbXBvbmVudDogQ291cnNlRWRpdENvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJzpzY2VuSWQnLFxuICAgIGNvbXBvbmVudDogQ291cnNlU2NlbmFyaW9Db21wb25lbnQsXG4gICAgcmVzb2x2ZToge3NjZW5hcmlvOiBTY2VuYXJpb1Jlc29sdmVyfSxcbiAgICBkYXRhOiB7YnJlYWRjcnVtYnM6ICd7eyBzY2VuYXJpby5sYWJlbCB9fSd9XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnbWVuZGVscGVkZS86c2NlblNob3J0Q29kZScsXG4gICAgY29tcG9uZW50OiBDb3Vyc2VNZW5kZWxTY2VuYXJpb0NvbXBvbmVudCxcbiAgICByZXNvbHZlOiB7bWVuZGVscGVkZVNjZW5hcmlvOiBNZW5kZWxwZWRlU2NlbmFyaW9SZXNvbHZlcn0sXG4gICAgZGF0YToge2JyZWFkY3J1bWJzOiAne3sgbWVuZGVscGVkZVNjZW5hcmlvLmxhYmVsIH19J31cbiAgfSxcbiAgICAge3BhdGg6ICcnLFxuICAgICBjb21wb25lbnQ6IENvdXJzZUluZGl2Q29tcG9uZW50fVxuICAgXVxuICB9LFxuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBDb3Vyc2VMaXN0Q29tcG9uZW50XG4gIH1cbiAgICAgXVxufVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uucm91dGVzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==