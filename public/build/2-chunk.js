webpackJsonp([2],{

/***/ 916:
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
const router_1 = __webpack_require__(19);
const shared_module_1 = __webpack_require__(54);
const student_routes_1 = __webpack_require__(948);
const student_list_component_1 = __webpack_require__(927);
const student_indiv_component_1 = __webpack_require__(928);
const student_fridge_component_1 = __webpack_require__(929);
const student_phage_component_1 = __webpack_require__(953);
const confirm_delete_dialog_component_1 = __webpack_require__(418);
const student_resolver_1 = __webpack_require__(930);
const phage_guesses_pipe_1 = __webpack_require__(955);
const phage_mutations_pipe_1 = __webpack_require__(956);
const phage_deletions_pipe_1 = __webpack_require__(957);
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(student_routes_1.StudentRoutes)
        ],
        declarations: [
            student_list_component_1.StudentListComponent,
            student_indiv_component_1.StudentIndivComponent,
            student_fridge_component_1.StudentFridgeComponent,
            student_phage_component_1.StudentPhageComponent,
            phage_guesses_pipe_1.PhageGuessesPipe,
            phage_mutations_pipe_1.PhageMutationsPipe,
            phage_deletions_pipe_1.PhageDeletionsPipe
        ],
        entryComponents: [
            confirm_delete_dialog_component_1.ConfirmDeleteDialogComponent
        ],
        providers: [
            student_resolver_1.StudentResolver
        ]
    })
], StudentModule);
exports.StudentModule = StudentModule;


/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CricketGlobals = {
    numPhage: 1000000,
    plateCapacity: 1500,
    plexerCapacity: 200,
    nFridgeShelf: 32,
    nFridgeSpots: 16,
    defaultLabDilution: 10,
    defaultPlexerDilution: 5,
    geneLength: 350,
    deletionGuessLength: 10
};


/***/ }),

/***/ 919:
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
const rxjs_1 = __webpack_require__(34);
const student_service_1 = __webpack_require__(417);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(53);
const student_interface_1 = __webpack_require__(919);
let StudentListComponent = class StudentListComponent {
    constructor(_studentService, _authService) {
        this._studentService = _studentService;
        this._authService = _authService;
        this.errorMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        let admin = this._authService.getUser();
        this._studentService.listStudents(admin.id)
            .takeUntil(this.isDestroyed$)
            .subscribe((students) => {
            this.students = students.sort(student_interface_1.sortStudents);
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    ngOnDestroy() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
StudentListComponent = __decorate([
    core_1.Component({
        selector: 'student-list',
        templateUrl: __webpack_require__(949)
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        authentication_service_1.AuthenticationService])
], StudentListComponent);
exports.StudentListComponent = StudentListComponent;


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
const router_1 = __webpack_require__(19);
const ng_bootstrap_1 = __webpack_require__(90);
const rxjs_1 = __webpack_require__(34);
const authentication_service_1 = __webpack_require__(18);
const student_service_1 = __webpack_require__(417);
const cricket_service_1 = __webpack_require__(120);
const student_roles_1 = __webpack_require__(950);
const confirm_delete_dialog_component_1 = __webpack_require__(418);
const read_error_1 = __webpack_require__(53);
let StudentIndivComponent = class StudentIndivComponent {
    constructor(_router, _route, _authService, _studentService, _scenarioService, _modalService) {
        this._router = _router;
        this._route = _route;
        this._authService = _authService;
        this._studentService = _studentService;
        this._scenarioService = _scenarioService;
        this._modalService = _modalService;
        this.roles = student_roles_1.StudentRolesArray;
        this.errorMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        this._admin = this._authService.getUser();
        this.paramObserver = this._route.params.subscribe(params => {
            let studentId = params['studentId'];
            this._studentService.getStudent(this._admin.id, studentId)
                .takeUntil(this.isDestroyed$)
                .subscribe((info) => {
                this.student = info;
                this.newRole = this.student.role;
                this._scenarioService.listScenarios()
                    .takeUntil(this.isDestroyed$)
                    .subscribe((scens) => {
                    this.scenarios = scens;
                });
            }, (error) => {
                this.errorMessage = read_error_1.readErrorMessage(error);
            });
        });
    }
    getScenStatus(scenCode) {
        let isGranted = this.student.accessGranted[scenCode];
        if (isGranted === true) {
            return 'Access granted';
        }
        else if (isGranted === false) {
            return 'Access not granted';
        }
        else {
            return 'NA';
        }
    }
    getStudentCourse() {
        let s = this.student;
        if (s.course) {
            return '<a [routlerLink]="[\'/admin/courses/\', "' + s.course.courseNum + ']">s.course.courseNum</a>';
        }
        else {
            return 'No course';
        }
    }
    grantAccess(scenCode) {
        this._studentService.grantScenAccess(this._admin.id, this.student.userId, scenCode, true)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            if (res !== undefined && res !== null) {
                this.student = res;
            }
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    roleDisabled(src) {
        if (this._admin === undefined) {
            return false;
        }
        else if (this.student.userId === this._admin.id) {
            return true;
        }
        else if (src === 'admin' && this._admin.role < 2) {
            return true;
        }
        else if (src === 'instr' && this._admin.role < 1) {
            return true;
        }
        else {
            return false;
        }
    }
    roleButtonClass(src) {
        return {
            'btn btn-sm': true,
            'btn-outline-secondary': src !== this.student.role,
            'btn-secondary': src === this.student.role
        };
    }
    clickButton(src) {
        this._studentService.setStudentRole(this._admin.id, this.student.userId, src)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            this.student = res;
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    deleteDisabled() {
        if (this._admin === undefined) {
            return true;
        }
        else if (this.student.userId === this._admin.id) {
            return false;
        }
        else if (this.student.role === 'admin') {
            return true;
        }
        else {
            return false;
        }
    }
    checkDelete() {
        const modelRef = this._modalService.open(confirm_delete_dialog_component_1.ConfirmDeleteDialogComponent, { size: 'sm' });
        modelRef.componentInstance.message = 'Are you sure you want to delete?';
        modelRef.result.then((result) => {
            if (result === 'delete') {
                this._callDelete();
            }
        }, (dismiss) => {
            return;
        });
    }
    _callDelete() {
        this._studentService.deleteStudent(this._admin.id, this.student.userId)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            this._router.navigate(['/admin/students']);
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
StudentIndivComponent = __decorate([
    core_1.Component({
        selector: 'student-indiv',
        templateUrl: __webpack_require__(951)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        student_service_1.StudentService,
        cricket_service_1.CricketService,
        ng_bootstrap_1.NgbModal])
], StudentIndivComponent);
exports.StudentIndivComponent = StudentIndivComponent;


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
const router_1 = __webpack_require__(19);
const rxjs_1 = __webpack_require__(34);
const student_service_1 = __webpack_require__(417);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(53);
let StudentFridgeComponent = class StudentFridgeComponent {
    constructor(_router, _route, _studentService, _authService) {
        this._router = _router;
        this._route = _route;
        this._studentService = _studentService;
        this._authService = _authService;
        this.hasFridge = false;
        this.viewStrains = 'all';
        this.errorMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        this.paramObserver = this._route.params.subscribe(params => {
            let studentId = params['studentId'];
            let scenId = params['scenId'];
            let admin = this._authService.getUser();
            this._studentService.getFridge(admin.id, studentId, scenId)
                .takeUntil(this.isDestroyed$)
                .subscribe((fridge) => {
                this.fridge = fridge;
                this.hasFridge = (fridge.strains !== undefined);
                if (this.hasFridge) {
                    let guesses = JSON.parse(this.fridge.guesses);
                    for (let strain of this.fridge.strains) {
                        let x = guesses[strain.strainNum];
                        if (x) {
                            strain.guesses = x;
                        }
                        else {
                            strain.guesses = [];
                        }
                    }
                    this.fridge.strains.sort((a, b) => { return a.strainNum - b.strainNum; });
                }
                this.setPhage('all');
            }, (error) => {
                this.errorMessage = read_error_1.readErrorMessage(error);
            });
        });
    }
    getButtonClass(src) {
        return {
            'btn btn-sm': true,
            'btn-primary': (src === this.viewStrains),
            'btn-outline-primary': (src !== this.viewStrains)
        };
    }
    setPhage(src) {
        this.viewStrains = src;
        if (this.viewStrains === 'all') {
            this.strainList = this.fridge.strains;
        }
        else {
            this.strainList = this.fridge.strains.filter((strain) => {
                if (strain.phageType === 'unknown') {
                    return true;
                }
                else if (strain.phageType === 'user' && strain.submitted) {
                    return true;
                }
                else {
                    return false;
                }
            });
        }
    }
    ngOnDestroy() {
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
StudentFridgeComponent = __decorate([
    core_1.Component({
        selector: 'student-fridge',
        templateUrl: __webpack_require__(952)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        student_service_1.StudentService,
        authentication_service_1.AuthenticationService])
], StudentFridgeComponent);
exports.StudentFridgeComponent = StudentFridgeComponent;


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
const rxjs_1 = __webpack_require__(34);
const authentication_service_1 = __webpack_require__(18);
const student_service_1 = __webpack_require__(417);
let StudentResolver = class StudentResolver {
    constructor(_studentService, _authService) {
        this._studentService = _studentService;
        this._authService = _authService;
    }
    resolve(route, state) {
        let admin = this._authService.getUser();
        const studentNum = route.params['studentId'];
        if (studentNum) {
            return this._studentService.getStudent(admin.id, studentNum);
        }
        else {
            return new rxjs_1.Observable();
        }
    }
};
StudentResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        authentication_service_1.AuthenticationService])
], StudentResolver);
exports.StudentResolver = StudentResolver;


/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const student_list_component_1 = __webpack_require__(927);
const student_indiv_component_1 = __webpack_require__(928);
const student_fridge_component_1 = __webpack_require__(929);
const scenario_resolver_1 = __webpack_require__(184);
const student_resolver_1 = __webpack_require__(930);
exports.StudentRoutes = [
    { path: '',
        children: [
            {
                path: ':studentId',
                resolve: { student: student_resolver_1.StudentResolver },
                data: { breadcrumbs: '{{ student.firstName }} {{ student.lastName }}' },
                children: [
                    {
                        path: ':scenId',
                        component: student_fridge_component_1.StudentFridgeComponent,
                        resolve: { scenario: scenario_resolver_1.ScenarioResolver },
                        data: { breadcrumbs: '{{ scenario.label }}' }
                    },
                    { path: '',
                        component: student_indiv_component_1.StudentIndivComponent
                    }
                ]
            },
            {
                path: '',
                component: student_list_component_1.StudentListComponent
            }
        ]
    }
];


/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-list/student-list.template.html";

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRolesArray = [
    {
        key: 'student',
        label: 'Student',
        value: 0
    }, {
        key: 'instr',
        label: 'Instructor',
        value: 1
    }, {
        key: 'admin',
        label: 'Administrator',
        value: 2
    }
];


/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-indiv/student-indiv.template.html";

/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-fridge/student-fridge.template.html";

/***/ }),

/***/ 953:
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
let StudentPhageComponent = class StudentPhageComponent {
    constructor() { }
    formatPhageType() {
        if (this.phage) {
            let t = this.phage.phageType;
            if (this.phage.phageType === 'user' && this.phage.submitted) {
                return 'SUBMISSION';
            }
            else {
                return this.phage.phageType.toUpperCase();
            }
        }
        else {
            return '';
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StudentPhageComponent.prototype, "phage", void 0);
StudentPhageComponent = __decorate([
    core_1.Component({
        selector: 'student-phage',
        templateUrl: __webpack_require__(954)
    }),
    __metadata("design:paramtypes", [])
], StudentPhageComponent);
exports.StudentPhageComponent = StudentPhageComponent;


/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-fridge/student-phage.template.html";

/***/ }),

/***/ 955:
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
const cricket_globals_1 = __webpack_require__(918);
let PhageGuessesPipe = class PhageGuessesPipe {
    transform(guesses) {
        let stepSize = cricket_globals_1.CricketGlobals.deletionGuessLength;
        let out = '';
        let x = -1;
        for (let i in guesses) {
            let y = +i;
            if (x < 0 && guesses[y]) {
                x = stepSize * y;
            }
            else if (x >= 0 && guesses[y] === false) {
                let z = (stepSize * y);
                out += (out === '' ? '' : ', ');
                out += x + ' - ' + z;
                x = -1;
            }
        }
        if (x != -1) {
            out += (out === '' ? '' : ', ');
            out += x + ' - ' + cricket_globals_1.CricketGlobals.geneLength;
        }
        if (out === '') {
            return 'None';
        }
        else {
            return out;
        }
    }
};
PhageGuessesPipe = __decorate([
    core_1.Pipe({ name: 'phageGuesses' })
], PhageGuessesPipe);
exports.PhageGuessesPipe = PhageGuessesPipe;


/***/ }),

/***/ 956:
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
let PhageMutationsPipe = class PhageMutationsPipe {
    transform(mutations) {
        let out = '';
        for (let x of mutations) {
            out += (out === '' ? '' : ', ');
            let y = (x > 0 ? '+1' : '-1');
            let z = Math.abs(x);
            out += y + ' at ' + z;
        }
        return out;
    }
};
PhageMutationsPipe = __decorate([
    core_1.Pipe({ name: 'phageMutations' })
], PhageMutationsPipe);
exports.PhageMutationsPipe = PhageMutationsPipe;


/***/ }),

/***/ 957:
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
let PhageDeletionsPipe = class PhageDeletionsPipe {
    transform(deletion) {
        let out = '';
        let mLength = (deletion.length % 2 === 0 ? deletion.length : deletion.length - 1);
        for (let i = 0; i < mLength; i += 2) {
            out += (i > 1 ? ', ' : '');
            out += deletion[i] + ' - ' + deletion[i + 1];
        }
        return out;
    }
};
PhageDeletionsPipe = __decorate([
    core_1.Pipe({ name: 'phageDeletions' })
], PhageDeletionsPipe);
exports.PhageDeletionsPipe = PhageDeletionsPipe;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQuZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2ludGVyZmFjZXMvc3R1ZGVudC5pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LWZyaWRnZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQucmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQucm9sZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtaW5kaXYvc3R1ZGVudC1pbmRpdi50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LWZyaWRnZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LXBoYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1waGFnZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGhhZ2UtZ3Vlc3Nlcy5waXBlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGhhZ2UtbXV0YXRpb25zLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9waGFnZS1kZWxldGlvbnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5QztBQUN6Qyx5Q0FBK0M7QUFDL0MsZ0RBQTBEO0FBRTFELGtEQUFpRDtBQUVqRCwwREFBNkU7QUFDN0UsMkRBQWdGO0FBQ2hGLDREQUFtRjtBQUNuRiwyREFBaUY7QUFDakYsbUVBQTRGO0FBRTVGLG9EQUFxRDtBQUNyRCxzREFBa0U7QUFDbEUsd0RBQXNFO0FBQ3RFLHdEQUFzRTtBQTJCdEUsSUFBYSxhQUFhLEdBQTFCO0NBQTZCO0FBQWhCLGFBQWE7SUFyQnpCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDRCQUFZO1lBQ1oscUJBQVksQ0FBQyxRQUFRLENBQUMsOEJBQWEsQ0FBQztTQUNyQztRQUNELFlBQVksRUFBRTtZQUNaLDZDQUFvQjtZQUNwQiwrQ0FBcUI7WUFDckIsaURBQXNCO1lBQ3RCLCtDQUFxQjtZQUNyQixxQ0FBZ0I7WUFDaEIseUNBQWtCO1lBQ2xCLHlDQUFrQjtTQUNuQjtRQUNELGVBQWUsRUFBRTtZQUNmLDhEQUE0QjtTQUM3QjtRQUNELFNBQVMsRUFBRTtZQUNULGtDQUFlO1NBQ2hCO0tBQ0YsQ0FBQztHQUNXLGFBQWEsQ0FBRztBQUFoQixzQ0FBYTs7Ozs7Ozs7Ozs7QUNwQ2Isc0JBQWMsR0FBRztJQUk1QixRQUFRLEVBQUMsT0FBTztJQUloQixhQUFhLEVBQUUsSUFB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a0I7SUFEOUIsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDLENBQUM7R0FDbEIsa0JBQWtCLENBWTlCO0FBWlksZ0RBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2YvQixzQ0FBb0Q7QUFhcEQsSUFBYSxrQkFBa0IsR0FBL0I7SUFFRSxTQUFTLENBQUMsUUFBa0I7UUFDMUIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWpGLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLElBQUcsQ0FBQyxFQUFDLENBQUM7WUFDakMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDM0IsR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRjtBQWJZLGtCQUFrQjtJQUQ5QixXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztHQUNsQixrQkFBa0IsQ0FhOUI7QUFiWSxnREFBa0IiLCJmaWxlIjoiMi1jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBTdHVkZW50Um91dGVzIH0gZnJvbSAnLi9zdHVkZW50LnJvdXRlcyc7XG5cbmltcG9ydCB7IFN0dWRlbnRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHVkZW50SW5kaXZDb21wb25lbnQgfSBmcm9tICcuL3N0dWRlbnQtaW5kaXYvc3R1ZGVudC1pbmRpdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R1ZGVudEZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1mcmlkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFN0dWRlbnRQaGFnZUNvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1waGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3R1ZGVudFJlc29sdmVyIH0gZnJvbSAnLi9zdHVkZW50LnJlc29sdmVyJztcbmltcG9ydCB7IFBoYWdlR3Vlc3Nlc1BpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9waGFnZS1ndWVzc2VzLnBpcGUnO1xuaW1wb3J0IHsgUGhhZ2VNdXRhdGlvbnNQaXBlIH0gZnJvbSAnLi4vLi4vcGlwZXMvcGhhZ2UtbXV0YXRpb25zLnBpcGUnO1xuaW1wb3J0IHsgUGhhZ2VEZWxldGlvbnNQaXBlIH0gZnJvbSAnLi4vLi4vcGlwZXMvcGhhZ2UtZGVsZXRpb25zLnBpcGUnO1xuXG4vKipcbiAqIE1vZHVsZSBmb3IgYWRtaW4tcmVndWxhdGVkIHN0dWRlbnQgdGhpbmdzIGxpa2Ugc2V0dGluZyB0aGVcbiAqIHJvbGUsIHZpZXdpbmcgZnJpZGdlcyBmb3IgZ3JhZGluZywgYW5kIGxpc3RpbmcgYWxsIHN0dWRlbnRzXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFN0dWRlbnRSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN0dWRlbnRMaXN0Q29tcG9uZW50LFxuICAgIFN0dWRlbnRJbmRpdkNvbXBvbmVudCxcbiAgICBTdHVkZW50RnJpZGdlQ29tcG9uZW50LFxuICAgIFN0dWRlbnRQaGFnZUNvbXBvbmVudCxcbiAgICBQaGFnZUd1ZXNzZXNQaXBlLFxuICAgIFBoYWdlTXV0YXRpb25zUGlwZSxcbiAgICBQaGFnZURlbGV0aW9uc1BpcGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTdHVkZW50UmVzb2x2ZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50TW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQubW9kdWxlLnRzIiwiLyoqXG4gKiBTY2VuYXJpby9leHBlcmllbWVudC1yZWxhdGVkIHZhbHVlcyB1c2VkIHRvXG4gKiAxLiBTZW5kIHRoZSBjb3JyZWN0IHBhcmFtZXRlcnMgdG8gYmFja2VuZCBjYWxsc1xuICogMi4gTWF0Y2ggc29tZSBiYWNrZW5kIHBhcmFtZXRlcnNcbiAqIDMuIEhhdmUgY29uc2lzdGVudCBkZWZhdWx0c1xuICovXG5leHBvcnQgY29uc3QgQ3JpY2tldEdsb2JhbHMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygc3RhcnRpbmcgcGhhZ2Ugd2hlbiB0YWtlbiBmcm9tIGZyaWRnZVxuICAgKi9cbiAgbnVtUGhhZ2U6MTAwMDAwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBsYWIgcm9vbSBwbGF0ZVxuICAgKi9cbiAgcGxhdGVDYXBhY2l0eTogMTUwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBlYWNoIHBsZXhlciByb29tIHBsYXRlXG4gICAqL1xuICBwbGV4ZXJDYXBhY2l0eTogMjAwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHNoZWx2ZXMgaW4gdGhlIGZyaWRnZVxuICAgKi9cbiAgbkZyaWRnZVNoZWxmOiAzMixcbiAgLyoqXG4gICAqIE51bWJlciBvZiBzcG90cyBvbiBlYWNoIHNoZWxmIG9mIHRoZSBmcmlkZ2VcbiAgICovXG4gIG5GcmlkZ2VTcG90czogMTYsXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRpbHV0aW9uIHZhbHVlIGZvciBsYWIgcm9vbTsgY2FuIGJlIGNoYW5nZWQgYnkgdXNlclxuICAgKi9cbiAgZGVmYXVsdExhYkRpbHV0aW9uOiAxMCxcbiAgLyoqXG4gICAqIERlZmF1bHQgZGlsdXRpb24gdmFsdWUgZm9yIHBsZXhlciByb29tOyBjYW4gYmUgY2hhbmdlZCBieSB1c2VyXG4gICAqL1xuICBkZWZhdWx0UGxleGVyRGlsdXRpb246IDUsXG4gIC8qKlxuICAgKiBMZW5ndGggb2YgdGhlIGdlbmUgaW4gbnVtYmVyIG9mIGJhc2VwYWlyc1xuICAgKi9cbiAgZ2VuZUxlbmd0aDogMzUwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIGJhc2VwYWlycyBwZXIgXCJibG9ja1wiIHdoZW4gZ3Vlc3NpbmcgZGVsZXRpb24gbG9jYXRpb25cbiAgICovXG4gIGRlbGV0aW9uR3Vlc3NMZW5ndGg6IDEwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQuZ2xvYmFscy50cyIsImltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4vY291cnNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBfVXNlciB9IGZyb20gJy4vdXNlci5pbnRlcmZhY2UnO1xuLy8gIGZpcnN0TmFtZTogc3RyaW5nO1xuLy8gIGxhc3ROYW1lOiBzdHJpbmc7XG4vLyAgdXNlcklkOiBudW1iZXI7XG5cbi8qKlxuICogSW5mb3JtYXRpb24gbmVlZGVkIGFzIGEgdXNlciB1c2luZyB0aGUgYXBwIGluIHNjZW5hcmlvc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0dWRlbnQgZXh0ZW5kcyBfVXNlciB7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBhY2Nlc3NHcmFudGVkPzogYW55O1xuICBzdGF0dXM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gbmVlZGVkIGZvciBhZG1pbiBwYWdlcyBhYm91dCBhIHVzZXIvc3R1ZGVudFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFkbWluU3R1ZGVudCBleHRlbmRzIFN0dWRlbnQge1xuICBjb3Vyc2U6IENvdXJzZTtcbiAgcm9sZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHNvcnQgc3R1ZGVudHMgYWxwaGFiZXRpY2FsbHkgYnkgbGFzdCBuYW1lO1xuICogVXNlcyBmaXJzdCBuYW1lIGZvciB0aWVzXG4gKlxuICogTWFrZXMgdGhlIG5hbWUgbG93ZXJjYXNlIGJlZm9yZSBzb3J0aW5nIHRvIGVuc3VyZSBzb3J0IGlzXG4gKiBjYXNlIGluc2Vuc2l0aXZlXG4gKi9cbmV4cG9ydCBjb25zdCBzb3J0U3R1ZGVudHMgPSBmdW5jdGlvbihhLGIpe1xuICAgIHZhciBjb21wYXJpc29uID0gYS5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAoY29tcGFyaXNvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGEuZmlyc3ROYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLmZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBhcmlzb247XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4uL3N0dWRlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbmltcG9ydCB7IEFkbWluU3R1ZGVudCwgc29ydFN0dWRlbnRzIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZSc7XG5cbi8qKlxuICogLSBDb21wb25lbnQgd2hpY2ggbGlzdHMgc3R1ZGVudHMgZGVwZW5kZW50IG9uIHRoZSByb2xlIG9mIGxvZ2dlZCBpbiB1c2VyO1xuICAqIC0gaWYgYFwiYWRtaW5cImAsIGFsbCB1c2VycyBpbiB0aGUgc3lzdGVtXG4gICogLSBpZiBgXCJpbnN0clwiYCwgYWxsIHVzZXJzIGluIGNvdXJzZXMgaW5zdHIgdGVhY2hlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0dWRlbnQtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc3R1ZGVudC1saXN0LnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIExpc3Qgb2Ygc3R1ZGVudHNcbiAgICovXG4gICAgcHJpdmF0ZSBzdHVkZW50czogQWRtaW5TdHVkZW50W107XG4gIC8qKlxuICAgKiBCb29sZWFuIHN0YXRlIHZhcmlhYmxlIHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIG11bHRpcGxlIG9ic2VydmFibGVzIGVhc2llclxuICAgKi9cbiAgICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2UgZnJvbSBzZXJ2ZXJcbiAgICovXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3N0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSB2aWV3XG4gICAqIDEuIGdldCBsb2dnZWQgaW4gdXNlciBpZFxuICAgKiAyLiBnZXQgdGhlIGxpc3Qgb2Ygc3R1ZGVudHNcbiAgICogMy4gb3JkZXIgdGhlIGxpc3Qgb2Ygc3R1ZGVudHNcbiAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGxldCBhZG1pbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UubGlzdFN0dWRlbnRzKGFkbWluLmlkKVxuICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0dWRlbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50cyA9IHN0dWRlbnRzLnNvcnQoc29ydFN0dWRlbnRzKTtcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogRGVzdG9yeSB0aGUgY29tcG9uZW50IGJ5IHVuc3Vic2NyaWJpbmcgZnJvbSBhbGwgb2JzZXJ2YWJsZXNcbiAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4uL3N0dWRlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDcmlja2V0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NyaWNrZXQvY3JpY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0dWRlbnRSb2xlc0FycmF5IH0gZnJvbSAnLi4vc3R1ZGVudC5yb2xlcyc7XG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb3Vyc2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2NvdXJzZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWRtaW5TdHVkZW50IH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvc2NlbmFyaW8uaW50ZXJmYWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHZpZXcgaW5mb3JtYXRpb24gZm9yIGEgc2luZ2xlIHN0dWRlbnRcbiAqIFRoaXMgaW5jbHVkZXMgZW1haWwvbmFtZS9yb2xlIGluZm9ybWF0aW9uIGFuZCBhY2Nlc3Mgc3RhdHVzXG4gKiBmb3IgYWxsIHNjZW5hcmlvc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0dWRlbnQtaW5kaXYnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3N0dWRlbnQtaW5kaXYudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgU3R1ZGVudEluZGl2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBTdHVkZW50IHdlIGFyZSB2aWV3aW5nXG4gICAqL1xuICAgIHByb3RlY3RlZCBzdHVkZW50OiBBZG1pblN0dWRlbnQ7XG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBzY2VuYXJpb3NcbiAgICovXG4gICAgcHJpdmF0ZSBzY2VuYXJpb3M6IFNjZW5hcmlvW107XG4gIC8qKlxuICAgKiBCb29sZWFuIHN0YXRlIHZhcmlhYmxlIHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIG11bHRpcGxlXG4gICAqIG9ic2VydmFibGVzIGVhc2llclxuICAgKi9cbiAgICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBmb3IgVVJMIHBhcmFtZXRlcnNcbiAgICovXG4gICAgcHJpdmF0ZSBwYXJhbU9ic2VydmVyOiBhbnk7XG4gIC8qKlxuICAgKiBMb2dnZWQgaW4gdXNlciB3aG8gbXVzdCBiZSBhbiBhZG1pbiBvciBpbnN0cnVjdG9yXG4gICAqL1xuICAgIHByaXZhdGUgX2FkbWluOiBVc2VyO1xuICAvKipcbiAgICogTGlzdCBvZiBwb3NzaWJsZSByb2xlc1xuICAgKi9cbiAgICBwcml2YXRlIHJvbGVzID0gU3R1ZGVudFJvbGVzQXJyYXk7XG4gIC8qKlxuICAgKiBOZXcgcm9sZSB0byBjaGFuZ2UgdG8gaWYgYWxsb3dlZFxuICAgKi9cbiAgICBwcml2YXRlIG5ld1JvbGU6IHN0cmluZztcblxuICAvKipcbiAgICogUG90ZW50aWFsIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IENyaWNrZXRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE5nYk1vZGFsKSB7XG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50XG4gICAqIDEuIEdldCBsb2dnZWQgaW4gdXNlclxuICAgKiAyLiBHZXQgaWQgb2Ygc3R1ZGVudCBvZiBpbnRlcmVzdCBmcm9tIFVSTFxuICAgKiAzLiBHZXQgdGhlIHN0dWRlbnQncyBpbmZvXG4gICAqIDQuIEdldCBsaXN0IG9mIGFsbCBzY2VuYXJpb3NcbiAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2FkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICBsZXQgc3R1ZGVudElkID0gcGFyYW1zWydzdHVkZW50SWQnXTtcbiAgICAgICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldFN0dWRlbnQodGhpcy5fYWRtaW4uaWQsIHN0dWRlbnRJZClcbiAgICAgICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50ID0gaW5mbztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdSb2xlID0gdGhpcy5zdHVkZW50LnJvbGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5saXN0U2NlbmFyaW9zKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChzY2VucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmFyaW9zID0gc2NlbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogUmV0dXJuIGZvcm1hdHRlZCBzdHJpbmcgYmFzZWQgb24gaWYgYWNjZXNzIGdyYW50ZWQgZm9yIHNjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuQ29kZSAtIHNjZW5hcmlvIHRvIGxvb2sgdXBcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gYFwiQWNjZXNzIGdyYW50ZWRcImAsIGBcIkFjY2VzcyBub3QgZ3JhbnRlZFwiYCwgb3IgYFwiTkFcImBcbiAgICovXG4gICAgZ2V0U2NlblN0YXR1cyhzY2VuQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGlzR3JhbnRlZCA9IHRoaXMuc3R1ZGVudC5hY2Nlc3NHcmFudGVkW3NjZW5Db2RlXTtcbiAgICAgICAgaWYgKGlzR3JhbnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICdBY2Nlc3MgZ3JhbnRlZCdcbiAgICAgICAgfSBlbHNlIGlmIChpc0dyYW50ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0FjY2VzcyBub3QgZ3JhbnRlZCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnTkEnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgLyoqXG4gICAqIC0gR2V0IGEgZm9ybWF0dGVkIEhUTUwgc3RyaW5nIGJhc2VkIG9uIHRoZSBzdHVkZW50XG4gICAqIC0gSWYgc3R1ZGVudCBoYXMgYSBjb3Vyc2UsIHJldHVybnMgbGluayB0byB0aGUgY291cnNlIHBhZ2VcbiAgICogLSBJZiBzdHVkZW50IGRvZXNuJ3QgaGF2ZSBhIGNvdXJzZSwgcmV0dXJucyAnTm8gY291cnNlJ1xuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBmb3JtYXR0ZWQgSFRNTFxuICAgKi9cbiAgICBnZXRTdHVkZW50Q291cnNlKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBzOiBBZG1pblN0dWRlbnQgPSB0aGlzLnN0dWRlbnQ7XG4gICAgICAgIGlmIChzLmNvdXJzZSkge1xuICAgICAgICAgICAgcmV0dXJuICc8YSBbcm91dGxlckxpbmtdPVwiW1xcJy9hZG1pbi9jb3Vyc2VzL1xcJywgXCInICsgcy5jb3Vyc2UuY291cnNlTnVtICsgJ11cIj5zLmNvdXJzZS5jb3Vyc2VOdW08L2E+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnTm8gY291cnNlJztcbiAgICAgICAgfVxuICAgIH1cblxuICAvKipcbiAgICogR3JhbnQgYWNjZXNzIGZvciBhIHNwZWNpZmljIHNjZW5hcmlvIGJ5IGNhbGxpbmcgc3R1ZGVudCBzZXJ2aWNlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2Ygb25lIG9mIHRoZSBzY2VuYXJpbyBidXR0b25zXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuQ29kZSBzY2VuYXJpbyB0byBncmFudCBhY2Nlc3MgZm9yXG4gICAqL1xuICAgIGdyYW50QWNjZXNzKHNjZW5Db2RlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ3JhbnRTY2VuQWNjZXNzKHRoaXMuX2FkbWluLmlkLCB0aGlzLnN0dWRlbnQudXNlcklkLCBzY2VuQ29kZSwgdHJ1ZSlcbiAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQgJiYgcmVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnQgPSByZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYSByb2xlIHRvZ2dsZSBidXR0b24gc2hvdWxkIGJlIGRpc2FibGVkXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgLSBuYW1lIG9mIGJ1dHRvbi9yb2xlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBkaXNhYmxlIGZvciByb2xlcyBncmVhdGVyIHRoYW4gY3VycmVudCB1c2VyXG4gICAqIGFuZCBpZiB2aWV3aW5nIHBhZ2Ugb2YgY3VycmVudCB1c2VyXG4gICAqL1xuICAgIHJvbGVEaXNhYmxlZChzcmM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5fYWRtaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdHVkZW50LnVzZXJJZCA9PT0gdGhpcy5fYWRtaW4uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNyYyA9PT0gJ2FkbWluJyAmJiB0aGlzLl9hZG1pbi5yb2xlIDwgMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc3JjID09PSAnaW5zdHInICYmIHRoaXMuX2FkbWluLnJvbGUgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIENTUyBjbGFzc2VzIGZvciBlYWNoIHJvbGUgYnV0dG9uIGJhc2VkIG9uIHRoZVxuICAgKiBzdHVkZW50J3MgY3VycmVudCByb2xlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgLSBuYW1lIG9mIGJ1dHRvbi9yb2xlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHBvc3NpYmxlIGNsYXNzZXMgd2l0aCB0cnVlL2ZhbHNlIGFzIGFwcGxpY2FibGVcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogQ3VycmVudCBzdHVkZW50IGhhcyByb2xlIFwic3R1ZGVudFwiXG4gICAqIHJvbGVCdXR0b25DbGFzcygnc3R1ZGVudCcpIC0+IHsnYnRuIGJ0bi1zbWFsbCc6IHRydWUsICdidGgtc2Vjb25kYXJ5JzogdHJ1ZSwgJ2J0bi1zZWNvbmRhcnktb3V0bGluZSc6IGZhbHNlfVxuICAgKiByb2xlQnV0dG9uQ2xhc3MoJ2FkbWluJykgLT4geydidG4gYnRuLXNtYWxsJzogdHJ1ZSwgJ2J0aC1zZWNvbmRhcnknOiBmYWxzZSwgJ2J0bi1zZWNvbmRhcnktb3V0bGluZSc6IHRydWV9XG4gICAqL1xuICAgIHJvbGVCdXR0b25DbGFzcyhzcmM6IHN0cmluZyk6IE9iamVjdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnYnRuIGJ0bi1zbSc6IHRydWUsXG4gICAgICAgICAgICAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5Jzogc3JjICE9PSB0aGlzLnN0dWRlbnQucm9sZSxcbiAgICAgICAgICAgICdidG4tc2Vjb25kYXJ5Jzogc3JjID09PSB0aGlzLnN0dWRlbnQucm9sZVxuICAgICAgICB9XG4gICAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGNsaWNraW5nIGEgcm9sZSBidXR0b24sIHVwZGF0ZSB0aGUgc3R1ZGVudCByb2xlXG4gICAqIGJ5IGNhbGxpbmcgc3R1ZGVudCBzZXJ2aWNlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2Ygb25lIG9mIHRoZSByb2xlIGJ1dHRvbnNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIHJvbGUgb2YgYnV0dG9uIHB1c2hlZFxuICAgKi9cbiAgICBjbGlja0J1dHRvbihzcmM6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5zZXRTdHVkZW50Um9sZSh0aGlzLl9hZG1pbi5pZCwgdGhpcy5zdHVkZW50LnVzZXJJZCwgc3JjKVxuICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudCA9IHJlcztcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGRlbGV0ZSBidXR0b24gc2hvdWxkIGJlIGRpc2FibGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIGB0cnVlYCBpZiB2aWV3aW5nIHBhZ2Ugb2YgbG9nZ2VkIGluIHVzZXIgb3IgaWYgc3R1ZGVudCBpcyBhbiBhZG1pblxuICAgKiBgZmFsc2VgIG90aGVyd2lzZVxuICAgKi9cbiAgZGVsZXRlRGlzYWJsZWQoKXtcbiAgICBpZih0aGlzLl9hZG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZih0aGlzLnN0dWRlbnQudXNlcklkID09PSB0aGlzLl9hZG1pbi5pZCl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmKHRoaXMuc3R1ZGVudC5yb2xlID09PSAnYWRtaW4nKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0gd2hlbiBjbGlja2luZyBkZWxldGUgYnV0dG9uLCBvcGVuIGEgbW9kYWwgZGlhbG9nIHRvIGNvbmZpcm0gZGVsZXRlXG4gICAqIC0gaWYgY29uZmlybSwgZGVsZXRlIGFuZCByZWRpcmVjdCB0byBzdHVkZW50c1xuICAgKiAtIG90aGVyd2lzZSwgZG8gbm90aGluZ1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIHRoZSBcIkRlbGV0ZVwiIGJ1dHRvblxuICAgKi9cbiAgY2hlY2tEZWxldGUoKXtcbiAgICBjb25zdCBtb2RlbFJlZiA9IHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnQsIHtzaXplOiAnc20nfSk7XG4gICAgbW9kZWxSZWYuY29tcG9uZW50SW5zdGFuY2UubWVzc2FnZSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPyc7XG5cbiAgICBtb2RlbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KT0+e1xuICAgICAgaWYocmVzdWx0ID09PSAnZGVsZXRlJyl7XG4gICAgICAgIHRoaXMuX2NhbGxEZWxldGUoKTtcbiAgICAgIH1cbiAgICB9LCAoZGlzbWlzcyk9PntcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gd2hpY2ggaW1wbGVtZW50cyBkZWxldGUgc3R1ZGVudCBhZnRlciB1c2VyXG4gICAqIGNvbmZpcm1lZCBkZWxldGlvblxuICAgKi9cbiAgcHJvdGVjdGVkIF9jYWxsRGVsZXRlKCl7XG4gICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZGVsZXRlU3R1ZGVudCh0aGlzLl9hZG1pbi5pZCwgdGhpcy5zdHVkZW50LnVzZXJJZClcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIC8vIHN1Y2Nlc3NmdWxcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9zdHVkZW50cyddKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBjb21wb25lbnQgYnkgdW5zdWJzY3JpYmluZyB0byB0aGUgc2VydmljZXNcbiAgICogVGhpcyBwcmV2ZW50cyBhIG1lbW9yeSBsZWFrXG4gICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcblxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4uL3N0dWRlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ291cnNlLCBBZG1pblN0dWRlbnQsIFNjZW5hcmlvLCBTdHVkZW50UGhhZ2UsIFN0dWRlbnRGcmlkZ2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gdmlldyB0aGUgcGhhZ2Ugc3RyYWlucyBmb3IgYSBzcGVjaWZpYyBzdHVkZW50XG4gKiBhbmQgc2NlbmFyaW9cbiAqXG4gKiBBZG1pbiBpcyBhYmxlIHRvIHNlZSBlYWNoIHBoYWdlJ3MgbXV0YXRpb25zLCBkZWxldGlvbnMsIGNvbW1lbnRzLCBhbmQgcG9zc2libHkgbXV0YXRpb24gZ3Vlc3Nlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdHVkZW50LWZyaWRnZScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3N0dWRlbnQtZnJpZGdlLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIFN0dWRlbnRGcmlkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBGcmlkZ2Ugb2JqZWN0IChpZiBpdCBleGlzdHMpXG4gICAqL1xuICBwcm90ZWN0ZWQgZnJpZGdlOiBTdHVkZW50RnJpZGdlO1xuICAvKipcbiAgICogSWYgZnJpZGdlIGV4aXN0cyBkZXRlcm1pbmUgYnkgaWYgdGhpcy5mcmlkZ2UgaGFzIHN0cmFpbnNcbiAgICovXG4gIHByb3RlY3RlZCBoYXNGcmlkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEJvb2xlYW4gc3RhdGUgdmFyaWFibGUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gbXVsdGlwbGUgb2JzZXJ2YWJsZXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gZm9yIFVSTCBwYXJhbWV0ZXJzXG4gICAqL1xuICBwcml2YXRlIHBhcmFtT2JzZXJ2ZXI6IGFueTtcblxuICAvKipcbiAgICogT3B0aW9uIHRvIHNob3cgYWxsIHN0cmFpbnMgaW4gZnJpZGdlIG9yXG4gICAqIG9ubHkgc3RyYWlucyBvZiBpbnRlcmVzdCBmb3IgZ3JhZGluZyAodW5rbm93blxuICAgKiBhbmQgc3VibWl0dGVkKVxuICAgKlxuICAgKiBTaG91bGQgYmUgYFwiYWxsXCJgIG9yIGBcImdyYWRlZFwiYFxuICAgKi9cbiAgcHJpdmF0ZSB2aWV3U3RyYWluczogc3RyaW5nID0gJ2FsbCc7XG4gIC8qKlxuICAgKiBMaXN0IG9mIHBoYWdlIGN1cnJlbnRseSBiZWluZyB2aWV3ZWRcbiAgICovXG4gIHByaXZhdGUgc3RyYWluTGlzdDogU3R1ZGVudFBoYWdlW107XG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlIGZyb20gdGhlIHNlcnZlclxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIF9zdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIHZpZXdcbiAgICogMS4gR2V0IHN0dWRlbnRJZCwgc2NlbmFyaW9JZCwgYW5kIGFkbWluXG4gICAqIDIuIEdldCB0aGUgZnJpZGdlXG4gICAqIDMuIElmIHRoZSBmcmlkZ2UgZXhpc3RzXG4gICAqIDNhLiBhZGQgdGhlIFwiZ3Vlc3Nlc1wiIHRvIGVhY2ggc3RyYWluXG4gICAqIDNiLiBzb3J0IHRoZSBzdHJhaW5zIGJ5IHN0cmFpbiBudW1iZXJcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgbGV0IHN0dWRlbnRJZCA9IHBhcmFtc1snc3R1ZGVudElkJ107XG4gICAgICBsZXQgc2NlbklkID0gcGFyYW1zWydzY2VuSWQnXTtcbiAgICAgIGxldCBhZG1pbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcblxuICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0RnJpZGdlKGFkbWluLmlkLCBzdHVkZW50SWQsIHNjZW5JZClcbiAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSgoZnJpZGdlKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZnJpZGdlID0gZnJpZGdlO1xuICAgICAgICAgICAgICB0aGlzLmhhc0ZyaWRnZSA9IChmcmlkZ2Uuc3RyYWlucyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgaWYodGhpcy5oYXNGcmlkZ2Upe1xuICAgICAgICAgICAgICAgIGxldCBndWVzc2VzID0gSlNPTi5wYXJzZSh0aGlzLmZyaWRnZS5ndWVzc2VzKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHN0cmFpbiBvZiB0aGlzLmZyaWRnZS5zdHJhaW5zKXtcbiAgICAgICAgICAgICAgICAgIGxldCB4ID0gZ3Vlc3Nlc1tzdHJhaW4uc3RyYWluTnVtXTtcbiAgICAgICAgICAgICAgICAgIGlmKHgpe1xuICAgICAgICAgICAgICAgICAgICBzdHJhaW4uZ3Vlc3NlcyA9IHg7XG4gICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHN0cmFpbi5ndWVzc2VzID0gW107XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZnJpZGdlLnN0cmFpbnMuc29ydCgoYSxiKT0+e3JldHVybiBhLnN0cmFpbk51bSAtIGIuc3RyYWluTnVtfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zZXRQaGFnZSgnYWxsJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgQ1NTIGNsYXNzIGZvciB0aGUgdmlldyBzdHJhaW5zIGJ1dHRvbiBkZXBlbmRpbmcgb24gc2VsZWN0ZWQgb3B0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgLSBidXR0b24gZGV0ZXJtaW5pbmcgY2xhc3NlcyBmb3JcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gY2xhc3NlcyB3aGljaCBhcHB5IHRvIHRoaXMgYnV0dG9uIGluIHRoZSBmb3JtIHtcImNsYXNzXCI6IGJvb2xlYW4sIC4uLn1cbiAgICpcbiAgICogQGV4YW1wbGUgPGNhcHRpb24+VmlldyBzdHJhaW5zIGlzIFwiYWxsXCI8L2NhcHRpb24+XG4gICAqIGdldEJ1dHRvbkNsYXNzKCdhbGwnKSAtPiB7J2J0biBidG4tc21hbGwnOiB0cnVlLCAnYnRuLXByaW1hcnknOiB0cnVlLCAnYnRuLXByaW1hcnktb3V0bGluZSc6IGZhbHNlfVxuICAgKiBnZXRCdXR0b25DbGFzcygnZ3JhZGVkJykgLT4geydidG4gYnRuLXNtYWxsJzogdHJ1ZSwgJ2J0bi1wcmltYXJ5JzogZmFsc2UsICdidG4tcHJpbWFyeS1vdXRsaW5lJzogdHJ1ZX1cbiAgICovXG4gIGdldEJ1dHRvbkNsYXNzKHNyYzogc3RyaW5nKTogT2JqZWN0e1xuICAgIHJldHVybiB7XG4gICAgICAnYnRuIGJ0bi1zbSc6IHRydWUsXG4gICAgICAnYnRuLXByaW1hcnknOiAoc3JjID09PSB0aGlzLnZpZXdTdHJhaW5zKSxcbiAgICAgICdidG4tb3V0bGluZS1wcmltYXJ5JzogKHNyYyAhPT0gdGhpcy52aWV3U3RyYWlucylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlIHRoZSBsaXN0IG9mIHZpc2libGUgcGhhZ2UgYXBwcm9wcmlhdGVseVxuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIFwiVmlldyBTdHJhaW5cIiBidXR0b25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIGJ1dHRvbiB3aGljaCB3YXMgY2xpY2tlZDtcbiAgICogU2hvdWxkIGJlIG9uZSBvZiBgW1wiYWxsXCIsIFwiZ3JhZGVkXCJdYFxuICAgKi9cbiAgc2V0UGhhZ2Uoc3JjOiBzdHJpbmcpe1xuICAgIHRoaXMudmlld1N0cmFpbnMgPSBzcmM7XG4gICAgaWYodGhpcy52aWV3U3RyYWlucyA9PT0gJ2FsbCcpe1xuICAgICAgdGhpcy5zdHJhaW5MaXN0ID0gdGhpcy5mcmlkZ2Uuc3RyYWlucztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHJhaW5MaXN0ID0gdGhpcy5mcmlkZ2Uuc3RyYWlucy5maWx0ZXIoKHN0cmFpbik9PntcbiAgICAgICAgaWYoc3RyYWluLnBoYWdlVHlwZSA9PT0gJ3Vua25vd24nKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmKHN0cmFpbi5waGFnZVR5cGUgPT09ICd1c2VyJyAmJiBzdHJhaW4uc3VibWl0dGVkKXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3RvcnlpbmcgdGhlIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlcyBhbmRcbiAgICogb2JzZXJ2YWJsZXMgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LWZyaWRnZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSZXNvbHZlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3R1ZGVudFNlcnZpY2UgfSBmcm9tICcuL3N0dWRlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBZG1pblN0dWRlbnQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlJztcblxuLyoqXG4gKiAtIE5lZWRlZCBmb3IgYnJlYWRjcnVtYnNcbiAqIC0gUmVzb2x2ZXMgdGhlIHN0dWRlbnRJZCBpbiB0aGUgVVJMIHRvIHRoZSBzdHVkZW50IGl0IHJlcHJlc2VudHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0dWRlbnRSZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8QWRtaW5TdHVkZW50PiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7IH1cblxuICAvKipcbiAgICogQmFzZWQgb24gdGhlIFVSTCBgc3R1ZGVudElkYCBwYXJhbWV0ZXIsIGZpbmQgdGhlIHVzZXJcbiAgICogaXQgYmVsb25ncyB0b1xuICAgKlxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIC0gcm91dGUgVVJMIGF0IHRoZSBtb21lbnRcbiAgICogQHBhcmFtIHtSb3V0ZXJTdGF0ZVNuYXBzaG90fSBzdGF0ZSAtIHJvdXRlciBzdGF0ZTsgbmVlZGVkIHRvIGltcGxlbWVudCBpbnRlcmZhY2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50Pn0gVGhlIHN0dWRlbnQgdGhlIGlkIGJlbG9uZ3MgdG9cbiAgICogb3IgYW4gZW1wdHkgb2JzZXJ2YWJsZSBpZiB0aGUgaWQgZG9lc24ndCBiZWxvbmcgdG8gYW55b25lXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD4ge1xuICAgIGxldCBhZG1pbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcblxuICAgIGNvbnN0IHN0dWRlbnROdW0gPSByb3V0ZS5wYXJhbXNbJ3N0dWRlbnRJZCddO1xuXG4gICAgaWYgKHN0dWRlbnROdW0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRTdHVkZW50KGFkbWluLmlkLCBzdHVkZW50TnVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQucmVzb2x2ZXIudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdHVkZW50TGlzdENvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R1ZGVudEluZGl2Q29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYuY29tcG9uZW50JztcbmltcG9ydCB7IFN0dWRlbnRGcmlkZ2VDb21wb25lbnQgfSBmcm9tICcuL3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtZnJpZGdlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNjZW5hcmlvUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jcmlja2V0L3NjZW5hcmlvLnJlc29sdmVyJztcbmltcG9ydCB7IFN0dWRlbnRSZXNvbHZlciB9IGZyb20gJy4vc3R1ZGVudC5yZXNvbHZlcic7XG5cbmV4cG9ydCBjb25zdCBTdHVkZW50Um91dGVzOiBSb3V0ZXMgPSBbXG4gIHtwYXRoOiAnJyxcbiAgIGNoaWxkcmVuOiBbXG4gICAgIHtcbiAgICBwYXRoOiAnOnN0dWRlbnRJZCcsXG4gICAgcmVzb2x2ZToge3N0dWRlbnQ6IFN0dWRlbnRSZXNvbHZlcn0sXG4gICAgZGF0YToge2JyZWFkY3J1bWJzOiAne3sgc3R1ZGVudC5maXJzdE5hbWUgfX0ge3sgc3R1ZGVudC5sYXN0TmFtZSB9fSd9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgcGF0aDogJzpzY2VuSWQnLFxuICAgIGNvbXBvbmVudDogU3R1ZGVudEZyaWRnZUNvbXBvbmVudCxcbiAgICAgICAgcmVzb2x2ZToge3NjZW5hcmlvOiBTY2VuYXJpb1Jlc29sdmVyfSxcbiAgICAgICAgZGF0YToge2JyZWFkY3J1bWJzOiAne3sgc2NlbmFyaW8ubGFiZWwgfX0nfVxuICB9LFxuICAgICAge3BhdGg6ICcnLFxuICAgICAgIGNvbXBvbmVudDogU3R1ZGVudEluZGl2Q29tcG9uZW50XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBTdHVkZW50TGlzdENvbXBvbmVudFxuICB9XG4gICBdXG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qKlxuICogTGlzdCBvZiB1c2VyIHJvbGVzIHdpdGggdGhlaXIgbnVtZXJpYyB2YWx1ZSAoYHZhbHVlYCksIHN0cmluZyB2YWx1ZVxuICogdXNlZCBieSBNb25nb0RCIChga2V5YCksIGFuZCBzdHJpbmcgZGlzcGxheWVkIG9uIHdlYnBhZ2UgKGBsYWJlbGApXG4gKi9cbmV4cG9ydCBjb25zdCBTdHVkZW50Um9sZXNBcnJheTogYW55ID0gW1xuICB7XG4gICAga2V5OiAnc3R1ZGVudCcsXG4gICAgbGFiZWw6ICdTdHVkZW50JyxcbiAgICB2YWx1ZTogMFxuICB9LCB7XG4gICAga2V5OiAnaW5zdHInLFxuICAgIGxhYmVsOiAnSW5zdHJ1Y3RvcicsXG4gICAgdmFsdWU6IDFcbiAgfSwge1xuICAgIGtleTogJ2FkbWluJyxcbiAgICBsYWJlbDogJ0FkbWluaXN0cmF0b3InLFxuICAgIHZhbHVlOiAyXG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQucm9sZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1pbmRpdi9zdHVkZW50LWluZGl2LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LWZyaWRnZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1mcmlkZ2UudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHVkZW50UGhhZ2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3BoYWdlLmludGVyZmFjZSc7XG5cbi8qKlxuICogU21hbGwgY29tcG9uZW50IHdoaWNoIGVuY29tcGFzc2VzIGEgc2luZ2xlIHBoYWdlIHN0cmFpbiBiZWluZyB2aWV3ZWRcbiAqIHdpdGhpbiBhIHN0dWRlbnQncyBmcmlkZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3R1ZGVudC1waGFnZScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3N0dWRlbnQtcGhhZ2UudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgU3R1ZGVudFBoYWdlQ29tcG9uZW50e1xuXG4gIC8qKlxuICAgKiBUaGUgcGhhZ2Ugd2hpY2ggdGhlIGNvbXBvbmVudCBpcyBjcmVhdGVkIGZvclxuICAgKi9cbiAgQElucHV0KCkgcGhhZ2U6IFN0dWRlbnRQaGFnZTtcblxuICBjb25zdHJ1Y3Rvcigpe31cblxuICAvKipcbiAgICogUHJvZHVjZXMgZm9ybWF0dGVkIHN0cmluZyBiYXNlZCBvbiBwaGFnZSB0eXBlIGFuZCBpZiBwaGFnZSBpc1xuICAgKiBzdWJtaXR0ZWQgdG8gYmUgZ3JhZGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGZvcm1hdHRlZCBzdHJpbmdcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogcmVmZXJlbmNlIHBoYWdlIC0+IFwiUkVGRVJFTkNFXCJcbiAgICogc2NlbmFyaW8gdW5rbm93biBwaGFnZSAtPiBcIlVOS09XTlwiXG4gICAqIHVzZXIgcGhhZ2UsIG5vdCBzdW1pdHRlZCAtPiBcIlVTRVJcIlxuICAgKiBzdWJtaXR0ZWQgcGhhZ2UgLT4gXCJTVUJNSVNTSU9OXCJcbiAgICovXG4gIGZvcm1hdFBoYWdlVHlwZSgpOiBzdHJpbmd7XG4gICAgaWYodGhpcy5waGFnZSl7XG4gICAgICBsZXQgdCA9IHRoaXMucGhhZ2UucGhhZ2VUeXBlO1xuICAgICAgaWYodGhpcy5waGFnZS5waGFnZVR5cGUgPT09ICd1c2VyJyAmJiB0aGlzLnBoYWdlLnN1Ym1pdHRlZCl7XG4gICAgICAgIHJldHVybiAnU1VCTUlTU0lPTidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBoYWdlLnBoYWdlVHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtcGhhZ2UuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtcGhhZ2UudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtcGhhZ2UudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ3JpY2tldEdsb2JhbHMgfSBmcm9tICcuLi9jcmlja2V0L2NyaWNrZXQuZ2xvYmFscyc7XG5cbi8qKlxuICogRm9ybWF0IHRoZSB0ZXh0dWFsIHByZXNlbnRhdGlvbiBvZiB0aGUgZGVsZXRpb24gZ3Vlc3NzZXMgZm9yXG4gKiBhIHVzZXIncyBwaGFnZSBzdHJhaW47IHVzZXMgYSBbc2NlbmFyaW8gZ2xvYmFsXXtAbGlua1xuICogQ3JpY2tldEdsb2JhbHN9IHZhcmlhYmxlIGBkZWxldGlvbkd1ZXNzTGVuZ3RoYCB0byBkZXRlcm1pbmVcbiAqIHRoZSByYW5nZXNcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBndWVzc0xpc3QgfCBwaGFnZUd1ZXNzZXMgfX1gXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+T25lIGRlbGV0aW9uIGd1ZXNzOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+W2ZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgLi4uXTwvY29kZT4gYmVjb21lcyBcIjEwLTQwXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk5vIGRlbGV0aW9uIGd1ZXNzZXM6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5bZmFsc2UsIC4uLiwgZmFsc2VdPC9jb2RlPiBiZWNvbWVzIFwiTm9uZVwiXG4gKi9cblxuQFBpcGUoe25hbWU6ICdwaGFnZUd1ZXNzZXMnfSlcbmV4cG9ydCBjbGFzcyBQaGFnZUd1ZXNzZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGd1ZXNzZXM6IGJvb2xlYW5bXSk6IHN0cmluZyB7XG4gICAgbGV0IHN0ZXBTaXplID0gQ3JpY2tldEdsb2JhbHMuZGVsZXRpb25HdWVzc0xlbmd0aDtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgbGV0IHg9LTE7XG4gICAgZm9yKGxldCBpIGluIGd1ZXNzZXMpe1xuICAgICAgbGV0IHk6IG51bWJlciA9ICtpO1xuICAgICAgLy8gc3RhcnQgbmV3IGRlbGV0aW9uXG4gICAgICBpZih4IDwgMCAmJiBndWVzc2VzW3ldKXtcbiAgICAgICAgeCA9IHN0ZXBTaXplICogeTtcbiAgICAgIH0gLy8gZW5kIGEgZGVsZXRpb25cbiAgICAgIGVsc2UgaWYoeCA+PSAwICYmIGd1ZXNzZXNbeV0gPT09IGZhbHNlKXtcbiAgICAgICAgbGV0IHogPSAoc3RlcFNpemUgKiB5KTtcbiAgICAgICAgb3V0ICs9IChvdXQgPT09ICcnID8gJycgOiAnLCAnKTtcbiAgICAgICAgb3V0ICs9IHggKyAnIC0gJyArIHo7XG4gICAgICAgIHggPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2hlY2sgZm9yIHRoZSBsYXN0IHBvc3NpYmxlIGRlbGV0aW9uXG4gICAgaWYoeCAhPSAtMSl7XG4gICAgICBvdXQgKz0gKG91dCA9PT0gJycgPyAnJyA6ICcsICcpO1xuICAgICAgb3V0ICs9IHggKyAnIC0gJyArIENyaWNrZXRHbG9iYWxzLmdlbmVMZW5ndGg7XG4gICAgfVxuICAgIGlmKG91dCA9PT0gJycpe1xuICAgICAgcmV0dXJuICdOb25lJztcbiAgICB9IGVsc2Uge1xuICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9waGFnZS1ndWVzc2VzLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IHRoZSB0ZXh0dWFsIHByZXNlbnRhdGlvbiBvZiBhIHBoYWdlIHN0cmFpbidzIGZyYW1lc2hpZnQgbXV0YXRpb25zIChpZiBhbnkpXG4gKlxuICogKipVc2FnZToqKiBge3sgbXV0YXRpb25MaXN0IHwgcGhhZ2VNdXRhdGlvbnMgfX1gXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+T25lIG5lZ2F0aXZlIGZyYW1lc2hpZnQgbXV0YXRpb246ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5bLTg3XTwvY29kZT4gYmVjb21lcyBcIi0xIGF0IDg3XCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk9uZSBwb3NpdGl2ZSBmcmFtZXNoaWZ0IG11dGF0aW9uOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+WzE2M108L2NvZGU+IGJlY29tZXMgXCIrMSBhdCAxNjNcIlxuICogQGV4YW1wbGUgPGNhcHRpb24+TXVsdGlwbGUgZnJhbWVzaGlmdCBtdXRhdGlvbnM6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5bMzIsIC0yMDhdPC9jb2RlPiBiZWNvbWVzIFwiKzEgYXQgMzIsIC0xIGF0IDIwOFwiXG4gKi9cbkBQaXBlKHtuYW1lOiAncGhhZ2VNdXRhdGlvbnMnfSlcbmV4cG9ydCBjbGFzcyBQaGFnZU11dGF0aW9uc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0obXV0YXRpb25zOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgbGV0IG91dCA9ICcnO1xuICAgIGZvcihsZXQgeCBvZiBtdXRhdGlvbnMpe1xuICAgICAgb3V0ICs9IChvdXQgPT09ICcnID8gJycgOiAnLCAnKTtcbiAgICAgIGxldCB5ID0gKHggPiAwID8gJysxJyA6ICctMScpO1xuICAgICAgbGV0IHogPSBNYXRoLmFicyh4KTtcbiAgICAgIG91dCArPSB5ICsgJyBhdCAnICsgejtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcGlwZXMvcGhhZ2UtbXV0YXRpb25zLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IHRoZSB0ZXh0dWFsIHByZXNlbnRhdGlvbiBvZiBhIHBoYWdlIHN0cmFpbidzIGRlbGV0aW9ucyAoaWYgYW55KVxuICpcbiAqICoqVXNhZ2U6KiogYHt7IGRlbGV0aW9ubGlzdCB8IHBoYWdlRGVsZXRpb25zIH19YFxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk9uZSBkZWxldGlvbjogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPls1MCwxNDVdPC9jb2RlPiBiZWNvbWVzIFwiNTAgLSAxNDVcIlxuICogQGV4YW1wbGUgPGNhcHRpb24+TXVsdGlwbGUgZGVsZXRpb25zOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+WzUwLCAxNDAsIDE5MCwgMjYwXTwvY29kZT4gYmVjb21lcyBcIjUwIC0gMTQwLCAxOTAgLSAyNjBcIlxuICovXG5AUGlwZSh7bmFtZTogJ3BoYWdlRGVsZXRpb25zJ30pXG5leHBvcnQgY2xhc3MgUGhhZ2VEZWxldGlvbnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGRlbGV0aW9uOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgbGV0IG91dCA9ICcnO1xuICAgIGxldCBtTGVuZ3RoID0gKGRlbGV0aW9uLmxlbmd0aCAlIDIgPT09IDAgPyBkZWxldGlvbi5sZW5ndGggOiBkZWxldGlvbi5sZW5ndGggLTEpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1MZW5ndGg7IGkrPSAyKXtcbiAgICAgIG91dCArPSAoaSA+IDEgPyAnLCAnIDogJycpO1xuICAgICAgb3V0ICs9IGRlbGV0aW9uW2ldICsgJyAtICcgKyBkZWxldGlvbltpKzFdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BpcGVzL3BoYWdlLWRlbGV0aW9ucy5waXBlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==