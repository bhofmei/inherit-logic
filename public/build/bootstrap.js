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
const rxjs_1 = __webpack_require__(51);
const core_1 = __webpack_require__(1);
const http_1 = __webpack_require__(52);
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
const http_1 = __webpack_require__(52);
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
const http_1 = __webpack_require__(52);
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
const rxjs_1 = __webpack_require__(51);
const scenario_service_1 = __webpack_require__(118);
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
const http_1 = __webpack_require__(52);
const rxjs_1 = __webpack_require__(51);
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
        templateUrl: __webpack_require__(854),
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
        templateUrl: __webpack_require__(855),
        styleUrls: [__webpack_require__(856)]
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
        this.dropDiabled = !!value;
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
            if (this.dropDiabled) {
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
        templateUrl: __webpack_require__(873)
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
        templateUrl: __webpack_require__(874)
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
        templateUrl: __webpack_require__(875)
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
        templateUrl: __webpack_require__(878)
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
const rxjs_1 = __webpack_require__(51);
const authentication_service_1 = __webpack_require__(25);
const course_service_1 = __webpack_require__(182);
const read_error_1 = __webpack_require__(63);
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
        templateUrl: __webpack_require__(879)
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
const authentication_service_1 = __webpack_require__(25);
const read_error_1 = __webpack_require__(63);
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
        templateUrl: __webpack_require__(880)
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
const authentication_service_1 = __webpack_require__(25);
const read_error_1 = __webpack_require__(63);
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
        templateUrl: __webpack_require__(881)
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
        templateUrl: __webpack_require__(884),
        styleUrls: [__webpack_require__(885)]
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
const rxjs_1 = __webpack_require__(51);
const profile_service_1 = __webpack_require__(181);
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
        templateUrl: __webpack_require__(888)
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        authentication_service_1.AuthenticationService])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;


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
const router_1 = __webpack_require__(22);
const rxjs_1 = __webpack_require__(51);
const profile_service_1 = __webpack_require__(181);
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
        templateUrl: __webpack_require__(889)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        profile_service_1.ProfileService,
        authentication_service_1.AuthenticationService])
], UpdatePasswordComponent);
exports.UpdatePasswordComponent = UpdatePasswordComponent;


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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
let ScenarioComponent = class ScenarioComponent {
};
ScenarioComponent = __decorate([
    core_1.Component({
        selector: 'scenario',
        template: '<mc-breadcrumbs></mc-breadcrumbs><router-outlet></router-outlet>'
    })
], ScenarioComponent);
exports.ScenarioComponent = ScenarioComponent;


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
const authentication_service_1 = __webpack_require__(25);
const scenario_service_1 = __webpack_require__(118);
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
        templateUrl: __webpack_require__(892)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, scenario_service_1.ScenarioService])
], ListComponent);
exports.ListComponent = ListComponent;


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
const http_1 = __webpack_require__(52);
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
        templateUrl: __webpack_require__(857)
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
const common_1 = __webpack_require__(14);
const forms_1 = __webpack_require__(13);
const forms_2 = __webpack_require__(13);
const ng_bootstrap_1 = __webpack_require__(119);
const ngx_breadcrumbs_1 = __webpack_require__(179);
const confirm_delete_dialog_component_1 = __webpack_require__(412);
const person_name_pipe_1 = __webpack_require__(858);
const people_list_names_pipe_1 = __webpack_require__(859);
const phage_parents_pipe_1 = __webpack_require__(860);
const form_errors_module_1 = __webpack_require__(861);
const select_drop_module_1 = __webpack_require__(870);
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

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = __webpack_require__(230);
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(852);
if (process.env.NODE_ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(317)))

/***/ }),

/***/ 852:
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
const http_1 = __webpack_require__(52);
const ngx_breadcrumbs_1 = __webpack_require__(179);
const app_routes_1 = __webpack_require__(853);
const authentication_service_1 = __webpack_require__(25);
const logged_in_guard_service_1 = __webpack_require__(120);
const scenario_service_1 = __webpack_require__(118);
const course_service_1 = __webpack_require__(182);
const scenario_resolver_1 = __webpack_require__(183);
const shared_module_1 = __webpack_require__(64);
const admin_module_1 = __webpack_require__(871);
const authentication_module_1 = __webpack_require__(876);
const help_module_1 = __webpack_require__(882);
const profile_module_1 = __webpack_require__(886);
const scenario_module_1 = __webpack_require__(890);
const app_component_1 = __webpack_require__(893);
const nav_component_1 = __webpack_require__(894);
const page_not_found_component_1 = __webpack_require__(393);
const home_component_1 = __webpack_require__(394);
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
            scenario_resolver_1.ScenarioResolver,
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [ngx_breadcrumbs_1.McBreadcrumbsConfig])
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 853:
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

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/page-not-found/page-not-found.template.html";

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/home/home.template.html";

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/home/home.style.css";

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/confirm-delete-dialog.template.html";

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

/***/ 860:
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

/***/ 861:
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
const required_error_component_1 = __webpack_require__(862);
const email_error_component_1 = __webpack_require__(864);
const password_error_component_1 = __webpack_require__(866);
const confirm_password_error_component_1 = __webpack_require__(868);
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

/***/ 862:
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
        templateUrl: __webpack_require__(863)
    })
], RequiredErrorComponent);
exports.RequiredErrorComponent = RequiredErrorComponent;


/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/required-error.template.html";

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
        templateUrl: __webpack_require__(865)
    })
], EmailErrorComponent);
exports.EmailErrorComponent = EmailErrorComponent;


/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/email-error.template.html";

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
        templateUrl: __webpack_require__(867)
    })
], PasswordErrorComponent);
exports.PasswordErrorComponent = PasswordErrorComponent;


/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/password-error.template.html";

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
let ConfirmPasswordErrorComponent = class ConfirmPasswordErrorComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.AbstractControl)
], ConfirmPasswordErrorComponent.prototype, "confirmPassword", void 0);
ConfirmPasswordErrorComponent = __decorate([
    core_1.Component({
        selector: 'confirm-password-error',
        templateUrl: __webpack_require__(869)
    })
], ConfirmPasswordErrorComponent);
exports.ConfirmPasswordErrorComponent = ConfirmPasswordErrorComponent;


/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/confirm-password-error.template.html";

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
const router_1 = __webpack_require__(22);
const shared_module_1 = __webpack_require__(64);
const admin_routes_1 = __webpack_require__(872);
const admin_component_1 = __webpack_require__(397);
const admin_home_component_1 = __webpack_require__(398);
const not_auth_component_1 = __webpack_require__(399);
const admin_guard_service_1 = __webpack_require__(396);
const student_service_1 = __webpack_require__(411);
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

/***/ 872:
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
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(1).then((function (require) { resolve(__webpack_require__(897)['CourseModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
                data: {
                    breadcrumbs: 'Courses'
                }
            },
            {
                path: 'students',
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(2).then((function (require) { resolve(__webpack_require__(898)['StudentModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
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

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/admin.template.html";

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/admin-home/admin-home.template.html";

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/not-auth/not-auth.template.html";

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
const common_1 = __webpack_require__(14);
const router_1 = __webpack_require__(22);
const shared_module_1 = __webpack_require__(64);
const authentication_routes_1 = __webpack_require__(877);
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

/***/ 877:
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

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/signin/signin.template.html";

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/signup/signup.template.html";

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/forget-password/forget-password.template.html";

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/reset-password/reset-password.template.html";

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
const router_1 = __webpack_require__(22);
const shared_module_1 = __webpack_require__(64);
const help_routes_1 = __webpack_require__(883);
const help_component_1 = __webpack_require__(406);
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

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const help_component_1 = __webpack_require__(406);
exports.HelpRoutes = [
    {
        path: 'help',
        component: help_component_1.HelpComponent,
        data: { breadcrumbs: 'Help' }
    }
];


/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help.template.html";

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help.style.css";

/***/ }),

/***/ 886:
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
const profile_routes_1 = __webpack_require__(887);
const profile_service_1 = __webpack_require__(181);
const user_profile_component_1 = __webpack_require__(407);
const update_password_component_1 = __webpack_require__(408);
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

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const logged_in_guard_service_1 = __webpack_require__(120);
const user_profile_component_1 = __webpack_require__(407);
const update_password_component_1 = __webpack_require__(408);
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

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/profile/user-profile/user-profile.template.html";

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/profile/update-password/update-password.template.html";

/***/ }),

/***/ 890:
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
const scenario_routes_1 = __webpack_require__(891);
const scenario_component_1 = __webpack_require__(409);
const list_component_1 = __webpack_require__(410);
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

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const scenario_component_1 = __webpack_require__(409);
const scenario_resolver_1 = __webpack_require__(183);
const list_component_1 = __webpack_require__(410);
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
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(0).then((function (require) { resolve(__webpack_require__(899)['LocationModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
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


/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/list/list.template.html";

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

/***/ 894:
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
        templateUrl: __webpack_require__(895),
        styleUrls: [__webpack_require__(896)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], NavComponent);
exports.NavComponent = NavComponent;


/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/nav/nav.template.html";

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/nav/nav.style.css";

/***/ })

},[851]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9zZWxlY3QtZHJvcC9zZWxlY3QtZHJvcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5yZXNvbHZlci50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLmd1YXJkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLXBhc3N3b3JkLnZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25vdXQvc2lnbm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3JlYWQtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYm9vdHN0cmFwLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FwcC5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9ob21lL2hvbWUuc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGVyc29uLW5hbWUucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BpcGVzL3Blb3BsZS1saXN0LW5hbWVzLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9waGFnZS1wYXJlbnRzLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZm9ybS1lcnJvcnMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL3JlcXVpcmVkLWVycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9yZXF1aXJlZC1lcnJvci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2VtYWlsLWVycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9lbWFpbC1lcnJvci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL3Bhc3N3b3JkLWVycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9wYXNzd29yZC1lcnJvci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9zZWxlY3QtZHJvcC9zZWxlY3QtZHJvcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9ub3QtYXV0aC9ub3QtYXV0aC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL3NpZ251cC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAuc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXBkYXRlLXBhc3N3b3JkL3VwZGF0ZS1wYXNzd29yZC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8ucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbGlzdC9saXN0LnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbmF2L25hdi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9uYXYvbmF2LnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9uYXYvbmF2LnN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVDQUFnRTtBQUNoRSxzQ0FBMkM7QUFDM0MsdUNBQWtEO0FBUWxELElBQWEsZUFBZSxHQUE1QjtJQTRCSSxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBMUI3QixhQUFRLEdBQUcsYUFBYSxDQUFDO1FBS3pCLHFCQUFnQixHQUFHLElBQUksc0JBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUMzRCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFJbEQscUJBQWdCLEdBQUcsSUFBSSxzQkFBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELGVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFPMUMsa0JBQWEsR0FBRyxJQUFJLHNCQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7UUFDeEQsb0JBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBT1osQ0FBQztJQVEzQyxhQUFhO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFTSCxXQUFXLENBQUMsZUFBdUIsRUFBRSxlQUF1QjtRQUN0RCxFQUFFLENBQUMsQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFD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eURBQWlGO0FBV2pGLElBQWEsWUFBWSxHQUF6QjtJQVlFLFlBQW9CLFlBQW1DO1FBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtJQUNyRCxDQUFDO0lBS0gsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRO2FBQzdDLFNBQVMsQ0FBQyxDQUFDLEdBQUc7WUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsV0FBVztRQUNULEVBQUUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBaENZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSxtQkFBTyxDQUFDLEdBQXFCLENBQUM7UUFDM0MsU0FBUyxFQUFFLENBQUMsbUJBQU8sQ0FBQyxHQUFpQixDQUFDLENBQUM7S0FDMUMsQ0FBQztxQ0Fha0MsOENBQXFCO0dBWjVDLFlBQVksQ0FnQ3hCO0FBaENZLG9DQUFZOzs7Ozs7OztBQ2J6Qiw0RTs7Ozs7OztBQ0FBLHdFIiwiZmlsZSI6ImJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IFNjZW5hcmlvLCBGcmlkZ2UsIEZyaWRnZVBoYWdlLCBHZW5vdHlwZVBoYWdlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogU2NlbmFyaW8vZnJpZGdlIHJlbGF0ZWQgZnVuY3Rpb25zIHRoYXQgZ2V0L3NlbmQgZGF0YSB0byB0aGUgYmFja2VuZCBzZXJ2ZXJcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9iYXNlVVJMID0gJ2FwaS9jcmlja2V0JztcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGRldGFpbHMgd2hpY2ggaXMgbmVlZGVkIHdoZW5cbiAgICogcGVyZm9ybWluZyBjcm9zc2VzXG4gICAqL1xuICAgIHByaXZhdGUgX3NjZW5hcmlvRGV0YWlscyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gICAgZ2V0U2NlbmFyaW9EZXRhaWxzID0gdGhpcy5fc2NlbmFyaW9EZXRhaWxzLmFzT2JzZXJ2YWJsZSgpO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2NlbmFyaW8gZ3Vlc3Nlc1xuICAgKi9cbiAgICBwcml2YXRlIF9zY2VuYXJpb0d1ZXNzZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe30pO1xuICAgIGdldEd1ZXNzZXMgPSB0aGlzLl9zY2VuYXJpb0d1ZXNzZXMuYXNPYnNlcnZhYmxlKCk7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBzY2VuYXJpbyBjb2RlXG4gICAqXG4gICAqIFVzZWQgYnkgZnJpZGdlIGFuZCBsb2NhdGlvbiBjb21wb25lbnRzXG4gICAqIHRvIGdldCB0aGUgY29kZSB3aXRob3V0IHRoZSByb3V0ZVxuICAgKi9cbiAgICBwcml2YXRlIF9zY2VuYXJpb0NvZGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICAgIGdldFNjZW5hcmlvQ29kZSA9IHRoaXMuX3NjZW5hcmlvQ29kZS5hc09ic2VydmFibGUoKTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCB0aGUgc2VydmljZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtIdHRwQ2xpZW50fSBfaHR0cCBBbmd1YXIgbWVjaGFuaXNtIHRvIG1ha2UgY2FsbHMgdG8gYmFja2VuZCBzZXJ2ZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgc2F2ZSBzY2VuYXJpbyBzdHVmZjpcbiAgICogc2NlbmFyaW9EZXRhaWxzLCBzY2VuYXJpb0d1ZXNzZXMsIGFuZCBzY2VuYXJpb0NvZGVcbiAgICpcbiAgICogVXNlZCB3aGVuIG5hdmlnYXRpbmcgYXdheSBmcm9tIHNjZW5hcmlvIGNvbXBvbmVudFxuICAgKi9cbiAgcmVzZXRTY2VuYXJpbygpIHtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9EZXRhaWxzLm5leHQoJycpO1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0d1ZXNzZXMubmV4dCh7fSk7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvQ29kZS5uZXh0KCcnKTtcbiAgICB9XG5cbiAgLyoqXG4gICogU2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzIGFuZCBzY2VuYXJpbyBndWVzc2VzXG4gICpcbiAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbmFyaW9EZXRhaWxzIC0gc2NlbmFyaW8gZGV0YWlsc1xuICAqIC0gbmVjZXNzYXJ5IGZvciBwZXJmb3JtaW5nIGV4cGVyaW1lbnRzXG4gICogQHBhcmFtIHtzdHJpbmd9IHNjZW5hcmlvR3Vlc3NlcyBjdXJyZW50IHNjZW5hcmlvIGd1ZXNzZXNcbiAgKi9cbiAgc2V0U2NlbmFyaW8oc2NlbmFyaW9EZXRhaWxzOiBzdHJpbmcsIHNjZW5hcmlvR3Vlc3Nlczogc3RyaW5nKSB7XG4gICAgICAgIGlmIChzY2VuYXJpb0RldGFpbHMgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLl9zY2VuYXJpb0RldGFpbHMubmV4dChzY2VuYXJpb0RldGFpbHMpO1xuICAgICAgICBpZiAoc2NlbmFyaW9EZXRhaWxzICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fc2NlbmFyaW9HdWVzc2VzXG4gICAgICAgICAgICAgIC5uZXh0KEpTT04ucGFyc2Uoc2NlbmFyaW9HdWVzc2VzKSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8U2NlbmFyaW9bXT59IGxpc3Qgb2Ygc2NlbmFyaW9zXG4gICAqL1xuICAgIGxpc3RTY2VuYXJpb3MoKTogT2JzZXJ2YWJsZTxTY2VuYXJpb1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PFNjZW5hcmlvW10+KHRoaXMuX2Jhc2VVUkwpXG4gICAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBzY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGlkZW50aWZpZXJcbiAgICpcbiAgICogQHJldHVybnMge1NjZW5hcmlvfVxuICAgKiAtIHNjZW5hcmlvIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gbG9hZCBzY2VuYXJpbyA8c2NlbklkPlwiIGlmIHNjZW5hcmlvIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgZ2V0U2NlbmFyaW8oc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNjZW5hcmlvPiB7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvQ29kZS5uZXh0KHNjZW5JZCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PFNjZW5hcmlvPihgJHt0aGlzLl9iYXNlVVJMfS8ke3NjZW5JZH1gKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgdXBkYXRlZCBndWVzc2VzIGZvciB0aGUgc2NlbmFyaW8gdG8gYmUgc2F2ZWQgaW4gZGF0YWJhc2VcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGd1ZXNzZXMgc3RyaW5nIG9mIHVwZGF0ZWQgZ3Vlc3Nlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKiAtIHVwZGF0ZWQgZ3Vlc3Nlc1xuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBcIkNvdWxkIG5vdCBzYXZlIG5ldyBndWVzc2VzXCIgaWYgY291bGRuJ3QgdXBkYXRlXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIHNhdmVEZWxldGlvbnMoZ3Vlc3NlczogYW55LCB1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3QoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9kZWxldGlvbnNgLCBndWVzc2VzKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmcmlkZ2UgZm9yIHRoZSB1c2VyL3NjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZT59XG4gICAqIC0gbmV3bHkgY3JlYXRlZCBmcmlkZ2VcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byBjcmVhdGUgbmV3IHBoYWdlIGZvciBzY2VuYXJpb1wiIGlmIGlzc3VlIGNyZWF0ZSBwaGFnZVxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIHNhdmUgbmV3IGZyaWRnZVwiIGlmIGNvdWxkbid0IGNyZWF0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICBjcmVhdGVGcmlkZ2UodXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGcmlkZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PEZyaWRnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9uZXctZnJpZGdlYCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXhpc3RpbmcgZnJpZGdlIGZvciB1c2VyL3NjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZT59XG4gICAqIC0gZXhpc3RpbmcgZnJpZGdlXG4gICAqIC0gb3IgZXJyb3IgXCJObyBmcmlkZ2UgZm9yIHNjZW5hcmlvL3VzZXJcIiBpZiBmcmlkZ2UgZG9lcyBub3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgZ2V0RnJpZGdlKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RnJpZGdlPiB7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PEZyaWRnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfWApO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IHBoYWdlIHN0cmFpbiB0byB0aGUgZnJpZGdlO1xuICAgKiBTZXJ2ZXIgdXNlcyB1c2VySWQgYW5kIHNjZW5Db2RlIHRvIGZpbmQgdGhlIGZyaWRnZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKiBAcGFyYW0ge2FueX0gc3RyYWluIC0gbmV3IHBoYWdlIHRvIGFkZCB0byBmcmlkZ2VcbiAgICogLSBoYXMgc3RyYWluTnVtLCBtdXRhdGlvbkxpc3QsIGFuZCBkZWxldGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2VQaGFnZT59XG4gICAqIC0gbmV3bHkgc2F2ZWQgcGhhZ2VcbiAgICogLSBvciBlcnJvciBcIlVzZXIgbm90IGZvdW5kXCIgaWYgdXNlciBub3QgZm91bmRcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBsb2FkIHNjZW5hcmlvIDxzY2VuSWQ+XCIgaWYgc2NlbmFyaW8gbm90IGZvdW5kXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gZmluZCBmcmlkZ2VcIiBpZiBmcmlkZ2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICBhZGRTdHJhaW4odXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCBzdHJhaW46IGFueSk6IE9ic2VydmFibGU8RnJpZGdlUGhhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0PEZyaWRnZVBoYWdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9L2ZyaWRnZS1waGFnZWAsIHN0cmFpbilcbiAgICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBkZXRhaWxzL2luZm9ybWF0aW9uIGFib3V0IGFuIGV4aXN0aW5nIHBoYWdlIGluIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZX0gc3RyYWluIC0gc3RyYWluIHRvIHVwZGF0ZVxuICAgKiAtIHVzZSBzdHJhaW4gYGlkYCB0byBzcGVjaWZ5IHN0cmFpbiBhbmQgc2VuZCB1cGRhdGVkIGluZm9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlUGhhZ2U+fVxuICAgKiAtIHVwZGF0ZWQgc3RyYWluXG4gICAqIC0gb3IgZXJyb3IgXCJQaGFnZSBub3QgZm91bmRcIiBpZiBzdHJhaW4gZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICB1cGRhdGVTdHJhaW4odXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCBzdHJhaW46IEZyaWRnZVBoYWdlKTogT2JzZXJ2YWJsZTxGcmlkZ2VQaGFnZT4ge1xuICAgICAgICBsZXQgc3RyYWluSWQgPSBzdHJhaW4uaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdDxGcmlkZ2VQaGFnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS8ke3N0cmFpbklkfWAsIHN0cmFpbilcbiAgICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHN0cmFpbiBmcm9tIHRoZSBmcmlkZ2UgKGFuZCBkYXRhYmFzZSlcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZX0gc3RyYWluIC0gdGhlIHN0cmFpbiB0byBkZWxldGVcbiAgICogLSB1c2Ugc3RyYWluIGBpZGAgdG8gc3BlY2lmeSB3aGljaCBzdHJhaW4gdG8gZGVsZXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9XG4gICAqIC0gdGhlIHN0cmFpbiBqdXN0IGRlbGV0ZWRcbiAgICogLSBvciBlcnJvciBcIlBoYWdlIG5vdCBmb3VuZFwiIGlmIHN0cmFpbiBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gZmluZCBmcmlkZ2VcIiBpZiBmcmlkZ2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIHJlbW92ZSBzdHJhaW4gZnJvbSBmcmlkZ2VcIiBpZiBjb3VsZG4ndCBkZWxldGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgZGVsZXRlU3RyYWluKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgc3RyYWluOiBGcmlkZ2VQaGFnZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGxldCBzdHJhaW5JZCA9IHN0cmFpbi5pZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS8ke3N0cmFpbklkfWApXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8uc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBSb3V0ZXIgZ3VhcmQgdGhhdCBtYWtlcyBzdXJlIG9ubHkgbG9nZ2VkIGluIHVzZXJzIGNhbiBhY2Nlc3MgdGhlIHBhZ2UgYW5kIGFsbCBjaGlsZCBwYWdlc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2VkSW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB1c2VyIGNhbiBhY3RpdmF0ZSAodmlzaXQpIGEgcGFnZVxuICAgKiBiYXNlZCBvbiBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqXG4gICAqIElmIG5vdCBsb2dnZWQgaW4sIHNldHMgdGhlIHJlZGlyZWN0IHVybCB0byB0YWtlIHVzZXIgYmFjayB0byB0aGlzIHBhZ2UgX2FmdGVyXyBsb2dnaW5nIGluIGFuZFxuICAgKiBzZW5kcyB0aGUgdXNlciB0byB0aGUgc2lnbiBpbiBwYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gcm91dGUgLSBjdXJyZW50IFVSTFxuICAgKiBAcGFyYW0ge1JvdXRlclN0YXRlc25hcHNob3R9IHN0YXRlIC0gcm91dGVyIHN0YXRlIGluY2x1ZGluZyB0aGUgdXJsIHRyeWluZyB0byBhY2Vzc1xuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgICogLSBgZmFsc2VgIGlmIHVzZXIgaXMgbm90IGxvZ2dlZCBpblxuICAgKi9cbiAgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IGJvb2xlYW4ge1xuICAgIGxldCB1cmw6IHN0cmluZyA9IHN0YXRlLnVybDtcblxuICAgIGxldCBpc0xvZ2dlZEluOiBib29sZWFuID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICBpZihpc0xvZ2dlZEluKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UucmVkaXJlY3RVcmwgPSB1cmw7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydhdXRoZW50aWNhdGlvbi9zaWduaW4nXSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdXNlciBjYW4gYWN0aXZhdGUgYWxsIGNoaWxkL3N1YiBwYWdlcyBkZXBlbmRpbmcgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgICpcbiAgICogT25seSBsb2dnZWQgaW4gdXNlcnMgY2FuIGFjdGl2YXRlIHRoZSBwYWdlc1xuICAgKi9cbiAgY2FuQWN0aXZhdGVDaGlsZChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYW5BY3RpdmF0ZShyb3V0ZSwgc3RhdGUpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZS50cyIsImltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BEYXRhIHtcbiAgZGF0YTogYW55O1xuICBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xuICAvL25hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERyb3BTZXJ2aWNlRmFjdG9yeSgpOiBTZWxlY3REcm9wU2VydmljZSB7XG4gIHJldHVybiBuZXcgU2VsZWN0RHJvcFNlcnZpY2UoKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BTZXJ2aWNlIHtcbiAgLy8gYWxsb3dlZCBkcm9wIHpvbmVzP1xuICBjdXJTb3VyY2U6IHN0cmluZztcbiAgZGF0YTogYW55O1xuICBvblN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPFNlbGVjdERyb3BEYXRhPjtcbiAgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgZWxlbTogSFRNTEVsZW1lbnQ7XG5cbiAgZGVzZWxlY3QoKXtcbiAgICB0aGlzLmN1clNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9uU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcbiAgICB0aGlzLnJlbW92ZUVsZW1DbGFzcygpO1xuICAgIHRoaXMuZWxlbT1udWxsO1xuICB9XG5cbiAgc2VsZWN0KHNvdXJjZU5hbWU6IHN0cmluZywgZGF0YTogYW55LCBodG1sZWxlbWVudDogSFRNTEVsZW1lbnQpe1xuICAgIHRoaXMuY3VyU291cmNlID0gc291cmNlTmFtZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5lbGVtID0gaHRtbGVsZW1lbnQ7XG4gICAgaWYodGhpcy5lbGVtKVxuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICB9XG5cbiAgcmVtb3ZlRWxlbUNsYXNzKCk6IHZvaWR7XG4gICAgaWYodGhpcy5lbGVtKVxuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3Auc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyB3aGljaCBjb21tdW5pY2F0ZSB0byBiYWNrZW5kIHRvIGFsbG93XG4gKiB1c2VycyB0byB1cGRhdGUgdGhlaXIgcHJvZmlsZSBhbmQvb3IgY2hhbmdlIHRoZSBwYXNzd29yZFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBMZWFkaW5nIGJhY2tlbmQgdXJsIHBhdGhcbiAgICovXG4gIHByaXZhdGUgX2Jhc2VVcmw6IHN0cmluZyA9ICcvYXBpL3VzZXJzLyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KXt9XG5cbiAgLyoqXG4gICAqIEVkaXQgZGV0YWlscyBhYm91dCB0aGUgdXNlciBwcm9maWxlIGluY2x1ZGluZ1xuICAgKiAxLiBObWVcbiAgICogMi4gRW1haWwgYWRkcmVzc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJRCBvZiB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHthbnl9IGRldGFpbHMgdXNlciBkZXRhaWxzIHRvIHVwZGF0ZSB3aXRoXG4gICAqIGV4aXNpdGluZyBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxVc2VyPn0gLSBUaGUgdXBkYXRlZCB1c2VyIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgZXJyb3IgXCJVc2VyIGRvZXMgbm90IGV4aXN0XCIgaWYgbm9uLWV4aXN0YW50IHVzZXJcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGVkaXRQcm9maWxlKHVzZXJJZDogbnVtYmVyLCBkZXRhaWxzOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXI+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLl9iYXNlVXJsICsgdXNlcklkLCBkZXRhaWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHVzZXIncyBwYXNzd29yZCBvbmNlIGFscmVhZHkgc2lnbmVkIGluXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklEIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7YW55fSBjcmVkZW50aWFscyAtIHBhc3N3b3JkIGluZm9ybWF0aW9uXG4gICAqIC0gaW5jbHVkZXM6IFwicGFzc3dvcmRcIiAob2xkIHBhc3N3b3JkKSBhbmQgXCJuZXdQYXNzd29yZFwiICAocGFzc3dvcmQgdG8gdXBkYXRlIHRvKVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxVc2VyPn0gLSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdXNlciBqdXN0IHVwZGF0ZWRcbiAgICogLSBvciBlcnJvciBcIlVzZXIgZG9lcyBub3QgZXhpc3RcIiBpZiBub24tZXhpc3RhbnQgdXNlclxuICAgKiAtIG9yIGVycm9yIFwiSW5jb3JyZWN0IHBhc3N3b3JkXCIgaWYgd3Jvbmcgb2xkIHBhc3N3b3JkXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICB1cGRhdGVQYXNzd29yZCh1c2VySWQ6IG51bWJlciwgY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8VXNlcj57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KHRoaXMuX2Jhc2VVcmwgKyB1c2VySWQgKyAnL3VwZGF0ZS1wYXNzd29yZCcsIGNyZWRlbnRpYWxzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb3Vyc2UsIFN0dWRlbnQsIEFkbWluU3R1ZGVudCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyByZWxhdGVkIHRvIGdldHRpbmcgY291cnNlIGluZm9ybWF0aW9uIGZyb20gdGhlIGJhY2sgZW5kIHNlcnZlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ291cnNlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfYmFzZVVSTCA9ICcvYXBpL2FkbWluJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBjb3Vyc2VzIGRlcGVuZGluZyBpZiB1c2VyXG4gICAqIGlzIGEgZnVsbCBhZG1pbiBvciBpbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIGRhdGFiYXNlIHVzZXIgSUQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENvdXJzZVtdPn0gLSBXaGVuIHN1Y2Nlc3NmdWwgYW5kIGBhZG1pbmAsIGxpc3Qgb2YgYWxsIGNvdXJzZXNcbiAgICogLSBXaGVuIHN1Y2Nlc3NmdWwgYW5kIGBpbnN0cmAsIGxpc3Qgb2YgY291cnNlcyBpbiB3aGljaCB1c2VyIGlzIGFuIGluc3RydWN0b3IgZm9yXG4gICAqIC0gb3IgZXJyb3IgXCJObyBjb3Vyc2VzIGZvdW5kXCIgaWYgbm8gY291cnNlcyB0byBsaXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGxpc3RDb3Vyc2VzKGFkbWluSWQ6IG51bWJlcik6IE9ic2VydmFibGU8Q291cnNlW10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PENvdXJzZVtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgY291cnNlIHdpdGggbG9nZ2VkIGluIHVzZXIgYXMgaW5zdHJ1Y3RvciBhbmRcbiAgICogZGV0YWlscyBzcGVjaWZpZWQgaW4gYGJvZHlgXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7YW55fSBib2R5IGNvdXJzZSBkZXRhaWxzIGluY2x1ZGluZyBgY291cnNlTnVtYCBhbmQgYGRlc2NyaXB0aW9uYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSAtIHRoZSBuZXdseSBjcmVhdGVkIGNvdXJzZSBpZiBzdWNjZXNzZnVsXG4gICAqIC0gb3IgZXJyb3IgbWVzc2FnZSBmb3Igc2VydmVyL2RhdGFiYXNlIGVycm9yc1xuICAgKi9cbiAgY3JlYXRlQ291cnNlKGFkbWluSWQ6IG51bWJlciwgYm9keTogYW55KTogT2JzZXJ2YWJsZTxDb3Vyc2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAucG9zdDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlc2AsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhIHNwZWNpZmljIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyICh3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHIpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2UgdG8gZ2V0IGluZm9ybWF0aW9uIGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSAtIHRoZSBjb3Vyc2UgaW5mb3JtYXRpb24gaW5jbHVkaW5nIGBjb3Vyc2VOdW1gLCBgZGVzY3JpcHRpb25gLCBhbmQgYGluc3RydWN0b3JzYFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldENvdXJzZShhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb3Vyc2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PENvdXJzZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBzdHVkZW50cyBpbiBhIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgdGhlIGNvdXJzZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTdHVkZW50W10+fSAtIGxpc3Qgb2Ygc3R1ZGVudHMgZWFjaCB3aXRoIHByb3BlcnRpZXMgYGZpcnN0TmFtZWAsIGBsYXN0TmFtZWAsIGB1c2VySWRgLCBgYWNjZXNzR3JhbnRlZGAsIGFuZCBgZW1haWxgXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIG1lc3NhZ2UgZm9yIHNlcnZlci9kYXRhYmFzZSBlcnJvcnNcbiAgICovXG4gIGdldFN0dWRlbnRzKGFkbWluSWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0dWRlbnRbXT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQ8U3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L3N0dWRlbnRzYCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBlZGl0aW5nIGEgY291cnNlLCB1c2VyIGlzIGFibGUgdG8gYWRkIG5ldyBpbnN0cnVjdG9ycy4gVGhpcyBtZXRob2QgcHJvZHVjZXMgdGhlIGxpc3Qgb2YgcG9zc2libGUgaW5zdHJ1Y3RvcnMgdGhhdCBjb3VsZCBiZSBhZGRlZFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2Ugd2UgYXJlIGVkaXRpbmdcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50W10+fSAtIGxpc3Qgb2YgcG90ZW50aWFsIGluc3R1Y3RvcnMgd2l0aCBwcm9wZXJ0aWVzIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcklkYCwgYW5kIGByb2xlYFxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldFBvc3NpYmxlSW5zdHJ1Y3RvcnMoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZyk6IE9ic2VydmFibGU8QWRtaW5TdHVkZW50W10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PEFkbWluU3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L2luc3RydWN0b3JzYCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIHVzZXIgYXMgYW4gaW5zdHJ1Y3RvciBvZiB0aGUgY291cnNlIGFuZCBjaGFuZ2UgdGhlIG5ldyBpbnN0cnVjdG9yJ3Mgcm9sZSB0byBgaW5zdHJgIGlmIG5lY2Vzc2FyeVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciB0byBhZGQgaW5zdHJ1Y3RvciBmb3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld0luc3RySWQgdXNlcklkIG9mIHVzZXIgdG8gYWRkIGFzIGluc3RydWN0b3Igb2YgdGhpcyBjb3Vyc2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB0aGUgdXBkYXRlZCBjb3Vyc2UgaW5mb3JtYXRpb25cbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgaWYgcHJvYmxlbSB1cGRhdGluZyB0aGUgY291cnNlXG4gICAqIC0gb3IgZXJyb3IgaWYgcHJvYmxlbSB1cGRhdGluZyB0aGUgbmV3IGluc3RydWN0b3Igcm9sZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgYWRkSW5zdHJ1Y3RvcihhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nLCBuZXdJbnN0cklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPENvdXJzZT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAucG9zdDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlcy8ke2NvdXJzZU51bX0vaW5zdHJ1Y3RvcnMvJHtuZXdJbnN0cklkfWAsIHtpbnN0cnVjdG9yOiB0cnVlfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGNvdXJzZSBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge2FueX0gYm9keSB1cGRhdGVkIGNvdXJzZSBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSAtIHVwZGF0ZWQgY291cnNlIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZWRpdENvdXJzZShhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nLCBib2R5OiBhbnkpOiBPYnNlcnZhYmxlPENvdXJzZT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5wb3N0PENvdXJzZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfWAsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgY291cnNlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2UgdG8gZGVsZXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IC0gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvdXJzZSBqdXN0IGRlbGV0ZWRcbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGRlbGV0ZUNvdXJzZSh1c2VySWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19YCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFsbCBvZiB0aGUgc3R1ZGVudHMgaW4gdGhlIGNvdXJzZTsgdXNlZnVsIGZvciBidWxrIGRlbGV0aW9uc1xuICAgKiB3aGVuIGEgY291cnNlIGlzIG92ZXJcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciB3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdXJzZU51bSBjb3Vyc2UgbnVtYmVyIG9mIGNvdXJzZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIGxpc3Qgb2Ygc3R1ZGVudHMganVzdCBkZWxldGVkXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBkZWxldGVTdHVkZW50cyh1c2VySWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L3N0dWRlbnRzYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjZW5hcmlvIHN0YXR1cyAoYWthIGFjY2VzcyBncmFudGVkKSBmb3IgYSBzY2VuYXJpbyBmb3IgYWxsIHN0dWRlbnRzIGluIGEgY291cnNlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuQ29kZSBvZiBzY2VuYXJpbyBvZiBpbnRlcmVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTdHVkZW50W10+fSAtIGxpc3Qgb2Ygc3R1ZGVudHMgaW4gY291cnNlIGVhY2ggd2l0aCBwcm9wZXJ0aWVzIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcklkYCwgYW5kIGBzdGF0dXNgXG4gICAqIC0gb3IgXCJubyBzdHVkZW50cyBmb3VuZFwiIGlmIG5vIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2VcbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ2V0U2NlbmFyaW9TdGF0dXMoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZywgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0dWRlbnRbXT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQ8U3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19LyR7c2NlbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIGNvdXJzZSBudW1iZXJzIGZvciBhbGwgYXZhaWxhYmxlIGNvdXJzZXNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBsaXN0IG9mIGNvdXJzZXMgd2l0aCBwcm9wZXJ0aWVzIGBjb3Vyc2VOdW1gIGFuZCBgaWRgXG4gICAqIC0gb3IgXCJObyBjb3Vyc2VzIGZvdW5kXCIgZXJyb3IgaWYgbm8gY291cnNlcyBmb3VuZFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ2V0Q291cnNlTGlzdCgpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQoYC9hcGkvY291cnNlc2ApO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJlc29sdmUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi9zY2VuYXJpby5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zY2VuYXJpby5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFJlc29sdmVzIGEgcm91dGUgVVJMIHRvIGdldCB0aGUgc2NlbmFyaW8gaWQgKGZyb20gdGhlIHVybClcbiAqIHRoZW4gdXNlcyB0aGF0IHRvIGdldCB0aGUgc2NlbmFyaW8gbGFiZWwgdXNpbmcgc2NlbmFyaW8gc2VydmljZVxuICpcbiAqIFRoaXMgaXMgdXNlZCB0byBnZW5lcmF0ZSBodW1hbi1yZWFkYWJsZSBicmVhZGNydW1iIGxhYmVsc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9SZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8U2NlbmFyaW8+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCByZXF1aXJlZCBieSBpbXBsZW1lbnRhdGlvblxuICAgKiBCYXNlZCBvbiB0aGUgaWRlbnRpZmllZCBzY2VuQ29kZSBmcm9tIHRoZSBVUkwsIHVzZSB0aGUgc2VydmljZSBnbyBnZXQgdGhlIHNjZW5hcmlvIGRldGFpbHMgYW5kIHNlbmQgYmFjayB0byBjbGllbnRcbiAgICpcbiAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSByb3V0ZSBjdXJyZW50IHJvb3QgVVJMXG4gICAqIEBwYXJhbSB7Um91dGVyU3RhdGVTYW5wc2hvdH0gY3VycmVudCByb3V0ZSBzbmFwc2hvdFxuICAgKlxuICAgKiBAcmV0dXJucyB7U2NlbmFyaW99IC0gVGhlIHNjZW5hcmlvIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIGRvIHRoZSB1cmwgcGFyYW0gSUQgaWYgaXQgZXhpc3RzXG4gICAtIG9yIGVtcHR5IHNjZW5hcmlvIGlmIGl0IGRvZXMgbm90IGV4aXN0XG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPFNjZW5hcmlvPiB7XG5cbiAgICBjb25zdCBzY2VuQ29kZSA9IHJvdXRlLnBhcmFtc1snc2NlbklkJ107XG5cbiAgICBpZiAoc2NlbkNvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0U2NlbmFyaW8oc2NlbkNvZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8U2NlbmFyaW8+KCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5yZXNvbHZlci50cyIsIi8vaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBkZWFscyB3aXRoIHZhbGlkYXRpbmcgYW5kIGxvZ2dpbmcgaW4vb3V0IHVzZXJzIGFuZFxuICogcmVzZXR0aW5nIGZvcmdvdHRlbiBwYXNzd29yZHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfdXNlcjogQmVoYXZpb3JTdWJqZWN0PFVzZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyPihudWxsKTtcbiAgICBnZXRVc2VyJCA9IHRoaXMuX3VzZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBwcml2YXRlIF9iYXNlVXJsID0gJy9hcGkvYXV0aC8nXG5cbiAgLyoqXG4gICAqIFdoZW4gYSBub24tbG9nZ2VkIGluIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGEgcGFnZSB3aGljaCByZXF1aXJlcyBsb2dnaW5nIGluLFxuICAgKiBzYXZlIHRoYXQgcGFnZSdzIHVybCBhbmQgZGlyZWN0IHVzZXIgdGhlcmUgYWZ0ZXIgdGhleSBsb2cgaW5cbiAgICovXG4gICAgcHVibGljIHJlZGlyZWN0VXJsOiBzdHJpbmcgPSAnLyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlcnZpY2VzIGB1c2VyYCB2YXJpYWJsZSB3aGljaCBpcyBzdG9yZWQgYWZ0ZXIgdXNlciBsb2dzIGluXG4gICAqXG4gICAqIEBwYXJhbSB7VXNlcn0gdXNlciAtIGN1cnJlbnQgdXNlciB3aG8gbG9nZ2VkIGluXG4gICAqIC0gb3IgYG51bGxgIHRvIHVuc2V0IHRoZSB1c2VyXG4gICAqL1xuICBzZXRVc2VyKHVzZXI6IFVzZXIpe1xuICAgIHRoaXMuX3VzZXIubmV4dCh1c2VyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgdXNlciBpbmZvcm1hdGlvbiBub3QgYXMgYW4gb2JzZXJ2YWJsZVxuICAgKiBzbyBpdCBpcyBzeW5jaHJvbm91cyBhbmQga2VlcHMgdGhlIGFwcCBjb21wb25lbnRzJyBgbmdPbkluaXRgXG4gICAqIGZ1bmN0aW9ucyBjbGVhbmVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtVc2VyfSB0aGUgY3VycmVudCB1c2VyIG9yIGBudWxsYCBpZiBubyB1c2VyIGxvZ2dlZCBpblxuICAgKi9cbiAgZ2V0VXNlcigpOiBVc2Vye1xuICAgIHJldHVybiB0aGlzLl91c2VyLmdldFZhbHVlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgdXNlciBpcyBsb2dnZWQgaW5cbiAgICpcbiAgICogQHJlcXVpcmVzIHtib29sZWFufSAtIGB0cnVlYCBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqIC0gYGZhbHNlYCBvdGhlcndpc2VcbiAgICovXG4gIGlzTG9nZ2VkSW4oKTogYm9vbGVhbntcbiAgICByZXR1cm4gKCEhdGhpcy5nZXRVc2VyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB1c2VyIGNhbiBhY2Nlc3MgdGhlIGFkbWluIHBhZ2VzXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIGB0cnVlYCBpZiB1c2VyIGlzIGluc3RyIG9yIGFkbWluXG4gICAqIC0gYGZhbHNlYCBpZiB1c2VyIGlzIG9ubHkgYSBzdHVkZW50XG4gICAqL1xuICBjYW5BY2Nlc3NBZG1pbigpOiBib29sZWFue1xuICAgIGlmKHRoaXMuZ2V0VXNlcigpKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFVzZXIoKS5yb2xlID4gMFxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBzaWduIGEgdXNlciBpbiB1c2luZyB0aGUgcHJvdmlkZWQgY3JlZGVudGlhbHNcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGNyZWRlbnRpYWxzIC0gYHVzZXJuYW1lYCAoYXMgZW1haWwpIGFuZCBgcGFzc3dvcmRgIHRvIGJlIHRlc3RlZCBmb3IgbG9nZ2luZyBpblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxVc2VyPn0gLSB0aGUgc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiB1c2VyXG4gICAqIGVycm9yIG1lc3NhZ2UgYE1pc3NpbmcgY3JlZGVudGlhbHNgIGlmIG5vIGVtYWlsIG9yIHBhc3N3b3JkXG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgSW52YWxpZCBwYXNzd29yZGAgaWYgcGFzc3dvcmQgaXMgaW5jb3JyZWN0XG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgVXNlciBub3QgZm91bmRgIGlmIGludmFsaWQgZW1haWxcbiAgICogLSBlcnJvciBtZXNzYWdlIGZvciBzZXJ2ZXIvZGF0YWJhc2UvYXV0aGVudGljYXRpb24gZXJyb3JcbiAgICovXG4gIHNpZ25pbihjcmVkZW50aWFsczogYW55KTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWxzKTtcbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KHRoaXMuX2Jhc2VVcmwgKyAnc2lnbmluJywgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIGNyZWF0ZSBhIG5ldyB1c2VyIHVzaW5nIHRoZSBwcm92aWRlZCB1c2VyIGRldGFpbHNcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHVzZXIgLSB1c2VyIGRldGFpbHMgaW5jbHVkaW5nIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcm5hbWVgIChlbWFpbCksIGBjb3Vyc2VgLCBhbmQgYHBhc3N3b3JkYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxVc2VyPn0gLSBUaGUgbmV3IGxvZ2dlZC1pbiB1c2VyIHdoZW4gc3VjY2Vzc2Z1bGx5IGNyZWF0ZSBuZXcgdXNlclxuICAgKiAtIGVycm9yIDQwMCBpZiBlcnJyb3IgbG9nZ2luZyBpblxuICAgKiAtIGVycm9yIDUwMCBpZiBlcnJvciBjcmVhdGluZyB1c2VyXG4gICAqL1xuICBzaWdudXAodXNlcjogYW55KTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4odGhpcy5fYmFzZVVybCArICdzaWdudXAnLCBib2R5LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2lnbnMgb3V0IHRoZSB1c2VyXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IHJldHVybnMgYHRydWVgIGlmIHN1Y2Nlc3NmdWxseSBzaWduZWQgb3V0XG4gICAqL1xuICBzaWdub3V0KCk6IE9ic2VydmFibGU8YW55PntcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLl9iYXNlVXJsICsgJ3NpZ25vdXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXQgZW1haWwgYWRkcmVzcyBvZiBwb3RlbnRpYWwgdXNlciB0byBhbGxvdyB0aGF0IHVzZXJcbiAgICogdG8gcmVzZXQgdGhlaXIgcGFzc3dvcmQgaWYgdGhlIHVzZXIgZXhpc3RzXG4gICAqXG4gICAqIFRoZSBiYWNrZW5kIHRoZW4gc2VuZHMgYSBwYXNzd29yZCByZXNldCBlbWFpbCB0byB0aGVcbiAgICogZW1haWwgYWRkcmVzc1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gYm9keSAtIHJlcXVlc3QgYm9keSB0aGF0IGluY2x1ZGVzIGBlbWFpbGAgb2YgdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIFN1Y2Nlc3MgbWVzc2FnZSBpZiBwYXNzd29yZCByZXNldCBlbWFpbCBzZW50XG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgRXJyb3Igd2l0aCBzZXJ2ZXIgZW1haWwgc2VydmljZWAgaWYgcHJvYmxlbSB3aXRoIGVtYWlsIHRyYW5zcG9ydGVyXG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgTm8gYWNjb3VudCB3aXRoIHRoYXQgZW1haWwuYCBpZiBlbWFpbCBhZGRyZXNzIGRvZXNuJ3QgY29ycmVzcG9uZCB0byBhbiBleGlzdGluZyB1c2VyXG4gICAqIC0gZXJyb3IgNDIyIGZvciBvdGhlciBzZXJ2ZXIgZXJyb3JzXG4gICAqL1xuICBmb3JnZXRQYXNzd29yZChib2R5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuX2Jhc2VVcmwgKyAnZm9yZ2V0LXBhc3N3b3JkJywgYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gcmVzZXQgYSB1c2VyJ3MgcGFzc3dvcmQgdXNpbmcgdGhlIGNyZWRlbnRpYWxzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBjcmVkZW50aWFscyAtIGluZm8gbmVlZGVkIHRvIHJlc2V0IHBhc3N3b3JkOiBgcGFzc3dvcmQsIGBjb25maXJtUGFzc3dvcmRgLCBhbmQgYHRva2VuYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIElmIHN1Y2Nlc3NmdWwsIHNlbmRzIHN1Y2Nlc3MgbWVzc2FnZSBgUGFzc3dvcmRzIGhhcyBiZWVuIHJlc2V0YC5cbiAgICogLSBlcnJvciBtZXNzYWdlIGBJbnZhbGlkIHRva2VuYCBpZiB0b2tlbiBkb2Vzbid0IGV4aXN0XG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgVG9rZW4gaGFzIGV4cGlyZWRgIGZvciB2YWxpZCB0b2tlbnMgYnV0IHVzZXIgdG9vayB0b28gbG9uZyB0byBhdHRlbXB0IHRvIHJlc2V0XG4gICAqIC0gZXJyb3IgbWVzc2FnZSBmb3IgYWxsIG90aGVyIGVycm9yc1xuICAgKi9cbiAgcmVzZXRQYXNzd29yZChjcmVkZW50aWFsczogYW55KTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9iYXNlVXJsICsgJ3Jlc2V0LXBhc3N3b3JkJywgY3JlZGVudGlhbHMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogV2hlbiBVUkwgZ29lcyB0byBhIHBhZ2UgdGhhdCBkb2Vzbid0IGV4aXN0O1xuICogVGhpcyBpcyBzaW1wbGUsIHZpc3VhbCBjb21wb25lbnQgbmVlZGVkIHRvIGdldCB0aGUgdGVtcGxhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1ub3QtZm91bmQnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9wYWdlLW5vdC1mb3VuZC50ZW1wbGF0ZS5odG1sJyksXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZU5vdEZvdW5kQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKCl7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBob21lIGxhbmRpbmcgcGFnZSB3aGVuIGdvaW5nIHRvIHRoZSB3ZWJzaXRlXG4gKlxuICogTWFpbmx5IGEgdmlldyBjb21wb25lbnQsIGJ1dCBzb21lIGFzcGVjdHMgYXJlIGRlcGVuZGVudFxuICogb24gaWYgYSB1c2VyIGlzIGxvZ2dlZCBpbiBhbmQgdGhlIHVzZXIgcm9sZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaG9tZS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vaG9tZS5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBUaGUgbG9nZ2VkIGluIHVzZXIsIGlmIGFueVxuICAgKi9cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKXt9XG5cbiAgLyoqXG4gICAqIFdoZW4gaW50aWFsaXppbmcgY29tcG9uZW50LCBnZXQgdGhlIGxvZ2dlZCBpbiB1c2VyLCBpZiBhbnlcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgdGhlIGNvbXBvbmVudCwgdW5zZXQgdGhlIHVzZXIgdmFyaWFibGVcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy51c2VyID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2VsZWN0RHJvcFNlcnZpY2UsIFNlbGVjdERyb3BEYXRhIH0gZnJvbSAnLi9zZWxlY3QtZHJvcC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbc2VsZWN0LWRyb3BwYWJsZV0nfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REcm9wQ29tcG9uZW50IHtcbiAgICBfZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgX2RlZmF1bHRDdXJzb3I6IHN0cmluZztcblxuICAgIHByaXZhdGUgX3NlbGVjdEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzZXQgc2VsZWN0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdEVuYWJsZWQgPSAhIWVuYWJsZWQ7XG4gICAgfVxuICAgIGdldCBzZWxlY3RFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0RW5hYmxlZDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfZHJvcERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2V0IGRyb3BEaXNhYmxlZChkaXNhYmxlOiBib29sZWFuKXtcbiAgICAgIHRoaXMuX2Ryb3BEaXNhYmxlZCA9ICEhZGlzYWJsZTtcbiAgICB9XG4gICAgZ2V0IGRyb3BEaXNhYmxlZCgpOiBib29sZWFue1xuICAgICAgcmV0dXJuIHRoaXMuX2Ryb3BEaXNhYmxlZDtcbiAgICB9XG5cbiAgICAgQElucHV0KFwic2VsZWN0RW5hYmxlZFwiKSBzZXQgc2VsZWN0YWJsZSh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgICB0aGlzLnNlbGVjdEVuYWJsZWQgPSAhIXZhbHVlO1xuICAgICB9XG4gICAgIEBJbnB1dChcImRyb3BEaXNhYmxlZFwiKSBzZXQgdW5kcm9wcGFibGUodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAgdGhpcy5kcm9wRGlhYmxlZCA9ICEhdmFsdWU7XG4gICAgIH1cblxuICAgICBASW5wdXQoKSBhbGxvd0Ryb3A6IChkcm9wRGF0YTogYW55KSA9PiBib29sZWFuO1xuICAgICBASW5wdXQoXCJzZWxlY3REYXRhXCIpIGRhdGE6IGFueTtcbiAgICAgQElucHV0KCkgc291cmNlTmFtZTogc3RyaW5nO1xuXG4gICAgIEBPdXRwdXQoKSBvbkRyb3BTdWNjZXNzOiBFdmVudEVtaXR0ZXI8U2VsZWN0RHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3REcm9wRGF0YT4oKTtcbkBPdXRwdXQoXCJvblN1Y2Nlc3NcIikgb25TdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxTZWxlY3REcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdERyb3BEYXRhPigpO1xuQE91dHB1dCgpIG9uRXJyb3I6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgcHVibGljIF9zZWxlY3REcm9wU2VydmljZTogU2VsZWN0RHJvcFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICAgICAgICAvLyBBc3NpZ24gZGVmYXVsdCBjdXJzb3IgdW5sZXNzIG92ZXJyaWRkZW5cbiAgICAgICAgdGhpcy5fZGVmYXVsdEN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgdGhpcy5fZWxlbSA9IGVsZW1SZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYoIXRoaXMuZHJvcERpc2FibGVkICYmICF0aGlzLnNlbGVjdEVuYWJsZWQpXG4gICAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5jdXJzb3IgPSB0aGlzLl9kZWZhdWx0Q3Vyc29yOyAgLy8gc2V0IGRlZmF1bHQgY3Vyc29yIG9uIG91ciBlbGVtZW50XG5cbiAgICAgICAgdGhpcy5fZWxlbS5vbm1vdXNlZW50ZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX29uTW91c2VFbnRlcihldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWxlbS5vbm1vdXNlb3V0ID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5fb25Nb3VzZU91dChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgZXZlbnRzIC0gYm90aCBzZWxlY3QgYW5kIGRyb3BcbiAgICAgIHRoaXMuX2VsZW0ub25jbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT57XG4gICAgICAgIHRoaXMuX29uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgICAgICAvL1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgIC8vIE5lY2Vzc2FyeS4gQWxsb3dzIHVzIHRvIGRyb3AuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIG5vdGhpbmcgc2VsZWN0ZWQgYW5kIHNlbGVjdEVuYWJsZWQgLT4gc2VsZWN0XG4gICAgICBpZih0aGlzLl9zZWxlY3REcm9wU2VydmljZS5pc1NlbGVjdGVkID09PSBmYWxzZSAmJiB0aGlzLnNlbGVjdEVuYWJsZWQpe1xuICAgICAgICAvL3RoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtb2JqZWN0Jyk7XG4gICAgICAgIHRoaXMuX29uU2VsZWN0Q2FsbGJhY2soZXZlbnQpO1xuICAgIH0gLy8gaWYgd2UgcmUtY2xpY2tlZCB0aGUgb2JqZWN0IC0+IGRlc2VsZWN0XG4gICAgZWxzZSBpZih0aGlzLl9zZWxlY3REcm9wU2VydmljZS5pc1NlbGVjdGVkICYmIHRoaXMuc291cmNlTmFtZSA9PT0gdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuY3VyU291cmNlKXtcbiAgICAgICAgLy90aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICAgICAgICB0aGlzLl9vbkRlc2VsZWN0Q2FsbGJhY2soZXZlbnQpO1xuICAgIH0gLy8gaWYgd2UgY2FuIGRyb3AsIHRoZW4gZHJvcFxuICAgIGVsc2UgaWYodGhpcy5faXNEcm9wQWxsb3dlZChldmVudCkpe1xuICAgICAgLy90aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICAgICAgdGhpcy5fb25Ecm9wQ2FsbGJhY2soZXZlbnQpO1xuICAgIH0gLy8gaWYgc29tZXRoaW5nIHNlbGVjdGVkLCBzZWxlY3QgdGhpcyBpbnN0ZWFkXG4gICAgZWxzZSBpZih0aGlzLl9zZWxlY3REcm9wU2VydmljZS5pc1NlbGVjdGVkICYmIHRoaXMuc2VsZWN0RW5hYmxlZCl7XG4gICAgICAvL3RoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtb2JqZWN0Jyk7XG4gICAgICAvLyB1cGRhdGUgdG8gcmVtb3ZlIHNlbGVjdGVkLWNsYXNzIG9uIHByZXZpb3VzbHkgc2VsZWN0ZWQgZWxlbVxuICAgICAgdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UucmVtb3ZlRWxlbUNsYXNzKCk7XG4gICAgICB0aGlzLl9vblNlbGVjdENhbGxiYWNrKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb25FcnJvckNhbGxiYWNrKGV2ZW50KTtcbiAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25Nb3VzZUVudGVyKGV2ZW50OiBFdmVudCkge1xuICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coJ29uZHJhZ292ZXIuX2lzRHJvcEFsbG93ZWQnLCB0aGlzLl9pc0Ryb3BBbGxvd2VkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xuICAgICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ2Ryb3Atb2JqZWN0Jyk7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgb3ZlciB0aGUgc2FtZSBzb3VyY2UgZWxlbWVudCAtIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTmVjZXNzYXJ5LiBBbGxvd3MgdXMgdG8gZHJvcC5cbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBwcml2YXRlIF9vbk1vdXNlT3V0KGV2ZW50OiBFdmVudCl7XG4gICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Atb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgZGV0ZWN0Q2hhbmdlcyAoKSB7XG4gICAgICAgIC8vIFByb2dyYW1tYXRpY2FsbHkgcnVuIGNoYW5nZSBkZXRlY3Rpb24gdG8gZml4IGlzc3VlIGluIFNhZmFyaVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fY2RyICYmICEodGhpcy5fY2RyIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyNTApO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzRHJvcEFsbG93ZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgLy8gRmlyc3QsIGlmIGBhbGxvd0Ryb3BgIGlzIHNldCwgY2FsbCBpdCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGVcbiAgICAgICAgICAgIGlmKHRoaXMuZHJvcERpYWJsZWQpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dEcm9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dEcm9wKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ByZXZlbnRBbmRTdG9wKGV2ZW50OiBFdmVudCk6IGFueSB7XG4gICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gIF9vbkVycm9yQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkVycm9yLmVtaXQoJ1RoZXJlIHdhcyBhbiBlcnJvcicpO1xuICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRlc2VsZWN0KCk7XG4gIH1cblxuICAgIF9vbkRyb3BDYWxsYmFjayggZXZlbnQ6IE1vdXNlRXZlbnQgKXtcbiAgICAgIGxldCBkYXRhVHJhbnNmZXIgPSAoZXZlbnQgYXMgYW55KS5kYXRhVHJhbnNmZXI7XG4gICAgICBpZih0aGlzLl9zZWxlY3REcm9wU2VydmljZS5pc1NlbGVjdGVkKXtcbiAgICAgICAgdGhpcy5vbkRyb3BTdWNjZXNzLmVtaXQoe2RhdGE6IHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XG4gICAgICAgIGlmKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLm9uU3VjY2Vzc0NhbGxiYWNrKXtcbiAgICAgICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5vblN1Y2Nlc3NDYWxsYmFjay5lbWl0KHtkYXRhOiB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5kYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRlc2VsZWN0KCk7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfb25EZXNlbGVjdENhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KXtcbiAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRlc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgX29uU2VsZWN0Q2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYoIXRoaXMuc291cmNlTmFtZSAmJiAodGhpcy5kYXRhLnNvdXJjZSB8fCB0aGlzLmRhdGEuc3JjKSl7XG4gICAgICAgICAgdGhpcy5zb3VyY2VOYW1lID0gdGhpcy5kYXRhLnNvdXJjZSA/IHRoaXMuZGF0YS5zb3VyY2UgOiB0aGlzLmRhdGEuc3JjO1xuICAgICAgICB9IGVsc2UgaWYoIXRoaXMuc291cmNlTmFtZSl7XG4gICAgICAgICAgdGhpcy5zb3VyY2VOYW1lID0gJydcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmVsZW0gPSB0aGlzLl9lbGVtO1xuICAgICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5zZWxlY3QodGhpcy5zb3VyY2VOYW1lLCB0aGlzLmRhdGEsIHRoaXMuX2VsZW0pO1xuICAgICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5vblN1Y2Nlc3NDYWxsYmFjayA9IHRoaXMub25TdWNjZXNzQ2FsbGJhY2s7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlQ2hpbGQsIFJvdXRlciwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBHdWFyZCB0aGUgYWRtaW4gcGF0aHMgc28gb25seSB1c2VycyB3aXRoIGBhZG1pbmAgb3IgYGluc3RyYFxuICogcm9sZSBjYW4gYWNjZXNzIHRoZSByb3V0ZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlQ2hpbGQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHVzZXIgY2FuIGFjdGl2YXRlIHRoZSByb3V0ZSBiYXNlZCBvbiB0aGVpciByb2xlXG4gICAqXG4gICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gcm91dGUgLSByb3V0ZSBVUkwgYXQgdGhlIG1vbWVudFxuICAgKiBAcGFyYW0ge1JvdXRlclN0YXRlU25hcHNob3R9IHN0YXRlIC0gcm91dGVyIHN0YXRlOyBuZWVkZWQgdG8gaW1wbGVtZW50IGludGVyZmFjZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgdXNlciBpcyBgYWRtaW5gIG9yIGBpbnN0cmBcbiAgICogLSBgZmFsc2VgIGlmIHVzZXIgaXMgb25seSBhIGBzdHVkZW50YFxuICAgKi9cbiAgY2FuQWN0aXZhdGVDaGlsZChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSBzdGF0ZS51cmw7XG5cbiAgICBsZXQgcm9sZTogYm9vbGVhbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5jYW5BY2Nlc3NBZG1pbigpO1xuICAgIGlmKHJvbGUpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5yZWRpcmVjdFVybCA9IHVybDtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9ub3QtYXV0aCddKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLmd1YXJkLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEVudHJhbmNlIGNvbXBvbmVudCBmb3IgYWRtaW4gZmVhdHVyZXNcbiAqIE1haW5seSwgaXQgaXMgYSBjYXJkIHRoYXQgYWxsb3dzIG5hdmlnYXRpb24gYmV0d2VlbiBjb3Vyc2UtcmVsYXRlZFxuICogaW5mbyBhbmQgc3R1ZGVudC1yZWxhdGVkIGluZm9cbiAqIENvbnRlbnQgb2YgdGhlIGNhcmQgaXMgZGV0ZXJtaW5lZCBieSByb3V0ZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRtaW4nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hZG1pbi50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZG1pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBMb2dnZWQgaW4gdXNlclxuICAgKi9cbiAgcHJpdmF0ZSBhZG1pblVzZXI6IFVzZXI7XG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICApe31cblxuICAvKipcbiAgICogV2hlbiBpbml0aWFsaXppbmcgdGhlIGNvbXBvbmVudCwgZ2V0IHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXIncyBpbmZvcm1hdGlvblxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmFkbWluVXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSB2aWV3IGNvbXBvbmVudCB0aGF0IGlzIHZpc2libGUgd2hlbiBnb2luZyB0byB0aGUgbWFpbiBhZG1pbiBwYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkbWluLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluSG9tZUNvbXBvbmVudHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBiYXNpYyB2aWV3IGNvbXBvbmVudCB3aGVuIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGFuIGFkbWluXG4gKiBwYWdlIGJ1dCBkb2VzIG5vdCBoYXZlIGFkbWluIGFjY2Vzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3QtYXV0aCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL25vdC1hdXRoLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIE5vdEF1dGhDb21wb25lbnR7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuLyoqXG4gKiBDb21wb25lbnQgZm9yIGV4aXN0aW5nIHVzZXJzIHRvIHNpZ24gaW4gYW5kIGJlIGFibGVcbiAqIHRvIGFjY2VzcyB0aGVpciBzY2VuYXJpb3MvZnJpZGdlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ25pbicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2lnbmluLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogUG90ZW50aWFsIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBMb2dpbiBjcmVkZW50aWFscyBmb3IgdXNlciBpbmNsdWRpbmcgYHVzZXJuYW1lYCAoZW1haWwpIGFuZCBgcGFzc3dvcmRgXG4gICAqL1xuICBwcml2YXRlIGNyZWRlbnRpYWxzOiBGb3JtR3JvdXA7XG4gIC8qKlxuICAgKiBBdXRoZW50aWNhdGlvbiBzZXJ2aWNlIHN1YnNjcmlwdGlvbiBmcm9tIHdoZW4gdHJ5aW5nIHRvIGxvZ2luIHRoZSB1c2VyXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cblxuICAvKipcbiAgKiBJbnRpYWxpemUgdGhlIGZvcm0gZ3JvdXAgb24gY29tcG9uZW50IGNyZWF0aW9uXG4gICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIHVzZXJuYW1lOiBuZXcgRm9ybUNvbnRyb2woJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdKSxcbiAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKSxcbiAgfSk7XG4gIH1cblxuICBnZXQgdXNlcm5hbWUoKSB7IHJldHVybiB0aGlzLmNyZWRlbnRpYWxzLmdldCgndXNlcm5hbWUnKTt9XG4gIGdldCBwYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KCdwYXNzd29yZCcpO31cblxuICAvKipcbiAgICogVXBvbiBmb3JtIHN1Ym1pc3Npb24sIGF0dGVtcHRzIHRvIHNpZ24gaW4gdGhlIHVzZXIgd2l0aCBgY3JlZGVudGlhbHNgICh1c2luZyB0aGUgc2VydmljZSlcbiAgICpcbiAgICogV2hlbiBzdWNjZXNzZnVsLCBuYXZpZ2F0ZSB0b1xuICAgKiAtIHRoZSByZWRpcmVjdCBVUkwgaWYgc2V0ICh3aGVuIG5vbi1sb2dnZWQgaW4gdXNlciB0cmllcyB0byBhY2Nlc3MgYSBwYWdlIHRoYXQgcmVxdWlyZWQgbG9nZ2luZyBpbilcbiAgICogLSB0aGUgaG9tZSBwYWdlIGlmIHJlZGlyZWN0IFVSTCBpcyBub3Qgc2V0XG4gICAqXG4gICAqIFdoZW4gdW5zdWNjZXNzZnVsLCBkaXNwbGF5IGVycm9yIG1lc3NhZ2VcbiAgICovXG4gICAgc2lnbmluKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgICAgIC5zaWduaW4odGhpcy5jcmVkZW50aWFscy52YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2Uuc2V0VXNlcihyZXN1bHQpO1xuICAgICAgICAgIGxldCByZWRpcmVjdCA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5yZWRpcmVjdFVybCA/IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5yZWRpcmVjdFVybCA6ICcvJztcbiAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3JlZGlyZWN0XSk7XG4gICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICogR2V0IHRoZSBmb3JtIGlucHV0IENTUyBjbGFzc2VzIHN0eWxpbmcgdG8gcHJvdmlkZSBmZWVkYmFjayB0byB1c2VyXG4gICogd2hldGhlciBpbnB1dCBpcyB2YWxpZCBvbiBub3RcbiAgKlxuICAqIEFsd2F5cyBoYXMgYC5mb3JtLWNvbnRyb2xgIHRoZW4gYC5pcy1pbnZhbGlkYCBvciBgLmlzLXZhbGlkYCBhcmUgc2V0IG9uY2UgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZFxuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IGZvcm1MYWJlbCAtIGZvcm0gZ3JvdXAgbmFtZSBsb29rLXVwIGlucHV0IHN0YXRlXG4gICpcbiAgKiBAcmV0dXJucyB7T2JqZWN0fSBDU1MgY2xhc3NlcyB3aGljaCBhcHBseSB0byB0aGlzIGlucHV0XG4gICovXG4gIGdldElucHV0Q2xhc3MoZm9ybUxhYmVsOiBzdHJpbmcpIHtcbiAgICBsZXQgb3V0ID0geydmb3JtLWNvbnRyb2wnOiB0cnVlfTtcbiAgICBpZih0aGlzLmNyZWRlbnRpYWxzICYmIHRoaXMuY3JlZGVudGlhbHMuZ2V0KGZvcm1MYWJlbCkpe1xuICAgICAgbGV0IGFjID0gdGhpcy5jcmVkZW50aWFscy5nZXQoZm9ybUxhYmVsKTtcbiAgICAgIGlmKGFjLmRpcnR5IHx8IGFjLnRvdWNoZWQpe1xuICAgICAgICBvdXRbJ2lzLWludmFsaWQnXSA9IGFjLmludmFsaWQ7XG4gICAgICAgIG91dFsnaXMtdmFsaWQnXSA9IGFjLnZhbGlkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXNjdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2UgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYWRtaW4vY291cnNlL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcidcbmltcG9ydCB7IHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uZmlybS1wYXNzd29yZC52YWxpZGF0b3InO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGFsbG93cyBuZXcgdXNlcnMgdG8gc2lnbiB1cCB0byB1c2UgQ3JpY2tldC5cbiAqIFVzZXMgZW1haWwgYXMgdXNlcm5hbWUgYW5kIGluY2x1ZGVzIHNldmVyYWwgZXJyb3JcbiAqIGNoZWNrc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ251cCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2lnbnVwLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgYmFja2VuZCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogTGlzdCBvZiBjb3Vyc2VzIGF2YWlsYWJsZSB0byBzaWduIHVwIGZvcjtcbiAgICogQWxsIHVzZXJzIG11c3Qgc2VsZWN0IGEgY291cnNlLCBldmVuIGlmIHRoZSBjb3Vyc2UgaXMgXCJOQVwiXG4gICAqL1xuICBwcml2YXRlIGNvdXJzZXM6IHN0cmluZ1tdID0gW107XG4gIC8qKlxuICAgKiBVc2VyIGRldGFpbHMgdXNlZCBmb3Igc2lnbnVwXG4gICAqIC0gYGZpcnN0TmFtZWBcbiAgICogLSBgbGFzdE5hbWVgXG4gICAqIC0gYHVzZXJuYW1lYCAoZW1haWwgYWRkcmVzcylcbiAgICogLSBgY291cnNlYCAoZGF0YWJhc2UgY291cnNlIElEIG5vdCBjb3Vyc2UgbmFtZSlcbiAgICogLSBgcGFzc3N3b3JkYFxuICAgKiAtIGBjb25maXJtUGFzc3dvcmRgXG4gICAqL1xuICBwcml2YXRlIHVzZXI6IEZvcm1Hcm91cDtcbiAgLyoqXG4gICAqIEJvb2xlYW4gc3RhdGUgb2JqZWN0IHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIG11bHRpcGxlIHNlcnZpY2VzIGVhc2llclxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2NvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgY3JlYXRpb24sIGdldCB0aGUgbGlzdCBvZiBhdmFpbGFibGUgY291cnNlcyBhbmQgb3JkZXIgdGhlbVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnVzZXIgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICdmaXJzdE5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgJ2xhc3ROYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICd1c2VybmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pLFxuICAgICAgJ2NvdXJzZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAncGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSksXG4gICAgICAnY29uZmlybVBhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgcGFzc3dvcmRNYXRjaFZhbGlkYXRvcl0pLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fY291cnNlU2VydmljZS5nZXRDb3Vyc2VMaXN0KClcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLl9yZW9yZGVyQ291cnNlcyhyZXMpO1xuICAgICAgICB0aGlzLmNvdXJzZXMgPSB0bXA7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgdGhpcy5jb3Vyc2VzID0gW107XG4gICAgfSk7XG4gIH1cblxuICAvLyBhY2Nlc3NvcnMgZm9yIGZvcm0gdmFsaWRhdGlvblxuICBnZXQgZmlyc3ROYW1lKCkgeyByZXR1cm4gdGhpcy51c2VyLmdldCgnZmlyc3ROYW1lJyk7IH1cbiAgZ2V0IGxhc3ROYW1lKCkgeyByZXR1cm4gdGhpcy51c2VyLmdldCgnbGFzdE5hbWUnKTsgfVxuICBnZXQgdXNlcm5hbWUoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCd1c2VybmFtZScpOyB9XG4gIGdldCBjb3Vyc2UoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdjb3Vyc2UnKTsgfVxuICBnZXQgcGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdwYXNzd29yZCcpOyB9XG4gIGdldCBjb25maXJtUGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdjb25maXJtUGFzc3dvcmQnKTsgfVxuXG5cbiAgLyoqXG4gICAqIE9yZGVyIHRoZSBjb3Vyc2VzIHNvIHRoZSBcIk5BXCIgY291cnNlIGlzIGF0IHRoZSB0b3BcbiAgICpcbiAgICogQHBhcmFtIHthbnlbXX0gY291cnNlcyBsaXN0IG9mIGN1cnJlbnRseSBhdmFpbGFibGUgY291cnNlczsgZWFjaCBpdGVtIGluIGxpc3QgaGFzIGBjb3Vyc2VOdW1gIGFuZCBgaWRgXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnlbXX0gdGhlIGxpc3Qgb3JkZXJlZCBzbyB0aGUgXCJOQVwiIGNvdXJzZSBpcyBhdCB0aGUgdG9wXG4gICAqL1xuICBwcml2YXRlIF9yZW9yZGVyQ291cnNlcyhjb3Vyc2VzOiBhbnlbXSk6IGFueVtde1xuICAgIGxldCBuYSA9IGNvdXJzZXMuZmlsdGVyKChjKT0+e3JldHVybiBjLmNvdXJzZU51bSA9PT0gJ05BJ30pO1xuICAgIGxldCBvdGhlciA9IGNvdXJzZXMuZmlsdGVyKChjKT0+e1xuICAgICAgcmV0dXJuIGMuY291cnNlTnVtICE9PSAnTkEnXG4gICAgfSk7XG4gICAgcmV0dXJuIG5hLmNvbmNhdChvdGhlcik7XG4gIH1cblxuICAvKipcbiAgICogLSBBdHRlbXB0cyB0byBzaWduIHRoZSB1c2VyIHVwIHdoZW4gdGhleSBzdWJtaXQgdGhlIGZvcm1cbiAgICogLSBJbmNsdWRlcyBlcnJvciBjaGVja3MgZm9yIHNlbGVjdGluZyBhIGNvdXJzZSBhbmQgcGFzc3dvcmRzIG1hdGNoXG4gICAqIC0gV2hlbiBzaWduLXVwIGlzIHN1Y2Nlc3NmdWwsIHNldHMgdGhlIFtsb2dnZWQgaW4gdXNlcl17QGxpbmsgYXV0aGVudGljYXRpb24uc2VydmljZX0gYW5kIG5hdmlnYXRlcyB0byB0aGUgaG9tZSBwYWdlXG4gICAqL1xuICBzaWdudXAoKSB7XG4gICAgICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgLnNpZ251cCh0aGlzLnVzZXIudmFsdWUpXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5zZXRVc2VyKHJlc3VsdCk7XG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKVxuICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICogR2V0IHRoZSBmb3JtIGlucHV0IENTUyBjbGFzc2VzIHN0eWxpbmcgdG8gcHJvdmlkZSBmZWVkYmFjayB0byB1c2VyXG4gICogd2hldGhlciBpbnB1dCBpcyB2YWxpZCBvbiBub3RcbiAgKlxuICAqIEFsd2F5cyBoYXMgYC5mb3JtLWNvbnRyb2xgIHRoZW4gYC5pcy1pbnZhbGlkYCBvciBgLmlzLXZhbGlkYCBhcmUgc2V0IG9uY2UgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZFxuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IGZvcm1MYWJlbCAtIGZvcm0gZ3JvdXAgbmFtZSBsb29rLXVwIGlucHV0IHN0YXRlXG4gICpcbiAgKiBAcmV0dXJucyB7T2JqZWN0fSBDU1MgY2xhc3NlcyB3aGljaCBhcHBseSB0byB0aGlzIGlucHV0XG4gICovXG4gIGdldElucHV0Q2xhc3MoZm9ybUxhYmVsOiBzdHJpbmcpIHtcbiAgICBsZXQgb3V0ID0geydmb3JtLWNvbnRyb2wnOiB0cnVlfTtcbiAgICBpZih0aGlzLnVzZXIgJiYgdGhpcy51c2VyLmdldChmb3JtTGFiZWwpKXtcbiAgICAgIGxldCBhYyA9IHRoaXMudXNlci5nZXQoZm9ybUxhYmVsKTtcbiAgICAgIGlmKGFjLmRpcnR5IHx8IGFjLnRvdWNoZWQpe1xuICAgICAgICBvdXRbJ2lzLWludmFsaWQnXSA9IGFjLmludmFsaWQ7XG4gICAgICAgIG91dFsnaXMtdmFsaWQnXSA9IGFjLnZhbGlkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXNjdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgdG8gcHJldmVudCBhIG1lbW9yeSBsZWFrXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuICAvKipcbiAgKiBDdXN0b20gdmFsaWRhdG9yIHRvIGNoZWNrIHRoYXQgaW5wdXQgcGFzc3dvcmQgYW5kIGNvbmZpcm1hdGlvbiBwYXNzd29yZCBhcmUgdGhlIHNhbWVcbiAgKlxuICAqIEBwYXJhbSBhYyB7QWJzdHJhY3RDb250cm9sfSAtIHJlYWN0aXZlIGZvcm0gY29udHJvbCBmb3IgYGNvbmZpcm1QYXNzd29yZGAgaW5wdXRcbiAgKiAtIG11c3QgYmUgcGFydCBvZiBhIEZvcm1Hcm91cCB3aXRoIGFsc28gaGFzIGEgYHBhc3N3b3JkYCBpbnB1dFxuICAqXG4gICogQHJldHVybnMge251bGwgfCBPYmplY3QgfSAtIGBudWxsYCB3aGVuIHBhc3N3b3JkcyBtYXRjaCBvciBiZWZvcmUgZm9ybSBpcyBpbml0aWFsaXplZFxuICAqIC0gYHttaXNtYXRjaDp0cnVlfWAgd2hlbiBwYXNzd29yZHMgZG9uJ3QgbWF0Y2hcbiAgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IoYWM6IEFic3RyYWN0Q29udHJvbCl7XG4gICAgICBsZXQgZmcgPSBhYy5wYXJlbnQ7XG4gICAgaWYoIWZnKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmcuZ2V0KCdwYXNzd29yZCcpLnZhbHVlID09PSBmZy5nZXQoJ2NvbmZpcm1QYXNzd29yZCcpLnZhbHVlID8gbnVsbCA6IHttaXNtYXRjaDogdHJ1ZX07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tcGFzc3dvcmQudmFsaWRhdG9yLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBDb21wb25lbnQgdGhhdCBhIHVzZXIgc2lnbnMgb3V0LiBIYXMgbm8gdmlldy90ZW1wbGF0ZS0tcmVzZXRzXG4gKiB2YXJpYWJsZXMgYW5kIG5hdmlnYXRlIHRvIGhvbWUgcGFnZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWdub3V0JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgU2lnbm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxuICApe31cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGNyZWF0aW9uXG4gICAqIDEuIFNpZ24gb3V0IHVzZXIgb24gc2VydmVyXG4gICAqIDIuIFVuc2V0IFtBdXRoZW50aWNhdGlvblNlcnZpY2Vde0BsaW5rIEF1dGhlbnRpY2F0aW9uU2VydmljZX0gdXNlclxuICAgKiAzLiBSZWRpcmVjdCB0byBob21lIHBhZ2VcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hdXRoU2VydmljZS5zaWdub3V0KClcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2V0VXNlcihudWxsKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25vdXQvc2lnbm91dC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogSWYgdXNlciBmb3JnZXRzIHRoZWlyIHBhc3N3b3JkLCB0aGV5IGNhbiBlbnRlclxuICogdGhlcmUgZW1haWwgYWRkcmVzcy4gSWYgdGhlcmUgaXMgYW4gYWNjb3VudCB3aXRoIHRoZSBlbWFpbCBhZGRyZXNzLFxuICogYW4gZW1haWwgaXMgc2VudCB3aXRoIGEgbGluayB0aGF0IGFsbG93cyB1c2VyIHRvIHJlc2V0IHRoZWlyIHBhc3N3b3JkXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgZm9yIGVudGVyaW5nIGVtYWlsIGFkZHJlc3MgYW5kXG4gKiBpbmZvcm1pbmcgaWYgZW1haWwgYWRkcmVzcyB3YXMgdmFsaWQgYW5kIHJlc2V0ICogcGFzc3dvcmQgZW1haWwgd2FzIHN1Y2Nlc3NmdWxseSBzZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9yZ2V0LXBzd2QnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2ZvcmdldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBQb3NzaWJsZSBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogTWVzc2FnZSB3aGVuIHJlc2V0IHBhc3N3b3JkIGVtYWlsIHdhcyBzdWNjZXNzZnVsbHkgc2VudFxuICAgKi9cbiAgcHJpdmF0ZSBzdWNjZXNzTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBVc2VyJ3MgZW1haWwgdG8gY2hlY2sgaWYgYW4gYWNjb3VudCBleGlzdHNcbiAgICovXG4gIGVtYWlsOiBGb3JtQ29udHJvbDtcbiAgLyoqXG4gICAqIEF1dGhlbnRpY2F0aW9uIHNlcnZpY2Ugc3Vic2NyaXB0aW9uXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBmb3JtIG9uIGNvbXBvbmVudCBjcmVhdGlvblxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmVtYWlsID0gbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pO1xuICB9XG4gIC8qKlxuICAgKiBBZnRlciBzdWJtaXR0aW5nIGZvcm0sIHJlc2V0IF9zdWNjZXNzXyBhbmQgX2Vycm9yXyBtZXNzYWdlcywgc2VuZCBlbWFpbCB0byB0aGUgc2VydmVyLCBhbmQgd2FpdCBmb3IgcmVzcG9uc2VcbiAgICpcbiAgICogLSBJZiBwYXNzd29yZCByZXNldCBlbWFpbCBzdWNjZXNzZnVsbHkgc2V0LCBfc3VjY2Vzc18gbWVzc2FnZSBpcyB1cGRhdGVkXG4gICAqIC0gSWYgdGhlcmUgd2FzIGFuIGVycm9yIChzZXJ2ZXIgZXJyb3IsIGVtYWlsIGRvZXNuJ3QgYmVsb3cgdG8gYW55IHVzZXIpLCBfZXJyb3JfIG1lc3NhZ2UgaXMgc2V0IHdpdGggZGVzY3JpcHRpb24gb2YgdGhlIGVycm9yXG4gICAqL1xuICAgIHNlbmRGb3JnZXQoKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gJyc7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgbGV0IGJvZHkgPSB7ZW1haWw6IHRoaXMuZW1haWwudmFsdWV9O1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgICAgIC5mb3JnZXRQYXNzd29yZChib2R5KVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIC8vIGlmIHN1Y2Nlc3NmdWwsIHNob3VsZCBnZXQgc3VjY2VzcyBtZXNzYWdlXG4gICAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgQ1NTIGNsYXNzIGZvciB0aGUgZW1haWwgaW5wdXQgYmFzZWQgb24gaXQncyB2YWxpZGl0eVxuICAgKlxuICAgKiBBbHdheXMgaGFzIGAuZm9ybS1jb250cm9sYCB0aGVuIGAuaXMtaW52YWxpZGAgb3IgYC5pcy12YWxpZGAgYXJlIHNldCBvbmNlIGlucHV0IGhhcyBiZWVuIHRvdWNoZWRcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gQ1NTIGNsYXNzZXMgd2hpY2ggYXBwbHlcbiAgICovXG4gIGdldElucHV0Q2xhc3MoKXtcbiAgICBsZXQgb3V0ID0geydmb3JtLWNvbnRyb2wnOiB0cnVlfTtcbiAgICBpZih0aGlzLmVtYWlsICYmICh0aGlzLmVtYWlsLmRpcnR5IHx8IHRoaXMuZW1haWwudG91Y2hlZCkpe1xuICAgICAgb3V0Wydpcy1pbnZhbGlkJ10gPSB0aGlzLmVtYWlsLmludmFsaWQ7XG4gICAgICBvdXRbJ2lzLXZhbGlkJ10gPSB0aGlzLmVtYWlsLnZhbGlkO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gYXV0aGVudGljYXRpb24gc2VydmljZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuaW1wb3J0IHsgcGFzc3dvcmRNYXRjaFZhbGlkYXRvciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25maXJtLXBhc3N3b3JkLnZhbGlkYXRvcic7XG5cbi8qKlxuICogQWZ0ZXIgdXNlciByZXF1ZXN0cyB0byByZXNldCBwYXNzd29yZCBhbmQgdGhleSBoYXZlIGEgdG9rZW4sXG4gKiB0aGlzIGNvbXBvbmVudCBhbGxvd3MgdGhlbSB0byBzZXQgdGhlIHBhc3N3b3JkIHRvIGEgbmV3IHBhc3N3b3JkXG4gKiAoYXNzdW1pbmcgdG9rZW4gaXMgdmFsaWQpXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmVzZXQtcHN3ZCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcmVzZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZSBmcm9tIHNlcnZlclxuICAgKi9cbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBNZXNzYWdlIHdoZW4gbmV3IHBhc3N3b3JkIHN1Y2Nlc3NmdWxseSBzYXZlZFxuICAgKi9cbiAgcHJpdmF0ZSBzdWNjZXNzTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBFbWFpbCBhbmQgbmV3IHBhc3N3b3JkcyB0byBiZSBhYmxlIHRvIHVwZGF0ZSB0aGUgZGF0YWJhc2VcbiAgICogLSBgcGFzc3dvcmRgIC0gdGhlIG5ldyBwYXNzd29yZCB0byBzZXRcbiAgICogLSBgY29uZmlybVBhc3N3b3JkYCAtIGNvbmZpcm0gcGFzc3dvcmQgdHlwZWQgY29ycmVjdGx5XG4gICAqIC0gYHRva2VuYCAtIHBhc3N3b3JkIHJlc2V0IHRva2VuIHRvIGNvbmZpcm0gdXNlciBoYWQgYWNjZXNzIHRvIHRoZSBlbWFpbCBhbmQgZGlkbid0IHdhaXQgdG9vIGxvbmdcbiAgICovXG4gIHByaXZhdGUgY3JlZGVudGlhbHM6IEZvcm1Hcm91cDtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byB7QGxpbmsgQXV0aGVudGljYXRpb25TZXJ2aWNlfSB3aGVuIHJldHRpbmdcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBJcyB0aGUgc3VibWl0IGJ1dHRvbiBkaXNhYmxlZDsgdGhpcyB3b3VsZCBoYXBwZW4gd2hlblxuICAgKiB0aGVyZSBpcyBubyB0b2tlblxuICAgKi9cbiAgLy9wcml2YXRlIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICB9XG4gIC8qKlxuICAgKiBXaGVuIGluaXRpYWxpemluZyB0aGUgY29tcG9uZW50LCBnZXQgdGhlIHRva2VuIGZyb20gdGhlIFVSTFxuICAgKlxuICAgKiBJZiB0aGVyZSBpcyBubyB0b2tlbiwgZ2l2ZSBlcnJvciBtZXNzYWdlIGFuZCBkaXNhYmxlIHN1Ym1pdCBidXR0b25cbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgJ3Bhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKSxcbiAgICAgICdjb25maXJtUGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBwYXNzd29yZE1hdGNoVmFsaWRhdG9yXSksXG4gICAgICAndG9rZW4nOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgfSk7XG5cbiAgICBsZXQgdXJsVG9rZW4gPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3Rva2VuJyk7XG4gICAgaWYgKHVybFRva2VuID09PSAnJyl7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdObyB0b2tlbiBzcGVjaWZpZWQuJ1xuICAgIH1cbiAgICB0aGlzLmNyZWRlbnRpYWxzLnBhdGNoVmFsdWUoe3Rva2VuOiB1cmxUb2tlbn0pO1xuICB9XG5cbiAgZ2V0IHBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoJ3Bhc3N3b3JkJyk7IH1cbiAgZ2V0IGNvbmZpcm1QYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KCdjb25maXJtUGFzc3dvcmQnKTsgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byByZXNldCB0aGUgbmV3IHBhc3N3b3JkXG4gICAqIDEuIElmIG5vIGVycm9ycywgc2VuZCBjcmVkZW50aWFscyB0byBzZXJ2ZXJcbiAgICogMi4gUGFzc3dvcmQgY29ycmVjdGx5IHJlc2V0LCBkaXNwbGF5cyB0aGUgc3VjY2VzcyBtZXNzYWdlXG4gICAqIDMuIElmIGVycm9yIHJlc2V0aW5nIHRoZSBwYXNzd29yZCwgZGlzcGxheXMgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgICBzZW5kUmVzZXQoKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgLnJlc2V0UGFzc3dvcmQodGhpcy5jcmVkZW50aWFscy52YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAvLyBpZiBzdWNjZXNzZnVsLCBzaG91bGQgZ2V0IHN1Y2Nlc3MgbWVzc2FnZVxuICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMuc2V0VmFsdWUoeydwYXNzd29yZCc6ICcnLCAnY29uZmlybVBhc3N3b3JkJzogJycsIHRva2VuOiAnJ30pO1xuICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAqIEdldCB0aGUgZm9ybSBpbnB1dCBDU1MgY2xhc3NlcyBzdHlsaW5nIHRvIHByb3ZpZGUgZmVlZGJhY2sgdG8gdXNlclxuICAqIHdoZXRoZXIgaW5wdXQgaXMgdmFsaWQgb24gbm90XG4gICpcbiAgKiBBbHdheXMgaGFzIGAuZm9ybS1jb250cm9sYCB0aGVuIGAuaXMtaW52YWxpZGAgb3IgYC5pcy12YWxpZGAgYXJlIHNldCBvbmNlIGlucHV0IGhhcyBiZWVuIHRvdWNoZWRcbiAgKlxuICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtTGFiZWwgLSBmb3JtIGdyb3VwIG5hbWUgbG9vay11cCBpbnB1dCBzdGF0ZVxuICAqXG4gICogQHJldHVybnMge09iamVjdH0gQ1NTIGNsYXNzZXMgd2hpY2ggYXBwbHkgdG8gdGhpcyBpbnB1dFxuICAqL1xuICBnZXRJbnB1dENsYXNzKGZvcm1MYWJlbDogc3RyaW5nKSB7XG4gICAgbGV0IG91dCA9IHsnZm9ybS1jb250cm9sJzogdHJ1ZX07XG4gICAgaWYodGhpcy5jcmVkZW50aWFscyAmJiB0aGlzLmNyZWRlbnRpYWxzLmdldChmb3JtTGFiZWwpKXtcbiAgICAgIGxldCBhYyA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KGZvcm1MYWJlbCk7XG4gICAgICBpZihhYy5kaXJ0eSB8fCBhYy50b3VjaGVkKXtcbiAgICAgICAgb3V0Wydpcy1pbnZhbGlkJ10gPSBhYy5pbnZhbGlkO1xuICAgICAgICBvdXRbJ2lzLXZhbGlkJ10gPSBhYy52YWxpZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gYXV0aGVudGljYXRpb24gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbHAnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9oZWxwLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9oZWxwLnN0eWxlLmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIEhlbHBDb21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IoKXt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIE1haW4gdXNlciBwcm9maWxlIGNvbXBvbmVudDsgYWltZWQgZm9yIHVzZSB0byBlZGl0IG5hbWUgYW5kXG4gKiBlbWFpbCBhZGRyZXNzLiBBbHNvIGFjY2VzcyB1cGRhdGUgcGFzc3dvcmQgbGluayB0byB1cGRhdGUgcGFzc3dvcmRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXNlci1wcm9maWxlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vdXNlci1wcm9maWxlLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJQcm9maWxlQ29tcG9uZW50e1xuXG4gIC8qKlxuICAgKiBEYXRhYmFzZSB1c2VyIGlkXG4gICAqL1xuICBwcml2YXRlIHVzZXJJZDogbnVtYmVyO1xuICAvKipcbiAgICogVXNlciBkZXRhaWxzIChhcyBhbiBvYmplY3QpXG4gICAqIEN1cnJlbnRseSBpbmNsdWRlczogZmlyc3ROYW1lLCBsYXN0TmFtZSwgYW5kIGVtYWlsXG4gICAqL1xuICBwcml2YXRlIHVzZXJJbmZvOiBhbnk7XG4gIC8qKlxuICAgKiBTdGF0ZSB0byBtYWludGFpbiBvcGVuIHN1YnNjcmlwdGlvbnMgdW50aWwgY29tcG9uZW50IGlzIGRlc3RvcnllZFxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvcjsgaW5jbHVkZXMgc2VydmljZXMgdG8gZmV0Y2ggaW5mb1xuICAgKlxuICAgKiBAcGFyYW0ge1Byb2ZpbGVTZXJ2aWNlfSBfcHJvZmlsZVNlcnZpY2UgU2VydmljZSBmb3IgdXBkYXRpbmcgdGhlIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBfYXV0aFNlcnZpY2UgU2VydmljZSB0byBnZXQgdGhlIGN1cnJlbnQgdXNlciBpbmZvcm1hdGlvblxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgKXtcbiAgICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudCBvbiBjcmVhdGlvblxuICAgKiAxLiBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqIDIuIFNhdmUgdGhlIHVzZXIncyBkZXRhaWxzIHRvIG9iamVjdCB0byBiZSBhYmxlIHRvIGVkaXRcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgLy8gZ2V0IGN1cnJlbnQgdXNlciBpbmZvXG4gICAgdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlciRcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIHRoaXMudXNlcklkID0gcmVzLmlkO1xuICAgICAgdGhpcy51c2VySW5mbyA9IHtcbiAgICAgICAgZmlyc3ROYW1lOiByZXMuZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZTogcmVzLmxhc3ROYW1lLFxuICAgICAgICBlbWFpbDogcmVzLmVtYWlsXG4gICAgICB9XG4gICAgfSwgKGlkRXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGlkRXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byB1cGRhdGUgdGhlIHByb2ZpbGUgaWYgcG9zc2libGUgb3Igc2V0IGVycm9yXG4gICAqIG1lc3NhZ2UgaWYgdGhlcmUncyBhIHByb2JsZW1cbiAgICovXG4gIHVwZGF0ZVByb2ZpbGUoKXtcbiAgICB0aGlzLl9wcm9maWxlU2VydmljZS5lZGl0UHJvZmlsZSh0aGlzLnVzZXJJZCwgdGhpcy51c2VySW5mbylcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKCh1cGRhdGVkKT0+e1xuICAgICAgdGhpcy51c2VySW5mbyA9IHtmaXJzdE5hbWU6IHVwZGF0ZWQuZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiB1cGRhdGVkLmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1cGRhdGVkLmVtYWlsfTtcbiAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNldFVzZXIodXBkYXRlZCk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlcyB0byBwcmV2ZW50XG4gICAqIG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgYSBsb2dnZWQgaW4gdXNlciB0byB1cGRhdGUgdGhlaXIgcGFzc3dvcmRcbiAqIGJ5IGVudGVyaW5nIHRoZWlyIGN1cnJlbnQgcGFzc3dvcmQgdGhlbiB0aGUgbmV3IHBhc3N3b3JkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VzZXItcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRDb21wb25lbnR7XG5cbiAgLyoqXG4gICAqIFRoZSBsb2dnZWQgaW4gdXNlclxuICAgKi9cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuICAvKipcbiAgICogLSBQYXNzd29yZCBpbmZvcm1hdGlvbiB0byBzZW5kIHRvIHNlcnZlciB0byB1cGRhdGUgcGFzc3dvcmRcbiAgICogLSBIYXMgZmllbGRzIGBwYXNzd29yZGAgKGN1cnJlbnQgcGFzc3dvcmQpLCBgbmV3UGFzc3dvcmRgIChwYXNzd29yZCB0byBjaGFuZ2UgdG8pLCBcbiAgICogYGNvbmZpcm1QYXNzd29yZGAgKGNvbmZpcm1zIHR5cGluZyBvZiBuZXcgcGFzc3dvcmQpLCBhbmQgXG4gICAqIGB1c2VybmFtZWAgKHVzZXIncyBlbWFpbClcbiAgICovXG4gIHByaXZhdGUgY3JlZGVudGlhbHM6IGFueTtcbiAgLyoqXG4gICAqIFN0YXRlIHRvIGtlZXAgdHJhY2sgb2YgY29tcG9lbmVudCBhbGl2ZVxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgYmFja2VuZCBlcnJvciBtZXNzYWdlIGRpc3BsYXllZCBwcm9taW5hbnRseVxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogRXJyb3IgbWVzc2FnZSBhYm91dCBzdWJtaXNzaW9uIGFuZCB3aHkgdGhlIHN1Ym1pc3Npb24gZGlkbid0IHdvcmsgYXMgZXhwZWN0ZWRcbiAgICovXG4gIHByaXZhdGUgcGFzc3dvcmRNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9wcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICApe1xuICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHtcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBuZXdQYXNzd29yZDogJycsXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogJydcbiAgICAgIH07XG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnRcbiAgICogMS4gR2V0IHRoZSBsb2dnZWQgaW4gdXNlciBpbmZvXG4gICAqIDIuIFNldCB1cCB0aGUgY3JlZGVudGlhbHMgd2l0aCBlbWFpbCBhZGRyZXNzXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIC8vIGdldCBjdXJyZW50IHVzZXIgaW5mb1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIkXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICB0aGlzLnVzZXIgPSByZXM7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzWyd1c2VybmFtZSddID0gcmVzLmVtYWlsO1xuICAgIH0sIChpZEVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShpZEVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdCB0byB1cGRhdGUgdGhlIHBhc3N3b3JkXG4gICAqIC0gSWYgc3VjY2Vzc2Z1bCwgcmVkaXJlY3RzIHRvIHByb2ZpbGUgcGFnZVxuICAgKiAtIElmIHRoZXJlJ3MgYW4gZXJyb3IsIGRpc3BsYXlzIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIHVwZGF0ZVBhc3N3b3JkKCl7XG4gICAgLy8gZG8gY2hlY2tzXG4gICAgdGhpcy5wYXNzd29yZE1lc3NhZ2UgPSB0aGlzLl9jaGVja1Bhc3N3b3JkcygpO1xuICAgIGlmKHRoaXMucGFzc3dvcmRNZXNzYWdlID09PSAnJyl7XG4gICAgICAvLyBjYW4gdXBkYXRlXG4gICAgICB0aGlzLl9wcm9maWxlU2VydmljZS51cGRhdGVQYXNzd29yZCh0aGlzLnVzZXIuaWQsIHRoaXMuY3JlZGVudGlhbHMpXG4gICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGUnXSk7XG4gICAgICB9LCAoZXJyKT0+e1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEb2VzIHZhcmlvdXMgY2hlY2tzIHRvIGVuc3VyZSB0aGUgcGFzc3dvcmQgZmllbGRzIGFyZSB2YWxpZFxuICAgKiAxLiBBbGwgZmllbGRzIGFyZSBmaWxsZWQgaW5cbiAgICogMi4gTmV3IHBhc3N3b3JkIGlzIGRpZmZlcmVudCBmcm9tIG9sZCBwYXNzd29yZFxuICAgKiAzLiBDb25maXJtIHBhc3N3b3JkIG1hdGNoZXMgbmV3IHBhc3N3b3JkXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGVycm9yIG1lc3NhZ2UgaWYgYXQgbGVhc3Qgb25lIGNvbmRpdGlvbiBpc24ndCBtZXQgb3IgYCcnYCBpZiBldmVyeXRoaW5nIGlzIHZhbGlkXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NoZWNrUGFzc3dvcmRzKCl7XG4gICAgbGV0IHAgPSB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkO1xuICAgIGxldCBuID0gdGhpcy5jcmVkZW50aWFscy5uZXdQYXNzd29yZDtcbiAgICBsZXQgYyA9IHRoaXMuY3JlZGVudGlhbHMuY29uZmlybVBhc3N3b3JkO1xuICAgIGlmKHAgPT09ICcnKXtcbiAgICAgIHJldHVybiAnRW50ZXIgb2xkIHBhc3N3b3JkJztcbiAgICB9IGVsc2UgaWYobiA9PT0gJycpe1xuICAgICAgcmV0dXJuICdFbnRlciBuZXcgcGFzc3dvcmQnO1xuICAgIH0gZWxzZSBpZihjID09PSAnJyl7XG4gICAgICByZXR1cm4gJ0NvbmZpcm0gbmV3IHBhc3N3b3JkJztcbiAgICB9IGVsc2UgaWYocCA9PT0gbil7XG4gICAgICByZXR1cm4gJ05ldyBwYXNzd29yZCBjYW5ub3QgdGhlIHNhbWUgYXMgdGhlIG9sZCBwYXNzd29yZCc7XG4gICAgfSBlbHNlIGlmKG4gIT09IGMpe1xuICAgICAgcmV0dXJuICdDb25maXJtIHBhc3N3b3JkIGRvZXMgbm90IG1hdGNoJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIHRvIHNlcnZpY2VzL3N0cmVhbXNcbiAgICogdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVmlldyBjb21wb25lbnQgdXNlZCB0byBsaW5rIHRoZSBicmVhZGNydW1iIHdpdGggdGhlIGxvY2F0aW9uXG4gKiBtb2R1bGUgY29tcG9uZW50cyBvciBzY2VuYXJpbyBsaXN0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjZW5hcmlvJyxcbiAgdGVtcGxhdGU6ICc8bWMtYnJlYWRjcnVtYnM+PC9tYy1icmVhZGNydW1icz48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+J1xufSlcblxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuLi9zY2VuYXJpby5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW8gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NjZW5hcmlvLmludGVyZmFjZSc7XG5cbi8qKlxuICogQ29tcG9uZW50IHdoaWNoIGxpc3RzIGFsbCBhdmFpbGFibGUgc2NlbmFyaW9zXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NlbmFyaW8tbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbGlzdC50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuICAvKipcbiAgICogVXNlciBvYmplY3Qgb2YgbG9nZ2VkIGluIHVzZXIsIGlmIGF2YWlsYWJsZVxuICAgKi9cbiAgICB1c2VyOiBVc2VyO1xuICAvKipcbiAgKiBsaXN0IG9mIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgKi9cbiAgICBzY2VuYXJpb3M6IFNjZW5hcmlvW107XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudCBieSB1c2luZyB0aGUgc2VydmljZSB0byBmZXRjaCB0aGVcbiAgICogbGlzdCBvZiBzY2VuYXJpb3NcbiAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgdGhpcy5zU3Vic2NyaXB0aW9uID0gdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmxpc3RTY2VuYXJpb3MoKVxuICAgICAgICAuc3Vic2NyaWJlKChzY2VuYXJpb3MpID0+IHtcbiAgICAgICAgdGhpcy5zY2VuYXJpb3MgPSBzY2VuYXJpb3NcbiAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlIGlmIG5lY2Vzc2FyeVxuICAgKiB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnNTdWJzY3JpcHRpb24pXG4gICAgdGhpcy5zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBZG1pblN0dWRlbnQsIFN0dWRlbnRGcmlkZ2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBTZXJ2aWNlIHdoaWNoIGRlYWxzIHdpdGggYWxsIHN0dWRlbnQtcmVsYXRlZCBiYWNrZW5kIGNhbGxzXG4gKiBmcm9tIGFuIGFkbWluXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHVkZW50U2VydmljZSB7XG4gIFxuICBwcml2YXRlIF9iYXNlVVJMID0gJy9hcGkvYWRtaW4nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgLyoqXG4gICAqIExpc3Qgb2Ygc3R1ZGVudHMsIGNvbnRlbnQgaXMgZGVwZW5kZW50IG9mIGxvZ2dlZCBpbiB1c2VyIHJvbGVcbiAgICpcbiAgICogSWYgYGFkbWluYCwgcmV0dXJuIGFsbCBzdHVkZW50cy91c2Vyc1xuICAgKiBcbiAgICogSWYgYGluc3RyYCwgcmV0dXJucyBzdHVkZW50cyBvZiBjb3Vyc2VzIGluc3RyIHRlYWNoc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7QWRtaW5TdHVkZW50W119IC0gbGlzdCBvZiBzdHVkZW50c1xuICAgKi9cbiAgbGlzdFN0dWRlbnRzKGFkbWluSWQ6IG51bWJlcik6IE9ic2VydmFibGU8QWRtaW5TdHVkZW50W10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PEFkbWluU3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRldGFpbHMgYWJvdXQgYSBzdHVkZW50XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIC0gdXNlcklkIGZvciBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3R1ZGVudElkIC0gdXNlcklkIGZvciBzdHVkZW50IHRvIGJlIGxvb2tlZCB1cFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxBZG1pblN0dWRlbnQ+fSAtIGRldGFpbHMgYWJvdXQgc3BlY2lmaWVkIHN0dWRlbnRcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldFN0dWRlbnQoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8QWRtaW5TdHVkZW50PntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxBZG1pblN0dWRlbnQ+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHMvJHtzdHVkZW50SWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSByb2xlIChhZG1pbiwgaW5zdHIsIHN0dWRlbnQpIG9mIGFub3RoZXIgc3R1ZGVudC91c2VyXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIC0gdXNlcklkIGZvciBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3R1ZGVudElkIC0gdXNlcklkIGZvciBzdHVkZW50IHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcm9sZSAtIG5ldyByb2xlIHRvIGJlIGFzc2lnbmVkOyBvbmUgb2Y6IGBcImFkbWluXCIsIFwiaW5zdHJcIiwgXCJzdHVkZW50XCJgXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IC0gdGhlIHVwZGF0ZWQgc3R1ZGVudFxuICAgKiAtIGVycm9yIGBWYWx1ZSBcInJvbGVcIiBpcyBub3QgYSB2YWxpZCByb2xlYCBpZiByb2xlIGlzbid0IG9uZSBvZiBgYWRtaW5gLCBgaW5zdHJgLCBgc3R1ZGVudGBcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIHNldFN0dWRlbnRSb2xlKGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIsIHJvbGU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PntcbiAgICBsZXQgYm9keSA9IHtyb2xlOiByb2xlfTtcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3QoYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50cy8ke3N0dWRlbnRJZH1gLCBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYSBzdHVkZW50L3VzZXJcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBvZiBzdHVkZW50IHRvIGRlbGV0ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIHN0dWRlbnQgd2hvIHdhcyBqdXN0IGRlbGV0ZWRcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGRlbGV0ZVN0dWRlbnQoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmRlbGV0ZShgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzY2VuYXJpbyBmcmlkZ2UgZm9yIGEgc3R1ZGVudDsgaW5jbHVkZXMgZnJpZGdlIGRldGFpbHMgc3VjaCBhc1xuICAgKiBmcmlkZ2Ugc3RyYWlucyBhbmQgZ3Vlc3Nlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3R1ZGVudElkIC0gdXNlcklkIG9mIHN0dWRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCAtIHNjZW5hcmlvIElkIGZvciBmcmlkZ2UgdG8gZmluZFxuICAgKlxuICAgKiBAcmV0dXJuc3tPYnNlcnZhYmxlPFN0dWRlbnRGcmlkZ2U+fSAtIHRoZSBzdHVkZW50J3MgZnJpZGdlXG4gICAqIC0gYW4gZW1wdHkgZnJpZGdlIGlmIHRoZSBmcmlkZ2UgZG9lc24ndCBleGlzdCB5ZXRcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIgZXJyb3JcbiAgICovXG4gIGdldEZyaWRnZShhZG1pbklkOiBudW1iZXIsIHN0dWRlbnRJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8U3R1ZGVudEZyaWRnZT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8U3R1ZGVudEZyaWRnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50cy8ke3N0dWRlbnRJZH0vJHtzY2VuSWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNjZW5hcmlvIGFjY2VzcyBmb3IgYSBzdHVkZW50OyB0aGlzIGRlbGV0ZXMgdGhlIGV4aXN0aW5nXG4gICAqIGZyaWRnZVxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3R1ZGVudElkIC0gdXNlcklkIG9mIHN0dWRlbnRcbiAgICogQHBhcmFtIHtib29sZWFufSB1cGRhdGVkU3RhdGUgLSB0cnVlIHRvIGdyYW50IGFjY2VzcywgZmFsc2UgdG8gcmV2b2tlIGFjY2Vzc1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxBZG1pblN0dWRlbnQ+fSB1cGRhdGVkIHN0dWRlbnRcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdyYW50U2NlbkFjY2VzcyhhZG1pbklkOiBudW1iZXIsIHN0dWRlbnRJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgdXBkYXRlZFN0YXRlOiBib29sZWFuKTogT2JzZXJ2YWJsZTxBZG1pblN0dWRlbnQ+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdDxBZG1pblN0dWRlbnQ+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHMvJHtzdHVkZW50SWR9LyR7c2NlbklkfWAsIHthY2Nlc3M6IHVwZGF0ZWRTdGF0ZX0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9zdHVkZW50L3N0dWRlbnQuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsLCBOZ2JBY3RpdmVNb2RhbH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBjb25maXJtYXRpb24gZGlhbG9nIHdoZW4gdXNlciB3YW50cyB0byBkZWxldGVcbiAqIHNvbWV0aGluZyBzZW5zaXRpdmUsIGkuZS4gYW5vdGhlciB1c2VyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbmZpcm0tZGVsZXRlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50e1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgZGlhbG9nIHdpbmRvd1xuICAgKi9cbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/J1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwpe1xuXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnRzIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGFuIGVycm9yIG9iamVjdCBhbmQgbG9va3MgZm9yXG4gKiB0aGUgZXJyb3IgbWVzc2FnZTsgaXQgY2hlY2tzIHNldmVyYWwgcHJvcGVydGllcyBiZWNhdXNlXG4gKiBlcnJvcnMgYXJlIG5vdCBhbHdheXMgdW5pZm9ybVxuICpcbiAqIEBwYXJhbSB7YW55fSBlcnJvciAtIGVycm9yIG9iamVjdCB0byBmaW5kIGVycm9yIG1lc3NhZ2UgZnJvbVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlcnJvciBtZXNzYWdlIHdpdGhpbiB0aGUgb2JqZWN0IG9yXG4gKiBgXCJVbmtub3duIGVycm9yXCJgIGlmIHRoZSBlcnJvciBtZXNzYWdlIGNhbid0IGJlIGZvdW5kXG4gKi9cbmV4cG9ydCBjb25zdCByZWFkRXJyb3JNZXNzYWdlID0gZnVuY3Rpb24oZXJyb3I6IGFueSk6IHN0cmluZyB7XG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSAnVW5rbm93biBlcnJvcic7XG4gIGlmKGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLm1lc3NhZ2Upe1xuICAgcmV0dXJuIGVycm9yLmVycm9yLm1lc3NhZ2VcbiAgfSBlbHNlIGlmKGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLnRleHQpe1xuICAgcmV0dXJuIGVycm9yLmVycm9yLnRleHRcbiAgfSBlbHNlIGlmIChlcnJvciAmJiBlcnJvci5tZXNzYWdlKXtcbiAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICB9IGVsc2UgaWYoZXJyb3Ipe1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuICByZXR1cm4gZXJyb3JNZXNzYWdlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL3JlYWQtZXJyb3IudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE1jQnJlYWRjcnVtYnNNb2R1bGUgfSBmcm9tICduZ3gtYnJlYWRjcnVtYnMnO1xuXG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGVyc29uTmFtZVBpcGUgfSBmcm9tICcuLi9waXBlcy9wZXJzb24tbmFtZS5waXBlJztcbmltcG9ydCB7IFBlb3BsZUxpc3ROYW1lc1BpcGUgfSBmcm9tICcuLi9waXBlcy9wZW9wbGUtbGlzdC1uYW1lcy5waXBlJztcbmltcG9ydCB7IFBoYWdlUGFyZW50c1BpcGUgfSBmcm9tICcuLi9waXBlcy9waGFnZS1wYXJlbnRzLnBpcGUnO1xuXG5pbXBvcnQgeyBGb3JtRXJyb3JzTW9kdWxlIH0gZnJvbSAnLi9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5tb2R1bGUnO1xuaW1wb3J0IHsgU2VsZWN0RHJvcE1vZHVsZSB9IGZyb20gJy4vc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3AubW9kdWxlJztcbi8vaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9ycyB9IGZyb20gJy4vY3VzdG9tLXZhbGlkYXRvcnMnO1xuLyoqXG4gKiBUaGUgU2hhcmVkIE1vZHVsZSBjb250YWlucyBtb2R1bGVzLCBwaXBlcywgYW5kIGNvbXBvbmVudHNcbiAqIHRoYXQgYXJlIG5lZWRlZCBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogU2F2ZXMgdGltZSBieSBpbXBvcnRpbmcgdGhpcyBtb2R1bGUgcmF0aGVyIHRoYW4gdGhlXG4gKiBwaXBlcy9tb2R1bGVzL2NvbXBvbmVudHMgaW5kaXZpZHVhbGx5XG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgRm9ybUVycm9yc01vZHVsZSxcbiAgICAgIFNlbGVjdERyb3BNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgTmdiTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgIE1jQnJlYWRjcnVtYnNNb2R1bGUuZm9yUm9vdCgpXG4gICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGVyc29uTmFtZVBpcGUsXG4gICAgUGVvcGxlTGlzdE5hbWVzUGlwZSxcbiAgICBQaGFnZVBhcmVudHNQaXBlLFxuICAgIENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICBGb3JtRXJyb3JzTW9kdWxlLFxuICAgICAgTmdiTW9kdWxlLFxuICAgICAgU2VsZWN0RHJvcE1vZHVsZSxcbiAgICAgIE1jQnJlYWRjcnVtYnNNb2R1bGUsXG4gICAgICBQZXJzb25OYW1lUGlwZSxcbiAgICAgIFBlb3BsZUxpc3ROYW1lc1BpcGUsXG4gICAgICBQaGFnZVBhcmVudHNQaXBlLFxuICAgICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKXtcbiAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9ib290c3RyYXAudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNY0JyZWFkY3J1bWJzQ29uZmlnIH0gZnJvbSAnbmd4LWJyZWFkY3J1bWJzJztcblxuaW1wb3J0IHsgQXBwUm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlZEluR3VhcmQgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4vc2NlbmFyaW8vc2NlbmFyaW8uc2VydmljZSc7XG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi9hZG1pbi9jb3Vyc2UvY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW9SZXNvbHZlciB9IGZyb20gJy4vc2NlbmFyaW8vc2NlbmFyaW8ucmVzb2x2ZXInO1xuLy9pbXBvcnQgeyBTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2VsZWN0LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEFkbWluTW9kdWxlIH0gZnJvbSAnLi9hZG1pbi9hZG1pbi5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2R1bGUgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBIZWxwTW9kdWxlIH0gZnJvbSAnLi9oZWxwL2hlbHAubW9kdWxlJztcbmltcG9ydCB7IFByb2ZpbGVNb2R1bGUgfSBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUnO1xuaW1wb3J0IHsgU2NlbmFyaW9Nb2R1bGUgfSBmcm9tICcuL3NjZW5hcmlvL3NjZW5hcmlvLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZDb21wb25lbnQgfSBmcm9tICcuL25hdi9uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoZSBtYWluIGJvb3RzdHJhcHBlZCBtb2R1bGVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICBIZWxwTW9kdWxlLFxuICAgICAgQWRtaW5Nb2R1bGUsXG4gICAgICBQcm9maWxlTW9kdWxlLFxuICAgICAgICBBdXRoZW50aWNhdGlvbk1vZHVsZSxcbiAgICAgIFNjZW5hcmlvTW9kdWxlLFxuICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoQXBwUm91dGVzKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTmF2Q29tcG9uZW50LFxuICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgIFBhZ2VOb3RGb3VuZENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICBMb2dnZWRJbkd1YXJkLFxuICAgICAgU2NlbmFyaW9TZXJ2aWNlLFxuICAgICAgQ291cnNlU2VydmljZSxcbiAgICAgIFNjZW5hcmlvUmVzb2x2ZXIsXG4gICAgICAvL1NlbGVjdFNlcnZpY2VcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbmNvbnN0cnVjdG9yKGJyZWFkY3J1bWJzQ29uZmlnOiBNY0JyZWFkY3J1bWJzQ29uZmlnKSB7XG5cbiAgICBicmVhZGNydW1ic0NvbmZpZy5wb3N0UHJvY2VzcyA9ICh4KSA9PiB7XG5cbiAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBmaXJzdCBicmVhZGNydW1iIGFsd2F5cyBwb2ludHMgdG8gaG9tZVxuXG4gICAgICBsZXQgeSA9IHg7XG5cbiAgICAgIGlmKHgubGVuZ3RoICYmIHhbMF0udGV4dCAhPT0gJ0hvbWUnKSB7XG4gICAgICAgIHkgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0hvbWUnLFxuICAgICAgICAgICAgcGF0aDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF0uY29uY2F0KHgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geTtcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXBwUm91dGVzOiBSb3V0ZXMgPVxuICAgICAgW3tcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuICAgICAgfSxcbiAgICAgICB7XG4gICAgICAgIHBhdGg6ICcqKicsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50XG4gICAgICB9XTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FwcC5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODU0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2hvbWUvaG9tZS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaG9tZS9ob21lLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gODU2XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODU3XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBGb3JtYXQgYSB1c2VyJ3Mgb3Igc3R1ZGVudHMgZnJpc3QgYW5kIGxhc3QgbmFtZSBhcyBcImZpcnN0TmFtZSBsYXN0TmFtZVwiXG4gKiAtIFdoZW4gcmV2ZXJzZSBpcyB0cnVlLCBmb3JtYXQgYXMgXCJsYXN0TmFtZSwgZmlyc3ROYW1lXCJcbiAqIC0gQWJsZSB0byBoYW5kbGUgd2hlbiBvbmx5IGZpcnN0IG9yIGxhc3QgbmFtZSBpcyBzZXRcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBwZXJzb24gfCBwZXJzb25OYW1lOmlzUmV2ZXJzZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPntmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9PC9jb2RlPiBiZWNvbWVzIFwiTWlja2V5IE1vdXNlXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlJldmVyc2Ugb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPntmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9PC9jb2RlPiBiZWNvbWVzIFwiTW91c2UsIE1pY2tleVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5GaXJzdCBuYW1lIG9ubHkgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e2ZpcnN0TmFtZTogXCJNaWNrZXlcIiwgbGFzdE5hbWU6IHVuZGVmaW5lZH08L2NvZGU+IGJlY29tZXMgXCJNaWNrZXlcIlxuKi9cbkBQaXBlKHtuYW1lOiAncGVyc29uTmFtZSd9KVxuZXhwb3J0IGNsYXNzIFBlcnNvbk5hbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBlcnNvbjogYW55LCByZXZlcnNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBsZXQgZk5hbWU6IHN0cmluZyA9IHBlcnNvbi5maXJzdE5hbWUgfHwgJyc7XG4gICAgbGV0IGxOYW1lOiBzdHJpbmcgPSBwZXJzb24ubGFzdE5hbWUgfHwgJyc7XG4gIGlmKHJldmVyc2Upe1xuICAgIHJldHVybiBsTmFtZSArIChmTmFtZSE9PScnICYmIGxOYW1lICE9PSAnJyA/ICcsICcgOiAnJykrZk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJyAnIDogJycpK2xOYW1lO1xuICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BpcGVzL3BlcnNvbi1uYW1lLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IGEgbGlzdCBvZiB1c2VyJ3Mgb3Igc3R1ZGVudHMgZnJpc3QgYW5kIGxhc3QgbmFtZSBhcyBcImZpcnN0TmFtZSBsYXN0TmFtZVwiXG4gKiAtIFdoZW4gcmV2ZXJzZSBpcyB0cnVlLCBmb3JtYXQgYXMgXCJsYXN0TmFtZSwgZmlyc3ROYW1lXCJcbiAqIC0gQWJsZSB0byBoYW5kbGUgd2hlbiBvbmx5IGZpcnN0IG9yIGxhc3QgbmFtZSBpcyBzZXRcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBwZW9wbGVMaXN0IHwgcGVvcGxlTGlzdE5hbWVzOmlzUmV2ZXJzZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlt7Zmlyc3ROYW1lOiBcIk1pY2tleVwiLCBsYXN0TmFtZTogXCJNb3VzZVwifSwge2ZpcnN0TmFtZTogXCJEb25hbGRcIiwgbGFzdE5hbWU6IFwiRHVja1wifV08L2NvZGU+IGJlY29tZXMgXCJNaWNrZXkgTW91c2UsIERvbmFsZCBEdWNrXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlJldmVyc2Ugb3VwdXQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+W3tmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogXCJEdWNrXCJ9XTwvY29kZT4gYmVjb21lcyBcIk1vdXNlLCBNaWNrZXk7IER1Y2ssIERvbmFsZFwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NaXNzaW5nIG5hbWVzIDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlt7Zmlyc3ROYW1lOiB1bmRlZmluZWQsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogdW5kZWZpbmVkfV08L2NvZGU+IGJlY29tZXMgXCJNb3VzZSwgRG9uYWxkXCJcbiAqL1xuQFBpcGUoe25hbWU6ICdwZW9wbGVMaXN0TmFtZXMnfSlcbmV4cG9ydCBjbGFzcyBQZW9wbGVMaXN0TmFtZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBlcnNvbkxpc3Q6IGFueVtdLCByZXZlcnNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgZm9yKGxldCBwZXJzb24gb2YgcGVyc29uTGlzdCl7XG4gICAgICBsZXQgZk5hbWU6IHN0cmluZyA9IHBlcnNvbi5maXJzdE5hbWUgfHwgJyc7XG4gICAgICBsZXQgbE5hbWU6IHN0cmluZyA9IHBlcnNvbi5sYXN0TmFtZSB8fCAnJztcbiAgICAgIGlmKG91dCAhPT0gJycgJiYgKGZOYW1lICE9PSAnJyB8fCBsTmFtZSAhPT0gJycpKXtcbiAgICAgICAgb3V0ICs9IChyZXZlcnNlID8gJzsgJyA6ICcsICcpO1xuICAgICAgfVxuICAgIGlmKHJldmVyc2Upe1xuICAgICAgb3V0ICs9IGxOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJywgJyA6ICcnKStmTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgb3V0ICs9IGZOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJyAnIDogJycpK2xOYW1lO1xuICAgICAgfVxuICAgIH0vLyBlbmQgZm9yXG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9wZW9wbGUtbGlzdC1uYW1lcy5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGhhZ2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BoYWdlLmludGVyZmFjZSc7XG5cbi8qKlxuICogRm9ybWF0IHRoZSB0ZXh0dWFsIHByZXNlbnRhdGlvbiBvZiBhIHBoYWdlIHN0cmFpbidzIHBhcmVudHNcbiAqIChpZiBhbnkpIHdoZW4gdmlld2luZyB0aGUgZGlhbG9nIGJveCBmb3IgYSBwaGFnZVxuICpcbiAqIFRoZSBgbnVtUGFyZW50c2AgdmFyaWFibGUgaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgb25lIG9mIHRoZVxuICogcGFyZW50cyBoYWQgYmVlbiBkZWxldGVkIGZyb20gdGhlIGRhdGFiYXNlIHdoZW4gYHBhcmVudHMubGVuZ3RoICE9IG51bVBhcmVudHNgXG4gKlxuICogTm90ZTogdGhlIHBoYWdlIGBzdHJhaW5OdW1gIGFyZSAwLWJhc2VkIGJ1dCBVSSBpcyAxLWJhc2VkIHNvXG4gKiB0aGUgc3RyYWluIG51bWJlciBpcyBhZGp1c3RlZFxuICpcbiAqICoqVXNhZ2U6KiogYHt7cGFyZW50c0xpc3QgfCBwaGFnZVBhcmVudHM6bnVtUGFyZW50c319YFxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk9uZSBwYXJlbnQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e3BhcmVudHM6IFt7aWQ6ICdpZDEnLCBzdHJhaW5OdW06ICc0J31dLCBudW1QYXJlbnRzOiAxfTwvY29kZT4gYmVjb21lcyBcIlN0cmFpbiA1XCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlR3byBwYXJlbnRzOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e3BhcmVudHM6IFt7aWQ6ICdpZDEnLCBzdHJhaW5OdW06IDR9LCB7aWQ6ICdpZDInLCBzdHJhaW5OdW06IDEwfV0sIG51bVBhcmVudHM6IDJ9PC9jb2RlPiBiZWNvbWVzIFwiU3RyYWlucyA1IGFuZCAxMVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ud28gcGFyZW50cyBidXQgbWlzc2luZyBvbmU6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT57cGFyZW50czogW3tpZDogJ2lkMycsIHN0cmFpbk51bTogOH1dLCBudW1QYXJlbnRzOiAyfTwvY29kZT4gYmVjb21lcyBcIlN0cmFpbnMgOSBhbmQgP1wiXG4gKi9cbkBQaXBlKHtuYW1lOiAncGhhZ2VQYXJlbnRzJ30pXG5leHBvcnQgY2xhc3MgUGhhZ2VQYXJlbnRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShwYXJlbnRzOiBQaGFnZVtdLCBudW1QYXJlbnRzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBvdXQgPSAnJztcbiAgICBpZihudW1QYXJlbnRzID09PSB1bmRlZmluZWQpe1xuICAgICAgbnVtUGFyZW50cyA9IHBhcmVudHMubGVuZ3RoXG4gICAgfVxuICAgIGlmKHBhcmVudHMubGVuZ3RoID09PSAwKXtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGxldCBzb3J0ZWQ6IFBoYWdlW10gPSBwYXJlbnRzLnNvcnQoKG4xLCBuMik9PntyZXR1cm4gbjEuc3RyYWluTnVtIC0gbjIuc3RyYWluTnVtfSk7XG4gICAgbGV0IG51bXMgPSBzb3J0ZWQubWFwKChwaGFnZSk9PntyZXR1cm4gKHBoYWdlLnN0cmFpbk51bSsxKS50b1N0cmluZygpfSk7XG5cbiAgICBpZihzb3J0ZWQubGVuZ3RoID09PSAxICYmIG51bVBhcmVudHMgPT09IDEpe1xuICAgICAgb3V0ID0gJ1N0cmFpbiAnICsgbnVtc1swXTtcbiAgICB9IGVsc2UgaWYoc29ydGVkLmxlbmd0aCA9PT0gMSAmJiBudW1QYXJlbnRzID09PSAyKXtcbiAgICAgIG91dCA9ICdTdHJhaW5zICcgKyBudW1zWzBdICsgJyBhbmQgPyc7XG4gICAgfSBlbHNlIGlmKHNvcnRlZC5sZW5ndGggPT09IDIgJiYgbnVtUGFyZW50cyA9PT0gMil7XG4gICAgICBvdXQgPSAnU3RyYWlucyAnICsgbnVtc1swXSArICcgYW5kICcgKyBudW1zWzFdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9waGFnZS1wYXJlbnRzLnBpcGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUmVxdWlyZWRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2VtYWlsLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybVBhc3N3b3JkRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50Jztcbi8qKlxuICogVGhlIEZvcm0gRXJyb3JzIE1vZHVsZSBjb250YWlucyB0ZW1wbGF0ZXMgZm9yIFJlYWN0aXZlRm9ybVxuICogaW5wdXQgZXJyb3JzIHRoYXQgYXJlIG5lZWRlZCBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogU2F2ZXMgdGltZSBmcm9tIGhhdmluZyB0byBjcmVhdGUgdGhlIHNhbWUgZXJyb3IgbWVzc2FnZXMgYWNyb3NzXG4gKiBudW1lcm91cyBwYWdlcyBhbmQga2VlcHMgdGhlIGVycm9yIG1lc3NhZ2VzIGNvbnNpc3RhbnRcbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZXF1aXJlZEVycm9yQ29tcG9uZW50LFxuICAgIEVtYWlsRXJyb3JDb21wb25lbnQsXG4gICAgUGFzc3dvcmRFcnJvckNvbXBvbmVudCxcbiAgICBDb25maXJtUGFzc3dvcmRFcnJvckNvbXBvbmVudFxuICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIFJlcXVpcmVkRXJyb3JDb21wb25lbnQsXG4gICAgICBFbWFpbEVycm9yQ29tcG9uZW50LFxuICAgICAgUGFzc3dvcmRFcnJvckNvbXBvbmVudCxcbiAgICAgIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUVycm9yc01vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZm9ybS1lcnJvcnMubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JlcXVpcmVkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9yZXF1aXJlZC1lcnJvci50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXF1aXJlZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZmllbGQ6IEFic3RyYWN0Q29udHJvbDtcbiAgQElucHV0KCkgdGV4dExhYmVsOiBzdHJpbmc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODYzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBIYW5kbGUgZW1haWwgcmVsYXRlZCBlcnJvciBtZXNzYWdlcyBzdWNoIGFzXG4gKiAtIGlzIHJlcXVpcmVkOiBgRW1haWwgaXMgcmVxdWlyZWRgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZW1haWwtZXJyb3InLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2VtYWlsLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEVtYWlsRXJyb3JDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGlucHV0IGVtYWlsIGZyb20gZm9ybTsgaW5jbHVkZXMgZXJyb3JzIGlmIGFwcGxpY2FibGVcbiAgICovXG4gIEBJbnB1dCgpIGVtYWlsOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODY1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwYXNzd29yZC1lcnJvcicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRFcnJvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODY3XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb25maXJtLXBhc3N3b3JkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uZmlybVBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODY5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlbGVjdERyb3BTZXJ2aWNlLCBzZWxlY3REcm9wU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NlbGVjdC1kcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0RHJvcENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWRyb3AuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3QtZHJvcC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0LWRyb3AuY29tcG9uZW50JztcblxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbe3Byb3ZpZGU6IFNlbGVjdERyb3BTZXJ2aWNlLCB1c2VGYWN0b3J5OiBzZWxlY3REcm9wU2VydmljZUZhY3Rvcnl9XTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2VsZWN0RHJvcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWxlY3REcm9wQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJze1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2VsZWN0RHJvcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3AubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFkbWluUm91dGVzIH0gZnJvbSAnLi9hZG1pbi5yb3V0ZXMnO1xuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuaW1wb3J0IHsgQWRtaW5HdWFyZCB9IGZyb20gJy4vYWRtaW4uZ3VhcmQuc2VydmljZSc7XG5cbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zdHVkZW50L3N0dWRlbnQuc2VydmljZSc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBhZG1pbiBmdW5jdGlvbnMgaGF2aW5nIHRvIGRlYWwgd2l0aCBzdHVkZW50cyBhbmQgY291cnNlcyB0aGF0IHNob3VsZCBub3QgYmUgYWNjZXNzZWQgYnkgYSByZWd1bGFyIHVzZXJcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQWRtaW5Sb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIEFkbWluSG9tZUNvbXBvbmVudCxcbiAgICBOb3RBdXRoQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFkbWluR3VhcmQsXG4gICAgU3R1ZGVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbk1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFkbWluR3VhcmQgfSBmcm9tICcuL2FkbWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VkSW5HdWFyZCB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEFkbWluUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnYWRtaW4nLFxuICAgIGRhdGE6IHtcbiAgICAgIGJyZWFkY3J1bWJzOiAnQWRtaW4nXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTpbTG9nZ2VkSW5HdWFyZF0sXG4gICAgY2FuQWN0aXZhdGVDaGlsZDogW0FkbWluR3VhcmRdLFxuICAgIGNvbXBvbmVudDogQWRtaW5Db21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2NvdXJzZXMnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2NvdXJzZS9jb3Vyc2UubW9kdWxlJylbJ0NvdXJzZU1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ0NvdXJzZXMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdzdHVkZW50cycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7ICAocmVxdWlyZSBhcyBhbnkpLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmU6IGFueSkgeyAgICByZXNvbHZlKHJlcXVpcmUoJy4vc3R1ZGVudC9zdHVkZW50Lm1vZHVsZScpWydTdHVkZW50TW9kdWxlJ10pOyAgfSwgZnVuY3Rpb24oZTogYW55KSB7ICAgIHJlamVjdCh7IGxvYWRDaHVua0Vycm9yOiB0cnVlLCBkZXRhaWxzOiBlIH0pOyAgfSk7fSkgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnU3R1ZGVudHMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEFkbWluSG9tZUNvbXBvbmVudFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhZG1pbi9ub3QtYXV0aCcsXG4gICAgY29tcG9uZW50OiBOb3RBdXRoQ29tcG9uZW50XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2FkbWluLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODczXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGgudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODc1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJ1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRlcyB9IGZyb20gJy4vYXV0aGVudGljYXRpb24ucm91dGVzJztcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSB3aGljaCBkZWFscyB3aXRoIGFueXRoaW5nIHJlbGF0ZWQgdG8gYXV0aGVudGljYXRpbmcgdXNlcnMsXG4gKiBpLmUuIGxvZ2dpbmcgaW4vb3V0IHVzZXJzIGFuZCByZXNldHRpbmcgZm9yZ290dGVuIHBhc3N3b3Jkc1xuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQXV0aGVudGljYXRpb25Sb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2lnbmluQ29tcG9uZW50LFxuICAgICAgICBTaWdudXBDb21wb25lbnQsXG4gICAgICBTaWdub3V0Q29tcG9uZW50LFxuICAgICAgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQsXG4gICAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbk1vZHVsZSB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25Sb3V0ZXM6IFJvdXRlcyA9IFt7XG4gICAgcGF0aDogJ2F1dGhlbnRpY2F0aW9uJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICB7IHBhdGg6ICdzaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdzaWdub3V0JywgY29tcG9uZW50OiBTaWdub3V0Q29tcG9uZW50IH0sXG4gICAgICB7cGF0aDogJ2ZvcmdldC1wYXNzd29yZCcsIGNvbXBvbmVudDogRm9yZ2V0UGFzc3dvcmRDb21wb25lbnR9LFxuICAgICAge3BhdGg6ICdyZXNldC1wYXNzd29yZC86dG9rZW4nLCBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRDb21wb25lbnR9XG4gICAgXVxufV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODgxXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBIZWxwUm91dGVzIH0gZnJvbSAnLi9oZWxwLnJvdXRlcyc7XG5pbXBvcnQgeyBIZWxwQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKEhlbHBSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEhlbHBDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWxwTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9oZWxwL2hlbHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhlbHBDb21wb25lbnQgfSBmcm9tICcuL2hlbHAuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEhlbHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdoZWxwJyxcbiAgICBjb21wb25lbnQ6IEhlbHBDb21wb25lbnQsXG4gICAgZGF0YToge2JyZWFkY3J1bWJzOiAnSGVscCd9XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9oZWxwL2hlbHAucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9oZWxwL2hlbHAudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9oZWxwL2hlbHAudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODg0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaGVscC9oZWxwLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9oZWxwL2hlbHAuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA4ODVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IFByb2ZpbGVSb3V0ZXMgfSBmcm9tICcuL3Byb2ZpbGUucm91dGVzJztcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFByb2ZpbGVSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFVzZXJQcm9maWxlQ29tcG9uZW50LFxuICAgIFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFByb2ZpbGVTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2dnZWRJbkd1YXJkIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAncHJvZmlsZScsXG4gICAgY2FuQWN0aXZhdGU6IFtMb2dnZWRJbkd1YXJkXSxcbiAgICBjYW5BY3RpdmF0ZUNoaWxkOiBbTG9nZ2VkSW5HdWFyZF0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgcGF0aDogJ3VwZGF0ZS1wYXNzd29yZCcsXG4gICAgICBjb21wb25lbnQ6IFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50LFxuICAgICAgIGRhdGE6IHtcbiAgICAgICAgIGJyZWFkY3J1bWJzOiAnVXBkYXRlIHBhc3N3b3JkJ1xuICAgICAgIH1cbiAgICAgIH0sXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFVzZXJQcm9maWxlQ29tcG9uZW50XG4gIH1cbiAgICBdLFxuICAgIGRhdGE6IHtcbiAgICAgIGJyZWFkY3J1bWJzOiAnUHJvZmlsZSdcbiAgICB9XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODg4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvcHJvZmlsZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvcHJvZmlsZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgU2NlbmFyaW9Sb3V0ZXMgfSBmcm9tICcuL3NjZW5hcmlvLnJvdXRlcyc7XG5pbXBvcnQgeyBTY2VuYXJpb0NvbXBvbmVudCB9IGZyb20gJy4vc2NlbmFyaW8uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSBmb3Igc2NlbmFyaW8tcmVsYXRlZCBjb21wb25lbnRzIGFuZCBtb2R1bGVzXG4gKlxuICogTWFpbmx5IHVzZWQgdG8gYmUgYWJsZSB0byBhc3luYyBsb2FkIHRoZSBzcGVjaWZpYyBzY2VuYXJpb3MgdmlhIHRoZSB7QGxpbmsgTG9jYXRpb25Nb2R1bGV9XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFNjZW5hcmlvUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTY2VuYXJpb0NvbXBvbmVudCxcbiAgICBMaXN0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9Nb2R1bGUge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8ubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU2NlbmFyaW9Db21wb25lbnQgfSBmcm9tICcuL3NjZW5hcmlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2VuYXJpb1Jlc29sdmVyIH0gZnJvbSAnLi9zY2VuYXJpby5yZXNvbHZlcic7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2xpc3QuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFNjZW5hcmlvUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnc2NlbmFyaW9zJyxcbiAgICBkYXRhOiB7XG4gICAgICBicmVhZGNydW1iczogJ1NjZW5hcmlvcydcbiAgICB9LFxuICAgIGNvbXBvbmVudDogU2NlbmFyaW9Db21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJzpzY2VuSWQnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2xvY2F0aW9uL2xvY2F0aW9uLm1vZHVsZScpWydMb2NhdGlvbk1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBzY2VuYXJpbzogU2NlbmFyaW9SZXNvbHZlclxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnM6ICd7eyBzY2VuYXJpby5sYWJlbCB9fSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogTGlzdENvbXBvbmVudFxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbGlzdC9saXN0LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbGlzdC9saXN0LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGUgbWFpbiBhcHBsaWNhdGlvbiBjb21wb25lbnQ7XG4gKiBMaW5rcyB0aGUgbmF2IGJhciB0byB0aGUgY29udGVudCBuZWVkZWQgYmFzZWQgb24gdGhlIHVybFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NyaWNrZXQtYXBwJyxcbiAgICB0ZW1wbGF0ZTogJzxjcmlja2V0LW5hdj48L2NyaWNrZXQtbmF2Pjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4nXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gYmFyIGF0IHRoZSB0b3Agb2YgdGhlIHNpdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjcmlja2V0LW5hdicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbmF2LnRlbXBsYXRlLmh0bWwnKSxcbiAgICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL25hdi5zdHlsZS5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBVc2VyIG9iamVjdCB1c2VkIHRvIGRldGVybWluZSBpZiBwcm9maWxlIGxpbmsgc2hvdWxkIGJlXG4gICAqIGluY2x1ZGVkIGluIHRoZSBuYXYgYmFyXG4gICAqL1xuICBwcml2YXRlIHVzZXI6IFVzZXI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gc3RyZWFtIGZvciB0aGUgYXV0aGV0bmljYXRpb24gc2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSB0aGUgY29tcG9uZW50IGJ5IGdldHRpbmcgdGhlIGN1cnJlbnQgdXNlclxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIkXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgdGhpcy51c2VyID0gcmVzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdG9yeSB0aGUgY29tcG9uZW50IGJ5IHVuc3Vic2NyaWJpbmcsIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9uYXYvbmF2LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbmF2L25hdi50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL25hdi9uYXYudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODk1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbmF2L25hdi5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbmF2L25hdi5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiXSwic291cmNlUm9vdCI6IiJ9