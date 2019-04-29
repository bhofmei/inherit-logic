webpackJsonp([1],{

/***/ 927:
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
const student_routes_1 = __webpack_require__(960);
const student_list_component_1 = __webpack_require__(939);
const student_indiv_component_1 = __webpack_require__(940);
const student_fridge_component_1 = __webpack_require__(941);
const student_mendel_fridge_component_1 = __webpack_require__(942);
const student_phage_component_1 = __webpack_require__(966);
const confirm_delete_dialog_component_1 = __webpack_require__(422);
const student_resolver_1 = __webpack_require__(943);
const phage_guesses_pipe_1 = __webpack_require__(968);
const phage_mutations_pipe_1 = __webpack_require__(969);
const phage_deletions_pipe_1 = __webpack_require__(970);
const pede_phenotype_pipe_1 = __webpack_require__(971);
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
            phage_deletions_pipe_1.PhageDeletionsPipe,
            pede_phenotype_pipe_1.PedePhenotypePipe
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

/***/ 929:
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
const rxjs_1 = __webpack_require__(26);
const student_service_1 = __webpack_require__(421);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(45);
const student_interface_1 = __webpack_require__(930);
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
        templateUrl: __webpack_require__(961)
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        authentication_service_1.AuthenticationService])
], StudentListComponent);
exports.StudentListComponent = StudentListComponent;


/***/ }),

/***/ 940:
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
const authentication_service_1 = __webpack_require__(17);
const student_service_1 = __webpack_require__(421);
const cricket_service_1 = __webpack_require__(121);
const mendelpede_scenarios_service_1 = __webpack_require__(65);
const student_roles_1 = __webpack_require__(962);
const confirm_delete_dialog_component_1 = __webpack_require__(422);
const read_error_1 = __webpack_require__(45);
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
                this._mpedeScenarioService.listScenarios('all').takeUntil(this.isDestroyed$)
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
                                    let score = 'Quiz not submitted yet';
                                    if (mfridge.quiz) {
                                        score = mfridge.quiz.score.toString();
                                    }
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
        return this.scoreMap[scenId] == null ? 'Quiz not submitted' : this.scoreMap[scenId];
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
            'btn btn-sm flex-grow-0': true,
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
        templateUrl: __webpack_require__(963)
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

/***/ 941:
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
const ng_bootstrap_1 = __webpack_require__(70);
const confirm_delete_dialog_component_1 = __webpack_require__(422);
const student_service_1 = __webpack_require__(421);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(45);
let StudentFridgeComponent = class StudentFridgeComponent {
    constructor(_router, _route, _studentService, _authService, _modalService) {
        this._router = _router;
        this._route = _route;
        this._studentService = _studentService;
        this._authService = _authService;
        this._modalService = _modalService;
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
    deleteFridge() {
        const modelRef = this._modalService.open(confirm_delete_dialog_component_1.ConfirmDeleteDialogComponent);
        modelRef.result.then((result) => {
            if (result === 'delete') {
                console.log('DELETE');
            }
        }, (dismiss) => {
            return;
        });
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
        templateUrl: __webpack_require__(964)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        student_service_1.StudentService,
        authentication_service_1.AuthenticationService,
        ng_bootstrap_1.NgbModal])
], StudentFridgeComponent);
exports.StudentFridgeComponent = StudentFridgeComponent;


/***/ }),

/***/ 942:
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
const ng_bootstrap_1 = __webpack_require__(70);
const confirm_delete_dialog_component_1 = __webpack_require__(422);
const student_service_1 = __webpack_require__(421);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(45);
let StudentMendelFridgeComponent = class StudentMendelFridgeComponent {
    constructor(_router, _route, _studentService, _authService, _modalService) {
        this._router = _router;
        this._route = _route;
        this._studentService = _studentService;
        this._authService = _authService;
        this._modalService = _modalService;
        this.hasFridge = false;
        this.isQuizTaken = false;
        this.errorMessage = '';
        console.log('construct');
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        this.paramObserver = this._route.params.subscribe(params => {
            this.studentId = params['studentId'];
            this.scenId = params['scenShortCode'];
            this.admin = this._authService.getUser();
            this._studentService.getMendelFridge(this.admin.id, this.studentId, this.scenId)
                .takeUntil(this.isDestroyed$)
                .subscribe((mfridge) => {
                this.fridge = mfridge;
                this.fridge.owner = mfridge.owner;
                if (this.fridge.quiz) {
                    this.isQuizTaken = true;
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
    checkDeleteStudentFridge() {
        const modelRef = this._modalService.open(confirm_delete_dialog_component_1.ConfirmDeleteDialogComponent, { size: 'sm' });
        modelRef.componentInstance.message = 'Are you sure you want to delete?';
        modelRef.result.then((result) => {
            if (result === 'delete') {
                this.deleteStudentFridge();
            }
        }, (dismiss) => {
            return;
        });
    }
    checkDeleteQuizScore() {
        const modelRef = this._modalService.open(confirm_delete_dialog_component_1.ConfirmDeleteDialogComponent, { size: 'sm' });
        modelRef.componentInstance.message = 'Are you sure you want to delete?';
        modelRef.result.then((result) => {
            if (result === 'delete') {
                this.deleteQuizScore();
            }
        }, (dismiss) => {
            return;
        });
    }
    deleteQuizScore() {
        this.isQuizTaken = false;
        this._studentService.deleteQuizScore(this.admin.id, this.studentId, this.scenId)
            .takeUntil(this.isDestroyed$)
            .subscribe((err) => {
        });
    }
    deleteStudentFridge() {
        this.fridge = null;
        this.hasFridge = false;
        this.currGenoFacts = null;
        this.isQuizTaken = false;
        this._studentService.deleteStudentMendelFridge(this.admin.id, this.studentId, this.scenId)
            .takeUntil(this.isDestroyed$)
            .subscribe((mfridge) => {
            this.fridge = mfridge;
            this.fridge.owner = mfridge.owner;
            if (this.fridge.quiz) {
                this.isQuizTaken = true;
            }
            if (mfridge.genoFacts) {
                this.currGenoFacts = JSON.parse(mfridge.genoFacts);
                if (this.currGenoFacts !== null) {
                    this.hasFridge = true;
                }
            }
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
StudentMendelFridgeComponent = __decorate([
    core_1.Component({
        selector: 'student-mendel-fridge',
        templateUrl: __webpack_require__(965),
        styleUrls: [__webpack_require__(986), __webpack_require__(418)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        student_service_1.StudentService,
        authentication_service_1.AuthenticationService,
        ng_bootstrap_1.NgbModal])
], StudentMendelFridgeComponent);
exports.StudentMendelFridgeComponent = StudentMendelFridgeComponent;


/***/ }),

/***/ 943:
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
const authentication_service_1 = __webpack_require__(17);
const student_service_1 = __webpack_require__(421);
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

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const student_list_component_1 = __webpack_require__(939);
const student_indiv_component_1 = __webpack_require__(940);
const student_fridge_component_1 = __webpack_require__(941);
const student_mendel_fridge_component_1 = __webpack_require__(942);
const scenario_resolver_1 = __webpack_require__(185);
const mendelpede_scenario_resolver_1 = __webpack_require__(186);
const student_resolver_1 = __webpack_require__(943);
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

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-list/student-list.template.html";

/***/ }),

/***/ 962:
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

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-indiv/student-indiv.template.html";

/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-fridge/student-fridge.template.html";

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-mendel-fridge/student-mendel-fridge.template.html";

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
        templateUrl: __webpack_require__(967)
    }),
    __metadata("design:paramtypes", [])
], StudentPhageComponent);
exports.StudentPhageComponent = StudentPhageComponent;


/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-fridge/student-phage.template.html";

/***/ }),

/***/ 968:
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
const cricket_globals_1 = __webpack_require__(929);
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

/***/ 969:
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

/***/ 970:
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


/***/ }),

/***/ 971:
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
let PedePhenotypePipe = class PedePhenotypePipe {
    transform(phenoList) {
        var outStr = 'Dot Color: ' + phenoList[0] + '<br>';
        outStr += 'Eye Color: ' + phenoList[1] + '<br>';
        outStr += 'Segment Color: ' + phenoList[2] + '<br>';
        outStr += 'Number of Legs: ' + phenoList[3] + '<br>';
        outStr += 'Number of Segments: ' + phenoList[4];
        return outStr;
    }
};
PedePhenotypePipe = __decorate([
    core_1.Pipe({ name: 'pedePhenotype' })
], PedePhenotypePipe);
exports.PedePhenotypePipe = PedePhenotypePipe;


/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/student/student-mendel-fridge/student-mendel-fridge.style.css";

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQuZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2ludGVyZmFjZXMvc3R1ZGVudC5pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LWZyaWRnZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbWVuZGVsLWZyaWRnZS9zdHVkZW50LW1lbmRlbC1mcmlkZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnJlc29sdmVyLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnJvbGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWluZGl2L3N0dWRlbnQtaW5kaXYudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1mcmlkZ2UudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1tZW5kZWwtZnJpZGdlL3N0dWRlbnQtbWVuZGVsLWZyaWRnZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LXBoYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1waGFnZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGhhZ2UtZ3Vlc3Nlcy5waXBlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGhhZ2UtbXV0YXRpb25zLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9waGFnZS1kZWxldGlvbnMucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BpcGVzL3BlZGUtcGhlbm90eXBlLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbWVuZGVsLWZyaWRnZS9zdHVkZW50LW1lbmRlbC1mcmlkZ2Uuc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHlDQUErQztBQUMvQyxnREFBMEQ7QUFFMUQsa0RBQWlEO0FBRWpELDBEQUE2RTtBQUM3RSwyREFBZ0Y7QUFDaEYsNERBQW1GO0FBQ25GLG1FQUF1RztBQUN2RywyREFBaUY7QUFDakYsbUVBQTRGO0FBRTVGLG9EQUFxRDtBQUNyRCxzREFBa0U7QUFDbEUsd0RBQXNFO0FBQ3RFLHdEQUFzRTtBQUN0RSx1REFBb0U7QUE0QnBFLElBQWEsYUFBYSxHQUExQjtDQUE2QjtBQUFoQixh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QU0sSUFBSSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3JELE1BQU0sSUFBSSxzQkFBc0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLE1BQU07SUFDZixDQUFDO0NBQ0Y7QUFYWSxpQkFBaUI7SUFEN0IsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBQyxDQUFDO0dBQ2pCLGlCQUFpQixDQVc3QjtBQVhZLDhDQUFpQjs7Ozs7Ozs7QUNmOUIsaUJBQWlCLHFCQUF1QixvRiIsImZpbGUiOiIxLWNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IFN0dWRlbnRSb3V0ZXMgfSBmcm9tICcuL3N0dWRlbnQucm91dGVzJztcblxuaW1wb3J0IHsgU3R1ZGVudExpc3RDb21wb25lbnQgfSBmcm9tICcuL3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFN0dWRlbnRJbmRpdkNvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1pbmRpdi9zdHVkZW50LWluZGl2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHVkZW50RnJpZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LWZyaWRnZS9zdHVkZW50LWZyaWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R1ZGVudE1lbmRlbEZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1tZW5kZWwtZnJpZGdlL3N0dWRlbnQtbWVuZGVsLWZyaWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R1ZGVudFBoYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LWZyaWRnZS9zdHVkZW50LXBoYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHVkZW50UmVzb2x2ZXIgfSBmcm9tICcuL3N0dWRlbnQucmVzb2x2ZXInO1xuaW1wb3J0IHsgUGhhZ2VHdWVzc2VzUGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL3BoYWdlLWd1ZXNzZXMucGlwZSc7XG5pbXBvcnQgeyBQaGFnZU11dGF0aW9uc1BpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9waGFnZS1tdXRhdGlvbnMucGlwZSc7XG5pbXBvcnQgeyBQaGFnZURlbGV0aW9uc1BpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9waGFnZS1kZWxldGlvbnMucGlwZSc7XG5pbXBvcnQgeyBQZWRlUGhlbm90eXBlUGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL3BlZGUtcGhlbm90eXBlLnBpcGUnO1xuLyoqXG4gKiBNb2R1bGUgZm9yIGFkbWluLXJlZ3VsYXRlZCBzdHVkZW50IHRoaW5ncyBsaWtlIHNldHRpbmcgdGhlXG4gKiByb2xlLCB2aWV3aW5nIGZyaWRnZXMgZm9yIGdyYWRpbmcsIGFuZCBsaXN0aW5nIGFsbCBzdHVkZW50c1xuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChTdHVkZW50Um91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdHVkZW50TGlzdENvbXBvbmVudCxcbiAgICBTdHVkZW50SW5kaXZDb21wb25lbnQsXG4gICAgU3R1ZGVudEZyaWRnZUNvbXBvbmVudCxcbiAgICBTdHVkZW50TWVuZGVsRnJpZGdlQ29tcG9uZW50LFxuICAgIFN0dWRlbnRQaGFnZUNvbXBvbmVudCxcbiAgICBQaGFnZUd1ZXNzZXNQaXBlLFxuICAgIFBoYWdlTXV0YXRpb25zUGlwZSxcbiAgICBQaGFnZURlbGV0aW9uc1BpcGUsXG4gICAgUGVkZVBoZW5vdHlwZVBpcGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTdHVkZW50UmVzb2x2ZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50TW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQubW9kdWxlLnRzIiwiLyoqXG4gKiBTY2VuYXJpby9leHBlcmllbWVudC1yZWxhdGVkIHZhbHVlcyB1c2VkIHRvXG4gKiAxLiBTZW5kIHRoZSBjb3JyZWN0IHBhcmFtZXRlcnMgdG8gYmFja2VuZCBjYWxsc1xuICogMi4gTWF0Y2ggc29tZSBiYWNrZW5kIHBhcmFtZXRlcnNcbiAqIDMuIEhhdmUgY29uc2lzdGVudCBkZWZhdWx0c1xuICovXG5leHBvcnQgY29uc3QgQ3JpY2tldEdsb2JhbHMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygc3RhcnRpbmcgcGhhZ2Ugd2hlbiB0YWtlbiBmcm9tIGZyaWRnZVxuICAgKi9cbiAgbnVtUGhhZ2U6MTAwMDAwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBsYWIgcm9vbSBwbGF0ZVxuICAgKi9cbiAgcGxhdGVDYXBhY2l0eTogMTUwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBlYWNoIHBsZXhlciByb29tIHBsYXRlXG4gICAqL1xuICBwbGV4ZXJDYXBhY2l0eTogMjAwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHNoZWx2ZXMgaW4gdGhlIGZyaWRnZVxuICAgKi9cbiAgbkZyaWRnZVNoZWxmOiAzMixcbiAgLyoqXG4gICAqIE51bWJlciBvZiBzcG90cyBvbiBlYWNoIHNoZWxmIG9mIHRoZSBmcmlkZ2VcbiAgICovXG4gIG5GcmlkZ2VTcG90czogMTYsXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRpbHV0aW9uIHZhbHVlIGZvciBsYWIgcm9vbTsgY2FuIGJlIGNoYW5nZWQgYnkgdXNlclxuICAgKi9cbiAgZGVmYXVsdExhYkRpbHV0aW9uOiAxMCxcbiAgLyoqXG4gICAqIERlZmF1bHQgZGlsdXRpb24gdmFsdWUgZm9yIHBsZXhlciByb29tOyBjYW4gYmUgY2hhbmdlZCBieSB1c2VyXG4gICAqL1xuICBkZWZhdWx0UGxleGVyRGlsdXRpb246IDUsXG4gIC8qKlxuICAgKiBMZW5ndGggb2YgdGhlIGdlbmUgaW4gbnVtYmVyIG9mIGJhc2VwYWlyc1xuICAgKi9cbiAgZ2VuZUxlbmd0aDogMzUwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIGJhc2VwYWlycyBwZXIgXCJibG9ja1wiIHdoZW4gZ3Vlc3NpbmcgZGVsZXRpb24gbG9jYXRpb25cbiAgICovXG4gIGRlbGV0aW9uR3Vlc3NMZW5ndGg6IDEwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQuZ2xvYmFscy50cyIsImltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4vY291cnNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBfVXNlciB9IGZyb20gJy4vdXNlci5pbnRlcmZhY2UnO1xuLy8gIGZpcnN0TmFtZTogc3RyaW5nO1xuLy8gIGxhc3ROYW1lOiBzdHJpbmc7XG4vLyAgdXNlcklkOiBudW1iZXI7XG5cbi8qKlxuICogSW5mb3JtYXRpb24gbmVlZGVkIGFzIGEgdXNlciB1c2luZyB0aGUgYXBwIGluIHNjZW5hcmlvc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0dWRlbnQgZXh0ZW5kcyBfVXNlciB7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBhY2Nlc3NHcmFudGVkPzogYW55O1xuICBzdGF0dXM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gbmVlZGVkIGZvciBhZG1pbiBwYWdlcyBhYm91dCBhIHVzZXIvc3R1ZGVudFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFkbWluU3R1ZGVudCBleHRlbmRzIFN0dWRlbnQge1xuICBjb3Vyc2U6IENvdXJzZTtcbiAgcm9sZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHNvcnQgc3R1ZGVudHMgYWxwaGFiZXRpY2FsbHkgYnkgbGFzdCBuYW1lO1xuICogVXNlcyBmaXJzdCBuYW1lIGZvciB0aWVzXG4gKlxuICogTWFrZXMgdGhlIG5hbWUgbG93ZXJjYXNlIGJlZm9yZSBzb3J0aW5nIHRvIGVuc3VyZSBzb3J0IGlzXG4gKiBjYXNlIGluc2Vuc2l0aXZlXG4gKi9cbmV4cG9ydCBjb25zdCBzb3J0U3R1ZGVudHMgPSBmdW5jdGlvbihhLGIpe1xuICAgIHZhciBjb21wYXJpc29uID0gYS5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAoY29tcGFyaXNvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGEuZmlyc3ROYW1lLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLmZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBhcmlzb247XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4uL3N0dWRlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbmltcG9ydCB7IEFkbWluU3R1ZGVudCwgc29ydFN0dWRlbnRzIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZSc7XG5cbi8qKlxuICogLSBDb21wb25lbnQgd2hpY2ggbGlzdHMgc3R1ZGVudHMgZGVwZW5kZW50IG9uIHRoZSByb2xlIG9mIGxvZ2dlZCBpbiB1c2VyO1xuICAqIC0gaWYgYFwiYWRtaW5cImAsIGFsbCB1c2VycyBpbiB0aGUgc3lzdGVtXG4gICogLSBpZiBgXCJpbnN0clwiYCwgYWxsIHVzZXJzIGluIGNvdXJzZXMgaW5zdHIgdGVhY2hlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0dWRlbnQtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc3R1ZGVudC1saXN0LnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBTdHVkZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIExpc3Qgb2Ygc3R1ZGVudHNcbiAgICovXG4gICAgcHJpdmF0ZSBzdHVkZW50czogQWRtaW5TdHVkZW50W107XG4gIC8qKlxuICAgKiBCb29sZWFuIHN0YXRlIHZhcmlhYmxlIHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIG11bHRpcGxlIG9ic2VydmFibGVzIGVhc2llclxuICAgKi9cbiAgICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2UgZnJvbSBzZXJ2ZXJcbiAgICovXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3N0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSB2aWV3XG4gICAqIDEuIGdldCBsb2dnZWQgaW4gdXNlciBpZFxuICAgKiAyLiBnZXQgdGhlIGxpc3Qgb2Ygc3R1ZGVudHNcbiAgICogMy4gb3JkZXIgdGhlIGxpc3Qgb2Ygc3R1ZGVudHNcbiAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGxldCBhZG1pbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UubGlzdFN0dWRlbnRzKGFkbWluLmlkKVxuICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0dWRlbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50cyA9IHN0dWRlbnRzLnNvcnQoc29ydFN0dWRlbnRzKTtcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogRGVzdG9yeSB0aGUgY29tcG9uZW50IGJ5IHVuc3Vic2NyaWJpbmcgZnJvbSBhbGwgb2JzZXJ2YWJsZXNcbiAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4uL3N0dWRlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDcmlja2V0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NyaWNrZXQvY3JpY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgU3R1ZGVudFJvbGVzQXJyYXkgfSBmcm9tICcuLi9zdHVkZW50LnJvbGVzJztcbmltcG9ydCB7IENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvdXJzZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvY291cnNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBZG1pblN0dWRlbnQgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3N0dWRlbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9zY2VuYXJpby5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gdmlldyBpbmZvcm1hdGlvbiBmb3IgYSBzaW5nbGUgc3R1ZGVudFxuICogVGhpcyBpbmNsdWRlcyBlbWFpbC9uYW1lL3JvbGUgaW5mb3JtYXRpb24gYW5kIGFjY2VzcyBzdGF0dXNcbiAqIGZvciBhbGwgc2NlbmFyaW9zXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3R1ZGVudC1pbmRpdicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc3R1ZGVudC1pbmRpdi50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdHVkZW50SW5kaXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIFN0dWRlbnQgd2UgYXJlIHZpZXdpbmdcbiAgICovXG4gICAgcHJvdGVjdGVkIHN0dWRlbnQ6IEFkbWluU3R1ZGVudDtcbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIHNjZW5hcmlvc1xuICAgKi9cbiAgICBwcml2YXRlIHNjZW5hcmlvczogU2NlbmFyaW9bXTtcblxuXG4gIC8qKlxuICAgKiBCb29sZWFuIHN0YXRlIHZhcmlhYmxlIHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIG11bHRpcGxlXG4gICAqIG9ic2VydmFibGVzIGVhc2llclxuICAgKi9cbiAgICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBmb3IgVVJMIHBhcmFtZXRlcnNcbiAgICovXG4gICAgcHJpdmF0ZSBwYXJhbU9ic2VydmVyOiBhbnk7XG4gIC8qKlxuICAgKiBMb2dnZWQgaW4gdXNlciB3aG8gbXVzdCBiZSBhbiBhZG1pbiBvciBpbnN0cnVjdG9yXG4gICAqL1xuICAgIHByaXZhdGUgX2FkbWluOiBVc2VyO1xuICAvKipcbiAgICogTGlzdCBvZiBwb3NzaWJsZSByb2xlc1xuICAgKi9cbiAgICBwcml2YXRlIHJvbGVzID0gU3R1ZGVudFJvbGVzQXJyYXk7XG4gIC8qKlxuICAgKiBOZXcgcm9sZSB0byBjaGFuZ2UgdG8gaWYgYWxsb3dlZFxuICAgKi9cbiAgICBwcml2YXRlIG5ld1JvbGU6IHN0cmluZztcblxuICAgIHByaXZhdGUgc2NvcmVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAvKipcbiAgICogTGlzdCBvZiBhbGwgTWVuZGVscGVkZSBzY2VuYXJpb3NcbiAgICovXG4gIHByaXZhdGUgbXBlZGVPcHRpb25zOiBNZW5kZWxwZWRlU2NlbmFyaW9bXTtcblxuICBtcGVkZVNjZW5hcmlvczogTWVuZGVscGVkZVNjZW5hcmlvW10gPSBBcnJheSgpO1xuICBxdWl6ZXM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcbiAgZGlzY292ZXJpZXM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcbiAgcGF0aHdheXM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcblxuICAvKipcbiAgICogUG90ZW50aWFsIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IENyaWNrZXRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9tcGVkZVNjZW5hcmlvU2VydmljZTogTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCkge1xuICAgICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgbG9nZ2VkIGluIHVzZXJcbiAgICogMi4gR2V0IGlkIG9mIHN0dWRlbnQgb2YgaW50ZXJlc3QgZnJvbSBVUkxcbiAgICogMy4gR2V0IHRoZSBzdHVkZW50J3MgaW5mb1xuICAgKiA0LiBHZXQgbGlzdCBvZiBhbGwgc2NlbmFyaW9zXG4gICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9hZG1pbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgbGV0IHN0dWRlbnRJZCA9IHBhcmFtc1snc3R1ZGVudElkJ107XG4gICAgICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRTdHVkZW50KHRoaXMuX2FkbWluLmlkLCBzdHVkZW50SWQpXG4gICAgICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudCA9IGluZm87XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3Um9sZSA9IHRoaXMuc3R1ZGVudC5yb2xlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UubGlzdFNjZW5hcmlvcygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc2NlbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5hcmlvcyA9IHNjZW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21wZWRlU2NlbmFyaW9TZXJ2aWNlLmxpc3RTY2VuYXJpb3MoJ2FsbCcpLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc2NlbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1wZWRlT3B0aW9ucyA9IHNjZW5zO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXBlZGVPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5zY2VuVHlwZSA9PT0gJ3NjZW5hcmlvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1wZWRlU2NlbmFyaW9zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihvcHRpb24uc2NlblR5cGUgPT09ICdxdWl6Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1PYnNlcnZlciA9IHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3R1ZGVudElkID0gcGFyYW1zWydzdHVkZW50SWQnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2NlbklkID0gcGFyYW1zWydzY2VuU2hvcnRDb2RlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NldHRpbmcgc2NvcmVtYXAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBzID0gXCJGcmlkZ2UgZG9lcyBub3QgZXhpc3RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2NvcmVNYXBbb3B0aW9uLnNob3J0Q29kZV0gPSBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zY29yZU1hcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0TWVuZGVsRnJpZGdlKGFkbWluLmlkLCBzdHVkZW50SWQsIG9wdGlvbi5zaG9ydENvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgobWZyaWRnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd3ZSBnb3QgZnJpZGdlIGZyb20gZGInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjb21pbmcgZm9yIHF1aXonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gJ1F1aXogbm90IHN1Ym1pdHRlZCB5ZXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1mcmlkZ2UucXVpeil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmUgPSBtZnJpZGdlLnF1aXouc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTWFwW29wdGlvbi5zaG9ydENvZGVdID0gc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVpemVzLnB1c2gob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihvcHRpb24uc2NlblR5cGUgPT09ICdkaXNjb3ZlcnknKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNjb3Zlcmllcy5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihvcHRpb24uc2NlblR5cGUgPT09ICdwYXRod2F5Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aHdheXMucHVzaChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXBlZGVTY2VuYXJpb3MgPSB0aGlzLm1wZWRlU2NlbmFyaW9zLnNvcnQoKG8xLCBvMikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8xLm9yZE9mU2NlbiA8IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobzEub3JkT2ZTY2VuID4gbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6ZXMgPSB0aGlzLnF1aXplcy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvMS5vcmRPZlNjZW4gPCBvMi5vcmRPZlNjZW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG8xLm9yZE9mU2NlbiA+IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzY292ZXJpZXMgPSB0aGlzLmRpc2NvdmVyaWVzLnNvcnQoKG8xLCBvMikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8xLm9yZE9mU2NlbiA8IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobzEub3JkT2ZTY2VuID4gbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRod2F5cyA9IHRoaXMucGF0aHdheXMuc29ydCgobzEsIG8yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobzEub3JkT2ZTY2VuIDwgbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvMS5vcmRPZlNjZW4gPiBvMi5vcmRPZlNjZW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc2NvcmVNYXApO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogUmV0dXJuIGZvcm1hdHRlZCBzdHJpbmcgYmFzZWQgb24gaWYgYWNjZXNzIGdyYW50ZWQgZm9yIHNjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuQ29kZSAtIHNjZW5hcmlvIHRvIGxvb2sgdXBcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gYFwiQWNjZXNzIGdyYW50ZWRcImAsIGBcIkFjY2VzcyBub3QgZ3JhbnRlZFwiYCwgb3IgYFwiTkFcImBcbiAgICovXG4gICAgZ2V0U2NlblN0YXR1cyhzY2VuQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGlzR3JhbnRlZCA9IHRoaXMuc3R1ZGVudC5hY2Nlc3NHcmFudGVkW3NjZW5Db2RlXTtcbiAgICAgICAgaWYgKGlzR3JhbnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICdBY2Nlc3MgZ3JhbnRlZCdcbiAgICAgICAgfSBlbHNlIGlmIChpc0dyYW50ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0FjY2VzcyBub3QgZ3JhbnRlZCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnTkEnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRRdWl6U2NvcmUoc2NlbklkOiBzdHJpbmcpe1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnNjb3JlTWFwKTtcbiAgICAgIC8vY29uc29sZS5sb2coc2NlbklkKTtcbiAgICAgIHJldHVybiB0aGlzLnNjb3JlTWFwW3NjZW5JZF09PW51bGw/J1F1aXogbm90IHN1Ym1pdHRlZCc6dGhpcy5zY29yZU1hcFtzY2VuSWRdO1xuICAgIH1cblxuICAvKipcbiAgICogLSBHZXQgYSBmb3JtYXR0ZWQgSFRNTCBzdHJpbmcgYmFzZWQgb24gdGhlIHN0dWRlbnRcbiAgICogLSBJZiBzdHVkZW50IGhhcyBhIGNvdXJzZSwgcmV0dXJucyBsaW5rIHRvIHRoZSBjb3Vyc2UgcGFnZVxuICAgKiAtIElmIHN0dWRlbnQgZG9lc24ndCBoYXZlIGEgY291cnNlLCByZXR1cm5zICdObyBjb3Vyc2UnXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGZvcm1hdHRlZCBIVE1MXG4gICAqL1xuICAgIGdldFN0dWRlbnRDb3Vyc2UoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHM6IEFkbWluU3R1ZGVudCA9IHRoaXMuc3R1ZGVudDtcbiAgICAgICAgaWYgKHMuY291cnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJzxhIFtyb3V0bGVyTGlua109XCJbXFwnL2FkbWluL2NvdXJzZXMvXFwnLCBcIicgKyBzLmNvdXJzZS5jb3Vyc2VOdW0gKyAnXVwiPnMuY291cnNlLmNvdXJzZU51bTwvYT4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdObyBjb3Vyc2UnO1xuICAgICAgICB9XG4gICAgfVxuXG4gIC8qKlxuICAgKiBHcmFudCBhY2Nlc3MgZm9yIGEgc3BlY2lmaWMgc2NlbmFyaW8gYnkgY2FsbGluZyBzdHVkZW50IHNlcnZpY2VcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiBvbmUgb2YgdGhlIHNjZW5hcmlvIGJ1dHRvbnNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5Db2RlIHNjZW5hcmlvIHRvIGdyYW50IGFjY2VzcyBmb3JcbiAgICovXG4gICAgZ3JhbnRBY2Nlc3Moc2NlbkNvZGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5ncmFudFNjZW5BY2Nlc3ModGhpcy5fYWRtaW4uaWQsIHRoaXMuc3R1ZGVudC51c2VySWQsIHNjZW5Db2RlLCB0cnVlKVxuICAgICAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCAmJiByZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudCA9IHJlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIHJvbGUgdG9nZ2xlIGJ1dHRvbiBzaG91bGQgYmUgZGlzYWJsZWRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIG5hbWUgb2YgYnV0dG9uL3JvbGVcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IGRpc2FibGUgZm9yIHJvbGVzIGdyZWF0ZXIgdGhhbiBjdXJyZW50IHVzZXJcbiAgICogYW5kIGlmIHZpZXdpbmcgcGFnZSBvZiBjdXJyZW50IHVzZXJcbiAgICovXG4gICAgcm9sZURpc2FibGVkKHNyYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9hZG1pbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0dWRlbnQudXNlcklkID09PSB0aGlzLl9hZG1pbi5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc3JjID09PSAnYWRtaW4nICYmIHRoaXMuX2FkbWluLnJvbGUgPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzcmMgPT09ICdpbnN0cicgJiYgdGhpcy5fYWRtaW4ucm9sZSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgQ1NTIGNsYXNzZXMgZm9yIGVhY2ggcm9sZSBidXR0b24gYmFzZWQgb24gdGhlXG4gICAqIHN0dWRlbnQncyBjdXJyZW50IHJvbGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIG5hbWUgb2YgYnV0dG9uL3JvbGVcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gcG9zc2libGUgY2xhc3NlcyB3aXRoIHRydWUvZmFsc2UgYXMgYXBwbGljYWJsZVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBDdXJyZW50IHN0dWRlbnQgaGFzIHJvbGUgXCJzdHVkZW50XCJcbiAgICogcm9sZUJ1dHRvbkNsYXNzKCdzdHVkZW50JykgLT4geydidG4gYnRuLXNtYWxsJzogdHJ1ZSwgJ2J0aC1zZWNvbmRhcnknOiB0cnVlLCAnYnRuLXNlY29uZGFyeS1vdXRsaW5lJzogZmFsc2V9XG4gICAqIHJvbGVCdXR0b25DbGFzcygnYWRtaW4nKSAtPiB7J2J0biBidG4tc21hbGwnOiB0cnVlLCAnYnRoLXNlY29uZGFyeSc6IGZhbHNlLCAnYnRuLXNlY29uZGFyeS1vdXRsaW5lJzogdHJ1ZX1cbiAgICovXG4gICAgcm9sZUJ1dHRvbkNsYXNzKHNyYzogc3RyaW5nKTogT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdidG4gYnRuLXNtIGZsZXgtZ3Jvdy0wJzogdHJ1ZSxcbiAgICAgICAgICAgICdidG4tb3V0bGluZS1zZWNvbmRhcnknOiBzcmMgIT09IHRoaXMuc3R1ZGVudC5yb2xlLFxuICAgICAgICAgICAgJ2J0bi1zZWNvbmRhcnknOiBzcmMgPT09IHRoaXMuc3R1ZGVudC5yb2xlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gY2xpY2tpbmcgYSByb2xlIGJ1dHRvbiwgdXBkYXRlIHRoZSBzdHVkZW50IHJvbGVcbiAgICogYnkgY2FsbGluZyBzdHVkZW50IHNlcnZpY2VcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiBvbmUgb2YgdGhlIHJvbGUgYnV0dG9uc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0gcm9sZSBvZiBidXR0b24gcHVzaGVkXG4gICAqL1xuICAgIGNsaWNrQnV0dG9uKHNyYzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLnNldFN0dWRlbnRSb2xlKHRoaXMuX2FkbWluLmlkLCB0aGlzLnN0dWRlbnQudXNlcklkLCBzcmMpXG4gICAgICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50ID0gcmVzO1xuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgZGVsZXRlIGJ1dHRvbiBzaG91bGQgYmUgZGlzYWJsZWRcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gYHRydWVgIGlmIHZpZXdpbmcgcGFnZSBvZiBsb2dnZWQgaW4gdXNlciBvciBpZiBzdHVkZW50IGlzIGFuIGFkbWluXG4gICAqIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBkZWxldGVEaXNhYmxlZCgpe1xuICAgIGlmKHRoaXMuX2FkbWluID09PSB1bmRlZmluZWQpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmKHRoaXMuc3R1ZGVudC51c2VySWQgPT09IHRoaXMuX2FkbWluLmlkKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYodGhpcy5zdHVkZW50LnJvbGUgPT09ICdhZG1pbicpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogLSB3aGVuIGNsaWNraW5nIGRlbGV0ZSBidXR0b24sIG9wZW4gYSBtb2RhbCBkaWFsb2cgdG8gY29uZmlybSBkZWxldGVcbiAgICogLSBpZiBjb25maXJtLCBkZWxldGUgYW5kIHJlZGlyZWN0IHRvIHN0dWRlbnRzXG4gICAqIC0gb3RoZXJ3aXNlLCBkbyBub3RoaW5nXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2YgdGhlIFwiRGVsZXRlXCIgYnV0dG9uXG4gICAqL1xuICBjaGVja0RlbGV0ZSgpe1xuICAgIGNvbnN0IG1vZGVsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudCwge3NpemU6ICdzbSd9KTtcbiAgICBtb2RlbFJlZi5jb21wb25lbnRJbnN0YW5jZS5tZXNzYWdlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/JztcblxuICAgIG1vZGVsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpPT57XG4gICAgICBpZihyZXN1bHQgPT09ICdkZWxldGUnKXtcbiAgICAgICAgdGhpcy5fY2FsbERlbGV0ZSgpO1xuICAgICAgfVxuICAgIH0sIChkaXNtaXNzKT0+e1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiB3aGljaCBpbXBsZW1lbnRzIGRlbGV0ZSBzdHVkZW50IGFmdGVyIHVzZXJcbiAgICogY29uZmlybWVkIGRlbGV0aW9uXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NhbGxEZWxldGUoKXtcbiAgICB0aGlzLl9zdHVkZW50U2VydmljZS5kZWxldGVTdHVkZW50KHRoaXMuX2FkbWluLmlkLCB0aGlzLnN0dWRlbnQudXNlcklkKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgLy8gc3VjY2Vzc2Z1bFxuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL3N0dWRlbnRzJ10pO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGNvbXBvbmVudCBieSB1bnN1YnNjcmliaW5nIHRvIHRoZSBzZXJ2aWNlc1xuICAgKiBUaGlzIHByZXZlbnRzIGEgbWVtb3J5IGxlYWtcbiAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuXG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtaW5kaXYvc3R1ZGVudC1pbmRpdi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4uL3N0dWRlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ291cnNlLCBBZG1pblN0dWRlbnQsIFNjZW5hcmlvLCBTdHVkZW50UGhhZ2UsIFN0dWRlbnRGcmlkZ2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gdmlldyB0aGUgcGhhZ2Ugc3RyYWlucyBmb3IgYSBzcGVjaWZpYyBzdHVkZW50XG4gKiBhbmQgc2NlbmFyaW9cbiAqXG4gKiBBZG1pbiBpcyBhYmxlIHRvIHNlZSBlYWNoIHBoYWdlJ3MgbXV0YXRpb25zLCBkZWxldGlvbnMsIGNvbW1lbnRzLCBhbmQgcG9zc2libHkgbXV0YXRpb24gZ3Vlc3Nlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdHVkZW50LWZyaWRnZScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3N0dWRlbnQtZnJpZGdlLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIFN0dWRlbnRGcmlkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBGcmlkZ2Ugb2JqZWN0IChpZiBpdCBleGlzdHMpXG4gICAqL1xuICBwcm90ZWN0ZWQgZnJpZGdlOiBTdHVkZW50RnJpZGdlO1xuICAvKipcbiAgICogSWYgZnJpZGdlIGV4aXN0cyBkZXRlcm1pbmUgYnkgaWYgdGhpcy5mcmlkZ2UgaGFzIHN0cmFpbnNcbiAgICovXG4gIHByb3RlY3RlZCBoYXNGcmlkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEJvb2xlYW4gc3RhdGUgdmFyaWFibGUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gbXVsdGlwbGUgb2JzZXJ2YWJsZXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gZm9yIFVSTCBwYXJhbWV0ZXJzXG4gICAqL1xuICBwcml2YXRlIHBhcmFtT2JzZXJ2ZXI6IGFueTtcblxuICAvKipcbiAgICogT3B0aW9uIHRvIHNob3cgYWxsIHN0cmFpbnMgaW4gZnJpZGdlIG9yXG4gICAqIG9ubHkgc3RyYWlucyBvZiBpbnRlcmVzdCBmb3IgZ3JhZGluZyAodW5rbm93blxuICAgKiBhbmQgc3VibWl0dGVkKVxuICAgKlxuICAgKiBTaG91bGQgYmUgYFwiYWxsXCJgIG9yIGBcImdyYWRlZFwiYFxuICAgKi9cbiAgcHJpdmF0ZSB2aWV3U3RyYWluczogc3RyaW5nID0gJ2FsbCc7XG4gIC8qKlxuICAgKiBMaXN0IG9mIHBoYWdlIGN1cnJlbnRseSBiZWluZyB2aWV3ZWRcbiAgICovXG4gIHByaXZhdGUgc3RyYWluTGlzdDogU3R1ZGVudFBoYWdlW107XG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlIGZyb20gdGhlIHNlcnZlclxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIF9zdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE5nYk1vZGFsKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgdmlld1xuICAgKiAxLiBHZXQgc3R1ZGVudElkLCBzY2VuYXJpb0lkLCBhbmQgYWRtaW5cbiAgICogMi4gR2V0IHRoZSBmcmlkZ2VcbiAgICogMy4gSWYgdGhlIGZyaWRnZSBleGlzdHNcbiAgICogM2EuIGFkZCB0aGUgXCJndWVzc2VzXCIgdG8gZWFjaCBzdHJhaW5cbiAgICogM2IuIHNvcnQgdGhlIHN0cmFpbnMgYnkgc3RyYWluIG51bWJlclxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBsZXQgc3R1ZGVudElkID0gcGFyYW1zWydzdHVkZW50SWQnXTtcbiAgICAgIGxldCBzY2VuSWQgPSBwYXJhbXNbJ3NjZW5JZCddO1xuICAgICAgbGV0IGFkbWluID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcigpO1xuXG4gICAgICB0aGlzLl9zdHVkZW50U2VydmljZS5nZXRGcmlkZ2UoYWRtaW4uaWQsIHN0dWRlbnRJZCwgc2NlbklkKVxuICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChmcmlkZ2UpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5mcmlkZ2UgPSBmcmlkZ2U7XG4gICAgICAgICAgICAgIHRoaXMuaGFzRnJpZGdlID0gKGZyaWRnZS5zdHJhaW5zICE9PSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICBpZih0aGlzLmhhc0ZyaWRnZSl7XG4gICAgICAgICAgICAgICAgbGV0IGd1ZXNzZXMgPSBKU09OLnBhcnNlKHRoaXMuZnJpZGdlLmd1ZXNzZXMpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgc3RyYWluIG9mIHRoaXMuZnJpZGdlLnN0cmFpbnMpe1xuICAgICAgICAgICAgICAgICAgbGV0IHggPSBndWVzc2VzW3N0cmFpbi5zdHJhaW5OdW1dO1xuICAgICAgICAgICAgICAgICAgaWYoeCl7XG4gICAgICAgICAgICAgICAgICAgIHN0cmFpbi5ndWVzc2VzID0geDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc3RyYWluLmd1ZXNzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mcmlkZ2Uuc3RyYWlucy5zb3J0KChhLGIpPT57cmV0dXJuIGEuc3RyYWluTnVtIC0gYi5zdHJhaW5OdW19KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNldFBoYWdlKCdhbGwnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSBDU1MgY2xhc3MgZm9yIHRoZSB2aWV3IHN0cmFpbnMgYnV0dG9uIGRlcGVuZGluZyBvbiBzZWxlY3RlZCBvcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIGJ1dHRvbiBkZXRlcm1pbmluZyBjbGFzc2VzIGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjbGFzc2VzIHdoaWNoIGFwcHkgdG8gdGhpcyBidXR0b24gaW4gdGhlIGZvcm0ge1wiY2xhc3NcIjogYm9vbGVhbiwgLi4ufVxuICAgKlxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5WaWV3IHN0cmFpbnMgaXMgXCJhbGxcIjwvY2FwdGlvbj5cbiAgICogZ2V0QnV0dG9uQ2xhc3MoJ2FsbCcpIC0+IHsnYnRuIGJ0bi1zbWFsbCc6IHRydWUsICdidG4tcHJpbWFyeSc6IHRydWUsICdidG4tcHJpbWFyeS1vdXRsaW5lJzogZmFsc2V9XG4gICAqIGdldEJ1dHRvbkNsYXNzKCdncmFkZWQnKSAtPiB7J2J0biBidG4tc21hbGwnOiB0cnVlLCAnYnRuLXByaW1hcnknOiBmYWxzZSwgJ2J0bi1wcmltYXJ5LW91dGxpbmUnOiB0cnVlfVxuICAgKi9cbiAgZ2V0QnV0dG9uQ2xhc3Moc3JjOiBzdHJpbmcpOiBPYmplY3R7XG4gICAgcmV0dXJuIHtcbiAgICAgICdidG4gYnRuLXNtJzogdHJ1ZSxcbiAgICAgICdidG4tcHJpbWFyeSc6IChzcmMgPT09IHRoaXMudmlld1N0cmFpbnMpLFxuICAgICAgJ2J0bi1vdXRsaW5lLXByaW1hcnknOiAoc3JjICE9PSB0aGlzLnZpZXdTdHJhaW5zKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGUgdGhlIGxpc3Qgb2YgdmlzaWJsZSBwaGFnZSBhcHByb3ByaWF0ZWx5XG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2YgXCJWaWV3IFN0cmFpblwiIGJ1dHRvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0gYnV0dG9uIHdoaWNoIHdhcyBjbGlja2VkO1xuICAgKiBTaG91bGQgYmUgb25lIG9mIGBbXCJhbGxcIiwgXCJncmFkZWRcIl1gXG4gICAqL1xuICBzZXRQaGFnZShzcmM6IHN0cmluZyl7XG4gICAgdGhpcy52aWV3U3RyYWlucyA9IHNyYztcbiAgICBpZih0aGlzLnZpZXdTdHJhaW5zID09PSAnYWxsJyl7XG4gICAgICB0aGlzLnN0cmFpbkxpc3QgPSB0aGlzLmZyaWRnZS5zdHJhaW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0cmFpbkxpc3QgPSB0aGlzLmZyaWRnZS5zdHJhaW5zLmZpbHRlcigoc3RyYWluKT0+e1xuICAgICAgICBpZihzdHJhaW4ucGhhZ2VUeXBlID09PSAndW5rbm93bicpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYoc3RyYWluLnBoYWdlVHlwZSA9PT0gJ3VzZXInICYmIHN0cmFpbi5zdWJtaXR0ZWQpe1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlRnJpZGdlKCl7XG4gICAgY29uc3QgbW9kZWxSZWYgPSB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50KTtcbiAgICBtb2RlbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KT0+e1xuICAgICAgaWYocmVzdWx0ID09PSAnZGVsZXRlJyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdERUxFVEUnKTtcbiAgICAgIH1cbiAgICB9LCAoZGlzbWlzcyk9PntcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3RvcnlpbmcgdGhlIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlcyBhbmRcbiAgICogb2JzZXJ2YWJsZXMgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWZyaWRnZS9zdHVkZW50LWZyaWRnZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gJy4uL3N0dWRlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ291cnNlLCBBZG1pblN0dWRlbnQsIE1lbmRlbHBlZGVQZWRlLCBTdHVkZW50TWVuZGVsRnJpZGdlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcyc7XG5cbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5pbXBvcnQgeyBQZWRlSW1hZ2VQaXBlIH0gZnJvbSAnLi4vLi4vLi4vcGlwZXMvcGVkZS1pbWFnZS5waXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3R1ZGVudC1tZW5kZWwtZnJpZGdlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc3R1ZGVudC1tZW5kZWwtZnJpZGdlLnRlbXBsYXRlLmh0bWwnKSxcbiAgLy90ZW1wbGF0ZTogcmVxdWlyZSgnLi9zdHVkZW50LW1lbmRlbC1mcmlkZ2UudGVtcGxhdGUuaHRtbCcpXG5cbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9zdHVkZW50LW1lbmRlbC1mcmlkZ2Uuc3R5bGUuY3NzJykscmVxdWlyZSgnLi4vLi4vLi4vbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtcGVkZXMuc3R5bGUuY3NzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgU3R1ZGVudE1lbmRlbEZyaWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEZyaWRnZSBvYmplY3QgKGlmIGl0IGV4aXN0cylcbiAgICovXG4gIHByb3RlY3RlZCBmcmlkZ2U6IFN0dWRlbnRNZW5kZWxGcmlkZ2U7XG4gIC8qKlxuICAgKiBJZiBmcmlkZ2UgZXhpc3RzIGRldGVybWluZSBieSBpZiB0aGlzLmZyaWRnZSBoYXMgc3RyYWluc1xuICAgKi9cbiAgcHJvdGVjdGVkIGhhc0ZyaWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogQm9vbGVhbiBzdGF0ZSB2YXJpYWJsZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbSBtdWx0aXBsZSBvYnNlcnZhYmxlcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBmb3IgVVJMIHBhcmFtZXRlcnNcbiAgICovXG4gIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuXG4gIHByaXZhdGUgY3Vyckdlbm9GYWN0czogYW55O1xuXG4gIHByb3RlY3RlZCBpc1F1aXpUYWtlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPcHRpb24gdG8gc2hvdyBhbGwgc3RyYWlucyBpbiBmcmlkZ2Ugb3JcbiAgICogb25seSBzdHJhaW5zIG9mIGludGVyZXN0IGZvciBncmFkaW5nICh1bmtub3duXG4gICAqIGFuZCBzdWJtaXR0ZWQpXG4gICAqXG4gICAqIFNob3VsZCBiZSBgXCJhbGxcImAgb3IgYFwiZ3JhZGVkXCJgXG4gICAqL1xuICAvL3ByaXZhdGUgdmlld1N0cmFpbnM6IHN0cmluZyA9ICdhbGwnO1xuICAvKipcbiAgICogTGlzdCBvZiBwaGFnZSBjdXJyZW50bHkgYmVpbmcgdmlld2VkXG4gICAqL1xuICBwZWRlczogTWVuZGVscGVkZVBlZGVbXTtcbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgcHJpdmF0ZSBzdHVkZW50SWQ6IGFueTtcblxuICBwcml2YXRlIHNjZW5JZDogYW55O1xuXG4gIHByaXZhdGUgYWRtaW46IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCl7XG4gICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0Jyk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIHZpZXdcbiAgICogMS4gR2V0IHN0dWRlbnRJZCwgc2NlbmFyaW9JZCwgYW5kIGFkbWluXG4gICAqIDIuIEdldCB0aGUgZnJpZGdlXG4gICAqIDMuIElmIHRoZSBmcmlkZ2UgZXhpc3RzXG4gICAqIDNhLiBhZGQgdGhlIFwiZ3Vlc3Nlc1wiIHRvIGVhY2ggc3RyYWluXG4gICAqIDNiLiBzb3J0IHRoZSBzdHJhaW5zIGJ5IHN0cmFpbiBudW1iZXJcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5zdHVkZW50SWQgPSBwYXJhbXNbJ3N0dWRlbnRJZCddO1xuICAgICAgdGhpcy5zY2VuSWQgPSBwYXJhbXNbJ3NjZW5TaG9ydENvZGUnXTtcbiAgICAgIHRoaXMuYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG5cbiAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmdldE1lbmRlbEZyaWRnZSh0aGlzLmFkbWluLmlkLCB0aGlzLnN0dWRlbnRJZCwgdGhpcy5zY2VuSWQpXG4gICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKG1mcmlkZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd3ZSBnb3QgZnJpZGdlIGZyb20gZGInKVxuICAgICAgICAgICAgICB0aGlzLmZyaWRnZSA9IG1mcmlkZ2U7XG4gICAgICAgICAgICAgIHRoaXMuZnJpZGdlLm93bmVyID0gbWZyaWRnZS5vd25lcjtcbiAgICAgICAgICAgICAgaWYodGhpcy5mcmlkZ2UucXVpeil7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1F1aXpUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYobWZyaWRnZS5nZW5vRmFjdHMpe1xuICAgICAgICAgICAgICAgIHRoaXMuY3Vyckdlbm9GYWN0cyA9IEpTT04ucGFyc2UobWZyaWRnZS5nZW5vRmFjdHMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJHZW5vRmFjdHMgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgdGhpcy5oYXNGcmlkZ2UgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnd2UgZ290IGZyaWRnZScpXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5mcmlkZ2UpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIC0gd2hlbiBjbGlja2luZyBkZWxldGUgYnV0dG9uLCBvcGVuIGEgbW9kYWwgZGlhbG9nIHRvIGNvbmZpcm0gZGVsZXRlXG4gICAqIC0gaWYgY29uZmlybSwgZGVsZXRlIGFuZCByZWRpcmVjdCB0byBzdHVkZW50c1xuICAgKiAtIG90aGVyd2lzZSwgZG8gbm90aGluZ1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIHRoZSBcIkRlbGV0ZVwiIGJ1dHRvblxuICAgKi9cbiAgY2hlY2tEZWxldGVTdHVkZW50RnJpZGdlKCl7XG4gICAgY29uc3QgbW9kZWxSZWYgPSB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50LCB7c2l6ZTogJ3NtJ30pO1xuICAgIG1vZGVsUmVmLmNvbXBvbmVudEluc3RhbmNlLm1lc3NhZ2UgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nO1xuXG4gICAgbW9kZWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCk9PntcbiAgICAgIGlmKHJlc3VsdCA9PT0gJ2RlbGV0ZScpe1xuICAgICAgICB0aGlzLmRlbGV0ZVN0dWRlbnRGcmlkZ2UoKTtcbiAgICAgIH1cbiAgICB9LCAoZGlzbWlzcyk9PntcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrRGVsZXRlUXVpelNjb3JlKCl7XG4gICAgY29uc3QgbW9kZWxSZWYgPSB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50LCB7c2l6ZTogJ3NtJ30pO1xuICAgIG1vZGVsUmVmLmNvbXBvbmVudEluc3RhbmNlLm1lc3NhZ2UgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nO1xuXG4gICAgbW9kZWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCk9PntcbiAgICAgIGlmKHJlc3VsdCA9PT0gJ2RlbGV0ZScpe1xuICAgICAgICB0aGlzLmRlbGV0ZVF1aXpTY29yZSgpO1xuICAgICAgfVxuICAgIH0sIChkaXNtaXNzKT0+e1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlUXVpelNjb3JlKCl7XG4gICAgdGhpcy5pc1F1aXpUYWtlbiA9IGZhbHNlO1xuICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLmRlbGV0ZVF1aXpTY29yZSh0aGlzLmFkbWluLmlkLCB0aGlzLnN0dWRlbnRJZCwgdGhpcy5zY2VuSWQpXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAuc3Vic2NyaWJlKChlcnIpPT57XG5cbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZVN0dWRlbnRGcmlkZ2UoKXtcbiAgICB0aGlzLmZyaWRnZSA9IG51bGw7XG4gICAgdGhpcy5oYXNGcmlkZ2UgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJHZW5vRmFjdHMgPSBudWxsO1xuICAgIHRoaXMuaXNRdWl6VGFrZW4gPSBmYWxzZTtcbiAgICB0aGlzLl9zdHVkZW50U2VydmljZS5kZWxldGVTdHVkZW50TWVuZGVsRnJpZGdlKHRoaXMuYWRtaW4uaWQsIHRoaXMuc3R1ZGVudElkLCB0aGlzLnNjZW5JZClcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKG1mcmlkZ2UpPT57XG4gICAgICAvLyBzdWNjZXNzZnVsXG4gICAgICB0aGlzLmZyaWRnZSA9IG1mcmlkZ2U7XG4gICAgICB0aGlzLmZyaWRnZS5vd25lciA9IG1mcmlkZ2Uub3duZXI7XG4gICAgICBpZih0aGlzLmZyaWRnZS5xdWl6KXtcbiAgICAgICAgdGhpcy5pc1F1aXpUYWtlbiA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZihtZnJpZGdlLmdlbm9GYWN0cyl7XG4gICAgICAgIHRoaXMuY3Vyckdlbm9GYWN0cyA9IEpTT04ucGFyc2UobWZyaWRnZS5nZW5vRmFjdHMpXG4gICAgICAgIGlmICh0aGlzLmN1cnJHZW5vRmFjdHMgIT09IG51bGwpe1xuICAgICAgICAgIHRoaXMuaGFzRnJpZGdlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pXG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gZGVzdG9yeWluZyB0aGUgY29tcG9uZW50LCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIGFuZFxuICAgKiBvYnNlcnZhYmxlcyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtbWVuZGVsLWZyaWRnZS9zdHVkZW50LW1lbmRlbC1mcmlkZ2UuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUmVzb2x2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zdHVkZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRtaW5TdHVkZW50IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zdHVkZW50LmludGVyZmFjZSc7XG5cbi8qKlxuICogLSBOZWVkZWQgZm9yIGJyZWFkY3J1bWJzXG4gKiAtIFJlc29sdmVzIHRoZSBzdHVkZW50SWQgaW4gdGhlIFVSTCB0byB0aGUgc3R1ZGVudCBpdCByZXByZXNlbnRzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHVkZW50UmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPEFkbWluU3R1ZGVudD4ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqIEJhc2VkIG9uIHRoZSBVUkwgYHN0dWRlbnRJZGAgcGFyYW1ldGVyLCBmaW5kIHRoZSB1c2VyXG4gICAqIGl0IGJlbG9uZ3MgdG9cbiAgICpcbiAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSByb3V0ZSAtIHJvdXRlIFVSTCBhdCB0aGUgbW9tZW50XG4gICAqIEBwYXJhbSB7Um91dGVyU3RhdGVTbmFwc2hvdH0gc3RhdGUgLSByb3V0ZXIgc3RhdGU7IG5lZWRlZCB0byBpbXBsZW1lbnQgaW50ZXJmYWNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD59IFRoZSBzdHVkZW50IHRoZSBpZCBiZWxvbmdzIHRvXG4gICAqIG9yIGFuIGVtcHR5IG9ic2VydmFibGUgaWYgdGhlIGlkIGRvZXNuJ3QgYmVsb25nIHRvIGFueW9uZVxuICAgKi9cbiAgcHVibGljIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxBZG1pblN0dWRlbnQ+IHtcbiAgICBsZXQgYWRtaW4gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKCk7XG5cbiAgICBjb25zdCBzdHVkZW50TnVtID0gcm91dGUucGFyYW1zWydzdHVkZW50SWQnXTtcblxuICAgIGlmIChzdHVkZW50TnVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudChhZG1pbi5pZCwgc3R1ZGVudE51bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnJlc29sdmVyLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3R1ZGVudExpc3RDb21wb25lbnQgfSBmcm9tICcuL3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFN0dWRlbnRJbmRpdkNvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1pbmRpdi9zdHVkZW50LWluZGl2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHVkZW50RnJpZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHVkZW50LWZyaWRnZS9zdHVkZW50LWZyaWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R1ZGVudE1lbmRlbEZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4vc3R1ZGVudC1tZW5kZWwtZnJpZGdlL3N0dWRlbnQtbWVuZGVsLWZyaWRnZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTY2VuYXJpb1Jlc29sdmVyIH0gZnJvbSAnLi4vLi4vY3JpY2tldC9zY2VuYXJpby5yZXNvbHZlcic7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9SZXNvbHZlciB9IGZyb20gJy4uLy4uL21lbmRlbHBlZGUvbWVuZGVscGVkZS1zY2VuYXJpby5yZXNvbHZlcic7XG5pbXBvcnQgeyBTdHVkZW50UmVzb2x2ZXIgfSBmcm9tICcuL3N0dWRlbnQucmVzb2x2ZXInO1xuXG5leHBvcnQgY29uc3QgU3R1ZGVudFJvdXRlczogUm91dGVzID0gW1xuICB7cGF0aDogJycsXG4gICBjaGlsZHJlbjogW1xuICAgICB7XG4gICAgcGF0aDogJzpzdHVkZW50SWQnLFxuICAgIHJlc29sdmU6IHtzdHVkZW50OiBTdHVkZW50UmVzb2x2ZXJ9LFxuICAgIGRhdGE6IHticmVhZGNydW1iczogJ3t7IHN0dWRlbnQuZmlyc3ROYW1lIH19IHt7IHN0dWRlbnQubGFzdE5hbWUgfX0nfSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgIHBhdGg6ICdjcmlja2V0LzpzY2VuSWQnLFxuICAgIGNvbXBvbmVudDogU3R1ZGVudEZyaWRnZUNvbXBvbmVudCxcbiAgICAgICAgcmVzb2x2ZToge3NjZW5hcmlvOiBTY2VuYXJpb1Jlc29sdmVyfSxcbiAgICAgICAgZGF0YToge2JyZWFkY3J1bWJzOiAne3sgc2NlbmFyaW8ubGFiZWwgfX0nfVxuICB9LFxuICB7XG4gICAgcGF0aDogJ21lbmRlbHBlZGUvOnNjZW5TaG9ydENvZGUnLFxuICAgIGNvbXBvbmVudDogU3R1ZGVudE1lbmRlbEZyaWRnZUNvbXBvbmVudCxcbiAgICByZXNvbHZlOiB7bWVuZGVscGVkZVNjZW5hcmlvOiBNZW5kZWxwZWRlU2NlbmFyaW9SZXNvbHZlcn0sXG4gICAgZGF0YToge2JyZWFkY3J1bWJzOiAne3sgbWVuZGVscGVkZVNjZW5hcmlvLmxhYmVsIH19J31cbiAgfSxcbiAgICAgIHtwYXRoOiAnJyxcbiAgICAgICBjb21wb25lbnQ6IFN0dWRlbnRJbmRpdkNvbXBvbmVudFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogU3R1ZGVudExpc3RDb21wb25lbnRcbiAgfVxuICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAqIExpc3Qgb2YgdXNlciByb2xlcyB3aXRoIHRoZWlyIG51bWVyaWMgdmFsdWUgKGB2YWx1ZWApLCBzdHJpbmcgdmFsdWVcbiAqIHVzZWQgYnkgTW9uZ29EQiAoYGtleWApLCBhbmQgc3RyaW5nIGRpc3BsYXllZCBvbiB3ZWJwYWdlIChgbGFiZWxgKVxuICovXG5leHBvcnQgY29uc3QgU3R1ZGVudFJvbGVzQXJyYXk6IGFueSA9IFtcbiAge1xuICAgIGtleTogJ3N0dWRlbnQnLFxuICAgIGxhYmVsOiAnU3R1ZGVudCcsXG4gICAgdmFsdWU6IDBcbiAgfSwge1xuICAgIGtleTogJ2luc3RyJyxcbiAgICBsYWJlbDogJ0luc3RydWN0b3InLFxuICAgIHZhbHVlOiAxXG4gIH0sIHtcbiAgICBrZXk6ICdhZG1pbicsXG4gICAgbGFiZWw6ICdBZG1pbmlzdHJhdG9yJyxcbiAgICB2YWx1ZTogMlxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnJvbGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtaW5kaXYvc3R1ZGVudC1pbmRpdi50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1pbmRpdi9zdHVkZW50LWluZGl2LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1mcmlkZ2UudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQtZnJpZGdlL3N0dWRlbnQtZnJpZGdlLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1tZW5kZWwtZnJpZGdlL3N0dWRlbnQtbWVuZGVsLWZyaWRnZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1tZW5kZWwtZnJpZGdlL3N0dWRlbnQtbWVuZGVsLWZyaWRnZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0dWRlbnRQaGFnZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvcGhhZ2UuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBTbWFsbCBjb21wb25lbnQgd2hpY2ggZW5jb21wYXNzZXMgYSBzaW5nbGUgcGhhZ2Ugc3RyYWluIGJlaW5nIHZpZXdlZFxuICogd2l0aGluIGEgc3R1ZGVudCdzIGZyaWRnZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdHVkZW50LXBoYWdlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc3R1ZGVudC1waGFnZS50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdHVkZW50UGhhZ2VDb21wb25lbnR7XG5cbiAgLyoqXG4gICAqIFRoZSBwaGFnZSB3aGljaCB0aGUgY29tcG9uZW50IGlzIGNyZWF0ZWQgZm9yXG4gICAqL1xuICBASW5wdXQoKSBwaGFnZTogU3R1ZGVudFBoYWdlO1xuXG4gIGNvbnN0cnVjdG9yKCl7fVxuXG4gIC8qKlxuICAgKiBQcm9kdWNlcyBmb3JtYXR0ZWQgc3RyaW5nIGJhc2VkIG9uIHBoYWdlIHR5cGUgYW5kIGlmIHBoYWdlIGlzXG4gICAqIHN1Ym1pdHRlZCB0byBiZSBncmFkZWRcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gZm9ybWF0dGVkIHN0cmluZ1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiByZWZlcmVuY2UgcGhhZ2UgLT4gXCJSRUZFUkVOQ0VcIlxuICAgKiBzY2VuYXJpbyB1bmtub3duIHBoYWdlIC0+IFwiVU5LT1dOXCJcbiAgICogdXNlciBwaGFnZSwgbm90IHN1bWl0dGVkIC0+IFwiVVNFUlwiXG4gICAqIHN1Ym1pdHRlZCBwaGFnZSAtPiBcIlNVQk1JU1NJT05cIlxuICAgKi9cbiAgZm9ybWF0UGhhZ2VUeXBlKCk6IHN0cmluZ3tcbiAgICBpZih0aGlzLnBoYWdlKXtcbiAgICAgIGxldCB0ID0gdGhpcy5waGFnZS5waGFnZVR5cGU7XG4gICAgICBpZih0aGlzLnBoYWdlLnBoYWdlVHlwZSA9PT0gJ3VzZXInICYmIHRoaXMucGhhZ2Uuc3VibWl0dGVkKXtcbiAgICAgICAgcmV0dXJuICdTVUJNSVNTSU9OJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGhhZ2UucGhhZ2VUeXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1waGFnZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1waGFnZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1mcmlkZ2Uvc3R1ZGVudC1waGFnZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5Njdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDcmlja2V0R2xvYmFscyB9IGZyb20gJy4uL2NyaWNrZXQvY3JpY2tldC5nbG9iYWxzJztcblxuLyoqXG4gKiBGb3JtYXQgdGhlIHRleHR1YWwgcHJlc2VudGF0aW9uIG9mIHRoZSBkZWxldGlvbiBndWVzc3NlcyBmb3JcbiAqIGEgdXNlcidzIHBoYWdlIHN0cmFpbjsgdXNlcyBhIFtzY2VuYXJpbyBnbG9iYWxde0BsaW5rXG4gKiBDcmlja2V0R2xvYmFsc30gdmFyaWFibGUgYGRlbGV0aW9uR3Vlc3NMZW5ndGhgIHRvIGRldGVybWluZVxuICogdGhlIHJhbmdlc1xuICpcbiAqICoqVXNhZ2U6KiogYHt7IGd1ZXNzTGlzdCB8IHBoYWdlR3Vlc3NlcyB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5PbmUgZGVsZXRpb24gZ3Vlc3M6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5bZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCAuLi5dPC9jb2RlPiBiZWNvbWVzIFwiMTAtNDBcIlxuICogQGV4YW1wbGUgPGNhcHRpb24+Tm8gZGVsZXRpb24gZ3Vlc3NlczogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPltmYWxzZSwgLi4uLCBmYWxzZV08L2NvZGU+IGJlY29tZXMgXCJOb25lXCJcbiAqL1xuXG5AUGlwZSh7bmFtZTogJ3BoYWdlR3Vlc3Nlcyd9KVxuZXhwb3J0IGNsYXNzIFBoYWdlR3Vlc3Nlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oZ3Vlc3NlczogYm9vbGVhbltdKTogc3RyaW5nIHtcbiAgICBsZXQgc3RlcFNpemUgPSBDcmlja2V0R2xvYmFscy5kZWxldGlvbkd1ZXNzTGVuZ3RoO1xuICAgIGxldCBvdXQgPSAnJztcbiAgICBsZXQgeD0tMTtcbiAgICBmb3IobGV0IGkgaW4gZ3Vlc3Nlcyl7XG4gICAgICBsZXQgeTogbnVtYmVyID0gK2k7XG4gICAgICAvLyBzdGFydCBuZXcgZGVsZXRpb25cbiAgICAgIGlmKHggPCAwICYmIGd1ZXNzZXNbeV0pe1xuICAgICAgICB4ID0gc3RlcFNpemUgKiB5O1xuICAgICAgfSAvLyBlbmQgYSBkZWxldGlvblxuICAgICAgZWxzZSBpZih4ID49IDAgJiYgZ3Vlc3Nlc1t5XSA9PT0gZmFsc2Upe1xuICAgICAgICBsZXQgeiA9IChzdGVwU2l6ZSAqIHkpO1xuICAgICAgICBvdXQgKz0gKG91dCA9PT0gJycgPyAnJyA6ICcsICcpO1xuICAgICAgICBvdXQgKz0geCArICcgLSAnICsgejtcbiAgICAgICAgeCA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjaGVjayBmb3IgdGhlIGxhc3QgcG9zc2libGUgZGVsZXRpb25cbiAgICBpZih4ICE9IC0xKXtcbiAgICAgIG91dCArPSAob3V0ID09PSAnJyA/ICcnIDogJywgJyk7XG4gICAgICBvdXQgKz0geCArICcgLSAnICsgQ3JpY2tldEdsb2JhbHMuZ2VuZUxlbmd0aDtcbiAgICB9XG4gICAgaWYob3V0ID09PSAnJyl7XG4gICAgICByZXR1cm4gJ05vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgcmV0dXJuIG91dDtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BpcGVzL3BoYWdlLWd1ZXNzZXMucGlwZS50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBGb3JtYXQgdGhlIHRleHR1YWwgcHJlc2VudGF0aW9uIG9mIGEgcGhhZ2Ugc3RyYWluJ3MgZnJhbWVzaGlmdCBtdXRhdGlvbnMgKGlmIGFueSlcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBtdXRhdGlvbkxpc3QgfCBwaGFnZU11dGF0aW9ucyB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5PbmUgbmVnYXRpdmUgZnJhbWVzaGlmdCBtdXRhdGlvbjogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlstODddPC9jb2RlPiBiZWNvbWVzIFwiLTEgYXQgODdcIlxuICogQGV4YW1wbGUgPGNhcHRpb24+T25lIHBvc2l0aXZlIGZyYW1lc2hpZnQgbXV0YXRpb246ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5bMTYzXTwvY29kZT4gYmVjb21lcyBcIisxIGF0IDE2M1wiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NdWx0aXBsZSBmcmFtZXNoaWZ0IG11dGF0aW9uczogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlszMiwgLTIwOF08L2NvZGU+IGJlY29tZXMgXCIrMSBhdCAzMiwgLTEgYXQgMjA4XCJcbiAqL1xuQFBpcGUoe25hbWU6ICdwaGFnZU11dGF0aW9ucyd9KVxuZXhwb3J0IGNsYXNzIFBoYWdlTXV0YXRpb25zUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShtdXRhdGlvbnM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgZm9yKGxldCB4IG9mIG11dGF0aW9ucyl7XG4gICAgICBvdXQgKz0gKG91dCA9PT0gJycgPyAnJyA6ICcsICcpO1xuICAgICAgbGV0IHkgPSAoeCA+IDAgPyAnKzEnIDogJy0xJyk7XG4gICAgICBsZXQgeiA9IE1hdGguYWJzKHgpO1xuICAgICAgb3V0ICs9IHkgKyAnIGF0ICcgKyB6O1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9waGFnZS1tdXRhdGlvbnMucGlwZS50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBGb3JtYXQgdGhlIHRleHR1YWwgcHJlc2VudGF0aW9uIG9mIGEgcGhhZ2Ugc3RyYWluJ3MgZGVsZXRpb25zIChpZiBhbnkpXG4gKlxuICogKipVc2FnZToqKiBge3sgZGVsZXRpb25saXN0IHwgcGhhZ2VEZWxldGlvbnMgfX1gXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+T25lIGRlbGV0aW9uOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+WzUwLDE0NV08L2NvZGU+IGJlY29tZXMgXCI1MCAtIDE0NVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NdWx0aXBsZSBkZWxldGlvbnM6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5bNTAsIDE0MCwgMTkwLCAyNjBdPC9jb2RlPiBiZWNvbWVzIFwiNTAgLSAxNDAsIDE5MCAtIDI2MFwiXG4gKi9cbkBQaXBlKHtuYW1lOiAncGhhZ2VEZWxldGlvbnMnfSlcbmV4cG9ydCBjbGFzcyBQaGFnZURlbGV0aW9uc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oZGVsZXRpb246IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgbGV0IG1MZW5ndGggPSAoZGVsZXRpb24ubGVuZ3RoICUgMiA9PT0gMCA/IGRlbGV0aW9uLmxlbmd0aCA6IGRlbGV0aW9uLmxlbmd0aCAtMSk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbUxlbmd0aDsgaSs9IDIpe1xuICAgICAgb3V0ICs9IChpID4gMSA/ICcsICcgOiAnJyk7XG4gICAgICBvdXQgKz0gZGVsZXRpb25baV0gKyAnIC0gJyArIGRlbGV0aW9uW2krMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcGlwZXMvcGhhZ2UtZGVsZXRpb25zLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IGEgTWVuZGVsUGVkZSdzIHBoZW5vdHlwZSBhcyB0cmFpdHNcbiAqIC0gV2hlbiBtdWx0QWxsZWxlL211bHRHZW5lcywgdXNlcyBBXjAsIEFeMSwgQV4yXG4gKlxuICogKipVc2FnZToqKiBge3sgcGhlbm9MaXN0IHwgcGVkZVBoZW5vdHlwZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIGNvZGU+MDwvY29kZT4gYmVjb21lcyBcImFhXCJcbiAqIDxjb2RlPjE8L2NvZGU+IGJlY29tZXMgXCJBYVwiXG4gKiA8Y29kZT4zPC9jb2RlPiBiZWNvbWVzIFwiQWFcIlxuICogPGNvZGU+NDwvY29kZT4gYmVjb21lcyBcIkFBXCJcbiAqL1xuQFBpcGUoe25hbWU6ICdwZWRlUGhlbm90eXBlJ30pXG5leHBvcnQgY2xhc3MgUGVkZVBoZW5vdHlwZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0ocGhlbm9MaXN0OiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgLy8gW1wiRG90Q29sb3JcIixcIkV5ZUNvbG9yXCIsXCJTZWdDb2xvclwiLFwiTnVtTGVnc1wiLFwiTnVtU2VnbWVudHNcIl07XG4gICAgdmFyIG91dFN0ciA9ICdEb3QgQ29sb3I6ICcgKyBwaGVub0xpc3RbMF0gKyc8YnI+JztcbiAgICBvdXRTdHIgKz0gJ0V5ZSBDb2xvcjogJyArIHBoZW5vTGlzdFsxXSArICc8YnI+JztcbiAgICBvdXRTdHIgKz0gJ1NlZ21lbnQgQ29sb3I6ICcgKyBwaGVub0xpc3RbMl0gKyAnPGJyPic7XG4gICAgb3V0U3RyICs9ICdOdW1iZXIgb2YgTGVnczogJyArIHBoZW5vTGlzdFszXSArICc8YnI+JztcbiAgICBvdXRTdHIgKz0gJ051bWJlciBvZiBTZWdtZW50czogJyArIHBoZW5vTGlzdFs0XTtcbiAgICByZXR1cm4gb3V0U3RyXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BpcGVzL3BlZGUtcGhlbm90eXBlLnBpcGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC1tZW5kZWwtZnJpZGdlL3N0dWRlbnQtbWVuZGVsLWZyaWRnZS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LW1lbmRlbC1mcmlkZ2Uvc3R1ZGVudC1tZW5kZWwtZnJpZGdlLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=