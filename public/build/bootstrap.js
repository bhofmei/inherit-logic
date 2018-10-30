webpackJsonp([4],{

/***/ 118:
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
const http_1 = __webpack_require__(44);
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
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(22);
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
const http_1 = __webpack_require__(44);
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

/***/ 180:
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

/***/ 181:
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
const http_1 = __webpack_require__(44);
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
const http_1 = __webpack_require__(44);
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
const rxjs_1 = __webpack_require__(52);
const cricket_service_1 = __webpack_require__(118);
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
let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
};
PageNotFoundComponent = __decorate([
    core_1.Component({
        selector: 'page-not-found',
        templateUrl: __webpack_require__(859),
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;


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
        templateUrl: __webpack_require__(860),
        styleUrls: [__webpack_require__(861)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], HomeComponent);
exports.HomeComponent = HomeComponent;


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
const core_2 = __webpack_require__(1);
const select_drop_service_1 = __webpack_require__(180);
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
const router_1 = __webpack_require__(22);
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
        templateUrl: __webpack_require__(878)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AdminComponent);
exports.AdminComponent = AdminComponent;


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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
let AdminHomeComponent = class AdminHomeComponent {
};
AdminHomeComponent = __decorate([
    core_1.Component({
        selector: 'admin-home',
        templateUrl: __webpack_require__(879)
    })
], AdminHomeComponent);
exports.AdminHomeComponent = AdminHomeComponent;


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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
let NotAuthComponent = class NotAuthComponent {
};
NotAuthComponent = __decorate([
    core_1.Component({
        selector: 'not-auth',
        templateUrl: __webpack_require__(880)
    })
], NotAuthComponent);
exports.NotAuthComponent = NotAuthComponent;


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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(22);
const forms_1 = __webpack_require__(13);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(64);
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
        templateUrl: __webpack_require__(883)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.Router])
], SigninComponent);
exports.SigninComponent = SigninComponent;


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
const forms_1 = __webpack_require__(13);
const router_1 = __webpack_require__(22);
const rxjs_1 = __webpack_require__(52);
const authentication_service_1 = __webpack_require__(18);
const course_service_1 = __webpack_require__(182);
const read_error_1 = __webpack_require__(64);
const confirm_password_validator_1 = __webpack_require__(402);
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
        templateUrl: __webpack_require__(884)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        course_service_1.CourseService,
        router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ 402:
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
const router_1 = __webpack_require__(22);
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
const forms_1 = __webpack_require__(13);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(64);
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
        templateUrl: __webpack_require__(885)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], ForgetPasswordComponent);
exports.ForgetPasswordComponent = ForgetPasswordComponent;


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
const router_1 = __webpack_require__(22);
const forms_1 = __webpack_require__(13);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(64);
const confirm_password_validator_1 = __webpack_require__(402);
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
        templateUrl: __webpack_require__(886)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.ActivatedRoute])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;


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
let HelpComponent = class HelpComponent {
    constructor() { }
};
HelpComponent = __decorate([
    core_1.Component({
        selector: 'help',
        templateUrl: __webpack_require__(889),
        styleUrls: [__webpack_require__(890)]
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);
exports.HelpComponent = HelpComponent;


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
let HelpCricketComponent = class HelpCricketComponent {
    constructor() { }
};
HelpCricketComponent = __decorate([
    core_1.Component({
        selector: 'help-cricket',
        templateUrl: __webpack_require__(891)
    }),
    __metadata("design:paramtypes", [])
], HelpCricketComponent);
exports.HelpCricketComponent = HelpCricketComponent;


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
const rxjs_1 = __webpack_require__(52);
const profile_service_1 = __webpack_require__(181);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(64);
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
        templateUrl: __webpack_require__(894)
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        authentication_service_1.AuthenticationService])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;


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
const router_1 = __webpack_require__(22);
const rxjs_1 = __webpack_require__(52);
const profile_service_1 = __webpack_require__(181);
const authentication_service_1 = __webpack_require__(18);
const read_error_1 = __webpack_require__(64);
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
        templateUrl: __webpack_require__(895)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        profile_service_1.ProfileService,
        authentication_service_1.AuthenticationService])
], UpdatePasswordComponent);
exports.UpdatePasswordComponent = UpdatePasswordComponent;


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
const authentication_service_1 = __webpack_require__(18);
const cricket_service_1 = __webpack_require__(118);
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
        templateUrl: __webpack_require__(898)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        cricket_service_1.CricketService])
], ScenarioListComponent);
exports.ScenarioListComponent = ScenarioListComponent;


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
const authentication_service_1 = __webpack_require__(18);
const scenarios_service_1 = __webpack_require__(413);
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
        templateUrl: __webpack_require__(904)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        scenarios_service_1.MendelpedeScenarioService])
], OptionsComponent);
exports.OptionsComponent = OptionsComponent;


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
const http_1 = __webpack_require__(44);
let MendelpedeScenarioService = class MendelpedeScenarioService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = 'api/mendelpede';
    }
    listScenarios() {
        console.log('Goin to get list');
        return this._http
            .get(this._baseURL);
    }
};
MendelpedeScenarioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], MendelpedeScenarioService);
exports.MendelpedeScenarioService = MendelpedeScenarioService;


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
        templateUrl: __webpack_require__(911)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], MendelpedeScenariosComponent);
exports.MendelpedeScenariosComponent = MendelpedeScenariosComponent;


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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
let MendelpedeComponent = class MendelpedeComponent {
};
MendelpedeComponent = __decorate([
    core_1.Component({
        selector: 'mendelpede',
        templateUrl: __webpack_require__(913)
    })
], MendelpedeComponent);
exports.MendelpedeComponent = MendelpedeComponent;


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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const http_1 = __webpack_require__(44);
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
const ng_bootstrap_1 = __webpack_require__(119);
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
        templateUrl: __webpack_require__(862)
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], ConfirmDeleteDialogComponent);
exports.ConfirmDeleteDialogComponent = ConfirmDeleteDialogComponent;


/***/ }),

/***/ 53:
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
const ng_bootstrap_1 = __webpack_require__(119);
const ngx_breadcrumbs_1 = __webpack_require__(179);
const confirm_delete_dialog_component_1 = __webpack_require__(417);
const person_name_pipe_1 = __webpack_require__(863);
const people_list_names_pipe_1 = __webpack_require__(864);
const phage_parents_pipe_1 = __webpack_require__(865);
const form_errors_module_1 = __webpack_require__(866);
const select_drop_module_1 = __webpack_require__(875);
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

/***/ 64:
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

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = __webpack_require__(230);
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(857);
if (process.env.NODE_ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(317)))

/***/ }),

/***/ 857:
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
const http_1 = __webpack_require__(44);
const ngx_breadcrumbs_1 = __webpack_require__(179);
const app_routes_1 = __webpack_require__(858);
const authentication_service_1 = __webpack_require__(18);
const logged_in_guard_service_1 = __webpack_require__(120);
const cricket_service_1 = __webpack_require__(118);
const course_service_1 = __webpack_require__(182);
const scenario_resolver_1 = __webpack_require__(183);
const shared_module_1 = __webpack_require__(53);
const admin_module_1 = __webpack_require__(876);
const authentication_module_1 = __webpack_require__(881);
const help_module_1 = __webpack_require__(887);
const profile_module_1 = __webpack_require__(892);
const cricket_module_1 = __webpack_require__(896);
const app_component_1 = __webpack_require__(899);
const nav_component_1 = __webpack_require__(900);
const page_not_found_component_1 = __webpack_require__(393);
const home_component_1 = __webpack_require__(394);
const mendelpede_module_1 = __webpack_require__(903);
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
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [ngx_breadcrumbs_1.McBreadcrumbsConfig])
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const page_not_found_component_1 = __webpack_require__(393);
const home_component_1 = __webpack_require__(394);
exports.AppRoutes = [{
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }];


/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/page-not-found/page-not-found.template.html";

/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/home/home.template.html";

/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/home/home.style.css";

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/confirm-delete-dialog.template.html";

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
const common_1 = __webpack_require__(14);
const forms_1 = __webpack_require__(13);
const forms_2 = __webpack_require__(13);
const required_error_component_1 = __webpack_require__(867);
const email_error_component_1 = __webpack_require__(869);
const password_error_component_1 = __webpack_require__(871);
const confirm_password_error_component_1 = __webpack_require__(873);
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

/***/ 867:
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
        templateUrl: __webpack_require__(868)
    })
], RequiredErrorComponent);
exports.RequiredErrorComponent = RequiredErrorComponent;


/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/required-error.template.html";

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
        templateUrl: __webpack_require__(870)
    })
], EmailErrorComponent);
exports.EmailErrorComponent = EmailErrorComponent;


/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/email-error.template.html";

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
        templateUrl: __webpack_require__(872)
    })
], PasswordErrorComponent);
exports.PasswordErrorComponent = PasswordErrorComponent;


/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/password-error.template.html";

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
        templateUrl: __webpack_require__(874)
    })
], ConfirmPasswordErrorComponent);
exports.ConfirmPasswordErrorComponent = ConfirmPasswordErrorComponent;


/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/confirm-password-error.template.html";

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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const select_drop_service_1 = __webpack_require__(180);
const select_drop_component_1 = __webpack_require__(395);
__export(__webpack_require__(180));
__export(__webpack_require__(395));
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
const router_1 = __webpack_require__(22);
const shared_module_1 = __webpack_require__(53);
const admin_routes_1 = __webpack_require__(877);
const admin_component_1 = __webpack_require__(397);
const admin_home_component_1 = __webpack_require__(398);
const not_auth_component_1 = __webpack_require__(399);
const admin_guard_service_1 = __webpack_require__(396);
const student_service_1 = __webpack_require__(416);
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

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const admin_guard_service_1 = __webpack_require__(396);
const logged_in_guard_service_1 = __webpack_require__(120);
const admin_component_1 = __webpack_require__(397);
const admin_home_component_1 = __webpack_require__(398);
const not_auth_component_1 = __webpack_require__(399);
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
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(1).then((function (require) { resolve(__webpack_require__(914)['CourseModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
                data: {
                    breadcrumbs: 'Courses'
                }
            },
            {
                path: 'students',
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(2).then((function (require) { resolve(__webpack_require__(915)['StudentModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
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

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/admin.template.html";

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/admin-home/admin-home.template.html";

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/not-auth/not-auth.template.html";

/***/ }),

/***/ 881:
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
const router_1 = __webpack_require__(22);
const shared_module_1 = __webpack_require__(53);
const authentication_routes_1 = __webpack_require__(882);
const signin_component_1 = __webpack_require__(400);
const signup_component_1 = __webpack_require__(401);
const signout_component_1 = __webpack_require__(403);
const forget_password_component_1 = __webpack_require__(404);
const reset_password_component_1 = __webpack_require__(405);
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

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const signin_component_1 = __webpack_require__(400);
const signup_component_1 = __webpack_require__(401);
const signout_component_1 = __webpack_require__(403);
const forget_password_component_1 = __webpack_require__(404);
const reset_password_component_1 = __webpack_require__(405);
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

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/signin/signin.template.html";

/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/signup/signup.template.html";

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/forget-password/forget-password.template.html";

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/reset-password/reset-password.template.html";

/***/ }),

/***/ 887:
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
const help_routes_1 = __webpack_require__(888);
const help_component_1 = __webpack_require__(406);
const help_cricket_component_1 = __webpack_require__(407);
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

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const help_component_1 = __webpack_require__(406);
const help_cricket_component_1 = __webpack_require__(407);
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

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help.template.html";

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help.style.css";

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help-cricket/help-cricket.template.html";

/***/ }),

/***/ 892:
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
const profile_routes_1 = __webpack_require__(893);
const profile_service_1 = __webpack_require__(181);
const user_profile_component_1 = __webpack_require__(408);
const update_password_component_1 = __webpack_require__(409);
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

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const logged_in_guard_service_1 = __webpack_require__(120);
const user_profile_component_1 = __webpack_require__(408);
const update_password_component_1 = __webpack_require__(409);
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

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/profile/user-profile/user-profile.template.html";

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/profile/update-password/update-password.template.html";

/***/ }),

/***/ 896:
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
const cricket_routes_1 = __webpack_require__(897);
const cricket_component_1 = __webpack_require__(410);
const scenario_list_component_1 = __webpack_require__(411);
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

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cricket_component_1 = __webpack_require__(410);
const scenario_resolver_1 = __webpack_require__(183);
const scenario_list_component_1 = __webpack_require__(411);
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
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(0).then((function (require) { resolve(__webpack_require__(916)['LocationModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
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

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/scenario-list/scenario-list.template.html";

/***/ }),

/***/ 899:
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
        templateUrl: __webpack_require__(901),
        styleUrls: [__webpack_require__(902)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], NavComponent);
exports.NavComponent = NavComponent;


/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/nav/nav.template.html";

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/nav/nav.style.css";

/***/ }),

/***/ 903:
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
const options_component_1 = __webpack_require__(412);
const mpede_fridge_component_1 = __webpack_require__(905);
const mpede_labroom_component_1 = __webpack_require__(908);
const scenarios_component_1 = __webpack_require__(414);
const scenarios_service_1 = __webpack_require__(413);
const mendelpede_routes_1 = __webpack_require__(912);
const mendelpede_component_1 = __webpack_require__(415);
const shared_module_1 = __webpack_require__(53);
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
            scenarios_component_1.MendelpedeScenariosComponent,
            mendelpede_component_1.MendelpedeComponent,
        ],
        providers: [
            scenarios_service_1.MendelpedeScenarioService,
        ],
    })
], MendelpedeModule);
exports.MendelpedeModule = MendelpedeModule;


/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/options/options.template.html";

/***/ }),

/***/ 905:
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
let MendelpedeFridgeComponent = class MendelpedeFridgeComponent {
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
MendelpedeFridgeComponent = __decorate([
    core_1.Component({
        selector: 'mendelpede-fridge',
        templateUrl: __webpack_require__(906),
        styleUrls: [__webpack_require__(907)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], MendelpedeFridgeComponent);
exports.MendelpedeFridgeComponent = MendelpedeFridgeComponent;


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-fridge/mpede-fridge.template.html";

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-fridge/mpede-fridge.style.css";

/***/ }),

/***/ 908:
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
        templateUrl: __webpack_require__(909),
        styleUrls: [__webpack_require__(910)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], MendelpedeLabroomComponent);
exports.MendelpedeLabroomComponent = MendelpedeLabroomComponent;


/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-labroom/mpede-labroom.template.html";

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-labroom/mpede-labroom.style.css";

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/scenarios.template.html";

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const options_component_1 = __webpack_require__(412);
const mendelpede_component_1 = __webpack_require__(415);
const scenarios_component_1 = __webpack_require__(414);
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
                path: 'mpede-scenarios',
                component: scenarios_component_1.MendelpedeScenariosComponent,
                data: {
                    breadcrumbs: 'labroom'
                }
            }
        ]
    }
];


/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/mendelpede.template.html";

/***/ })

},[856]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvY3JpY2tldC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvc2NlbmFyaW8ucmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLmd1YXJkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLXBhc3N3b3JkLnZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25vdXQvc2lnbm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAtY3JpY2tldC9oZWxwLWNyaWNrZXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXBkYXRlLXBhc3N3b3JkL3VwZGF0ZS1wYXNzd29yZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9zY2VuYXJpby1saXN0L3NjZW5hcmlvLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3Mvc2NlbmFyaW9zLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9zY2VuYXJpb3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tZW5kZWxwZWRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9yZWFkLWVycm9yLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9ib290c3RyYXAudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXBwLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9ob21lL2hvbWUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hvbWUvaG9tZS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9wZXJzb24tbmFtZS5waXBlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGVvcGxlLWxpc3QtbmFtZXMucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BpcGVzL3BoYWdlLXBhcmVudHMucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL3JlcXVpcmVkLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2VtYWlsLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL3Bhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAtY3JpY2tldC9oZWxwLWNyaWNrZXQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvY3JpY2tldC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9zY2VuYXJpby1saXN0L3NjZW5hcmlvLWxpc3QudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9uYXYvbmF2LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL25hdi9uYXYudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL25hdi9uYXYuc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tZW5kZWxwZWRlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvb3B0aW9ucy9vcHRpb25zLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1mcmlkZ2UvbXBlZGUtZnJpZGdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2UudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2Uuc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL3NjZW5hcmlvcy50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tZW5kZWxwZWRlLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQWdFO0FBQ2hFLHNDQUEyQztBQUMzQyx1Q0FBa0Q7QUFRbEQsSUFBYSxjQUFjLEdBQTNCO0lBNEJJLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUExQjdCLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFLekIscUJBQWdCLEdBQUcsSUFBSSxzQkFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzNELHVCQUFrQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUlsRCxxQkFBZ0IsR0FBRyxJQUFJLHNCQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDeEQsZUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU8xQyxrQkFBYSxHQUFHLElBQUksc0JBQWUsQ0FBUyxFQUFFLENBQUMs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QUNBQSxpSDs7Ozs7OztBQ0FBLG1HOzs7Ozs7Ozs7O0FDQ0EscURBQStEO0FBQy9ELHdEQUE2RDtBQUM3RCx1REFBK0U7QUFFbEUsd0JBQWdCLEdBQVc7SUFDdEM7UUFDRSxJQUFJLEVBQUcsWUFBWTtRQUNuQixTQUFTLEVBQUcsMENBQW1CO1FBQy9CLElBQUksRUFBRTtZQUNKLFdBQVcsRUFBRSxZQUFZO1NBQzFCO1FBRUQsUUFBUSxFQUFDO1lBQ1A7Z0JBQ0UsSUFBSSxFQUFHLEVBQUU7Z0JBQ1QsU0FBUyxFQUFHLG9DQUFnQjthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRyxpQkFBaUI7Z0JBQ3hCLFNBQVMsRUFBRyxrREFBNEI7Z0JBQ3hDLElBQUksRUFBRTtvQkFDSixXQUFXLEVBQUUsU0FBUztpQkFDdkI7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDOzs7Ozs7OztBQzNCRiwwRiIsImZpbGUiOiJib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIEJlaGF2aW9yU3ViamVjdCAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTY2VuYXJpbywgRnJpZGdlLCBGcmlkZ2VQaGFnZSwgR2Vub3R5cGVQaGFnZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIFNjZW5hcmlvL2ZyaWRnZSByZWxhdGVkIGZ1bmN0aW9ucyB0aGF0IGdldC9zZW5kIGRhdGEgdG8gdGhlIGJhY2tlbmQgc2VydmVyXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDcmlja2V0U2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9iYXNlVVJMID0gJ2FwaS9jcmlja2V0JztcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGRldGFpbHMgd2hpY2ggaXMgbmVlZGVkIHdoZW5cbiAgICogcGVyZm9ybWluZyBjcm9zc2VzXG4gICAqL1xuICAgIHByaXZhdGUgX3NjZW5hcmlvRGV0YWlscyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gICAgZ2V0U2NlbmFyaW9EZXRhaWxzID0gdGhpcy5fc2NlbmFyaW9EZXRhaWxzLmFzT2JzZXJ2YWJsZSgpO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2NlbmFyaW8gZ3Vlc3Nlc1xuICAgKi9cbiAgICBwcml2YXRlIF9zY2VuYXJpb0d1ZXNzZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe30pO1xuICAgIGdldEd1ZXNzZXMgPSB0aGlzLl9zY2VuYXJpb0d1ZXNzZXMuYXNPYnNlcnZhYmxlKCk7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBzY2VuYXJpbyBjb2RlXG4gICAqXG4gICAqIFVzZWQgYnkgZnJpZGdlIGFuZCBsb2NhdGlvbiBjb21wb25lbnRzXG4gICAqIHRvIGdldCB0aGUgY29kZSB3aXRob3V0IHRoZSByb3V0ZVxuICAgKi9cbiAgICBwcml2YXRlIF9zY2VuYXJpb0NvZGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICAgIGdldFNjZW5hcmlvQ29kZSA9IHRoaXMuX3NjZW5hcmlvQ29kZS5hc09ic2VydmFibGUoKTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCB0aGUgc2VydmljZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtIdHRwQ2xpZW50fSBfaHR0cCBBbmd1YXIgbWVjaGFuaXNtIHRvIG1ha2UgY2FsbHMgdG8gYmFja2VuZCBzZXJ2ZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgc2F2ZSBzY2VuYXJpbyBzdHVmZjpcbiAgICogc2NlbmFyaW9EZXRhaWxzLCBzY2VuYXJpb0d1ZXNzZXMsIGFuZCBzY2VuYXJpb0NvZGVcbiAgICpcbiAgICogVXNlZCB3aGVuIG5hdmlnYXRpbmcgYXdheSBmcm9tIHNjZW5hcmlvIGNvbXBvbmVudFxuICAgKi9cbiAgcmVzZXRTY2VuYXJpbygpIHtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9EZXRhaWxzLm5leHQoJycpO1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0d1ZXNzZXMubmV4dCh7fSk7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvQ29kZS5uZXh0KCcnKTtcbiAgICB9XG5cbiAgLyoqXG4gICogU2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzIGFuZCBzY2VuYXJpbyBndWVzc2VzXG4gICpcbiAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbmFyaW9EZXRhaWxzIC0gc2NlbmFyaW8gZGV0YWlsc1xuICAqIC0gbmVjZXNzYXJ5IGZvciBwZXJmb3JtaW5nIGV4cGVyaW1lbnRzXG4gICogQHBhcmFtIHtzdHJpbmd9IHNjZW5hcmlvR3Vlc3NlcyBjdXJyZW50IHNjZW5hcmlvIGd1ZXNzZXNcbiAgKi9cbiAgc2V0U2NlbmFyaW8oc2NlbmFyaW9EZXRhaWxzOiBzdHJpbmcsIHNjZW5hcmlvR3Vlc3Nlczogc3RyaW5nKSB7XG4gICAgICAgIGlmIChzY2VuYXJpb0RldGFpbHMgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLl9zY2VuYXJpb0RldGFpbHMubmV4dChzY2VuYXJpb0RldGFpbHMpO1xuICAgICAgICBpZiAoc2NlbmFyaW9EZXRhaWxzICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fc2NlbmFyaW9HdWVzc2VzXG4gICAgICAgICAgICAgIC5uZXh0KEpTT04ucGFyc2Uoc2NlbmFyaW9HdWVzc2VzKSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8U2NlbmFyaW9bXT59IGxpc3Qgb2Ygc2NlbmFyaW9zXG4gICAqL1xuICAgIGxpc3RTY2VuYXJpb3MoKTogT2JzZXJ2YWJsZTxTY2VuYXJpb1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PFNjZW5hcmlvW10+KHRoaXMuX2Jhc2VVUkwpXG4gICAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBzY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGlkZW50aWZpZXJcbiAgICpcbiAgICogQHJldHVybnMge1NjZW5hcmlvfVxuICAgKiAtIHNjZW5hcmlvIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gbG9hZCBzY2VuYXJpbyA8c2NlbklkPlwiIGlmIHNjZW5hcmlvIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgZ2V0U2NlbmFyaW8oc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNjZW5hcmlvPiB7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvQ29kZS5uZXh0KHNjZW5JZCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PFNjZW5hcmlvPihgJHt0aGlzLl9iYXNlVVJMfS8ke3NjZW5JZH1gKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgdXBkYXRlZCBndWVzc2VzIGZvciB0aGUgc2NlbmFyaW8gdG8gYmUgc2F2ZWQgaW4gZGF0YWJhc2VcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGd1ZXNzZXMgc3RyaW5nIG9mIHVwZGF0ZWQgZ3Vlc3Nlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKiAtIHVwZGF0ZWQgZ3Vlc3Nlc1xuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBcIkNvdWxkIG5vdCBzYXZlIG5ldyBndWVzc2VzXCIgaWYgY291bGRuJ3QgdXBkYXRlXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIHNhdmVEZWxldGlvbnMoZ3Vlc3NlczogYW55LCB1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3QoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9kZWxldGlvbnNgLCBndWVzc2VzKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmcmlkZ2UgZm9yIHRoZSB1c2VyL3NjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZT59XG4gICAqIC0gbmV3bHkgY3JlYXRlZCBmcmlkZ2VcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byBjcmVhdGUgbmV3IHBoYWdlIGZvciBzY2VuYXJpb1wiIGlmIGlzc3VlIGNyZWF0ZSBwaGFnZVxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIHNhdmUgbmV3IGZyaWRnZVwiIGlmIGNvdWxkbid0IGNyZWF0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICBjcmVhdGVGcmlkZ2UodXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGcmlkZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PEZyaWRnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9uZXctZnJpZGdlYCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXhpc3RpbmcgZnJpZGdlIGZvciB1c2VyL3NjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZT59XG4gICAqIC0gZXhpc3RpbmcgZnJpZGdlXG4gICAqIC0gb3IgZXJyb3IgXCJObyBmcmlkZ2UgZm9yIHNjZW5hcmlvL3VzZXJcIiBpZiBmcmlkZ2UgZG9lcyBub3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgZ2V0RnJpZGdlKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RnJpZGdlPiB7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PEZyaWRnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfWApO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IHBoYWdlIHN0cmFpbiB0byB0aGUgZnJpZGdlO1xuICAgKiBTZXJ2ZXIgdXNlcyB1c2VySWQgYW5kIHNjZW5Db2RlIHRvIGZpbmQgdGhlIGZyaWRnZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKiBAcGFyYW0ge2FueX0gc3RyYWluIC0gbmV3IHBoYWdlIHRvIGFkZCB0byBmcmlkZ2VcbiAgICogLSBoYXMgc3RyYWluTnVtLCBtdXRhdGlvbkxpc3QsIGFuZCBkZWxldGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2VQaGFnZT59XG4gICAqIC0gbmV3bHkgc2F2ZWQgcGhhZ2VcbiAgICogLSBvciBlcnJvciBcIlVzZXIgbm90IGZvdW5kXCIgaWYgdXNlciBub3QgZm91bmRcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBsb2FkIHNjZW5hcmlvIDxzY2VuSWQ+XCIgaWYgc2NlbmFyaW8gbm90IGZvdW5kXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gZmluZCBmcmlkZ2VcIiBpZiBmcmlkZ2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICBhZGRTdHJhaW4odXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCBzdHJhaW46IGFueSk6IE9ic2VydmFibGU8RnJpZGdlUGhhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0PEZyaWRnZVBoYWdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9L2ZyaWRnZS1waGFnZWAsIHN0cmFpbilcbiAgICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBkZXRhaWxzL2luZm9ybWF0aW9uIGFib3V0IGFuIGV4aXN0aW5nIHBoYWdlIGluIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZX0gc3RyYWluIC0gc3RyYWluIHRvIHVwZGF0ZVxuICAgKiAtIHVzZSBzdHJhaW4gYGlkYCB0byBzcGVjaWZ5IHN0cmFpbiBhbmQgc2VuZCB1cGRhdGVkIGluZm9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlUGhhZ2U+fVxuICAgKiAtIHVwZGF0ZWQgc3RyYWluXG4gICAqIC0gb3IgZXJyb3IgXCJQaGFnZSBub3QgZm91bmRcIiBpZiBzdHJhaW4gZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICB1cGRhdGVTdHJhaW4odXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCBzdHJhaW46IEZyaWRnZVBoYWdlKTogT2JzZXJ2YWJsZTxGcmlkZ2VQaGFnZT4ge1xuICAgICAgICBsZXQgc3RyYWluSWQgPSBzdHJhaW4uaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdDxGcmlkZ2VQaGFnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS8ke3N0cmFpbklkfWAsIHN0cmFpbilcbiAgICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHN0cmFpbiBmcm9tIHRoZSBmcmlkZ2UgKGFuZCBkYXRhYmFzZSlcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZX0gc3RyYWluIC0gdGhlIHN0cmFpbiB0byBkZWxldGVcbiAgICogLSB1c2Ugc3RyYWluIGBpZGAgdG8gc3BlY2lmeSB3aGljaCBzdHJhaW4gdG8gZGVsZXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9XG4gICAqIC0gdGhlIHN0cmFpbiBqdXN0IGRlbGV0ZWRcbiAgICogLSBvciBlcnJvciBcIlBoYWdlIG5vdCBmb3VuZFwiIGlmIHN0cmFpbiBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gZmluZCBmcmlkZ2VcIiBpZiBmcmlkZ2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIHJlbW92ZSBzdHJhaW4gZnJvbSBmcmlkZ2VcIiBpZiBjb3VsZG4ndCBkZWxldGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgZGVsZXRlU3RyYWluKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgc3RyYWluOiBGcmlkZ2VQaGFnZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGxldCBzdHJhaW5JZCA9IHN0cmFpbi5pZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS8ke3N0cmFpbklkfWApXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogUm91dGVyIGd1YXJkIHRoYXQgbWFrZXMgc3VyZSBvbmx5IGxvZ2dlZCBpbiB1c2VycyBjYW4gYWNjZXNzIHRoZSBwYWdlIGFuZCBhbGwgY2hpbGQgcGFnZXNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2dlZEluR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdXNlciBjYW4gYWN0aXZhdGUgKHZpc2l0KSBhIHBhZ2VcbiAgICogYmFzZWQgb24gaWYgYSB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKlxuICAgKiBJZiBub3QgbG9nZ2VkIGluLCBzZXRzIHRoZSByZWRpcmVjdCB1cmwgdG8gdGFrZSB1c2VyIGJhY2sgdG8gdGhpcyBwYWdlIF9hZnRlcl8gbG9nZ2luZyBpbiBhbmRcbiAgICogc2VuZHMgdGhlIHVzZXIgdG8gdGhlIHNpZ24gaW4gcGFnZVxuICAgKlxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIC0gY3VycmVudCBVUkxcbiAgICogQHBhcmFtIHtSb3V0ZXJTdGF0ZXNuYXBzaG90fSBzdGF0ZSAtIHJvdXRlciBzdGF0ZSBpbmNsdWRpbmcgdGhlIHVybCB0cnlpbmcgdG8gYWNlc3NcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gYHRydWVgIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqIC0gYGZhbHNlYCBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW5cbiAgICovXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBib29sZWFuIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSBzdGF0ZS51cmw7XG5cbiAgICBsZXQgaXNMb2dnZWRJbjogYm9vbGVhbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgaWYoaXNMb2dnZWRJbilcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VXJsID0gdXJsO1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnYXV0aGVudGljYXRpb24vc2lnbmluJ10pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHVzZXIgY2FuIGFjdGl2YXRlIGFsbCBjaGlsZC9zdWIgcGFnZXMgZGVwZW5kaW5nIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqXG4gICAqIE9ubHkgbG9nZ2VkIGluIHVzZXJzIGNhbiBhY3RpdmF0ZSB0aGUgcGFnZXNcbiAgICovXG4gIGNhbkFjdGl2YXRlQ2hpbGQocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuQWN0aXZhdGUocm91dGUsIHN0YXRlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UudHMiLCIvL2ltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgZGVhbHMgd2l0aCB2YWxpZGF0aW5nIGFuZCBsb2dnaW5nIGluL291dCB1c2VycyBhbmRcbiAqIHJlc2V0dGluZyBmb3Jnb3R0ZW4gcGFzc3dvcmRzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuICAgIHByaXZhdGUgX3VzZXI6IEJlaGF2aW9yU3ViamVjdDxVc2VyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VXNlcj4obnVsbCk7XG4gICAgZ2V0VXNlciQgPSB0aGlzLl91c2VyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBfYmFzZVVybCA9ICcvYXBpL2F1dGgvJ1xuXG4gIC8qKlxuICAgKiBXaGVuIGEgbm9uLWxvZ2dlZCBpbiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBhIHBhZ2Ugd2hpY2ggcmVxdWlyZXMgbG9nZ2luZyBpbixcbiAgICogc2F2ZSB0aGF0IHBhZ2UncyB1cmwgYW5kIGRpcmVjdCB1c2VyIHRoZXJlIGFmdGVyIHRoZXkgbG9nIGluXG4gICAqL1xuICAgIHB1YmxpYyByZWRpcmVjdFVybDogc3RyaW5nID0gJy8nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzZXJ2aWNlcyBgdXNlcmAgdmFyaWFibGUgd2hpY2ggaXMgc3RvcmVkIGFmdGVyIHVzZXIgbG9ncyBpblxuICAgKlxuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgLSBjdXJyZW50IHVzZXIgd2hvIGxvZ2dlZCBpblxuICAgKiAtIG9yIGBudWxsYCB0byB1bnNldCB0aGUgdXNlclxuICAgKi9cbiAgc2V0VXNlcih1c2VyOiBVc2VyKXtcbiAgICB0aGlzLl91c2VyLm5leHQodXNlcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHVzZXIgaW5mb3JtYXRpb24gbm90IGFzIGFuIG9ic2VydmFibGVcbiAgICogc28gaXQgaXMgc3luY2hyb25vdXMgYW5kIGtlZXBzIHRoZSBhcHAgY29tcG9uZW50cycgYG5nT25Jbml0YFxuICAgKiBmdW5jdGlvbnMgY2xlYW5lclxuICAgKlxuICAgKiBAcmV0dXJucyB7VXNlcn0gdGhlIGN1cnJlbnQgdXNlciBvciBgbnVsbGAgaWYgbm8gdXNlciBsb2dnZWQgaW5cbiAgICovXG4gIGdldFVzZXIoKTogVXNlcntcbiAgICByZXR1cm4gdGhpcy5fdXNlci5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqXG4gICAqIEByZXF1aXJlcyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgYSB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKiAtIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBpc0xvZ2dlZEluKCk6IGJvb2xlYW57XG4gICAgcmV0dXJuICghIXRoaXMuZ2V0VXNlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgdXNlciBjYW4gYWNjZXNzIHRoZSBhZG1pbiBwYWdlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgdXNlciBpcyBpbnN0ciBvciBhZG1pblxuICAgKiAtIGBmYWxzZWAgaWYgdXNlciBpcyBvbmx5IGEgc3R1ZGVudFxuICAgKi9cbiAgY2FuQWNjZXNzQWRtaW4oKTogYm9vbGVhbntcbiAgICBpZih0aGlzLmdldFVzZXIoKSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRVc2VyKCkucm9sZSA+IDBcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gc2lnbiBhIHVzZXIgaW4gdXNpbmcgdGhlIHByb3ZpZGVkIGNyZWRlbnRpYWxzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBjcmVkZW50aWFscyAtIGB1c2VybmFtZWAgKGFzIGVtYWlsKSBhbmQgYHBhc3N3b3JkYCB0byBiZSB0ZXN0ZWQgZm9yIGxvZ2dpbmcgaW5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8VXNlcj59IC0gdGhlIHN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4gdXNlclxuICAgKiBlcnJvciBtZXNzYWdlIGBNaXNzaW5nIGNyZWRlbnRpYWxzYCBpZiBubyBlbWFpbCBvciBwYXNzd29yZFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYEludmFsaWQgcGFzc3dvcmRgIGlmIHBhc3N3b3JkIGlzIGluY29ycmVjdFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYFVzZXIgbm90IGZvdW5kYCBpZiBpbnZhbGlkIGVtYWlsXG4gICAqIC0gZXJyb3IgbWVzc2FnZSBmb3Igc2VydmVyL2RhdGFiYXNlL2F1dGhlbnRpY2F0aW9uIGVycm9yXG4gICAqL1xuICBzaWduaW4oY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjcmVkZW50aWFscyk7XG4gICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLl9iYXNlVXJsICsgJ3NpZ25pbicsIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBjcmVhdGUgYSBuZXcgdXNlciB1c2luZyB0aGUgcHJvdmlkZWQgdXNlciBkZXRhaWxzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSB1c2VyIC0gdXNlciBkZXRhaWxzIGluY2x1ZGluZyBgZmlyc3ROYW1lYCwgYGxhc3ROYW1lYCwgYHVzZXJuYW1lYCAoZW1haWwpLCBgY291cnNlYCwgYW5kIGBwYXNzd29yZGBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8VXNlcj59IC0gVGhlIG5ldyBsb2dnZWQtaW4gdXNlciB3aGVuIHN1Y2Nlc3NmdWxseSBjcmVhdGUgbmV3IHVzZXJcbiAgICogLSBlcnJvciA0MDAgaWYgZXJycm9yIGxvZ2dpbmcgaW5cbiAgICogLSBlcnJvciA1MDAgaWYgZXJyb3IgY3JlYXRpbmcgdXNlclxuICAgKi9cbiAgc2lnbnVwKHVzZXI6IGFueSk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KHRoaXMuX2Jhc2VVcmwgKyAnc2lnbnVwJywgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpZ25zIG91dCB0aGUgdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSByZXR1cm5zIGB0cnVlYCBpZiBzdWNjZXNzZnVsbHkgc2lnbmVkIG91dFxuICAgKi9cbiAgc2lnbm91dCgpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5fYmFzZVVybCArICdzaWdub3V0Jyk7XG4gIH1cblxuICAvKipcbiAgICogU3VibWl0IGVtYWlsIGFkZHJlc3Mgb2YgcG90ZW50aWFsIHVzZXIgdG8gYWxsb3cgdGhhdCB1c2VyXG4gICAqIHRvIHJlc2V0IHRoZWlyIHBhc3N3b3JkIGlmIHRoZSB1c2VyIGV4aXN0c1xuICAgKlxuICAgKiBUaGUgYmFja2VuZCB0aGVuIHNlbmRzIGEgcGFzc3dvcmQgcmVzZXQgZW1haWwgdG8gdGhlXG4gICAqIGVtYWlsIGFkZHJlc3NcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGJvZHkgLSByZXF1ZXN0IGJvZHkgdGhhdCBpbmNsdWRlcyBgZW1haWxgIG9mIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBTdWNjZXNzIG1lc3NhZ2UgaWYgcGFzc3dvcmQgcmVzZXQgZW1haWwgc2VudFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYEVycm9yIHdpdGggc2VydmVyIGVtYWlsIHNlcnZpY2VgIGlmIHByb2JsZW0gd2l0aCBlbWFpbCB0cmFuc3BvcnRlclxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYE5vIGFjY291bnQgd2l0aCB0aGF0IGVtYWlsLmAgaWYgZW1haWwgYWRkcmVzcyBkb2Vzbid0IGNvcnJlc3BvbmQgdG8gYW4gZXhpc3RpbmcgdXNlclxuICAgKiAtIGVycm9yIDQyMiBmb3Igb3RoZXIgc2VydmVyIGVycm9yc1xuICAgKi9cbiAgZm9yZ2V0UGFzc3dvcmQoYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9iYXNlVXJsICsgJ2ZvcmdldC1wYXNzd29yZCcsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHJlc2V0IGEgdXNlcidzIHBhc3N3b3JkIHVzaW5nIHRoZSBjcmVkZW50aWFsc1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gY3JlZGVudGlhbHMgLSBpbmZvIG5lZWRlZCB0byByZXNldCBwYXNzd29yZDogYHBhc3N3b3JkLCBgY29uZmlybVBhc3N3b3JkYCwgYW5kIGB0b2tlbmBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBJZiBzdWNjZXNzZnVsLCBzZW5kcyBzdWNjZXNzIG1lc3NhZ2UgYFBhc3N3b3JkcyBoYXMgYmVlbiByZXNldGAuXG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgSW52YWxpZCB0b2tlbmAgaWYgdG9rZW4gZG9lc24ndCBleGlzdFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYFRva2VuIGhhcyBleHBpcmVkYCBmb3IgdmFsaWQgdG9rZW5zIGJ1dCB1c2VyIHRvb2sgdG9vIGxvbmcgdG8gYXR0ZW1wdCB0byByZXNldFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgZm9yIGFsbCBvdGhlciBlcnJvcnNcbiAgICovXG4gIHJlc2V0UGFzc3dvcmQoY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8YW55PntcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fYmFzZVVybCArICdyZXNldC1wYXNzd29yZCcsIGNyZWRlbnRpYWxzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZS50cyIsImltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BEYXRhIHtcbiAgZGF0YTogYW55O1xuICBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xuICAvL25hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERyb3BTZXJ2aWNlRmFjdG9yeSgpOiBTZWxlY3REcm9wU2VydmljZSB7XG4gIHJldHVybiBuZXcgU2VsZWN0RHJvcFNlcnZpY2UoKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BTZXJ2aWNlIHtcbiAgLy8gYWxsb3dlZCBkcm9wIHpvbmVzP1xuICBjdXJTb3VyY2U6IHN0cmluZztcbiAgZGF0YTogYW55O1xuICBvblN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPFNlbGVjdERyb3BEYXRhPjtcbiAgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgZWxlbTogSFRNTEVsZW1lbnQ7XG5cbiAgZGVzZWxlY3QoKXtcbiAgICB0aGlzLmN1clNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9uU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcbiAgICB0aGlzLnJlbW92ZUVsZW1DbGFzcygpO1xuICAgIHRoaXMuZWxlbT1udWxsO1xuICB9XG5cbiAgc2VsZWN0KHNvdXJjZU5hbWU6IHN0cmluZywgZGF0YTogYW55LCBodG1sZWxlbWVudDogSFRNTEVsZW1lbnQpe1xuICAgIHRoaXMuY3VyU291cmNlID0gc291cmNlTmFtZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5lbGVtID0gaHRtbGVsZW1lbnQ7XG4gICAgaWYodGhpcy5lbGVtKVxuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICB9XG5cbiAgcmVtb3ZlRWxlbUNsYXNzKCk6IHZvaWR7XG4gICAgaWYodGhpcy5lbGVtKVxuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3Auc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyB3aGljaCBjb21tdW5pY2F0ZSB0byBiYWNrZW5kIHRvIGFsbG93XG4gKiB1c2VycyB0byB1cGRhdGUgdGhlaXIgcHJvZmlsZSBhbmQvb3IgY2hhbmdlIHRoZSBwYXNzd29yZFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBMZWFkaW5nIGJhY2tlbmQgdXJsIHBhdGhcbiAgICovXG4gIHByaXZhdGUgX2Jhc2VVcmw6IHN0cmluZyA9ICcvYXBpL3VzZXJzLyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KXt9XG5cbiAgLyoqXG4gICAqIEVkaXQgZGV0YWlscyBhYm91dCB0aGUgdXNlciBwcm9maWxlIGluY2x1ZGluZ1xuICAgKiAxLiBObWVcbiAgICogMi4gRW1haWwgYWRkcmVzc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJRCBvZiB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHthbnl9IGRldGFpbHMgdXNlciBkZXRhaWxzIHRvIHVwZGF0ZSB3aXRoXG4gICAqIGV4aXNpdGluZyBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxVc2VyPn0gLSBUaGUgdXBkYXRlZCB1c2VyIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgZXJyb3IgXCJVc2VyIGRvZXMgbm90IGV4aXN0XCIgaWYgbm9uLWV4aXN0YW50IHVzZXJcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGVkaXRQcm9maWxlKHVzZXJJZDogbnVtYmVyLCBkZXRhaWxzOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXI+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLl9iYXNlVXJsICsgdXNlcklkLCBkZXRhaWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHVzZXIncyBwYXNzd29yZCBvbmNlIGFscmVhZHkgc2lnbmVkIGluXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklEIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7YW55fSBjcmVkZW50aWFscyAtIHBhc3N3b3JkIGluZm9ybWF0aW9uXG4gICAqIC0gaW5jbHVkZXM6IFwicGFzc3dvcmRcIiAob2xkIHBhc3N3b3JkKSBhbmQgXCJuZXdQYXNzd29yZFwiICAocGFzc3dvcmQgdG8gdXBkYXRlIHRvKVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxVc2VyPn0gLSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdXNlciBqdXN0IHVwZGF0ZWRcbiAgICogLSBvciBlcnJvciBcIlVzZXIgZG9lcyBub3QgZXhpc3RcIiBpZiBub24tZXhpc3RhbnQgdXNlclxuICAgKiAtIG9yIGVycm9yIFwiSW5jb3JyZWN0IHBhc3N3b3JkXCIgaWYgd3Jvbmcgb2xkIHBhc3N3b3JkXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICB1cGRhdGVQYXNzd29yZCh1c2VySWQ6IG51bWJlciwgY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8VXNlcj57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KHRoaXMuX2Jhc2VVcmwgKyB1c2VySWQgKyAnL3VwZGF0ZS1wYXNzd29yZCcsIGNyZWRlbnRpYWxzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb3Vyc2UsIFN0dWRlbnQsIEFkbWluU3R1ZGVudCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyByZWxhdGVkIHRvIGdldHRpbmcgY291cnNlIGluZm9ybWF0aW9uIGZyb20gdGhlIGJhY2sgZW5kIHNlcnZlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ291cnNlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfYmFzZVVSTCA9ICcvYXBpL2FkbWluJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBjb3Vyc2VzIGRlcGVuZGluZyBpZiB1c2VyXG4gICAqIGlzIGEgZnVsbCBhZG1pbiBvciBpbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIGRhdGFiYXNlIHVzZXIgSUQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENvdXJzZVtdPn0gLSBXaGVuIHN1Y2Nlc3NmdWwgYW5kIGBhZG1pbmAsIGxpc3Qgb2YgYWxsIGNvdXJzZXNcbiAgICogLSBXaGVuIHN1Y2Nlc3NmdWwgYW5kIGBpbnN0cmAsIGxpc3Qgb2YgY291cnNlcyBpbiB3aGljaCB1c2VyIGlzIGFuIGluc3RydWN0b3IgZm9yXG4gICAqIC0gb3IgZXJyb3IgXCJObyBjb3Vyc2VzIGZvdW5kXCIgaWYgbm8gY291cnNlcyB0byBsaXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGxpc3RDb3Vyc2VzKGFkbWluSWQ6IG51bWJlcik6IE9ic2VydmFibGU8Q291cnNlW10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PENvdXJzZVtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgY291cnNlIHdpdGggbG9nZ2VkIGluIHVzZXIgYXMgaW5zdHJ1Y3RvciBhbmRcbiAgICogZGV0YWlscyBzcGVjaWZpZWQgaW4gYGJvZHlgXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7YW55fSBib2R5IGNvdXJzZSBkZXRhaWxzIGluY2x1ZGluZyBgY291cnNlTnVtYCBhbmQgYGRlc2NyaXB0aW9uYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSAtIHRoZSBuZXdseSBjcmVhdGVkIGNvdXJzZSBpZiBzdWNjZXNzZnVsXG4gICAqIC0gb3IgZXJyb3IgbWVzc2FnZSBmb3Igc2VydmVyL2RhdGFiYXNlIGVycm9yc1xuICAgKi9cbiAgY3JlYXRlQ291cnNlKGFkbWluSWQ6IG51bWJlciwgYm9keTogYW55KTogT2JzZXJ2YWJsZTxDb3Vyc2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAucG9zdDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlc2AsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhIHNwZWNpZmljIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyICh3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHIpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2UgdG8gZ2V0IGluZm9ybWF0aW9uIGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSAtIHRoZSBjb3Vyc2UgaW5mb3JtYXRpb24gaW5jbHVkaW5nIGBjb3Vyc2VOdW1gLCBgZGVzY3JpcHRpb25gLCBhbmQgYGluc3RydWN0b3JzYFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldENvdXJzZShhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb3Vyc2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PENvdXJzZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBzdHVkZW50cyBpbiBhIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgdGhlIGNvdXJzZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTdHVkZW50W10+fSAtIGxpc3Qgb2Ygc3R1ZGVudHMgZWFjaCB3aXRoIHByb3BlcnRpZXMgYGZpcnN0TmFtZWAsIGBsYXN0TmFtZWAsIGB1c2VySWRgLCBgYWNjZXNzR3JhbnRlZGAsIGFuZCBgZW1haWxgXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIG1lc3NhZ2UgZm9yIHNlcnZlci9kYXRhYmFzZSBlcnJvcnNcbiAgICovXG4gIGdldFN0dWRlbnRzKGFkbWluSWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0dWRlbnRbXT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQ8U3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L3N0dWRlbnRzYCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBlZGl0aW5nIGEgY291cnNlLCB1c2VyIGlzIGFibGUgdG8gYWRkIG5ldyBpbnN0cnVjdG9ycy4gVGhpcyBtZXRob2QgcHJvZHVjZXMgdGhlIGxpc3Qgb2YgcG9zc2libGUgaW5zdHJ1Y3RvcnMgdGhhdCBjb3VsZCBiZSBhZGRlZFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2Ugd2UgYXJlIGVkaXRpbmdcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50W10+fSAtIGxpc3Qgb2YgcG90ZW50aWFsIGluc3R1Y3RvcnMgd2l0aCBwcm9wZXJ0aWVzIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcklkYCwgYW5kIGByb2xlYFxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldFBvc3NpYmxlSW5zdHJ1Y3RvcnMoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZyk6IE9ic2VydmFibGU8QWRtaW5TdHVkZW50W10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PEFkbWluU3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L2luc3RydWN0b3JzYCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIHVzZXIgYXMgYW4gaW5zdHJ1Y3RvciBvZiB0aGUgY291cnNlIGFuZCBjaGFuZ2UgdGhlIG5ldyBpbnN0cnVjdG9yJ3Mgcm9sZSB0byBgaW5zdHJgIGlmIG5lY2Vzc2FyeVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciB0byBhZGQgaW5zdHJ1Y3RvciBmb3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld0luc3RySWQgdXNlcklkIG9mIHVzZXIgdG8gYWRkIGFzIGluc3RydWN0b3Igb2YgdGhpcyBjb3Vyc2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB0aGUgdXBkYXRlZCBjb3Vyc2UgaW5mb3JtYXRpb25cbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgaWYgcHJvYmxlbSB1cGRhdGluZyB0aGUgY291cnNlXG4gICAqIC0gb3IgZXJyb3IgaWYgcHJvYmxlbSB1cGRhdGluZyB0aGUgbmV3IGluc3RydWN0b3Igcm9sZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgYWRkSW5zdHJ1Y3RvcihhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nLCBuZXdJbnN0cklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPENvdXJzZT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAucG9zdDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlcy8ke2NvdXJzZU51bX0vaW5zdHJ1Y3RvcnMvJHtuZXdJbnN0cklkfWAsIHtpbnN0cnVjdG9yOiB0cnVlfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGNvdXJzZSBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge2FueX0gYm9keSB1cGRhdGVkIGNvdXJzZSBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSAtIHVwZGF0ZWQgY291cnNlIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZWRpdENvdXJzZShhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nLCBib2R5OiBhbnkpOiBPYnNlcnZhYmxlPENvdXJzZT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5wb3N0PENvdXJzZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfWAsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgY291cnNlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2UgdG8gZGVsZXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IC0gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvdXJzZSBqdXN0IGRlbGV0ZWRcbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGRlbGV0ZUNvdXJzZSh1c2VySWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19YCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFsbCBvZiB0aGUgc3R1ZGVudHMgaW4gdGhlIGNvdXJzZTsgdXNlZnVsIGZvciBidWxrIGRlbGV0aW9uc1xuICAgKiB3aGVuIGEgY291cnNlIGlzIG92ZXJcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciB3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdXJzZU51bSBjb3Vyc2UgbnVtYmVyIG9mIGNvdXJzZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIGxpc3Qgb2Ygc3R1ZGVudHMganVzdCBkZWxldGVkXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBkZWxldGVTdHVkZW50cyh1c2VySWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L3N0dWRlbnRzYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjZW5hcmlvIHN0YXR1cyAoYWthIGFjY2VzcyBncmFudGVkKSBmb3IgYSBzY2VuYXJpbyBmb3IgYWxsIHN0dWRlbnRzIGluIGEgY291cnNlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuQ29kZSBvZiBzY2VuYXJpbyBvZiBpbnRlcmVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTdHVkZW50W10+fSAtIGxpc3Qgb2Ygc3R1ZGVudHMgaW4gY291cnNlIGVhY2ggd2l0aCBwcm9wZXJ0aWVzIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcklkYCwgYW5kIGBzdGF0dXNgXG4gICAqIC0gb3IgXCJubyBzdHVkZW50cyBmb3VuZFwiIGlmIG5vIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2VcbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ2V0U2NlbmFyaW9TdGF0dXMoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZywgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0dWRlbnRbXT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQ8U3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19LyR7c2NlbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIGNvdXJzZSBudW1iZXJzIGZvciBhbGwgYXZhaWxhYmxlIGNvdXJzZXNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBsaXN0IG9mIGNvdXJzZXMgd2l0aCBwcm9wZXJ0aWVzIGBjb3Vyc2VOdW1gIGFuZCBgaWRgXG4gICAqIC0gb3IgXCJObyBjb3Vyc2VzIGZvdW5kXCIgZXJyb3IgaWYgbm8gY291cnNlcyBmb3VuZFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ2V0Q291cnNlTGlzdCgpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQoYC9hcGkvY291cnNlc2ApO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJlc29sdmUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3JpY2tldFNlcnZpY2UgfSBmcm9tICcuL2NyaWNrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2NlbmFyaW8uaW50ZXJmYWNlJztcblxuLyoqXG4gKiBSZXNvbHZlcyBhIHJvdXRlIFVSTCB0byBnZXQgdGhlIHNjZW5hcmlvIGlkIChmcm9tIHRoZSB1cmwpXG4gKiB0aGVuIHVzZXMgdGhhdCB0byBnZXQgdGhlIHNjZW5hcmlvIGxhYmVsIHVzaW5nIHNjZW5hcmlvIHNlcnZpY2VcbiAqXG4gKiBUaGlzIGlzIHVzZWQgdG8gZ2VuZXJhdGUgaHVtYW4tcmVhZGFibGUgYnJlYWRjcnVtYiBsYWJlbHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPFNjZW5hcmlvPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBDcmlja2V0U2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCByZXF1aXJlZCBieSBpbXBsZW1lbnRhdGlvblxuICAgKiBCYXNlZCBvbiB0aGUgaWRlbnRpZmllZCBzY2VuQ29kZSBmcm9tIHRoZSBVUkwsIHVzZSB0aGUgc2VydmljZSBnbyBnZXQgdGhlIHNjZW5hcmlvIGRldGFpbHMgYW5kIHNlbmQgYmFjayB0byBjbGllbnRcbiAgICpcbiAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSByb3V0ZSBjdXJyZW50IHJvb3QgVVJMXG4gICAqIEBwYXJhbSB7Um91dGVyU3RhdGVTYW5wc2hvdH0gY3VycmVudCByb3V0ZSBzbmFwc2hvdFxuICAgKlxuICAgKiBAcmV0dXJucyB7U2NlbmFyaW99IC0gVGhlIHNjZW5hcmlvIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIGRvIHRoZSB1cmwgcGFyYW0gSUQgaWYgaXQgZXhpc3RzXG4gICAtIG9yIGVtcHR5IHNjZW5hcmlvIGlmIGl0IGRvZXMgbm90IGV4aXN0XG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPFNjZW5hcmlvPiB7XG5cbiAgICBjb25zdCBzY2VuQ29kZSA9IHJvdXRlLnBhcmFtc1snc2NlbklkJ107XG5cbiAgICBpZiAoc2NlbkNvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0U2NlbmFyaW8oc2NlbkNvZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8U2NlbmFyaW8+KCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L3NjZW5hcmlvLnJlc29sdmVyLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogV2hlbiBVUkwgZ29lcyB0byBhIHBhZ2UgdGhhdCBkb2Vzbid0IGV4aXN0O1xuICogVGhpcyBpcyBzaW1wbGUsIHZpc3VhbCBjb21wb25lbnQgbmVlZGVkIHRvIGdldCB0aGUgdGVtcGxhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1ub3QtZm91bmQnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9wYWdlLW5vdC1mb3VuZC50ZW1wbGF0ZS5odG1sJyksXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZU5vdEZvdW5kQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKCl7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBob21lIGxhbmRpbmcgcGFnZSB3aGVuIGdvaW5nIHRvIHRoZSB3ZWJzaXRlXG4gKlxuICogTWFpbmx5IGEgdmlldyBjb21wb25lbnQsIGJ1dCBzb21lIGFzcGVjdHMgYXJlIGRlcGVuZGVudFxuICogb24gaWYgYSB1c2VyIGlzIGxvZ2dlZCBpbiBhbmQgdGhlIHVzZXIgcm9sZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaG9tZS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vaG9tZS5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBUaGUgbG9nZ2VkIGluIHVzZXIsIGlmIGFueVxuICAgKi9cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKXt9XG5cbiAgLyoqXG4gICAqIFdoZW4gaW50aWFsaXppbmcgY29tcG9uZW50LCBnZXQgdGhlIGxvZ2dlZCBpbiB1c2VyLCBpZiBhbnlcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgdGhlIGNvbXBvbmVudCwgdW5zZXQgdGhlIHVzZXIgdmFyaWFibGVcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy51c2VyID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2VsZWN0RHJvcFNlcnZpY2UsIFNlbGVjdERyb3BEYXRhIH0gZnJvbSAnLi9zZWxlY3QtZHJvcC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbc2VsZWN0LWRyb3BwYWJsZV0nfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REcm9wQ29tcG9uZW50IHtcbiAgICBfZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgX2RlZmF1bHRDdXJzb3I6IHN0cmluZztcblxuICAgIHByaXZhdGUgX3NlbGVjdEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzZXQgc2VsZWN0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdEVuYWJsZWQgPSAhIWVuYWJsZWQ7XG4gICAgfVxuICAgIGdldCBzZWxlY3RFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0RW5hYmxlZDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfZHJvcERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2V0IGRyb3BEaXNhYmxlZChkaXNhYmxlOiBib29sZWFuKXtcbiAgICAgIHRoaXMuX2Ryb3BEaXNhYmxlZCA9ICEhZGlzYWJsZTtcbiAgICB9XG4gICAgZ2V0IGRyb3BEaXNhYmxlZCgpOiBib29sZWFue1xuICAgICAgcmV0dXJuIHRoaXMuX2Ryb3BEaXNhYmxlZDtcbiAgICB9XG5cbiAgICAgQElucHV0KFwic2VsZWN0RW5hYmxlZFwiKSBzZXQgc2VsZWN0YWJsZSh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgICB0aGlzLnNlbGVjdEVuYWJsZWQgPSAhIXZhbHVlO1xuICAgICB9XG4gICAgIEBJbnB1dChcImRyb3BEaXNhYmxlZFwiKSBzZXQgdW5kcm9wcGFibGUodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAgdGhpcy5kcm9wRGlzYWJsZWQgPSAhIXZhbHVlO1xuICAgICB9XG5cbiAgICAgQElucHV0KCkgYWxsb3dEcm9wOiAoZHJvcERhdGE6IGFueSkgPT4gYm9vbGVhbjtcbiAgICAgQElucHV0KFwic2VsZWN0RGF0YVwiKSBkYXRhOiBhbnk7XG4gICAgIEBJbnB1dCgpIHNvdXJjZU5hbWU6IHN0cmluZztcblxuICAgICBAT3V0cHV0KCkgb25Ecm9wU3VjY2VzczogRXZlbnRFbWl0dGVyPFNlbGVjdERyb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RHJvcERhdGE+KCk7XG5AT3V0cHV0KFwib25TdWNjZXNzXCIpIG9uU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8U2VsZWN0RHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3REcm9wRGF0YT4oKTtcbkBPdXRwdXQoKSBvbkVycm9yOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBfc2VsZWN0RHJvcFNlcnZpY2U6IFNlbGVjdERyb3BTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICAgICAgLy8gQXNzaWduIGRlZmF1bHQgY3Vyc29yIHVubGVzcyBvdmVycmlkZGVuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmKCF0aGlzLmRyb3BEaXNhYmxlZCAmJiAhdGhpcy5zZWxlY3RFbmFibGVkKVxuICAgICAgICAgIHRoaXMuX2VsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5fZGVmYXVsdEN1cnNvcjsgIC8vIHNldCBkZWZhdWx0IGN1cnNvciBvbiBvdXIgZWxlbWVudFxuXG4gICAgICAgIHRoaXMuX2VsZW0ub25tb3VzZWVudGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VsZW0ub25tb3VzZW91dCA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuX29uTW91c2VPdXQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIGV2ZW50cyAtIGJvdGggc2VsZWN0IGFuZCBkcm9wXG4gICAgICB0aGlzLl9lbGVtLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+e1xuICAgICAgICB0aGlzLl9vbkNsaWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAvLyBOZWNlc3NhcnkuIEFsbG93cyB1cyB0byBkcm9wLlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICAvLyBpZiBub3RoaW5nIHNlbGVjdGVkIGFuZCBzZWxlY3RFbmFibGVkIC0+IHNlbGVjdFxuICAgICAgaWYodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuaXNTZWxlY3RlZCA9PT0gZmFsc2UgJiYgdGhpcy5zZWxlY3RFbmFibGVkKXtcbiAgICAgICAgLy90aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICAgICAgICB0aGlzLl9vblNlbGVjdENhbGxiYWNrKGV2ZW50KTtcbiAgICB9IC8vIGlmIHdlIHJlLWNsaWNrZWQgdGhlIG9iamVjdCAtPiBkZXNlbGVjdFxuICAgIGVsc2UgaWYodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuaXNTZWxlY3RlZCAmJiB0aGlzLnNvdXJjZU5hbWUgPT09IHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmN1clNvdXJjZSl7XG4gICAgICAgIC8vdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1vYmplY3QnKTtcbiAgICAgICAgdGhpcy5fb25EZXNlbGVjdENhbGxiYWNrKGV2ZW50KTtcbiAgICB9IC8vIGlmIHdlIGNhbiBkcm9wLCB0aGVuIGRyb3BcbiAgICBlbHNlIGlmKHRoaXMuX2lzRHJvcEFsbG93ZWQoZXZlbnQpKXtcbiAgICAgIC8vdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1vYmplY3QnKTtcbiAgICAgIHRoaXMuX29uRHJvcENhbGxiYWNrKGV2ZW50KTtcbiAgICB9IC8vIGlmIHNvbWV0aGluZyBzZWxlY3RlZCwgc2VsZWN0IHRoaXMgaW5zdGVhZFxuICAgIGVsc2UgaWYodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuaXNTZWxlY3RlZCAmJiB0aGlzLnNlbGVjdEVuYWJsZWQpe1xuICAgICAgLy90aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICAgICAgLy8gdXBkYXRlIHRvIHJlbW92ZSBzZWxlY3RlZC1jbGFzcyBvbiBwcmV2aW91c2x5IHNlbGVjdGVkIGVsZW1cbiAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLnJlbW92ZUVsZW1DbGFzcygpO1xuICAgICAgdGhpcy5fb25TZWxlY3RDYWxsYmFjayhldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uRXJyb3JDYWxsYmFjayhldmVudCk7XG4gICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uTW91c2VFbnRlcihldmVudDogRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdvdmVyLl9pc0Ryb3BBbGxvd2VkJywgdGhpcy5faXNEcm9wQWxsb3dlZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNEcm9wQWxsb3dlZChldmVudCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdkcm9wLW9iamVjdCcpO1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IGlzIG92ZXIgdGhlIHNhbWUgc291cmNlIGVsZW1lbnQgLSBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5lY2Vzc2FyeS4gQWxsb3dzIHVzIHRvIGRyb3AuXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgcHJpdmF0ZSBfb25Nb3VzZU91dChldmVudDogRXZlbnQpe1xuICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wLW9iamVjdCcpO1xuICAgIH1cblxuICAgIGRldGVjdENoYW5nZXMgKCkge1xuICAgICAgICAvLyBQcm9ncmFtbWF0aWNhbGx5IHJ1biBjaGFuZ2UgZGV0ZWN0aW9uIHRvIGZpeCBpc3N1ZSBpbiBTYWZhcmlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX2NkciAmJiAhKHRoaXMuX2NkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjUwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0Ryb3BBbGxvd2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIEZpcnN0LCBpZiBgYWxsb3dEcm9wYCBpcyBzZXQsIGNhbGwgaXQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlXG4gICAgICAgICAgICBpZih0aGlzLmRyb3BEaXNhYmxlZCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd0Ryb3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxvd0Ryb3AodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcHJldmVudEFuZFN0b3AoZXZlbnQ6IEV2ZW50KTogYW55IHtcbiAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgX29uRXJyb3JDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uRXJyb3IuZW1pdCgnVGhlcmUgd2FzIGFuIGVycm9yJyk7XG4gICAgdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZGVzZWxlY3QoKTtcbiAgfVxuXG4gICAgX29uRHJvcENhbGxiYWNrKCBldmVudDogTW91c2VFdmVudCApe1xuICAgICAgbGV0IGRhdGFUcmFuc2ZlciA9IChldmVudCBhcyBhbnkpLmRhdGFUcmFuc2ZlcjtcbiAgICAgIGlmKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmlzU2VsZWN0ZWQpe1xuICAgICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3MuZW1pdCh7ZGF0YTogdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcbiAgICAgICAgaWYodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2Uub25TdWNjZXNzQ2FsbGJhY2spe1xuICAgICAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLm9uU3VjY2Vzc0NhbGxiYWNrLmVtaXQoe2RhdGE6IHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZGVzZWxlY3QoKTtcblxuICAgICAgfVxuICAgIH1cblxuICAgIF9vbkRlc2VsZWN0Q2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpe1xuICAgICAgdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZGVzZWxlY3QoKTtcbiAgICB9XG5cbiAgICBfb25TZWxlY3RDYWxsYmFjayhldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZighdGhpcy5zb3VyY2VOYW1lICYmICh0aGlzLmRhdGEuc291cmNlIHx8IHRoaXMuZGF0YS5zcmMpKXtcbiAgICAgICAgICB0aGlzLnNvdXJjZU5hbWUgPSB0aGlzLmRhdGEuc291cmNlID8gdGhpcy5kYXRhLnNvdXJjZSA6IHRoaXMuZGF0YS5zcmM7XG4gICAgICAgIH0gZWxzZSBpZighdGhpcy5zb3VyY2VOYW1lKXtcbiAgICAgICAgICB0aGlzLnNvdXJjZU5hbWUgPSAnJ1xuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZWxlbSA9IHRoaXMuX2VsZW07XG4gICAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLnNlbGVjdCh0aGlzLnNvdXJjZU5hbWUsIHRoaXMuZGF0YSwgdGhpcy5fZWxlbSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLm9uU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vblN1Y2Nlc3NDYWxsYmFjaztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3AuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGVDaGlsZCwgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIEd1YXJkIHRoZSBhZG1pbiBwYXRocyBzbyBvbmx5IHVzZXJzIHdpdGggYGFkbWluYCBvciBgaW5zdHJgXG4gKiByb2xlIGNhbiBhY2Nlc3MgdGhlIHJvdXRlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZG1pbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGVDaGlsZCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdXNlciBjYW4gYWN0aXZhdGUgdGhlIHJvdXRlIGJhc2VkIG9uIHRoZWlyIHJvbGVcbiAgICpcbiAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSByb3V0ZSAtIHJvdXRlIFVSTCBhdCB0aGUgbW9tZW50XG4gICAqIEBwYXJhbSB7Um91dGVyU3RhdGVTbmFwc2hvdH0gc3RhdGUgLSByb3V0ZXIgc3RhdGU7IG5lZWRlZCB0byBpbXBsZW1lbnQgaW50ZXJmYWNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIGB0cnVlYCBpZiB1c2VyIGlzIGBhZG1pbmAgb3IgYGluc3RyYFxuICAgKiAtIGBmYWxzZWAgaWYgdXNlciBpcyBvbmx5IGEgYHN0dWRlbnRgXG4gICAqL1xuICBjYW5BY3RpdmF0ZUNoaWxkKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGxldCB1cmw6IHN0cmluZyA9IHN0YXRlLnVybDtcblxuICAgIGxldCByb2xlOiBib29sZWFuID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmNhbkFjY2Vzc0FkbWluKCk7XG4gICAgaWYocm9sZSlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VXJsID0gdXJsO1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL25vdC1hdXRoJ10pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4uZ3VhcmQuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5cbi8qKlxuICogRW50cmFuY2UgY29tcG9uZW50IGZvciBhZG1pbiBmZWF0dXJlc1xuICogTWFpbmx5LCBpdCBpcyBhIGNhcmQgdGhhdCBhbGxvd3MgbmF2aWdhdGlvbiBiZXR3ZWVuIGNvdXJzZS1yZWxhdGVkXG4gKiBpbmZvIGFuZCBzdHVkZW50LXJlbGF0ZWQgaW5mb1xuICogQ29udGVudCBvZiB0aGUgY2FyZCBpcyBkZXRlcm1pbmVkIGJ5IHJvdXRlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZG1pbicsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2FkbWluLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIExvZ2dlZCBpbiB1c2VyXG4gICAqL1xuICBwcml2YXRlIGFkbWluVXNlcjogVXNlcjtcbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICl7fVxuXG4gIC8qKlxuICAgKiBXaGVuIGluaXRpYWxpemluZyB0aGUgY29tcG9uZW50LCBnZXQgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlcidzIGluZm9ybWF0aW9uXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuYWRtaW5Vc2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBIHZpZXcgY29tcG9uZW50IHRoYXQgaXMgdmlzaWJsZSB3aGVuIGdvaW5nIHRvIHRoZSBtYWluIGFkbWluIHBhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRtaW4taG9tZScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2FkbWluLWhvbWUudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgQWRtaW5Ib21lQ29tcG9uZW50e31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBIGJhc2ljIHZpZXcgY29tcG9uZW50IHdoZW4gdXNlciB0cmllcyB0byBhY2Nlc3MgYW4gYWRtaW5cbiAqIHBhZ2UgYnV0IGRvZXMgbm90IGhhdmUgYWRtaW4gYWNjZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdC1hdXRoJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbm90LWF1dGgudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgTm90QXV0aENvbXBvbmVudHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG4vKipcbiAqIENvbXBvbmVudCBmb3IgZXhpc3RpbmcgdXNlcnMgdG8gc2lnbiBpbiBhbmQgYmUgYWJsZVxuICogdG8gYWNjZXNzIHRoZWlyIHNjZW5hcmlvcy9mcmlkZ2VzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2lnbmluJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zaWduaW4udGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIExvZ2luIGNyZWRlbnRpYWxzIGZvciB1c2VyIGluY2x1ZGluZyBgdXNlcm5hbWVgIChlbWFpbCkgYW5kIGBwYXNzd29yZGBcbiAgICovXG4gIHByaXZhdGUgY3JlZGVudGlhbHM6IEZvcm1Hcm91cDtcbiAgLyoqXG4gICAqIEF1dGhlbnRpY2F0aW9uIHNlcnZpY2Ugc3Vic2NyaXB0aW9uIGZyb20gd2hlbiB0cnlpbmcgdG8gbG9naW4gdGhlIHVzZXJcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIC8qKlxuICAqIEludGlhbGl6ZSB0aGUgZm9ybSBncm91cCBvbiBjb21wb25lbnQgY3JlYXRpb25cbiAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgdXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbCgnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pLFxuICAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pLFxuICB9KTtcbiAgfVxuXG4gIGdldCB1c2VybmFtZSgpIHsgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KCd1c2VybmFtZScpO31cbiAgZ2V0IHBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoJ3Bhc3N3b3JkJyk7fVxuXG4gIC8qKlxuICAgKiBVcG9uIGZvcm0gc3VibWlzc2lvbiwgYXR0ZW1wdHMgdG8gc2lnbiBpbiB0aGUgdXNlciB3aXRoIGBjcmVkZW50aWFsc2AgKHVzaW5nIHRoZSBzZXJ2aWNlKVxuICAgKlxuICAgKiBXaGVuIHN1Y2Nlc3NmdWwsIG5hdmlnYXRlIHRvXG4gICAqIC0gdGhlIHJlZGlyZWN0IFVSTCBpZiBzZXQgKHdoZW4gbm9uLWxvZ2dlZCBpbiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBhIHBhZ2UgdGhhdCByZXF1aXJlZCBsb2dnaW5nIGluKVxuICAgKiAtIHRoZSBob21lIHBhZ2UgaWYgcmVkaXJlY3QgVVJMIGlzIG5vdCBzZXRcbiAgICpcbiAgICogV2hlbiB1bnN1Y2Nlc3NmdWwsIGRpc3BsYXkgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgICBzaWduaW4oKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgLnNpZ25pbih0aGlzLmNyZWRlbnRpYWxzLnZhbHVlKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5zZXRVc2VyKHJlc3VsdCk7XG4gICAgICAgICAgbGV0IHJlZGlyZWN0ID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VXJsID8gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VXJsIDogJy8nO1xuICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbcmVkaXJlY3RdKTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgKiBHZXQgdGhlIGZvcm0gaW5wdXQgQ1NTIGNsYXNzZXMgc3R5bGluZyB0byBwcm92aWRlIGZlZWRiYWNrIHRvIHVzZXJcbiAgKiB3aGV0aGVyIGlucHV0IGlzIHZhbGlkIG9uIG5vdFxuICAqXG4gICogQWx3YXlzIGhhcyBgLmZvcm0tY29udHJvbGAgdGhlbiBgLmlzLWludmFsaWRgIG9yIGAuaXMtdmFsaWRgIGFyZSBzZXQgb25jZSBpbnB1dCBoYXMgYmVlbiB0b3VjaGVkXG4gICpcbiAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybUxhYmVsIC0gZm9ybSBncm91cCBuYW1lIGxvb2stdXAgaW5wdXQgc3RhdGVcbiAgKlxuICAqIEByZXR1cm5zIHtPYmplY3R9IENTUyBjbGFzc2VzIHdoaWNoIGFwcGx5IHRvIHRoaXMgaW5wdXRcbiAgKi9cbiAgZ2V0SW5wdXRDbGFzcyhmb3JtTGFiZWw6IHN0cmluZykge1xuICAgIGxldCBvdXQgPSB7J2Zvcm0tY29udHJvbCc6IHRydWV9O1xuICAgIGlmKHRoaXMuY3JlZGVudGlhbHMgJiYgdGhpcy5jcmVkZW50aWFscy5nZXQoZm9ybUxhYmVsKSl7XG4gICAgICBsZXQgYWMgPSB0aGlzLmNyZWRlbnRpYWxzLmdldChmb3JtTGFiZWwpO1xuICAgICAgaWYoYWMuZGlydHkgfHwgYWMudG91Y2hlZCl7XG4gICAgICAgIG91dFsnaXMtaW52YWxpZCddID0gYWMuaW52YWxpZDtcbiAgICAgICAgb3V0Wydpcy12YWxpZCddID0gYWMudmFsaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc2N0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSB0aGUgYXV0aGVudGljYXRpb24gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9hZG1pbi9jb3Vyc2UvY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJ1xuaW1wb3J0IHsgcGFzc3dvcmRNYXRjaFZhbGlkYXRvciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25maXJtLXBhc3N3b3JkLnZhbGlkYXRvcic7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgYWxsb3dzIG5ldyB1c2VycyB0byBzaWduIHVwIHRvIHVzZSBDcmlja2V0LlxuICogVXNlcyBlbWFpbCBhcyB1c2VybmFtZSBhbmQgaW5jbHVkZXMgc2V2ZXJhbCBlcnJvclxuICogY2hlY2tzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2lnbnVwJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zaWdudXAudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBiYWNrZW5kIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBMaXN0IG9mIGNvdXJzZXMgYXZhaWxhYmxlIHRvIHNpZ24gdXAgZm9yO1xuICAgKiBBbGwgdXNlcnMgbXVzdCBzZWxlY3QgYSBjb3Vyc2UsIGV2ZW4gaWYgdGhlIGNvdXJzZSBpcyBcIk5BXCJcbiAgICovXG4gIHByaXZhdGUgY291cnNlczogc3RyaW5nW10gPSBbXTtcbiAgLyoqXG4gICAqIFVzZXIgZGV0YWlscyB1c2VkIGZvciBzaWdudXBcbiAgICogLSBgZmlyc3ROYW1lYFxuICAgKiAtIGBsYXN0TmFtZWBcbiAgICogLSBgdXNlcm5hbWVgIChlbWFpbCBhZGRyZXNzKVxuICAgKiAtIGBjb3Vyc2VgIChkYXRhYmFzZSBjb3Vyc2UgSUQgbm90IGNvdXJzZSBuYW1lKVxuICAgKiAtIGBwYXNzc3dvcmRgXG4gICAqIC0gYGNvbmZpcm1QYXNzd29yZGBcbiAgICovXG4gIHByaXZhdGUgdXNlcjogRm9ybUdyb3VwO1xuICAvKipcbiAgICogQm9vbGVhbiBzdGF0ZSBvYmplY3QgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gbXVsdGlwbGUgc2VydmljZXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBjcmVhdGlvbiwgZ2V0IHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBjb3Vyc2VzIGFuZCBvcmRlciB0aGVtXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMudXNlciA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgJ2ZpcnN0TmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAnbGFzdE5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgJ3VzZXJuYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXSksXG4gICAgICAnY291cnNlJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICdwYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCgnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKSxcbiAgICAgICdjb25maXJtUGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBwYXNzd29yZE1hdGNoVmFsaWRhdG9yXSksXG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldENvdXJzZUxpc3QoKVxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuX3Jlb3JkZXJDb3Vyc2VzKHJlcyk7XG4gICAgICAgIHRoaXMuY291cnNlcyA9IHRtcDtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICB0aGlzLmNvdXJzZXMgPSBbXTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGFjY2Vzc29ycyBmb3IgZm9ybSB2YWxpZGF0aW9uXG4gIGdldCBmaXJzdE5hbWUoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdmaXJzdE5hbWUnKTsgfVxuICBnZXQgbGFzdE5hbWUoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdsYXN0TmFtZScpOyB9XG4gIGdldCB1c2VybmFtZSgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ3VzZXJuYW1lJyk7IH1cbiAgZ2V0IGNvdXJzZSgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ2NvdXJzZScpOyB9XG4gIGdldCBwYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ3Bhc3N3b3JkJyk7IH1cbiAgZ2V0IGNvbmZpcm1QYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ2NvbmZpcm1QYXNzd29yZCcpOyB9XG5cblxuICAvKipcbiAgICogT3JkZXIgdGhlIGNvdXJzZXMgc28gdGhlIFwiTkFcIiBjb3Vyc2UgaXMgYXQgdGhlIHRvcFxuICAgKlxuICAgKiBAcGFyYW0ge2FueVtdfSBjb3Vyc2VzIGxpc3Qgb2YgY3VycmVudGx5IGF2YWlsYWJsZSBjb3Vyc2VzOyBlYWNoIGl0ZW0gaW4gbGlzdCBoYXMgYGNvdXJzZU51bWAgYW5kIGBpZGBcbiAgICpcbiAgICogQHJldHVybnMge2FueVtdfSB0aGUgbGlzdCBvcmRlcmVkIHNvIHRoZSBcIk5BXCIgY291cnNlIGlzIGF0IHRoZSB0b3BcbiAgICovXG4gIHByaXZhdGUgX3Jlb3JkZXJDb3Vyc2VzKGNvdXJzZXM6IGFueVtdKTogYW55W117XG4gICAgbGV0IG5hID0gY291cnNlcy5maWx0ZXIoKGMpPT57cmV0dXJuIGMuY291cnNlTnVtID09PSAnTkEnfSk7XG4gICAgbGV0IG90aGVyID0gY291cnNlcy5maWx0ZXIoKGMpPT57XG4gICAgICByZXR1cm4gYy5jb3Vyc2VOdW0gIT09ICdOQSdcbiAgICB9KTtcbiAgICByZXR1cm4gbmEuY29uY2F0KG90aGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAtIEF0dGVtcHRzIHRvIHNpZ24gdGhlIHVzZXIgdXAgd2hlbiB0aGV5IHN1Ym1pdCB0aGUgZm9ybVxuICAgKiAtIEluY2x1ZGVzIGVycm9yIGNoZWNrcyBmb3Igc2VsZWN0aW5nIGEgY291cnNlIGFuZCBwYXNzd29yZHMgbWF0Y2hcbiAgICogLSBXaGVuIHNpZ24tdXAgaXMgc3VjY2Vzc2Z1bCwgc2V0cyB0aGUgW2xvZ2dlZCBpbiB1c2VyXXtAbGluayBhdXRoZW50aWNhdGlvbi5zZXJ2aWNlfSBhbmQgbmF2aWdhdGVzIHRvIHRoZSBob21lIHBhZ2VcbiAgICovXG4gIHNpZ251cCgpIHtcbiAgICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICAgICAgICAuc2lnbnVwKHRoaXMudXNlci52YWx1ZSlcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnNldFVzZXIocmVzdWx0KTtcbiAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pXG4gICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgKiBHZXQgdGhlIGZvcm0gaW5wdXQgQ1NTIGNsYXNzZXMgc3R5bGluZyB0byBwcm92aWRlIGZlZWRiYWNrIHRvIHVzZXJcbiAgKiB3aGV0aGVyIGlucHV0IGlzIHZhbGlkIG9uIG5vdFxuICAqXG4gICogQWx3YXlzIGhhcyBgLmZvcm0tY29udHJvbGAgdGhlbiBgLmlzLWludmFsaWRgIG9yIGAuaXMtdmFsaWRgIGFyZSBzZXQgb25jZSBpbnB1dCBoYXMgYmVlbiB0b3VjaGVkXG4gICpcbiAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybUxhYmVsIC0gZm9ybSBncm91cCBuYW1lIGxvb2stdXAgaW5wdXQgc3RhdGVcbiAgKlxuICAqIEByZXR1cm5zIHtPYmplY3R9IENTUyBjbGFzc2VzIHdoaWNoIGFwcGx5IHRvIHRoaXMgaW5wdXRcbiAgKi9cbiAgZ2V0SW5wdXRDbGFzcyhmb3JtTGFiZWw6IHN0cmluZykge1xuICAgIGxldCBvdXQgPSB7J2Zvcm0tY29udHJvbCc6IHRydWV9O1xuICAgIGlmKHRoaXMudXNlciAmJiB0aGlzLnVzZXIuZ2V0KGZvcm1MYWJlbCkpe1xuICAgICAgbGV0IGFjID0gdGhpcy51c2VyLmdldChmb3JtTGFiZWwpO1xuICAgICAgaWYoYWMuZGlydHkgfHwgYWMudG91Y2hlZCl7XG4gICAgICAgIG91dFsnaXMtaW52YWxpZCddID0gYWMuaW52YWxpZDtcbiAgICAgICAgb3V0Wydpcy12YWxpZCddID0gYWMudmFsaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc2N0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlcyB0byBwcmV2ZW50IGEgbWVtb3J5IGxlYWtcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG4gIC8qKlxuICAqIEN1c3RvbSB2YWxpZGF0b3IgdG8gY2hlY2sgdGhhdCBpbnB1dCBwYXNzd29yZCBhbmQgY29uZmlybWF0aW9uIHBhc3N3b3JkIGFyZSB0aGUgc2FtZVxuICAqXG4gICogQHBhcmFtIGFjIHtBYnN0cmFjdENvbnRyb2x9IC0gcmVhY3RpdmUgZm9ybSBjb250cm9sIGZvciBgY29uZmlybVBhc3N3b3JkYCBpbnB1dFxuICAqIC0gbXVzdCBiZSBwYXJ0IG9mIGEgRm9ybUdyb3VwIHdpdGggYWxzbyBoYXMgYSBgcGFzc3dvcmRgIGlucHV0XG4gICpcbiAgKiBAcmV0dXJucyB7bnVsbCB8IE9iamVjdCB9IC0gYG51bGxgIHdoZW4gcGFzc3dvcmRzIG1hdGNoIG9yIGJlZm9yZSBmb3JtIGlzIGluaXRpYWxpemVkXG4gICogLSBge21pc21hdGNoOnRydWV9YCB3aGVuIHBhc3N3b3JkcyBkb24ndCBtYXRjaFxuICAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFzc3dvcmRNYXRjaFZhbGlkYXRvcihhYzogQWJzdHJhY3RDb250cm9sKXtcbiAgICAgIGxldCBmZyA9IGFjLnBhcmVudDtcbiAgICBpZighZmcpe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmZy5nZXQoJ3Bhc3N3b3JkJykudmFsdWUgPT09IGZnLmdldCgnY29uZmlybVBhc3N3b3JkJykudmFsdWUgPyBudWxsIDoge21pc21hdGNoOiB0cnVlfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1wYXNzd29yZC52YWxpZGF0b3IudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0aGF0IGEgdXNlciBzaWducyBvdXQuIEhhcyBubyB2aWV3L3RlbXBsYXRlLS1yZXNldHNcbiAqIHZhcmlhYmxlcyBhbmQgbmF2aWdhdGUgdG8gaG9tZSBwYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZ25vdXQnLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWdub3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG4gICl7fVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgY3JlYXRpb25cbiAgICogMS4gU2lnbiBvdXQgdXNlciBvbiBzZXJ2ZXJcbiAgICogMi4gVW5zZXQgW0F1dGhlbnRpY2F0aW9uU2VydmljZV17QGxpbmsgQXV0aGVudGljYXRpb25TZXJ2aWNlfSB1c2VyXG4gICAqIDMuIFJlZGlyZWN0IHRvIGhvbWUgcGFnZVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ25vdXQoKVxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zZXRVc2VyKG51bGwpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RydWN0aW9uLCB1bnN1YnNjcmliZSBmcm9tIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2UgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbm91dC9zaWdub3V0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBJZiB1c2VyIGZvcmdldHMgdGhlaXIgcGFzc3dvcmQsIHRoZXkgY2FuIGVudGVyXG4gKiB0aGVyZSBlbWFpbCBhZGRyZXNzLiBJZiB0aGVyZSBpcyBhbiBhY2NvdW50IHdpdGggdGhlIGVtYWlsIGFkZHJlc3MsXG4gKiBhbiBlbWFpbCBpcyBzZW50IHdpdGggYSBsaW5rIHRoYXQgYWxsb3dzIHVzZXIgdG8gcmVzZXQgdGhlaXIgcGFzc3dvcmRcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBmb3IgZW50ZXJpbmcgZW1haWwgYWRkcmVzcyBhbmRcbiAqIGluZm9ybWluZyBpZiBlbWFpbCBhZGRyZXNzIHdhcyB2YWxpZCBhbmQgcmVzZXQgKiBwYXNzd29yZCBlbWFpbCB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmb3JnZXQtcHN3ZCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vZm9yZ2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBGb3JnZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveXtcbiAgLyoqXG4gICAqIFBvc3NpYmxlIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBNZXNzYWdlIHdoZW4gcmVzZXQgcGFzc3dvcmQgZW1haWwgd2FzIHN1Y2Nlc3NmdWxseSBzZW50XG4gICAqL1xuICBwcml2YXRlIHN1Y2Nlc3NNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIFVzZXIncyBlbWFpbCB0byBjaGVjayBpZiBhbiBhY2NvdW50IGV4aXN0c1xuICAgKi9cbiAgZW1haWw6IEZvcm1Db250cm9sO1xuICAvKipcbiAgICogQXV0aGVudGljYXRpb24gc2VydmljZSBzdWJzY3JpcHRpb25cbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGZvcm0gb24gY29tcG9uZW50IGNyZWF0aW9uXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuZW1haWwgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXSk7XG4gIH1cbiAgLyoqXG4gICAqIEFmdGVyIHN1Ym1pdHRpbmcgZm9ybSwgcmVzZXQgX3N1Y2Nlc3NfIGFuZCBfZXJyb3JfIG1lc3NhZ2VzLCBzZW5kIGVtYWlsIHRvIHRoZSBzZXJ2ZXIsIGFuZCB3YWl0IGZvciByZXNwb25zZVxuICAgKlxuICAgKiAtIElmIHBhc3N3b3JkIHJlc2V0IGVtYWlsIHN1Y2Nlc3NmdWxseSBzZXQsIF9zdWNjZXNzXyBtZXNzYWdlIGlzIHVwZGF0ZWRcbiAgICogLSBJZiB0aGVyZSB3YXMgYW4gZXJyb3IgKHNlcnZlciBlcnJvciwgZW1haWwgZG9lc24ndCBiZWxvdyB0byBhbnkgdXNlciksIF9lcnJvcl8gbWVzc2FnZSBpcyBzZXQgd2l0aCBkZXNjcmlwdGlvbiBvZiB0aGUgZXJyb3JcbiAgICovXG4gICAgc2VuZEZvcmdldCgpIHtcbiAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSAnJztcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICBsZXQgYm9keSA9IHtlbWFpbDogdGhpcy5lbWFpbC52YWx1ZX07XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgLmZvcmdldFBhc3N3b3JkKGJvZHkpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgLy8gaWYgc3VjY2Vzc2Z1bCwgc2hvdWxkIGdldCBzdWNjZXNzIG1lc3NhZ2VcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gcmVzdWx0Lm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBDU1MgY2xhc3MgZm9yIHRoZSBlbWFpbCBpbnB1dCBiYXNlZCBvbiBpdCdzIHZhbGlkaXR5XG4gICAqXG4gICAqIEFsd2F5cyBoYXMgYC5mb3JtLWNvbnRyb2xgIHRoZW4gYC5pcy1pbnZhbGlkYCBvciBgLmlzLXZhbGlkYCBhcmUgc2V0IG9uY2UgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBDU1MgY2xhc3NlcyB3aGljaCBhcHBseVxuICAgKi9cbiAgZ2V0SW5wdXRDbGFzcygpe1xuICAgIGxldCBvdXQgPSB7J2Zvcm0tY29udHJvbCc6IHRydWV9O1xuICAgIGlmKHRoaXMuZW1haWwgJiYgKHRoaXMuZW1haWwuZGlydHkgfHwgdGhpcy5lbWFpbC50b3VjaGVkKSl7XG4gICAgICBvdXRbJ2lzLWludmFsaWQnXSA9IHRoaXMuZW1haWwuaW52YWxpZDtcbiAgICAgIG91dFsnaXMtdmFsaWQnXSA9IHRoaXMuZW1haWwudmFsaWQ7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgZnJvbSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5pbXBvcnQgeyBwYXNzd29yZE1hdGNoVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbmZpcm0tcGFzc3dvcmQudmFsaWRhdG9yJztcblxuLyoqXG4gKiBBZnRlciB1c2VyIHJlcXVlc3RzIHRvIHJlc2V0IHBhc3N3b3JkIGFuZCB0aGV5IGhhdmUgYSB0b2tlbixcbiAqIHRoaXMgY29tcG9uZW50IGFsbG93cyB0aGVtIHRvIHNldCB0aGUgcGFzc3dvcmQgdG8gYSBuZXcgcGFzc3dvcmRcbiAqIChhc3N1bWluZyB0b2tlbiBpcyB2YWxpZClcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyZXNldC1wc3dkJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9yZXNldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlIGZyb20gc2VydmVyXG4gICAqL1xuICAgIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIE1lc3NhZ2Ugd2hlbiBuZXcgcGFzc3dvcmQgc3VjY2Vzc2Z1bGx5IHNhdmVkXG4gICAqL1xuICBwcml2YXRlIHN1Y2Nlc3NNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIEVtYWlsIGFuZCBuZXcgcGFzc3dvcmRzIHRvIGJlIGFibGUgdG8gdXBkYXRlIHRoZSBkYXRhYmFzZVxuICAgKiAtIGBwYXNzd29yZGAgLSB0aGUgbmV3IHBhc3N3b3JkIHRvIHNldFxuICAgKiAtIGBjb25maXJtUGFzc3dvcmRgIC0gY29uZmlybSBwYXNzd29yZCB0eXBlZCBjb3JyZWN0bHlcbiAgICogLSBgdG9rZW5gIC0gcGFzc3dvcmQgcmVzZXQgdG9rZW4gdG8gY29uZmlybSB1c2VyIGhhZCBhY2Nlc3MgdG8gdGhlIGVtYWlsIGFuZCBkaWRuJ3Qgd2FpdCB0b28gbG9uZ1xuICAgKi9cbiAgcHJpdmF0ZSBjcmVkZW50aWFsczogRm9ybUdyb3VwO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHtAbGluayBBdXRoZW50aWNhdGlvblNlcnZpY2V9IHdoZW4gcmV0dGluZ1xuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgLyoqXG4gICAqIElzIHRoZSBzdWJtaXQgYnV0dG9uIGRpc2FibGVkOyB0aGlzIHdvdWxkIGhhcHBlbiB3aGVuXG4gICAqIHRoZXJlIGlzIG5vIHRva2VuXG4gICAqL1xuICAvL3ByaXZhdGUgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgIH1cbiAgLyoqXG4gICAqIFdoZW4gaW5pdGlhbGl6aW5nIHRoZSBjb21wb25lbnQsIGdldCB0aGUgdG9rZW4gZnJvbSB0aGUgVVJMXG4gICAqXG4gICAqIElmIHRoZXJlIGlzIG5vIHRva2VuLCBnaXZlIGVycm9yIG1lc3NhZ2UgYW5kIGRpc2FibGUgc3VibWl0IGJ1dHRvblxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAncGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pLFxuICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3JdKSxcbiAgICAgICd0b2tlbic6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICB9KTtcblxuICAgIGxldCB1cmxUb2tlbiA9IHRoaXMuX3JvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgndG9rZW4nKTtcbiAgICBpZiAodXJsVG9rZW4gPT09ICcnKXtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ05vIHRva2VuIHNwZWNpZmllZC4nXG4gICAgfVxuICAgIHRoaXMuY3JlZGVudGlhbHMucGF0Y2hWYWx1ZSh7dG9rZW46IHVybFRva2VufSk7XG4gIH1cblxuICBnZXQgcGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLmNyZWRlbnRpYWxzLmdldCgncGFzc3dvcmQnKTsgfVxuICBnZXQgY29uZmlybVBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoJ2NvbmZpcm1QYXNzd29yZCcpOyB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHJlc2V0IHRoZSBuZXcgcGFzc3dvcmRcbiAgICogMS4gSWYgbm8gZXJyb3JzLCBzZW5kIGNyZWRlbnRpYWxzIHRvIHNlcnZlclxuICAgKiAyLiBQYXNzd29yZCBjb3JyZWN0bHkgcmVzZXQsIGRpc3BsYXlzIHRoZSBzdWNjZXNzIG1lc3NhZ2VcbiAgICogMy4gSWYgZXJyb3IgcmVzZXRpbmcgdGhlIHBhc3N3b3JkLCBkaXNwbGF5cyBlcnJvciBtZXNzYWdlXG4gICAqL1xuICAgIHNlbmRSZXNldCgpIHtcbiAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICAgICAgICAucmVzZXRQYXNzd29yZCh0aGlzLmNyZWRlbnRpYWxzLnZhbHVlKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIC8vIGlmIHN1Y2Nlc3NmdWwsIHNob3VsZCBnZXQgc3VjY2VzcyBtZXNzYWdlXG4gICAgICAgICAgdGhpcy5jcmVkZW50aWFscy5zZXRWYWx1ZSh7J3Bhc3N3b3JkJzogJycsICdjb25maXJtUGFzc3dvcmQnOiAnJywgdG9rZW46ICcnfSk7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnJvcilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICogR2V0IHRoZSBmb3JtIGlucHV0IENTUyBjbGFzc2VzIHN0eWxpbmcgdG8gcHJvdmlkZSBmZWVkYmFjayB0byB1c2VyXG4gICogd2hldGhlciBpbnB1dCBpcyB2YWxpZCBvbiBub3RcbiAgKlxuICAqIEFsd2F5cyBoYXMgYC5mb3JtLWNvbnRyb2xgIHRoZW4gYC5pcy1pbnZhbGlkYCBvciBgLmlzLXZhbGlkYCBhcmUgc2V0IG9uY2UgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZFxuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IGZvcm1MYWJlbCAtIGZvcm0gZ3JvdXAgbmFtZSBsb29rLXVwIGlucHV0IHN0YXRlXG4gICpcbiAgKiBAcmV0dXJucyB7T2JqZWN0fSBDU1MgY2xhc3NlcyB3aGljaCBhcHBseSB0byB0aGlzIGlucHV0XG4gICovXG4gIGdldElucHV0Q2xhc3MoZm9ybUxhYmVsOiBzdHJpbmcpIHtcbiAgICBsZXQgb3V0ID0geydmb3JtLWNvbnRyb2wnOiB0cnVlfTtcbiAgICBpZih0aGlzLmNyZWRlbnRpYWxzICYmIHRoaXMuY3JlZGVudGlhbHMuZ2V0KGZvcm1MYWJlbCkpe1xuICAgICAgbGV0IGFjID0gdGhpcy5jcmVkZW50aWFscy5nZXQoZm9ybUxhYmVsKTtcbiAgICAgIGlmKGFjLmRpcnR5IHx8IGFjLnRvdWNoZWQpe1xuICAgICAgICBvdXRbJ2lzLWludmFsaWQnXSA9IGFjLmludmFsaWQ7XG4gICAgICAgIG91dFsnaXMtdmFsaWQnXSA9IGFjLnZhbGlkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVscCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2hlbHAudGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2hlbHAuc3R5bGUuY3NzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgSGVscENvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcigpe31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVscC1jcmlja2V0JyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaGVscC1jcmlja2V0LnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEhlbHBDcmlja2V0Q29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKCl7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaGVscC9oZWxwLWNyaWNrZXQvaGVscC1jcmlja2V0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBNYWluIHVzZXIgcHJvZmlsZSBjb21wb25lbnQ7IGFpbWVkIGZvciB1c2UgdG8gZWRpdCBuYW1lIGFuZFxuICogZW1haWwgYWRkcmVzcy4gQWxzbyBhY2Nlc3MgdXBkYXRlIHBhc3N3b3JkIGxpbmsgdG8gdXBkYXRlIHBhc3N3b3JkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VzZXItcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3VzZXItcHJvZmlsZS50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBVc2VyUHJvZmlsZUNvbXBvbmVudHtcblxuICAvKipcbiAgICogRGF0YWJhc2UgdXNlciBpZFxuICAgKi9cbiAgcHJpdmF0ZSB1c2VySWQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFVzZXIgZGV0YWlscyAoYXMgYW4gb2JqZWN0KVxuICAgKiBDdXJyZW50bHkgaW5jbHVkZXM6IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGFuZCBlbWFpbFxuICAgKi9cbiAgcHJpdmF0ZSB1c2VySW5mbzogYW55O1xuICAvKipcbiAgICogU3RhdGUgdG8gbWFpbnRhaW4gb3BlbiBzdWJzY3JpcHRpb25zIHVudGlsIGNvbXBvbmVudCBpcyBkZXN0b3J5ZWRcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogUG90ZW50aWFsIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3I7IGluY2x1ZGVzIHNlcnZpY2VzIHRvIGZldGNoIGluZm9cbiAgICpcbiAgICogQHBhcmFtIHtQcm9maWxlU2VydmljZX0gX3Byb2ZpbGVTZXJ2aWNlIFNlcnZpY2UgZm9yIHVwZGF0aW5nIHRoZSBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0ge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gX2F1dGhTZXJ2aWNlIFNlcnZpY2UgdG8gZ2V0IHRoZSBjdXJyZW50IHVzZXIgaW5mb3JtYXRpb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3Byb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICl7XG4gICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnQgb24gY3JlYXRpb25cbiAgICogMS4gR2V0IHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKiAyLiBTYXZlIHRoZSB1c2VyJ3MgZGV0YWlscyB0byBvYmplY3QgdG8gYmUgYWJsZSB0byBlZGl0XG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIC8vIGdldCBjdXJyZW50IHVzZXIgaW5mb1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIkXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHJlcy5pZDtcbiAgICAgIHRoaXMudXNlckluZm8gPSB7XG4gICAgICAgIGZpcnN0TmFtZTogcmVzLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IHJlcy5sYXN0TmFtZSxcbiAgICAgICAgZW1haWw6IHJlcy5lbWFpbFxuICAgICAgfVxuICAgIH0sIChpZEVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShpZEVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gdXBkYXRlIHRoZSBwcm9maWxlIGlmIHBvc3NpYmxlIG9yIHNldCBlcnJvclxuICAgKiBtZXNzYWdlIGlmIHRoZXJlJ3MgYSBwcm9ibGVtXG4gICAqL1xuICB1cGRhdGVQcm9maWxlKCl7XG4gICAgdGhpcy5fcHJvZmlsZVNlcnZpY2UuZWRpdFByb2ZpbGUodGhpcy51c2VySWQsIHRoaXMudXNlckluZm8pXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgodXBkYXRlZCk9PntcbiAgICAgIHRoaXMudXNlckluZm8gPSB7Zmlyc3ROYW1lOiB1cGRhdGVkLmZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogdXBkYXRlZC5sYXN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXBkYXRlZC5lbWFpbH07XG4gICAgICB0aGlzLl9hdXRoU2VydmljZS5zZXRVc2VyKHVwZGF0ZWQpO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgdG8gcHJldmVudFxuICAgKiBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGEgbG9nZ2VkIGluIHVzZXIgdG8gdXBkYXRlIHRoZWlyIHBhc3N3b3JkXG4gKiBieSBlbnRlcmluZyB0aGVpciBjdXJyZW50IHBhc3N3b3JkIHRoZW4gdGhlIG5ldyBwYXNzd29yZFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1c2VyLXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vdXBkYXRlLXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50e1xuXG4gIC8qKlxuICAgKiBUaGUgbG9nZ2VkIGluIHVzZXJcbiAgICovXG4gIHByaXZhdGUgdXNlcjogVXNlcjtcbiAgLyoqXG4gICAqIC0gUGFzc3dvcmQgaW5mb3JtYXRpb24gdG8gc2VuZCB0byBzZXJ2ZXIgdG8gdXBkYXRlIHBhc3N3b3JkXG4gICAqIC0gSGFzIGZpZWxkcyBgcGFzc3dvcmRgIChjdXJyZW50IHBhc3N3b3JkKSwgYG5ld1Bhc3N3b3JkYCAocGFzc3dvcmQgdG8gY2hhbmdlIHRvKSwgXG4gICAqIGBjb25maXJtUGFzc3dvcmRgIChjb25maXJtcyB0eXBpbmcgb2YgbmV3IHBhc3N3b3JkKSwgYW5kIFxuICAgKiBgdXNlcm5hbWVgICh1c2VyJ3MgZW1haWwpXG4gICAqL1xuICBwcml2YXRlIGNyZWRlbnRpYWxzOiBhbnk7XG4gIC8qKlxuICAgKiBTdGF0ZSB0byBrZWVwIHRyYWNrIG9mIGNvbXBvZW5lbnQgYWxpdmVcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogUG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZSBkaXNwbGF5ZWQgcHJvbWluYW50bHlcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2UgYWJvdXQgc3VibWlzc2lvbiBhbmQgd2h5IHRoZSBzdWJtaXNzaW9uIGRpZG4ndCB3b3JrIGFzIGV4cGVjdGVkXG4gICAqL1xuICBwcml2YXRlIHBhc3N3b3JkTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgKXtcbiAgICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgbmV3UGFzc3dvcmQ6ICcnLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICcnXG4gICAgICB9O1xuICAgIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50XG4gICAqIDEuIEdldCB0aGUgbG9nZ2VkIGluIHVzZXIgaW5mb1xuICAgKiAyLiBTZXQgdXAgdGhlIGNyZWRlbnRpYWxzIHdpdGggZW1haWwgYWRkcmVzc1xuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICAvLyBnZXQgY3VycmVudCB1c2VyIGluZm9cbiAgICB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyJFxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgdGhpcy51c2VyID0gcmVzO1xuICAgICAgdGhpcy5jcmVkZW50aWFsc1sndXNlcm5hbWUnXSA9IHJlcy5lbWFpbDtcbiAgICB9LCAoaWRFcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoaWRFcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHQgdG8gdXBkYXRlIHRoZSBwYXNzd29yZFxuICAgKiAtIElmIHN1Y2Nlc3NmdWwsIHJlZGlyZWN0cyB0byBwcm9maWxlIHBhZ2VcbiAgICogLSBJZiB0aGVyZSdzIGFuIGVycm9yLCBkaXNwbGF5cyBlcnJvciBtZXNzYWdlXG4gICAqL1xuICB1cGRhdGVQYXNzd29yZCgpe1xuICAgIC8vIGRvIGNoZWNrc1xuICAgIHRoaXMucGFzc3dvcmRNZXNzYWdlID0gdGhpcy5fY2hlY2tQYXNzd29yZHMoKTtcbiAgICBpZih0aGlzLnBhc3N3b3JkTWVzc2FnZSA9PT0gJycpe1xuICAgICAgLy8gY2FuIHVwZGF0ZVxuICAgICAgdGhpcy5fcHJvZmlsZVNlcnZpY2UudXBkYXRlUGFzc3dvcmQodGhpcy51c2VyLmlkLCB0aGlzLmNyZWRlbnRpYWxzKVxuICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxlJ10pO1xuICAgICAgfSwgKGVycik9PntcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRG9lcyB2YXJpb3VzIGNoZWNrcyB0byBlbnN1cmUgdGhlIHBhc3N3b3JkIGZpZWxkcyBhcmUgdmFsaWRcbiAgICogMS4gQWxsIGZpZWxkcyBhcmUgZmlsbGVkIGluXG4gICAqIDIuIE5ldyBwYXNzd29yZCBpcyBkaWZmZXJlbnQgZnJvbSBvbGQgcGFzc3dvcmRcbiAgICogMy4gQ29uZmlybSBwYXNzd29yZCBtYXRjaGVzIG5ldyBwYXNzd29yZFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBlcnJvciBtZXNzYWdlIGlmIGF0IGxlYXN0IG9uZSBjb25kaXRpb24gaXNuJ3QgbWV0IG9yIGAnJ2AgaWYgZXZlcnl0aGluZyBpcyB2YWxpZFxuICAgKi9cbiAgcHJvdGVjdGVkIF9jaGVja1Bhc3N3b3Jkcygpe1xuICAgIGxldCBwID0gdGhpcy5jcmVkZW50aWFscy5wYXNzd29yZDtcbiAgICBsZXQgbiA9IHRoaXMuY3JlZGVudGlhbHMubmV3UGFzc3dvcmQ7XG4gICAgbGV0IGMgPSB0aGlzLmNyZWRlbnRpYWxzLmNvbmZpcm1QYXNzd29yZDtcbiAgICBpZihwID09PSAnJyl7XG4gICAgICByZXR1cm4gJ0VudGVyIG9sZCBwYXNzd29yZCc7XG4gICAgfSBlbHNlIGlmKG4gPT09ICcnKXtcbiAgICAgIHJldHVybiAnRW50ZXIgbmV3IHBhc3N3b3JkJztcbiAgICB9IGVsc2UgaWYoYyA9PT0gJycpe1xuICAgICAgcmV0dXJuICdDb25maXJtIG5ldyBwYXNzd29yZCc7XG4gICAgfSBlbHNlIGlmKHAgPT09IG4pe1xuICAgICAgcmV0dXJuICdOZXcgcGFzc3dvcmQgY2Fubm90IHRoZSBzYW1lIGFzIHRoZSBvbGQgcGFzc3dvcmQnO1xuICAgIH0gZWxzZSBpZihuICE9PSBjKXtcbiAgICAgIHJldHVybiAnQ29uZmlybSBwYXNzd29yZCBkb2VzIG5vdCBtYXRjaCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RydWN0aW9uLCB1bnN1YnNjcmliZSB0byBzZXJ2aWNlcy9zdHJlYW1zXG4gICAqIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcHJvZmlsZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFZpZXcgY29tcG9uZW50IHVzZWQgdG8gbGluayB0aGUgYnJlYWRjcnVtYiB3aXRoIHRoZSBsb2NhdGlvblxuICogbW9kdWxlIGNvbXBvbmVudHMgb3Igc2NlbmFyaW8gbGlzdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjcmlja2V0JyxcbiAgdGVtcGxhdGU6ICc8bWMtYnJlYWRjcnVtYnM+PC9tYy1icmVhZGNydW1icz48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+J1xufSlcblxuZXhwb3J0IGNsYXNzIENyaWNrZXRDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDcmlja2V0U2VydmljZSB9IGZyb20gJy4uL2NyaWNrZXQuc2VydmljZSc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zY2VuYXJpby5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIENvbXBvbmVudCB3aGljaCBsaXN0cyBhbGwgYXZhaWxhYmxlIHNjZW5hcmlvc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NjZW5hcmlvLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3NjZW5hcmlvLWxpc3QudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuICAvKipcbiAgICogVXNlciBvYmplY3Qgb2YgbG9nZ2VkIGluIHVzZXIsIGlmIGF2YWlsYWJsZVxuICAgKi9cbiAgICB1c2VyOiBVc2VyO1xuICAvKipcbiAgKiBsaXN0IG9mIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgKi9cbiAgICBzY2VuYXJpb3M6IFNjZW5hcmlvW107XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IENyaWNrZXRTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudCBieSB1c2luZyB0aGUgc2VydmljZSB0byBmZXRjaCB0aGVcbiAgICogbGlzdCBvZiBzY2VuYXJpb3NcbiAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgdGhpcy5zU3Vic2NyaXB0aW9uID0gdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmxpc3RTY2VuYXJpb3MoKVxuICAgICAgICAuc3Vic2NyaWJlKChzY2VuYXJpb3MpID0+IHtcbiAgICAgICAgdGhpcy5zY2VuYXJpb3MgPSBzY2VuYXJpb3NcbiAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlIGlmIG5lY2Vzc2FyeVxuICAgKiB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnNTdWJzY3JpcHRpb24pXG4gICAgdGhpcy5zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2NyaWNrZXQvc2NlbmFyaW8tbGlzdC9zY2VuYXJpby1saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2NlbmFyaW9zL3NjZW5hcmlvcy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5pbnRlcmZhY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3B0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL29wdGlvbnMudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgdXNlcjogVXNlcjtcblxuICAvKipcbiAgKiBsaXN0IG9mIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgKi9cbiAgb3B0aW9uczogTWVuZGVscGVkZVNjZW5hcmlvW107XG4gIHNjZW5hcmlvczogTWVuZGVscGVkZVNjZW5hcmlvW10gPSBBcnJheSgpO1xuICBxdWl6ZXM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcbiAgZGlzY292ZXJpZXM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcbiAgcGF0aHdheXM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcblxuICBzOiBudW1iZXI7XG4gIHE6IG51bWJlcjtcbiAgZDogbnVtYmVyO1xuICBwOiBudW1iZXI7XG5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIHRoaXMuc1N1YnNjcmlwdGlvbiA9IHRoaXMuX3NjZW5hcmlvU2VydmljZS5saXN0U2NlbmFyaW9zKClcbiAgICAgICAgLnN1YnNjcmliZSgob3B0aW9ucykgPT4ge1xuICAgICAgICAgIHRoaXMucyA9IDA7XG4gICAgICAgICAgdGhpcy5xID0gMDtcbiAgICAgICAgICB0aGlzLnAgPSAwO1xuICAgICAgICAgIHRoaXMuZCA9IDA7XG4gICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLnNjZW5UeXBlID09PSAnc2NlbmFyaW8nKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2NlbmFyaW9zW3RoaXMuc10gPSBvcHRpb247XG4gICAgICAgICAgICAgIHRoaXMucysrO1xuICAgICAgICAgICAgfSBlbHNlIGlmKG9wdGlvbi5zY2VuVHlwZSA9PT0gJ3F1aXonKXtcbiAgICAgICAgICAgICAgdGhpcy5xdWl6ZXNbdGhpcy5xXSA9IG9wdGlvbjtcbiAgICAgICAgICAgICAgdGhpcy5xKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYob3B0aW9uLnNjZW5UeXBlID09PSAnZGlzY292ZXJ5Jyl7XG4gICAgICAgICAgICAgIHRoaXMuZGlzY292ZXJpZXNbdGhpcy5kXSA9IG9wdGlvbjtcbiAgICAgICAgICAgICAgdGhpcy5kKys7XG4gICAgICAgICAgICB9ZWxzZSBpZihvcHRpb24uc2NlblR5cGUgPT09ICdwYXRod2F5Jyl7XG4gICAgICAgICAgICAgIHRoaXMucGF0aHdheXNbdGhpcy5wXSA9IG9wdGlvbjtcbiAgICAgICAgICAgICAgdGhpcy5wKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zY2VuYXJpb3MgPSB0aGlzLnNjZW5hcmlvcy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgICAgICAgIGlmIChvMS5vcmRPZlNjZW4gPCBvMi5vcmRPZlNjZW4pe1xuICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG8xLm9yZE9mU2NlbiA+IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMucXVpemVzID0gdGhpcy5xdWl6ZXMuc29ydCgobzEsIG8yKSA9PiB7XG4gICAgICAgICAgICBpZiAobzEub3JkT2ZTY2VuIDwgbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvMS5vcmRPZlNjZW4gPiBvMi5vcmRPZlNjZW4pe1xuICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLmRpc2NvdmVyaWVzID0gdGhpcy5kaXNjb3Zlcmllcy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgICAgICAgIGlmIChvMS5vcmRPZlNjZW4gPCBvMi5vcmRPZlNjZW4pe1xuICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG8xLm9yZE9mU2NlbiA+IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMucGF0aHdheXMgPSB0aGlzLnBhdGh3YXlzLnNvcnQoKG8xLCBvMikgPT4ge1xuICAgICAgICAgICAgaWYgKG8xLm9yZE9mU2NlbiA8IG8yLm9yZE9mU2Nlbil7XG4gICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobzEub3JkT2ZTY2VuID4gbzIub3JkT2ZTY2VuKXtcbiAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgfSxcbiAgICAoZXJyKT0+e1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICogdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zU3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC50cyIsIi8vaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE1lbmRlbHBlZGVTY2VuYXJpbyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIFNjZW5hcmlvL2ZyaWRnZSByZWxhdGVkIGZ1bmN0aW9ucyB0aGF0IGdldC9zZW5kIGRhdGEgdG8gdGhlIGJhY2tlbmQgc2VydmVyXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZW5kZWxwZWRlU2NlbmFyaW9TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX2Jhc2VVUkwgPSAnYXBpL21lbmRlbHBlZGUnO1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCB0aGUgc2VydmljZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtIdHRwQ2xpZW50fSBfaHR0cCBBbmd1YXIgbWVjaGFuaXNtIHRvIG1ha2UgY2FsbHMgdG8gYmFja2VuZCBzZXJ2ZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gICAgLyoqXG4gICAgKiBMaXN0IGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgICAqXG4gICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTY2VuYXJpb1tdPn0gbGlzdCBvZiBzY2VuYXJpb3NcbiAgICAqL1xuICAgIGxpc3RTY2VuYXJpb3MoKTogT2JzZXJ2YWJsZTxNZW5kZWxwZWRlU2NlbmFyaW9bXT4ge1xuICAgICAgY29uc29sZS5sb2coJ0dvaW4gdG8gZ2V0IGxpc3QnKTtcbiAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgLmdldDxNZW5kZWxwZWRlU2NlbmFyaW9bXT4odGhpcy5fYmFzZVVSTClcbiAgICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGRldGFpbHMgd2hpY2ggaXMgbmVlZGVkIHdoZW5cbiAgICogcGVyZm9ybWluZyBjcm9zc2VzXG4gICAqL1xuICAgLy8gcHJpdmF0ZSBfc2NlbmFyaW9EZXRhaWxzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgIC8vIGdldFNjZW5hcmlvRGV0YWlscyA9IHRoaXMuX3NjZW5hcmlvRGV0YWlscy5hc09ic2VydmFibGUoKTtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGd1ZXNzZXNcbiAgICovXG4gICAvLyBwcml2YXRlIF9zY2VuYXJpb0d1ZXNzZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe30pO1xuICAgLy8gZ2V0R3Vlc3NlcyA9IHRoaXMuX3NjZW5hcmlvR3Vlc3Nlcy5hc09ic2VydmFibGUoKTtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGNvZGVcbiAgICpcbiAgICogVXNlZCBieSBmcmlkZ2UgYW5kIGxvY2F0aW9uIGNvbXBvbmVudHNcbiAgICogdG8gZ2V0IHRoZSBjb2RlIHdpdGhvdXQgdGhlIHJvdXRlXG4gICAqL1xuICAgIC8vIHByaXZhdGUgX3NjZW5hcmlvQ29kZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gICAgLy8gZ2V0U2NlbmFyaW9Db2RlID0gdGhpcy5fc2NlbmFyaW9Db2RlLmFzT2JzZXJ2YWJsZSgpO1xuXG5cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHNhdmUgc2NlbmFyaW8gc3R1ZmY6XG4gICAqIHNjZW5hcmlvRGV0YWlscywgc2NlbmFyaW9HdWVzc2VzLCBhbmQgc2NlbmFyaW9Db2RlXG4gICAqXG4gICAqIFVzZWQgd2hlbiBuYXZpZ2F0aW5nIGF3YXkgZnJvbSBzY2VuYXJpbyBjb21wb25lbnRcbiAgICovXG4gIC8qcmVzZXRTY2VuYXJpbygpIHtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9EZXRhaWxzLm5leHQoJycpO1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0d1ZXNzZXMubmV4dCh7fSk7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvQ29kZS5uZXh0KCcnKTtcbiAgICB9Ki9cblxuICAvKipcbiAgKiBTZXQgdGhlIHNjZW5hcmlvIGRldGFpbHMgYW5kIHNjZW5hcmlvIGd1ZXNzZXNcbiAgKlxuICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuYXJpb0RldGFpbHMgLSBzY2VuYXJpbyBkZXRhaWxzXG4gICogLSBuZWNlc3NhcnkgZm9yIHBlcmZvcm1pbmcgZXhwZXJpbWVudHNcbiAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbmFyaW9HdWVzc2VzIGN1cnJlbnQgc2NlbmFyaW8gZ3Vlc3Nlc1xuICAqL1xuICAvKnNldFNjZW5hcmlvKHNjZW5hcmlvRGV0YWlsczogc3RyaW5nLCBzY2VuYXJpb0d1ZXNzZXM6IHN0cmluZykge1xuICAgICAgICBpZiAoc2NlbmFyaW9EZXRhaWxzICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fc2NlbmFyaW9EZXRhaWxzLm5leHQoc2NlbmFyaW9EZXRhaWxzKTtcbiAgICAgICAgaWYgKHNjZW5hcmlvRGV0YWlscyAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX3NjZW5hcmlvR3Vlc3Nlc1xuICAgICAgICAgICAgICAubmV4dChKU09OLnBhcnNlKHNjZW5hcmlvR3Vlc3NlcykpO1xuICAgIH0qL1xuXG5cbiAgLyoqXG4gICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhIHNwZWNpZmljIHNjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gaWRlbnRpZmllclxuICAgKlxuICAgKiBAcmV0dXJucyB7U2NlbmFyaW99XG4gICAqIC0gc2NlbmFyaW8gaW5mb3JtYXRpb25cbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBsb2FkIHNjZW5hcmlvIDxzY2VuSWQ+XCIgaWYgc2NlbmFyaW8gZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgIC8qIGdldFNjZW5hcmlvKHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTY2VuYXJpbz4ge1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0NvZGUubmV4dChzY2VuSWQpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxTY2VuYXJpbz4oYCR7dGhpcy5fYmFzZVVSTH0vJHtzY2VuSWR9YCk7XG4gICAgfSAqL1xuXG4gIC8qKlxuICAgKiBTZW5kIHVwZGF0ZWQgZ3Vlc3NlcyBmb3IgdGhlIHNjZW5hcmlvIHRvIGJlIHNhdmVkIGluIGRhdGFiYXNlXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBndWVzc2VzIHN0cmluZyBvZiB1cGRhdGVkIGd1ZXNzZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICogLSB1cGRhdGVkIGd1ZXNzZXNcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBmaW5kIGZyaWRnZVwiIGlmIGZyaWRnZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgXCJDb3VsZCBub3Qgc2F2ZSBuZXcgZ3Vlc3Nlc1wiIGlmIGNvdWxkbid0IHVwZGF0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgIC8qIHNhdmVEZWxldGlvbnMoZ3Vlc3NlczogYW55LCB1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3QoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9kZWxldGlvbnNgLCBndWVzc2VzKTtcbiAgICB9Ki9cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZyaWRnZSBmb3IgdGhlIHVzZXIvc2NlbmFyaW9cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlPn1cbiAgICogLSBuZXdseSBjcmVhdGVkIGZyaWRnZVxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIGNyZWF0ZSBuZXcgcGhhZ2UgZm9yIHNjZW5hcmlvXCIgaWYgaXNzdWUgY3JlYXRlIHBoYWdlXG4gICAqIC0gb3IgZXJyb3IgXCJVbmFibGUgdG8gc2F2ZSBuZXcgZnJpZGdlXCIgaWYgY291bGRuJ3QgY3JlYXRlXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgLyogY3JlYXRlRnJpZGdlKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RnJpZGdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vbmV3LWZyaWRnZWApO1xuICAgIH0qL1xuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXhpc3RpbmcgZnJpZGdlIGZvciB1c2VyL3NjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZT59XG4gICAqIC0gZXhpc3RpbmcgZnJpZGdlXG4gICAqIC0gb3IgZXJyb3IgXCJObyBmcmlkZ2UgZm9yIHNjZW5hcmlvL3VzZXJcIiBpZiBmcmlkZ2UgZG9lcyBub3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIC8qICBnZXRGcmlkZ2UodXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGcmlkZ2U+IHtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8RnJpZGdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9YCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSovXG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBwaGFnZSBzdHJhaW4gdG8gdGhlIGZyaWRnZTtcbiAgICogU2VydmVyIHVzZXMgdXNlcklkIGFuZCBzY2VuQ29kZSB0byBmaW5kIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHthbnl9IHN0cmFpbiAtIG5ldyBwaGFnZSB0byBhZGQgdG8gZnJpZGdlXG4gICAqIC0gaGFzIHN0cmFpbk51bSwgbXV0YXRpb25MaXN0LCBhbmQgZGVsZXRpb25cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlUGhhZ2U+fVxuICAgKiAtIG5ld2x5IHNhdmVkIHBoYWdlXG4gICAqIC0gb3IgZXJyb3IgXCJVc2VyIG5vdCBmb3VuZFwiIGlmIHVzZXIgbm90IGZvdW5kXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gbG9hZCBzY2VuYXJpbyA8c2NlbklkPlwiIGlmIHNjZW5hcmlvIG5vdCBmb3VuZFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAvKiBhZGRTdHJhaW4odXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCBzdHJhaW46IGFueSk6IE9ic2VydmFibGU8RnJpZGdlUGhhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0PEZyaWRnZVBoYWdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9L2ZyaWRnZS1waGFnZWAsIHN0cmFpbilcbiAgICB9ICovXG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBkZXRhaWxzL2luZm9ybWF0aW9uIGFib3V0IGFuIGV4aXN0aW5nIHBoYWdlIGluIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZX0gc3RyYWluIC0gc3RyYWluIHRvIHVwZGF0ZVxuICAgKiAtIHVzZSBzdHJhaW4gYGlkYCB0byBzcGVjaWZ5IHN0cmFpbiBhbmQgc2VuZCB1cGRhdGVkIGluZm9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlUGhhZ2U+fVxuICAgKiAtIHVwZGF0ZWQgc3RyYWluXG4gICAqIC0gb3IgZXJyb3IgXCJQaGFnZSBub3QgZm91bmRcIiBpZiBzdHJhaW4gZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgIC8qIHVwZGF0ZVN0cmFpbih1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHN0cmFpbjogRnJpZGdlUGhhZ2UpOiBPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPiB7XG4gICAgICAgIGxldCBzdHJhaW5JZCA9IHN0cmFpbi5pZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0PEZyaWRnZVBoYWdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9LyR7c3RyYWluSWR9YCwgc3RyYWluKVxuICAgIH0gKi9cblxuICAvKipcbiAgICogRGVsZXRlIGEgc3RyYWluIGZyb20gdGhlIGZyaWRnZSAoYW5kIGRhdGFiYXNlKVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKiBAcGFyYW0ge0ZyaWRnZVBoYWdlfSBzdHJhaW4gLSB0aGUgc3RyYWluIHRvIGRlbGV0ZVxuICAgKiAtIHVzZSBzdHJhaW4gYGlkYCB0byBzcGVjaWZ5IHdoaWNoIHN0cmFpbiB0byBkZWxldGVcbiAgICpcbiAgICogQHJldHVybnMge2FueX1cbiAgICogLSB0aGUgc3RyYWluIGp1c3QgZGVsZXRlZFxuICAgKiAtIG9yIGVycm9yIFwiUGhhZ2Ugbm90IGZvdW5kXCIgaWYgc3RyYWluIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBmaW5kIGZyaWRnZVwiIGlmIGZyaWRnZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgXCJVbmFibGUgdG8gcmVtb3ZlIHN0cmFpbiBmcm9tIGZyaWRnZVwiIGlmIGNvdWxkbid0IGRlbGV0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgLyogIGRlbGV0ZVN0cmFpbih1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHN0cmFpbjogRnJpZGdlUGhhZ2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgc3RyYWluSWQgPSBzdHJhaW4uaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vJHtzdHJhaW5JZH1gKVxuICAgIH0qL1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3Mvc2NlbmFyaW9zLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVuZGVscGVkZS1zY2VuYXJpb3MnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zY2VuYXJpb3MudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIE1lbmRlbHBlZGVTY2VuYXJpb3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgdXNlcjogVXNlcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcblxuICB9XG4gIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3Mvc2NlbmFyaW9zLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW5kZWxwZWRlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbWVuZGVscGVkZS50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgTWVuZGVscGVkZUNvbXBvbmVudHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tZW5kZWxwZWRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFkbWluU3R1ZGVudCwgU3R1ZGVudEZyaWRnZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIFNlcnZpY2Ugd2hpY2ggZGVhbHMgd2l0aCBhbGwgc3R1ZGVudC1yZWxhdGVkIGJhY2tlbmQgY2FsbHNcbiAqIGZyb20gYW4gYWRtaW5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0dWRlbnRTZXJ2aWNlIHtcbiAgXG4gIHByaXZhdGUgX2Jhc2VVUkwgPSAnL2FwaS9hZG1pbic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge31cblxuICAvKipcbiAgICogTGlzdCBvZiBzdHVkZW50cywgY29udGVudCBpcyBkZXBlbmRlbnQgb2YgbG9nZ2VkIGluIHVzZXIgcm9sZVxuICAgKlxuICAgKiBJZiBgYWRtaW5gLCByZXR1cm4gYWxsIHN0dWRlbnRzL3VzZXJzXG4gICAqIFxuICAgKiBJZiBgaW5zdHJgLCByZXR1cm5zIHN0dWRlbnRzIG9mIGNvdXJzZXMgaW5zdHIgdGVhY2hzXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIC0gdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqXG4gICAqIEByZXR1cm5zIHtBZG1pblN0dWRlbnRbXX0gLSBsaXN0IG9mIHN0dWRlbnRzXG4gICAqL1xuICBsaXN0U3R1ZGVudHMoYWRtaW5JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxBZG1pblN0dWRlbnRbXT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8QWRtaW5TdHVkZW50W10+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGV0YWlscyBhYm91dCBhIHN0dWRlbnRcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgZm9yIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB1c2VySWQgZm9yIHN0dWRlbnQgdG8gYmUgbG9va2VkIHVwXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD59IC0gZGV0YWlscyBhYm91dCBzcGVjaWZpZWQgc3R1ZGVudFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ2V0U3R1ZGVudChhZG1pbklkOiBudW1iZXIsIHN0dWRlbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxBZG1pblN0dWRlbnQ+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PEFkbWluU3R1ZGVudD4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50cy8ke3N0dWRlbnRJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHJvbGUgKGFkbWluLCBpbnN0ciwgc3R1ZGVudCkgb2YgYW5vdGhlciBzdHVkZW50L3VzZXJcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgZm9yIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB1c2VySWQgZm9yIHN0dWRlbnQgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByb2xlIC0gbmV3IHJvbGUgdG8gYmUgYXNzaWduZWQ7IG9uZSBvZjogYFwiYWRtaW5cIiwgXCJpbnN0clwiLCBcInN0dWRlbnRcImBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSB0aGUgdXBkYXRlZCBzdHVkZW50XG4gICAqIC0gZXJyb3IgYFZhbHVlIFwicm9sZVwiIGlzIG5vdCBhIHZhbGlkIHJvbGVgIGlmIHJvbGUgaXNuJ3Qgb25lIG9mIGBhZG1pbmAsIGBpbnN0cmAsIGBzdHVkZW50YFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgc2V0U3R1ZGVudFJvbGUoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlciwgcm9sZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIGxldCBib2R5ID0ge3JvbGU6IHJvbGV9O1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdChgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfWAsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHN0dWRlbnQvdXNlclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3R1ZGVudElkIC0gdXNlcklkIG9mIHN0dWRlbnQgdG8gZGVsZXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IC0gc3R1ZGVudCB3aG8gd2FzIGp1c3QgZGVsZXRlZFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZGVsZXRlU3R1ZGVudChhZG1pbklkOiBudW1iZXIsIHN0dWRlbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHMvJHtzdHVkZW50SWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjZW5hcmlvIGZyaWRnZSBmb3IgYSBzdHVkZW50OyBpbmNsdWRlcyBmcmlkZ2UgZGV0YWlscyBzdWNoIGFzXG4gICAqIGZyaWRnZSBzdHJhaW5zIGFuZCBndWVzc2VzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIC0gdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB1c2VySWQgb2Ygc3R1ZGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIC0gc2NlbmFyaW8gSWQgZm9yIGZyaWRnZSB0byBmaW5kXG4gICAqXG4gICAqIEByZXR1cm5ze09ic2VydmFibGU8U3R1ZGVudEZyaWRnZT59IC0gdGhlIHN0dWRlbnQncyBmcmlkZ2VcbiAgICogLSBhbiBlbXB0eSBmcmlkZ2UgaWYgdGhlIGZyaWRnZSBkb2Vzbid0IGV4aXN0IHlldFxuICAgKiAtIG9yIG90aGVyIHNlcnZlciBlcnJvclxuICAgKi9cbiAgZ2V0RnJpZGdlKGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTdHVkZW50RnJpZGdlPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxTdHVkZW50RnJpZGdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfS8ke3NjZW5JZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2NlbmFyaW8gYWNjZXNzIGZvciBhIHN0dWRlbnQ7IHRoaXMgZGVsZXRlcyB0aGUgZXhpc3RpbmdcbiAgICogZnJpZGdlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIC0gdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB1c2VySWQgb2Ygc3R1ZGVudFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwZGF0ZWRTdGF0ZSAtIHRydWUgdG8gZ3JhbnQgYWNjZXNzLCBmYWxzZSB0byByZXZva2UgYWNjZXNzXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD59IHVwZGF0ZWQgc3R1ZGVudFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ3JhbnRTY2VuQWNjZXNzKGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCB1cGRhdGVkU3RhdGU6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0PEFkbWluU3R1ZGVudD4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50cy8ke3N0dWRlbnRJZH0vJHtzY2VuSWR9YCwge2FjY2VzczogdXBkYXRlZFN0YXRlfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYkFjdGl2ZU1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbi8qKlxuICogVGhpcyBpcyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgd2hlbiB1c2VyIHdhbnRzIHRvIGRlbGV0ZVxuICogc29tZXRoaW5nIHNlbnNpdGl2ZSwgaS5lLiBhbm90aGVyIHVzZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29uZmlybS1kZWxldGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vY29uZmlybS1kZWxldGUtZGlhbG9nLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnR7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBkaWFsb2cgd2luZG93XG4gICAqL1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmcgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nXG5cbiAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCl7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE1jQnJlYWRjcnVtYnNNb2R1bGUgfSBmcm9tICduZ3gtYnJlYWRjcnVtYnMnO1xuXG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGVyc29uTmFtZVBpcGUgfSBmcm9tICcuLi9waXBlcy9wZXJzb24tbmFtZS5waXBlJztcbmltcG9ydCB7IFBlb3BsZUxpc3ROYW1lc1BpcGUgfSBmcm9tICcuLi9waXBlcy9wZW9wbGUtbGlzdC1uYW1lcy5waXBlJztcbmltcG9ydCB7IFBoYWdlUGFyZW50c1BpcGUgfSBmcm9tICcuLi9waXBlcy9waGFnZS1wYXJlbnRzLnBpcGUnO1xuXG5pbXBvcnQgeyBGb3JtRXJyb3JzTW9kdWxlIH0gZnJvbSAnLi9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5tb2R1bGUnO1xuaW1wb3J0IHsgU2VsZWN0RHJvcE1vZHVsZSB9IGZyb20gJy4vc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3AubW9kdWxlJztcbi8vaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9ycyB9IGZyb20gJy4vY3VzdG9tLXZhbGlkYXRvcnMnO1xuLyoqXG4gKiBUaGUgU2hhcmVkIE1vZHVsZSBjb250YWlucyBtb2R1bGVzLCBwaXBlcywgYW5kIGNvbXBvbmVudHNcbiAqIHRoYXQgYXJlIG5lZWRlZCBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogU2F2ZXMgdGltZSBieSBpbXBvcnRpbmcgdGhpcyBtb2R1bGUgcmF0aGVyIHRoYW4gdGhlXG4gKiBwaXBlcy9tb2R1bGVzL2NvbXBvbmVudHMgaW5kaXZpZHVhbGx5XG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgRm9ybUVycm9yc01vZHVsZSxcbiAgICAgIFNlbGVjdERyb3BNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgTmdiTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgIE1jQnJlYWRjcnVtYnNNb2R1bGUuZm9yUm9vdCgpXG4gICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGVyc29uTmFtZVBpcGUsXG4gICAgUGVvcGxlTGlzdE5hbWVzUGlwZSxcbiAgICBQaGFnZVBhcmVudHNQaXBlLFxuICAgIENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICBGb3JtRXJyb3JzTW9kdWxlLFxuICAgICAgTmdiTW9kdWxlLFxuICAgICAgU2VsZWN0RHJvcE1vZHVsZSxcbiAgICAgIE1jQnJlYWRjcnVtYnNNb2R1bGUsXG4gICAgICBQZXJzb25OYW1lUGlwZSxcbiAgICAgIFBlb3BsZUxpc3ROYW1lc1BpcGUsXG4gICAgICBQaGFnZVBhcmVudHNQaXBlLFxuICAgICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyBhbiBlcnJvciBvYmplY3QgYW5kIGxvb2tzIGZvclxuICogdGhlIGVycm9yIG1lc3NhZ2U7IGl0IGNoZWNrcyBzZXZlcmFsIHByb3BlcnRpZXMgYmVjYXVzZVxuICogZXJyb3JzIGFyZSBub3QgYWx3YXlzIHVuaWZvcm1cbiAqXG4gKiBAcGFyYW0ge2FueX0gZXJyb3IgLSBlcnJvciBvYmplY3QgdG8gZmluZCBlcnJvciBtZXNzYWdlIGZyb21cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZXJyb3IgbWVzc2FnZSB3aXRoaW4gdGhlIG9iamVjdCBvclxuICogYFwiVW5rbm93biBlcnJvclwiYCBpZiB0aGUgZXJyb3IgbWVzc2FnZSBjYW4ndCBiZSBmb3VuZFxuICovXG5leHBvcnQgY29uc3QgcmVhZEVycm9yTWVzc2FnZSA9IGZ1bmN0aW9uKGVycm9yOiBhbnkpOiBzdHJpbmcge1xuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gJ1Vua25vd24gZXJyb3InO1xuICBpZihlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci5tZXNzYWdlKXtcbiAgIHJldHVybiBlcnJvci5lcnJvci5tZXNzYWdlXG4gIH0gZWxzZSBpZihlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci50ZXh0KXtcbiAgIHJldHVybiBlcnJvci5lcnJvci50ZXh0XG4gIH0gZWxzZSBpZiAoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSl7XG4gICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgfSBlbHNlIGlmKGVycm9yKXtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbiAgcmV0dXJuIGVycm9yTWVzc2FnZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9yZWFkLWVycm9yLnRzIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpe1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2Jvb3RzdHJhcC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1jQnJlYWRjcnVtYnNDb25maWcgfSBmcm9tICduZ3gtYnJlYWRjcnVtYnMnO1xuXG5pbXBvcnQgeyBBcHBSb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VkSW5HdWFyZCB9IGZyb20gJy4vYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3JpY2tldFNlcnZpY2UgfSBmcm9tICcuL2NyaWNrZXQvY3JpY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuL2FkbWluL2NvdXJzZS9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb1Jlc29sdmVyIH0gZnJvbSAnLi9jcmlja2V0L3NjZW5hcmlvLnJlc29sdmVyJztcbi8vaW1wb3J0IHsgU2VsZWN0U2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlbGVjdC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBBZG1pbk1vZHVsZSB9IGZyb20gJy4vYWRtaW4vYWRtaW4ubW9kdWxlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTW9kdWxlIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgSGVscE1vZHVsZSB9IGZyb20gJy4vaGVscC9oZWxwLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9maWxlTW9kdWxlIH0gZnJvbSAnLi9wcm9maWxlL3Byb2ZpbGUubW9kdWxlJztcbmltcG9ydCB7IENyaWNrZXRNb2R1bGUgfSBmcm9tICcuL2NyaWNrZXQvY3JpY2tldC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uYXYvbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTWVuZGVscGVkZU1vZHVsZSB9IGZyb20gJy4vbWVuZGVscGVkZS9tZW5kZWxwZWRlLm1vZHVsZSdcblxuLyoqXG4gKiBUaGUgbWFpbiBib290c3RyYXBwZWQgbW9kdWxlXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgSGVscE1vZHVsZSxcbiAgICAgIEFkbWluTW9kdWxlLFxuICAgICAgUHJvZmlsZU1vZHVsZSxcbiAgICAgICAgQXV0aGVudGljYXRpb25Nb2R1bGUsXG4gICAgICBDcmlja2V0TW9kdWxlLFxuICAgICAgTWVuZGVscGVkZU1vZHVsZSxcbiAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KEFwcFJvdXRlcylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE5hdkNvbXBvbmVudCxcbiAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICBQYWdlTm90Rm91bmRDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgTG9nZ2VkSW5HdWFyZCxcbiAgICAgIENyaWNrZXRTZXJ2aWNlLFxuICAgICAgQ291cnNlU2VydmljZSxcbiAgICAgIFNjZW5hcmlvUmVzb2x2ZXIsXG4gICAgICAvL1NlbGVjdFNlcnZpY2VcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbmNvbnN0cnVjdG9yKGJyZWFkY3J1bWJzQ29uZmlnOiBNY0JyZWFkY3J1bWJzQ29uZmlnKSB7XG5cbiAgICBicmVhZGNydW1ic0NvbmZpZy5wb3N0UHJvY2VzcyA9ICh4KSA9PiB7XG5cbiAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBmaXJzdCBicmVhZGNydW1iIGFsd2F5cyBwb2ludHMgdG8gaG9tZVxuXG4gICAgICBsZXQgeSA9IHg7XG5cbiAgICAgIGlmKHgubGVuZ3RoICYmIHhbMF0udGV4dCAhPT0gJ0hvbWUnKSB7XG4gICAgICAgIHkgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0hvbWUnLFxuICAgICAgICAgICAgcGF0aDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF0uY29uY2F0KHgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geTtcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXBwUm91dGVzOiBSb3V0ZXMgPVxuICAgICAgW3tcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuICAgICAgfSxcbiAgICAgICB7XG4gICAgICAgIHBhdGg6ICcqKicsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50XG4gICAgICB9XTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FwcC5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODU5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2hvbWUvaG9tZS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaG9tZS9ob21lLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gODYxXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODYyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBGb3JtYXQgYSB1c2VyJ3Mgb3Igc3R1ZGVudHMgZnJpc3QgYW5kIGxhc3QgbmFtZSBhcyBcImZpcnN0TmFtZSBsYXN0TmFtZVwiXG4gKiAtIFdoZW4gcmV2ZXJzZSBpcyB0cnVlLCBmb3JtYXQgYXMgXCJsYXN0TmFtZSwgZmlyc3ROYW1lXCJcbiAqIC0gQWJsZSB0byBoYW5kbGUgd2hlbiBvbmx5IGZpcnN0IG9yIGxhc3QgbmFtZSBpcyBzZXRcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBwZXJzb24gfCBwZXJzb25OYW1lOmlzUmV2ZXJzZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPntmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9PC9jb2RlPiBiZWNvbWVzIFwiTWlja2V5IE1vdXNlXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlJldmVyc2Ugb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPntmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9PC9jb2RlPiBiZWNvbWVzIFwiTW91c2UsIE1pY2tleVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5GaXJzdCBuYW1lIG9ubHkgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e2ZpcnN0TmFtZTogXCJNaWNrZXlcIiwgbGFzdE5hbWU6IHVuZGVmaW5lZH08L2NvZGU+IGJlY29tZXMgXCJNaWNrZXlcIlxuKi9cbkBQaXBlKHtuYW1lOiAncGVyc29uTmFtZSd9KVxuZXhwb3J0IGNsYXNzIFBlcnNvbk5hbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBlcnNvbjogYW55LCByZXZlcnNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBsZXQgZk5hbWU6IHN0cmluZyA9IHBlcnNvbi5maXJzdE5hbWUgfHwgJyc7XG4gICAgbGV0IGxOYW1lOiBzdHJpbmcgPSBwZXJzb24ubGFzdE5hbWUgfHwgJyc7XG4gIGlmKHJldmVyc2Upe1xuICAgIHJldHVybiBsTmFtZSArIChmTmFtZSE9PScnICYmIGxOYW1lICE9PSAnJyA/ICcsICcgOiAnJykrZk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJyAnIDogJycpK2xOYW1lO1xuICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BpcGVzL3BlcnNvbi1uYW1lLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IGEgbGlzdCBvZiB1c2VyJ3Mgb3Igc3R1ZGVudHMgZnJpc3QgYW5kIGxhc3QgbmFtZSBhcyBcImZpcnN0TmFtZSBsYXN0TmFtZVwiXG4gKiAtIFdoZW4gcmV2ZXJzZSBpcyB0cnVlLCBmb3JtYXQgYXMgXCJsYXN0TmFtZSwgZmlyc3ROYW1lXCJcbiAqIC0gQWJsZSB0byBoYW5kbGUgd2hlbiBvbmx5IGZpcnN0IG9yIGxhc3QgbmFtZSBpcyBzZXRcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBwZW9wbGVMaXN0IHwgcGVvcGxlTGlzdE5hbWVzOmlzUmV2ZXJzZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlt7Zmlyc3ROYW1lOiBcIk1pY2tleVwiLCBsYXN0TmFtZTogXCJNb3VzZVwifSwge2ZpcnN0TmFtZTogXCJEb25hbGRcIiwgbGFzdE5hbWU6IFwiRHVja1wifV08L2NvZGU+IGJlY29tZXMgXCJNaWNrZXkgTW91c2UsIERvbmFsZCBEdWNrXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlJldmVyc2Ugb3VwdXQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+W3tmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogXCJEdWNrXCJ9XTwvY29kZT4gYmVjb21lcyBcIk1vdXNlLCBNaWNrZXk7IER1Y2ssIERvbmFsZFwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NaXNzaW5nIG5hbWVzIDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlt7Zmlyc3ROYW1lOiB1bmRlZmluZWQsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogdW5kZWZpbmVkfV08L2NvZGU+IGJlY29tZXMgXCJNb3VzZSwgRG9uYWxkXCJcbiAqL1xuQFBpcGUoe25hbWU6ICdwZW9wbGVMaXN0TmFtZXMnfSlcbmV4cG9ydCBjbGFzcyBQZW9wbGVMaXN0TmFtZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBlcnNvbkxpc3Q6IGFueVtdLCByZXZlcnNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgZm9yKGxldCBwZXJzb24gb2YgcGVyc29uTGlzdCl7XG4gICAgICBsZXQgZk5hbWU6IHN0cmluZyA9IHBlcnNvbi5maXJzdE5hbWUgfHwgJyc7XG4gICAgICBsZXQgbE5hbWU6IHN0cmluZyA9IHBlcnNvbi5sYXN0TmFtZSB8fCAnJztcbiAgICAgIGlmKG91dCAhPT0gJycgJiYgKGZOYW1lICE9PSAnJyB8fCBsTmFtZSAhPT0gJycpKXtcbiAgICAgICAgb3V0ICs9IChyZXZlcnNlID8gJzsgJyA6ICcsICcpO1xuICAgICAgfVxuICAgIGlmKHJldmVyc2Upe1xuICAgICAgb3V0ICs9IGxOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJywgJyA6ICcnKStmTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgb3V0ICs9IGZOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJyAnIDogJycpK2xOYW1lO1xuICAgICAgfVxuICAgIH0vLyBlbmQgZm9yXG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9wZW9wbGUtbGlzdC1uYW1lcy5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGhhZ2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BoYWdlLmludGVyZmFjZSc7XG5cbi8qKlxuICogRm9ybWF0IHRoZSB0ZXh0dWFsIHByZXNlbnRhdGlvbiBvZiBhIHBoYWdlIHN0cmFpbidzIHBhcmVudHNcbiAqIChpZiBhbnkpIHdoZW4gdmlld2luZyB0aGUgZGlhbG9nIGJveCBmb3IgYSBwaGFnZVxuICpcbiAqIFRoZSBgbnVtUGFyZW50c2AgdmFyaWFibGUgaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgb25lIG9mIHRoZVxuICogcGFyZW50cyBoYWQgYmVlbiBkZWxldGVkIGZyb20gdGhlIGRhdGFiYXNlIHdoZW4gYHBhcmVudHMubGVuZ3RoICE9IG51bVBhcmVudHNgXG4gKlxuICogTm90ZTogdGhlIHBoYWdlIGBzdHJhaW5OdW1gIGFyZSAwLWJhc2VkIGJ1dCBVSSBpcyAxLWJhc2VkIHNvXG4gKiB0aGUgc3RyYWluIG51bWJlciBpcyBhZGp1c3RlZFxuICpcbiAqICoqVXNhZ2U6KiogYHt7cGFyZW50c0xpc3QgfCBwaGFnZVBhcmVudHM6bnVtUGFyZW50c319YFxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk9uZSBwYXJlbnQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e3BhcmVudHM6IFt7aWQ6ICdpZDEnLCBzdHJhaW5OdW06ICc0J31dLCBudW1QYXJlbnRzOiAxfTwvY29kZT4gYmVjb21lcyBcIlN0cmFpbiA1XCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlR3byBwYXJlbnRzOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e3BhcmVudHM6IFt7aWQ6ICdpZDEnLCBzdHJhaW5OdW06IDR9LCB7aWQ6ICdpZDInLCBzdHJhaW5OdW06IDEwfV0sIG51bVBhcmVudHM6IDJ9PC9jb2RlPiBiZWNvbWVzIFwiU3RyYWlucyA1IGFuZCAxMVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ud28gcGFyZW50cyBidXQgbWlzc2luZyBvbmU6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT57cGFyZW50czogW3tpZDogJ2lkMycsIHN0cmFpbk51bTogOH1dLCBudW1QYXJlbnRzOiAyfTwvY29kZT4gYmVjb21lcyBcIlN0cmFpbnMgOSBhbmQgP1wiXG4gKi9cbkBQaXBlKHtuYW1lOiAncGhhZ2VQYXJlbnRzJ30pXG5leHBvcnQgY2xhc3MgUGhhZ2VQYXJlbnRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShwYXJlbnRzOiBQaGFnZVtdLCBudW1QYXJlbnRzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBvdXQgPSAnJztcbiAgICBpZihudW1QYXJlbnRzID09PSB1bmRlZmluZWQpe1xuICAgICAgbnVtUGFyZW50cyA9IHBhcmVudHMubGVuZ3RoXG4gICAgfVxuICAgIGlmKHBhcmVudHMubGVuZ3RoID09PSAwKXtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGxldCBzb3J0ZWQ6IFBoYWdlW10gPSBwYXJlbnRzLnNvcnQoKG4xLCBuMik9PntyZXR1cm4gbjEuc3RyYWluTnVtIC0gbjIuc3RyYWluTnVtfSk7XG4gICAgbGV0IG51bXMgPSBzb3J0ZWQubWFwKChwaGFnZSk9PntyZXR1cm4gKHBoYWdlLnN0cmFpbk51bSsxKS50b1N0cmluZygpfSk7XG5cbiAgICBpZihzb3J0ZWQubGVuZ3RoID09PSAxICYmIG51bVBhcmVudHMgPT09IDEpe1xuICAgICAgb3V0ID0gJ1N0cmFpbiAnICsgbnVtc1swXTtcbiAgICB9IGVsc2UgaWYoc29ydGVkLmxlbmd0aCA9PT0gMSAmJiBudW1QYXJlbnRzID09PSAyKXtcbiAgICAgIG91dCA9ICdTdHJhaW5zICcgKyBudW1zWzBdICsgJyBhbmQgPyc7XG4gICAgfSBlbHNlIGlmKHNvcnRlZC5sZW5ndGggPT09IDIgJiYgbnVtUGFyZW50cyA9PT0gMil7XG4gICAgICBvdXQgPSAnU3RyYWlucyAnICsgbnVtc1swXSArICcgYW5kICcgKyBudW1zWzFdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9waGFnZS1wYXJlbnRzLnBpcGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUmVxdWlyZWRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2VtYWlsLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybVBhc3N3b3JkRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50Jztcbi8qKlxuICogVGhlIEZvcm0gRXJyb3JzIE1vZHVsZSBjb250YWlucyB0ZW1wbGF0ZXMgZm9yIFJlYWN0aXZlRm9ybVxuICogaW5wdXQgZXJyb3JzIHRoYXQgYXJlIG5lZWRlZCBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogU2F2ZXMgdGltZSBmcm9tIGhhdmluZyB0byBjcmVhdGUgdGhlIHNhbWUgZXJyb3IgbWVzc2FnZXMgYWNyb3NzXG4gKiBudW1lcm91cyBwYWdlcyBhbmQga2VlcHMgdGhlIGVycm9yIG1lc3NhZ2VzIGNvbnNpc3RhbnRcbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZXF1aXJlZEVycm9yQ29tcG9uZW50LFxuICAgIEVtYWlsRXJyb3JDb21wb25lbnQsXG4gICAgUGFzc3dvcmRFcnJvckNvbXBvbmVudCxcbiAgICBDb25maXJtUGFzc3dvcmRFcnJvckNvbXBvbmVudFxuICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIFJlcXVpcmVkRXJyb3JDb21wb25lbnQsXG4gICAgICBFbWFpbEVycm9yQ29tcG9uZW50LFxuICAgICAgUGFzc3dvcmRFcnJvckNvbXBvbmVudCxcbiAgICAgIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUVycm9yc01vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZm9ybS1lcnJvcnMubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JlcXVpcmVkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9yZXF1aXJlZC1lcnJvci50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXF1aXJlZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZmllbGQ6IEFic3RyYWN0Q29udHJvbDtcbiAgQElucHV0KCkgdGV4dExhYmVsOiBzdHJpbmc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODY4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBIYW5kbGUgZW1haWwgcmVsYXRlZCBlcnJvciBtZXNzYWdlcyBzdWNoIGFzXG4gKiAtIGlzIHJlcXVpcmVkOiBgRW1haWwgaXMgcmVxdWlyZWRgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZW1haWwtZXJyb3InLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2VtYWlsLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEVtYWlsRXJyb3JDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGlucHV0IGVtYWlsIGZyb20gZm9ybTsgaW5jbHVkZXMgZXJyb3JzIGlmIGFwcGxpY2FibGVcbiAgICovXG4gIEBJbnB1dCgpIGVtYWlsOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODcwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwYXNzd29yZC1lcnJvcicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRFcnJvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODcyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb25maXJtLXBhc3N3b3JkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uZmlybVBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODc0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlbGVjdERyb3BTZXJ2aWNlLCBzZWxlY3REcm9wU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NlbGVjdC1kcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0RHJvcENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWRyb3AuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3QtZHJvcC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0LWRyb3AuY29tcG9uZW50JztcblxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbe3Byb3ZpZGU6IFNlbGVjdERyb3BTZXJ2aWNlLCB1c2VGYWN0b3J5OiBzZWxlY3REcm9wU2VydmljZUZhY3Rvcnl9XTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2VsZWN0RHJvcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWxlY3REcm9wQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJze1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2VsZWN0RHJvcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3AubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFkbWluUm91dGVzIH0gZnJvbSAnLi9hZG1pbi5yb3V0ZXMnO1xuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuaW1wb3J0IHsgQWRtaW5HdWFyZCB9IGZyb20gJy4vYWRtaW4uZ3VhcmQuc2VydmljZSc7XG5cbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zdHVkZW50L3N0dWRlbnQuc2VydmljZSc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBhZG1pbiBmdW5jdGlvbnMgaGF2aW5nIHRvIGRlYWwgd2l0aCBzdHVkZW50cyBhbmQgY291cnNlcyB0aGF0IHNob3VsZCBub3QgYmUgYWNjZXNzZWQgYnkgYSByZWd1bGFyIHVzZXJcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQWRtaW5Sb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIEFkbWluSG9tZUNvbXBvbmVudCxcbiAgICBOb3RBdXRoQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFkbWluR3VhcmQsXG4gICAgU3R1ZGVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbk1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFkbWluR3VhcmQgfSBmcm9tICcuL2FkbWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VkSW5HdWFyZCB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEFkbWluUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnYWRtaW4nLFxuICAgIGRhdGE6IHtcbiAgICAgIGJyZWFkY3J1bWJzOiAnQWRtaW4nXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTpbTG9nZ2VkSW5HdWFyZF0sXG4gICAgY2FuQWN0aXZhdGVDaGlsZDogW0FkbWluR3VhcmRdLFxuICAgIGNvbXBvbmVudDogQWRtaW5Db21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2NvdXJzZXMnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2NvdXJzZS9jb3Vyc2UubW9kdWxlJylbJ0NvdXJzZU1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ0NvdXJzZXMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdzdHVkZW50cycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7ICAocmVxdWlyZSBhcyBhbnkpLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmU6IGFueSkgeyAgICByZXNvbHZlKHJlcXVpcmUoJy4vc3R1ZGVudC9zdHVkZW50Lm1vZHVsZScpWydTdHVkZW50TW9kdWxlJ10pOyAgfSwgZnVuY3Rpb24oZTogYW55KSB7ICAgIHJlamVjdCh7IGxvYWRDaHVua0Vycm9yOiB0cnVlLCBkZXRhaWxzOiBlIH0pOyAgfSk7fSkgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnU3R1ZGVudHMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEFkbWluSG9tZUNvbXBvbmVudFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhZG1pbi9ub3QtYXV0aCcsXG4gICAgY29tcG9uZW50OiBOb3RBdXRoQ29tcG9uZW50XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2FkbWluLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODc4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGgudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODgwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJ1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRlcyB9IGZyb20gJy4vYXV0aGVudGljYXRpb24ucm91dGVzJztcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSB3aGljaCBkZWFscyB3aXRoIGFueXRoaW5nIHJlbGF0ZWQgdG8gYXV0aGVudGljYXRpbmcgdXNlcnMsXG4gKiBpLmUuIGxvZ2dpbmcgaW4vb3V0IHVzZXJzIGFuZCByZXNldHRpbmcgZm9yZ290dGVuIHBhc3N3b3Jkc1xuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQXV0aGVudGljYXRpb25Sb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2lnbmluQ29tcG9uZW50LFxuICAgICAgICBTaWdudXBDb21wb25lbnQsXG4gICAgICBTaWdub3V0Q29tcG9uZW50LFxuICAgICAgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQsXG4gICAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbk1vZHVsZSB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25Sb3V0ZXM6IFJvdXRlcyA9IFt7XG4gICAgcGF0aDogJ2F1dGhlbnRpY2F0aW9uJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICB7IHBhdGg6ICdzaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdzaWdub3V0JywgY29tcG9uZW50OiBTaWdub3V0Q29tcG9uZW50IH0sXG4gICAgICB7cGF0aDogJ2ZvcmdldC1wYXNzd29yZCcsIGNvbXBvbmVudDogRm9yZ2V0UGFzc3dvcmRDb21wb25lbnR9LFxuICAgICAge3BhdGg6ICdyZXNldC1wYXNzd29yZC86dG9rZW4nLCBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRDb21wb25lbnR9XG4gICAgXVxufV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODg2XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBIZWxwUm91dGVzIH0gZnJvbSAnLi9oZWxwLnJvdXRlcyc7XG5pbXBvcnQgeyBIZWxwQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWxwQ3JpY2tldENvbXBvbmVudCB9IGZyb20gJy4vaGVscC1jcmlja2V0L2hlbHAtY3JpY2tldC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChIZWxwUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBIZWxwQ29tcG9uZW50LFxuICAgIEhlbHBDcmlja2V0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVscE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaGVscC9oZWxwLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIZWxwQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWxwQ3JpY2tldENvbXBvbmVudCB9IGZyb20gJy4vaGVscC1jcmlja2V0L2hlbHAtY3JpY2tldC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgSGVscFJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ2hlbHAnLFxuICAgIGNvbXBvbmVudDogSGVscENvbXBvbmVudCxcbiAgICBkYXRhOiB7YnJlYWRjcnVtYnM6ICdIZWxwJ30sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtwYXRoOiAnY3JpY2tldCcsXG4gICAgICBjb21wb25lbnQ6IEhlbHBDcmlja2V0Q29tcG9uZW50LFxuICAgICAgZGF0YToge2JyZWFkY3J1bWJzOiAnQ3JpY2tldCd9XG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaGVscC9oZWxwLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaGVscC9oZWxwLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaGVscC9oZWxwLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2hlbHAvaGVscC5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaGVscC9oZWxwLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gODkwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaGVscC9oZWxwLWNyaWNrZXQvaGVscC1jcmlja2V0LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaGVscC9oZWxwLWNyaWNrZXQvaGVscC1jcmlja2V0LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgUHJvZmlsZVJvdXRlcyB9IGZyb20gJy4vcHJvZmlsZS5yb3V0ZXMnO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoUHJvZmlsZVJvdXRlcylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVXNlclByb2ZpbGVDb21wb25lbnQsXG4gICAgVXBkYXRlUGFzc3dvcmRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvZmlsZVNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvZ2dlZEluR3VhcmQgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdwcm9maWxlJyxcbiAgICBjYW5BY3RpdmF0ZTogW0xvZ2dlZEluR3VhcmRdLFxuICAgIGNhbkFjdGl2YXRlQ2hpbGQ6IFtMb2dnZWRJbkd1YXJkXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBwYXRoOiAndXBkYXRlLXBhc3N3b3JkJyxcbiAgICAgIGNvbXBvbmVudDogVXBkYXRlUGFzc3dvcmRDb21wb25lbnQsXG4gICAgICAgZGF0YToge1xuICAgICAgICAgYnJlYWRjcnVtYnM6ICdVcGRhdGUgcGFzc3dvcmQnXG4gICAgICAgfVxuICAgICAgfSxcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogVXNlclByb2ZpbGVDb21wb25lbnRcbiAgfVxuICAgIF0sXG4gICAgZGF0YToge1xuICAgICAgYnJlYWRjcnVtYnM6ICdQcm9maWxlJ1xuICAgIH1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OTRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODk1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDcmlja2V0Um91dGVzIH0gZnJvbSAnLi9jcmlja2V0LnJvdXRlcyc7XG5pbXBvcnQgeyBDcmlja2V0Q29tcG9uZW50IH0gZnJvbSAnLi9jcmlja2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2VuYXJpb0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3NjZW5hcmlvLWxpc3Qvc2NlbmFyaW8tbGlzdC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSBmb3Igc2NlbmFyaW8tcmVsYXRlZCBjb21wb25lbnRzIGFuZCBtb2R1bGVzXG4gKlxuICogTWFpbmx5IHVzZWQgdG8gYmUgYWJsZSB0byBhc3luYyBsb2FkIHRoZSBzcGVjaWZpYyBzY2VuYXJpb3MgdmlhIHRoZSB7QGxpbmsgTG9jYXRpb25Nb2R1bGV9XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKENyaWNrZXRSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENyaWNrZXRDb21wb25lbnQsXG4gICAgU2NlbmFyaW9MaXN0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JpY2tldE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ3JpY2tldENvbXBvbmVudCB9IGZyb20gJy4vY3JpY2tldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2NlbmFyaW9SZXNvbHZlciB9IGZyb20gJy4vc2NlbmFyaW8ucmVzb2x2ZXInO1xuaW1wb3J0IHsgU2NlbmFyaW9MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zY2VuYXJpby1saXN0L3NjZW5hcmlvLWxpc3QuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENyaWNrZXRSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdjcmlja2V0JyxcbiAgICBkYXRhOiB7XG4gICAgICBicmVhZGNydW1iczogJ0NyaWNrZXQnXG4gICAgfSxcbiAgICBjb21wb25lbnQ6IENyaWNrZXRDb21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJzpzY2VuSWQnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2xvY2F0aW9uL2xvY2F0aW9uLm1vZHVsZScpWydMb2NhdGlvbk1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBzY2VuYXJpbzogU2NlbmFyaW9SZXNvbHZlclxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnM6ICd7eyBzY2VuYXJpby5sYWJlbCB9fSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogU2NlbmFyaW9MaXN0Q29tcG9uZW50XG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0LnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvY3JpY2tldC9zY2VuYXJpby1saXN0L3NjZW5hcmlvLWxpc3QudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jcmlja2V0L3NjZW5hcmlvLWxpc3Qvc2NlbmFyaW8tbGlzdC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OThcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50O1xuICogTGlua3MgdGhlIG5hdiBiYXIgdG8gdGhlIGNvbnRlbnQgbmVlZGVkIGJhc2VkIG9uIHRoZSB1cmxcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjcmlja2V0LWFwcCcsXG4gICAgdGVtcGxhdGU6ICc8Y3JpY2tldC1uYXY+PC9jcmlja2V0LW5hdj48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+J1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIGJhciBhdCB0aGUgdG9wIG9mIHRoZSBzaXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY3JpY2tldC1uYXYnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL25hdi50ZW1wbGF0ZS5odG1sJyksXG4gICAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9uYXYuc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogVXNlciBvYmplY3QgdXNlZCB0byBkZXRlcm1pbmUgaWYgcHJvZmlsZSBsaW5rIHNob3VsZCBiZVxuICAgKiBpbmNsdWRlZCBpbiB0aGUgbmF2IGJhclxuICAgKi9cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHN0cmVhbSBmb3IgdGhlIGF1dGhldG5pY2F0aW9uIHNlcnZpY2VcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuICAgIH1cblxuICAvKipcbiAgICogSW5pdGlhdGUgdGhlIGNvbXBvbmVudCBieSBnZXR0aW5nIHRoZSBjdXJyZW50IHVzZXJcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyJFxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIHRoaXMudXNlciA9IHJlc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3RvcnkgdGhlIGNvbXBvbmVudCBieSB1bnN1YnNjcmliaW5nLCBpZiBuZWNlc3NhcnlcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbmF2L25hdi5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL25hdi9uYXYudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9uYXYvbmF2LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL25hdi9uYXYuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL25hdi9uYXYuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MDJcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbmRlbHBlZGVGcmlkZ2VDb21wb25lbnQgfSBmcm9tICcuL3NjZW5hcmlvcy9tcGVkZS1mcmlkZ2UvbXBlZGUtZnJpZGdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlTGFicm9vbUNvbXBvbmVudCB9IGZyb20gJy4vc2NlbmFyaW9zL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvc0NvbXBvbmVudCB9IGZyb20gJy4vc2NlbmFyaW9zL3NjZW5hcmlvcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4vc2NlbmFyaW9zL3NjZW5hcmlvcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgTWVuZGVscGVkZVJvdXRlcyB9IGZyb20gJy4vbWVuZGVscGVkZS5yb3V0ZXMnO1xuaW1wb3J0IHsgTWVuZGVscGVkZUNvbXBvbmVudCB9IGZyb20gJy4vbWVuZGVscGVkZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG4vKipcbiAqIE1vZHVsZSBmb3IgTWVuZGVscGVkZS1yZWxhdGVkIGNvbXBvbmVudHMgYW5kIG1vZHVsZXNcbiAqXG4gKiBcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoTWVuZGVscGVkZVJvdXRlcylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgT3B0aW9uc0NvbXBvbmVudCxcbiAgICBNZW5kZWxwZWRlRnJpZGdlQ29tcG9uZW50LFxuICAgIE1lbmRlbHBlZGVMYWJyb29tQ29tcG9uZW50LFxuICAgIE1lbmRlbHBlZGVTY2VuYXJpb3NDb21wb25lbnQsXG4gICAgTWVuZGVscGVkZUNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVuZGVscGVkZU1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL29wdGlvbnMvb3B0aW9ucy50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvb3B0aW9ucy9vcHRpb25zLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVuZGVscGVkZS1mcmlkZ2UnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tcGVkZS1mcmlkZ2UudGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL21wZWRlLWZyaWRnZS5zdHlsZS5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTWVuZGVscGVkZUZyaWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICB1c2VyOiBVc2VyO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gICAgXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuXG4gIH1cbiAgLyoqXG4gICAqIEdldHMgQ1NTIGNsYXNzZXMgXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGNsYXNzZXMgd2hcbiAgICovXG5cbiAgZ2V0TWVuZGVscGVkZSgpOiBPYmplY3R7XG4gICAgcmV0dXJuIHtcbiAgICAgICdtcGVkZS1iYXNpYy10b3AtcmlnaHQnOiB0cnVlLFxuICAgIH1cbiAgfVxuICBnZXRNZW5kZWxwZWRldG9wbGVmdCgpOiBPYmplY3R7XG4gICAgcmV0dXJuIHtcbiAgICAgICdtcGVkZS1iYXNpYy10b3AtbGVmdCc6IHRydWUsXG4gICAgfVxuICB9XG4gIGdldE1lbmRlbHBlZGVib3R0b21sZWZ0KCk6IE9iamVjdHtcbiAgICByZXR1cm4ge1xuICAgICAgJ21wZWRlLWJhc2ljLWJvdHRvbS1sZWZ0JzogdHJ1ZSxcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2UuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1mcmlkZ2UvbXBlZGUtZnJpZGdlLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MDZcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1mcmlkZ2UvbXBlZGUtZnJpZGdlLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1mcmlkZ2UvbXBlZGUtZnJpZGdlLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcGVkZS1sYWJyb29tJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbXBlZGUtbGFicm9vbS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbXBlZGUtbGFicm9vbS5zdHlsZS5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTWVuZGVscGVkZUxhYnJvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgdXNlcjogVXNlcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcblxuICB9XG4gIC8qKlxuICAgKiBHZXRzIENTUyBjbGFzc2VzIFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjbGFzc2VzIHdoXG4gICAqL1xuXG4gIGdldE1lbmRlbHBlZGUoKTogT2JqZWN0e1xuICAgIHJldHVybiB7XG4gICAgICAnbXBlZGUtYmFzaWMtdG9wLXJpZ2h0JzogdHJ1ZSxcbiAgICB9XG4gIH1cbiAgZ2V0TWVuZGVscGVkZXRvcGxlZnQoKTogT2JqZWN0e1xuICAgIHJldHVybiB7XG4gICAgICAnbXBlZGUtYmFzaWMtdG9wLWxlZnQnOiB0cnVlLFxuICAgIH1cbiAgfVxuICBnZXRNZW5kZWxwZWRlYm90dG9tbGVmdCgpOiBPYmplY3R7XG4gICAgcmV0dXJuIHtcbiAgICAgICdtcGVkZS1iYXNpYy1ib3R0b20tbGVmdCc6IHRydWUsXG4gICAgfVxuICB9XG4gIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3Mvc2NlbmFyaW9zLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3Mvc2NlbmFyaW9zLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3B0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlQ29tcG9uZW50IH0gZnJvbSAnLi9tZW5kZWxwZWRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9zQ29tcG9uZW50IH0gZnJvbSAnLi9zY2VuYXJpb3Mvc2NlbmFyaW9zLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBNZW5kZWxwZWRlUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoIDogJ21lbmRlbHBlZGUnLFxuICAgIGNvbXBvbmVudCA6IE1lbmRlbHBlZGVDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgYnJlYWRjcnVtYnM6ICdtZW5kZWxwZWRlJ1xuICAgIH0sXG5cbiAgICBjaGlsZHJlbjpbXG4gICAgICB7XG4gICAgICAgIHBhdGggOiAnJywgXG4gICAgICAgIGNvbXBvbmVudCA6IE9wdGlvbnNDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGggOiAnbXBlZGUtc2NlbmFyaW9zJywgXG4gICAgICAgIGNvbXBvbmVudCA6IE1lbmRlbHBlZGVTY2VuYXJpb3NDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ2xhYnJvb20nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=