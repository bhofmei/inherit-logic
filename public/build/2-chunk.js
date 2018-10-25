webpackJsonp([2],{

/***/ 898:
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
const shared_module_1 = __webpack_require__(64);
const student_routes_1 = __webpack_require__(930);
const student_list_component_1 = __webpack_require__(909);
const student_indiv_component_1 = __webpack_require__(910);
const student_fridge_component_1 = __webpack_require__(911);
const student_phage_component_1 = __webpack_require__(935);
const confirm_delete_dialog_component_1 = __webpack_require__(412);
const student_resolver_1 = __webpack_require__(912);
const phage_guesses_pipe_1 = __webpack_require__(937);
const phage_mutations_pipe_1 = __webpack_require__(938);
const phage_deletions_pipe_1 = __webpack_require__(939);
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

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioGlobals = {
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

/***/ 901:
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

/***/ 909:
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
const rxjs_1 = __webpack_require__(51);
const student_service_1 = __webpack_require__(411);
const authentication_service_1 = __webpack_require__(25);
const read_error_1 = __webpack_require__(63);
const student_interface_1 = __webpack_require__(901);
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
        templateUrl: __webpack_require__(931)
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        authentication_service_1.AuthenticationService])
], StudentListComponent);
exports.StudentListComponent = StudentListComponent;


/***/ }),

/***/ 910:
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
const rxjs_1 = __webpack_require__(51);
const authentication_service_1 = __webpack_require__(25);
const student_service_1 = __webpack_require__(411);
const scenario_service_1 = __webpack_require__(118);
const student_roles_1 = __webpack_require__(932);
const confirm_delete_dialog_component_1 = __webpack_require__(412);
const read_error_1 = __webpack_require__(63);
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
        templateUrl: __webpack_require__(933)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        student_service_1.StudentService,
        scenario_service_1.ScenarioService,
        ng_bootstrap_1.NgbModal])
], StudentIndivComponent);
exports.StudentIndivComponent = StudentIndivComponent;


/***/ }),

/***/ 911:
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
const rxjs_1 = __webpack_require__(51);
const student_service_1 = __webpack_require__(411);
const authentication_service_1 = __webpack_require__(25);
const read_error_1 = __webpack_require__(63);
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
        templateUrl: __webpack_require__(934)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        student_service_1.StudentService,
        authentication_service_1.AuthenticationService])
], StudentFridgeComponent);
exports.StudentFridgeComponent = StudentFridgeComponent;


/***/ }),

/***/ 912:
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
const rxjs_1 = __webpack_require__(51);
const authentication_service_1 = __webpack_require__(25);
const student_service_1 = __webpack_require__(411);
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

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const student_list_component_1 = __webpack_require__(909);
const student_indiv_component_1 = __webpack_require__(910);
const student_fridge_component_1 = __webpack_require__(911);
const scenario_resolver_1 = __webpack_require__(183);
const student_resolver_1 = __webpack_require__(912);
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

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-list/student-list.template.html";

/***/ }),

/***/ 932:
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

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-indiv/student-indiv.template.html";

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-fridge/student-fridge.template.html";

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
        templateUrl: __webpack_require__(936)
    }),
    __metadata("design:paramtypes", [])
], StudentPhageComponent);
exports.StudentPhageComponent = StudentPhageComponent;


/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-fridge/student-phage.template.html";

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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const scenario_globals_1 = __webpack_require__(900);
let PhageGuessesPipe = class PhageGuessesPipe {
    transform(guesses) {
        let stepSize = scenario_globals_1.ScenarioGlobals.deletionGuessLength;
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
            out += x + ' - ' + scenario_globals_1.ScenarioGlobals.geneLength;
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

/***/ 938:
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

/***/ 939:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5nbG9iYWxzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtaW5kaXYvc3R1ZGVudC1pbmRpdi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtZnJpZGdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5yZXNvbHZlci50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5yb2xlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1pbmRpdi9zdHVkZW50LWluZGl2LnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtZnJpZGdlLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtcGhhZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LXBoYWdlLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9waGFnZS1ndWVzc2VzLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9waGFnZS1tdXRhdGlvbnMucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BpcGVzL3BoYWdlLWRlbGV0aW9ucy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHlDQUErQztBQUMvQyxnREFBMEQ7QUFFMUQsa0RBQWlEO0FBRWpELDBEQUE2RTtBQUM3RSwyREFBZ0Y7QUFDaEYsNERBQW1GO0FBQ25GLDJEQUFpRjtBQUNqRixtRUFBNEY7QUFFNUYsb0RBQXFEO0FBQ3JELHNEQUFrRTtBQUNsRSx3REFBc0U7QUFDdEUsd0RBQXNFO0FBMkJ0RSxJQUFhLGFBQWEsR0FBMUI7Q0FBNkI7QUFBaEIsYUFBYTtJQXJCekIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsNEJBQVk7WUFDWixxQkFBWSxDQUFDLFFBQVEsQ0FBQyw4QkFBYSxDQUFDO1NBQ3JDO1FBQ0QsWUFBWSxFQUFFO1lBQ1osNkNBQW9CO1lBQ3BCLCtDQUFxQjtZQUNyQixpREFBc0I7WUFDdEIsK0NBQXFCO1lBQ3JCLHFDQUFnQjtZQUNoQix5Q0FBa0I7WUFDbEIseUNBQWtCO1NBQ25CO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsOERBQTRCO1NBQzdCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsa0NBQWU7U0FDaEI7S0FDRixDQUFDO0dBQ1csYUFBYSxDQUFHO0FBQWhCLHNDQUFhOzs7Ozs7Ozs7OztBQ3BDYix1QkFBZSxHQUFHO0lBSTdCLFFBQVEsRUFBQyxPQUFPO0lBSWhCLGFBQWEsRUFBRSxJ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QUFrQjtJQUQ5QixXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztHQUNsQixrQkFBa0IsQ0FZOUI7QUFaWSxnREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZi9CLHNDQUFvRDtBQWFwRCxJQUFhLGtCQUFrQixHQUEvQjtJQUVFLFNBQVMsQ0FBQyxRQUFrQjtRQUMxQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUM7UUFFakYsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsSUFBRyxDQUFDLEVBQUMsQ0FBQztZQUNqQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMzQixHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBYlksa0JBQWtCO0lBRDlCLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQyxDQUFDO0dBQ2xCLGtCQUFrQixDQWE5QjtBQWJZLGdEQUFrQiIsImZpbGUiOiIyLWNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IFN0dWRlbnRSb3V0ZXMgfSBmcm9tICcuL3N0dWRlbnQucm91dGVzJztcblxuaW1wb3J0IHsgU3R1ZGVudExpc3RDb21wb25lbnQgfSBmcm9tICcuL3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFN0dWRlbnRJbmRpdkNvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1pbmRpdi9zdHVkZW50LWluZGl2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHVkZW50RnJpZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LWZyaWRnZS9zdHVkZW50LWZyaWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R1ZGVudFBoYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LWZyaWRnZS9zdHVkZW50LXBoYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHVkZW50UmVzb2x2ZXIgfSBmcm9tICcuL3N0dWRlbnQucmVzb2x2ZXInO1xuaW1wb3J0IHsgUGhhZ2VHdWVzc2VzUGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL3BoYWdlLWd1ZXNzZXMucGlwZSc7XG5pbXBvcnQgeyBQaGFnZU11dGF0aW9uc1BpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9waGFnZS1tdXRhdGlvbnMucGlwZSc7XG5pbXBvcnQgeyBQaGFnZURlbGV0aW9uc1BpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9waGFnZS1kZWxldGlvbnMucGlwZSc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBhZG1pbi1yZWd1bGF0ZWQgc3R1ZGVudCB0aGluZ3MgbGlrZSBzZXR0aW5nIHRoZVxuICogcm9sZSwgdmlld2luZyBmcmlkZ2VzIGZvciBncmFkaW5nLCBhbmQgbGlzdGluZyBhbGwgc3R1ZGVudHNcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoU3R1ZGVudFJvdXRlcylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU3R1ZGVudExpc3RDb21wb25lbnQsXG4gICAgU3R1ZGVudEluZGl2Q29tcG9uZW50LFxuICAgIFN0dWRlbnRGcmlkZ2VDb21wb25lbnQsXG4gICAgU3R1ZGVudFBoYWdlQ29tcG9uZW50LFxuICAgIFBoYWdlR3Vlc3Nlc1BpcGUsXG4gICAgUGhhZ2VNdXRhdGlvbnNQaXBlLFxuICAgIFBoYWdlRGVsZXRpb25zUGlwZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFN0dWRlbnRSZXNvbHZlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFN0dWRlbnRNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5tb2R1bGUudHMiLCIvKipcbiAqIFNjZW5hcmlvL2V4cGVyaWVtZW50LXJlbGF0ZWQgdmFsdWVzIHVzZWQgdG9cbiAqIDEuIFNlbmQgdGhlIGNvcnJlY3QgcGFyYW1ldGVycyB0byBiYWNrZW5kIGNhbGxzXG4gKiAyLiBNYXRjaCBzb21lIGJhY2tlbmQgcGFyYW1ldGVyc1xuICogMy4gSGF2ZSBjb25zaXN0ZW50IGRlZmF1bHRzXG4gKi9cbmV4cG9ydCBjb25zdCBTY2VuYXJpb0dsb2JhbHMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygc3RhcnRpbmcgcGhhZ2Ugd2hlbiB0YWtlbiBmcm9tIGZyaWRnZVxuICAgKi9cbiAgbnVtUGhhZ2U6MTAwMDAwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBsYWIgcm9vbSBwbGF0ZVxuICAgKi9cbiAgcGxhdGVDYXBhY2l0eTogMTUwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBlYWNoIHBsZXhlciByb29tIHBsYXRlXG4gICAqL1xuICBwbGV4ZXJDYXBhY2l0eTogMjAwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHNoZWx2ZXMgaW4gdGhlIGZyaWRnZVxuICAgKi9cbiAgbkZyaWRnZVNoZWxmOiAzMixcbiAgLyoqXG4gICAqIE51bWJlciBvZiBzcG90cyBvbiBlYWNoIHNoZWxmIG9mIHRoZSBmcmlkZ2VcbiAgICovXG4gIG5GcmlkZ2VTcG90czogMTYsXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRpbHV0aW9uIHZhbHVlIGZvciBsYWIgcm9vbTsgY2FuIGJlIGNoYW5nZWQgYnkgdXNlclxuICAgKi9cbiAgZGVmYXVsdExhYkRpbHV0aW9uOiAxMCxcbiAgLyoqXG4gICAqIERlZmF1bHQgZGlsdXRpb24gdmFsdWUgZm9yIHBsZXhlciByb29tOyBjYW4gYmUgY2hhbmdlZCBieSB1c2VyXG4gICAqL1xuICBkZWZhdWx0UGxleGVyRGlsdXRpb246IDUsXG4gIC8qKlxuICAgKiBMZW5ndGggb2YgdGhlIGdlbmUgaW4gbnVtYmVyIG9mIGJhc2VwYWlyc1xuICAgKi9cbiAgZ2VuZUxlbmd0aDogMzUwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIGJhc2VwYWlycyBwZXIgXCJibG9ja1wiIHdoZW4gZ3Vlc3NpbmcgZGVsZXRpb24gbG9jYXRpb25cbiAgICovXG4gIGRlbGV0aW9uR3Vlc3NMZW5ndGg6IDEwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5nbG9iYWxzLnRzIiwiaW1wb3J0IHsgQ291cnNlIH0gZnJvbSAnLi9jb3Vyc2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IF9Vc2VyIH0gZnJvbSAnLi91c2VyLmludGVyZmFjZSc7XG4vLyAgZmlyc3ROYW1lOiBzdHJpbmc7XG4vLyAgbGFzdE5hbWU6IHN0cmluZztcbi8vICB1c2VySWQ6IG51bWJlcjtcblxuLyoqXG4gKiBJbmZvcm1hdGlvbiBuZWVkZWQgYXMgYSB1c2VyIHVzaW5nIHRoZSBhcHAgaW4gc2NlbmFyaW9zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3R1ZGVudCBleHRlbmRzIF9Vc2VyIHtcbiAgZW1haWw/OiBzdHJpbmc7XG4gIGFjY2Vzc0dyYW50ZWQ/OiBhbnk7XG4gIHN0YXR1cz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBuZWVkZWQgZm9yIGFkbWluIHBhZ2VzIGFib3V0IGEgdXNlci9zdHVkZW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWRtaW5TdHVkZW50IGV4dGVuZHMgU3R1ZGVudCB7XG4gIGNvdXJzZTogQ291cnNlO1xuICByb2xlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gc29ydCBzdHVkZW50cyBhbHBoYWJldGljYWxseSBieSBsYXN0IG5hbWU7XG4gKiBVc2VzIGZpcnN0IG5hbWUgZm9yIHRpZXNcbiAqXG4gKiBNYWtlcyB0aGUgbmFtZSBsb3dlcmNhc2UgYmVmb3JlIHNvcnRpbmcgdG8gZW5zdXJlIHNvcnQgaXNcbiAqIGNhc2UgaW5zZW5zaXRpdmVcbiAqL1xuZXhwb3J0IGNvbnN0IHNvcnRTdHVkZW50cyA9IGZ1bmN0aW9uKGEsYil7XG4gICAgdmFyIGNvbXBhcmlzb24gPSBhLmxhc3ROYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLmxhc3ROYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmIChjb21wYXJpc29uID09PSAwKSB7XG4gICAgICByZXR1cm4gYS5maXJzdE5hbWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIuZmlyc3ROYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gY29tcGFyaXNvbjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2ludGVyZmFjZXMvc3R1ZGVudC5pbnRlcmZhY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc3R1ZGVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuaW1wb3J0IHsgQWRtaW5TdHVkZW50LCBzb3J0U3R1ZGVudHMgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlJztcblxuLyoqXG4gKiAtIENvbXBvbmVudCB3aGljaCBsaXN0cyBzdHVkZW50cyBkZXBlbmRlbnQgb24gdGhlIHJvbGUgb2YgbG9nZ2VkIGluIHVzZXI7XG4gICogLSBpZiBgXCJhZG1pblwiYCwgYWxsIHVzZXJzIGluIHRoZSBzeXN0ZW1cbiAgKiAtIGlmIGBcImluc3RyXCJgLCBhbGwgdXNlcnMgaW4gY291cnNlcyBpbnN0ciB0ZWFjaGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3R1ZGVudC1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zdHVkZW50LWxpc3QudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFN0dWRlbnRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogTGlzdCBvZiBzdHVkZW50c1xuICAgKi9cbiAgICBwcml2YXRlIHN0dWRlbnRzOiBBZG1pblN0dWRlbnRbXTtcbiAgLyoqXG4gICAqIEJvb2xlYW4gc3RhdGUgdmFyaWFibGUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gbXVsdGlwbGUgb2JzZXJ2YWJsZXMgZWFzaWVyXG4gICAqL1xuICAgIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogRXJyb3IgbWVzc2FnZSBmcm9tIHNlcnZlclxuICAgKi9cbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIHZpZXdcbiAgICogMS4gZ2V0IGxvZ2dlZCBpbiB1c2VyIGlkXG4gICAqIDIuIGdldCB0aGUgbGlzdCBvZiBzdHVkZW50c1xuICAgKiAzLiBvcmRlciB0aGUgbGlzdCBvZiBzdHVkZW50c1xuICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgbGV0IGFkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5saXN0U3R1ZGVudHMoYWRtaW4uaWQpXG4gICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoc3R1ZGVudHMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzID0gc3R1ZGVudHMuc29ydChzb3J0U3R1ZGVudHMpO1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IHRoZSBjb21wb25lbnQgYnkgdW5zdWJzY3JpYmluZyBmcm9tIGFsbCBvYnNlcnZhYmxlc1xuICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uICwgIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc3R1ZGVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NjZW5hcmlvL3NjZW5hcmlvLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3R1ZGVudFJvbGVzQXJyYXkgfSBmcm9tICcuLi9zdHVkZW50LnJvbGVzJztcbmltcG9ydCB7IENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvY291cnNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBZG1pblN0dWRlbnQgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zY2VuYXJpby5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gdmlldyBpbmZvcm1hdGlvbiBmb3IgYSBzaW5nbGUgc3R1ZGVudFxuICogVGhpcyBpbmNsdWRlcyBlbWFpbC9uYW1lL3JvbGUgaW5mb3JtYXRpb24gYW5kIGFjY2VzcyBzdGF0dXNcbiAqIGZvciBhbGwgc2NlbmFyaW9zXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3R1ZGVudC1pbmRpdicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc3R1ZGVudC1pbmRpdi50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdHVkZW50SW5kaXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIFN0dWRlbnQgd2UgYXJlIHZpZXdpbmdcbiAgICovXG4gICAgcHJvdGVjdGVkIHN0dWRlbnQ6IEFkbWluU3R1ZGVudDtcbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIHNjZW5hcmlvc1xuICAgKi9cbiAgICBwcml2YXRlIHNjZW5hcmlvczogU2NlbmFyaW9bXTtcbiAgLyoqXG4gICAqIEJvb2xlYW4gc3RhdGUgdmFyaWFibGUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gbXVsdGlwbGVcbiAgICogb2JzZXJ2YWJsZXMgZWFzaWVyXG4gICAqL1xuICAgIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIGZvciBVUkwgcGFyYW1ldGVyc1xuICAgKi9cbiAgICBwcml2YXRlIHBhcmFtT2JzZXJ2ZXI6IGFueTtcbiAgLyoqXG4gICAqIExvZ2dlZCBpbiB1c2VyIHdobyBtdXN0IGJlIGFuIGFkbWluIG9yIGluc3RydWN0b3JcbiAgICovXG4gICAgcHJpdmF0ZSBfYWRtaW46IFVzZXI7XG4gIC8qKlxuICAgKiBMaXN0IG9mIHBvc3NpYmxlIHJvbGVzXG4gICAqL1xuICAgIHByaXZhdGUgcm9sZXMgPSBTdHVkZW50Um9sZXNBcnJheTtcbiAgLyoqXG4gICAqIE5ldyByb2xlIHRvIGNoYW5nZSB0byBpZiBhbGxvd2VkXG4gICAqL1xuICAgIHByaXZhdGUgbmV3Um9sZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9zdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE5nYk1vZGFsKSB7XG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29tcG9uZW50XG4gICAqIDEuIEdldCBsb2dnZWQgaW4gdXNlclxuICAgKiAyLiBHZXQgaWQgb2Ygc3R1ZGVudCBvZiBpbnRlcmVzdCBmcm9tIFVSTFxuICAgKiAzLiBHZXQgdGhlIHN0dWRlbnQncyBpbmZvXG4gICAqIDQuIEdldCBsaXN0IG9mIGFsbCBzY2VuYXJpb3NcbiAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2FkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICBsZXQgc3R1ZGVudElkID0gcGFyYW1zWydzdHVkZW50SWQnXTtcbiAgICAgICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldFN0dWRlbnQodGhpcy5fYWRtaW4uaWQsIHN0dWRlbnRJZClcbiAgICAgICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50ID0gaW5mbztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdSb2xlID0gdGhpcy5zdHVkZW50LnJvbGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5saXN0U2NlbmFyaW9zKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChzY2VucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmFyaW9zID0gc2NlbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogUmV0dXJuIGZvcm1hdHRlZCBzdHJpbmcgYmFzZWQgb24gaWYgYWNjZXNzIGdyYW50ZWQgZm9yIHNjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuQ29kZSAtIHNjZW5hcmlvIHRvIGxvb2sgdXBcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gYFwiQWNjZXNzIGdyYW50ZWRcImAsIGBcIkFjY2VzcyBub3QgZ3JhbnRlZFwiYCwgb3IgYFwiTkFcImBcbiAgICovXG4gICAgZ2V0U2NlblN0YXR1cyhzY2VuQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGlzR3JhbnRlZCA9IHRoaXMuc3R1ZGVudC5hY2Nlc3NHcmFudGVkW3NjZW5Db2RlXTtcbiAgICAgICAgaWYgKGlzR3JhbnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICdBY2Nlc3MgZ3JhbnRlZCdcbiAgICAgICAgfSBlbHNlIGlmIChpc0dyYW50ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0FjY2VzcyBub3QgZ3JhbnRlZCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnTkEnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgLyoqXG4gICAqIC0gR2V0IGEgZm9ybWF0dGVkIEhUTUwgc3RyaW5nIGJhc2VkIG9uIHRoZSBzdHVkZW50XG4gICAqIC0gSWYgc3R1ZGVudCBoYXMgYSBjb3Vyc2UsIHJldHVybnMgbGluayB0byB0aGUgY291cnNlIHBhZ2VcbiAgICogLSBJZiBzdHVkZW50IGRvZXNuJ3QgaGF2ZSBhIGNvdXJzZSwgcmV0dXJucyAnTm8gY291cnNlJ1xuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBmb3JtYXR0ZWQgSFRNTFxuICAgKi9cbiAgICBnZXRTdHVkZW50Q291cnNlKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBzOiBBZG1pblN0dWRlbnQgPSB0aGlzLnN0dWRlbnQ7XG4gICAgICAgIGlmIChzLmNvdXJzZSkge1xuICAgICAgICAgICAgcmV0dXJuICc8YSBbcm91dGxlckxpbmtdPVwiW1xcJy9hZG1pbi9jb3Vyc2VzL1xcJywgXCInICsgcy5jb3Vyc2UuY291cnNlTnVtICsgJ11cIj5zLmNvdXJzZS5jb3Vyc2VOdW08L2E+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnTm8gY291cnNlJztcbiAgICAgICAgfVxuICAgIH1cblxuICAvKipcbiAgICogR3JhbnQgYWNjZXNzIGZvciBhIHNwZWNpZmljIHNjZW5hcmlvIGJ5IGNhbGxpbmcgc3R1ZGVudCBzZXJ2aWNlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2Ygb25lIG9mIHRoZSBzY2VuYXJpbyBidXR0b25zXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuQ29kZSBzY2VuYXJpbyB0byBncmFudCBhY2Nlc3MgZm9yXG4gICAqL1xuICAgIGdyYW50QWNjZXNzKHNjZW5Db2RlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ3JhbnRTY2VuQWNjZXNzKHRoaXMuX2FkbWluLmlkLCB0aGlzLnN0dWRlbnQudXNlcklkLCBzY2VuQ29kZSwgdHJ1ZSlcbiAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQgJiYgcmVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnQgPSByZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYSByb2xlIHRvZ2dsZSBidXR0b24gc2hvdWxkIGJlIGRpc2FibGVkXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgLSBuYW1lIG9mIGJ1dHRvbi9yb2xlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBkaXNhYmxlIGZvciByb2xlcyBncmVhdGVyIHRoYW4gY3VycmVudCB1c2VyXG4gICAqIGFuZCBpZiB2aWV3aW5nIHBhZ2Ugb2YgY3VycmVudCB1c2VyXG4gICAqL1xuICAgIHJvbGVEaXNhYmxlZChzcmM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5fYWRtaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdHVkZW50LnVzZXJJZCA9PT0gdGhpcy5fYWRtaW4uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNyYyA9PT0gJ2FkbWluJyAmJiB0aGlzLl9hZG1pbi5yb2xlIDwgMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc3JjID09PSAnaW5zdHInICYmIHRoaXMuX2FkbWluLnJvbGUgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIENTUyBjbGFzc2VzIGZvciBlYWNoIHJvbGUgYnV0dG9uIGJhc2VkIG9uIHRoZVxuICAgKiBzdHVkZW50J3MgY3VycmVudCByb2xlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgLSBuYW1lIG9mIGJ1dHRvbi9yb2xlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHBvc3NpYmxlIGNsYXNzZXMgd2l0aCB0cnVlL2ZhbHNlIGFzIGFwcGxpY2FibGVcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogQ3VycmVudCBzdHVkZW50IGhhcyByb2xlIFwic3R1ZGVudFwiXG4gICAqIHJvbGVCdXR0b25DbGFzcygnc3R1ZGVudCcpIC0+IHsnYnRuIGJ0bi1zbWFsbCc6IHRydWUsICdidGgtc2Vjb25kYXJ5JzogdHJ1ZSwgJ2J0bi1zZWNvbmRhcnktb3V0bGluZSc6IGZhbHNlfVxuICAgKiByb2xlQnV0dG9uQ2xhc3MoJ2FkbWluJykgLT4geydidG4gYnRuLXNtYWxsJzogdHJ1ZSwgJ2J0aC1zZWNvbmRhcnknOiBmYWxzZSwgJ2J0bi1zZWNvbmRhcnktb3V0bGluZSc6IHRydWV9XG4gICAqL1xuICAgIHJvbGVCdXR0b25DbGFzcyhzcmM6IHN0cmluZyk6IE9iamVjdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnYnRuIGJ0bi1zbSc6IHRydWUsXG4gICAgICAgICAgICAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5Jzogc3JjICE9PSB0aGlzLnN0dWRlbnQucm9sZSxcbiAgICAgICAgICAgICdidG4tc2Vjb25kYXJ5Jzogc3JjID09PSB0aGlzLnN0dWRlbnQucm9sZVxuICAgICAgICB9XG4gICAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGNsaWNraW5nIGEgcm9sZSBidXR0b24sIHVwZGF0ZSB0aGUgc3R1ZGVudCByb2xlXG4gICAqIGJ5IGNhbGxpbmcgc3R1ZGVudCBzZXJ2aWNlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2Ygb25lIG9mIHRoZSByb2xlIGJ1dHRvbnNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIHJvbGUgb2YgYnV0dG9uIHB1c2hlZFxuICAgKi9cbiAgICBjbGlja0J1dHRvbihzcmM6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5zZXRTdHVkZW50Um9sZSh0aGlzLl9hZG1pbi5pZCwgdGhpcy5zdHVkZW50LnVzZXJJZCwgc3JjKVxuICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudCA9IHJlcztcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGRlbGV0ZSBidXR0b24gc2hvdWxkIGJlIGRpc2FibGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIGB0cnVlYCBpZiB2aWV3aW5nIHBhZ2Ugb2YgbG9nZ2VkIGluIHVzZXIgb3IgaWYgc3R1ZGVudCBpcyBhbiBhZG1pblxuICAgKiBgZmFsc2VgIG90aGVyd2lzZVxuICAgKi9cbiAgZGVsZXRlRGlzYWJsZWQoKXtcbiAgICBpZih0aGlzLl9hZG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZih0aGlzLnN0dWRlbnQudXNlcklkID09PSB0aGlzLl9hZG1pbi5pZCl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmKHRoaXMuc3R1ZGVudC5yb2xlID09PSAnYWRtaW4nKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIC0gd2hlbiBjbGlja2luZyBkZWxldGUgYnV0dG9uLCBvcGVuIGEgbW9kYWwgZGlhbG9nIHRvIGNvbmZpcm0gZGVsZXRlXG4gICAqIC0gaWYgY29uZmlybSwgZGVsZXRlIGFuZCByZWRpcmVjdCB0byBzdHVkZW50c1xuICAgKiAtIG90aGVyd2lzZSwgZG8gbm90aGluZ1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIHRoZSBcIkRlbGV0ZVwiIGJ1dHRvblxuICAgKi9cbiAgY2hlY2tEZWxldGUoKXtcbiAgICBjb25zdCBtb2RlbFJlZiA9IHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnQsIHtzaXplOiAnc20nfSk7XG4gICAgbW9kZWxSZWYuY29tcG9uZW50SW5zdGFuY2UubWVzc2FnZSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPyc7XG5cbiAgICBtb2RlbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KT0+e1xuICAgICAgaWYocmVzdWx0ID09PSAnZGVsZXRlJyl7XG4gICAgICAgIHRoaXMuX2NhbGxEZWxldGUoKTtcbiAgICAgIH1cbiAgICB9LCAoZGlzbWlzcyk9PntcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gd2hpY2ggaW1wbGVtZW50cyBkZWxldGUgc3R1ZGVudCBhZnRlciB1c2VyXG4gICAqIGNvbmZpcm1lZCBkZWxldGlvblxuICAgKi9cbiAgcHJvdGVjdGVkIF9jYWxsRGVsZXRlKCl7XG4gICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZGVsZXRlU3R1ZGVudCh0aGlzLl9hZG1pbi5pZCwgdGhpcy5zdHVkZW50LnVzZXJJZClcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIC8vIHN1Y2Nlc3NmdWxcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9zdHVkZW50cyddKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBjb21wb25lbnQgYnkgdW5zdWJzY3JpYmluZyB0byB0aGUgc2VydmljZXNcbiAgICogVGhpcyBwcmV2ZW50cyBhIG1lbW9yeSBsZWFrXG4gICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcblxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4uL3N0dWRlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NjZW5hcmlvL3NjZW5hcmlvLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDb3Vyc2UsIEFkbWluU3R1ZGVudCwgU2NlbmFyaW8sIFN0dWRlbnRQaGFnZSwgU3R1ZGVudEZyaWRnZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB2aWV3IHRoZSBwaGFnZSBzdHJhaW5zIGZvciBhIHNwZWNpZmljIHN0dWRlbnRcbiAqIGFuZCBzY2VuYXJpb1xuICpcbiAqIEFkbWluIGlzIGFibGUgdG8gc2VlIGVhY2ggcGhhZ2UncyBtdXRhdGlvbnMsIGRlbGV0aW9ucywgY29tbWVudHMsIGFuZCBwb3NzaWJseSBtdXRhdGlvbiBndWVzc2VzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0dWRlbnQtZnJpZGdlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc3R1ZGVudC1mcmlkZ2UudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgU3R1ZGVudEZyaWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEZyaWRnZSBvYmplY3QgKGlmIGl0IGV4aXN0cylcbiAgICovXG4gIHByb3RlY3RlZCBmcmlkZ2U6IFN0dWRlbnRGcmlkZ2U7XG4gIC8qKlxuICAgKiBJZiBmcmlkZ2UgZXhpc3RzIGRldGVybWluZSBieSBpZiB0aGlzLmZyaWRnZSBoYXMgc3RyYWluc1xuICAgKi9cbiAgcHJvdGVjdGVkIGhhc0ZyaWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogQm9vbGVhbiBzdGF0ZSB2YXJpYWJsZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbSBtdWx0aXBsZSBvYnNlcnZhYmxlcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBmb3IgVVJMIHBhcmFtZXRlcnNcbiAgICovXG4gIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuXG4gIC8qKlxuICAgKiBPcHRpb24gdG8gc2hvdyBhbGwgc3RyYWlucyBpbiBmcmlkZ2Ugb3JcbiAgICogb25seSBzdHJhaW5zIG9mIGludGVyZXN0IGZvciBncmFkaW5nICh1bmtub3duXG4gICAqIGFuZCBzdWJtaXR0ZWQpXG4gICAqXG4gICAqIFNob3VsZCBiZSBgXCJhbGxcImAgb3IgYFwiZ3JhZGVkXCJgXG4gICAqL1xuICBwcml2YXRlIHZpZXdTdHJhaW5zOiBzdHJpbmcgPSAnYWxsJztcbiAgLyoqXG4gICAqIExpc3Qgb2YgcGhhZ2UgY3VycmVudGx5IGJlaW5nIHZpZXdlZFxuICAgKi9cbiAgcHJpdmF0ZSBzdHJhaW5MaXN0OiBTdHVkZW50UGhhZ2VbXTtcbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgX3N0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgdmlld1xuICAgKiAxLiBHZXQgc3R1ZGVudElkLCBzY2VuYXJpb0lkLCBhbmQgYWRtaW5cbiAgICogMi4gR2V0IHRoZSBmcmlkZ2VcbiAgICogMy4gSWYgdGhlIGZyaWRnZSBleGlzdHNcbiAgICogM2EuIGFkZCB0aGUgXCJndWVzc2VzXCIgdG8gZWFjaCBzdHJhaW5cbiAgICogM2IuIHNvcnQgdGhlIHN0cmFpbnMgYnkgc3RyYWluIG51bWJlclxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBsZXQgc3R1ZGVudElkID0gcGFyYW1zWydzdHVkZW50SWQnXTtcbiAgICAgIGxldCBzY2VuSWQgPSBwYXJhbXNbJ3NjZW5JZCddO1xuICAgICAgbGV0IGFkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuXG4gICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRGcmlkZ2UoYWRtaW4uaWQsIHN0dWRlbnRJZCwgc2NlbklkKVxuICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChmcmlkZ2UpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5mcmlkZ2UgPSBmcmlkZ2U7XG4gICAgICAgICAgICAgIHRoaXMuaGFzRnJpZGdlID0gKGZyaWRnZS5zdHJhaW5zICE9PSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICBpZih0aGlzLmhhc0ZyaWRnZSl7XG4gICAgICAgICAgICAgICAgbGV0IGd1ZXNzZXMgPSBKU09OLnBhcnNlKHRoaXMuZnJpZGdlLmd1ZXNzZXMpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgc3RyYWluIG9mIHRoaXMuZnJpZGdlLnN0cmFpbnMpe1xuICAgICAgICAgICAgICAgICAgbGV0IHggPSBndWVzc2VzW3N0cmFpbi5zdHJhaW5OdW1dO1xuICAgICAgICAgICAgICAgICAgaWYoeCl7XG4gICAgICAgICAgICAgICAgICAgIHN0cmFpbi5ndWVzc2VzID0geDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc3RyYWluLmd1ZXNzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mcmlkZ2Uuc3RyYWlucy5zb3J0KChhLGIpPT57cmV0dXJuIGEuc3RyYWluTnVtIC0gYi5zdHJhaW5OdW19KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNldFBoYWdlKCdhbGwnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSBDU1MgY2xhc3MgZm9yIHRoZSB2aWV3IHN0cmFpbnMgYnV0dG9uIGRlcGVuZGluZyBvbiBzZWxlY3RlZCBvcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIGJ1dHRvbiBkZXRlcm1pbmluZyBjbGFzc2VzIGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjbGFzc2VzIHdoaWNoIGFwcHkgdG8gdGhpcyBidXR0b24gaW4gdGhlIGZvcm0ge1wiY2xhc3NcIjogYm9vbGVhbiwgLi4ufVxuICAgKlxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5WaWV3IHN0cmFpbnMgaXMgXCJhbGxcIjwvY2FwdGlvbj5cbiAgICogZ2V0QnV0dG9uQ2xhc3MoJ2FsbCcpIC0+IHsnYnRuIGJ0bi1zbWFsbCc6IHRydWUsICdidG4tcHJpbWFyeSc6IHRydWUsICdidG4tcHJpbWFyeS1vdXRsaW5lJzogZmFsc2V9XG4gICAqIGdldEJ1dHRvbkNsYXNzKCdncmFkZWQnKSAtPiB7J2J0biBidG4tc21hbGwnOiB0cnVlLCAnYnRuLXByaW1hcnknOiBmYWxzZSwgJ2J0bi1wcmltYXJ5LW91dGxpbmUnOiB0cnVlfVxuICAgKi9cbiAgZ2V0QnV0dG9uQ2xhc3Moc3JjOiBzdHJpbmcpOiBPYmplY3R7XG4gICAgcmV0dXJuIHtcbiAgICAgICdidG4gYnRuLXNtJzogdHJ1ZSxcbiAgICAgICdidG4tcHJpbWFyeSc6IChzcmMgPT09IHRoaXMudmlld1N0cmFpbnMpLFxuICAgICAgJ2J0bi1vdXRsaW5lLXByaW1hcnknOiAoc3JjICE9PSB0aGlzLnZpZXdTdHJhaW5zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGUgdGhlIGxpc3Qgb2YgdmlzaWJsZSBwaGFnZSBhcHByb3ByaWF0ZWx5XG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2YgXCJWaWV3IFN0cmFpblwiIGJ1dHRvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0gYnV0dG9uIHdoaWNoIHdhcyBjbGlja2VkO1xuICAgKiBTaG91bGQgYmUgb25lIG9mIGBbXCJhbGxcIiwgXCJncmFkZWRcIl1gXG4gICAqL1xuICBzZXRQaGFnZShzcmM6IHN0cmluZyl7XG4gICAgdGhpcy52aWV3U3RyYWlucyA9IHNyYztcbiAgICBpZih0aGlzLnZpZXdTdHJhaW5zID09PSAnYWxsJyl7XG4gICAgICB0aGlzLnN0cmFpbkxpc3QgPSB0aGlzLmZyaWRnZS5zdHJhaW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0cmFpbkxpc3QgPSB0aGlzLmZyaWRnZS5zdHJhaW5zLmZpbHRlcigoc3RyYWluKT0+e1xuICAgICAgICBpZihzdHJhaW4ucGhhZ2VUeXBlID09PSAndW5rbm93bicpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYoc3RyYWluLnBoYWdlVHlwZSA9PT0gJ3VzZXInICYmIHN0cmFpbi5zdWJtaXR0ZWQpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdG9yeWluZyB0aGUgY29tcG9uZW50LCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIGFuZFxuICAgKiBvYnNlcnZhYmxlcyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtZnJpZGdlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJlc29sdmUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4vc3R1ZGVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFkbWluU3R1ZGVudCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc3R1ZGVudC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIC0gTmVlZGVkIGZvciBicmVhZGNydW1ic1xuICogLSBSZXNvbHZlcyB0aGUgc3R1ZGVudElkIGluIHRoZSBVUkwgdG8gdGhlIHN0dWRlbnQgaXQgcmVwcmVzZW50c1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3R1ZGVudFJlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxBZG1pblN0dWRlbnQ+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiBCYXNlZCBvbiB0aGUgVVJMIGBzdHVkZW50SWRgIHBhcmFtZXRlciwgZmluZCB0aGUgdXNlclxuICAgKiBpdCBiZWxvbmdzIHRvXG4gICAqXG4gICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gcm91dGUgLSByb3V0ZSBVUkwgYXQgdGhlIG1vbWVudFxuICAgKiBAcGFyYW0ge1JvdXRlclN0YXRlU25hcHNob3R9IHN0YXRlIC0gcm91dGVyIHN0YXRlOyBuZWVkZWQgdG8gaW1wbGVtZW50IGludGVyZmFjZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxBZG1pblN0dWRlbnQ+fSBUaGUgc3R1ZGVudCB0aGUgaWQgYmVsb25ncyB0b1xuICAgKiBvciBhbiBlbXB0eSBvYnNlcnZhYmxlIGlmIHRoZSBpZCBkb2Vzbid0IGJlbG9uZyB0byBhbnlvbmVcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8QWRtaW5TdHVkZW50PiB7XG4gICAgbGV0IGFkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuXG4gICAgY29uc3Qgc3R1ZGVudE51bSA9IHJvdXRlLnBhcmFtc1snc3R1ZGVudElkJ107XG5cbiAgICBpZiAoc3R1ZGVudE51bSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldFN0dWRlbnQoYWRtaW4uaWQsIHN0dWRlbnROdW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5yZXNvbHZlci50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFN0dWRlbnRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHVkZW50SW5kaXZDb21wb25lbnQgfSBmcm9tICcuL3N0dWRlbnQtaW5kaXYvc3R1ZGVudC1pbmRpdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R1ZGVudEZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1mcmlkZ2UuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU2NlbmFyaW9SZXNvbHZlciB9IGZyb20gJy4uLy4uL3NjZW5hcmlvL3NjZW5hcmlvLnJlc29sdmVyJztcbmltcG9ydCB7IFN0dWRlbnRSZXNvbHZlciB9IGZyb20gJy4vc3R1ZGVudC5yZXNvbHZlcic7XG5cbmV4cG9ydCBjb25zdCBTdHVkZW50Um91dGVzOiBSb3V0ZXMgPSBbXG4gIHtwYXRoOiAnJyxcbiAgIGNoaWxkcmVuOiBbXG4gICAgIHtcbiAgICBwYXRoOiAnOnN0dWRlbnRJZCcsXG4gICAgcmVzb2x2ZToge3N0dWRlbnQ6IFN0dWRlbnRSZXNvbHZlcn0sXG4gICAgZGF0YToge2JyZWFkY3J1bWJzOiAne3sgc3R1ZGVudC5maXJzdE5hbWUgfX0ge3sgc3R1ZGVudC5sYXN0TmFtZSB9fSd9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgcGF0aDogJzpzY2VuSWQnLFxuICAgIGNvbXBvbmVudDogU3R1ZGVudEZyaWRnZUNvbXBvbmVudCxcbiAgICAgICAgcmVzb2x2ZToge3NjZW5hcmlvOiBTY2VuYXJpb1Jlc29sdmVyfSxcbiAgICAgICAgZGF0YToge2JyZWFkY3J1bWJzOiAne3sgc2NlbmFyaW8ubGFiZWwgfX0nfVxuICB9LFxuICAgICAge3BhdGg6ICcnLFxuICAgICAgIGNvbXBvbmVudDogU3R1ZGVudEluZGl2Q29tcG9uZW50XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBTdHVkZW50TGlzdENvbXBvbmVudFxuICB9XG4gICBdXG4gIH1cbl07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MzFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLyoqXG4gKiBMaXN0IG9mIHVzZXIgcm9sZXMgd2l0aCB0aGVpciBudW1lcmljIHZhbHVlIChgdmFsdWVgKSwgc3RyaW5nIHZhbHVlXG4gKiB1c2VkIGJ5IE1vbmdvREIgKGBrZXlgKSwgYW5kIHN0cmluZyBkaXNwbGF5ZWQgb24gd2VicGFnZSAoYGxhYmVsYClcbiAqL1xuZXhwb3J0IGNvbnN0IFN0dWRlbnRSb2xlc0FycmF5OiBhbnkgPSBbXG4gIHtcbiAgICBrZXk6ICdzdHVkZW50JyxcbiAgICBsYWJlbDogJ1N0dWRlbnQnLFxuICAgIHZhbHVlOiAwXG4gIH0sIHtcbiAgICBrZXk6ICdpbnN0cicsXG4gICAgbGFiZWw6ICdJbnN0cnVjdG9yJyxcbiAgICB2YWx1ZTogMVxuICB9LCB7XG4gICAga2V5OiAnYWRtaW4nLFxuICAgIGxhYmVsOiAnQWRtaW5pc3RyYXRvcicsXG4gICAgdmFsdWU6IDJcbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5yb2xlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtaW5kaXYvc3R1ZGVudC1pbmRpdi50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MzNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtZnJpZGdlLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LWZyaWRnZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MzRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0dWRlbnRQaGFnZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvcGhhZ2UuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBTbWFsbCBjb21wb25lbnQgd2hpY2ggZW5jb21wYXNzZXMgYSBzaW5nbGUgcGhhZ2Ugc3RyYWluIGJlaW5nIHZpZXdlZFxuICogd2l0aGluIGEgc3R1ZGVudCdzIGZyaWRnZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdHVkZW50LXBoYWdlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc3R1ZGVudC1waGFnZS50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdHVkZW50UGhhZ2VDb21wb25lbnR7XG5cbiAgLyoqXG4gICAqIFRoZSBwaGFnZSB3aGljaCB0aGUgY29tcG9uZW50IGlzIGNyZWF0ZWQgZm9yXG4gICAqL1xuICBASW5wdXQoKSBwaGFnZTogU3R1ZGVudFBoYWdlO1xuXG4gIGNvbnN0cnVjdG9yKCl7fVxuXG4gIC8qKlxuICAgKiBQcm9kdWNlcyBmb3JtYXR0ZWQgc3RyaW5nIGJhc2VkIG9uIHBoYWdlIHR5cGUgYW5kIGlmIHBoYWdlIGlzXG4gICAqIHN1Ym1pdHRlZCB0byBiZSBncmFkZWRcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gZm9ybWF0dGVkIHN0cmluZ1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiByZWZlcmVuY2UgcGhhZ2UgLT4gXCJSRUZFUkVOQ0VcIlxuICAgKiBzY2VuYXJpbyB1bmtub3duIHBoYWdlIC0+IFwiVU5LT1dOXCJcbiAgICogdXNlciBwaGFnZSwgbm90IHN1bWl0dGVkIC0+IFwiVVNFUlwiXG4gICAqIHN1Ym1pdHRlZCBwaGFnZSAtPiBcIlNVQk1JU1NJT05cIlxuICAgKi9cbiAgZm9ybWF0UGhhZ2VUeXBlKCk6IHN0cmluZ3tcbiAgICBpZih0aGlzLnBoYWdlKXtcbiAgICAgIGxldCB0ID0gdGhpcy5waGFnZS5waGFnZVR5cGU7XG4gICAgICBpZih0aGlzLnBoYWdlLnBoYWdlVHlwZSA9PT0gJ3VzZXInICYmIHRoaXMucGhhZ2Uuc3VibWl0dGVkKXtcbiAgICAgICAgcmV0dXJuICdTVUJNSVNTSU9OJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhZ2UucGhhZ2VUeXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1waGFnZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1waGFnZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1waGFnZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MzZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTY2VuYXJpb0dsb2JhbHMgfSBmcm9tICcuLi9zY2VuYXJpby9zY2VuYXJpby5nbG9iYWxzJztcblxuLyoqXG4gKiBGb3JtYXQgdGhlIHRleHR1YWwgcHJlc2VudGF0aW9uIG9mIHRoZSBkZWxldGlvbiBndWVzc3NlcyBmb3JcbiAqIGEgdXNlcidzIHBoYWdlIHN0cmFpbjsgdXNlcyBhIFtzY2VuYXJpbyBnbG9iYWxde0BsaW5rXG4gKiBTY2VuYXJpb0dsb2JhbHN9IHZhcmlhYmxlIGBkZWxldGlvbkd1ZXNzTGVuZ3RoYCB0byBkZXRlcm1pbmVcbiAqIHRoZSByYW5nZXNcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBndWVzc0xpc3QgfCBwaGFnZUd1ZXNzZXMgfX1gXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+T25lIGRlbGV0aW9uIGd1ZXNzOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+W2ZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgLi4uXTwvY29kZT4gYmVjb21lcyBcIjEwLTQwXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk5vIGRlbGV0aW9uIGd1ZXNzZXM6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5bZmFsc2UsIC4uLiwgZmFsc2VdPC9jb2RlPiBiZWNvbWVzIFwiTm9uZVwiXG4gKi9cblxuQFBpcGUoe25hbWU6ICdwaGFnZUd1ZXNzZXMnfSlcbmV4cG9ydCBjbGFzcyBQaGFnZUd1ZXNzZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGd1ZXNzZXM6IGJvb2xlYW5bXSk6IHN0cmluZyB7XG4gICAgbGV0IHN0ZXBTaXplID0gU2NlbmFyaW9HbG9iYWxzLmRlbGV0aW9uR3Vlc3NMZW5ndGg7XG4gICAgbGV0IG91dCA9ICcnO1xuICAgIGxldCB4PS0xO1xuICAgIGZvcihsZXQgaSBpbiBndWVzc2VzKXtcbiAgICAgIGxldCB5OiBudW1iZXIgPSAraTtcbiAgICAgIC8vIHN0YXJ0IG5ldyBkZWxldGlvblxuICAgICAgaWYoeCA8IDAgJiYgZ3Vlc3Nlc1t5XSl7XG4gICAgICAgIHggPSBzdGVwU2l6ZSAqIHk7XG4gICAgICB9IC8vIGVuZCBhIGRlbGV0aW9uXG4gICAgICBlbHNlIGlmKHggPj0gMCAmJiBndWVzc2VzW3ldID09PSBmYWxzZSl7XG4gICAgICAgIGxldCB6ID0gKHN0ZXBTaXplICogeSk7XG4gICAgICAgIG91dCArPSAob3V0ID09PSAnJyA/ICcnIDogJywgJyk7XG4gICAgICAgIG91dCArPSB4ICsgJyAtICcgKyB6O1xuICAgICAgICB4ID0gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNoZWNrIGZvciB0aGUgbGFzdCBwb3NzaWJsZSBkZWxldGlvblxuICAgIGlmKHggIT0gLTEpe1xuICAgICAgb3V0ICs9IChvdXQgPT09ICcnID8gJycgOiAnLCAnKTtcbiAgICAgIG91dCArPSB4ICsgJyAtICcgKyBTY2VuYXJpb0dsb2JhbHMuZ2VuZUxlbmd0aDtcbiAgICB9XG4gICAgaWYob3V0ID09PSAnJyl7XG4gICAgICByZXR1cm4gJ05vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgcmV0dXJuIG91dDtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BpcGVzL3BoYWdlLWd1ZXNzZXMucGlwZS50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBGb3JtYXQgdGhlIHRleHR1YWwgcHJlc2VudGF0aW9uIG9mIGEgcGhhZ2Ugc3RyYWluJ3MgZnJhbWVzaGlmdCBtdXRhdGlvbnMgKGlmIGFueSlcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBtdXRhdGlvbkxpc3QgfCBwaGFnZU11dGF0aW9ucyB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5PbmUgbmVnYXRpdmUgZnJhbWVzaGlmdCBtdXRhdGlvbjogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlstODddPC9jb2RlPiBiZWNvbWVzIFwiLTEgYXQgODdcIlxuICogQGV4YW1wbGUgPGNhcHRpb24+T25lIHBvc2l0aXZlIGZyYW1lc2hpZnQgbXV0YXRpb246ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5bMTYzXTwvY29kZT4gYmVjb21lcyBcIisxIGF0IDE2M1wiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NdWx0aXBsZSBmcmFtZXNoaWZ0IG11dGF0aW9uczogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlszMiwgLTIwOF08L2NvZGU+IGJlY29tZXMgXCIrMSBhdCAzMiwgLTEgYXQgMjA4XCJcbiAqL1xuQFBpcGUoe25hbWU6ICdwaGFnZU11dGF0aW9ucyd9KVxuZXhwb3J0IGNsYXNzIFBoYWdlTXV0YXRpb25zUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShtdXRhdGlvbnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgZm9yKGxldCB4IG9mIG11dGF0aW9ucyl7XG4gICAgICBvdXQgKz0gKG91dCA9PT0gJycgPyAnJyA6ICcsICcpO1xuICAgICAgbGV0IHkgPSAoeCA+IDAgPyAnKzEnIDogJy0xJyk7XG4gICAgICBsZXQgeiA9IE1hdGguYWJzKHgpO1xuICAgICAgb3V0ICs9IHkgKyAnIGF0ICcgKyB6O1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9waGFnZS1tdXRhdGlvbnMucGlwZS50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBGb3JtYXQgdGhlIHRleHR1YWwgcHJlc2VudGF0aW9uIG9mIGEgcGhhZ2Ugc3RyYWluJ3MgZGVsZXRpb25zIChpZiBhbnkpXG4gKlxuICogKipVc2FnZToqKiBge3sgZGVsZXRpb25saXN0IHwgcGhhZ2VEZWxldGlvbnMgfX1gXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+T25lIGRlbGV0aW9uOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+WzUwLDE0NV08L2NvZGU+IGJlY29tZXMgXCI1MCAtIDE0NVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NdWx0aXBsZSBkZWxldGlvbnM6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5bNTAsIDE0MCwgMTkwLCAyNjBdPC9jb2RlPiBiZWNvbWVzIFwiNTAgLSAxNDAsIDE5MCAtIDI2MFwiXG4gKi9cbkBQaXBlKHtuYW1lOiAncGhhZ2VEZWxldGlvbnMnfSlcbmV4cG9ydCBjbGFzcyBQaGFnZURlbGV0aW9uc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oZGVsZXRpb246IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgbGV0IG1MZW5ndGggPSAoZGVsZXRpb24ubGVuZ3RoICUgMiA9PT0gMCA/IGRlbGV0aW9uLmxlbmd0aCA6IGRlbGV0aW9uLmxlbmd0aCAtMSk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbUxlbmd0aDsgaSs9IDIpe1xuICAgICAgb3V0ICs9IChpID4gMSA/ICcsICcgOiAnJyk7XG4gICAgICBvdXQgKz0gZGVsZXRpb25baV0gKyAnIC0gJyArIGRlbGV0aW9uW2krMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcGlwZXMvcGhhZ2UtZGVsZXRpb25zLnBpcGUudHMiXSwic291cmNlUm9vdCI6IiJ9