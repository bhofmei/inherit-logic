webpackJsonp([1],{

<<<<<<< Updated upstream
/***/ 897:
=======
/***/ 1017:
>>>>>>> Stashed changes
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
const router_1 = __webpack_require__(22);
<<<<<<< Updated upstream
const shared_module_1 = __webpack_require__(64);
const course_create_component_1 = __webpack_require__(903);
const course_indiv_component_1 = __webpack_require__(904);
const course_edit_component_1 = __webpack_require__(905);
const course_list_component_1 = __webpack_require__(906);
const course_scenario_component_1 = __webpack_require__(907);
const confirm_delete_dialog_component_1 = __webpack_require__(412);
const course_routes_1 = __webpack_require__(929);
const course_resolver_1 = __webpack_require__(908);
=======
const shared_module_1 = __webpack_require__(53);
const course_create_component_1 = __webpack_require__(1023);
const course_indiv_component_1 = __webpack_require__(1024);
const course_edit_component_1 = __webpack_require__(1025);
const course_list_component_1 = __webpack_require__(1026);
const course_scenario_component_1 = __webpack_require__(1027);
const confirm_delete_dialog_component_1 = __webpack_require__(447);
const course_routes_1 = __webpack_require__(1049);
const course_resolver_1 = __webpack_require__(1028);
>>>>>>> Stashed changes
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
            course_scenario_component_1.CourseScenarioComponent
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

<<<<<<< Updated upstream
/***/ 901:
=======
/***/ 1021:
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
/***/ 903:
=======
/***/ 1023:
>>>>>>> Stashed changes
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
const router_1 = __webpack_require__(22);
<<<<<<< Updated upstream
const course_service_1 = __webpack_require__(182);
const authentication_service_1 = __webpack_require__(25);
const read_error_1 = __webpack_require__(63);
=======
const course_service_1 = __webpack_require__(202);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(64);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        templateUrl: __webpack_require__(919),
        styleUrls: [__webpack_require__(920)]
=======
        templateUrl: __webpack_require__(1039),
        styleUrls: [__webpack_require__(1040)]
>>>>>>> Stashed changes
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService])
], CourseCreateComponent);
exports.CourseCreateComponent = CourseCreateComponent;


/***/ }),

<<<<<<< Updated upstream
/***/ 904:
=======
/***/ 1024:
>>>>>>> Stashed changes
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
const router_1 = __webpack_require__(22);
<<<<<<< Updated upstream
const rxjs_1 = __webpack_require__(51);
const course_service_1 = __webpack_require__(182);
const scenario_service_1 = __webpack_require__(118);
const authentication_service_1 = __webpack_require__(25);
const read_error_1 = __webpack_require__(63);
const interfaces_1 = __webpack_require__(921);
=======
const rxjs_1 = __webpack_require__(52);
const course_service_1 = __webpack_require__(202);
const scenario_service_1 = __webpack_require__(128);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(64);
const interfaces_1 = __webpack_require__(1041);
>>>>>>> Stashed changes
let CourseIndivComponent = class CourseIndivComponent {
    constructor(_router, _route, _courseService, _authService, _scenarioService) {
        this._router = _router;
        this._route = _route;
        this._courseService = _courseService;
        this._authService = _authService;
        this._scenarioService = _scenarioService;
        this.students = [];
        this.errorMessage = '';
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
<<<<<<< Updated upstream
        templateUrl: __webpack_require__(922),
        styleUrls: [__webpack_require__(923)]
=======
        templateUrl: __webpack_require__(1042),
        styleUrls: [__webpack_require__(1043)]
>>>>>>> Stashed changes
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        course_service_1.CourseService,
        authentication_service_1.AuthenticationService,
        scenario_service_1.ScenarioService])
], CourseIndivComponent);
exports.CourseIndivComponent = CourseIndivComponent;


/***/ }),

<<<<<<< Updated upstream
/***/ 905:
=======
/***/ 1025:
>>>>>>> Stashed changes
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
const router_1 = __webpack_require__(22);
<<<<<<< Updated upstream
const ng_bootstrap_1 = __webpack_require__(119);
const rxjs_1 = __webpack_require__(51);
const course_service_1 = __webpack_require__(182);
const authentication_service_1 = __webpack_require__(25);
const confirm_delete_dialog_component_1 = __webpack_require__(412);
const student_interface_1 = __webpack_require__(901);
const read_error_1 = __webpack_require__(63);
=======
const ng_bootstrap_1 = __webpack_require__(129);
const rxjs_1 = __webpack_require__(52);
const course_service_1 = __webpack_require__(202);
const authentication_service_1 = __webpack_require__(18);
const confirm_delete_dialog_component_1 = __webpack_require__(447);
const student_interface_1 = __webpack_require__(1021);
const read_error_1 = __webpack_require__(64);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        templateUrl: __webpack_require__(924),
        styleUrls: [__webpack_require__(925)]
=======
        templateUrl: __webpack_require__(1044),
        styleUrls: [__webpack_require__(1045)]
>>>>>>> Stashed changes
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        course_service_1.CourseService,
        authentication_service_1.AuthenticationService,
        ng_bootstrap_1.NgbModal])
], CourseEditComponent);
exports.CourseEditComponent = CourseEditComponent;


/***/ }),

<<<<<<< Updated upstream
/***/ 906:
=======
/***/ 1026:
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
const course_service_1 = __webpack_require__(182);
const authentication_service_1 = __webpack_require__(25);
=======
const course_service_1 = __webpack_require__(202);
const authentication_service_1 = __webpack_require__(18);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        templateUrl: __webpack_require__(926)
=======
        templateUrl: __webpack_require__(1046)
>>>>>>> Stashed changes
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        authentication_service_1.AuthenticationService])
], CourseListComponent);
exports.CourseListComponent = CourseListComponent;


/***/ }),

<<<<<<< Updated upstream
/***/ 907:
=======
/***/ 1027:
>>>>>>> Stashed changes
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
const router_1 = __webpack_require__(22);
<<<<<<< Updated upstream
const rxjs_1 = __webpack_require__(51);
const course_service_1 = __webpack_require__(182);
const scenario_service_1 = __webpack_require__(118);
const authentication_service_1 = __webpack_require__(25);
const student_service_1 = __webpack_require__(411);
const read_error_1 = __webpack_require__(63);
=======
const rxjs_1 = __webpack_require__(52);
const course_service_1 = __webpack_require__(202);
const scenario_service_1 = __webpack_require__(128);
const authentication_service_1 = __webpack_require__(18);
const student_service_1 = __webpack_require__(446);
const read_error_1 = __webpack_require__(64);
>>>>>>> Stashed changes
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
        this._router.navigate(['/admin/students/', studentId, this.scenario.scenCode]);
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
<<<<<<< Updated upstream
        templateUrl: __webpack_require__(927),
        styleUrls: [__webpack_require__(928)]
=======
        templateUrl: __webpack_require__(1047),
        styleUrls: [__webpack_require__(1048)]
>>>>>>> Stashed changes
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        course_service_1.CourseService,
        student_service_1.StudentService,
        scenario_service_1.ScenarioService])
], CourseScenarioComponent);
exports.CourseScenarioComponent = CourseScenarioComponent;


/***/ }),

<<<<<<< Updated upstream
/***/ 908:
=======
/***/ 1028:
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
const rxjs_1 = __webpack_require__(51);
const course_service_1 = __webpack_require__(182);
const authentication_service_1 = __webpack_require__(25);
=======
const rxjs_1 = __webpack_require__(52);
const course_service_1 = __webpack_require__(202);
const authentication_service_1 = __webpack_require__(18);
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
/***/ 919:
=======
/***/ 1039:
>>>>>>> Stashed changes
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-create/course-create.template.html";

/***/ }),

<<<<<<< Updated upstream
/***/ 920:
=======
/***/ 1040:
>>>>>>> Stashed changes
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-create/course-create.style.css";

/***/ }),

<<<<<<< Updated upstream
/***/ 921:
=======
/***/ 1041:
>>>>>>> Stashed changes
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< Updated upstream
__export(__webpack_require__(901));
=======
__export(__webpack_require__(1021));
>>>>>>> Stashed changes


/***/ }),

<<<<<<< Updated upstream
/***/ 922:
=======
/***/ 1042:
>>>>>>> Stashed changes
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-indiv/course-indiv.template.html";

/***/ }),

<<<<<<< Updated upstream
/***/ 923:
=======
/***/ 1043:
>>>>>>> Stashed changes
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-indiv/course-indiv.style.css";

/***/ }),

<<<<<<< Updated upstream
/***/ 924:
=======
/***/ 1044:
>>>>>>> Stashed changes
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-edit/course-edit.template.html";

/***/ }),

<<<<<<< Updated upstream
/***/ 925:
=======
/***/ 1045:
>>>>>>> Stashed changes
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-edit/course-edit.style.css";

/***/ }),

<<<<<<< Updated upstream
/***/ 926:
=======
/***/ 1046:
>>>>>>> Stashed changes
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-list/course-list.template.html";

/***/ }),

<<<<<<< Updated upstream
/***/ 927:
=======
/***/ 1047:
>>>>>>> Stashed changes
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-scenario/course-scenario.template.html";

/***/ }),

<<<<<<< Updated upstream
/***/ 928:
=======
/***/ 1048:
>>>>>>> Stashed changes
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-scenario/course-scenario.style.css";

/***/ }),

<<<<<<< Updated upstream
/***/ 929:
=======
/***/ 1049:
>>>>>>> Stashed changes
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< Updated upstream
const course_resolver_1 = __webpack_require__(908);
const scenario_resolver_1 = __webpack_require__(183);
const course_create_component_1 = __webpack_require__(903);
const course_indiv_component_1 = __webpack_require__(904);
const course_edit_component_1 = __webpack_require__(905);
const course_list_component_1 = __webpack_require__(906);
const course_scenario_component_1 = __webpack_require__(907);
=======
const course_resolver_1 = __webpack_require__(1028);
const scenario_resolver_1 = __webpack_require__(203);
const course_create_component_1 = __webpack_require__(1023);
const course_indiv_component_1 = __webpack_require__(1024);
const course_edit_component_1 = __webpack_require__(1025);
const course_list_component_1 = __webpack_require__(1026);
const course_scenario_component_1 = __webpack_require__(1027);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLnJlc29sdmVyLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1jcmVhdGUvY291cnNlLWNyZWF0ZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1jcmVhdGUvY291cnNlLWNyZWF0ZS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9pbnRlcmZhY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1zY2VuYXJpby9jb3Vyc2Utc2NlbmFyaW8udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHlDQUErQztBQUMvQyxnREFBMEQ7QUFFMUQsMkRBQWdGO0FBQ2hGLDBEQUE2RTtBQUM3RSx5REFBMEU7QUFDMUUseURBQTBFO0FBQzFFLDZEQUFzRjtBQUN0RixtRUFBNEY7QUFFNUYsaURBQStDO0FBQy9DLG1EQUFtRDtBQXlCbkQsSUFBYSxZQUFZLEdBQXpCO0NBQTRCO0FBQWYsWUFBWTtJQW5CeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsNEJBQVk7WUFDWixxQkFBWSxDQUFDLFFBQVEsQ0FBQyw0QkFBWSxDQUFDO1NBQ3BDO1FBQ0QsWUFBWSxFQUFFO1lBQ1osK0NBQXFCO1lBQ3JCLDZDQUFvQjtZQUNwQiwyQ0FBbUI7WUFDbkIsMkNBQW1CO1lBQ25CLG1EQUF1QjtTQUN4QjtRQUNELGVBQWUsRUFB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ekUsb0JBQVksR0FBVztJQUNsQyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFO1lBQ1g7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLCtDQUFxQjtnQkFDaEMsSUFBSSxFQUFFLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDO2FBQ3pDO1lBQ0QsRUFBRSxJQUFJLEVBQUUsWUFBWTtnQkFDbkIsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLGdDQUFjLEVBQUM7Z0JBQ2pDLElBQUksRUFBRSxFQUFDLFdBQVcsRUFBRSxzQkFBc0IsRUFBRTtnQkFDNUMsUUFBUSxFQUFFO29CQUNSLEVBQUUsSUFBSSxFQUFFLE1BQU07d0JBQ2YsU0FBUyxFQUFFLDJDQUFtQjtxQkFDL0I7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsU0FBUyxFQUFFLG1EQUF1Qjt3QkFDbEMsT0FBTyxFQUFFLEVBQUMsUUFBUSxFQUFFLG9DQUFnQixFQUFDO3dCQUNyQyxJQUFJLEVBQUUsRUFBQyxXQUFXLEVBQUUsc0JBQXNCLEVBQUM7cUJBQzVDO29CQUNFLEVBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ1QsU0FBUyxFQUFFLDZDQUFvQixFQUFDO2lCQUNqQzthQUNEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLDJDQUFtQjthQUMvQjtTQUNHO0tBQ0w7Q0FDQSxDQUFDIiwiZmlsZSI6IjEtY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgQ291cnNlQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZUluZGl2Q29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZVNjZW5hcmlvQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb3Vyc2VSb3V0ZXMgfSBmcm9tICcuL2NvdXJzZS5yb3V0ZXMnO1xuaW1wb3J0IHsgQ291cnNlUmVzb2x2ZXIgfSBmcm9tICcuL2NvdXJzZS5yZXNvbHZlcic7XG5cbi8qKlxuICogTW9kdWxlIGZvciBjb3Vyc2UtcmVsYXRlZCB0YXNrcyBsaWtlIGFkZGluZywgZWRpdGluZywgXG4gKiBkZWxldGluZywgYW5kIHZpZXdpbmcgYSBjb3Vyc2UgYW5kIHRoZSBzdHVkZW50cyBpbiBhIGNvdXJzZVxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChDb3Vyc2VSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvdXJzZUNyZWF0ZUNvbXBvbmVudCxcbiAgICBDb3Vyc2VJbmRpdkNvbXBvbmVudCxcbiAgICBDb3Vyc2VFZGl0Q29tcG9uZW50LFxuICAgIENvdXJzZUxpc3RDb21wb25lbnQsXG4gICAgQ291cnNlU2NlbmFyaW9Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb3Vyc2VSZXNvbHZlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvdXJzZU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb3Vyc2UgfSBmcm9tICcuL2NvdXJzZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgX1VzZXIgfSBmcm9tICcuL3VzZXIuaW50ZXJmYWNlJztcbi8vICBmaXJzdE5hbWU6IHN0cmluZztcbi8vICBsYXN0TmFtZTogc3RyaW5nO1xuLy8gIHVzZXJJZDogbnVtYmVyO1xuXG4vKipcbiAqIEluZm9ybWF0aW9uIG5lZWRlZCBhcyBhIHVzZXIgdXNpbmcgdGhlIGFwcCBpbiBzY2VuYXJpb3NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHVkZW50IGV4dGVuZHMgX1VzZXIge1xuICBlbWFpbD86IHN0cmluZztcbiAgYWNjZXNzR3JhbnRlZD86IGFueTtcbiAgc3RhdHVzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIG5lZWRlZCBmb3IgYWRtaW4gcGFnZXMgYWJvdXQgYSB1c2VyL3N0dWRlbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZG1pblN0dWRlbnQgZXh0ZW5kcyBTdHVkZW50IHtcbiAgY291cnNlOiBDb3Vyc2U7XG4gIHJvbGU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBzb3J0IHN0dWRlbnRzIGFscGhhYmV0aWNhbGx5IGJ5IGxhc3QgbmFtZTtcbiAqIFVzZXMgZmlyc3QgbmFtZSBmb3IgdGllc1xuICpcbiAqIE1ha2VzIHRoZSBuYW1lIGxvd2VyY2FzZSBiZWZvcmUgc29ydGluZyB0byBlbnN1cmUgc29ydCBpc1xuICogY2FzZSBpbnNlbnNpdGl2ZVxuICovXG5leHBvcnQgY29uc3Qgc29ydFN0dWRlbnRzID0gZnVuY3Rpb24oYSxiKXtcbiAgICB2YXIgY29tcGFyaXNvbiA9IGEubGFzdE5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIubGFzdE5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKGNvbXBhcmlzb24gPT09IDApIHtcbiAgICAgIHJldHVybiBhLmZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi5maXJzdE5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wYXJpc29uO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcidcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gY3JlYXRlIGEgbmV3IGNvdXJzZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3Vyc2UtY3JlYXRlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWNyZWF0ZS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vY291cnNlLWNyZWF0ZS5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb3Vyc2VDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBiYWNrZW5kIHNlcnZlciB3aGVuIHRyeWluZyB0b1xuICAgKiBjcmVhdGUgdGhlIGNvdXJzZVxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogLSBDb3Vyc2UgZGV0YWlscyB0byBiZSBzZW50IHRvIHRoZSBiYWNrZW5kIHNlcnZlclxuICAgKiAtIEluY2x1ZGVzIGBjb3Vyc2VOdW1gIGFuZCBgZGVzY3JpcHRpb25gXG4gICAqL1xuICBwcml2YXRlIGNvdXJzZURldGFpbHM6IGFueSA9IHt9O1xuICAvKipcbiAgICogTG9nZ2VkIGluIGFkbWluIHVzZXJcbiAgICovXG4gIHByaXZhdGUgYWRtaW46IFVzZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgKXt9XG5cbiAgLyoqXG4gICAqIFdoZW4gaW5pdGlhbGl6aW5nIHRoZSBjb21wb25lbnQsIGdldCB0aGUgY3VycmVudGx5IGxvZ2dlZFxuICAgKiBpbiB1c2VyXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhhdCBhIGNvdXJzZSBudW1iZXIgaGFzIGJlZW4gZW50ZXJlZCB0aGVuXG4gICAqIHN1Ym1pdCBjb3Vyc2UgZGV0YWlscyB0byBiYWNrZW5kXG4gICAqXG4gICAqIElmIGNvdXJzZSBzdWNjZXNzZnVsbHkgY3JlYXRlZCwgZ28gYmFjayB0byBsaXN0IG9mIGNvdXJzZXNcbiAgICogSWYgZXJyb3IsIGRpc3BsYXkgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgY3JlYXRlQ291cnNlKCl7XG4gICAgaWYodGhpcy5jb3Vyc2VEZXRhaWxzLmNvdXJzZU51bT09PScnKXtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0NvdXJzZSBudW1iZXIgaXMgcmVxdWlyZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fY291cnNlU2VydmljZVxuICAgICAgLmNyZWF0ZUNvdXJzZSh0aGlzLmFkbWluLmlkLCB0aGlzLmNvdXJzZURldGFpbHMpXG4gICAgLnN1YnNjcmliZSggKHJlc3VsdCk9PntcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy4uLycsIHJlc3VsdC5jb3Vyc2VOdW1dLCB7cmVsYXRpdmVUbzogdGhpcy5fcm91dGV9KVxuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RvcnksIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4uL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NjZW5hcmlvL3NjZW5hcmlvLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG5pbXBvcnQgeyBDb3Vyc2UsIFN0dWRlbnQsIHNvcnRTdHVkZW50cywgU2NlbmFyaW8sIFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291cnNlLWluZGl2JyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWluZGl2LnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9jb3Vyc2UtaW5kaXYuc3R5bGUuY3NzJyldXG59KVxuXG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHZpZXcgYW4gaW5kaXZpZHVhbCBjb3Vyc2VcbiAqIEluY2x1ZGVzIGluZm9ybWF0aW9uIHN1Y2ggYXMgY291cnNlIG51bWJlciwgZGVzY3JpcHRpb24sIGluc3RydWN0b3JzLCBhbmQgc3R1ZGVudHNcbiAqL1xuZXhwb3J0IGNsYXNzIENvdXJzZUluZGl2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2Ygc3R1ZGVudHMgZW5yb2xsZWQgaW4gdGhlIGNvdXJzZVxuICAgKi9cbiAgcHJpdmF0ZSBzdHVkZW50czogU3R1ZGVudFtdID0gW107XG4gIC8qKlxuICAgKiBDb3Vyc2UgaW5mbyBpbmNsdWRpbmcgYGNvdXJzZU51bWAsIGBkZXNjcmlwdGlvbmAsIGBpbnN0cnVjdG9yc2BcbiAgICovXG4gIGNvdXJzZUluZm86IENvdXJzZTtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgYXZhaWxhYmxlIHNjZW5hcmlvcyAodXNlZCBmb3IgbGlua2luZylcbiAgICovXG4gIHByaXZhdGUgc2NlbmFyaW9zOiBTY2VuYXJpb1tdO1xuICAvKipcbiAgICogU3RhdGUgdmFyaWFibGUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gc2VydmljZXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgcHJpdmF0ZSBwYXJhbU9ic2VydmVyOiBhbnk7XG5cbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlIHRoYXQgY291bGQgYXJpc2VcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhbGwgY29udGVudCBvbiB0aGUgcGFnZSB1c2luZyBzZXZlcmFsIHNlcnZpY2VzXG4gICAqIDEuIEdldCB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogMi4gR2V0IHRoZSBjb3Vyc2UgaW5mb3JtYXRpb24gKGRlc2NyaXB0aW9uLCBpbnN0cnVjdG9ycylcbiAgICogMy4gR2V0IHRoZSBsaXN0IG9mIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2VcbiAgICogNC4gR2V0IHRoZSBsaXN0IG9mIHNjZW5hcmlvc1xuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICBsZXQgYWRtaW46IFVzZXIgPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdXJzZSA9IHBhcmFtc1snY291cnNlTnVtJ107XG4gICAgICAgICAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldENvdXJzZShhZG1pbi5pZCwgY291cnNlKVxuICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY291cnNlSW5mbyA9IGluZm87XG4gICAgICAgICAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0U3R1ZGVudHMoYWRtaW4uaWQsIGNvdXJzZSlcbiAgICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc3R1ZGVudHMpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50cyA9IHN0dWRlbnRzLnNvcnQoc29ydFN0dWRlbnRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UubGlzdFNjZW5hcmlvcygpXG4gICAgICAgICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc2NlbnMpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmFyaW9zID0gc2NlbnM7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHN1YnNjcmlwdGlvbnMgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi4vY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb3Vyc2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2NvdXJzZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3R1ZGVudCwgQWRtaW5TdHVkZW50LCBzb3J0U3R1ZGVudHMgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvdXJzZS1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWVkaXQudGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2NvdXJzZS1lZGl0LnN0eWxlLmNzcycpXVxufSlcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVkaXR0aW5nIGNvdXJzZSBkZXRhaWxzIHN1Y2ggYXNcbiAqIGFkZGluZy9yZW1vdmluZyBpbnN0cnVjdG9ycywgdXBkYXRpbmcgY291cnNlIGRlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb3Vyc2VFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG5cbiAgLyoqXG4gICAqIENvdXJzZSBiZWluZyBlZGl0ZWRcbiAgICovXG4gIGNvdXJzZUluZm86IENvdXJzZTtcbiAgLyoqXG4gICAqIExpc3Qgb2YgcG9zc2libGUgaW5zdHJ1Y3RvcnMgd2hvIGNvdWxkIGJlIGFkZGVkXG4gICAqL1xuICBwcml2YXRlIHBvc3NpYmxlSW5zdHI6IEFkbWluU3R1ZGVudFtdO1xuICAvKipcbiAgICogVmFyaWFibGUgdXNlZCB0byByZW1lbWJlciBpbnN0ciBzZWxlY3RlZCB3aGVuIGFkZGluZ1xuICAgKi9cbiAgc2VsZWN0ZWRBZGQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBsb2dnZWQgaW4gdXNlclxuICAgKi9cbiAgcHJpdmF0ZSBfYWRtaW46IFVzZXI7XG4gIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuICAvKipcbiAgICogU3RhdGUgdmFyaWFibGUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gc2VydmljZXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlcyBmcm9tIHRoZSBiYWNrZW5kIHNlcnZlclxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGluaXRcbiAgICogMS4gZ2V0IHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKiAyLiBVc2UgdGhlIHVybCBwYXJhbSB0byBnZXQgY291cnNlIG51bWJlclxuICAgKiAzLiBHZXQgY291cnNlIGRldGFpbHMgKHVzaW5nIGNvdXJlTnVtKVxuICAgKiA0LiBHZXQgcG9zc2libGUgaW5zdHJ1Y3RvcnMgKHVzaW5nIGNvdXJzZU51bSlcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5fYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdXJzZSA9IHBhcmFtc1snY291cnNlTnVtJ107XG5cbiAgICAgICAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0Q291cnNlKHRoaXMuX2FkbWluLmlkLCBjb3Vyc2UpXG4gICAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZUluZm8gPSBpbmZvO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0UG9zc2libGVJbnN0cnVjdG9ycyh0aGlzLl9hZG1pbi5pZCwgY291cnNlKVxuICAgICAgICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGluc3Rycyk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZUluc3RyID0gaW5zdHJzLnNvcnQoc29ydFN0dWRlbnRzKTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyMik9PntcbiAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIyKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGVJbnN0ciA9IFtdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9LChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBjYW5jZWwgYnV0dG9uIGlzIHByZXNzZWQsIG5hdmlnYXRlIGJhY2sgdG8gY291cnNlIHZpZXcgcGFnZVxuICAgKi9cbiAgb25DYW5jZWwoKXtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycuLi8nXSwge3JlbGF0aXZlVG86IHRoaXMuX3JvdXRlfSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQsIHN1Ym1pdCB0aGUgdXBkYXRlcyB0byBiZVxuICAgKiBzYXZlZCBpbiB0aGUgYmFja2VuZFxuICAgKi9cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy5fY291cnNlU2VydmljZVxuICAgICAgLmVkaXRDb3Vyc2UodGhpcy5fYWRtaW4uaWQsIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW0sIHRoaXMuY291cnNlSW5mbylcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoIChyZXN1bHQpPT57XG4gICAgICAvLyBzdWNjZXNzXG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycuLi8nXSwge3JlbGF0aXZlVG86IHRoaXMuX3JvdXRlfSlcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogLSBXaGVuIGFkZCBpbnN0cnVjdG9yIGJ1dHRvbiBpcyBjbGlja2VkLCBzZW5kIHRoZSBzZWxlY3RlZFxuICAgKiBpbnN0cnVjdG9yIChieSB1c2VySWQpIHRvIHRoZSBiYWNrZW5kIHRvIGJlIGFkZGVkIGFzIGFuIGluc3RydWN0b3JcbiAgICogLSBJZiBzdWNjZXNzZnVsLCB1cGRhdGUgbGlzdCBvZiBwb3NzaWJsZSBpbnN0cnVjdG9yc1xuICAgKi9cbiAgYWRkSW5zdHJ1Y3Rvcigpe1xuICAgIGlmKHRoaXMuc2VsZWN0ZWRBZGQpe1xuICAgIHRoaXMuX2NvdXJzZVNlcnZpY2VcbiAgICAgIC5hZGRJbnN0cnVjdG9yKHRoaXMuX2FkbWluLmlkLCB0aGlzLmNvdXJzZUluZm8uY291cnNlTnVtLCB0aGlzLnNlbGVjdGVkQWRkKVxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHVwZGF0ZWQpPT57XG4gICAgICB0aGlzLmNvdXJzZUluZm8gPSB1cGRhdGVkO1xuICAgICAgdGhpcy5wb3NzaWJsZUluc3RyID0gdGhpcy5wb3NzaWJsZUluc3RyLmZpbHRlcigoZWxtKT0+e1xuICAgICAgICByZXR1cm4gZWxtLnVzZXJJZCAhPSB0aGlzLnNlbGVjdGVkQWRkXG4gICAgICB9KTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gICAgfVxuICB9XG4gIC8vIFRPRE86IHJlbW92ZSBpbnN0cnVjdG9yXG5cbiAgLyoqXG4gICAqIC0gV2hlbiBjbGlja2luZyBkZWxldGUgY291cnNlIGJ1dHRvbiwgb3BlbiBhIGRpYWxvZ1xuICAgKiB0byBjb25maXJtIGRlbGV0aW9uXG4gICAqIC0gSWYgY29uZmlybWVkLCBjYWxsIGhlbHBlciBtZXRob2RcbiAgICogLSBJZiBjYW5jZWwsIGRvIG5vdGhpbmdcbiAgICovXG4gIGRlbGV0ZUNvdXJzZSgpe1xuICAgIGNvbnN0IG1vZGVsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudCwge3NpemU6ICdzbScsIHdpbmRvd0NsYXNzOiAnZGVsZXRlLW1vZGFsJ30pO1xuICAgIG1vZGVsUmVmLmNvbXBvbmVudEluc3RhbmNlLm1lc3NhZ2UgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBjb3Vyc2UgJyArIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW0gKyAnPyc7XG5cbiAgICBtb2RlbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KT0+e1xuICAgICAgaWYocmVzdWx0ID09PSAnZGVsZXRlJyl7XG4gICAgICAgIHRoaXMuX2NhbGxEZWxldGVDb3Vyc2UoKVxuICAgICAgfVxuICAgIH0sIChkaXNtaXNzKT0+e1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB3aGljaCB1c2VzIHNlcnZpY2UgdG8gdGVsbCBzZXJ2ZXIgdG8gZGVsZXRlIHRoZSBjb3Vyc2VcbiAgICovXG4gIF9jYWxsRGVsZXRlQ291cnNlKCl7XG4gICAgdGhpcy5fY291cnNlU2VydmljZS5kZWxldGVDb3Vyc2UodGhpcy5fYWRtaW4uaWQsIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW0pXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAvLyBzdWNjZXNzZnVsXG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4vY291cnNlcyddKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiAtIFdoZW4gZGVsZXRlIHN0dWRlbnRzIGJ1dHRvbiBpcyBjbGljayxcbiAgICogb3BlbiBhIGRpYWxvZyB0byBjb25maXJtIGRlbGV0aW9uXG4gICAqIC0gSWYgY29uZmlybSwgY2FsbCBoZWxwZXIgbWV0aG9kXG4gICAqIC0gSWYgY2FuY2VsLCBkbyBub3RoaW5nXG4gICAqL1xuICBkZWxldGVDb3Vyc2VTdHVkZW50cygpe1xuICAgIGNvbnN0IG1vZGVsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudCwge3NpemU6ICdzbSd9KTtcbiAgICBtb2RlbFJlZi5jb21wb25lbnRJbnN0YW5jZS5tZXNzYWdlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHN0dWRlbnRzIGluIGNvdXJzZSAnICsgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bSArICc/JztcblxuICAgIG1vZGVsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpPT57XG4gICAgICBpZihyZXN1bHQgPT09ICdkZWxldGUnKXtcbiAgICAgICAgdGhpcy5fY2FsbERlbGV0ZUNvdXJzZVN0dWRlbnRzKClcbiAgICAgIH1cbiAgICB9LCAoZGlzbWlzcyk9PntcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2Qgd2l0aCB0ZWxscyBzZXJ2aWNlIHRvIGRlbGV0ZSBhbGwgb2YgdGhlXG4gICAqIHN0dWRlbnRzIGluIHRoaXMgY291cnNlXG4gICAqL1xuICBfY2FsbERlbGV0ZUNvdXJzZVN0dWRlbnRzKCl7XG4gICAgdGhpcy5fY291cnNlU2VydmljZS5kZWxldGVTdHVkZW50cyh0aGlzLl9hZG1pbi5pZCwgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bSlcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIC8vIHN1Y2Nlc3NmdWxcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9jb3Vyc2VzLycsIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW1dKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIHRvIHByZXZlbnQgYSBtZW1vcnkgbGVha1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi4vY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbmltcG9ydCB7IENvdXJzZSwgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB3aGljaCBsaXN0cyBhdmFpbGFibGUgY291cnNlcyBiYXNlZCBvbiBsb2dnZWQtaW4gdXNlciByb2xlXG4gKiAtIElmIGFkbWluLCBsaXN0cyBhbGwgYXZhaWxhYmxlIGNvdXJzZXNcbiAqIC0gSWYgaW5zdHIsIGxpc3QgY291cnNlcyB3aGljaCBpbnN0cnVjdG9yIG9mXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY291cnNlLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2NvdXJzZS1saXN0LnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBDb3Vyc2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBMaXN0IG9mIGNvdXJzZXNcbiAgICovXG4gICAgcHJpdmF0ZSBjb3Vyc2VzOiBDb3Vyc2VbXTtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byBjb3Vyc2Ugc2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICApIHt9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGNvbXBvbmVudCBieSBnZXR0aW5nIGxpc3Qgb2YgY291cnNlc1xuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgbGV0IGFkbWluOiBVc2VyID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmxpc3RDb3Vyc2VzKGFkbWluLmlkKVxuICAgICAgICAuc3Vic2NyaWJlKChjb3Vyc2VzKSA9PiB7XG4gICAgICAgIHRoaXMuY291cnNlcyA9IGNvdXJzZXNcbiAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RydWN0aW9uLCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zY2VuYXJpby9zY2VuYXJpby5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3R1ZGVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zdHVkZW50L3N0dWRlbnQuc2VydmljZSc7XG5cbmltcG9ydCB7IENvdXJzZSwgU3R1ZGVudCwgU2NlbmFyaW8sIFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzLyc7XG5cbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgZGlzcGxheXMgdGhlIHNjZW5hcmlvIHN0YXR1cyBvZiBhbGwgc3R1ZGVudHNcbiAqIHdpdGhpbiB0aGUgY291cnNlIGFuZCBhbGxvd3MgZm9yIG5hdmlnYXRpb24gdG8gc3R1ZGVudCBmcmlkZ2VzXG4gKiBhbmQgZ3JhbnQgYWNjZXNzIGZvciBhIHN0dWRlbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291cnNlLXNjZW4nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb3Vyc2Utc2NlbmFyaW8udGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2NvdXJzZS1zY2VuYXJpby5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb3Vyc2VTY2VuYXJpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogTGlzdCBvZiBzdHVkZW50cyBpbiB0aGUgY291cnNlXG4gICAqL1xuICBwcm90ZWN0ZWQgc3R1ZGVudHM6IFN0dWRlbnRbXSA9IFtdO1xuICAvKipcbiAgICogVGhlIGNvdXJzZSBudW1iZXJcbiAgICovXG4gIHByaXZhdGUgY291cnNlTnVtOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc2NlbmFyaW9cbiAgICovXG4gIHByb3RlY3RlZCBzY2VuYXJpbzogU2NlbmFyaW87XG4gIC8qKlxuICAgKiBTdGF0ZSB2YXJpYWJsZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbSBzZXJ2aWNlcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIG9ic2VydmUgdXJsIGBjb3Vyc2VOdW1gIHBhcmFtZXRlclxuICAgKi9cbiAgcHJpdmF0ZSBwYXJhbU9ic2VydmVyOiBhbnk7XG4gIC8qKlxuICAqIFRoZSBsb2dnZWQgaW4gYWRtaW4gdXNlclxuICAqL1xuICBwcml2YXRlIGFkbWluOiBVc2VyO1xuICAvKipcbiAgICogUG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3N0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZVxuICAgICAgICAgICAgICApe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0YWxpemUgdGhlIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqIDIuIEJhc2VkIG9uIHRoZSBVUkwsIGdldCB0aGUgY291cnNlIG51bWJlciBhbmQgc2NlbmFyaW8gY29kZVxuICAgKiAzLiBHZXQgdGhlIHNjZW5hcmlvIGluZm9ybWF0aW9uXG4gICAqIDQuIEdldCB0aGUgc2NlbmFyaW8gc3RhdHVzIG9mIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2VcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zXG4gICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgbGV0IGNvdXJzZSA9IHBhcmFtc1snY291cnNlTnVtJ107XG4gICAgICAgICAgbGV0IHNjZW5Db2RlID0gcGFyYW1zWydzY2VuSWQnXTtcbiAgICAgIHRoaXMuY291cnNlTnVtID0gY291cnNlLnRvVXBwZXJDYXNlKCk7XG4gICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0U2NlbmFyaW8oc2NlbkNvZGUpXG4gICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgICAgdGhpcy5zY2VuYXJpbyA9IHJlcztcbiAgICAgICAgdGhpcy5fY291cnNlU2VydmljZS5nZXRTY2VuYXJpb1N0YXR1cyh0aGlzLmFkbWluLmlkLCBjb3Vyc2UsIHNjZW5Db2RlKVxuICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgLnN1YnNjcmliZSgoc3RhdHMpPT57XG5cbiAgICAgICAgICAgIHRoaXMuc3R1ZGVudHMgPSBzdGF0cztcbiAgICAgICAgfSwgKGVycjIpPT57XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycjIpO1xuICAgICAgICB9KTtcblxuICAgICAgfSwgKGVycik9PntcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICB9KTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIGZvcm1hdHRpbmcgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBmb3JtYXR0ZWQgc3RyaW5nXG4gICAqIGRlcGVuZGluZyBvbiBpZiBzdHVkZW50IGhhcyBhY2Nlc3MgZ3JhbnRlZCBvciBub3RcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0dyYW50ZWQgLSBoYXMgYWNjZXNzIGJlZW4gZ3JhbnRlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGZvcm1hdHRlZCBzdHJpbmc7IFwiQWNjZXNzIGdyYW50ZWRcIiBpZiBhY2Nlc3MgaGFzIGJlZW4gZ3JhbnRlZCwgXCJBY2Nlc3Mgbm90IGdyYW50ZWRcIiBvdGhlcndpc2VcbiAgICovXG4gIGZvcm1hdEFjY2Vzcyhpc0dyYW50ZWQ6IGJvb2xlYW4pOiBzdHJpbmd7XG4gICAgcmV0dXJuIChpc0dyYW50ZWQgPyAnQWNjZXNzIGdyYW50ZWQnIDogJ0FjY2VzcyBub3QgZ3JhbnRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHNlcnZpY2UgdG8gZ3JhbnQgdGhlIHN0dWRlbnQgYWNjZXNzIHRvIHRoZSBzY2VuYXJpb1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIFwiR3JhbnQgYWNjZXNzXCIgYnV0dG9uIGZvciBhIHN0dWRlbnRcbiAgICogXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SW5kZXggLSBwb3NpdGlvbmFsIGluZGV4IG9mIHN0dWRlbnQgaW4gdGhlIGxpc3Qgb2Ygc3R1ZGVudHM7IFxuICAgKiBUaGlzIGlzICoqTk9UKiogdGhlIHN0dWRlbnQncyB1c2VySWRcbiAgICovXG4gIGdyYW50QWNjZXNzKHN0dWRlbnRJbmRleDogbnVtYmVyKXtcbiAgICBsZXQgc2NlbklkID0gdGhpcy5zY2VuYXJpby5zY2VuQ29kZTtcbiAgICBsZXQgc3R1ZGVudElkID0gdGhpcy5zdHVkZW50c1tzdHVkZW50SW5kZXhdLnVzZXJJZDtcbiAgICB0aGlzLl9zdHVkZW50U2VydmljZS5ncmFudFNjZW5BY2Nlc3ModGhpcy5hZG1pbi5pZCwgc3R1ZGVudElkLCBzY2VuSWQsIHRydWUpXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICBpZihyZXMgIT09IHVuZGVmaW5lZCAmJiByZXMgIT09IG51bGwpe1xuICAgICAgICAgIHRoaXMuc3R1ZGVudHNbc3R1ZGVudEluZGV4XS5zdGF0dXMgPSByZXMuYWNjZXNzR3JhbnRlZFtzY2VuSWRdO1xuICAgICAgICB9XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogT24gXCJWaWV3IEZyaWRnZVwiIGJ1dHRvbiwgbmF2aWdhdGVzIHRvIHRoYXQgc3R1ZGVudCdzIGZyaWRnZVxuICAgKiBmb3IgdGhpcyBzY2VuYXJpb1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIFwiVmlldyBGcmlkZ2VcIiBidXR0b24gb2YgYSBzdHVkZW50XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB0aGUgc3R1ZGVudCdzIHVzZXJJRFxuICAgKi9cbiAgZ29Ub0ZyaWRnZShzdHVkZW50SWQ6IG51bWJlcil7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL3N0dWRlbnRzLycsIHN0dWRlbnRJZCwgdGhpcy5zY2VuYXJpby5zY2VuQ29kZV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJlc29sdmUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4vY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb3Vyc2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2NvdXJzZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEZvciB0aGUgbmF2aWdhdGlvbiBicmVhZGNydW1iLCByZXNvbHZlcyBhIFVSTCBjb3Vyc2VOdW0gcGFyYW1lZXRlclxuICogdG8gdGhlIGNvdXJzZSBudW1iZXJcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvdXJzZVJlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxDb3Vyc2U+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgICAgICkgeyB9XG4gIC8qKlxuICAgKiBCYXNlZCBvbiB0aGUgVVJMIGBjb3Vyc2VOdW1gIHBhcmFtZXRlciwgZmluZCB0aGUgY291cnNlXG4gICAqIGl0IGJlbG9uZ3MgdG9cbiAgICpcbiAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSByb3V0ZSAtIHJvdXRlIFVSTCBhdCB0aGUgbW9tZW50XG4gICAqIEBwYXJhbSB7Um91dGVyU3RhdGVTbmFwc2hvdH0gc3RhdGUgLSByb3V0ZXIgc3RhdGU7IG5lZWRlZCB0byBpbXBsZW1lbnQgaW50ZXJmYWNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENvdXJzZT59IFRoZSBjb3Vyc2UgaW5mbyBmb3IgdGhlIGNvdXJzZU51bVxuICAgKiBvciBhbiBlbXB0eSBvYnNlcnZhYmxlIGlmIHRoZSBpZCBkb2Vzbid0IGJlbG9uZyB0byBhbnkgY291cnNlXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPENvdXJzZT4ge1xuICAgIGxldCBhZG1pbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICBjb25zdCBjb3Vyc2VOdW0gPSByb3V0ZS5wYXJhbXNbJ2NvdXJzZU51bSddO1xuXG4gICAgaWYgKGNvdXJzZU51bSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0Q291cnNlKGFkbWluLmlkLCBjb3Vyc2VOdW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UucmVzb2x2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0ICogZnJvbSAnLi9jb3Vyc2UuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZnJpZGdlLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3BoYWdlLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3NjZW5hcmlvLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0dWRlbnQuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlci5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9leHBlcmltZW50LmludGVyZmFjZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9pbnRlcmZhY2VzL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWluZGl2L2NvdXJzZS1pbmRpdi50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWluZGl2L2NvdXJzZS1pbmRpdi5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWVkaXQvY291cnNlLWVkaXQuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDb3Vyc2VSZXNvbHZlciB9IGZyb20gJy4vY291cnNlLnJlc29sdmVyJztcbmltcG9ydCB7IFNjZW5hcmlvUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9zY2VuYXJpby9zY2VuYXJpby5yZXNvbHZlcic7XG5cbmltcG9ydCB7IENvdXJzZUNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VJbmRpdkNvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWluZGl2L2NvdXJzZS1pbmRpdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWVkaXQvY291cnNlLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VTY2VuYXJpb0NvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ291cnNlUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJycsXG4gICBjaGlsZHJlbjogW1xuICB7XG4gICAgcGF0aDogJ2NyZWF0ZScsXG4gICAgY29tcG9uZW50OiBDb3Vyc2VDcmVhdGVDb21wb25lbnQsXG4gICAgZGF0YToge2JyZWFkY3J1bWJzOiAnQ3JlYXRlIG5ldyBjb3Vyc2UnfVxuICB9LFxuICB7IHBhdGg6ICc6Y291cnNlTnVtJyxcbiAgIHJlc29sdmU6IHtjb3Vyc2U6IENvdXJzZVJlc29sdmVyfSxcbiAgIGRhdGE6IHticmVhZGNydW1iczogJ3t7Y291cnNlLmNvdXJzZU51bX19JyB9LFxuICAgY2hpbGRyZW46IFtcbiAgICAgeyBwYXRoOiAnZWRpdCcsXG4gICAgY29tcG9uZW50OiBDb3Vyc2VFZGl0Q29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnOnNjZW5JZCcsXG4gICAgY29tcG9uZW50OiBDb3Vyc2VTY2VuYXJpb0NvbXBvbmVudCxcbiAgICByZXNvbHZlOiB7c2NlbmFyaW86IFNjZW5hcmlvUmVzb2x2ZXJ9LFxuICAgIGRhdGE6IHticmVhZGNydW1iczogJ3t7IHNjZW5hcmlvLmxhYmVsIH19J31cbiAgfSxcbiAgICAge3BhdGg6ICcnLFxuICAgICBjb21wb25lbnQ6IENvdXJzZUluZGl2Q29tcG9uZW50fVxuICAgXVxuICB9LFxuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBDb3Vyc2VMaXN0Q29tcG9uZW50XG4gIH1cbiAgICAgXVxufVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uucm91dGVzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLnJlc29sdmVyLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1jcmVhdGUvY291cnNlLWNyZWF0ZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1jcmVhdGUvY291cnNlLWNyZWF0ZS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9pbnRlcmZhY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1zY2VuYXJpby9jb3Vyc2Utc2NlbmFyaW8udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHlDQUErQztBQUMvQyxnREFBMEQ7QUFFMUQsNERBQWdGO0FBQ2hGLDJEQUE2RTtBQUM3RSwwREFBMEU7QUFDMUUsMERBQTBFO0FBQzFFLDhEQUFzRjtBQUN0RixtRUFBNEY7QUFFNUYsa0RBQStDO0FBQy9DLG9EQUFtRDtBQXlCbkQsSUFBYSxZQUFZLEdBQXpCO0NBQTRCO0FBQWYsWUFBWTtJQW5CeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsNEJBQVk7WUFDWixxQkFBWSxDQUFDLFFBQVEsQ0FBQyw0QkFBWSxDQUFDO1NBQ3BDO1FBQ0QsWUFBWSxFQUFFO1lBQ1osK0NBQXFCO1lBQ3JCLDZDQUFvQjtZQUNwQiwyQ0FBbUI7WUFDbkIsMkNBQW1CO1lBQ25CLG1EQUF1QjtTQUN4QjtRQUNELGVBQWUsRUFB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ekUsb0JBQVksR0FBVztJQUNsQyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFO1lBQ1g7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLCtDQUFxQjtnQkFDaEMsSUFBSSxFQUFFLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDO2FBQ3pDO1lBQ0QsRUFBRSxJQUFJLEVBQUUsWUFBWTtnQkFDbkIsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLGdDQUFjLEVBQUM7Z0JBQ2pDLElBQUksRUFBRSxFQUFDLFdBQVcsRUFBRSxzQkFBc0IsRUFBRTtnQkFDNUMsUUFBUSxFQUFFO29CQUNSLEVBQUUsSUFBSSxFQUFFLE1BQU07d0JBQ2YsU0FBUyxFQUFFLDJDQUFtQjtxQkFDL0I7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsU0FBUyxFQUFFLG1EQUF1Qjt3QkFDbEMsT0FBTyxFQUFFLEVBQUMsUUFBUSxFQUFFLG9DQUFnQixFQUFDO3dCQUNyQyxJQUFJLEVBQUUsRUFBQyxXQUFXLEVBQUUsc0JBQXNCLEVBQUM7cUJBQzVDO29CQUNFLEVBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ1QsU0FBUyxFQUFFLDZDQUFvQixFQUFDO2lCQUNqQzthQUNEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLDJDQUFtQjthQUMvQjtTQUNHO0tBQ0w7Q0FDQSxDQUFDIiwiZmlsZSI6IjEtY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgQ291cnNlQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZUluZGl2Q29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZVNjZW5hcmlvQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb3Vyc2VSb3V0ZXMgfSBmcm9tICcuL2NvdXJzZS5yb3V0ZXMnO1xuaW1wb3J0IHsgQ291cnNlUmVzb2x2ZXIgfSBmcm9tICcuL2NvdXJzZS5yZXNvbHZlcic7XG5cbi8qKlxuICogTW9kdWxlIGZvciBjb3Vyc2UtcmVsYXRlZCB0YXNrcyBsaWtlIGFkZGluZywgZWRpdGluZywgXG4gKiBkZWxldGluZywgYW5kIHZpZXdpbmcgYSBjb3Vyc2UgYW5kIHRoZSBzdHVkZW50cyBpbiBhIGNvdXJzZVxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChDb3Vyc2VSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvdXJzZUNyZWF0ZUNvbXBvbmVudCxcbiAgICBDb3Vyc2VJbmRpdkNvbXBvbmVudCxcbiAgICBDb3Vyc2VFZGl0Q29tcG9uZW50LFxuICAgIENvdXJzZUxpc3RDb21wb25lbnQsXG4gICAgQ291cnNlU2NlbmFyaW9Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb3Vyc2VSZXNvbHZlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvdXJzZU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb3Vyc2UgfSBmcm9tICcuL2NvdXJzZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgX1VzZXIgfSBmcm9tICcuL3VzZXIuaW50ZXJmYWNlJztcbi8vICBmaXJzdE5hbWU6IHN0cmluZztcbi8vICBsYXN0TmFtZTogc3RyaW5nO1xuLy8gIHVzZXJJZDogbnVtYmVyO1xuXG4vKipcbiAqIEluZm9ybWF0aW9uIG5lZWRlZCBhcyBhIHVzZXIgdXNpbmcgdGhlIGFwcCBpbiBzY2VuYXJpb3NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHVkZW50IGV4dGVuZHMgX1VzZXIge1xuICBlbWFpbD86IHN0cmluZztcbiAgYWNjZXNzR3JhbnRlZD86IGFueTtcbiAgc3RhdHVzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIG5lZWRlZCBmb3IgYWRtaW4gcGFnZXMgYWJvdXQgYSB1c2VyL3N0dWRlbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZG1pblN0dWRlbnQgZXh0ZW5kcyBTdHVkZW50IHtcbiAgY291cnNlOiBDb3Vyc2U7XG4gIHJvbGU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBzb3J0IHN0dWRlbnRzIGFscGhhYmV0aWNhbGx5IGJ5IGxhc3QgbmFtZTtcbiAqIFVzZXMgZmlyc3QgbmFtZSBmb3IgdGllc1xuICpcbiAqIE1ha2VzIHRoZSBuYW1lIGxvd2VyY2FzZSBiZWZvcmUgc29ydGluZyB0byBlbnN1cmUgc29ydCBpc1xuICogY2FzZSBpbnNlbnNpdGl2ZVxuICovXG5leHBvcnQgY29uc3Qgc29ydFN0dWRlbnRzID0gZnVuY3Rpb24oYSxiKXtcbiAgICB2YXIgY29tcGFyaXNvbiA9IGEubGFzdE5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIubGFzdE5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKGNvbXBhcmlzb24gPT09IDApIHtcbiAgICAgIHJldHVybiBhLmZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi5maXJzdE5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wYXJpc29uO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcidcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gY3JlYXRlIGEgbmV3IGNvdXJzZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3Vyc2UtY3JlYXRlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWNyZWF0ZS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vY291cnNlLWNyZWF0ZS5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb3Vyc2VDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBiYWNrZW5kIHNlcnZlciB3aGVuIHRyeWluZyB0b1xuICAgKiBjcmVhdGUgdGhlIGNvdXJzZVxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogLSBDb3Vyc2UgZGV0YWlscyB0byBiZSBzZW50IHRvIHRoZSBiYWNrZW5kIHNlcnZlclxuICAgKiAtIEluY2x1ZGVzIGBjb3Vyc2VOdW1gIGFuZCBgZGVzY3JpcHRpb25gXG4gICAqL1xuICBwcml2YXRlIGNvdXJzZURldGFpbHM6IGFueSA9IHt9O1xuICAvKipcbiAgICogTG9nZ2VkIGluIGFkbWluIHVzZXJcbiAgICovXG4gIHByaXZhdGUgYWRtaW46IFVzZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgKXt9XG5cbiAgLyoqXG4gICAqIFdoZW4gaW5pdGlhbGl6aW5nIHRoZSBjb21wb25lbnQsIGdldCB0aGUgY3VycmVudGx5IGxvZ2dlZFxuICAgKiBpbiB1c2VyXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhhdCBhIGNvdXJzZSBudW1iZXIgaGFzIGJlZW4gZW50ZXJlZCB0aGVuXG4gICAqIHN1Ym1pdCBjb3Vyc2UgZGV0YWlscyB0byBiYWNrZW5kXG4gICAqXG4gICAqIElmIGNvdXJzZSBzdWNjZXNzZnVsbHkgY3JlYXRlZCwgZ28gYmFjayB0byBsaXN0IG9mIGNvdXJzZXNcbiAgICogSWYgZXJyb3IsIGRpc3BsYXkgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgY3JlYXRlQ291cnNlKCl7XG4gICAgaWYodGhpcy5jb3Vyc2VEZXRhaWxzLmNvdXJzZU51bT09PScnKXtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0NvdXJzZSBudW1iZXIgaXMgcmVxdWlyZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fY291cnNlU2VydmljZVxuICAgICAgLmNyZWF0ZUNvdXJzZSh0aGlzLmFkbWluLmlkLCB0aGlzLmNvdXJzZURldGFpbHMpXG4gICAgLnN1YnNjcmliZSggKHJlc3VsdCk9PntcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy4uLycsIHJlc3VsdC5jb3Vyc2VOdW1dLCB7cmVsYXRpdmVUbzogdGhpcy5fcm91dGV9KVxuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RvcnksIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4uL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NjZW5hcmlvL3NjZW5hcmlvLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG5pbXBvcnQgeyBDb3Vyc2UsIFN0dWRlbnQsIHNvcnRTdHVkZW50cywgU2NlbmFyaW8sIFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291cnNlLWluZGl2JyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWluZGl2LnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9jb3Vyc2UtaW5kaXYuc3R5bGUuY3NzJyldXG59KVxuXG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHZpZXcgYW4gaW5kaXZpZHVhbCBjb3Vyc2VcbiAqIEluY2x1ZGVzIGluZm9ybWF0aW9uIHN1Y2ggYXMgY291cnNlIG51bWJlciwgZGVzY3JpcHRpb24sIGluc3RydWN0b3JzLCBhbmQgc3R1ZGVudHNcbiAqL1xuZXhwb3J0IGNsYXNzIENvdXJzZUluZGl2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2Ygc3R1ZGVudHMgZW5yb2xsZWQgaW4gdGhlIGNvdXJzZVxuICAgKi9cbiAgcHJpdmF0ZSBzdHVkZW50czogU3R1ZGVudFtdID0gW107XG4gIC8qKlxuICAgKiBDb3Vyc2UgaW5mbyBpbmNsdWRpbmcgYGNvdXJzZU51bWAsIGBkZXNjcmlwdGlvbmAsIGBpbnN0cnVjdG9yc2BcbiAgICovXG4gIGNvdXJzZUluZm86IENvdXJzZTtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgYXZhaWxhYmxlIHNjZW5hcmlvcyAodXNlZCBmb3IgbGlua2luZylcbiAgICovXG4gIHByaXZhdGUgc2NlbmFyaW9zOiBTY2VuYXJpb1tdO1xuICAvKipcbiAgICogU3RhdGUgdmFyaWFibGUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gc2VydmljZXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgcHJpdmF0ZSBwYXJhbU9ic2VydmVyOiBhbnk7XG5cbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlIHRoYXQgY291bGQgYXJpc2VcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhbGwgY29udGVudCBvbiB0aGUgcGFnZSB1c2luZyBzZXZlcmFsIHNlcnZpY2VzXG4gICAqIDEuIEdldCB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogMi4gR2V0IHRoZSBjb3Vyc2UgaW5mb3JtYXRpb24gKGRlc2NyaXB0aW9uLCBpbnN0cnVjdG9ycylcbiAgICogMy4gR2V0IHRoZSBsaXN0IG9mIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2VcbiAgICogNC4gR2V0IHRoZSBsaXN0IG9mIHNjZW5hcmlvc1xuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICBsZXQgYWRtaW46IFVzZXIgPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdXJzZSA9IHBhcmFtc1snY291cnNlTnVtJ107XG4gICAgICAgICAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldENvdXJzZShhZG1pbi5pZCwgY291cnNlKVxuICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY291cnNlSW5mbyA9IGluZm87XG4gICAgICAgICAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0U3R1ZGVudHMoYWRtaW4uaWQsIGNvdXJzZSlcbiAgICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc3R1ZGVudHMpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50cyA9IHN0dWRlbnRzLnNvcnQoc29ydFN0dWRlbnRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UubGlzdFNjZW5hcmlvcygpXG4gICAgICAgICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc2NlbnMpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmFyaW9zID0gc2NlbnM7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHN1YnNjcmlwdGlvbnMgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi4vY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb3Vyc2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2NvdXJzZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3R1ZGVudCwgQWRtaW5TdHVkZW50LCBzb3J0U3R1ZGVudHMgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvdXJzZS1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWVkaXQudGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2NvdXJzZS1lZGl0LnN0eWxlLmNzcycpXVxufSlcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVkaXR0aW5nIGNvdXJzZSBkZXRhaWxzIHN1Y2ggYXNcbiAqIGFkZGluZy9yZW1vdmluZyBpbnN0cnVjdG9ycywgdXBkYXRpbmcgY291cnNlIGRlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb3Vyc2VFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG5cbiAgLyoqXG4gICAqIENvdXJzZSBiZWluZyBlZGl0ZWRcbiAgICovXG4gIGNvdXJzZUluZm86IENvdXJzZTtcbiAgLyoqXG4gICAqIExpc3Qgb2YgcG9zc2libGUgaW5zdHJ1Y3RvcnMgd2hvIGNvdWxkIGJlIGFkZGVkXG4gICAqL1xuICBwcml2YXRlIHBvc3NpYmxlSW5zdHI6IEFkbWluU3R1ZGVudFtdO1xuICAvKipcbiAgICogVmFyaWFibGUgdXNlZCB0byByZW1lbWJlciBpbnN0ciBzZWxlY3RlZCB3aGVuIGFkZGluZ1xuICAgKi9cbiAgc2VsZWN0ZWRBZGQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBsb2dnZWQgaW4gdXNlclxuICAgKi9cbiAgcHJpdmF0ZSBfYWRtaW46IFVzZXI7XG4gIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuICAvKipcbiAgICogU3RhdGUgdmFyaWFibGUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gc2VydmljZXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlcyBmcm9tIHRoZSBiYWNrZW5kIHNlcnZlclxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGluaXRcbiAgICogMS4gZ2V0IHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKiAyLiBVc2UgdGhlIHVybCBwYXJhbSB0byBnZXQgY291cnNlIG51bWJlclxuICAgKiAzLiBHZXQgY291cnNlIGRldGFpbHMgKHVzaW5nIGNvdXJlTnVtKVxuICAgKiA0LiBHZXQgcG9zc2libGUgaW5zdHJ1Y3RvcnMgKHVzaW5nIGNvdXJzZU51bSlcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5fYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdXJzZSA9IHBhcmFtc1snY291cnNlTnVtJ107XG5cbiAgICAgICAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0Q291cnNlKHRoaXMuX2FkbWluLmlkLCBjb3Vyc2UpXG4gICAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdXJzZUluZm8gPSBpbmZvO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0UG9zc2libGVJbnN0cnVjdG9ycyh0aGlzLl9hZG1pbi5pZCwgY291cnNlKVxuICAgICAgICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGluc3Rycyk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZUluc3RyID0gaW5zdHJzLnNvcnQoc29ydFN0dWRlbnRzKTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyMik9PntcbiAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIyKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGVJbnN0ciA9IFtdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9LChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBjYW5jZWwgYnV0dG9uIGlzIHByZXNzZWQsIG5hdmlnYXRlIGJhY2sgdG8gY291cnNlIHZpZXcgcGFnZVxuICAgKi9cbiAgb25DYW5jZWwoKXtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycuLi8nXSwge3JlbGF0aXZlVG86IHRoaXMuX3JvdXRlfSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQsIHN1Ym1pdCB0aGUgdXBkYXRlcyB0byBiZVxuICAgKiBzYXZlZCBpbiB0aGUgYmFja2VuZFxuICAgKi9cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy5fY291cnNlU2VydmljZVxuICAgICAgLmVkaXRDb3Vyc2UodGhpcy5fYWRtaW4uaWQsIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW0sIHRoaXMuY291cnNlSW5mbylcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoIChyZXN1bHQpPT57XG4gICAgICAvLyBzdWNjZXNzXG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycuLi8nXSwge3JlbGF0aXZlVG86IHRoaXMuX3JvdXRlfSlcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogLSBXaGVuIGFkZCBpbnN0cnVjdG9yIGJ1dHRvbiBpcyBjbGlja2VkLCBzZW5kIHRoZSBzZWxlY3RlZFxuICAgKiBpbnN0cnVjdG9yIChieSB1c2VySWQpIHRvIHRoZSBiYWNrZW5kIHRvIGJlIGFkZGVkIGFzIGFuIGluc3RydWN0b3JcbiAgICogLSBJZiBzdWNjZXNzZnVsLCB1cGRhdGUgbGlzdCBvZiBwb3NzaWJsZSBpbnN0cnVjdG9yc1xuICAgKi9cbiAgYWRkSW5zdHJ1Y3Rvcigpe1xuICAgIGlmKHRoaXMuc2VsZWN0ZWRBZGQpe1xuICAgIHRoaXMuX2NvdXJzZVNlcnZpY2VcbiAgICAgIC5hZGRJbnN0cnVjdG9yKHRoaXMuX2FkbWluLmlkLCB0aGlzLmNvdXJzZUluZm8uY291cnNlTnVtLCB0aGlzLnNlbGVjdGVkQWRkKVxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHVwZGF0ZWQpPT57XG4gICAgICB0aGlzLmNvdXJzZUluZm8gPSB1cGRhdGVkO1xuICAgICAgdGhpcy5wb3NzaWJsZUluc3RyID0gdGhpcy5wb3NzaWJsZUluc3RyLmZpbHRlcigoZWxtKT0+e1xuICAgICAgICByZXR1cm4gZWxtLnVzZXJJZCAhPSB0aGlzLnNlbGVjdGVkQWRkXG4gICAgICB9KTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gICAgfVxuICB9XG4gIC8vIFRPRE86IHJlbW92ZSBpbnN0cnVjdG9yXG5cbiAgLyoqXG4gICAqIC0gV2hlbiBjbGlja2luZyBkZWxldGUgY291cnNlIGJ1dHRvbiwgb3BlbiBhIGRpYWxvZ1xuICAgKiB0byBjb25maXJtIGRlbGV0aW9uXG4gICAqIC0gSWYgY29uZmlybWVkLCBjYWxsIGhlbHBlciBtZXRob2RcbiAgICogLSBJZiBjYW5jZWwsIGRvIG5vdGhpbmdcbiAgICovXG4gIGRlbGV0ZUNvdXJzZSgpe1xuICAgIGNvbnN0IG1vZGVsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudCwge3NpemU6ICdzbScsIHdpbmRvd0NsYXNzOiAnZGVsZXRlLW1vZGFsJ30pO1xuICAgIG1vZGVsUmVmLmNvbXBvbmVudEluc3RhbmNlLm1lc3NhZ2UgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBjb3Vyc2UgJyArIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW0gKyAnPyc7XG5cbiAgICBtb2RlbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KT0+e1xuICAgICAgaWYocmVzdWx0ID09PSAnZGVsZXRlJyl7XG4gICAgICAgIHRoaXMuX2NhbGxEZWxldGVDb3Vyc2UoKVxuICAgICAgfVxuICAgIH0sIChkaXNtaXNzKT0+e1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB3aGljaCB1c2VzIHNlcnZpY2UgdG8gdGVsbCBzZXJ2ZXIgdG8gZGVsZXRlIHRoZSBjb3Vyc2VcbiAgICovXG4gIF9jYWxsRGVsZXRlQ291cnNlKCl7XG4gICAgdGhpcy5fY291cnNlU2VydmljZS5kZWxldGVDb3Vyc2UodGhpcy5fYWRtaW4uaWQsIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW0pXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAvLyBzdWNjZXNzZnVsXG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4vY291cnNlcyddKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiAtIFdoZW4gZGVsZXRlIHN0dWRlbnRzIGJ1dHRvbiBpcyBjbGljayxcbiAgICogb3BlbiBhIGRpYWxvZyB0byBjb25maXJtIGRlbGV0aW9uXG4gICAqIC0gSWYgY29uZmlybSwgY2FsbCBoZWxwZXIgbWV0aG9kXG4gICAqIC0gSWYgY2FuY2VsLCBkbyBub3RoaW5nXG4gICAqL1xuICBkZWxldGVDb3Vyc2VTdHVkZW50cygpe1xuICAgIGNvbnN0IG1vZGVsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudCwge3NpemU6ICdzbSd9KTtcbiAgICBtb2RlbFJlZi5jb21wb25lbnRJbnN0YW5jZS5tZXNzYWdlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHN0dWRlbnRzIGluIGNvdXJzZSAnICsgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bSArICc/JztcblxuICAgIG1vZGVsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpPT57XG4gICAgICBpZihyZXN1bHQgPT09ICdkZWxldGUnKXtcbiAgICAgICAgdGhpcy5fY2FsbERlbGV0ZUNvdXJzZVN0dWRlbnRzKClcbiAgICAgIH1cbiAgICB9LCAoZGlzbWlzcyk9PntcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2Qgd2l0aCB0ZWxscyBzZXJ2aWNlIHRvIGRlbGV0ZSBhbGwgb2YgdGhlXG4gICAqIHN0dWRlbnRzIGluIHRoaXMgY291cnNlXG4gICAqL1xuICBfY2FsbERlbGV0ZUNvdXJzZVN0dWRlbnRzKCl7XG4gICAgdGhpcy5fY291cnNlU2VydmljZS5kZWxldGVTdHVkZW50cyh0aGlzLl9hZG1pbi5pZCwgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bSlcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIC8vIHN1Y2Nlc3NmdWxcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9jb3Vyc2VzLycsIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW1dKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIHRvIHByZXZlbnQgYSBtZW1vcnkgbGVha1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi4vY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbmltcG9ydCB7IENvdXJzZSwgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB3aGljaCBsaXN0cyBhdmFpbGFibGUgY291cnNlcyBiYXNlZCBvbiBsb2dnZWQtaW4gdXNlciByb2xlXG4gKiAtIElmIGFkbWluLCBsaXN0cyBhbGwgYXZhaWxhYmxlIGNvdXJzZXNcbiAqIC0gSWYgaW5zdHIsIGxpc3QgY291cnNlcyB3aGljaCBpbnN0cnVjdG9yIG9mXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY291cnNlLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2NvdXJzZS1saXN0LnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBDb3Vyc2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBMaXN0IG9mIGNvdXJzZXNcbiAgICovXG4gICAgcHJpdmF0ZSBjb3Vyc2VzOiBDb3Vyc2VbXTtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byBjb3Vyc2Ugc2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICApIHt9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGNvbXBvbmVudCBieSBnZXR0aW5nIGxpc3Qgb2YgY291cnNlc1xuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgbGV0IGFkbWluOiBVc2VyID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmxpc3RDb3Vyc2VzKGFkbWluLmlkKVxuICAgICAgICAuc3Vic2NyaWJlKChjb3Vyc2VzKSA9PiB7XG4gICAgICAgIHRoaXMuY291cnNlcyA9IGNvdXJzZXNcbiAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RydWN0aW9uLCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zY2VuYXJpby9zY2VuYXJpby5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3R1ZGVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zdHVkZW50L3N0dWRlbnQuc2VydmljZSc7XG5cbmltcG9ydCB7IENvdXJzZSwgU3R1ZGVudCwgU2NlbmFyaW8sIFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzLyc7XG5cbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgZGlzcGxheXMgdGhlIHNjZW5hcmlvIHN0YXR1cyBvZiBhbGwgc3R1ZGVudHNcbiAqIHdpdGhpbiB0aGUgY291cnNlIGFuZCBhbGxvd3MgZm9yIG5hdmlnYXRpb24gdG8gc3R1ZGVudCBmcmlkZ2VzXG4gKiBhbmQgZ3JhbnQgYWNjZXNzIGZvciBhIHN0dWRlbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291cnNlLXNjZW4nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb3Vyc2Utc2NlbmFyaW8udGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2NvdXJzZS1zY2VuYXJpby5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb3Vyc2VTY2VuYXJpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogTGlzdCBvZiBzdHVkZW50cyBpbiB0aGUgY291cnNlXG4gICAqL1xuICBwcm90ZWN0ZWQgc3R1ZGVudHM6IFN0dWRlbnRbXSA9IFtdO1xuICAvKipcbiAgICogVGhlIGNvdXJzZSBudW1iZXJcbiAgICovXG4gIHByaXZhdGUgY291cnNlTnVtOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc2NlbmFyaW9cbiAgICovXG4gIHByb3RlY3RlZCBzY2VuYXJpbzogU2NlbmFyaW87XG4gIC8qKlxuICAgKiBTdGF0ZSB2YXJpYWJsZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbSBzZXJ2aWNlcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIG9ic2VydmUgdXJsIGBjb3Vyc2VOdW1gIHBhcmFtZXRlclxuICAgKi9cbiAgcHJpdmF0ZSBwYXJhbU9ic2VydmVyOiBhbnk7XG4gIC8qKlxuICAqIFRoZSBsb2dnZWQgaW4gYWRtaW4gdXNlclxuICAqL1xuICBwcml2YXRlIGFkbWluOiBVc2VyO1xuICAvKipcbiAgICogUG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3N0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZVxuICAgICAgICAgICAgICApe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0YWxpemUgdGhlIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqIDIuIEJhc2VkIG9uIHRoZSBVUkwsIGdldCB0aGUgY291cnNlIG51bWJlciBhbmQgc2NlbmFyaW8gY29kZVxuICAgKiAzLiBHZXQgdGhlIHNjZW5hcmlvIGluZm9ybWF0aW9uXG4gICAqIDQuIEdldCB0aGUgc2NlbmFyaW8gc3RhdHVzIG9mIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2VcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zXG4gICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgbGV0IGNvdXJzZSA9IHBhcmFtc1snY291cnNlTnVtJ107XG4gICAgICAgICAgbGV0IHNjZW5Db2RlID0gcGFyYW1zWydzY2VuSWQnXTtcbiAgICAgIHRoaXMuY291cnNlTnVtID0gY291cnNlLnRvVXBwZXJDYXNlKCk7XG4gICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0U2NlbmFyaW8oc2NlbkNvZGUpXG4gICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgICAgdGhpcy5zY2VuYXJpbyA9IHJlcztcbiAgICAgICAgdGhpcy5fY291cnNlU2VydmljZS5nZXRTY2VuYXJpb1N0YXR1cyh0aGlzLmFkbWluLmlkLCBjb3Vyc2UsIHNjZW5Db2RlKVxuICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgLnN1YnNjcmliZSgoc3RhdHMpPT57XG5cbiAgICAgICAgICAgIHRoaXMuc3R1ZGVudHMgPSBzdGF0cztcbiAgICAgICAgfSwgKGVycjIpPT57XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycjIpO1xuICAgICAgICB9KTtcblxuICAgICAgfSwgKGVycik9PntcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICB9KTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIGZvcm1hdHRpbmcgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBmb3JtYXR0ZWQgc3RyaW5nXG4gICAqIGRlcGVuZGluZyBvbiBpZiBzdHVkZW50IGhhcyBhY2Nlc3MgZ3JhbnRlZCBvciBub3RcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0dyYW50ZWQgLSBoYXMgYWNjZXNzIGJlZW4gZ3JhbnRlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGZvcm1hdHRlZCBzdHJpbmc7IFwiQWNjZXNzIGdyYW50ZWRcIiBpZiBhY2Nlc3MgaGFzIGJlZW4gZ3JhbnRlZCwgXCJBY2Nlc3Mgbm90IGdyYW50ZWRcIiBvdGhlcndpc2VcbiAgICovXG4gIGZvcm1hdEFjY2Vzcyhpc0dyYW50ZWQ6IGJvb2xlYW4pOiBzdHJpbmd7XG4gICAgcmV0dXJuIChpc0dyYW50ZWQgPyAnQWNjZXNzIGdyYW50ZWQnIDogJ0FjY2VzcyBub3QgZ3JhbnRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHNlcnZpY2UgdG8gZ3JhbnQgdGhlIHN0dWRlbnQgYWNjZXNzIHRvIHRoZSBzY2VuYXJpb1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIFwiR3JhbnQgYWNjZXNzXCIgYnV0dG9uIGZvciBhIHN0dWRlbnRcbiAgICogXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SW5kZXggLSBwb3NpdGlvbmFsIGluZGV4IG9mIHN0dWRlbnQgaW4gdGhlIGxpc3Qgb2Ygc3R1ZGVudHM7IFxuICAgKiBUaGlzIGlzICoqTk9UKiogdGhlIHN0dWRlbnQncyB1c2VySWRcbiAgICovXG4gIGdyYW50QWNjZXNzKHN0dWRlbnRJbmRleDogbnVtYmVyKXtcbiAgICBsZXQgc2NlbklkID0gdGhpcy5zY2VuYXJpby5zY2VuQ29kZTtcbiAgICBsZXQgc3R1ZGVudElkID0gdGhpcy5zdHVkZW50c1tzdHVkZW50SW5kZXhdLnVzZXJJZDtcbiAgICB0aGlzLl9zdHVkZW50U2VydmljZS5ncmFudFNjZW5BY2Nlc3ModGhpcy5hZG1pbi5pZCwgc3R1ZGVudElkLCBzY2VuSWQsIHRydWUpXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICBpZihyZXMgIT09IHVuZGVmaW5lZCAmJiByZXMgIT09IG51bGwpe1xuICAgICAgICAgIHRoaXMuc3R1ZGVudHNbc3R1ZGVudEluZGV4XS5zdGF0dXMgPSByZXMuYWNjZXNzR3JhbnRlZFtzY2VuSWRdO1xuICAgICAgICB9XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogT24gXCJWaWV3IEZyaWRnZVwiIGJ1dHRvbiwgbmF2aWdhdGVzIHRvIHRoYXQgc3R1ZGVudCdzIGZyaWRnZVxuICAgKiBmb3IgdGhpcyBzY2VuYXJpb1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIFwiVmlldyBGcmlkZ2VcIiBidXR0b24gb2YgYSBzdHVkZW50XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB0aGUgc3R1ZGVudCdzIHVzZXJJRFxuICAgKi9cbiAgZ29Ub0ZyaWRnZShzdHVkZW50SWQ6IG51bWJlcil7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL3N0dWRlbnRzLycsIHN0dWRlbnRJZCwgdGhpcy5zY2VuYXJpby5zY2VuQ29kZV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJlc29sdmUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4vY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb3Vyc2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2NvdXJzZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEZvciB0aGUgbmF2aWdhdGlvbiBicmVhZGNydW1iLCByZXNvbHZlcyBhIFVSTCBjb3Vyc2VOdW0gcGFyYW1lZXRlclxuICogdG8gdGhlIGNvdXJzZSBudW1iZXJcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvdXJzZVJlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxDb3Vyc2U+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgICAgICkgeyB9XG4gIC8qKlxuICAgKiBCYXNlZCBvbiB0aGUgVVJMIGBjb3Vyc2VOdW1gIHBhcmFtZXRlciwgZmluZCB0aGUgY291cnNlXG4gICAqIGl0IGJlbG9uZ3MgdG9cbiAgICpcbiAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSByb3V0ZSAtIHJvdXRlIFVSTCBhdCB0aGUgbW9tZW50XG4gICAqIEBwYXJhbSB7Um91dGVyU3RhdGVTbmFwc2hvdH0gc3RhdGUgLSByb3V0ZXIgc3RhdGU7IG5lZWRlZCB0byBpbXBsZW1lbnQgaW50ZXJmYWNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENvdXJzZT59IFRoZSBjb3Vyc2UgaW5mbyBmb3IgdGhlIGNvdXJzZU51bVxuICAgKiBvciBhbiBlbXB0eSBvYnNlcnZhYmxlIGlmIHRoZSBpZCBkb2Vzbid0IGJlbG9uZyB0byBhbnkgY291cnNlXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPENvdXJzZT4ge1xuICAgIGxldCBhZG1pbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICBjb25zdCBjb3Vyc2VOdW0gPSByb3V0ZS5wYXJhbXNbJ2NvdXJzZU51bSddO1xuXG4gICAgaWYgKGNvdXJzZU51bSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0Q291cnNlKGFkbWluLmlkLCBjb3Vyc2VOdW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UucmVzb2x2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnQgKiBmcm9tICcuL2NvdXJzZS5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9mcmlkZ2UuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGhhZ2UuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmFyaW8uaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3R1ZGVudC5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4cGVyaW1lbnQuaW50ZXJmYWNlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2ludGVyZmFjZXMvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWluZGl2L2NvdXJzZS1pbmRpdi5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWVkaXQvY291cnNlLWVkaXQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWVkaXQvY291cnNlLWVkaXQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1zY2VuYXJpby9jb3Vyc2Utc2NlbmFyaW8udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1zY2VuYXJpby9jb3Vyc2Utc2NlbmFyaW8uc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDb3Vyc2VSZXNvbHZlciB9IGZyb20gJy4vY291cnNlLnJlc29sdmVyJztcbmltcG9ydCB7IFNjZW5hcmlvUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9zY2VuYXJpby9zY2VuYXJpby5yZXNvbHZlcic7XG5cbmltcG9ydCB7IENvdXJzZUNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VJbmRpdkNvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWluZGl2L2NvdXJzZS1pbmRpdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWVkaXQvY291cnNlLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VTY2VuYXJpb0NvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ291cnNlUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJycsXG4gICBjaGlsZHJlbjogW1xuICB7XG4gICAgcGF0aDogJ2NyZWF0ZScsXG4gICAgY29tcG9uZW50OiBDb3Vyc2VDcmVhdGVDb21wb25lbnQsXG4gICAgZGF0YToge2JyZWFkY3J1bWJzOiAnQ3JlYXRlIG5ldyBjb3Vyc2UnfVxuICB9LFxuICB7IHBhdGg6ICc6Y291cnNlTnVtJyxcbiAgIHJlc29sdmU6IHtjb3Vyc2U6IENvdXJzZVJlc29sdmVyfSxcbiAgIGRhdGE6IHticmVhZGNydW1iczogJ3t7Y291cnNlLmNvdXJzZU51bX19JyB9LFxuICAgY2hpbGRyZW46IFtcbiAgICAgeyBwYXRoOiAnZWRpdCcsXG4gICAgY29tcG9uZW50OiBDb3Vyc2VFZGl0Q29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnOnNjZW5JZCcsXG4gICAgY29tcG9uZW50OiBDb3Vyc2VTY2VuYXJpb0NvbXBvbmVudCxcbiAgICByZXNvbHZlOiB7c2NlbmFyaW86IFNjZW5hcmlvUmVzb2x2ZXJ9LFxuICAgIGRhdGE6IHticmVhZGNydW1iczogJ3t7IHNjZW5hcmlvLmxhYmVsIH19J31cbiAgfSxcbiAgICAge3BhdGg6ICcnLFxuICAgICBjb21wb25lbnQ6IENvdXJzZUluZGl2Q29tcG9uZW50fVxuICAgXVxuICB9LFxuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBDb3Vyc2VMaXN0Q29tcG9uZW50XG4gIH1cbiAgICAgXVxufVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uucm91dGVzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> Stashed changes
