webpackJsonp([4],{

/***/ 119:
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
const rxjs_1 = __webpack_require__(34);
const core_1 = __webpack_require__(1);
const http_1 = __webpack_require__(45);
let MendelpedeScenarioService = class MendelpedeScenarioService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = 'api/mendelpede';
        this._scenarioGenoFacts = new rxjs_1.BehaviorSubject({});
        this.getGuesses = this._scenarioGenoFacts.asObservable();
        this._scenarioCode = new rxjs_1.BehaviorSubject('');
        this.getScenarioCode = this._scenarioCode.asObservable();
    }
    listScenarios() {
        return this._http
            .get(this._baseURL);
    }
    setScenario(scenarioGenoFacts) {
        if (scenarioGenoFacts !== null)
            this._scenarioGenoFacts
                .next(JSON.parse(scenarioGenoFacts));
    }
    getScenario(scenShortCode) {
        this._scenarioCode.next(scenShortCode);
        return this._http
            .get(`${this._baseURL}/${scenShortCode}`);
    }
    createMendelFridge(userId, scenShortCode) {
        console.log('userid...' + userId + ' scenario short code:..' + scenShortCode);
        return this._http.get(`${this._baseURL}/${userId}/${scenShortCode}/new-fridge`);
    }
    getMendelFridge(userId, scenShortCode) {
        console.log('userId--' + userId + ' Scen short code: ' + scenShortCode);
        return this._http.get(`${this._baseURL}/${userId}/${scenShortCode}`);
    }
};
MendelpedeScenarioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], MendelpedeScenarioService);
exports.MendelpedeScenarioService = MendelpedeScenarioService;


/***/ }),

/***/ 120:
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
const rxjs_1 = __webpack_require__(34);
const core_1 = __webpack_require__(1);
const http_1 = __webpack_require__(45);
let CricketService = class CricketService {
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
CricketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], CricketService);
exports.CricketService = CricketService;


/***/ }),

/***/ 121:
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
const authentication_service_1 = __webpack_require__(18);
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

/***/ 18:
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
const http_1 = __webpack_require__(45);
const rxjs_1 = __webpack_require__(34);
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
class SelectDropData {
}
exports.SelectDropData = SelectDropData;
function selectDropServiceFactory() {
    return new SelectDropService();
}
exports.selectDropServiceFactory = selectDropServiceFactory;
let SelectDropService = class SelectDropService {
    deselect() {
        this.curSource = null;
        this.data = null;
        this.isSelected = false;
        this.onSuccessCallback = null;
        this.removeElemClass();
        this.elem = null;
    }
    select(sourceName, data, htmlelement) {
        this.curSource = sourceName;
        this.data = data;
        this.isSelected = true;
        this.elem = htmlelement;
        if (this.elem)
            this.elem.classList.add('selected-object');
    }
    removeElemClass() {
        if (this.elem)
            this.elem.classList.remove('selected-object');
    }
};
SelectDropService = __decorate([
    core_1.Injectable()
], SelectDropService);
exports.SelectDropService = SelectDropService;


/***/ }),

/***/ 182:
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
const http_1 = __webpack_require__(45);
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
const http_1 = __webpack_require__(45);
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

/***/ 184:
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
const cricket_service_1 = __webpack_require__(120);
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
    __metadata("design:paramtypes", [cricket_service_1.CricketService])
], ScenarioResolver);
exports.ScenarioResolver = ScenarioResolver;


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
let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
};
PageNotFoundComponent = __decorate([
    core_1.Component({
        selector: 'page-not-found',
        templateUrl: __webpack_require__(860),
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;


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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const authentication_service_1 = __webpack_require__(18);
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
        templateUrl: __webpack_require__(861),
        styleUrls: [__webpack_require__(862)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], HomeComponent);
exports.HomeComponent = HomeComponent;


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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(34);
const mendelpede_scenarios_service_1 = __webpack_require__(119);
let MendelpedeScenarioResolver = class MendelpedeScenarioResolver {
    constructor(_scenarioService) {
        this._scenarioService = _scenarioService;
    }
    resolve(route, state) {
        const scenShortCode = route.params['scenShortCode'];
        if (scenShortCode) {
            return this._scenarioService.getScenario(scenShortCode);
        }
        else {
            return new rxjs_1.Observable();
        }
    }
};
MendelpedeScenarioResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [mendelpede_scenarios_service_1.MendelpedeScenarioService])
], MendelpedeScenarioResolver);
exports.MendelpedeScenarioResolver = MendelpedeScenarioResolver;


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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const core_2 = __webpack_require__(1);
const select_drop_service_1 = __webpack_require__(181);
let SelectDropComponent = class SelectDropComponent {
    constructor(elemRef, _selectDropService, _cdr) {
        this._selectDropService = _selectDropService;
        this._cdr = _cdr;
        this._selectEnabled = false;
        this._dropDisabled = false;
        this.onDropSuccess = new core_1.EventEmitter();
        this.onSuccessCallback = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this._defaultCursor = 'pointer';
        this._elem = elemRef.nativeElement;
        if (!this.dropDisabled && !this.selectEnabled)
            this._elem.style.cursor = this._defaultCursor;
        this._elem.onmouseenter = (event) => {
            this._onMouseEnter(event);
        };
        this._elem.onmouseout = (event) => {
            this._onMouseOut(event);
        };
        this._elem.onclick = (event) => {
            this._onClick(event);
        };
    }
    set selectEnabled(enabled) {
        this._selectEnabled = !!enabled;
    }
    get selectEnabled() {
        return this._selectEnabled;
    }
    set dropDisabled(disable) {
        this._dropDisabled = !!disable;
    }
    get dropDisabled() {
        return this._dropDisabled;
    }
    set selectable(value) {
        this.selectEnabled = !!value;
    }
    set undroppable(value) {
        this.dropDisabled = !!value;
    }
    _onClick(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (this._selectDropService.isSelected === false && this.selectEnabled) {
            this._onSelectCallback(event);
        }
        else if (this._selectDropService.isSelected && this.sourceName === this._selectDropService.curSource) {
            this._onDeselectCallback(event);
        }
        else if (this._isDropAllowed(event)) {
            this._onDropCallback(event);
        }
        else if (this._selectDropService.isSelected && this.selectEnabled) {
            this._selectDropService.removeElemClass();
            this._onSelectCallback(event);
        }
        else {
            this._onErrorCallback(event);
        }
    }
    _onMouseEnter(event) {
        if (this._isDropAllowed(event)) {
            this._elem.classList.add('drop-object');
            if (event.preventDefault) {
                event.preventDefault();
            }
        }
    }
    _onMouseOut(event) {
        this._elem.classList.remove('drop-object');
    }
    detectChanges() {
        setTimeout(() => {
            if (this._cdr && !this._cdr.destroyed) {
                this._cdr.detectChanges();
            }
        }, 250);
    }
    _isDropAllowed(event) {
        if (this._selectDropService.isSelected) {
            if (this.dropDisabled) {
                return false;
            }
            if (this.allowDrop) {
                return this.allowDrop(this._selectDropService.data);
            }
            return true;
        }
        return false;
    }
    _preventAndStop(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    }
    _onErrorCallback(event) {
        this.onError.emit('There was an error');
        this._selectDropService.deselect();
    }
    _onDropCallback(event) {
        let dataTransfer = event.dataTransfer;
        if (this._selectDropService.isSelected) {
            this.onDropSuccess.emit({ data: this._selectDropService.data, mouseEvent: event });
            if (this._selectDropService.onSuccessCallback) {
                this._selectDropService.onSuccessCallback.emit({ data: this._selectDropService.data, mouseEvent: event });
            }
            this._selectDropService.deselect();
        }
    }
    _onDeselectCallback(event) {
        this._selectDropService.deselect();
    }
    _onSelectCallback(event) {
        if (!this.sourceName && (this.data.source || this.data.src)) {
            this.sourceName = this.data.source ? this.data.source : this.data.src;
        }
        else if (!this.sourceName) {
            this.sourceName = '';
        }
        this._selectDropService.select(this.sourceName, this.data, this._elem);
        this._selectDropService.onSuccessCallback = this.onSuccessCallback;
    }
};
__decorate([
    core_1.Input("selectEnabled"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SelectDropComponent.prototype, "selectable", null);
__decorate([
    core_1.Input("dropDisabled"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SelectDropComponent.prototype, "undroppable", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], SelectDropComponent.prototype, "allowDrop", void 0);
__decorate([
    core_1.Input("selectData"),
    __metadata("design:type", Object)
], SelectDropComponent.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectDropComponent.prototype, "sourceName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectDropComponent.prototype, "onDropSuccess", void 0);
__decorate([
    core_1.Output("onSuccess"),
    __metadata("design:type", core_1.EventEmitter)
], SelectDropComponent.prototype, "onSuccessCallback", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectDropComponent.prototype, "onError", void 0);
SelectDropComponent = __decorate([
    core_1.Directive({ selector: '[select-droppable]' }),
    __metadata("design:paramtypes", [core_2.ElementRef, select_drop_service_1.SelectDropService,
        core_1.ChangeDetectorRef])
], SelectDropComponent);
exports.SelectDropComponent = SelectDropComponent;


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
const router_1 = __webpack_require__(19);
const authentication_service_1 = __webpack_require__(18);
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
const authentication_service_1 = __webpack_require__(18);
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
        templateUrl: __webpack_require__(879)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AdminComponent);
exports.AdminComponent = AdminComponent;


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
let AdminHomeComponent = class AdminHomeComponent {
};
AdminHomeComponent = __decorate([
    core_1.Component({
        selector: 'admin-home',
        templateUrl: __webpack_require__(880)
    })
], AdminHomeComponent);
exports.AdminHomeComponent = AdminHomeComponent;


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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
let NotAuthComponent = class NotAuthComponent {
};
NotAuthComponent = __decorate([
    core_1.Component({
        selector: 'not-auth',
        templateUrl: __webpack_require__(881)
    })
], NotAuthComponent);
exports.NotAuthComponent = NotAuthComponent;


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
const router_1 = __webpack_require__(19);
const forms_1 = __webpack_require__(13);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(53);
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
        templateUrl: __webpack_require__(884)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.Router])
], SigninComponent);
exports.SigninComponent = SigninComponent;


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
const forms_1 = __webpack_require__(13);
const router_1 = __webpack_require__(19);
const rxjs_1 = __webpack_require__(34);
const authentication_service_1 = __webpack_require__(18);
const course_service_1 = __webpack_require__(183);
const read_error_1 = __webpack_require__(53);
const confirm_password_validator_1 = __webpack_require__(404);
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
            'firstName': new forms_1.FormControl('', forms_1.Validators.required),
            'lastName': new forms_1.FormControl('', forms_1.Validators.required),
            'username': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            'course': new forms_1.FormControl('', forms_1.Validators.required),
            'password': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
            'confirmPassword': new forms_1.FormControl('', [forms_1.Validators.required, confirm_password_validator_1.passwordMatchValidator]),
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
        templateUrl: __webpack_require__(885)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        course_service_1.CourseService,
        router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function passwordMatchValidator(ac) {
    let fg = ac.parent;
    if (!fg) {
        return null;
    }
    else {
        return fg.get('password').value === fg.get('confirmPassword').value ? null : { mismatch: true };
    }
}
exports.passwordMatchValidator = passwordMatchValidator;


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
const router_1 = __webpack_require__(19);
const authentication_service_1 = __webpack_require__(18);
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

/***/ 406:
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
const forms_1 = __webpack_require__(13);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(53);
let ForgetPasswordComponent = class ForgetPasswordComponent {
    constructor(_authenticationService) {
        this._authenticationService = _authenticationService;
        this.errorMessage = '';
        this.successMessage = '';
    }
    ngOnInit() {
        this.email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
    }
    sendForget() {
        this.successMessage = '';
        this.errorMessage = '';
        let body = { email: this.email.value };
        this.subscription = this._authenticationService
            .forgetPassword(body)
            .subscribe((result) => {
            this.successMessage = result.message;
        }, (error) => {
            this.errorMessage = read_error_1.readErrorMessage(error);
        });
    }
    getInputClass() {
        let out = { 'form-control': true };
        if (this.email && (this.email.dirty || this.email.touched)) {
            out['is-invalid'] = this.email.invalid;
            out['is-valid'] = this.email.valid;
        }
        return out;
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
ForgetPasswordComponent = __decorate([
    core_1.Component({
        selector: 'forget-pswd',
        templateUrl: __webpack_require__(886)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], ForgetPasswordComponent);
exports.ForgetPasswordComponent = ForgetPasswordComponent;


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
const router_1 = __webpack_require__(19);
const forms_1 = __webpack_require__(13);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(53);
const confirm_password_validator_1 = __webpack_require__(404);
let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(_authenticationService, _route) {
        this._authenticationService = _authenticationService;
        this._route = _route;
        this.errorMessage = '';
        this.successMessage = '';
    }
    ngOnInit() {
        this.credentials = new forms_1.FormGroup({
            'password': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
            'confirmPassword': new forms_1.FormControl('', [forms_1.Validators.required, confirm_password_validator_1.passwordMatchValidator]),
            'token': new forms_1.FormControl('', forms_1.Validators.required)
        });
        let urlToken = this._route.snapshot.paramMap.get('token');
        if (urlToken === '') {
            this.errorMessage = 'No token specified.';
        }
        this.credentials.patchValue({ token: urlToken });
    }
    get password() { return this.credentials.get('password'); }
    get confirmPassword() { return this.credentials.get('confirmPassword'); }
    sendReset() {
        this.successMessage = '';
        this.subscription = this._authenticationService
            .resetPassword(this.credentials.value)
            .subscribe((result) => {
            this.credentials.setValue({ 'password': '', 'confirmPassword': '', token: '' });
            this.successMessage = result.message;
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
ResetPasswordComponent = __decorate([
    core_1.Component({
        selector: 'reset-pswd',
        templateUrl: __webpack_require__(887)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.ActivatedRoute])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;


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
        templateUrl: __webpack_require__(890),
        styleUrls: [__webpack_require__(891)]
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);
exports.HelpComponent = HelpComponent;


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
let HelpCricketComponent = class HelpCricketComponent {
    constructor() { }
};
HelpCricketComponent = __decorate([
    core_1.Component({
        selector: 'help-cricket',
        templateUrl: __webpack_require__(892)
    }),
    __metadata("design:paramtypes", [])
], HelpCricketComponent);
exports.HelpCricketComponent = HelpCricketComponent;


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
const rxjs_1 = __webpack_require__(34);
const profile_service_1 = __webpack_require__(182);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(53);
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
        templateUrl: __webpack_require__(895)
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        authentication_service_1.AuthenticationService])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;


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
const router_1 = __webpack_require__(19);
const rxjs_1 = __webpack_require__(34);
const profile_service_1 = __webpack_require__(182);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(53);
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
        templateUrl: __webpack_require__(896)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        profile_service_1.ProfileService,
        authentication_service_1.AuthenticationService])
], UpdatePasswordComponent);
exports.UpdatePasswordComponent = UpdatePasswordComponent;


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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
let CricketComponent = class CricketComponent {
};
CricketComponent = __decorate([
    core_1.Component({
        selector: 'cricket',
        template: '<mc-breadcrumbs></mc-breadcrumbs><router-outlet></router-outlet>'
    })
], CricketComponent);
exports.CricketComponent = CricketComponent;


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
const authentication_service_1 = __webpack_require__(18);
const cricket_service_1 = __webpack_require__(120);
let ScenarioListComponent = class ScenarioListComponent {
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
ScenarioListComponent = __decorate([
    core_1.Component({
        selector: 'scenario-list',
        templateUrl: __webpack_require__(899)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        cricket_service_1.CricketService])
], ScenarioListComponent);
exports.ScenarioListComponent = ScenarioListComponent;


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
const authentication_service_1 = __webpack_require__(18);
const mendelpede_scenarios_service_1 = __webpack_require__(119);
let OptionsComponent = class OptionsComponent {
    constructor(_authenticationService, _scenarioService) {
        this._authenticationService = _authenticationService;
        this._scenarioService = _scenarioService;
        this.scenarios = Array();
        this.quizes = Array();
        this.discoveries = Array();
        this.pathways = Array();
    }
    ngOnInit() {
        this.user = this._authenticationService.getUser();
        this.sSubscription = this._scenarioService.listScenarios()
            .subscribe((options) => {
            this.s = 0;
            this.q = 0;
            this.p = 0;
            this.d = 0;
            this.options = options;
            this.options.forEach((option) => {
                if (option.scenType === 'scenario') {
                    this.scenarios[this.s] = option;
                    this.s++;
                }
                else if (option.scenType === 'quiz') {
                    this.quizes[this.q] = option;
                    this.q++;
                }
                else if (option.scenType === 'discovery') {
                    this.discoveries[this.d] = option;
                    this.d++;
                }
                else if (option.scenType === 'pathway') {
                    this.pathways[this.p] = option;
                    this.p++;
                }
            });
            this.scenarios = this.scenarios.sort((o1, o2) => {
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
        }, (err) => {
            console.log(err);
            this.errorMessage = err;
        });
    }
    ngOnDestroy() {
        if (this.sSubscription)
            this.sSubscription.unsubscribe();
    }
};
OptionsComponent = __decorate([
    core_1.Component({
        selector: 'options',
        templateUrl: __webpack_require__(905)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        mendelpede_scenarios_service_1.MendelpedeScenarioService])
], OptionsComponent);
exports.OptionsComponent = OptionsComponent;


/***/ }),

/***/ 415:
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
const authentication_service_1 = __webpack_require__(18);
let MendelpedeScenariosComponent = class MendelpedeScenariosComponent {
    constructor(_authenticationService) {
        this._authenticationService = _authenticationService;
    }
    ngOnInit() {
        this.user = this._authenticationService.getUser();
    }
};
MendelpedeScenariosComponent = __decorate([
    core_1.Component({
        selector: 'mendelpede-scenarios',
        templateUrl: __webpack_require__(912)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], MendelpedeScenariosComponent);
exports.MendelpedeScenariosComponent = MendelpedeScenariosComponent;


/***/ }),

/***/ 416:
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
let MendelpedeComponent = class MendelpedeComponent {
};
MendelpedeComponent = __decorate([
    core_1.Component({
        selector: 'mendelpede',
        templateUrl: __webpack_require__(914)
    })
], MendelpedeComponent);
exports.MendelpedeComponent = MendelpedeComponent;


/***/ }),

/***/ 417:
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
const http_1 = __webpack_require__(45);
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

/***/ 418:
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
const ng_bootstrap_1 = __webpack_require__(90);
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
        templateUrl: __webpack_require__(863)
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], ConfirmDeleteDialogComponent);
exports.ConfirmDeleteDialogComponent = ConfirmDeleteDialogComponent;


/***/ }),

/***/ 53:
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

/***/ 54:
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
const common_1 = __webpack_require__(14);
const forms_1 = __webpack_require__(13);
const forms_2 = __webpack_require__(13);
const ng_bootstrap_1 = __webpack_require__(90);
const ngx_breadcrumbs_1 = __webpack_require__(180);
const confirm_delete_dialog_component_1 = __webpack_require__(418);
const person_name_pipe_1 = __webpack_require__(864);
const people_list_names_pipe_1 = __webpack_require__(865);
const phage_parents_pipe_1 = __webpack_require__(866);
const form_errors_module_1 = __webpack_require__(867);
const select_drop_module_1 = __webpack_require__(876);
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            form_errors_module_1.FormErrorsModule,
            select_drop_module_1.SelectDropModule.forRoot(),
            ng_bootstrap_1.NgbModule.forRoot(),
            ngx_breadcrumbs_1.McBreadcrumbsModule.forRoot()
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
            ng_bootstrap_1.NgbModule,
            select_drop_module_1.SelectDropModule,
            ngx_breadcrumbs_1.McBreadcrumbsModule,
            person_name_pipe_1.PersonNamePipe,
            people_list_names_pipe_1.PeopleListNamesPipe,
            phage_parents_pipe_1.PhageParentsPipe,
            confirm_delete_dialog_component_1.ConfirmDeleteDialogComponent
        ],
    })
], SharedModule);
exports.SharedModule = SharedModule;


/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = __webpack_require__(231);
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(858);
if (process.env.NODE_ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(318)))

/***/ }),

/***/ 858:
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
const router_1 = __webpack_require__(19);
const http_1 = __webpack_require__(45);
const ngx_breadcrumbs_1 = __webpack_require__(180);
const app_routes_1 = __webpack_require__(859);
const authentication_service_1 = __webpack_require__(18);
const logged_in_guard_service_1 = __webpack_require__(121);
const cricket_service_1 = __webpack_require__(120);
const course_service_1 = __webpack_require__(183);
const scenario_resolver_1 = __webpack_require__(184);
const mendelpede_scenario_resolver_1 = __webpack_require__(396);
const shared_module_1 = __webpack_require__(54);
const admin_module_1 = __webpack_require__(877);
const authentication_module_1 = __webpack_require__(882);
const help_module_1 = __webpack_require__(888);
const profile_module_1 = __webpack_require__(893);
const cricket_module_1 = __webpack_require__(897);
const app_component_1 = __webpack_require__(900);
const nav_component_1 = __webpack_require__(901);
const page_not_found_component_1 = __webpack_require__(394);
const home_component_1 = __webpack_require__(395);
const mendelpede_module_1 = __webpack_require__(904);
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
            cricket_module_1.CricketModule,
            mendelpede_module_1.MendelpedeModule,
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
            cricket_service_1.CricketService,
            course_service_1.CourseService,
            scenario_resolver_1.ScenarioResolver,
            mendelpede_scenario_resolver_1.MendelpedeScenarioResolver,
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [ngx_breadcrumbs_1.McBreadcrumbsConfig])
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const page_not_found_component_1 = __webpack_require__(394);
const home_component_1 = __webpack_require__(395);
exports.AppRoutes = [{
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }];


/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/page-not-found/page-not-found.template.html";

/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/home/home.template.html";

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/home/home.style.css";

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/confirm-delete-dialog.template.html";

/***/ }),

/***/ 864:
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

/***/ 865:
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

/***/ 866:
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
const common_1 = __webpack_require__(14);
const forms_1 = __webpack_require__(13);
const forms_2 = __webpack_require__(13);
const required_error_component_1 = __webpack_require__(868);
const email_error_component_1 = __webpack_require__(870);
const password_error_component_1 = __webpack_require__(872);
const confirm_password_error_component_1 = __webpack_require__(874);
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
const forms_1 = __webpack_require__(13);
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
        templateUrl: __webpack_require__(869)
    })
], RequiredErrorComponent);
exports.RequiredErrorComponent = RequiredErrorComponent;


/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/required-error.template.html";

/***/ }),

/***/ 870:
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
const forms_1 = __webpack_require__(13);
let EmailErrorComponent = class EmailErrorComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.AbstractControl)
], EmailErrorComponent.prototype, "email", void 0);
EmailErrorComponent = __decorate([
    core_1.Component({
        selector: 'email-error',
        templateUrl: __webpack_require__(871)
    })
], EmailErrorComponent);
exports.EmailErrorComponent = EmailErrorComponent;


/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/email-error.template.html";

/***/ }),

/***/ 872:
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
const forms_1 = __webpack_require__(13);
let PasswordErrorComponent = class PasswordErrorComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.AbstractControl)
], PasswordErrorComponent.prototype, "password", void 0);
PasswordErrorComponent = __decorate([
    core_1.Component({
        selector: 'password-error',
        templateUrl: __webpack_require__(873)
    })
], PasswordErrorComponent);
exports.PasswordErrorComponent = PasswordErrorComponent;


/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/password-error.template.html";

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const forms_1 = __webpack_require__(13);
let ConfirmPasswordErrorComponent = class ConfirmPasswordErrorComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.AbstractControl)
], ConfirmPasswordErrorComponent.prototype, "confirmPassword", void 0);
ConfirmPasswordErrorComponent = __decorate([
    core_1.Component({
        selector: 'confirm-password-error',
        templateUrl: __webpack_require__(875)
    })
], ConfirmPasswordErrorComponent);
exports.ConfirmPasswordErrorComponent = ConfirmPasswordErrorComponent;


/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/confirm-password-error.template.html";

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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const select_drop_service_1 = __webpack_require__(181);
const select_drop_component_1 = __webpack_require__(397);
__export(__webpack_require__(181));
__export(__webpack_require__(397));
exports.providers = [{ provide: select_drop_service_1.SelectDropService, useFactory: select_drop_service_1.selectDropServiceFactory }];
let SelectDropModule = SelectDropModule_1 = class SelectDropModule {
    static forRoot() {
        return {
            ngModule: SelectDropModule_1,
            providers: exports.providers
        };
    }
};
SelectDropModule = SelectDropModule_1 = __decorate([
    core_1.NgModule({
        declarations: [select_drop_component_1.SelectDropComponent],
        exports: [select_drop_component_1.SelectDropComponent]
    })
], SelectDropModule);
exports.SelectDropModule = SelectDropModule;
var SelectDropModule_1;


/***/ }),

/***/ 877:
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
const admin_routes_1 = __webpack_require__(878);
const admin_component_1 = __webpack_require__(399);
const admin_home_component_1 = __webpack_require__(400);
const not_auth_component_1 = __webpack_require__(401);
const admin_guard_service_1 = __webpack_require__(398);
const student_service_1 = __webpack_require__(417);
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

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const admin_guard_service_1 = __webpack_require__(398);
const logged_in_guard_service_1 = __webpack_require__(121);
const admin_component_1 = __webpack_require__(399);
const admin_home_component_1 = __webpack_require__(400);
const not_auth_component_1 = __webpack_require__(401);
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
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(1).then((function (require) { resolve(__webpack_require__(915)['CourseModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
                data: {
                    breadcrumbs: 'Courses'
                }
            },
            {
                path: 'students',
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(2).then((function (require) { resolve(__webpack_require__(916)['StudentModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
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

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/admin.template.html";

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/admin-home/admin-home.template.html";

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/not-auth/not-auth.template.html";

/***/ }),

/***/ 882:
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
const common_1 = __webpack_require__(14);
const router_1 = __webpack_require__(19);
const shared_module_1 = __webpack_require__(54);
const authentication_routes_1 = __webpack_require__(883);
const signin_component_1 = __webpack_require__(402);
const signup_component_1 = __webpack_require__(403);
const signout_component_1 = __webpack_require__(405);
const forget_password_component_1 = __webpack_require__(406);
const reset_password_component_1 = __webpack_require__(407);
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

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const signin_component_1 = __webpack_require__(402);
const signup_component_1 = __webpack_require__(403);
const signout_component_1 = __webpack_require__(405);
const forget_password_component_1 = __webpack_require__(406);
const reset_password_component_1 = __webpack_require__(407);
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

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/signin/signin.template.html";

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/signup/signup.template.html";

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/forget-password/forget-password.template.html";

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/reset-password/reset-password.template.html";

/***/ }),

/***/ 888:
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
const help_routes_1 = __webpack_require__(889);
const help_component_1 = __webpack_require__(408);
const help_cricket_component_1 = __webpack_require__(409);
let HelpModule = class HelpModule {
};
HelpModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(help_routes_1.HelpRoutes)
        ],
        declarations: [
            help_component_1.HelpComponent,
            help_cricket_component_1.HelpCricketComponent
        ]
    })
], HelpModule);
exports.HelpModule = HelpModule;


/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const help_component_1 = __webpack_require__(408);
const help_cricket_component_1 = __webpack_require__(409);
exports.HelpRoutes = [
    {
        path: 'help',
        component: help_component_1.HelpComponent,
        data: { breadcrumbs: 'Help' },
        children: [
            { path: 'cricket',
                component: help_cricket_component_1.HelpCricketComponent,
                data: { breadcrumbs: 'Cricket' }
            }
        ]
    }
];


/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help.template.html";

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help.style.css";

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help-cricket/help-cricket.template.html";

/***/ }),

/***/ 893:
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
const profile_routes_1 = __webpack_require__(894);
const profile_service_1 = __webpack_require__(182);
const user_profile_component_1 = __webpack_require__(410);
const update_password_component_1 = __webpack_require__(411);
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

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const logged_in_guard_service_1 = __webpack_require__(121);
const user_profile_component_1 = __webpack_require__(410);
const update_password_component_1 = __webpack_require__(411);
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

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/profile/user-profile/user-profile.template.html";

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/profile/update-password/update-password.template.html";

/***/ }),

/***/ 897:
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
const cricket_routes_1 = __webpack_require__(898);
const cricket_component_1 = __webpack_require__(412);
const scenario_list_component_1 = __webpack_require__(413);
let CricketModule = class CricketModule {
};
CricketModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(cricket_routes_1.CricketRoutes)
        ],
        declarations: [
            cricket_component_1.CricketComponent,
            scenario_list_component_1.ScenarioListComponent
        ]
    })
], CricketModule);
exports.CricketModule = CricketModule;


/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cricket_component_1 = __webpack_require__(412);
const scenario_resolver_1 = __webpack_require__(184);
const scenario_list_component_1 = __webpack_require__(413);
exports.CricketRoutes = [
    {
        path: 'cricket',
        data: {
            breadcrumbs: 'Cricket'
        },
        component: cricket_component_1.CricketComponent,
        children: [
            {
                path: ':scenId',
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(0).then((function (require) { resolve(__webpack_require__(917)['LocationModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
                resolve: {
                    scenario: scenario_resolver_1.ScenarioResolver
                },
                data: {
                    breadcrumbs: '{{ scenario.label }}'
                }
            },
            {
                path: '',
                component: scenario_list_component_1.ScenarioListComponent
            }
        ]
    }
];


/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/scenario-list/scenario-list.template.html";

/***/ }),

/***/ 900:
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

/***/ 901:
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
const authentication_service_1 = __webpack_require__(18);
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
        templateUrl: __webpack_require__(902),
        styleUrls: [__webpack_require__(903)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], NavComponent);
exports.NavComponent = NavComponent;


/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/nav/nav.template.html";

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/nav/nav.style.css";

/***/ }),

/***/ 904:
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
const options_component_1 = __webpack_require__(414);
const mpede_fridge_component_1 = __webpack_require__(906);
const mpede_labroom_component_1 = __webpack_require__(909);
const mendelpede_scenarios_component_1 = __webpack_require__(415);
const mendelpede_scenarios_service_1 = __webpack_require__(119);
const mendelpede_routes_1 = __webpack_require__(913);
const mendelpede_component_1 = __webpack_require__(416);
const shared_module_1 = __webpack_require__(54);
let MendelpedeModule = class MendelpedeModule {
};
MendelpedeModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(mendelpede_routes_1.MendelpedeRoutes)
        ],
        declarations: [
            options_component_1.OptionsComponent,
            mpede_fridge_component_1.MendelpedeFridgeComponent,
            mpede_labroom_component_1.MendelpedeLabroomComponent,
            mendelpede_scenarios_component_1.MendelpedeScenariosComponent,
            mendelpede_component_1.MendelpedeComponent,
        ],
        providers: [
            mendelpede_scenarios_service_1.MendelpedeScenarioService,
        ],
    })
], MendelpedeModule);
exports.MendelpedeModule = MendelpedeModule;


/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/options/options.template.html";

/***/ }),

/***/ 906:
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
const authentication_service_1 = __webpack_require__(18);
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(19);
const ng_bootstrap_1 = __webpack_require__(90);
const rxjs_1 = __webpack_require__(34);
const mendelpede_scenarios_service_1 = __webpack_require__(119);
const read_error_1 = __webpack_require__(53);
let MendelpedeFridgeComponent = class MendelpedeFridgeComponent {
    constructor(_router, _route, _authenticationService, _scenarioService, _modalService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._scenarioService = _scenarioService;
        this._modalService = _modalService;
        this.shelf = 0;
        this.errorMessage = '';
        this.pedeImgUrlMap = new Map([['Black10', 0],
            ['Black11', 1],
            ['Black12', 2],
            ['Black20', 3],
            ['Black21', 4],
            ['Black22', 5],
            ['Black30', 6],
            ['Black31', 7],
            ['Black32', 8],
            ['Black40', 9],
            ['Black41', 10],
            ['Black42', 11],
            ['Black50', 12],
            ['Black51', 13],
            ['Black52', 14],
            ['Blue10', 15],
            ['Blue11', 16],
            ['Blue12', 17],
            ['Blue20', 18],
            ['Blue21', 19],
            ['Blue22', 20],
            ['Blue30', 21],
            ['Blue31', 22],
            ['Blue32', 23],
            ['Blue40', 24],
            ['Blue41', 25],
            ['Blue42', 26],
            ['Blue50', 27],
            ['Blue51', 28],
            ['Blue52', 29],
            ['Gray10', 30],
            ['Gray11', 31],
            ['Gray12', 32],
            ['Gray20', 33],
            ['Gray21', 34],
            ['Gray22', 35],
            ['Gray30', 36],
            ['Gray31', 37],
            ['Gray32', 38],
            ['Gray40', 39],
            ['Gray41', 40],
            ['Gray42', 41],
            ['Gray50', 42],
            ['Gray51', 43],
            ['Gray52', 44],
            ['Green10', 45],
            ['Green11', 46],
            ['Green12', 47],
            ['Green20', 48],
            ['Green21', 49],
            ['Green22', 50],
            ['Green30', 51],
            ['Green31', 52],
            ['Green32', 53],
            ['Green40', 54],
            ['Green41', 55],
            ['Green42', 56],
            ['Green50', 57],
            ['Green51', 58],
            ['Green52', 59],
            ['Pink10', 60],
            ['Pink11', 61],
            ['Pink12', 62],
            ['Pink20', 63],
            ['Pink21', 64],
            ['Pink22', 65],
            ['Pink30', 66],
            ['Pink31', 67],
            ['Pink32', 68],
            ['Pink40', 69],
            ['Pink41', 70],
            ['Pink42', 71],
            ['Pink50', 72],
            ['Pink51', 73],
            ['Pink52', 74],
            ['White10', 75],
            ['White11', 76],
            ['White12', 77],
            ['White20', 78],
            ['White21', 79],
            ['White22', 80],
            ['White30', 81],
            ['White31', 82],
            ['White32', 83],
            ['White40', 84],
            ['White41', 85],
            ['White42', 86],
            ['White50', 87],
            ['White51', 88],
            ['White52', 89],
            ['Yellow10', 90],
            ['Yellow11', 91],
            ['Yellow12', 92],
            ['Yellow20', 93],
            ['Yellow21', 94],
            ['Yellow22', 95],
            ['Yellow30', 96],
            ['Yellow31', 97],
            ['Yellow32', 98],
            ['Yellow40', 99],
            ['Yellow41', 100],
            ['Yellow42', 101],
            ['Yellow50', 102],
            ['Yellow51', 103],
            ['Yellow52', 104]]);
        this.pedeImgLocMap = new Map([['RedRed', 0],
            ['OrangeRed', 1],
            ['BeigeRed', 2],
            ['PurpleRed', 3],
            ['SkyBlueRed', 4],
            ['CyanRed', 5],
            ['TealRed', 6],
            ['LightGreenRed', 7],
            ['NavyRed', 8],
            ['LightGrayRed', 9],
            ['RedOrange', 10],
            ['OrangeOrange', 11],
            ['BeigeOrange', 12],
            ['PurpleOrange', 13],
            ['SkyBlueOrange', 14],
            ['CyanOrange', 15],
            ['TealOrange', 16],
            ['LightGreenOrange', 17],
            ['NavyOrange', 18],
            ['LightGrayOrange', 19],
            ['RedBeige', 20],
            ['OrangeBeige', 21],
            ['BeigeBeige', 22],
            ['PurpleBeige', 23],
            ['SkyBlueBeige', 24],
            ['CyanBeige', 25],
            ['TealBeige', 26],
            ['LightGreenBeige', 27],
            ['NavyBeige', 28],
            ['LightGrayBeige', 29],
            ['RedPurple', 30],
            ['OrangePurple', 31],
            ['BeigePurple', 32],
            ['PurplePurple', 33],
            ['SkyBluePurple', 34],
            ['CyanPurple', 35],
            ['TealPurple', 36],
            ['LightGreenPurple', 37],
            ['NavyPurple', 38],
            ['LightGrayPurple', 39],
            ['RedSkyBlue', 40],
            ['OrangeSkyBlue', 41],
            ['BeigeSkyBlue', 42],
            ['PurpleSkyBlue', 43],
            ['SkyBlueSkyBlue', 44],
            ['CyanSkyBlue', 45],
            ['TealSkyBlue', 46],
            ['LightGreenSkyBlue', 47],
            ['NavySkyBlue', 48],
            ['LightGraySkyBlue', 49],
            ['RedCyan', 50],
            ['OrangeCyan', 51],
            ['BeigeCyan', 52],
            ['PurpleCyan', 53],
            ['SkyBlueCyan', 54],
            ['CyanCyan', 55],
            ['TealCyan', 56],
            ['LightGreenCyan', 57],
            ['NavyCyan', 58],
            ['LightGrayCyan', 59],
            ['RedTeal', 60],
            ['OrangeTeal', 61],
            ['BeigeTeal', 62],
            ['PurpleTeal', 63],
            ['SkyBlueTeal', 64],
            ['CyanTeal', 65],
            ['TealTeal', 66],
            ['LightGreenTeal', 67],
            ['NavyTeal', 68],
            ['LightGrayTeal', 69],
            ['RedLightGreen', 70],
            ['OrangeLightGreen', 71],
            ['BeigeLightGreen', 72],
            ['PurpleLightGreen', 73],
            ['SkyBlueLightGreen', 74],
            ['CyanLightGreen', 75],
            ['TealLightGreen', 76],
            ['LightGreenLightGreen', 77],
            ['NavyLightGreen', 78],
            ['LightGrayLightGreen', 79],
            ['RedNavy', 80],
            ['OrangeNavy', 81],
            ['BeigeNavy', 82],
            ['PurpleNavy', 83],
            ['SkyBlueNavy', 84],
            ['CyanNavy', 85],
            ['TealNavy', 86],
            ['LightGreenNavy', 87],
            ['NavyNavy', 88],
            ['LightGrayNavy', 89],
            ['RedLightGray', 90],
            ['OrangeLightGray', 91],
            ['BeigeLightGray', 92],
            ['PurpleLightGray', 93],
            ['SkyBlueLightGray', 94],
            ['CyanLightGray', 95],
            ['TealLightGray', 96],
            ['LightGreenLightGray', 97],
            ['NavyLightGray', 98],
            ['LightGrayLightGray', 99]]);
        this.maxShelf = 32;
        this.spots = 8;
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    getMendelpede(phenotype) {
        console.log(phenotype);
        let loc = this.pedeImgLocMap.get(phenotype[1].concat(phenotype[2]));
        console.log('*****************************' + loc);
        let flagLocArray = [];
        for (let i = 0; i < 100; i++) {
            if (i == loc) {
                flagLocArray[i] = true;
            }
            else {
                flagLocArray[i] = false;
            }
        }
        console.log(phenotype[0].concat(phenotype[3]).concat(phenotype[4]));
        let imUrl = this.pedeImgUrlMap.get(phenotype[0].concat(phenotype[4]).concat(phenotype[3]));
        console.log('*****************************' + imUrl);
        let flagUrlArray = [];
        for (let i = 0; i < 105; i++) {
            if (i == imUrl) {
                flagUrlArray[i] = true;
            }
            else {
                flagUrlArray[i] = false;
            }
        }
        console.log(flagUrlArray[imUrl]);
        return {
            'sizeI': true,
            'mpede-loc-68-128': flagLocArray[0],
            'mpede-loc-68-256': flagLocArray[1],
            'mpede-loc-68-384': flagLocArray[2],
            'mpede-loc-68-512': flagLocArray[3],
            'mpede-loc-68-640': flagLocArray[4],
            'mpede-loc-68-768': flagLocArray[5],
            'mpede-loc-68-896': flagLocArray[6],
            'mpede-loc-68-1024': flagLocArray[7],
            'mpede-loc-68-1152': flagLocArray[8],
            'mpede-loc-68-1280': flagLocArray[9],
            'mpede-loc-136-128': flagLocArray[10],
            'mpede-loc-136-256': flagLocArray[11],
            'mpede-loc-136-384': flagLocArray[12],
            'mpede-loc-136-512': flagLocArray[13],
            'mpede-loc-136-640': flagLocArray[14],
            'mpede-loc-136-768': flagLocArray[15],
            'mpede-loc-136-896': flagLocArray[16],
            'mpede-loc-136-1024': flagLocArray[17],
            'mpede-loc-136-1152': flagLocArray[18],
            'mpede-loc-136-1280': flagLocArray[19],
            'mpede-loc-204-128': flagLocArray[20],
            'mpede-loc-204-256': flagLocArray[21],
            'mpede-loc-204-384': flagLocArray[22],
            'mpede-loc-204-512': flagLocArray[23],
            'mpede-loc-204-640': flagLocArray[24],
            'mpede-loc-204-768': flagLocArray[25],
            'mpede-loc-204-896': flagLocArray[26],
            'mpede-loc-204-1024': flagLocArray[27],
            'mpede-loc-204-1152': flagLocArray[28],
            'mpede-loc-204-1280': flagLocArray[29],
            'mpede-loc-272-128': flagLocArray[30],
            'mpede-loc-272-256': flagLocArray[31],
            'mpede-loc-272-384': flagLocArray[32],
            'mpede-loc-272-512': flagLocArray[33],
            'mpede-loc-272-640': flagLocArray[34],
            'mpede-loc-272-768': flagLocArray[35],
            'mpede-loc-272-896': flagLocArray[36],
            'mpede-loc-272-1024': flagLocArray[37],
            'mpede-loc-272-1152': flagLocArray[38],
            'mpede-loc-272-1280': flagLocArray[39],
            'mpede-loc-340-128': flagLocArray[40],
            'mpede-loc-340-256': flagLocArray[41],
            'mpede-loc-340-384': flagLocArray[42],
            'mpede-loc-340-512': flagLocArray[43],
            'mpede-loc-340-640': flagLocArray[44],
            'mpede-loc-340-768': flagLocArray[45],
            'mpede-loc-340-896': flagLocArray[46],
            'mpede-loc-340-1024': flagLocArray[47],
            'mpede-loc-340-1152': flagLocArray[48],
            'mpede-loc-340-1280': flagLocArray[49],
            'mpede-loc-408-128': flagLocArray[50],
            'mpede-loc-408-256': flagLocArray[51],
            'mpede-loc-408-384': flagLocArray[52],
            'mpede-loc-408-512': flagLocArray[53],
            'mpede-loc-408-640': flagLocArray[54],
            'mpede-loc-408-768': flagLocArray[55],
            'mpede-loc-408-896': flagLocArray[56],
            'mpede-loc-408-1024': flagLocArray[57],
            'mpede-loc-408-1152': flagLocArray[58],
            'mpede-loc-408-1280': flagLocArray[59],
            'mpede-loc-476-128': flagLocArray[60],
            'mpede-loc-476-256': flagLocArray[61],
            'mpede-loc-476-384': flagLocArray[62],
            'mpede-loc-476-512': flagLocArray[63],
            'mpede-loc-476-640': flagLocArray[64],
            'mpede-loc-476-768': flagLocArray[65],
            'mpede-loc-476-896': flagLocArray[66],
            'mpede-loc-476-1024': flagLocArray[67],
            'mpede-loc-476-1152': flagLocArray[68],
            'mpede-loc-476-1280': flagLocArray[69],
            'mpede-loc-544-128': flagLocArray[70],
            'mpede-loc-544-256': flagLocArray[71],
            'mpede-loc-544-384': flagLocArray[72],
            'mpede-loc-544-512': flagLocArray[73],
            'mpede-loc-544-640': flagLocArray[74],
            'mpede-loc-544-768': flagLocArray[75],
            'mpede-loc-544-896': flagLocArray[76],
            'mpede-loc-544-1024': flagLocArray[77],
            'mpede-loc-544-1152': flagLocArray[78],
            'mpede-loc-544-1280': flagLocArray[79],
            'mpede-loc-612-128': flagLocArray[80],
            'mpede-loc-612-256': flagLocArray[81],
            'mpede-loc-612-384': flagLocArray[82],
            'mpede-loc-612-512': flagLocArray[83],
            'mpede-loc-612-640': flagLocArray[84],
            'mpede-loc-612-768': flagLocArray[85],
            'mpede-loc-612-896': flagLocArray[86],
            'mpede-loc-612-1024': flagLocArray[87],
            'mpede-loc-612-1152': flagLocArray[88],
            'mpede-loc-612-1280': flagLocArray[89],
            'mpede-loc-680-128': flagLocArray[90],
            'mpede-loc-680-256': flagLocArray[91],
            'mpede-loc-680-384': flagLocArray[92],
            'mpede-loc-680-512': flagLocArray[93],
            'mpede-loc-680-640': flagLocArray[94],
            'mpede-loc-680-768': flagLocArray[95],
            'mpede-loc-680-896': flagLocArray[96],
            'mpede-loc-680-1024': flagLocArray[97],
            'mpede-loc-680-1152': flagLocArray[98],
            'mpede-loc-680-1280': flagLocArray[99],
            'mpede-pede-black-seg1-leg0-min': flagUrlArray[0],
            'mpede-pede-black-seg1-leg1-min': flagUrlArray[1],
            'mpede-pede-black-seg1-leg2-min': flagUrlArray[2],
            'mpede-pede-black-seg2-leg0-min': flagUrlArray[3],
            'mpede-pede-black-seg2-leg1-min': flagUrlArray[4],
            'mpede-pede-black-seg2-leg2-min': flagUrlArray[5],
            'mpede-pede-black-seg3-leg0-min': flagUrlArray[6],
            'mpede-pede-black-seg3-leg1-min': flagUrlArray[7],
            'mpede-pede-black-seg3-leg2-min': flagUrlArray[8],
            'mpede-pede-black-seg4-leg0-min': flagUrlArray[9],
            'mpede-pede-black-seg4-leg1-min': flagUrlArray[10],
            'mpede-pede-black-seg4-leg2-min': flagUrlArray[11],
            'mpede-pede-black-seg5-leg0-min': flagUrlArray[12],
            'mpede-pede-black-seg5-leg1-min': flagUrlArray[13],
            'mpede-pede-black-seg5-leg2-min': flagUrlArray[14],
            'mpede-pede-blue-seg1-leg0-min': flagUrlArray[15],
            'mpede-pede-blue-seg1-leg1-min': flagUrlArray[16],
            'mpede-pede-blue-seg1-leg2-min': flagUrlArray[17],
            'mpede-pede-blue-seg2-leg0-min': flagUrlArray[18],
            'mpede-pede-blue-seg2-leg1-min': flagUrlArray[19],
            'mpede-pede-blue-seg2-leg2-min': flagUrlArray[20],
            'mpede-pede-blue-seg3-leg0-min': flagUrlArray[21],
            'mpede-pede-blue-seg3-leg1-min': flagUrlArray[22],
            'mpede-pede-blue-seg3-leg2-min': flagUrlArray[23],
            'mpede-pede-blue-seg4-leg0-min': flagUrlArray[24],
            'mpede-pede-blue-seg4-leg1-min': flagUrlArray[25],
            'mpede-pede-blue-seg4-leg2-min': flagUrlArray[26],
            'mpede-pede-blue-seg5-leg0-min': flagUrlArray[27],
            'mpede-pede-blue-seg5-leg1-min': flagUrlArray[28],
            'mpede-pede-blue-seg5-leg2-min': flagUrlArray[29],
            'mpede-pede-gray-seg1-leg0-min': flagUrlArray[30],
            'mpede-pede-gray-seg1-leg1-min': flagUrlArray[31],
            'mpede-pede-gray-seg1-leg2-min': flagUrlArray[32],
            'mpede-pede-gray-seg2-leg0-min': flagUrlArray[33],
            'mpede-pede-gray-seg2-leg1-min': flagUrlArray[34],
            'mpede-pede-gray-seg2-leg2-min': flagUrlArray[35],
            'mpede-pede-gray-seg3-leg0-min': flagUrlArray[36],
            'mpede-pede-gray-seg3-leg1-min': flagUrlArray[37],
            'mpede-pede-gray-seg3-leg2-min': flagUrlArray[38],
            'mpede-pede-gray-seg4-leg0-min': flagUrlArray[39],
            'mpede-pede-gray-seg4-leg1-min': flagUrlArray[40],
            'mpede-pede-gray-seg4-leg2-min': flagUrlArray[41],
            'mpede-pede-gray-seg5-leg0-min': flagUrlArray[42],
            'mpede-pede-gray-seg5-leg1-min': flagUrlArray[43],
            'mpede-pede-gray-seg5-leg2-min': flagUrlArray[44],
            'mpede-pede-green-seg1-leg0-min': flagUrlArray[45],
            'mpede-pede-green-seg1-leg1-min': flagUrlArray[46],
            'mpede-pede-green-seg1-leg2-min': flagUrlArray[47],
            'mpede-pede-green-seg2-leg0-min': flagUrlArray[48],
            'mpede-pede-green-seg2-leg1-min': flagUrlArray[49],
            'mpede-pede-green-seg2-leg2-min': flagUrlArray[50],
            'mpede-pede-green-seg3-leg0-min': flagUrlArray[51],
            'mpede-pede-green-seg3-leg1-min': flagUrlArray[52],
            'mpede-pede-green-seg3-leg2-min': flagUrlArray[53],
            'mpede-pede-green-seg4-leg0-min': flagUrlArray[54],
            'mpede-pede-green-seg4-leg1-min': flagUrlArray[55],
            'mpede-pede-green-seg4-leg2-min': flagUrlArray[56],
            'mpede-pede-green-seg5-leg0-min': flagUrlArray[57],
            'mpede-pede-green-seg5-leg1-min': flagUrlArray[58],
            'mpede-pede-green-seg5-leg2-min': flagUrlArray[59],
            'mpede-pede-pink-seg1-leg0-min': flagUrlArray[60],
            'mpede-pede-pink-seg1-leg1-min': flagUrlArray[61],
            'mpede-pede-pink-seg1-leg2-min': flagUrlArray[62],
            'mpede-pede-pink-seg2-leg0-min': flagUrlArray[63],
            'mpede-pede-pink-seg2-leg1-min': flagUrlArray[64],
            'mpede-pede-pink-seg2-leg2-min': flagUrlArray[65],
            'mpede-pede-pink-seg3-leg0-min': flagUrlArray[66],
            'mpede-pede-pink-seg3-leg1-min': flagUrlArray[67],
            'mpede-pede-pink-seg3-leg2-min': flagUrlArray[68],
            'mpede-pede-pink-seg4-leg0-min': flagUrlArray[69],
            'mpede-pede-pink-seg4-leg1-min': flagUrlArray[70],
            'mpede-pede-pink-seg4-leg2-min': flagUrlArray[71],
            'mpede-pede-pink-seg5-leg0-min': flagUrlArray[72],
            'mpede-pede-pink-seg5-leg1-min': flagUrlArray[73],
            'mpede-pede-pink-seg5-leg2-min': flagUrlArray[74],
            'mpede-pede-white-seg1-leg0-min': flagUrlArray[75],
            'mpede-pede-white-seg1-leg1-min': flagUrlArray[76],
            'mpede-pede-white-seg1-leg2-min': flagUrlArray[77],
            'mpede-pede-white-seg2-leg0-min': flagUrlArray[78],
            'mpede-pede-white-seg2-leg1-min': flagUrlArray[79],
            'mpede-pede-white-seg2-leg2-min': flagUrlArray[80],
            'mpede-pede-white-seg3-leg0-min': flagUrlArray[81],
            'mpede-pede-white-seg3-leg1-min': flagUrlArray[82],
            'mpede-pede-white-seg3-leg2-min': flagUrlArray[83],
            'mpede-pede-white-seg4-leg0-min': flagUrlArray[84],
            'mpede-pede-white-seg4-leg1-min': flagUrlArray[85],
            'mpede-pede-white-seg4-leg2-min': flagUrlArray[86],
            'mpede-pede-white-seg5-leg0-min': flagUrlArray[87],
            'mpede-pede-white-seg5-leg1-min': flagUrlArray[88],
            'mpede-pede-white-seg5-leg2-min': flagUrlArray[89],
            'mpede-pede-yellow-seg1-leg0-min': flagUrlArray[90],
            'mpede-pede-yellow-seg1-leg1-min': flagUrlArray[91],
            'mpede-pede-yellow-seg1-leg2-min': flagUrlArray[92],
            'mpede-pede-yellow-seg2-leg0-min': flagUrlArray[93],
            'mpede-pede-yellow-seg2-leg1-min': flagUrlArray[94],
            'mpede-pede-yellow-seg2-leg2-min': flagUrlArray[95],
            'mpede-pede-yellow-seg3-leg0-min': flagUrlArray[96],
            'mpede-pede-yellow-seg3-leg1-min': flagUrlArray[97],
            'mpede-pede-yellow-seg3-leg2-min': flagUrlArray[98],
            'mpede-pede-yellow-seg4-leg0-min': flagUrlArray[99],
            'mpede-pede-yellow-seg4-leg1-min': flagUrlArray[100],
            'mpede-pede-yellow-seg4-leg2-min': flagUrlArray[101],
            'mpede-pede-yellow-seg5-leg0-min': flagUrlArray[102],
            'mpede-pede-yellow-seg5-leg1-min': flagUrlArray[103],
            'mpede-pede-yellow-seg5-leg2-min': flagUrlArray[104]
        };
    }
    getMendelpedetopleft(phenotype) {
        return {
            'mpede-basic-top-left': true,
        };
    }
    getMendelpedebottomleft() {
        return {
            'mpede-basic-bottom-left': true,
        };
    }
    ngOnInit() {
        console.log('ng init......');
        this.user = this._authenticationService.getUser();
        let userId = this.user.id;
        this.paramObserver = this._route.params.subscribe((params) => {
            let scenShortCode = params['scenShortCode'];
            this._scenarioService.getMendelFridge(userId, scenShortCode)
                .takeUntil(this.isDestroyed$)
                .subscribe((fridge) => { this._initFridge(fridge); }, (err) => {
                if (err.status === 307) {
                    console.log('creating a new fridge');
                    this._createMendelFridge(userId, scenShortCode);
                }
                else {
                    console.log('error message' + err);
                    this.errorMessage = read_error_1.readErrorMessage(err);
                }
            });
        });
    }
    _createMendelFridge(userId, scenShortCode) {
        this._scenarioService.createMendelFridge(userId, scenShortCode)
            .takeUntil(this.isDestroyed$)
            .subscribe((fridge) => {
            console.log('we got the new fridge: ');
            console.log(fridge);
            this._initFridge(fridge);
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    _currPedes() {
        let start = this.shelf * this.spots;
        let end = start + this.spots;
        this.currPedes_1d = this.pedeList.slice(start, end);
        var ind = 0;
        this.currPedes = [];
        for (var j = 0; j < (this.spots / 2); j++) {
            this.currPedes[j] = [];
            for (var k = 0; k < 2; k++) {
                this.currPedes[j][k] = this.currPedes_1d[ind];
                ind++;
            }
        }
    }
    _initFridge(newFridge) {
        this.fridge = newFridge;
        this.pedeList = this._fillPedes(newFridge.pedes);
        this._currPedes();
        this._scenarioService.setScenario(newFridge.genoFacts);
    }
    _fillPedes(fridgePedes) {
        var out = [];
        for (let i = 0; i < this.maxShelf * this.spots; i++) {
            out.push({ bugId: i, genotype: null, phenotype: null, userId: null, isFemale: null });
        }
        this.nextSpot = fridgePedes[0].bugId + 1;
        for (let i = 0; i < fridgePedes.length; i++) {
            let n = fridgePedes[i].bugId;
            out[n] = fridgePedes[i];
            this.nextSpot = (n === this.nextSpot ? n + 1 : this.nextSpot);
        }
        return out;
    }
    changeShelf(inc) {
        this.errorMessage = '';
        if (this.shelf <= this.maxShelf - 1 && inc === 1) {
            this.shelf++;
            this._currPedes();
        }
        else if (this.shelf > 0 && inc === -1) {
            this.shelf--;
            this._currPedes();
        }
    }
    setShelf(nShelf) {
        this.shelf = nShelf;
        this._currPedes();
    }
    ngOnDestroy() {
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
MendelpedeFridgeComponent = __decorate([
    core_1.Component({
        selector: 'mendelpede-fridge',
        templateUrl: __webpack_require__(907),
        styleUrls: [__webpack_require__(908)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        mendelpede_scenarios_service_1.MendelpedeScenarioService,
        ng_bootstrap_1.NgbModal])
], MendelpedeFridgeComponent);
exports.MendelpedeFridgeComponent = MendelpedeFridgeComponent;


/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-fridge/mpede-fridge.template.html";

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-fridge/mpede-fridge.style.css";

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
const authentication_service_1 = __webpack_require__(18);
let MendelpedeLabroomComponent = class MendelpedeLabroomComponent {
    constructor(_authenticationService) {
        this._authenticationService = _authenticationService;
    }
    ngOnInit() {
        this.user = this._authenticationService.getUser();
    }
    getMendelpede() {
        return {
            'mpede-basic-top-right': true,
        };
    }
    getMendelpedetopleft() {
        return {
            'mpede-basic-top-left': true,
        };
    }
    getMendelpedebottomleft() {
        return {
            'mpede-basic-bottom-left': true,
        };
    }
};
MendelpedeLabroomComponent = __decorate([
    core_1.Component({
        selector: 'mpede-labroom',
        templateUrl: __webpack_require__(910),
        styleUrls: [__webpack_require__(911)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], MendelpedeLabroomComponent);
exports.MendelpedeLabroomComponent = MendelpedeLabroomComponent;


/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-labroom/mpede-labroom.template.html";

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-labroom/mpede-labroom.style.css";

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mendelpede-scenarios.template.html";

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const options_component_1 = __webpack_require__(414);
const mendelpede_component_1 = __webpack_require__(416);
const mendelpede_scenarios_component_1 = __webpack_require__(415);
const mendelpede_scenario_resolver_1 = __webpack_require__(396);
exports.MendelpedeRoutes = [
    {
        path: 'mendelpede',
        component: mendelpede_component_1.MendelpedeComponent,
        data: {
            breadcrumbs: 'mendelpede'
        },
        children: [
            {
                path: '',
                component: options_component_1.OptionsComponent
            },
            {
                path: ':scenShortCode',
                resolve: {
                    mendelpedeScenario: mendelpede_scenario_resolver_1.MendelpedeScenarioResolver
                },
                component: mendelpede_scenarios_component_1.MendelpedeScenariosComponent,
                data: {
                    breadcrumbs: '{{ mendelpedeScenario.label }}'
                }
            }
        ]
    }
];


/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/mendelpede.template.html";

/***/ })

},[857]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21lbmRlbHBlZGUtc2NlbmFyaW9zLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9zZWxlY3QtZHJvcC9zZWxlY3QtZHJvcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L3NjZW5hcmlvLnJlc29sdmVyLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS1zY2VuYXJpby5yZXNvbHZlci50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9zZWxlY3QtZHJvcC9zZWxlY3QtZHJvcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5ndWFyZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1wYXNzd29yZC52YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLWNyaWNrZXQvaGVscC1jcmlja2V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvc2NlbmFyaW8tbGlzdC9zY2VuYXJpby1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21lbmRlbHBlZGUtc2NlbmFyaW9zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3JlYWQtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYm9vdHN0cmFwLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FwcC5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9ob21lL2hvbWUuc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGVyc29uLW5hbWUucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BpcGVzL3Blb3BsZS1saXN0LW5hbWVzLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9waGFnZS1wYXJlbnRzLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZm9ybS1lcnJvcnMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL3JlcXVpcmVkLWVycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9yZXF1aXJlZC1lcnJvci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2VtYWlsLWVycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9lbWFpbC1lcnJvci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL3Bhc3N3b3JkLWVycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9wYXNzd29yZC1lcnJvci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9zZWxlY3QtZHJvcC9zZWxlY3QtZHJvcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9ub3QtYXV0aC9ub3QtYXV0aC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL3NpZ251cC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAuc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLWNyaWNrZXQvaGVscC1jcmlja2V0LnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0LnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvc2NlbmFyaW8tbGlzdC9zY2VuYXJpby1saXN0LnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbmF2L25hdi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9uYXYvbmF2LnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9uYXYvbmF2LnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL29wdGlvbnMvb3B0aW9ucy50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1mcmlkZ2UvbXBlZGUtZnJpZGdlLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1mcmlkZ2UvbXBlZGUtZnJpZGdlLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tZW5kZWxwZWRlLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQWdFO0FBQ2hFLHNDQUEyQztBQUMzQyx1Q0FBa0Q7QUFRbEQsSUFBYSx5QkFBeUIsR0FBdEM7SUFRSSxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBTjdCLGFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQTJCN0IsdUJBQWtCLEdBQUcsSUFBSSxzQkFBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzFELGVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUE0QzdDLGtCQUFhLEdBQUcsSUFBSSxzQkFBZSxDQUFTLEVBQUUsQ0FB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LENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNkLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNkLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNkLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNkLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNkLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNkLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNoQixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDaEIsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ2hCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNoQixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDaEIsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ2hCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNoQixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDaEIsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ2hCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNoQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7WUFDakIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO1lBQ2pCLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQztZQUNqQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7WUFDakIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVuQixrQkFBYSxHQUF3QixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMzRCxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDZCxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDZCxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBQ25CLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztZQUNqQixDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDO1lBQ25CLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQztZQUNwQixDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7WUFDckIsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO1lBQ2xCLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztZQUNsQixDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQztZQUN4QixDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ2hCLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQztZQUNuQixDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDO1lBQ25CLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQztZQUNwQixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7WUFDakIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztZQUNqQixDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztZQUN0QixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7WUFDakIsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQztZQUNuQixDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztZQUNsQixDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO1lBQ2xCLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztZQUNsQixDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7WUFDckIsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQztZQUNyQixDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztZQUN0QixDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7WUFDbkIsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDO1lBQ25CLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDO1lBQ3pCLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQztZQUNuQixDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQztZQUN4QixDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7WUFDZixDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztZQUNsQixDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7WUFDbkIsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ2hCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNoQixDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztZQUN0QixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDaEIsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztZQUNsQixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7WUFDakIsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO1lBQ2xCLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQztZQUNuQixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDaEIsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ2hCLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO1lBQ3RCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNoQixDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7WUFDckIsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDO1lBQ3hCLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDO1lBQ3hCLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDO1lBQ3pCLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO1lBQ3RCLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO1lBQ3RCLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxDQUFDO1lBQzVCLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO1lBQ3RCLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDO1lBQzNCLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNmLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztZQUNsQixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7WUFDakIsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO1lBQ2xCLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQztZQUNuQixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDaEIsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ2hCLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO1lBQ3RCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNoQixDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7WUFDckIsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO1lBQ3RCLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDO1lBQ3hCLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQztZQUNyQixDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7WUFDckIsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBbmdCM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksY0FBTyxFQUFXLENBQUM7SUFDM0MsQ0FBQztJQU9ILGFBQWEsQ0FBQyxTQUFtQjtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUd0QixJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEdBQUMsR0FBRyxDQUFDO1FBQ2hELElBQUksWUFBWSxHQUFtQixFQUFFLENBQUM7UUFDdEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUM7Z0JBQ1osWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7WUFDeEIsQ0FBQztZQUFBLElBQUksRUFBQztnQkFDSixZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSztZQUN6QixDQUFDO1FBQ0gsQ0FBQztRQUdELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakcsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsR0FBQyxLQUFLLENBQUM7UUFDbEQsSUFBSSxZQUFZLEdBQW1CLEVBQUUsQ0FBQztRQUN0QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBQztnQkFDZCxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtZQUN4QixDQUFDO1lBQUEsSUFBSSxFQUFDO2dCQUNKLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLO1lBQ3pCLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsTUFBTSxDQUFDO1lBQ0wsT0FBTyxFQUFFLElBQUk7WUFDYixrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ25DLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbkMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ25DLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbkMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ25DLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDcEMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNwQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3RDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDdEMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3RDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDdEMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDdEMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3RDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3RDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDdEMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3RDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDdEMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDdEMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3RDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3RDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDdEMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3RDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDdEMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDckMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNyQyxtQkFBbUIsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDdEMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBRXRDLGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2xELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbEQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2xELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbEQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2xELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbEQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2xELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbEQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2xELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbEQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2xELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbEQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2xELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDakQsK0JBQStCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNqRCwrQkFBK0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2pELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbEQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2xELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbEQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2xELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbEQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2xELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbEQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2xELGdDQUFnQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbEQsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxnQ0FBZ0MsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2xELGlDQUFpQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbkQsaUNBQWlDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNuRCxpQ0FBaUMsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ25ELGlDQUFpQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbkQsaUNBQWlDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNuRCxpQ0FBaUMsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ25ELGlDQUFpQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbkQsaUNBQWlDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNuRCxpQ0FBaUMsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ25ELGlDQUFpQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDbkQsaUNBQWlDLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQztZQUNwRCxpQ0FBaUMsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDO1lBQ3BELGlDQUFpQyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFDcEQsaUNBQWlDLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FB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MkIsQ0FBQyxDQUFDO0tBQ2xELENBQUM7cUNBVTRDLDhDQUFxQjtHQVR0RCwwQkFBMEIsQ0FrQ3RDO0FBbENZLGdFQUEwQjs7Ozs7Ozs7QUNUdkMscUg7Ozs7Ozs7QUNBQSxpSDs7Ozs7OztBQ0FBLDhHOzs7Ozs7Ozs7O0FDQ0EscURBQStEO0FBQy9ELHdEQUE2RDtBQUM3RCxrRUFBMEY7QUFDMUYsZ0VBQTRFO0FBRS9ELHdCQUFnQixHQUFXO0lBQ3RDO1FBQ0UsSUFBSSxFQUFHLFlBQVk7UUFDbkIsU0FBUyxFQUFHLDBDQUFtQjtRQUMvQixJQUFJLEVBQUU7WUFDSixXQUFXLEVBQUUsWUFBWTtTQUMxQjtRQUVELFFBQVEsRUFBQztZQUNQO2dCQUNFLElBQUksRUFBRyxFQUFFO2dCQUNULFNBQVMsRUFBRyxvQ0FBZ0I7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUcsZ0JBQWdCO2dCQUN2QixPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCLEVBQUUseURBQTBCO2lCQUMvQztnQkFDRCxTQUFTLEVBQUcsNkRBQTRCO2dCQUN4QyxJQUFJLEVBQUU7b0JBQ0osV0FBVyxFQUFFLGdDQUFnQztpQkFDOUM7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDOzs7Ozs7OztBQy9CRiwwRiIsImZpbGUiOiJib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIEJlaGF2aW9yU3ViamVjdCAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW8sIE1lbmRlbHBlZGVGcmlkZ2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBTY2VuYXJpby9mcmlkZ2UgcmVsYXRlZCBmdW5jdGlvbnMgdGhhdCBnZXQvc2VuZCBkYXRhIHRvIHRoZSBiYWNrZW5kIHNlcnZlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9iYXNlVVJMID0gJ2FwaS9tZW5kZWxwZWRlJztcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgdGhlIHNlcnZpY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SHR0cENsaWVudH0gX2h0dHAgQW5ndWFyIG1lY2hhbmlzbSB0byBtYWtlIGNhbGxzIHRvIGJhY2tlbmQgc2VydmVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge31cblxuICAgIC8qKlxuICAgICogTGlzdCBhdmFpbGFibGUgc2NlbmFyaW9zXG4gICAgKlxuICAgICogQHJldHVybnMge09ic2VydmFibGU8U2NlbmFyaW9bXT59IGxpc3Qgb2Ygc2NlbmFyaW9zXG4gICAgKi9cbiAgICBsaXN0U2NlbmFyaW9zKCk6IE9ic2VydmFibGU8TWVuZGVscGVkZVNjZW5hcmlvW10+IHtcbiAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgLmdldDxNZW5kZWxwZWRlU2NlbmFyaW9bXT4odGhpcy5fYmFzZVVSTClcbiAgICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGRldGFpbHMgd2hpY2ggaXMgbmVlZGVkIHdoZW5cbiAgICogcGVyZm9ybWluZyBjcm9zc2VzXG4gICAqL1xuICAgLy8gcHJpdmF0ZSBfc2NlbmFyaW9EZXRhaWxzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgIC8vIGdldFNjZW5hcmlvRGV0YWlscyA9IHRoaXMuX3NjZW5hcmlvRGV0YWlscy5hc09ic2VydmFibGUoKTtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGd1ZXNzZXNcbiAgICovXG4gICBwcml2YXRlIF9zY2VuYXJpb0dlbm9GYWN0cyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih7fSk7XG4gICBnZXRHdWVzc2VzID0gdGhpcy5fc2NlbmFyaW9HZW5vRmFjdHMuYXNPYnNlcnZhYmxlKCk7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBzY2VuYXJpbyBjb2RlXG4gICAqXG4gICAqIFVzZWQgYnkgZnJpZGdlIGFuZCBsb2NhdGlvbiBjb21wb25lbnRzXG4gICAqIHRvIGdldCB0aGUgY29kZSB3aXRob3V0IHRoZSByb3V0ZVxuICAgKi9cbiAgICAvLyBwcml2YXRlIF9zY2VuYXJpb0NvZGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICAgIC8vIGdldFNjZW5hcmlvQ29kZSA9IHRoaXMuX3NjZW5hcmlvQ29kZS5hc09ic2VydmFibGUoKTtcblxuXG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBzYXZlIHNjZW5hcmlvIHN0dWZmOlxuICAgKiBzY2VuYXJpb0RldGFpbHMsIHNjZW5hcmlvR3Vlc3NlcywgYW5kIHNjZW5hcmlvQ29kZVxuICAgKlxuICAgKiBVc2VkIHdoZW4gbmF2aWdhdGluZyBhd2F5IGZyb20gc2NlbmFyaW8gY29tcG9uZW50XG4gICAqL1xuICAvKnJlc2V0U2NlbmFyaW8oKSB7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvRGV0YWlscy5uZXh0KCcnKTtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9HdWVzc2VzLm5leHQoe30pO1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0NvZGUubmV4dCgnJyk7XG4gICAgfSovXG5cbiAgLyoqXG4gICogU2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzIGFuZCBzY2VuYXJpbyBndWVzc2VzXG4gICpcbiAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbmFyaW9EZXRhaWxzIC0gc2NlbmFyaW8gZGV0YWlsc1xuICAqIC0gbmVjZXNzYXJ5IGZvciBwZXJmb3JtaW5nIGV4cGVyaW1lbnRzXG4gICogQHBhcmFtIHtzdHJpbmd9IHNjZW5hcmlvR3Vlc3NlcyBjdXJyZW50IHNjZW5hcmlvIGd1ZXNzZXNcbiAgKi9cbiAgc2V0U2NlbmFyaW8oc2NlbmFyaW9HZW5vRmFjdHM6IHN0cmluZykge1xuICAgICAgICBpZiAoc2NlbmFyaW9HZW5vRmFjdHMgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLl9zY2VuYXJpb0dlbm9GYWN0c1xuICAgICAgICAgICAgICAubmV4dChKU09OLnBhcnNlKHNjZW5hcmlvR2Vub0ZhY3RzKSk7XG4gICAgfVxuXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGNvZGVcbiAgICpcbiAgICogVXNlZCBieSBjb21wb25lbnRzXG4gICAqIHRvIGdldCB0aGUgY29kZSB3aXRob3V0IHRoZSByb3V0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfc2NlbmFyaW9Db2RlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgZ2V0U2NlbmFyaW9Db2RlID0gdGhpcy5fc2NlbmFyaW9Db2RlLmFzT2JzZXJ2YWJsZSgpO1xuLyoqXG4gKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBzY2VuYXJpb1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gaWRlbnRpZmllclxuICpcbiAqIEByZXR1cm5zIHtTY2VuYXJpb31cbiAqIC0gc2NlbmFyaW8gaW5mb3JtYXRpb25cbiAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gbG9hZCBzY2VuYXJpbyA8c2NlbklkPlwiIGlmIHNjZW5hcmlvIGRvZXNuJ3QgZXhpc3RcbiAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gKi9cbiAgZ2V0U2NlbmFyaW8oc2NlblNob3J0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxNZW5kZWxwZWRlU2NlbmFyaW8+IHtcbiAgICAgIHRoaXMuX3NjZW5hcmlvQ29kZS5uZXh0KHNjZW5TaG9ydENvZGUpO1xuICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAuZ2V0PE1lbmRlbHBlZGVTY2VuYXJpbz4oYCR7dGhpcy5fYmFzZVVSTH0vJHtzY2VuU2hvcnRDb2RlfWApO1xuICB9XG4gIFxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZyaWRnZSBmb3IgdGhlIHVzZXIvc2NlbmFyaW9cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlPn1cbiAgICogLSBuZXdseSBjcmVhdGVkIGZyaWRnZVxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIGNyZWF0ZSBuZXcgcGhhZ2UgZm9yIHNjZW5hcmlvXCIgaWYgaXNzdWUgY3JlYXRlIHBoYWdlXG4gICAqIC0gb3IgZXJyb3IgXCJVbmFibGUgdG8gc2F2ZSBuZXcgZnJpZGdlXCIgaWYgY291bGRuJ3QgY3JlYXRlXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBjcmVhdGVNZW5kZWxGcmlkZ2UodXNlcklkOiBudW1iZXIsIHNjZW5TaG9ydENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8TWVuZGVscGVkZUZyaWRnZT4ge1xuICAgIGNvbnNvbGUubG9nKCd1c2VyaWQuLi4nK3VzZXJJZCsnIHNjZW5hcmlvIHNob3J0IGNvZGU6Li4nK3NjZW5TaG9ydENvZGUpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxNZW5kZWxwZWRlRnJpZGdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuU2hvcnRDb2RlfS9uZXctZnJpZGdlYCk7XG4gIH1cblxuICAgIC8qKlxuICAgKiBHZXQgYW4gZXhpc3RpbmcgZnJpZGdlIGZvciB1c2VyL3NjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZT59XG4gICAqIC0gZXhpc3RpbmcgZnJpZGdlXG4gICAqIC0gb3IgZXJyb3IgXCJObyBmcmlkZ2UgZm9yIHNjZW5hcmlvL3VzZXJcIiBpZiBmcmlkZ2UgZG9lcyBub3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldE1lbmRlbEZyaWRnZSh1c2VySWQ6IG51bWJlciwgc2NlblNob3J0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxNZW5kZWxwZWRlRnJpZGdlPiB7XG4gICAgY29uc29sZS5sb2coJ3VzZXJJZC0tJyt1c2VySWQrJyBTY2VuIHNob3J0IGNvZGU6ICcrc2NlblNob3J0Q29kZSk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PE1lbmRlbHBlZGVGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5TaG9ydENvZGV9YCk7XG4gICAgXG4gIH1cblxuICAvKipcbiAgICogU2VuZCB1cGRhdGVkIGd1ZXNzZXMgZm9yIHRoZSBzY2VuYXJpbyB0byBiZSBzYXZlZCBpbiBkYXRhYmFzZVxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gZ3Vlc3NlcyBzdHJpbmcgb2YgdXBkYXRlZCBndWVzc2VzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqIC0gdXBkYXRlZCBndWVzc2VzXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gZmluZCBmcmlkZ2VcIiBpZiBmcmlkZ2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIFwiQ291bGQgbm90IHNhdmUgbmV3IGd1ZXNzZXNcIiBpZiBjb3VsZG4ndCB1cGRhdGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAvKiBzYXZlRGVsZXRpb25zKGd1ZXNzZXM6IGFueSwgdXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vZGVsZXRpb25zYCwgZ3Vlc3Nlcyk7XG4gICAgfSovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmcmlkZ2UgZm9yIHRoZSB1c2VyL3NjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZT59XG4gICAqIC0gbmV3bHkgY3JlYXRlZCBmcmlkZ2VcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byBjcmVhdGUgbmV3IHBoYWdlIGZvciBzY2VuYXJpb1wiIGlmIGlzc3VlIGNyZWF0ZSBwaGFnZVxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIHNhdmUgbmV3IGZyaWRnZVwiIGlmIGNvdWxkbid0IGNyZWF0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgIC8qIGNyZWF0ZUZyaWRnZSh1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZyaWRnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8RnJpZGdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9L25ldy1mcmlkZ2VgKTtcbiAgICB9Ki9cblxuICAvKipcbiAgICogR2V0IGFuIGV4aXN0aW5nIGZyaWRnZSBmb3IgdXNlci9zY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2U+fVxuICAgKiAtIGV4aXN0aW5nIGZyaWRnZVxuICAgKiAtIG9yIGVycm9yIFwiTm8gZnJpZGdlIGZvciBzY2VuYXJpby91c2VyXCIgaWYgZnJpZGdlIGRvZXMgbm90IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAvKiAgZ2V0RnJpZGdlKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RnJpZGdlPiB7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PEZyaWRnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfWApO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0qL1xuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgcGhhZ2Ugc3RyYWluIHRvIHRoZSBmcmlkZ2U7XG4gICAqIFNlcnZlciB1c2VzIHVzZXJJZCBhbmQgc2NlbkNvZGUgdG8gZmluZCB0aGUgZnJpZGdlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqIEBwYXJhbSB7YW55fSBzdHJhaW4gLSBuZXcgcGhhZ2UgdG8gYWRkIHRvIGZyaWRnZVxuICAgKiAtIGhhcyBzdHJhaW5OdW0sIG11dGF0aW9uTGlzdCwgYW5kIGRlbGV0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPn1cbiAgICogLSBuZXdseSBzYXZlZCBwaGFnZVxuICAgKiAtIG9yIGVycm9yIFwiVXNlciBub3QgZm91bmRcIiBpZiB1c2VyIG5vdCBmb3VuZFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGxvYWQgc2NlbmFyaW8gPHNjZW5JZD5cIiBpZiBzY2VuYXJpbyBub3QgZm91bmRcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBmaW5kIGZyaWRnZVwiIGlmIGZyaWRnZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgLyogYWRkU3RyYWluKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgc3RyYWluOiBhbnkpOiBPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdDxGcmlkZ2VQaGFnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9mcmlkZ2UtcGhhZ2VgLCBzdHJhaW4pXG4gICAgfSAqL1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgZGV0YWlscy9pbmZvcm1hdGlvbiBhYm91dCBhbiBleGlzdGluZyBwaGFnZSBpbiB0aGUgZnJpZGdlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqIEBwYXJhbSB7RnJpZGdlUGhhZ2V9IHN0cmFpbiAtIHN0cmFpbiB0byB1cGRhdGVcbiAgICogLSB1c2Ugc3RyYWluIGBpZGAgdG8gc3BlY2lmeSBzdHJhaW4gYW5kIHNlbmQgdXBkYXRlZCBpbmZvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPn1cbiAgICogLSB1cGRhdGVkIHN0cmFpblxuICAgKiAtIG9yIGVycm9yIFwiUGhhZ2Ugbm90IGZvdW5kXCIgaWYgc3RyYWluIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAvKiB1cGRhdGVTdHJhaW4odXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCBzdHJhaW46IEZyaWRnZVBoYWdlKTogT2JzZXJ2YWJsZTxGcmlkZ2VQaGFnZT4ge1xuICAgICAgICBsZXQgc3RyYWluSWQgPSBzdHJhaW4uaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdDxGcmlkZ2VQaGFnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS8ke3N0cmFpbklkfWAsIHN0cmFpbilcbiAgICB9ICovXG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHN0cmFpbiBmcm9tIHRoZSBmcmlkZ2UgKGFuZCBkYXRhYmFzZSlcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZX0gc3RyYWluIC0gdGhlIHN0cmFpbiB0byBkZWxldGVcbiAgICogLSB1c2Ugc3RyYWluIGBpZGAgdG8gc3BlY2lmeSB3aGljaCBzdHJhaW4gdG8gZGVsZXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9XG4gICAqIC0gdGhlIHN0cmFpbiBqdXN0IGRlbGV0ZWRcbiAgICogLSBvciBlcnJvciBcIlBoYWdlIG5vdCBmb3VuZFwiIGlmIHN0cmFpbiBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gZmluZCBmcmlkZ2VcIiBpZiBmcmlkZ2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIHJlbW92ZSBzdHJhaW4gZnJvbSBmcmlkZ2VcIiBpZiBjb3VsZG4ndCBkZWxldGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIC8qICBkZWxldGVTdHJhaW4odXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCBzdHJhaW46IEZyaWRnZVBoYWdlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IHN0cmFpbklkID0gc3RyYWluLmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmRlbGV0ZShgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9LyR7c3RyYWluSWR9YClcbiAgICB9Ki9cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21lbmRlbHBlZGUtc2NlbmFyaW9zLnNlcnZpY2UudHMiLCIvL2ltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIEJlaGF2aW9yU3ViamVjdCAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTY2VuYXJpbywgRnJpZGdlLCBGcmlkZ2VQaGFnZSwgR2Vub3R5cGVQaGFnZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIFNjZW5hcmlvL2ZyaWRnZSByZWxhdGVkIGZ1bmN0aW9ucyB0aGF0IGdldC9zZW5kIGRhdGEgdG8gdGhlIGJhY2tlbmQgc2VydmVyXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDcmlja2V0U2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9iYXNlVVJMID0gJ2FwaS9jcmlja2V0JztcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGRldGFpbHMgd2hpY2ggaXMgbmVlZGVkIHdoZW5cbiAgICogcGVyZm9ybWluZyBjcm9zc2VzXG4gICAqL1xuICAgIHByaXZhdGUgX3NjZW5hcmlvRGV0YWlscyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gICAgZ2V0U2NlbmFyaW9EZXRhaWxzID0gdGhpcy5fc2NlbmFyaW9EZXRhaWxzLmFzT2JzZXJ2YWJsZSgpO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2NlbmFyaW8gZ3Vlc3Nlc1xuICAgKi9cbiAgICBwcml2YXRlIF9zY2VuYXJpb0d1ZXNzZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe30pO1xuICAgIGdldEd1ZXNzZXMgPSB0aGlzLl9zY2VuYXJpb0d1ZXNzZXMuYXNPYnNlcnZhYmxlKCk7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBzY2VuYXJpbyBjb2RlXG4gICAqXG4gICAqIFVzZWQgYnkgZnJpZGdlIGFuZCBsb2NhdGlvbiBjb21wb25lbnRzXG4gICAqIHRvIGdldCB0aGUgY29kZSB3aXRob3V0IHRoZSByb3V0ZVxuICAgKi9cbiAgICBwcml2YXRlIF9zY2VuYXJpb0NvZGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICAgIGdldFNjZW5hcmlvQ29kZSA9IHRoaXMuX3NjZW5hcmlvQ29kZS5hc09ic2VydmFibGUoKTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCB0aGUgc2VydmljZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtIdHRwQ2xpZW50fSBfaHR0cCBBbmd1YXIgbWVjaGFuaXNtIHRvIG1ha2UgY2FsbHMgdG8gYmFja2VuZCBzZXJ2ZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgc2F2ZSBzY2VuYXJpbyBzdHVmZjpcbiAgICogc2NlbmFyaW9EZXRhaWxzLCBzY2VuYXJpb0d1ZXNzZXMsIGFuZCBzY2VuYXJpb0NvZGVcbiAgICpcbiAgICogVXNlZCB3aGVuIG5hdmlnYXRpbmcgYXdheSBmcm9tIHNjZW5hcmlvIGNvbXBvbmVudFxuICAgKi9cbiAgcmVzZXRTY2VuYXJpbygpIHtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9EZXRhaWxzLm5leHQoJycpO1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0d1ZXNzZXMubmV4dCh7fSk7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvQ29kZS5uZXh0KCcnKTtcbiAgICB9XG5cbiAgLyoqXG4gICogU2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzIGFuZCBzY2VuYXJpbyBndWVzc2VzXG4gICpcbiAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbmFyaW9EZXRhaWxzIC0gc2NlbmFyaW8gZGV0YWlsc1xuICAqIC0gbmVjZXNzYXJ5IGZvciBwZXJmb3JtaW5nIGV4cGVyaW1lbnRzXG4gICogQHBhcmFtIHtzdHJpbmd9IHNjZW5hcmlvR3Vlc3NlcyBjdXJyZW50IHNjZW5hcmlvIGd1ZXNzZXNcbiAgKi9cbiAgc2V0U2NlbmFyaW8oc2NlbmFyaW9EZXRhaWxzOiBzdHJpbmcsIHNjZW5hcmlvR3Vlc3Nlczogc3RyaW5nKSB7XG4gICAgICAgIGlmIChzY2VuYXJpb0RldGFpbHMgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLl9zY2VuYXJpb0RldGFpbHMubmV4dChzY2VuYXJpb0RldGFpbHMpO1xuICAgICAgICBpZiAoc2NlbmFyaW9EZXRhaWxzICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fc2NlbmFyaW9HdWVzc2VzXG4gICAgICAgICAgICAgIC5uZXh0KEpTT04ucGFyc2Uoc2NlbmFyaW9HdWVzc2VzKSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8U2NlbmFyaW9bXT59IGxpc3Qgb2Ygc2NlbmFyaW9zXG4gICAqL1xuICAgIGxpc3RTY2VuYXJpb3MoKTogT2JzZXJ2YWJsZTxTY2VuYXJpb1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PFNjZW5hcmlvW10+KHRoaXMuX2Jhc2VVUkwpXG4gICAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBzY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGlkZW50aWZpZXJcbiAgICpcbiAgICogQHJldHVybnMge1NjZW5hcmlvfVxuICAgKiAtIHNjZW5hcmlvIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gbG9hZCBzY2VuYXJpbyA8c2NlbklkPlwiIGlmIHNjZW5hcmlvIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgZ2V0U2NlbmFyaW8oc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNjZW5hcmlvPiB7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvQ29kZS5uZXh0KHNjZW5JZCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PFNjZW5hcmlvPihgJHt0aGlzLl9iYXNlVVJMfS8ke3NjZW5JZH1gKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgdXBkYXRlZCBndWVzc2VzIGZvciB0aGUgc2NlbmFyaW8gdG8gYmUgc2F2ZWQgaW4gZGF0YWJhc2VcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGd1ZXNzZXMgc3RyaW5nIG9mIHVwZGF0ZWQgZ3Vlc3Nlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKiAtIHVwZGF0ZWQgZ3Vlc3Nlc1xuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBcIkNvdWxkIG5vdCBzYXZlIG5ldyBndWVzc2VzXCIgaWYgY291bGRuJ3QgdXBkYXRlXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIHNhdmVEZWxldGlvbnMoZ3Vlc3NlczogYW55LCB1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3QoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9kZWxldGlvbnNgLCBndWVzc2VzKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmcmlkZ2UgZm9yIHRoZSB1c2VyL3NjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZT59XG4gICAqIC0gbmV3bHkgY3JlYXRlZCBmcmlkZ2VcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byBjcmVhdGUgbmV3IHBoYWdlIGZvciBzY2VuYXJpb1wiIGlmIGlzc3VlIGNyZWF0ZSBwaGFnZVxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIHNhdmUgbmV3IGZyaWRnZVwiIGlmIGNvdWxkbid0IGNyZWF0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICBjcmVhdGVGcmlkZ2UodXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGcmlkZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PEZyaWRnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9uZXctZnJpZGdlYCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXhpc3RpbmcgZnJpZGdlIGZvciB1c2VyL3NjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZT59XG4gICAqIC0gZXhpc3RpbmcgZnJpZGdlXG4gICAqIC0gb3IgZXJyb3IgXCJObyBmcmlkZ2UgZm9yIHNjZW5hcmlvL3VzZXJcIiBpZiBmcmlkZ2UgZG9lcyBub3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgZ2V0RnJpZGdlKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RnJpZGdlPiB7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PEZyaWRnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfWApO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IHBoYWdlIHN0cmFpbiB0byB0aGUgZnJpZGdlO1xuICAgKiBTZXJ2ZXIgdXNlcyB1c2VySWQgYW5kIHNjZW5Db2RlIHRvIGZpbmQgdGhlIGZyaWRnZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKiBAcGFyYW0ge2FueX0gc3RyYWluIC0gbmV3IHBoYWdlIHRvIGFkZCB0byBmcmlkZ2VcbiAgICogLSBoYXMgc3RyYWluTnVtLCBtdXRhdGlvbkxpc3QsIGFuZCBkZWxldGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2VQaGFnZT59XG4gICAqIC0gbmV3bHkgc2F2ZWQgcGhhZ2VcbiAgICogLSBvciBlcnJvciBcIlVzZXIgbm90IGZvdW5kXCIgaWYgdXNlciBub3QgZm91bmRcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBsb2FkIHNjZW5hcmlvIDxzY2VuSWQ+XCIgaWYgc2NlbmFyaW8gbm90IGZvdW5kXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gZmluZCBmcmlkZ2VcIiBpZiBmcmlkZ2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICBhZGRTdHJhaW4odXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCBzdHJhaW46IGFueSk6IE9ic2VydmFibGU8RnJpZGdlUGhhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0PEZyaWRnZVBoYWdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9L2ZyaWRnZS1waGFnZWAsIHN0cmFpbilcbiAgICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBkZXRhaWxzL2luZm9ybWF0aW9uIGFib3V0IGFuIGV4aXN0aW5nIHBoYWdlIGluIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZX0gc3RyYWluIC0gc3RyYWluIHRvIHVwZGF0ZVxuICAgKiAtIHVzZSBzdHJhaW4gYGlkYCB0byBzcGVjaWZ5IHN0cmFpbiBhbmQgc2VuZCB1cGRhdGVkIGluZm9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlUGhhZ2U+fVxuICAgKiAtIHVwZGF0ZWQgc3RyYWluXG4gICAqIC0gb3IgZXJyb3IgXCJQaGFnZSBub3QgZm91bmRcIiBpZiBzdHJhaW4gZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICB1cGRhdGVTdHJhaW4odXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCBzdHJhaW46IEZyaWRnZVBoYWdlKTogT2JzZXJ2YWJsZTxGcmlkZ2VQaGFnZT4ge1xuICAgICAgICBsZXQgc3RyYWluSWQgPSBzdHJhaW4uaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdDxGcmlkZ2VQaGFnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS8ke3N0cmFpbklkfWAsIHN0cmFpbilcbiAgICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHN0cmFpbiBmcm9tIHRoZSBmcmlkZ2UgKGFuZCBkYXRhYmFzZSlcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZX0gc3RyYWluIC0gdGhlIHN0cmFpbiB0byBkZWxldGVcbiAgICogLSB1c2Ugc3RyYWluIGBpZGAgdG8gc3BlY2lmeSB3aGljaCBzdHJhaW4gdG8gZGVsZXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9XG4gICAqIC0gdGhlIHN0cmFpbiBqdXN0IGRlbGV0ZWRcbiAgICogLSBvciBlcnJvciBcIlBoYWdlIG5vdCBmb3VuZFwiIGlmIHN0cmFpbiBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gZmluZCBmcmlkZ2VcIiBpZiBmcmlkZ2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIHJlbW92ZSBzdHJhaW4gZnJvbSBmcmlkZ2VcIiBpZiBjb3VsZG4ndCBkZWxldGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgZGVsZXRlU3RyYWluKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgc3RyYWluOiBGcmlkZ2VQaGFnZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGxldCBzdHJhaW5JZCA9IHN0cmFpbi5pZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS8ke3N0cmFpbklkfWApXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogUm91dGVyIGd1YXJkIHRoYXQgbWFrZXMgc3VyZSBvbmx5IGxvZ2dlZCBpbiB1c2VycyBjYW4gYWNjZXNzIHRoZSBwYWdlIGFuZCBhbGwgY2hpbGQgcGFnZXNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2dlZEluR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdXNlciBjYW4gYWN0aXZhdGUgKHZpc2l0KSBhIHBhZ2VcbiAgICogYmFzZWQgb24gaWYgYSB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKlxuICAgKiBJZiBub3QgbG9nZ2VkIGluLCBzZXRzIHRoZSByZWRpcmVjdCB1cmwgdG8gdGFrZSB1c2VyIGJhY2sgdG8gdGhpcyBwYWdlIF9hZnRlcl8gbG9nZ2luZyBpbiBhbmRcbiAgICogc2VuZHMgdGhlIHVzZXIgdG8gdGhlIHNpZ24gaW4gcGFnZVxuICAgKlxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIC0gY3VycmVudCBVUkxcbiAgICogQHBhcmFtIHtSb3V0ZXJTdGF0ZXNuYXBzaG90fSBzdGF0ZSAtIHJvdXRlciBzdGF0ZSBpbmNsdWRpbmcgdGhlIHVybCB0cnlpbmcgdG8gYWNlc3NcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gYHRydWVgIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqIC0gYGZhbHNlYCBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW5cbiAgICovXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBib29sZWFuIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSBzdGF0ZS51cmw7XG5cbiAgICBsZXQgaXNMb2dnZWRJbjogYm9vbGVhbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgaWYoaXNMb2dnZWRJbilcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VXJsID0gdXJsO1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnYXV0aGVudGljYXRpb24vc2lnbmluJ10pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHVzZXIgY2FuIGFjdGl2YXRlIGFsbCBjaGlsZC9zdWIgcGFnZXMgZGVwZW5kaW5nIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqXG4gICAqIE9ubHkgbG9nZ2VkIGluIHVzZXJzIGNhbiBhY3RpdmF0ZSB0aGUgcGFnZXNcbiAgICovXG4gIGNhbkFjdGl2YXRlQ2hpbGQocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuQWN0aXZhdGUocm91dGUsIHN0YXRlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UudHMiLCIvL2ltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgZGVhbHMgd2l0aCB2YWxpZGF0aW5nIGFuZCBsb2dnaW5nIGluL291dCB1c2VycyBhbmRcbiAqIHJlc2V0dGluZyBmb3Jnb3R0ZW4gcGFzc3dvcmRzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuICAgIHByaXZhdGUgX3VzZXI6IEJlaGF2aW9yU3ViamVjdDxVc2VyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VXNlcj4obnVsbCk7XG4gICAgZ2V0VXNlciQgPSB0aGlzLl91c2VyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBfYmFzZVVybCA9ICcvYXBpL2F1dGgvJ1xuXG4gIC8qKlxuICAgKiBXaGVuIGEgbm9uLWxvZ2dlZCBpbiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBhIHBhZ2Ugd2hpY2ggcmVxdWlyZXMgbG9nZ2luZyBpbixcbiAgICogc2F2ZSB0aGF0IHBhZ2UncyB1cmwgYW5kIGRpcmVjdCB1c2VyIHRoZXJlIGFmdGVyIHRoZXkgbG9nIGluXG4gICAqL1xuICAgIHB1YmxpYyByZWRpcmVjdFVybDogc3RyaW5nID0gJy8nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzZXJ2aWNlcyBgdXNlcmAgdmFyaWFibGUgd2hpY2ggaXMgc3RvcmVkIGFmdGVyIHVzZXIgbG9ncyBpblxuICAgKlxuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgLSBjdXJyZW50IHVzZXIgd2hvIGxvZ2dlZCBpblxuICAgKiAtIG9yIGBudWxsYCB0byB1bnNldCB0aGUgdXNlclxuICAgKi9cbiAgc2V0VXNlcih1c2VyOiBVc2VyKXtcbiAgICB0aGlzLl91c2VyLm5leHQodXNlcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHVzZXIgaW5mb3JtYXRpb24gbm90IGFzIGFuIG9ic2VydmFibGVcbiAgICogc28gaXQgaXMgc3luY2hyb25vdXMgYW5kIGtlZXBzIHRoZSBhcHAgY29tcG9uZW50cycgYG5nT25Jbml0YFxuICAgKiBmdW5jdGlvbnMgY2xlYW5lclxuICAgKlxuICAgKiBAcmV0dXJucyB7VXNlcn0gdGhlIGN1cnJlbnQgdXNlciBvciBgbnVsbGAgaWYgbm8gdXNlciBsb2dnZWQgaW5cbiAgICovXG4gIGdldFVzZXIoKTogVXNlcntcbiAgICByZXR1cm4gdGhpcy5fdXNlci5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqXG4gICAqIEByZXF1aXJlcyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgYSB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKiAtIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBpc0xvZ2dlZEluKCk6IGJvb2xlYW57XG4gICAgcmV0dXJuICghIXRoaXMuZ2V0VXNlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgdXNlciBjYW4gYWNjZXNzIHRoZSBhZG1pbiBwYWdlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgdXNlciBpcyBpbnN0ciBvciBhZG1pblxuICAgKiAtIGBmYWxzZWAgaWYgdXNlciBpcyBvbmx5IGEgc3R1ZGVudFxuICAgKi9cbiAgY2FuQWNjZXNzQWRtaW4oKTogYm9vbGVhbntcbiAgICBpZih0aGlzLmdldFVzZXIoKSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRVc2VyKCkucm9sZSA+IDBcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gc2lnbiBhIHVzZXIgaW4gdXNpbmcgdGhlIHByb3ZpZGVkIGNyZWRlbnRpYWxzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBjcmVkZW50aWFscyAtIGB1c2VybmFtZWAgKGFzIGVtYWlsKSBhbmQgYHBhc3N3b3JkYCB0byBiZSB0ZXN0ZWQgZm9yIGxvZ2dpbmcgaW5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8VXNlcj59IC0gdGhlIHN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4gdXNlclxuICAgKiBlcnJvciBtZXNzYWdlIGBNaXNzaW5nIGNyZWRlbnRpYWxzYCBpZiBubyBlbWFpbCBvciBwYXNzd29yZFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYEludmFsaWQgcGFzc3dvcmRgIGlmIHBhc3N3b3JkIGlzIGluY29ycmVjdFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYFVzZXIgbm90IGZvdW5kYCBpZiBpbnZhbGlkIGVtYWlsXG4gICAqIC0gZXJyb3IgbWVzc2FnZSBmb3Igc2VydmVyL2RhdGFiYXNlL2F1dGhlbnRpY2F0aW9uIGVycm9yXG4gICAqL1xuICBzaWduaW4oY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjcmVkZW50aWFscyk7XG4gICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLl9iYXNlVXJsICsgJ3NpZ25pbicsIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBjcmVhdGUgYSBuZXcgdXNlciB1c2luZyB0aGUgcHJvdmlkZWQgdXNlciBkZXRhaWxzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSB1c2VyIC0gdXNlciBkZXRhaWxzIGluY2x1ZGluZyBgZmlyc3ROYW1lYCwgYGxhc3ROYW1lYCwgYHVzZXJuYW1lYCAoZW1haWwpLCBgY291cnNlYCwgYW5kIGBwYXNzd29yZGBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8VXNlcj59IC0gVGhlIG5ldyBsb2dnZWQtaW4gdXNlciB3aGVuIHN1Y2Nlc3NmdWxseSBjcmVhdGUgbmV3IHVzZXJcbiAgICogLSBlcnJvciA0MDAgaWYgZXJycm9yIGxvZ2dpbmcgaW5cbiAgICogLSBlcnJvciA1MDAgaWYgZXJyb3IgY3JlYXRpbmcgdXNlclxuICAgKi9cbiAgc2lnbnVwKHVzZXI6IGFueSk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KHRoaXMuX2Jhc2VVcmwgKyAnc2lnbnVwJywgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpZ25zIG91dCB0aGUgdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSByZXR1cm5zIGB0cnVlYCBpZiBzdWNjZXNzZnVsbHkgc2lnbmVkIG91dFxuICAgKi9cbiAgc2lnbm91dCgpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5fYmFzZVVybCArICdzaWdub3V0Jyk7XG4gIH1cblxuICAvKipcbiAgICogU3VibWl0IGVtYWlsIGFkZHJlc3Mgb2YgcG90ZW50aWFsIHVzZXIgdG8gYWxsb3cgdGhhdCB1c2VyXG4gICAqIHRvIHJlc2V0IHRoZWlyIHBhc3N3b3JkIGlmIHRoZSB1c2VyIGV4aXN0c1xuICAgKlxuICAgKiBUaGUgYmFja2VuZCB0aGVuIHNlbmRzIGEgcGFzc3dvcmQgcmVzZXQgZW1haWwgdG8gdGhlXG4gICAqIGVtYWlsIGFkZHJlc3NcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGJvZHkgLSByZXF1ZXN0IGJvZHkgdGhhdCBpbmNsdWRlcyBgZW1haWxgIG9mIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBTdWNjZXNzIG1lc3NhZ2UgaWYgcGFzc3dvcmQgcmVzZXQgZW1haWwgc2VudFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYEVycm9yIHdpdGggc2VydmVyIGVtYWlsIHNlcnZpY2VgIGlmIHByb2JsZW0gd2l0aCBlbWFpbCB0cmFuc3BvcnRlclxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYE5vIGFjY291bnQgd2l0aCB0aGF0IGVtYWlsLmAgaWYgZW1haWwgYWRkcmVzcyBkb2Vzbid0IGNvcnJlc3BvbmQgdG8gYW4gZXhpc3RpbmcgdXNlclxuICAgKiAtIGVycm9yIDQyMiBmb3Igb3RoZXIgc2VydmVyIGVycm9yc1xuICAgKi9cbiAgZm9yZ2V0UGFzc3dvcmQoYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9iYXNlVXJsICsgJ2ZvcmdldC1wYXNzd29yZCcsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHJlc2V0IGEgdXNlcidzIHBhc3N3b3JkIHVzaW5nIHRoZSBjcmVkZW50aWFsc1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gY3JlZGVudGlhbHMgLSBpbmZvIG5lZWRlZCB0byByZXNldCBwYXNzd29yZDogYHBhc3N3b3JkLCBgY29uZmlybVBhc3N3b3JkYCwgYW5kIGB0b2tlbmBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBJZiBzdWNjZXNzZnVsLCBzZW5kcyBzdWNjZXNzIG1lc3NhZ2UgYFBhc3N3b3JkcyBoYXMgYmVlbiByZXNldGAuXG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgSW52YWxpZCB0b2tlbmAgaWYgdG9rZW4gZG9lc24ndCBleGlzdFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYFRva2VuIGhhcyBleHBpcmVkYCBmb3IgdmFsaWQgdG9rZW5zIGJ1dCB1c2VyIHRvb2sgdG9vIGxvbmcgdG8gYXR0ZW1wdCB0byByZXNldFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgZm9yIGFsbCBvdGhlciBlcnJvcnNcbiAgICovXG4gIHJlc2V0UGFzc3dvcmQoY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8YW55PntcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fYmFzZVVybCArICdyZXNldC1wYXNzd29yZCcsIGNyZWRlbnRpYWxzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZS50cyIsImltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BEYXRhIHtcbiAgZGF0YTogYW55O1xuICBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xuICAvL25hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERyb3BTZXJ2aWNlRmFjdG9yeSgpOiBTZWxlY3REcm9wU2VydmljZSB7XG4gIHJldHVybiBuZXcgU2VsZWN0RHJvcFNlcnZpY2UoKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BTZXJ2aWNlIHtcbiAgLy8gYWxsb3dlZCBkcm9wIHpvbmVzP1xuICBjdXJTb3VyY2U6IHN0cmluZztcbiAgZGF0YTogYW55O1xuICBvblN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPFNlbGVjdERyb3BEYXRhPjtcbiAgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgZWxlbTogSFRNTEVsZW1lbnQ7XG5cbiAgZGVzZWxlY3QoKXtcbiAgICB0aGlzLmN1clNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9uU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcbiAgICB0aGlzLnJlbW92ZUVsZW1DbGFzcygpO1xuICAgIHRoaXMuZWxlbT1udWxsO1xuICB9XG5cbiAgc2VsZWN0KHNvdXJjZU5hbWU6IHN0cmluZywgZGF0YTogYW55LCBodG1sZWxlbWVudDogSFRNTEVsZW1lbnQpe1xuICAgIHRoaXMuY3VyU291cmNlID0gc291cmNlTmFtZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5lbGVtID0gaHRtbGVsZW1lbnQ7XG4gICAgaWYodGhpcy5lbGVtKVxuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICB9XG5cbiAgcmVtb3ZlRWxlbUNsYXNzKCk6IHZvaWR7XG4gICAgaWYodGhpcy5lbGVtKVxuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3Auc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyB3aGljaCBjb21tdW5pY2F0ZSB0byBiYWNrZW5kIHRvIGFsbG93XG4gKiB1c2VycyB0byB1cGRhdGUgdGhlaXIgcHJvZmlsZSBhbmQvb3IgY2hhbmdlIHRoZSBwYXNzd29yZFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBMZWFkaW5nIGJhY2tlbmQgdXJsIHBhdGhcbiAgICovXG4gIHByaXZhdGUgX2Jhc2VVcmw6IHN0cmluZyA9ICcvYXBpL3VzZXJzLyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KXt9XG5cbiAgLyoqXG4gICAqIEVkaXQgZGV0YWlscyBhYm91dCB0aGUgdXNlciBwcm9maWxlIGluY2x1ZGluZ1xuICAgKiAxLiBObWVcbiAgICogMi4gRW1haWwgYWRkcmVzc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJRCBvZiB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHthbnl9IGRldGFpbHMgdXNlciBkZXRhaWxzIHRvIHVwZGF0ZSB3aXRoXG4gICAqIGV4aXNpdGluZyBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxVc2VyPn0gLSBUaGUgdXBkYXRlZCB1c2VyIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgZXJyb3IgXCJVc2VyIGRvZXMgbm90IGV4aXN0XCIgaWYgbm9uLWV4aXN0YW50IHVzZXJcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGVkaXRQcm9maWxlKHVzZXJJZDogbnVtYmVyLCBkZXRhaWxzOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXI+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLl9iYXNlVXJsICsgdXNlcklkLCBkZXRhaWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHVzZXIncyBwYXNzd29yZCBvbmNlIGFscmVhZHkgc2lnbmVkIGluXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklEIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7YW55fSBjcmVkZW50aWFscyAtIHBhc3N3b3JkIGluZm9ybWF0aW9uXG4gICAqIC0gaW5jbHVkZXM6IFwicGFzc3dvcmRcIiAob2xkIHBhc3N3b3JkKSBhbmQgXCJuZXdQYXNzd29yZFwiICAocGFzc3dvcmQgdG8gdXBkYXRlIHRvKVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxVc2VyPn0gLSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdXNlciBqdXN0IHVwZGF0ZWRcbiAgICogLSBvciBlcnJvciBcIlVzZXIgZG9lcyBub3QgZXhpc3RcIiBpZiBub24tZXhpc3RhbnQgdXNlclxuICAgKiAtIG9yIGVycm9yIFwiSW5jb3JyZWN0IHBhc3N3b3JkXCIgaWYgd3Jvbmcgb2xkIHBhc3N3b3JkXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICB1cGRhdGVQYXNzd29yZCh1c2VySWQ6IG51bWJlciwgY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8VXNlcj57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KHRoaXMuX2Jhc2VVcmwgKyB1c2VySWQgKyAnL3VwZGF0ZS1wYXNzd29yZCcsIGNyZWRlbnRpYWxzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb3Vyc2UsIFN0dWRlbnQsIEFkbWluU3R1ZGVudCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyByZWxhdGVkIHRvIGdldHRpbmcgY291cnNlIGluZm9ybWF0aW9uIGZyb20gdGhlIGJhY2sgZW5kIHNlcnZlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ291cnNlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfYmFzZVVSTCA9ICcvYXBpL2FkbWluJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBjb3Vyc2VzIGRlcGVuZGluZyBpZiB1c2VyXG4gICAqIGlzIGEgZnVsbCBhZG1pbiBvciBpbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIGRhdGFiYXNlIHVzZXIgSUQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENvdXJzZVtdPn0gLSBXaGVuIHN1Y2Nlc3NmdWwgYW5kIGBhZG1pbmAsIGxpc3Qgb2YgYWxsIGNvdXJzZXNcbiAgICogLSBXaGVuIHN1Y2Nlc3NmdWwgYW5kIGBpbnN0cmAsIGxpc3Qgb2YgY291cnNlcyBpbiB3aGljaCB1c2VyIGlzIGFuIGluc3RydWN0b3IgZm9yXG4gICAqIC0gb3IgZXJyb3IgXCJObyBjb3Vyc2VzIGZvdW5kXCIgaWYgbm8gY291cnNlcyB0byBsaXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGxpc3RDb3Vyc2VzKGFkbWluSWQ6IG51bWJlcik6IE9ic2VydmFibGU8Q291cnNlW10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PENvdXJzZVtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgY291cnNlIHdpdGggbG9nZ2VkIGluIHVzZXIgYXMgaW5zdHJ1Y3RvciBhbmRcbiAgICogZGV0YWlscyBzcGVjaWZpZWQgaW4gYGJvZHlgXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7YW55fSBib2R5IGNvdXJzZSBkZXRhaWxzIGluY2x1ZGluZyBgY291cnNlTnVtYCBhbmQgYGRlc2NyaXB0aW9uYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSAtIHRoZSBuZXdseSBjcmVhdGVkIGNvdXJzZSBpZiBzdWNjZXNzZnVsXG4gICAqIC0gb3IgZXJyb3IgbWVzc2FnZSBmb3Igc2VydmVyL2RhdGFiYXNlIGVycm9yc1xuICAgKi9cbiAgY3JlYXRlQ291cnNlKGFkbWluSWQ6IG51bWJlciwgYm9keTogYW55KTogT2JzZXJ2YWJsZTxDb3Vyc2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAucG9zdDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlc2AsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhIHNwZWNpZmljIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyICh3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHIpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2UgdG8gZ2V0IGluZm9ybWF0aW9uIGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSAtIHRoZSBjb3Vyc2UgaW5mb3JtYXRpb24gaW5jbHVkaW5nIGBjb3Vyc2VOdW1gLCBgZGVzY3JpcHRpb25gLCBhbmQgYGluc3RydWN0b3JzYFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldENvdXJzZShhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb3Vyc2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PENvdXJzZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBzdHVkZW50cyBpbiBhIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgdGhlIGNvdXJzZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTdHVkZW50W10+fSAtIGxpc3Qgb2Ygc3R1ZGVudHMgZWFjaCB3aXRoIHByb3BlcnRpZXMgYGZpcnN0TmFtZWAsIGBsYXN0TmFtZWAsIGB1c2VySWRgLCBgYWNjZXNzR3JhbnRlZGAsIGFuZCBgZW1haWxgXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIG1lc3NhZ2UgZm9yIHNlcnZlci9kYXRhYmFzZSBlcnJvcnNcbiAgICovXG4gIGdldFN0dWRlbnRzKGFkbWluSWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0dWRlbnRbXT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQ8U3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L3N0dWRlbnRzYCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBlZGl0aW5nIGEgY291cnNlLCB1c2VyIGlzIGFibGUgdG8gYWRkIG5ldyBpbnN0cnVjdG9ycy4gVGhpcyBtZXRob2QgcHJvZHVjZXMgdGhlIGxpc3Qgb2YgcG9zc2libGUgaW5zdHJ1Y3RvcnMgdGhhdCBjb3VsZCBiZSBhZGRlZFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2Ugd2UgYXJlIGVkaXRpbmdcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50W10+fSAtIGxpc3Qgb2YgcG90ZW50aWFsIGluc3R1Y3RvcnMgd2l0aCBwcm9wZXJ0aWVzIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcklkYCwgYW5kIGByb2xlYFxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldFBvc3NpYmxlSW5zdHJ1Y3RvcnMoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZyk6IE9ic2VydmFibGU8QWRtaW5TdHVkZW50W10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PEFkbWluU3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L2luc3RydWN0b3JzYCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIHVzZXIgYXMgYW4gaW5zdHJ1Y3RvciBvZiB0aGUgY291cnNlIGFuZCBjaGFuZ2UgdGhlIG5ldyBpbnN0cnVjdG9yJ3Mgcm9sZSB0byBgaW5zdHJgIGlmIG5lY2Vzc2FyeVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciB0byBhZGQgaW5zdHJ1Y3RvciBmb3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld0luc3RySWQgdXNlcklkIG9mIHVzZXIgdG8gYWRkIGFzIGluc3RydWN0b3Igb2YgdGhpcyBjb3Vyc2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB0aGUgdXBkYXRlZCBjb3Vyc2UgaW5mb3JtYXRpb25cbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgaWYgcHJvYmxlbSB1cGRhdGluZyB0aGUgY291cnNlXG4gICAqIC0gb3IgZXJyb3IgaWYgcHJvYmxlbSB1cGRhdGluZyB0aGUgbmV3IGluc3RydWN0b3Igcm9sZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgYWRkSW5zdHJ1Y3RvcihhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nLCBuZXdJbnN0cklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPENvdXJzZT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAucG9zdDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlcy8ke2NvdXJzZU51bX0vaW5zdHJ1Y3RvcnMvJHtuZXdJbnN0cklkfWAsIHtpbnN0cnVjdG9yOiB0cnVlfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGNvdXJzZSBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge2FueX0gYm9keSB1cGRhdGVkIGNvdXJzZSBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSAtIHVwZGF0ZWQgY291cnNlIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZWRpdENvdXJzZShhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nLCBib2R5OiBhbnkpOiBPYnNlcnZhYmxlPENvdXJzZT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5wb3N0PENvdXJzZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfWAsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgY291cnNlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2UgdG8gZGVsZXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IC0gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvdXJzZSBqdXN0IGRlbGV0ZWRcbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGRlbGV0ZUNvdXJzZSh1c2VySWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19YCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFsbCBvZiB0aGUgc3R1ZGVudHMgaW4gdGhlIGNvdXJzZTsgdXNlZnVsIGZvciBidWxrIGRlbGV0aW9uc1xuICAgKiB3aGVuIGEgY291cnNlIGlzIG92ZXJcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciB3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdXJzZU51bSBjb3Vyc2UgbnVtYmVyIG9mIGNvdXJzZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIGxpc3Qgb2Ygc3R1ZGVudHMganVzdCBkZWxldGVkXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBkZWxldGVTdHVkZW50cyh1c2VySWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L3N0dWRlbnRzYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjZW5hcmlvIHN0YXR1cyAoYWthIGFjY2VzcyBncmFudGVkKSBmb3IgYSBzY2VuYXJpbyBmb3IgYWxsIHN0dWRlbnRzIGluIGEgY291cnNlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuQ29kZSBvZiBzY2VuYXJpbyBvZiBpbnRlcmVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTdHVkZW50W10+fSAtIGxpc3Qgb2Ygc3R1ZGVudHMgaW4gY291cnNlIGVhY2ggd2l0aCBwcm9wZXJ0aWVzIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcklkYCwgYW5kIGBzdGF0dXNgXG4gICAqIC0gb3IgXCJubyBzdHVkZW50cyBmb3VuZFwiIGlmIG5vIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2VcbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ2V0U2NlbmFyaW9TdGF0dXMoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZywgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0dWRlbnRbXT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQ8U3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19LyR7c2NlbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIGNvdXJzZSBudW1iZXJzIGZvciBhbGwgYXZhaWxhYmxlIGNvdXJzZXNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBsaXN0IG9mIGNvdXJzZXMgd2l0aCBwcm9wZXJ0aWVzIGBjb3Vyc2VOdW1gIGFuZCBgaWRgXG4gICAqIC0gb3IgXCJObyBjb3Vyc2VzIGZvdW5kXCIgZXJyb3IgaWYgbm8gY291cnNlcyBmb3VuZFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ2V0Q291cnNlTGlzdCgpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQoYC9hcGkvY291cnNlc2ApO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJlc29sdmUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3JpY2tldFNlcnZpY2UgfSBmcm9tICcuL2NyaWNrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2NlbmFyaW8uaW50ZXJmYWNlJztcblxuLyoqXG4gKiBSZXNvbHZlcyBhIHJvdXRlIFVSTCB0byBnZXQgdGhlIHNjZW5hcmlvIGlkIChmcm9tIHRoZSB1cmwpXG4gKiB0aGVuIHVzZXMgdGhhdCB0byBnZXQgdGhlIHNjZW5hcmlvIGxhYmVsIHVzaW5nIHNjZW5hcmlvIHNlcnZpY2VcbiAqXG4gKiBUaGlzIGlzIHVzZWQgdG8gZ2VuZXJhdGUgaHVtYW4tcmVhZGFibGUgYnJlYWRjcnVtYiBsYWJlbHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPFNjZW5hcmlvPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBDcmlja2V0U2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCByZXF1aXJlZCBieSBpbXBsZW1lbnRhdGlvblxuICAgKiBCYXNlZCBvbiB0aGUgaWRlbnRpZmllZCBzY2VuQ29kZSBmcm9tIHRoZSBVUkwsIHVzZSB0aGUgc2VydmljZSBnbyBnZXQgdGhlIHNjZW5hcmlvIGRldGFpbHMgYW5kIHNlbmQgYmFjayB0byBjbGllbnRcbiAgICpcbiAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSByb3V0ZSBjdXJyZW50IHJvb3QgVVJMXG4gICAqIEBwYXJhbSB7Um91dGVyU3RhdGVTYW5wc2hvdH0gY3VycmVudCByb3V0ZSBzbmFwc2hvdFxuICAgKlxuICAgKiBAcmV0dXJucyB7U2NlbmFyaW99IC0gVGhlIHNjZW5hcmlvIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIGRvIHRoZSB1cmwgcGFyYW0gSUQgaWYgaXQgZXhpc3RzXG4gICAtIG9yIGVtcHR5IHNjZW5hcmlvIGlmIGl0IGRvZXMgbm90IGV4aXN0XG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPFNjZW5hcmlvPiB7XG5cbiAgICBjb25zdCBzY2VuQ29kZSA9IHJvdXRlLnBhcmFtc1snc2NlbklkJ107XG5cbiAgICBpZiAoc2NlbkNvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0U2NlbmFyaW8oc2NlbkNvZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8U2NlbmFyaW8+KCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L3NjZW5hcmlvLnJlc29sdmVyLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogV2hlbiBVUkwgZ29lcyB0byBhIHBhZ2UgdGhhdCBkb2Vzbid0IGV4aXN0O1xuICogVGhpcyBpcyBzaW1wbGUsIHZpc3VhbCBjb21wb25lbnQgbmVlZGVkIHRvIGdldCB0aGUgdGVtcGxhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1ub3QtZm91bmQnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9wYWdlLW5vdC1mb3VuZC50ZW1wbGF0ZS5odG1sJyksXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZU5vdEZvdW5kQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKCl7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBob21lIGxhbmRpbmcgcGFnZSB3aGVuIGdvaW5nIHRvIHRoZSB3ZWJzaXRlXG4gKlxuICogTWFpbmx5IGEgdmlldyBjb21wb25lbnQsIGJ1dCBzb21lIGFzcGVjdHMgYXJlIGRlcGVuZGVudFxuICogb24gaWYgYSB1c2VyIGlzIGxvZ2dlZCBpbiBhbmQgdGhlIHVzZXIgcm9sZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaG9tZS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vaG9tZS5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBUaGUgbG9nZ2VkIGluIHVzZXIsIGlmIGFueVxuICAgKi9cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKXt9XG5cbiAgLyoqXG4gICAqIFdoZW4gaW50aWFsaXppbmcgY29tcG9uZW50LCBnZXQgdGhlIGxvZ2dlZCBpbiB1c2VyLCBpZiBhbnlcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgdGhlIGNvbXBvbmVudCwgdW5zZXQgdGhlIHVzZXIgdmFyaWFibGVcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy51c2VyID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUmVzb2x2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi9zY2VuYXJpb3MvbWVuZGVscGVkZS1zY2VuYXJpb3Muc2VydmljZSc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW8gfSBmcm9tICcuLi9pbnRlcmZhY2VzL21lbmRlbHBlZGUtc2NlbmFyaW9zLmludGVyZmFjZSc7XG5cbi8qKlxuICogUmVzb2x2ZXMgYSByb3V0ZSBVUkwgdG8gZ2V0IHRoZSBzY2VuYXJpbyBpZCAoZnJvbSB0aGUgdXJsKVxuICogdGhlbiB1c2VzIHRoYXQgdG8gZ2V0IHRoZSBzY2VuYXJpbyBsYWJlbCB1c2luZyBzY2VuYXJpbyBzZXJ2aWNlXG4gKlxuICogVGhpcyBpcyB1c2VkIHRvIGdlbmVyYXRlIGh1bWFuLXJlYWRhYmxlIGJyZWFkY3J1bWIgbGFiZWxzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZW5kZWxwZWRlU2NlbmFyaW9SZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8TWVuZGVscGVkZVNjZW5hcmlvPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBNZW5kZWxwZWRlU2NlbmFyaW9TZXJ2aWNlKSB7IH1cblxuICAvKipcbiAgICogTWV0aG9kIHJlcXVpcmVkIGJ5IGltcGxlbWVudGF0aW9uXG4gICAqIEJhc2VkIG9uIHRoZSBpZGVudGlmaWVkIHNjZW5Db2RlIGZyb20gdGhlIFVSTCwgdXNlIHRoZSBzZXJ2aWNlIGdvIGdldCB0aGUgc2NlbmFyaW8gZGV0YWlscyBhbmQgc2VuZCBiYWNrIHRvIGNsaWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIGN1cnJlbnQgcm9vdCBVUkxcbiAgICogQHBhcmFtIHtSb3V0ZXJTdGF0ZVNhbnBzaG90fSBjdXJyZW50IHJvdXRlIHNuYXBzaG90XG4gICAqXG4gICAqIEByZXR1cm5zIHtTY2VuYXJpb30gLSBUaGUgc2NlbmFyaW8gb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gZG8gdGhlIHVybCBwYXJhbSBJRCBpZiBpdCBleGlzdHNcbiAgIC0gb3IgZW1wdHkgc2NlbmFyaW8gaWYgaXQgZG9lcyBub3QgZXhpc3RcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8TWVuZGVscGVkZVNjZW5hcmlvPiB7XG5cbiAgICBjb25zdCBzY2VuU2hvcnRDb2RlID0gcm91dGUucGFyYW1zWydzY2VuU2hvcnRDb2RlJ107XG5cbiAgICBpZiAoc2NlblNob3J0Q29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NjZW5hcmlvU2VydmljZS5nZXRTY2VuYXJpbyhzY2VuU2hvcnRDb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPE1lbmRlbHBlZGVTY2VuYXJpbz4oKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS1zY2VuYXJpby5yZXNvbHZlci50cyIsImltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlbGVjdERyb3BTZXJ2aWNlLCBTZWxlY3REcm9wRGF0YSB9IGZyb20gJy4vc2VsZWN0LWRyb3Auc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3NlbGVjdC1kcm9wcGFibGVdJ30pXG5leHBvcnQgY2xhc3MgU2VsZWN0RHJvcENvbXBvbmVudCB7XG4gICAgX2VsZW06IEhUTUxFbGVtZW50O1xuICAgIF9kZWZhdWx0Q3Vyc29yOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9zZWxlY3RFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2V0IHNlbGVjdEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zZWxlY3RFbmFibGVkID0gISFlbmFibGVkO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0RW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdEVuYWJsZWQ7XG4gICAgfVxuICAgIHByaXZhdGUgX2Ryb3BEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNldCBkcm9wRGlzYWJsZWQoZGlzYWJsZTogYm9vbGVhbil7XG4gICAgICB0aGlzLl9kcm9wRGlzYWJsZWQgPSAhIWRpc2FibGU7XG4gICAgfVxuICAgIGdldCBkcm9wRGlzYWJsZWQoKTogYm9vbGVhbntcbiAgICAgIHJldHVybiB0aGlzLl9kcm9wRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgIEBJbnB1dChcInNlbGVjdEVuYWJsZWRcIikgc2V0IHNlbGVjdGFibGUodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAgdGhpcy5zZWxlY3RFbmFibGVkID0gISF2YWx1ZTtcbiAgICAgfVxuICAgICBASW5wdXQoXCJkcm9wRGlzYWJsZWRcIikgc2V0IHVuZHJvcHBhYmxlKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgIHRoaXMuZHJvcERpc2FibGVkID0gISF2YWx1ZTtcbiAgICAgfVxuXG4gICAgIEBJbnB1dCgpIGFsbG93RHJvcDogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW47XG4gICAgIEBJbnB1dChcInNlbGVjdERhdGFcIikgZGF0YTogYW55O1xuICAgICBASW5wdXQoKSBzb3VyY2VOYW1lOiBzdHJpbmc7XG5cbiAgICAgQE91dHB1dCgpIG9uRHJvcFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxTZWxlY3REcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdERyb3BEYXRhPigpO1xuQE91dHB1dChcIm9uU3VjY2Vzc1wiKSBvblN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPFNlbGVjdERyb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RHJvcERhdGE+KCk7XG5AT3V0cHV0KCkgb25FcnJvcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgX3NlbGVjdERyb3BTZXJ2aWNlOiBTZWxlY3REcm9wU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gICAgICAgIC8vIEFzc2lnbiBkZWZhdWx0IGN1cnNvciB1bmxlc3Mgb3ZlcnJpZGRlblxuICAgICAgICB0aGlzLl9kZWZhdWx0Q3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpZighdGhpcy5kcm9wRGlzYWJsZWQgJiYgIXRoaXMuc2VsZWN0RW5hYmxlZClcbiAgICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuX2RlZmF1bHRDdXJzb3I7ICAvLyBzZXQgZGVmYXVsdCBjdXJzb3Igb24gb3VyIGVsZW1lbnRcblxuICAgICAgICB0aGlzLl9lbGVtLm9ubW91c2VlbnRlciA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbGVtLm9ubW91c2VvdXQgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLl9vbk1vdXNlT3V0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGljayBldmVudHMgLSBib3RoIHNlbGVjdCBhbmQgZHJvcFxuICAgICAgdGhpcy5fZWxlbS5vbmNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PntcbiAgICAgICAgdGhpcy5fb25DbGljayhldmVudCk7XG4gICAgICB9XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgLy8gTmVjZXNzYXJ5LiBBbGxvd3MgdXMgdG8gZHJvcC5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgLy8gaWYgbm90aGluZyBzZWxlY3RlZCBhbmQgc2VsZWN0RW5hYmxlZCAtPiBzZWxlY3RcbiAgICAgIGlmKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmlzU2VsZWN0ZWQgPT09IGZhbHNlICYmIHRoaXMuc2VsZWN0RW5hYmxlZCl7XG4gICAgICAgIC8vdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1vYmplY3QnKTtcbiAgICAgICAgdGhpcy5fb25TZWxlY3RDYWxsYmFjayhldmVudCk7XG4gICAgfSAvLyBpZiB3ZSByZS1jbGlja2VkIHRoZSBvYmplY3QgLT4gZGVzZWxlY3RcbiAgICBlbHNlIGlmKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmlzU2VsZWN0ZWQgJiYgdGhpcy5zb3VyY2VOYW1lID09PSB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5jdXJTb3VyY2Upe1xuICAgICAgICAvL3RoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtb2JqZWN0Jyk7XG4gICAgICAgIHRoaXMuX29uRGVzZWxlY3RDYWxsYmFjayhldmVudCk7XG4gICAgfSAvLyBpZiB3ZSBjYW4gZHJvcCwgdGhlbiBkcm9wXG4gICAgZWxzZSBpZih0aGlzLl9pc0Ryb3BBbGxvd2VkKGV2ZW50KSl7XG4gICAgICAvL3RoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtb2JqZWN0Jyk7XG4gICAgICB0aGlzLl9vbkRyb3BDYWxsYmFjayhldmVudCk7XG4gICAgfSAvLyBpZiBzb21ldGhpbmcgc2VsZWN0ZWQsIHNlbGVjdCB0aGlzIGluc3RlYWRcbiAgICBlbHNlIGlmKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmlzU2VsZWN0ZWQgJiYgdGhpcy5zZWxlY3RFbmFibGVkKXtcbiAgICAgIC8vdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1vYmplY3QnKTtcbiAgICAgIC8vIHVwZGF0ZSB0byByZW1vdmUgc2VsZWN0ZWQtY2xhc3Mgb24gcHJldmlvdXNseSBzZWxlY3RlZCBlbGVtXG4gICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5yZW1vdmVFbGVtQ2xhc3MoKTtcbiAgICAgIHRoaXMuX29uU2VsZWN0Q2FsbGJhY2soZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vbkVycm9yQ2FsbGJhY2soZXZlbnQpO1xuICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbk1vdXNlRW50ZXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygnb25kcmFnb3Zlci5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgnZHJvcC1vYmplY3QnKTtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBpcyBvdmVyIHRoZSBzYW1lIHNvdXJjZSBlbGVtZW50IC0gZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOZWNlc3NhcnkuIEFsbG93cyB1cyB0byBkcm9wLlxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIHByaXZhdGUgX29uTW91c2VPdXQoZXZlbnQ6IEV2ZW50KXtcbiAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcC1vYmplY3QnKTtcbiAgICB9XG5cbiAgICBkZXRlY3RDaGFuZ2VzICgpIHtcbiAgICAgICAgLy8gUHJvZ3JhbW1hdGljYWxseSBydW4gY2hhbmdlIGRldGVjdGlvbiB0byBmaXggaXNzdWUgaW4gU2FmYXJpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9jZHIgJiYgISh0aGlzLl9jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDI1MCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNEcm9wQWxsb3dlZChldmVudDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3REcm9wU2VydmljZS5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCwgaWYgYGFsbG93RHJvcGAgaXMgc2V0LCBjYWxsIGl0IHRvIGRldGVybWluZSB3aGV0aGVyIHRoZVxuICAgICAgICAgICAgaWYodGhpcy5kcm9wRGlzYWJsZWQpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dEcm9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dEcm9wKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ByZXZlbnRBbmRTdG9wKGV2ZW50OiBFdmVudCk6IGFueSB7XG4gICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gIF9vbkVycm9yQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkVycm9yLmVtaXQoJ1RoZXJlIHdhcyBhbiBlcnJvcicpO1xuICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRlc2VsZWN0KCk7XG4gIH1cblxuICAgIF9vbkRyb3BDYWxsYmFjayggZXZlbnQ6IE1vdXNlRXZlbnQgKXtcbiAgICAgIGxldCBkYXRhVHJhbnNmZXIgPSAoZXZlbnQgYXMgYW55KS5kYXRhVHJhbnNmZXI7XG4gICAgICBpZih0aGlzLl9zZWxlY3REcm9wU2VydmljZS5pc1NlbGVjdGVkKXtcbiAgICAgICAgdGhpcy5vbkRyb3BTdWNjZXNzLmVtaXQoe2RhdGE6IHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XG4gICAgICAgIGlmKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLm9uU3VjY2Vzc0NhbGxiYWNrKXtcbiAgICAgICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5vblN1Y2Nlc3NDYWxsYmFjay5lbWl0KHtkYXRhOiB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5kYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRlc2VsZWN0KCk7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfb25EZXNlbGVjdENhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KXtcbiAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRlc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgX29uU2VsZWN0Q2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYoIXRoaXMuc291cmNlTmFtZSAmJiAodGhpcy5kYXRhLnNvdXJjZSB8fCB0aGlzLmRhdGEuc3JjKSl7XG4gICAgICAgICAgdGhpcy5zb3VyY2VOYW1lID0gdGhpcy5kYXRhLnNvdXJjZSA/IHRoaXMuZGF0YS5zb3VyY2UgOiB0aGlzLmRhdGEuc3JjO1xuICAgICAgICB9IGVsc2UgaWYoIXRoaXMuc291cmNlTmFtZSl7XG4gICAgICAgICAgdGhpcy5zb3VyY2VOYW1lID0gJydcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmVsZW0gPSB0aGlzLl9lbGVtO1xuICAgICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5zZWxlY3QodGhpcy5zb3VyY2VOYW1lLCB0aGlzLmRhdGEsIHRoaXMuX2VsZW0pO1xuICAgICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5vblN1Y2Nlc3NDYWxsYmFjayA9IHRoaXMub25TdWNjZXNzQ2FsbGJhY2s7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlQ2hpbGQsIFJvdXRlciwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBHdWFyZCB0aGUgYWRtaW4gcGF0aHMgc28gb25seSB1c2VycyB3aXRoIGBhZG1pbmAgb3IgYGluc3RyYFxuICogcm9sZSBjYW4gYWNjZXNzIHRoZSByb3V0ZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlQ2hpbGQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHVzZXIgY2FuIGFjdGl2YXRlIHRoZSByb3V0ZSBiYXNlZCBvbiB0aGVpciByb2xlXG4gICAqXG4gICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gcm91dGUgLSByb3V0ZSBVUkwgYXQgdGhlIG1vbWVudFxuICAgKiBAcGFyYW0ge1JvdXRlclN0YXRlU25hcHNob3R9IHN0YXRlIC0gcm91dGVyIHN0YXRlOyBuZWVkZWQgdG8gaW1wbGVtZW50IGludGVyZmFjZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgdXNlciBpcyBgYWRtaW5gIG9yIGBpbnN0cmBcbiAgICogLSBgZmFsc2VgIGlmIHVzZXIgaXMgb25seSBhIGBzdHVkZW50YFxuICAgKi9cbiAgY2FuQWN0aXZhdGVDaGlsZChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSBzdGF0ZS51cmw7XG5cbiAgICBsZXQgcm9sZTogYm9vbGVhbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5jYW5BY2Nlc3NBZG1pbigpO1xuICAgIGlmKHJvbGUpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5yZWRpcmVjdFVybCA9IHVybDtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9ub3QtYXV0aCddKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLmd1YXJkLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEVudHJhbmNlIGNvbXBvbmVudCBmb3IgYWRtaW4gZmVhdHVyZXNcbiAqIE1haW5seSwgaXQgaXMgYSBjYXJkIHRoYXQgYWxsb3dzIG5hdmlnYXRpb24gYmV0d2VlbiBjb3Vyc2UtcmVsYXRlZFxuICogaW5mbyBhbmQgc3R1ZGVudC1yZWxhdGVkIGluZm9cbiAqIENvbnRlbnQgb2YgdGhlIGNhcmQgaXMgZGV0ZXJtaW5lZCBieSByb3V0ZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRtaW4nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hZG1pbi50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZG1pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBMb2dnZWQgaW4gdXNlclxuICAgKi9cbiAgcHJpdmF0ZSBhZG1pblVzZXI6IFVzZXI7XG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICApe31cblxuICAvKipcbiAgICogV2hlbiBpbml0aWFsaXppbmcgdGhlIGNvbXBvbmVudCwgZ2V0IHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXIncyBpbmZvcm1hdGlvblxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmFkbWluVXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSB2aWV3IGNvbXBvbmVudCB0aGF0IGlzIHZpc2libGUgd2hlbiBnb2luZyB0byB0aGUgbWFpbiBhZG1pbiBwYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkbWluLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluSG9tZUNvbXBvbmVudHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBiYXNpYyB2aWV3IGNvbXBvbmVudCB3aGVuIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGFuIGFkbWluXG4gKiBwYWdlIGJ1dCBkb2VzIG5vdCBoYXZlIGFkbWluIGFjY2Vzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3QtYXV0aCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL25vdC1hdXRoLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIE5vdEF1dGhDb21wb25lbnR7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuLyoqXG4gKiBDb21wb25lbnQgZm9yIGV4aXN0aW5nIHVzZXJzIHRvIHNpZ24gaW4gYW5kIGJlIGFibGVcbiAqIHRvIGFjY2VzcyB0aGVpciBzY2VuYXJpb3MvZnJpZGdlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ25pbicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2lnbmluLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogUG90ZW50aWFsIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBMb2dpbiBjcmVkZW50aWFscyBmb3IgdXNlciBpbmNsdWRpbmcgYHVzZXJuYW1lYCAoZW1haWwpIGFuZCBgcGFzc3dvcmRgXG4gICAqL1xuICBwcml2YXRlIGNyZWRlbnRpYWxzOiBGb3JtR3JvdXA7XG4gIC8qKlxuICAgKiBBdXRoZW50aWNhdGlvbiBzZXJ2aWNlIHN1YnNjcmlwdGlvbiBmcm9tIHdoZW4gdHJ5aW5nIHRvIGxvZ2luIHRoZSB1c2VyXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cblxuICAvKipcbiAgKiBJbnRpYWxpemUgdGhlIGZvcm0gZ3JvdXAgb24gY29tcG9uZW50IGNyZWF0aW9uXG4gICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIHVzZXJuYW1lOiBuZXcgRm9ybUNvbnRyb2woJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdKSxcbiAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKSxcbiAgfSk7XG4gIH1cblxuICBnZXQgdXNlcm5hbWUoKSB7IHJldHVybiB0aGlzLmNyZWRlbnRpYWxzLmdldCgndXNlcm5hbWUnKTt9XG4gIGdldCBwYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KCdwYXNzd29yZCcpO31cblxuICAvKipcbiAgICogVXBvbiBmb3JtIHN1Ym1pc3Npb24sIGF0dGVtcHRzIHRvIHNpZ24gaW4gdGhlIHVzZXIgd2l0aCBgY3JlZGVudGlhbHNgICh1c2luZyB0aGUgc2VydmljZSlcbiAgICpcbiAgICogV2hlbiBzdWNjZXNzZnVsLCBuYXZpZ2F0ZSB0b1xuICAgKiAtIHRoZSByZWRpcmVjdCBVUkwgaWYgc2V0ICh3aGVuIG5vbi1sb2dnZWQgaW4gdXNlciB0cmllcyB0byBhY2Nlc3MgYSBwYWdlIHRoYXQgcmVxdWlyZWQgbG9nZ2luZyBpbilcbiAgICogLSB0aGUgaG9tZSBwYWdlIGlmIHJlZGlyZWN0IFVSTCBpcyBub3Qgc2V0XG4gICAqXG4gICAqIFdoZW4gdW5zdWNjZXNzZnVsLCBkaXNwbGF5IGVycm9yIG1lc3NhZ2VcbiAgICovXG4gICAgc2lnbmluKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgICAgIC5zaWduaW4odGhpcy5jcmVkZW50aWFscy52YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2Uuc2V0VXNlcihyZXN1bHQpO1xuICAgICAgICAgIGxldCByZWRpcmVjdCA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5yZWRpcmVjdFVybCA/IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5yZWRpcmVjdFVybCA6ICcvJztcbiAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3JlZGlyZWN0XSk7XG4gICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICogR2V0IHRoZSBmb3JtIGlucHV0IENTUyBjbGFzc2VzIHN0eWxpbmcgdG8gcHJvdmlkZSBmZWVkYmFjayB0byB1c2VyXG4gICogd2hldGhlciBpbnB1dCBpcyB2YWxpZCBvbiBub3RcbiAgKlxuICAqIEFsd2F5cyBoYXMgYC5mb3JtLWNvbnRyb2xgIHRoZW4gYC5pcy1pbnZhbGlkYCBvciBgLmlzLXZhbGlkYCBhcmUgc2V0IG9uY2UgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZFxuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IGZvcm1MYWJlbCAtIGZvcm0gZ3JvdXAgbmFtZSBsb29rLXVwIGlucHV0IHN0YXRlXG4gICpcbiAgKiBAcmV0dXJucyB7T2JqZWN0fSBDU1MgY2xhc3NlcyB3aGljaCBhcHBseSB0byB0aGlzIGlucHV0XG4gICovXG4gIGdldElucHV0Q2xhc3MoZm9ybUxhYmVsOiBzdHJpbmcpIHtcbiAgICBsZXQgb3V0ID0geydmb3JtLWNvbnRyb2wnOiB0cnVlfTtcbiAgICBpZih0aGlzLmNyZWRlbnRpYWxzICYmIHRoaXMuY3JlZGVudGlhbHMuZ2V0KGZvcm1MYWJlbCkpe1xuICAgICAgbGV0IGFjID0gdGhpcy5jcmVkZW50aWFscy5nZXQoZm9ybUxhYmVsKTtcbiAgICAgIGlmKGFjLmRpcnR5IHx8IGFjLnRvdWNoZWQpe1xuICAgICAgICBvdXRbJ2lzLWludmFsaWQnXSA9IGFjLmludmFsaWQ7XG4gICAgICAgIG91dFsnaXMtdmFsaWQnXSA9IGFjLnZhbGlkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXNjdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2UgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYWRtaW4vY291cnNlL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcidcbmltcG9ydCB7IHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uZmlybS1wYXNzd29yZC52YWxpZGF0b3InO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGFsbG93cyBuZXcgdXNlcnMgdG8gc2lnbiB1cCB0byB1c2UgQ3JpY2tldC5cbiAqIFVzZXMgZW1haWwgYXMgdXNlcm5hbWUgYW5kIGluY2x1ZGVzIHNldmVyYWwgZXJyb3JcbiAqIGNoZWNrc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ251cCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2lnbnVwLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgYmFja2VuZCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogTGlzdCBvZiBjb3Vyc2VzIGF2YWlsYWJsZSB0byBzaWduIHVwIGZvcjtcbiAgICogQWxsIHVzZXJzIG11c3Qgc2VsZWN0IGEgY291cnNlLCBldmVuIGlmIHRoZSBjb3Vyc2UgaXMgXCJOQVwiXG4gICAqL1xuICBwcml2YXRlIGNvdXJzZXM6IHN0cmluZ1tdID0gW107XG4gIC8qKlxuICAgKiBVc2VyIGRldGFpbHMgdXNlZCBmb3Igc2lnbnVwXG4gICAqIC0gYGZpcnN0TmFtZWBcbiAgICogLSBgbGFzdE5hbWVgXG4gICAqIC0gYHVzZXJuYW1lYCAoZW1haWwgYWRkcmVzcylcbiAgICogLSBgY291cnNlYCAoZGF0YWJhc2UgY291cnNlIElEIG5vdCBjb3Vyc2UgbmFtZSlcbiAgICogLSBgcGFzc3N3b3JkYFxuICAgKiAtIGBjb25maXJtUGFzc3dvcmRgXG4gICAqL1xuICBwcml2YXRlIHVzZXI6IEZvcm1Hcm91cDtcbiAgLyoqXG4gICAqIEJvb2xlYW4gc3RhdGUgb2JqZWN0IHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIG11bHRpcGxlIHNlcnZpY2VzIGVhc2llclxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2NvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgY3JlYXRpb24sIGdldCB0aGUgbGlzdCBvZiBhdmFpbGFibGUgY291cnNlcyBhbmQgb3JkZXIgdGhlbVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnVzZXIgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICdmaXJzdE5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgJ2xhc3ROYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICd1c2VybmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pLFxuICAgICAgJ2NvdXJzZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAncGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSksXG4gICAgICAnY29uZmlybVBhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgcGFzc3dvcmRNYXRjaFZhbGlkYXRvcl0pLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fY291cnNlU2VydmljZS5nZXRDb3Vyc2VMaXN0KClcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLl9yZW9yZGVyQ291cnNlcyhyZXMpO1xuICAgICAgICB0aGlzLmNvdXJzZXMgPSB0bXA7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgdGhpcy5jb3Vyc2VzID0gW107XG4gICAgfSk7XG4gIH1cblxuICAvLyBhY2Nlc3NvcnMgZm9yIGZvcm0gdmFsaWRhdGlvblxuICBnZXQgZmlyc3ROYW1lKCkgeyByZXR1cm4gdGhpcy51c2VyLmdldCgnZmlyc3ROYW1lJyk7IH1cbiAgZ2V0IGxhc3ROYW1lKCkgeyByZXR1cm4gdGhpcy51c2VyLmdldCgnbGFzdE5hbWUnKTsgfVxuICBnZXQgdXNlcm5hbWUoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCd1c2VybmFtZScpOyB9XG4gIGdldCBjb3Vyc2UoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdjb3Vyc2UnKTsgfVxuICBnZXQgcGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdwYXNzd29yZCcpOyB9XG4gIGdldCBjb25maXJtUGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdjb25maXJtUGFzc3dvcmQnKTsgfVxuXG5cbiAgLyoqXG4gICAqIE9yZGVyIHRoZSBjb3Vyc2VzIHNvIHRoZSBcIk5BXCIgY291cnNlIGlzIGF0IHRoZSB0b3BcbiAgICpcbiAgICogQHBhcmFtIHthbnlbXX0gY291cnNlcyBsaXN0IG9mIGN1cnJlbnRseSBhdmFpbGFibGUgY291cnNlczsgZWFjaCBpdGVtIGluIGxpc3QgaGFzIGBjb3Vyc2VOdW1gIGFuZCBgaWRgXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnlbXX0gdGhlIGxpc3Qgb3JkZXJlZCBzbyB0aGUgXCJOQVwiIGNvdXJzZSBpcyBhdCB0aGUgdG9wXG4gICAqL1xuICBwcml2YXRlIF9yZW9yZGVyQ291cnNlcyhjb3Vyc2VzOiBhbnlbXSk6IGFueVtde1xuICAgIGxldCBuYSA9IGNvdXJzZXMuZmlsdGVyKChjKT0+e3JldHVybiBjLmNvdXJzZU51bSA9PT0gJ05BJ30pO1xuICAgIGxldCBvdGhlciA9IGNvdXJzZXMuZmlsdGVyKChjKT0+e1xuICAgICAgcmV0dXJuIGMuY291cnNlTnVtICE9PSAnTkEnXG4gICAgfSk7XG4gICAgcmV0dXJuIG5hLmNvbmNhdChvdGhlcik7XG4gIH1cblxuICAvKipcbiAgICogLSBBdHRlbXB0cyB0byBzaWduIHRoZSB1c2VyIHVwIHdoZW4gdGhleSBzdWJtaXQgdGhlIGZvcm1cbiAgICogLSBJbmNsdWRlcyBlcnJvciBjaGVja3MgZm9yIHNlbGVjdGluZyBhIGNvdXJzZSBhbmQgcGFzc3dvcmRzIG1hdGNoXG4gICAqIC0gV2hlbiBzaWduLXVwIGlzIHN1Y2Nlc3NmdWwsIHNldHMgdGhlIFtsb2dnZWQgaW4gdXNlcl17QGxpbmsgYXV0aGVudGljYXRpb24uc2VydmljZX0gYW5kIG5hdmlnYXRlcyB0byB0aGUgaG9tZSBwYWdlXG4gICAqL1xuICBzaWdudXAoKSB7XG4gICAgICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgLnNpZ251cCh0aGlzLnVzZXIudmFsdWUpXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5zZXRVc2VyKHJlc3VsdCk7XG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKVxuICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICogR2V0IHRoZSBmb3JtIGlucHV0IENTUyBjbGFzc2VzIHN0eWxpbmcgdG8gcHJvdmlkZSBmZWVkYmFjayB0byB1c2VyXG4gICogd2hldGhlciBpbnB1dCBpcyB2YWxpZCBvbiBub3RcbiAgKlxuICAqIEFsd2F5cyBoYXMgYC5mb3JtLWNvbnRyb2xgIHRoZW4gYC5pcy1pbnZhbGlkYCBvciBgLmlzLXZhbGlkYCBhcmUgc2V0IG9uY2UgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZFxuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IGZvcm1MYWJlbCAtIGZvcm0gZ3JvdXAgbmFtZSBsb29rLXVwIGlucHV0IHN0YXRlXG4gICpcbiAgKiBAcmV0dXJucyB7T2JqZWN0fSBDU1MgY2xhc3NlcyB3aGljaCBhcHBseSB0byB0aGlzIGlucHV0XG4gICovXG4gIGdldElucHV0Q2xhc3MoZm9ybUxhYmVsOiBzdHJpbmcpIHtcbiAgICBsZXQgb3V0ID0geydmb3JtLWNvbnRyb2wnOiB0cnVlfTtcbiAgICBpZih0aGlzLnVzZXIgJiYgdGhpcy51c2VyLmdldChmb3JtTGFiZWwpKXtcbiAgICAgIGxldCBhYyA9IHRoaXMudXNlci5nZXQoZm9ybUxhYmVsKTtcbiAgICAgIGlmKGFjLmRpcnR5IHx8IGFjLnRvdWNoZWQpe1xuICAgICAgICBvdXRbJ2lzLWludmFsaWQnXSA9IGFjLmludmFsaWQ7XG4gICAgICAgIG91dFsnaXMtdmFsaWQnXSA9IGFjLnZhbGlkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXNjdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgdG8gcHJldmVudCBhIG1lbW9yeSBsZWFrXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuICAvKipcbiAgKiBDdXN0b20gdmFsaWRhdG9yIHRvIGNoZWNrIHRoYXQgaW5wdXQgcGFzc3dvcmQgYW5kIGNvbmZpcm1hdGlvbiBwYXNzd29yZCBhcmUgdGhlIHNhbWVcbiAgKlxuICAqIEBwYXJhbSBhYyB7QWJzdHJhY3RDb250cm9sfSAtIHJlYWN0aXZlIGZvcm0gY29udHJvbCBmb3IgYGNvbmZpcm1QYXNzd29yZGAgaW5wdXRcbiAgKiAtIG11c3QgYmUgcGFydCBvZiBhIEZvcm1Hcm91cCB3aXRoIGFsc28gaGFzIGEgYHBhc3N3b3JkYCBpbnB1dFxuICAqXG4gICogQHJldHVybnMge251bGwgfCBPYmplY3QgfSAtIGBudWxsYCB3aGVuIHBhc3N3b3JkcyBtYXRjaCBvciBiZWZvcmUgZm9ybSBpcyBpbml0aWFsaXplZFxuICAqIC0gYHttaXNtYXRjaDp0cnVlfWAgd2hlbiBwYXNzd29yZHMgZG9uJ3QgbWF0Y2hcbiAgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IoYWM6IEFic3RyYWN0Q29udHJvbCl7XG4gICAgICBsZXQgZmcgPSBhYy5wYXJlbnQ7XG4gICAgaWYoIWZnKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmcuZ2V0KCdwYXNzd29yZCcpLnZhbHVlID09PSBmZy5nZXQoJ2NvbmZpcm1QYXNzd29yZCcpLnZhbHVlID8gbnVsbCA6IHttaXNtYXRjaDogdHJ1ZX07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tcGFzc3dvcmQudmFsaWRhdG9yLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBDb21wb25lbnQgdGhhdCBhIHVzZXIgc2lnbnMgb3V0LiBIYXMgbm8gdmlldy90ZW1wbGF0ZS0tcmVzZXRzXG4gKiB2YXJpYWJsZXMgYW5kIG5hdmlnYXRlIHRvIGhvbWUgcGFnZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWdub3V0JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgU2lnbm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxuICApe31cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGNyZWF0aW9uXG4gICAqIDEuIFNpZ24gb3V0IHVzZXIgb24gc2VydmVyXG4gICAqIDIuIFVuc2V0IFtBdXRoZW50aWNhdGlvblNlcnZpY2Vde0BsaW5rIEF1dGhlbnRpY2F0aW9uU2VydmljZX0gdXNlclxuICAgKiAzLiBSZWRpcmVjdCB0byBob21lIHBhZ2VcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hdXRoU2VydmljZS5zaWdub3V0KClcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2V0VXNlcihudWxsKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25vdXQvc2lnbm91dC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogSWYgdXNlciBmb3JnZXRzIHRoZWlyIHBhc3N3b3JkLCB0aGV5IGNhbiBlbnRlclxuICogdGhlcmUgZW1haWwgYWRkcmVzcy4gSWYgdGhlcmUgaXMgYW4gYWNjb3VudCB3aXRoIHRoZSBlbWFpbCBhZGRyZXNzLFxuICogYW4gZW1haWwgaXMgc2VudCB3aXRoIGEgbGluayB0aGF0IGFsbG93cyB1c2VyIHRvIHJlc2V0IHRoZWlyIHBhc3N3b3JkXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgZm9yIGVudGVyaW5nIGVtYWlsIGFkZHJlc3MgYW5kXG4gKiBpbmZvcm1pbmcgaWYgZW1haWwgYWRkcmVzcyB3YXMgdmFsaWQgYW5kIHJlc2V0ICogcGFzc3dvcmQgZW1haWwgd2FzIHN1Y2Nlc3NmdWxseSBzZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9yZ2V0LXBzd2QnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2ZvcmdldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBQb3NzaWJsZSBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogTWVzc2FnZSB3aGVuIHJlc2V0IHBhc3N3b3JkIGVtYWlsIHdhcyBzdWNjZXNzZnVsbHkgc2VudFxuICAgKi9cbiAgcHJpdmF0ZSBzdWNjZXNzTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBVc2VyJ3MgZW1haWwgdG8gY2hlY2sgaWYgYW4gYWNjb3VudCBleGlzdHNcbiAgICovXG4gIGVtYWlsOiBGb3JtQ29udHJvbDtcbiAgLyoqXG4gICAqIEF1dGhlbnRpY2F0aW9uIHNlcnZpY2Ugc3Vic2NyaXB0aW9uXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBmb3JtIG9uIGNvbXBvbmVudCBjcmVhdGlvblxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmVtYWlsID0gbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pO1xuICB9XG4gIC8qKlxuICAgKiBBZnRlciBzdWJtaXR0aW5nIGZvcm0sIHJlc2V0IF9zdWNjZXNzXyBhbmQgX2Vycm9yXyBtZXNzYWdlcywgc2VuZCBlbWFpbCB0byB0aGUgc2VydmVyLCBhbmQgd2FpdCBmb3IgcmVzcG9uc2VcbiAgICpcbiAgICogLSBJZiBwYXNzd29yZCByZXNldCBlbWFpbCBzdWNjZXNzZnVsbHkgc2V0LCBfc3VjY2Vzc18gbWVzc2FnZSBpcyB1cGRhdGVkXG4gICAqIC0gSWYgdGhlcmUgd2FzIGFuIGVycm9yIChzZXJ2ZXIgZXJyb3IsIGVtYWlsIGRvZXNuJ3QgYmVsb3cgdG8gYW55IHVzZXIpLCBfZXJyb3JfIG1lc3NhZ2UgaXMgc2V0IHdpdGggZGVzY3JpcHRpb24gb2YgdGhlIGVycm9yXG4gICAqL1xuICAgIHNlbmRGb3JnZXQoKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gJyc7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgbGV0IGJvZHkgPSB7ZW1haWw6IHRoaXMuZW1haWwudmFsdWV9O1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgICAgIC5mb3JnZXRQYXNzd29yZChib2R5KVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIC8vIGlmIHN1Y2Nlc3NmdWwsIHNob3VsZCBnZXQgc3VjY2VzcyBtZXNzYWdlXG4gICAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgQ1NTIGNsYXNzIGZvciB0aGUgZW1haWwgaW5wdXQgYmFzZWQgb24gaXQncyB2YWxpZGl0eVxuICAgKlxuICAgKiBBbHdheXMgaGFzIGAuZm9ybS1jb250cm9sYCB0aGVuIGAuaXMtaW52YWxpZGAgb3IgYC5pcy12YWxpZGAgYXJlIHNldCBvbmNlIGlucHV0IGhhcyBiZWVuIHRvdWNoZWRcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gQ1NTIGNsYXNzZXMgd2hpY2ggYXBwbHlcbiAgICovXG4gIGdldElucHV0Q2xhc3MoKXtcbiAgICBsZXQgb3V0ID0geydmb3JtLWNvbnRyb2wnOiB0cnVlfTtcbiAgICBpZih0aGlzLmVtYWlsICYmICh0aGlzLmVtYWlsLmRpcnR5IHx8IHRoaXMuZW1haWwudG91Y2hlZCkpe1xuICAgICAgb3V0Wydpcy1pbnZhbGlkJ10gPSB0aGlzLmVtYWlsLmludmFsaWQ7XG4gICAgICBvdXRbJ2lzLXZhbGlkJ10gPSB0aGlzLmVtYWlsLnZhbGlkO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gYXV0aGVudGljYXRpb24gc2VydmljZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuaW1wb3J0IHsgcGFzc3dvcmRNYXRjaFZhbGlkYXRvciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25maXJtLXBhc3N3b3JkLnZhbGlkYXRvcic7XG5cbi8qKlxuICogQWZ0ZXIgdXNlciByZXF1ZXN0cyB0byByZXNldCBwYXNzd29yZCBhbmQgdGhleSBoYXZlIGEgdG9rZW4sXG4gKiB0aGlzIGNvbXBvbmVudCBhbGxvd3MgdGhlbSB0byBzZXQgdGhlIHBhc3N3b3JkIHRvIGEgbmV3IHBhc3N3b3JkXG4gKiAoYXNzdW1pbmcgdG9rZW4gaXMgdmFsaWQpXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmVzZXQtcHN3ZCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcmVzZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZSBmcm9tIHNlcnZlclxuICAgKi9cbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBNZXNzYWdlIHdoZW4gbmV3IHBhc3N3b3JkIHN1Y2Nlc3NmdWxseSBzYXZlZFxuICAgKi9cbiAgcHJpdmF0ZSBzdWNjZXNzTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBFbWFpbCBhbmQgbmV3IHBhc3N3b3JkcyB0byBiZSBhYmxlIHRvIHVwZGF0ZSB0aGUgZGF0YWJhc2VcbiAgICogLSBgcGFzc3dvcmRgIC0gdGhlIG5ldyBwYXNzd29yZCB0byBzZXRcbiAgICogLSBgY29uZmlybVBhc3N3b3JkYCAtIGNvbmZpcm0gcGFzc3dvcmQgdHlwZWQgY29ycmVjdGx5XG4gICAqIC0gYHRva2VuYCAtIHBhc3N3b3JkIHJlc2V0IHRva2VuIHRvIGNvbmZpcm0gdXNlciBoYWQgYWNjZXNzIHRvIHRoZSBlbWFpbCBhbmQgZGlkbid0IHdhaXQgdG9vIGxvbmdcbiAgICovXG4gIHByaXZhdGUgY3JlZGVudGlhbHM6IEZvcm1Hcm91cDtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byB7QGxpbmsgQXV0aGVudGljYXRpb25TZXJ2aWNlfSB3aGVuIHJldHRpbmdcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBJcyB0aGUgc3VibWl0IGJ1dHRvbiBkaXNhYmxlZDsgdGhpcyB3b3VsZCBoYXBwZW4gd2hlblxuICAgKiB0aGVyZSBpcyBubyB0b2tlblxuICAgKi9cbiAgLy9wcml2YXRlIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICB9XG4gIC8qKlxuICAgKiBXaGVuIGluaXRpYWxpemluZyB0aGUgY29tcG9uZW50LCBnZXQgdGhlIHRva2VuIGZyb20gdGhlIFVSTFxuICAgKlxuICAgKiBJZiB0aGVyZSBpcyBubyB0b2tlbiwgZ2l2ZSBlcnJvciBtZXNzYWdlIGFuZCBkaXNhYmxlIHN1Ym1pdCBidXR0b25cbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgJ3Bhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKSxcbiAgICAgICdjb25maXJtUGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBwYXNzd29yZE1hdGNoVmFsaWRhdG9yXSksXG4gICAgICAndG9rZW4nOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgfSk7XG5cbiAgICBsZXQgdXJsVG9rZW4gPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3Rva2VuJyk7XG4gICAgaWYgKHVybFRva2VuID09PSAnJyl7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdObyB0b2tlbiBzcGVjaWZpZWQuJ1xuICAgIH1cbiAgICB0aGlzLmNyZWRlbnRpYWxzLnBhdGNoVmFsdWUoe3Rva2VuOiB1cmxUb2tlbn0pO1xuICB9XG5cbiAgZ2V0IHBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoJ3Bhc3N3b3JkJyk7IH1cbiAgZ2V0IGNvbmZpcm1QYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KCdjb25maXJtUGFzc3dvcmQnKTsgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byByZXNldCB0aGUgbmV3IHBhc3N3b3JkXG4gICAqIDEuIElmIG5vIGVycm9ycywgc2VuZCBjcmVkZW50aWFscyB0byBzZXJ2ZXJcbiAgICogMi4gUGFzc3dvcmQgY29ycmVjdGx5IHJlc2V0LCBkaXNwbGF5cyB0aGUgc3VjY2VzcyBtZXNzYWdlXG4gICAqIDMuIElmIGVycm9yIHJlc2V0aW5nIHRoZSBwYXNzd29yZCwgZGlzcGxheXMgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgICBzZW5kUmVzZXQoKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgLnJlc2V0UGFzc3dvcmQodGhpcy5jcmVkZW50aWFscy52YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAvLyBpZiBzdWNjZXNzZnVsLCBzaG91bGQgZ2V0IHN1Y2Nlc3MgbWVzc2FnZVxuICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMuc2V0VmFsdWUoeydwYXNzd29yZCc6ICcnLCAnY29uZmlybVBhc3N3b3JkJzogJycsIHRva2VuOiAnJ30pO1xuICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAqIEdldCB0aGUgZm9ybSBpbnB1dCBDU1MgY2xhc3NlcyBzdHlsaW5nIHRvIHByb3ZpZGUgZmVlZGJhY2sgdG8gdXNlclxuICAqIHdoZXRoZXIgaW5wdXQgaXMgdmFsaWQgb24gbm90XG4gICpcbiAgKiBBbHdheXMgaGFzIGAuZm9ybS1jb250cm9sYCB0aGVuIGAuaXMtaW52YWxpZGAgb3IgYC5pcy12YWxpZGAgYXJlIHNldCBvbmNlIGlucHV0IGhhcyBiZWVuIHRvdWNoZWRcbiAgKlxuICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtTGFiZWwgLSBmb3JtIGdyb3VwIG5hbWUgbG9vay11cCBpbnB1dCBzdGF0ZVxuICAqXG4gICogQHJldHVybnMge09iamVjdH0gQ1NTIGNsYXNzZXMgd2hpY2ggYXBwbHkgdG8gdGhpcyBpbnB1dFxuICAqL1xuICBnZXRJbnB1dENsYXNzKGZvcm1MYWJlbDogc3RyaW5nKSB7XG4gICAgbGV0IG91dCA9IHsnZm9ybS1jb250cm9sJzogdHJ1ZX07XG4gICAgaWYodGhpcy5jcmVkZW50aWFscyAmJiB0aGlzLmNyZWRlbnRpYWxzLmdldChmb3JtTGFiZWwpKXtcbiAgICAgIGxldCBhYyA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KGZvcm1MYWJlbCk7XG4gICAgICBpZihhYy5kaXJ0eSB8fCBhYy50b3VjaGVkKXtcbiAgICAgICAgb3V0Wydpcy1pbnZhbGlkJ10gPSBhYy5pbnZhbGlkO1xuICAgICAgICBvdXRbJ2lzLXZhbGlkJ10gPSBhYy52YWxpZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gYXV0aGVudGljYXRpb24gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbHAnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9oZWxwLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9oZWxwLnN0eWxlLmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIEhlbHBDb21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IoKXt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbHAtY3JpY2tldCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2hlbHAtY3JpY2tldC50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBIZWxwQ3JpY2tldENvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcigpe31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2hlbHAvaGVscC1jcmlja2V0L2hlbHAtY3JpY2tldC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogTWFpbiB1c2VyIHByb2ZpbGUgY29tcG9uZW50OyBhaW1lZCBmb3IgdXNlIHRvIGVkaXQgbmFtZSBhbmRcbiAqIGVtYWlsIGFkZHJlc3MuIEFsc28gYWNjZXNzIHVwZGF0ZSBwYXNzd29yZCBsaW5rIHRvIHVwZGF0ZSBwYXNzd29yZFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1c2VyLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi91c2VyLXByb2ZpbGUudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlclByb2ZpbGVDb21wb25lbnR7XG5cbiAgLyoqXG4gICAqIERhdGFiYXNlIHVzZXIgaWRcbiAgICovXG4gIHByaXZhdGUgdXNlcklkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBVc2VyIGRldGFpbHMgKGFzIGFuIG9iamVjdClcbiAgICogQ3VycmVudGx5IGluY2x1ZGVzOiBmaXJzdE5hbWUsIGxhc3ROYW1lLCBhbmQgZW1haWxcbiAgICovXG4gIHByaXZhdGUgdXNlckluZm86IGFueTtcbiAgLyoqXG4gICAqIFN0YXRlIHRvIG1haW50YWluIG9wZW4gc3Vic2NyaXB0aW9ucyB1bnRpbCBjb21wb25lbnQgaXMgZGVzdG9yeWVkXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yOyBpbmNsdWRlcyBzZXJ2aWNlcyB0byBmZXRjaCBpbmZvXG4gICAqXG4gICAqIEBwYXJhbSB7UHJvZmlsZVNlcnZpY2V9IF9wcm9maWxlU2VydmljZSBTZXJ2aWNlIGZvciB1cGRhdGluZyB0aGUgaW5mb3JtYXRpb25cbiAgICogQHBhcmFtIHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IF9hdXRoU2VydmljZSBTZXJ2aWNlIHRvIGdldCB0aGUgY3VycmVudCB1c2VyIGluZm9ybWF0aW9uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9wcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICApe1xuICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IG9uIGNyZWF0aW9uXG4gICAqIDEuIEdldCB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogMi4gU2F2ZSB0aGUgdXNlcidzIGRldGFpbHMgdG8gb2JqZWN0IHRvIGJlIGFibGUgdG8gZWRpdFxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICAvLyBnZXQgY3VycmVudCB1c2VyIGluZm9cbiAgICB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyJFxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgdGhpcy51c2VySWQgPSByZXMuaWQ7XG4gICAgICB0aGlzLnVzZXJJbmZvID0ge1xuICAgICAgICBmaXJzdE5hbWU6IHJlcy5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiByZXMubGFzdE5hbWUsXG4gICAgICAgIGVtYWlsOiByZXMuZW1haWxcbiAgICAgIH1cbiAgICB9LCAoaWRFcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoaWRFcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHVwZGF0ZSB0aGUgcHJvZmlsZSBpZiBwb3NzaWJsZSBvciBzZXQgZXJyb3JcbiAgICogbWVzc2FnZSBpZiB0aGVyZSdzIGEgcHJvYmxlbVxuICAgKi9cbiAgdXBkYXRlUHJvZmlsZSgpe1xuICAgIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLmVkaXRQcm9maWxlKHRoaXMudXNlcklkLCB0aGlzLnVzZXJJbmZvKVxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHVwZGF0ZWQpPT57XG4gICAgICB0aGlzLnVzZXJJbmZvID0ge2ZpcnN0TmFtZTogdXBkYXRlZC5maXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IHVwZGF0ZWQubGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVwZGF0ZWQuZW1haWx9O1xuICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2V0VXNlcih1cGRhdGVkKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RydWN0aW9uLCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIHRvIHByZXZlbnRcbiAgICogbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBhIGxvZ2dlZCBpbiB1c2VyIHRvIHVwZGF0ZSB0aGVpciBwYXNzd29yZFxuICogYnkgZW50ZXJpbmcgdGhlaXIgY3VycmVudCBwYXNzd29yZCB0aGVuIHRoZSBuZXcgcGFzc3dvcmRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXNlci1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3VwZGF0ZS1wYXNzd29yZC50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVQYXNzd29yZENvbXBvbmVudHtcblxuICAvKipcbiAgICogVGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqL1xuICBwcml2YXRlIHVzZXI6IFVzZXI7XG4gIC8qKlxuICAgKiAtIFBhc3N3b3JkIGluZm9ybWF0aW9uIHRvIHNlbmQgdG8gc2VydmVyIHRvIHVwZGF0ZSBwYXNzd29yZFxuICAgKiAtIEhhcyBmaWVsZHMgYHBhc3N3b3JkYCAoY3VycmVudCBwYXNzd29yZCksIGBuZXdQYXNzd29yZGAgKHBhc3N3b3JkIHRvIGNoYW5nZSB0byksIFxuICAgKiBgY29uZmlybVBhc3N3b3JkYCAoY29uZmlybXMgdHlwaW5nIG9mIG5ldyBwYXNzd29yZCksIGFuZCBcbiAgICogYHVzZXJuYW1lYCAodXNlcidzIGVtYWlsKVxuICAgKi9cbiAgcHJpdmF0ZSBjcmVkZW50aWFsczogYW55O1xuICAvKipcbiAgICogU3RhdGUgdG8ga2VlcCB0cmFjayBvZiBjb21wb2VuZW50IGFsaXZlXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBiYWNrZW5kIGVycm9yIG1lc3NhZ2UgZGlzcGxheWVkIHByb21pbmFudGx5XG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlIGFib3V0IHN1Ym1pc3Npb24gYW5kIHdoeSB0aGUgc3VibWlzc2lvbiBkaWRuJ3Qgd29yayBhcyBleHBlY3RlZFxuICAgKi9cbiAgcHJpdmF0ZSBwYXNzd29yZE1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3Byb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICl7XG4gICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge1xuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIG5ld1Bhc3N3b3JkOiAnJyxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiAnJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyIGluZm9cbiAgICogMi4gU2V0IHVwIHRoZSBjcmVkZW50aWFscyB3aXRoIGVtYWlsIGFkZHJlc3NcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgLy8gZ2V0IGN1cnJlbnQgdXNlciBpbmZvXG4gICAgdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlciRcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIHRoaXMudXNlciA9IHJlcztcbiAgICAgIHRoaXMuY3JlZGVudGlhbHNbJ3VzZXJuYW1lJ10gPSByZXMuZW1haWw7XG4gICAgfSwgKGlkRXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGlkRXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0IHRvIHVwZGF0ZSB0aGUgcGFzc3dvcmRcbiAgICogLSBJZiBzdWNjZXNzZnVsLCByZWRpcmVjdHMgdG8gcHJvZmlsZSBwYWdlXG4gICAqIC0gSWYgdGhlcmUncyBhbiBlcnJvciwgZGlzcGxheXMgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgdXBkYXRlUGFzc3dvcmQoKXtcbiAgICAvLyBkbyBjaGVja3NcbiAgICB0aGlzLnBhc3N3b3JkTWVzc2FnZSA9IHRoaXMuX2NoZWNrUGFzc3dvcmRzKCk7XG4gICAgaWYodGhpcy5wYXNzd29yZE1lc3NhZ2UgPT09ICcnKXtcbiAgICAgIC8vIGNhbiB1cGRhdGVcbiAgICAgIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLnVwZGF0ZVBhc3N3b3JkKHRoaXMudXNlci5pZCwgdGhpcy5jcmVkZW50aWFscylcbiAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsZSddKTtcbiAgICAgIH0sIChlcnIpPT57XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERvZXMgdmFyaW91cyBjaGVja3MgdG8gZW5zdXJlIHRoZSBwYXNzd29yZCBmaWVsZHMgYXJlIHZhbGlkXG4gICAqIDEuIEFsbCBmaWVsZHMgYXJlIGZpbGxlZCBpblxuICAgKiAyLiBOZXcgcGFzc3dvcmQgaXMgZGlmZmVyZW50IGZyb20gb2xkIHBhc3N3b3JkXG4gICAqIDMuIENvbmZpcm0gcGFzc3dvcmQgbWF0Y2hlcyBuZXcgcGFzc3dvcmRcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gZXJyb3IgbWVzc2FnZSBpZiBhdCBsZWFzdCBvbmUgY29uZGl0aW9uIGlzbid0IG1ldCBvciBgJydgIGlmIGV2ZXJ5dGhpbmcgaXMgdmFsaWRcbiAgICovXG4gIHByb3RlY3RlZCBfY2hlY2tQYXNzd29yZHMoKXtcbiAgICBsZXQgcCA9IHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQ7XG4gICAgbGV0IG4gPSB0aGlzLmNyZWRlbnRpYWxzLm5ld1Bhc3N3b3JkO1xuICAgIGxldCBjID0gdGhpcy5jcmVkZW50aWFscy5jb25maXJtUGFzc3dvcmQ7XG4gICAgaWYocCA9PT0gJycpe1xuICAgICAgcmV0dXJuICdFbnRlciBvbGQgcGFzc3dvcmQnO1xuICAgIH0gZWxzZSBpZihuID09PSAnJyl7XG4gICAgICByZXR1cm4gJ0VudGVyIG5ldyBwYXNzd29yZCc7XG4gICAgfSBlbHNlIGlmKGMgPT09ICcnKXtcbiAgICAgIHJldHVybiAnQ29uZmlybSBuZXcgcGFzc3dvcmQnO1xuICAgIH0gZWxzZSBpZihwID09PSBuKXtcbiAgICAgIHJldHVybiAnTmV3IHBhc3N3b3JkIGNhbm5vdCB0aGUgc2FtZSBhcyB0aGUgb2xkIHBhc3N3b3JkJztcbiAgICB9IGVsc2UgaWYobiAhPT0gYyl7XG4gICAgICByZXR1cm4gJ0NvbmZpcm0gcGFzc3dvcmQgZG9lcyBub3QgbWF0Y2gnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbiwgdW5zdWJzY3JpYmUgdG8gc2VydmljZXMvc3RyZWFtc1xuICAgKiB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXBkYXRlLXBhc3N3b3JkL3VwZGF0ZS1wYXNzd29yZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBWaWV3IGNvbXBvbmVudCB1c2VkIHRvIGxpbmsgdGhlIGJyZWFkY3J1bWIgd2l0aCB0aGUgbG9jYXRpb25cbiAqIG1vZHVsZSBjb21wb25lbnRzIG9yIHNjZW5hcmlvIGxpc3RcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3JpY2tldCcsXG4gIHRlbXBsYXRlOiAnPG1jLWJyZWFkY3J1bWJzPjwvbWMtYnJlYWRjcnVtYnM+PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBDcmlja2V0Q29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2NyaWNrZXQvY3JpY2tldC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3JpY2tldFNlcnZpY2UgfSBmcm9tICcuLi9jcmlja2V0LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2NlbmFyaW8uaW50ZXJmYWNlJztcblxuLyoqXG4gKiBDb21wb25lbnQgd2hpY2ggbGlzdHMgYWxsIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY2VuYXJpby1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zY2VuYXJpby1saXN0LnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgLyoqXG4gICAqIFVzZXIgb2JqZWN0IG9mIGxvZ2dlZCBpbiB1c2VyLCBpZiBhdmFpbGFibGVcbiAgICovXG4gICAgdXNlcjogVXNlcjtcbiAgLyoqXG4gICogbGlzdCBvZiBhdmFpbGFibGUgc2NlbmFyaW9zXG4gICovXG4gICAgc2NlbmFyaW9zOiBTY2VuYXJpb1tdO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBwcml2YXRlIHNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBDcmlja2V0U2VydmljZSkge1xuXG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnQgYnkgdXNpbmcgdGhlIHNlcnZpY2UgdG8gZmV0Y2ggdGhlXG4gICAqIGxpc3Qgb2Ygc2NlbmFyaW9zXG4gICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgIHRoaXMuc1N1YnNjcmlwdGlvbiA9IHRoaXMuX3NjZW5hcmlvU2VydmljZS5saXN0U2NlbmFyaW9zKClcbiAgICAgICAgLnN1YnNjcmliZSgoc2NlbmFyaW9zKSA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmFyaW9zID0gc2NlbmFyaW9zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICogdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zU3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L3NjZW5hcmlvLWxpc3Qvc2NlbmFyaW8tbGlzdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5pbnRlcmZhY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3B0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL29wdGlvbnMudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgdXNlcjogVXNlcjtcblxuICAvKipcbiAgKiBsaXN0IG9mIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgKi9cbiAgb3B0aW9uczogTWVuZGVscGVkZVNjZW5hcmlvW107XG4gIHNjZW5hcmlvczogTWVuZGVscGVkZVNjZW5hcmlvW10gPSBBcnJheSgpO1xuICBxdWl6ZXM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcbiAgZGlzY292ZXJpZXM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcbiAgcGF0aHdheXM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcblxuICBzOiBudW1iZXI7XG4gIHE6IG51bWJlcjtcbiAgZDogbnVtYmVyO1xuICBwOiBudW1iZXI7XG5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIHRoaXMuc1N1YnNjcmlwdGlvbiA9IHRoaXMuX3NjZW5hcmlvU2VydmljZS5saXN0U2NlbmFyaW9zKClcbiAgICAgICAgLnN1YnNjcmliZSgob3B0aW9ucykgPT4ge1xuICAgICAgICAgIHRoaXMucyA9IDA7XG4gICAgICAgICAgdGhpcy5xID0gMDtcbiAgICAgICAgICB0aGlzLnAgPSAwO1xuICAgICAgICAgIHRoaXMuZCA9IDA7XG4gICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLnNjZW5UeXBlID09PSAnc2NlbmFyaW8nKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2NlbmFyaW9zW3RoaXMuc10gPSBvcHRpb247XG4gICAgICAgICAgICAgIHRoaXMucysrO1xuICAgICAgICAgICAgfSBlbHNlIGlmKG9wdGlvbi5zY2VuVHlwZSA9PT0gJ3F1aXonKXtcbiAgICAgICAgICAgICAgdGhpcy5xdWl6ZXNbdGhpcy5xXSA9IG9wdGlvbjtcbiAgICAgICAgICAgICAgdGhpcy5xKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYob3B0aW9uLnNjZW5UeXBlID09PSAnZGlzY292ZXJ5Jyl7XG4gICAgICAgICAgICAgIHRoaXMuZGlzY292ZXJpZXNbdGhpcy5kXSA9IG9wdGlvbjtcbiAgICAgICAgICAgICAgdGhpcy5kKys7XG4gICAgICAgICAgICB9ZWxzZSBpZihvcHRpb24uc2NlblR5cGUgPT09ICdwYXRod2F5Jyl7XG4gICAgICAgICAgICAgIHRoaXMucGF0aHdheXNbdGhpcy5wXSA9IG9wdGlvbjtcbiAgICAgICAgICAgICAgdGhpcy5wKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zY2VuYXJpb3MgPSB0aGlzLnNjZW5hcmlvcy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgICAgICAgIGlmIChvMS5vcmRPZlNjZW4gPCBvMi5vcmRPZlNjZW4pe1xuICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG8xLm9yZE9mU2NlbiA+IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMucXVpemVzID0gdGhpcy5xdWl6ZXMuc29ydCgobzEsIG8yKSA9PiB7XG4gICAgICAgICAgICBpZiAobzEub3JkT2ZTY2VuIDwgbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvMS5vcmRPZlNjZW4gPiBvMi5vcmRPZlNjZW4pe1xuICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLmRpc2NvdmVyaWVzID0gdGhpcy5kaXNjb3Zlcmllcy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgICAgICAgIGlmIChvMS5vcmRPZlNjZW4gPCBvMi5vcmRPZlNjZW4pe1xuICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG8xLm9yZE9mU2NlbiA+IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMucGF0aHdheXMgPSB0aGlzLnBhdGh3YXlzLnNvcnQoKG8xLCBvMikgPT4ge1xuICAgICAgICAgICAgaWYgKG8xLm9yZE9mU2NlbiA8IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobzEub3JkT2ZTY2VuID4gbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgfSxcbiAgICAoZXJyKT0+e1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICogdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zU3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW5kZWxwZWRlLXNjZW5hcmlvcycsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL21lbmRlbHBlZGUtc2NlbmFyaW9zLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBNZW5kZWxwZWRlU2NlbmFyaW9zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gIHVzZXI6IFVzZXI7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG5cbiAgfVxuICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21lbmRlbHBlZGUtc2NlbmFyaW9zLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW5kZWxwZWRlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbWVuZGVscGVkZS50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgTWVuZGVscGVkZUNvbXBvbmVudHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tZW5kZWxwZWRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFkbWluU3R1ZGVudCwgU3R1ZGVudEZyaWRnZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIFNlcnZpY2Ugd2hpY2ggZGVhbHMgd2l0aCBhbGwgc3R1ZGVudC1yZWxhdGVkIGJhY2tlbmQgY2FsbHNcbiAqIGZyb20gYW4gYWRtaW5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0dWRlbnRTZXJ2aWNlIHtcbiAgXG4gIHByaXZhdGUgX2Jhc2VVUkwgPSAnL2FwaS9hZG1pbic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge31cblxuICAvKipcbiAgICogTGlzdCBvZiBzdHVkZW50cywgY29udGVudCBpcyBkZXBlbmRlbnQgb2YgbG9nZ2VkIGluIHVzZXIgcm9sZVxuICAgKlxuICAgKiBJZiBgYWRtaW5gLCByZXR1cm4gYWxsIHN0dWRlbnRzL3VzZXJzXG4gICAqIFxuICAgKiBJZiBgaW5zdHJgLCByZXR1cm5zIHN0dWRlbnRzIG9mIGNvdXJzZXMgaW5zdHIgdGVhY2hzXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIC0gdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqXG4gICAqIEByZXR1cm5zIHtBZG1pblN0dWRlbnRbXX0gLSBsaXN0IG9mIHN0dWRlbnRzXG4gICAqL1xuICBsaXN0U3R1ZGVudHMoYWRtaW5JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxBZG1pblN0dWRlbnRbXT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8QWRtaW5TdHVkZW50W10+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGV0YWlscyBhYm91dCBhIHN0dWRlbnRcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgZm9yIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB1c2VySWQgZm9yIHN0dWRlbnQgdG8gYmUgbG9va2VkIHVwXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD59IC0gZGV0YWlscyBhYm91dCBzcGVjaWZpZWQgc3R1ZGVudFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ2V0U3R1ZGVudChhZG1pbklkOiBudW1iZXIsIHN0dWRlbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxBZG1pblN0dWRlbnQ+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PEFkbWluU3R1ZGVudD4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50cy8ke3N0dWRlbnRJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHJvbGUgKGFkbWluLCBpbnN0ciwgc3R1ZGVudCkgb2YgYW5vdGhlciBzdHVkZW50L3VzZXJcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgZm9yIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB1c2VySWQgZm9yIHN0dWRlbnQgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByb2xlIC0gbmV3IHJvbGUgdG8gYmUgYXNzaWduZWQ7IG9uZSBvZjogYFwiYWRtaW5cIiwgXCJpbnN0clwiLCBcInN0dWRlbnRcImBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSB0aGUgdXBkYXRlZCBzdHVkZW50XG4gICAqIC0gZXJyb3IgYFZhbHVlIFwicm9sZVwiIGlzIG5vdCBhIHZhbGlkIHJvbGVgIGlmIHJvbGUgaXNuJ3Qgb25lIG9mIGBhZG1pbmAsIGBpbnN0cmAsIGBzdHVkZW50YFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgc2V0U3R1ZGVudFJvbGUoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlciwgcm9sZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIGxldCBib2R5ID0ge3JvbGU6IHJvbGV9O1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdChgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfWAsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHN0dWRlbnQvdXNlclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3R1ZGVudElkIC0gdXNlcklkIG9mIHN0dWRlbnQgdG8gZGVsZXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IC0gc3R1ZGVudCB3aG8gd2FzIGp1c3QgZGVsZXRlZFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZGVsZXRlU3R1ZGVudChhZG1pbklkOiBudW1iZXIsIHN0dWRlbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHMvJHtzdHVkZW50SWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjZW5hcmlvIGZyaWRnZSBmb3IgYSBzdHVkZW50OyBpbmNsdWRlcyBmcmlkZ2UgZGV0YWlscyBzdWNoIGFzXG4gICAqIGZyaWRnZSBzdHJhaW5zIGFuZCBndWVzc2VzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIC0gdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB1c2VySWQgb2Ygc3R1ZGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIC0gc2NlbmFyaW8gSWQgZm9yIGZyaWRnZSB0byBmaW5kXG4gICAqXG4gICAqIEByZXR1cm5ze09ic2VydmFibGU8U3R1ZGVudEZyaWRnZT59IC0gdGhlIHN0dWRlbnQncyBmcmlkZ2VcbiAgICogLSBhbiBlbXB0eSBmcmlkZ2UgaWYgdGhlIGZyaWRnZSBkb2Vzbid0IGV4aXN0IHlldFxuICAgKiAtIG9yIG90aGVyIHNlcnZlciBlcnJvclxuICAgKi9cbiAgZ2V0RnJpZGdlKGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTdHVkZW50RnJpZGdlPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxTdHVkZW50RnJpZGdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfS8ke3NjZW5JZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2NlbmFyaW8gYWNjZXNzIGZvciBhIHN0dWRlbnQ7IHRoaXMgZGVsZXRlcyB0aGUgZXhpc3RpbmdcbiAgICogZnJpZGdlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIC0gdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB1c2VySWQgb2Ygc3R1ZGVudFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwZGF0ZWRTdGF0ZSAtIHRydWUgdG8gZ3JhbnQgYWNjZXNzLCBmYWxzZSB0byByZXZva2UgYWNjZXNzXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD59IHVwZGF0ZWQgc3R1ZGVudFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ3JhbnRTY2VuQWNjZXNzKGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCB1cGRhdGVkU3RhdGU6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0PEFkbWluU3R1ZGVudD4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50cy8ke3N0dWRlbnRJZH0vJHtzY2VuSWR9YCwge2FjY2VzczogdXBkYXRlZFN0YXRlfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYkFjdGl2ZU1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbi8qKlxuICogVGhpcyBpcyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgd2hlbiB1c2VyIHdhbnRzIHRvIGRlbGV0ZVxuICogc29tZXRoaW5nIHNlbnNpdGl2ZSwgaS5lLiBhbm90aGVyIHVzZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29uZmlybS1kZWxldGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY29uZmlybS1kZWxldGUtZGlhbG9nLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnR7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkaWFsb2cgd2luZG93XG4gICAqL1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmcgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nXG5cbiAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCl7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgYW4gZXJyb3Igb2JqZWN0IGFuZCBsb29rcyBmb3JcbiAqIHRoZSBlcnJvciBtZXNzYWdlOyBpdCBjaGVja3Mgc2V2ZXJhbCBwcm9wZXJ0aWVzIGJlY2F1c2VcbiAqIGVycm9ycyBhcmUgbm90IGFsd2F5cyB1bmlmb3JtXG4gKlxuICogQHBhcmFtIHthbnl9IGVycm9yIC0gZXJyb3Igb2JqZWN0IHRvIGZpbmQgZXJyb3IgbWVzc2FnZSBmcm9tXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gdGhlIGVycm9yIG1lc3NhZ2Ugd2l0aGluIHRoZSBvYmplY3Qgb3JcbiAqIGBcIlVua25vd24gZXJyb3JcImAgaWYgdGhlIGVycm9yIG1lc3NhZ2UgY2FuJ3QgYmUgZm91bmRcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWRFcnJvck1lc3NhZ2UgPSBmdW5jdGlvbihlcnJvcjogYW55KTogc3RyaW5nIHtcbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgbGV0IGVycm9yTWVzc2FnZSA9ICdVbmtub3duIGVycm9yJztcbiAgaWYoZXJyb3IuZXJyb3IgJiYgZXJyb3IuZXJyb3IubWVzc2FnZSl7XG4gICByZXR1cm4gZXJyb3IuZXJyb3IubWVzc2FnZVxuICB9IGVsc2UgaWYoZXJyb3IuZXJyb3IgJiYgZXJyb3IuZXJyb3IudGV4dCl7XG4gICByZXR1cm4gZXJyb3IuZXJyb3IudGV4dFxuICB9IGVsc2UgaWYgKGVycm9yICYmIGVycm9yLm1lc3NhZ2Upe1xuICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gIH0gZWxzZSBpZihlcnJvcil7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG4gIHJldHVybiBlcnJvck1lc3NhZ2U7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvcmVhZC1lcnJvci50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgTWNCcmVhZGNydW1ic01vZHVsZSB9IGZyb20gJ25neC1icmVhZGNydW1icyc7XG5cbmltcG9ydCB7IENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQZXJzb25OYW1lUGlwZSB9IGZyb20gJy4uL3BpcGVzL3BlcnNvbi1uYW1lLnBpcGUnO1xuaW1wb3J0IHsgUGVvcGxlTGlzdE5hbWVzUGlwZSB9IGZyb20gJy4uL3BpcGVzL3Blb3BsZS1saXN0LW5hbWVzLnBpcGUnO1xuaW1wb3J0IHsgUGhhZ2VQYXJlbnRzUGlwZSB9IGZyb20gJy4uL3BpcGVzL3BoYWdlLXBhcmVudHMucGlwZSc7XG5cbmltcG9ydCB7IEZvcm1FcnJvcnNNb2R1bGUgfSBmcm9tICcuL2Zvcm0tZXJyb3JzL2Zvcm0tZXJyb3JzLm1vZHVsZSc7XG5pbXBvcnQgeyBTZWxlY3REcm9wTW9kdWxlIH0gZnJvbSAnLi9zZWxlY3QtZHJvcC9zZWxlY3QtZHJvcC5tb2R1bGUnO1xuLy9pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3JzIH0gZnJvbSAnLi9jdXN0b20tdmFsaWRhdG9ycyc7XG4vKipcbiAqIFRoZSBTaGFyZWQgTW9kdWxlIGNvbnRhaW5zIG1vZHVsZXMsIHBpcGVzLCBhbmQgY29tcG9uZW50c1xuICogdGhhdCBhcmUgbmVlZGVkIGFjcm9zcyB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBTYXZlcyB0aW1lIGJ5IGltcG9ydGluZyB0aGlzIG1vZHVsZSByYXRoZXIgdGhhbiB0aGVcbiAqIHBpcGVzL21vZHVsZXMvY29tcG9uZW50cyBpbmRpdmlkdWFsbHlcbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICBGb3JtRXJyb3JzTW9kdWxlLFxuICAgICAgU2VsZWN0RHJvcE1vZHVsZS5mb3JSb290KCksXG4gICAgICBOZ2JNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgTWNCcmVhZGNydW1ic01vZHVsZS5mb3JSb290KClcbiAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQZXJzb25OYW1lUGlwZSxcbiAgICBQZW9wbGVMaXN0TmFtZXNQaXBlLFxuICAgIFBoYWdlUGFyZW50c1BpcGUsXG4gICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgIEZvcm1FcnJvcnNNb2R1bGUsXG4gICAgICBOZ2JNb2R1bGUsXG4gICAgICBTZWxlY3REcm9wTW9kdWxlLFxuICAgICAgTWNCcmVhZGNydW1ic01vZHVsZSxcbiAgICAgIFBlcnNvbk5hbWVQaXBlLFxuICAgICAgUGVvcGxlTGlzdE5hbWVzUGlwZSxcbiAgICAgIFBoYWdlUGFyZW50c1BpcGUsXG4gICAgICBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpe1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2Jvb3RzdHJhcC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1jQnJlYWRjcnVtYnNDb25maWcgfSBmcm9tICduZ3gtYnJlYWRjcnVtYnMnO1xuXG5pbXBvcnQgeyBBcHBSb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VkSW5HdWFyZCB9IGZyb20gJy4vYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3JpY2tldFNlcnZpY2UgfSBmcm9tICcuL2NyaWNrZXQvY3JpY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuL2FkbWluL2NvdXJzZS9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb1Jlc29sdmVyIH0gZnJvbSAnLi9jcmlja2V0L3NjZW5hcmlvLnJlc29sdmVyJztcbmltcG9ydCB7IE1lbmRlbHBlZGVTY2VuYXJpb1Jlc29sdmVyIH0gZnJvbSAnLi9tZW5kZWxwZWRlL21lbmRlbHBlZGUtc2NlbmFyaW8ucmVzb2x2ZXInXG4vL2ltcG9ydCB7IFNlbGVjdFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZWxlY3Quc2VydmljZSc7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQWRtaW5Nb2R1bGUgfSBmcm9tICcuL2FkbWluL2FkbWluLm1vZHVsZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IEhlbHBNb2R1bGUgfSBmcm9tICcuL2hlbHAvaGVscC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZmlsZU1vZHVsZSB9IGZyb20gJy4vcHJvZmlsZS9wcm9maWxlLm1vZHVsZSc7XG5pbXBvcnQgeyBDcmlja2V0TW9kdWxlIH0gZnJvbSAnLi9jcmlja2V0L2NyaWNrZXQubW9kdWxlJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdkNvbXBvbmVudCB9IGZyb20gJy4vbmF2L25hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE1lbmRlbHBlZGVNb2R1bGUgfSBmcm9tICcuL21lbmRlbHBlZGUvbWVuZGVscGVkZS5tb2R1bGUnXG5cbi8qKlxuICogVGhlIG1haW4gYm9vdHN0cmFwcGVkIG1vZHVsZVxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgIEhlbHBNb2R1bGUsXG4gICAgICBBZG1pbk1vZHVsZSxcbiAgICAgIFByb2ZpbGVNb2R1bGUsXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uTW9kdWxlLFxuICAgICAgQ3JpY2tldE1vZHVsZSxcbiAgICAgIE1lbmRlbHBlZGVNb2R1bGUsXG4gICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChBcHBSb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBOYXZDb21wb25lbnQsXG4gICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgUGFnZU5vdEZvdW5kQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgIExvZ2dlZEluR3VhcmQsXG4gICAgICBDcmlja2V0U2VydmljZSxcbiAgICAgIENvdXJzZVNlcnZpY2UsXG4gICAgICBTY2VuYXJpb1Jlc29sdmVyLFxuICAgICAgTWVuZGVscGVkZVNjZW5hcmlvUmVzb2x2ZXIsXG4gICAgICAvL1NlbGVjdFNlcnZpY2VcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbmNvbnN0cnVjdG9yKGJyZWFkY3J1bWJzQ29uZmlnOiBNY0JyZWFkY3J1bWJzQ29uZmlnKSB7XG5cbiAgICBicmVhZGNydW1ic0NvbmZpZy5wb3N0UHJvY2VzcyA9ICh4KSA9PiB7XG5cbiAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBmaXJzdCBicmVhZGNydW1iIGFsd2F5cyBwb2ludHMgdG8gaG9tZVxuXG4gICAgICBsZXQgeSA9IHg7XG5cbiAgICAgIGlmKHgubGVuZ3RoICYmIHhbMF0udGV4dCAhPT0gJ0hvbWUnKSB7XG4gICAgICAgIHkgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0hvbWUnLFxuICAgICAgICAgICAgcGF0aDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF0uY29uY2F0KHgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geTtcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXBwUm91dGVzOiBSb3V0ZXMgPVxuICAgICAgW3tcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuICAgICAgfSxcbiAgICAgICB7XG4gICAgICAgIHBhdGg6ICcqKicsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50XG4gICAgICB9XTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FwcC5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODYwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2hvbWUvaG9tZS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaG9tZS9ob21lLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gODYyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODYzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBGb3JtYXQgYSB1c2VyJ3Mgb3Igc3R1ZGVudHMgZnJpc3QgYW5kIGxhc3QgbmFtZSBhcyBcImZpcnN0TmFtZSBsYXN0TmFtZVwiXG4gKiAtIFdoZW4gcmV2ZXJzZSBpcyB0cnVlLCBmb3JtYXQgYXMgXCJsYXN0TmFtZSwgZmlyc3ROYW1lXCJcbiAqIC0gQWJsZSB0byBoYW5kbGUgd2hlbiBvbmx5IGZpcnN0IG9yIGxhc3QgbmFtZSBpcyBzZXRcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBwZXJzb24gfCBwZXJzb25OYW1lOmlzUmV2ZXJzZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPntmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9PC9jb2RlPiBiZWNvbWVzIFwiTWlja2V5IE1vdXNlXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlJldmVyc2Ugb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPntmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9PC9jb2RlPiBiZWNvbWVzIFwiTW91c2UsIE1pY2tleVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5GaXJzdCBuYW1lIG9ubHkgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e2ZpcnN0TmFtZTogXCJNaWNrZXlcIiwgbGFzdE5hbWU6IHVuZGVmaW5lZH08L2NvZGU+IGJlY29tZXMgXCJNaWNrZXlcIlxuKi9cbkBQaXBlKHtuYW1lOiAncGVyc29uTmFtZSd9KVxuZXhwb3J0IGNsYXNzIFBlcnNvbk5hbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBlcnNvbjogYW55LCByZXZlcnNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBsZXQgZk5hbWU6IHN0cmluZyA9IHBlcnNvbi5maXJzdE5hbWUgfHwgJyc7XG4gICAgbGV0IGxOYW1lOiBzdHJpbmcgPSBwZXJzb24ubGFzdE5hbWUgfHwgJyc7XG4gIGlmKHJldmVyc2Upe1xuICAgIHJldHVybiBsTmFtZSArIChmTmFtZSE9PScnICYmIGxOYW1lICE9PSAnJyA/ICcsICcgOiAnJykrZk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJyAnIDogJycpK2xOYW1lO1xuICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BpcGVzL3BlcnNvbi1uYW1lLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IGEgbGlzdCBvZiB1c2VyJ3Mgb3Igc3R1ZGVudHMgZnJpc3QgYW5kIGxhc3QgbmFtZSBhcyBcImZpcnN0TmFtZSBsYXN0TmFtZVwiXG4gKiAtIFdoZW4gcmV2ZXJzZSBpcyB0cnVlLCBmb3JtYXQgYXMgXCJsYXN0TmFtZSwgZmlyc3ROYW1lXCJcbiAqIC0gQWJsZSB0byBoYW5kbGUgd2hlbiBvbmx5IGZpcnN0IG9yIGxhc3QgbmFtZSBpcyBzZXRcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBwZW9wbGVMaXN0IHwgcGVvcGxlTGlzdE5hbWVzOmlzUmV2ZXJzZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlt7Zmlyc3ROYW1lOiBcIk1pY2tleVwiLCBsYXN0TmFtZTogXCJNb3VzZVwifSwge2ZpcnN0TmFtZTogXCJEb25hbGRcIiwgbGFzdE5hbWU6IFwiRHVja1wifV08L2NvZGU+IGJlY29tZXMgXCJNaWNrZXkgTW91c2UsIERvbmFsZCBEdWNrXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlJldmVyc2Ugb3VwdXQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+W3tmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogXCJEdWNrXCJ9XTwvY29kZT4gYmVjb21lcyBcIk1vdXNlLCBNaWNrZXk7IER1Y2ssIERvbmFsZFwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NaXNzaW5nIG5hbWVzIDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlt7Zmlyc3ROYW1lOiB1bmRlZmluZWQsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogdW5kZWZpbmVkfV08L2NvZGU+IGJlY29tZXMgXCJNb3VzZSwgRG9uYWxkXCJcbiAqL1xuQFBpcGUoe25hbWU6ICdwZW9wbGVMaXN0TmFtZXMnfSlcbmV4cG9ydCBjbGFzcyBQZW9wbGVMaXN0TmFtZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBlcnNvbkxpc3Q6IGFueVtdLCByZXZlcnNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgZm9yKGxldCBwZXJzb24gb2YgcGVyc29uTGlzdCl7XG4gICAgICBsZXQgZk5hbWU6IHN0cmluZyA9IHBlcnNvbi5maXJzdE5hbWUgfHwgJyc7XG4gICAgICBsZXQgbE5hbWU6IHN0cmluZyA9IHBlcnNvbi5sYXN0TmFtZSB8fCAnJztcbiAgICAgIGlmKG91dCAhPT0gJycgJiYgKGZOYW1lICE9PSAnJyB8fCBsTmFtZSAhPT0gJycpKXtcbiAgICAgICAgb3V0ICs9IChyZXZlcnNlID8gJzsgJyA6ICcsICcpO1xuICAgICAgfVxuICAgIGlmKHJldmVyc2Upe1xuICAgICAgb3V0ICs9IGxOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJywgJyA6ICcnKStmTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgb3V0ICs9IGZOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJyAnIDogJycpK2xOYW1lO1xuICAgICAgfVxuICAgIH0vLyBlbmQgZm9yXG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9wZW9wbGUtbGlzdC1uYW1lcy5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGhhZ2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BoYWdlLmludGVyZmFjZSc7XG5cbi8qKlxuICogRm9ybWF0IHRoZSB0ZXh0dWFsIHByZXNlbnRhdGlvbiBvZiBhIHBoYWdlIHN0cmFpbidzIHBhcmVudHNcbiAqIChpZiBhbnkpIHdoZW4gdmlld2luZyB0aGUgZGlhbG9nIGJveCBmb3IgYSBwaGFnZVxuICpcbiAqIFRoZSBgbnVtUGFyZW50c2AgdmFyaWFibGUgaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgb25lIG9mIHRoZVxuICogcGFyZW50cyBoYWQgYmVlbiBkZWxldGVkIGZyb20gdGhlIGRhdGFiYXNlIHdoZW4gYHBhcmVudHMubGVuZ3RoICE9IG51bVBhcmVudHNgXG4gKlxuICogTm90ZTogdGhlIHBoYWdlIGBzdHJhaW5OdW1gIGFyZSAwLWJhc2VkIGJ1dCBVSSBpcyAxLWJhc2VkIHNvXG4gKiB0aGUgc3RyYWluIG51bWJlciBpcyBhZGp1c3RlZFxuICpcbiAqICoqVXNhZ2U6KiogYHt7cGFyZW50c0xpc3QgfCBwaGFnZVBhcmVudHM6bnVtUGFyZW50c319YFxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk9uZSBwYXJlbnQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e3BhcmVudHM6IFt7aWQ6ICdpZDEnLCBzdHJhaW5OdW06ICc0J31dLCBudW1QYXJlbnRzOiAxfTwvY29kZT4gYmVjb21lcyBcIlN0cmFpbiA1XCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlR3byBwYXJlbnRzOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e3BhcmVudHM6IFt7aWQ6ICdpZDEnLCBzdHJhaW5OdW06IDR9LCB7aWQ6ICdpZDInLCBzdHJhaW5OdW06IDEwfV0sIG51bVBhcmVudHM6IDJ9PC9jb2RlPiBiZWNvbWVzIFwiU3RyYWlucyA1IGFuZCAxMVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ud28gcGFyZW50cyBidXQgbWlzc2luZyBvbmU6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT57cGFyZW50czogW3tpZDogJ2lkMycsIHN0cmFpbk51bTogOH1dLCBudW1QYXJlbnRzOiAyfTwvY29kZT4gYmVjb21lcyBcIlN0cmFpbnMgOSBhbmQgP1wiXG4gKi9cbkBQaXBlKHtuYW1lOiAncGhhZ2VQYXJlbnRzJ30pXG5leHBvcnQgY2xhc3MgUGhhZ2VQYXJlbnRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShwYXJlbnRzOiBQaGFnZVtdLCBudW1QYXJlbnRzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBvdXQgPSAnJztcbiAgICBpZihudW1QYXJlbnRzID09PSB1bmRlZmluZWQpe1xuICAgICAgbnVtUGFyZW50cyA9IHBhcmVudHMubGVuZ3RoXG4gICAgfVxuICAgIGlmKHBhcmVudHMubGVuZ3RoID09PSAwKXtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGxldCBzb3J0ZWQ6IFBoYWdlW10gPSBwYXJlbnRzLnNvcnQoKG4xLCBuMik9PntyZXR1cm4gbjEuc3RyYWluTnVtIC0gbjIuc3RyYWluTnVtfSk7XG4gICAgbGV0IG51bXMgPSBzb3J0ZWQubWFwKChwaGFnZSk9PntyZXR1cm4gKHBoYWdlLnN0cmFpbk51bSsxKS50b1N0cmluZygpfSk7XG5cbiAgICBpZihzb3J0ZWQubGVuZ3RoID09PSAxICYmIG51bVBhcmVudHMgPT09IDEpe1xuICAgICAgb3V0ID0gJ1N0cmFpbiAnICsgbnVtc1swXTtcbiAgICB9IGVsc2UgaWYoc29ydGVkLmxlbmd0aCA9PT0gMSAmJiBudW1QYXJlbnRzID09PSAyKXtcbiAgICAgIG91dCA9ICdTdHJhaW5zICcgKyBudW1zWzBdICsgJyBhbmQgPyc7XG4gICAgfSBlbHNlIGlmKHNvcnRlZC5sZW5ndGggPT09IDIgJiYgbnVtUGFyZW50cyA9PT0gMil7XG4gICAgICBvdXQgPSAnU3RyYWlucyAnICsgbnVtc1swXSArICcgYW5kICcgKyBudW1zWzFdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9waGFnZS1wYXJlbnRzLnBpcGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUmVxdWlyZWRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2VtYWlsLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybVBhc3N3b3JkRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50Jztcbi8qKlxuICogVGhlIEZvcm0gRXJyb3JzIE1vZHVsZSBjb250YWlucyB0ZW1wbGF0ZXMgZm9yIFJlYWN0aXZlRm9ybVxuICogaW5wdXQgZXJyb3JzIHRoYXQgYXJlIG5lZWRlZCBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogU2F2ZXMgdGltZSBmcm9tIGhhdmluZyB0byBjcmVhdGUgdGhlIHNhbWUgZXJyb3IgbWVzc2FnZXMgYWNyb3NzXG4gKiBudW1lcm91cyBwYWdlcyBhbmQga2VlcHMgdGhlIGVycm9yIG1lc3NhZ2VzIGNvbnNpc3RhbnRcbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZXF1aXJlZEVycm9yQ29tcG9uZW50LFxuICAgIEVtYWlsRXJyb3JDb21wb25lbnQsXG4gICAgUGFzc3dvcmRFcnJvckNvbXBvbmVudCxcbiAgICBDb25maXJtUGFzc3dvcmRFcnJvckNvbXBvbmVudFxuICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIFJlcXVpcmVkRXJyb3JDb21wb25lbnQsXG4gICAgICBFbWFpbEVycm9yQ29tcG9uZW50LFxuICAgICAgUGFzc3dvcmRFcnJvckNvbXBvbmVudCxcbiAgICAgIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUVycm9yc01vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZm9ybS1lcnJvcnMubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JlcXVpcmVkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9yZXF1aXJlZC1lcnJvci50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXF1aXJlZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZmllbGQ6IEFic3RyYWN0Q29udHJvbDtcbiAgQElucHV0KCkgdGV4dExhYmVsOiBzdHJpbmc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODY5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBIYW5kbGUgZW1haWwgcmVsYXRlZCBlcnJvciBtZXNzYWdlcyBzdWNoIGFzXG4gKiAtIGlzIHJlcXVpcmVkOiBgRW1haWwgaXMgcmVxdWlyZWRgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZW1haWwtZXJyb3InLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2VtYWlsLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEVtYWlsRXJyb3JDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGlucHV0IGVtYWlsIGZyb20gZm9ybTsgaW5jbHVkZXMgZXJyb3JzIGlmIGFwcGxpY2FibGVcbiAgICovXG4gIEBJbnB1dCgpIGVtYWlsOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODcxXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwYXNzd29yZC1lcnJvcicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRFcnJvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODczXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb25maXJtLXBhc3N3b3JkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uZmlybVBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODc1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlbGVjdERyb3BTZXJ2aWNlLCBzZWxlY3REcm9wU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NlbGVjdC1kcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0RHJvcENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWRyb3AuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3QtZHJvcC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0LWRyb3AuY29tcG9uZW50JztcblxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbe3Byb3ZpZGU6IFNlbGVjdERyb3BTZXJ2aWNlLCB1c2VGYWN0b3J5OiBzZWxlY3REcm9wU2VydmljZUZhY3Rvcnl9XTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2VsZWN0RHJvcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWxlY3REcm9wQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJze1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2VsZWN0RHJvcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3AubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFkbWluUm91dGVzIH0gZnJvbSAnLi9hZG1pbi5yb3V0ZXMnO1xuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuaW1wb3J0IHsgQWRtaW5HdWFyZCB9IGZyb20gJy4vYWRtaW4uZ3VhcmQuc2VydmljZSc7XG5cbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zdHVkZW50L3N0dWRlbnQuc2VydmljZSc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBhZG1pbiBmdW5jdGlvbnMgaGF2aW5nIHRvIGRlYWwgd2l0aCBzdHVkZW50cyBhbmQgY291cnNlcyB0aGF0IHNob3VsZCBub3QgYmUgYWNjZXNzZWQgYnkgYSByZWd1bGFyIHVzZXJcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQWRtaW5Sb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIEFkbWluSG9tZUNvbXBvbmVudCxcbiAgICBOb3RBdXRoQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFkbWluR3VhcmQsXG4gICAgU3R1ZGVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbk1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFkbWluR3VhcmQgfSBmcm9tICcuL2FkbWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VkSW5HdWFyZCB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEFkbWluUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnYWRtaW4nLFxuICAgIGRhdGE6IHtcbiAgICAgIGJyZWFkY3J1bWJzOiAnQWRtaW4nXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTpbTG9nZ2VkSW5HdWFyZF0sXG4gICAgY2FuQWN0aXZhdGVDaGlsZDogW0FkbWluR3VhcmRdLFxuICAgIGNvbXBvbmVudDogQWRtaW5Db21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2NvdXJzZXMnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2NvdXJzZS9jb3Vyc2UubW9kdWxlJylbJ0NvdXJzZU1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ0NvdXJzZXMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdzdHVkZW50cycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7ICAocmVxdWlyZSBhcyBhbnkpLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmU6IGFueSkgeyAgICByZXNvbHZlKHJlcXVpcmUoJy4vc3R1ZGVudC9zdHVkZW50Lm1vZHVsZScpWydTdHVkZW50TW9kdWxlJ10pOyAgfSwgZnVuY3Rpb24oZTogYW55KSB7ICAgIHJlamVjdCh7IGxvYWRDaHVua0Vycm9yOiB0cnVlLCBkZXRhaWxzOiBlIH0pOyAgfSk7fSkgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnU3R1ZGVudHMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEFkbWluSG9tZUNvbXBvbmVudFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhZG1pbi9ub3QtYXV0aCcsXG4gICAgY29tcG9uZW50OiBOb3RBdXRoQ29tcG9uZW50XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2FkbWluLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODc5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGgudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODgxXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJ1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRlcyB9IGZyb20gJy4vYXV0aGVudGljYXRpb24ucm91dGVzJztcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSB3aGljaCBkZWFscyB3aXRoIGFueXRoaW5nIHJlbGF0ZWQgdG8gYXV0aGVudGljYXRpbmcgdXNlcnMsXG4gKiBpLmUuIGxvZ2dpbmcgaW4vb3V0IHVzZXJzIGFuZCByZXNldHRpbmcgZm9yZ290dGVuIHBhc3N3b3Jkc1xuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQXV0aGVudGljYXRpb25Sb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2lnbmluQ29tcG9uZW50LFxuICAgICAgICBTaWdudXBDb21wb25lbnQsXG4gICAgICBTaWdub3V0Q29tcG9uZW50LFxuICAgICAgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQsXG4gICAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbk1vZHVsZSB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25Sb3V0ZXM6IFJvdXRlcyA9IFt7XG4gICAgcGF0aDogJ2F1dGhlbnRpY2F0aW9uJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICB7IHBhdGg6ICdzaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdzaWdub3V0JywgY29tcG9uZW50OiBTaWdub3V0Q29tcG9uZW50IH0sXG4gICAgICB7cGF0aDogJ2ZvcmdldC1wYXNzd29yZCcsIGNvbXBvbmVudDogRm9yZ2V0UGFzc3dvcmRDb21wb25lbnR9LFxuICAgICAge3BhdGg6ICdyZXNldC1wYXNzd29yZC86dG9rZW4nLCBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRDb21wb25lbnR9XG4gICAgXVxufV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODg3XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBIZWxwUm91dGVzIH0gZnJvbSAnLi9oZWxwLnJvdXRlcyc7XG5pbXBvcnQgeyBIZWxwQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWxwQ3JpY2tldENvbXBvbmVudCB9IGZyb20gJy4vaGVscC1jcmlja2V0L2hlbHAtY3JpY2tldC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChIZWxwUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBIZWxwQ29tcG9uZW50LFxuICAgIEhlbHBDcmlja2V0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVscE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaGVscC9oZWxwLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIZWxwQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWxwQ3JpY2tldENvbXBvbmVudCB9IGZyb20gJy4vaGVscC1jcmlja2V0L2hlbHAtY3JpY2tldC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgSGVscFJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ2hlbHAnLFxuICAgIGNvbXBvbmVudDogSGVscENvbXBvbmVudCxcbiAgICBkYXRhOiB7YnJlYWRjcnVtYnM6ICdIZWxwJ30sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtwYXRoOiAnY3JpY2tldCcsXG4gICAgICBjb21wb25lbnQ6IEhlbHBDcmlja2V0Q29tcG9uZW50LFxuICAgICAgZGF0YToge2JyZWFkY3J1bWJzOiAnQ3JpY2tldCd9XG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaGVscC9oZWxwLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaGVscC9oZWxwLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaGVscC9oZWxwLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2hlbHAvaGVscC5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaGVscC9oZWxwLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gODkxXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaGVscC9oZWxwLWNyaWNrZXQvaGVscC1jcmlja2V0LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaGVscC9oZWxwLWNyaWNrZXQvaGVscC1jcmlja2V0LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgUHJvZmlsZVJvdXRlcyB9IGZyb20gJy4vcHJvZmlsZS5yb3V0ZXMnO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoUHJvZmlsZVJvdXRlcylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVXNlclByb2ZpbGVDb21wb25lbnQsXG4gICAgVXBkYXRlUGFzc3dvcmRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvZmlsZVNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvZ2dlZEluR3VhcmQgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdwcm9maWxlJyxcbiAgICBjYW5BY3RpdmF0ZTogW0xvZ2dlZEluR3VhcmRdLFxuICAgIGNhbkFjdGl2YXRlQ2hpbGQ6IFtMb2dnZWRJbkd1YXJkXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBwYXRoOiAndXBkYXRlLXBhc3N3b3JkJyxcbiAgICAgIGNvbXBvbmVudDogVXBkYXRlUGFzc3dvcmRDb21wb25lbnQsXG4gICAgICAgZGF0YToge1xuICAgICAgICAgYnJlYWRjcnVtYnM6ICdVcGRhdGUgcGFzc3dvcmQnXG4gICAgICAgfVxuICAgICAgfSxcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogVXNlclByb2ZpbGVDb21wb25lbnRcbiAgfVxuICAgIF0sXG4gICAgZGF0YToge1xuICAgICAgYnJlYWRjcnVtYnM6ICdQcm9maWxlJ1xuICAgIH1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OTVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODk2XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDcmlja2V0Um91dGVzIH0gZnJvbSAnLi9jcmlja2V0LnJvdXRlcyc7XG5pbXBvcnQgeyBDcmlja2V0Q29tcG9uZW50IH0gZnJvbSAnLi9jcmlja2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2VuYXJpb0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3NjZW5hcmlvLWxpc3Qvc2NlbmFyaW8tbGlzdC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSBmb3Igc2NlbmFyaW8tcmVsYXRlZCBjb21wb25lbnRzIGFuZCBtb2R1bGVzXG4gKlxuICogTWFpbmx5IHVzZWQgdG8gYmUgYWJsZSB0byBhc3luYyBsb2FkIHRoZSBzcGVjaWZpYyBzY2VuYXJpb3MgdmlhIHRoZSB7QGxpbmsgTG9jYXRpb25Nb2R1bGV9XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKENyaWNrZXRSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENyaWNrZXRDb21wb25lbnQsXG4gICAgU2NlbmFyaW9MaXN0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JpY2tldE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ3JpY2tldENvbXBvbmVudCB9IGZyb20gJy4vY3JpY2tldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2NlbmFyaW9SZXNvbHZlciB9IGZyb20gJy4vc2NlbmFyaW8ucmVzb2x2ZXInO1xuaW1wb3J0IHsgU2NlbmFyaW9MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zY2VuYXJpby1saXN0L3NjZW5hcmlvLWxpc3QuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENyaWNrZXRSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdjcmlja2V0JyxcbiAgICBkYXRhOiB7XG4gICAgICBicmVhZGNydW1iczogJ0NyaWNrZXQnXG4gICAgfSxcbiAgICBjb21wb25lbnQ6IENyaWNrZXRDb21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJzpzY2VuSWQnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2xvY2F0aW9uL2xvY2F0aW9uLm1vZHVsZScpWydMb2NhdGlvbk1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBzY2VuYXJpbzogU2NlbmFyaW9SZXNvbHZlclxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnM6ICd7eyBzY2VuYXJpby5sYWJlbCB9fSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogU2NlbmFyaW9MaXN0Q29tcG9uZW50XG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0LnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvY3JpY2tldC9zY2VuYXJpby1saXN0L3NjZW5hcmlvLWxpc3QudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jcmlja2V0L3NjZW5hcmlvLWxpc3Qvc2NlbmFyaW8tbGlzdC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OTlcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50O1xuICogTGlua3MgdGhlIG5hdiBiYXIgdG8gdGhlIGNvbnRlbnQgbmVlZGVkIGJhc2VkIG9uIHRoZSB1cmxcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjcmlja2V0LWFwcCcsXG4gICAgdGVtcGxhdGU6ICc8Y3JpY2tldC1uYXY+PC9jcmlja2V0LW5hdj48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+J1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIGJhciBhdCB0aGUgdG9wIG9mIHRoZSBzaXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY3JpY2tldC1uYXYnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL25hdi50ZW1wbGF0ZS5odG1sJyksXG4gICAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9uYXYuc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogVXNlciBvYmplY3QgdXNlZCB0byBkZXRlcm1pbmUgaWYgcHJvZmlsZSBsaW5rIHNob3VsZCBiZVxuICAgKiBpbmNsdWRlZCBpbiB0aGUgbmF2IGJhclxuICAgKi9cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHN0cmVhbSBmb3IgdGhlIGF1dGhldG5pY2F0aW9uIHNlcnZpY2VcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuICAgIH1cblxuICAvKipcbiAgICogSW5pdGlhdGUgdGhlIGNvbXBvbmVudCBieSBnZXR0aW5nIHRoZSBjdXJyZW50IHVzZXJcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyJFxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIHRoaXMudXNlciA9IHJlc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3RvcnkgdGhlIGNvbXBvbmVudCBieSB1bnN1YnNjcmliaW5nLCBpZiBuZWNlc3NhcnlcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbmF2L25hdi5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL25hdi9uYXYudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9uYXYvbmF2LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL25hdi9uYXYuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL25hdi9uYXYuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MDNcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbmRlbHBlZGVGcmlkZ2VDb21wb25lbnQgfSBmcm9tICcuL3NjZW5hcmlvcy9tcGVkZS1mcmlkZ2UvbXBlZGUtZnJpZGdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlTGFicm9vbUNvbXBvbmVudCB9IGZyb20gJy4vc2NlbmFyaW9zL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvc0NvbXBvbmVudCB9IGZyb20gJy4vc2NlbmFyaW9zL21lbmRlbHBlZGUtc2NlbmFyaW9zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi9zY2VuYXJpb3MvbWVuZGVscGVkZS1zY2VuYXJpb3Muc2VydmljZSdcbmltcG9ydCB7IE1lbmRlbHBlZGVSb3V0ZXMgfSBmcm9tICcuL21lbmRlbHBlZGUucm91dGVzJztcbmltcG9ydCB7IE1lbmRlbHBlZGVDb21wb25lbnQgfSBmcm9tICcuL21lbmRlbHBlZGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuLyoqXG4gKiBNb2R1bGUgZm9yIE1lbmRlbHBlZGUtcmVsYXRlZCBjb21wb25lbnRzIGFuZCBtb2R1bGVzXG4gKlxuICogXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKE1lbmRlbHBlZGVSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE9wdGlvbnNDb21wb25lbnQsXG4gICAgTWVuZGVscGVkZUZyaWRnZUNvbXBvbmVudCxcbiAgICBNZW5kZWxwZWRlTGFicm9vbUNvbXBvbmVudCxcbiAgICBNZW5kZWxwZWRlU2NlbmFyaW9zQ29tcG9uZW50LFxuICAgIE1lbmRlbHBlZGVDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1lbmRlbHBlZGVNb2R1bGUge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tZW5kZWxwZWRlLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbWVuZGVscGVkZS9vcHRpb25zL29wdGlvbnMudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL29wdGlvbnMvb3B0aW9ucy50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MDVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nYk1vZGFsLCBNb2RhbERpc21pc3NSZWFzb25zIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vbWVuZGVscGVkZS1zY2VuYXJpb3Muc2VydmljZSc7XG5cbmltcG9ydCB7IE1lbmRlbHBlZGVGcmlkZ2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL21lbmRlbHBlZGUtZnJpZGdlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlUGVkZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvbWVuZGVscGVkZS1wZWRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW5kZWxwZWRlLWZyaWRnZScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL21wZWRlLWZyaWRnZS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbXBlZGUtZnJpZGdlLnN0eWxlLmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBNZW5kZWxwZWRlRnJpZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG5cbiAgdXNlcjogVXNlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBNZW5kZWxwZWRlU2NlbmFyaW9TZXJ2aWNlLFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTmdiTW9kYWwpIHtcbiAgICB0aGlzLm1heFNoZWxmID0gMzI7XG4gICAgdGhpcy5zcG90cyA9IDg7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIH1cbiAgLyoqXG4gICAqIEdldHMgQ1NTIGNsYXNzZXMgXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGNsYXNzZXMgd2hcbiAgICovXG5cbiAgZ2V0TWVuZGVscGVkZShwaGVub3R5cGU6IHN0cmluZ1tdKTogT2JqZWN0e1xuICAgIGNvbnNvbGUubG9nKHBoZW5vdHlwZSlcblxuICAgIC8vIEZvciBsb2NhdGlvblxuICAgIGxldCBsb2M6bnVtYmVyID0gdGhpcy5wZWRlSW1nTG9jTWFwLmdldChwaGVub3R5cGVbMV0uY29uY2F0KHBoZW5vdHlwZVsyXSkpXG4gICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqJytsb2MpXG4gICAgbGV0IGZsYWdMb2NBcnJheTogQXJyYXk8Ym9vbGVhbj4gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKXtcbiAgICAgIGlmIChpID09IGxvYyl7XG4gICAgICAgIGZsYWdMb2NBcnJheVtpXSA9IHRydWVcbiAgICAgIH1lbHNle1xuICAgICAgICBmbGFnTG9jQXJyYXlbaV0gPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBGb3IgaW1hZ2UgVVJMXG4gICAgY29uc29sZS5sb2cocGhlbm90eXBlWzBdLmNvbmNhdChwaGVub3R5cGVbM10pLmNvbmNhdChwaGVub3R5cGVbNF0pKVxuICAgIGxldCBpbVVybDpudW1iZXIgPSB0aGlzLnBlZGVJbWdVcmxNYXAuZ2V0KHBoZW5vdHlwZVswXS5jb25jYXQocGhlbm90eXBlWzRdKS5jb25jYXQocGhlbm90eXBlWzNdKSlcbiAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKioqKioqKioqKioqKionK2ltVXJsKVxuICAgIGxldCBmbGFnVXJsQXJyYXk6IEFycmF5PGJvb2xlYW4+ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDU7IGkrKyl7XG4gICAgICBpZiAoaSA9PSBpbVVybCl7XG4gICAgICAgIGZsYWdVcmxBcnJheVtpXSA9IHRydWVcbiAgICAgIH1lbHNle1xuICAgICAgICBmbGFnVXJsQXJyYXlbaV0gPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhmbGFnVXJsQXJyYXlbaW1VcmxdKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdzaXplSSc6IHRydWUsXG4gICAgICAnbXBlZGUtbG9jLTY4LTEyOCc6IGZsYWdMb2NBcnJheVswXSxcbiAgICAgICdtcGVkZS1sb2MtNjgtMjU2JzogZmxhZ0xvY0FycmF5WzFdLFxuICAgICAgJ21wZWRlLWxvYy02OC0zODQnOiBmbGFnTG9jQXJyYXlbMl0sXG4gICAgICAnbXBlZGUtbG9jLTY4LTUxMic6IGZsYWdMb2NBcnJheVszXSxcbiAgICAgICdtcGVkZS1sb2MtNjgtNjQwJzogZmxhZ0xvY0FycmF5WzRdLFxuICAgICAgJ21wZWRlLWxvYy02OC03NjgnOiBmbGFnTG9jQXJyYXlbNV0sXG4gICAgICAnbXBlZGUtbG9jLTY4LTg5Nic6IGZsYWdMb2NBcnJheVs2XSxcbiAgICAgICdtcGVkZS1sb2MtNjgtMTAyNCc6IGZsYWdMb2NBcnJheVs3XSxcbiAgICAgICdtcGVkZS1sb2MtNjgtMTE1Mic6IGZsYWdMb2NBcnJheVs4XSxcbiAgICAgICdtcGVkZS1sb2MtNjgtMTI4MCc6IGZsYWdMb2NBcnJheVs5XSxcbiAgICAgICdtcGVkZS1sb2MtMTM2LTEyOCc6IGZsYWdMb2NBcnJheVsxMF0sXG4gICAgICAnbXBlZGUtbG9jLTEzNi0yNTYnOiBmbGFnTG9jQXJyYXlbMTFdLFxuICAgICAgJ21wZWRlLWxvYy0xMzYtMzg0JzogZmxhZ0xvY0FycmF5WzEyXSxcbiAgICAgICdtcGVkZS1sb2MtMTM2LTUxMic6IGZsYWdMb2NBcnJheVsxM10sXG4gICAgICAnbXBlZGUtbG9jLTEzNi02NDAnOiBmbGFnTG9jQXJyYXlbMTRdLFxuICAgICAgJ21wZWRlLWxvYy0xMzYtNzY4JzogZmxhZ0xvY0FycmF5WzE1XSxcbiAgICAgICdtcGVkZS1sb2MtMTM2LTg5Nic6IGZsYWdMb2NBcnJheVsxNl0sXG4gICAgICAnbXBlZGUtbG9jLTEzNi0xMDI0JzogZmxhZ0xvY0FycmF5WzE3XSxcbiAgICAgICdtcGVkZS1sb2MtMTM2LTExNTInOiBmbGFnTG9jQXJyYXlbMThdLFxuICAgICAgJ21wZWRlLWxvYy0xMzYtMTI4MCc6IGZsYWdMb2NBcnJheVsxOV0sXG4gICAgICAnbXBlZGUtbG9jLTIwNC0xMjgnOiBmbGFnTG9jQXJyYXlbMjBdLFxuICAgICAgJ21wZWRlLWxvYy0yMDQtMjU2JzogZmxhZ0xvY0FycmF5WzIxXSxcbiAgICAgICdtcGVkZS1sb2MtMjA0LTM4NCc6IGZsYWdMb2NBcnJheVsyMl0sXG4gICAgICAnbXBlZGUtbG9jLTIwNC01MTInOiBmbGFnTG9jQXJyYXlbMjNdLFxuICAgICAgJ21wZWRlLWxvYy0yMDQtNjQwJzogZmxhZ0xvY0FycmF5WzI0XSxcbiAgICAgICdtcGVkZS1sb2MtMjA0LTc2OCc6IGZsYWdMb2NBcnJheVsyNV0sXG4gICAgICAnbXBlZGUtbG9jLTIwNC04OTYnOiBmbGFnTG9jQXJyYXlbMjZdLFxuICAgICAgJ21wZWRlLWxvYy0yMDQtMTAyNCc6IGZsYWdMb2NBcnJheVsyN10sXG4gICAgICAnbXBlZGUtbG9jLTIwNC0xMTUyJzogZmxhZ0xvY0FycmF5WzI4XSxcbiAgICAgICdtcGVkZS1sb2MtMjA0LTEyODAnOiBmbGFnTG9jQXJyYXlbMjldLFxuICAgICAgJ21wZWRlLWxvYy0yNzItMTI4JzogZmxhZ0xvY0FycmF5WzMwXSxcbiAgICAgICdtcGVkZS1sb2MtMjcyLTI1Nic6IGZsYWdMb2NBcnJheVszMV0sXG4gICAgICAnbXBlZGUtbG9jLTI3Mi0zODQnOiBmbGFnTG9jQXJyYXlbMzJdLFxuICAgICAgJ21wZWRlLWxvYy0yNzItNTEyJzogZmxhZ0xvY0FycmF5WzMzXSxcbiAgICAgICdtcGVkZS1sb2MtMjcyLTY0MCc6IGZsYWdMb2NBcnJheVszNF0sXG4gICAgICAnbXBlZGUtbG9jLTI3Mi03NjgnOiBmbGFnTG9jQXJyYXlbMzVdLFxuICAgICAgJ21wZWRlLWxvYy0yNzItODk2JzogZmxhZ0xvY0FycmF5WzM2XSxcbiAgICAgICdtcGVkZS1sb2MtMjcyLTEwMjQnOiBmbGFnTG9jQXJyYXlbMzddLFxuICAgICAgJ21wZWRlLWxvYy0yNzItMTE1Mic6IGZsYWdMb2NBcnJheVszOF0sXG4gICAgICAnbXBlZGUtbG9jLTI3Mi0xMjgwJzogZmxhZ0xvY0FycmF5WzM5XSxcbiAgICAgICdtcGVkZS1sb2MtMzQwLTEyOCc6IGZsYWdMb2NBcnJheVs0MF0sXG4gICAgICAnbXBlZGUtbG9jLTM0MC0yNTYnOiBmbGFnTG9jQXJyYXlbNDFdLFxuICAgICAgJ21wZWRlLWxvYy0zNDAtMzg0JzogZmxhZ0xvY0FycmF5WzQyXSxcbiAgICAgICdtcGVkZS1sb2MtMzQwLTUxMic6IGZsYWdMb2NBcnJheVs0M10sXG4gICAgICAnbXBlZGUtbG9jLTM0MC02NDAnOiBmbGFnTG9jQXJyYXlbNDRdLFxuICAgICAgJ21wZWRlLWxvYy0zNDAtNzY4JzogZmxhZ0xvY0FycmF5WzQ1XSxcbiAgICAgICdtcGVkZS1sb2MtMzQwLTg5Nic6IGZsYWdMb2NBcnJheVs0Nl0sXG4gICAgICAnbXBlZGUtbG9jLTM0MC0xMDI0JzogZmxhZ0xvY0FycmF5WzQ3XSxcbiAgICAgICdtcGVkZS1sb2MtMzQwLTExNTInOiBmbGFnTG9jQXJyYXlbNDhdLFxuICAgICAgJ21wZWRlLWxvYy0zNDAtMTI4MCc6IGZsYWdMb2NBcnJheVs0OV0sXG4gICAgICAnbXBlZGUtbG9jLTQwOC0xMjgnOiBmbGFnTG9jQXJyYXlbNTBdLFxuICAgICAgJ21wZWRlLWxvYy00MDgtMjU2JzogZmxhZ0xvY0FycmF5WzUxXSxcbiAgICAgICdtcGVkZS1sb2MtNDA4LTM4NCc6IGZsYWdMb2NBcnJheVs1Ml0sXG4gICAgICAnbXBlZGUtbG9jLTQwOC01MTInOiBmbGFnTG9jQXJyYXlbNTNdLFxuICAgICAgJ21wZWRlLWxvYy00MDgtNjQwJzogZmxhZ0xvY0FycmF5WzU0XSxcbiAgICAgICdtcGVkZS1sb2MtNDA4LTc2OCc6IGZsYWdMb2NBcnJheVs1NV0sXG4gICAgICAnbXBlZGUtbG9jLTQwOC04OTYnOiBmbGFnTG9jQXJyYXlbNTZdLFxuICAgICAgJ21wZWRlLWxvYy00MDgtMTAyNCc6IGZsYWdMb2NBcnJheVs1N10sXG4gICAgICAnbXBlZGUtbG9jLTQwOC0xMTUyJzogZmxhZ0xvY0FycmF5WzU4XSxcbiAgICAgICdtcGVkZS1sb2MtNDA4LTEyODAnOiBmbGFnTG9jQXJyYXlbNTldLFxuICAgICAgJ21wZWRlLWxvYy00NzYtMTI4JzogZmxhZ0xvY0FycmF5WzYwXSxcbiAgICAgICdtcGVkZS1sb2MtNDc2LTI1Nic6IGZsYWdMb2NBcnJheVs2MV0sXG4gICAgICAnbXBlZGUtbG9jLTQ3Ni0zODQnOiBmbGFnTG9jQXJyYXlbNjJdLFxuICAgICAgJ21wZWRlLWxvYy00NzYtNTEyJzogZmxhZ0xvY0FycmF5WzYzXSxcbiAgICAgICdtcGVkZS1sb2MtNDc2LTY0MCc6IGZsYWdMb2NBcnJheVs2NF0sXG4gICAgICAnbXBlZGUtbG9jLTQ3Ni03NjgnOiBmbGFnTG9jQXJyYXlbNjVdLFxuICAgICAgJ21wZWRlLWxvYy00NzYtODk2JzogZmxhZ0xvY0FycmF5WzY2XSxcbiAgICAgICdtcGVkZS1sb2MtNDc2LTEwMjQnOiBmbGFnTG9jQXJyYXlbNjddLFxuICAgICAgJ21wZWRlLWxvYy00NzYtMTE1Mic6IGZsYWdMb2NBcnJheVs2OF0sXG4gICAgICAnbXBlZGUtbG9jLTQ3Ni0xMjgwJzogZmxhZ0xvY0FycmF5WzY5XSxcbiAgICAgICdtcGVkZS1sb2MtNTQ0LTEyOCc6IGZsYWdMb2NBcnJheVs3MF0sXG4gICAgICAnbXBlZGUtbG9jLTU0NC0yNTYnOiBmbGFnTG9jQXJyYXlbNzFdLFxuICAgICAgJ21wZWRlLWxvYy01NDQtMzg0JzogZmxhZ0xvY0FycmF5WzcyXSxcbiAgICAgICdtcGVkZS1sb2MtNTQ0LTUxMic6IGZsYWdMb2NBcnJheVs3M10sXG4gICAgICAnbXBlZGUtbG9jLTU0NC02NDAnOiBmbGFnTG9jQXJyYXlbNzRdLFxuICAgICAgJ21wZWRlLWxvYy01NDQtNzY4JzogZmxhZ0xvY0FycmF5Wzc1XSxcbiAgICAgICdtcGVkZS1sb2MtNTQ0LTg5Nic6IGZsYWdMb2NBcnJheVs3Nl0sXG4gICAgICAnbXBlZGUtbG9jLTU0NC0xMDI0JzogZmxhZ0xvY0FycmF5Wzc3XSxcbiAgICAgICdtcGVkZS1sb2MtNTQ0LTExNTInOiBmbGFnTG9jQXJyYXlbNzhdLFxuICAgICAgJ21wZWRlLWxvYy01NDQtMTI4MCc6IGZsYWdMb2NBcnJheVs3OV0sXG4gICAgICAnbXBlZGUtbG9jLTYxMi0xMjgnOiBmbGFnTG9jQXJyYXlbODBdLFxuICAgICAgJ21wZWRlLWxvYy02MTItMjU2JzogZmxhZ0xvY0FycmF5WzgxXSxcbiAgICAgICdtcGVkZS1sb2MtNjEyLTM4NCc6IGZsYWdMb2NBcnJheVs4Ml0sXG4gICAgICAnbXBlZGUtbG9jLTYxMi01MTInOiBmbGFnTG9jQXJyYXlbODNdLFxuICAgICAgJ21wZWRlLWxvYy02MTItNjQwJzogZmxhZ0xvY0FycmF5Wzg0XSxcbiAgICAgICdtcGVkZS1sb2MtNjEyLTc2OCc6IGZsYWdMb2NBcnJheVs4NV0sXG4gICAgICAnbXBlZGUtbG9jLTYxMi04OTYnOiBmbGFnTG9jQXJyYXlbODZdLFxuICAgICAgJ21wZWRlLWxvYy02MTItMTAyNCc6IGZsYWdMb2NBcnJheVs4N10sXG4gICAgICAnbXBlZGUtbG9jLTYxMi0xMTUyJzogZmxhZ0xvY0FycmF5Wzg4XSxcbiAgICAgICdtcGVkZS1sb2MtNjEyLTEyODAnOiBmbGFnTG9jQXJyYXlbODldLFxuICAgICAgJ21wZWRlLWxvYy02ODAtMTI4JzogZmxhZ0xvY0FycmF5WzkwXSxcbiAgICAgICdtcGVkZS1sb2MtNjgwLTI1Nic6IGZsYWdMb2NBcnJheVs5MV0sXG4gICAgICAnbXBlZGUtbG9jLTY4MC0zODQnOiBmbGFnTG9jQXJyYXlbOTJdLFxuICAgICAgJ21wZWRlLWxvYy02ODAtNTEyJzogZmxhZ0xvY0FycmF5WzkzXSxcbiAgICAgICdtcGVkZS1sb2MtNjgwLTY0MCc6IGZsYWdMb2NBcnJheVs5NF0sXG4gICAgICAnbXBlZGUtbG9jLTY4MC03NjgnOiBmbGFnTG9jQXJyYXlbOTVdLFxuICAgICAgJ21wZWRlLWxvYy02ODAtODk2JzogZmxhZ0xvY0FycmF5Wzk2XSxcbiAgICAgICdtcGVkZS1sb2MtNjgwLTEwMjQnOiBmbGFnTG9jQXJyYXlbOTddLFxuICAgICAgJ21wZWRlLWxvYy02ODAtMTE1Mic6IGZsYWdMb2NBcnJheVs5OF0sXG4gICAgICAnbXBlZGUtbG9jLTY4MC0xMjgwJzogZmxhZ0xvY0FycmF5Wzk5XSxcbiAgICAgIC8vIFVSTFxuICAgICAgJ21wZWRlLXBlZGUtYmxhY2stc2VnMS1sZWcwLW1pbic6IGZsYWdVcmxBcnJheVswXSxcbiAgICAgICdtcGVkZS1wZWRlLWJsYWNrLXNlZzEtbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbMV0sXG4gICAgICAnbXBlZGUtcGVkZS1ibGFjay1zZWcxLWxlZzItbWluJzogZmxhZ1VybEFycmF5WzJdLFxuICAgICAgJ21wZWRlLXBlZGUtYmxhY2stc2VnMi1sZWcwLW1pbic6IGZsYWdVcmxBcnJheVszXSxcbiAgICAgICdtcGVkZS1wZWRlLWJsYWNrLXNlZzItbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbNF0sXG4gICAgICAnbXBlZGUtcGVkZS1ibGFjay1zZWcyLWxlZzItbWluJzogZmxhZ1VybEFycmF5WzVdLFxuICAgICAgJ21wZWRlLXBlZGUtYmxhY2stc2VnMy1sZWcwLW1pbic6IGZsYWdVcmxBcnJheVs2XSxcbiAgICAgICdtcGVkZS1wZWRlLWJsYWNrLXNlZzMtbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbN10sXG4gICAgICAnbXBlZGUtcGVkZS1ibGFjay1zZWczLWxlZzItbWluJzogZmxhZ1VybEFycmF5WzhdLFxuICAgICAgJ21wZWRlLXBlZGUtYmxhY2stc2VnNC1sZWcwLW1pbic6IGZsYWdVcmxBcnJheVs5XSxcbiAgICAgICdtcGVkZS1wZWRlLWJsYWNrLXNlZzQtbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbMTBdLFxuICAgICAgJ21wZWRlLXBlZGUtYmxhY2stc2VnNC1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVsxMV0sXG4gICAgICAnbXBlZGUtcGVkZS1ibGFjay1zZWc1LWxlZzAtbWluJzogZmxhZ1VybEFycmF5WzEyXSxcbiAgICAgICdtcGVkZS1wZWRlLWJsYWNrLXNlZzUtbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbMTNdLFxuICAgICAgJ21wZWRlLXBlZGUtYmxhY2stc2VnNS1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVsxNF0sXG4gICAgICAnbXBlZGUtcGVkZS1ibHVlLXNlZzEtbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbMTVdLFxuICAgICAgJ21wZWRlLXBlZGUtYmx1ZS1zZWcxLWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzE2XSxcbiAgICAgICdtcGVkZS1wZWRlLWJsdWUtc2VnMS1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVsxN10sXG4gICAgICAnbXBlZGUtcGVkZS1ibHVlLXNlZzItbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbMThdLFxuICAgICAgJ21wZWRlLXBlZGUtYmx1ZS1zZWcyLWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzE5XSxcbiAgICAgICdtcGVkZS1wZWRlLWJsdWUtc2VnMi1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVsyMF0sXG4gICAgICAnbXBlZGUtcGVkZS1ibHVlLXNlZzMtbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbMjFdLFxuICAgICAgJ21wZWRlLXBlZGUtYmx1ZS1zZWczLWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzIyXSxcbiAgICAgICdtcGVkZS1wZWRlLWJsdWUtc2VnMy1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVsyM10sXG4gICAgICAnbXBlZGUtcGVkZS1ibHVlLXNlZzQtbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbMjRdLFxuICAgICAgJ21wZWRlLXBlZGUtYmx1ZS1zZWc0LWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzI1XSxcbiAgICAgICdtcGVkZS1wZWRlLWJsdWUtc2VnNC1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVsyNl0sXG4gICAgICAnbXBlZGUtcGVkZS1ibHVlLXNlZzUtbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbMjddLFxuICAgICAgJ21wZWRlLXBlZGUtYmx1ZS1zZWc1LWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzI4XSxcbiAgICAgICdtcGVkZS1wZWRlLWJsdWUtc2VnNS1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVsyOV0sXG4gICAgICAnbXBlZGUtcGVkZS1ncmF5LXNlZzEtbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbMzBdLFxuICAgICAgJ21wZWRlLXBlZGUtZ3JheS1zZWcxLWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzMxXSxcbiAgICAgICdtcGVkZS1wZWRlLWdyYXktc2VnMS1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVszMl0sXG4gICAgICAnbXBlZGUtcGVkZS1ncmF5LXNlZzItbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbMzNdLFxuICAgICAgJ21wZWRlLXBlZGUtZ3JheS1zZWcyLWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzM0XSxcbiAgICAgICdtcGVkZS1wZWRlLWdyYXktc2VnMi1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVszNV0sXG4gICAgICAnbXBlZGUtcGVkZS1ncmF5LXNlZzMtbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbMzZdLFxuICAgICAgJ21wZWRlLXBlZGUtZ3JheS1zZWczLWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzM3XSxcbiAgICAgICdtcGVkZS1wZWRlLWdyYXktc2VnMy1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVszOF0sXG4gICAgICAnbXBlZGUtcGVkZS1ncmF5LXNlZzQtbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbMzldLFxuICAgICAgJ21wZWRlLXBlZGUtZ3JheS1zZWc0LWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzQwXSxcbiAgICAgICdtcGVkZS1wZWRlLWdyYXktc2VnNC1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs0MV0sXG4gICAgICAnbXBlZGUtcGVkZS1ncmF5LXNlZzUtbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbNDJdLFxuICAgICAgJ21wZWRlLXBlZGUtZ3JheS1zZWc1LWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzQzXSxcbiAgICAgICdtcGVkZS1wZWRlLWdyYXktc2VnNS1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs0NF0sXG4gICAgICAnbXBlZGUtcGVkZS1ncmVlbi1zZWcxLWxlZzAtbWluJzogZmxhZ1VybEFycmF5WzQ1XSxcbiAgICAgICdtcGVkZS1wZWRlLWdyZWVuLXNlZzEtbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbNDZdLFxuICAgICAgJ21wZWRlLXBlZGUtZ3JlZW4tc2VnMS1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs0N10sXG4gICAgICAnbXBlZGUtcGVkZS1ncmVlbi1zZWcyLWxlZzAtbWluJzogZmxhZ1VybEFycmF5WzQ4XSxcbiAgICAgICdtcGVkZS1wZWRlLWdyZWVuLXNlZzItbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbNDldLFxuICAgICAgJ21wZWRlLXBlZGUtZ3JlZW4tc2VnMi1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs1MF0sXG4gICAgICAnbXBlZGUtcGVkZS1ncmVlbi1zZWczLWxlZzAtbWluJzogZmxhZ1VybEFycmF5WzUxXSxcbiAgICAgICdtcGVkZS1wZWRlLWdyZWVuLXNlZzMtbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbNTJdLFxuICAgICAgJ21wZWRlLXBlZGUtZ3JlZW4tc2VnMy1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs1M10sXG4gICAgICAnbXBlZGUtcGVkZS1ncmVlbi1zZWc0LWxlZzAtbWluJzogZmxhZ1VybEFycmF5WzU0XSxcbiAgICAgICdtcGVkZS1wZWRlLWdyZWVuLXNlZzQtbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbNTVdLFxuICAgICAgJ21wZWRlLXBlZGUtZ3JlZW4tc2VnNC1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs1Nl0sXG4gICAgICAnbXBlZGUtcGVkZS1ncmVlbi1zZWc1LWxlZzAtbWluJzogZmxhZ1VybEFycmF5WzU3XSxcbiAgICAgICdtcGVkZS1wZWRlLWdyZWVuLXNlZzUtbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbNThdLFxuICAgICAgJ21wZWRlLXBlZGUtZ3JlZW4tc2VnNS1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs1OV0sXG4gICAgICAnbXBlZGUtcGVkZS1waW5rLXNlZzEtbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbNjBdLFxuICAgICAgJ21wZWRlLXBlZGUtcGluay1zZWcxLWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzYxXSxcbiAgICAgICdtcGVkZS1wZWRlLXBpbmstc2VnMS1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs2Ml0sXG4gICAgICAnbXBlZGUtcGVkZS1waW5rLXNlZzItbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbNjNdLFxuICAgICAgJ21wZWRlLXBlZGUtcGluay1zZWcyLWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzY0XSxcbiAgICAgICdtcGVkZS1wZWRlLXBpbmstc2VnMi1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs2NV0sXG4gICAgICAnbXBlZGUtcGVkZS1waW5rLXNlZzMtbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbNjZdLFxuICAgICAgJ21wZWRlLXBlZGUtcGluay1zZWczLWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzY3XSxcbiAgICAgICdtcGVkZS1wZWRlLXBpbmstc2VnMy1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs2OF0sXG4gICAgICAnbXBlZGUtcGVkZS1waW5rLXNlZzQtbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbNjldLFxuICAgICAgJ21wZWRlLXBlZGUtcGluay1zZWc0LWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzcwXSxcbiAgICAgICdtcGVkZS1wZWRlLXBpbmstc2VnNC1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs3MV0sXG4gICAgICAnbXBlZGUtcGVkZS1waW5rLXNlZzUtbGVnMC1taW4nOiBmbGFnVXJsQXJyYXlbNzJdLFxuICAgICAgJ21wZWRlLXBlZGUtcGluay1zZWc1LWxlZzEtbWluJzogZmxhZ1VybEFycmF5WzczXSxcbiAgICAgICdtcGVkZS1wZWRlLXBpbmstc2VnNS1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs3NF0sXG4gICAgICAnbXBlZGUtcGVkZS13aGl0ZS1zZWcxLWxlZzAtbWluJzogZmxhZ1VybEFycmF5Wzc1XSxcbiAgICAgICdtcGVkZS1wZWRlLXdoaXRlLXNlZzEtbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbNzZdLFxuICAgICAgJ21wZWRlLXBlZGUtd2hpdGUtc2VnMS1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs3N10sXG4gICAgICAnbXBlZGUtcGVkZS13aGl0ZS1zZWcyLWxlZzAtbWluJzogZmxhZ1VybEFycmF5Wzc4XSxcbiAgICAgICdtcGVkZS1wZWRlLXdoaXRlLXNlZzItbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbNzldLFxuICAgICAgJ21wZWRlLXBlZGUtd2hpdGUtc2VnMi1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs4MF0sXG4gICAgICAnbXBlZGUtcGVkZS13aGl0ZS1zZWczLWxlZzAtbWluJzogZmxhZ1VybEFycmF5WzgxXSxcbiAgICAgICdtcGVkZS1wZWRlLXdoaXRlLXNlZzMtbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbODJdLFxuICAgICAgJ21wZWRlLXBlZGUtd2hpdGUtc2VnMy1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs4M10sXG4gICAgICAnbXBlZGUtcGVkZS13aGl0ZS1zZWc0LWxlZzAtbWluJzogZmxhZ1VybEFycmF5Wzg0XSxcbiAgICAgICdtcGVkZS1wZWRlLXdoaXRlLXNlZzQtbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbODVdLFxuICAgICAgJ21wZWRlLXBlZGUtd2hpdGUtc2VnNC1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs4Nl0sXG4gICAgICAnbXBlZGUtcGVkZS13aGl0ZS1zZWc1LWxlZzAtbWluJzogZmxhZ1VybEFycmF5Wzg3XSxcbiAgICAgICdtcGVkZS1wZWRlLXdoaXRlLXNlZzUtbGVnMS1taW4nOiBmbGFnVXJsQXJyYXlbODhdLFxuICAgICAgJ21wZWRlLXBlZGUtd2hpdGUtc2VnNS1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs4OV0sXG4gICAgICAnbXBlZGUtcGVkZS15ZWxsb3ctc2VnMS1sZWcwLW1pbic6IGZsYWdVcmxBcnJheVs5MF0sXG4gICAgICAnbXBlZGUtcGVkZS15ZWxsb3ctc2VnMS1sZWcxLW1pbic6IGZsYWdVcmxBcnJheVs5MV0sXG4gICAgICAnbXBlZGUtcGVkZS15ZWxsb3ctc2VnMS1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs5Ml0sXG4gICAgICAnbXBlZGUtcGVkZS15ZWxsb3ctc2VnMi1sZWcwLW1pbic6IGZsYWdVcmxBcnJheVs5M10sXG4gICAgICAnbXBlZGUtcGVkZS15ZWxsb3ctc2VnMi1sZWcxLW1pbic6IGZsYWdVcmxBcnJheVs5NF0sXG4gICAgICAnbXBlZGUtcGVkZS15ZWxsb3ctc2VnMi1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs5NV0sXG4gICAgICAnbXBlZGUtcGVkZS15ZWxsb3ctc2VnMy1sZWcwLW1pbic6IGZsYWdVcmxBcnJheVs5Nl0sXG4gICAgICAnbXBlZGUtcGVkZS15ZWxsb3ctc2VnMy1sZWcxLW1pbic6IGZsYWdVcmxBcnJheVs5N10sXG4gICAgICAnbXBlZGUtcGVkZS15ZWxsb3ctc2VnMy1sZWcyLW1pbic6IGZsYWdVcmxBcnJheVs5OF0sXG4gICAgICAnbXBlZGUtcGVkZS15ZWxsb3ctc2VnNC1sZWcwLW1pbic6IGZsYWdVcmxBcnJheVs5OV0sXG4gICAgICAnbXBlZGUtcGVkZS15ZWxsb3ctc2VnNC1sZWcxLW1pbic6IGZsYWdVcmxBcnJheVsxMDBdLFxuICAgICAgJ21wZWRlLXBlZGUteWVsbG93LXNlZzQtbGVnMi1taW4nOiBmbGFnVXJsQXJyYXlbMTAxXSxcbiAgICAgICdtcGVkZS1wZWRlLXllbGxvdy1zZWc1LWxlZzAtbWluJzogZmxhZ1VybEFycmF5WzEwMl0sXG4gICAgICAnbXBlZGUtcGVkZS15ZWxsb3ctc2VnNS1sZWcxLW1pbic6IGZsYWdVcmxBcnJheVsxMDNdLFxuICAgICAgJ21wZWRlLXBlZGUteWVsbG93LXNlZzUtbGVnMi1taW4nOiBmbGFnVXJsQXJyYXlbMTA0XVxuICAgIH1cbiAgfVxuICBnZXRNZW5kZWxwZWRldG9wbGVmdChwaGVub3R5cGU6IHN0cmluZ1tdKTogT2JqZWN0e1xuICAgIHJldHVybiB7XG4gICAgICAnbXBlZGUtYmFzaWMtdG9wLWxlZnQnOiB0cnVlLFxuICAgIH1cbiAgfVxuICBnZXRNZW5kZWxwZWRlYm90dG9tbGVmdCgpOiBPYmplY3R7XG4gICAgcmV0dXJuIHtcbiAgICAgICdtcGVkZS1iYXNpYy1ib3R0b20tbGVmdCc6IHRydWUsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmcmlkZ2Ugb2JqZWN0XG4gICAqL1xuICBmcmlkZ2U6IE1lbmRlbHBlZGVGcmlkZ2U7XG5cbiAgIC8qKlxuICAgKiBsaXN0IG9mIHN0cmFpbnMgaW4gdGhlIGZyaWRnZSwgaW5jbHVkaW5nIGVtcHR5IG9uZXNcbiAgICovXG4gIHBlZGVMaXN0OiBNZW5kZWxwZWRlUGVkZVtdO1xuXG4gIC8qKlxuICAgKiBjdXJyZW50bHkgcGVkZXMgc3RyYWlucyBiYXNlZCBvbiBzaGVsZiBudW1iZXJcbiAgICovXG4gIGN1cnJQZWRlczogTWVuZGVscGVkZVBlZGVbXVtdO1xuXG4gIC8qKlxuICAgKiBjdXJyZW50bHkgdmlzaWJsZSBwZWRlcyBiYXNlZCBvbiBzaGVsZiBudW1iZXIgMURcbiAgICovXG4gIGN1cnJQZWRlc18xZDogTWVuZGVscGVkZVBlZGVbXTtcblxuICAvKipcbiAgICogbWF4aW11bSBudW1iZXIgb2Ygc2hlbHZlcyBpbiBmcmlkZ2VcbiAgICovXG4gIG1heFNoZWxmOiBudW1iZXI7XG4gIC8qKlxuICAgKiBudW1iZXIgb2Ygc2xvdHMgcGVyIHNoZWxmXG4gICAqL1xuICBzcG90czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBjdXJyZW50IHNoZWxmXG4gICAqL1xuICBzaGVsZjogbnVtYmVyID0gMDtcbiAgXG4gIC8qKlxuICAgKiBwb3RlbnRpYWwgYmFja2VuZCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogU3RhdGUgdG8gbW9uaXRpb3IgaWYgY29tcG9uZW50IGFjdGl2ZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgdG9cbiAgICogbXVsdGlwbGUgc3RyZWFtcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogT2JzZXJ2ZXMgdGhlIHNjZW5Db2RlIG9mIHRoZSBVUkxcbiAgICovXG4gIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuXG4gIHByaXZhdGUgbmV4dFNwb3Q6IG51bWJlcjtcbiAgLy8gVGhlIDEwNSBjb21iaW5hdGlvbnMgb2YgZG90Y29sb3IsIG51bXNlZ21lbnRzIGFuZCBudW0gbGVnc1xuICBwZWRlSW1nVXJsTWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcChbWydCbGFjazEwJywgMF0sXG4gIFsnQmxhY2sxMScsIDFdLFxuICBbJ0JsYWNrMTInLCAyXSxcbiAgWydCbGFjazIwJywgM10sXG4gIFsnQmxhY2syMScsIDRdLFxuICBbJ0JsYWNrMjInLCA1XSxcbiAgWydCbGFjazMwJywgNl0sXG4gIFsnQmxhY2szMScsIDddLFxuICBbJ0JsYWNrMzInLCA4XSxcbiAgWydCbGFjazQwJywgOV0sXG4gIFsnQmxhY2s0MScsIDEwXSxcbiAgWydCbGFjazQyJywgMTFdLFxuICBbJ0JsYWNrNTAnLCAxMl0sXG4gIFsnQmxhY2s1MScsIDEzXSxcbiAgWydCbGFjazUyJywgMTRdLFxuICBbJ0JsdWUxMCcsIDE1XSxcbiAgWydCbHVlMTEnLCAxNl0sXG4gIFsnQmx1ZTEyJywgMTddLFxuICBbJ0JsdWUyMCcsIDE4XSxcbiAgWydCbHVlMjEnLCAxOV0sXG4gIFsnQmx1ZTIyJywgMjBdLFxuICBbJ0JsdWUzMCcsIDIxXSxcbiAgWydCbHVlMzEnLCAyMl0sXG4gIFsnQmx1ZTMyJywgMjNdLFxuICBbJ0JsdWU0MCcsIDI0XSxcbiAgWydCbHVlNDEnLCAyNV0sXG4gIFsnQmx1ZTQyJywgMjZdLFxuICBbJ0JsdWU1MCcsIDI3XSxcbiAgWydCbHVlNTEnLCAyOF0sXG4gIFsnQmx1ZTUyJywgMjldLFxuICBbJ0dyYXkxMCcsIDMwXSxcbiAgWydHcmF5MTEnLCAzMV0sXG4gIFsnR3JheTEyJywgMzJdLFxuICBbJ0dyYXkyMCcsIDMzXSxcbiAgWydHcmF5MjEnLCAzNF0sXG4gIFsnR3JheTIyJywgMzVdLFxuICBbJ0dyYXkzMCcsIDM2XSxcbiAgWydHcmF5MzEnLCAzN10sXG4gIFsnR3JheTMyJywgMzhdLFxuICBbJ0dyYXk0MCcsIDM5XSxcbiAgWydHcmF5NDEnLCA0MF0sXG4gIFsnR3JheTQyJywgNDFdLFxuICBbJ0dyYXk1MCcsIDQyXSxcbiAgWydHcmF5NTEnLCA0M10sXG4gIFsnR3JheTUyJywgNDRdLFxuICBbJ0dyZWVuMTAnLCA0NV0sXG4gIFsnR3JlZW4xMScsIDQ2XSxcbiAgWydHcmVlbjEyJywgNDddLFxuICBbJ0dyZWVuMjAnLCA0OF0sXG4gIFsnR3JlZW4yMScsIDQ5XSxcbiAgWydHcmVlbjIyJywgNTBdLFxuICBbJ0dyZWVuMzAnLCA1MV0sXG4gIFsnR3JlZW4zMScsIDUyXSxcbiAgWydHcmVlbjMyJywgNTNdLFxuICBbJ0dyZWVuNDAnLCA1NF0sXG4gIFsnR3JlZW40MScsIDU1XSxcbiAgWydHcmVlbjQyJywgNTZdLFxuICBbJ0dyZWVuNTAnLCA1N10sXG4gIFsnR3JlZW41MScsIDU4XSxcbiAgWydHcmVlbjUyJywgNTldLFxuICBbJ1BpbmsxMCcsIDYwXSxcbiAgWydQaW5rMTEnLCA2MV0sXG4gIFsnUGluazEyJywgNjJdLFxuICBbJ1BpbmsyMCcsIDYzXSxcbiAgWydQaW5rMjEnLCA2NF0sXG4gIFsnUGluazIyJywgNjVdLFxuICBbJ1BpbmszMCcsIDY2XSxcbiAgWydQaW5rMzEnLCA2N10sXG4gIFsnUGluazMyJywgNjhdLFxuICBbJ1Bpbms0MCcsIDY5XSxcbiAgWydQaW5rNDEnLCA3MF0sXG4gIFsnUGluazQyJywgNzFdLFxuICBbJ1Bpbms1MCcsIDcyXSxcbiAgWydQaW5rNTEnLCA3M10sXG4gIFsnUGluazUyJywgNzRdLFxuICBbJ1doaXRlMTAnLCA3NV0sXG4gIFsnV2hpdGUxMScsIDc2XSxcbiAgWydXaGl0ZTEyJywgNzddLFxuICBbJ1doaXRlMjAnLCA3OF0sXG4gIFsnV2hpdGUyMScsIDc5XSxcbiAgWydXaGl0ZTIyJywgODBdLFxuICBbJ1doaXRlMzAnLCA4MV0sXG4gIFsnV2hpdGUzMScsIDgyXSxcbiAgWydXaGl0ZTMyJywgODNdLFxuICBbJ1doaXRlNDAnLCA4NF0sXG4gIFsnV2hpdGU0MScsIDg1XSxcbiAgWydXaGl0ZTQyJywgODZdLFxuICBbJ1doaXRlNTAnLCA4N10sXG4gIFsnV2hpdGU1MScsIDg4XSxcbiAgWydXaGl0ZTUyJywgODldLFxuICBbJ1llbGxvdzEwJywgOTBdLFxuICBbJ1llbGxvdzExJywgOTFdLFxuICBbJ1llbGxvdzEyJywgOTJdLFxuICBbJ1llbGxvdzIwJywgOTNdLFxuICBbJ1llbGxvdzIxJywgOTRdLFxuICBbJ1llbGxvdzIyJywgOTVdLFxuICBbJ1llbGxvdzMwJywgOTZdLFxuICBbJ1llbGxvdzMxJywgOTddLFxuICBbJ1llbGxvdzMyJywgOThdLFxuICBbJ1llbGxvdzQwJywgOTldLFxuICBbJ1llbGxvdzQxJywgMTAwXSxcbiAgWydZZWxsb3c0MicsIDEwMV0sXG4gIFsnWWVsbG93NTAnLCAxMDJdLFxuICBbJ1llbGxvdzUxJywgMTAzXSxcbiAgWydZZWxsb3c1MicsIDEwNF1dKVxuICAvLyBUaGUgb25lIGh1bmRyZWQgY29tYmluYXRpb24gb2YgZXllIGNvbG9yIHZzIGJvZHkgY29sb3JcbiAgcGVkZUltZ0xvY01hcDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoW1snUmVkUmVkJywgMF0sXG4gIFsnT3JhbmdlUmVkJywgMV0sXG4gIFsnQmVpZ2VSZWQnLCAyXSxcbiAgWydQdXJwbGVSZWQnLCAzXSxcbiAgWydTa3lCbHVlUmVkJywgNF0sXG4gIFsnQ3lhblJlZCcsIDVdLFxuICBbJ1RlYWxSZWQnLCA2XSxcbiAgWydMaWdodEdyZWVuUmVkJywgN10sXG4gIFsnTmF2eVJlZCcsIDhdLFxuICBbJ0xpZ2h0R3JheVJlZCcsIDldLFxuICBbJ1JlZE9yYW5nZScsIDEwXSxcbiAgWydPcmFuZ2VPcmFuZ2UnLCAxMV0sXG4gIFsnQmVpZ2VPcmFuZ2UnLCAxMl0sXG4gIFsnUHVycGxlT3JhbmdlJywgMTNdLFxuICBbJ1NreUJsdWVPcmFuZ2UnLCAxNF0sXG4gIFsnQ3lhbk9yYW5nZScsIDE1XSxcbiAgWydUZWFsT3JhbmdlJywgMTZdLFxuICBbJ0xpZ2h0R3JlZW5PcmFuZ2UnLCAxN10sXG4gIFsnTmF2eU9yYW5nZScsIDE4XSxcbiAgWydMaWdodEdyYXlPcmFuZ2UnLCAxOV0sXG4gIFsnUmVkQmVpZ2UnLCAyMF0sXG4gIFsnT3JhbmdlQmVpZ2UnLCAyMV0sXG4gIFsnQmVpZ2VCZWlnZScsIDIyXSxcbiAgWydQdXJwbGVCZWlnZScsIDIzXSxcbiAgWydTa3lCbHVlQmVpZ2UnLCAyNF0sXG4gIFsnQ3lhbkJlaWdlJywgMjVdLFxuICBbJ1RlYWxCZWlnZScsIDI2XSxcbiAgWydMaWdodEdyZWVuQmVpZ2UnLCAyN10sXG4gIFsnTmF2eUJlaWdlJywgMjhdLFxuICBbJ0xpZ2h0R3JheUJlaWdlJywgMjldLFxuICBbJ1JlZFB1cnBsZScsIDMwXSxcbiAgWydPcmFuZ2VQdXJwbGUnLCAzMV0sXG4gIFsnQmVpZ2VQdXJwbGUnLCAzMl0sXG4gIFsnUHVycGxlUHVycGxlJywgMzNdLFxuICBbJ1NreUJsdWVQdXJwbGUnLCAzNF0sXG4gIFsnQ3lhblB1cnBsZScsIDM1XSxcbiAgWydUZWFsUHVycGxlJywgMzZdLFxuICBbJ0xpZ2h0R3JlZW5QdXJwbGUnLCAzN10sXG4gIFsnTmF2eVB1cnBsZScsIDM4XSxcbiAgWydMaWdodEdyYXlQdXJwbGUnLCAzOV0sXG4gIFsnUmVkU2t5Qmx1ZScsIDQwXSxcbiAgWydPcmFuZ2VTa3lCbHVlJywgNDFdLFxuICBbJ0JlaWdlU2t5Qmx1ZScsIDQyXSxcbiAgWydQdXJwbGVTa3lCbHVlJywgNDNdLFxuICBbJ1NreUJsdWVTa3lCbHVlJywgNDRdLFxuICBbJ0N5YW5Ta3lCbHVlJywgNDVdLFxuICBbJ1RlYWxTa3lCbHVlJywgNDZdLFxuICBbJ0xpZ2h0R3JlZW5Ta3lCbHVlJywgNDddLFxuICBbJ05hdnlTa3lCbHVlJywgNDhdLFxuICBbJ0xpZ2h0R3JheVNreUJsdWUnLCA0OV0sXG4gIFsnUmVkQ3lhbicsIDUwXSxcbiAgWydPcmFuZ2VDeWFuJywgNTFdLFxuICBbJ0JlaWdlQ3lhbicsIDUyXSxcbiAgWydQdXJwbGVDeWFuJywgNTNdLFxuICBbJ1NreUJsdWVDeWFuJywgNTRdLFxuICBbJ0N5YW5DeWFuJywgNTVdLFxuICBbJ1RlYWxDeWFuJywgNTZdLFxuICBbJ0xpZ2h0R3JlZW5DeWFuJywgNTddLFxuICBbJ05hdnlDeWFuJywgNThdLFxuICBbJ0xpZ2h0R3JheUN5YW4nLCA1OV0sXG4gIFsnUmVkVGVhbCcsIDYwXSxcbiAgWydPcmFuZ2VUZWFsJywgNjFdLFxuICBbJ0JlaWdlVGVhbCcsIDYyXSxcbiAgWydQdXJwbGVUZWFsJywgNjNdLFxuICBbJ1NreUJsdWVUZWFsJywgNjRdLFxuICBbJ0N5YW5UZWFsJywgNjVdLFxuICBbJ1RlYWxUZWFsJywgNjZdLFxuICBbJ0xpZ2h0R3JlZW5UZWFsJywgNjddLFxuICBbJ05hdnlUZWFsJywgNjhdLFxuICBbJ0xpZ2h0R3JheVRlYWwnLCA2OV0sXG4gIFsnUmVkTGlnaHRHcmVlbicsIDcwXSxcbiAgWydPcmFuZ2VMaWdodEdyZWVuJywgNzFdLFxuICBbJ0JlaWdlTGlnaHRHcmVlbicsIDcyXSxcbiAgWydQdXJwbGVMaWdodEdyZWVuJywgNzNdLFxuICBbJ1NreUJsdWVMaWdodEdyZWVuJywgNzRdLFxuICBbJ0N5YW5MaWdodEdyZWVuJywgNzVdLFxuICBbJ1RlYWxMaWdodEdyZWVuJywgNzZdLFxuICBbJ0xpZ2h0R3JlZW5MaWdodEdyZWVuJywgNzddLFxuICBbJ05hdnlMaWdodEdyZWVuJywgNzhdLFxuICBbJ0xpZ2h0R3JheUxpZ2h0R3JlZW4nLCA3OV0sXG4gIFsnUmVkTmF2eScsIDgwXSxcbiAgWydPcmFuZ2VOYXZ5JywgODFdLFxuICBbJ0JlaWdlTmF2eScsIDgyXSxcbiAgWydQdXJwbGVOYXZ5JywgODNdLFxuICBbJ1NreUJsdWVOYXZ5JywgODRdLFxuICBbJ0N5YW5OYXZ5JywgODVdLFxuICBbJ1RlYWxOYXZ5JywgODZdLFxuICBbJ0xpZ2h0R3JlZW5OYXZ5JywgODddLFxuICBbJ05hdnlOYXZ5JywgODhdLFxuICBbJ0xpZ2h0R3JheU5hdnknLCA4OV0sXG4gIFsnUmVkTGlnaHRHcmF5JywgOTBdLFxuICBbJ09yYW5nZUxpZ2h0R3JheScsIDkxXSxcbiAgWydCZWlnZUxpZ2h0R3JheScsIDkyXSxcbiAgWydQdXJwbGVMaWdodEdyYXknLCA5M10sXG4gIFsnU2t5Qmx1ZUxpZ2h0R3JheScsIDk0XSxcbiAgWydDeWFuTGlnaHRHcmF5JywgOTVdLFxuICBbJ1RlYWxMaWdodEdyYXknLCA5Nl0sXG4gIFsnTGlnaHRHcmVlbkxpZ2h0R3JheScsIDk3XSxcbiAgWydOYXZ5TGlnaHRHcmF5JywgOThdLFxuICBbJ0xpZ2h0R3JheUxpZ2h0R3JheScsIDk5XV0pO1xuICAgLyoqXG4gICAqIEluaXRhaWxpemUgdGhlIGZyaWRnZSB3aGVuIGNyZWF0aW5nIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgbG9nZ2VkIGluIHVzZXIgYW5kIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogMi4gRmV0Y2ggdGhlIGNvcnJlc3BvbmRpbmcgZnJpZGdlXG4gICAqIDNhLiBJZiB0aGUgZnJpZGdlIGRvZXNuJ3QgZXhpc3QgeWV0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAqIDNiLiBJZiB0aGUgZnJpZGdlIGRvZXMgZXhpc3QsIGluaXRpYWxpemUgaXRcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgY29uc29sZS5sb2coJ25nIGluaXQuLi4uLi4nKTtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuXG4gICAgbGV0IHVzZXJJZCA9IHRoaXMudXNlci5pZDtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIGxldCBzY2VuU2hvcnRDb2RlID0gcGFyYW1zWydzY2VuU2hvcnRDb2RlJ107XG4gICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0TWVuZGVsRnJpZGdlKHVzZXJJZCwgc2NlblNob3J0Q29kZSlcbiAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoZnJpZGdlKSA9PiB7dGhpcy5faW5pdEZyaWRnZShmcmlkZ2UpO30sXG4gICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYoZXJyLnN0YXR1cyA9PT0gMzA3KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhIG5ldyBmcmlkZ2UnKTtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU1lbmRlbEZyaWRnZSh1c2VySWQsIHNjZW5TaG9ydENvZGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZScrIGVycik7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICB9IH1cbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGZyaWRnZSBiZWNhdXNlIHRoaXMgdXNlciBkb2Vzbid0IGhhdmUgb25lIGZvciB0aGlzIHNjZW5hcmlvXG4gICAqXG4gICAqIE9uIHN1Y2Nlc3MsIGluaWFsaXplcyBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCAtIGxvZ2dlZCBpbiB1c2VyJ3MgaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCAtIGN1cnJlbnQgc2NlbmFyaW8gaWRcbiAgICovXG4gIF9jcmVhdGVNZW5kZWxGcmlkZ2UodXNlcklkOiBudW1iZXIsIHNjZW5TaG9ydENvZGU6IHN0cmluZyl7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmNyZWF0ZU1lbmRlbEZyaWRnZSh1c2VySWQsIHNjZW5TaG9ydENvZGUpXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKGZyaWRnZSk9PntcbiAgICAgICAgY29uc29sZS5sb2coJ3dlIGdvdCB0aGUgbmV3IGZyaWRnZTogJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZyaWRnZSk7XG4gICAgICB0aGlzLl9pbml0RnJpZGdlKGZyaWRnZSk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgcGVkZXMgZm9yIHZpc2libGUgc2hlbGZcbiAgICovXG4gIF9jdXJyUGVkZXMoKXtcbiAgICBsZXQgc3RhcnQgPSB0aGlzLnNoZWxmKnRoaXMuc3BvdHM7XG4gICAgbGV0IGVuZCA9IHN0YXJ0K3RoaXMuc3BvdHM7XG4gICAgdGhpcy5jdXJyUGVkZXNfMWQgPSB0aGlzLnBlZGVMaXN0LnNsaWNlKHN0YXJ0LGVuZCk7XG4gICAgdmFyIGluZDogbnVtYmVyID0gMDtcbiAgICBcbiAgICB0aGlzLmN1cnJQZWRlcyA9IFtdO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgKHRoaXMuc3BvdHMvMikgOyBqKyspe1xuICAgICAgdGhpcy5jdXJyUGVkZXNbal0gPSBbXTtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgMjsgaysrKXtcbiAgICAgICAgdGhpcy5jdXJyUGVkZXNbal1ba10gPSB0aGlzLmN1cnJQZWRlc18xZFtpbmRdO1xuICAgICAgICBpbmQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cblxuICAvKipcbiAgICogSW50aWFsaXplcyB0aGUgZnJpZGdlIGFuZCBjb21wb25lbnQgdmFyaWFibGVzIHJlbGF0ZWQgdG8gd2hpY2ggc3RyYWlucyBhcmVcbiAgICogdmlzaWJsZSBiYXNlZCBvbiB0aGUgY3VycmVudCBzaGVsZlxuICAgKlxuICAgKiBAcGFyYW0ge0ZyaWRnZX0gbmV3RnJpZGdlIC0gZnJpZGdlIG9iamVjdCB0byBiZSBpbml0YWxpemVkXG4gICAqL1xuICBfaW5pdEZyaWRnZShuZXdGcmlkZ2U6IE1lbmRlbHBlZGVGcmlkZ2Upe1xuICAgIHRoaXMuZnJpZGdlID0gbmV3RnJpZGdlO1xuICAgIHRoaXMucGVkZUxpc3QgPSB0aGlzLl9maWxsUGVkZXMobmV3RnJpZGdlLnBlZGVzKTtcbiAgICB0aGlzLl9jdXJyUGVkZXMoKTtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2Uuc2V0U2NlbmFyaW8obmV3RnJpZGdlLmdlbm9GYWN0cyk7XG4gIH1cblxuICAvKipcbiAgICogRmlsbHMgaW4gdGhlIGVtcHR5IHNsb3RzIHdpdGggXCJlbXB0eVwiIHBoYWdlIG9iamVjdHNcbiAgICpcbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZVtdfSBmcmlkZ2VTdHJhaW5zIC0gYXJyYXkgb2Ygc3RyYWlucyBhY3R1YWxseSBpbiB0aGUgZnJpZGdlXG4gICAqXG4gICAqIEByZXR1cm5zIHtGcmlkZ2VQaGFnZVtdfSBhcnJheSBvZiBhbGwgc2xvdHMgaW4gZnJpZGdlLCBpbmNsdWRpbmcgZW1wdHlcbiAgICovXG4gIF9maWxsUGVkZXMoZnJpZGdlUGVkZXM6IE1lbmRlbHBlZGVQZWRlW10pOiBNZW5kZWxwZWRlUGVkZVtde1xuICAgIHZhciBvdXQ6IE1lbmRlbHBlZGVQZWRlW10gPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhTaGVsZip0aGlzLnNwb3RzOyBpKyspe1xuICAgICAgb3V0LnB1c2goe2J1Z0lkOiBpLCBnZW5vdHlwZTogbnVsbCwgcGhlbm90eXBlOiBudWxsLCB1c2VySWQ6IG51bGwsIGlzRmVtYWxlOiBudWxsfSk7XG4gICAgfVxuICAgIHRoaXMubmV4dFNwb3QgPSBmcmlkZ2VQZWRlc1swXS5idWdJZCArIDE7XG4gICAgLy8gYWRkIG9yaWdpbmFsIHBlZGVzXG4gICAgZm9yKGxldCBpPTA7IGkgPCBmcmlkZ2VQZWRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgbiA9IGZyaWRnZVBlZGVzW2ldLmJ1Z0lkO1xuICAgICAgb3V0W25dID0gZnJpZGdlUGVkZXNbaV07XG4gICAgICB0aGlzLm5leHRTcG90ID0gKG4gPT09IHRoaXMubmV4dFNwb3QgPyBuKzEgOiB0aGlzLm5leHRTcG90KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfSBcblxuICAvKipcbiAgICogSW5jcmVhc2Ugb3IgZGVjcmVhc2UgdmlzaWJsZSBzaGVsZiB0aGVuIHVwZGF0ZSB0aGUgdmlzaWJsZSBzdHJhaW5zXG4gICAqXG4gICAqIENhbGxlZCBieSBgKGNsaWNrKWAgb2YgcHJldi9uZXh0IGJ1dHRvbnNcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluYyAtIGFtb3VudCB0byBjaGFuZ2Ugc2hlbGYgYnlcbiAgICovXG4gIGNoYW5nZVNoZWxmKGluYzogbnVtYmVyKXtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIGlmKHRoaXMuc2hlbGYgPD0gdGhpcy5tYXhTaGVsZi0xICYmIGluYyA9PT0gMSl7XG4gICAgICB0aGlzLnNoZWxmKys7XG4gICAgICB0aGlzLl9jdXJyUGVkZXMoKTtcbiAgICB9IGVsc2UgaWYodGhpcy5zaGVsZiA+IDAgJiYgaW5jID09PSAtMSl7XG4gICAgICB0aGlzLnNoZWxmLS07XG4gICAgICB0aGlzLl9jdXJyUGVkZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHZpc2libGUgc2hlbGYgdG8gYSBzcGVjaWZpYyBudW1iZXI7XG4gICAqIHVzZWQgdG8ganVtcCB0byB0aGUgYmVnaW5uaW5nIGFuZCBlbmRcbiAgICpcbiAgICogQ2FsbGVkIGJ5IChjbGljaykgb2YgZmlyc3QvbGFzdCBidXR0b25zXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuU2hlbGYgLSBzaGVsZiB0byBnbyB0b1xuICAgKi9cbiAgc2V0U2hlbGYoblNoZWxmOiBudW1iZXIpe1xuICAgIHRoaXMuc2hlbGYgPSBuU2hlbGY7XG4gICAgdGhpcy5fY3VyclBlZGVzKCk7XG4gIH1cbiAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIHRoZSBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXNcbiAgICogdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2UudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1mcmlkZ2UvbXBlZGUtZnJpZGdlLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2Uuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2Uuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MDhcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21wZWRlLWxhYnJvb20nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tcGVkZS1sYWJyb29tLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9tcGVkZS1sYWJyb29tLnN0eWxlLmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBNZW5kZWxwZWRlTGFicm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICB1c2VyOiBVc2VyO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gICAgXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuXG4gIH1cbiAgLyoqXG4gICAqIEdldHMgQ1NTIGNsYXNzZXMgXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGNsYXNzZXMgd2hcbiAgICovXG5cbiAgZ2V0TWVuZGVscGVkZSgpOiBPYmplY3R7XG4gICAgcmV0dXJuIHtcbiAgICAgICdtcGVkZS1iYXNpYy10b3AtcmlnaHQnOiB0cnVlLFxuICAgIH1cbiAgfVxuICBnZXRNZW5kZWxwZWRldG9wbGVmdCgpOiBPYmplY3R7XG4gICAgcmV0dXJuIHtcbiAgICAgICdtcGVkZS1iYXNpYy10b3AtbGVmdCc6IHRydWUsXG4gICAgfVxuICB9XG4gIGdldE1lbmRlbHBlZGVib3R0b21sZWZ0KCk6IE9iamVjdHtcbiAgICByZXR1cm4ge1xuICAgICAgJ21wZWRlLWJhc2ljLWJvdHRvbS1sZWZ0JzogdHJ1ZSxcbiAgICB9XG4gIH1cbiAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20uY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20uc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MTFcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21lbmRlbHBlZGUtc2NlbmFyaW9zLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3B0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlQ29tcG9uZW50IH0gZnJvbSAnLi9tZW5kZWxwZWRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9zQ29tcG9uZW50IH0gZnJvbSAnLi9zY2VuYXJpb3MvbWVuZGVscGVkZS1zY2VuYXJpb3MuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbmRlbHBlZGVTY2VuYXJpb1Jlc29sdmVyIH0gZnJvbSAnLi9tZW5kZWxwZWRlLXNjZW5hcmlvLnJlc29sdmVyJztcbiBcbmV4cG9ydCBjb25zdCBNZW5kZWxwZWRlUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoIDogJ21lbmRlbHBlZGUnLFxuICAgIGNvbXBvbmVudCA6IE1lbmRlbHBlZGVDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgYnJlYWRjcnVtYnM6ICdtZW5kZWxwZWRlJ1xuICAgIH0sXG5cbiAgICBjaGlsZHJlbjpbXG4gICAgICB7XG4gICAgICAgIHBhdGggOiAnJywgXG4gICAgICAgIGNvbXBvbmVudCA6IE9wdGlvbnNDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGggOiAnOnNjZW5TaG9ydENvZGUnLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbWVuZGVscGVkZVNjZW5hcmlvOiBNZW5kZWxwZWRlU2NlbmFyaW9SZXNvbHZlclxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnQgOiBNZW5kZWxwZWRlU2NlbmFyaW9zQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnM6ICd7eyBtZW5kZWxwZWRlU2NlbmFyaW8ubGFiZWwgfX0nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=