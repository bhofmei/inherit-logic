webpackJsonp([2],{

/***/ 922:
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
const student_routes_1 = __webpack_require__(957);
const student_list_component_1 = __webpack_require__(935);
const student_indiv_component_1 = __webpack_require__(936);
const student_fridge_component_1 = __webpack_require__(937);
const student_mendel_fridge_component_1 = __webpack_require__(938);
const student_phage_component_1 = __webpack_require__(963);
const confirm_delete_dialog_component_1 = __webpack_require__(420);
const student_resolver_1 = __webpack_require__(939);
const phage_guesses_pipe_1 = __webpack_require__(965);
const phage_mutations_pipe_1 = __webpack_require__(966);
const phage_deletions_pipe_1 = __webpack_require__(967);
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
            student_mendel_fridge_component_1.StudentMendelFridgeComponent,
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

/***/ 924:
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
const rxjs_1 = __webpack_require__(27);
const student_service_1 = __webpack_require__(419);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(53);
const student_interface_1 = __webpack_require__(925);
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
        templateUrl: __webpack_require__(958)
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        authentication_service_1.AuthenticationService])
], StudentListComponent);
exports.StudentListComponent = StudentListComponent;


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
const router_1 = __webpack_require__(15);
const ng_bootstrap_1 = __webpack_require__(70);
const rxjs_1 = __webpack_require__(27);
const authentication_service_1 = __webpack_require__(17);
const student_service_1 = __webpack_require__(419);
const cricket_service_1 = __webpack_require__(121);
const mendelpede_scenarios_service_1 = __webpack_require__(65);
const student_roles_1 = __webpack_require__(959);
const confirm_delete_dialog_component_1 = __webpack_require__(420);
const read_error_1 = __webpack_require__(53);
let StudentIndivComponent = class StudentIndivComponent {
    constructor(_router, _route, _authService, _studentService, _scenarioService, _mpedeScenarioService, _modalService) {
        this._router = _router;
        this._route = _route;
        this._authService = _authService;
        this._studentService = _studentService;
        this._scenarioService = _scenarioService;
        this._mpedeScenarioService = _mpedeScenarioService;
        this._modalService = _modalService;
        this.roles = student_roles_1.StudentRolesArray;
        this.scoreMap = new Map();
        this.mpedeScenarios = Array();
        this.quizes = Array();
        this.discoveries = Array();
        this.pathways = Array();
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
                this._mpedeScenarioService.listScenarios().takeUntil(this.isDestroyed$)
                    .subscribe((scens) => {
                    this.mpedeOptions = scens;
                    this.mpedeOptions.forEach((option) => {
                        if (option.scenType === 'scenario') {
                            this.mpedeScenarios.push(option);
                        }
                        else if (option.scenType === 'quiz') {
                            this.paramObserver = this._route.params.subscribe(params => {
                                let studentId = params['studentId'];
                                let scenId = params['scenShortCode'];
                                let admin = this._authService.getUser();
                                this._studentService.getMendelFridge(admin.id, studentId, option.shortCode)
                                    .takeUntil(this.isDestroyed$)
                                    .subscribe((mfridge) => {
                                    var score = mfridge.quizScore;
                                    this.scoreMap[option.shortCode] = score;
                                }, (error) => {
                                    this.errorMessage = read_error_1.readErrorMessage(error);
                                });
                            });
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
    getQuizScore(scenId) {
        return this.scoreMap[scenId];
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
        templateUrl: __webpack_require__(960)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        student_service_1.StudentService,
        cricket_service_1.CricketService,
        mendelpede_scenarios_service_1.MendelpedeScenarioService,
        ng_bootstrap_1.NgbModal])
], StudentIndivComponent);
exports.StudentIndivComponent = StudentIndivComponent;


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
const router_1 = __webpack_require__(15);
const rxjs_1 = __webpack_require__(27);
const student_service_1 = __webpack_require__(419);
const authentication_service_1 = __webpack_require__(17);
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
        templateUrl: __webpack_require__(961)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        student_service_1.StudentService,
        authentication_service_1.AuthenticationService])
], StudentFridgeComponent);
exports.StudentFridgeComponent = StudentFridgeComponent;


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
const router_1 = __webpack_require__(15);
const rxjs_1 = __webpack_require__(27);
const student_service_1 = __webpack_require__(419);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(53);
let StudentMendelFridgeComponent = class StudentMendelFridgeComponent {
    constructor(_router, _route, _studentService, _authService) {
        this._router = _router;
        this._route = _route;
        this._studentService = _studentService;
        this._authService = _authService;
        this.hasFridge = false;
        this.isQuiz = false;
        this.errorMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    getMendelpede(phenotype) {
        var mpedeCssClass = {};
        var segcol = 'mpede-bodycol-' + phenotype[2];
        var eyecol = 'mpede-eyecol-' + phenotype[1];
        var imurl = 'mpede-pede-' + phenotype[0].toLowerCase() + '-seg' + phenotype[4] + '-leg' + phenotype[3] + '-min';
        mpedeCssClass[segcol] = true;
        mpedeCssClass[eyecol] = true;
        mpedeCssClass[imurl] = true;
        mpedeCssClass['sizeI'] = true;
        return mpedeCssClass;
    }
    ngOnInit() {
        this.paramObserver = this._route.params.subscribe(params => {
            let studentId = params['studentId'];
            let scenId = params['scenShortCode'];
            let admin = this._authService.getUser();
            this._studentService.getMendelFridge(admin.id, studentId, scenId)
                .takeUntil(this.isDestroyed$)
                .subscribe((mfridge) => {
                this.fridge = mfridge;
                this.fridge.owner = mfridge.owner;
                if (this.fridge.scenario.scenCode.toUpperCase().includes('QUIZ')) {
                    this.isQuiz = true;
                }
                if (mfridge.genoFacts) {
                    this.currGenoFacts = JSON.parse(mfridge.genoFacts);
                    if (this.currGenoFacts !== null) {
                        this.hasFridge = true;
                    }
                }
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
StudentMendelFridgeComponent = __decorate([
    core_1.Component({
        selector: 'student-mendel-fridge',
        templateUrl: __webpack_require__(962),
        styleUrls: [__webpack_require__(421)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        student_service_1.StudentService,
        authentication_service_1.AuthenticationService])
], StudentMendelFridgeComponent);
exports.StudentMendelFridgeComponent = StudentMendelFridgeComponent;


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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(27);
const authentication_service_1 = __webpack_require__(17);
const student_service_1 = __webpack_require__(419);
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

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const student_list_component_1 = __webpack_require__(935);
const student_indiv_component_1 = __webpack_require__(936);
const student_fridge_component_1 = __webpack_require__(937);
const student_mendel_fridge_component_1 = __webpack_require__(938);
const scenario_resolver_1 = __webpack_require__(185);
const mendelpede_scenario_resolver_1 = __webpack_require__(186);
const student_resolver_1 = __webpack_require__(939);
exports.StudentRoutes = [
    { path: '',
        children: [
            {
                path: ':studentId',
                resolve: { student: student_resolver_1.StudentResolver },
                data: { breadcrumbs: '{{ student.firstName }} {{ student.lastName }}' },
                children: [
                    {
                        path: 'cricket/:scenId',
                        component: student_fridge_component_1.StudentFridgeComponent,
                        resolve: { scenario: scenario_resolver_1.ScenarioResolver },
                        data: { breadcrumbs: '{{ scenario.label }}' }
                    },
                    {
                        path: 'mendelpede/:scenShortCode',
                        component: student_mendel_fridge_component_1.StudentMendelFridgeComponent,
                        resolve: { mendelpedeScenario: mendelpede_scenario_resolver_1.MendelpedeScenarioResolver },
                        data: { breadcrumbs: '{{ mendelpedeScenario.label }}' }
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

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-list/student-list.template.html";

/***/ }),

/***/ 959:
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

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-indiv/student-indiv.template.html";

/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-fridge/student-fridge.template.html";

/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-mendel-fridge/student-mendel-fridge.template.html";

/***/ }),

/***/ 963:
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
        templateUrl: __webpack_require__(964)
    }),
    __metadata("design:paramtypes", [])
], StudentPhageComponent);
exports.StudentPhageComponent = StudentPhageComponent;


/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-fridge/student-phage.template.html";

/***/ }),

/***/ 965:
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
const cricket_globals_1 = __webpack_require__(924);
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

/***/ 966:
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

/***/ 967:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQuZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2ludGVyZmFjZXMvc3R1ZGVudC5pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LWZyaWRnZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbWVuZGVsLWZyaWRnZS9zdHVkZW50LW1lbmRlbC1mcmlkZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnJlc29sdmVyLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnJvbGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1mcmlkZ2UudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1tZW5kZWwtZnJpZGdlL3N0dWRlbnQtbWVuZGVsLWZyaWRnZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LXBoYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1waGFnZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGhhZ2UtZ3Vlc3Nlcy5waXBlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGhhZ2UtbXV0YXRpb25zLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9waGFnZS1kZWxldGlvbnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5QztBQUN6Qyx5Q0FBK0M7QUFDL0MsZ0RBQTBEO0FBRTFELGtEQUFpRDtBQUVqRCwwREFBNkU7QUFDN0UsMkRBQWdGO0FBQ2hGLDREQUFtRjtBQUNuRixtRUFBc0c7QUFDdEcsMkRBQWlGO0FBQ2pGLG1FQUE0RjtBQUU1RixvREFBcUQ7QUFDckQsc0RBQWtFO0FBQ2xFLHdEQUFzRTtBQUN0RSx3REFBc0U7QUE0QnRFLElBQWEsYUFBYSxHQUExQjtDQUE2QjtBQUFoQixhQUFhO0lBdEJ6QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCw0QkFBWTtZQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDLDhCQUFhLENBQUM7U0FDckM7UUFDRCxZQUFZLEVBQUU7WUFDWiw2Q0FBb0I7WUFDcEIsK0NBQXFCO1lBQ3JCLGlEQUFzQjtZQUN0Qiw4REFBNEI7WUFDNUIs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QUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDOzRCQUN0QyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNYLENBQUM7d0JBQUMsSUFBSSxFQUFDOzRCQUNMLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ1gsQ0FBQztvQkFDSCxDQUFDLENBQUM7b0JBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO3dCQUNwQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQzs0QkFDL0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDOzRCQUN0QyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNYLENBQUM7d0JBQUMsSUFBSSxFQUFDOzRCQUNMLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ1gsQ0FBQztvQkFDSCxDQUFDLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO3dCQUM5QyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQzs0QkFDL0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNaLENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDOzRCQUN0QyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNYLENBQUM7d0JBQUMsSUFBSSxFQUFDOzRCQUNMLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ1gsQ0FBQztvQkFDSCxDQUFDLENB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QUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0Y7QUFiWSxrQkFBa0I7SUFEOUIsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDLENBQUM7R0FDbEIsa0JBQWtCLENBYTlCO0FBYlksZ0RBQWtCIiwiZmlsZSI6IjItY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgU3R1ZGVudFJvdXRlcyB9IGZyb20gJy4vc3R1ZGVudC5yb3V0ZXMnO1xuXG5pbXBvcnQgeyBTdHVkZW50TGlzdENvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R1ZGVudEluZGl2Q29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYuY29tcG9uZW50JztcbmltcG9ydCB7IFN0dWRlbnRGcmlkZ2VDb21wb25lbnQgfSBmcm9tICcuL3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtZnJpZGdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHVkZW50TWVuZGVsRnJpZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LW1lbmRlbC1mcmlkZ2Uvc3R1ZGVudC1tZW5kZWwtZnJpZGdlLmNvbXBvbmVudCcgXG5pbXBvcnQgeyBTdHVkZW50UGhhZ2VDb21wb25lbnQgfSBmcm9tICcuL3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtcGhhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0dWRlbnRSZXNvbHZlciB9IGZyb20gJy4vc3R1ZGVudC5yZXNvbHZlcic7XG5pbXBvcnQgeyBQaGFnZUd1ZXNzZXNQaXBlIH0gZnJvbSAnLi4vLi4vcGlwZXMvcGhhZ2UtZ3Vlc3Nlcy5waXBlJztcbmltcG9ydCB7IFBoYWdlTXV0YXRpb25zUGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL3BoYWdlLW11dGF0aW9ucy5waXBlJztcbmltcG9ydCB7IFBoYWdlRGVsZXRpb25zUGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL3BoYWdlLWRlbGV0aW9ucy5waXBlJztcblxuLyoqXG4gKiBNb2R1bGUgZm9yIGFkbWluLXJlZ3VsYXRlZCBzdHVkZW50IHRoaW5ncyBsaWtlIHNldHRpbmcgdGhlXG4gKiByb2xlLCB2aWV3aW5nIGZyaWRnZXMgZm9yIGdyYWRpbmcsIGFuZCBsaXN0aW5nIGFsbCBzdHVkZW50c1xuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChTdHVkZW50Um91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdHVkZW50TGlzdENvbXBvbmVudCxcbiAgICBTdHVkZW50SW5kaXZDb21wb25lbnQsXG4gICAgU3R1ZGVudEZyaWRnZUNvbXBvbmVudCxcbiAgICBTdHVkZW50TWVuZGVsRnJpZGdlQ29tcG9uZW50LFxuICAgIFN0dWRlbnRQaGFnZUNvbXBvbmVudCxcbiAgICBQaGFnZUd1ZXNzZXNQaXBlLFxuICAgIFBoYWdlTXV0YXRpb25zUGlwZSxcbiAgICBQaGFnZURlbGV0aW9uc1BpcGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTdHVkZW50UmVzb2x2ZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50TW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQubW9kdWxlLnRzIiwiLyoqXG4gKiBTY2VuYXJpby9leHBlcmllbWVudC1yZWxhdGVkIHZhbHVlcyB1c2VkIHRvXG4gKiAxLiBTZW5kIHRoZSBjb3JyZWN0IHBhcmFtZXRlcnMgdG8gYmFja2VuZCBjYWxsc1xuICogMi4gTWF0Y2ggc29tZSBiYWNrZW5kIHBhcmFtZXRlcnNcbiAqIDMuIEhhdmUgY29uc2lzdGVudCBkZWZhdWx0c1xuICovXG5leHBvcnQgY29uc3QgQ3JpY2tldEdsb2JhbHMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygc3RhcnRpbmcgcGhhZ2Ugd2hlbiB0YWtlbiBmcm9tIGZyaWRnZVxuICAgKi9cbiAgbnVtUGhhZ2U6MTAwMDAwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBsYWIgcm9vbSBwbGF0ZVxuICAgKi9cbiAgcGxhdGVDYXBhY2l0eTogMTUwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBlYWNoIHBsZXhlciByb29tIHBsYXRlXG4gICAqL1xuICBwbGV4ZXJDYXBhY2l0eTogMjAwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHNoZWx2ZXMgaW4gdGhlIGZyaWRnZVxuICAgKi9cbiAgbkZyaWRnZVNoZWxmOiAzMixcbiAgLyoqXG4gICAqIE51bWJlciBvZiBzcG90cyBvbiBlYWNoIHNoZWxmIG9mIHRoZSBmcmlkZ2VcbiAgICovXG4gIG5GcmlkZ2VTcG90czogMTYsXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRpbHV0aW9uIHZhbHVlIGZvciBsYWIgcm9vbTsgY2FuIGJlIGNoYW5nZWQgYnkgdXNlclxuICAgKi9cbiAgZGVmYXVsdExhYkRpbHV0aW9uOiAxMCxcbiAgLyoqXG4gICAqIERlZmF1bHQgZGlsdXRpb24gdmFsdWUgZm9yIHBsZXhlciByb29tOyBjYW4gYmUgY2hhbmdlZCBieSB1c2VyXG4gICAqL1xuICBkZWZhdWx0UGxleGVyRGlsdXRpb246IDUsXG4gIC8qKlxuICAgKiBMZW5ndGggb2YgdGhlIGdlbmUgaW4gbnVtYmVyIG9mIGJhc2VwYWlyc1xuICAgKi9cbiAgZ2VuZUxlbmd0aDogMzUwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIGJhc2VwYWlycyBwZXIgXCJibG9ja1wiIHdoZW4gZ3Vlc3NpbmcgZGVsZXRpb24gbG9jYXRpb25cbiAgICovXG4gIGRlbGV0aW9uR3Vlc3NMZW5ndGg6IDEwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQuZ2xvYmFscy50cyIsImltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4vY291cnNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBfVXNlciB9IGZyb20gJy4vdXNlci5pbnRlcmZhY2UnO1xuLy8gIGZpcnN0TmFtZTogc3RyaW5nO1xuLy8gIGxhc3ROYW1lOiBzdHJpbmc7XG4vLyAgdXNlcklkOiBudW1iZXI7XG5cbi8qKlxuICogSW5mb3JtYXRpb24gbmVlZGVkIGFzIGEgdXNlciB1c2luZyB0aGUgYXBwIGluIHNjZW5hcmlvc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0dWRlbnQgZXh0ZW5kcyBfVXNlciB7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBhY2Nlc3NHcmFudGVkPzogYW55O1xuICBzdGF0dXM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gbmVlZGVkIGZvciBhZG1pbiBwYWdlcyBhYm91dCBhIHVzZXIvc3R1ZGVudFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFkbWluU3R1ZGVudCBleHRlbmRzIFN0dWRlbnQge1xuICBjb3Vyc2U6IENvdXJzZTtcbiAgcm9sZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHNvcnQgc3R1ZGVudHMgYWxwaGFiZXRpY2FsbHkgYnkgbGFzdCBuYW1lO1xuICogVXNlcyBmaXJzdCBuYW1lIGZvciB0aWVzXG4gKlxuICogTWFrZXMgdGhlIG5hbWUgbG93ZXJjYXNlIGJlZm9yZSBzb3J0aW5nIHRvIGVuc3VyZSBzb3J0IGlzXG4gKiBjYXNlIGluc2Vuc2l0aXZlXG4gKi9cbmV4cG9ydCBjb25zdCBzb3J0U3R1ZGVudHMgPSBmdW5jdGlvbihhLGIpe1xuICAgIHZhciBjb21wYXJpc29uID0gYS5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAoY29tcGFyaXNvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGEuZmlyc3ROYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLmZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBhcmlzb247XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4uL3N0dWRlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbmltcG9ydCB7IEFkbWluU3R1ZGVudCwgc29ydFN0dWRlbnRzIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZSc7XG5cbi8qKlxuICogLSBDb21wb25lbnQgd2hpY2ggbGlzdHMgc3R1ZGVudHMgZGVwZW5kZW50IG9uIHRoZSByb2xlIG9mIGxvZ2dlZCBpbiB1c2VyO1xuICAqIC0gaWYgYFwiYWRtaW5cImAsIGFsbCB1c2VycyBpbiB0aGUgc3lzdGVtXG4gICogLSBpZiBgXCJpbnN0clwiYCwgYWxsIHVzZXJzIGluIGNvdXJzZXMgaW5zdHIgdGVhY2hlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0dWRlbnQtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc3R1ZGVudC1saXN0LnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIExpc3Qgb2Ygc3R1ZGVudHNcbiAgICovXG4gICAgcHJpdmF0ZSBzdHVkZW50czogQWRtaW5TdHVkZW50W107XG4gIC8qKlxuICAgKiBCb29sZWFuIHN0YXRlIHZhcmlhYmxlIHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIG11bHRpcGxlIG9ic2VydmFibGVzIGVhc2llclxuICAgKi9cbiAgICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2UgZnJvbSBzZXJ2ZXJcbiAgICovXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3N0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSB2aWV3XG4gICAqIDEuIGdldCBsb2dnZWQgaW4gdXNlciBpZFxuICAgKiAyLiBnZXQgdGhlIGxpc3Qgb2Ygc3R1ZGVudHNcbiAgICogMy4gb3JkZXIgdGhlIGxpc3Qgb2Ygc3R1ZGVudHNcbiAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGxldCBhZG1pbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UubGlzdFN0dWRlbnRzKGFkbWluLmlkKVxuICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0dWRlbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50cyA9IHN0dWRlbnRzLnNvcnQoc29ydFN0dWRlbnRzKTtcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogRGVzdG9yeSB0aGUgY29tcG9uZW50IGJ5IHVuc3Vic2NyaWJpbmcgZnJvbSBhbGwgb2JzZXJ2YWJsZXNcbiAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4uL3N0dWRlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDcmlja2V0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NyaWNrZXQvY3JpY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgU3R1ZGVudFJvbGVzQXJyYXkgfSBmcm9tICcuLi9zdHVkZW50LnJvbGVzJztcbmltcG9ydCB7IENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvY291cnNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBZG1pblN0dWRlbnQgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zY2VuYXJpby5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gdmlldyBpbmZvcm1hdGlvbiBmb3IgYSBzaW5nbGUgc3R1ZGVudFxuICogVGhpcyBpbmNsdWRlcyBlbWFpbC9uYW1lL3JvbGUgaW5mb3JtYXRpb24gYW5kIGFjY2VzcyBzdGF0dXNcbiAqIGZvciBhbGwgc2NlbmFyaW9zXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3R1ZGVudC1pbmRpdicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc3R1ZGVudC1pbmRpdi50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdHVkZW50SW5kaXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIFN0dWRlbnQgd2UgYXJlIHZpZXdpbmdcbiAgICovXG4gICAgcHJvdGVjdGVkIHN0dWRlbnQ6IEFkbWluU3R1ZGVudDtcbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIHNjZW5hcmlvc1xuICAgKi9cbiAgICBwcml2YXRlIHNjZW5hcmlvczogU2NlbmFyaW9bXTtcbiAgXG4gIFxuICAvKipcbiAgICogQm9vbGVhbiBzdGF0ZSB2YXJpYWJsZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbSBtdWx0aXBsZVxuICAgKiBvYnNlcnZhYmxlcyBlYXNpZXJcbiAgICovXG4gICAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gZm9yIFVSTCBwYXJhbWV0ZXJzXG4gICAqL1xuICAgIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuICAvKipcbiAgICogTG9nZ2VkIGluIHVzZXIgd2hvIG11c3QgYmUgYW4gYWRtaW4gb3IgaW5zdHJ1Y3RvclxuICAgKi9cbiAgICBwcml2YXRlIF9hZG1pbjogVXNlcjtcbiAgLyoqXG4gICAqIExpc3Qgb2YgcG9zc2libGUgcm9sZXNcbiAgICovXG4gICAgcHJpdmF0ZSByb2xlcyA9IFN0dWRlbnRSb2xlc0FycmF5O1xuICAvKipcbiAgICogTmV3IHJvbGUgdG8gY2hhbmdlIHRvIGlmIGFsbG93ZWRcbiAgICovXG4gICAgcHJpdmF0ZSBuZXdSb2xlOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHNjb3JlTWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTsgXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBNZW5kZWxwZWRlIHNjZW5hcmlvc1xuICAgKi9cbiAgcHJpdmF0ZSBtcGVkZU9wdGlvbnM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdO1xuICBcbiAgbXBlZGVTY2VuYXJpb3M6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcbiAgcXVpemVzOiBNZW5kZWxwZWRlU2NlbmFyaW9bXSA9IEFycmF5KCk7XG4gIGRpc2NvdmVyaWVzOiBNZW5kZWxwZWRlU2NlbmFyaW9bXSA9IEFycmF5KCk7XG4gIHBhdGh3YXlzOiBNZW5kZWxwZWRlU2NlbmFyaW9bXSA9IEFycmF5KCk7XG5cbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICAgIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3N0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBDcmlja2V0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfbXBlZGVTY2VuYXJpb1NlcnZpY2U6IE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTmdiTW9kYWwpIHtcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnRcbiAgICogMS4gR2V0IGxvZ2dlZCBpbiB1c2VyXG4gICAqIDIuIEdldCBpZCBvZiBzdHVkZW50IG9mIGludGVyZXN0IGZyb20gVVJMXG4gICAqIDMuIEdldCB0aGUgc3R1ZGVudCdzIGluZm9cbiAgICogNC4gR2V0IGxpc3Qgb2YgYWxsIHNjZW5hcmlvc1xuICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIHRoaXMucGFyYW1PYnNlcnZlciA9IHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGxldCBzdHVkZW50SWQgPSBwYXJhbXNbJ3N0dWRlbnRJZCddO1xuICAgICAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudCh0aGlzLl9hZG1pbi5pZCwgc3R1ZGVudElkKVxuICAgICAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnQgPSBpbmZvO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld1JvbGUgPSB0aGlzLnN0dWRlbnQucm9sZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmxpc3RTY2VuYXJpb3MoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHNjZW5zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuYXJpb3MgPSBzY2VucztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tcGVkZVNjZW5hcmlvU2VydmljZS5saXN0U2NlbmFyaW9zKCkudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChzY2VucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXBlZGVPcHRpb25zID0gc2NlbnM7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5tcGVkZU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnNjZW5UeXBlID09PSAnc2NlbmFyaW8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXBlZGVTY2VuYXJpb3MucHVzaChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKG9wdGlvbi5zY2VuVHlwZSA9PT0gJ3F1aXonKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHVkZW50SWQgPSBwYXJhbXNbJ3N0dWRlbnRJZCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzY2VuSWQgPSBwYXJhbXNbJ3NjZW5TaG9ydENvZGUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0TWVuZGVsRnJpZGdlKGFkbWluLmlkLCBzdHVkZW50SWQsIG9wdGlvbi5zaG9ydENvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgobWZyaWRnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd3ZSBnb3QgZnJpZGdlIGZyb20gZGInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3JlID0gbWZyaWRnZS5xdWl6U2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTWFwW29wdGlvbi5zaG9ydENvZGVdID0gc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVpemVzLnB1c2gob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihvcHRpb24uc2NlblR5cGUgPT09ICdkaXNjb3ZlcnknKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNjb3Zlcmllcy5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihvcHRpb24uc2NlblR5cGUgPT09ICdwYXRod2F5Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aHdheXMucHVzaChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXBlZGVTY2VuYXJpb3MgPSB0aGlzLm1wZWRlU2NlbmFyaW9zLnNvcnQoKG8xLCBvMikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8xLm9yZE9mU2NlbiA8IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobzEub3JkT2ZTY2VuID4gbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6ZXMgPSB0aGlzLnF1aXplcy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvMS5vcmRPZlNjZW4gPCBvMi5vcmRPZlNjZW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG8xLm9yZE9mU2NlbiA+IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzY292ZXJpZXMgPSB0aGlzLmRpc2NvdmVyaWVzLnNvcnQoKG8xLCBvMikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8xLm9yZE9mU2NlbiA8IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobzEub3JkT2ZTY2VuID4gbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRod2F5cyA9IHRoaXMucGF0aHdheXMuc29ydCgobzEsIG8yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobzEub3JkT2ZTY2VuIDwgbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvMS5vcmRPZlNjZW4gPiBvMi5vcmRPZlNjZW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc2NvcmVNYXApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBmb3JtYXR0ZWQgc3RyaW5nIGJhc2VkIG9uIGlmIGFjY2VzcyBncmFudGVkIGZvciBzY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbkNvZGUgLSBzY2VuYXJpbyB0byBsb29rIHVwXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGBcIkFjY2VzcyBncmFudGVkXCJgLCBgXCJBY2Nlc3Mgbm90IGdyYW50ZWRcImAsIG9yIGBcIk5BXCJgXG4gICAqL1xuICAgIGdldFNjZW5TdGF0dXMoc2NlbkNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBpc0dyYW50ZWQgPSB0aGlzLnN0dWRlbnQuYWNjZXNzR3JhbnRlZFtzY2VuQ29kZV07XG4gICAgICAgIGlmIChpc0dyYW50ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnQWNjZXNzIGdyYW50ZWQnXG4gICAgICAgIH0gZWxzZSBpZiAoaXNHcmFudGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICdBY2Nlc3Mgbm90IGdyYW50ZWQnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ05BJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UXVpelNjb3JlKHNjZW5JZDogc3RyaW5nKXtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5zY29yZU1hcCk7XG4gICAgICAvL2NvbnNvbGUubG9nKHNjZW5JZCk7XG4gICAgICByZXR1cm4gdGhpcy5zY29yZU1hcFtzY2VuSWRdO1xuICAgIH1cblxuICAvKipcbiAgICogLSBHZXQgYSBmb3JtYXR0ZWQgSFRNTCBzdHJpbmcgYmFzZWQgb24gdGhlIHN0dWRlbnRcbiAgICogLSBJZiBzdHVkZW50IGhhcyBhIGNvdXJzZSwgcmV0dXJucyBsaW5rIHRvIHRoZSBjb3Vyc2UgcGFnZVxuICAgKiAtIElmIHN0dWRlbnQgZG9lc24ndCBoYXZlIGEgY291cnNlLCByZXR1cm5zICdObyBjb3Vyc2UnXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGZvcm1hdHRlZCBIVE1MXG4gICAqL1xuICAgIGdldFN0dWRlbnRDb3Vyc2UoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHM6IEFkbWluU3R1ZGVudCA9IHRoaXMuc3R1ZGVudDtcbiAgICAgICAgaWYgKHMuY291cnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJzxhIFtyb3V0bGVyTGlua109XCJbXFwnL2FkbWluL2NvdXJzZXMvXFwnLCBcIicgKyBzLmNvdXJzZS5jb3Vyc2VOdW0gKyAnXVwiPnMuY291cnNlLmNvdXJzZU51bTwvYT4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdObyBjb3Vyc2UnO1xuICAgICAgICB9XG4gICAgfVxuXG4gIC8qKlxuICAgKiBHcmFudCBhY2Nlc3MgZm9yIGEgc3BlY2lmaWMgc2NlbmFyaW8gYnkgY2FsbGluZyBzdHVkZW50IHNlcnZpY2VcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiBvbmUgb2YgdGhlIHNjZW5hcmlvIGJ1dHRvbnNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5Db2RlIHNjZW5hcmlvIHRvIGdyYW50IGFjY2VzcyBmb3JcbiAgICovXG4gICAgZ3JhbnRBY2Nlc3Moc2NlbkNvZGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5ncmFudFNjZW5BY2Nlc3ModGhpcy5fYWRtaW4uaWQsIHRoaXMuc3R1ZGVudC51c2VySWQsIHNjZW5Db2RlLCB0cnVlKVxuICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCAmJiByZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudCA9IHJlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIHJvbGUgdG9nZ2xlIGJ1dHRvbiBzaG91bGQgYmUgZGlzYWJsZWRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIG5hbWUgb2YgYnV0dG9uL3JvbGVcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IGRpc2FibGUgZm9yIHJvbGVzIGdyZWF0ZXIgdGhhbiBjdXJyZW50IHVzZXJcbiAgICogYW5kIGlmIHZpZXdpbmcgcGFnZSBvZiBjdXJyZW50IHVzZXJcbiAgICovXG4gICAgcm9sZURpc2FibGVkKHNyYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9hZG1pbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0dWRlbnQudXNlcklkID09PSB0aGlzLl9hZG1pbi5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc3JjID09PSAnYWRtaW4nICYmIHRoaXMuX2FkbWluLnJvbGUgPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzcmMgPT09ICdpbnN0cicgJiYgdGhpcy5fYWRtaW4ucm9sZSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgQ1NTIGNsYXNzZXMgZm9yIGVhY2ggcm9sZSBidXR0b24gYmFzZWQgb24gdGhlXG4gICAqIHN0dWRlbnQncyBjdXJyZW50IHJvbGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIG5hbWUgb2YgYnV0dG9uL3JvbGVcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gcG9zc2libGUgY2xhc3NlcyB3aXRoIHRydWUvZmFsc2UgYXMgYXBwbGljYWJsZVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBDdXJyZW50IHN0dWRlbnQgaGFzIHJvbGUgXCJzdHVkZW50XCJcbiAgICogcm9sZUJ1dHRvbkNsYXNzKCdzdHVkZW50JykgLT4geydidG4gYnRuLXNtYWxsJzogdHJ1ZSwgJ2J0aC1zZWNvbmRhcnknOiB0cnVlLCAnYnRuLXNlY29uZGFyeS1vdXRsaW5lJzogZmFsc2V9XG4gICAqIHJvbGVCdXR0b25DbGFzcygnYWRtaW4nKSAtPiB7J2J0biBidG4tc21hbGwnOiB0cnVlLCAnYnRoLXNlY29uZGFyeSc6IGZhbHNlLCAnYnRuLXNlY29uZGFyeS1vdXRsaW5lJzogdHJ1ZX1cbiAgICovXG4gICAgcm9sZUJ1dHRvbkNsYXNzKHNyYzogc3RyaW5nKTogT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdidG4gYnRuLXNtJzogdHJ1ZSxcbiAgICAgICAgICAgICdidG4tb3V0bGluZS1zZWNvbmRhcnknOiBzcmMgIT09IHRoaXMuc3R1ZGVudC5yb2xlLFxuICAgICAgICAgICAgJ2J0bi1zZWNvbmRhcnknOiBzcmMgPT09IHRoaXMuc3R1ZGVudC5yb2xlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gY2xpY2tpbmcgYSByb2xlIGJ1dHRvbiwgdXBkYXRlIHRoZSBzdHVkZW50IHJvbGVcbiAgICogYnkgY2FsbGluZyBzdHVkZW50IHNlcnZpY2VcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiBvbmUgb2YgdGhlIHJvbGUgYnV0dG9uc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0gcm9sZSBvZiBidXR0b24gcHVzaGVkXG4gICAqL1xuICAgIGNsaWNrQnV0dG9uKHNyYzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLnNldFN0dWRlbnRSb2xlKHRoaXMuX2FkbWluLmlkLCB0aGlzLnN0dWRlbnQudXNlcklkLCBzcmMpXG4gICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50ID0gcmVzO1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgZGVsZXRlIGJ1dHRvbiBzaG91bGQgYmUgZGlzYWJsZWRcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gYHRydWVgIGlmIHZpZXdpbmcgcGFnZSBvZiBsb2dnZWQgaW4gdXNlciBvciBpZiBzdHVkZW50IGlzIGFuIGFkbWluXG4gICAqIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBkZWxldGVEaXNhYmxlZCgpe1xuICAgIGlmKHRoaXMuX2FkbWluID09PSB1bmRlZmluZWQpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmKHRoaXMuc3R1ZGVudC51c2VySWQgPT09IHRoaXMuX2FkbWluLmlkKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYodGhpcy5zdHVkZW50LnJvbGUgPT09ICdhZG1pbicpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLSB3aGVuIGNsaWNraW5nIGRlbGV0ZSBidXR0b24sIG9wZW4gYSBtb2RhbCBkaWFsb2cgdG8gY29uZmlybSBkZWxldGVcbiAgICogLSBpZiBjb25maXJtLCBkZWxldGUgYW5kIHJlZGlyZWN0IHRvIHN0dWRlbnRzXG4gICAqIC0gb3RoZXJ3aXNlLCBkbyBub3RoaW5nXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2YgdGhlIFwiRGVsZXRlXCIgYnV0dG9uXG4gICAqL1xuICBjaGVja0RlbGV0ZSgpe1xuICAgIGNvbnN0IG1vZGVsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudCwge3NpemU6ICdzbSd9KTtcbiAgICBtb2RlbFJlZi5jb21wb25lbnRJbnN0YW5jZS5tZXNzYWdlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/JztcblxuICAgIG1vZGVsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpPT57XG4gICAgICBpZihyZXN1bHQgPT09ICdkZWxldGUnKXtcbiAgICAgICAgdGhpcy5fY2FsbERlbGV0ZSgpO1xuICAgICAgfVxuICAgIH0sIChkaXNtaXNzKT0+e1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiB3aGljaCBpbXBsZW1lbnRzIGRlbGV0ZSBzdHVkZW50IGFmdGVyIHVzZXJcbiAgICogY29uZmlybWVkIGRlbGV0aW9uXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NhbGxEZWxldGUoKXtcbiAgICB0aGlzLl9zdHVkZW50U2VydmljZS5kZWxldGVTdHVkZW50KHRoaXMuX2FkbWluLmlkLCB0aGlzLnN0dWRlbnQudXNlcklkKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgLy8gc3VjY2Vzc2Z1bFxuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL3N0dWRlbnRzJ10pO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGNvbXBvbmVudCBieSB1bnN1YnNjcmliaW5nIHRvIHRoZSBzZXJ2aWNlc1xuICAgKiBUaGlzIHByZXZlbnRzIGEgbWVtb3J5IGxlYWtcbiAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuXG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtaW5kaXYvc3R1ZGVudC1pbmRpdi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc3R1ZGVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDb3Vyc2UsIEFkbWluU3R1ZGVudCwgU2NlbmFyaW8sIFN0dWRlbnRQaGFnZSwgU3R1ZGVudEZyaWRnZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB2aWV3IHRoZSBwaGFnZSBzdHJhaW5zIGZvciBhIHNwZWNpZmljIHN0dWRlbnRcbiAqIGFuZCBzY2VuYXJpb1xuICpcbiAqIEFkbWluIGlzIGFibGUgdG8gc2VlIGVhY2ggcGhhZ2UncyBtdXRhdGlvbnMsIGRlbGV0aW9ucywgY29tbWVudHMsIGFuZCBwb3NzaWJseSBtdXRhdGlvbiBndWVzc2VzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0dWRlbnQtZnJpZGdlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc3R1ZGVudC1mcmlkZ2UudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgU3R1ZGVudEZyaWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEZyaWRnZSBvYmplY3QgKGlmIGl0IGV4aXN0cylcbiAgICovXG4gIHByb3RlY3RlZCBmcmlkZ2U6IFN0dWRlbnRGcmlkZ2U7XG4gIC8qKlxuICAgKiBJZiBmcmlkZ2UgZXhpc3RzIGRldGVybWluZSBieSBpZiB0aGlzLmZyaWRnZSBoYXMgc3RyYWluc1xuICAgKi9cbiAgcHJvdGVjdGVkIGhhc0ZyaWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogQm9vbGVhbiBzdGF0ZSB2YXJpYWJsZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbSBtdWx0aXBsZSBvYnNlcnZhYmxlcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBmb3IgVVJMIHBhcmFtZXRlcnNcbiAgICovXG4gIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuXG4gIC8qKlxuICAgKiBPcHRpb24gdG8gc2hvdyBhbGwgc3RyYWlucyBpbiBmcmlkZ2Ugb3JcbiAgICogb25seSBzdHJhaW5zIG9mIGludGVyZXN0IGZvciBncmFkaW5nICh1bmtub3duXG4gICAqIGFuZCBzdWJtaXR0ZWQpXG4gICAqXG4gICAqIFNob3VsZCBiZSBgXCJhbGxcImAgb3IgYFwiZ3JhZGVkXCJgXG4gICAqL1xuICBwcml2YXRlIHZpZXdTdHJhaW5zOiBzdHJpbmcgPSAnYWxsJztcbiAgLyoqXG4gICAqIExpc3Qgb2YgcGhhZ2UgY3VycmVudGx5IGJlaW5nIHZpZXdlZFxuICAgKi9cbiAgcHJpdmF0ZSBzdHJhaW5MaXN0OiBTdHVkZW50UGhhZ2VbXTtcbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgX3N0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgdmlld1xuICAgKiAxLiBHZXQgc3R1ZGVudElkLCBzY2VuYXJpb0lkLCBhbmQgYWRtaW5cbiAgICogMi4gR2V0IHRoZSBmcmlkZ2VcbiAgICogMy4gSWYgdGhlIGZyaWRnZSBleGlzdHNcbiAgICogM2EuIGFkZCB0aGUgXCJndWVzc2VzXCIgdG8gZWFjaCBzdHJhaW5cbiAgICogM2IuIHNvcnQgdGhlIHN0cmFpbnMgYnkgc3RyYWluIG51bWJlclxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBsZXQgc3R1ZGVudElkID0gcGFyYW1zWydzdHVkZW50SWQnXTtcbiAgICAgIGxldCBzY2VuSWQgPSBwYXJhbXNbJ3NjZW5JZCddO1xuICAgICAgbGV0IGFkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuXG4gICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRGcmlkZ2UoYWRtaW4uaWQsIHN0dWRlbnRJZCwgc2NlbklkKVxuICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChmcmlkZ2UpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5mcmlkZ2UgPSBmcmlkZ2U7XG4gICAgICAgICAgICAgIHRoaXMuaGFzRnJpZGdlID0gKGZyaWRnZS5zdHJhaW5zICE9PSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICBpZih0aGlzLmhhc0ZyaWRnZSl7XG4gICAgICAgICAgICAgICAgbGV0IGd1ZXNzZXMgPSBKU09OLnBhcnNlKHRoaXMuZnJpZGdlLmd1ZXNzZXMpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgc3RyYWluIG9mIHRoaXMuZnJpZGdlLnN0cmFpbnMpe1xuICAgICAgICAgICAgICAgICAgbGV0IHggPSBndWVzc2VzW3N0cmFpbi5zdHJhaW5OdW1dO1xuICAgICAgICAgICAgICAgICAgaWYoeCl7XG4gICAgICAgICAgICAgICAgICAgIHN0cmFpbi5ndWVzc2VzID0geDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc3RyYWluLmd1ZXNzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mcmlkZ2Uuc3RyYWlucy5zb3J0KChhLGIpPT57cmV0dXJuIGEuc3RyYWluTnVtIC0gYi5zdHJhaW5OdW19KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNldFBoYWdlKCdhbGwnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSBDU1MgY2xhc3MgZm9yIHRoZSB2aWV3IHN0cmFpbnMgYnV0dG9uIGRlcGVuZGluZyBvbiBzZWxlY3RlZCBvcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIGJ1dHRvbiBkZXRlcm1pbmluZyBjbGFzc2VzIGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjbGFzc2VzIHdoaWNoIGFwcHkgdG8gdGhpcyBidXR0b24gaW4gdGhlIGZvcm0ge1wiY2xhc3NcIjogYm9vbGVhbiwgLi4ufVxuICAgKlxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5WaWV3IHN0cmFpbnMgaXMgXCJhbGxcIjwvY2FwdGlvbj5cbiAgICogZ2V0QnV0dG9uQ2xhc3MoJ2FsbCcpIC0+IHsnYnRuIGJ0bi1zbWFsbCc6IHRydWUsICdidG4tcHJpbWFyeSc6IHRydWUsICdidG4tcHJpbWFyeS1vdXRsaW5lJzogZmFsc2V9XG4gICAqIGdldEJ1dHRvbkNsYXNzKCdncmFkZWQnKSAtPiB7J2J0biBidG4tc21hbGwnOiB0cnVlLCAnYnRuLXByaW1hcnknOiBmYWxzZSwgJ2J0bi1wcmltYXJ5LW91dGxpbmUnOiB0cnVlfVxuICAgKi9cbiAgZ2V0QnV0dG9uQ2xhc3Moc3JjOiBzdHJpbmcpOiBPYmplY3R7XG4gICAgcmV0dXJuIHtcbiAgICAgICdidG4gYnRuLXNtJzogdHJ1ZSxcbiAgICAgICdidG4tcHJpbWFyeSc6IChzcmMgPT09IHRoaXMudmlld1N0cmFpbnMpLFxuICAgICAgJ2J0bi1vdXRsaW5lLXByaW1hcnknOiAoc3JjICE9PSB0aGlzLnZpZXdTdHJhaW5zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGUgdGhlIGxpc3Qgb2YgdmlzaWJsZSBwaGFnZSBhcHByb3ByaWF0ZWx5XG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2YgXCJWaWV3IFN0cmFpblwiIGJ1dHRvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0gYnV0dG9uIHdoaWNoIHdhcyBjbGlja2VkO1xuICAgKiBTaG91bGQgYmUgb25lIG9mIGBbXCJhbGxcIiwgXCJncmFkZWRcIl1gXG4gICAqL1xuICBzZXRQaGFnZShzcmM6IHN0cmluZyl7XG4gICAgdGhpcy52aWV3U3RyYWlucyA9IHNyYztcbiAgICBpZih0aGlzLnZpZXdTdHJhaW5zID09PSAnYWxsJyl7XG4gICAgICB0aGlzLnN0cmFpbkxpc3QgPSB0aGlzLmZyaWRnZS5zdHJhaW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0cmFpbkxpc3QgPSB0aGlzLmZyaWRnZS5zdHJhaW5zLmZpbHRlcigoc3RyYWluKT0+e1xuICAgICAgICBpZihzdHJhaW4ucGhhZ2VUeXBlID09PSAndW5rbm93bicpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYoc3RyYWluLnBoYWdlVHlwZSA9PT0gJ3VzZXInICYmIHN0cmFpbi5zdWJtaXR0ZWQpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdG9yeWluZyB0aGUgY29tcG9uZW50LCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIGFuZFxuICAgKiBvYnNlcnZhYmxlcyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtZnJpZGdlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgU3R1ZGVudFNlcnZpY2UgfSBmcm9tICcuLi9zdHVkZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbmltcG9ydCB7IENvdXJzZSwgQWRtaW5TdHVkZW50LCBTY2VuYXJpbywgTWVuZGVscGVkZVBlZGUsIFN0dWRlbnRNZW5kZWxGcmlkZ2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3R1ZGVudC1tZW5kZWwtZnJpZGdlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc3R1ZGVudC1tZW5kZWwtZnJpZGdlLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi4vLi4vLi4vbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLnN0eWxlLmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIFN0dWRlbnRNZW5kZWxGcmlkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBGcmlkZ2Ugb2JqZWN0IChpZiBpdCBleGlzdHMpXG4gICAqL1xuICBwcm90ZWN0ZWQgZnJpZGdlOiBTdHVkZW50TWVuZGVsRnJpZGdlO1xuICAvKipcbiAgICogSWYgZnJpZGdlIGV4aXN0cyBkZXRlcm1pbmUgYnkgaWYgdGhpcy5mcmlkZ2UgaGFzIHN0cmFpbnNcbiAgICovXG4gIHByb3RlY3RlZCBoYXNGcmlkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEJvb2xlYW4gc3RhdGUgdmFyaWFibGUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gbXVsdGlwbGUgb2JzZXJ2YWJsZXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gZm9yIFVSTCBwYXJhbWV0ZXJzXG4gICAqL1xuICBwcml2YXRlIHBhcmFtT2JzZXJ2ZXI6IGFueTtcblxuICBwcml2YXRlIGN1cnJHZW5vRmFjdHM6IGFueTtcblxuICBwcm90ZWN0ZWQgaXNRdWl6OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIE9wdGlvbiB0byBzaG93IGFsbCBzdHJhaW5zIGluIGZyaWRnZSBvclxuICAgKiBvbmx5IHN0cmFpbnMgb2YgaW50ZXJlc3QgZm9yIGdyYWRpbmcgKHVua25vd25cbiAgICogYW5kIHN1Ym1pdHRlZClcbiAgICpcbiAgICogU2hvdWxkIGJlIGBcImFsbFwiYCBvciBgXCJncmFkZWRcImBcbiAgICovXG4gIC8vcHJpdmF0ZSB2aWV3U3RyYWluczogc3RyaW5nID0gJ2FsbCc7XG4gIC8qKlxuICAgKiBMaXN0IG9mIHBoYWdlIGN1cnJlbnRseSBiZWluZyB2aWV3ZWRcbiAgICovXG4gIHBlZGVzOiBNZW5kZWxwZWRlUGVkZVtdO1xuICAvKipcbiAgICogRXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2Upe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgfVxuICAvKipcbiAgICogR2V0cyBDU1MgY2xhc3NlcyBcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gY2xhc3NlcyB3aFxuICAgKi9cblxuICBnZXRNZW5kZWxwZWRlKHBoZW5vdHlwZTogc3RyaW5nW10pOiBPYmplY3R7XG4gICAgdmFyIG1wZWRlQ3NzQ2xhc3M6IHt9ID0ge307XG4gICAgXG4gICAgLy8gY3JlYXRlIGNzcyBjbGFzc2VzIHVzaW5nIHRyYWl0c1xuICAgIHZhciBzZWdjb2w6IHN0cmluZyA9ICdtcGVkZS1ib2R5Y29sLScrcGhlbm90eXBlWzJdO1xuICAgIHZhciBleWVjb2w6IHN0cmluZyA9ICdtcGVkZS1leWVjb2wtJytwaGVub3R5cGVbMV1cbiAgICB2YXIgaW11cmw6IHN0cmluZyA9ICdtcGVkZS1wZWRlLScrcGhlbm90eXBlWzBdLnRvTG93ZXJDYXNlKCkrJy1zZWcnK3BoZW5vdHlwZVs0XSsnLWxlZycrcGhlbm90eXBlWzNdKyctbWluJ1xuICAgIG1wZWRlQ3NzQ2xhc3Nbc2VnY29sXSA9IHRydWVcbiAgICBtcGVkZUNzc0NsYXNzW2V5ZWNvbF0gPSB0cnVlXG4gICAgbXBlZGVDc3NDbGFzc1tpbXVybF0gPSB0cnVlXG4gICAgbXBlZGVDc3NDbGFzc1snc2l6ZUknXSA9IHRydWVcbiAgICByZXR1cm4gbXBlZGVDc3NDbGFzc1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIHZpZXdcbiAgICogMS4gR2V0IHN0dWRlbnRJZCwgc2NlbmFyaW9JZCwgYW5kIGFkbWluXG4gICAqIDIuIEdldCB0aGUgZnJpZGdlXG4gICAqIDMuIElmIHRoZSBmcmlkZ2UgZXhpc3RzXG4gICAqIDNhLiBhZGQgdGhlIFwiZ3Vlc3Nlc1wiIHRvIGVhY2ggc3RyYWluXG4gICAqIDNiLiBzb3J0IHRoZSBzdHJhaW5zIGJ5IHN0cmFpbiBudW1iZXJcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgbGV0IHN0dWRlbnRJZCA9IHBhcmFtc1snc3R1ZGVudElkJ107XG4gICAgICBsZXQgc2NlbklkID0gcGFyYW1zWydzY2VuU2hvcnRDb2RlJ107XG4gICAgICBsZXQgYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG5cbiAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldE1lbmRlbEZyaWRnZShhZG1pbi5pZCwgc3R1ZGVudElkLCBzY2VuSWQpXG4gICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKG1mcmlkZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd3ZSBnb3QgZnJpZGdlIGZyb20gZGInKVxuICAgICAgICAgICAgICB0aGlzLmZyaWRnZSA9IG1mcmlkZ2U7XG4gICAgICAgICAgICAgIHRoaXMuZnJpZGdlLm93bmVyID0gbWZyaWRnZS5vd25lcjtcbiAgICAgICAgICAgICAgaWYodGhpcy5mcmlkZ2Uuc2NlbmFyaW8uc2NlbkNvZGUudG9VcHBlckNhc2UoKS5pbmNsdWRlcygnUVVJWicpKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUXVpeiA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYobWZyaWRnZS5nZW5vRmFjdHMpe1xuICAgICAgICAgICAgICAgIHRoaXMuY3Vyckdlbm9GYWN0cyA9IEpTT04ucGFyc2UobWZyaWRnZS5nZW5vRmFjdHMpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3Vyckdlbm9GYWN0cyAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhhc0ZyaWRnZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3dlIGdvdCBmcmlkZ2UnKVxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZnJpZGdlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGhlIENTUyBjbGFzcyBmb3IgdGhlIHZpZXcgc3RyYWlucyBidXR0b24gZGVwZW5kaW5nIG9uIHNlbGVjdGVkIG9wdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0gYnV0dG9uIGRldGVybWluaW5nIGNsYXNzZXMgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGNsYXNzZXMgd2hpY2ggYXBweSB0byB0aGlzIGJ1dHRvbiBpbiB0aGUgZm9ybSB7XCJjbGFzc1wiOiBib29sZWFuLCAuLi59XG4gICAqXG4gICAqIEBleGFtcGxlIDxjYXB0aW9uPlZpZXcgc3RyYWlucyBpcyBcImFsbFwiPC9jYXB0aW9uPlxuICAgKiBnZXRCdXR0b25DbGFzcygnYWxsJykgLT4geydidG4gYnRuLXNtYWxsJzogdHJ1ZSwgJ2J0bi1wcmltYXJ5JzogdHJ1ZSwgJ2J0bi1wcmltYXJ5LW91dGxpbmUnOiBmYWxzZX1cbiAgICogZ2V0QnV0dG9uQ2xhc3MoJ2dyYWRlZCcpIC0+IHsnYnRuIGJ0bi1zbWFsbCc6IHRydWUsICdidG4tcHJpbWFyeSc6IGZhbHNlLCAnYnRuLXByaW1hcnktb3V0bGluZSc6IHRydWV9XG4gICBcbiAgZ2V0QnV0dG9uQ2xhc3Moc3JjOiBzdHJpbmcpOiBPYmplY3R7XG4gICAgcmV0dXJuIHtcbiAgICAgICdidG4gYnRuLXNtJzogdHJ1ZSxcbiAgICAgICdidG4tcHJpbWFyeSc6IChzcmMgPT09IHRoaXMudmlld1N0cmFpbnMpLFxuICAgICAgJ2J0bi1vdXRsaW5lLXByaW1hcnknOiAoc3JjICE9PSB0aGlzLnZpZXdTdHJhaW5zKVxuICAgIH1cbiAgfVxuKi9cbiAgLyoqXG4gICAqIHVwZGF0ZSB0aGUgbGlzdCBvZiB2aXNpYmxlIHBoYWdlIGFwcHJvcHJpYXRlbHlcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiBcIlZpZXcgU3RyYWluXCIgYnV0dG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgLSBidXR0b24gd2hpY2ggd2FzIGNsaWNrZWQ7XG4gICAqIFNob3VsZCBiZSBvbmUgb2YgYFtcImFsbFwiLCBcImdyYWRlZFwiXWBcbiAgXG4gIHNldFBoYWdlKHNyYzogc3RyaW5nKXtcbiAgICB0aGlzLnZpZXdTdHJhaW5zID0gc3JjO1xuICAgIGlmKHRoaXMudmlld1N0cmFpbnMgPT09ICdhbGwnKXtcbiAgICAgIHRoaXMuc3RyYWluTGlzdCA9IHRoaXMuZnJpZGdlLnN0cmFpbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RyYWluTGlzdCA9IHRoaXMuZnJpZGdlLnN0cmFpbnMuZmlsdGVyKChzdHJhaW4pPT57XG4gICAgICAgIGlmKHN0cmFpbi5waGFnZVR5cGUgPT09ICd1bmtub3duJyl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZihzdHJhaW4ucGhhZ2VUeXBlID09PSAndXNlcicgJiYgc3RyYWluLnN1Ym1pdHRlZCl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAqL1xuICAvKipcbiAgICogV2hlbiBkZXN0b3J5aW5nIHRoZSBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgYW5kXG4gICAqIG9ic2VydmFibGVzIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1tZW5kZWwtZnJpZGdlL3N0dWRlbnQtbWVuZGVsLWZyaWRnZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSZXNvbHZlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3R1ZGVudFNlcnZpY2UgfSBmcm9tICcuL3N0dWRlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBZG1pblN0dWRlbnQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlJztcblxuLyoqXG4gKiAtIE5lZWRlZCBmb3IgYnJlYWRjcnVtYnNcbiAqIC0gUmVzb2x2ZXMgdGhlIHN0dWRlbnRJZCBpbiB0aGUgVVJMIHRvIHRoZSBzdHVkZW50IGl0IHJlcHJlc2VudHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0dWRlbnRSZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8QWRtaW5TdHVkZW50PiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7IH1cblxuICAvKipcbiAgICogQmFzZWQgb24gdGhlIFVSTCBgc3R1ZGVudElkYCBwYXJhbWV0ZXIsIGZpbmQgdGhlIHVzZXJcbiAgICogaXQgYmVsb25ncyB0b1xuICAgKlxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIC0gcm91dGUgVVJMIGF0IHRoZSBtb21lbnRcbiAgICogQHBhcmFtIHtSb3V0ZXJTdGF0ZVNuYXBzaG90fSBzdGF0ZSAtIHJvdXRlciBzdGF0ZTsgbmVlZGVkIHRvIGltcGxlbWVudCBpbnRlcmZhY2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50Pn0gVGhlIHN0dWRlbnQgdGhlIGlkIGJlbG9uZ3MgdG9cbiAgICogb3IgYW4gZW1wdHkgb2JzZXJ2YWJsZSBpZiB0aGUgaWQgZG9lc24ndCBiZWxvbmcgdG8gYW55b25lXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD4ge1xuICAgIGxldCBhZG1pbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcblxuICAgIGNvbnN0IHN0dWRlbnROdW0gPSByb3V0ZS5wYXJhbXNbJ3N0dWRlbnRJZCddO1xuXG4gICAgaWYgKHN0dWRlbnROdW0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRTdHVkZW50KGFkbWluLmlkLCBzdHVkZW50TnVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQucmVzb2x2ZXIudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdHVkZW50TGlzdENvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R1ZGVudEluZGl2Q29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYuY29tcG9uZW50JztcbmltcG9ydCB7IFN0dWRlbnRGcmlkZ2VDb21wb25lbnQgfSBmcm9tICcuL3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtZnJpZGdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHVkZW50TWVuZGVsRnJpZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LW1lbmRlbC1mcmlkZ2Uvc3R1ZGVudC1tZW5kZWwtZnJpZGdlLmNvbXBvbmVudCdcblxuaW1wb3J0IHsgU2NlbmFyaW9SZXNvbHZlciB9IGZyb20gJy4uLy4uL2NyaWNrZXQvc2NlbmFyaW8ucmVzb2x2ZXInO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9tZW5kZWxwZWRlL21lbmRlbHBlZGUtc2NlbmFyaW8ucmVzb2x2ZXInO1xuaW1wb3J0IHsgU3R1ZGVudFJlc29sdmVyIH0gZnJvbSAnLi9zdHVkZW50LnJlc29sdmVyJztcblxuZXhwb3J0IGNvbnN0IFN0dWRlbnRSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge3BhdGg6ICcnLFxuICAgY2hpbGRyZW46IFtcbiAgICAge1xuICAgIHBhdGg6ICc6c3R1ZGVudElkJyxcbiAgICByZXNvbHZlOiB7c3R1ZGVudDogU3R1ZGVudFJlc29sdmVyfSxcbiAgICBkYXRhOiB7YnJlYWRjcnVtYnM6ICd7eyBzdHVkZW50LmZpcnN0TmFtZSB9fSB7eyBzdHVkZW50Lmxhc3ROYW1lIH19J30sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICBwYXRoOiAnY3JpY2tldC86c2NlbklkJyxcbiAgICBjb21wb25lbnQ6IFN0dWRlbnRGcmlkZ2VDb21wb25lbnQsXG4gICAgICAgIHJlc29sdmU6IHtzY2VuYXJpbzogU2NlbmFyaW9SZXNvbHZlcn0sXG4gICAgICAgIGRhdGE6IHticmVhZGNydW1iczogJ3t7IHNjZW5hcmlvLmxhYmVsIH19J31cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdtZW5kZWxwZWRlLzpzY2VuU2hvcnRDb2RlJyxcbiAgICBjb21wb25lbnQ6IFN0dWRlbnRNZW5kZWxGcmlkZ2VDb21wb25lbnQsXG4gICAgcmVzb2x2ZToge21lbmRlbHBlZGVTY2VuYXJpbzogTWVuZGVscGVkZVNjZW5hcmlvUmVzb2x2ZXJ9LFxuICAgIGRhdGE6IHticmVhZGNydW1iczogJ3t7IG1lbmRlbHBlZGVTY2VuYXJpby5sYWJlbCB9fSd9XG4gIH0sXG4gICAgICB7cGF0aDogJycsXG4gICAgICAgY29tcG9uZW50OiBTdHVkZW50SW5kaXZDb21wb25lbnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFN0dWRlbnRMaXN0Q29tcG9uZW50XG4gIH1cbiAgIF1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLyoqXG4gKiBMaXN0IG9mIHVzZXIgcm9sZXMgd2l0aCB0aGVpciBudW1lcmljIHZhbHVlIChgdmFsdWVgKSwgc3RyaW5nIHZhbHVlXG4gKiB1c2VkIGJ5IE1vbmdvREIgKGBrZXlgKSwgYW5kIHN0cmluZyBkaXNwbGF5ZWQgb24gd2VicGFnZSAoYGxhYmVsYClcbiAqL1xuZXhwb3J0IGNvbnN0IFN0dWRlbnRSb2xlc0FycmF5OiBhbnkgPSBbXG4gIHtcbiAgICBrZXk6ICdzdHVkZW50JyxcbiAgICBsYWJlbDogJ1N0dWRlbnQnLFxuICAgIHZhbHVlOiAwXG4gIH0sIHtcbiAgICBrZXk6ICdpbnN0cicsXG4gICAgbGFiZWw6ICdJbnN0cnVjdG9yJyxcbiAgICB2YWx1ZTogMVxuICB9LCB7XG4gICAga2V5OiAnYWRtaW4nLFxuICAgIGxhYmVsOiAnQWRtaW5pc3RyYXRvcicsXG4gICAgdmFsdWU6IDJcbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5yb2xlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtaW5kaXYvc3R1ZGVudC1pbmRpdi50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NjBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtZnJpZGdlLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LWZyaWRnZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NjFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbWVuZGVsLWZyaWRnZS9zdHVkZW50LW1lbmRlbC1mcmlkZ2UudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbWVuZGVsLWZyaWRnZS9zdHVkZW50LW1lbmRlbC1mcmlkZ2UudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHVkZW50UGhhZ2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3BoYWdlLmludGVyZmFjZSc7XG5cbi8qKlxuICogU21hbGwgY29tcG9uZW50IHdoaWNoIGVuY29tcGFzc2VzIGEgc2luZ2xlIHBoYWdlIHN0cmFpbiBiZWluZyB2aWV3ZWRcbiAqIHdpdGhpbiBhIHN0dWRlbnQncyBmcmlkZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3R1ZGVudC1waGFnZScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3N0dWRlbnQtcGhhZ2UudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgU3R1ZGVudFBoYWdlQ29tcG9uZW50e1xuXG4gIC8qKlxuICAgKiBUaGUgcGhhZ2Ugd2hpY2ggdGhlIGNvbXBvbmVudCBpcyBjcmVhdGVkIGZvclxuICAgKi9cbiAgQElucHV0KCkgcGhhZ2U6IFN0dWRlbnRQaGFnZTtcblxuICBjb25zdHJ1Y3Rvcigpe31cblxuICAvKipcbiAgICogUHJvZHVjZXMgZm9ybWF0dGVkIHN0cmluZyBiYXNlZCBvbiBwaGFnZSB0eXBlIGFuZCBpZiBwaGFnZSBpc1xuICAgKiBzdWJtaXR0ZWQgdG8gYmUgZ3JhZGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGZvcm1hdHRlZCBzdHJpbmdcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogcmVmZXJlbmNlIHBoYWdlIC0+IFwiUkVGRVJFTkNFXCJcbiAgICogc2NlbmFyaW8gdW5rbm93biBwaGFnZSAtPiBcIlVOS09XTlwiXG4gICAqIHVzZXIgcGhhZ2UsIG5vdCBzdW1pdHRlZCAtPiBcIlVTRVJcIlxuICAgKiBzdWJtaXR0ZWQgcGhhZ2UgLT4gXCJTVUJNSVNTSU9OXCJcbiAgICovXG4gIGZvcm1hdFBoYWdlVHlwZSgpOiBzdHJpbmd7XG4gICAgaWYodGhpcy5waGFnZSl7XG4gICAgICBsZXQgdCA9IHRoaXMucGhhZ2UucGhhZ2VUeXBlO1xuICAgICAgaWYodGhpcy5waGFnZS5waGFnZVR5cGUgPT09ICd1c2VyJyAmJiB0aGlzLnBoYWdlLnN1Ym1pdHRlZCl7XG4gICAgICAgIHJldHVybiAnU1VCTUlTU0lPTidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBoYWdlLnBoYWdlVHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtcGhhZ2UuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtcGhhZ2UudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtcGhhZ2UudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ3JpY2tldEdsb2JhbHMgfSBmcm9tICcuLi9jcmlja2V0L2NyaWNrZXQuZ2xvYmFscyc7XG5cbi8qKlxuICogRm9ybWF0IHRoZSB0ZXh0dWFsIHByZXNlbnRhdGlvbiBvZiB0aGUgZGVsZXRpb24gZ3Vlc3NzZXMgZm9yXG4gKiBhIHVzZXIncyBwaGFnZSBzdHJhaW47IHVzZXMgYSBbc2NlbmFyaW8gZ2xvYmFsXXtAbGlua1xuICogQ3JpY2tldEdsb2JhbHN9IHZhcmlhYmxlIGBkZWxldGlvbkd1ZXNzTGVuZ3RoYCB0byBkZXRlcm1pbmVcbiAqIHRoZSByYW5nZXNcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBndWVzc0xpc3QgfCBwaGFnZUd1ZXNzZXMgfX1gXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+T25lIGRlbGV0aW9uIGd1ZXNzOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+W2ZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgLi4uXTwvY29kZT4gYmVjb21lcyBcIjEwLTQwXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk5vIGRlbGV0aW9uIGd1ZXNzZXM6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5bZmFsc2UsIC4uLiwgZmFsc2VdPC9jb2RlPiBiZWNvbWVzIFwiTm9uZVwiXG4gKi9cblxuQFBpcGUoe25hbWU6ICdwaGFnZUd1ZXNzZXMnfSlcbmV4cG9ydCBjbGFzcyBQaGFnZUd1ZXNzZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGd1ZXNzZXM6IGJvb2xlYW5bXSk6IHN0cmluZyB7XG4gICAgbGV0IHN0ZXBTaXplID0gQ3JpY2tldEdsb2JhbHMuZGVsZXRpb25HdWVzc0xlbmd0aDtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgbGV0IHg9LTE7XG4gICAgZm9yKGxldCBpIGluIGd1ZXNzZXMpe1xuICAgICAgbGV0IHk6IG51bWJlciA9ICtpO1xuICAgICAgLy8gc3RhcnQgbmV3IGRlbGV0aW9uXG4gICAgICBpZih4IDwgMCAmJiBndWVzc2VzW3ldKXtcbiAgICAgICAgeCA9IHN0ZXBTaXplICogeTtcbiAgICAgIH0gLy8gZW5kIGEgZGVsZXRpb25cbiAgICAgIGVsc2UgaWYoeCA+PSAwICYmIGd1ZXNzZXNbeV0gPT09IGZhbHNlKXtcbiAgICAgICAgbGV0IHogPSAoc3RlcFNpemUgKiB5KTtcbiAgICAgICAgb3V0ICs9IChvdXQgPT09ICcnID8gJycgOiAnLCAnKTtcbiAgICAgICAgb3V0ICs9IHggKyAnIC0gJyArIHo7XG4gICAgICAgIHggPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2hlY2sgZm9yIHRoZSBsYXN0IHBvc3NpYmxlIGRlbGV0aW9uXG4gICAgaWYoeCAhPSAtMSl7XG4gICAgICBvdXQgKz0gKG91dCA9PT0gJycgPyAnJyA6ICcsICcpO1xuICAgICAgb3V0ICs9IHggKyAnIC0gJyArIENyaWNrZXRHbG9iYWxzLmdlbmVMZW5ndGg7XG4gICAgfVxuICAgIGlmKG91dCA9PT0gJycpe1xuICAgICAgcmV0dXJuICdOb25lJztcbiAgICB9IGVsc2Uge1xuICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9waGFnZS1ndWVzc2VzLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IHRoZSB0ZXh0dWFsIHByZXNlbnRhdGlvbiBvZiBhIHBoYWdlIHN0cmFpbidzIGZyYW1lc2hpZnQgbXV0YXRpb25zIChpZiBhbnkpXG4gKlxuICogKipVc2FnZToqKiBge3sgbXV0YXRpb25MaXN0IHwgcGhhZ2VNdXRhdGlvbnMgfX1gXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+T25lIG5lZ2F0aXZlIGZyYW1lc2hpZnQgbXV0YXRpb246ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5bLTg3XTwvY29kZT4gYmVjb21lcyBcIi0xIGF0IDg3XCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk9uZSBwb3NpdGl2ZSBmcmFtZXNoaWZ0IG11dGF0aW9uOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+WzE2M108L2NvZGU+IGJlY29tZXMgXCIrMSBhdCAxNjNcIlxuICogQGV4YW1wbGUgPGNhcHRpb24+TXVsdGlwbGUgZnJhbWVzaGlmdCBtdXRhdGlvbnM6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5bMzIsIC0yMDhdPC9jb2RlPiBiZWNvbWVzIFwiKzEgYXQgMzIsIC0xIGF0IDIwOFwiXG4gKi9cbkBQaXBlKHtuYW1lOiAncGhhZ2VNdXRhdGlvbnMnfSlcbmV4cG9ydCBjbGFzcyBQaGFnZU11dGF0aW9uc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0obXV0YXRpb25zOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgbGV0IG91dCA9ICcnO1xuICAgIGZvcihsZXQgeCBvZiBtdXRhdGlvbnMpe1xuICAgICAgb3V0ICs9IChvdXQgPT09ICcnID8gJycgOiAnLCAnKTtcbiAgICAgIGxldCB5ID0gKHggPiAwID8gJysxJyA6ICctMScpO1xuICAgICAgbGV0IHogPSBNYXRoLmFicyh4KTtcbiAgICAgIG91dCArPSB5ICsgJyBhdCAnICsgejtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcGlwZXMvcGhhZ2UtbXV0YXRpb25zLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IHRoZSB0ZXh0dWFsIHByZXNlbnRhdGlvbiBvZiBhIHBoYWdlIHN0cmFpbidzIGRlbGV0aW9ucyAoaWYgYW55KVxuICpcbiAqICoqVXNhZ2U6KiogYHt7IGRlbGV0aW9ubGlzdCB8IHBoYWdlRGVsZXRpb25zIH19YFxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk9uZSBkZWxldGlvbjogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPls1MCwxNDVdPC9jb2RlPiBiZWNvbWVzIFwiNTAgLSAxNDVcIlxuICogQGV4YW1wbGUgPGNhcHRpb24+TXVsdGlwbGUgZGVsZXRpb25zOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+WzUwLCAxNDAsIDE5MCwgMjYwXTwvY29kZT4gYmVjb21lcyBcIjUwIC0gMTQwLCAxOTAgLSAyNjBcIlxuICovXG5AUGlwZSh7bmFtZTogJ3BoYWdlRGVsZXRpb25zJ30pXG5leHBvcnQgY2xhc3MgUGhhZ2VEZWxldGlvbnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGRlbGV0aW9uOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgbGV0IG91dCA9ICcnO1xuICAgIGxldCBtTGVuZ3RoID0gKGRlbGV0aW9uLmxlbmd0aCAlIDIgPT09IDAgPyBkZWxldGlvbi5sZW5ndGggOiBkZWxldGlvbi5sZW5ndGggLTEpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1MZW5ndGg7IGkrPSAyKXtcbiAgICAgIG91dCArPSAoaSA+IDEgPyAnLCAnIDogJycpO1xuICAgICAgb3V0ICs9IGRlbGV0aW9uW2ldICsgJyAtICcgKyBkZWxldGlvbltpKzFdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BpcGVzL3BoYWdlLWRlbGV0aW9ucy5waXBlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==