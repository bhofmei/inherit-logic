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
        templateUrl: __webpack_require__(898)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, scenario_service_1.ScenarioService])
], ListComponent);
exports.ListComponent = ListComponent;


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
    }
    ngOnInit() {
        this.user = this._authenticationService.getUser();
        console.log('before listing scenarios');
        this.sSubscription = this._scenarioService.listScenarios()
            .subscribe((scenarios) => {
            this.scenarios = scenarios;
            console.log('scenarios: ' + scenarios);
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
        templateUrl: __webpack_require__(910)
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
        templateUrl: __webpack_require__(912)
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
const scenario_service_1 = __webpack_require__(118);
const course_service_1 = __webpack_require__(182);
const scenario_resolver_1 = __webpack_require__(183);
const shared_module_1 = __webpack_require__(53);
const admin_module_1 = __webpack_require__(876);
const authentication_module_1 = __webpack_require__(881);
const help_module_1 = __webpack_require__(887);
const profile_module_1 = __webpack_require__(892);
const scenario_module_1 = __webpack_require__(896);
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
            scenario_module_1.ScenarioModule,
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
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(1).then((function (require) { resolve(__webpack_require__(913)['CourseModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
                data: {
                    breadcrumbs: 'Courses'
                }
            },
            {
                path: 'students',
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(2).then((function (require) { resolve(__webpack_require__(914)['StudentModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
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
const scenario_routes_1 = __webpack_require__(897);
const scenario_component_1 = __webpack_require__(410);
const list_component_1 = __webpack_require__(411);
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

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const scenario_component_1 = __webpack_require__(410);
const scenario_resolver_1 = __webpack_require__(183);
const list_component_1 = __webpack_require__(411);
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
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(0).then((function (require) { resolve(__webpack_require__(915)['LocationModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
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

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/list/list.template.html";

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
const mendelpede_routes_1 = __webpack_require__(911);
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
};
MendelpedeLabroomComponent = __decorate([
    core_1.Component({
        selector: 'mpede-labroom',
        templateUrl: __webpack_require__(909)
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

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/scenarios.template.html";

/***/ }),

/***/ 911:
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

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/mendelpede.template.html";

/***/ })

},[856]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3Auc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8ucmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLmd1YXJkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLXBhc3N3b3JkLnZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25vdXQvc2lnbm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAtY3JpY2tldC9oZWxwLWNyaWNrZXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXBkYXRlLXBhc3N3b3JkL3VwZGF0ZS1wYXNzd29yZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3Mvc2NlbmFyaW9zLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9zY2VuYXJpb3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tZW5kZWxwZWRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL3N0dWRlbnQvc3R1ZGVudC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9yZWFkLWVycm9yLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9ib290c3RyYXAudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXBwLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9ob21lL2hvbWUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hvbWUvaG9tZS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9wZXJzb24tbmFtZS5waXBlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGVvcGxlLWxpc3QtbmFtZXMucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BpcGVzL3BoYWdlLXBhcmVudHMucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL3JlcXVpcmVkLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2VtYWlsLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL3Bhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAtY3JpY2tldC9oZWxwLWNyaWNrZXQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xpc3QvbGlzdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL25hdi9uYXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbmF2L25hdi50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbmF2L25hdi5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9vcHRpb25zL29wdGlvbnMudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9zY2VuYXJpb3MudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUudGVtcGxhdGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVDQUFnRTtBQUNoRSxzQ0FBMkM7QUFDM0MsdUNBQWtEO0FBUWxELElBQWEsZUFBZSxHQUE1QjtJQTRCSSxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBMUI3QixhQUFRLEdBQUcsYUFBYSxDQUFDO1FBS3pCLHFCQUFnQixHQUFHLElBQUksc0JBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUMzRCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFJbEQscUJBQWdCLEdBQUcsSUFBSSxzQkFBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELGVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFPMUMsa0JBQWEsR0FBRyxJQUFJLHNCQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7UUFDeEQsb0JBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBT1osQ0FBQztJQVEzQyxhQUFhO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUks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QUNFLElBQUksRUFBRyxpQkFBaUI7Z0JBQ3hCLFNBQVMsRUFBRyxrREFBNEI7Z0JBQ3hDLElBQUksRUFBRTtvQkFDSixXQUFXLEVBQUUsU0FBUztpQkFDdkI7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDOzs7Ozs7OztBQzNCRiwwRiIsImZpbGUiOiJib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIEJlaGF2aW9yU3ViamVjdCAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTY2VuYXJpbywgRnJpZGdlLCBGcmlkZ2VQaGFnZSwgR2Vub3R5cGVQaGFnZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIFNjZW5hcmlvL2ZyaWRnZSByZWxhdGVkIGZ1bmN0aW9ucyB0aGF0IGdldC9zZW5kIGRhdGEgdG8gdGhlIGJhY2tlbmQgc2VydmVyXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfYmFzZVVSTCA9ICdhcGkvY3JpY2tldCc7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBzY2VuYXJpbyBkZXRhaWxzIHdoaWNoIGlzIG5lZWRlZCB3aGVuXG4gICAqIHBlcmZvcm1pbmcgY3Jvc3Nlc1xuICAgKi9cbiAgICBwcml2YXRlIF9zY2VuYXJpb0RldGFpbHMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICAgIGdldFNjZW5hcmlvRGV0YWlscyA9IHRoaXMuX3NjZW5hcmlvRGV0YWlscy5hc09ic2VydmFibGUoKTtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGd1ZXNzZXNcbiAgICovXG4gICAgcHJpdmF0ZSBfc2NlbmFyaW9HdWVzc2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHt9KTtcbiAgICBnZXRHdWVzc2VzID0gdGhpcy5fc2NlbmFyaW9HdWVzc2VzLmFzT2JzZXJ2YWJsZSgpO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2NlbmFyaW8gY29kZVxuICAgKlxuICAgKiBVc2VkIGJ5IGZyaWRnZSBhbmQgbG9jYXRpb24gY29tcG9uZW50c1xuICAgKiB0byBnZXQgdGhlIGNvZGUgd2l0aG91dCB0aGUgcm91dGVcbiAgICovXG4gICAgcHJpdmF0ZSBfc2NlbmFyaW9Db2RlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgICBnZXRTY2VuYXJpb0NvZGUgPSB0aGlzLl9zY2VuYXJpb0NvZGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgdGhlIHNlcnZpY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SHR0cENsaWVudH0gX2h0dHAgQW5ndWFyIG1lY2hhbmlzbSB0byBtYWtlIGNhbGxzIHRvIGJhY2tlbmQgc2VydmVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge31cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHNhdmUgc2NlbmFyaW8gc3R1ZmY6XG4gICAqIHNjZW5hcmlvRGV0YWlscywgc2NlbmFyaW9HdWVzc2VzLCBhbmQgc2NlbmFyaW9Db2RlXG4gICAqXG4gICAqIFVzZWQgd2hlbiBuYXZpZ2F0aW5nIGF3YXkgZnJvbSBzY2VuYXJpbyBjb21wb25lbnRcbiAgICovXG4gIHJlc2V0U2NlbmFyaW8oKSB7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvRGV0YWlscy5uZXh0KCcnKTtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9HdWVzc2VzLm5leHQoe30pO1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0NvZGUubmV4dCgnJyk7XG4gICAgfVxuXG4gIC8qKlxuICAqIFNldCB0aGUgc2NlbmFyaW8gZGV0YWlscyBhbmQgc2NlbmFyaW8gZ3Vlc3Nlc1xuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IHNjZW5hcmlvRGV0YWlscyAtIHNjZW5hcmlvIGRldGFpbHNcbiAgKiAtIG5lY2Vzc2FyeSBmb3IgcGVyZm9ybWluZyBleHBlcmltZW50c1xuICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuYXJpb0d1ZXNzZXMgY3VycmVudCBzY2VuYXJpbyBndWVzc2VzXG4gICovXG4gIHNldFNjZW5hcmlvKHNjZW5hcmlvRGV0YWlsczogc3RyaW5nLCBzY2VuYXJpb0d1ZXNzZXM6IHN0cmluZykge1xuICAgICAgICBpZiAoc2NlbmFyaW9EZXRhaWxzICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fc2NlbmFyaW9EZXRhaWxzLm5leHQoc2NlbmFyaW9EZXRhaWxzKTtcbiAgICAgICAgaWYgKHNjZW5hcmlvRGV0YWlscyAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX3NjZW5hcmlvR3Vlc3Nlc1xuICAgICAgICAgICAgICAubmV4dChKU09OLnBhcnNlKHNjZW5hcmlvR3Vlc3NlcykpO1xuICAgIH1cblxuICAvKipcbiAgICogTGlzdCBhdmFpbGFibGUgc2NlbmFyaW9zXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFNjZW5hcmlvW10+fSBsaXN0IG9mIHNjZW5hcmlvc1xuICAgKi9cbiAgICBsaXN0U2NlbmFyaW9zKCk6IE9ic2VydmFibGU8U2NlbmFyaW9bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxTY2VuYXJpb1tdPih0aGlzLl9iYXNlVVJMKVxuICAgIH1cblxuICAvKipcbiAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGEgc3BlY2lmaWMgc2NlbmFyaW9cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBpZGVudGlmaWVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtTY2VuYXJpb31cbiAgICogLSBzY2VuYXJpbyBpbmZvcm1hdGlvblxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGxvYWQgc2NlbmFyaW8gPHNjZW5JZD5cIiBpZiBzY2VuYXJpbyBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIGdldFNjZW5hcmlvKHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTY2VuYXJpbz4ge1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0NvZGUubmV4dChzY2VuSWQpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxTY2VuYXJpbz4oYCR7dGhpcy5fYmFzZVVSTH0vJHtzY2VuSWR9YCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHVwZGF0ZWQgZ3Vlc3NlcyBmb3IgdGhlIHNjZW5hcmlvIHRvIGJlIHNhdmVkIGluIGRhdGFiYXNlXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBndWVzc2VzIHN0cmluZyBvZiB1cGRhdGVkIGd1ZXNzZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICogLSB1cGRhdGVkIGd1ZXNzZXNcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBmaW5kIGZyaWRnZVwiIGlmIGZyaWRnZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgXCJDb3VsZCBub3Qgc2F2ZSBuZXcgZ3Vlc3Nlc1wiIGlmIGNvdWxkbid0IHVwZGF0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICBzYXZlRGVsZXRpb25zKGd1ZXNzZXM6IGFueSwgdXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vZGVsZXRpb25zYCwgZ3Vlc3Nlcyk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZnJpZGdlIGZvciB0aGUgdXNlci9zY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2U+fVxuICAgKiAtIG5ld2x5IGNyZWF0ZWQgZnJpZGdlXG4gICAqIC0gb3IgZXJyb3IgXCJVbmFibGUgdG8gY3JlYXRlIG5ldyBwaGFnZSBmb3Igc2NlbmFyaW9cIiBpZiBpc3N1ZSBjcmVhdGUgcGhhZ2VcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byBzYXZlIG5ldyBmcmlkZ2VcIiBpZiBjb3VsZG4ndCBjcmVhdGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgY3JlYXRlRnJpZGdlKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RnJpZGdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vbmV3LWZyaWRnZWApO1xuICAgIH1cblxuICAvKipcbiAgICogR2V0IGFuIGV4aXN0aW5nIGZyaWRnZSBmb3IgdXNlci9zY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2U+fVxuICAgKiAtIGV4aXN0aW5nIGZyaWRnZVxuICAgKiAtIG9yIGVycm9yIFwiTm8gZnJpZGdlIGZvciBzY2VuYXJpby91c2VyXCIgaWYgZnJpZGdlIGRvZXMgbm90IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIGdldEZyaWRnZSh1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZyaWRnZT4ge1xuICAgICAgICB2YXIgcmVzID0gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH1gKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBwaGFnZSBzdHJhaW4gdG8gdGhlIGZyaWRnZTtcbiAgICogU2VydmVyIHVzZXMgdXNlcklkIGFuZCBzY2VuQ29kZSB0byBmaW5kIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHthbnl9IHN0cmFpbiAtIG5ldyBwaGFnZSB0byBhZGQgdG8gZnJpZGdlXG4gICAqIC0gaGFzIHN0cmFpbk51bSwgbXV0YXRpb25MaXN0LCBhbmQgZGVsZXRpb25cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlUGhhZ2U+fVxuICAgKiAtIG5ld2x5IHNhdmVkIHBoYWdlXG4gICAqIC0gb3IgZXJyb3IgXCJVc2VyIG5vdCBmb3VuZFwiIGlmIHVzZXIgbm90IGZvdW5kXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gbG9hZCBzY2VuYXJpbyA8c2NlbklkPlwiIGlmIHNjZW5hcmlvIG5vdCBmb3VuZFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgYWRkU3RyYWluKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgc3RyYWluOiBhbnkpOiBPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdDxGcmlkZ2VQaGFnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9mcmlkZ2UtcGhhZ2VgLCBzdHJhaW4pXG4gICAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZGV0YWlscy9pbmZvcm1hdGlvbiBhYm91dCBhbiBleGlzdGluZyBwaGFnZSBpbiB0aGUgZnJpZGdlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqIEBwYXJhbSB7RnJpZGdlUGhhZ2V9IHN0cmFpbiAtIHN0cmFpbiB0byB1cGRhdGVcbiAgICogLSB1c2Ugc3RyYWluIGBpZGAgdG8gc3BlY2lmeSBzdHJhaW4gYW5kIHNlbmQgdXBkYXRlZCBpbmZvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPn1cbiAgICogLSB1cGRhdGVkIHN0cmFpblxuICAgKiAtIG9yIGVycm9yIFwiUGhhZ2Ugbm90IGZvdW5kXCIgaWYgc3RyYWluIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgdXBkYXRlU3RyYWluKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgc3RyYWluOiBGcmlkZ2VQaGFnZSk6IE9ic2VydmFibGU8RnJpZGdlUGhhZ2U+IHtcbiAgICAgICAgbGV0IHN0cmFpbklkID0gc3RyYWluLmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3Q8RnJpZGdlUGhhZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vJHtzdHJhaW5JZH1gLCBzdHJhaW4pXG4gICAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYSBzdHJhaW4gZnJvbSB0aGUgZnJpZGdlIChhbmQgZGF0YWJhc2UpXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqIEBwYXJhbSB7RnJpZGdlUGhhZ2V9IHN0cmFpbiAtIHRoZSBzdHJhaW4gdG8gZGVsZXRlXG4gICAqIC0gdXNlIHN0cmFpbiBgaWRgIHRvIHNwZWNpZnkgd2hpY2ggc3RyYWluIHRvIGRlbGV0ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fVxuICAgKiAtIHRoZSBzdHJhaW4ganVzdCBkZWxldGVkXG4gICAqIC0gb3IgZXJyb3IgXCJQaGFnZSBub3QgZm91bmRcIiBpZiBzdHJhaW4gZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byByZW1vdmUgc3RyYWluIGZyb20gZnJpZGdlXCIgaWYgY291bGRuJ3QgZGVsZXRlXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIGRlbGV0ZVN0cmFpbih1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHN0cmFpbjogRnJpZGdlUGhhZ2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgc3RyYWluSWQgPSBzdHJhaW4uaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vJHtzdHJhaW5JZH1gKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogUm91dGVyIGd1YXJkIHRoYXQgbWFrZXMgc3VyZSBvbmx5IGxvZ2dlZCBpbiB1c2VycyBjYW4gYWNjZXNzIHRoZSBwYWdlIGFuZCBhbGwgY2hpbGQgcGFnZXNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2dlZEluR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdXNlciBjYW4gYWN0aXZhdGUgKHZpc2l0KSBhIHBhZ2VcbiAgICogYmFzZWQgb24gaWYgYSB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKlxuICAgKiBJZiBub3QgbG9nZ2VkIGluLCBzZXRzIHRoZSByZWRpcmVjdCB1cmwgdG8gdGFrZSB1c2VyIGJhY2sgdG8gdGhpcyBwYWdlIF9hZnRlcl8gbG9nZ2luZyBpbiBhbmRcbiAgICogc2VuZHMgdGhlIHVzZXIgdG8gdGhlIHNpZ24gaW4gcGFnZVxuICAgKlxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIC0gY3VycmVudCBVUkxcbiAgICogQHBhcmFtIHtSb3V0ZXJTdGF0ZXNuYXBzaG90fSBzdGF0ZSAtIHJvdXRlciBzdGF0ZSBpbmNsdWRpbmcgdGhlIHVybCB0cnlpbmcgdG8gYWNlc3NcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gYHRydWVgIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqIC0gYGZhbHNlYCBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW5cbiAgICovXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBib29sZWFuIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSBzdGF0ZS51cmw7XG5cbiAgICBsZXQgaXNMb2dnZWRJbjogYm9vbGVhbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgaWYoaXNMb2dnZWRJbilcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VXJsID0gdXJsO1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnYXV0aGVudGljYXRpb24vc2lnbmluJ10pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHVzZXIgY2FuIGFjdGl2YXRlIGFsbCBjaGlsZC9zdWIgcGFnZXMgZGVwZW5kaW5nIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqXG4gICAqIE9ubHkgbG9nZ2VkIGluIHVzZXJzIGNhbiBhY3RpdmF0ZSB0aGUgcGFnZXNcbiAgICovXG4gIGNhbkFjdGl2YXRlQ2hpbGQocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuQWN0aXZhdGUocm91dGUsIHN0YXRlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UudHMiLCIvL2ltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgZGVhbHMgd2l0aCB2YWxpZGF0aW5nIGFuZCBsb2dnaW5nIGluL291dCB1c2VycyBhbmRcbiAqIHJlc2V0dGluZyBmb3Jnb3R0ZW4gcGFzc3dvcmRzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuICAgIHByaXZhdGUgX3VzZXI6IEJlaGF2aW9yU3ViamVjdDxVc2VyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VXNlcj4obnVsbCk7XG4gICAgZ2V0VXNlciQgPSB0aGlzLl91c2VyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBfYmFzZVVybCA9ICcvYXBpL2F1dGgvJ1xuXG4gIC8qKlxuICAgKiBXaGVuIGEgbm9uLWxvZ2dlZCBpbiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBhIHBhZ2Ugd2hpY2ggcmVxdWlyZXMgbG9nZ2luZyBpbixcbiAgICogc2F2ZSB0aGF0IHBhZ2UncyB1cmwgYW5kIGRpcmVjdCB1c2VyIHRoZXJlIGFmdGVyIHRoZXkgbG9nIGluXG4gICAqL1xuICAgIHB1YmxpYyByZWRpcmVjdFVybDogc3RyaW5nID0gJy8nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzZXJ2aWNlcyBgdXNlcmAgdmFyaWFibGUgd2hpY2ggaXMgc3RvcmVkIGFmdGVyIHVzZXIgbG9ncyBpblxuICAgKlxuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgLSBjdXJyZW50IHVzZXIgd2hvIGxvZ2dlZCBpblxuICAgKiAtIG9yIGBudWxsYCB0byB1bnNldCB0aGUgdXNlclxuICAgKi9cbiAgc2V0VXNlcih1c2VyOiBVc2VyKXtcbiAgICB0aGlzLl91c2VyLm5leHQodXNlcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHVzZXIgaW5mb3JtYXRpb24gbm90IGFzIGFuIG9ic2VydmFibGVcbiAgICogc28gaXQgaXMgc3luY2hyb25vdXMgYW5kIGtlZXBzIHRoZSBhcHAgY29tcG9uZW50cycgYG5nT25Jbml0YFxuICAgKiBmdW5jdGlvbnMgY2xlYW5lclxuICAgKlxuICAgKiBAcmV0dXJucyB7VXNlcn0gdGhlIGN1cnJlbnQgdXNlciBvciBgbnVsbGAgaWYgbm8gdXNlciBsb2dnZWQgaW5cbiAgICovXG4gIGdldFVzZXIoKTogVXNlcntcbiAgICByZXR1cm4gdGhpcy5fdXNlci5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqXG4gICAqIEByZXF1aXJlcyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgYSB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKiAtIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBpc0xvZ2dlZEluKCk6IGJvb2xlYW57XG4gICAgcmV0dXJuICghIXRoaXMuZ2V0VXNlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgdXNlciBjYW4gYWNjZXNzIHRoZSBhZG1pbiBwYWdlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgdXNlciBpcyBpbnN0ciBvciBhZG1pblxuICAgKiAtIGBmYWxzZWAgaWYgdXNlciBpcyBvbmx5IGEgc3R1ZGVudFxuICAgKi9cbiAgY2FuQWNjZXNzQWRtaW4oKTogYm9vbGVhbntcbiAgICBpZih0aGlzLmdldFVzZXIoKSl7XG4gICAgICByZXR1cm4gdGhpcy5nZXRVc2VyKCkucm9sZSA+IDBcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gc2lnbiBhIHVzZXIgaW4gdXNpbmcgdGhlIHByb3ZpZGVkIGNyZWRlbnRpYWxzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBjcmVkZW50aWFscyAtIGB1c2VybmFtZWAgKGFzIGVtYWlsKSBhbmQgYHBhc3N3b3JkYCB0byBiZSB0ZXN0ZWQgZm9yIGxvZ2dpbmcgaW5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8VXNlcj59IC0gdGhlIHN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4gdXNlclxuICAgKiBlcnJvciBtZXNzYWdlIGBNaXNzaW5nIGNyZWRlbnRpYWxzYCBpZiBubyBlbWFpbCBvciBwYXNzd29yZFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYEludmFsaWQgcGFzc3dvcmRgIGlmIHBhc3N3b3JkIGlzIGluY29ycmVjdFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYFVzZXIgbm90IGZvdW5kYCBpZiBpbnZhbGlkIGVtYWlsXG4gICAqIC0gZXJyb3IgbWVzc2FnZSBmb3Igc2VydmVyL2RhdGFiYXNlL2F1dGhlbnRpY2F0aW9uIGVycm9yXG4gICAqL1xuICBzaWduaW4oY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjcmVkZW50aWFscyk7XG4gICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLl9iYXNlVXJsICsgJ3NpZ25pbicsIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBjcmVhdGUgYSBuZXcgdXNlciB1c2luZyB0aGUgcHJvdmlkZWQgdXNlciBkZXRhaWxzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSB1c2VyIC0gdXNlciBkZXRhaWxzIGluY2x1ZGluZyBgZmlyc3ROYW1lYCwgYGxhc3ROYW1lYCwgYHVzZXJuYW1lYCAoZW1haWwpLCBgY291cnNlYCwgYW5kIGBwYXNzd29yZGBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8VXNlcj59IC0gVGhlIG5ldyBsb2dnZWQtaW4gdXNlciB3aGVuIHN1Y2Nlc3NmdWxseSBjcmVhdGUgbmV3IHVzZXJcbiAgICogLSBlcnJvciA0MDAgaWYgZXJycm9yIGxvZ2dpbmcgaW5cbiAgICogLSBlcnJvciA1MDAgaWYgZXJyb3IgY3JlYXRpbmcgdXNlclxuICAgKi9cbiAgc2lnbnVwKHVzZXI6IGFueSk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KHRoaXMuX2Jhc2VVcmwgKyAnc2lnbnVwJywgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpZ25zIG91dCB0aGUgdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSByZXR1cm5zIGB0cnVlYCBpZiBzdWNjZXNzZnVsbHkgc2lnbmVkIG91dFxuICAgKi9cbiAgc2lnbm91dCgpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5fYmFzZVVybCArICdzaWdub3V0Jyk7XG4gIH1cblxuICAvKipcbiAgICogU3VibWl0IGVtYWlsIGFkZHJlc3Mgb2YgcG90ZW50aWFsIHVzZXIgdG8gYWxsb3cgdGhhdCB1c2VyXG4gICAqIHRvIHJlc2V0IHRoZWlyIHBhc3N3b3JkIGlmIHRoZSB1c2VyIGV4aXN0c1xuICAgKlxuICAgKiBUaGUgYmFja2VuZCB0aGVuIHNlbmRzIGEgcGFzc3dvcmQgcmVzZXQgZW1haWwgdG8gdGhlXG4gICAqIGVtYWlsIGFkZHJlc3NcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGJvZHkgLSByZXF1ZXN0IGJvZHkgdGhhdCBpbmNsdWRlcyBgZW1haWxgIG9mIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBTdWNjZXNzIG1lc3NhZ2UgaWYgcGFzc3dvcmQgcmVzZXQgZW1haWwgc2VudFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYEVycm9yIHdpdGggc2VydmVyIGVtYWlsIHNlcnZpY2VgIGlmIHByb2JsZW0gd2l0aCBlbWFpbCB0cmFuc3BvcnRlclxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYE5vIGFjY291bnQgd2l0aCB0aGF0IGVtYWlsLmAgaWYgZW1haWwgYWRkcmVzcyBkb2Vzbid0IGNvcnJlc3BvbmQgdG8gYW4gZXhpc3RpbmcgdXNlclxuICAgKiAtIGVycm9yIDQyMiBmb3Igb3RoZXIgc2VydmVyIGVycm9yc1xuICAgKi9cbiAgZm9yZ2V0UGFzc3dvcmQoYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9iYXNlVXJsICsgJ2ZvcmdldC1wYXNzd29yZCcsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHJlc2V0IGEgdXNlcidzIHBhc3N3b3JkIHVzaW5nIHRoZSBjcmVkZW50aWFsc1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gY3JlZGVudGlhbHMgLSBpbmZvIG5lZWRlZCB0byByZXNldCBwYXNzd29yZDogYHBhc3N3b3JkLCBgY29uZmlybVBhc3N3b3JkYCwgYW5kIGB0b2tlbmBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBJZiBzdWNjZXNzZnVsLCBzZW5kcyBzdWNjZXNzIG1lc3NhZ2UgYFBhc3N3b3JkcyBoYXMgYmVlbiByZXNldGAuXG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgSW52YWxpZCB0b2tlbmAgaWYgdG9rZW4gZG9lc24ndCBleGlzdFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYFRva2VuIGhhcyBleHBpcmVkYCBmb3IgdmFsaWQgdG9rZW5zIGJ1dCB1c2VyIHRvb2sgdG9vIGxvbmcgdG8gYXR0ZW1wdCB0byByZXNldFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgZm9yIGFsbCBvdGhlciBlcnJvcnNcbiAgICovXG4gIHJlc2V0UGFzc3dvcmQoY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8YW55PntcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fYmFzZVVybCArICdyZXNldC1wYXNzd29yZCcsIGNyZWRlbnRpYWxzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZS50cyIsImltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BEYXRhIHtcbiAgZGF0YTogYW55O1xuICBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xuICAvL25hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERyb3BTZXJ2aWNlRmFjdG9yeSgpOiBTZWxlY3REcm9wU2VydmljZSB7XG4gIHJldHVybiBuZXcgU2VsZWN0RHJvcFNlcnZpY2UoKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BTZXJ2aWNlIHtcbiAgLy8gYWxsb3dlZCBkcm9wIHpvbmVzP1xuICBjdXJTb3VyY2U6IHN0cmluZztcbiAgZGF0YTogYW55O1xuICBvblN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPFNlbGVjdERyb3BEYXRhPjtcbiAgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgZWxlbTogSFRNTEVsZW1lbnQ7XG5cbiAgZGVzZWxlY3QoKXtcbiAgICB0aGlzLmN1clNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9uU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcbiAgICB0aGlzLnJlbW92ZUVsZW1DbGFzcygpO1xuICAgIHRoaXMuZWxlbT1udWxsO1xuICB9XG5cbiAgc2VsZWN0KHNvdXJjZU5hbWU6IHN0cmluZywgZGF0YTogYW55LCBodG1sZWxlbWVudDogSFRNTEVsZW1lbnQpe1xuICAgIHRoaXMuY3VyU291cmNlID0gc291cmNlTmFtZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5lbGVtID0gaHRtbGVsZW1lbnQ7XG4gICAgaWYodGhpcy5lbGVtKVxuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICB9XG5cbiAgcmVtb3ZlRWxlbUNsYXNzKCk6IHZvaWR7XG4gICAgaWYodGhpcy5lbGVtKVxuICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3Auc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyB3aGljaCBjb21tdW5pY2F0ZSB0byBiYWNrZW5kIHRvIGFsbG93XG4gKiB1c2VycyB0byB1cGRhdGUgdGhlaXIgcHJvZmlsZSBhbmQvb3IgY2hhbmdlIHRoZSBwYXNzd29yZFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBMZWFkaW5nIGJhY2tlbmQgdXJsIHBhdGhcbiAgICovXG4gIHByaXZhdGUgX2Jhc2VVcmw6IHN0cmluZyA9ICcvYXBpL3VzZXJzLyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KXt9XG5cbiAgLyoqXG4gICAqIEVkaXQgZGV0YWlscyBhYm91dCB0aGUgdXNlciBwcm9maWxlIGluY2x1ZGluZ1xuICAgKiAxLiBObWVcbiAgICogMi4gRW1haWwgYWRkcmVzc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJRCBvZiB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHthbnl9IGRldGFpbHMgdXNlciBkZXRhaWxzIHRvIHVwZGF0ZSB3aXRoXG4gICAqIGV4aXNpdGluZyBpbmZvcm1hdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxVc2VyPn0gLSBUaGUgdXBkYXRlZCB1c2VyIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgZXJyb3IgXCJVc2VyIGRvZXMgbm90IGV4aXN0XCIgaWYgbm9uLWV4aXN0YW50IHVzZXJcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGVkaXRQcm9maWxlKHVzZXJJZDogbnVtYmVyLCBkZXRhaWxzOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXI+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLl9iYXNlVXJsICsgdXNlcklkLCBkZXRhaWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHVzZXIncyBwYXNzd29yZCBvbmNlIGFscmVhZHkgc2lnbmVkIGluXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklEIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7YW55fSBjcmVkZW50aWFscyAtIHBhc3N3b3JkIGluZm9ybWF0aW9uXG4gICAqIC0gaW5jbHVkZXM6IFwicGFzc3dvcmRcIiAob2xkIHBhc3N3b3JkKSBhbmQgXCJuZXdQYXNzd29yZFwiICAocGFzc3dvcmQgdG8gdXBkYXRlIHRvKVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxVc2VyPn0gLSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdXNlciBqdXN0IHVwZGF0ZWRcbiAgICogLSBvciBlcnJvciBcIlVzZXIgZG9lcyBub3QgZXhpc3RcIiBpZiBub24tZXhpc3RhbnQgdXNlclxuICAgKiAtIG9yIGVycm9yIFwiSW5jb3JyZWN0IHBhc3N3b3JkXCIgaWYgd3Jvbmcgb2xkIHBhc3N3b3JkXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICB1cGRhdGVQYXNzd29yZCh1c2VySWQ6IG51bWJlciwgY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8VXNlcj57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KHRoaXMuX2Jhc2VVcmwgKyB1c2VySWQgKyAnL3VwZGF0ZS1wYXNzd29yZCcsIGNyZWRlbnRpYWxzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb3Vyc2UsIFN0dWRlbnQsIEFkbWluU3R1ZGVudCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyByZWxhdGVkIHRvIGdldHRpbmcgY291cnNlIGluZm9ybWF0aW9uIGZyb20gdGhlIGJhY2sgZW5kIHNlcnZlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ291cnNlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfYmFzZVVSTCA9ICcvYXBpL2FkbWluJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBjb3Vyc2VzIGRlcGVuZGluZyBpZiB1c2VyXG4gICAqIGlzIGEgZnVsbCBhZG1pbiBvciBpbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIGRhdGFiYXNlIHVzZXIgSUQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENvdXJzZVtdPn0gLSBXaGVuIHN1Y2Nlc3NmdWwgYW5kIGBhZG1pbmAsIGxpc3Qgb2YgYWxsIGNvdXJzZXNcbiAgICogLSBXaGVuIHN1Y2Nlc3NmdWwgYW5kIGBpbnN0cmAsIGxpc3Qgb2YgY291cnNlcyBpbiB3aGljaCB1c2VyIGlzIGFuIGluc3RydWN0b3IgZm9yXG4gICAqIC0gb3IgZXJyb3IgXCJObyBjb3Vyc2VzIGZvdW5kXCIgaWYgbm8gY291cnNlcyB0byBsaXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGxpc3RDb3Vyc2VzKGFkbWluSWQ6IG51bWJlcik6IE9ic2VydmFibGU8Q291cnNlW10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PENvdXJzZVtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgY291cnNlIHdpdGggbG9nZ2VkIGluIHVzZXIgYXMgaW5zdHJ1Y3RvciBhbmRcbiAgICogZGV0YWlscyBzcGVjaWZpZWQgaW4gYGJvZHlgXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7YW55fSBib2R5IGNvdXJzZSBkZXRhaWxzIGluY2x1ZGluZyBgY291cnNlTnVtYCBhbmQgYGRlc2NyaXB0aW9uYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSAtIHRoZSBuZXdseSBjcmVhdGVkIGNvdXJzZSBpZiBzdWNjZXNzZnVsXG4gICAqIC0gb3IgZXJyb3IgbWVzc2FnZSBmb3Igc2VydmVyL2RhdGFiYXNlIGVycm9yc1xuICAgKi9cbiAgY3JlYXRlQ291cnNlKGFkbWluSWQ6IG51bWJlciwgYm9keTogYW55KTogT2JzZXJ2YWJsZTxDb3Vyc2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAucG9zdDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlc2AsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhIHNwZWNpZmljIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyICh3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHIpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2UgdG8gZ2V0IGluZm9ybWF0aW9uIGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSAtIHRoZSBjb3Vyc2UgaW5mb3JtYXRpb24gaW5jbHVkaW5nIGBjb3Vyc2VOdW1gLCBgZGVzY3JpcHRpb25gLCBhbmQgYGluc3RydWN0b3JzYFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldENvdXJzZShhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb3Vyc2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PENvdXJzZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBzdHVkZW50cyBpbiBhIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgdGhlIGNvdXJzZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTdHVkZW50W10+fSAtIGxpc3Qgb2Ygc3R1ZGVudHMgZWFjaCB3aXRoIHByb3BlcnRpZXMgYGZpcnN0TmFtZWAsIGBsYXN0TmFtZWAsIGB1c2VySWRgLCBgYWNjZXNzR3JhbnRlZGAsIGFuZCBgZW1haWxgXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIG1lc3NhZ2UgZm9yIHNlcnZlci9kYXRhYmFzZSBlcnJvcnNcbiAgICovXG4gIGdldFN0dWRlbnRzKGFkbWluSWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0dWRlbnRbXT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQ8U3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L3N0dWRlbnRzYCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBlZGl0aW5nIGEgY291cnNlLCB1c2VyIGlzIGFibGUgdG8gYWRkIG5ldyBpbnN0cnVjdG9ycy4gVGhpcyBtZXRob2QgcHJvZHVjZXMgdGhlIGxpc3Qgb2YgcG9zc2libGUgaW5zdHJ1Y3RvcnMgdGhhdCBjb3VsZCBiZSBhZGRlZFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2Ugd2UgYXJlIGVkaXRpbmdcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50W10+fSAtIGxpc3Qgb2YgcG90ZW50aWFsIGluc3R1Y3RvcnMgd2l0aCBwcm9wZXJ0aWVzIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcklkYCwgYW5kIGByb2xlYFxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldFBvc3NpYmxlSW5zdHJ1Y3RvcnMoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZyk6IE9ic2VydmFibGU8QWRtaW5TdHVkZW50W10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PEFkbWluU3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L2luc3RydWN0b3JzYCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIHVzZXIgYXMgYW4gaW5zdHJ1Y3RvciBvZiB0aGUgY291cnNlIGFuZCBjaGFuZ2UgdGhlIG5ldyBpbnN0cnVjdG9yJ3Mgcm9sZSB0byBgaW5zdHJgIGlmIG5lY2Vzc2FyeVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciB0byBhZGQgaW5zdHJ1Y3RvciBmb3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld0luc3RySWQgdXNlcklkIG9mIHVzZXIgdG8gYWRkIGFzIGluc3RydWN0b3Igb2YgdGhpcyBjb3Vyc2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB0aGUgdXBkYXRlZCBjb3Vyc2UgaW5mb3JtYXRpb25cbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgaWYgcHJvYmxlbSB1cGRhdGluZyB0aGUgY291cnNlXG4gICAqIC0gb3IgZXJyb3IgaWYgcHJvYmxlbSB1cGRhdGluZyB0aGUgbmV3IGluc3RydWN0b3Igcm9sZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgYWRkSW5zdHJ1Y3RvcihhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nLCBuZXdJbnN0cklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPENvdXJzZT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAucG9zdDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlcy8ke2NvdXJzZU51bX0vaW5zdHJ1Y3RvcnMvJHtuZXdJbnN0cklkfWAsIHtpbnN0cnVjdG9yOiB0cnVlfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGNvdXJzZSBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge2FueX0gYm9keSB1cGRhdGVkIGNvdXJzZSBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2U+fSAtIHVwZGF0ZWQgY291cnNlIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZWRpdENvdXJzZShhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nLCBib2R5OiBhbnkpOiBPYnNlcnZhYmxlPENvdXJzZT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5wb3N0PENvdXJzZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfWAsIGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgY291cnNlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2UgdG8gZGVsZXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IC0gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvdXJzZSBqdXN0IGRlbGV0ZWRcbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGRlbGV0ZUNvdXJzZSh1c2VySWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19YCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFsbCBvZiB0aGUgc3R1ZGVudHMgaW4gdGhlIGNvdXJzZTsgdXNlZnVsIGZvciBidWxrIGRlbGV0aW9uc1xuICAgKiB3aGVuIGEgY291cnNlIGlzIG92ZXJcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciB3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdXJzZU51bSBjb3Vyc2UgbnVtYmVyIG9mIGNvdXJzZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIGxpc3Qgb2Ygc3R1ZGVudHMganVzdCBkZWxldGVkXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBkZWxldGVTdHVkZW50cyh1c2VySWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L3N0dWRlbnRzYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjZW5hcmlvIHN0YXR1cyAoYWthIGFjY2VzcyBncmFudGVkKSBmb3IgYSBzY2VuYXJpbyBmb3IgYWxsIHN0dWRlbnRzIGluIGEgY291cnNlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuQ29kZSBvZiBzY2VuYXJpbyBvZiBpbnRlcmVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTdHVkZW50W10+fSAtIGxpc3Qgb2Ygc3R1ZGVudHMgaW4gY291cnNlIGVhY2ggd2l0aCBwcm9wZXJ0aWVzIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcklkYCwgYW5kIGBzdGF0dXNgXG4gICAqIC0gb3IgXCJubyBzdHVkZW50cyBmb3VuZFwiIGlmIG5vIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2VcbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ2V0U2NlbmFyaW9TdGF0dXMoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZywgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0dWRlbnRbXT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQ8U3R1ZGVudFtdPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19LyR7c2NlbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIGNvdXJzZSBudW1iZXJzIGZvciBhbGwgYXZhaWxhYmxlIGNvdXJzZXNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBsaXN0IG9mIGNvdXJzZXMgd2l0aCBwcm9wZXJ0aWVzIGBjb3Vyc2VOdW1gIGFuZCBgaWRgXG4gICAqIC0gb3IgXCJObyBjb3Vyc2VzIGZvdW5kXCIgZXJyb3IgaWYgbm8gY291cnNlcyBmb3VuZFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ2V0Q291cnNlTGlzdCgpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQoYC9hcGkvY291cnNlc2ApO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJlc29sdmUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi9zY2VuYXJpby5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zY2VuYXJpby5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFJlc29sdmVzIGEgcm91dGUgVVJMIHRvIGdldCB0aGUgc2NlbmFyaW8gaWQgKGZyb20gdGhlIHVybClcbiAqIHRoZW4gdXNlcyB0aGF0IHRvIGdldCB0aGUgc2NlbmFyaW8gbGFiZWwgdXNpbmcgc2NlbmFyaW8gc2VydmljZVxuICpcbiAqIFRoaXMgaXMgdXNlZCB0byBnZW5lcmF0ZSBodW1hbi1yZWFkYWJsZSBicmVhZGNydW1iIGxhYmVsc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9SZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8U2NlbmFyaW8+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCByZXF1aXJlZCBieSBpbXBsZW1lbnRhdGlvblxuICAgKiBCYXNlZCBvbiB0aGUgaWRlbnRpZmllZCBzY2VuQ29kZSBmcm9tIHRoZSBVUkwsIHVzZSB0aGUgc2VydmljZSBnbyBnZXQgdGhlIHNjZW5hcmlvIGRldGFpbHMgYW5kIHNlbmQgYmFjayB0byBjbGllbnRcbiAgICpcbiAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSByb3V0ZSBjdXJyZW50IHJvb3QgVVJMXG4gICAqIEBwYXJhbSB7Um91dGVyU3RhdGVTYW5wc2hvdH0gY3VycmVudCByb3V0ZSBzbmFwc2hvdFxuICAgKlxuICAgKiBAcmV0dXJucyB7U2NlbmFyaW99IC0gVGhlIHNjZW5hcmlvIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIGRvIHRoZSB1cmwgcGFyYW0gSUQgaWYgaXQgZXhpc3RzXG4gICAtIG9yIGVtcHR5IHNjZW5hcmlvIGlmIGl0IGRvZXMgbm90IGV4aXN0XG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPFNjZW5hcmlvPiB7XG5cbiAgICBjb25zdCBzY2VuQ29kZSA9IHJvdXRlLnBhcmFtc1snc2NlbklkJ107XG5cbiAgICBpZiAoc2NlbkNvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0U2NlbmFyaW8oc2NlbkNvZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8U2NlbmFyaW8+KCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5yZXNvbHZlci50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFdoZW4gVVJMIGdvZXMgdG8gYSBwYWdlIHRoYXQgZG9lc24ndCBleGlzdDtcbiAqIFRoaXMgaXMgc2ltcGxlLCB2aXN1YWwgY29tcG9uZW50IG5lZWRlZCB0byBnZXQgdGhlIHRlbXBsYXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2Utbm90LWZvdW5kJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGFnZS1ub3QtZm91bmQudGVtcGxhdGUuaHRtbCcpLFxufSlcblxuZXhwb3J0IGNsYXNzIFBhZ2VOb3RGb3VuZENvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcigpe31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaGUgaG9tZSBsYW5kaW5nIHBhZ2Ugd2hlbiBnb2luZyB0byB0aGUgd2Vic2l0ZVxuICpcbiAqIE1haW5seSBhIHZpZXcgY29tcG9uZW50LCBidXQgc29tZSBhc3BlY3RzIGFyZSBkZXBlbmRlbnRcbiAqIG9uIGlmIGEgdXNlciBpcyBsb2dnZWQgaW4gYW5kIHRoZSB1c2VyIHJvbGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG9tZScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2hvbWUudGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2hvbWUuc3R5bGUuY3NzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuICAvKipcbiAgICogVGhlIGxvZ2dlZCBpbiB1c2VyLCBpZiBhbnlcbiAgICovXG4gIHByaXZhdGUgdXNlcjogVXNlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSl7fVxuXG4gIC8qKlxuICAgKiBXaGVuIGludGlhbGl6aW5nIGNvbXBvbmVudCwgZ2V0IHRoZSBsb2dnZWQgaW4gdXNlciwgaWYgYW55XG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMudXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIHRoZSBjb21wb25lbnQsIHVuc2V0IHRoZSB1c2VyIHZhcmlhYmxlXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMudXNlciA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlbGVjdERyb3BTZXJ2aWNlLCBTZWxlY3REcm9wRGF0YSB9IGZyb20gJy4vc2VsZWN0LWRyb3Auc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3NlbGVjdC1kcm9wcGFibGVdJ30pXG5leHBvcnQgY2xhc3MgU2VsZWN0RHJvcENvbXBvbmVudCB7XG4gICAgX2VsZW06IEhUTUxFbGVtZW50O1xuICAgIF9kZWZhdWx0Q3Vyc29yOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9zZWxlY3RFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2V0IHNlbGVjdEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zZWxlY3RFbmFibGVkID0gISFlbmFibGVkO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0RW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdEVuYWJsZWQ7XG4gICAgfVxuICAgIHByaXZhdGUgX2Ryb3BEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNldCBkcm9wRGlzYWJsZWQoZGlzYWJsZTogYm9vbGVhbil7XG4gICAgICB0aGlzLl9kcm9wRGlzYWJsZWQgPSAhIWRpc2FibGU7XG4gICAgfVxuICAgIGdldCBkcm9wRGlzYWJsZWQoKTogYm9vbGVhbntcbiAgICAgIHJldHVybiB0aGlzLl9kcm9wRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgIEBJbnB1dChcInNlbGVjdEVuYWJsZWRcIikgc2V0IHNlbGVjdGFibGUodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAgdGhpcy5zZWxlY3RFbmFibGVkID0gISF2YWx1ZTtcbiAgICAgfVxuICAgICBASW5wdXQoXCJkcm9wRGlzYWJsZWRcIikgc2V0IHVuZHJvcHBhYmxlKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgIHRoaXMuZHJvcERpc2FibGVkID0gISF2YWx1ZTtcbiAgICAgfVxuXG4gICAgIEBJbnB1dCgpIGFsbG93RHJvcDogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW47XG4gICAgIEBJbnB1dChcInNlbGVjdERhdGFcIikgZGF0YTogYW55O1xuICAgICBASW5wdXQoKSBzb3VyY2VOYW1lOiBzdHJpbmc7XG5cbiAgICAgQE91dHB1dCgpIG9uRHJvcFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxTZWxlY3REcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdERyb3BEYXRhPigpO1xuQE91dHB1dChcIm9uU3VjY2Vzc1wiKSBvblN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPFNlbGVjdERyb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RHJvcERhdGE+KCk7XG5AT3V0cHV0KCkgb25FcnJvcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgX3NlbGVjdERyb3BTZXJ2aWNlOiBTZWxlY3REcm9wU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gICAgICAgIC8vIEFzc2lnbiBkZWZhdWx0IGN1cnNvciB1bmxlc3Mgb3ZlcnJpZGRlblxuICAgICAgICB0aGlzLl9kZWZhdWx0Q3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpZighdGhpcy5kcm9wRGlzYWJsZWQgJiYgIXRoaXMuc2VsZWN0RW5hYmxlZClcbiAgICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuX2RlZmF1bHRDdXJzb3I7ICAvLyBzZXQgZGVmYXVsdCBjdXJzb3Igb24gb3VyIGVsZW1lbnRcblxuICAgICAgICB0aGlzLl9lbGVtLm9ubW91c2VlbnRlciA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbGVtLm9ubW91c2VvdXQgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLl9vbk1vdXNlT3V0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGljayBldmVudHMgLSBib3RoIHNlbGVjdCBhbmQgZHJvcFxuICAgICAgdGhpcy5fZWxlbS5vbmNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PntcbiAgICAgICAgdGhpcy5fb25DbGljayhldmVudCk7XG4gICAgICB9XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgLy8gTmVjZXNzYXJ5LiBBbGxvd3MgdXMgdG8gZHJvcC5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgLy8gaWYgbm90aGluZyBzZWxlY3RlZCBhbmQgc2VsZWN0RW5hYmxlZCAtPiBzZWxlY3RcbiAgICAgIGlmKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmlzU2VsZWN0ZWQgPT09IGZhbHNlICYmIHRoaXMuc2VsZWN0RW5hYmxlZCl7XG4gICAgICAgIC8vdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1vYmplY3QnKTtcbiAgICAgICAgdGhpcy5fb25TZWxlY3RDYWxsYmFjayhldmVudCk7XG4gICAgfSAvLyBpZiB3ZSByZS1jbGlja2VkIHRoZSBvYmplY3QgLT4gZGVzZWxlY3RcbiAgICBlbHNlIGlmKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmlzU2VsZWN0ZWQgJiYgdGhpcy5zb3VyY2VOYW1lID09PSB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5jdXJTb3VyY2Upe1xuICAgICAgICAvL3RoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtb2JqZWN0Jyk7XG4gICAgICAgIHRoaXMuX29uRGVzZWxlY3RDYWxsYmFjayhldmVudCk7XG4gICAgfSAvLyBpZiB3ZSBjYW4gZHJvcCwgdGhlbiBkcm9wXG4gICAgZWxzZSBpZih0aGlzLl9pc0Ryb3BBbGxvd2VkKGV2ZW50KSl7XG4gICAgICAvL3RoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtb2JqZWN0Jyk7XG4gICAgICB0aGlzLl9vbkRyb3BDYWxsYmFjayhldmVudCk7XG4gICAgfSAvLyBpZiBzb21ldGhpbmcgc2VsZWN0ZWQsIHNlbGVjdCB0aGlzIGluc3RlYWRcbiAgICBlbHNlIGlmKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmlzU2VsZWN0ZWQgJiYgdGhpcy5zZWxlY3RFbmFibGVkKXtcbiAgICAgIC8vdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1vYmplY3QnKTtcbiAgICAgIC8vIHVwZGF0ZSB0byByZW1vdmUgc2VsZWN0ZWQtY2xhc3Mgb24gcHJldmlvdXNseSBzZWxlY3RlZCBlbGVtXG4gICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5yZW1vdmVFbGVtQ2xhc3MoKTtcbiAgICAgIHRoaXMuX29uU2VsZWN0Q2FsbGJhY2soZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vbkVycm9yQ2FsbGJhY2soZXZlbnQpO1xuICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbk1vdXNlRW50ZXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZygnb25kcmFnb3Zlci5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgnZHJvcC1vYmplY3QnKTtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBpcyBvdmVyIHRoZSBzYW1lIHNvdXJjZSBlbGVtZW50IC0gZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOZWNlc3NhcnkuIEFsbG93cyB1cyB0byBkcm9wLlxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIHByaXZhdGUgX29uTW91c2VPdXQoZXZlbnQ6IEV2ZW50KXtcbiAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcC1vYmplY3QnKTtcbiAgICB9XG5cbiAgICBkZXRlY3RDaGFuZ2VzICgpIHtcbiAgICAgICAgLy8gUHJvZ3JhbW1hdGljYWxseSBydW4gY2hhbmdlIGRldGVjdGlvbiB0byBmaXggaXNzdWUgaW4gU2FmYXJpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCB0aGlzLl9jZHIgJiYgISh0aGlzLl9jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkICkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDI1MCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNEcm9wQWxsb3dlZChldmVudDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3REcm9wU2VydmljZS5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCwgaWYgYGFsbG93RHJvcGAgaXMgc2V0LCBjYWxsIGl0IHRvIGRldGVybWluZSB3aGV0aGVyIHRoZVxuICAgICAgICAgICAgaWYodGhpcy5kcm9wRGlzYWJsZWQpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dEcm9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dEcm9wKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ByZXZlbnRBbmRTdG9wKGV2ZW50OiBFdmVudCk6IGFueSB7XG4gICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gIF9vbkVycm9yQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkVycm9yLmVtaXQoJ1RoZXJlIHdhcyBhbiBlcnJvcicpO1xuICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRlc2VsZWN0KCk7XG4gIH1cblxuICAgIF9vbkRyb3BDYWxsYmFjayggZXZlbnQ6IE1vdXNlRXZlbnQgKXtcbiAgICAgIGxldCBkYXRhVHJhbnNmZXIgPSAoZXZlbnQgYXMgYW55KS5kYXRhVHJhbnNmZXI7XG4gICAgICBpZih0aGlzLl9zZWxlY3REcm9wU2VydmljZS5pc1NlbGVjdGVkKXtcbiAgICAgICAgdGhpcy5vbkRyb3BTdWNjZXNzLmVtaXQoe2RhdGE6IHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XG4gICAgICAgIGlmKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLm9uU3VjY2Vzc0NhbGxiYWNrKXtcbiAgICAgICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5vblN1Y2Nlc3NDYWxsYmFjay5lbWl0KHtkYXRhOiB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5kYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRlc2VsZWN0KCk7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfb25EZXNlbGVjdENhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KXtcbiAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRlc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgX29uU2VsZWN0Q2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYoIXRoaXMuc291cmNlTmFtZSAmJiAodGhpcy5kYXRhLnNvdXJjZSB8fCB0aGlzLmRhdGEuc3JjKSl7XG4gICAgICAgICAgdGhpcy5zb3VyY2VOYW1lID0gdGhpcy5kYXRhLnNvdXJjZSA/IHRoaXMuZGF0YS5zb3VyY2UgOiB0aGlzLmRhdGEuc3JjO1xuICAgICAgICB9IGVsc2UgaWYoIXRoaXMuc291cmNlTmFtZSl7XG4gICAgICAgICAgdGhpcy5zb3VyY2VOYW1lID0gJydcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmVsZW0gPSB0aGlzLl9lbGVtO1xuICAgICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5zZWxlY3QodGhpcy5zb3VyY2VOYW1lLCB0aGlzLmRhdGEsIHRoaXMuX2VsZW0pO1xuICAgICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5vblN1Y2Nlc3NDYWxsYmFjayA9IHRoaXMub25TdWNjZXNzQ2FsbGJhY2s7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlQ2hpbGQsIFJvdXRlciwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBHdWFyZCB0aGUgYWRtaW4gcGF0aHMgc28gb25seSB1c2VycyB3aXRoIGBhZG1pbmAgb3IgYGluc3RyYFxuICogcm9sZSBjYW4gYWNjZXNzIHRoZSByb3V0ZVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlQ2hpbGQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHVzZXIgY2FuIGFjdGl2YXRlIHRoZSByb3V0ZSBiYXNlZCBvbiB0aGVpciByb2xlXG4gICAqXG4gICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gcm91dGUgLSByb3V0ZSBVUkwgYXQgdGhlIG1vbWVudFxuICAgKiBAcGFyYW0ge1JvdXRlclN0YXRlU25hcHNob3R9IHN0YXRlIC0gcm91dGVyIHN0YXRlOyBuZWVkZWQgdG8gaW1wbGVtZW50IGludGVyZmFjZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBgdHJ1ZWAgaWYgdXNlciBpcyBgYWRtaW5gIG9yIGBpbnN0cmBcbiAgICogLSBgZmFsc2VgIGlmIHVzZXIgaXMgb25seSBhIGBzdHVkZW50YFxuICAgKi9cbiAgY2FuQWN0aXZhdGVDaGlsZChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSBzdGF0ZS51cmw7XG5cbiAgICBsZXQgcm9sZTogYm9vbGVhbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5jYW5BY2Nlc3NBZG1pbigpO1xuICAgIGlmKHJvbGUpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5yZWRpcmVjdFVybCA9IHVybDtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9ub3QtYXV0aCddKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLmd1YXJkLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEVudHJhbmNlIGNvbXBvbmVudCBmb3IgYWRtaW4gZmVhdHVyZXNcbiAqIE1haW5seSwgaXQgaXMgYSBjYXJkIHRoYXQgYWxsb3dzIG5hdmlnYXRpb24gYmV0d2VlbiBjb3Vyc2UtcmVsYXRlZFxuICogaW5mbyBhbmQgc3R1ZGVudC1yZWxhdGVkIGluZm9cbiAqIENvbnRlbnQgb2YgdGhlIGNhcmQgaXMgZGV0ZXJtaW5lZCBieSByb3V0ZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRtaW4nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hZG1pbi50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZG1pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBMb2dnZWQgaW4gdXNlclxuICAgKi9cbiAgcHJpdmF0ZSBhZG1pblVzZXI6IFVzZXI7XG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICApe31cblxuICAvKipcbiAgICogV2hlbiBpbml0aWFsaXppbmcgdGhlIGNvbXBvbmVudCwgZ2V0IHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXIncyBpbmZvcm1hdGlvblxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmFkbWluVXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSB2aWV3IGNvbXBvbmVudCB0aGF0IGlzIHZpc2libGUgd2hlbiBnb2luZyB0byB0aGUgbWFpbiBhZG1pbiBwYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkbWluLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluSG9tZUNvbXBvbmVudHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBiYXNpYyB2aWV3IGNvbXBvbmVudCB3aGVuIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGFuIGFkbWluXG4gKiBwYWdlIGJ1dCBkb2VzIG5vdCBoYXZlIGFkbWluIGFjY2Vzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3QtYXV0aCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL25vdC1hdXRoLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIE5vdEF1dGhDb21wb25lbnR7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuLyoqXG4gKiBDb21wb25lbnQgZm9yIGV4aXN0aW5nIHVzZXJzIHRvIHNpZ24gaW4gYW5kIGJlIGFibGVcbiAqIHRvIGFjY2VzcyB0aGVpciBzY2VuYXJpb3MvZnJpZGdlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ25pbicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2lnbmluLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogUG90ZW50aWFsIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBMb2dpbiBjcmVkZW50aWFscyBmb3IgdXNlciBpbmNsdWRpbmcgYHVzZXJuYW1lYCAoZW1haWwpIGFuZCBgcGFzc3dvcmRgXG4gICAqL1xuICBwcml2YXRlIGNyZWRlbnRpYWxzOiBGb3JtR3JvdXA7XG4gIC8qKlxuICAgKiBBdXRoZW50aWNhdGlvbiBzZXJ2aWNlIHN1YnNjcmlwdGlvbiBmcm9tIHdoZW4gdHJ5aW5nIHRvIGxvZ2luIHRoZSB1c2VyXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cblxuICAvKipcbiAgKiBJbnRpYWxpemUgdGhlIGZvcm0gZ3JvdXAgb24gY29tcG9uZW50IGNyZWF0aW9uXG4gICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIHVzZXJuYW1lOiBuZXcgRm9ybUNvbnRyb2woJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdKSxcbiAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKSxcbiAgfSk7XG4gIH1cblxuICBnZXQgdXNlcm5hbWUoKSB7IHJldHVybiB0aGlzLmNyZWRlbnRpYWxzLmdldCgndXNlcm5hbWUnKTt9XG4gIGdldCBwYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KCdwYXNzd29yZCcpO31cblxuICAvKipcbiAgICogVXBvbiBmb3JtIHN1Ym1pc3Npb24sIGF0dGVtcHRzIHRvIHNpZ24gaW4gdGhlIHVzZXIgd2l0aCBgY3JlZGVudGlhbHNgICh1c2luZyB0aGUgc2VydmljZSlcbiAgICpcbiAgICogV2hlbiBzdWNjZXNzZnVsLCBuYXZpZ2F0ZSB0b1xuICAgKiAtIHRoZSByZWRpcmVjdCBVUkwgaWYgc2V0ICh3aGVuIG5vbi1sb2dnZWQgaW4gdXNlciB0cmllcyB0byBhY2Nlc3MgYSBwYWdlIHRoYXQgcmVxdWlyZWQgbG9nZ2luZyBpbilcbiAgICogLSB0aGUgaG9tZSBwYWdlIGlmIHJlZGlyZWN0IFVSTCBpcyBub3Qgc2V0XG4gICAqXG4gICAqIFdoZW4gdW5zdWNjZXNzZnVsLCBkaXNwbGF5IGVycm9yIG1lc3NhZ2VcbiAgICovXG4gICAgc2lnbmluKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgICAgIC5zaWduaW4odGhpcy5jcmVkZW50aWFscy52YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2Uuc2V0VXNlcihyZXN1bHQpO1xuICAgICAgICAgIGxldCByZWRpcmVjdCA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5yZWRpcmVjdFVybCA/IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5yZWRpcmVjdFVybCA6ICcvJztcbiAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3JlZGlyZWN0XSk7XG4gICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICogR2V0IHRoZSBmb3JtIGlucHV0IENTUyBjbGFzc2VzIHN0eWxpbmcgdG8gcHJvdmlkZSBmZWVkYmFjayB0byB1c2VyXG4gICogd2hldGhlciBpbnB1dCBpcyB2YWxpZCBvbiBub3RcbiAgKlxuICAqIEFsd2F5cyBoYXMgYC5mb3JtLWNvbnRyb2xgIHRoZW4gYC5pcy1pbnZhbGlkYCBvciBgLmlzLXZhbGlkYCBhcmUgc2V0IG9uY2UgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZFxuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IGZvcm1MYWJlbCAtIGZvcm0gZ3JvdXAgbmFtZSBsb29rLXVwIGlucHV0IHN0YXRlXG4gICpcbiAgKiBAcmV0dXJucyB7T2JqZWN0fSBDU1MgY2xhc3NlcyB3aGljaCBhcHBseSB0byB0aGlzIGlucHV0XG4gICovXG4gIGdldElucHV0Q2xhc3MoZm9ybUxhYmVsOiBzdHJpbmcpIHtcbiAgICBsZXQgb3V0ID0geydmb3JtLWNvbnRyb2wnOiB0cnVlfTtcbiAgICBpZih0aGlzLmNyZWRlbnRpYWxzICYmIHRoaXMuY3JlZGVudGlhbHMuZ2V0KGZvcm1MYWJlbCkpe1xuICAgICAgbGV0IGFjID0gdGhpcy5jcmVkZW50aWFscy5nZXQoZm9ybUxhYmVsKTtcbiAgICAgIGlmKGFjLmRpcnR5IHx8IGFjLnRvdWNoZWQpe1xuICAgICAgICBvdXRbJ2lzLWludmFsaWQnXSA9IGFjLmludmFsaWQ7XG4gICAgICAgIG91dFsnaXMtdmFsaWQnXSA9IGFjLnZhbGlkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXNjdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2UgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYWRtaW4vY291cnNlL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcidcbmltcG9ydCB7IHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uZmlybS1wYXNzd29yZC52YWxpZGF0b3InO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGFsbG93cyBuZXcgdXNlcnMgdG8gc2lnbiB1cCB0byB1c2UgQ3JpY2tldC5cbiAqIFVzZXMgZW1haWwgYXMgdXNlcm5hbWUgYW5kIGluY2x1ZGVzIHNldmVyYWwgZXJyb3JcbiAqIGNoZWNrc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpZ251cCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2lnbnVwLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgYmFja2VuZCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogTGlzdCBvZiBjb3Vyc2VzIGF2YWlsYWJsZSB0byBzaWduIHVwIGZvcjtcbiAgICogQWxsIHVzZXJzIG11c3Qgc2VsZWN0IGEgY291cnNlLCBldmVuIGlmIHRoZSBjb3Vyc2UgaXMgXCJOQVwiXG4gICAqL1xuICBwcml2YXRlIGNvdXJzZXM6IHN0cmluZ1tdID0gW107XG4gIC8qKlxuICAgKiBVc2VyIGRldGFpbHMgdXNlZCBmb3Igc2lnbnVwXG4gICAqIC0gYGZpcnN0TmFtZWBcbiAgICogLSBgbGFzdE5hbWVgXG4gICAqIC0gYHVzZXJuYW1lYCAoZW1haWwgYWRkcmVzcylcbiAgICogLSBgY291cnNlYCAoZGF0YWJhc2UgY291cnNlIElEIG5vdCBjb3Vyc2UgbmFtZSlcbiAgICogLSBgcGFzc3N3b3JkYFxuICAgKiAtIGBjb25maXJtUGFzc3dvcmRgXG4gICAqL1xuICBwcml2YXRlIHVzZXI6IEZvcm1Hcm91cDtcbiAgLyoqXG4gICAqIEJvb2xlYW4gc3RhdGUgb2JqZWN0IHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tIG11bHRpcGxlIHNlcnZpY2VzIGVhc2llclxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2NvdXJzZVNlcnZpY2U6IENvdXJzZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgY3JlYXRpb24sIGdldCB0aGUgbGlzdCBvZiBhdmFpbGFibGUgY291cnNlcyBhbmQgb3JkZXIgdGhlbVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnVzZXIgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICdmaXJzdE5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgJ2xhc3ROYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICd1c2VybmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pLFxuICAgICAgJ2NvdXJzZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAncGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSksXG4gICAgICAnY29uZmlybVBhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgcGFzc3dvcmRNYXRjaFZhbGlkYXRvcl0pLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fY291cnNlU2VydmljZS5nZXRDb3Vyc2VMaXN0KClcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLl9yZW9yZGVyQ291cnNlcyhyZXMpO1xuICAgICAgICB0aGlzLmNvdXJzZXMgPSB0bXA7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgdGhpcy5jb3Vyc2VzID0gW107XG4gICAgfSk7XG4gIH1cblxuICAvLyBhY2Nlc3NvcnMgZm9yIGZvcm0gdmFsaWRhdGlvblxuICBnZXQgZmlyc3ROYW1lKCkgeyByZXR1cm4gdGhpcy51c2VyLmdldCgnZmlyc3ROYW1lJyk7IH1cbiAgZ2V0IGxhc3ROYW1lKCkgeyByZXR1cm4gdGhpcy51c2VyLmdldCgnbGFzdE5hbWUnKTsgfVxuICBnZXQgdXNlcm5hbWUoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCd1c2VybmFtZScpOyB9XG4gIGdldCBjb3Vyc2UoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdjb3Vyc2UnKTsgfVxuICBnZXQgcGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdwYXNzd29yZCcpOyB9XG4gIGdldCBjb25maXJtUGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdjb25maXJtUGFzc3dvcmQnKTsgfVxuXG5cbiAgLyoqXG4gICAqIE9yZGVyIHRoZSBjb3Vyc2VzIHNvIHRoZSBcIk5BXCIgY291cnNlIGlzIGF0IHRoZSB0b3BcbiAgICpcbiAgICogQHBhcmFtIHthbnlbXX0gY291cnNlcyBsaXN0IG9mIGN1cnJlbnRseSBhdmFpbGFibGUgY291cnNlczsgZWFjaCBpdGVtIGluIGxpc3QgaGFzIGBjb3Vyc2VOdW1gIGFuZCBgaWRgXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnlbXX0gdGhlIGxpc3Qgb3JkZXJlZCBzbyB0aGUgXCJOQVwiIGNvdXJzZSBpcyBhdCB0aGUgdG9wXG4gICAqL1xuICBwcml2YXRlIF9yZW9yZGVyQ291cnNlcyhjb3Vyc2VzOiBhbnlbXSk6IGFueVtde1xuICAgIGxldCBuYSA9IGNvdXJzZXMuZmlsdGVyKChjKT0+e3JldHVybiBjLmNvdXJzZU51bSA9PT0gJ05BJ30pO1xuICAgIGxldCBvdGhlciA9IGNvdXJzZXMuZmlsdGVyKChjKT0+e1xuICAgICAgcmV0dXJuIGMuY291cnNlTnVtICE9PSAnTkEnXG4gICAgfSk7XG4gICAgcmV0dXJuIG5hLmNvbmNhdChvdGhlcik7XG4gIH1cblxuICAvKipcbiAgICogLSBBdHRlbXB0cyB0byBzaWduIHRoZSB1c2VyIHVwIHdoZW4gdGhleSBzdWJtaXQgdGhlIGZvcm1cbiAgICogLSBJbmNsdWRlcyBlcnJvciBjaGVja3MgZm9yIHNlbGVjdGluZyBhIGNvdXJzZSBhbmQgcGFzc3dvcmRzIG1hdGNoXG4gICAqIC0gV2hlbiBzaWduLXVwIGlzIHN1Y2Nlc3NmdWwsIHNldHMgdGhlIFtsb2dnZWQgaW4gdXNlcl17QGxpbmsgYXV0aGVudGljYXRpb24uc2VydmljZX0gYW5kIG5hdmlnYXRlcyB0byB0aGUgaG9tZSBwYWdlXG4gICAqL1xuICBzaWdudXAoKSB7XG4gICAgICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgLnNpZ251cCh0aGlzLnVzZXIudmFsdWUpXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5zZXRVc2VyKHJlc3VsdCk7XG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKVxuICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICogR2V0IHRoZSBmb3JtIGlucHV0IENTUyBjbGFzc2VzIHN0eWxpbmcgdG8gcHJvdmlkZSBmZWVkYmFjayB0byB1c2VyXG4gICogd2hldGhlciBpbnB1dCBpcyB2YWxpZCBvbiBub3RcbiAgKlxuICAqIEFsd2F5cyBoYXMgYC5mb3JtLWNvbnRyb2xgIHRoZW4gYC5pcy1pbnZhbGlkYCBvciBgLmlzLXZhbGlkYCBhcmUgc2V0IG9uY2UgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZFxuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IGZvcm1MYWJlbCAtIGZvcm0gZ3JvdXAgbmFtZSBsb29rLXVwIGlucHV0IHN0YXRlXG4gICpcbiAgKiBAcmV0dXJucyB7T2JqZWN0fSBDU1MgY2xhc3NlcyB3aGljaCBhcHBseSB0byB0aGlzIGlucHV0XG4gICovXG4gIGdldElucHV0Q2xhc3MoZm9ybUxhYmVsOiBzdHJpbmcpIHtcbiAgICBsZXQgb3V0ID0geydmb3JtLWNvbnRyb2wnOiB0cnVlfTtcbiAgICBpZih0aGlzLnVzZXIgJiYgdGhpcy51c2VyLmdldChmb3JtTGFiZWwpKXtcbiAgICAgIGxldCBhYyA9IHRoaXMudXNlci5nZXQoZm9ybUxhYmVsKTtcbiAgICAgIGlmKGFjLmRpcnR5IHx8IGFjLnRvdWNoZWQpe1xuICAgICAgICBvdXRbJ2lzLWludmFsaWQnXSA9IGFjLmludmFsaWQ7XG4gICAgICAgIG91dFsnaXMtdmFsaWQnXSA9IGFjLnZhbGlkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXNjdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgdG8gcHJldmVudCBhIG1lbW9yeSBsZWFrXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuICAvKipcbiAgKiBDdXN0b20gdmFsaWRhdG9yIHRvIGNoZWNrIHRoYXQgaW5wdXQgcGFzc3dvcmQgYW5kIGNvbmZpcm1hdGlvbiBwYXNzd29yZCBhcmUgdGhlIHNhbWVcbiAgKlxuICAqIEBwYXJhbSBhYyB7QWJzdHJhY3RDb250cm9sfSAtIHJlYWN0aXZlIGZvcm0gY29udHJvbCBmb3IgYGNvbmZpcm1QYXNzd29yZGAgaW5wdXRcbiAgKiAtIG11c3QgYmUgcGFydCBvZiBhIEZvcm1Hcm91cCB3aXRoIGFsc28gaGFzIGEgYHBhc3N3b3JkYCBpbnB1dFxuICAqXG4gICogQHJldHVybnMge251bGwgfCBPYmplY3QgfSAtIGBudWxsYCB3aGVuIHBhc3N3b3JkcyBtYXRjaCBvciBiZWZvcmUgZm9ybSBpcyBpbml0aWFsaXplZFxuICAqIC0gYHttaXNtYXRjaDp0cnVlfWAgd2hlbiBwYXNzd29yZHMgZG9uJ3QgbWF0Y2hcbiAgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IoYWM6IEFic3RyYWN0Q29udHJvbCl7XG4gICAgICBsZXQgZmcgPSBhYy5wYXJlbnQ7XG4gICAgaWYoIWZnKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmcuZ2V0KCdwYXNzd29yZCcpLnZhbHVlID09PSBmZy5nZXQoJ2NvbmZpcm1QYXNzd29yZCcpLnZhbHVlID8gbnVsbCA6IHttaXNtYXRjaDogdHJ1ZX07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tcGFzc3dvcmQudmFsaWRhdG9yLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBDb21wb25lbnQgdGhhdCBhIHVzZXIgc2lnbnMgb3V0LiBIYXMgbm8gdmlldy90ZW1wbGF0ZS0tcmVzZXRzXG4gKiB2YXJpYWJsZXMgYW5kIG5hdmlnYXRlIHRvIGhvbWUgcGFnZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWdub3V0JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgU2lnbm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxuICApe31cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGNyZWF0aW9uXG4gICAqIDEuIFNpZ24gb3V0IHVzZXIgb24gc2VydmVyXG4gICAqIDIuIFVuc2V0IFtBdXRoZW50aWNhdGlvblNlcnZpY2Vde0BsaW5rIEF1dGhlbnRpY2F0aW9uU2VydmljZX0gdXNlclxuICAgKiAzLiBSZWRpcmVjdCB0byBob21lIHBhZ2VcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hdXRoU2VydmljZS5zaWdub3V0KClcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2V0VXNlcihudWxsKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25vdXQvc2lnbm91dC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogSWYgdXNlciBmb3JnZXRzIHRoZWlyIHBhc3N3b3JkLCB0aGV5IGNhbiBlbnRlclxuICogdGhlcmUgZW1haWwgYWRkcmVzcy4gSWYgdGhlcmUgaXMgYW4gYWNjb3VudCB3aXRoIHRoZSBlbWFpbCBhZGRyZXNzLFxuICogYW4gZW1haWwgaXMgc2VudCB3aXRoIGEgbGluayB0aGF0IGFsbG93cyB1c2VyIHRvIHJlc2V0IHRoZWlyIHBhc3N3b3JkXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgZm9yIGVudGVyaW5nIGVtYWlsIGFkZHJlc3MgYW5kXG4gKiBpbmZvcm1pbmcgaWYgZW1haWwgYWRkcmVzcyB3YXMgdmFsaWQgYW5kIHJlc2V0ICogcGFzc3dvcmQgZW1haWwgd2FzIHN1Y2Nlc3NmdWxseSBzZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9yZ2V0LXBzd2QnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2ZvcmdldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBQb3NzaWJsZSBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogTWVzc2FnZSB3aGVuIHJlc2V0IHBhc3N3b3JkIGVtYWlsIHdhcyBzdWNjZXNzZnVsbHkgc2VudFxuICAgKi9cbiAgcHJpdmF0ZSBzdWNjZXNzTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBVc2VyJ3MgZW1haWwgdG8gY2hlY2sgaWYgYW4gYWNjb3VudCBleGlzdHNcbiAgICovXG4gIGVtYWlsOiBGb3JtQ29udHJvbDtcbiAgLyoqXG4gICAqIEF1dGhlbnRpY2F0aW9uIHNlcnZpY2Ugc3Vic2NyaXB0aW9uXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBmb3JtIG9uIGNvbXBvbmVudCBjcmVhdGlvblxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmVtYWlsID0gbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pO1xuICB9XG4gIC8qKlxuICAgKiBBZnRlciBzdWJtaXR0aW5nIGZvcm0sIHJlc2V0IF9zdWNjZXNzXyBhbmQgX2Vycm9yXyBtZXNzYWdlcywgc2VuZCBlbWFpbCB0byB0aGUgc2VydmVyLCBhbmQgd2FpdCBmb3IgcmVzcG9uc2VcbiAgICpcbiAgICogLSBJZiBwYXNzd29yZCByZXNldCBlbWFpbCBzdWNjZXNzZnVsbHkgc2V0LCBfc3VjY2Vzc18gbWVzc2FnZSBpcyB1cGRhdGVkXG4gICAqIC0gSWYgdGhlcmUgd2FzIGFuIGVycm9yIChzZXJ2ZXIgZXJyb3IsIGVtYWlsIGRvZXNuJ3QgYmVsb3cgdG8gYW55IHVzZXIpLCBfZXJyb3JfIG1lc3NhZ2UgaXMgc2V0IHdpdGggZGVzY3JpcHRpb24gb2YgdGhlIGVycm9yXG4gICAqL1xuICAgIHNlbmRGb3JnZXQoKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gJyc7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgbGV0IGJvZHkgPSB7ZW1haWw6IHRoaXMuZW1haWwudmFsdWV9O1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgICAgIC5mb3JnZXRQYXNzd29yZChib2R5KVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIC8vIGlmIHN1Y2Nlc3NmdWwsIHNob3VsZCBnZXQgc3VjY2VzcyBtZXNzYWdlXG4gICAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgQ1NTIGNsYXNzIGZvciB0aGUgZW1haWwgaW5wdXQgYmFzZWQgb24gaXQncyB2YWxpZGl0eVxuICAgKlxuICAgKiBBbHdheXMgaGFzIGAuZm9ybS1jb250cm9sYCB0aGVuIGAuaXMtaW52YWxpZGAgb3IgYC5pcy12YWxpZGAgYXJlIHNldCBvbmNlIGlucHV0IGhhcyBiZWVuIHRvdWNoZWRcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gQ1NTIGNsYXNzZXMgd2hpY2ggYXBwbHlcbiAgICovXG4gIGdldElucHV0Q2xhc3MoKXtcbiAgICBsZXQgb3V0ID0geydmb3JtLWNvbnRyb2wnOiB0cnVlfTtcbiAgICBpZih0aGlzLmVtYWlsICYmICh0aGlzLmVtYWlsLmRpcnR5IHx8IHRoaXMuZW1haWwudG91Y2hlZCkpe1xuICAgICAgb3V0Wydpcy1pbnZhbGlkJ10gPSB0aGlzLmVtYWlsLmludmFsaWQ7XG4gICAgICBvdXRbJ2lzLXZhbGlkJ10gPSB0aGlzLmVtYWlsLnZhbGlkO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gYXV0aGVudGljYXRpb24gc2VydmljZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuaW1wb3J0IHsgcGFzc3dvcmRNYXRjaFZhbGlkYXRvciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25maXJtLXBhc3N3b3JkLnZhbGlkYXRvcic7XG5cbi8qKlxuICogQWZ0ZXIgdXNlciByZXF1ZXN0cyB0byByZXNldCBwYXNzd29yZCBhbmQgdGhleSBoYXZlIGEgdG9rZW4sXG4gKiB0aGlzIGNvbXBvbmVudCBhbGxvd3MgdGhlbSB0byBzZXQgdGhlIHBhc3N3b3JkIHRvIGEgbmV3IHBhc3N3b3JkXG4gKiAoYXNzdW1pbmcgdG9rZW4gaXMgdmFsaWQpXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmVzZXQtcHN3ZCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcmVzZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZSBmcm9tIHNlcnZlclxuICAgKi9cbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBNZXNzYWdlIHdoZW4gbmV3IHBhc3N3b3JkIHN1Y2Nlc3NmdWxseSBzYXZlZFxuICAgKi9cbiAgcHJpdmF0ZSBzdWNjZXNzTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBFbWFpbCBhbmQgbmV3IHBhc3N3b3JkcyB0byBiZSBhYmxlIHRvIHVwZGF0ZSB0aGUgZGF0YWJhc2VcbiAgICogLSBgcGFzc3dvcmRgIC0gdGhlIG5ldyBwYXNzd29yZCB0byBzZXRcbiAgICogLSBgY29uZmlybVBhc3N3b3JkYCAtIGNvbmZpcm0gcGFzc3dvcmQgdHlwZWQgY29ycmVjdGx5XG4gICAqIC0gYHRva2VuYCAtIHBhc3N3b3JkIHJlc2V0IHRva2VuIHRvIGNvbmZpcm0gdXNlciBoYWQgYWNjZXNzIHRvIHRoZSBlbWFpbCBhbmQgZGlkbid0IHdhaXQgdG9vIGxvbmdcbiAgICovXG4gIHByaXZhdGUgY3JlZGVudGlhbHM6IEZvcm1Hcm91cDtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byB7QGxpbmsgQXV0aGVudGljYXRpb25TZXJ2aWNlfSB3aGVuIHJldHRpbmdcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBJcyB0aGUgc3VibWl0IGJ1dHRvbiBkaXNhYmxlZDsgdGhpcyB3b3VsZCBoYXBwZW4gd2hlblxuICAgKiB0aGVyZSBpcyBubyB0b2tlblxuICAgKi9cbiAgLy9wcml2YXRlIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICB9XG4gIC8qKlxuICAgKiBXaGVuIGluaXRpYWxpemluZyB0aGUgY29tcG9uZW50LCBnZXQgdGhlIHRva2VuIGZyb20gdGhlIFVSTFxuICAgKlxuICAgKiBJZiB0aGVyZSBpcyBubyB0b2tlbiwgZ2l2ZSBlcnJvciBtZXNzYWdlIGFuZCBkaXNhYmxlIHN1Ym1pdCBidXR0b25cbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgJ3Bhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKSxcbiAgICAgICdjb25maXJtUGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBwYXNzd29yZE1hdGNoVmFsaWRhdG9yXSksXG4gICAgICAndG9rZW4nOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG4gICAgfSk7XG5cbiAgICBsZXQgdXJsVG9rZW4gPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3Rva2VuJyk7XG4gICAgaWYgKHVybFRva2VuID09PSAnJyl7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdObyB0b2tlbiBzcGVjaWZpZWQuJ1xuICAgIH1cbiAgICB0aGlzLmNyZWRlbnRpYWxzLnBhdGNoVmFsdWUoe3Rva2VuOiB1cmxUb2tlbn0pO1xuICB9XG5cbiAgZ2V0IHBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoJ3Bhc3N3b3JkJyk7IH1cbiAgZ2V0IGNvbmZpcm1QYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KCdjb25maXJtUGFzc3dvcmQnKTsgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byByZXNldCB0aGUgbmV3IHBhc3N3b3JkXG4gICAqIDEuIElmIG5vIGVycm9ycywgc2VuZCBjcmVkZW50aWFscyB0byBzZXJ2ZXJcbiAgICogMi4gUGFzc3dvcmQgY29ycmVjdGx5IHJlc2V0LCBkaXNwbGF5cyB0aGUgc3VjY2VzcyBtZXNzYWdlXG4gICAqIDMuIElmIGVycm9yIHJlc2V0aW5nIHRoZSBwYXNzd29yZCwgZGlzcGxheXMgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgICBzZW5kUmVzZXQoKSB7XG4gICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gJyc7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgLnJlc2V0UGFzc3dvcmQodGhpcy5jcmVkZW50aWFscy52YWx1ZSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAvLyBpZiBzdWNjZXNzZnVsLCBzaG91bGQgZ2V0IHN1Y2Nlc3MgbWVzc2FnZVxuICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHMuc2V0VmFsdWUoeydwYXNzd29yZCc6ICcnLCAnY29uZmlybVBhc3N3b3JkJzogJycsIHRva2VuOiAnJ30pO1xuICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAqIEdldCB0aGUgZm9ybSBpbnB1dCBDU1MgY2xhc3NlcyBzdHlsaW5nIHRvIHByb3ZpZGUgZmVlZGJhY2sgdG8gdXNlclxuICAqIHdoZXRoZXIgaW5wdXQgaXMgdmFsaWQgb24gbm90XG4gICpcbiAgKiBBbHdheXMgaGFzIGAuZm9ybS1jb250cm9sYCB0aGVuIGAuaXMtaW52YWxpZGAgb3IgYC5pcy12YWxpZGAgYXJlIHNldCBvbmNlIGlucHV0IGhhcyBiZWVuIHRvdWNoZWRcbiAgKlxuICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtTGFiZWwgLSBmb3JtIGdyb3VwIG5hbWUgbG9vay11cCBpbnB1dCBzdGF0ZVxuICAqXG4gICogQHJldHVybnMge09iamVjdH0gQ1NTIGNsYXNzZXMgd2hpY2ggYXBwbHkgdG8gdGhpcyBpbnB1dFxuICAqL1xuICBnZXRJbnB1dENsYXNzKGZvcm1MYWJlbDogc3RyaW5nKSB7XG4gICAgbGV0IG91dCA9IHsnZm9ybS1jb250cm9sJzogdHJ1ZX07XG4gICAgaWYodGhpcy5jcmVkZW50aWFscyAmJiB0aGlzLmNyZWRlbnRpYWxzLmdldChmb3JtTGFiZWwpKXtcbiAgICAgIGxldCBhYyA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KGZvcm1MYWJlbCk7XG4gICAgICBpZihhYy5kaXJ0eSB8fCBhYy50b3VjaGVkKXtcbiAgICAgICAgb3V0Wydpcy1pbnZhbGlkJ10gPSBhYy5pbnZhbGlkO1xuICAgICAgICBvdXRbJ2lzLXZhbGlkJ10gPSBhYy52YWxpZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gYXV0aGVudGljYXRpb24gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbHAnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9oZWxwLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9oZWxwLnN0eWxlLmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIEhlbHBDb21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IoKXt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlbHAtY3JpY2tldCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2hlbHAtY3JpY2tldC50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBIZWxwQ3JpY2tldENvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcigpe31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2hlbHAvaGVscC1jcmlja2V0L2hlbHAtY3JpY2tldC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogTWFpbiB1c2VyIHByb2ZpbGUgY29tcG9uZW50OyBhaW1lZCBmb3IgdXNlIHRvIGVkaXQgbmFtZSBhbmRcbiAqIGVtYWlsIGFkZHJlc3MuIEFsc28gYWNjZXNzIHVwZGF0ZSBwYXNzd29yZCBsaW5rIHRvIHVwZGF0ZSBwYXNzd29yZFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1c2VyLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi91c2VyLXByb2ZpbGUudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlclByb2ZpbGVDb21wb25lbnR7XG5cbiAgLyoqXG4gICAqIERhdGFiYXNlIHVzZXIgaWRcbiAgICovXG4gIHByaXZhdGUgdXNlcklkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBVc2VyIGRldGFpbHMgKGFzIGFuIG9iamVjdClcbiAgICogQ3VycmVudGx5IGluY2x1ZGVzOiBmaXJzdE5hbWUsIGxhc3ROYW1lLCBhbmQgZW1haWxcbiAgICovXG4gIHByaXZhdGUgdXNlckluZm86IGFueTtcbiAgLyoqXG4gICAqIFN0YXRlIHRvIG1haW50YWluIG9wZW4gc3Vic2NyaXB0aW9ucyB1bnRpbCBjb21wb25lbnQgaXMgZGVzdG9yeWVkXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yOyBpbmNsdWRlcyBzZXJ2aWNlcyB0byBmZXRjaCBpbmZvXG4gICAqXG4gICAqIEBwYXJhbSB7UHJvZmlsZVNlcnZpY2V9IF9wcm9maWxlU2VydmljZSBTZXJ2aWNlIGZvciB1cGRhdGluZyB0aGUgaW5mb3JtYXRpb25cbiAgICogQHBhcmFtIHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IF9hdXRoU2VydmljZSBTZXJ2aWNlIHRvIGdldCB0aGUgY3VycmVudCB1c2VyIGluZm9ybWF0aW9uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9wcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICApe1xuICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IG9uIGNyZWF0aW9uXG4gICAqIDEuIEdldCB0aGUgbG9nZ2VkIGluIHVzZXJcbiAgICogMi4gU2F2ZSB0aGUgdXNlcidzIGRldGFpbHMgdG8gb2JqZWN0IHRvIGJlIGFibGUgdG8gZWRpdFxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICAvLyBnZXQgY3VycmVudCB1c2VyIGluZm9cbiAgICB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyJFxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgdGhpcy51c2VySWQgPSByZXMuaWQ7XG4gICAgICB0aGlzLnVzZXJJbmZvID0ge1xuICAgICAgICBmaXJzdE5hbWU6IHJlcy5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiByZXMubGFzdE5hbWUsXG4gICAgICAgIGVtYWlsOiByZXMuZW1haWxcbiAgICAgIH1cbiAgICB9LCAoaWRFcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoaWRFcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHVwZGF0ZSB0aGUgcHJvZmlsZSBpZiBwb3NzaWJsZSBvciBzZXQgZXJyb3JcbiAgICogbWVzc2FnZSBpZiB0aGVyZSdzIGEgcHJvYmxlbVxuICAgKi9cbiAgdXBkYXRlUHJvZmlsZSgpe1xuICAgIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLmVkaXRQcm9maWxlKHRoaXMudXNlcklkLCB0aGlzLnVzZXJJbmZvKVxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHVwZGF0ZWQpPT57XG4gICAgICB0aGlzLnVzZXJJbmZvID0ge2ZpcnN0TmFtZTogdXBkYXRlZC5maXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IHVwZGF0ZWQubGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVwZGF0ZWQuZW1haWx9O1xuICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2V0VXNlcih1cGRhdGVkKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RydWN0aW9uLCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIHRvIHByZXZlbnRcbiAgICogbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBhIGxvZ2dlZCBpbiB1c2VyIHRvIHVwZGF0ZSB0aGVpciBwYXNzd29yZFxuICogYnkgZW50ZXJpbmcgdGhlaXIgY3VycmVudCBwYXNzd29yZCB0aGVuIHRoZSBuZXcgcGFzc3dvcmRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXNlci1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3VwZGF0ZS1wYXNzd29yZC50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVQYXNzd29yZENvbXBvbmVudHtcblxuICAvKipcbiAgICogVGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqL1xuICBwcml2YXRlIHVzZXI6IFVzZXI7XG4gIC8qKlxuICAgKiAtIFBhc3N3b3JkIGluZm9ybWF0aW9uIHRvIHNlbmQgdG8gc2VydmVyIHRvIHVwZGF0ZSBwYXNzd29yZFxuICAgKiAtIEhhcyBmaWVsZHMgYHBhc3N3b3JkYCAoY3VycmVudCBwYXNzd29yZCksIGBuZXdQYXNzd29yZGAgKHBhc3N3b3JkIHRvIGNoYW5nZSB0byksIFxuICAgKiBgY29uZmlybVBhc3N3b3JkYCAoY29uZmlybXMgdHlwaW5nIG9mIG5ldyBwYXNzd29yZCksIGFuZCBcbiAgICogYHVzZXJuYW1lYCAodXNlcidzIGVtYWlsKVxuICAgKi9cbiAgcHJpdmF0ZSBjcmVkZW50aWFsczogYW55O1xuICAvKipcbiAgICogU3RhdGUgdG8ga2VlcCB0cmFjayBvZiBjb21wb2VuZW50IGFsaXZlXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBiYWNrZW5kIGVycm9yIG1lc3NhZ2UgZGlzcGxheWVkIHByb21pbmFudGx5XG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlIGFib3V0IHN1Ym1pc3Npb24gYW5kIHdoeSB0aGUgc3VibWlzc2lvbiBkaWRuJ3Qgd29yayBhcyBleHBlY3RlZFxuICAgKi9cbiAgcHJpdmF0ZSBwYXNzd29yZE1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3Byb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICl7XG4gICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge1xuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIG5ld1Bhc3N3b3JkOiAnJyxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiAnJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyIGluZm9cbiAgICogMi4gU2V0IHVwIHRoZSBjcmVkZW50aWFscyB3aXRoIGVtYWlsIGFkZHJlc3NcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgLy8gZ2V0IGN1cnJlbnQgdXNlciBpbmZvXG4gICAgdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlciRcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIHRoaXMudXNlciA9IHJlcztcbiAgICAgIHRoaXMuY3JlZGVudGlhbHNbJ3VzZXJuYW1lJ10gPSByZXMuZW1haWw7XG4gICAgfSwgKGlkRXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGlkRXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0IHRvIHVwZGF0ZSB0aGUgcGFzc3dvcmRcbiAgICogLSBJZiBzdWNjZXNzZnVsLCByZWRpcmVjdHMgdG8gcHJvZmlsZSBwYWdlXG4gICAqIC0gSWYgdGhlcmUncyBhbiBlcnJvciwgZGlzcGxheXMgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgdXBkYXRlUGFzc3dvcmQoKXtcbiAgICAvLyBkbyBjaGVja3NcbiAgICB0aGlzLnBhc3N3b3JkTWVzc2FnZSA9IHRoaXMuX2NoZWNrUGFzc3dvcmRzKCk7XG4gICAgaWYodGhpcy5wYXNzd29yZE1lc3NhZ2UgPT09ICcnKXtcbiAgICAgIC8vIGNhbiB1cGRhdGVcbiAgICAgIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLnVwZGF0ZVBhc3N3b3JkKHRoaXMudXNlci5pZCwgdGhpcy5jcmVkZW50aWFscylcbiAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsZSddKTtcbiAgICAgIH0sIChlcnIpPT57XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERvZXMgdmFyaW91cyBjaGVja3MgdG8gZW5zdXJlIHRoZSBwYXNzd29yZCBmaWVsZHMgYXJlIHZhbGlkXG4gICAqIDEuIEFsbCBmaWVsZHMgYXJlIGZpbGxlZCBpblxuICAgKiAyLiBOZXcgcGFzc3dvcmQgaXMgZGlmZmVyZW50IGZyb20gb2xkIHBhc3N3b3JkXG4gICAqIDMuIENvbmZpcm0gcGFzc3dvcmQgbWF0Y2hlcyBuZXcgcGFzc3dvcmRcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gZXJyb3IgbWVzc2FnZSBpZiBhdCBsZWFzdCBvbmUgY29uZGl0aW9uIGlzbid0IG1ldCBvciBgJydgIGlmIGV2ZXJ5dGhpbmcgaXMgdmFsaWRcbiAgICovXG4gIHByb3RlY3RlZCBfY2hlY2tQYXNzd29yZHMoKXtcbiAgICBsZXQgcCA9IHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQ7XG4gICAgbGV0IG4gPSB0aGlzLmNyZWRlbnRpYWxzLm5ld1Bhc3N3b3JkO1xuICAgIGxldCBjID0gdGhpcy5jcmVkZW50aWFscy5jb25maXJtUGFzc3dvcmQ7XG4gICAgaWYocCA9PT0gJycpe1xuICAgICAgcmV0dXJuICdFbnRlciBvbGQgcGFzc3dvcmQnO1xuICAgIH0gZWxzZSBpZihuID09PSAnJyl7XG4gICAgICByZXR1cm4gJ0VudGVyIG5ldyBwYXNzd29yZCc7XG4gICAgfSBlbHNlIGlmKGMgPT09ICcnKXtcbiAgICAgIHJldHVybiAnQ29uZmlybSBuZXcgcGFzc3dvcmQnO1xuICAgIH0gZWxzZSBpZihwID09PSBuKXtcbiAgICAgIHJldHVybiAnTmV3IHBhc3N3b3JkIGNhbm5vdCB0aGUgc2FtZSBhcyB0aGUgb2xkIHBhc3N3b3JkJztcbiAgICB9IGVsc2UgaWYobiAhPT0gYyl7XG4gICAgICByZXR1cm4gJ0NvbmZpcm0gcGFzc3dvcmQgZG9lcyBub3QgbWF0Y2gnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbiwgdW5zdWJzY3JpYmUgdG8gc2VydmljZXMvc3RyZWFtc1xuICAgKiB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXBkYXRlLXBhc3N3b3JkL3VwZGF0ZS1wYXNzd29yZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBWaWV3IGNvbXBvbmVudCB1c2VkIHRvIGxpbmsgdGhlIGJyZWFkY3J1bWIgd2l0aCB0aGUgbG9jYXRpb25cbiAqIG1vZHVsZSBjb21wb25lbnRzIG9yIHNjZW5hcmlvIGxpc3RcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2NlbmFyaW8nLFxuICB0ZW1wbGF0ZTogJzxtYy1icmVhZGNydW1icz48L21jLWJyZWFkY3J1bWJzPjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4nXG59KVxuXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9Db21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uL3NjZW5hcmlvLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2NlbmFyaW8uaW50ZXJmYWNlJztcblxuLyoqXG4gKiBDb21wb25lbnQgd2hpY2ggbGlzdHMgYWxsIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY2VuYXJpby1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9saXN0LnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBVc2VyIG9iamVjdCBvZiBsb2dnZWQgaW4gdXNlciwgaWYgYXZhaWxhYmxlXG4gICAqL1xuICAgIHVzZXI6IFVzZXI7XG4gIC8qKlxuICAqIGxpc3Qgb2YgYXZhaWxhYmxlIHNjZW5hcmlvc1xuICAqL1xuICAgIHNjZW5hcmlvczogU2NlbmFyaW9bXTtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSBzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2UpIHtcblxuICAgIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IGJ5IHVzaW5nIHRoZSBzZXJ2aWNlIHRvIGZldGNoIHRoZVxuICAgKiBsaXN0IG9mIHNjZW5hcmlvc1xuICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMudXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICB0aGlzLnNTdWJzY3JpcHRpb24gPSB0aGlzLl9zY2VuYXJpb1NlcnZpY2UubGlzdFNjZW5hcmlvcygpXG4gICAgICAgIC5zdWJzY3JpYmUoKHNjZW5hcmlvcykgPT4ge1xuICAgICAgICB0aGlzLnNjZW5hcmlvcyA9IHNjZW5hcmlvc1xuICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgY29tcG9uZW50LCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2UgaWYgbmVjZXNzYXJ5XG4gICAqIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc1N1YnNjcmlwdGlvbilcbiAgICB0aGlzLnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbGlzdC9saXN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2NlbmFyaW9zL3NjZW5hcmlvcy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5pbnRlcmZhY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb3B0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL29wdGlvbnMudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgdXNlcjogVXNlcjtcblxuICAvKipcbiAgKiBsaXN0IG9mIGF2YWlsYWJsZSBzY2VuYXJpb3NcbiAgKi9cbiAgc2NlbmFyaW9zOiBNZW5kZWxwZWRlU2NlbmFyaW9bXTtcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgbGlzdGluZyBzY2VuYXJpb3MnKTtcbiAgICB0aGlzLnNTdWJzY3JpcHRpb24gPSB0aGlzLl9zY2VuYXJpb1NlcnZpY2UubGlzdFNjZW5hcmlvcygpXG4gICAgICAgIC5zdWJzY3JpYmUoKHNjZW5hcmlvcykgPT4ge1xuICAgICAgICB0aGlzLnNjZW5hcmlvcyA9IHNjZW5hcmlvcztcbiAgICAgICAgY29uc29sZS5sb2coJ3NjZW5hcmlvczogJytzY2VuYXJpb3MpO1xuICAgIH0sXG4gIChlcnIpPT57XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycjtcbiAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlIGlmIG5lY2Vzc2FyeVxuICAgKiB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnNTdWJzY3JpcHRpb24pXG4gICAgdGhpcy5zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnRzIiwiLy9pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBCZWhhdmlvclN1YmplY3QgLCAgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogU2NlbmFyaW8vZnJpZGdlIHJlbGF0ZWQgZnVuY3Rpb25zIHRoYXQgZ2V0L3NlbmQgZGF0YSB0byB0aGUgYmFja2VuZCBzZXJ2ZXJcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfYmFzZVVSTCA9ICdhcGkvbWVuZGVscGVkZSc7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IHRoZSBzZXJ2aWNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0h0dHBDbGllbnR9IF9odHRwIEFuZ3VhciBtZWNoYW5pc20gdG8gbWFrZSBjYWxscyB0byBiYWNrZW5kIHNlcnZlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgICAvKipcbiAgICAqIExpc3QgYXZhaWxhYmxlIHNjZW5hcmlvc1xuICAgICpcbiAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFNjZW5hcmlvW10+fSBsaXN0IG9mIHNjZW5hcmlvc1xuICAgICovXG4gICAgbGlzdFNjZW5hcmlvcygpOiBPYnNlcnZhYmxlPE1lbmRlbHBlZGVTY2VuYXJpb1tdPiB7XG4gICAgICBjb25zb2xlLmxvZygnR29pbiB0byBnZXQgbGlzdCcpO1xuICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAuZ2V0PE1lbmRlbHBlZGVTY2VuYXJpb1tdPih0aGlzLl9iYXNlVVJMKVxuICAgIH1cblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2NlbmFyaW8gZGV0YWlscyB3aGljaCBpcyBuZWVkZWQgd2hlblxuICAgKiBwZXJmb3JtaW5nIGNyb3NzZXNcbiAgICovXG4gICAvLyBwcml2YXRlIF9zY2VuYXJpb0RldGFpbHMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICAgLy8gZ2V0U2NlbmFyaW9EZXRhaWxzID0gdGhpcy5fc2NlbmFyaW9EZXRhaWxzLmFzT2JzZXJ2YWJsZSgpO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2NlbmFyaW8gZ3Vlc3Nlc1xuICAgKi9cbiAgIC8vIHByaXZhdGUgX3NjZW5hcmlvR3Vlc3NlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih7fSk7XG4gICAvLyBnZXRHdWVzc2VzID0gdGhpcy5fc2NlbmFyaW9HdWVzc2VzLmFzT2JzZXJ2YWJsZSgpO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2NlbmFyaW8gY29kZVxuICAgKlxuICAgKiBVc2VkIGJ5IGZyaWRnZSBhbmQgbG9jYXRpb24gY29tcG9uZW50c1xuICAgKiB0byBnZXQgdGhlIGNvZGUgd2l0aG91dCB0aGUgcm91dGVcbiAgICovXG4gICAgLy8gcHJpdmF0ZSBfc2NlbmFyaW9Db2RlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgICAvLyBnZXRTY2VuYXJpb0NvZGUgPSB0aGlzLl9zY2VuYXJpb0NvZGUuYXNPYnNlcnZhYmxlKCk7XG5cblxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgc2F2ZSBzY2VuYXJpbyBzdHVmZjpcbiAgICogc2NlbmFyaW9EZXRhaWxzLCBzY2VuYXJpb0d1ZXNzZXMsIGFuZCBzY2VuYXJpb0NvZGVcbiAgICpcbiAgICogVXNlZCB3aGVuIG5hdmlnYXRpbmcgYXdheSBmcm9tIHNjZW5hcmlvIGNvbXBvbmVudFxuICAgKi9cbiAgLypyZXNldFNjZW5hcmlvKCkge1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0RldGFpbHMubmV4dCgnJyk7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvR3Vlc3Nlcy5uZXh0KHt9KTtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9Db2RlLm5leHQoJycpO1xuICAgIH0qL1xuXG4gIC8qKlxuICAqIFNldCB0aGUgc2NlbmFyaW8gZGV0YWlscyBhbmQgc2NlbmFyaW8gZ3Vlc3Nlc1xuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IHNjZW5hcmlvRGV0YWlscyAtIHNjZW5hcmlvIGRldGFpbHNcbiAgKiAtIG5lY2Vzc2FyeSBmb3IgcGVyZm9ybWluZyBleHBlcmltZW50c1xuICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuYXJpb0d1ZXNzZXMgY3VycmVudCBzY2VuYXJpbyBndWVzc2VzXG4gICovXG4gIC8qc2V0U2NlbmFyaW8oc2NlbmFyaW9EZXRhaWxzOiBzdHJpbmcsIHNjZW5hcmlvR3Vlc3Nlczogc3RyaW5nKSB7XG4gICAgICAgIGlmIChzY2VuYXJpb0RldGFpbHMgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLl9zY2VuYXJpb0RldGFpbHMubmV4dChzY2VuYXJpb0RldGFpbHMpO1xuICAgICAgICBpZiAoc2NlbmFyaW9EZXRhaWxzICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fc2NlbmFyaW9HdWVzc2VzXG4gICAgICAgICAgICAgIC5uZXh0KEpTT04ucGFyc2Uoc2NlbmFyaW9HdWVzc2VzKSk7XG4gICAgfSovXG5cblxuICAvKipcbiAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGEgc3BlY2lmaWMgc2NlbmFyaW9cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBpZGVudGlmaWVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtTY2VuYXJpb31cbiAgICogLSBzY2VuYXJpbyBpbmZvcm1hdGlvblxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGxvYWQgc2NlbmFyaW8gPHNjZW5JZD5cIiBpZiBzY2VuYXJpbyBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgLyogZ2V0U2NlbmFyaW8oc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNjZW5hcmlvPiB7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvQ29kZS5uZXh0KHNjZW5JZCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PFNjZW5hcmlvPihgJHt0aGlzLl9iYXNlVVJMfS8ke3NjZW5JZH1gKTtcbiAgICB9ICovXG5cbiAgLyoqXG4gICAqIFNlbmQgdXBkYXRlZCBndWVzc2VzIGZvciB0aGUgc2NlbmFyaW8gdG8gYmUgc2F2ZWQgaW4gZGF0YWJhc2VcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGd1ZXNzZXMgc3RyaW5nIG9mIHVwZGF0ZWQgZ3Vlc3Nlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKiAtIHVwZGF0ZWQgZ3Vlc3Nlc1xuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBcIkNvdWxkIG5vdCBzYXZlIG5ldyBndWVzc2VzXCIgaWYgY291bGRuJ3QgdXBkYXRlXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgLyogc2F2ZURlbGV0aW9ucyhndWVzc2VzOiBhbnksIHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdChgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9L2RlbGV0aW9uc2AsIGd1ZXNzZXMpO1xuICAgIH0qL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZnJpZGdlIGZvciB0aGUgdXNlci9zY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2U+fVxuICAgKiAtIG5ld2x5IGNyZWF0ZWQgZnJpZGdlXG4gICAqIC0gb3IgZXJyb3IgXCJVbmFibGUgdG8gY3JlYXRlIG5ldyBwaGFnZSBmb3Igc2NlbmFyaW9cIiBpZiBpc3N1ZSBjcmVhdGUgcGhhZ2VcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byBzYXZlIG5ldyBmcmlkZ2VcIiBpZiBjb3VsZG4ndCBjcmVhdGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAvKiBjcmVhdGVGcmlkZ2UodXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGcmlkZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PEZyaWRnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9uZXctZnJpZGdlYCk7XG4gICAgfSovXG5cbiAgLyoqXG4gICAqIEdldCBhbiBleGlzdGluZyBmcmlkZ2UgZm9yIHVzZXIvc2NlbmFyaW9cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlPn1cbiAgICogLSBleGlzdGluZyBmcmlkZ2VcbiAgICogLSBvciBlcnJvciBcIk5vIGZyaWRnZSBmb3Igc2NlbmFyaW8vdXNlclwiIGlmIGZyaWRnZSBkb2VzIG5vdCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgLyogIGdldEZyaWRnZSh1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZyaWRnZT4ge1xuICAgICAgICB2YXIgcmVzID0gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH1gKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9Ki9cblxuICAvKipcbiAgICogQWRkIGEgbmV3IHBoYWdlIHN0cmFpbiB0byB0aGUgZnJpZGdlO1xuICAgKiBTZXJ2ZXIgdXNlcyB1c2VySWQgYW5kIHNjZW5Db2RlIHRvIGZpbmQgdGhlIGZyaWRnZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKiBAcGFyYW0ge2FueX0gc3RyYWluIC0gbmV3IHBoYWdlIHRvIGFkZCB0byBmcmlkZ2VcbiAgICogLSBoYXMgc3RyYWluTnVtLCBtdXRhdGlvbkxpc3QsIGFuZCBkZWxldGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2VQaGFnZT59XG4gICAqIC0gbmV3bHkgc2F2ZWQgcGhhZ2VcbiAgICogLSBvciBlcnJvciBcIlVzZXIgbm90IGZvdW5kXCIgaWYgdXNlciBub3QgZm91bmRcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBsb2FkIHNjZW5hcmlvIDxzY2VuSWQ+XCIgaWYgc2NlbmFyaW8gbm90IGZvdW5kXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gZmluZCBmcmlkZ2VcIiBpZiBmcmlkZ2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgIC8qIGFkZFN0cmFpbih1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHN0cmFpbjogYW55KTogT2JzZXJ2YWJsZTxGcmlkZ2VQaGFnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3Q8RnJpZGdlUGhhZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vZnJpZGdlLXBoYWdlYCwgc3RyYWluKVxuICAgIH0gKi9cblxuICAvKipcbiAgICogVXBkYXRlIGRldGFpbHMvaW5mb3JtYXRpb24gYWJvdXQgYW4gZXhpc3RpbmcgcGhhZ2UgaW4gdGhlIGZyaWRnZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKiBAcGFyYW0ge0ZyaWRnZVBoYWdlfSBzdHJhaW4gLSBzdHJhaW4gdG8gdXBkYXRlXG4gICAqIC0gdXNlIHN0cmFpbiBgaWRgIHRvIHNwZWNpZnkgc3RyYWluIGFuZCBzZW5kIHVwZGF0ZWQgaW5mb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2VQaGFnZT59XG4gICAqIC0gdXBkYXRlZCBzdHJhaW5cbiAgICogLSBvciBlcnJvciBcIlBoYWdlIG5vdCBmb3VuZFwiIGlmIHN0cmFpbiBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgLyogdXBkYXRlU3RyYWluKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgc3RyYWluOiBGcmlkZ2VQaGFnZSk6IE9ic2VydmFibGU8RnJpZGdlUGhhZ2U+IHtcbiAgICAgICAgbGV0IHN0cmFpbklkID0gc3RyYWluLmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3Q8RnJpZGdlUGhhZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vJHtzdHJhaW5JZH1gLCBzdHJhaW4pXG4gICAgfSAqL1xuXG4gIC8qKlxuICAgKiBEZWxldGUgYSBzdHJhaW4gZnJvbSB0aGUgZnJpZGdlIChhbmQgZGF0YWJhc2UpXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqIEBwYXJhbSB7RnJpZGdlUGhhZ2V9IHN0cmFpbiAtIHRoZSBzdHJhaW4gdG8gZGVsZXRlXG4gICAqIC0gdXNlIHN0cmFpbiBgaWRgIHRvIHNwZWNpZnkgd2hpY2ggc3RyYWluIHRvIGRlbGV0ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fVxuICAgKiAtIHRoZSBzdHJhaW4ganVzdCBkZWxldGVkXG4gICAqIC0gb3IgZXJyb3IgXCJQaGFnZSBub3QgZm91bmRcIiBpZiBzdHJhaW4gZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byByZW1vdmUgc3RyYWluIGZyb20gZnJpZGdlXCIgaWYgY291bGRuJ3QgZGVsZXRlXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAvKiAgZGVsZXRlU3RyYWluKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgc3RyYWluOiBGcmlkZ2VQaGFnZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGxldCBzdHJhaW5JZCA9IHN0cmFpbi5pZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS8ke3N0cmFpbklkfWApXG4gICAgfSovXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9zY2VuYXJpb3Muc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW5kZWxwZWRlLXNjZW5hcmlvcycsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3NjZW5hcmlvcy50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgTWVuZGVscGVkZVNjZW5hcmlvc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICB1c2VyOiBVc2VyO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gICAgXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuXG4gIH1cbiAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9zY2VuYXJpb3MuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbmRlbHBlZGUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tZW5kZWxwZWRlLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBNZW5kZWxwZWRlQ29tcG9uZW50e1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWRtaW5TdHVkZW50LCBTdHVkZW50RnJpZGdlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogU2VydmljZSB3aGljaCBkZWFscyB3aXRoIGFsbCBzdHVkZW50LXJlbGF0ZWQgYmFja2VuZCBjYWxsc1xuICogZnJvbSBhbiBhZG1pblxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3R1ZGVudFNlcnZpY2Uge1xuICBcbiAgcHJpdmF0ZSBfYmFzZVVSTCA9ICcvYXBpL2FkbWluJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHN0dWRlbnRzLCBjb250ZW50IGlzIGRlcGVuZGVudCBvZiBsb2dnZWQgaW4gdXNlciByb2xlXG4gICAqXG4gICAqIElmIGBhZG1pbmAsIHJldHVybiBhbGwgc3R1ZGVudHMvdXNlcnNcbiAgICogXG4gICAqIElmIGBpbnN0cmAsIHJldHVybnMgc3R1ZGVudHMgb2YgY291cnNlcyBpbnN0ciB0ZWFjaHNcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge0FkbWluU3R1ZGVudFtdfSAtIGxpc3Qgb2Ygc3R1ZGVudHNcbiAgICovXG4gIGxpc3RTdHVkZW50cyhhZG1pbklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudFtdPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxBZG1pblN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZXRhaWxzIGFib3V0IGEgc3R1ZGVudFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBmb3IgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBmb3Igc3R1ZGVudCB0byBiZSBsb29rZWQgdXBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50Pn0gLSBkZXRhaWxzIGFib3V0IHNwZWNpZmllZCBzdHVkZW50XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBnZXRTdHVkZW50KGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8QWRtaW5TdHVkZW50PihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgcm9sZSAoYWRtaW4sIGluc3RyLCBzdHVkZW50KSBvZiBhbm90aGVyIHN0dWRlbnQvdXNlclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBmb3IgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBmb3Igc3R1ZGVudCB0byB1cGRhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJvbGUgLSBuZXcgcm9sZSB0byBiZSBhc3NpZ25lZDsgb25lIG9mOiBgXCJhZG1pblwiLCBcImluc3RyXCIsIFwic3R1ZGVudFwiYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIHRoZSB1cGRhdGVkIHN0dWRlbnRcbiAgICogLSBlcnJvciBgVmFsdWUgXCJyb2xlXCIgaXMgbm90IGEgdmFsaWQgcm9sZWAgaWYgcm9sZSBpc24ndCBvbmUgb2YgYGFkbWluYCwgYGluc3RyYCwgYHN0dWRlbnRgXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBzZXRTdHVkZW50Um9sZShhZG1pbklkOiBudW1iZXIsIHN0dWRlbnRJZDogbnVtYmVyLCByb2xlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgbGV0IGJvZHkgPSB7cm9sZTogcm9sZX07XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHMvJHtzdHVkZW50SWR9YCwgYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgc3R1ZGVudC91c2VyXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIC0gdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB1c2VySWQgb2Ygc3R1ZGVudCB0byBkZWxldGVcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBzdHVkZW50IHdobyB3YXMganVzdCBkZWxldGVkXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBkZWxldGVTdHVkZW50KGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50cy8ke3N0dWRlbnRJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2NlbmFyaW8gZnJpZGdlIGZvciBhIHN0dWRlbnQ7IGluY2x1ZGVzIGZyaWRnZSBkZXRhaWxzIHN1Y2ggYXNcbiAgICogZnJpZGdlIHN0cmFpbnMgYW5kIGd1ZXNzZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBvZiBzdHVkZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgLSBzY2VuYXJpbyBJZCBmb3IgZnJpZGdlIHRvIGZpbmRcbiAgICpcbiAgICogQHJldHVybnN7T2JzZXJ2YWJsZTxTdHVkZW50RnJpZGdlPn0gLSB0aGUgc3R1ZGVudCdzIGZyaWRnZVxuICAgKiAtIGFuIGVtcHR5IGZyaWRnZSBpZiB0aGUgZnJpZGdlIGRvZXNuJ3QgZXhpc3QgeWV0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyIGVycm9yXG4gICAqL1xuICBnZXRGcmlkZ2UoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0dWRlbnRGcmlkZ2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PFN0dWRlbnRGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHMvJHtzdHVkZW50SWR9LyR7c2NlbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzY2VuYXJpbyBhY2Nlc3MgZm9yIGEgc3R1ZGVudDsgdGhpcyBkZWxldGVzIHRoZSBleGlzdGluZ1xuICAgKiBmcmlkZ2VcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBvZiBzdHVkZW50XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXBkYXRlZFN0YXRlIC0gdHJ1ZSB0byBncmFudCBhY2Nlc3MsIGZhbHNlIHRvIHJldm9rZSBhY2Nlc3NcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50Pn0gdXBkYXRlZCBzdHVkZW50XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBncmFudFNjZW5BY2Nlc3MoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHVwZGF0ZWRTdGF0ZTogYm9vbGVhbik6IE9ic2VydmFibGU8QWRtaW5TdHVkZW50PntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3Q8QWRtaW5TdHVkZW50PihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfS8ke3NjZW5JZH1gLCB7YWNjZXNzOiB1cGRhdGVkU3RhdGV9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuLyoqXG4gKiBUaGlzIGlzIGEgY29uZmlybWF0aW9uIGRpYWxvZyB3aGVuIHVzZXIgd2FudHMgdG8gZGVsZXRlXG4gKiBzb21ldGhpbmcgc2Vuc2l0aXZlLCBpLmUuIGFub3RoZXIgdXNlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb25maXJtLWRlbGV0ZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb25maXJtLWRlbGV0ZS1kaWFsb2cudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudHtcblxuICAvKipcbiAgICogTWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRpYWxvZyB3aW5kb3dcbiAgICovXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZyA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPydcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKXtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgTWNCcmVhZGNydW1ic01vZHVsZSB9IGZyb20gJ25neC1icmVhZGNydW1icyc7XG5cbmltcG9ydCB7IENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQZXJzb25OYW1lUGlwZSB9IGZyb20gJy4uL3BpcGVzL3BlcnNvbi1uYW1lLnBpcGUnO1xuaW1wb3J0IHsgUGVvcGxlTGlzdE5hbWVzUGlwZSB9IGZyb20gJy4uL3BpcGVzL3Blb3BsZS1saXN0LW5hbWVzLnBpcGUnO1xuaW1wb3J0IHsgUGhhZ2VQYXJlbnRzUGlwZSB9IGZyb20gJy4uL3BpcGVzL3BoYWdlLXBhcmVudHMucGlwZSc7XG5cbmltcG9ydCB7IEZvcm1FcnJvcnNNb2R1bGUgfSBmcm9tICcuL2Zvcm0tZXJyb3JzL2Zvcm0tZXJyb3JzLm1vZHVsZSc7XG5pbXBvcnQgeyBTZWxlY3REcm9wTW9kdWxlIH0gZnJvbSAnLi9zZWxlY3QtZHJvcC9zZWxlY3QtZHJvcC5tb2R1bGUnO1xuLy9pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3JzIH0gZnJvbSAnLi9jdXN0b20tdmFsaWRhdG9ycyc7XG4vKipcbiAqIFRoZSBTaGFyZWQgTW9kdWxlIGNvbnRhaW5zIG1vZHVsZXMsIHBpcGVzLCBhbmQgY29tcG9uZW50c1xuICogdGhhdCBhcmUgbmVlZGVkIGFjcm9zcyB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBTYXZlcyB0aW1lIGJ5IGltcG9ydGluZyB0aGlzIG1vZHVsZSByYXRoZXIgdGhhbiB0aGVcbiAqIHBpcGVzL21vZHVsZXMvY29tcG9uZW50cyBpbmRpdmlkdWFsbHlcbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICBGb3JtRXJyb3JzTW9kdWxlLFxuICAgICAgU2VsZWN0RHJvcE1vZHVsZS5mb3JSb290KCksXG4gICAgICBOZ2JNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgTWNCcmVhZGNydW1ic01vZHVsZS5mb3JSb290KClcbiAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQZXJzb25OYW1lUGlwZSxcbiAgICBQZW9wbGVMaXN0TmFtZXNQaXBlLFxuICAgIFBoYWdlUGFyZW50c1BpcGUsXG4gICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgIEZvcm1FcnJvcnNNb2R1bGUsXG4gICAgICBOZ2JNb2R1bGUsXG4gICAgICBTZWxlY3REcm9wTW9kdWxlLFxuICAgICAgTWNCcmVhZGNydW1ic01vZHVsZSxcbiAgICAgIFBlcnNvbk5hbWVQaXBlLFxuICAgICAgUGVvcGxlTGlzdE5hbWVzUGlwZSxcbiAgICAgIFBoYWdlUGFyZW50c1BpcGUsXG4gICAgICBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGFuIGVycm9yIG9iamVjdCBhbmQgbG9va3MgZm9yXG4gKiB0aGUgZXJyb3IgbWVzc2FnZTsgaXQgY2hlY2tzIHNldmVyYWwgcHJvcGVydGllcyBiZWNhdXNlXG4gKiBlcnJvcnMgYXJlIG5vdCBhbHdheXMgdW5pZm9ybVxuICpcbiAqIEBwYXJhbSB7YW55fSBlcnJvciAtIGVycm9yIG9iamVjdCB0byBmaW5kIGVycm9yIG1lc3NhZ2UgZnJvbVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlcnJvciBtZXNzYWdlIHdpdGhpbiB0aGUgb2JqZWN0IG9yXG4gKiBgXCJVbmtub3duIGVycm9yXCJgIGlmIHRoZSBlcnJvciBtZXNzYWdlIGNhbid0IGJlIGZvdW5kXG4gKi9cbmV4cG9ydCBjb25zdCByZWFkRXJyb3JNZXNzYWdlID0gZnVuY3Rpb24oZXJyb3I6IGFueSk6IHN0cmluZyB7XG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSAnVW5rbm93biBlcnJvcic7XG4gIGlmKGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLm1lc3NhZ2Upe1xuICAgcmV0dXJuIGVycm9yLmVycm9yLm1lc3NhZ2VcbiAgfSBlbHNlIGlmKGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLnRleHQpe1xuICAgcmV0dXJuIGVycm9yLmVycm9yLnRleHRcbiAgfSBlbHNlIGlmIChlcnJvciAmJiBlcnJvci5tZXNzYWdlKXtcbiAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICB9IGVsc2UgaWYoZXJyb3Ipe1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuICByZXR1cm4gZXJyb3JNZXNzYWdlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL3JlYWQtZXJyb3IudHMiLCJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyl7XG4gIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYm9vdHN0cmFwLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWNCcmVhZGNydW1ic0NvbmZpZyB9IGZyb20gJ25neC1icmVhZGNydW1icyc7XG5cbmltcG9ydCB7IEFwcFJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZWRJbkd1YXJkIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuL3NjZW5hcmlvL3NjZW5hcmlvLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4vYWRtaW4vY291cnNlL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvUmVzb2x2ZXIgfSBmcm9tICcuL3NjZW5hcmlvL3NjZW5hcmlvLnJlc29sdmVyJztcbi8vaW1wb3J0IHsgU2VsZWN0U2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlbGVjdC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBBZG1pbk1vZHVsZSB9IGZyb20gJy4vYWRtaW4vYWRtaW4ubW9kdWxlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTW9kdWxlIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgSGVscE1vZHVsZSB9IGZyb20gJy4vaGVscC9oZWxwLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9maWxlTW9kdWxlIH0gZnJvbSAnLi9wcm9maWxlL3Byb2ZpbGUubW9kdWxlJztcbmltcG9ydCB7IFNjZW5hcmlvTW9kdWxlIH0gZnJvbSAnLi9zY2VuYXJpby9zY2VuYXJpby5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uYXYvbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTWVuZGVscGVkZU1vZHVsZSB9IGZyb20gJy4vbWVuZGVscGVkZS9tZW5kZWxwZWRlLm1vZHVsZSdcbiBcbi8qKlxuICogVGhlIG1haW4gYm9vdHN0cmFwcGVkIG1vZHVsZVxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgIEhlbHBNb2R1bGUsXG4gICAgICBBZG1pbk1vZHVsZSxcbiAgICAgIFByb2ZpbGVNb2R1bGUsXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uTW9kdWxlLFxuICAgICAgU2NlbmFyaW9Nb2R1bGUsXG4gICAgICBNZW5kZWxwZWRlTW9kdWxlLFxuICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoQXBwUm91dGVzKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTmF2Q29tcG9uZW50LFxuICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgIFBhZ2VOb3RGb3VuZENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICBMb2dnZWRJbkd1YXJkLFxuICAgICAgU2NlbmFyaW9TZXJ2aWNlLFxuICAgICAgQ291cnNlU2VydmljZSxcbiAgICAgIFNjZW5hcmlvUmVzb2x2ZXIsXG4gICAgICAvL1NlbGVjdFNlcnZpY2VcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbmNvbnN0cnVjdG9yKGJyZWFkY3J1bWJzQ29uZmlnOiBNY0JyZWFkY3J1bWJzQ29uZmlnKSB7XG5cbiAgICBicmVhZGNydW1ic0NvbmZpZy5wb3N0UHJvY2VzcyA9ICh4KSA9PiB7XG5cbiAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBmaXJzdCBicmVhZGNydW1iIGFsd2F5cyBwb2ludHMgdG8gaG9tZVxuXG4gICAgICBsZXQgeSA9IHg7XG5cbiAgICAgIGlmKHgubGVuZ3RoICYmIHhbMF0udGV4dCAhPT0gJ0hvbWUnKSB7XG4gICAgICAgIHkgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0hvbWUnLFxuICAgICAgICAgICAgcGF0aDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF0uY29uY2F0KHgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geTtcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXBwUm91dGVzOiBSb3V0ZXMgPVxuICAgICAgW3tcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuICAgICAgfSxcbiAgICAgICB7XG4gICAgICAgIHBhdGg6ICcqKicsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50XG4gICAgICB9XTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FwcC5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODU5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2hvbWUvaG9tZS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaG9tZS9ob21lLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gODYxXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODYyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBGb3JtYXQgYSB1c2VyJ3Mgb3Igc3R1ZGVudHMgZnJpc3QgYW5kIGxhc3QgbmFtZSBhcyBcImZpcnN0TmFtZSBsYXN0TmFtZVwiXG4gKiAtIFdoZW4gcmV2ZXJzZSBpcyB0cnVlLCBmb3JtYXQgYXMgXCJsYXN0TmFtZSwgZmlyc3ROYW1lXCJcbiAqIC0gQWJsZSB0byBoYW5kbGUgd2hlbiBvbmx5IGZpcnN0IG9yIGxhc3QgbmFtZSBpcyBzZXRcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBwZXJzb24gfCBwZXJzb25OYW1lOmlzUmV2ZXJzZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPntmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9PC9jb2RlPiBiZWNvbWVzIFwiTWlja2V5IE1vdXNlXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlJldmVyc2Ugb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPntmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9PC9jb2RlPiBiZWNvbWVzIFwiTW91c2UsIE1pY2tleVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5GaXJzdCBuYW1lIG9ubHkgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e2ZpcnN0TmFtZTogXCJNaWNrZXlcIiwgbGFzdE5hbWU6IHVuZGVmaW5lZH08L2NvZGU+IGJlY29tZXMgXCJNaWNrZXlcIlxuKi9cbkBQaXBlKHtuYW1lOiAncGVyc29uTmFtZSd9KVxuZXhwb3J0IGNsYXNzIFBlcnNvbk5hbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBlcnNvbjogYW55LCByZXZlcnNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBsZXQgZk5hbWU6IHN0cmluZyA9IHBlcnNvbi5maXJzdE5hbWUgfHwgJyc7XG4gICAgbGV0IGxOYW1lOiBzdHJpbmcgPSBwZXJzb24ubGFzdE5hbWUgfHwgJyc7XG4gIGlmKHJldmVyc2Upe1xuICAgIHJldHVybiBsTmFtZSArIChmTmFtZSE9PScnICYmIGxOYW1lICE9PSAnJyA/ICcsICcgOiAnJykrZk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJyAnIDogJycpK2xOYW1lO1xuICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BpcGVzL3BlcnNvbi1uYW1lLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IGEgbGlzdCBvZiB1c2VyJ3Mgb3Igc3R1ZGVudHMgZnJpc3QgYW5kIGxhc3QgbmFtZSBhcyBcImZpcnN0TmFtZSBsYXN0TmFtZVwiXG4gKiAtIFdoZW4gcmV2ZXJzZSBpcyB0cnVlLCBmb3JtYXQgYXMgXCJsYXN0TmFtZSwgZmlyc3ROYW1lXCJcbiAqIC0gQWJsZSB0byBoYW5kbGUgd2hlbiBvbmx5IGZpcnN0IG9yIGxhc3QgbmFtZSBpcyBzZXRcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBwZW9wbGVMaXN0IHwgcGVvcGxlTGlzdE5hbWVzOmlzUmV2ZXJzZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlt7Zmlyc3ROYW1lOiBcIk1pY2tleVwiLCBsYXN0TmFtZTogXCJNb3VzZVwifSwge2ZpcnN0TmFtZTogXCJEb25hbGRcIiwgbGFzdE5hbWU6IFwiRHVja1wifV08L2NvZGU+IGJlY29tZXMgXCJNaWNrZXkgTW91c2UsIERvbmFsZCBEdWNrXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlJldmVyc2Ugb3VwdXQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+W3tmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogXCJEdWNrXCJ9XTwvY29kZT4gYmVjb21lcyBcIk1vdXNlLCBNaWNrZXk7IER1Y2ssIERvbmFsZFwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NaXNzaW5nIG5hbWVzIDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlt7Zmlyc3ROYW1lOiB1bmRlZmluZWQsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogdW5kZWZpbmVkfV08L2NvZGU+IGJlY29tZXMgXCJNb3VzZSwgRG9uYWxkXCJcbiAqL1xuQFBpcGUoe25hbWU6ICdwZW9wbGVMaXN0TmFtZXMnfSlcbmV4cG9ydCBjbGFzcyBQZW9wbGVMaXN0TmFtZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBlcnNvbkxpc3Q6IGFueVtdLCByZXZlcnNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgZm9yKGxldCBwZXJzb24gb2YgcGVyc29uTGlzdCl7XG4gICAgICBsZXQgZk5hbWU6IHN0cmluZyA9IHBlcnNvbi5maXJzdE5hbWUgfHwgJyc7XG4gICAgICBsZXQgbE5hbWU6IHN0cmluZyA9IHBlcnNvbi5sYXN0TmFtZSB8fCAnJztcbiAgICAgIGlmKG91dCAhPT0gJycgJiYgKGZOYW1lICE9PSAnJyB8fCBsTmFtZSAhPT0gJycpKXtcbiAgICAgICAgb3V0ICs9IChyZXZlcnNlID8gJzsgJyA6ICcsICcpO1xuICAgICAgfVxuICAgIGlmKHJldmVyc2Upe1xuICAgICAgb3V0ICs9IGxOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJywgJyA6ICcnKStmTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgb3V0ICs9IGZOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJyAnIDogJycpK2xOYW1lO1xuICAgICAgfVxuICAgIH0vLyBlbmQgZm9yXG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9wZW9wbGUtbGlzdC1uYW1lcy5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGhhZ2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BoYWdlLmludGVyZmFjZSc7XG5cbi8qKlxuICogRm9ybWF0IHRoZSB0ZXh0dWFsIHByZXNlbnRhdGlvbiBvZiBhIHBoYWdlIHN0cmFpbidzIHBhcmVudHNcbiAqIChpZiBhbnkpIHdoZW4gdmlld2luZyB0aGUgZGlhbG9nIGJveCBmb3IgYSBwaGFnZVxuICpcbiAqIFRoZSBgbnVtUGFyZW50c2AgdmFyaWFibGUgaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgb25lIG9mIHRoZVxuICogcGFyZW50cyBoYWQgYmVlbiBkZWxldGVkIGZyb20gdGhlIGRhdGFiYXNlIHdoZW4gYHBhcmVudHMubGVuZ3RoICE9IG51bVBhcmVudHNgXG4gKlxuICogTm90ZTogdGhlIHBoYWdlIGBzdHJhaW5OdW1gIGFyZSAwLWJhc2VkIGJ1dCBVSSBpcyAxLWJhc2VkIHNvXG4gKiB0aGUgc3RyYWluIG51bWJlciBpcyBhZGp1c3RlZFxuICpcbiAqICoqVXNhZ2U6KiogYHt7cGFyZW50c0xpc3QgfCBwaGFnZVBhcmVudHM6bnVtUGFyZW50c319YFxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk9uZSBwYXJlbnQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e3BhcmVudHM6IFt7aWQ6ICdpZDEnLCBzdHJhaW5OdW06ICc0J31dLCBudW1QYXJlbnRzOiAxfTwvY29kZT4gYmVjb21lcyBcIlN0cmFpbiA1XCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlR3byBwYXJlbnRzOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e3BhcmVudHM6IFt7aWQ6ICdpZDEnLCBzdHJhaW5OdW06IDR9LCB7aWQ6ICdpZDInLCBzdHJhaW5OdW06IDEwfV0sIG51bVBhcmVudHM6IDJ9PC9jb2RlPiBiZWNvbWVzIFwiU3RyYWlucyA1IGFuZCAxMVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ud28gcGFyZW50cyBidXQgbWlzc2luZyBvbmU6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT57cGFyZW50czogW3tpZDogJ2lkMycsIHN0cmFpbk51bTogOH1dLCBudW1QYXJlbnRzOiAyfTwvY29kZT4gYmVjb21lcyBcIlN0cmFpbnMgOSBhbmQgP1wiXG4gKi9cbkBQaXBlKHtuYW1lOiAncGhhZ2VQYXJlbnRzJ30pXG5leHBvcnQgY2xhc3MgUGhhZ2VQYXJlbnRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShwYXJlbnRzOiBQaGFnZVtdLCBudW1QYXJlbnRzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBvdXQgPSAnJztcbiAgICBpZihudW1QYXJlbnRzID09PSB1bmRlZmluZWQpe1xuICAgICAgbnVtUGFyZW50cyA9IHBhcmVudHMubGVuZ3RoXG4gICAgfVxuICAgIGlmKHBhcmVudHMubGVuZ3RoID09PSAwKXtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGxldCBzb3J0ZWQ6IFBoYWdlW10gPSBwYXJlbnRzLnNvcnQoKG4xLCBuMik9PntyZXR1cm4gbjEuc3RyYWluTnVtIC0gbjIuc3RyYWluTnVtfSk7XG4gICAgbGV0IG51bXMgPSBzb3J0ZWQubWFwKChwaGFnZSk9PntyZXR1cm4gKHBoYWdlLnN0cmFpbk51bSsxKS50b1N0cmluZygpfSk7XG5cbiAgICBpZihzb3J0ZWQubGVuZ3RoID09PSAxICYmIG51bVBhcmVudHMgPT09IDEpe1xuICAgICAgb3V0ID0gJ1N0cmFpbiAnICsgbnVtc1swXTtcbiAgICB9IGVsc2UgaWYoc29ydGVkLmxlbmd0aCA9PT0gMSAmJiBudW1QYXJlbnRzID09PSAyKXtcbiAgICAgIG91dCA9ICdTdHJhaW5zICcgKyBudW1zWzBdICsgJyBhbmQgPyc7XG4gICAgfSBlbHNlIGlmKHNvcnRlZC5sZW5ndGggPT09IDIgJiYgbnVtUGFyZW50cyA9PT0gMil7XG4gICAgICBvdXQgPSAnU3RyYWlucyAnICsgbnVtc1swXSArICcgYW5kICcgKyBudW1zWzFdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9waGFnZS1wYXJlbnRzLnBpcGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUmVxdWlyZWRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2VtYWlsLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybVBhc3N3b3JkRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50Jztcbi8qKlxuICogVGhlIEZvcm0gRXJyb3JzIE1vZHVsZSBjb250YWlucyB0ZW1wbGF0ZXMgZm9yIFJlYWN0aXZlRm9ybVxuICogaW5wdXQgZXJyb3JzIHRoYXQgYXJlIG5lZWRlZCBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogU2F2ZXMgdGltZSBmcm9tIGhhdmluZyB0byBjcmVhdGUgdGhlIHNhbWUgZXJyb3IgbWVzc2FnZXMgYWNyb3NzXG4gKiBudW1lcm91cyBwYWdlcyBhbmQga2VlcHMgdGhlIGVycm9yIG1lc3NhZ2VzIGNvbnNpc3RhbnRcbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZXF1aXJlZEVycm9yQ29tcG9uZW50LFxuICAgIEVtYWlsRXJyb3JDb21wb25lbnQsXG4gICAgUGFzc3dvcmRFcnJvckNvbXBvbmVudCxcbiAgICBDb25maXJtUGFzc3dvcmRFcnJvckNvbXBvbmVudFxuICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIFJlcXVpcmVkRXJyb3JDb21wb25lbnQsXG4gICAgICBFbWFpbEVycm9yQ29tcG9uZW50LFxuICAgICAgUGFzc3dvcmRFcnJvckNvbXBvbmVudCxcbiAgICAgIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUVycm9yc01vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZm9ybS1lcnJvcnMubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JlcXVpcmVkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9yZXF1aXJlZC1lcnJvci50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXF1aXJlZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZmllbGQ6IEFic3RyYWN0Q29udHJvbDtcbiAgQElucHV0KCkgdGV4dExhYmVsOiBzdHJpbmc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODY4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBIYW5kbGUgZW1haWwgcmVsYXRlZCBlcnJvciBtZXNzYWdlcyBzdWNoIGFzXG4gKiAtIGlzIHJlcXVpcmVkOiBgRW1haWwgaXMgcmVxdWlyZWRgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZW1haWwtZXJyb3InLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2VtYWlsLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEVtYWlsRXJyb3JDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGlucHV0IGVtYWlsIGZyb20gZm9ybTsgaW5jbHVkZXMgZXJyb3JzIGlmIGFwcGxpY2FibGVcbiAgICovXG4gIEBJbnB1dCgpIGVtYWlsOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODcwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwYXNzd29yZC1lcnJvcicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRFcnJvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODcyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb25maXJtLXBhc3N3b3JkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uZmlybVBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODc0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlbGVjdERyb3BTZXJ2aWNlLCBzZWxlY3REcm9wU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NlbGVjdC1kcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0RHJvcENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWRyb3AuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3QtZHJvcC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0LWRyb3AuY29tcG9uZW50JztcblxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbe3Byb3ZpZGU6IFNlbGVjdERyb3BTZXJ2aWNlLCB1c2VGYWN0b3J5OiBzZWxlY3REcm9wU2VydmljZUZhY3Rvcnl9XTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2VsZWN0RHJvcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWxlY3REcm9wQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJze1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2VsZWN0RHJvcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3AubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFkbWluUm91dGVzIH0gZnJvbSAnLi9hZG1pbi5yb3V0ZXMnO1xuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuaW1wb3J0IHsgQWRtaW5HdWFyZCB9IGZyb20gJy4vYWRtaW4uZ3VhcmQuc2VydmljZSc7XG5cbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zdHVkZW50L3N0dWRlbnQuc2VydmljZSc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBhZG1pbiBmdW5jdGlvbnMgaGF2aW5nIHRvIGRlYWwgd2l0aCBzdHVkZW50cyBhbmQgY291cnNlcyB0aGF0IHNob3VsZCBub3QgYmUgYWNjZXNzZWQgYnkgYSByZWd1bGFyIHVzZXJcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQWRtaW5Sb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIEFkbWluSG9tZUNvbXBvbmVudCxcbiAgICBOb3RBdXRoQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFkbWluR3VhcmQsXG4gICAgU3R1ZGVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbk1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFkbWluR3VhcmQgfSBmcm9tICcuL2FkbWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VkSW5HdWFyZCB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEFkbWluUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnYWRtaW4nLFxuICAgIGRhdGE6IHtcbiAgICAgIGJyZWFkY3J1bWJzOiAnQWRtaW4nXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTpbTG9nZ2VkSW5HdWFyZF0sXG4gICAgY2FuQWN0aXZhdGVDaGlsZDogW0FkbWluR3VhcmRdLFxuICAgIGNvbXBvbmVudDogQWRtaW5Db21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2NvdXJzZXMnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2NvdXJzZS9jb3Vyc2UubW9kdWxlJylbJ0NvdXJzZU1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ0NvdXJzZXMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdzdHVkZW50cycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7ICAocmVxdWlyZSBhcyBhbnkpLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmU6IGFueSkgeyAgICByZXNvbHZlKHJlcXVpcmUoJy4vc3R1ZGVudC9zdHVkZW50Lm1vZHVsZScpWydTdHVkZW50TW9kdWxlJ10pOyAgfSwgZnVuY3Rpb24oZTogYW55KSB7ICAgIHJlamVjdCh7IGxvYWRDaHVua0Vycm9yOiB0cnVlLCBkZXRhaWxzOiBlIH0pOyAgfSk7fSkgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnU3R1ZGVudHMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEFkbWluSG9tZUNvbXBvbmVudFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhZG1pbi9ub3QtYXV0aCcsXG4gICAgY29tcG9uZW50OiBOb3RBdXRoQ29tcG9uZW50XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2FkbWluLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODc4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGgudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODgwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJ1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRlcyB9IGZyb20gJy4vYXV0aGVudGljYXRpb24ucm91dGVzJztcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSB3aGljaCBkZWFscyB3aXRoIGFueXRoaW5nIHJlbGF0ZWQgdG8gYXV0aGVudGljYXRpbmcgdXNlcnMsXG4gKiBpLmUuIGxvZ2dpbmcgaW4vb3V0IHVzZXJzIGFuZCByZXNldHRpbmcgZm9yZ290dGVuIHBhc3N3b3Jkc1xuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQXV0aGVudGljYXRpb25Sb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2lnbmluQ29tcG9uZW50LFxuICAgICAgICBTaWdudXBDb21wb25lbnQsXG4gICAgICBTaWdub3V0Q29tcG9uZW50LFxuICAgICAgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQsXG4gICAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbk1vZHVsZSB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25Sb3V0ZXM6IFJvdXRlcyA9IFt7XG4gICAgcGF0aDogJ2F1dGhlbnRpY2F0aW9uJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICB7IHBhdGg6ICdzaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdzaWdub3V0JywgY29tcG9uZW50OiBTaWdub3V0Q29tcG9uZW50IH0sXG4gICAgICB7cGF0aDogJ2ZvcmdldC1wYXNzd29yZCcsIGNvbXBvbmVudDogRm9yZ2V0UGFzc3dvcmRDb21wb25lbnR9LFxuICAgICAge3BhdGg6ICdyZXNldC1wYXNzd29yZC86dG9rZW4nLCBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRDb21wb25lbnR9XG4gICAgXVxufV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODg2XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBIZWxwUm91dGVzIH0gZnJvbSAnLi9oZWxwLnJvdXRlcyc7XG5pbXBvcnQgeyBIZWxwQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWxwQ3JpY2tldENvbXBvbmVudCB9IGZyb20gJy4vaGVscC1jcmlja2V0L2hlbHAtY3JpY2tldC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChIZWxwUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBIZWxwQ29tcG9uZW50LFxuICAgIEhlbHBDcmlja2V0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVscE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaGVscC9oZWxwLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIZWxwQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWxwQ3JpY2tldENvbXBvbmVudCB9IGZyb20gJy4vaGVscC1jcmlja2V0L2hlbHAtY3JpY2tldC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgSGVscFJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ2hlbHAnLFxuICAgIGNvbXBvbmVudDogSGVscENvbXBvbmVudCxcbiAgICBkYXRhOiB7YnJlYWRjcnVtYnM6ICdIZWxwJ30sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtwYXRoOiAnY3JpY2tldCcsXG4gICAgICBjb21wb25lbnQ6IEhlbHBDcmlja2V0Q29tcG9uZW50LFxuICAgICAgZGF0YToge2JyZWFkY3J1bWJzOiAnQ3JpY2tldCd9XG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaGVscC9oZWxwLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaGVscC9oZWxwLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaGVscC9oZWxwLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2hlbHAvaGVscC5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaGVscC9oZWxwLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gODkwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaGVscC9oZWxwLWNyaWNrZXQvaGVscC1jcmlja2V0LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaGVscC9oZWxwLWNyaWNrZXQvaGVscC1jcmlja2V0LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgUHJvZmlsZVJvdXRlcyB9IGZyb20gJy4vcHJvZmlsZS5yb3V0ZXMnO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoUHJvZmlsZVJvdXRlcylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVXNlclByb2ZpbGVDb21wb25lbnQsXG4gICAgVXBkYXRlUGFzc3dvcmRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvZmlsZVNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvZ2dlZEluR3VhcmQgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdwcm9maWxlJyxcbiAgICBjYW5BY3RpdmF0ZTogW0xvZ2dlZEluR3VhcmRdLFxuICAgIGNhbkFjdGl2YXRlQ2hpbGQ6IFtMb2dnZWRJbkd1YXJkXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBwYXRoOiAndXBkYXRlLXBhc3N3b3JkJyxcbiAgICAgIGNvbXBvbmVudDogVXBkYXRlUGFzc3dvcmRDb21wb25lbnQsXG4gICAgICAgZGF0YToge1xuICAgICAgICAgYnJlYWRjcnVtYnM6ICdVcGRhdGUgcGFzc3dvcmQnXG4gICAgICAgfVxuICAgICAgfSxcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogVXNlclByb2ZpbGVDb21wb25lbnRcbiAgfVxuICAgIF0sXG4gICAgZGF0YToge1xuICAgICAgYnJlYWRjcnVtYnM6ICdQcm9maWxlJ1xuICAgIH1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OTRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODk1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBTY2VuYXJpb1JvdXRlcyB9IGZyb20gJy4vc2NlbmFyaW8ucm91dGVzJztcbmltcG9ydCB7IFNjZW5hcmlvQ29tcG9uZW50IH0gZnJvbSAnLi9zY2VuYXJpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9saXN0LmNvbXBvbmVudCc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBzY2VuYXJpby1yZWxhdGVkIGNvbXBvbmVudHMgYW5kIG1vZHVsZXNcbiAqXG4gKiBNYWlubHkgdXNlZCB0byBiZSBhYmxlIHRvIGFzeW5jIGxvYWQgdGhlIHNwZWNpZmljIHNjZW5hcmlvcyB2aWEgdGhlIHtAbGluayBMb2NhdGlvbk1vZHVsZX1cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoU2NlbmFyaW9Sb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNjZW5hcmlvQ29tcG9uZW50LFxuICAgIExpc3RDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTY2VuYXJpb01vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTY2VuYXJpb0NvbXBvbmVudCB9IGZyb20gJy4vc2NlbmFyaW8uY29tcG9uZW50JztcbmltcG9ydCB7IFNjZW5hcmlvUmVzb2x2ZXIgfSBmcm9tICcuL3NjZW5hcmlvLnJlc29sdmVyJztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgU2NlbmFyaW9Sb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdzY2VuYXJpb3MnLFxuICAgIGRhdGE6IHtcbiAgICAgIGJyZWFkY3J1bWJzOiAnU2NlbmFyaW9zJ1xuICAgIH0sXG4gICAgY29tcG9uZW50OiBTY2VuYXJpb0NvbXBvbmVudCxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnOnNjZW5JZCcsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7ICAocmVxdWlyZSBhcyBhbnkpLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmU6IGFueSkgeyAgICByZXNvbHZlKHJlcXVpcmUoJy4vbG9jYXRpb24vbG9jYXRpb24ubW9kdWxlJylbJ0xvY2F0aW9uTW9kdWxlJ10pOyAgfSwgZnVuY3Rpb24oZTogYW55KSB7ICAgIHJlamVjdCh7IGxvYWRDaHVua0Vycm9yOiB0cnVlLCBkZXRhaWxzOiBlIH0pOyAgfSk7fSkgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHNjZW5hcmlvOiBTY2VuYXJpb1Jlc29sdmVyXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ3t7IHNjZW5hcmlvLmxhYmVsIH19J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50XG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8ucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zY2VuYXJpby9saXN0L2xpc3QudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zY2VuYXJpby9saXN0L2xpc3QudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODk4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbXBvbmVudDtcbiAqIExpbmtzIHRoZSBuYXYgYmFyIHRvIHRoZSBjb250ZW50IG5lZWRlZCBiYXNlZCBvbiB0aGUgdXJsXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY3JpY2tldC1hcHAnLFxuICAgIHRlbXBsYXRlOiAnPGNyaWNrZXQtbmF2PjwvY3JpY2tldC1uYXY+PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0Pidcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5cbi8qKlxuICogTmF2aWdhdGlvbiBiYXIgYXQgdGhlIHRvcCBvZiB0aGUgc2l0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NyaWNrZXQtbmF2JyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9uYXYudGVtcGxhdGUuaHRtbCcpLFxuICAgIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbmF2LnN0eWxlLmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIFVzZXIgb2JqZWN0IHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHByb2ZpbGUgbGluayBzaG91bGQgYmVcbiAgICogaW5jbHVkZWQgaW4gdGhlIG5hdiBiYXJcbiAgICovXG4gIHByaXZhdGUgdXNlcjogVXNlcjtcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBzdHJlYW0gZm9yIHRoZSBhdXRoZXRuaWNhdGlvbiBzZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYXRlIHRoZSBjb21wb25lbnQgYnkgZ2V0dGluZyB0aGUgY3VycmVudCB1c2VyXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlciRcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICB0aGlzLnVzZXIgPSByZXNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IHRoZSBjb21wb25lbnQgYnkgdW5zdWJzY3JpYmluZywgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL25hdi9uYXYuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9uYXYvbmF2LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbmF2L25hdi50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MDFcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9uYXYvbmF2LnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9uYXYvbmF2LnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3B0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlRnJpZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9zY2VuYXJpb3MvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVuZGVscGVkZUxhYnJvb21Db21wb25lbnQgfSBmcm9tICcuL3NjZW5hcmlvcy9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IE1lbmRlbHBlZGVTY2VuYXJpb3NDb21wb25lbnQgfSBmcm9tICcuL3NjZW5hcmlvcy9zY2VuYXJpb3MuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuL3NjZW5hcmlvcy9zY2VuYXJpb3Muc2VydmljZSdcbmltcG9ydCB7IE1lbmRlbHBlZGVSb3V0ZXMgfSBmcm9tICcuL21lbmRlbHBlZGUucm91dGVzJztcbmltcG9ydCB7IE1lbmRlbHBlZGVDb21wb25lbnQgfSBmcm9tICcuL21lbmRlbHBlZGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuLyoqXG4gKiBNb2R1bGUgZm9yIE1lbmRlbHBlZGUtcmVsYXRlZCBjb21wb25lbnRzIGFuZCBtb2R1bGVzXG4gKlxuICogXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKE1lbmRlbHBlZGVSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE9wdGlvbnNDb21wb25lbnQsXG4gICAgTWVuZGVscGVkZUZyaWRnZUNvbXBvbmVudCxcbiAgICBNZW5kZWxwZWRlTGFicm9vbUNvbXBvbmVudCxcbiAgICBNZW5kZWxwZWRlU2NlbmFyaW9zQ29tcG9uZW50LFxuICAgIE1lbmRlbHBlZGVDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1lbmRlbHBlZGVNb2R1bGUge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tZW5kZWxwZWRlLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbWVuZGVscGVkZS9vcHRpb25zL29wdGlvbnMudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL29wdGlvbnMvb3B0aW9ucy50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MDRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbmRlbHBlZGUtZnJpZGdlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbXBlZGUtZnJpZGdlLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9tcGVkZS1mcmlkZ2Uuc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE1lbmRlbHBlZGVGcmlkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgdXNlcjogVXNlcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcblxuICB9XG4gIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2UudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1mcmlkZ2UvbXBlZGUtZnJpZGdlLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2Uuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2Uuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MDdcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21wZWRlLWxhYnJvb20nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tcGVkZS1sYWJyb29tLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBNZW5kZWxwZWRlTGFicm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICB1c2VyOiBVc2VyO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gICAgXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuXG4gIH1cbiAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20uY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3Mvc2NlbmFyaW9zLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3Mvc2NlbmFyaW9zLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3B0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlQ29tcG9uZW50IH0gZnJvbSAnLi9tZW5kZWxwZWRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9zQ29tcG9uZW50IH0gZnJvbSAnLi9zY2VuYXJpb3Mvc2NlbmFyaW9zLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBNZW5kZWxwZWRlUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoIDogJ21lbmRlbHBlZGUnLFxuICAgIGNvbXBvbmVudCA6IE1lbmRlbHBlZGVDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgYnJlYWRjcnVtYnM6ICdtZW5kZWxwZWRlJ1xuICAgIH0sXG5cbiAgICBjaGlsZHJlbjpbXG4gICAgICB7XG4gICAgICAgIHBhdGggOiAnJywgXG4gICAgICAgIGNvbXBvbmVudCA6IE9wdGlvbnNDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGggOiAnbXBlZGUtc2NlbmFyaW9zJywgXG4gICAgICAgIGNvbXBvbmVudCA6IE1lbmRlbHBlZGVTY2VuYXJpb3NDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ2xhYnJvb20nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=