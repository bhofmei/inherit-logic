webpackJsonp([4],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/scenario.template.html";

/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/list/list.template.html";

/***/ }),

/***/ 1002:
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
let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'cricket-app',
        template: '<cricket-nav></cricket-nav><router-outlet></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 1003:
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
const authentication_service_1 = __webpack_require__(25);
let NavComponent = class NavComponent {
    constructor(_authService) {
        this._authService = _authService;
    }
    ngOnInit() {
        this.subscription = this._authService.getUser$
            .subscribe((res) => {
            this.user = res;
        });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
NavComponent = __decorate([
    core_1.Component({
        selector: 'cricket-nav',
        templateUrl: __webpack_require__(1004),
        styleUrls: [__webpack_require__(1005)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], NavComponent);
exports.NavComponent = NavComponent;


/***/ }),

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/nav/nav.template.html";

/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/nav/nav.style.css";

/***/ }),

/***/ 128:
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
const rxjs_1 = __webpack_require__(52);
const core_1 = __webpack_require__(1);
const http_1 = __webpack_require__(53);
let ScenarioService = class ScenarioService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = 'api/cricket';
        this._scenarioDetails = new rxjs_1.BehaviorSubject('');
        this.getScenarioDetails = this._scenarioDetails.asObservable();
        this._scenarioGuesses = new rxjs_1.BehaviorSubject({});
        this.getGuesses = this._scenarioGuesses.asObservable();
        this._scenarioCode = new rxjs_1.BehaviorSubject('');
        this.getScenarioCode = this._scenarioCode.asObservable();
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
    listScenarios() {
        return this._http
            .get(this._baseURL);
    }
    getScenario(scenId) {
        this._scenarioCode.next(scenId);
        return this._http
            .get(`${this._baseURL}/${scenId}`);
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
    addStrain(userId, scenId, strain) {
        return this._http
            .post(`${this._baseURL}/${userId}/${scenId}/fridge-phage`, strain);
    }
    updateStrain(userId, scenId, strain) {
        let strainId = strain.id;
        return this._http
            .post(`${this._baseURL}/${userId}/${scenId}/${strainId}`, strain);
    }
    deleteStrain(userId, scenId, strain) {
        let strainId = strain.id;
        return this._http
            .delete(`${this._baseURL}/${userId}/${scenId}/${strainId}`);
    }
};
ScenarioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ScenarioService);
exports.ScenarioService = ScenarioService;


/***/ }),

/***/ 130:
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
const authentication_service_1 = __webpack_require__(25);
let LoggedInGuard = class LoggedInGuard {
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
        return this.canActivate(route, state);
    }
};
LoggedInGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.Router])
], LoggedInGuard);
exports.LoggedInGuard = LoggedInGuard;


/***/ }),

/***/ 201:
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
const http_1 = __webpack_require__(53);
let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
        this._baseUrl = '/api/users/';
    }
    editProfile(userId, details) {
        return this.http.post(this._baseUrl + userId, details);
    }
    updatePassword(userId, credentials) {
        return this.http.post(this._baseUrl + userId + '/update-password', credentials);
    }
};
ProfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),

/***/ 202:
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
const http_1 = __webpack_require__(53);
let CourseService = class CourseService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = '/api/admin';
    }
    listCourses(adminId) {
        return this._http
            .get(`${this._baseURL}/${adminId}/courses`);
    }
    createCourse(adminId, body) {
        return this._http
            .post(`${this._baseURL}/${adminId}/courses`, body);
    }
    getCourse(adminId, courseNum) {
        return this._http
            .get(`${this._baseURL}/${adminId}/courses/${courseNum}`);
    }
    getStudents(adminId, courseNum) {
        return this._http
            .get(`${this._baseURL}/${adminId}/courses/${courseNum}/students`);
    }
    getPossibleInstructors(adminId, courseNum) {
        return this._http
            .get(`${this._baseURL}/${adminId}/courses/${courseNum}/instructors`);
    }
    ;
    addInstructor(adminId, courseNum, newInstrId) {
        return this._http
            .post(`${this._baseURL}/${adminId}/courses/${courseNum}/instructors/${newInstrId}`, { instructor: true });
    }
    editCourse(adminId, courseNum, body) {
        return this._http
            .post(`${this._baseURL}/${adminId}/courses/${courseNum}`, body);
    }
    deleteCourse(userId, courseNum) {
        return this._http
            .delete(`${this._baseURL}/${userId}/courses/${courseNum}`);
    }
    deleteStudents(userId, courseNum) {
        return this._http
            .delete(`${this._baseURL}/${userId}/courses/${courseNum}/students`);
    }
    getScenarioStatus(adminId, courseNum, scenId) {
        return this._http
            .get(`${this._baseURL}/${adminId}/courses/${courseNum}/${scenId}`);
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

/***/ 203:
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
const scenario_service_1 = __webpack_require__(128);
let ScenarioResolver = class ScenarioResolver {
    constructor(_scenarioService) {
        this._scenarioService = _scenarioService;
    }
    resolve(route, state) {
        const scenCode = route.params['scenId'];
        if (scenCode) {
            return this._scenarioService.getScenario(scenCode);
        }
        else {
            return new rxjs_1.Observable();
        }
    }
};
ScenarioResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [scenario_service_1.ScenarioService])
], ScenarioResolver);
exports.ScenarioResolver = ScenarioResolver;


/***/ }),

/***/ 25:
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
const http_1 = __webpack_require__(53);
const rxjs_1 = __webpack_require__(52);
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this._user = new rxjs_1.BehaviorSubject(null);
        this.getUser$ = this._user.asObservable();
        this._baseUrl = '/api/auth/';
        this.redirectUrl = '/';
    }
    setUser(user) {
        this._user.next(user);
    }
    getUser() {
        return this._user.getValue();
    }
    isLoggedIn() {
        return (!!this.getUser());
    }
    canAccessAdmin() {
        if (this.getUser()) {
            return this.getUser().role > 0;
        }
        else {
            return false;
        }
    }
    signin(credentials) {
        let body = JSON.stringify(credentials);
        let headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this._baseUrl + 'signin', body, { headers: headers });
    }
    signup(user) {
        let body = JSON.stringify(user);
        let headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this._baseUrl + 'signup', body, { headers: headers });
    }
    signout() {
        return this.http.get(this._baseUrl + 'signout');
    }
    forgetPassword(body) {
        return this.http.post(this._baseUrl + 'forget-password', body);
    }
    resetPassword(credentials) {
        return this.http.post(this._baseUrl + 'reset-password', credentials);
    }
};
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ 425:
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
let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
};
PageNotFoundComponent = __decorate([
    core_1.Component({
        selector: 'page-not-found',
        templateUrl: __webpack_require__(963),
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ 426:
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
const authentication_service_1 = __webpack_require__(25);
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
        templateUrl: __webpack_require__(964),
        styleUrls: [__webpack_require__(965)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ 427:
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
const authentication_service_1 = __webpack_require__(25);
let AdminGuard = class AdminGuard {
    constructor(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
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

/***/ 428:
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
const authentication_service_1 = __webpack_require__(25);
let AdminComponent = class AdminComponent {
    constructor(_authenticationService) {
        this._authenticationService = _authenticationService;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.adminUser = this._authenticationService.getUser();
    }
};
AdminComponent = __decorate([
    core_1.Component({
        selector: 'admin',
        templateUrl: __webpack_require__(981)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AdminComponent);
exports.AdminComponent = AdminComponent;


/***/ }),

/***/ 429:
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
        templateUrl: __webpack_require__(982)
    })
], AdminHomeComponent);
exports.AdminHomeComponent = AdminHomeComponent;


/***/ }),

/***/ 430:
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
        selector: 'not-auth',
        templateUrl: __webpack_require__(983)
    })
], NotAuthComponent);
exports.NotAuthComponent = NotAuthComponent;


/***/ }),

/***/ 431:
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
const forms_1 = __webpack_require__(14);
const authentication_service_1 = __webpack_require__(25);
const read_error_1 = __webpack_require__(63);
let SigninComponent = class SigninComponent {
    constructor(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.credentials = new forms_1.FormGroup({
            username: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
        });
    }
    get username() { return this.credentials.get('username'); }
    get password() { return this.credentials.get('password'); }
    signin() {
        this.subscription = this._authenticationService
            .signin(this.credentials.value)
            .subscribe((result) => {
            this._authenticationService.setUser(result);
            let redirect = this._authenticationService.redirectUrl ? this._authenticationService.redirectUrl : '/';
            this._router.navigate([redirect]);
        }, (error) => {
            this.errorMessage = read_error_1.readErrorMessage(error);
        });
    }
    getInputClass(formLabel) {
        let out = { 'form-control': true };
        if (this.credentials && this.credentials.get(formLabel)) {
            let ac = this.credentials.get(formLabel);
            if (ac.dirty || ac.touched) {
                out['is-invalid'] = ac.invalid;
                out['is-valid'] = ac.valid;
            }
        }
        return out;
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
SigninComponent = __decorate([
    core_1.Component({
        selector: 'signin',
        templateUrl: __webpack_require__(986)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.Router])
], SigninComponent);
exports.SigninComponent = SigninComponent;


/***/ }),

/***/ 432:
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
const forms_1 = __webpack_require__(14);
const router_1 = __webpack_require__(22);
const rxjs_1 = __webpack_require__(52);
const authentication_service_1 = __webpack_require__(25);
const course_service_1 = __webpack_require__(202);
const read_error_1 = __webpack_require__(63);
let SignupComponent = class SignupComponent {
    constructor(_authenticationService, _courseService, _router) {
        this._authenticationService = _authenticationService;
        this._courseService = _courseService;
        this._router = _router;
        this.errorMessage = '';
        this.courses = [];
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        this.user = new forms_1.FormGroup({
            'firstName': new forms_1.FormControl(''),
            'lastName': new forms_1.FormControl('', forms_1.Validators.required),
            'username': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            'course': new forms_1.FormControl('', forms_1.Validators.required),
            'password': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
            'confirmPassword': new forms_1.FormControl('', [forms_1.Validators.required, this.passwordMatchValidator]),
        });
        this._courseService.getCourseList()
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            let tmp = this._reorderCourses(res);
            this.courses = tmp;
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
            this.courses = [];
        });
    }
    get firstName() { return this.user.get('firstName'); }
    get lastName() { return this.user.get('lastName'); }
    get username() { return this.user.get('username'); }
    get course() { return this.user.get('course'); }
    get password() { return this.user.get('password'); }
    get confirmPassword() { return this.user.get('confirmPassword'); }
    _reorderCourses(courses) {
        let na = courses.filter((c) => { return c.courseNum === 'NA'; });
        let other = courses.filter((c) => {
            return c.courseNum !== 'NA';
        });
        return na.concat(other);
    }
    signup() {
        this._authenticationService
            .signup(this.user.value)
            .takeUntil(this.isDestroyed$)
            .subscribe((result) => {
            this._authenticationService.setUser(result);
            this._router.navigate(['/']);
        }, (error) => {
            this.errorMessage = read_error_1.readErrorMessage(error);
        });
    }
    passwordMatchValidator(ac) {
        let fg = ac.parent;
        if (!fg) {
            return null;
        }
        else {
            return fg.get('password').value === fg.get('confirmPassword').value ? null : { mismatch: true };
        }
    }
    getInputClass(formLabel) {
        let out = { 'form-control': true };
        if (this.user && this.user.get(formLabel)) {
            let ac = this.user.get(formLabel);
            if (ac.dirty || ac.touched) {
                out['is-invalid'] = ac.invalid;
                out['is-valid'] = ac.valid;
            }
        }
        return out;
    }
    ngOnDestroy() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
SignupComponent = __decorate([
    core_1.Component({
        selector: 'signup',
        templateUrl: __webpack_require__(987)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        course_service_1.CourseService,
        router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ 433:
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
const authentication_service_1 = __webpack_require__(25);
let SignoutComponent = class SignoutComponent {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    ngOnInit() {
        this.subscription = this._authService.signout()
            .subscribe((res) => {
            this._authService.setUser(null);
            this._router.navigate(['/']);
        });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
SignoutComponent = __decorate([
    core_1.Component({
        selector: 'signout',
        template: ''
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.Router])
], SignoutComponent);
exports.SignoutComponent = SignoutComponent;


/***/ }),

/***/ 434:
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
const authentication_service_1 = __webpack_require__(25);
const read_error_1 = __webpack_require__(63);
let ForgetPasswordComponent = class ForgetPasswordComponent {
    constructor(_authenticationService) {
        this._authenticationService = _authenticationService;
        this.errorMessage = '';
        this.successMessage = '';
    }
    sendForget() {
        this.successMessage = '';
        this.errorMessage = '';
        let body = { email: this.email };
        this.subscription = this._authenticationService
            .forgetPassword(body)
            .subscribe((result) => {
            this.successMessage = result.message;
        }, (error) => {
            this.errorMessage = read_error_1.readErrorMessage(error);
        });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
ForgetPasswordComponent = __decorate([
    core_1.Component({
        selector: 'forget-pswd',
        templateUrl: __webpack_require__(988)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], ForgetPasswordComponent);
exports.ForgetPasswordComponent = ForgetPasswordComponent;


/***/ }),

/***/ 435:
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
const authentication_service_1 = __webpack_require__(25);
const read_error_1 = __webpack_require__(63);
let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(_authenticationService, _route) {
        this._authenticationService = _authenticationService;
        this._route = _route;
        this.errorMessage = '';
        this.successMessage = '';
        this.isDisabled = false;
        this.credentials = {
            password: '',
            confirmPassword: '',
            token: null
        };
    }
    ngOnInit() {
        this.credentials.token = this._route.snapshot.paramMap.get('token');
        if (this.credentials.token === '') {
            this.errorMessage = 'No token specified';
            this.isDisabled = true;
        }
    }
    sendReset() {
        this.successMessage = '';
        this.errorMessage = this._checkPasswords();
        if (this.errorMessage === '') {
            this.subscription = this._authenticationService
                .resetPassword(this.credentials)
                .subscribe((result) => {
                this.credentials.password = '';
                this.credentials.confirmPassword = '';
                this.successMessage = result.message;
            }, (error) => {
                this.errorMessage = read_error_1.readErrorMessage(error);
            });
        }
    }
    _checkPasswords() {
        let p = this.credentials.password;
        let c = this.credentials.confirmPassword;
        if (p === '') {
            return 'Enter new password';
        }
        else if (c === '') {
            return 'Confirm new password';
        }
        else if (p !== c) {
            return 'Confirm password does not match';
        }
        else {
            return '';
        }
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
ResetPasswordComponent = __decorate([
    core_1.Component({
        selector: 'reset-pswd',
        templateUrl: __webpack_require__(989)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.ActivatedRoute])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;


/***/ }),

/***/ 436:
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
let HelpComponent = class HelpComponent {
    constructor() { }
};
HelpComponent = __decorate([
    core_1.Component({
        selector: 'help',
        templateUrl: __webpack_require__(992),
        styleUrls: [__webpack_require__(993)]
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);
exports.HelpComponent = HelpComponent;


/***/ }),

/***/ 437:
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
const profile_service_1 = __webpack_require__(201);
const authentication_service_1 = __webpack_require__(25);
const read_error_1 = __webpack_require__(63);
let UserProfileComponent = class UserProfileComponent {
    constructor(_profileService, _authService) {
        this._profileService = _profileService;
        this._authService = _authService;
        this.errorMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        this._authService.getUser$
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            this.userId = res.id;
            this.userInfo = {
                firstName: res.firstName,
                lastName: res.lastName,
                email: res.email
            };
        }, (idErr) => {
            this.errorMessage = read_error_1.readErrorMessage(idErr);
        });
    }
    updateProfile() {
        this._profileService.editProfile(this.userId, this.userInfo)
            .takeUntil(this.isDestroyed$)
            .subscribe((updated) => {
            this.userInfo = { firstName: updated.firstName,
                lastName: updated.lastName,
                email: updated.email };
            this._authService.setUser(updated);
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    ngOnDestroy() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
UserProfileComponent = __decorate([
    core_1.Component({
        selector: 'user-profile',
        templateUrl: __webpack_require__(996)
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        authentication_service_1.AuthenticationService])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;


/***/ }),

/***/ 438:
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
const profile_service_1 = __webpack_require__(201);
const authentication_service_1 = __webpack_require__(25);
const read_error_1 = __webpack_require__(63);
let UpdatePasswordComponent = class UpdatePasswordComponent {
    constructor(_router, _profileService, _authService) {
        this._router = _router;
        this._profileService = _profileService;
        this._authService = _authService;
        this.errorMessage = '';
        this.passwordMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
        this.credentials = {
            password: '',
            newPassword: '',
            confirmPassword: ''
        };
    }
    ngOnInit() {
        this._authService.getUser$
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            this.user = res;
            this.credentials['username'] = res.email;
        }, (idErr) => {
            this.errorMessage = read_error_1.readErrorMessage(idErr);
        });
    }
    updatePassword() {
        this.passwordMessage = this._checkPasswords();
        if (this.passwordMessage === '') {
            this._profileService.updatePassword(this.user.id, this.credentials)
                .takeUntil(this.isDestroyed$)
                .subscribe((res) => {
                this._router.navigate(['/profile']);
            }, (err) => {
                this.errorMessage = read_error_1.readErrorMessage(err);
            });
        }
        else {
            this.errorMessage = '';
        }
    }
    _checkPasswords() {
        let p = this.credentials.password;
        let n = this.credentials.newPassword;
        let c = this.credentials.confirmPassword;
        if (p === '') {
            return 'Enter old password';
        }
        else if (n === '') {
            return 'Enter new password';
        }
        else if (c === '') {
            return 'Confirm new password';
        }
        else if (p === n) {
            return 'New password cannot the same as the old password';
        }
        else if (n !== c) {
            return 'Confirm password does not match';
        }
        else {
            return '';
        }
    }
    ngOnDestroy() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
UpdatePasswordComponent = __decorate([
    core_1.Component({
        selector: 'user-password',
        templateUrl: __webpack_require__(997)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        profile_service_1.ProfileService,
        authentication_service_1.AuthenticationService])
], UpdatePasswordComponent);
exports.UpdatePasswordComponent = UpdatePasswordComponent;


/***/ }),

/***/ 439:
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
        templateUrl: __webpack_require__(1000)
    })
], ScenarioComponent);
exports.ScenarioComponent = ScenarioComponent;


/***/ }),

/***/ 440:
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
const authentication_service_1 = __webpack_require__(25);
const scenario_service_1 = __webpack_require__(128);
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
        if (this.sSubscription)
            this.sSubscription.unsubscribe();
    }
};
ListComponent = __decorate([
    core_1.Component({
        selector: 'scenario-list',
        templateUrl: __webpack_require__(1001)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, scenario_service_1.ScenarioService])
], ListComponent);
exports.ListComponent = ListComponent;


/***/ }),

/***/ 441:
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
const http_1 = __webpack_require__(53);
let StudentService = class StudentService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = '/api/admin';
    }
    listStudents(adminId) {
        return this._http
            .get(`${this._baseURL}/${adminId}/students`);
    }
    getStudent(adminId, studentId) {
        return this._http
            .get(`${this._baseURL}/${adminId}/students/${studentId}`);
    }
    setStudentRole(adminId, studentId, role) {
        let body = { role: role };
        return this._http
            .post(`${this._baseURL}/${adminId}/students/${studentId}`, body);
    }
    deleteStudent(adminId, studentId) {
        return this._http
            .delete(`${this._baseURL}/${adminId}/students/${studentId}`);
    }
    getFridge(adminId, studentId, scenId) {
        return this._http
            .get(`${this._baseURL}/${adminId}/students/${studentId}/${scenId}`);
    }
    grantScenAccess(adminId, studentId, scenId, updatedState) {
        return this._http
            .post(`${this._baseURL}/${adminId}/students/${studentId}/${scenId}`, { access: updatedState });
    }
};
StudentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], StudentService);
exports.StudentService = StudentService;


/***/ }),

/***/ 442:
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
const ng_bootstrap_1 = __webpack_require__(129);
let ConfirmDeleteDialogComponent = class ConfirmDeleteDialogComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.message = 'Are you sure you want to delete?';
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ConfirmDeleteDialogComponent.prototype, "message", void 0);
ConfirmDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'confirm-delete-dialog',
        templateUrl: __webpack_require__(966)
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], ConfirmDeleteDialogComponent);
exports.ConfirmDeleteDialogComponent = ConfirmDeleteDialogComponent;


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.readErrorMessage = function (error) {
    console.log(JSON.stringify(error));
    let errorMessage = 'Unknown error';
    if (error.error && error.error.message) {
        return error.error.message;
    }
    else if (error.error && error.error.text) {
        return error.error.text;
    }
    else if (error && error.message) {
        return error.message;
    }
    else if (error) {
        return error;
    }
    return errorMessage;
};


/***/ }),

/***/ 64:
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
const common_1 = __webpack_require__(13);
const forms_1 = __webpack_require__(14);
const forms_2 = __webpack_require__(14);
const ng2_dnd_1 = __webpack_require__(411);
const ng_bootstrap_1 = __webpack_require__(129);
const ngx_breadcrumbs_1 = __webpack_require__(190);
const angular_skyhook_1 = __webpack_require__(414);
const react_dnd_touch_backend_1 = __webpack_require__(424);
const confirm_delete_dialog_component_1 = __webpack_require__(442);
const person_name_pipe_1 = __webpack_require__(967);
const people_list_names_pipe_1 = __webpack_require__(968);
const phage_parents_pipe_1 = __webpack_require__(969);
const form_errors_module_1 = __webpack_require__(970);
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            form_errors_module_1.FormErrorsModule,
            ng2_dnd_1.DndModule.forRoot(),
            ng_bootstrap_1.NgbModule.forRoot(),
            ngx_breadcrumbs_1.McBreadcrumbsModule.forRoot(),
            angular_skyhook_1.SkyhookDndModule.forRoot({ backend: react_dnd_touch_backend_1.default })
        ],
        declarations: [
            person_name_pipe_1.PersonNamePipe,
            people_list_names_pipe_1.PeopleListNamesPipe,
            phage_parents_pipe_1.PhageParentsPipe,
            confirm_delete_dialog_component_1.ConfirmDeleteDialogComponent
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            form_errors_module_1.FormErrorsModule,
            ng2_dnd_1.DndModule,
            ng_bootstrap_1.NgbModule,
            ngx_breadcrumbs_1.McBreadcrumbsModule,
            person_name_pipe_1.PersonNamePipe,
            people_list_names_pipe_1.PeopleListNamesPipe,
            phage_parents_pipe_1.PhageParentsPipe,
            angular_skyhook_1.SkyhookDndModule,
            confirm_delete_dialog_component_1.ConfirmDeleteDialogComponent
        ],
    })
], SharedModule);
exports.SharedModule = SharedModule;


/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = __webpack_require__(250);
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(961);
if (process.env.NODE_ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(170)))

/***/ }),

/***/ 961:
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
const platform_browser_1 = __webpack_require__(67);
const router_1 = __webpack_require__(22);
const http_1 = __webpack_require__(53);
const ngx_breadcrumbs_1 = __webpack_require__(190);
const app_routes_1 = __webpack_require__(962);
const authentication_service_1 = __webpack_require__(25);
const logged_in_guard_service_1 = __webpack_require__(130);
const scenario_service_1 = __webpack_require__(128);
const course_service_1 = __webpack_require__(202);
const scenario_resolver_1 = __webpack_require__(203);
const shared_module_1 = __webpack_require__(64);
const admin_module_1 = __webpack_require__(979);
const authentication_module_1 = __webpack_require__(984);
const help_module_1 = __webpack_require__(990);
const profile_module_1 = __webpack_require__(994);
const scenario_module_1 = __webpack_require__(998);
const app_component_1 = __webpack_require__(1002);
const nav_component_1 = __webpack_require__(1003);
const page_not_found_component_1 = __webpack_require__(425);
const home_component_1 = __webpack_require__(426);
let AppModule = class AppModule {
    constructor(breadcrumbsConfig) {
        breadcrumbsConfig.postProcess = (x) => {
            let y = x;
            if (x.length && x[0].text !== 'Home') {
                y = [
                    {
                        text: 'Home',
                        path: ''
                    }
                ].concat(x);
            }
            return y;
        };
    }
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            shared_module_1.SharedModule,
            http_1.HttpClientModule,
            help_module_1.HelpModule,
            admin_module_1.AdminModule,
            profile_module_1.ProfileModule,
            authentication_module_1.AuthenticationModule,
            scenario_module_1.ScenarioModule,
            router_1.RouterModule.forRoot(app_routes_1.AppRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            nav_component_1.NavComponent,
            home_component_1.HomeComponent,
            page_not_found_component_1.PageNotFoundComponent
        ],
        providers: [
            authentication_service_1.AuthenticationService,
            logged_in_guard_service_1.LoggedInGuard,
            scenario_service_1.ScenarioService,
            course_service_1.CourseService,
            scenario_resolver_1.ScenarioResolver
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [ngx_breadcrumbs_1.McBreadcrumbsConfig])
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const page_not_found_component_1 = __webpack_require__(425);
const home_component_1 = __webpack_require__(426);
exports.AppRoutes = [{
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }];


/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/page-not-found/page-not-found.template.html";

/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/home/home.template.html";

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/home/home.style.css";

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/confirm-delete-dialog.template.html";

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
let PersonNamePipe = class PersonNamePipe {
    transform(person, reverse) {
        let fName = person.firstName || '';
        let lName = person.lastName || '';
        if (reverse) {
            return lName + (fName !== '' && lName !== '' ? ', ' : '') + fName;
        }
        else {
            return fName + (fName !== '' && lName !== '' ? ' ' : '') + lName;
        }
    }
};
PersonNamePipe = __decorate([
    core_1.Pipe({ name: 'personName' })
], PersonNamePipe);
exports.PersonNamePipe = PersonNamePipe;


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
let PeopleListNamesPipe = class PeopleListNamesPipe {
    transform(personList, reverse) {
        let out = '';
        for (let person of personList) {
            let fName = person.firstName || '';
            let lName = person.lastName || '';
            if (out !== '' && (fName !== '' || lName !== '')) {
                out += (reverse ? '; ' : ', ');
            }
            if (reverse) {
                out += lName + (fName !== '' && lName !== '' ? ', ' : '') + fName;
            }
            else {
                out += fName + (fName !== '' && lName !== '' ? ' ' : '') + lName;
            }
        }
        return out;
    }
};
PeopleListNamesPipe = __decorate([
    core_1.Pipe({ name: 'peopleListNames' })
], PeopleListNamesPipe);
exports.PeopleListNamesPipe = PeopleListNamesPipe;


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
let PhageParentsPipe = class PhageParentsPipe {
    transform(parents, numParents) {
        let out = '';
        if (numParents === undefined) {
            numParents = parents.length;
        }
        if (parents.length === 0) {
            return out;
        }
        let sorted = parents.sort((n1, n2) => { return n1.strainNum - n2.strainNum; });
        let nums = sorted.map((phage) => { return (phage.strainNum + 1).toString(); });
        if (sorted.length === 1 && numParents === 1) {
            out = 'Strain ' + nums[0];
        }
        else if (sorted.length === 1 && numParents === 2) {
            out = 'Strains ' + nums[0] + ' and ?';
        }
        else if (sorted.length === 2 && numParents === 2) {
            out = 'Strains ' + nums[0] + ' and ' + nums[1];
        }
        return out;
    }
};
PhageParentsPipe = __decorate([
    core_1.Pipe({ name: 'phageParents' })
], PhageParentsPipe);
exports.PhageParentsPipe = PhageParentsPipe;


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
const common_1 = __webpack_require__(13);
const forms_1 = __webpack_require__(14);
const forms_2 = __webpack_require__(14);
const required_error_component_1 = __webpack_require__(971);
const email_error_component_1 = __webpack_require__(973);
const password_error_component_1 = __webpack_require__(975);
const confirm_password_error_component_1 = __webpack_require__(977);
let FormErrorsModule = class FormErrorsModule {
};
FormErrorsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule
        ],
        declarations: [
            required_error_component_1.RequiredErrorComponent,
            email_error_component_1.EmailErrorComponent,
            password_error_component_1.PasswordErrorComponent,
            confirm_password_error_component_1.ConfirmPasswordErrorComponent
        ],
        exports: [
            required_error_component_1.RequiredErrorComponent,
            email_error_component_1.EmailErrorComponent,
            password_error_component_1.PasswordErrorComponent,
            confirm_password_error_component_1.ConfirmPasswordErrorComponent
        ],
    })
], FormErrorsModule);
exports.FormErrorsModule = FormErrorsModule;


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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const forms_1 = __webpack_require__(14);
let RequiredErrorComponent = class RequiredErrorComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.AbstractControl)
], RequiredErrorComponent.prototype, "field", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RequiredErrorComponent.prototype, "textLabel", void 0);
RequiredErrorComponent = __decorate([
    core_1.Component({
        selector: 'required-error',
        templateUrl: __webpack_require__(972)
    })
], RequiredErrorComponent);
exports.RequiredErrorComponent = RequiredErrorComponent;


/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/required-error.template.html";

/***/ }),

/***/ 973:
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
const forms_1 = __webpack_require__(14);
let EmailErrorComponent = class EmailErrorComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.AbstractControl)
], EmailErrorComponent.prototype, "email", void 0);
EmailErrorComponent = __decorate([
    core_1.Component({
        selector: 'email-error',
        templateUrl: __webpack_require__(974)
    })
], EmailErrorComponent);
exports.EmailErrorComponent = EmailErrorComponent;


/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/email-error.template.html";

/***/ }),

/***/ 975:
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
const forms_1 = __webpack_require__(14);
let PasswordErrorComponent = class PasswordErrorComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.AbstractControl)
], PasswordErrorComponent.prototype, "password", void 0);
PasswordErrorComponent = __decorate([
    core_1.Component({
        selector: 'password-error',
        templateUrl: __webpack_require__(976)
    })
], PasswordErrorComponent);
exports.PasswordErrorComponent = PasswordErrorComponent;


/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/password-error.template.html";

/***/ }),

/***/ 977:
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
const forms_1 = __webpack_require__(14);
let ConfirmPasswordErrorComponent = class ConfirmPasswordErrorComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.AbstractControl)
], ConfirmPasswordErrorComponent.prototype, "confirmPassword", void 0);
ConfirmPasswordErrorComponent = __decorate([
    core_1.Component({
        selector: 'confirm-password-error',
        templateUrl: __webpack_require__(978)
    })
], ConfirmPasswordErrorComponent);
exports.ConfirmPasswordErrorComponent = ConfirmPasswordErrorComponent;


/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/confirm-password-error.template.html";

/***/ }),

/***/ 979:
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
const admin_routes_1 = __webpack_require__(980);
const admin_component_1 = __webpack_require__(428);
const admin_home_component_1 = __webpack_require__(429);
const not_auth_component_1 = __webpack_require__(430);
const admin_guard_service_1 = __webpack_require__(427);
const student_service_1 = __webpack_require__(441);
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(admin_routes_1.AdminRoutes)
        ],
        declarations: [
            admin_component_1.AdminComponent,
            admin_home_component_1.AdminHomeComponent,
            not_auth_component_1.NotAuthComponent
        ],
        providers: [
            admin_guard_service_1.AdminGuard,
            student_service_1.StudentService
        ]
    })
], AdminModule);
exports.AdminModule = AdminModule;


/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const admin_guard_service_1 = __webpack_require__(427);
const logged_in_guard_service_1 = __webpack_require__(130);
const admin_component_1 = __webpack_require__(428);
const admin_home_component_1 = __webpack_require__(429);
const not_auth_component_1 = __webpack_require__(430);
exports.AdminRoutes = [
    {
        path: 'admin',
        data: {
            breadcrumbs: 'Admin'
        },
        canActivate: [logged_in_guard_service_1.LoggedInGuard],
        canActivateChild: [admin_guard_service_1.AdminGuard],
        component: admin_component_1.AdminComponent,
        children: [
            {
                path: 'courses',
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(1).then((function (require) { resolve(__webpack_require__(1006)['CourseModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
                data: {
                    breadcrumbs: 'Courses'
                }
            },
            {
                path: 'students',
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(2).then((function (require) { resolve(__webpack_require__(1007)['StudentModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
                data: {
                    breadcrumbs: 'Students'
                }
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


/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/admin.template.html";

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/admin-home/admin-home.template.html";

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/not-auth/not-auth.template.html";

/***/ }),

/***/ 984:
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
const common_1 = __webpack_require__(13);
const router_1 = __webpack_require__(22);
const shared_module_1 = __webpack_require__(64);
const authentication_routes_1 = __webpack_require__(985);
const signin_component_1 = __webpack_require__(431);
const signup_component_1 = __webpack_require__(432);
const signout_component_1 = __webpack_require__(433);
const forget_password_component_1 = __webpack_require__(434);
const reset_password_component_1 = __webpack_require__(435);
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(authentication_routes_1.AuthenticationRoutes)
        ],
        declarations: [
            signin_component_1.SigninComponent,
            signup_component_1.SignupComponent,
            signout_component_1.SignoutComponent,
            forget_password_component_1.ForgetPasswordComponent,
            reset_password_component_1.ResetPasswordComponent
        ]
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;


/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const signin_component_1 = __webpack_require__(431);
const signup_component_1 = __webpack_require__(432);
const signout_component_1 = __webpack_require__(433);
const forget_password_component_1 = __webpack_require__(434);
const reset_password_component_1 = __webpack_require__(435);
exports.AuthenticationRoutes = [{
        path: 'authentication',
        children: [
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
            { path: 'signout', component: signout_component_1.SignoutComponent },
            { path: 'forget-password', component: forget_password_component_1.ForgetPasswordComponent },
            { path: 'reset-password/:token', component: reset_password_component_1.ResetPasswordComponent }
        ]
    }];


/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/signin/signin.template.html";

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/signup/signup.template.html";

/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/forget-password/forget-password.template.html";

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/reset-password/reset-password.template.html";

/***/ }),

/***/ 990:
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
const help_routes_1 = __webpack_require__(991);
const help_component_1 = __webpack_require__(436);
let HelpModule = class HelpModule {
};
HelpModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(help_routes_1.HelpRoutes)
        ],
        declarations: [
            help_component_1.HelpComponent
        ]
    })
], HelpModule);
exports.HelpModule = HelpModule;


/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const help_component_1 = __webpack_require__(436);
exports.HelpRoutes = [
    {
        path: 'help',
        component: help_component_1.HelpComponent,
        data: { breadcrumbs: 'Help' }
    }
];


/***/ }),

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help.template.html";

/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help.style.css";

/***/ }),

/***/ 994:
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
const profile_routes_1 = __webpack_require__(995);
const profile_service_1 = __webpack_require__(201);
const user_profile_component_1 = __webpack_require__(437);
const update_password_component_1 = __webpack_require__(438);
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(profile_routes_1.ProfileRoutes)
        ],
        declarations: [
            user_profile_component_1.UserProfileComponent,
            update_password_component_1.UpdatePasswordComponent
        ],
        providers: [
            profile_service_1.ProfileService
        ]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;


/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const logged_in_guard_service_1 = __webpack_require__(130);
const user_profile_component_1 = __webpack_require__(437);
const update_password_component_1 = __webpack_require__(438);
exports.ProfileRoutes = [
    {
        path: 'profile',
        canActivate: [logged_in_guard_service_1.LoggedInGuard],
        canActivateChild: [logged_in_guard_service_1.LoggedInGuard],
        children: [
            { path: 'update-password',
                component: update_password_component_1.UpdatePasswordComponent,
                data: {
                    breadcrumbs: 'Update password'
                }
            },
            {
                path: '',
                component: user_profile_component_1.UserProfileComponent
            }
        ],
        data: {
            breadcrumbs: 'Profile'
        }
    }
];


/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/profile/user-profile/user-profile.template.html";

/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/profile/update-password/update-password.template.html";

/***/ }),

/***/ 998:
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
const scenario_routes_1 = __webpack_require__(999);
const scenario_component_1 = __webpack_require__(439);
const list_component_1 = __webpack_require__(440);
let ScenarioModule = class ScenarioModule {
};
ScenarioModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(scenario_routes_1.ScenarioRoutes)
        ],
        declarations: [
            scenario_component_1.ScenarioComponent,
            list_component_1.ListComponent
        ]
    })
], ScenarioModule);
exports.ScenarioModule = ScenarioModule;


/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const scenario_component_1 = __webpack_require__(439);
const scenario_resolver_1 = __webpack_require__(203);
const list_component_1 = __webpack_require__(440);
exports.ScenarioRoutes = [
    {
        path: 'scenarios',
        data: {
            breadcrumbs: 'Scenarios'
        },
        component: scenario_component_1.ScenarioComponent,
        children: [
            {
                path: ':scenId',
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(0).then((function (require) { resolve(__webpack_require__(1008)['LocationModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
                resolve: {
                    scenario: scenario_resolver_1.ScenarioResolver
                },
                data: {
                    breadcrumbs: '{{ scenario.label }}'
                }
            },
            {
                path: '',
                component: list_component_1.ListComponent
            }
        ]
    }
];


/***/ })

},[960]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9saXN0L2xpc3QudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9uYXYvbmF2LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL25hdi9uYXYudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL25hdi9uYXYuc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5yZXNvbHZlci50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4uZ3VhcmQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9ub3QtYXV0aC9ub3QtYXV0aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbm91dC9zaWdub3V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvcmVhZC1lcnJvci50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9ib290c3RyYXAudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXBwLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9ob21lL2hvbWUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hvbWUvaG9tZS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9wZXJzb24tbmFtZS5waXBlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGVvcGxlLWxpc3QtbmFtZXMucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BpcGVzL3BoYWdlLXBhcmVudHMucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL3JlcXVpcmVkLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2VtYWlsLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL3Bhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4ucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGgudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNGOzs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxzQ0FBMEM7QUFVMUMsSUFBYSxZQUFZ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cEM7UUFDRSxJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUU7WUFDSixXQUFXLEVBQUUsV0FBVztTQUN6QjtRQUNELFNBQVMsRUFBRSxzQ0FBaUI7UUFDNUIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsWUFBWSxFQUFFLGNBQWEsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU0sSUFBTSxtREFBMkIsVUFBVSxPQUFZLElBQU8sT0FBTyxDQUFDLG1CQUFPLENBQUMsSUFBNEIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMseUNBQUUsVUFBUyxDQUFNLElBQU8sTUFBTSxDQUFDLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7Z0JBQ3ZSLE9BQU8sRUFBRTtvQkFDUCxRQUFRLEVBQUUsb0NBQWdCO2lCQUMzQjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osV0FBVyxFQUFFLHNCQUFzQjtpQkFDcEM7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSw4QkFBYTthQUN6QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwiZmlsZSI6ImJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbGlzdC9saXN0LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbGlzdC9saXN0LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwMDFcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50O1xuICogTGlua3MgdGhlIG5hdiBiYXIgdG8gdGhlIGNvbnRlbnQgbmVlZGVkIGJhc2VkIG9uIHRoZSB1cmxcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjcmlja2V0LWFwcCcsXG4gICAgdGVtcGxhdGU6ICc8Y3JpY2tldC1uYXY+PC9jcmlja2V0LW5hdj48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+J1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIGJhciBhdCB0aGUgdG9wIG9mIHRoZSBzaXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY3JpY2tldC1uYXYnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL25hdi50ZW1wbGF0ZS5odG1sJyksXG4gICAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9uYXYuc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogVXNlciBvYmplY3QgdXNlZCB0byBkZXRlcm1pbmUgaWYgcHJvZmlsZSBsaW5rIHNob3VsZCBiZVxuICAgKiBpbmNsdWRlZCBpbiB0aGUgbmF2IGJhclxuICAgKi9cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHN0cmVhbSBmb3IgdGhlIGF1dGhldG5pY2F0aW9uIHNlcnZpY2VcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuICAgIH1cblxuICAvKipcbiAgICogSW5pdGlhdGUgdGhlIGNvbXBvbmVudCBieSBnZXR0aW5nIHRoZSBjdXJyZW50IHVzZXJcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyJFxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIHRoaXMudXNlciA9IHJlc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3RvcnkgdGhlIGNvbXBvbmVudCBieSB1bnN1YnNjcmliaW5nLCBpZiBuZWNlc3NhcnlcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbmF2L25hdi5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL25hdi9uYXYudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9uYXYvbmF2LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwMDRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9uYXYvbmF2LnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9uYXYvbmF2LnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTAwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIvL2ltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIEJlaGF2aW9yU3ViamVjdCAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTY2VuYXJpbywgRnJpZGdlLCBGcmlkZ2VQaGFnZSwgR2Vub3R5cGVQaGFnZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIFNjZW5hcmlvL2ZyaWRnZSByZWxhdGVkIGZ1bmN0aW9ucyB0aGF0IGdldC9zZW5kIGRhdGEgdG8gdGhlIGJhY2tlbmQgc2VydmVyXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfYmFzZVVSTCA9ICdhcGkvY3JpY2tldCc7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBzY2VuYXJpbyBkZXRhaWxzIHdoaWNoIGlzIG5lZWRlZCB3aGVuXG4gICAqIHBlcmZvcm1pbmcgY3Jvc3Nlc1xuICAgKi9cbiAgICBwcml2YXRlIF9zY2VuYXJpb0RldGFpbHMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICAgIGdldFNjZW5hcmlvRGV0YWlscyA9IHRoaXMuX3NjZW5hcmlvRGV0YWlscy5hc09ic2VydmFibGUoKTtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGd1ZXNzZXNcbiAgICovXG4gICAgcHJpdmF0ZSBfc2NlbmFyaW9HdWVzc2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHt9KTtcbiAgICBnZXRHdWVzc2VzID0gdGhpcy5fc2NlbmFyaW9HdWVzc2VzLmFzT2JzZXJ2YWJsZSgpO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2NlbmFyaW8gY29kZVxuICAgKlxuICAgKiBVc2VkIGJ5IGZyaWRnZSBhbmQgbG9jYXRpb24gY29tcG9uZW50c1xuICAgKiB0byBnZXQgdGhlIGNvZGUgd2l0aG91dCB0aGUgcm91dGVcbiAgICovXG4gICAgcHJpdmF0ZSBfc2NlbmFyaW9Db2RlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgICBnZXRTY2VuYXJpb0NvZGUgPSB0aGlzLl9zY2VuYXJpb0NvZGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgdGhlIHNlcnZpY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SHR0cENsaWVudH0gX2h0dHAgQW5ndWFyIG1lY2hhbmlzbSB0byBtYWtlIGNhbGxzIHRvIGJhY2tlbmQgc2VydmVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge31cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHNhdmUgc2NlbmFyaW8gc3R1ZmY6XG4gICAqIHNjZW5hcmlvRGV0YWlscywgc2NlbmFyaW9HdWVzc2VzLCBhbmQgc2NlbmFyaW9Db2RlXG4gICAqXG4gICAqIFVzZWQgd2hlbiBuYXZpZ2F0aW5nIGF3YXkgZnJvbSBzY2VuYXJpbyBjb21wb25lbnRcbiAgICovXG4gIHJlc2V0U2NlbmFyaW8oKSB7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvRGV0YWlscy5uZXh0KCcnKTtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9HdWVzc2VzLm5leHQoe30pO1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0NvZGUubmV4dCgnJyk7XG4gICAgfVxuXG4gIC8qKlxuICAqIFNldCB0aGUgc2NlbmFyaW8gZGV0YWlscyBhbmQgc2NlbmFyaW8gZ3Vlc3Nlc1xuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IHNjZW5hcmlvRGV0YWlscyAtIHNjZW5hcmlvIGRldGFpbHNcbiAgKiAtIG5lY2Vzc2FyeSBmb3IgcGVyZm9ybWluZyBleHBlcmltZW50c1xuICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuYXJpb0d1ZXNzZXMgY3VycmVudCBzY2VuYXJpbyBndWVzc2VzXG4gICovXG4gIHNldFNjZW5hcmlvKHNjZW5hcmlvRGV0YWlsczogc3RyaW5nLCBzY2VuYXJpb0d1ZXNzZXM6IHN0cmluZykge1xuICAgICAgICBpZiAoc2NlbmFyaW9EZXRhaWxzICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fc2NlbmFyaW9EZXRhaWxzLm5leHQoc2NlbmFyaW9EZXRhaWxzKTtcbiAgICAgICAgaWYgKHNjZW5hcmlvRGV0YWlscyAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX3NjZW5hcmlvR3Vlc3Nlc1xuICAgICAgICAgICAgICAubmV4dChKU09OLnBhcnNlKHNjZW5hcmlvR3Vlc3NlcykpO1xuICAgIH1cblxuICAvKipcbiAgICogTGlzdCBhdmFpbGFibGUgc2NlbmFyaW9zXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFNjZW5hcmlvW10+fSBsaXN0IG9mIHNjZW5hcmlvc1xuICAgKi9cbiAgICBsaXN0U2NlbmFyaW9zKCk6IE9ic2VydmFibGU8U2NlbmFyaW9bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxTY2VuYXJpb1tdPih0aGlzLl9iYXNlVVJMKVxuICAgIH1cblxuICAvKipcbiAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGEgc3BlY2lmaWMgc2NlbmFyaW9cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBpZGVudGlmaWVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtTY2VuYXJpb31cbiAgICogLSBzY2VuYXJpbyBpbmZvcm1hdGlvblxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGxvYWQgc2NlbmFyaW8gPHNjZW5JZD5cIiBpZiBzY2VuYXJpbyBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIGdldFNjZW5hcmlvKHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTY2VuYXJpbz4ge1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0NvZGUubmV4dChzY2VuSWQpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxTY2VuYXJpbz4oYCR7dGhpcy5fYmFzZVVSTH0vJHtzY2VuSWR9YCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHVwZGF0ZWQgZ3Vlc3NlcyBmb3IgdGhlIHNjZW5hcmlvIHRvIGJlIHNhdmVkIGluIGRhdGFiYXNlXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBndWVzc2VzIHN0cmluZyBvZiB1cGRhdGVkIGd1ZXNzZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICogLSB1cGRhdGVkIGd1ZXNzZXNcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBmaW5kIGZyaWRnZVwiIGlmIGZyaWRnZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgXCJDb3VsZCBub3Qgc2F2ZSBuZXcgZ3Vlc3Nlc1wiIGlmIGNvdWxkbid0IHVwZGF0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICBzYXZlRGVsZXRpb25zKGd1ZXNzZXM6IGFueSwgdXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vZGVsZXRpb25zYCwgZ3Vlc3Nlcyk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZnJpZGdlIGZvciB0aGUgdXNlci9zY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2U+fVxuICAgKiAtIG5ld2x5IGNyZWF0ZWQgZnJpZGdlXG4gICAqIC0gb3IgZXJyb3IgXCJVbmFibGUgdG8gY3JlYXRlIG5ldyBwaGFnZSBmb3Igc2NlbmFyaW9cIiBpZiBpc3N1ZSBjcmVhdGUgcGhhZ2VcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byBzYXZlIG5ldyBmcmlkZ2VcIiBpZiBjb3VsZG4ndCBjcmVhdGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgY3JlYXRlRnJpZGdlKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RnJpZGdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vbmV3LWZyaWRnZWApO1xuICAgIH1cblxuICAvKipcbiAgICogR2V0IGFuIGV4aXN0aW5nIGZyaWRnZSBmb3IgdXNlci9zY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2U+fVxuICAgKiAtIGV4aXN0aW5nIGZyaWRnZVxuICAgKiAtIG9yIGVycm9yIFwiTm8gZnJpZGdlIGZvciBzY2VuYXJpby91c2VyXCIgaWYgZnJpZGdlIGRvZXMgbm90IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIGdldEZyaWRnZSh1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZyaWRnZT4ge1xuICAgICAgICB2YXIgcmVzID0gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH1gKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBwaGFnZSBzdHJhaW4gdG8gdGhlIGZyaWRnZTtcbiAgICogU2VydmVyIHVzZXMgdXNlcklkIGFuZCBzY2VuQ29kZSB0byBmaW5kIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHthbnl9IHN0cmFpbiAtIG5ldyBwaGFnZSB0byBhZGQgdG8gZnJpZGdlXG4gICAqIC0gaGFzIHN0cmFpbk51bSwgbXV0YXRpb25MaXN0LCBhbmQgZGVsZXRpb25cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlUGhhZ2U+fVxuICAgKiAtIG5ld2x5IHNhdmVkIHBoYWdlXG4gICAqIC0gb3IgZXJyb3IgXCJVc2VyIG5vdCBmb3VuZFwiIGlmIHVzZXIgbm90IGZvdW5kXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gbG9hZCBzY2VuYXJpbyA8c2NlbklkPlwiIGlmIHNjZW5hcmlvIG5vdCBmb3VuZFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgYWRkU3RyYWluKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgc3RyYWluOiBhbnkpOiBPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdDxGcmlkZ2VQaGFnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9mcmlkZ2UtcGhhZ2VgLCBzdHJhaW4pXG4gICAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZGV0YWlscy9pbmZvcm1hdGlvbiBhYm91dCBhbiBleGlzdGluZyBwaGFnZSBpbiB0aGUgZnJpZGdlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqIEBwYXJhbSB7RnJpZGdlUGhhZ2V9IHN0cmFpbiAtIHN0cmFpbiB0byB1cGRhdGVcbiAgICogLSB1c2Ugc3RyYWluIGBpZGAgdG8gc3BlY2lmeSBzdHJhaW4gYW5kIHNlbmQgdXBkYXRlZCBpbmZvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPn1cbiAgICogLSB1cGRhdGVkIHN0cmFpblxuICAgKiAtIG9yIGVycm9yIFwiUGhhZ2Ugbm90IGZvdW5kXCIgaWYgc3RyYWluIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgdXBkYXRlU3RyYWluKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgc3RyYWluOiBGcmlkZ2VQaGFnZSk6IE9ic2VydmFibGU8RnJpZGdlUGhhZ2U+IHtcbiAgICAgICAgbGV0IHN0cmFpbklkID0gc3RyYWluLmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3Q8RnJpZGdlUGhhZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vJHtzdHJhaW5JZH1gLCBzdHJhaW4pXG4gICAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYSBzdHJhaW4gZnJvbSB0aGUgZnJpZGdlIChhbmQgZGF0YWJhc2UpXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqIEBwYXJhbSB7RnJpZGdlUGhhZ2V9IHN0cmFpbiAtIHRoZSBzdHJhaW4gdG8gZGVsZXRlXG4gICAqIC0gdXNlIHN0cmFpbiBgaWRgIHRvIHNwZWNpZnkgd2hpY2ggc3RyYWluIHRvIGRlbGV0ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fVxuICAgKiAtIHRoZSBzdHJhaW4ganVzdCBkZWxldGVkXG4gICAqIC0gb3IgZXJyb3IgXCJQaGFnZSBub3QgZm91bmRcIiBpZiBzdHJhaW4gZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byByZW1vdmUgc3RyYWluIGZyb20gZnJpZGdlXCIgaWYgY291bGRuJ3QgZGVsZXRlXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIGRlbGV0ZVN0cmFpbih1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHN0cmFpbjogRnJpZGdlUGhhZ2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgc3RyYWluSWQgPSBzdHJhaW4uaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vJHtzdHJhaW5JZH1gKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogUm91dGVyIGd1YXJkIHRoYXQgbWFrZXMgc3VyZSBvbmx5IGxvZ2dlZCBpbiB1c2VycyBjYW4gYWNjZXNzIHRoZSBwYWdlIGFuZCBhbGwgY2hpbGQgcGFnZXNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2dlZEluR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdXNlciBjYW4gYWN0aXZhdGUgKHZpc2l0KSBhIHBhZ2VcbiAgICogYmFzZWQgb24gaWYgYSB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKlxuICAgKiBJZiBub3QgbG9nZ2VkIGluLCBzZXRzIHRoZSByZWRpcmVjdCB1cmwgdG8gdGFrZSB1c2VyIGJhY2sgdG8gdGhpcyBwYWdlIF9hZnRlcl8gbG9nZ2luZyBpbiBhbmRcbiAgICogc2VuZHMgdGhlIHVzZXIgdG8gdGhlIHNpZ24gaW4gcGFnZVxuICAgKlxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIC0gY3VycmVudCBVUkxcbiAgICogQHBhcmFtIHtSb3V0ZXJTdGF0ZXNuYXBzaG90fSBzdGF0ZSAtIHJvdXRlciBzdGF0ZSBpbmNsdWRpbmcgdGhlIHVybCB0cnlpbmcgdG8gYWNlc3NcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gYHRydWVgIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqIC0gYGZhbHNlYCBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW5cbiAgICovXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBib29sZWFuIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSBzdGF0ZS51cmw7XG5cbiAgICBsZXQgaXNMb2dnZWRJbjogYm9vbGVhbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgaWYoaXNMb2dnZWRJbilcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VXJsID0gdXJsO1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnYXV0aGVudGljYXRpb24vc2lnbmluJ10pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHVzZXIgY2FuIGFjdGl2YXRlIGFsbCBjaGlsZC9zdWIgcGFnZXMgZGVwZW5kaW5nIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqXG4gICAqIE9ubHkgbG9nZ2VkIGluIHVzZXJzIGNhbiBhY3RpdmF0ZSB0aGUgcGFnZXNcbiAgICovXG4gIGNhbkFjdGl2YXRlQ2hpbGQocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuQWN0aXZhdGUocm91dGUsIHN0YXRlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBGdW5jdGlvbnMgd2hpY2ggY29tbXVuaWNhdGUgdG8gYmFja2VuZCB0byBhbGxvd1xuICogdXNlcnMgdG8gdXBkYXRlIHRoZWlyIHByb2ZpbGUgYW5kL29yIGNoYW5nZSB0aGUgcGFzc3dvcmRcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNlIHtcblxuICAvKipcbiAgICogTGVhZGluZyBiYWNrZW5kIHVybCBwYXRoXG4gICAqL1xuICBwcml2YXRlIF9iYXNlVXJsOiBzdHJpbmcgPSAnL2FwaS91c2Vycy8nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCl7fVxuXG4gIC8qKlxuICAgKiBFZGl0IGRldGFpbHMgYWJvdXQgdGhlIHVzZXIgcHJvZmlsZSBpbmNsdWRpbmdcbiAgICogMS4gTm1lXG4gICAqIDIuIEVtYWlsIGFkZHJlc3NcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySUQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7YW55fSBkZXRhaWxzIHVzZXIgZGV0YWlscyB0byB1cGRhdGUgd2l0aFxuICAgKiBleGlzaXRpbmcgaW5mb3JtYXRpb25cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8VXNlcj59IC0gVGhlIHVwZGF0ZWQgdXNlciBpbmZvcm1hdGlvblxuICAgKiAtIG9yIGVycm9yIFwiVXNlciBkb2VzIG5vdCBleGlzdFwiIGlmIG5vbi1leGlzdGFudCB1c2VyXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBlZGl0UHJvZmlsZSh1c2VySWQ6IG51bWJlciwgZGV0YWlsczogYW55KTogT2JzZXJ2YWJsZTxVc2VyPntcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4odGhpcy5fYmFzZVVybCArIHVzZXJJZCwgZGV0YWlscyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSB1c2VyJ3MgcGFzc3dvcmQgb25jZSBhbHJlYWR5IHNpZ25lZCBpblxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJRCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge2FueX0gY3JlZGVudGlhbHMgLSBwYXNzd29yZCBpbmZvcm1hdGlvblxuICAgKiAtIGluY2x1ZGVzOiBcInBhc3N3b3JkXCIgKG9sZCBwYXNzd29yZCkgYW5kIFwibmV3UGFzc3dvcmRcIiAgKHBhc3N3b3JkIHRvIHVwZGF0ZSB0bylcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8VXNlcj59IC0gaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXIganVzdCB1cGRhdGVkXG4gICAqIC0gb3IgZXJyb3IgXCJVc2VyIGRvZXMgbm90IGV4aXN0XCIgaWYgbm9uLWV4aXN0YW50IHVzZXJcbiAgICogLSBvciBlcnJvciBcIkluY29ycmVjdCBwYXNzd29yZFwiIGlmIHdyb25nIG9sZCBwYXNzd29yZFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgdXBkYXRlUGFzc3dvcmQodXNlcklkOiBudW1iZXIsIGNyZWRlbnRpYWxzOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXI+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLl9iYXNlVXJsICsgdXNlcklkICsgJy91cGRhdGUtcGFzc3dvcmQnLCBjcmVkZW50aWFscyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ291cnNlLCBTdHVkZW50LCBBZG1pblN0dWRlbnQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBGdW5jdGlvbnMgcmVsYXRlZCB0byBnZXR0aW5nIGNvdXJzZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBiYWNrIGVuZCBzZXJ2ZXJcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvdXJzZVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2Jhc2VVUkwgPSAnL2FwaS9hZG1pbic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBhdmFpbGFibGUgY291cnNlcyBkZXBlbmRpbmcgaWYgdXNlclxuICAgKiBpcyBhIGZ1bGwgYWRtaW4gb3IgaW5zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCBkYXRhYmFzZSB1c2VyIElEIG9mIHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2VbXT59IC0gV2hlbiBzdWNjZXNzZnVsIGFuZCBgYWRtaW5gLCBsaXN0IG9mIGFsbCBjb3Vyc2VzXG4gICAqIC0gV2hlbiBzdWNjZXNzZnVsIGFuZCBgaW5zdHJgLCBsaXN0IG9mIGNvdXJzZXMgaW4gd2hpY2ggdXNlciBpcyBhbiBpbnN0cnVjdG9yIGZvclxuICAgKiAtIG9yIGVycm9yIFwiTm8gY291cnNlcyBmb3VuZFwiIGlmIG5vIGNvdXJzZXMgdG8gbGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBsaXN0Q291cnNlcyhhZG1pbklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPENvdXJzZVtdPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLmdldDxDb3Vyc2VbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzYCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGNvdXJzZSB3aXRoIGxvZ2dlZCBpbiB1c2VyIGFzIGluc3RydWN0b3IgYW5kXG4gICAqIGRldGFpbHMgc3BlY2lmaWVkIGluIGBib2R5YFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge2FueX0gYm9keSBjb3Vyc2UgZGV0YWlscyBpbmNsdWRpbmcgYGNvdXJzZU51bWAgYW5kIGBkZXNjcmlwdGlvbmBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB0aGUgbmV3bHkgY3JlYXRlZCBjb3Vyc2UgaWYgc3VjY2Vzc2Z1bFxuICAgKiAtIG9yIGVycm9yIG1lc3NhZ2UgZm9yIHNlcnZlci9kYXRhYmFzZSBlcnJvcnNcbiAgICovXG4gIGNyZWF0ZUNvdXJzZShhZG1pbklkOiBudW1iZXIsIGJvZHk6IGFueSk6IE9ic2VydmFibGU8Q291cnNlPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLnBvc3Q8Q291cnNlPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXNgLCBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBjb3Vyc2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciAod2hvIGlzIGFuIGFkbWluIG9yIGluc3RyKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHRvIGdldCBpbmZvcm1hdGlvbiBmb3JcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB0aGUgY291cnNlIGluZm9ybWF0aW9uIGluY2x1ZGluZyBgY291cnNlTnVtYCwgYGRlc2NyaXB0aW9uYCwgYW5kIGBpbnN0cnVjdG9yc2BcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBnZXRDb3Vyc2UoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZyk6IE9ic2VydmFibGU8Q291cnNlPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLmdldDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlcy8ke2NvdXJzZU51bX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpc3Qgb2Ygc3R1ZGVudHMgaW4gYSBjb3Vyc2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciB3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdXJzZU51bSBjb3Vyc2UgbnVtYmVyIG9mIHRoZSBjb3Vyc2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8U3R1ZGVudFtdPn0gLSBsaXN0IG9mIHN0dWRlbnRzIGVhY2ggd2l0aCBwcm9wZXJ0aWVzIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcklkYCwgYGFjY2Vzc0dyYW50ZWRgLCBhbmQgYGVtYWlsYFxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBtZXNzYWdlIGZvciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JzXG4gICAqL1xuICBnZXRTdHVkZW50cyhhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxTdHVkZW50W10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PFN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfS9zdHVkZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZWRpdGluZyBhIGNvdXJzZSwgdXNlciBpcyBhYmxlIHRvIGFkZCBuZXcgaW5zdHJ1Y3RvcnMuIFRoaXMgbWV0aG9kIHByb2R1Y2VzIHRoZSBsaXN0IG9mIHBvc3NpYmxlIGluc3RydWN0b3JzIHRoYXQgY291bGQgYmUgYWRkZWRcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHdlIGFyZSBlZGl0aW5nXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEFkbWluU3R1ZGVudFtdPn0gLSBsaXN0IG9mIHBvdGVudGlhbCBpbnN0dWN0b3JzIHdpdGggcHJvcGVydGllcyBgZmlyc3ROYW1lYCwgYGxhc3ROYW1lYCwgYHVzZXJJZGAsIGFuZCBgcm9sZWBcbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBnZXRQb3NzaWJsZUluc3RydWN0b3JzKGFkbWluSWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudFtdPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLmdldDxBZG1pblN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfS9pbnN0cnVjdG9yc2ApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSB1c2VyIGFzIGFuIGluc3RydWN0b3Igb2YgdGhlIGNvdXJzZSBhbmQgY2hhbmdlIHRoZSBuZXcgaW5zdHJ1Y3RvcidzIHJvbGUgdG8gYGluc3RyYCBpZiBuZWNlc3NhcnlcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgdG8gYWRkIGluc3RydWN0b3IgZm9yXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdJbnN0cklkIHVzZXJJZCBvZiB1c2VyIHRvIGFkZCBhcyBpbnN0cnVjdG9yIG9mIHRoaXMgY291cnNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENvdXJzZT59IC0gdGhlIHVwZGF0ZWQgY291cnNlIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIGlmIHByb2JsZW0gdXBkYXRpbmcgdGhlIGNvdXJzZVxuICAgKiAtIG9yIGVycm9yIGlmIHByb2JsZW0gdXBkYXRpbmcgdGhlIG5ldyBpbnN0cnVjdG9yIHJvbGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGFkZEluc3RydWN0b3IoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZywgbmV3SW5zdHJJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxDb3Vyc2U+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLnBvc3Q8Q291cnNlPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L2luc3RydWN0b3JzLyR7bmV3SW5zdHJJZH1gLCB7aW5zdHJ1Y3RvcjogdHJ1ZX0pXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjb3Vyc2UgZGVzY3JpcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciB3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdXJzZU51bSBjb3Vyc2UgbnVtYmVyIG9mIGNvdXJzZSB0byB1cGRhdGVcbiAgICogQHBhcmFtIHthbnl9IGJvZHkgdXBkYXRlZCBjb3Vyc2UgZGVzY3JpcHRpb25cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB1cGRhdGVkIGNvdXJzZSBpbmZvcm1hdGlvblxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGVkaXRDb3Vyc2UoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZywgYm9keTogYW55KTogT2JzZXJ2YWJsZTxDb3Vyc2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAucG9zdDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlcy8ke2NvdXJzZU51bX1gLCBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHRvIGRlbGV0ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb3Vyc2UganVzdCBkZWxldGVkXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBkZWxldGVDb3Vyc2UodXNlcklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgb2YgdGhlIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2U7IHVzZWZ1bCBmb3IgYnVsayBkZWxldGlvbnNcbiAgICogd2hlbiBhIGNvdXJzZSBpcyBvdmVyXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBsaXN0IG9mIHN0dWRlbnRzIGp1c3QgZGVsZXRlZFxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgZGVsZXRlU3R1ZGVudHModXNlcklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfS9zdHVkZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzY2VuYXJpbyBzdGF0dXMgKGFrYSBhY2Nlc3MgZ3JhbnRlZCkgZm9yIGEgc2NlbmFyaW8gZm9yIGFsbCBzdHVkZW50cyBpbiBhIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbkNvZGUgb2Ygc2NlbmFyaW8gb2YgaW50ZXJlc3RcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8U3R1ZGVudFtdPn0gLSBsaXN0IG9mIHN0dWRlbnRzIGluIGNvdXJzZSBlYWNoIHdpdGggcHJvcGVydGllcyBgZmlyc3ROYW1lYCwgYGxhc3ROYW1lYCwgYHVzZXJJZGAsIGFuZCBgc3RhdHVzYFxuICAgKiAtIG9yIFwibm8gc3R1ZGVudHMgZm91bmRcIiBpZiBubyBzdHVkZW50cyBpbiB0aGUgY291cnNlXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT4gaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldFNjZW5hcmlvU3RhdHVzKGFkbWluSWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTdHVkZW50W10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PFN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfS8ke3NjZW5JZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiBjb3Vyc2UgbnVtYmVycyBmb3IgYWxsIGF2YWlsYWJsZSBjb3Vyc2VzXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IC0gbGlzdCBvZiBjb3Vyc2VzIHdpdGggcHJvcGVydGllcyBgY291cnNlTnVtYCBhbmQgYGlkYFxuICAgKiAtIG9yIFwiTm8gY291cnNlcyBmb3VuZFwiIGVycm9yIGlmIG5vIGNvdXJzZXMgZm91bmRcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldENvdXJzZUxpc3QoKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0KGAvYXBpL2NvdXJzZXNgKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSZXNvbHZlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4vc2NlbmFyaW8uc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2NlbmFyaW8uaW50ZXJmYWNlJztcblxuLyoqXG4gKiBSZXNvbHZlcyBhIHJvdXRlIFVSTCB0byBnZXQgdGhlIHNjZW5hcmlvIGlkIChmcm9tIHRoZSB1cmwpXG4gKiB0aGVuIHVzZXMgdGhhdCB0byBnZXQgdGhlIHNjZW5hcmlvIGxhYmVsIHVzaW5nIHNjZW5hcmlvIHNlcnZpY2VcbiAqXG4gKiBUaGlzIGlzIHVzZWQgdG8gZ2VuZXJhdGUgaHVtYW4tcmVhZGFibGUgYnJlYWRjcnVtYiBsYWJlbHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPFNjZW5hcmlvPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgcmVxdWlyZWQgYnkgaW1wbGVtZW50YXRpb25cbiAgICogQmFzZWQgb24gdGhlIGlkZW50aWZpZWQgc2NlbkNvZGUgZnJvbSB0aGUgVVJMLCB1c2UgdGhlIHNlcnZpY2UgZ28gZ2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzIGFuZCBzZW5kIGJhY2sgdG8gY2xpZW50XG4gICAqXG4gICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gcm91dGUgY3VycmVudCByb290IFVSTFxuICAgKiBAcGFyYW0ge1JvdXRlclN0YXRlU2FucHNob3R9IGN1cnJlbnQgcm91dGUgc25hcHNob3RcbiAgICpcbiAgICogQHJldHVybnMge1NjZW5hcmlvfSAtIFRoZSBzY2VuYXJpbyBvYmplY3QgY29ycmVzcG9uZGluZyB0byBkbyB0aGUgdXJsIHBhcmFtIElEIGlmIGl0IGV4aXN0c1xuICAgLSBvciBlbXB0eSBzY2VuYXJpbyBpZiBpdCBkb2VzIG5vdCBleGlzdFxuICAgKi9cbiAgcHVibGljIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxTY2VuYXJpbz4ge1xuXG4gICAgY29uc3Qgc2NlbkNvZGUgPSByb3V0ZS5wYXJhbXNbJ3NjZW5JZCddO1xuXG4gICAgaWYgKHNjZW5Db2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmdldFNjZW5hcmlvKHNjZW5Db2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFNjZW5hcmlvPigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8ucmVzb2x2ZXIudHMiLCIvL2ltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgZGVhbHMgd2l0aCB2YWxpZGF0aW5nIGFuZCBsb2dnaW5nIGluL291dCB1c2VycyBhbmRcbiAqIHJlc2V0dGluZyBmb3Jnb3R0ZW4gcGFzc3dvcmRzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuICAgIHByaXZhdGUgX3VzZXI6IEJlaGF2aW9yU3ViamVjdDxVc2VyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VXNlcj4obnVsbCk7XG4gICAgZ2V0VXNlciQgPSB0aGlzLl91c2VyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBfYmFzZVVybCA9ICcvYXBpL2F1dGgvJ1xuXG4gIC8qKlxuICAgKiBXaGVuIGEgbm9uLWxvZ2dlZCBpbiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBhIHBhZ2Ugd2hpY2ggcmVxdWlyZXMgbG9nZ2luZyBpbixcbiAgICogc2F2ZSB0aGF0IHBhZ2UncyB1cmwgYW5kIGRpcmVjdCB1c2VyIHRoZXJlIGFmdGVyIHRoZXkgbG9nIGluXG4gICAqL1xuICAgIHB1YmxpYyByZWRpcmVjdFVybDogc3RyaW5nID0gJy8nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzZXJ2aWNlcyBgdXNlcmAgdmFyaWFibGUgd2hpY2ggaXMgc3RvcmVkIGFmdGVyIHVzZXIgbG9ncyBpblxuICAgKlxuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgLSBjdXJyZW50IHVzZXIgd2hvIGxvZ2dlZCBpblxuICAgKiAtIG9yIGBudWxsYCB0byB1bnNldCB0aGUgdXNlclxuICAgKi9cbiAgc2V0VXNlcih1c2VyOiBVc2VyKXtcbiAgICB0aGlzLl91c2VyLm5leHQodXNlcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHVzZXIgaW5mb3JtYXRpb24gbm90IGFzIGFuIG9ic2VydmFibGVcbiAgICogc28gaXQgaXMgc3luY2hyb25vdXMgYW5kIGtlZXBzIHRoZSBhcHAgY29tcG9uZW50cycgYG5nT25Jbml0YFxuICAgKiBmdW5jdGlvbnMgY2xlYW5lclxuICAgKlxuICAgKiBAcmV0dXJucyB7VXNlcn0gdGhlIGN1cnJlbnQgdXNlciBvciBgbnVsbGAgaWYgbm8gdXNlciBsb2dnZWQgaW5cbiAgICovXG4gIGdldFVzZXIoKTogVXNlcntcbiAgICByZXR1cm4gdGhpcy5fdXNlci5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqXG4gICAqIEByZXF1aXJlcyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgYSB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKiAtIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBpc0xvZ2dlZEluKCk6IGJvb2xlYW57XG4gICAgcmV0dXJuICghIXRoaXMuZ2V0VXNlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgdXNlciBjYW4gYWNjZXNzIHRoZSBhZG1pbiBwYWdlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgdXNlciBpcyBpbnN0ciBvciBhZG1pblxuICAgKiAtIGBmYWxzZWAgaWYgdXNlciBpcyBvbmx5IGEgc3R1ZGVudFxuICAgKi9cbiAgY2FuQWNjZXNzQWRtaW4oKTogYm9vbGVhbntcbiAgICBpZih0aGlzLmdldFVzZXIoKSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRVc2VyKCkucm9sZSA+IDBcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gc2lnbiBhIHVzZXIgaW4gdXNpbmcgdGhlIHByb3ZpZGVkIGNyZWRlbnRpYWxzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBjcmVkZW50aWFscyAtIGB1c2VybmFtZWAgKGFzIGVtYWlsKSBhbmQgYHBhc3N3b3JkYCB0byBiZSB0ZXN0ZWQgZm9yIGxvZ2dpbmcgaW5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8VXNlcj59IC0gdGhlIHN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4gdXNlclxuICAgKiBlcnJvciBtZXNzYWdlIGBNaXNzaW5nIGNyZWRlbnRpYWxzYCBpZiBubyBlbWFpbCBvciBwYXNzd29yZFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYEludmFsaWQgcGFzc3dvcmRgIGlmIHBhc3N3b3JkIGlzIGluY29ycmVjdFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYFVzZXIgbm90IGZvdW5kYCBpZiBpbnZhbGlkIGVtYWlsXG4gICAqIC0gZXJyb3IgbWVzc2FnZSBmb3Igc2VydmVyL2RhdGFiYXNlL2F1dGhlbnRpY2F0aW9uIGVycm9yXG4gICAqL1xuICBzaWduaW4oY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjcmVkZW50aWFscyk7XG4gICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLl9iYXNlVXJsICsgJ3NpZ25pbicsIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBjcmVhdGUgYSBuZXcgdXNlciB1c2luZyB0aGUgcHJvdmlkZWQgdXNlciBkZXRhaWxzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSB1c2VyIC0gdXNlciBkZXRhaWxzIGluY2x1ZGluZyBgZmlyc3ROYW1lYCwgYGxhc3ROYW1lYCwgYHVzZXJuYW1lYCAoZW1haWwpLCBgY291cnNlYCwgYW5kIGBwYXNzd29yZGBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8VXNlcj59IC0gVGhlIG5ldyBsb2dnZWQtaW4gdXNlciB3aGVuIHN1Y2Nlc3NmdWxseSBjcmVhdGUgbmV3IHVzZXJcbiAgICogLSBlcnJvciA0MDAgaWYgZXJycm9yIGxvZ2dpbmcgaW5cbiAgICogLSBlcnJvciA1MDAgaWYgZXJyb3IgY3JlYXRpbmcgdXNlclxuICAgKi9cbiAgc2lnbnVwKHVzZXI6IGFueSk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KHRoaXMuX2Jhc2VVcmwgKyAnc2lnbnVwJywgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpZ25zIG91dCB0aGUgdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSByZXR1cm5zIGB0cnVlYCBpZiBzdWNjZXNzZnVsbHkgc2lnbmVkIG91dFxuICAgKi9cbiAgc2lnbm91dCgpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5fYmFzZVVybCArICdzaWdub3V0Jyk7XG4gIH1cblxuICAvKipcbiAgICogU3VibWl0IGVtYWlsIGFkZHJlc3Mgb2YgcG90ZW50aWFsIHVzZXIgdG8gYWxsb3cgdGhhdCB1c2VyXG4gICAqIHRvIHJlc2V0IHRoZWlyIHBhc3N3b3JkIGlmIHRoZSB1c2VyIGV4aXN0c1xuICAgKlxuICAgKiBUaGUgYmFja2VuZCB0aGVuIHNlbmRzIGEgcGFzc3dvcmQgcmVzZXQgZW1haWwgdG8gdGhlXG4gICAqIGVtYWlsIGFkZHJlc3NcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGJvZHkgLSByZXF1ZXN0IGJvZHkgdGhhdCBpbmNsdWRlcyBgZW1haWxgIG9mIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBTdWNjZXNzIG1lc3NhZ2UgaWYgcGFzc3dvcmQgcmVzZXQgZW1haWwgc2VudFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYEVycm9yIHdpdGggc2VydmVyIGVtYWlsIHNlcnZpY2VgIGlmIHByb2JsZW0gd2l0aCBlbWFpbCB0cmFuc3BvcnRlclxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYE5vIGFjY291bnQgd2l0aCB0aGF0IGVtYWlsLmAgaWYgZW1haWwgYWRkcmVzcyBkb2Vzbid0IGNvcnJlc3BvbmQgdG8gYW4gZXhpc3RpbmcgdXNlclxuICAgKiAtIGVycm9yIDQyMiBmb3Igb3RoZXIgc2VydmVyIGVycm9yc1xuICAgKi9cbiAgZm9yZ2V0UGFzc3dvcmQoYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9iYXNlVXJsICsgJ2ZvcmdldC1wYXNzd29yZCcsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHJlc2V0IGEgdXNlcidzIHBhc3N3b3JkIHVzaW5nIHRoZSBjcmVkZW50aWFsc1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gY3JlZGVudGlhbHMgLSBpbmZvIG5lZWRlZCB0byByZXNldCBwYXNzd29yZDogYHBhc3N3b3JkLCBgY29uZmlybVBhc3N3b3JkYCwgYW5kIGB0b2tlbmBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBJZiBzdWNjZXNzZnVsLCBzZW5kcyBzdWNjZXNzIG1lc3NhZ2UgYFBhc3N3b3JkcyBoYXMgYmVlbiByZXNldGAuXG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgSW52YWxpZCB0b2tlbmAgaWYgdG9rZW4gZG9lc24ndCBleGlzdFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYFRva2VuIGhhcyBleHBpcmVkYCBmb3IgdmFsaWQgdG9rZW5zIGJ1dCB1c2VyIHRvb2sgdG9vIGxvbmcgdG8gYXR0ZW1wdCB0byByZXNldFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgZm9yIGFsbCBvdGhlciBlcnJvcnNcbiAgICovXG4gIHJlc2V0UGFzc3dvcmQoY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8YW55PntcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fYmFzZVVybCArICdyZXNldC1wYXNzd29yZCcsIGNyZWRlbnRpYWxzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFdoZW4gVVJMIGdvZXMgdG8gYSBwYWdlIHRoYXQgZG9lc24ndCBleGlzdDtcbiAqIFRoaXMgaXMgc2ltcGxlLCB2aXN1YWwgY29tcG9uZW50IG5lZWRlZCB0byBnZXQgdGhlIHRlbXBsYXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2Utbm90LWZvdW5kJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGFnZS1ub3QtZm91bmQudGVtcGxhdGUuaHRtbCcpLFxufSlcblxuZXhwb3J0IGNsYXNzIFBhZ2VOb3RGb3VuZENvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcigpe31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGUgaG9tZSBsYW5kaW5nIHBhZ2Ugd2hlbiBnb2luZyB0byB0aGUgd2Vic2l0ZVxuICpcbiAqIE1haW5seSBhIHZpZXcgY29tcG9uZW50LCBidXQgc29tZSBhc3BlY3RzIGFyZSBkZXBlbmRlbnRcbiAqIG9uIGlmIGEgdXNlciBpcyBsb2dnZWQgaW4gYW5kIHRoZSB1c2VyIHJvbGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG9tZScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2hvbWUudGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2hvbWUuc3R5bGUuY3NzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuICAvKipcbiAgICogVGhlIGxvZ2dlZCBpbiB1c2VyLCBpZiBhbnlcbiAgICovXG4gIHByaXZhdGUgdXNlcjogVXNlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSl7fVxuXG4gIC8qKlxuICAgKiBXaGVuIGludGlhbGl6aW5nIGNvbXBvbmVudCwgZ2V0IHRoZSBsb2dnZWQgaW4gdXNlciwgaWYgYW55XG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMudXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIHRoZSBjb21wb25lbnQsIHVuc2V0IHRoZSB1c2VyIHZhcmlhYmxlXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMudXNlciA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlQ2hpbGQsIFJvdXRlciwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBHdWFyZCB0aGUgYWRtaW4gcGF0aHMgc28gb25seSB1c2VycyB3aXRoIGBhZG1pbmAgb3IgYGluc3RyYFxuICogcm9sZSBjYW4gYWNjZXNzIHRoZSByb3V0ZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlQ2hpbGQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHVzZXIgY2FuIGFjdGl2YXRlIHRoZSByb3V0ZSBiYXNlZCBvbiB0aGVpciByb2xlXG4gICAqXG4gICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gcm91dGUgLSByb3V0ZSBVUkwgYXQgdGhlIG1vbWVudFxuICAgKiBAcGFyYW0ge1JvdXRlclN0YXRlU25hcHNob3R9IHN0YXRlIC0gcm91dGVyIHN0YXRlOyBuZWVkZWQgdG8gaW1wbGVtZW50IGludGVyZmFjZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgdXNlciBpcyBgYWRtaW5gIG9yIGBpbnN0cmBcbiAgICogLSBgZmFsc2VgIGlmIHVzZXIgaXMgb25seSBhIGBzdHVkZW50YFxuICAgKi9cbiAgY2FuQWN0aXZhdGVDaGlsZChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSBzdGF0ZS51cmw7XG5cbiAgICBsZXQgcm9sZTogYm9vbGVhbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5jYW5BY2Nlc3NBZG1pbigpO1xuICAgIGlmKHJvbGUpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5yZWRpcmVjdFVybCA9IHVybDtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9ub3QtYXV0aCddKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLmd1YXJkLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEVudHJhbmNlIGNvbXBvbmVudCBmb3IgYWRtaW4gZmVhdHVyZXNcbiAqIE1haW5seSwgaXQgaXMgYSBjYXJkIHRoYXQgYWxsb3dzIG5hdmlnYXRpb24gYmV0d2VlbiBjb3Vyc2UtcmVsYXRlZFxuICogaW5mbyBhbmQgc3R1ZGVudC1yZWxhdGVkIGluZm9cbiAqIENvbnRlbnQgb2YgdGhlIGNhcmQgaXMgZGV0ZXJtaW5lZCBieSByb3V0ZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRtaW4nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hZG1pbi50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZG1pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBMb2dnZWQgaW4gdXNlclxuICAgKi9cbiAgcHJpdmF0ZSBhZG1pblVzZXI6IFVzZXI7XG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICApe31cblxuICAvKipcbiAgICogV2hlbiBpbml0aWFsaXppbmcgdGhlIGNvbXBvbmVudCwgZ2V0IHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXIncyBpbmZvcm1hdGlvblxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmFkbWluVXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSB2aWV3IGNvbXBvbmVudCB0aGF0IGlzIHZpc2libGUgd2hlbiBnb2luZyB0byB0aGUgbWFpbiBhZG1pbiBwYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkbWluLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluSG9tZUNvbXBvbmVudHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBiYXNpYyB2aWV3IGNvbXBvbmVudCB3aGVuIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGFuIGFkbWluXG4gKiBwYWdlIGJ1dCBkb2VzIG5vdCBoYXZlIGFkbWluIGFjY2Vzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3QtYXV0aCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL25vdC1hdXRoLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIE5vdEF1dGhDb21wb25lbnR7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuLyoqXG4gKiBDb21wb25lbnQgZm9yIGV4aXN0aW5nIHVzZXJzIHRvIHNpZ24gaW4gYW5kIGJlIGFibGVcbiAqIHRvIGFjY2VzcyB0aGVpciBzY2VuYXJpb3MvZnJpZGdlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ25pbicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2lnbmluLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogUG90ZW50aWFsIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBMb2dpbiBjcmVkZW50aWFscyBmb3IgdXNlciBpbmNsdWRpbmcgYHVzZXJuYW1lYCAoZW1haWwpIGFuZCBgcGFzc3dvcmRgXG4gICAqL1xuICBjcmVkZW50aWFsczogRm9ybUdyb3VwO1xuICAvKipcbiAgICogQXV0aGVudGljYXRpb24gc2VydmljZSBzdWJzY3JpcHRpb24gZnJvbSB3aGVuIHRyeWluZyB0byBsb2dpbiB0aGUgdXNlclxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgLyoqXG4gICogSW50aWFsaXplIHRoZSBmb3JtIGdyb3VwIG9uIGNvbXBvbmVudCBjcmVhdGlvblxuICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICB1c2VybmFtZTogbmV3IEZvcm1Db250cm9sKCcnLFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXSksXG4gICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSksXG4gIH0pO1xuICB9XG5cbiAgZ2V0IHVzZXJuYW1lKCkgeyByZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoJ3VzZXJuYW1lJyk7fVxuICBnZXQgcGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLmNyZWRlbnRpYWxzLmdldCgncGFzc3dvcmQnKTt9XG5cbiAgLyoqXG4gICAqIFVwb24gZm9ybSBzdWJtaXNzaW9uLCBhdHRlbXB0cyB0byBzaWduIGluIHRoZSB1c2VyIHdpdGggYGNyZWRlbnRpYWxzYCAodXNpbmcgdGhlIHNlcnZpY2UpXG4gICAqXG4gICAqIFdoZW4gc3VjY2Vzc2Z1bCwgbmF2aWdhdGUgdG9cbiAgICogLSB0aGUgcmVkaXJlY3QgVVJMIGlmIHNldCAod2hlbiBub24tbG9nZ2VkIGluIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGEgcGFnZSB0aGF0IHJlcXVpcmVkIGxvZ2dpbmcgaW4pXG4gICAqIC0gdGhlIGhvbWUgcGFnZSBpZiByZWRpcmVjdCBVUkwgaXMgbm90IHNldFxuICAgKlxuICAgKiBXaGVuIHVuc3VjY2Vzc2Z1bCwgZGlzcGxheSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICAgIHNpZ25pbigpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICAgICAgICAuc2lnbmluKHRoaXMuY3JlZGVudGlhbHMudmFsdWUpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnNldFVzZXIocmVzdWx0KTtcbiAgICAgICAgICBsZXQgcmVkaXJlY3QgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UucmVkaXJlY3RVcmwgPyB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UucmVkaXJlY3RVcmwgOiAnLyc7XG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtyZWRpcmVjdF0pO1xuICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAqIEdldCB0aGUgZm9ybSBpbnB1dCBDU1MgY2xhc3NlcyBzdHlsaW5nIHRvIHByb3ZpZGUgZmVlZGJhY2sgdG8gdXNlclxuICAqIHdoZXRoZXIgaW5wdXQgaXMgdmFsaWQgb24gbm90XG4gICpcbiAgKiBBbHdheXMgaGFzIGAuZm9ybS1jb250cm9sYCB0aGVuIGAuaXMtaW52YWxpZGAgb3IgYC5pcy12YWxpZGAgYXJlIHNldCBvbmNlIGlucHV0IGhhcyBiZWVuIHRvdWNoZWRcbiAgKlxuICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtTGFiZWwgLSBmb3JtIGdyb3VwIG5hbWUgbG9vay11cCBpbnB1dCBzdGF0ZVxuICAqXG4gICogQHJldHVybnMge09iamVjdH0gQ1NTIGNsYXNzZXMgd2hpY2ggYXBwbHkgdG8gdGhpcyBpbnB1dFxuICAqL1xuICBnZXRJbnB1dENsYXNzKGZvcm1MYWJlbDogc3RyaW5nKSB7XG4gICAgbGV0IG91dCA9IHsnZm9ybS1jb250cm9sJzogdHJ1ZX07XG4gICAgaWYodGhpcy5jcmVkZW50aWFscyAmJiB0aGlzLmNyZWRlbnRpYWxzLmdldChmb3JtTGFiZWwpKXtcbiAgICAgIGxldCBhYyA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KGZvcm1MYWJlbCk7XG4gICAgICBpZihhYy5kaXJ0eSB8fCBhYy50b3VjaGVkKXtcbiAgICAgICAgb3V0Wydpcy1pbnZhbGlkJ10gPSBhYy5pbnZhbGlkO1xuICAgICAgICBvdXRbJ2lzLXZhbGlkJ10gPSBhYy52YWxpZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzY3RydWN0aW9uLCB1bnN1YnNjcmliZSBmcm9tIHRoZSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4uLy4uL2FkbWluL2NvdXJzZS9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InXG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgYWxsb3dzIG5ldyB1c2VycyB0byBzaWduIHVwIHRvIHVzZSBDcmlja2V0LlxuICogVXNlcyBlbWFpbCBhcyB1c2VybmFtZSBhbmQgaW5jbHVkZXMgc2V2ZXJhbCBlcnJvclxuICogY2hlY2tzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2lnbnVwJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zaWdudXAudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBiYWNrZW5kIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBMaXN0IG9mIGNvdXJzZXMgYXZhaWxhYmxlIHRvIHNpZ24gdXAgZm9yO1xuICAgKiBBbGwgdXNlcnMgbXVzdCBzZWxlY3QgYSBjb3Vyc2UsIGV2ZW4gaWYgdGhlIGNvdXJzZSBpcyBcIk5BXCJcbiAgICovXG4gIHByaXZhdGUgY291cnNlczogc3RyaW5nW10gPSBbXTtcbiAgLyoqXG4gICAqIFVzZXIgZGV0YWlscyB1c2VkIGZvciBzaWdudXBcbiAgICogLSBgZmlyc3ROYW1lYFxuICAgKiAtIGBsYXN0TmFtZWBcbiAgICogLSBgdXNlcm5hbWVgIChlbWFpbCBhZGRyZXNzKVxuICAgKiAtIGBjb3Vyc2VgIChkYXRhYmFzZSBjb3Vyc2UgSUQgbm90IGNvdXJzZSBuYW1lKVxuICAgKiAtIGBwYXNzc3dvcmRgXG4gICAqIC0gYGNvbmZpcm1QYXNzd29yZGBcbiAgICovXG4gIHVzZXI6IEZvcm1Hcm91cDtcbiAgLyoqXG4gICAqIEJvb2xlYW4gc3RhdGUgb2JqZWN0IHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIG11bHRpcGxlIHNlcnZpY2VzIGVhc2llclxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2NvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgY3JlYXRpb24sIGdldCB0aGUgbGlzdCBvZiBhdmFpbGFibGUgY291cnNlcyBhbmQgb3JkZXIgdGhlbVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnVzZXIgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICdmaXJzdE5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycpLFxuICAgICAgJ2xhc3ROYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICd1c2VybmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pLFxuICAgICAgJ2NvdXJzZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAncGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSksXG4gICAgICAnY29uZmlybVBhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5wYXNzd29yZE1hdGNoVmFsaWRhdG9yXSksXG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldENvdXJzZUxpc3QoKVxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuX3Jlb3JkZXJDb3Vyc2VzKHJlcyk7XG4gICAgICAgIHRoaXMuY291cnNlcyA9IHRtcDtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICB0aGlzLmNvdXJzZXMgPSBbXTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGFjY2Vzc29ycyBmb3IgZm9ybSB2YWxpZGF0aW9uXG4gIGdldCBmaXJzdE5hbWUoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdmaXJzdE5hbWUnKTsgfVxuICBnZXQgbGFzdE5hbWUoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdsYXN0TmFtZScpOyB9XG4gIGdldCB1c2VybmFtZSgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ3VzZXJuYW1lJyk7IH1cbiAgZ2V0IGNvdXJzZSgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ2NvdXJzZScpOyB9XG4gIGdldCBwYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ3Bhc3N3b3JkJyk7IH1cbiAgZ2V0IGNvbmZpcm1QYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ2NvbmZpcm1QYXNzd29yZCcpOyB9XG5cblxuICAvKipcbiAgICogT3JkZXIgdGhlIGNvdXJzZXMgc28gdGhlIFwiTkFcIiBjb3Vyc2UgaXMgYXQgdGhlIHRvcFxuICAgKlxuICAgKiBAcGFyYW0ge2FueVtdfSBjb3Vyc2VzIGxpc3Qgb2YgY3VycmVudGx5IGF2YWlsYWJsZSBjb3Vyc2VzOyBlYWNoIGl0ZW0gaW4gbGlzdCBoYXMgYGNvdXJzZU51bWAgYW5kIGBpZGBcbiAgICpcbiAgICogQHJldHVybnMge2FueVtdfSB0aGUgbGlzdCBvcmRlcmVkIHNvIHRoZSBcIk5BXCIgY291cnNlIGlzIGF0IHRoZSB0b3BcbiAgICovXG4gIHByaXZhdGUgX3Jlb3JkZXJDb3Vyc2VzKGNvdXJzZXM6IGFueVtdKTogYW55W117XG4gICAgbGV0IG5hID0gY291cnNlcy5maWx0ZXIoKGMpPT57cmV0dXJuIGMuY291cnNlTnVtID09PSAnTkEnfSk7XG4gICAgbGV0IG90aGVyID0gY291cnNlcy5maWx0ZXIoKGMpPT57XG4gICAgICByZXR1cm4gYy5jb3Vyc2VOdW0gIT09ICdOQSdcbiAgICB9KTtcbiAgICByZXR1cm4gbmEuY29uY2F0KG90aGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAtIEF0dGVtcHRzIHRvIHNpZ24gdGhlIHVzZXIgdXAgd2hlbiB0aGV5IHN1Ym1pdCB0aGUgZm9ybVxuICAgKiAtIEluY2x1ZGVzIGVycm9yIGNoZWNrcyBmb3Igc2VsZWN0aW5nIGEgY291cnNlIGFuZCBwYXNzd29yZHMgbWF0Y2hcbiAgICogLSBXaGVuIHNpZ24tdXAgaXMgc3VjY2Vzc2Z1bCwgc2V0cyB0aGUgW2xvZ2dlZCBpbiB1c2VyXXtAbGluayBhdXRoZW50aWNhdGlvbi5zZXJ2aWNlfSBhbmQgbmF2aWdhdGVzIHRvIHRoZSBob21lIHBhZ2VcbiAgICovXG4gIHNpZ251cCgpIHtcbiAgICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICAgICAgICAuc2lnbnVwKHRoaXMudXNlci52YWx1ZSlcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnNldFVzZXIocmVzdWx0KTtcbiAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pXG4gICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgKiBDdXN0b20gdmFsaWRhdG9yIHRvIGNoZWNrIHRoYXQgaW5wdXQgcGFzc3dvcmQgYW5kIGNvbmZpcm1hdGlvbiBwYXNzd29yZCBhcmUgdGhlIHNhbWVcbiAgKlxuICAqIEBwYXJhbSBhYyB7QWJzdHJhY3RDb250cm9sfSByZWFjdGl2ZSBmb3JtIGNvbnRyb2wgZm9yIGBjb25maXJtUGFzc3dvcmRgIGlucHV0XG4gICpcbiAgKiBAcmV0dXJucyB7bnVsbCB8IE9iamVjdCB9IC0gYG51bGxgIHdoZW4gcGFzc3dvcmRzIG1hdGNoIG9yIGJlZm9yZSBmb3JtIGlzIGluaXRpYWxpemVkXG4gICogLSBge21pc21hdGNoOnRydWV9YCB3aGVuIHBhc3N3b3JkcyBkb24ndCBtYXRjaFxuICAqL1xuICBwYXNzd29yZE1hdGNoVmFsaWRhdG9yKGFjOiBBYnN0cmFjdENvbnRyb2wpe1xuICAgIGxldCBmZyA9IGFjLnBhcmVudDtcbiAgICBpZighZmcpe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmZy5nZXQoJ3Bhc3N3b3JkJykudmFsdWUgPT09IGZnLmdldCgnY29uZmlybVBhc3N3b3JkJykudmFsdWUgPyBudWxsIDoge21pc21hdGNoOiB0cnVlfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgKiBHZXQgdGhlIGZvcm0gaW5wdXQgQ1NTIGNsYXNzZXMgc3R5bGluZyB0byBwcm92aWRlIGZlZWRiYWNrIHRvIHVzZXJcbiAgKiB3aGV0aGVyIGlucHV0IGlzIHZhbGlkIG9uIG5vdFxuICAqXG4gICogQWx3YXlzIGhhcyBgLmZvcm0tY29udHJvbGAgdGhlbiBgLmlzLWludmFsaWRgIG9yIGAuaXMtdmFsaWRgIGFyZSBzZXQgb25jZSBpbnB1dCBoYXMgYmVlbiB0b3VjaGVkXG4gICpcbiAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybUxhYmVsIC0gZm9ybSBncm91cCBuYW1lIGxvb2stdXAgaW5wdXQgc3RhdGVcbiAgKlxuICAqIEByZXR1cm5zIHtPYmplY3R9IENTUyBjbGFzc2VzIHdoaWNoIGFwcGx5IHRvIHRoaXMgaW5wdXRcbiAgKi9cbiAgZ2V0SW5wdXRDbGFzcyhmb3JtTGFiZWw6IHN0cmluZykge1xuICAgIGxldCBvdXQgPSB7J2Zvcm0tY29udHJvbCc6IHRydWV9O1xuICAgIGlmKHRoaXMudXNlciAmJiB0aGlzLnVzZXIuZ2V0KGZvcm1MYWJlbCkpe1xuICAgICAgbGV0IGFjID0gdGhpcy51c2VyLmdldChmb3JtTGFiZWwpO1xuICAgICAgaWYoYWMuZGlydHkgfHwgYWMudG91Y2hlZCl7XG4gICAgICAgIG91dFsnaXMtaW52YWxpZCddID0gYWMuaW52YWxpZDtcbiAgICAgICAgb3V0Wydpcy12YWxpZCddID0gYWMudmFsaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc2N0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlcyB0byBwcmV2ZW50IGEgbWVtb3J5IGxlYWtcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRoYXQgYSB1c2VyIHNpZ25zIG91dC4gSGFzIG5vIHZpZXcvdGVtcGxhdGUtLXJlc2V0c1xuICogdmFyaWFibGVzIGFuZCBuYXZpZ2F0ZSB0byBob21lIHBhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lnbm91dCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNpZ25vdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcbiAgKXt9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBjcmVhdGlvblxuICAgKiAxLiBTaWduIG91dCB1c2VyIG9uIHNlcnZlclxuICAgKiAyLiBVbnNldCBbQXV0aGVudGljYXRpb25TZXJ2aWNlXXtAbGluayBBdXRoZW50aWNhdGlvblNlcnZpY2V9IHVzZXJcbiAgICogMy4gUmVkaXJlY3QgdG8gaG9tZSBwYWdlXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbm91dCgpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNldFVzZXIobnVsbCk7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gYXV0aGVudGljYXRpb24gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogSWYgdXNlciBmb3JnZXRzIHRoZWlyIHBhc3N3b3JkLCB0aGV5IGNhbiBlbnRlclxuICogdGhlcmUgZW1haWwgYWRkcmVzcy4gSWYgdGhlcmUgaXMgYW4gYWNjb3VudCB3aXRoIHRoZSBlbWFpbCBhZGRyZXNzLFxuICogYW4gZW1haWwgaXMgc2VudCB3aXRoIGEgbGluayB0aGF0IGFsbG93cyB1c2VyIHRvIHJlc2V0IHRoZWlyIHBhc3N3b3JkXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgZm9yIGVudGVyaW5nIGVtYWlsIGFkZHJlc3MgYW5kXG4gKiBpbmZvcm1pbmcgaWYgZW1haWwgYWRkcmVzcyB3YXMgdmFsaWQgYW5kIHJlc2V0ICogcGFzc3dvcmQgZW1haWwgd2FzIHN1Y2Nlc3NmdWxseSBzZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9yZ2V0LXBzd2QnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2ZvcmdldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBQb3NzaWJsZSBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogTWVzc2FnZSB3aGVuIHJlc2V0IHBhc3N3b3JkIGVtYWlsIHdhcyBzdWNjZXNzZnVsbHkgc2VudFxuICAgKi9cbiAgcHJpdmF0ZSBzdWNjZXNzTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBVc2VyJ3MgZW1haWwgdG8gY2hlY2sgaWYgYW4gYWNjb3VudCBleGlzdHNcbiAgICovXG4gIHByaXZhdGUgZW1haWw6IHN0cmluZztcbiAgLyoqXG4gICAqIEF1dGhlbnRpY2F0aW9uIHNlcnZpY2Ugc3Vic2NyaXB0aW9uXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBzdWJtaXR0aW5nIGZvcm0sIHJlc2V0IF9zdWNjZXNzXyBhbmQgX2Vycm9yXyBtZXNzYWdlcywgc2VuZCBlbWFpbCB0byB0aGUgc2VydmVyLCBhbmQgd2FpdCBmb3IgcmVzcG9uc2VcbiAgICpcbiAgICogLSBJZiBwYXNzd29yZCByZXNldCBlbWFpbCBzdWNjZXNzZnVsbHkgc2V0LCBfc3VjY2Vzc18gbWVzc2FnZSBpcyB1cGRhdGVkXG4gICAqIC0gSWYgdGhlcmUgd2FzIGFuIGVycm9yIChzZXJ2ZXIgZXJyb3IsIGVtYWlsIGRvZXNuJ3QgYmVsb3cgdG8gYW55IHVzZXIpLCBfZXJyb3JfIG1lc3NhZ2UgaXMgc2V0IHdpdGggZGVzY3JpcHRpb24gb2YgdGhlIGVycm9yXG4gICAqL1xuICAgIHNlbmRGb3JnZXQoKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gJyc7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgbGV0IGJvZHkgPSB7ZW1haWw6IHRoaXMuZW1haWx9O1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgICAgIC5mb3JnZXRQYXNzd29yZChib2R5KVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIC8vIGlmIHN1Y2Nlc3NmdWwsIHNob3VsZCBnZXQgc3VjY2VzcyBtZXNzYWdlXG4gICAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gYXV0aGVudGljYXRpb24gc2VydmljZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIEFmdGVyIHVzZXIgcmVxdWVzdHMgdG8gcmVzZXQgcGFzc3dvcmQgYW5kIHRoZXkgaGF2ZSBhIHRva2VuLFxuICogdGhpcyBjb21wb25lbnQgYWxsb3dzIHRoZW0gdG8gc2V0IHRoZSBwYXNzd29yZCB0byBhIG5ldyBwYXNzd29yZFxuICogKGFzc3VtaW5nIHRva2VuIGlzIHZhbGlkKVxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Jlc2V0LXBzd2QnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3Jlc2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogUG90ZW50aWFsIGVycm9yIG1lc3NhZ2UgZnJvbSBzZXJ2ZXJcbiAgICovXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogTWVzc2FnZSB3aGVuIG5ldyBwYXNzd29yZCBzdWNjZXNzZnVsbHkgc2F2ZWRcbiAgICovXG4gIHByaXZhdGUgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogRW1haWwgYW5kIG5ldyBwYXNzd29yZHMgdG8gYmUgYWJsZSB0byB1cGRhdGUgdGhlIGRhdGFiYXNlXG4gICAqIC0gYHBhc3N3b3JkYCAtIHRoZSBuZXcgcGFzc3dvcmQgdG8gc2V0XG4gICAqIC0gYGNvbmZpcm1QYXNzd29yZGAgLSBjb25maXJtIHBhc3N3b3JkIHR5cGVkIGNvcnJlY3RseVxuICAgKiAtIGB0b2tlbmAgLSBwYXNzd29yZCByZXNldCB0b2tlbiB0byBjb25maXJtIHVzZXIgaGFkIGFjY2VzcyB0byB0aGUgZW1haWwgYW5kIGRpZG4ndCB3YWl0IHRvbyBsb25nXG4gICAqL1xuICAgIHByaXZhdGUgY3JlZGVudGlhbHM6IGFueTtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byB7QGxpbmsgQXV0aGVudGljYXRpb25TZXJ2aWNlfSB3aGVuIHJldHRpbmdcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBJcyB0aGUgc3VibWl0IGJ1dHRvbiBkaXNhYmxlZDsgdGhpcyB3b3VsZCBoYXBwZW4gd2hlblxuICAgKiB0aGVyZSBpcyBubyB0b2tlblxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge1xuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gICAgICAgIHRva2VuOiBudWxsXG4gICAgICB9XG4gICAgfVxuICAvKipcbiAgICogV2hlbiBpbml0aWFsaXppbmcgdGhlIGNvbXBvbmVudCwgZ2V0IHRoZSB0b2tlbiBmcm9tIHRoZSBVUkxcbiAgICpcbiAgICogSWYgdGhlcmUgaXMgbm8gdG9rZW4sIGdpdmUgZXJyb3IgbWVzc2FnZSBhbmQgZGlzYWJsZSBzdWJtaXQgYnV0dG9uXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuY3JlZGVudGlhbHMudG9rZW4gPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3Rva2VuJyk7XG4gICAgaWYodGhpcy5jcmVkZW50aWFscy50b2tlbiA9PT0gJycpe1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnTm8gdG9rZW4gc3BlY2lmaWVkJztcbiAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHJlc2V0IHRoZSBuZXcgcGFzc3dvcmRcbiAgICogMS4gQ2hlY2sgdGhlIGlucHV0IHBhc3N3b3JkcyBmb3IgZXJyb3JzXG4gICAqIDIuIElmIG5vIGVycm9ycywgc2VuZCBjcmVkZW50aWFscyB0byBzZXJ2ZXJcbiAgICogMy4gUGFzc3dvcmQgY29ycmVjdGx5IHJlc2V0LCBkaXNwbGF5cyB0aGUgc3VjY2VzcyBtZXNzYWdlXG4gICAqIDQuIElmIGVycm9yIHJlc2V0aW5nIHRoZSBwYXNzd29yZCwgZGlzcGxheXMgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgICBzZW5kUmVzZXQoKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gJyc7XG4gICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSB0aGlzLl9jaGVja1Bhc3N3b3JkcygpO1xuICAgICAgaWYodGhpcy5lcnJvck1lc3NhZ2UgPT09ICcnKXsgLy8gYWJsZSB0byBzdWJtaXRcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICAgICAgICAucmVzZXRQYXNzd29yZCh0aGlzLmNyZWRlbnRpYWxzKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIC8vIGlmIHN1Y2Nlc3NmdWwsIHNob3VsZCBnZXQgc3VjY2VzcyBtZXNzYWdlXG4gICAgICAgICAgdGhpcy5jcmVkZW50aWFscy5wYXNzd29yZCA9ICcnO1xuICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMuY29uZmlybVBhc3N3b3JkID0gJyc7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmVzIHRoZSBpbnB1dCBwYXNzd29yZHMgdG8gbWFrZSBzdXJlIHRoZXkgYXJlIGJvdGggc3BlY2lmaWVkIGFuZCB0aGF0IHRoZXkgbWF0Y2ggZWFjaCBvdGhlclxuICAgKi9cbiAgX2NoZWNrUGFzc3dvcmRzKCl7XG4gICAgbGV0IHAgPSB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkO1xuICAgIGxldCBjID0gdGhpcy5jcmVkZW50aWFscy5jb25maXJtUGFzc3dvcmQ7XG4gICAgaWYocCA9PT0gJycpe1xuICAgICAgcmV0dXJuICdFbnRlciBuZXcgcGFzc3dvcmQnO1xuICAgIH0gZWxzZSBpZihjID09PSAnJyl7XG4gICAgICByZXR1cm4gJ0NvbmZpcm0gbmV3IHBhc3N3b3JkJztcbiAgICB9IGVsc2UgaWYocCAhPT0gYyl7XG4gICAgICByZXR1cm4gJ0NvbmZpcm0gcGFzc3dvcmQgZG9lcyBub3QgbWF0Y2gnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVscCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2hlbHAudGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2hlbHAuc3R5bGUuY3NzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgSGVscENvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcigpe31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogTWFpbiB1c2VyIHByb2ZpbGUgY29tcG9uZW50OyBhaW1lZCBmb3IgdXNlIHRvIGVkaXQgbmFtZSBhbmRcbiAqIGVtYWlsIGFkZHJlc3MuIEFsc28gYWNjZXNzIHVwZGF0ZSBwYXNzd29yZCBsaW5rIHRvIHVwZGF0ZSBwYXNzd29yZFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1c2VyLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi91c2VyLXByb2ZpbGUudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlclByb2ZpbGVDb21wb25lbnR7XG5cbiAgLyoqXG4gICAqIERhdGFiYXNlIHVzZXIgaWRcbiAgICovXG4gIHByaXZhdGUgdXNlcklkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBVc2VyIGRldGFpbHMgKGFzIGFuIG9iamVjdClcbiAgICogQ3VycmVudGx5IGluY2x1ZGVzOiBmaXJzdE5hbWUsIGxhc3ROYW1lLCBhbmQgZW1haWxcbiAgICovXG4gIHByaXZhdGUgdXNlckluZm86IGFueTtcbiAgLyoqXG4gICAqIFN0YXRlIHRvIG1haW50YWluIG9wZW4gc3Vic2NyaXB0aW9ucyB1bnRpbCBjb21wb25lbnQgaXMgZGVzdG9yeWVkXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yOyBpbmNsdWRlcyBzZXJ2aWNlcyB0byBmZXRjaCBpbmZvXG4gICAqXG4gICAqIEBwYXJhbSB7UHJvZmlsZVNlcnZpY2V9IF9wcm9maWxlU2VydmljZSBTZXJ2aWNlIGZvciB1cGRhdGluZyB0aGUgaW5mb3JtYXRpb25cbiAgICogQHBhcmFtIHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IF9hdXRoU2VydmljZSBTZXJ2aWNlIHRvIGdldCB0aGUgY3VycmVudCB1c2VyIGluZm9ybWF0aW9uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9wcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICApe1xuICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IG9uIGNyZWF0aW9uXG4gICAqIDEuIEdldCB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogMi4gU2F2ZSB0aGUgdXNlcidzIGRldGFpbHMgdG8gb2JqZWN0IHRvIGJlIGFibGUgdG8gZWRpdFxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICAvLyBnZXQgY3VycmVudCB1c2VyIGluZm9cbiAgICB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyJFxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgdGhpcy51c2VySWQgPSByZXMuaWQ7XG4gICAgICB0aGlzLnVzZXJJbmZvID0ge1xuICAgICAgICBmaXJzdE5hbWU6IHJlcy5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiByZXMubGFzdE5hbWUsXG4gICAgICAgIGVtYWlsOiByZXMuZW1haWxcbiAgICAgIH1cbiAgICB9LCAoaWRFcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoaWRFcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHVwZGF0ZSB0aGUgcHJvZmlsZSBpZiBwb3NzaWJsZSBvciBzZXQgZXJyb3JcbiAgICogbWVzc2FnZSBpZiB0aGVyZSdzIGEgcHJvYmxlbVxuICAgKi9cbiAgdXBkYXRlUHJvZmlsZSgpe1xuICAgIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLmVkaXRQcm9maWxlKHRoaXMudXNlcklkLCB0aGlzLnVzZXJJbmZvKVxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHVwZGF0ZWQpPT57XG4gICAgICB0aGlzLnVzZXJJbmZvID0ge2ZpcnN0TmFtZTogdXBkYXRlZC5maXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IHVwZGF0ZWQubGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVwZGF0ZWQuZW1haWx9O1xuICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2V0VXNlcih1cGRhdGVkKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RydWN0aW9uLCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIHRvIHByZXZlbnRcbiAgICogbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBhIGxvZ2dlZCBpbiB1c2VyIHRvIHVwZGF0ZSB0aGVpciBwYXNzd29yZFxuICogYnkgZW50ZXJpbmcgdGhlaXIgY3VycmVudCBwYXNzd29yZCB0aGVuIHRoZSBuZXcgcGFzc3dvcmRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXNlci1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3VwZGF0ZS1wYXNzd29yZC50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVQYXNzd29yZENvbXBvbmVudHtcblxuICAvKipcbiAgICogVGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqL1xuICBwcml2YXRlIHVzZXI6IFVzZXI7XG4gIC8qKlxuICAgKiAtIFBhc3N3b3JkIGluZm9ybWF0aW9uIHRvIHNlbmQgdG8gc2VydmVyIHRvIHVwZGF0ZSBwYXNzd29yZFxuICAgKiAtIEhhcyBmaWVsZHMgYHBhc3N3b3JkYCAoY3VycmVudCBwYXNzd29yZCksIGBuZXdQYXNzd29yZGAgKHBhc3N3b3JkIHRvIGNoYW5nZSB0byksIFxuICAgKiBgY29uZmlybVBhc3N3b3JkYCAoY29uZmlybXMgdHlwaW5nIG9mIG5ldyBwYXNzd29yZCksIGFuZCBcbiAgICogYHVzZXJuYW1lYCAodXNlcidzIGVtYWlsKVxuICAgKi9cbiAgcHJpdmF0ZSBjcmVkZW50aWFsczogYW55O1xuICAvKipcbiAgICogU3RhdGUgdG8ga2VlcCB0cmFjayBvZiBjb21wb2VuZW50IGFsaXZlXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBiYWNrZW5kIGVycm9yIG1lc3NhZ2UgZGlzcGxheWVkIHByb21pbmFudGx5XG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlIGFib3V0IHN1Ym1pc3Npb24gYW5kIHdoeSB0aGUgc3VibWlzc2lvbiBkaWRuJ3Qgd29yayBhcyBleHBlY3RlZFxuICAgKi9cbiAgcHJpdmF0ZSBwYXNzd29yZE1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3Byb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICl7XG4gICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge1xuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIG5ld1Bhc3N3b3JkOiAnJyxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiAnJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyIGluZm9cbiAgICogMi4gU2V0IHVwIHRoZSBjcmVkZW50aWFscyB3aXRoIGVtYWlsIGFkZHJlc3NcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgLy8gZ2V0IGN1cnJlbnQgdXNlciBpbmZvXG4gICAgdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlciRcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIHRoaXMudXNlciA9IHJlcztcbiAgICAgIHRoaXMuY3JlZGVudGlhbHNbJ3VzZXJuYW1lJ10gPSByZXMuZW1haWw7XG4gICAgfSwgKGlkRXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGlkRXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0IHRvIHVwZGF0ZSB0aGUgcGFzc3dvcmRcbiAgICogLSBJZiBzdWNjZXNzZnVsLCByZWRpcmVjdHMgdG8gcHJvZmlsZSBwYWdlXG4gICAqIC0gSWYgdGhlcmUncyBhbiBlcnJvciwgZGlzcGxheXMgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgdXBkYXRlUGFzc3dvcmQoKXtcbiAgICAvLyBkbyBjaGVja3NcbiAgICB0aGlzLnBhc3N3b3JkTWVzc2FnZSA9IHRoaXMuX2NoZWNrUGFzc3dvcmRzKCk7XG4gICAgaWYodGhpcy5wYXNzd29yZE1lc3NhZ2UgPT09ICcnKXtcbiAgICAgIC8vIGNhbiB1cGRhdGVcbiAgICAgIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLnVwZGF0ZVBhc3N3b3JkKHRoaXMudXNlci5pZCwgdGhpcy5jcmVkZW50aWFscylcbiAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsZSddKTtcbiAgICAgIH0sIChlcnIpPT57XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERvZXMgdmFyaW91cyBjaGVja3MgdG8gZW5zdXJlIHRoZSBwYXNzd29yZCBmaWVsZHMgYXJlIHZhbGlkXG4gICAqIDEuIEFsbCBmaWVsZHMgYXJlIGZpbGxlZCBpblxuICAgKiAyLiBOZXcgcGFzc3dvcmQgaXMgZGlmZmVyZW50IGZyb20gb2xkIHBhc3N3b3JkXG4gICAqIDMuIENvbmZpcm0gcGFzc3dvcmQgbWF0Y2hlcyBuZXcgcGFzc3dvcmRcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gZXJyb3IgbWVzc2FnZSBpZiBhdCBsZWFzdCBvbmUgY29uZGl0aW9uIGlzbid0IG1ldCBvciBgJydgIGlmIGV2ZXJ5dGhpbmcgaXMgdmFsaWRcbiAgICovXG4gIHByb3RlY3RlZCBfY2hlY2tQYXNzd29yZHMoKXtcbiAgICBsZXQgcCA9IHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQ7XG4gICAgbGV0IG4gPSB0aGlzLmNyZWRlbnRpYWxzLm5ld1Bhc3N3b3JkO1xuICAgIGxldCBjID0gdGhpcy5jcmVkZW50aWFscy5jb25maXJtUGFzc3dvcmQ7XG4gICAgaWYocCA9PT0gJycpe1xuICAgICAgcmV0dXJuICdFbnRlciBvbGQgcGFzc3dvcmQnO1xuICAgIH0gZWxzZSBpZihuID09PSAnJyl7XG4gICAgICByZXR1cm4gJ0VudGVyIG5ldyBwYXNzd29yZCc7XG4gICAgfSBlbHNlIGlmKGMgPT09ICcnKXtcbiAgICAgIHJldHVybiAnQ29uZmlybSBuZXcgcGFzc3dvcmQnO1xuICAgIH0gZWxzZSBpZihwID09PSBuKXtcbiAgICAgIHJldHVybiAnTmV3IHBhc3N3b3JkIGNhbm5vdCB0aGUgc2FtZSBhcyB0aGUgb2xkIHBhc3N3b3JkJztcbiAgICB9IGVsc2UgaWYobiAhPT0gYyl7XG4gICAgICByZXR1cm4gJ0NvbmZpcm0gcGFzc3dvcmQgZG9lcyBub3QgbWF0Y2gnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbiwgdW5zdWJzY3JpYmUgdG8gc2VydmljZXMvc3RyZWFtc1xuICAgKiB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXBkYXRlLXBhc3N3b3JkL3VwZGF0ZS1wYXNzd29yZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBWaWV3IGNvbXBvbmVudCB1c2VkIHRvIGxpbmsgdGhlIGJyZWFkY3J1bWIgd2l0aCB0aGUgbG9jYXRpb25cbiAqIG1vZHVsZSBjb21wb25lbnRzIG9yIHNjZW5hcmlvIGxpc3RcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2NlbmFyaW8nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zY2VuYXJpby50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBTY2VuYXJpb0NvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2NlbmFyaW8uc2VydmljZSc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zY2VuYXJpby5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIENvbXBvbmVudCB3aGljaCBsaXN0cyBhbGwgYXZhaWxhYmxlIHNjZW5hcmlvc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NjZW5hcmlvLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2xpc3QudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgLyoqXG4gICAqIFVzZXIgb2JqZWN0IG9mIGxvZ2dlZCBpbiB1c2VyLCBpZiBhdmFpbGFibGVcbiAgICovXG4gICAgdXNlcjogVXNlcjtcbiAgLyoqXG4gICogbGlzdCBvZiBhdmFpbGFibGUgc2NlbmFyaW9zXG4gICovXG4gICAgc2NlbmFyaW9zOiBTY2VuYXJpb1tdO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBwcml2YXRlIHNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSkge1xuXG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnQgYnkgdXNpbmcgdGhlIHNlcnZpY2UgdG8gZmV0Y2ggdGhlXG4gICAqIGxpc3Qgb2Ygc2NlbmFyaW9zXG4gICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgIHRoaXMuc1N1YnNjcmlwdGlvbiA9IHRoaXMuX3NjZW5hcmlvU2VydmljZS5saXN0U2NlbmFyaW9zKClcbiAgICAgICAgLnN1YnNjcmliZSgoc2NlbmFyaW9zKSA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmFyaW9zID0gc2NlbmFyaW9zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICogdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zU3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWRtaW5TdHVkZW50LCBTdHVkZW50RnJpZGdlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogU2VydmljZSB3aGljaCBkZWFscyB3aXRoIGFsbCBzdHVkZW50LXJlbGF0ZWQgYmFja2VuZCBjYWxsc1xuICogZnJvbSBhbiBhZG1pblxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3R1ZGVudFNlcnZpY2Uge1xuICBcbiAgcHJpdmF0ZSBfYmFzZVVSTCA9ICcvYXBpL2FkbWluJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHN0dWRlbnRzLCBjb250ZW50IGlzIGRlcGVuZGVudCBvZiBsb2dnZWQgaW4gdXNlciByb2xlXG4gICAqXG4gICAqIElmIGBhZG1pbmAsIHJldHVybiBhbGwgc3R1ZGVudHMvdXNlcnNcbiAgICogXG4gICAqIElmIGBpbnN0cmAsIHJldHVybnMgc3R1ZGVudHMgb2YgY291cnNlcyBpbnN0ciB0ZWFjaHNcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge0FkbWluU3R1ZGVudFtdfSAtIGxpc3Qgb2Ygc3R1ZGVudHNcbiAgICovXG4gIGxpc3RTdHVkZW50cyhhZG1pbklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudFtdPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxBZG1pblN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZXRhaWxzIGFib3V0IGEgc3R1ZGVudFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBmb3IgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBmb3Igc3R1ZGVudCB0byBiZSBsb29rZWQgdXBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50Pn0gLSBkZXRhaWxzIGFib3V0IHNwZWNpZmllZCBzdHVkZW50XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBnZXRTdHVkZW50KGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8QWRtaW5TdHVkZW50PihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgcm9sZSAoYWRtaW4sIGluc3RyLCBzdHVkZW50KSBvZiBhbm90aGVyIHN0dWRlbnQvdXNlclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBmb3IgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBmb3Igc3R1ZGVudCB0byB1cGRhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJvbGUgLSBuZXcgcm9sZSB0byBiZSBhc3NpZ25lZDsgb25lIG9mOiBgXCJhZG1pblwiLCBcImluc3RyXCIsIFwic3R1ZGVudFwiYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIHRoZSB1cGRhdGVkIHN0dWRlbnRcbiAgICogLSBlcnJvciBgVmFsdWUgXCJyb2xlXCIgaXMgbm90IGEgdmFsaWQgcm9sZWAgaWYgcm9sZSBpc24ndCBvbmUgb2YgYGFkbWluYCwgYGluc3RyYCwgYHN0dWRlbnRgXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBzZXRTdHVkZW50Um9sZShhZG1pbklkOiBudW1iZXIsIHN0dWRlbnRJZDogbnVtYmVyLCByb2xlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgbGV0IGJvZHkgPSB7cm9sZTogcm9sZX07XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHMvJHtzdHVkZW50SWR9YCwgYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgc3R1ZGVudC91c2VyXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIC0gdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB1c2VySWQgb2Ygc3R1ZGVudCB0byBkZWxldGVcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBzdHVkZW50IHdobyB3YXMganVzdCBkZWxldGVkXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBkZWxldGVTdHVkZW50KGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50cy8ke3N0dWRlbnRJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2NlbmFyaW8gZnJpZGdlIGZvciBhIHN0dWRlbnQ7IGluY2x1ZGVzIGZyaWRnZSBkZXRhaWxzIHN1Y2ggYXNcbiAgICogZnJpZGdlIHN0cmFpbnMgYW5kIGd1ZXNzZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBvZiBzdHVkZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgLSBzY2VuYXJpbyBJZCBmb3IgZnJpZGdlIHRvIGZpbmRcbiAgICpcbiAgICogQHJldHVybnN7T2JzZXJ2YWJsZTxTdHVkZW50RnJpZGdlPn0gLSB0aGUgc3R1ZGVudCdzIGZyaWRnZVxuICAgKiAtIGFuIGVtcHR5IGZyaWRnZSBpZiB0aGUgZnJpZGdlIGRvZXNuJ3QgZXhpc3QgeWV0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyIGVycm9yXG4gICAqL1xuICBnZXRGcmlkZ2UoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0dWRlbnRGcmlkZ2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PFN0dWRlbnRGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHMvJHtzdHVkZW50SWR9LyR7c2NlbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzY2VuYXJpbyBhY2Nlc3MgZm9yIGEgc3R1ZGVudDsgdGhpcyBkZWxldGVzIHRoZSBleGlzdGluZ1xuICAgKiBmcmlkZ2VcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBvZiBzdHVkZW50XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXBkYXRlZFN0YXRlIC0gdHJ1ZSB0byBncmFudCBhY2Nlc3MsIGZhbHNlIHRvIHJldm9rZSBhY2Nlc3NcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50Pn0gdXBkYXRlZCBzdHVkZW50XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBncmFudFNjZW5BY2Nlc3MoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHVwZGF0ZWRTdGF0ZTogYm9vbGVhbik6IE9ic2VydmFibGU8QWRtaW5TdHVkZW50PntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3Q8QWRtaW5TdHVkZW50PihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfS8ke3NjZW5JZH1gLCB7YWNjZXNzOiB1cGRhdGVkU3RhdGV9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuLyoqXG4gKiBUaGlzIGlzIGEgY29uZmlybWF0aW9uIGRpYWxvZyB3aGVuIHVzZXIgd2FudHMgdG8gZGVsZXRlXG4gKiBzb21ldGhpbmcgc2Vuc2l0aXZlLCBpLmUuIGFub3RoZXIgdXNlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb25maXJtLWRlbGV0ZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb25maXJtLWRlbGV0ZS1kaWFsb2cudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudHtcblxuICAvKipcbiAgICogTWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRpYWxvZyB3aW5kb3dcbiAgICovXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZyA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPydcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKXtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyBhbiBlcnJvciBvYmplY3QgYW5kIGxvb2tzIGZvclxuICogdGhlIGVycm9yIG1lc3NhZ2U7IGl0IGNoZWNrcyBzZXZlcmFsIHByb3BlcnRpZXMgYmVjYXVzZVxuICogZXJyb3JzIGFyZSBub3QgYWx3YXlzIHVuaWZvcm1cbiAqXG4gKiBAcGFyYW0ge2FueX0gZXJyb3IgLSBlcnJvciBvYmplY3QgdG8gZmluZCBlcnJvciBtZXNzYWdlIGZyb21cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZXJyb3IgbWVzc2FnZSB3aXRoaW4gdGhlIG9iamVjdCBvclxuICogYFwiVW5rbm93biBlcnJvclwiYCBpZiB0aGUgZXJyb3IgbWVzc2FnZSBjYW4ndCBiZSBmb3VuZFxuICovXG5leHBvcnQgY29uc3QgcmVhZEVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uKGVycm9yOiBhbnkpOiBzdHJpbmcge1xuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gJ1Vua25vd24gZXJyb3InO1xuICBpZihlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci5tZXNzYWdlKXtcbiAgIHJldHVybiBlcnJvci5lcnJvci5tZXNzYWdlXG4gIH0gZWxzZSBpZihlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci50ZXh0KXtcbiAgIHJldHVybiBlcnJvci5lcnJvci50ZXh0XG4gIH0gZWxzZSBpZiAoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSl7XG4gICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgfSBlbHNlIGlmKGVycm9yKXtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbiAgcmV0dXJuIGVycm9yTWVzc2FnZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9yZWFkLWVycm9yLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEbmRNb2R1bGUgfSBmcm9tICduZzItZG5kJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE1jQnJlYWRjcnVtYnNNb2R1bGUgfSBmcm9tICduZ3gtYnJlYWRjcnVtYnMnO1xuaW1wb3J0IHsgU2t5aG9va0RuZE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItc2t5aG9vayc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRvdWNoQmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC10b3VjaC1iYWNrZW5kJztcblxuaW1wb3J0IHsgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFBlcnNvbk5hbWVQaXBlIH0gZnJvbSAnLi4vcGlwZXMvcGVyc29uLW5hbWUucGlwZSc7XG5pbXBvcnQgeyBQZW9wbGVMaXN0TmFtZXNQaXBlIH0gZnJvbSAnLi4vcGlwZXMvcGVvcGxlLWxpc3QtbmFtZXMucGlwZSc7XG5pbXBvcnQgeyBQaGFnZVBhcmVudHNQaXBlIH0gZnJvbSAnLi4vcGlwZXMvcGhhZ2UtcGFyZW50cy5waXBlJztcblxuaW1wb3J0IHsgRm9ybUVycm9yc01vZHVsZSB9IGZyb20gJy4vZm9ybS1lcnJvcnMvZm9ybS1lcnJvcnMubW9kdWxlJztcbi8vaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9ycyB9IGZyb20gJy4vY3VzdG9tLXZhbGlkYXRvcnMnO1xuLyoqXG4gKiBUaGUgU2hhcmVkIE1vZHVsZSBjb250YWlucyBtb2R1bGVzLCBwaXBlcywgYW5kIGNvbXBvbmVudHNcbiAqIHRoYXQgYXJlIG5lZWRlZCBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogU2F2ZXMgdGltZSBieSBpbXBvcnRpbmcgdGhpcyBtb2R1bGUgcmF0aGVyIHRoYW4gdGhlXG4gKiBwaXBlcy9tb2R1bGVzL2NvbXBvbmVudHMgaW5kaXZpZHVhbGx5XG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgRm9ybUVycm9yc01vZHVsZSxcbiAgICAgIERuZE1vZHVsZS5mb3JSb290KCksXG4gICAgICBOZ2JNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgTWNCcmVhZGNydW1ic01vZHVsZS5mb3JSb290KCksXG4gICAgICBTa3lob29rRG5kTW9kdWxlLmZvclJvb3QoeyBiYWNrZW5kOiBUb3VjaEJhY2tlbmQgfSlcbiAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQZXJzb25OYW1lUGlwZSxcbiAgICBQZW9wbGVMaXN0TmFtZXNQaXBlLFxuICAgIFBoYWdlUGFyZW50c1BpcGUsXG4gICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgIEZvcm1FcnJvcnNNb2R1bGUsXG4gICAgICBEbmRNb2R1bGUsXG4gICAgICBOZ2JNb2R1bGUsXG4gICAgICBNY0JyZWFkY3J1bWJzTW9kdWxlLFxuICAgICAgUGVyc29uTmFtZVBpcGUsXG4gICAgICBQZW9wbGVMaXN0TmFtZXNQaXBlLFxuICAgICAgUGhhZ2VQYXJlbnRzUGlwZSxcbiAgICAgIFNreWhvb2tEbmRNb2R1bGUsXG4gICAgICBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpe1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2Jvb3RzdHJhcC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1jQnJlYWRjcnVtYnNDb25maWcgfSBmcm9tICduZ3gtYnJlYWRjcnVtYnMnO1xuXG5pbXBvcnQgeyBBcHBSb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VkSW5HdWFyZCB9IGZyb20gJy4vYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi9zY2VuYXJpby9zY2VuYXJpby5zZXJ2aWNlJztcbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuL2FkbWluL2NvdXJzZS9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb1Jlc29sdmVyIH0gZnJvbSAnLi9zY2VuYXJpby9zY2VuYXJpby5yZXNvbHZlcic7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQWRtaW5Nb2R1bGUgfSBmcm9tICcuL2FkbWluL2FkbWluLm1vZHVsZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IEhlbHBNb2R1bGUgfSBmcm9tICcuL2hlbHAvaGVscC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZmlsZU1vZHVsZSB9IGZyb20gJy4vcHJvZmlsZS9wcm9maWxlLm1vZHVsZSc7XG5pbXBvcnQgeyBTY2VuYXJpb01vZHVsZSB9IGZyb20gJy4vc2NlbmFyaW8vc2NlbmFyaW8ubW9kdWxlJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdkNvbXBvbmVudCB9IGZyb20gJy4vbmF2L25hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIG1haW4gYm9vdHN0cmFwcGVkIG1vZHVsZVxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgIEhlbHBNb2R1bGUsXG4gICAgICBBZG1pbk1vZHVsZSxcbiAgICAgIFByb2ZpbGVNb2R1bGUsXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uTW9kdWxlLFxuICAgICAgU2NlbmFyaW9Nb2R1bGUsXG4gICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChBcHBSb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBOYXZDb21wb25lbnQsXG4gICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgUGFnZU5vdEZvdW5kQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgIExvZ2dlZEluR3VhcmQsXG4gICAgICBTY2VuYXJpb1NlcnZpY2UsXG4gICAgICBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgU2NlbmFyaW9SZXNvbHZlclxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuY29uc3RydWN0b3IoYnJlYWRjcnVtYnNDb25maWc6IE1jQnJlYWRjcnVtYnNDb25maWcpIHtcblxuICAgIGJyZWFkY3J1bWJzQ29uZmlnLnBvc3RQcm9jZXNzID0gKHgpID0+IHtcblxuICAgICAgLy8gRW5zdXJlIHRoYXQgdGhlIGZpcnN0IGJyZWFkY3J1bWIgYWx3YXlzIHBvaW50cyB0byBob21lXG5cbiAgICAgIGxldCB5ID0geDtcblxuICAgICAgaWYoeC5sZW5ndGggJiYgeFswXS50ZXh0ICE9PSAnSG9tZScpIHtcbiAgICAgICAgeSA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnSG9tZScsXG4gICAgICAgICAgICBwYXRoOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXS5jb25jYXQoeCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB5O1xuICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FwcC5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBBcHBSb3V0ZXM6IFJvdXRlcyA9XG4gICAgICBbe1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50XG4gICAgICB9LFxuICAgICAgIHtcbiAgICAgICAgcGF0aDogJyoqJyxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTm90Rm91bmRDb21wb25lbnRcbiAgICAgIH1dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXBwLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NjNcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9ob21lL2hvbWUudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9ob21lL2hvbWUudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaG9tZS9ob21lLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9ob21lL2hvbWUuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5NjVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NjZcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEZvcm1hdCBhIHVzZXIncyBvciBzdHVkZW50cyBmcmlzdCBhbmQgbGFzdCBuYW1lIGFzIFwiZmlyc3ROYW1lIGxhc3ROYW1lXCJcbiAqIC0gV2hlbiByZXZlcnNlIGlzIHRydWUsIGZvcm1hdCBhcyBcImxhc3ROYW1lLCBmaXJzdE5hbWVcIlxuICogLSBBYmxlIHRvIGhhbmRsZSB3aGVuIG9ubHkgZmlyc3Qgb3IgbGFzdCBuYW1lIGlzIHNldFxuICpcbiAqICoqVXNhZ2U6KiogYHt7IHBlcnNvbiB8IHBlcnNvbk5hbWU6aXNSZXZlcnNlIH19YFxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk5vcm1hbCBvdXRwdXQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e2ZpcnN0TmFtZTogXCJNaWNrZXlcIiwgbGFzdE5hbWU6IFwiTW91c2VcIn08L2NvZGU+IGJlY29tZXMgXCJNaWNrZXkgTW91c2VcIlxuICogQGV4YW1wbGUgPGNhcHRpb24+UmV2ZXJzZSBvdXRwdXQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e2ZpcnN0TmFtZTogXCJNaWNrZXlcIiwgbGFzdE5hbWU6IFwiTW91c2VcIn08L2NvZGU+IGJlY29tZXMgXCJNb3VzZSwgTWlja2V5XCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkZpcnN0IG5hbWUgb25seSA6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT57Zmlyc3ROYW1lOiBcIk1pY2tleVwiLCBsYXN0TmFtZTogdW5kZWZpbmVkfTwvY29kZT4gYmVjb21lcyBcIk1pY2tleVwiXG4qL1xuQFBpcGUoe25hbWU6ICdwZXJzb25OYW1lJ30pXG5leHBvcnQgY2xhc3MgUGVyc29uTmFtZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0ocGVyc29uOiBhbnksIHJldmVyc2U6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGxldCBmTmFtZTogc3RyaW5nID0gcGVyc29uLmZpcnN0TmFtZSB8fCAnJztcbiAgICBsZXQgbE5hbWU6IHN0cmluZyA9IHBlcnNvbi5sYXN0TmFtZSB8fCAnJztcbiAgaWYocmV2ZXJzZSl7XG4gICAgcmV0dXJuIGxOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJywgJyA6ICcnKStmTmFtZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZk5hbWUgKyAoZk5hbWUhPT0nJyAmJiBsTmFtZSAhPT0gJycgPyAnICcgOiAnJykrbE5hbWU7XG4gIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcGlwZXMvcGVyc29uLW5hbWUucGlwZS50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBGb3JtYXQgYSBsaXN0IG9mIHVzZXIncyBvciBzdHVkZW50cyBmcmlzdCBhbmQgbGFzdCBuYW1lIGFzIFwiZmlyc3ROYW1lIGxhc3ROYW1lXCJcbiAqIC0gV2hlbiByZXZlcnNlIGlzIHRydWUsIGZvcm1hdCBhcyBcImxhc3ROYW1lLCBmaXJzdE5hbWVcIlxuICogLSBBYmxlIHRvIGhhbmRsZSB3aGVuIG9ubHkgZmlyc3Qgb3IgbGFzdCBuYW1lIGlzIHNldFxuICpcbiAqICoqVXNhZ2U6KiogYHt7IHBlb3BsZUxpc3QgfCBwZW9wbGVMaXN0TmFtZXM6aXNSZXZlcnNlIH19YFxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk5vcm1hbCBvdXRwdXQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+W3tmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogXCJEdWNrXCJ9XTwvY29kZT4gYmVjb21lcyBcIk1pY2tleSBNb3VzZSwgRG9uYWxkIER1Y2tcIlxuICogQGV4YW1wbGUgPGNhcHRpb24+UmV2ZXJzZSBvdXB1dCA6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT5be2ZpcnN0TmFtZTogXCJNaWNrZXlcIiwgbGFzdE5hbWU6IFwiTW91c2VcIn0sIHtmaXJzdE5hbWU6IFwiRG9uYWxkXCIsIGxhc3ROYW1lOiBcIkR1Y2tcIn1dPC9jb2RlPiBiZWNvbWVzIFwiTW91c2UsIE1pY2tleTsgRHVjaywgRG9uYWxkXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk1pc3NpbmcgbmFtZXMgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+W3tmaXJzdE5hbWU6IHVuZGVmaW5lZCwgbGFzdE5hbWU6IFwiTW91c2VcIn0sIHtmaXJzdE5hbWU6IFwiRG9uYWxkXCIsIGxhc3ROYW1lOiB1bmRlZmluZWR9XTwvY29kZT4gYmVjb21lcyBcIk1vdXNlLCBEb25hbGRcIlxuICovXG5AUGlwZSh7bmFtZTogJ3Blb3BsZUxpc3ROYW1lcyd9KVxuZXhwb3J0IGNsYXNzIFBlb3BsZUxpc3ROYW1lc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0ocGVyc29uTGlzdDogYW55W10sIHJldmVyc2U6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGxldCBvdXQgPSAnJztcbiAgICBmb3IobGV0IHBlcnNvbiBvZiBwZXJzb25MaXN0KXtcbiAgICAgIGxldCBmTmFtZTogc3RyaW5nID0gcGVyc29uLmZpcnN0TmFtZSB8fCAnJztcbiAgICAgIGxldCBsTmFtZTogc3RyaW5nID0gcGVyc29uLmxhc3ROYW1lIHx8ICcnO1xuICAgICAgaWYob3V0ICE9PSAnJyAmJiAoZk5hbWUgIT09ICcnIHx8IGxOYW1lICE9PSAnJykpe1xuICAgICAgICBvdXQgKz0gKHJldmVyc2UgPyAnOyAnIDogJywgJyk7XG4gICAgICB9XG4gICAgaWYocmV2ZXJzZSl7XG4gICAgICBvdXQgKz0gbE5hbWUgKyAoZk5hbWUhPT0nJyAmJiBsTmFtZSAhPT0gJycgPyAnLCAnIDogJycpK2ZOYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICBvdXQgKz0gZk5hbWUgKyAoZk5hbWUhPT0nJyAmJiBsTmFtZSAhPT0gJycgPyAnICcgOiAnJykrbE5hbWU7XG4gICAgICB9XG4gICAgfS8vIGVuZCBmb3JcbiAgICByZXR1cm4gb3V0XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BpcGVzL3Blb3BsZS1saXN0LW5hbWVzLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaGFnZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGhhZ2UuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBGb3JtYXQgdGhlIHRleHR1YWwgcHJlc2VudGF0aW9uIG9mIGEgcGhhZ2Ugc3RyYWluJ3MgcGFyZW50c1xuICogKGlmIGFueSkgd2hlbiB2aWV3aW5nIHRoZSBkaWFsb2cgYm94IGZvciBhIHBoYWdlXG4gKlxuICogVGhlIGBudW1QYXJlbnRzYCB2YXJpYWJsZSBpcyB1c2VkIHRvIGRldGVybWluZSBpZiBvbmUgb2YgdGhlXG4gKiBwYXJlbnRzIGhhZCBiZWVuIGRlbGV0ZWQgZnJvbSB0aGUgZGF0YWJhc2Ugd2hlbiBgcGFyZW50cy5sZW5ndGggIT0gbnVtUGFyZW50c2BcbiAqXG4gKiBOb3RlOiB0aGUgcGhhZ2UgYHN0cmFpbk51bWAgYXJlIDAtYmFzZWQgYnV0IFVJIGlzIDEtYmFzZWQgc29cbiAqIHRoZSBzdHJhaW4gbnVtYmVyIGlzIGFkanVzdGVkXG4gKlxuICogKipVc2FnZToqKiBge3twYXJlbnRzTGlzdCB8IHBoYWdlUGFyZW50czpudW1QYXJlbnRzfX1gXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+T25lIHBhcmVudCA6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT57cGFyZW50czogW3tpZDogJ2lkMScsIHN0cmFpbk51bTogJzQnfV0sIG51bVBhcmVudHM6IDF9PC9jb2RlPiBiZWNvbWVzIFwiU3RyYWluIDVcIlxuICogQGV4YW1wbGUgPGNhcHRpb24+VHdvIHBhcmVudHM6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT57cGFyZW50czogW3tpZDogJ2lkMScsIHN0cmFpbk51bTogNH0sIHtpZDogJ2lkMicsIHN0cmFpbk51bTogMTB9XSwgbnVtUGFyZW50czogMn08L2NvZGU+IGJlY29tZXMgXCJTdHJhaW5zIDUgYW5kIDExXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlR3byBwYXJlbnRzIGJ1dCBtaXNzaW5nIG9uZTogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPntwYXJlbnRzOiBbe2lkOiAnaWQzJywgc3RyYWluTnVtOiA4fV0sIG51bVBhcmVudHM6IDJ9PC9jb2RlPiBiZWNvbWVzIFwiU3RyYWlucyA5IGFuZCA/XCJcbiAqL1xuQFBpcGUoe25hbWU6ICdwaGFnZVBhcmVudHMnfSlcbmV4cG9ydCBjbGFzcyBQaGFnZVBhcmVudHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBhcmVudHM6IFBoYWdlW10sIG51bVBhcmVudHM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IG91dCA9ICcnO1xuICAgIGlmKG51bVBhcmVudHMgPT09IHVuZGVmaW5lZCl7XG4gICAgICBudW1QYXJlbnRzID0gcGFyZW50cy5sZW5ndGhcbiAgICB9XG4gICAgaWYocGFyZW50cy5sZW5ndGggPT09IDApe1xuICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgbGV0IHNvcnRlZDogUGhhZ2VbXSA9IHBhcmVudHMuc29ydCgobjEsIG4yKT0+e3JldHVybiBuMS5zdHJhaW5OdW0gLSBuMi5zdHJhaW5OdW19KTtcbiAgICBsZXQgbnVtcyA9IHNvcnRlZC5tYXAoKHBoYWdlKT0+e3JldHVybiAocGhhZ2Uuc3RyYWluTnVtKzEpLnRvU3RyaW5nKCl9KTtcblxuICAgIGlmKHNvcnRlZC5sZW5ndGggPT09IDEgJiYgbnVtUGFyZW50cyA9PT0gMSl7XG4gICAgICBvdXQgPSAnU3RyYWluICcgKyBudW1zWzBdO1xuICAgIH0gZWxzZSBpZihzb3J0ZWQubGVuZ3RoID09PSAxICYmIG51bVBhcmVudHMgPT09IDIpe1xuICAgICAgb3V0ID0gJ1N0cmFpbnMgJyArIG51bXNbMF0gKyAnIGFuZCA/JztcbiAgICB9IGVsc2UgaWYoc29ydGVkLmxlbmd0aCA9PT0gMiAmJiBudW1QYXJlbnRzID09PSAyKXtcbiAgICAgIG91dCA9ICdTdHJhaW5zICcgKyBudW1zWzBdICsgJyBhbmQgJyArIG51bXNbMV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BpcGVzL3BoYWdlLXBhcmVudHMucGlwZS50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBSZXF1aXJlZEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9yZXF1aXJlZC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1haWxFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vZW1haWwtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IFBhc3N3b3JkRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL3Bhc3N3b3JkLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtUGFzc3dvcmRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS1wYXNzd29yZC1lcnJvci5jb21wb25lbnQnO1xuLyoqXG4gKiBUaGUgRm9ybSBFcnJvcnMgTW9kdWxlIGNvbnRhaW5zIHRlbXBsYXRlcyBmb3IgUmVhY3RpdmVGb3JtXG4gKiBpbnB1dCBlcnJvcnMgdGhhdCBhcmUgbmVlZGVkIGFjcm9zcyB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBTYXZlcyB0aW1lIGZyb20gaGF2aW5nIHRvIGNyZWF0ZSB0aGUgc2FtZSBlcnJvciBtZXNzYWdlcyBhY3Jvc3NcbiAqIG51bWVyb3VzIHBhZ2VzIGFuZCBrZWVwcyB0aGUgZXJyb3IgbWVzc2FnZXMgY29uc2lzdGFudFxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJlcXVpcmVkRXJyb3JDb21wb25lbnQsXG4gICAgRW1haWxFcnJvckNvbXBvbmVudCxcbiAgICBQYXNzd29yZEVycm9yQ29tcG9uZW50LFxuICAgIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50XG4gIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgUmVxdWlyZWRFcnJvckNvbXBvbmVudCxcbiAgICAgIEVtYWlsRXJyb3JDb21wb25lbnQsXG4gICAgICBQYXNzd29yZEVycm9yQ29tcG9uZW50LFxuICAgICAgQ29uZmlybVBhc3N3b3JkRXJyb3JDb21wb25lbnRcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRXJyb3JzTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5tb2R1bGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmVxdWlyZWQtZXJyb3InLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3JlcXVpcmVkLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIFJlcXVpcmVkRXJyb3JDb21wb25lbnQge1xuICBASW5wdXQoKSBmaWVsZDogQWJzdHJhY3RDb250cm9sO1xuICBASW5wdXQoKSB0ZXh0TGFiZWw6IHN0cmluZztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9yZXF1aXJlZC1lcnJvci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9yZXF1aXJlZC1lcnJvci50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9yZXF1aXJlZC1lcnJvci50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NzJcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEhhbmRsZSBlbWFpbCByZWxhdGVkIGVycm9yIG1lc3NhZ2VzIHN1Y2ggYXNcbiAqIC0gaXMgcmVxdWlyZWQ6IGBFbWFpbCBpcyByZXF1aXJlZGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlbWFpbC1lcnJvcicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgRW1haWxFcnJvckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgZW1haWwgZnJvbSBmb3JtOyBpbmNsdWRlcyBlcnJvcnMgaWYgYXBwbGljYWJsZVxuICAgKi9cbiAgQElucHV0KCkgZW1haWw6IEFic3RyYWN0Q29udHJvbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9lbWFpbC1lcnJvci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9lbWFpbC1lcnJvci50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9lbWFpbC1lcnJvci50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NzRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Bhc3N3b3JkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9wYXNzd29yZC1lcnJvci50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYXNzd29yZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcGFzc3dvcmQ6IEFic3RyYWN0Q29udHJvbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9wYXNzd29yZC1lcnJvci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9wYXNzd29yZC1lcnJvci50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9wYXNzd29yZC1lcnJvci50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NzZcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbmZpcm0tcGFzc3dvcmQtZXJyb3InLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlybVBhc3N3b3JkRXJyb3JDb21wb25lbnQge1xuICBASW5wdXQoKSBjb25maXJtUGFzc3dvcmQ6IEFic3RyYWN0Q29udHJvbDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9jb25maXJtLXBhc3N3b3JkLWVycm9yLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFkbWluUm91dGVzIH0gZnJvbSAnLi9hZG1pbi5yb3V0ZXMnO1xuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuaW1wb3J0IHsgQWRtaW5HdWFyZCB9IGZyb20gJy4vYWRtaW4uZ3VhcmQuc2VydmljZSc7XG5cbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zdHVkZW50L3N0dWRlbnQuc2VydmljZSc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBhZG1pbiBmdW5jdGlvbnMgaGF2aW5nIHRvIGRlYWwgd2l0aCBzdHVkZW50cyBhbmQgY291cnNlcyB0aGF0IHNob3VsZCBub3QgYmUgYWNjZXNzZWQgYnkgYSByZWd1bGFyIHVzZXJcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQWRtaW5Sb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIEFkbWluSG9tZUNvbXBvbmVudCxcbiAgICBOb3RBdXRoQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFkbWluR3VhcmQsXG4gICAgU3R1ZGVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbk1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFkbWluR3VhcmQgfSBmcm9tICcuL2FkbWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VkSW5HdWFyZCB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEFkbWluUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnYWRtaW4nLFxuICAgIGRhdGE6IHtcbiAgICAgIGJyZWFkY3J1bWJzOiAnQWRtaW4nXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTpbTG9nZ2VkSW5HdWFyZF0sXG4gICAgY2FuQWN0aXZhdGVDaGlsZDogW0FkbWluR3VhcmRdLFxuICAgIGNvbXBvbmVudDogQWRtaW5Db21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2NvdXJzZXMnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2NvdXJzZS9jb3Vyc2UubW9kdWxlJylbJ0NvdXJzZU1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ0NvdXJzZXMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdzdHVkZW50cycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7ICAocmVxdWlyZSBhcyBhbnkpLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmU6IGFueSkgeyAgICByZXNvbHZlKHJlcXVpcmUoJy4vc3R1ZGVudC9zdHVkZW50Lm1vZHVsZScpWydTdHVkZW50TW9kdWxlJ10pOyAgfSwgZnVuY3Rpb24oZTogYW55KSB7ICAgIHJlamVjdCh7IGxvYWRDaHVua0Vycm9yOiB0cnVlLCBkZXRhaWxzOiBlIH0pOyAgfSk7fSkgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnU3R1ZGVudHMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEFkbWluSG9tZUNvbXBvbmVudFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhZG1pbi9ub3QtYXV0aCcsXG4gICAgY29tcG9uZW50OiBOb3RBdXRoQ29tcG9uZW50XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2FkbWluLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGgudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJ1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRlcyB9IGZyb20gJy4vYXV0aGVudGljYXRpb24ucm91dGVzJztcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSB3aGljaCBkZWFscyB3aXRoIGFueXRoaW5nIHJlbGF0ZWQgdG8gYXV0aGVudGljYXRpbmcgdXNlcnMsXG4gKiBpLmUuIGxvZ2dpbmcgaW4vb3V0IHVzZXJzIGFuZCByZXNldHRpbmcgZm9yZ290dGVuIHBhc3N3b3Jkc1xuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQXV0aGVudGljYXRpb25Sb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2lnbmluQ29tcG9uZW50LFxuICAgICAgICBTaWdudXBDb21wb25lbnQsXG4gICAgICBTaWdub3V0Q29tcG9uZW50LFxuICAgICAgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQsXG4gICAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbk1vZHVsZSB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25Sb3V0ZXM6IFJvdXRlcyA9IFt7XG4gICAgcGF0aDogJ2F1dGhlbnRpY2F0aW9uJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICB7IHBhdGg6ICdzaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdzaWdub3V0JywgY29tcG9uZW50OiBTaWdub3V0Q29tcG9uZW50IH0sXG4gICAgICB7cGF0aDogJ2ZvcmdldC1wYXNzd29yZCcsIGNvbXBvbmVudDogRm9yZ2V0UGFzc3dvcmRDb21wb25lbnR9LFxuICAgICAge3BhdGg6ICdyZXNldC1wYXNzd29yZC86dG9rZW4nLCBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRDb21wb25lbnR9XG4gICAgXVxufV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBIZWxwUm91dGVzIH0gZnJvbSAnLi9oZWxwLnJvdXRlcyc7XG5pbXBvcnQgeyBIZWxwQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKEhlbHBSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEhlbHBDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWxwTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9oZWxwL2hlbHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhlbHBDb21wb25lbnQgfSBmcm9tICcuL2hlbHAuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEhlbHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdoZWxwJyxcbiAgICBjb21wb25lbnQ6IEhlbHBDb21wb25lbnQsXG4gICAgZGF0YToge2JyZWFkY3J1bWJzOiAnSGVscCd9XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9oZWxwL2hlbHAucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9oZWxwL2hlbHAudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9oZWxwL2hlbHAudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTkyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaGVscC9oZWxwLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9oZWxwL2hlbHAuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5OTNcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IFByb2ZpbGVSb3V0ZXMgfSBmcm9tICcuL3Byb2ZpbGUucm91dGVzJztcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFByb2ZpbGVSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFVzZXJQcm9maWxlQ29tcG9uZW50LFxuICAgIFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFByb2ZpbGVTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2dnZWRJbkd1YXJkIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAncHJvZmlsZScsXG4gICAgY2FuQWN0aXZhdGU6IFtMb2dnZWRJbkd1YXJkXSxcbiAgICBjYW5BY3RpdmF0ZUNoaWxkOiBbTG9nZ2VkSW5HdWFyZF0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgcGF0aDogJ3VwZGF0ZS1wYXNzd29yZCcsXG4gICAgICBjb21wb25lbnQ6IFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50LFxuICAgICAgIGRhdGE6IHtcbiAgICAgICAgIGJyZWFkY3J1bWJzOiAnVXBkYXRlIHBhc3N3b3JkJ1xuICAgICAgIH1cbiAgICAgIH0sXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFVzZXJQcm9maWxlQ29tcG9uZW50XG4gIH1cbiAgICBdLFxuICAgIGRhdGE6IHtcbiAgICAgIGJyZWFkY3J1bWJzOiAnUHJvZmlsZSdcbiAgICB9XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvcHJvZmlsZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvcHJvZmlsZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgU2NlbmFyaW9Sb3V0ZXMgfSBmcm9tICcuL3NjZW5hcmlvLnJvdXRlcyc7XG5pbXBvcnQgeyBTY2VuYXJpb0NvbXBvbmVudCB9IGZyb20gJy4vc2NlbmFyaW8uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSBmb3Igc2NlbmFyaW8tcmVsYXRlZCBjb21wb25lbnRzIGFuZCBtb2R1bGVzXG4gKlxuICogTWFpbmx5IHVzZWQgdG8gYmUgYWJsZSB0byBhc3luYyBsb2FkIHRoZSBzcGVjaWZpYyBzY2VuYXJpb3MgdmlhIHRoZSB7QGxpbmsgTG9jYXRpb25Nb2R1bGV9XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFNjZW5hcmlvUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTY2VuYXJpb0NvbXBvbmVudCxcbiAgICBMaXN0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9Nb2R1bGUge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8ubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU2NlbmFyaW9Db21wb25lbnQgfSBmcm9tICcuL3NjZW5hcmlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2VuYXJpb1Jlc29sdmVyIH0gZnJvbSAnLi9zY2VuYXJpby5yZXNvbHZlcic7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2xpc3QuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFNjZW5hcmlvUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnc2NlbmFyaW9zJyxcbiAgICBkYXRhOiB7XG4gICAgICBicmVhZGNydW1iczogJ1NjZW5hcmlvcydcbiAgICB9LFxuICAgIGNvbXBvbmVudDogU2NlbmFyaW9Db21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJzpzY2VuSWQnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2xvY2F0aW9uL2xvY2F0aW9uLm1vZHVsZScpWydMb2NhdGlvbk1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBzY2VuYXJpbzogU2NlbmFyaW9SZXNvbHZlclxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnM6ICd7eyBzY2VuYXJpby5sYWJlbCB9fSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogTGlzdENvbXBvbmVudFxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLnJvdXRlcy50cyJdLCJzb3VyY2VSb290IjoiIn0=
