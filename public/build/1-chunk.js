webpackJsonp([1],{

/***/ 914:
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
const shared_module_1 = __webpack_require__(53);
const course_create_component_1 = __webpack_require__(920);
const course_indiv_component_1 = __webpack_require__(921);
const course_edit_component_1 = __webpack_require__(922);
const course_list_component_1 = __webpack_require__(923);
const course_scenario_component_1 = __webpack_require__(924);
const confirm_delete_dialog_component_1 = __webpack_require__(417);
const course_routes_1 = __webpack_require__(946);
const course_resolver_1 = __webpack_require__(925);
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

/***/ 918:
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

/***/ 920:
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
const course_service_1 = __webpack_require__(182);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(64);
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
        templateUrl: __webpack_require__(936),
        styleUrls: [__webpack_require__(937)]
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService])
], CourseCreateComponent);
exports.CourseCreateComponent = CourseCreateComponent;


/***/ }),

/***/ 921:
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
const rxjs_1 = __webpack_require__(52);
const course_service_1 = __webpack_require__(182);
const cricket_service_1 = __webpack_require__(118);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(64);
const interfaces_1 = __webpack_require__(938);
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
        templateUrl: __webpack_require__(939),
        styleUrls: [__webpack_require__(940)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        course_service_1.CourseService,
        authentication_service_1.AuthenticationService,
        cricket_service_1.CricketService])
], CourseIndivComponent);
exports.CourseIndivComponent = CourseIndivComponent;


/***/ }),

/***/ 922:
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
const ng_bootstrap_1 = __webpack_require__(119);
const rxjs_1 = __webpack_require__(52);
const course_service_1 = __webpack_require__(182);
const authentication_service_1 = __webpack_require__(18);
const confirm_delete_dialog_component_1 = __webpack_require__(417);
const student_interface_1 = __webpack_require__(918);
const read_error_1 = __webpack_require__(64);
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
        templateUrl: __webpack_require__(941),
        styleUrls: [__webpack_require__(942)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        course_service_1.CourseService,
        authentication_service_1.AuthenticationService,
        ng_bootstrap_1.NgbModal])
], CourseEditComponent);
exports.CourseEditComponent = CourseEditComponent;


/***/ }),

/***/ 923:
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
const course_service_1 = __webpack_require__(182);
const authentication_service_1 = __webpack_require__(18);
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
        templateUrl: __webpack_require__(943)
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        authentication_service_1.AuthenticationService])
], CourseListComponent);
exports.CourseListComponent = CourseListComponent;


/***/ }),

/***/ 924:
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
const rxjs_1 = __webpack_require__(52);
const course_service_1 = __webpack_require__(182);
const cricket_service_1 = __webpack_require__(118);
const authentication_service_1 = __webpack_require__(18);
const student_service_1 = __webpack_require__(416);
const read_error_1 = __webpack_require__(64);
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
        templateUrl: __webpack_require__(944),
        styleUrls: [__webpack_require__(945)]
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

/***/ 925:
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
const rxjs_1 = __webpack_require__(52);
const course_service_1 = __webpack_require__(182);
const authentication_service_1 = __webpack_require__(18);
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

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-create/course-create.template.html";

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-create/course-create.style.css";

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(918));


/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-indiv/course-indiv.template.html";

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-indiv/course-indiv.style.css";

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-edit/course-edit.template.html";

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-edit/course-edit.style.css";

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-list/course-list.template.html";

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-scenario/course-scenario.template.html";

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/course/course-scenario/course-scenario.style.css";

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const course_resolver_1 = __webpack_require__(925);
const scenario_resolver_1 = __webpack_require__(183);
const course_create_component_1 = __webpack_require__(920);
const course_indiv_component_1 = __webpack_require__(921);
const course_edit_component_1 = __webpack_require__(922);
const course_list_component_1 = __webpack_require__(923);
const course_scenario_component_1 = __webpack_require__(924);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLXNjZW5hcmlvL2NvdXJzZS1zY2VuYXJpby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLnJlc29sdmVyLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1jcmVhdGUvY291cnNlLWNyZWF0ZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1jcmVhdGUvY291cnNlLWNyZWF0ZS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9pbnRlcmZhY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1zY2VuYXJpby9jb3Vyc2Utc2NlbmFyaW8udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHlDQUErQztBQUMvQyxnREFBMEQ7QUFFMUQsMkRBQWdGO0FBQ2hGLDBEQUE2RTtBQUM3RSx5REFBMEU7QUFDMUUseURBQTBFO0FBQzFFLDZEQUFzRjtBQUN0RixtRUFBNEY7QUFFNUYsaURBQStDO0FBQy9DLG1EQUFtRDtBQXlCbkQsSUFBYSxZQUFZLEdBQXpCO0NBQTRCO0FBQWYsWUFBWTtJQW5CeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsNEJBQVk7WUFDWixxQkFBWSxDQUFDLFFBQVEsQ0FBQyw0QkFBWSxDQUFDO1NBQ3BDO1FBQ0QsWUFBWSxFQUFFO1lBQ1osK0NBQXFCO1lBQ3JCLDZDQUFvQjtZQUNwQiwyQ0FBbUI7WUFDbkIsMkNBQW1CO1lBQ25CLG1EQUF1QjtTQUN4QjtRQUNELGVBQWUsRUFB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ekUsb0JBQVksR0FBVztJQUNsQyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFO1lBQ1g7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLCtDQUFxQjtnQkFDaEMsSUFBSSxFQUFFLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDO2FBQ3pDO1lBQ0QsRUFBRSxJQUFJLEVBQUUsWUFBWTtnQkFDbkIsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLGdDQUFjLEVBQUM7Z0JBQ2pDLElBQUksRUFBRSxFQUFDLFdBQVcsRUFBRSxzQkFBc0IsRUFBRTtnQkFDNUMsUUFBUSxFQUFFO29CQUNSLEVBQUUsSUFBSSxFQUFFLE1BQU07d0JBQ2YsU0FBUyxFQUFFLDJDQUFtQjtxQkFDL0I7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsU0FBUyxFQUFFLG1EQUF1Qjt3QkFDbEMsT0FBTyxFQUFFLEVBQUMsUUFBUSxFQUFFLG9DQUFnQixFQUFDO3dCQUNyQyxJQUFJLEVBQUUsRUFBQyxXQUFXLEVBQUUsc0JBQXNCLEVBQUM7cUJBQzVDO29CQUNFLEVBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ1QsU0FBUyxFQUFFLDZDQUFvQixFQUFDO2lCQUNqQzthQUNEO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLDJDQUFtQjthQUMvQjtTQUNHO0tBQ0w7Q0FDQSxDQUFDIiwiZmlsZSI6IjEtY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgQ291cnNlQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZUluZGl2Q29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWxpc3QvY291cnNlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZVNjZW5hcmlvQ29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb3Vyc2VSb3V0ZXMgfSBmcm9tICcuL2NvdXJzZS5yb3V0ZXMnO1xuaW1wb3J0IHsgQ291cnNlUmVzb2x2ZXIgfSBmcm9tICcuL2NvdXJzZS5yZXNvbHZlcic7XG5cbi8qKlxuICogTW9kdWxlIGZvciBjb3Vyc2UtcmVsYXRlZCB0YXNrcyBsaWtlIGFkZGluZywgZWRpdGluZywgXG4gKiBkZWxldGluZywgYW5kIHZpZXdpbmcgYSBjb3Vyc2UgYW5kIHRoZSBzdHVkZW50cyBpbiBhIGNvdXJzZVxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChDb3Vyc2VSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvdXJzZUNyZWF0ZUNvbXBvbmVudCxcbiAgICBDb3Vyc2VJbmRpdkNvbXBvbmVudCxcbiAgICBDb3Vyc2VFZGl0Q29tcG9uZW50LFxuICAgIENvdXJzZUxpc3RDb21wb25lbnQsXG4gICAgQ291cnNlU2NlbmFyaW9Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb3Vyc2VSZXNvbHZlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvdXJzZU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb3Vyc2UgfSBmcm9tICcuL2NvdXJzZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgX1VzZXIgfSBmcm9tICcuL3VzZXIuaW50ZXJmYWNlJztcbi8vICBmaXJzdE5hbWU6IHN0cmluZztcbi8vICBsYXN0TmFtZTogc3RyaW5nO1xuLy8gIHVzZXJJZDogbnVtYmVyO1xuXG4vKipcbiAqIEluZm9ybWF0aW9uIG5lZWRlZCBhcyBhIHVzZXIgdXNpbmcgdGhlIGFwcCBpbiBzY2VuYXJpb3NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHVkZW50IGV4dGVuZHMgX1VzZXIge1xuICBlbWFpbD86IHN0cmluZztcbiAgYWNjZXNzR3JhbnRlZD86IGFueTtcbiAgc3RhdHVzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIG5lZWRlZCBmb3IgYWRtaW4gcGFnZXMgYWJvdXQgYSB1c2VyL3N0dWRlbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZG1pblN0dWRlbnQgZXh0ZW5kcyBTdHVkZW50IHtcbiAgY291cnNlOiBDb3Vyc2U7XG4gIHJvbGU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBzb3J0IHN0dWRlbnRzIGFscGhhYmV0aWNhbGx5IGJ5IGxhc3QgbmFtZTtcbiAqIFVzZXMgZmlyc3QgbmFtZSBmb3IgdGllc1xuICpcbiAqIE1ha2VzIHRoZSBuYW1lIGxvd2VyY2FzZSBiZWZvcmUgc29ydGluZyB0byBlbnN1cmUgc29ydCBpc1xuICogY2FzZSBpbnNlbnNpdGl2ZVxuICovXG5leHBvcnQgY29uc3Qgc29ydFN0dWRlbnRzID0gZnVuY3Rpb24oYSxiKXtcbiAgICB2YXIgY29tcGFyaXNvbiA9IGEubGFzdE5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIubGFzdE5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKGNvbXBhcmlzb24gPT09IDApIHtcbiAgICAgIHJldHVybiBhLmZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi5maXJzdE5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wYXJpc29uO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcidcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gY3JlYXRlIGEgbmV3IGNvdXJzZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3Vyc2UtY3JlYXRlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWNyZWF0ZS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vY291cnNlLWNyZWF0ZS5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb3Vyc2VDcmVhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBiYWNrZW5kIHNlcnZlciB3aGVuIHRyeWluZyB0b1xuICAgKiBjcmVhdGUgdGhlIGNvdXJzZVxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogLSBDb3Vyc2UgZGV0YWlscyB0byBiZSBzZW50IHRvIHRoZSBiYWNrZW5kIHNlcnZlclxuICAgKiAtIEluY2x1ZGVzIGBjb3Vyc2VOdW1gIGFuZCBgZGVzY3JpcHRpb25gXG4gICAqL1xuICBwcml2YXRlIGNvdXJzZURldGFpbHM6IGFueSA9IHt9O1xuICAvKipcbiAgICogTG9nZ2VkIGluIGFkbWluIHVzZXJcbiAgICovXG4gIHByaXZhdGUgYWRtaW46IFVzZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgKXt9XG5cbiAgLyoqXG4gICAqIFdoZW4gaW5pdGlhbGl6aW5nIHRoZSBjb21wb25lbnQsIGdldCB0aGUgY3VycmVudGx5IGxvZ2dlZFxuICAgKiBpbiB1c2VyXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhhdCBhIGNvdXJzZSBudW1iZXIgaGFzIGJlZW4gZW50ZXJlZCB0aGVuXG4gICAqIHN1Ym1pdCBjb3Vyc2UgZGV0YWlscyB0byBiYWNrZW5kXG4gICAqXG4gICAqIElmIGNvdXJzZSBzdWNjZXNzZnVsbHkgY3JlYXRlZCwgZ28gYmFjayB0byBsaXN0IG9mIGNvdXJzZXNcbiAgICogSWYgZXJyb3IsIGRpc3BsYXkgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgY3JlYXRlQ291cnNlKCl7XG4gICAgaWYodGhpcy5jb3Vyc2VEZXRhaWxzLmNvdXJzZU51bT09PScnKXtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0NvdXJzZSBudW1iZXIgaXMgcmVxdWlyZWQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fY291cnNlU2VydmljZVxuICAgICAgLmNyZWF0ZUNvdXJzZSh0aGlzLmFkbWluLmlkLCB0aGlzLmNvdXJzZURldGFpbHMpXG4gICAgLnN1YnNjcmliZSggKHJlc3VsdCk9PntcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy4uLycsIHJlc3VsdC5jb3Vyc2VOdW1dLCB7cmVsYXRpdmVUbzogdGhpcy5fcm91dGV9KVxuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RvcnksIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWNyZWF0ZS9jb3Vyc2UtY3JlYXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4uL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IENyaWNrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY3JpY2tldC9jcmlja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG5pbXBvcnQgeyBDb3Vyc2UsIFN0dWRlbnQsIHNvcnRTdHVkZW50cywgU2NlbmFyaW8sIFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291cnNlLWluZGl2JyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWluZGl2LnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9jb3Vyc2UtaW5kaXYuc3R5bGUuY3NzJyldXG59KVxuXG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHZpZXcgYW4gaW5kaXZpZHVhbCBjb3Vyc2VcbiAqIEluY2x1ZGVzIGluZm9ybWF0aW9uIHN1Y2ggYXMgY291cnNlIG51bWJlciwgZGVzY3JpcHRpb24sIGluc3RydWN0b3JzLCBhbmQgc3R1ZGVudHNcbiAqL1xuZXhwb3J0IGNsYXNzIENvdXJzZUluZGl2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2Ygc3R1ZGVudHMgZW5yb2xsZWQgaW4gdGhlIGNvdXJzZVxuICAgKi9cbiAgcHJpdmF0ZSBzdHVkZW50czogU3R1ZGVudFtdID0gW107XG4gIC8qKlxuICAgKiBDb3Vyc2UgaW5mbyBpbmNsdWRpbmcgYGNvdXJzZU51bWAsIGBkZXNjcmlwdGlvbmAsIGBpbnN0cnVjdG9yc2BcbiAgICovXG4gIGNvdXJzZUluZm86IENvdXJzZTtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgYXZhaWxhYmxlIHNjZW5hcmlvcyAodXNlZCBmb3IgbGlua2luZylcbiAgICovXG4gIHByaXZhdGUgc2NlbmFyaW9zOiBTY2VuYXJpb1tdO1xuICAvKipcbiAgICogU3RhdGUgdmFyaWFibGUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gc2VydmljZXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgcHJpdmF0ZSBwYXJhbU9ic2VydmVyOiBhbnk7XG5cbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlIHRoYXQgY291bGQgYXJpc2VcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogQ3JpY2tldFNlcnZpY2Upe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGFsbCBjb250ZW50IG9uIHRoZSBwYWdlIHVzaW5nIHNldmVyYWwgc2VydmljZXNcbiAgICogMS4gR2V0IHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKiAyLiBHZXQgdGhlIGNvdXJzZSBpbmZvcm1hdGlvbiAoZGVzY3JpcHRpb24sIGluc3RydWN0b3JzKVxuICAgKiAzLiBHZXQgdGhlIGxpc3Qgb2Ygc3R1ZGVudHMgaW4gdGhlIGNvdXJzZVxuICAgKiA0LiBHZXQgdGhlIGxpc3Qgb2Ygc2NlbmFyaW9zXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIGxldCBhZG1pbjogVXNlciA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICBsZXQgY291cnNlID0gcGFyYW1zWydjb3Vyc2VOdW0nXTtcbiAgICAgICAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0Q291cnNlKGFkbWluLmlkLCBjb3Vyc2UpXG4gICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jb3Vyc2VJbmZvID0gaW5mbztcbiAgICAgICAgICAgICAgdGhpcy5fY291cnNlU2VydmljZS5nZXRTdHVkZW50cyhhZG1pbi5pZCwgY291cnNlKVxuICAgICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChzdHVkZW50cyk9PntcbiAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzID0gc3R1ZGVudHMuc29ydChzb3J0U3R1ZGVudHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5saXN0U2NlbmFyaW9zKClcbiAgICAgICAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChzY2Vucyk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuYXJpb3MgPSBzY2VucztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIGZyb20gc3Vic2NyaXB0aW9ucyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvY291cnNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdHVkZW50LCBBZG1pblN0dWRlbnQsIHNvcnRTdHVkZW50cyB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvc3R1ZGVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291cnNlLWVkaXQnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb3Vyc2UtZWRpdC50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vY291cnNlLWVkaXQuc3R5bGUuY3NzJyldXG59KVxuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZWRpdHRpbmcgY291cnNlIGRldGFpbHMgc3VjaCBhc1xuICogYWRkaW5nL3JlbW92aW5nIGluc3RydWN0b3JzLCB1cGRhdGluZyBjb3Vyc2UgZGVzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENvdXJzZUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcblxuICAvKipcbiAgICogQ291cnNlIGJlaW5nIGVkaXRlZFxuICAgKi9cbiAgY291cnNlSW5mbzogQ291cnNlO1xuICAvKipcbiAgICogTGlzdCBvZiBwb3NzaWJsZSBpbnN0cnVjdG9ycyB3aG8gY291bGQgYmUgYWRkZWRcbiAgICovXG4gIHByaXZhdGUgcG9zc2libGVJbnN0cjogQWRtaW5TdHVkZW50W107XG4gIC8qKlxuICAgKiBWYXJpYWJsZSB1c2VkIHRvIHJlbWVtYmVyIGluc3RyIHNlbGVjdGVkIHdoZW4gYWRkaW5nXG4gICAqL1xuICBzZWxlY3RlZEFkZDogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqL1xuICBwcml2YXRlIF9hZG1pbjogVXNlcjtcbiAgcHJpdmF0ZSBwYXJhbU9ic2VydmVyOiBhbnk7XG4gIC8qKlxuICAgKiBTdGF0ZSB2YXJpYWJsZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbSBzZXJ2aWNlcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogUG90ZW50aWFsIGVycm9yIG1lc3NhZ2VzIGZyb20gdGhlIGJhY2tlbmQgc2VydmVyXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgX2NvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE5nYk1vZGFsKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIH1cblxuICAvKipcbiAgICogT24gaW5pdFxuICAgKiAxLiBnZXQgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqIDIuIFVzZSB0aGUgdXJsIHBhcmFtIHRvIGdldCBjb3Vyc2UgbnVtYmVyXG4gICAqIDMuIEdldCBjb3Vyc2UgZGV0YWlscyAodXNpbmcgY291cmVOdW0pXG4gICAqIDQuIEdldCBwb3NzaWJsZSBpbnN0cnVjdG9ycyAodXNpbmcgY291cnNlTnVtKVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLl9hZG1pbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICBsZXQgY291cnNlID0gcGFyYW1zWydjb3Vyc2VOdW0nXTtcblxuICAgICAgICAgICAgdGhpcy5fY291cnNlU2VydmljZS5nZXRDb3Vyc2UodGhpcy5fYWRtaW4uaWQsIGNvdXJzZSlcbiAgICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSgoaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY291cnNlSW5mbyA9IGluZm87XG4gICAgICAgICAgICAgICAgdGhpcy5fY291cnNlU2VydmljZS5nZXRQb3NzaWJsZUluc3RydWN0b3JzKHRoaXMuX2FkbWluLmlkLCBjb3Vyc2UpXG4gICAgICAgICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoaW5zdHJzKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3NpYmxlSW5zdHIgPSBpbnN0cnMuc29ydChzb3J0U3R1ZGVudHMpO1xuICAgICAgICAgICAgICAgIH0sIChlcnIyKT0+e1xuICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycjIpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZUluc3RyID0gW107XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGNhbmNlbCBidXR0b24gaXMgcHJlc3NlZCwgbmF2aWdhdGUgYmFjayB0byBjb3Vyc2UgdmlldyBwYWdlXG4gICAqL1xuICBvbkNhbmNlbCgpe1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy4uLyddLCB7cmVsYXRpdmVUbzogdGhpcy5fcm91dGV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZCwgc3VibWl0IHRoZSB1cGRhdGVzIHRvIGJlXG4gICAqIHNhdmVkIGluIHRoZSBiYWNrZW5kXG4gICAqL1xuICB1cGRhdGUoKXtcbiAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlXG4gICAgICAuZWRpdENvdXJzZSh0aGlzLl9hZG1pbi5pZCwgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bSwgdGhpcy5jb3Vyc2VJbmZvKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgLnN1YnNjcmliZSggKHJlc3VsdCk9PntcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy4uLyddLCB7cmVsYXRpdmVUbzogdGhpcy5fcm91dGV9KVxuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiAtIFdoZW4gYWRkIGluc3RydWN0b3IgYnV0dG9uIGlzIGNsaWNrZWQsIHNlbmQgdGhlIHNlbGVjdGVkXG4gICAqIGluc3RydWN0b3IgKGJ5IHVzZXJJZCkgdG8gdGhlIGJhY2tlbmQgdG8gYmUgYWRkZWQgYXMgYW4gaW5zdHJ1Y3RvclxuICAgKiAtIElmIHN1Y2Nlc3NmdWwsIHVwZGF0ZSBsaXN0IG9mIHBvc3NpYmxlIGluc3RydWN0b3JzXG4gICAqL1xuICBhZGRJbnN0cnVjdG9yKCl7XG4gICAgaWYodGhpcy5zZWxlY3RlZEFkZCl7XG4gICAgdGhpcy5fY291cnNlU2VydmljZVxuICAgICAgLmFkZEluc3RydWN0b3IodGhpcy5fYWRtaW4uaWQsIHRoaXMuY291cnNlSW5mby5jb3Vyc2VOdW0sIHRoaXMuc2VsZWN0ZWRBZGQpXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgodXBkYXRlZCk9PntcbiAgICAgIHRoaXMuY291cnNlSW5mbyA9IHVwZGF0ZWQ7XG4gICAgICB0aGlzLnBvc3NpYmxlSW5zdHIgPSB0aGlzLnBvc3NpYmxlSW5zdHIuZmlsdGVyKChlbG0pPT57XG4gICAgICAgIHJldHVybiBlbG0udXNlcklkICE9IHRoaXMuc2VsZWN0ZWRBZGRcbiAgICAgIH0pO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8gVE9ETzogcmVtb3ZlIGluc3RydWN0b3JcblxuICAvKipcbiAgICogLSBXaGVuIGNsaWNraW5nIGRlbGV0ZSBjb3Vyc2UgYnV0dG9uLCBvcGVuIGEgZGlhbG9nXG4gICAqIHRvIGNvbmZpcm0gZGVsZXRpb25cbiAgICogLSBJZiBjb25maXJtZWQsIGNhbGwgaGVscGVyIG1ldGhvZFxuICAgKiAtIElmIGNhbmNlbCwgZG8gbm90aGluZ1xuICAgKi9cbiAgZGVsZXRlQ291cnNlKCl7XG4gICAgY29uc3QgbW9kZWxSZWYgPSB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50LCB7c2l6ZTogJ3NtJywgd2luZG93Q2xhc3M6ICdkZWxldGUtbW9kYWwnfSk7XG4gICAgbW9kZWxSZWYuY29tcG9uZW50SW5zdGFuY2UubWVzc2FnZSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGNvdXJzZSAnICsgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bSArICc/JztcblxuICAgIG1vZGVsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpPT57XG4gICAgICBpZihyZXN1bHQgPT09ICdkZWxldGUnKXtcbiAgICAgICAgdGhpcy5fY2FsbERlbGV0ZUNvdXJzZSgpXG4gICAgICB9XG4gICAgfSwgKGRpc21pc3MpPT57XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHdoaWNoIHVzZXMgc2VydmljZSB0byB0ZWxsIHNlcnZlciB0byBkZWxldGUgdGhlIGNvdXJzZVxuICAgKi9cbiAgX2NhbGxEZWxldGVDb3Vyc2UoKXtcbiAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmRlbGV0ZUNvdXJzZSh0aGlzLl9hZG1pbi5pZCwgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bSlcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIC8vIHN1Y2Nlc3NmdWxcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9jb3Vyc2VzJ10pO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIC0gV2hlbiBkZWxldGUgc3R1ZGVudHMgYnV0dG9uIGlzIGNsaWNrLFxuICAgKiBvcGVuIGEgZGlhbG9nIHRvIGNvbmZpcm0gZGVsZXRpb25cbiAgICogLSBJZiBjb25maXJtLCBjYWxsIGhlbHBlciBtZXRob2RcbiAgICogLSBJZiBjYW5jZWwsIGRvIG5vdGhpbmdcbiAgICovXG4gIGRlbGV0ZUNvdXJzZVN0dWRlbnRzKCl7XG4gICAgY29uc3QgbW9kZWxSZWYgPSB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50LCB7c2l6ZTogJ3NtJ30pO1xuICAgIG1vZGVsUmVmLmNvbXBvbmVudEluc3RhbmNlLm1lc3NhZ2UgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBhbGwgc3R1ZGVudHMgaW4gY291cnNlICcgKyB0aGlzLmNvdXJzZUluZm8uY291cnNlTnVtICsgJz8nO1xuXG4gICAgbW9kZWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCk9PntcbiAgICAgIGlmKHJlc3VsdCA9PT0gJ2RlbGV0ZScpe1xuICAgICAgICB0aGlzLl9jYWxsRGVsZXRlQ291cnNlU3R1ZGVudHMoKVxuICAgICAgfVxuICAgIH0sIChkaXNtaXNzKT0+e1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB3aXRoIHRlbGxzIHNlcnZpY2UgdG8gZGVsZXRlIGFsbCBvZiB0aGVcbiAgICogc3R1ZGVudHMgaW4gdGhpcyBjb3Vyc2VcbiAgICovXG4gIF9jYWxsRGVsZXRlQ291cnNlU3R1ZGVudHMoKXtcbiAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmRlbGV0ZVN0dWRlbnRzKHRoaXMuX2FkbWluLmlkLCB0aGlzLmNvdXJzZUluZm8uY291cnNlTnVtKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgLy8gc3VjY2Vzc2Z1bFxuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL2NvdXJzZXMvJywgdGhpcy5jb3Vyc2VJbmZvLmNvdXJzZU51bV0pO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgdG8gcHJldmVudCBhIG1lbW9yeSBsZWFrXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLWVkaXQvY291cnNlLWVkaXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ291cnNlLCBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHdoaWNoIGxpc3RzIGF2YWlsYWJsZSBjb3Vyc2VzIGJhc2VkIG9uIGxvZ2dlZC1pbiB1c2VyIHJvbGVcbiAqIC0gSWYgYWRtaW4sIGxpc3RzIGFsbCBhdmFpbGFibGUgY291cnNlc1xuICogLSBJZiBpbnN0ciwgbGlzdCBjb3Vyc2VzIHdoaWNoIGluc3RydWN0b3Igb2ZcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb3Vyc2UtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY291cnNlLWxpc3QudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIENvdXJzZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgLyoqXG4gICAqIExpc3Qgb2YgY291cnNlc1xuICAgKi9cbiAgICBwcml2YXRlIGNvdXJzZXM6IENvdXJzZVtdO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIGNvdXJzZSBzZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICkge31cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgY29tcG9uZW50IGJ5IGdldHRpbmcgbGlzdCBvZiBjb3Vyc2VzXG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICBsZXQgYWRtaW46IFVzZXIgPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2NvdXJzZVNlcnZpY2UubGlzdENvdXJzZXMoYWRtaW4uaWQpXG4gICAgICAgIC5zdWJzY3JpYmUoKGNvdXJzZXMpID0+IHtcbiAgICAgICAgdGhpcy5jb3Vyc2VzID0gY291cnNlc1xuICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4uL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IENyaWNrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY3JpY2tldC9jcmlja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3N0dWRlbnQvc3R1ZGVudC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ291cnNlLCBTdHVkZW50LCBTY2VuYXJpbywgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvJztcblxuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBkaXNwbGF5cyB0aGUgc2NlbmFyaW8gc3RhdHVzIG9mIGFsbCBzdHVkZW50c1xuICogd2l0aGluIHRoZSBjb3Vyc2UgYW5kIGFsbG93cyBmb3IgbmF2aWdhdGlvbiB0byBzdHVkZW50IGZyaWRnZXNcbiAqIGFuZCBncmFudCBhY2Nlc3MgZm9yIGEgc3R1ZGVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3Vyc2Utc2NlbicsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2NvdXJzZS1zY2VuYXJpby50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vY291cnNlLXNjZW5hcmlvLnN0eWxlLmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIENvdXJzZVNjZW5hcmlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2VcbiAgICovXG4gIHByb3RlY3RlZCBzdHVkZW50czogU3R1ZGVudFtdID0gW107XG4gIC8qKlxuICAgKiBUaGUgY291cnNlIG51bWJlclxuICAgKi9cbiAgcHJpdmF0ZSBjb3Vyc2VOdW06IHN0cmluZztcbiAgLyoqXG4gICAqIEluZm9ybWF0aW9uIGFib3V0IHRoZSBzY2VuYXJpb1xuICAgKi9cbiAgcHJvdGVjdGVkIHNjZW5hcmlvOiBTY2VuYXJpbztcbiAgLyoqXG4gICAqIFN0YXRlIHZhcmlhYmxlIHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIHNlcnZpY2VzIGVhc2llclxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gb2JzZXJ2ZSB1cmwgYGNvdXJzZU51bWAgcGFyYW1ldGVyXG4gICAqL1xuICBwcml2YXRlIHBhcmFtT2JzZXJ2ZXI6IGFueTtcbiAgLyoqXG4gICogVGhlIGxvZ2dlZCBpbiBhZG1pbiB1c2VyXG4gICovXG4gIHByaXZhdGUgYWRtaW46IFVzZXI7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgYmFja2VuZCBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX2NvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogQ3JpY2tldFNlcnZpY2VcbiAgICAgICAgICAgICAgKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGFsaXplIHRoZSBjb21wb25lbnRcbiAgICogMS4gR2V0IHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKiAyLiBCYXNlZCBvbiB0aGUgVVJMLCBnZXQgdGhlIGNvdXJzZSBudW1iZXIgYW5kIHNjZW5hcmlvIGNvZGVcbiAgICogMy4gR2V0IHRoZSBzY2VuYXJpbyBpbmZvcm1hdGlvblxuICAgKiA0LiBHZXQgdGhlIHNjZW5hcmlvIHN0YXR1cyBvZiBzdHVkZW50cyBpbiB0aGUgY291cnNlXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIHRoaXMucGFyYW1PYnNlcnZlciA9IHRoaXMuX3JvdXRlLnBhcmFtc1xuICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgIGxldCBjb3Vyc2UgPSBwYXJhbXNbJ2NvdXJzZU51bSddO1xuICAgICAgICAgIGxldCBzY2VuQ29kZSA9IHBhcmFtc1snc2NlbklkJ107XG4gICAgICB0aGlzLmNvdXJzZU51bSA9IGNvdXJzZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmdldFNjZW5hcmlvKHNjZW5Db2RlKVxuICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICAgIHRoaXMuc2NlbmFyaW8gPSByZXM7XG4gICAgICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0U2NlbmFyaW9TdGF0dXModGhpcy5hZG1pbi5pZCwgY291cnNlLCBzY2VuQ29kZSlcbiAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHN0YXRzKT0+e1xuXG4gICAgICAgICAgICB0aGlzLnN0dWRlbnRzID0gc3RhdHM7XG4gICAgICAgIH0sIChlcnIyKT0+e1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0sIChlcnIpPT57XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgfSk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgZm9ybWF0dGVkIHN0cmluZ1xuICAgKiBkZXBlbmRpbmcgb24gaWYgc3R1ZGVudCBoYXMgYWNjZXNzIGdyYW50ZWQgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNHcmFudGVkIC0gaGFzIGFjY2VzcyBiZWVuIGdyYW50ZWRcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gLSBmb3JtYXR0ZWQgc3RyaW5nOyBcIkFjY2VzcyBncmFudGVkXCIgaWYgYWNjZXNzIGhhcyBiZWVuIGdyYW50ZWQsIFwiQWNjZXNzIG5vdCBncmFudGVkXCIgb3RoZXJ3aXNlXG4gICAqL1xuICBmb3JtYXRBY2Nlc3MoaXNHcmFudGVkOiBib29sZWFuKTogc3RyaW5ne1xuICAgIHJldHVybiAoaXNHcmFudGVkID8gJ0FjY2VzcyBncmFudGVkJyA6ICdBY2Nlc3Mgbm90IGdyYW50ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyBzZXJ2aWNlIHRvIGdyYW50IHRoZSBzdHVkZW50IGFjY2VzcyB0byB0aGUgc2NlbmFyaW9cbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiBcIkdyYW50IGFjY2Vzc1wiIGJ1dHRvbiBmb3IgYSBzdHVkZW50XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SW5kZXggLSBwb3NpdGlvbmFsIGluZGV4IG9mIHN0dWRlbnQgaW4gdGhlIGxpc3Qgb2Ygc3R1ZGVudHM7XG4gICAqIFRoaXMgaXMgKipOT1QqKiB0aGUgc3R1ZGVudCdzIHVzZXJJZFxuICAgKi9cbiAgZ3JhbnRBY2Nlc3Moc3R1ZGVudEluZGV4OiBudW1iZXIpe1xuICAgIGxldCBzY2VuSWQgPSB0aGlzLnNjZW5hcmlvLnNjZW5Db2RlO1xuICAgIGxldCBzdHVkZW50SWQgPSB0aGlzLnN0dWRlbnRzW3N0dWRlbnRJbmRleF0udXNlcklkO1xuICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdyYW50U2NlbkFjY2Vzcyh0aGlzLmFkbWluLmlkLCBzdHVkZW50SWQsIHNjZW5JZCwgdHJ1ZSlcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIGlmKHJlcyAhPT0gdW5kZWZpbmVkICYmIHJlcyAhPT0gbnVsbCl7XG4gICAgICAgICAgdGhpcy5zdHVkZW50c1tzdHVkZW50SW5kZXhdLnN0YXR1cyA9IHJlcy5hY2Nlc3NHcmFudGVkW3NjZW5JZF07XG4gICAgICAgIH1cbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBcIlZpZXcgRnJpZGdlXCIgYnV0dG9uLCBuYXZpZ2F0ZXMgdG8gdGhhdCBzdHVkZW50J3MgZnJpZGdlXG4gICAqIGZvciB0aGlzIHNjZW5hcmlvXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2YgXCJWaWV3IEZyaWRnZVwiIGJ1dHRvbiBvZiBhIHN0dWRlbnRcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHRoZSBzdHVkZW50J3MgdXNlcklEXG4gICAqL1xuICBnb1RvRnJpZGdlKHN0dWRlbnRJZDogbnVtYmVyKXtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4vc3R1ZGVudHMvJywgc3R1ZGVudElkLCB0aGlzLnNjZW5hcmlvLnNjZW5Db2RlXSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlcyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1zY2VuYXJpby9jb3Vyc2Utc2NlbmFyaW8uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUmVzb2x2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvY291cnNlLmludGVyZmFjZSc7XG5cbi8qKlxuICogRm9yIHRoZSBuYXZpZ2F0aW9uIGJyZWFkY3J1bWIsIHJlc29sdmVzIGEgVVJMIGNvdXJzZU51bSBwYXJhbWVldGVyXG4gKiB0byB0aGUgY291cnNlIG51bWJlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ291cnNlUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPENvdXJzZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICAgICAgICAgICAgKSB7IH1cbiAgLyoqXG4gICAqIEJhc2VkIG9uIHRoZSBVUkwgYGNvdXJzZU51bWAgcGFyYW1ldGVyLCBmaW5kIHRoZSBjb3Vyc2VcbiAgICogaXQgYmVsb25ncyB0b1xuICAgKlxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIC0gcm91dGUgVVJMIGF0IHRoZSBtb21lbnRcbiAgICogQHBhcmFtIHtSb3V0ZXJTdGF0ZVNuYXBzaG90fSBzdGF0ZSAtIHJvdXRlciBzdGF0ZTsgbmVlZGVkIHRvIGltcGxlbWVudCBpbnRlcmZhY2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gVGhlIGNvdXJzZSBpbmZvIGZvciB0aGUgY291cnNlTnVtXG4gICAqIG9yIGFuIGVtcHR5IG9ic2VydmFibGUgaWYgdGhlIGlkIGRvZXNuJ3QgYmVsb25nIHRvIGFueSBjb3Vyc2VcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Q291cnNlPiB7XG4gICAgbGV0IGFkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIGNvbnN0IGNvdXJzZU51bSA9IHJvdXRlLnBhcmFtc1snY291cnNlTnVtJ107XG5cbiAgICBpZiAoY291cnNlTnVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY291cnNlU2VydmljZS5nZXRDb3Vyc2UoYWRtaW4uaWQsIGNvdXJzZU51bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS5yZXNvbHZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1jcmVhdGUvY291cnNlLWNyZWF0ZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtY3JlYXRlL2NvdXJzZS1jcmVhdGUudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1jcmVhdGUvY291cnNlLWNyZWF0ZS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1jcmVhdGUvY291cnNlLWNyZWF0ZS5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnQgKiBmcm9tICcuL2NvdXJzZS5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9mcmlkZ2UuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGhhZ2UuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmFyaW8uaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3R1ZGVudC5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4cGVyaW1lbnQuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbWVuZGVscGVkZS1zY2VuYXJpb3MuaW50ZXJmYWNlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2ludGVyZmFjZXMvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtaW5kaXYvY291cnNlLWluZGl2LnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2UtZWRpdC9jb3Vyc2UtZWRpdC5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1zY2VuYXJpby9jb3Vyc2Utc2NlbmFyaW8udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS1zY2VuYXJpby9jb3Vyc2Utc2NlbmFyaW8uc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Utc2NlbmFyaW8vY291cnNlLXNjZW5hcmlvLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENvdXJzZVJlc29sdmVyIH0gZnJvbSAnLi9jb3Vyc2UucmVzb2x2ZXInO1xuaW1wb3J0IHsgU2NlbmFyaW9SZXNvbHZlciB9IGZyb20gJy4uLy4uL2NyaWNrZXQvc2NlbmFyaW8ucmVzb2x2ZXInO1xuXG5pbXBvcnQgeyBDb3Vyc2VDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvdXJzZS1jcmVhdGUvY291cnNlLWNyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlSW5kaXZDb21wb25lbnQgfSBmcm9tICcuL2NvdXJzZS1pbmRpdi9jb3Vyc2UtaW5kaXYuY29tcG9uZW50JztcbmltcG9ydCB7IENvdXJzZUVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NvdXJzZS1lZGl0L2NvdXJzZS1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3Vyc2VMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ291cnNlU2NlbmFyaW9Db21wb25lbnQgfSBmcm9tICcuL2NvdXJzZS1zY2VuYXJpby9jb3Vyc2Utc2NlbmFyaW8uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvdXJzZVJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLFxuICAgY2hpbGRyZW46IFtcbiAge1xuICAgIHBhdGg6ICdjcmVhdGUnLFxuICAgIGNvbXBvbmVudDogQ291cnNlQ3JlYXRlQ29tcG9uZW50LFxuICAgIGRhdGE6IHticmVhZGNydW1iczogJ0NyZWF0ZSBuZXcgY291cnNlJ31cbiAgfSxcbiAgeyBwYXRoOiAnOmNvdXJzZU51bScsXG4gICByZXNvbHZlOiB7Y291cnNlOiBDb3Vyc2VSZXNvbHZlcn0sXG4gICBkYXRhOiB7YnJlYWRjcnVtYnM6ICd7e2NvdXJzZS5jb3Vyc2VOdW19fScgfSxcbiAgIGNoaWxkcmVuOiBbXG4gICAgIHsgcGF0aDogJ2VkaXQnLFxuICAgIGNvbXBvbmVudDogQ291cnNlRWRpdENvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJzpzY2VuSWQnLFxuICAgIGNvbXBvbmVudDogQ291cnNlU2NlbmFyaW9Db21wb25lbnQsXG4gICAgcmVzb2x2ZToge3NjZW5hcmlvOiBTY2VuYXJpb1Jlc29sdmVyfSxcbiAgICBkYXRhOiB7YnJlYWRjcnVtYnM6ICd7eyBzY2VuYXJpby5sYWJlbCB9fSd9XG4gIH0sXG4gICAgIHtwYXRoOiAnJyxcbiAgICAgY29tcG9uZW50OiBDb3Vyc2VJbmRpdkNvbXBvbmVudH1cbiAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogQ291cnNlTGlzdENvbXBvbmVudFxuICB9XG4gICAgIF1cbn1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLnJvdXRlcy50cyJdLCJzb3VyY2VSb290IjoiIn0=