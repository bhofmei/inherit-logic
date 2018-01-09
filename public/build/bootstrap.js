webpackJsonp([1],{

/***/ 118:
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

/***/ 181:
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
const common_1 = __webpack_require__(16);
const forms_1 = __webpack_require__(25);
const ng2_dnd_1 = __webpack_require__(384);
const ng_bootstrap_1 = __webpack_require__(115);
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            ng2_dnd_1.DndModule.forRoot(),
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            ng2_dnd_1.DndModule,
            ng_bootstrap_1.NgbModule
        ],
    })
], SharedModule);
exports.SharedModule = SharedModule;


/***/ }),

/***/ 182:
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

/***/ 183:
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
const http_1 = __webpack_require__(54);
let ExperimentService = class ExperimentService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = 'api/cricket';
    }
    createPlate(plate) {
        // plate must have 1-2 phage IDs with numPhage [phage1,phage2], lawn type, location, specials, capacity, scenarioData (from fridge)
        // returns error OR {full, smallPlaque, largePlaque, genotypes}
        var res = this._http
            .post(`${this._baseURL}/plate`, plate);
        return res;
        //.map((res: Response)=>{ res.json()})
        //.catch(this.handleError)
    }
    performPlexer(data) {
        // data will have rowPhage, colPhage, lawn type, location, specials, capacity, scenarioData
        var res = this._http
            .post(`${this._baseURL}/plexer`, data);
        return res;
    }
};
ExperimentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ExperimentService);
exports.ExperimentService = ExperimentService;


/***/ }),

/***/ 30:
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
//import 'rxjs/Rx';
const core_1 = __webpack_require__(1);
const http_1 = __webpack_require__(54);
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this._signinURL = 'api/auth/signin';
        this._signupURL = 'api/auth/signup';
        this.redirectUrl = '/';
        //this._user = new BehaviorSubject<User>(null);
    }
    setUser(user) {
        //this._user.next(user);
        this._user2 = user;
    }
    getUser() {
        return this._user2;
    }
    isLoggedIn() {
        return (!!this._user2);
    }
    canAccessAdmin() {
        if (this._user2) {
            return this._user2.role > 0;
        }
        else {
            return false;
        }
    }
    signin(credentials) {
        let body = JSON.stringify(credentials);
        let headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this._signinURL, body, { headers: headers });
    }
    signup(user) {
        let body = JSON.stringify(user);
        let headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this._signupURL, body, { headers: headers });
    }
};
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ 385:
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
const router_1 = __webpack_require__(11);
const authentication_service_1 = __webpack_require__(30);
let AdminGuard = class AdminGuard {
    constructor(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    canActivate(route, state) {
        let url = state.url;
        let isLoggedIn = this._authenticationService.isLoggedIn();
        if (isLoggedIn)
            return true;
        else {
            this._authenticationService.redirectUrl = url;
            this._router.navigate(['authentication/signin']);
            return false;
        }
    }
    canActivateChild(route, state) {
        let url = state.url;
        let role = this._authenticationService.canAccessAdmin();
        if (role)
            return true;
        else {
            this._authenticationService.redirectUrl = url;
            this._router.navigate(['/admin/not-auth']);
            return false;
        }
    }
};
AdminGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], AdminGuard);
exports.AdminGuard = AdminGuard;


/***/ }),

/***/ 386:
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
const router_1 = __webpack_require__(11);
const course_service_1 = __webpack_require__(55);
let CourseCreateComponent = class CourseCreateComponent {
    constructor(_courseService, _router, _route) {
        this._courseService = _courseService;
        this._router = _router;
        this._route = _route;
        this.errorMessage = '';
        this.courseDetails = {};
    }
    createCourse() {
        //let newCourse = this.courseDetails.courseNum;
        if (this.courseDetails.courseNum === '') {
            this.errorMessage = 'Course number is required';
        }
        else {
            this.subscription = this._courseService
                .createCourse(this.courseDetails)
                .subscribe((result) => {
                this._router.navigate(['../', result.courseNum], { relativeTo: this._route });
            }, (err) => {
                this.errorMessage = err.error.message;
            });
        }
    }
    ngOnDestory() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
CourseCreateComponent = __decorate([
    core_1.Component({
        selector: 'course-create-cmp',
        templateUrl: 'app/admin/course/course-create/course-create.template.html',
        styleUrls: ['app/admin/course/course-create/course-create.style.css']
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        router_1.Router,
        router_1.ActivatedRoute])
], CourseCreateComponent);
exports.CourseCreateComponent = CourseCreateComponent;


/***/ }),

/***/ 387:
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
const router_1 = __webpack_require__(11);
const Subject_1 = __webpack_require__(8);
__webpack_require__(34);
const course_service_1 = __webpack_require__(55);
const scenario_service_1 = __webpack_require__(39);
const student_interface_1 = __webpack_require__(182);
let CourseIndivComponent = class CourseIndivComponent {
    constructor(_router, _route, _courseService, _scenarioService) {
        this._router = _router;
        this._route = _route;
        this._courseService = _courseService;
        this._scenarioService = _scenarioService;
        this.students = [];
        //private courseNum: string;
        this.errorMessage = '';
        this.isDestroyed$ = new Subject_1.Subject();
    }
    ngOnInit() {
        this.paramObserver = this._route.params.subscribe(params => {
            let course = params['courseNum'];
            this._courseService.getCourse(course)
                .takeUntil(this.isDestroyed$)
                .subscribe((info) => {
                this.courseInfo = info;
                this._courseService.getStudents(course)
                    .takeUntil(this.isDestroyed$)
                    .subscribe((students) => {
                    this.students = students.sort(student_interface_1.sortStudents);
                    this._scenarioService.listScenarios()
                        .takeUntil(this.isDestroyed$)
                        .subscribe((scens) => {
                        this.scenarios = scens;
                    });
                });
            }, (error) => {
                this.errorMessage = error.message;
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
        selector: 'course-indiv-cmp',
        templateUrl: 'app/admin/course/course-indiv/course-indiv.template.html',
        styleUrls: ['app/admin/course/course-indiv/course-indiv.style.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        course_service_1.CourseService,
        scenario_service_1.ScenarioService])
], CourseIndivComponent);
exports.CourseIndivComponent = CourseIndivComponent;


/***/ }),

/***/ 388:
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
const router_1 = __webpack_require__(11);
const Subject_1 = __webpack_require__(8);
__webpack_require__(34);
const course_service_1 = __webpack_require__(55);
const student_interface_1 = __webpack_require__(182);
let CourseEditComponent = class CourseEditComponent {
    constructor(_router, _route, _courseService) {
        this._router = _router;
        this._route = _route;
        this._courseService = _courseService;
        this.errorMessage = '';
        this.isDestroyed$ = new Subject_1.Subject();
    }
    ngOnInit() {
        this.paramObserver = this._route.params.subscribe(params => {
            let course = params['courseNum'];
            this._courseService.getCourse(course)
                .takeUntil(this.isDestroyed$)
                .subscribe((info) => {
                this.courseInfo = info;
                this._courseService.getPossibleInstructors(course)
                    .takeUntil(this.isDestroyed$)
                    .subscribe((instrs) => {
                    this.possibleInstr = instrs.sort(student_interface_1.sortStudents);
                }, (err2) => {
                    this.errorMessage = err2.error.message;
                    this.possibleInstr = [];
                });
            }, (error) => {
                this.errorMessage = error.message;
            });
        });
    }
    update() {
        this._courseService
            .editCourse(this.courseInfo.courseNum, this.courseInfo)
            .takeUntil(this.isDestroyed$)
            .subscribe((result) => {
            // success
            this._router.navigate(['../'], { relativeTo: this._route });
        }, (err) => {
            this.errorMessage = err.error.message;
        });
    }
    formatName(firstName, lastName) {
        let outStr = lastName;
        if (firstName !== '' && lastName !== '') {
            outStr += ', ';
        }
        outStr += firstName;
        return outStr;
    }
    addInstructor() {
        if (this.selectedAdd) {
            this._courseService
                .addInstructor(this.courseInfo.courseNum, this.selectedAdd)
                .takeUntil(this.isDestroyed$)
                .subscribe((updated) => {
                this.courseInfo = updated;
                this.possibleInstr = this.possibleInstr.filter((elm) => {
                    return elm.userId != this.selectedAdd;
                });
            }, (err) => {
                this.errorMessage = err.error.message;
            });
        }
    }
    ngOnDestroy() {
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
CourseEditComponent = __decorate([
    core_1.Component({
        selector: 'course-edit-cmp',
        templateUrl: 'app/admin/course/course-edit/course-edit.template.html',
        styleUrls: ['app/admin/course/course-edit/course-edit.style.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        course_service_1.CourseService])
], CourseEditComponent);
exports.CourseEditComponent = CourseEditComponent;


/***/ }),

/***/ 389:
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
const course_service_1 = __webpack_require__(55);
let CourseListComponent = class CourseListComponent {
    constructor(_courseService) {
        this._courseService = _courseService;
    }
    ngOnInit() {
        this.subscription = this._courseService.listCourses()
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
        selector: 'course-list-cmp',
        templateUrl: './app/admin/course/course-list/course-list.template.html'
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CourseListComponent);
exports.CourseListComponent = CourseListComponent;


/***/ }),

/***/ 39:
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
const BehaviorSubject_1 = __webpack_require__(64);
const core_1 = __webpack_require__(1);
const http_1 = __webpack_require__(54);
let ScenarioService = class ScenarioService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = 'api/cricket';
        this._scenarioDetails = new BehaviorSubject_1.BehaviorSubject('');
        this.getScenarioDetails = this._scenarioDetails.asObservable();
        this._scenarioGuesses = new BehaviorSubject_1.BehaviorSubject({});
        this.getGuesses = this._scenarioGuesses.asObservable();
        this._scenarioCode = new BehaviorSubject_1.BehaviorSubject('');
        this.getScenarioCode = this._scenarioCode.asObservable();
    }
    listScenarios() {
        return this._http
            .get(this._baseURL);
    }
    getScenario(scenId) {
        this._scenarioCode.next(scenId);
        return this._http
            .get(`${this._baseURL}/${scenId}`);
    }
    resetScenario() {
        this._scenarioDetails.next('');
        this._scenarioGuesses.next({});
        this._scenarioCode.next('');
    }
    setScenario(scenarioDetails, scenarioGuesses) {
        if (scenarioDetails !== null)
            this._scenarioDetails.next(scenarioDetails);
        if (scenarioDetails !== null)
            this._scenarioGuesses
                .next(JSON.parse(scenarioGuesses));
    }
    saveDeletions(guesses, userId, scenId) {
        return this._http
            .post(`${this._baseURL}/${userId}/${scenId}/deletions`, guesses);
    }
    createFridge(userId, scenId) {
        return this._http.get(`${this._baseURL}/${userId}/${scenId}/new-fridge`);
    }
    getFridge(userId, scenId) {
        var res = this._http
            .get(`${this._baseURL}/${userId}/${scenId}`);
        return res;
    }
    saveFridge(fridge) {
        let userId = fridge.owner.userId;
        let scenCode = fridge.scenario.scenCode;
        return this._http
            .post(`${this._baseURL}/${userId}/${scenCode}`, fridge);
        //.map((res: Response) => res.json())
        //.catch(this.handleError);
    }
    addStrain(strain, userId, scenCode) {
        // strains has strainNum, mutationList, deletion
        // returns new phage
        return this._http
            .post(`${this._baseURL}/${userId}/${scenCode}/fridge-phage`, strain);
        //.map((res: Response) => res.json())
        //.catch(this.handleError);
    }
    updateStrain(strain, userId, scenCode) {
        let strainId = strain.id;
        return this._http
            .post(`${this._baseURL}/${userId}/${scenCode}/${strainId}`, strain);
    }
    deleteStrain(strain, userId, scenCode) {
        let strainId = strain.id;
        return this._http
            .delete(`${this._baseURL}/${userId}/${scenCode}/${strainId}`);
    }
};
ScenarioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ScenarioService);
exports.ScenarioService = ScenarioService;


/***/ }),

/***/ 390:
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
const router_1 = __webpack_require__(11);
const Subject_1 = __webpack_require__(8);
__webpack_require__(34);
const course_service_1 = __webpack_require__(55);
const scenario_service_1 = __webpack_require__(39);
const student_service_1 = __webpack_require__(69);
let CourseScenarioComponent = class CourseScenarioComponent {
    constructor(_router, _route, _courseService, _studentService, _scenarioService) {
        this._router = _router;
        this._route = _route;
        this._courseService = _courseService;
        this._studentService = _studentService;
        this._scenarioService = _scenarioService;
        this.students = [];
        this.errorMessage = '';
        this.isDestroyed$ = new Subject_1.Subject();
    }
    ngOnInit() {
        this.paramObserver = this._route.params
            .subscribe(params => {
            let course = params['courseNum'];
            let scenCode = params['scenId'];
            this.courseNum = course.toUpperCase();
            this._scenarioService.getScenario(scenCode)
                .takeUntil(this.isDestroyed$)
                .subscribe((res) => {
                // success
                this.scenario = res;
                this._courseService.getScenarioStatus(course, scenCode)
                    .takeUntil(this.isDestroyed$)
                    .subscribe((stats) => {
                    this.students = stats;
                }, (err) => {
                    this.errorMessage = err.error.message;
                });
            }, (err) => {
                this.errorMessage = err.error.message;
            });
        });
    }
    formatAccess(isGranted) {
        return (isGranted ? 'Access granted' : 'Access not granted');
    }
    accessButtonClass(isGranted) {
        return {
            'btn btn-sm': true,
            'btn-outline-secondary': isGranted,
            'btn-outline-dark': !isGranted
        };
    }
    accessButtonText(isGranted) {
        return (isGranted ? 'Revoke access' : 'Grant access');
    }
    toggleAccess(studentIndex) {
        let curState = this.students[studentIndex].status;
        let scenId = this.scenario.scenCode;
        let studentId = this.students[studentIndex].userId;
        this._studentService.grantScenAccess(studentId, scenId, !curState)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            if (res !== undefined && res !== null) {
                this.students[studentIndex].status = res.accessGranted[scenId];
            }
        }, (err) => {
            this.errorMessage = err.error.message;
        });
    }
    /*grantAccess(studentIndex: number){
      // will require studentService
      let scenId = this.scenario.scenCode;
      let studentId = this.students[studentIndex].userId;
      this._studentService.grantScenAccess(studentId, scenId)
        .takeUntil(this.isDestroyed$)
        .subscribe((res)=>{
          if(res !== undefined && res !== null){
            this.students[studentIndex].status = res.accessGranted[scenId];
          }
      }, (err)=>{
        this.errorMessage = err.error.message;
      })
    }*/
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
        selector: 'course-scen-smp',
        templateUrl: 'app/admin/course/course-scenario/course-scenario.template.html',
        styleUrls: ['app/admin/course/course-scenario/course-scenario.style.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        course_service_1.CourseService,
        student_service_1.StudentService,
        scenario_service_1.ScenarioService])
], CourseScenarioComponent);
exports.CourseScenarioComponent = CourseScenarioComponent;


/***/ }),

/***/ 391:
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
const student_service_1 = __webpack_require__(69);
const student_interface_1 = __webpack_require__(182);
let StudentListComponent = class StudentListComponent {
    constructor(_studentService) {
        this._studentService = _studentService;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.subscription = this._studentService.listStudents()
            .subscribe((students) => {
            this.students = students.sort(student_interface_1.sortStudents);
        }, (err) => {
            this.errorMessage = err.error.message;
        });
    }
    formatName(firstName, lastName) {
        let outStr = lastName;
        if (firstName !== '' && lastName !== '') {
            outStr += ', ';
        }
        outStr += firstName;
        return outStr;
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
StudentListComponent = __decorate([
    core_1.Component({
        selector: 'student-list',
        templateUrl: './app/admin/student/student-list/student-list.template.html'
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentListComponent);
exports.StudentListComponent = StudentListComponent;


/***/ }),

/***/ 392:
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
const router_1 = __webpack_require__(11);
const Subject_1 = __webpack_require__(8);
__webpack_require__(34);
const student_service_1 = __webpack_require__(69);
const scenario_service_1 = __webpack_require__(39);
const student_roles_1 = __webpack_require__(866);
let StudentIndivComponent = class StudentIndivComponent {
    constructor(_router, _route, _studentService, _scenarioService) {
        this._router = _router;
        this._route = _route;
        this._studentService = _studentService;
        this._scenarioService = _scenarioService;
        this.roles = student_roles_1.StudentRolesArray;
        //private courseNum: string;
        this.errorMessage = '';
        this.isDestroyed$ = new Subject_1.Subject();
    }
    ngOnInit() {
        this.paramObserver = this._route.params.subscribe(params => {
            let studentId = params['studentId'];
            this._studentService.getStudent(studentId)
                .takeUntil(this.isDestroyed$)
                .subscribe((info) => {
                this.student = info;
                this.newRole = this.student.role;
                this._scenarioService.listScenarios()
                    .takeUntil(this.isDestroyed$)
                    .subscribe((scens) => {
                    this.scenarios = scens;
                    this._admin = {
                        id: this._studentService.getAdmin(),
                        role: this._studentService.getAdminRole()
                    };
                });
            }, (error) => {
                console.error(error);
                this.errorMessage = error.message;
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
    accessButtonClass(scenCode) {
        let isGranted = this.student.accessGranted[scenCode];
        return {
            'btn btn-sm': true,
            'btn-outline-secondary': isGranted,
            'btn-outline-dark': !isGranted
        };
    }
    accessButtonText(scenCode) {
        let isGranted = this.student.accessGranted[scenCode];
        return (isGranted ? 'Revoke access' : 'Grant access');
    }
    toggleAccess(scenCode) {
        let curState = this.student.accessGranted[scenCode];
        this._studentService.grantScenAccess(this.student.userId, scenCode, !curState)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            if (res !== undefined && res !== null) {
                this.student.accessGranted[scenCode] = res.accessGranted[scenCode];
            }
        }, (err) => {
            this.errorMessage = err.error.message;
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
        this._studentService.setStudentRole(this.student.userId, src)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            this.student = res;
        }, (err) => {
            this.errorMessage = err.error.message;
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
        templateUrl: 'app/admin/student/student-indiv/student-indiv.template.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        student_service_1.StudentService,
        scenario_service_1.ScenarioService])
], StudentIndivComponent);
exports.StudentIndivComponent = StudentIndivComponent;


/***/ }),

/***/ 393:
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
const router_1 = __webpack_require__(11);
const Subject_1 = __webpack_require__(8);
__webpack_require__(34);
__webpack_require__(158);
const student_service_1 = __webpack_require__(69);
let StudentFridgeComponent = class StudentFridgeComponent {
    constructor(_router, _route, _studentService) {
        this._router = _router;
        this._route = _route;
        this._studentService = _studentService;
        this.hasFridge = false;
        this.viewStrains = 'all';
        this.errorMessage = '';
        this.isDestroyed$ = new Subject_1.Subject();
    }
    ngOnInit() {
        this.paramObserver = this._route.params.subscribe(params => {
            let studentId = params['studentId'];
            let scenId = params['scenId'];
            this._studentService.getFridge(studentId, scenId)
                .takeUntil(this.isDestroyed$)
                .subscribe((fridge) => {
                this.fridge = fridge;
                this.hasFridge = (fridge.strains !== undefined);
                if (this.hasFridge) {
                    this.fridge.strains.sort((a, b) => { return a.strainNum - b.strainNum; });
                }
                this.setPhage('all');
            }, (error) => {
                console.log(error);
                this.errorMessage = error.message;
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
        templateUrl: 'app/admin/student/student-fridge/student-fridge.template.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        student_service_1.StudentService])
], StudentFridgeComponent);
exports.StudentFridgeComponent = StudentFridgeComponent;


/***/ }),

/***/ 394:
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
__webpack_require__(34);
const authentication_service_1 = __webpack_require__(30);
const course_service_1 = __webpack_require__(55);
const student_service_1 = __webpack_require__(69);
let AdminComponent = class AdminComponent {
    //private isDestroyed$: Subject<boolean>
    constructor(_authenticationService, _courseService, _studentService) {
        this._authenticationService = _authenticationService;
        this._courseService = _courseService;
        this._studentService = _studentService;
        this.errorMessage = '';
    }
    ngOnInit() {
        /*this._authenticationService.getUser
          .takeUntil(this.isDestroyed$)
          .subscribe( (res) =>{
          this.adminUser = res;

          this._courseService.setAdmin(userId);
          this.errorMessage = '';
        }, (err)=>{
          this.errorMessage = JSON.stringify(err);
        }); */
        this.adminUser = this._authenticationService.getUser();
        let userId = this.adminUser.id;
        let userRole = this.adminUser.role;
        this._courseService.setAdmin(userId);
        this._studentService.setAdmin(userId, userRole);
    }
    ngOnDestroy() {
        this._courseService.setAdmin(-1);
        this._studentService.setAdmin(-1, -1);
    }
};
AdminComponent = __decorate([
    core_1.Component({
        selector: 'admin-cmp',
        templateUrl: 'app/admin/admin.template.html'
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        course_service_1.CourseService,
        student_service_1.StudentService])
], AdminComponent);
exports.AdminComponent = AdminComponent;


/***/ }),

/***/ 395:
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
let AdminHomeComponent = class AdminHomeComponent {
};
AdminHomeComponent = __decorate([
    core_1.Component({
        selector: 'admin-home',
        templateUrl: 'app/admin/admin-home/admin-home.template.html'
    })
], AdminHomeComponent);
exports.AdminHomeComponent = AdminHomeComponent;


/***/ }),

/***/ 396:
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
let NotAuthComponent = class NotAuthComponent {
};
NotAuthComponent = __decorate([
    core_1.Component({
        selector: 'not-auth-cmp',
        templateUrl: 'app/admin/not-auth/not-auth.template.html'
    })
], NotAuthComponent);
exports.NotAuthComponent = NotAuthComponent;


/***/ }),

/***/ 397:
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
let AuthenticationComponent = class AuthenticationComponent {
};
AuthenticationComponent = __decorate([
    core_1.Component({
        selector: 'authentication',
        templateUrl: 'app/authentication/authentication.template.html'
    })
], AuthenticationComponent);
exports.AuthenticationComponent = AuthenticationComponent;


/***/ }),

/***/ 398:
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
const router_1 = __webpack_require__(11);
const authentication_service_1 = __webpack_require__(30);
let SigninComponent = class SigninComponent {
    constructor(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.credentials = {};
    }
    signin() {
        this.subscription = this._authenticationService
            .signin(this.credentials)
            .subscribe((result) => {
            // TODO: update
            this._authenticationService.setUser(result);
            let redirect = this._authenticationService.redirectUrl ? this._authenticationService.redirectUrl : '/';
            this._router.navigate([redirect]);
        }, (error) => {
            this.errorMessage = error.message;
        });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
SigninComponent = __decorate([
    core_1.Component({
        selector: 'signin',
        templateUrl: 'app/authentication/signin/signin.template.html',
        styleUrls: ['app/authentication/signin/signin.style.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.Router])
], SigninComponent);
exports.SigninComponent = SigninComponent;


/***/ }),

/***/ 399:
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
const router_1 = __webpack_require__(11);
const Subject_1 = __webpack_require__(8);
__webpack_require__(34);
__webpack_require__(158);
__webpack_require__(258);
const authentication_service_1 = __webpack_require__(30);
const course_service_1 = __webpack_require__(55);
let SignupComponent = class SignupComponent {
    constructor(_authenticationService, _courseService, _router) {
        this._authenticationService = _authenticationService;
        this._courseService = _courseService;
        this._router = _router;
        this.courses = [];
        this.user = {};
        this.isDestroyed$ = new Subject_1.Subject();
    }
    _reorderCourses(courses) {
        let na = courses.filter((c) => { return c.courseNum === 'NA'; });
        let other = courses.filter((c) => {
            return c.courseNum !== 'NA';
        });
        return na.concat(other);
    }
    ngOnInit() {
        this._courseService.getCourseList()
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            let tmp = this._reorderCourses(res);
            this.courses = tmp;
        }, (err) => {
            this.courses = [];
        });
    }
    signup() {
        if (this.user.course === undefined) {
            this.errorMessage = 'Select a course';
        }
        else if (this.user.password !== this.cPassword) {
            this.errorMessage = 'Passwords must match';
        }
        else {
            this._authenticationService
                .signup(this.user)
                .takeUntil(this.isDestroyed$)
                .subscribe((result) => {
                this._authenticationService.setUser(result);
                this._router.navigate(['/']);
            }, (error) => {
                this.errorMessage = error.error.message;
            });
        }
    }
    ngOnDestroy() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
SignupComponent = __decorate([
    core_1.Component({
        selector: 'signup',
        templateUrl: 'app/authentication/signup/signup.template.html',
        styleUrls: ['app/authentication/signup/signup.style.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        course_service_1.CourseService,
        router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ 400:
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
const article_service_1 = __webpack_require__(88);
let ArticleComponent = class ArticleComponent {
};
ArticleComponent = __decorate([
    core_1.Component({
        selector: 'articles',
        template: '<router-outlet></router-outlet>',
        providers: [article_service_1.ArticleService]
    })
], ArticleComponent);
exports.ArticleComponent = ArticleComponent;


/***/ }),

/***/ 401:
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
const router_1 = __webpack_require__(11);
const article_service_1 = __webpack_require__(88);
let CreateComponent = class CreateComponent {
    constructor(_router, _articleService) {
        this._router = _router;
        this._articleService = _articleService;
        this.article = {};
    }
    create() {
        this._articleService.create(this.article).subscribe(createdArticle => this._router.navigate(['/articles', createdArticle._id]), error => this.errorMessage = error);
    }
};
CreateComponent = __decorate([
    core_1.Component({
        selector: 'create',
        templateUrl: 'app/articles/create/create.template.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        article_service_1.ArticleService])
], CreateComponent);
exports.CreateComponent = CreateComponent;


/***/ }),

/***/ 402:
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
const article_service_1 = __webpack_require__(88);
let ListComponent = class ListComponent {
    constructor(_articleService) {
        this._articleService = _articleService;
    }
    ngOnInit() {
        this._articleService.list().subscribe(articles => this.articles = articles);
    }
};
ListComponent = __decorate([
    core_1.Component({
        selector: 'list',
        templateUrl: 'app/articles/list/list.template.html'
    }),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ListComponent);
exports.ListComponent = ListComponent;


/***/ }),

/***/ 403:
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
const router_1 = __webpack_require__(11);
const authentication_service_1 = __webpack_require__(30);
const article_service_1 = __webpack_require__(88);
let ViewComponent = class ViewComponent {
    constructor(_router, _route, _authenticationService, _articleService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._articleService = _articleService;
        this.allowEdit = false;
    }
    ngOnInit() {
        this.user = this._authenticationService.getUser();
        this.routingObserver = this._route.params.subscribe(params => {
            let articleId = params['articleId'];
            this._articleService
                .read(articleId)
                .subscribe(article => {
                this.article = article;
                this.allowEdit = (this.user && this.user._id === this.article.creator._id);
            }, error => this._router.navigate(['/articles']));
        });
    }
    ngOnDestroy() {
        this.routingObserver.unsubscribe();
    }
    delete() {
        this._articleService.delete(this.article._id).subscribe(deletedArticle => this._router.navigate(['/articles']), error => this.errorMessage = error);
    }
};
ViewComponent = __decorate([
    core_1.Component({
        selector: 'view',
        templateUrl: 'app/articles/view/view.template.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        article_service_1.ArticleService])
], ViewComponent);
exports.ViewComponent = ViewComponent;


/***/ }),

/***/ 404:
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
const router_1 = __webpack_require__(11);
const article_service_1 = __webpack_require__(88);
let EditComponent = class EditComponent {
    constructor(_router, _route, _articleService) {
        this._router = _router;
        this._route = _route;
        this._articleService = _articleService;
        this.article = {};
    }
    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            let articleId = params['articleId'];
            this._articleService.read(articleId).subscribe(article => {
                this.article = article;
            }, error => this._router.navigate(['/articles']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._articleService.update(this.article).subscribe(savedArticle => this._router.navigate(['/articles', savedArticle._id]), error => this.errorMessage = error);
    }
};
EditComponent = __decorate([
    core_1.Component({
        selector: 'edit',
        templateUrl: 'app/articles/edit/edit.template.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        article_service_1.ArticleService])
], EditComponent);
exports.EditComponent = EditComponent;


/***/ }),

/***/ 405:
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
const authentication_service_1 = __webpack_require__(30);
let HomeComponent = class HomeComponent {
    constructor(_authenticationService) {
        this._authenticationService = _authenticationService;
    }
    ngOnInit() {
        this.user = this._authenticationService.getUser();
    }
    ngOnDestroy() {
        this.user = undefined;
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'app/home/home.template.html',
        styleUrls: ['app/home/home.style.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ 406:
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
let ScenarioComponent = class ScenarioComponent {
};
ScenarioComponent = __decorate([
    core_1.Component({
        selector: 'scenario',
        templateUrl: 'app/scenario/scenario.template.html'
    })
], ScenarioComponent);
exports.ScenarioComponent = ScenarioComponent;


/***/ }),

/***/ 407:
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
const authentication_service_1 = __webpack_require__(30);
const scenario_service_1 = __webpack_require__(39);
let ListComponent = class ListComponent {
    constructor(_authenticationService, _scenarioService) {
        this._authenticationService = _authenticationService;
        this._scenarioService = _scenarioService;
    }
    ngOnInit() {
        this.user = this._authenticationService.getUser();
        this.sSubscription = this._scenarioService.listScenarios()
            .subscribe((scenarios) => {
            this.scenarios = scenarios;
        });
    }
    ngOnDestroy() {
        this.sSubscription.unsubscribe();
    }
};
ListComponent = __decorate([
    core_1.Component({
        selector: 'scenario-list',
        templateUrl: './app/scenario/list/list.template.html'
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, scenario_service_1.ScenarioService])
], ListComponent);
exports.ListComponent = ListComponent;


/***/ }),

/***/ 408:
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
let LocationComponent = class LocationComponent {
};
LocationComponent = __decorate([
    core_1.Component({
        selector: 'location',
        templateUrl: './app/scenario/location/location.template.html',
        styleUrls: ['./app/scenario/location/location.style.css']
    })
], LocationComponent);
exports.LocationComponent = LocationComponent;


/***/ }),

/***/ 409:
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
const router_1 = __webpack_require__(11);
const authentication_service_1 = __webpack_require__(30);
let LocationGuard = class LocationGuard {
    constructor(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }
    canActivate(route, state) {
        let url = state.url;
        let isLoggedIn = this._authenticationService.isLoggedIn();
        if (isLoggedIn)
            return true;
        else {
            this._authenticationService.redirectUrl = url;
            this._router.navigate(['authentication/signin']);
            return false;
        }
    }
};
LocationGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], LocationGuard);
exports.LocationGuard = LocationGuard;


/***/ }),

/***/ 410:
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
const Subject_1 = __webpack_require__(8);
__webpack_require__(34);
const scenario_globals_1 = __webpack_require__(118);
const experiment_service_1 = __webpack_require__(183);
const scenario_service_1 = __webpack_require__(39);
let LabRoomComponent = class LabRoomComponent {
    constructor(_experimentService, _scenarioService) {
        this._experimentService = _experimentService;
        this._scenarioService = _scenarioService;
        // bacteria tubes
        this.isHidden = { 'K': false, 'B': false };
        this.phage = [];
        // dilution tubes
        this.dilutionValue = scenario_globals_1.ScenarioGlobals.defaultLabDilution;
        this.canEditDilution = true;
        // plate
        this.isEmpty = true;
        this.lawnType = '';
        this.isFull = false;
        this.errorMessage = '';
        this.isDestroyed$ = new Subject_1.Subject();
        this.contents = [null, null, null, null];
        this.visibleLabel = [true, false, false, false];
    }
    ngOnInit() {
        this._scenarioService.getScenarioDetails
            .takeUntil(this.isDestroyed$)
            .subscribe((details) => { this.scenarioDetails = details; });
    }
    ngOnDestroy() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
    /**
     * Reset the tube-related variables
     */
    clearTubes() {
        this.phage = [];
        this.isHidden = { 'K': false, 'B': false };
        this.errorMessage = '';
        this.contents = [null, null, null, null];
        this.visibleLabel = [true, false, false, false];
        this.canEditDilution = true;
    }
    /**
     * Reset the plate variables
     */
    clearPlate() {
        // reset all variables
        this.isFull = false;
        this.isEmpty = true;
        this.genotypes = [];
        this.smallPlaqueList = [];
        this.largePlaqueList = [];
        this.errorMessage = '';
        this.lawnType = '';
    }
    /**
     * Reset all variables
     */
    clearAll() {
        this.clearTubes();
        this.clearPlate();
    }
    /**
     * Determine if bacteria tube can be dragged
     *
     * Called for [dragEnabled] of bact tube
     *
     * @returns {boolean} - true if tube has phage
     */
    canDragBact() {
        return this.phage.length > 0;
    }
    /**
     * Data to be dragged from the bacteria tube
     *
     * Called for [dragData] of bact tube
     *
     * @param {string} src - E. coli source, "B" or "K"
     * @returns {Object} - data with lawn type, src, and phage list
     */
    getDataBact(src) {
        return {
            lawnType: src,
            src: src,
            phage: this.phage
        };
    }
    /**
     * Determines classes for a bacteria tube
     *
     * @param {string} src - E. coli source, "B" or "K"
     * @returns {Object} - applicable classes
     */
    getClassesBact(src) {
        return { 'bact-tube test-tube-outer': true,
            'invisible': (src === 'B' ? this.isHidden["B"] : this.isHidden["K"]),
            'tube-b': (src === 'B'),
            'tube-k': (src === 'K'),
            'n-phage-1': this.phage.length === 1,
            'n-phage-2': this.phage.length === 2
        };
    }
    /**
     * Drop phage from fridge into bacteria tube
     *
     * Called on (onDropSuccess) of bacteria tubes
     *
     * @param {any} $event - drag event with phage data
     * @param {string} src - bacteria source phage dragged to
     */
    dropPhageBact($event, src) {
        var incomingPhage = $event.dragData;
        if (incomingPhage.hasOwnProperty('id') == false) {
            this.errorMessage = 'Only add phage from the fridge';
        }
        else if (this.phage.length >= 2) {
            this.errorMessage = 'Cannot have more than 2 phage in a tube';
        }
        else {
            // add phage - type ExperimentPhage
            this.phage.push({
                id: incomingPhage.id,
                strainNum: incomingPhage.strainNum,
                numPhage: scenario_globals_1.ScenarioGlobals.numPhage
            });
            switch (src) {
                case 'B':
                    this.isHidden['K'] = true;
                    break;
                case 'K':
                    this.isHidden['B'] = true;
                    break;
            }
        }
    }
    /**
     * Determine if dilution tube can be dragged
     *
     * Called for [dragEnabled] of dilution tube (0-3)
     *
     * @param {number} src - dilution tube number
     * @returns {boolean} - true if tube has contents
     */
    canDragDil(src) {
        return (this.contents[src] !== null);
    }
    /**
     * Determines classes for a dilution tube
     *
     * @param {number} src - dilution tube number (0-3)
     * @returns {Object} - applicable classes
     */
    getClassesDil(src) {
        let tube = this.contents[src];
        return { 'dil-tube test-tube-outer': true,
            'tube-b': (tube !== null && tube.lawnType === 'B'),
            'tube-k': (tube !== null && tube.lawnType === 'K')
        };
    }
    /**
     * Determines classes for a dilution tube label
     *
     * @param {number} src - dilution tube number (0-3)
     * @returns {Object} - applicable classes
     */
    getClassesDilLabel(src) {
        return {
            'dil-value': true,
            'invisible': !this.visibleLabel[src]
        };
    }
    /**
     * Determines if object can be dropped in dilution tube
     *
     * Called for [allowDrop] of dilution tube
     *
     * @param {number} dest - dilution tube number (0-3)
     * @returns {function} - function which returns true/false if object can be dropped
     */
    canDropDil(dest) {
        return (dragData) => {
            if (dragData === null || dragData === undefined)
                return false;
            if (dragData.hasOwnProperty('src') === false) {
                return false;
            }
            let src = dragData.src;
            if (dest === 0 && (src === 'B' || src === 'K')) {
                return true;
            }
            else if (dest > 0 && src === dest - 1) {
                return true;
            }
            return false;
        };
    }
    /**
     * Data to be dragged from the dilution tube
     *
     * Called for [dragData] of dilution tube
     *
     * @param {number} src - dilution tube number (0-3)
     * @returns {Object} - data with dilution tube contents and src
     */
    getDataDil(src) {
        if (this.contents[src] !== null)
            this.contents[src]['src'] = src;
        return this.contents[src];
    }
    /**
     * Drop contents from bact tube/dilution tube into dilution tube
     *
     * Called on (oDropSuccess) of dilution tubes
     *
     * @param {any} $event - drag event with content/phage data
     * @param {string} dest - dest tube
     */
    dropContentsDil($event, dest) {
        let incomingDat = JSON.parse(JSON.stringify($event.dragData));
        if (incomingDat.hasOwnProperty('lawnType') && incomingDat.hasOwnProperty('phage')) {
            // dilute
            for (let i = 0; i < incomingDat.phage.length; i++) {
                incomingDat.phage[i].numPhage /= this.dilutionValue;
            }
            this.contents[dest] = incomingDat;
            if (dest < 3) {
                this.visibleLabel[dest + 1] = true;
            }
            // disable dilution value changes
            this.canEditDilution = false;
        }
    }
    /**
     * Determines classes for plate depending if empty, full, has phage
     *
     * @returns {Object} - applicable classes
     */
    getClassesPlate() {
        return {
            'col-12 col-md-5 rounded-circle border border-dark': true,
            'bg-secondary text-light': this.isFull,
            'bg-light text-primary': (!this.isFull && !this.isEmpty),
            'text-danger': (this.lawnType === 'K'),
            'text-info': (this.lawnType === 'B')
        };
    }
    /**
     * Determines if object can be dropped on plate
     *
     * Called for [allowDrop] of plate
     *
     * @returns {function} - function which returns true/false if object can be dropped
     */
    canDropPlate() {
        return (dragData) => {
            //console.log(dragData);
            if (dragData === null || dragData === undefined)
                return false;
            if (dragData.hasOwnProperty('src') && dragData.src
                !== 'small' && dragData.src !== 'large') {
                return true;
            }
            return false;
        };
    }
    /**
     * Drop tube contents on the plate
     *
     * Called on (onDropSuccess) of plate
     *
     * @param {any} $event - drag event with contents
     */
    dropOnPlate($event) {
        let contents = $event.dragData;
        // check we have everything we need
        if (contents.hasOwnProperty('lawnType') === false) {
            this.errorMessage = 'There is no bacteria in the tube for phage to grow on.';
            return;
        }
        if (contents.hasOwnProperty('phage') === false || contents.phage.length === 0) {
            this.errorMessage = 'There is no phage in the tube.';
            return;
        }
        // gather data
        this.lawnType = contents.lawnType;
        let phage1 = contents.phage[0];
        let phage2 = null;
        if (contents.phage.length === 2) {
            phage2 = contents.phage[1];
        }
        // perform the cross
        this._performCross(this.lawnType, phage1, phage2);
    }
    /**
     * Calls the experiment service to perform the cross and saves
     * variables
     *
     * @param {string} lawnType - bacteria used, "B" or "K"
     * @param {any} phage1 - first phage in cross
     * @param {any} phage2 - second phage in cross, or null
     */
    _performCross(lawnType, phage1, phage2) {
        let newPlate = {
            lawnType: lawnType,
            phage1: phage1,
            phage2: phage2,
            specials: {},
            location: 'lab',
            scenarioData: this.scenarioDetails,
            capacity: scenario_globals_1.ScenarioGlobals.plateCapacity
        };
        this._experimentService.createPlate(newPlate)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            this.isFull = res.full;
            this.smallPlaqueList = res.smallPlaque;
            this.largePlaqueList = res.largePlaque;
            this.isEmpty = false;
            this.genotypes = res.genotypes;
            // success
        }, (err) => {
            // error
            this.errorMessage = err.error.message || err.message || 'Error';
        });
    }
    /**
     * Determine if plaque from plate can be dragged
     *
     * Called for [dragEnabled] of plaques on plate
     *
     * @param {string} src - small or large plaque
     * @returns {boolean} - true if there are still plaques of that size
     */
    canDragPlate(src) {
        if (src === 'small')
            return this.smallPlaqueList.length > 0;
        else
            return this.largePlaqueList.length > 0;
    }
    /**
     * Pick a plaque from the plate to save to the fridge
     *
     * Called for [dragData] of plaque on plate
     *
     * @param {string} src - small or large plaque
     * @returns {Object} - phage genotype data
     */
    getPhagePlate(src) {
        let tmpList = (src === 'small' ? this.smallPlaqueList : this.largePlaqueList);
        if (tmpList.length === 0) {
            return null;
        }
        let plaque = tmpList[0];
        let genotypeIndex = plaque.i;
        let phage = JSON.parse(JSON.stringify(this.genotypes[genotypeIndex]));
        phage['src'] = plaque.pheno;
        return phage;
    }
    /**
     * Removes successfully dragged phage from available phage list
     *
     * Called on (onDragSuccess) of plaque on plate
     *
     * @param {any} $event - drag event with phage saved
     */
    addedToFridge($event) {
        let strain = $event.dragData;
        let src = strain.src;
        if (src === 'small') {
            this.smallPlaqueList.shift();
        }
        else {
            this.largePlaqueList.shift();
        }
    }
};
LabRoomComponent = __decorate([
    core_1.Component({
        selector: 'lab-room',
        templateUrl: './app/scenario/location/lab-room/lab-room.template.html',
        styleUrls: ['./app/scenario/location/lab-room/lab-room.style.css']
    }),
    __metadata("design:paramtypes", [experiment_service_1.ExperimentService, scenario_service_1.ScenarioService])
], LabRoomComponent);
exports.LabRoomComponent = LabRoomComponent;


/***/ }),

/***/ 411:
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
const scenario_globals_1 = __webpack_require__(118);
const experiment_service_1 = __webpack_require__(183);
const scenario_service_1 = __webpack_require__(39);
let PlexerRoomComponent = class PlexerRoomComponent {
    constructor(_experimentService, _scenarioService) {
        this._experimentService = _experimentService;
        this._scenarioService = _scenarioService;
        this.chosenBact = 'none';
        this.dilutionValue = scenario_globals_1.ScenarioGlobals.defaultPlexerDilution;
        this.plexerType = 'multi';
        this.nStrains = [0, 0];
        this.errorMessage = '';
        this._clearData();
    }
    ngOnInit() {
        this.subscription = this._scenarioService.getScenarioDetails
            .subscribe((details) => this.scenarioDetails = details);
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
        if (this.expSubscription)
            this.expSubscription.unsubscribe();
    }
    /**
     * Initalize/clear row and column phage
     */
    _clearData() {
        this.rows = [];
        this.cols = [];
        for (let i = 0; i < 8; i++) {
            this.rows.push(null);
            this.cols.push(null);
        }
        this.nStrains = [0, 0];
    }
    /**
     * Reset the plexer and parameters
     *
     * Called on (click) of reset button
     */
    reset() {
        this.chosenBact = 'none';
        this.dilutionValue = scenario_globals_1.ScenarioGlobals.defaultPlexerDilution;
        this.plexerType = 'multi';
        this._clearData();
        this.results = {};
        this.errorMessage = '';
    }
    /**
     * Get the CSS class for each phage button based on which
     * phage type is set
     *
     * @param {string} src - button to get classes for
     * @returns {Object} - classes which apply to this button
     */
    getTubeClasses(src) {
        return {
            'btn border border-secondary': true,
            //'': (this.chosenBact !== src),
            'chosen': (this.chosenBact === src),
            'btn-outline-info': (src === 'B' && this.chosenBact !== src),
            'btn-info': (src === 'B' && this.chosenBact === src),
            'btn-outline-danger': (src === 'K' && this.chosenBact !== src),
            'btn-danger': (src === 'K' && this.chosenBact === src)
        };
    }
    /**
     * Get the CSS class for each plexer button based on which
     * plexer type is set
     *
     * @param {string} src - button to get classes for
     * @returns {Object} - classes which apply to this button
     */
    getPlexerClasses(src) {
        return {
            'btn': true,
            'btn-outline-secondary': (this.plexerType !== src),
            'btn-secondary': (this.plexerType === src)
        };
    }
    /**
     * Determine if user is able to submit plexer by disabling
     * the submit button when unable to submit
     *
     * @returns {boolean} - true if user cannot submit
     */
    submitDisabled() {
        // determine if disabled
        var disabled = this.chosenBact === 'none';
        // check that at least 1 phage added for row/col
        if (this.nStrains[0] === 0 || this.nStrains[1] === 0) {
            return true;
        }
        return disabled;
    }
    /**
     * Removes null elements from input array and dilutes the
     * number of phage
     *
     * Used before submitting row/col phage
     *
     * @param {ExperimentPhage[]} inData - input array to be cleaned
     * @returns {ExperimentPhage[]} - cleaned array
     */
    _cleanArrays(inData) {
        var clean = inData.filter((elt) => {
            return elt !== null;
        }).map((elt) => {
            return { id: elt.id,
                strainNum: elt.strainNum,
                numPhage: elt.numPhage / (this.dilutionValue * 1000)
            };
        });
        return clean;
    }
    /**
     * Gets experiment data and submits to service to get results
     * of the multiplexer
     *
     * Called on (click) of submit button
     */
    performPlexer() {
        // need to deal with dilution values
        let tmpRows = (this.plexerType === 'multi' ? this.rows.slice(0, 2) : this.rows);
        let cleanRows = this._cleanArrays(tmpRows);
        let cleanCols = this._cleanArrays(this.cols);
        // gather data
        var data = {
            lawnType: this.chosenBact,
            rowPhage: cleanRows,
            colPhage: cleanCols,
            specials: {},
            location: this.plexerType,
            scenarioData: this.scenarioDetails,
            capacity: scenario_globals_1.ScenarioGlobals.plexerCapacity
        };
        // use the service
        this.expSubscription = this._experimentService.performPlexer(data)
            .subscribe((res) => {
            this.results = res;
        }, (err) => {
            this.errorMessage = err.error.message || err.message || 'Unknown error';
        });
    }
    /**
     *  Add phage to row or column of plexer
     *
     * Called on (onDropSuccess) of row/col header
     *
     * @param {any} $event - dragEvent; includes phage data
     * @param {string} dir - add to "row" or "col"
     * @param {number} spot - position to add phage
     */
    addPhage($event, dir, spot) {
        let fphage = $event.dragData;
        let phage = {
            id: fphage.id,
            strainNum: fphage.strainNum,
            numPhage: scenario_globals_1.ScenarioGlobals.numPhage
        };
        // add to row
        if (dir === 'row' && spot < 8) {
            this.rows[spot] = phage;
            this.nStrains[0] = this.rows.filter(function (value) { return value !== null; }).length;
        }
        else if (spot < 8) {
            this.cols[spot] = phage;
            this.nStrains[1] = this.cols.filter(function (value) { return value !== null; }).length;
        }
    }
    /**
     * Returns CSS classes for a row
     *
     * @param {number} rowInt - row we are considering
     * @returns {Object} classes for the row
     */
    getRowClass(rowInt) {
        return {
            'data-table-row': true,
            'invisible': this._isRowHidden(rowInt)
        };
    }
    /**
     * Determine if row is hidden based on plexer type;
     * rows 2-7 are hidden for multiplexer
     *
     * @param {number} rowInt - row we are considering
     * @returns {boolean} true if row is hidden
     */
    _isRowHidden(rowInt) {
        return (this.plexerType === 'multi' && rowInt > 1);
    }
};
PlexerRoomComponent = __decorate([
    core_1.Component({
        selector: 'plexer-room',
        templateUrl: './app/scenario/location/plexer-room/plexer-room.template.html',
        styleUrls: ['./app/scenario/location/plexer-room/plexer-room.style.css']
    }),
    __metadata("design:paramtypes", [experiment_service_1.ExperimentService,
        scenario_service_1.ScenarioService])
], PlexerRoomComponent);
exports.PlexerRoomComponent = PlexerRoomComponent;


/***/ }),

/***/ 412:
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
const router_1 = __webpack_require__(11);
const Subject_1 = __webpack_require__(8);
__webpack_require__(34);
const authentication_service_1 = __webpack_require__(30);
const scenario_service_1 = __webpack_require__(39);
const scenario_globals_1 = __webpack_require__(118);
let ModelRoomComponent = class ModelRoomComponent {
    constructor(_router, _route, _authenticationService, _scenarioService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._scenarioService = _scenarioService;
        this.errorMessage = '';
        this.isDestroyed$ = new Subject_1.Subject();
        this.stepSize = scenario_globals_1.ScenarioGlobals.deletionGuessLength;
        this.geneAr = [];
        let nBlocks = Math.ceil(scenario_globals_1.ScenarioGlobals.geneLength / this.stepSize);
        for (let i = 0; i < nBlocks; i++) {
            this.geneAr.push(i);
        }
        this._width = (100 / nBlocks).toString();
    }
    ngOnInit() {
        /*this._authenticationService.getUser
          .takeUntil(this.isDestroyed$)
          .subscribe( (res) =>{
          this.userId = res.id;
        });*/
        let u = this._authenticationService.getUser();
        if (u) {
            this.userId = u.id;
        }
        this._route.parent.params
            .takeUntil(this.isDestroyed$)
            .subscribe(params => {
            this.scenarioId = params['scenId'];
        });
        this._scenarioService.getGuesses
            .takeUntil(this.isDestroyed$)
            .subscribe((dels) => {
            this.guesses = dels;
            this.keys = Object.keys(dels).map((k) => { return Number.parseInt(k); });
            if (this.keys.length === 0) {
                this.errorMessage = 'No phage available for modelling';
            }
            else {
                this.errorMessage = '';
            }
        });
    }
    ngOnDestory() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
    getBlockClass(strain, pos) {
        let posGuess = this.guesses[strain][pos];
        return {
            'guess-block btn p-0': true,
            'btn-outline-secondary': !posGuess,
            'bg-dark': posGuess // active
        };
    }
    toggleBlock(strain, pos) {
        let c = this.guesses[strain][pos];
        this.guesses[strain][pos] = !c;
    }
    saveData() {
        // use service and save data
        let out = JSON.stringify(this.guesses);
        this._scenarioService
            .saveDeletions(this.guesses, this.userId, this.scenarioId)
            .takeUntil(this.isDestroyed$)
            .subscribe((dat) => {
            this.guesses = JSON.parse(dat);
            this._scenarioService.setScenario(null, dat);
        });
    }
};
ModelRoomComponent = __decorate([
    core_1.Component({
        selector: 'model-room',
        templateUrl: './app/scenario/location/model-room/model-room.template.html',
        styleUrls: ['./app/scenario/location/model-room/model-room.style.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        scenario_service_1.ScenarioService])
], ModelRoomComponent);
exports.ModelRoomComponent = ModelRoomComponent;


/***/ }),

/***/ 413:
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
const router_1 = __webpack_require__(11);
const scenario_service_1 = __webpack_require__(39);
let LandingRoomComponent = class LandingRoomComponent {
    constructor(_router, _route, _scenarioService) {
        this._router = _router;
        this._route = _route;
        this._scenarioService = _scenarioService;
    }
    ngOnInit() {
        let scenId = this._route.parent.snapshot.paramMap.get('scenId');
        this.subscription = this._scenarioService
            .getScenario(scenId)
            .subscribe(scenario => {
            this.scenario = scenario;
        }, error => this._router.navigate(['/']));
    }
    ngOnDestory() {
        this.subscription.unsubscribe();
    }
};
LandingRoomComponent = __decorate([
    core_1.Component({
        selector: 'landing-room',
        templateUrl: 'app/scenario/location/landing-room/landing-room.template.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        scenario_service_1.ScenarioService])
], LandingRoomComponent);
exports.LandingRoomComponent = LandingRoomComponent;


/***/ }),

/***/ 414:
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
const ng_bootstrap_1 = __webpack_require__(115);
let PhageDialogComponent = class PhageDialogComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.viewParents = false;
        //this.hasParents = (this.phage.parents.length === 0);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PhageDialogComponent.prototype, "phage", void 0);
PhageDialogComponent = __decorate([
    core_1.Component({
        selector: 'phage-dialog-content',
        templateUrl: './app/scenario/fridge/phage-dialog.template.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], PhageDialogComponent);
exports.PhageDialogComponent = PhageDialogComponent;


/***/ }),

/***/ 55:
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
const http_1 = __webpack_require__(54);
const BehaviorSubject_1 = __webpack_require__(64);
let CourseService = class CourseService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = 'api/admin';
        this._adminId = new BehaviorSubject_1.BehaviorSubject(-1);
    }
    setAdmin(id) {
        this._adminId.next(id);
    }
    getAdmin() {
        return this._adminId.getValue();
    }
    /*listCourses(userId: number): Observable<any>{
      return this._http
        .get(`${this._baseURL}/${userId}/courses`);
    }*/
    listCourses() {
        return this._http
            .get(`${this._baseURL}/${this.getAdmin()}/courses`);
    }
    /*createCourse(userId: number, body: any): Observable<any>{
      return this._http
        .post(`${this._baseURL}/${userId}/courses`, body);
    }*/
    createCourse(body) {
        return this._http
            .post(`${this._baseURL}/${this.getAdmin()}/courses`, body);
    }
    /*getCourse(userId: number, courseNum: string): Observable<any>{
      return this._http
        .get(`${this._baseURL}/${userId}/courses/${courseNum}`);
    }*/
    getCourse(courseNum) {
        return this._http
            .get(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}`);
    }
    getStudents(courseNum) {
        return this._http
            .get(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}/students`);
    }
    getPossibleInstructors(courseNum) {
        return this._http
            .get(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}/instructors`);
    }
    ;
    addInstructor(courseNum, newInstrId) {
        return this._http
            .post(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}/instructors/${newInstrId}`, { instructor: true });
    }
    /*editCourse(userId: number, courseNum: string, body: any): Observable<any>{
      return this._http
        .post(`${this._baseURL}/${userId}/courses/${courseNum}`, body);
    }*/
    editCourse(courseNum, body) {
        return this._http
            .post(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}`, body);
    }
    deleteCourse(userId, courseNum) {
        return this._http
            .delete(`${this._baseURL}/${userId}/courses/${courseNum}`);
    }
    deleteStudents(userId, courseNum) {
        return this._http
            .delete(`${this._baseURL}/${userId}/courses/${courseNum}/users`);
    }
    /*getScenarioStatus(userId: number, courseNum: string, scenId: string): Observable<any>{
      return this._http
        .get(`${this._baseURL}/${userId}/courses/${courseNum}/${scenId}`);
    }*/
    getScenarioStatus(courseNum, scenId) {
        return this._http
            .get(`${this._baseURL}/${this.getAdmin()}/courses/${courseNum}/${scenId}`);
    }
    getCourseList() {
        return this._http
            .get(`/api/courses`);
    }
};
CourseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], CourseService);
exports.CourseService = CourseService;


/***/ }),

/***/ 69:
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
const http_1 = __webpack_require__(54);
const BehaviorSubject_1 = __webpack_require__(64);
let StudentService = class StudentService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = 'api/admin';
        this._adminId = new BehaviorSubject_1.BehaviorSubject(-1);
        this._adminRole = new BehaviorSubject_1.BehaviorSubject(-1);
    }
    setAdmin(id, role) {
        this._adminId.next(id);
        this._adminRole.next(role);
    }
    getAdmin() {
        return this._adminId.getValue();
    }
    getAdminRole() {
        return this._adminRole.getValue();
    }
    /*listStudents(userId: number): Observable<any>{
      return this._http
              .get(`${this._baseURL}/${userId}/users`);
    }*/
    listStudents() {
        return this._http
            .get(`${this._baseURL}/${this.getAdmin()}/students`);
    }
    /*getUser(userId: number, studentId: number): Observable<any>{
      return this._http
              .get(`${this._baseURL}/${userId}/users/${studentId}`);
    }*/
    getStudent(studentId) {
        return this._http
            .get(`${this._baseURL}/${this.getAdmin()}/students/${studentId}`);
    }
    /*setUserRole(userId: number, studentId: number, role: string): Observable<any>{
      let body = {role: role};
      return this._http
              .post(`${this._baseURL}/${userId}/users/${studentId}`, body);
    }*/
    setStudentRole(studentId, role) {
        let body = { role: role };
        return this._http
            .post(`${this._baseURL}/${this.getAdmin()}/students/${studentId}`, body);
    }
    deleteUser(userId, studentId) {
        return this._http
            .delete(`${this._baseURL}/${userId}/users/${studentId}`);
    }
    /*getFridge(userId: number, studentId: number, scenId: string): Observable<any>{
      return this._http
              .get(`${this._baseURL}/${userId}/users/${studentId}/${scenId}`);
    }*/
    getFridge(studentId, scenId) {
        return this._http
            .get(`${this._baseURL}/${this.getAdmin()}/students/${studentId}/${scenId}`);
    }
    /*grantScenAccess(userId: number, studentId: number, scenId: string): Observable<any>{
      return this._http
              .post(`${this._baseURL}/${userId}/users/${studentId}/${scenId}`, {});
    }*/
    grantScenAccess(studentId, scenId, updatedState) {
        return this._http
            .post(`${this._baseURL}/${this.getAdmin()}/students/${studentId}/${scenId}`, { access: updatedState });
    }
};
StudentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], StudentService);
exports.StudentService = StudentService;


/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = __webpack_require__(232);
const app_module_1 = __webpack_require__(859);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 859:
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
const platform_browser_1 = __webpack_require__(67);
const forms_1 = __webpack_require__(25);
const router_1 = __webpack_require__(11);
const http_1 = __webpack_require__(54);
//import { DndModule } from 'ng2-dnd';
const app_component_1 = __webpack_require__(860);
const app_routes_1 = __webpack_require__(861);
//import { HomeModule } from './home/home.module';
const authentication_service_1 = __webpack_require__(30);
const scenario_service_1 = __webpack_require__(39);
const course_service_1 = __webpack_require__(55);
const admin_module_1 = __webpack_require__(862);
const authentication_module_1 = __webpack_require__(869);
const article_module_1 = __webpack_require__(871);
const home_module_1 = __webpack_require__(873);
const scenario_module_1 = __webpack_require__(875);
const nav_component_1 = __webpack_require__(879);
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            forms_1.FormsModule,
            home_module_1.HomeModule,
            admin_module_1.AdminModule,
            authentication_module_1.AuthenticationModule,
            article_module_1.ArticleModule,
            scenario_module_1.ScenarioModule,
            router_1.RouterModule.forRoot(app_routes_1.AppRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            nav_component_1.NavComponent
        ],
        providers: [
            authentication_service_1.AuthenticationService,
            scenario_service_1.ScenarioService,
            course_service_1.CourseService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 860:
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
const authentication_service_1 = __webpack_require__(30);
const router_1 = __webpack_require__(11);
let AppComponent = class AppComponent {
    constructor(_authenticationService, router) {
        this._authenticationService = _authenticationService;
        this.router = router;
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'genetics-app',
        template: '<cricket-nav></cricket-nav><router-outlet></router-outlet>',
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = [{
        path: '**',
        redirectTo: '/'
    }];


/***/ }),

/***/ 862:
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
const shared_module_1 = __webpack_require__(181);
const admin_route_module_1 = __webpack_require__(863);
const admin_component_1 = __webpack_require__(394);
const admin_home_component_1 = __webpack_require__(395);
const not_auth_component_1 = __webpack_require__(396);
const course_component_1 = __webpack_require__(867);
const course_create_component_1 = __webpack_require__(386);
const course_indiv_component_1 = __webpack_require__(387);
const course_edit_component_1 = __webpack_require__(388);
const course_list_component_1 = __webpack_require__(389);
const course_scenario_component_1 = __webpack_require__(390);
const student_list_component_1 = __webpack_require__(391);
const student_indiv_component_1 = __webpack_require__(392);
const student_fridge_component_1 = __webpack_require__(393);
const student_phage_component_1 = __webpack_require__(868);
const admin_guard_service_1 = __webpack_require__(385);
const student_service_1 = __webpack_require__(69);
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            admin_route_module_1.AdminRouteModule
        ],
        declarations: [
            admin_component_1.AdminComponent,
            admin_home_component_1.AdminHomeComponent,
            not_auth_component_1.NotAuthComponent,
            course_component_1.CourseComponent,
            course_create_component_1.CourseCreateComponent,
            course_indiv_component_1.CourseIndivComponent,
            course_edit_component_1.CourseEditComponent,
            course_list_component_1.CourseListComponent,
            course_scenario_component_1.CourseScenarioComponent,
            student_list_component_1.StudentListComponent,
            student_indiv_component_1.StudentIndivComponent,
            student_fridge_component_1.StudentFridgeComponent,
            student_phage_component_1.StudentPhageComponent
        ],
        providers: [
            admin_guard_service_1.AdminGuard,
            student_service_1.StudentService
        ]
    })
], AdminModule);
exports.AdminModule = AdminModule;


/***/ }),

/***/ 863:
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
const router_1 = __webpack_require__(11);
const admin_guard_service_1 = __webpack_require__(385);
const course_routes_1 = __webpack_require__(864);
const student_routes_1 = __webpack_require__(865);
const admin_component_1 = __webpack_require__(394);
const admin_home_component_1 = __webpack_require__(395);
const not_auth_component_1 = __webpack_require__(396);
const adminRoutes = [
    {
        path: 'admin',
        canActivate: [admin_guard_service_1.AdminGuard],
        canActivateChild: [admin_guard_service_1.AdminGuard],
        component: admin_component_1.AdminComponent,
        children: [
            {
                path: 'courses',
                //component: CourseComponent,
                children: course_routes_1.CourseRoutes
            },
            {
                path: 'students',
                children: student_routes_1.StudentRoutes
            },
            {
                path: '',
                component: admin_home_component_1.AdminHomeComponent
            }
        ]
    },
    {
        path: 'admin/not-auth',
        component: not_auth_component_1.NotAuthComponent
    }
];
let AdminRouteModule = class AdminRouteModule {
};
AdminRouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(adminRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AdminRouteModule);
exports.AdminRouteModule = AdminRouteModule;


/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const course_create_component_1 = __webpack_require__(386);
const course_indiv_component_1 = __webpack_require__(387);
const course_edit_component_1 = __webpack_require__(388);
const course_list_component_1 = __webpack_require__(389);
const course_scenario_component_1 = __webpack_require__(390);
exports.CourseRoutes = [
    {
        path: 'create',
        component: course_create_component_1.CourseCreateComponent
    },
    { path: ':courseNum',
        component: course_indiv_component_1.CourseIndivComponent
    },
    { path: ':courseNum/edit',
        component: course_edit_component_1.CourseEditComponent
    },
    {
        path: ':courseNum/:scenId',
        component: course_scenario_component_1.CourseScenarioComponent
    },
    {
        path: '',
        component: course_list_component_1.CourseListComponent
    }
];


/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const student_list_component_1 = __webpack_require__(391);
const student_indiv_component_1 = __webpack_require__(392);
const student_fridge_component_1 = __webpack_require__(393);
exports.StudentRoutes = [
    {
        path: ':studentId',
        component: student_indiv_component_1.StudentIndivComponent
    },
    {
        path: ':studentId/:scenId',
        component: student_fridge_component_1.StudentFridgeComponent
    },
    {
        path: '',
        component: student_list_component_1.StudentListComponent
    }
];


/***/ }),

/***/ 866:
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

/***/ 867:
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
__webpack_require__(34);
let CourseComponent = class CourseComponent {
};
CourseComponent = __decorate([
    core_1.Component({
        selector: 'course-cmp',
        templateUrl: 'app/admin/course/course.template.html'
    })
], CourseComponent);
exports.CourseComponent = CourseComponent;


/***/ }),

/***/ 868:
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
        templateUrl: 'app/admin/student/student-fridge/student-phage.template.html'
    }),
    __metadata("design:paramtypes", [])
], StudentPhageComponent);
exports.StudentPhageComponent = StudentPhageComponent;


/***/ }),

/***/ 869:
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
const forms_1 = __webpack_require__(25);
const common_1 = __webpack_require__(16);
const router_1 = __webpack_require__(11);
const authentication_routes_1 = __webpack_require__(870);
const authentication_component_1 = __webpack_require__(397);
const signin_component_1 = __webpack_require__(398);
const signup_component_1 = __webpack_require__(399);
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(authentication_routes_1.AuthenticationRoutes)
        ],
        declarations: [
            authentication_component_1.AuthenticationComponent,
            signin_component_1.SigninComponent,
            signup_component_1.SignupComponent
        ]
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;


/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const authentication_component_1 = __webpack_require__(397);
const signin_component_1 = __webpack_require__(398);
const signup_component_1 = __webpack_require__(399);
exports.AuthenticationRoutes = [{
        path: 'authentication',
        component: authentication_component_1.AuthenticationComponent,
        children: [
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
        ]
    }];


/***/ }),

/***/ 871:
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
const common_1 = __webpack_require__(16);
const forms_1 = __webpack_require__(25);
const router_1 = __webpack_require__(11);
const article_routes_1 = __webpack_require__(872);
const article_component_1 = __webpack_require__(400);
const create_component_1 = __webpack_require__(401);
const list_component_1 = __webpack_require__(402);
const view_component_1 = __webpack_require__(403);
const edit_component_1 = __webpack_require__(404);
let ArticleModule = class ArticleModule {
};
ArticleModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(article_routes_1.ArticleRoutes)
        ],
        declarations: [
            article_component_1.ArticleComponent,
            create_component_1.CreateComponent,
            list_component_1.ListComponent,
            view_component_1.ViewComponent,
            edit_component_1.EditComponent
        ]
    })
], ArticleModule);
exports.ArticleModule = ArticleModule;


/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const article_component_1 = __webpack_require__(400);
const create_component_1 = __webpack_require__(401);
const list_component_1 = __webpack_require__(402);
const view_component_1 = __webpack_require__(403);
const edit_component_1 = __webpack_require__(404);
exports.ArticleRoutes = [{
        path: 'articles',
        component: article_component_1.ArticleComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':articleId', component: view_component_1.ViewComponent },
            { path: ':articleId/edit', component: edit_component_1.EditComponent }
        ],
    }];


/***/ }),

/***/ 873:
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
const shared_module_1 = __webpack_require__(181);
const home_route_module_1 = __webpack_require__(874);
const home_component_1 = __webpack_require__(405);
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            home_route_module_1.HomeRouteModule
        ],
        declarations: [
            home_component_1.HomeComponent
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;


/***/ }),

/***/ 874:
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
const router_1 = __webpack_require__(11);
const home_component_1 = __webpack_require__(405);
const homeRoute = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    }
];
let HomeRouteModule = class HomeRouteModule {
};
HomeRouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(homeRoute)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], HomeRouteModule);
exports.HomeRouteModule = HomeRouteModule;


/***/ }),

/***/ 875:
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
const shared_module_1 = __webpack_require__(181);
const scenario_route_module_1 = __webpack_require__(876);
const scenario_component_1 = __webpack_require__(406);
const list_component_1 = __webpack_require__(407);
const location_guard_service_1 = __webpack_require__(409);
const experiment_service_1 = __webpack_require__(183);
const fridge_component_1 = __webpack_require__(878);
const phage_dialog_component_1 = __webpack_require__(414);
const location_component_1 = __webpack_require__(408);
const landing_room_component_1 = __webpack_require__(413);
const lab_room_component_1 = __webpack_require__(410);
const plexer_room_component_1 = __webpack_require__(411);
const model_room_component_1 = __webpack_require__(412);
let ScenarioModule = class ScenarioModule {
};
ScenarioModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            scenario_route_module_1.ScenarioRouterModule
        ],
        declarations: [
            scenario_component_1.ScenarioComponent,
            list_component_1.ListComponent,
            location_component_1.LocationComponent,
            fridge_component_1.FridgeComponent,
            phage_dialog_component_1.PhageDialogComponent,
            lab_room_component_1.LabRoomComponent,
            plexer_room_component_1.PlexerRoomComponent,
            model_room_component_1.ModelRoomComponent,
            landing_room_component_1.LandingRoomComponent
        ],
        entryComponents: [
            phage_dialog_component_1.PhageDialogComponent
        ],
        providers: [
            location_guard_service_1.LocationGuard,
            experiment_service_1.ExperimentService
        ]
    })
], ScenarioModule);
exports.ScenarioModule = ScenarioModule;


/***/ }),

/***/ 876:
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
const router_1 = __webpack_require__(11);
const scenario_component_1 = __webpack_require__(406);
const list_component_1 = __webpack_require__(407);
const location_routes_1 = __webpack_require__(877);
const scenarioRoutes = [
    {
        path: '',
        //component: ScenarioComponent,
        children: [
            {
                path: ':scenId',
                component: scenario_component_1.ScenarioComponent,
                children: location_routes_1.LocationRoutes
            },
            {
                path: '',
                component: list_component_1.ListComponent
            }
        ]
    }
];
let ScenarioRouterModule = class ScenarioRouterModule {
};
ScenarioRouterModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(scenarioRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], ScenarioRouterModule);
exports.ScenarioRouterModule = ScenarioRouterModule;


/***/ }),

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const location_component_1 = __webpack_require__(408);
const location_guard_service_1 = __webpack_require__(409);
const lab_room_component_1 = __webpack_require__(410);
const plexer_room_component_1 = __webpack_require__(411);
const model_room_component_1 = __webpack_require__(412);
const landing_room_component_1 = __webpack_require__(413);
exports.LocationRoutes = [
    {
        path: '',
        component: location_component_1.LocationComponent,
        canActivate: [location_guard_service_1.LocationGuard],
        children: [
            { path: 'lab-room', component: lab_room_component_1.LabRoomComponent },
            { path: 'plexer-room', component: plexer_room_component_1.PlexerRoomComponent },
            { path: 'model-room', component: model_room_component_1.ModelRoomComponent },
            { path: 'info', component: landing_room_component_1.LandingRoomComponent },
            { path: '', component: landing_room_component_1.LandingRoomComponent }
        ]
    }
];


/***/ }),

/***/ 878:
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
const router_1 = __webpack_require__(11);
const ng_bootstrap_1 = __webpack_require__(115);
const Subject_1 = __webpack_require__(8);
const scenario_service_1 = __webpack_require__(39);
const authentication_service_1 = __webpack_require__(30);
const scenario_globals_1 = __webpack_require__(118);
const phage_dialog_component_1 = __webpack_require__(414);
let FridgeComponent = class FridgeComponent {
    constructor(_router, _route, _authenticationService, _scenarioService, _modalService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._scenarioService = _scenarioService;
        this._modalService = _modalService;
        this.modalDialog = 'Hi';
        this.shelf = 0;
        this.errorMessage = '';
        this.maxShelf = scenario_globals_1.ScenarioGlobals.nFridgeShelf;
        this.spots = scenario_globals_1.ScenarioGlobals.nFridgeSpots;
        this.isDestroyed$ = new Subject_1.Subject();
    }
    /**
     * Initailize the fridge when creating component
     */
    ngOnInit() {
        this.user = this._authenticationService.getUser();
        let userId = this.user.id;
        let scenId = this._route.snapshot.paramMap.get('scenId');
        this._scenarioService.getFridge(userId, scenId)
            .takeUntil(this.isDestroyed$)
            .subscribe((fridge) => { this._initFridge(fridge); }, (err) => {
            if (err.status === 307) {
                this._createFridge(userId, scenId);
            }
            else {
                this.errorMessage = err.message;
            }
        });
    }
    ngOnDestroy() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
    _createFridge(userId, scenId) {
        this._scenarioService.createFridge(userId, scenId)
            .takeUntil(this.isDestroyed$)
            .subscribe((fridge) => {
            this._initFridge(fridge);
        }, (err) => {
            this.errorMessage = err.message;
        });
    }
    _initFridge(newFridge) {
        this.fridge = newFridge;
        this.strains = this._fillStrains(newFridge.strains);
        this._currStrains();
        this._scenarioService.setScenario(newFridge.scenarioDetails, newFridge.guesses);
    }
    /**
     * @param {Phage[]} fridgeStrains - array for created strains in the fridge
     * @returns {Phage[]} - array of all slots in fridge, including empty
     */
    _fillStrains(fridgeStrains) {
        var out = [];
        for (let i = 0; i < this.maxShelf * this.spots; i++) {
            out.push({ strainNum: i, phageType: 'empty', comment: '', id: '' });
        }
        // add original strains
        for (let i = 0; i < fridgeStrains.length; i++) {
            let n = fridgeStrains[i].strainNum;
            out[n] = fridgeStrains[i];
        }
        return out;
    }
    /**
     * Sets strains for visible shelf
     */
    _currStrains() {
        let start = this.shelf * this.spots;
        let end = start + this.spots;
        this.currStrains = this.strains.slice(start, end);
    }
    /**
     * Increase or decrease visible shelf
     * @param {number} inc - amout to change shelf by
     */
    changeShelf(inc) {
        this.errorMessage = '';
        if (this.shelf <= this.maxShelf - 1 && inc === 1) {
            this.shelf++;
            this._currStrains();
        }
        else if (this.shelf > 0 && inc === -1) {
            this.shelf--;
            this._currStrains();
        }
    }
    /**
     * Set visible shelf to a specific number;
     * used to jump to the beginning and end
     * @param {number} nShelf - shelf to go to
     */
    setShelf(nShelf) {
        this.shelf = nShelf;
        this._currStrains();
    }
    /**
     * Determine if strain can be dropped in a slot
     * can be dropped if slot is empty and src is small or large
     *
     * Called by allowDrop
     *
     * @param {number} spot - spot to test to see if can drop
     *
     * @returns {any} - function which returns true or false if
     * strain can be dropped in slot
     */
    canDrop(spot) {
        return (dragData) => {
            let out = false;
            if (dragData && dragData.hasOwnProperty('src')) {
                if (dragData.src === 'small' || dragData.src === 'large') {
                    let trySpot = this.strains[spot];
                    if (trySpot.phageType === 'empty') {
                        out = true;
                    }
                }
            }
            return out;
        };
    }
    /**
     * Adds a new strain to a fridge
     *
     * Called by onDropSucess of slot
     *
     * @param {any} $event - drag event, incuding data for strain to add;
     * has: shifts, deletion
     * @param {number} spot - slot to drop new strain
     */
    dropStrain($event, spot) {
        // onDropSuccess
        let strain = $event.dragData;
        // need strainNum, mutationList, deletion
        let newStrain = {
            strainNum: spot,
            mutationList: strain.shifts,
            deletion: strain.deletion
        };
        // add to fridge
        let userId = this.user.id;
        let scenCode = this.fridge.scenCode;
        this._scenarioService.addStrain(newStrain, userId, scenCode)
            .subscribe((res) => {
            this.strains[spot] = {
                // strainNum comment phageType id parents
                strainNum: res.strainNum,
                comment: res.comment,
                phageType: res.phageType,
                id: res.id,
                parents: res.parents
            };
            this._currStrains();
        }, (err) => {
            this.errorMessage = err.message;
        });
    }
    /**
     * opens a dialog box to edit/learn more about selected phage
     */
    editPhage(src) {
        let phage = this.strains[src];
        const modelRef = this._modalService.open(phage_dialog_component_1.PhageDialogComponent, { windowClass: 'phage-dialog' });
        modelRef.componentInstance.phage = phage;
        modelRef.result.then((result) => {
            let resType = typeof result;
            if (resType === "string" && result === 'delete') {
                // delete the phage
                this._deletePhage(src);
            }
            else if (resType === "object") {
                // edit it
                this._editPhage(src, result);
            }
            else {
                // do nothing
                return;
            }
        }, (reason) => {
            // do nothing
            return;
        });
    }
    _editPhage(src, newPhage) {
        this._scenarioService.updateStrain(newPhage, this.user.id, this.fridge.scenCode)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            this.strains[src] = res;
            this._currStrains();
        }, (err) => {
            this.errorMessage = err.error.message;
        });
    }
    _deletePhage(src) {
        let newPhage = this.strains[src];
        this._scenarioService.deleteStrain(newPhage, this.user.id, this.fridge.scenCode)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            // successful
            this.strains[src] = { strainNum: src, phageType: 'empty', comment: '', id: '' };
            this._currStrains();
        }, (err) => {
            this.errorMessage = err.error.message;
        });
    }
};
FridgeComponent = __decorate([
    core_1.Component({
        selector: 'fridge',
        templateUrl: './app/scenario/fridge/fridge.template.html',
        styleUrls: ['./app/scenario/fridge/fridge.style.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        scenario_service_1.ScenarioService,
        ng_bootstrap_1.NgbModal])
], FridgeComponent);
exports.FridgeComponent = FridgeComponent;


/***/ }),

/***/ 879:
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
let NavComponent = class NavComponent {
    constructor() {
    }
};
NavComponent = __decorate([
    core_1.Component({
        selector: 'cricket-nav',
        templateUrl: './app/nav/nav.template.html',
    }),
    __metadata("design:paramtypes", [])
], NavComponent);
exports.NavComponent = NavComponent;


/***/ }),

/***/ 88:
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
//import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
const http_1 = __webpack_require__(54);
let ArticleService = class ArticleService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = 'api/articles';
    }
    create(article) {
        return this._http
            .post(this._baseURL, article);
        //.map((res: Response) => res.json())
        //.catch(this.handleError);
    }
    read(articleId) {
        return this._http
            .get(`${this._baseURL}/${articleId}`);
        //.map((res: Response) => res.json())
        //.catch(this.handleError);
    }
    update(article) {
        return this._http
            .put(`${this._baseURL}/${article._id}`, article);
        //.map((res: Response) => res.json())
        //.catch(this.handleError);
    }
    delete(articleId) {
        return this._http
            .delete(`${this._baseURL}/${articleId}`);
        //.map((res: Response) => res.json())
        //.catch(this.handleError);
    }
    list() {
        return this._http
            .get(this._baseURL);
        //.map((res: Response) => res.json())
        //.catch(this.handleError);
    }
};
ArticleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ArticleService);
exports.ArticleService = ArticleService;


/***/ })

},[858]);
//# sourceMappingURL=bootstrap.js.map
