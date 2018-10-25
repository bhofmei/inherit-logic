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
const http_1 = __webpack_require__(53);
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
        templateUrl: __webpack_require__(857),
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
        templateUrl: __webpack_require__(858),
        styleUrls: [__webpack_require__(859)]
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
        templateUrl: __webpack_require__(876)
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
        templateUrl: __webpack_require__(877)
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
        templateUrl: __webpack_require__(878)
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
        templateUrl: __webpack_require__(881)
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
        templateUrl: __webpack_require__(882)
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
        templateUrl: __webpack_require__(883)
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
        templateUrl: __webpack_require__(884)
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
        templateUrl: __webpack_require__(887),
        styleUrls: [__webpack_require__(888)]
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
        templateUrl: __webpack_require__(891)
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
        templateUrl: __webpack_require__(892)
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
        templateUrl: __webpack_require__(895)
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
const authentication_service_1 = __webpack_require__(18);
let OptionsComponent = class OptionsComponent {
    constructor(_authenticationService) {
        this._authenticationService = _authenticationService;
    }
    ngOnInit() {
        this.user = this._authenticationService.getUser();
    }
};
OptionsComponent = __decorate([
    core_1.Component({
        selector: 'options',
        templateUrl: __webpack_require__(901)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], OptionsComponent);
exports.OptionsComponent = OptionsComponent;


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
        templateUrl: __webpack_require__(905)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], MendelpedeLabroomComponent);
exports.MendelpedeLabroomComponent = MendelpedeLabroomComponent;


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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
let MendelpedeComponent = class MendelpedeComponent {
};
MendelpedeComponent = __decorate([
    core_1.Component({
        selector: 'mendelpede',
        templateUrl: __webpack_require__(907)
    })
], MendelpedeComponent);
exports.MendelpedeComponent = MendelpedeComponent;


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
        templateUrl: __webpack_require__(860)
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], ConfirmDeleteDialogComponent);
exports.ConfirmDeleteDialogComponent = ConfirmDeleteDialogComponent;


/***/ }),

/***/ 52:
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
const confirm_delete_dialog_component_1 = __webpack_require__(415);
const person_name_pipe_1 = __webpack_require__(861);
const people_list_names_pipe_1 = __webpack_require__(862);
const phage_parents_pipe_1 = __webpack_require__(863);
const form_errors_module_1 = __webpack_require__(864);
const select_drop_module_1 = __webpack_require__(873);
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

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = __webpack_require__(230);
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(855);
if (process.env.NODE_ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(317)))

/***/ }),

/***/ 855:
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
const ngx_breadcrumbs_1 = __webpack_require__(179);
const app_routes_1 = __webpack_require__(856);
const authentication_service_1 = __webpack_require__(18);
const logged_in_guard_service_1 = __webpack_require__(120);
const scenario_service_1 = __webpack_require__(118);
const course_service_1 = __webpack_require__(182);
const scenario_resolver_1 = __webpack_require__(183);
const shared_module_1 = __webpack_require__(52);
const admin_module_1 = __webpack_require__(874);
const authentication_module_1 = __webpack_require__(879);
const help_module_1 = __webpack_require__(885);
const profile_module_1 = __webpack_require__(889);
const scenario_module_1 = __webpack_require__(893);
const app_component_1 = __webpack_require__(896);
const nav_component_1 = __webpack_require__(897);
const page_not_found_component_1 = __webpack_require__(393);
const home_component_1 = __webpack_require__(394);
const mendelpede_module_1 = __webpack_require__(900);
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

/***/ 856:
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

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/page-not-found/page-not-found.template.html";

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/home/home.template.html";

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/home/home.style.css";

/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/confirm-delete-dialog.template.html";

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
const common_1 = __webpack_require__(14);
const forms_1 = __webpack_require__(13);
const forms_2 = __webpack_require__(13);
const required_error_component_1 = __webpack_require__(865);
const email_error_component_1 = __webpack_require__(867);
const password_error_component_1 = __webpack_require__(869);
const confirm_password_error_component_1 = __webpack_require__(871);
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

/***/ 865:
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
        templateUrl: __webpack_require__(866)
    })
], RequiredErrorComponent);
exports.RequiredErrorComponent = RequiredErrorComponent;


/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/required-error.template.html";

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
let EmailErrorComponent = class EmailErrorComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.AbstractControl)
], EmailErrorComponent.prototype, "email", void 0);
EmailErrorComponent = __decorate([
    core_1.Component({
        selector: 'email-error',
        templateUrl: __webpack_require__(868)
    })
], EmailErrorComponent);
exports.EmailErrorComponent = EmailErrorComponent;


/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/email-error.template.html";

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
let PasswordErrorComponent = class PasswordErrorComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.AbstractControl)
], PasswordErrorComponent.prototype, "password", void 0);
PasswordErrorComponent = __decorate([
    core_1.Component({
        selector: 'password-error',
        templateUrl: __webpack_require__(870)
    })
], PasswordErrorComponent);
exports.PasswordErrorComponent = PasswordErrorComponent;


/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/password-error.template.html";

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
let ConfirmPasswordErrorComponent = class ConfirmPasswordErrorComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.AbstractControl)
], ConfirmPasswordErrorComponent.prototype, "confirmPassword", void 0);
ConfirmPasswordErrorComponent = __decorate([
    core_1.Component({
        selector: 'confirm-password-error',
        templateUrl: __webpack_require__(872)
    })
], ConfirmPasswordErrorComponent);
exports.ConfirmPasswordErrorComponent = ConfirmPasswordErrorComponent;


/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/confirm-password-error.template.html";

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
const router_1 = __webpack_require__(22);
const shared_module_1 = __webpack_require__(52);
const admin_routes_1 = __webpack_require__(875);
const admin_component_1 = __webpack_require__(397);
const admin_home_component_1 = __webpack_require__(398);
const not_auth_component_1 = __webpack_require__(399);
const admin_guard_service_1 = __webpack_require__(396);
const student_service_1 = __webpack_require__(414);
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

/***/ 875:
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
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(1).then((function (require) { resolve(__webpack_require__(908)['CourseModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
                data: {
                    breadcrumbs: 'Courses'
                }
            },
            {
                path: 'students',
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(2).then((function (require) { resolve(__webpack_require__(909)['StudentModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
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

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/admin.template.html";

/***/ }),

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/admin-home/admin-home.template.html";

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/not-auth/not-auth.template.html";

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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const common_1 = __webpack_require__(14);
const router_1 = __webpack_require__(22);
const shared_module_1 = __webpack_require__(52);
const authentication_routes_1 = __webpack_require__(880);
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

/***/ 880:
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

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/signin/signin.template.html";

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/signup/signup.template.html";

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/forget-password/forget-password.template.html";

/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/reset-password/reset-password.template.html";

/***/ }),

/***/ 885:
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
const shared_module_1 = __webpack_require__(52);
const help_routes_1 = __webpack_require__(886);
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

/***/ 886:
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

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help.template.html";

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help.style.css";

/***/ }),

/***/ 889:
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
const shared_module_1 = __webpack_require__(52);
const profile_routes_1 = __webpack_require__(890);
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

/***/ 890:
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

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/profile/user-profile/user-profile.template.html";

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/profile/update-password/update-password.template.html";

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
const router_1 = __webpack_require__(22);
const shared_module_1 = __webpack_require__(52);
const scenario_routes_1 = __webpack_require__(894);
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

/***/ 894:
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
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(0).then((function (require) { resolve(__webpack_require__(910)['LocationModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
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

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/list/list.template.html";

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

/***/ 897:
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
        templateUrl: __webpack_require__(898),
        styleUrls: [__webpack_require__(899)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], NavComponent);
exports.NavComponent = NavComponent;


/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/nav/nav.template.html";

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/nav/nav.style.css";

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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(22);
const options_component_1 = __webpack_require__(411);
const mpede_fridge_component_1 = __webpack_require__(902);
const mpede_labroom_component_1 = __webpack_require__(412);
const mendelpede_routes_1 = __webpack_require__(906);
const mendelpede_component_1 = __webpack_require__(413);
const shared_module_1 = __webpack_require__(52);
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
            mendelpede_component_1.MendelpedeComponent,
        ]
    })
], MendelpedeModule);
exports.MendelpedeModule = MendelpedeModule;


/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/options/options.template.html";

/***/ }),

/***/ 902:
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
        templateUrl: __webpack_require__(903),
        styleUrls: [__webpack_require__(904)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], MendelpedeFridgeComponent);
exports.MendelpedeFridgeComponent = MendelpedeFridgeComponent;


/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/mpede-fridge/mpede-fridge.template.html";

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/mpede-fridge/mpede-fridge.style.css";

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/mpede-labroom/mpede-labroom.template.html";

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const options_component_1 = __webpack_require__(411);
const mendelpede_component_1 = __webpack_require__(413);
const mpede_labroom_component_1 = __webpack_require__(412);
exports.MendelpedeRoutes = [
    {
        path: 'mendelpede',
        component: mendelpede_component_1.MendelpedeComponent,
        data: {
            breadcrumbs: 'mendelpede'
        },
        children: [
            {
                path: 'options',
                component: options_component_1.OptionsComponent
            },
            {
                path: 'mpede-labroom',
                component: mpede_labroom_component_1.MendelpedeLabroomComponent,
                data: {
                    breadcrumbs: 'labroom'
                }
            }
        ]
    }
];


/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/mendelpede.template.html";

/***/ })

},[854]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3Auc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8ucmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLmd1YXJkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLXBhc3N3b3JkLnZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25vdXQvc2lnbm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3JlYWQtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Jvb3RzdHJhcC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcHAucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hvbWUvaG9tZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaG9tZS9ob21lLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BpcGVzL3BlcnNvbi1uYW1lLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9wZW9wbGUtbGlzdC1uYW1lcy5waXBlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGhhZ2UtcGFyZW50cy5waXBlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2Zvcm0tZXJyb3JzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9yZXF1aXJlZC1lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9lbWFpbC1lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9wYXNzd29yZC1lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9jb25maXJtLXBhc3N3b3JkLWVycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3AubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4ucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGgudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xpc3QvbGlzdC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL25hdi9uYXYuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbmF2L25hdi50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbmF2L25hdi5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9vcHRpb25zL29wdGlvbnMudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2UudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tZW5kZWxwZWRlLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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O1FBQTdDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7SUFFakUsQ0FBQztJQVBELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVwRCxDQUFDO0NBTUY7QUFiWSx5QkFBeUI7SUFMckMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsV0FBVyxFQUFFLG1CQUFPLENBQUMsR0FBOEIsQ0FBQztRQUNwRCxTQUFTLEVBQUUsQ0FBQyxtQkFBTyxDQUFDLEdBQTBCLENBQUMsQ0FBQztLQUNqRCxDQUFDO3FDQVU0Qyw4Q0FBcUI7R0FUdEQseUJBQXlCLENBYXJDO0FBYlksOERBQXlCOzs7Ozs7OztBQ1R0Qyx5Rzs7Ozs7OztBQ0FBLHFHOzs7Ozs7O0FDQUEsMkc7Ozs7Ozs7Ozs7QUNDQSxxREFBOEQ7QUFDOUQsd0RBQTZEO0FBRTdELDJEQUFvRjtBQUV2RSx3QkFBZ0IsR0FBVztJQUN0QztRQUNFLElBQUksRUFBRyxZQUFZO1FBQ25CLFNBQVMsRUFBRywwQ0FBbUI7UUFDL0IsSUFBSSxFQUFFO1lBQ0osV0FBVyxFQUFFLFlBQVk7U0FDMUI7UUFFRCxRQUFRLEVBQUM7WUFDUDtnQkFDRSxJQUFJLEVBQUcsU0FBUztnQkFDaEIsU0FBUyxFQUFHLG9DQUFnQjthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRyxlQUFlO2dCQUN0QixTQUFTLEVBQUcsb0RBQTBCO2dCQUN0QyxJQUFJLEVBQUU7b0JBQ0osV0FBVyxFQUFFLFNBQVM7aUJBQ3ZCO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQzs7Ozs7Ozs7QUM1QkYsMEYiLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBCZWhhdmlvclN1YmplY3QgLCAgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgU2NlbmFyaW8sIEZyaWRnZSwgRnJpZGdlUGhhZ2UsIEdlbm90eXBlUGhhZ2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBTY2VuYXJpby9mcmlkZ2UgcmVsYXRlZCBmdW5jdGlvbnMgdGhhdCBnZXQvc2VuZCBkYXRhIHRvIHRoZSBiYWNrZW5kIHNlcnZlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX2Jhc2VVUkwgPSAnYXBpL2NyaWNrZXQnO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2NlbmFyaW8gZGV0YWlscyB3aGljaCBpcyBuZWVkZWQgd2hlblxuICAgKiBwZXJmb3JtaW5nIGNyb3NzZXNcbiAgICovXG4gICAgcHJpdmF0ZSBfc2NlbmFyaW9EZXRhaWxzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgICBnZXRTY2VuYXJpb0RldGFpbHMgPSB0aGlzLl9zY2VuYXJpb0RldGFpbHMuYXNPYnNlcnZhYmxlKCk7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBzY2VuYXJpbyBndWVzc2VzXG4gICAqL1xuICAgIHByaXZhdGUgX3NjZW5hcmlvR3Vlc3NlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih7fSk7XG4gICAgZ2V0R3Vlc3NlcyA9IHRoaXMuX3NjZW5hcmlvR3Vlc3Nlcy5hc09ic2VydmFibGUoKTtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGNvZGVcbiAgICpcbiAgICogVXNlZCBieSBmcmlkZ2UgYW5kIGxvY2F0aW9uIGNvbXBvbmVudHNcbiAgICogdG8gZ2V0IHRoZSBjb2RlIHdpdGhvdXQgdGhlIHJvdXRlXG4gICAqL1xuICAgIHByaXZhdGUgX3NjZW5hcmlvQ29kZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gICAgZ2V0U2NlbmFyaW9Db2RlID0gdGhpcy5fc2NlbmFyaW9Db2RlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IHRoZSBzZXJ2aWNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0h0dHBDbGllbnR9IF9odHRwIEFuZ3VhciBtZWNoYW5pc20gdG8gbWFrZSBjYWxscyB0byBiYWNrZW5kIHNlcnZlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBzYXZlIHNjZW5hcmlvIHN0dWZmOlxuICAgKiBzY2VuYXJpb0RldGFpbHMsIHNjZW5hcmlvR3Vlc3NlcywgYW5kIHNjZW5hcmlvQ29kZVxuICAgKlxuICAgKiBVc2VkIHdoZW4gbmF2aWdhdGluZyBhd2F5IGZyb20gc2NlbmFyaW8gY29tcG9uZW50XG4gICAqL1xuICByZXNldFNjZW5hcmlvKCkge1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0RldGFpbHMubmV4dCgnJyk7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvR3Vlc3Nlcy5uZXh0KHt9KTtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9Db2RlLm5leHQoJycpO1xuICAgIH1cblxuICAvKipcbiAgKiBTZXQgdGhlIHNjZW5hcmlvIGRldGFpbHMgYW5kIHNjZW5hcmlvIGd1ZXNzZXNcbiAgKlxuICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuYXJpb0RldGFpbHMgLSBzY2VuYXJpbyBkZXRhaWxzXG4gICogLSBuZWNlc3NhcnkgZm9yIHBlcmZvcm1pbmcgZXhwZXJpbWVudHNcbiAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbmFyaW9HdWVzc2VzIGN1cnJlbnQgc2NlbmFyaW8gZ3Vlc3Nlc1xuICAqL1xuICBzZXRTY2VuYXJpbyhzY2VuYXJpb0RldGFpbHM6IHN0cmluZywgc2NlbmFyaW9HdWVzc2VzOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHNjZW5hcmlvRGV0YWlscyAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX3NjZW5hcmlvRGV0YWlscy5uZXh0KHNjZW5hcmlvRGV0YWlscyk7XG4gICAgICAgIGlmIChzY2VuYXJpb0RldGFpbHMgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLl9zY2VuYXJpb0d1ZXNzZXNcbiAgICAgICAgICAgICAgLm5leHQoSlNPTi5wYXJzZShzY2VuYXJpb0d1ZXNzZXMpKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIExpc3QgYXZhaWxhYmxlIHNjZW5hcmlvc1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTY2VuYXJpb1tdPn0gbGlzdCBvZiBzY2VuYXJpb3NcbiAgICovXG4gICAgbGlzdFNjZW5hcmlvcygpOiBPYnNlcnZhYmxlPFNjZW5hcmlvW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8U2NlbmFyaW9bXT4odGhpcy5fYmFzZVVSTClcbiAgICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhIHNwZWNpZmljIHNjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gaWRlbnRpZmllclxuICAgKlxuICAgKiBAcmV0dXJucyB7U2NlbmFyaW99XG4gICAqIC0gc2NlbmFyaW8gaW5mb3JtYXRpb25cbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBsb2FkIHNjZW5hcmlvIDxzY2VuSWQ+XCIgaWYgc2NlbmFyaW8gZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICBnZXRTY2VuYXJpbyhzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8U2NlbmFyaW8+IHtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9Db2RlLm5leHQoc2NlbklkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8U2NlbmFyaW8+KGAke3RoaXMuX2Jhc2VVUkx9LyR7c2NlbklkfWApO1xuICAgIH1cblxuICAvKipcbiAgICogU2VuZCB1cGRhdGVkIGd1ZXNzZXMgZm9yIHRoZSBzY2VuYXJpbyB0byBiZSBzYXZlZCBpbiBkYXRhYmFzZVxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gZ3Vlc3NlcyBzdHJpbmcgb2YgdXBkYXRlZCBndWVzc2VzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqIC0gdXBkYXRlZCBndWVzc2VzXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gZmluZCBmcmlkZ2VcIiBpZiBmcmlkZ2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIFwiQ291bGQgbm90IHNhdmUgbmV3IGd1ZXNzZXNcIiBpZiBjb3VsZG4ndCB1cGRhdGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgc2F2ZURlbGV0aW9ucyhndWVzc2VzOiBhbnksIHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdChgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9L2RlbGV0aW9uc2AsIGd1ZXNzZXMpO1xuICAgIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZyaWRnZSBmb3IgdGhlIHVzZXIvc2NlbmFyaW9cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlPn1cbiAgICogLSBuZXdseSBjcmVhdGVkIGZyaWRnZVxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIGNyZWF0ZSBuZXcgcGhhZ2UgZm9yIHNjZW5hcmlvXCIgaWYgaXNzdWUgY3JlYXRlIHBoYWdlXG4gICAqIC0gb3IgZXJyb3IgXCJVbmFibGUgdG8gc2F2ZSBuZXcgZnJpZGdlXCIgaWYgY291bGRuJ3QgY3JlYXRlXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIGNyZWF0ZUZyaWRnZSh1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZyaWRnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8RnJpZGdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9L25ldy1mcmlkZ2VgKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBleGlzdGluZyBmcmlkZ2UgZm9yIHVzZXIvc2NlbmFyaW9cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlPn1cbiAgICogLSBleGlzdGluZyBmcmlkZ2VcbiAgICogLSBvciBlcnJvciBcIk5vIGZyaWRnZSBmb3Igc2NlbmFyaW8vdXNlclwiIGlmIGZyaWRnZSBkb2VzIG5vdCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICBnZXRGcmlkZ2UodXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGcmlkZ2U+IHtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8RnJpZGdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9YCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgcGhhZ2Ugc3RyYWluIHRvIHRoZSBmcmlkZ2U7XG4gICAqIFNlcnZlciB1c2VzIHVzZXJJZCBhbmQgc2NlbkNvZGUgdG8gZmluZCB0aGUgZnJpZGdlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqIEBwYXJhbSB7YW55fSBzdHJhaW4gLSBuZXcgcGhhZ2UgdG8gYWRkIHRvIGZyaWRnZVxuICAgKiAtIGhhcyBzdHJhaW5OdW0sIG11dGF0aW9uTGlzdCwgYW5kIGRlbGV0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPn1cbiAgICogLSBuZXdseSBzYXZlZCBwaGFnZVxuICAgKiAtIG9yIGVycm9yIFwiVXNlciBub3QgZm91bmRcIiBpZiB1c2VyIG5vdCBmb3VuZFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGxvYWQgc2NlbmFyaW8gPHNjZW5JZD5cIiBpZiBzY2VuYXJpbyBub3QgZm91bmRcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBmaW5kIGZyaWRnZVwiIGlmIGZyaWRnZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIGFkZFN0cmFpbih1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHN0cmFpbjogYW55KTogT2JzZXJ2YWJsZTxGcmlkZ2VQaGFnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3Q8RnJpZGdlUGhhZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vZnJpZGdlLXBoYWdlYCwgc3RyYWluKVxuICAgIH1cblxuICAvKipcbiAgICogVXBkYXRlIGRldGFpbHMvaW5mb3JtYXRpb24gYWJvdXQgYW4gZXhpc3RpbmcgcGhhZ2UgaW4gdGhlIGZyaWRnZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKiBAcGFyYW0ge0ZyaWRnZVBoYWdlfSBzdHJhaW4gLSBzdHJhaW4gdG8gdXBkYXRlXG4gICAqIC0gdXNlIHN0cmFpbiBgaWRgIHRvIHNwZWNpZnkgc3RyYWluIGFuZCBzZW5kIHVwZGF0ZWQgaW5mb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2VQaGFnZT59XG4gICAqIC0gdXBkYXRlZCBzdHJhaW5cbiAgICogLSBvciBlcnJvciBcIlBoYWdlIG5vdCBmb3VuZFwiIGlmIHN0cmFpbiBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIHVwZGF0ZVN0cmFpbih1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHN0cmFpbjogRnJpZGdlUGhhZ2UpOiBPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPiB7XG4gICAgICAgIGxldCBzdHJhaW5JZCA9IHN0cmFpbi5pZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0PEZyaWRnZVBoYWdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9LyR7c3RyYWluSWR9YCwgc3RyYWluKVxuICAgIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgc3RyYWluIGZyb20gdGhlIGZyaWRnZSAoYW5kIGRhdGFiYXNlKVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKiBAcGFyYW0ge0ZyaWRnZVBoYWdlfSBzdHJhaW4gLSB0aGUgc3RyYWluIHRvIGRlbGV0ZVxuICAgKiAtIHVzZSBzdHJhaW4gYGlkYCB0byBzcGVjaWZ5IHdoaWNoIHN0cmFpbiB0byBkZWxldGVcbiAgICpcbiAgICogQHJldHVybnMge2FueX1cbiAgICogLSB0aGUgc3RyYWluIGp1c3QgZGVsZXRlZFxuICAgKiAtIG9yIGVycm9yIFwiUGhhZ2Ugbm90IGZvdW5kXCIgaWYgc3RyYWluIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBmaW5kIGZyaWRnZVwiIGlmIGZyaWRnZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgXCJVbmFibGUgdG8gcmVtb3ZlIHN0cmFpbiBmcm9tIGZyaWRnZVwiIGlmIGNvdWxkbid0IGRlbGV0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICBkZWxldGVTdHJhaW4odXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCBzdHJhaW46IEZyaWRnZVBoYWdlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IHN0cmFpbklkID0gc3RyYWluLmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmRlbGV0ZShgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9LyR7c3RyYWluSWR9YClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIFJvdXRlciwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIFJvdXRlciBndWFyZCB0aGF0IG1ha2VzIHN1cmUgb25seSBsb2dnZWQgaW4gdXNlcnMgY2FuIGFjY2VzcyB0aGUgcGFnZSBhbmQgYWxsIGNoaWxkIHBhZ2VzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnZWRJbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHVzZXIgY2FuIGFjdGl2YXRlICh2aXNpdCkgYSBwYWdlXG4gICAqIGJhc2VkIG9uIGlmIGEgdXNlciBpcyBsb2dnZWQgaW5cbiAgICpcbiAgICogSWYgbm90IGxvZ2dlZCBpbiwgc2V0cyB0aGUgcmVkaXJlY3QgdXJsIHRvIHRha2UgdXNlciBiYWNrIHRvIHRoaXMgcGFnZSBfYWZ0ZXJfIGxvZ2dpbmcgaW4gYW5kXG4gICAqIHNlbmRzIHRoZSB1c2VyIHRvIHRoZSBzaWduIGluIHBhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSByb3V0ZSAtIGN1cnJlbnQgVVJMXG4gICAqIEBwYXJhbSB7Um91dGVyU3RhdGVzbmFwc2hvdH0gc3RhdGUgLSByb3V0ZXIgc3RhdGUgaW5jbHVkaW5nIHRoZSB1cmwgdHJ5aW5nIHRvIGFjZXNzXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIGB0cnVlYCBpZiB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKiAtIGBmYWxzZWAgaWYgdXNlciBpcyBub3QgbG9nZ2VkIGluXG4gICAqL1xuICBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogYm9vbGVhbiB7XG4gICAgbGV0IHVybDogc3RyaW5nID0gc3RhdGUudXJsO1xuXG4gICAgbGV0IGlzTG9nZ2VkSW46IGJvb2xlYW4gPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIGlmKGlzTG9nZ2VkSW4pXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5yZWRpcmVjdFVybCA9IHVybDtcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2F1dGhlbnRpY2F0aW9uL3NpZ25pbiddKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB1c2VyIGNhbiBhY3RpdmF0ZSBhbGwgY2hpbGQvc3ViIHBhZ2VzIGRlcGVuZGluZyBpZiB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKlxuICAgKiBPbmx5IGxvZ2dlZCBpbiB1c2VycyBjYW4gYWN0aXZhdGUgdGhlIHBhZ2VzXG4gICAqL1xuICBjYW5BY3RpdmF0ZUNoaWxkKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhbkFjdGl2YXRlKHJvdXRlLCBzdGF0ZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlLnRzIiwiLy9pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5cbi8qKlxuICogU2VydmljZSB0aGF0IGRlYWxzIHdpdGggdmFsaWRhdGluZyBhbmQgbG9nZ2luZyBpbi9vdXQgdXNlcnMgYW5kXG4gKiByZXNldHRpbmcgZm9yZ290dGVuIHBhc3N3b3Jkc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgICBwcml2YXRlIF91c2VyOiBCZWhhdmlvclN1YmplY3Q8VXNlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFVzZXI+KG51bGwpO1xuICAgIGdldFVzZXIkID0gdGhpcy5fdXNlci5hc09ic2VydmFibGUoKTtcblxuICAgIHByaXZhdGUgX2Jhc2VVcmwgPSAnL2FwaS9hdXRoLydcblxuICAvKipcbiAgICogV2hlbiBhIG5vbi1sb2dnZWQgaW4gdXNlciB0cmllcyB0byBhY2Nlc3MgYSBwYWdlIHdoaWNoIHJlcXVpcmVzIGxvZ2dpbmcgaW4sXG4gICAqIHNhdmUgdGhhdCBwYWdlJ3MgdXJsIGFuZCBkaXJlY3QgdXNlciB0aGVyZSBhZnRlciB0aGV5IGxvZyBpblxuICAgKi9cbiAgICBwdWJsaWMgcmVkaXJlY3RVcmw6IHN0cmluZyA9ICcvJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2VydmljZXMgYHVzZXJgIHZhcmlhYmxlIHdoaWNoIGlzIHN0b3JlZCBhZnRlciB1c2VyIGxvZ3MgaW5cbiAgICpcbiAgICogQHBhcmFtIHtVc2VyfSB1c2VyIC0gY3VycmVudCB1c2VyIHdobyBsb2dnZWQgaW5cbiAgICogLSBvciBgbnVsbGAgdG8gdW5zZXQgdGhlIHVzZXJcbiAgICovXG4gIHNldFVzZXIodXNlcjogVXNlcil7XG4gICAgdGhpcy5fdXNlci5uZXh0KHVzZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB1c2VyIGluZm9ybWF0aW9uIG5vdCBhcyBhbiBvYnNlcnZhYmxlXG4gICAqIHNvIGl0IGlzIHN5bmNocm9ub3VzIGFuZCBrZWVwcyB0aGUgYXBwIGNvbXBvbmVudHMnIGBuZ09uSW5pdGBcbiAgICogZnVuY3Rpb25zIGNsZWFuZXJcbiAgICpcbiAgICogQHJldHVybnMge1VzZXJ9IHRoZSBjdXJyZW50IHVzZXIgb3IgYG51bGxgIGlmIG5vIHVzZXIgbG9nZ2VkIGluXG4gICAqL1xuICBnZXRVc2VyKCk6IFVzZXJ7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXIuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKlxuICAgKiBAcmVxdWlyZXMge2Jvb2xlYW59IC0gYHRydWVgIGlmIGEgdXNlciBpcyBsb2dnZWQgaW5cbiAgICogLSBgZmFsc2VgIG90aGVyd2lzZVxuICAgKi9cbiAgaXNMb2dnZWRJbigpOiBib29sZWFue1xuICAgIHJldHVybiAoISF0aGlzLmdldFVzZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHVzZXIgY2FuIGFjY2VzcyB0aGUgYWRtaW4gcGFnZXNcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gYHRydWVgIGlmIHVzZXIgaXMgaW5zdHIgb3IgYWRtaW5cbiAgICogLSBgZmFsc2VgIGlmIHVzZXIgaXMgb25seSBhIHN0dWRlbnRcbiAgICovXG4gIGNhbkFjY2Vzc0FkbWluKCk6IGJvb2xlYW57XG4gICAgaWYodGhpcy5nZXRVc2VyKCkpe1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VXNlcigpLnJvbGUgPiAwXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHNpZ24gYSB1c2VyIGluIHVzaW5nIHRoZSBwcm92aWRlZCBjcmVkZW50aWFsc1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gY3JlZGVudGlhbHMgLSBgdXNlcm5hbWVgIChhcyBlbWFpbCkgYW5kIGBwYXNzd29yZGAgdG8gYmUgdGVzdGVkIGZvciBsb2dnaW5nIGluXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFVzZXI+fSAtIHRoZSBzdWNjZXNzZnVsbHkgbG9nZ2VkIGluIHVzZXJcbiAgICogZXJyb3IgbWVzc2FnZSBgTWlzc2luZyBjcmVkZW50aWFsc2AgaWYgbm8gZW1haWwgb3IgcGFzc3dvcmRcbiAgICogLSBlcnJvciBtZXNzYWdlIGBJbnZhbGlkIHBhc3N3b3JkYCBpZiBwYXNzd29yZCBpcyBpbmNvcnJlY3RcbiAgICogLSBlcnJvciBtZXNzYWdlIGBVc2VyIG5vdCBmb3VuZGAgaWYgaW52YWxpZCBlbWFpbFxuICAgKiAtIGVycm9yIG1lc3NhZ2UgZm9yIHNlcnZlci9kYXRhYmFzZS9hdXRoZW50aWNhdGlvbiBlcnJvclxuICAgKi9cbiAgc2lnbmluKGNyZWRlbnRpYWxzOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY3JlZGVudGlhbHMpO1xuICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4odGhpcy5fYmFzZVVybCArICdzaWduaW4nLCBib2R5LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gY3JlYXRlIGEgbmV3IHVzZXIgdXNpbmcgdGhlIHByb3ZpZGVkIHVzZXIgZGV0YWlsc1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gdXNlciAtIHVzZXIgZGV0YWlscyBpbmNsdWRpbmcgYGZpcnN0TmFtZWAsIGBsYXN0TmFtZWAsIGB1c2VybmFtZWAgKGVtYWlsKSwgYGNvdXJzZWAsIGFuZCBgcGFzc3dvcmRgXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFVzZXI+fSAtIFRoZSBuZXcgbG9nZ2VkLWluIHVzZXIgd2hlbiBzdWNjZXNzZnVsbHkgY3JlYXRlIG5ldyB1c2VyXG4gICAqIC0gZXJyb3IgNDAwIGlmIGVycnJvciBsb2dnaW5nIGluXG4gICAqIC0gZXJyb3IgNTAwIGlmIGVycm9yIGNyZWF0aW5nIHVzZXJcbiAgICovXG4gIHNpZ251cCh1c2VyOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG4gICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLl9iYXNlVXJsICsgJ3NpZ251cCcsIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaWducyBvdXQgdGhlIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gcmV0dXJucyBgdHJ1ZWAgaWYgc3VjY2Vzc2Z1bGx5IHNpZ25lZCBvdXRcbiAgICovXG4gIHNpZ25vdXQoKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuX2Jhc2VVcmwgKyAnc2lnbm91dCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdCBlbWFpbCBhZGRyZXNzIG9mIHBvdGVudGlhbCB1c2VyIHRvIGFsbG93IHRoYXQgdXNlclxuICAgKiB0byByZXNldCB0aGVpciBwYXNzd29yZCBpZiB0aGUgdXNlciBleGlzdHNcbiAgICpcbiAgICogVGhlIGJhY2tlbmQgdGhlbiBzZW5kcyBhIHBhc3N3b3JkIHJlc2V0IGVtYWlsIHRvIHRoZVxuICAgKiBlbWFpbCBhZGRyZXNzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBib2R5IC0gcmVxdWVzdCBib2R5IHRoYXQgaW5jbHVkZXMgYGVtYWlsYCBvZiB1c2VyXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IC0gU3VjY2VzcyBtZXNzYWdlIGlmIHBhc3N3b3JkIHJlc2V0IGVtYWlsIHNlbnRcbiAgICogLSBlcnJvciBtZXNzYWdlIGBFcnJvciB3aXRoIHNlcnZlciBlbWFpbCBzZXJ2aWNlYCBpZiBwcm9ibGVtIHdpdGggZW1haWwgdHJhbnNwb3J0ZXJcbiAgICogLSBlcnJvciBtZXNzYWdlIGBObyBhY2NvdW50IHdpdGggdGhhdCBlbWFpbC5gIGlmIGVtYWlsIGFkZHJlc3MgZG9lc24ndCBjb3JyZXNwb25kIHRvIGFuIGV4aXN0aW5nIHVzZXJcbiAgICogLSBlcnJvciA0MjIgZm9yIG90aGVyIHNlcnZlciBlcnJvcnNcbiAgICovXG4gIGZvcmdldFBhc3N3b3JkKGJvZHk6IGFueSk6IE9ic2VydmFibGU8YW55PntcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fYmFzZVVybCArICdmb3JnZXQtcGFzc3dvcmQnLCBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byByZXNldCBhIHVzZXIncyBwYXNzd29yZCB1c2luZyB0aGUgY3JlZGVudGlhbHNcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGNyZWRlbnRpYWxzIC0gaW5mbyBuZWVkZWQgdG8gcmVzZXQgcGFzc3dvcmQ6IGBwYXNzd29yZCwgYGNvbmZpcm1QYXNzd29yZGAsIGFuZCBgdG9rZW5gXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IC0gSWYgc3VjY2Vzc2Z1bCwgc2VuZHMgc3VjY2VzcyBtZXNzYWdlIGBQYXNzd29yZHMgaGFzIGJlZW4gcmVzZXRgLlxuICAgKiAtIGVycm9yIG1lc3NhZ2UgYEludmFsaWQgdG9rZW5gIGlmIHRva2VuIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBlcnJvciBtZXNzYWdlIGBUb2tlbiBoYXMgZXhwaXJlZGAgZm9yIHZhbGlkIHRva2VucyBidXQgdXNlciB0b29rIHRvbyBsb25nIHRvIGF0dGVtcHQgdG8gcmVzZXRcbiAgICogLSBlcnJvciBtZXNzYWdlIGZvciBhbGwgb3RoZXIgZXJyb3JzXG4gICAqL1xuICByZXNldFBhc3N3b3JkKGNyZWRlbnRpYWxzOiBhbnkpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuX2Jhc2VVcmwgKyAncmVzZXQtcGFzc3dvcmQnLCBjcmVkZW50aWFscyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiLCJpbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3REcm9wRGF0YSB7XG4gIGRhdGE6IGFueTtcbiAgbW91c2VFdmVudDogTW91c2VFdmVudDtcbiAgLy9uYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3REcm9wU2VydmljZUZhY3RvcnkoKTogU2VsZWN0RHJvcFNlcnZpY2Uge1xuICByZXR1cm4gbmV3IFNlbGVjdERyb3BTZXJ2aWNlKCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxlY3REcm9wU2VydmljZSB7XG4gIC8vIGFsbG93ZWQgZHJvcCB6b25lcz9cbiAgY3VyU291cmNlOiBzdHJpbmc7XG4gIGRhdGE6IGFueTtcbiAgb25TdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxTZWxlY3REcm9wRGF0YT47XG4gIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGVsZW06IEhUTUxFbGVtZW50O1xuXG4gIGRlc2VsZWN0KCl7XG4gICAgdGhpcy5jdXJTb3VyY2UgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5vblN1Y2Nlc3NDYWxsYmFjayA9IG51bGw7XG4gICAgdGhpcy5yZW1vdmVFbGVtQ2xhc3MoKTtcbiAgICB0aGlzLmVsZW09bnVsbDtcbiAgfVxuXG4gIHNlbGVjdChzb3VyY2VOYW1lOiBzdHJpbmcsIGRhdGE6IGFueSwgaHRtbGVsZW1lbnQ6IEhUTUxFbGVtZW50KXtcbiAgICB0aGlzLmN1clNvdXJjZSA9IHNvdXJjZU5hbWU7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuZWxlbSA9IGh0bWxlbGVtZW50O1xuICAgIGlmKHRoaXMuZWxlbSlcbiAgICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1vYmplY3QnKTtcbiAgfVxuXG4gIHJlbW92ZUVsZW1DbGFzcygpOiB2b2lke1xuICAgIGlmKHRoaXMuZWxlbSlcbiAgICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1vYmplY3QnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBGdW5jdGlvbnMgd2hpY2ggY29tbXVuaWNhdGUgdG8gYmFja2VuZCB0byBhbGxvd1xuICogdXNlcnMgdG8gdXBkYXRlIHRoZWlyIHByb2ZpbGUgYW5kL29yIGNoYW5nZSB0aGUgcGFzc3dvcmRcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNlIHtcblxuICAvKipcbiAgICogTGVhZGluZyBiYWNrZW5kIHVybCBwYXRoXG4gICAqL1xuICBwcml2YXRlIF9iYXNlVXJsOiBzdHJpbmcgPSAnL2FwaS91c2Vycy8nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCl7fVxuXG4gIC8qKlxuICAgKiBFZGl0IGRldGFpbHMgYWJvdXQgdGhlIHVzZXIgcHJvZmlsZSBpbmNsdWRpbmdcbiAgICogMS4gTm1lXG4gICAqIDIuIEVtYWlsIGFkZHJlc3NcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySUQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7YW55fSBkZXRhaWxzIHVzZXIgZGV0YWlscyB0byB1cGRhdGUgd2l0aFxuICAgKiBleGlzaXRpbmcgaW5mb3JtYXRpb25cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8VXNlcj59IC0gVGhlIHVwZGF0ZWQgdXNlciBpbmZvcm1hdGlvblxuICAgKiAtIG9yIGVycm9yIFwiVXNlciBkb2VzIG5vdCBleGlzdFwiIGlmIG5vbi1leGlzdGFudCB1c2VyXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBlZGl0UHJvZmlsZSh1c2VySWQ6IG51bWJlciwgZGV0YWlsczogYW55KTogT2JzZXJ2YWJsZTxVc2VyPntcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4odGhpcy5fYmFzZVVybCArIHVzZXJJZCwgZGV0YWlscyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSB1c2VyJ3MgcGFzc3dvcmQgb25jZSBhbHJlYWR5IHNpZ25lZCBpblxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJRCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge2FueX0gY3JlZGVudGlhbHMgLSBwYXNzd29yZCBpbmZvcm1hdGlvblxuICAgKiAtIGluY2x1ZGVzOiBcInBhc3N3b3JkXCIgKG9sZCBwYXNzd29yZCkgYW5kIFwibmV3UGFzc3dvcmRcIiAgKHBhc3N3b3JkIHRvIHVwZGF0ZSB0bylcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8VXNlcj59IC0gaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXIganVzdCB1cGRhdGVkXG4gICAqIC0gb3IgZXJyb3IgXCJVc2VyIGRvZXMgbm90IGV4aXN0XCIgaWYgbm9uLWV4aXN0YW50IHVzZXJcbiAgICogLSBvciBlcnJvciBcIkluY29ycmVjdCBwYXNzd29yZFwiIGlmIHdyb25nIG9sZCBwYXNzd29yZFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgdXBkYXRlUGFzc3dvcmQodXNlcklkOiBudW1iZXIsIGNyZWRlbnRpYWxzOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXI+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih0aGlzLl9iYXNlVXJsICsgdXNlcklkICsgJy91cGRhdGUtcGFzc3dvcmQnLCBjcmVkZW50aWFscyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ291cnNlLCBTdHVkZW50LCBBZG1pblN0dWRlbnQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBGdW5jdGlvbnMgcmVsYXRlZCB0byBnZXR0aW5nIGNvdXJzZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBiYWNrIGVuZCBzZXJ2ZXJcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvdXJzZVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2Jhc2VVUkwgPSAnL2FwaS9hZG1pbic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBhdmFpbGFibGUgY291cnNlcyBkZXBlbmRpbmcgaWYgdXNlclxuICAgKiBpcyBhIGZ1bGwgYWRtaW4gb3IgaW5zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCBkYXRhYmFzZSB1c2VyIElEIG9mIHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2VbXT59IC0gV2hlbiBzdWNjZXNzZnVsIGFuZCBgYWRtaW5gLCBsaXN0IG9mIGFsbCBjb3Vyc2VzXG4gICAqIC0gV2hlbiBzdWNjZXNzZnVsIGFuZCBgaW5zdHJgLCBsaXN0IG9mIGNvdXJzZXMgaW4gd2hpY2ggdXNlciBpcyBhbiBpbnN0cnVjdG9yIGZvclxuICAgKiAtIG9yIGVycm9yIFwiTm8gY291cnNlcyBmb3VuZFwiIGlmIG5vIGNvdXJzZXMgdG8gbGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBsaXN0Q291cnNlcyhhZG1pbklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPENvdXJzZVtdPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLmdldDxDb3Vyc2VbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzYCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGNvdXJzZSB3aXRoIGxvZ2dlZCBpbiB1c2VyIGFzIGluc3RydWN0b3IgYW5kXG4gICAqIGRldGFpbHMgc3BlY2lmaWVkIGluIGBib2R5YFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge2FueX0gYm9keSBjb3Vyc2UgZGV0YWlscyBpbmNsdWRpbmcgYGNvdXJzZU51bWAgYW5kIGBkZXNjcmlwdGlvbmBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB0aGUgbmV3bHkgY3JlYXRlZCBjb3Vyc2UgaWYgc3VjY2Vzc2Z1bFxuICAgKiAtIG9yIGVycm9yIG1lc3NhZ2UgZm9yIHNlcnZlci9kYXRhYmFzZSBlcnJvcnNcbiAgICovXG4gIGNyZWF0ZUNvdXJzZShhZG1pbklkOiBudW1iZXIsIGJvZHk6IGFueSk6IE9ic2VydmFibGU8Q291cnNlPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLnBvc3Q8Q291cnNlPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXNgLCBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBjb3Vyc2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciAod2hvIGlzIGFuIGFkbWluIG9yIGluc3RyKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHRvIGdldCBpbmZvcm1hdGlvbiBmb3JcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB0aGUgY291cnNlIGluZm9ybWF0aW9uIGluY2x1ZGluZyBgY291cnNlTnVtYCwgYGRlc2NyaXB0aW9uYCwgYW5kIGBpbnN0cnVjdG9yc2BcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBnZXRDb3Vyc2UoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZyk6IE9ic2VydmFibGU8Q291cnNlPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLmdldDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlcy8ke2NvdXJzZU51bX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpc3Qgb2Ygc3R1ZGVudHMgaW4gYSBjb3Vyc2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciB3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdXJzZU51bSBjb3Vyc2UgbnVtYmVyIG9mIHRoZSBjb3Vyc2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8U3R1ZGVudFtdPn0gLSBsaXN0IG9mIHN0dWRlbnRzIGVhY2ggd2l0aCBwcm9wZXJ0aWVzIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcklkYCwgYGFjY2Vzc0dyYW50ZWRgLCBhbmQgYGVtYWlsYFxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBtZXNzYWdlIGZvciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JzXG4gICAqL1xuICBnZXRTdHVkZW50cyhhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxTdHVkZW50W10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PFN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfS9zdHVkZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZWRpdGluZyBhIGNvdXJzZSwgdXNlciBpcyBhYmxlIHRvIGFkZCBuZXcgaW5zdHJ1Y3RvcnMuIFRoaXMgbWV0aG9kIHByb2R1Y2VzIHRoZSBsaXN0IG9mIHBvc3NpYmxlIGluc3RydWN0b3JzIHRoYXQgY291bGQgYmUgYWRkZWRcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHdlIGFyZSBlZGl0aW5nXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEFkbWluU3R1ZGVudFtdPn0gLSBsaXN0IG9mIHBvdGVudGlhbCBpbnN0dWN0b3JzIHdpdGggcHJvcGVydGllcyBgZmlyc3ROYW1lYCwgYGxhc3ROYW1lYCwgYHVzZXJJZGAsIGFuZCBgcm9sZWBcbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBnZXRQb3NzaWJsZUluc3RydWN0b3JzKGFkbWluSWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudFtdPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLmdldDxBZG1pblN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfS9pbnN0cnVjdG9yc2ApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSB1c2VyIGFzIGFuIGluc3RydWN0b3Igb2YgdGhlIGNvdXJzZSBhbmQgY2hhbmdlIHRoZSBuZXcgaW5zdHJ1Y3RvcidzIHJvbGUgdG8gYGluc3RyYCBpZiBuZWNlc3NhcnlcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgdG8gYWRkIGluc3RydWN0b3IgZm9yXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdJbnN0cklkIHVzZXJJZCBvZiB1c2VyIHRvIGFkZCBhcyBpbnN0cnVjdG9yIG9mIHRoaXMgY291cnNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENvdXJzZT59IC0gdGhlIHVwZGF0ZWQgY291cnNlIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIGlmIHByb2JsZW0gdXBkYXRpbmcgdGhlIGNvdXJzZVxuICAgKiAtIG9yIGVycm9yIGlmIHByb2JsZW0gdXBkYXRpbmcgdGhlIG5ldyBpbnN0cnVjdG9yIHJvbGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGFkZEluc3RydWN0b3IoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZywgbmV3SW5zdHJJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxDb3Vyc2U+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLnBvc3Q8Q291cnNlPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L2luc3RydWN0b3JzLyR7bmV3SW5zdHJJZH1gLCB7aW5zdHJ1Y3RvcjogdHJ1ZX0pXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjb3Vyc2UgZGVzY3JpcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciB3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdXJzZU51bSBjb3Vyc2UgbnVtYmVyIG9mIGNvdXJzZSB0byB1cGRhdGVcbiAgICogQHBhcmFtIHthbnl9IGJvZHkgdXBkYXRlZCBjb3Vyc2UgZGVzY3JpcHRpb25cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB1cGRhdGVkIGNvdXJzZSBpbmZvcm1hdGlvblxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGVkaXRDb3Vyc2UoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZywgYm9keTogYW55KTogT2JzZXJ2YWJsZTxDb3Vyc2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAucG9zdDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlcy8ke2NvdXJzZU51bX1gLCBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHRvIGRlbGV0ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb3Vyc2UganVzdCBkZWxldGVkXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBkZWxldGVDb3Vyc2UodXNlcklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgb2YgdGhlIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2U7IHVzZWZ1bCBmb3IgYnVsayBkZWxldGlvbnNcbiAgICogd2hlbiBhIGNvdXJzZSBpcyBvdmVyXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBsaXN0IG9mIHN0dWRlbnRzIGp1c3QgZGVsZXRlZFxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgZGVsZXRlU3R1ZGVudHModXNlcklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfS9zdHVkZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzY2VuYXJpbyBzdGF0dXMgKGFrYSBhY2Nlc3MgZ3JhbnRlZCkgZm9yIGEgc2NlbmFyaW8gZm9yIGFsbCBzdHVkZW50cyBpbiBhIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbkNvZGUgb2Ygc2NlbmFyaW8gb2YgaW50ZXJlc3RcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8U3R1ZGVudFtdPn0gLSBsaXN0IG9mIHN0dWRlbnRzIGluIGNvdXJzZSBlYWNoIHdpdGggcHJvcGVydGllcyBgZmlyc3ROYW1lYCwgYGxhc3ROYW1lYCwgYHVzZXJJZGAsIGFuZCBgc3RhdHVzYFxuICAgKiAtIG9yIFwibm8gc3R1ZGVudHMgZm91bmRcIiBpZiBubyBzdHVkZW50cyBpbiB0aGUgY291cnNlXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT4gaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldFNjZW5hcmlvU3RhdHVzKGFkbWluSWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTdHVkZW50W10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PFN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfS8ke3NjZW5JZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiBjb3Vyc2UgbnVtYmVycyBmb3IgYWxsIGF2YWlsYWJsZSBjb3Vyc2VzXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IC0gbGlzdCBvZiBjb3Vyc2VzIHdpdGggcHJvcGVydGllcyBgY291cnNlTnVtYCBhbmQgYGlkYFxuICAgKiAtIG9yIFwiTm8gY291cnNlcyBmb3VuZFwiIGVycm9yIGlmIG5vIGNvdXJzZXMgZm91bmRcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldENvdXJzZUxpc3QoKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0KGAvYXBpL2NvdXJzZXNgKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9jb3Vyc2UvY291cnNlLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSZXNvbHZlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4vc2NlbmFyaW8uc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2NlbmFyaW8uaW50ZXJmYWNlJztcblxuLyoqXG4gKiBSZXNvbHZlcyBhIHJvdXRlIFVSTCB0byBnZXQgdGhlIHNjZW5hcmlvIGlkIChmcm9tIHRoZSB1cmwpXG4gKiB0aGVuIHVzZXMgdGhhdCB0byBnZXQgdGhlIHNjZW5hcmlvIGxhYmVsIHVzaW5nIHNjZW5hcmlvIHNlcnZpY2VcbiAqXG4gKiBUaGlzIGlzIHVzZWQgdG8gZ2VuZXJhdGUgaHVtYW4tcmVhZGFibGUgYnJlYWRjcnVtYiBsYWJlbHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjZW5hcmlvUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPFNjZW5hcmlvPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgcmVxdWlyZWQgYnkgaW1wbGVtZW50YXRpb25cbiAgICogQmFzZWQgb24gdGhlIGlkZW50aWZpZWQgc2NlbkNvZGUgZnJvbSB0aGUgVVJMLCB1c2UgdGhlIHNlcnZpY2UgZ28gZ2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzIGFuZCBzZW5kIGJhY2sgdG8gY2xpZW50XG4gICAqXG4gICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gcm91dGUgY3VycmVudCByb290IFVSTFxuICAgKiBAcGFyYW0ge1JvdXRlclN0YXRlU2FucHNob3R9IGN1cnJlbnQgcm91dGUgc25hcHNob3RcbiAgICpcbiAgICogQHJldHVybnMge1NjZW5hcmlvfSAtIFRoZSBzY2VuYXJpbyBvYmplY3QgY29ycmVzcG9uZGluZyB0byBkbyB0aGUgdXJsIHBhcmFtIElEIGlmIGl0IGV4aXN0c1xuICAgLSBvciBlbXB0eSBzY2VuYXJpbyBpZiBpdCBkb2VzIG5vdCBleGlzdFxuICAgKi9cbiAgcHVibGljIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxTY2VuYXJpbz4ge1xuXG4gICAgY29uc3Qgc2NlbkNvZGUgPSByb3V0ZS5wYXJhbXNbJ3NjZW5JZCddO1xuXG4gICAgaWYgKHNjZW5Db2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmdldFNjZW5hcmlvKHNjZW5Db2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFNjZW5hcmlvPigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8ucmVzb2x2ZXIudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBXaGVuIFVSTCBnb2VzIHRvIGEgcGFnZSB0aGF0IGRvZXNuJ3QgZXhpc3Q7XG4gKiBUaGlzIGlzIHNpbXBsZSwgdmlzdWFsIGNvbXBvbmVudCBuZWVkZWQgdG8gZ2V0IHRoZSB0ZW1wbGF0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLW5vdC1mb3VuZCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3BhZ2Utbm90LWZvdW5kLnRlbXBsYXRlLmh0bWwnKSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYWdlTm90Rm91bmRDb21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IoKXt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGhvbWUgbGFuZGluZyBwYWdlIHdoZW4gZ29pbmcgdG8gdGhlIHdlYnNpdGVcbiAqXG4gKiBNYWlubHkgYSB2aWV3IGNvbXBvbmVudCwgYnV0IHNvbWUgYXNwZWN0cyBhcmUgZGVwZW5kZW50XG4gKiBvbiBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluIGFuZCB0aGUgdXNlciByb2xlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvbWUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9ob21lLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9ob21lLnN0eWxlLmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgLyoqXG4gICAqIFRoZSBsb2dnZWQgaW4gdXNlciwgaWYgYW55XG4gICAqL1xuICBwcml2YXRlIHVzZXI6IFVzZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2Upe31cblxuICAvKipcbiAgICogV2hlbiBpbnRpYWxpemluZyBjb21wb25lbnQsIGdldCB0aGUgbG9nZ2VkIGluIHVzZXIsIGlmIGFueVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyB0aGUgY29tcG9uZW50LCB1bnNldCB0aGUgdXNlciB2YXJpYWJsZVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnVzZXIgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJpbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld1JlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZWxlY3REcm9wU2VydmljZSwgU2VsZWN0RHJvcERhdGEgfSBmcm9tICcuL3NlbGVjdC1kcm9wLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tzZWxlY3QtZHJvcHBhYmxlXSd9KVxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BDb21wb25lbnQge1xuICAgIF9lbGVtOiBIVE1MRWxlbWVudDtcbiAgICBfZGVmYXVsdEN1cnNvcjogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfc2VsZWN0RW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNldCBzZWxlY3RFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0RW5hYmxlZCA9ICEhZW5hYmxlZDtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdEVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RFbmFibGVkO1xuICAgIH1cbiAgICBwcml2YXRlIF9kcm9wRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzZXQgZHJvcERpc2FibGVkKGRpc2FibGU6IGJvb2xlYW4pe1xuICAgICAgdGhpcy5fZHJvcERpc2FibGVkID0gISFkaXNhYmxlO1xuICAgIH1cbiAgICBnZXQgZHJvcERpc2FibGVkKCk6IGJvb2xlYW57XG4gICAgICByZXR1cm4gdGhpcy5fZHJvcERpc2FibGVkO1xuICAgIH1cblxuICAgICBASW5wdXQoXCJzZWxlY3RFbmFibGVkXCIpIHNldCBzZWxlY3RhYmxlKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgIHRoaXMuc2VsZWN0RW5hYmxlZCA9ICEhdmFsdWU7XG4gICAgIH1cbiAgICAgQElucHV0KFwiZHJvcERpc2FibGVkXCIpIHNldCB1bmRyb3BwYWJsZSh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgICB0aGlzLmRyb3BEaXNhYmxlZCA9ICEhdmFsdWU7XG4gICAgIH1cblxuICAgICBASW5wdXQoKSBhbGxvd0Ryb3A6IChkcm9wRGF0YTogYW55KSA9PiBib29sZWFuO1xuICAgICBASW5wdXQoXCJzZWxlY3REYXRhXCIpIGRhdGE6IGFueTtcbiAgICAgQElucHV0KCkgc291cmNlTmFtZTogc3RyaW5nO1xuXG4gICAgIEBPdXRwdXQoKSBvbkRyb3BTdWNjZXNzOiBFdmVudEVtaXR0ZXI8U2VsZWN0RHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3REcm9wRGF0YT4oKTtcbkBPdXRwdXQoXCJvblN1Y2Nlc3NcIikgb25TdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxTZWxlY3REcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdERyb3BEYXRhPigpO1xuQE91dHB1dCgpIG9uRXJyb3I6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgcHVibGljIF9zZWxlY3REcm9wU2VydmljZTogU2VsZWN0RHJvcFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICAgICAgICAvLyBBc3NpZ24gZGVmYXVsdCBjdXJzb3IgdW5sZXNzIG92ZXJyaWRkZW5cbiAgICAgICAgdGhpcy5fZGVmYXVsdEN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgdGhpcy5fZWxlbSA9IGVsZW1SZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYoIXRoaXMuZHJvcERpc2FibGVkICYmICF0aGlzLnNlbGVjdEVuYWJsZWQpXG4gICAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5jdXJzb3IgPSB0aGlzLl9kZWZhdWx0Q3Vyc29yOyAgLy8gc2V0IGRlZmF1bHQgY3Vyc29yIG9uIG91ciBlbGVtZW50XG5cbiAgICAgICAgdGhpcy5fZWxlbS5vbm1vdXNlZW50ZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX29uTW91c2VFbnRlcihldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZWxlbS5vbm1vdXNlb3V0ID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5fb25Nb3VzZU91dChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xpY2sgZXZlbnRzIC0gYm90aCBzZWxlY3QgYW5kIGRyb3BcbiAgICAgIHRoaXMuX2VsZW0ub25jbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT57XG4gICAgICAgIHRoaXMuX29uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgICAgICAvL1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgIC8vIE5lY2Vzc2FyeS4gQWxsb3dzIHVzIHRvIGRyb3AuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIG5vdGhpbmcgc2VsZWN0ZWQgYW5kIHNlbGVjdEVuYWJsZWQgLT4gc2VsZWN0XG4gICAgICBpZih0aGlzLl9zZWxlY3REcm9wU2VydmljZS5pc1NlbGVjdGVkID09PSBmYWxzZSAmJiB0aGlzLnNlbGVjdEVuYWJsZWQpe1xuICAgICAgICAvL3RoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtb2JqZWN0Jyk7XG4gICAgICAgIHRoaXMuX29uU2VsZWN0Q2FsbGJhY2soZXZlbnQpO1xuICAgIH0gLy8gaWYgd2UgcmUtY2xpY2tlZCB0aGUgb2JqZWN0IC0+IGRlc2VsZWN0XG4gICAgZWxzZSBpZih0aGlzLl9zZWxlY3REcm9wU2VydmljZS5pc1NlbGVjdGVkICYmIHRoaXMuc291cmNlTmFtZSA9PT0gdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuY3VyU291cmNlKXtcbiAgICAgICAgLy90aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICAgICAgICB0aGlzLl9vbkRlc2VsZWN0Q2FsbGJhY2soZXZlbnQpO1xuICAgIH0gLy8gaWYgd2UgY2FuIGRyb3AsIHRoZW4gZHJvcFxuICAgIGVsc2UgaWYodGhpcy5faXNEcm9wQWxsb3dlZChldmVudCkpe1xuICAgICAgLy90aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICAgICAgdGhpcy5fb25Ecm9wQ2FsbGJhY2soZXZlbnQpO1xuICAgIH0gLy8gaWYgc29tZXRoaW5nIHNlbGVjdGVkLCBzZWxlY3QgdGhpcyBpbnN0ZWFkXG4gICAgZWxzZSBpZih0aGlzLl9zZWxlY3REcm9wU2VydmljZS5pc1NlbGVjdGVkICYmIHRoaXMuc2VsZWN0RW5hYmxlZCl7XG4gICAgICAvL3RoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtb2JqZWN0Jyk7XG4gICAgICAvLyB1cGRhdGUgdG8gcmVtb3ZlIHNlbGVjdGVkLWNsYXNzIG9uIHByZXZpb3VzbHkgc2VsZWN0ZWQgZWxlbVxuICAgICAgdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UucmVtb3ZlRWxlbUNsYXNzKCk7XG4gICAgICB0aGlzLl9vblNlbGVjdENhbGxiYWNrKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb25FcnJvckNhbGxiYWNrKGV2ZW50KTtcbiAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25Nb3VzZUVudGVyKGV2ZW50OiBFdmVudCkge1xuICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coJ29uZHJhZ292ZXIuX2lzRHJvcEFsbG93ZWQnLCB0aGlzLl9pc0Ryb3BBbGxvd2VkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xuICAgICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ2Ryb3Atb2JqZWN0Jyk7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgb3ZlciB0aGUgc2FtZSBzb3VyY2UgZWxlbWVudCAtIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTmVjZXNzYXJ5LiBBbGxvd3MgdXMgdG8gZHJvcC5cbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBwcml2YXRlIF9vbk1vdXNlT3V0KGV2ZW50OiBFdmVudCl7XG4gICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Atb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgZGV0ZWN0Q2hhbmdlcyAoKSB7XG4gICAgICAgIC8vIFByb2dyYW1tYXRpY2FsbHkgcnVuIGNoYW5nZSBkZXRlY3Rpb24gdG8gZml4IGlzc3VlIGluIFNhZmFyaVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICggdGhpcy5fY2RyICYmICEodGhpcy5fY2RyIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyNTApO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzRHJvcEFsbG93ZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgLy8gRmlyc3QsIGlmIGBhbGxvd0Ryb3BgIGlzIHNldCwgY2FsbCBpdCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGVcbiAgICAgICAgICAgIGlmKHRoaXMuZHJvcERpc2FibGVkKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93RHJvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbG93RHJvcCh0aGlzLl9zZWxlY3REcm9wU2VydmljZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wcmV2ZW50QW5kU3RvcChldmVudDogRXZlbnQpOiBhbnkge1xuICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICBfb25FcnJvckNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub25FcnJvci5lbWl0KCdUaGVyZSB3YXMgYW4gZXJyb3InKTtcbiAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5kZXNlbGVjdCgpO1xuICB9XG5cbiAgICBfb25Ecm9wQ2FsbGJhY2soIGV2ZW50OiBNb3VzZUV2ZW50ICl7XG4gICAgICBsZXQgZGF0YVRyYW5zZmVyID0gKGV2ZW50IGFzIGFueSkuZGF0YVRyYW5zZmVyO1xuICAgICAgaWYodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuaXNTZWxlY3RlZCl7XG4gICAgICAgIHRoaXMub25Ecm9wU3VjY2Vzcy5lbWl0KHtkYXRhOiB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5kYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xuICAgICAgICBpZih0aGlzLl9zZWxlY3REcm9wU2VydmljZS5vblN1Y2Nlc3NDYWxsYmFjayl7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2Uub25TdWNjZXNzQ2FsbGJhY2suZW1pdCh7ZGF0YTogdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5kZXNlbGVjdCgpO1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgX29uRGVzZWxlY3RDYWxsYmFjayhldmVudDogTW91c2VFdmVudCl7XG4gICAgICB0aGlzLl9zZWxlY3REcm9wU2VydmljZS5kZXNlbGVjdCgpO1xuICAgIH1cblxuICAgIF9vblNlbGVjdENhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmKCF0aGlzLnNvdXJjZU5hbWUgJiYgKHRoaXMuZGF0YS5zb3VyY2UgfHwgdGhpcy5kYXRhLnNyYykpe1xuICAgICAgICAgIHRoaXMuc291cmNlTmFtZSA9IHRoaXMuZGF0YS5zb3VyY2UgPyB0aGlzLmRhdGEuc291cmNlIDogdGhpcy5kYXRhLnNyYztcbiAgICAgICAgfSBlbHNlIGlmKCF0aGlzLnNvdXJjZU5hbWUpe1xuICAgICAgICAgIHRoaXMuc291cmNlTmFtZSA9ICcnXG4gICAgICAgIH1cbiAgICAgICAgLy90aGlzLl9zZWxlY3REcm9wU2VydmljZS5lbGVtID0gdGhpcy5fZWxlbTtcbiAgICAgICAgdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2Uuc2VsZWN0KHRoaXMuc291cmNlTmFtZSwgdGhpcy5kYXRhLCB0aGlzLl9lbGVtKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2Uub25TdWNjZXNzQ2FsbGJhY2sgPSB0aGlzLm9uU3VjY2Vzc0NhbGxiYWNrO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9zZWxlY3QtZHJvcC9zZWxlY3QtZHJvcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZUNoaWxkLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogR3VhcmQgdGhlIGFkbWluIHBhdGhzIHNvIG9ubHkgdXNlcnMgd2l0aCBgYWRtaW5gIG9yIGBpbnN0cmBcbiAqIHJvbGUgY2FuIGFjY2VzcyB0aGUgcm91dGVcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkbWluR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZUNoaWxkIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB1c2VyIGNhbiBhY3RpdmF0ZSB0aGUgcm91dGUgYmFzZWQgb24gdGhlaXIgcm9sZVxuICAgKlxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIC0gcm91dGUgVVJMIGF0IHRoZSBtb21lbnRcbiAgICogQHBhcmFtIHtSb3V0ZXJTdGF0ZVNuYXBzaG90fSBzdGF0ZSAtIHJvdXRlciBzdGF0ZTsgbmVlZGVkIHRvIGltcGxlbWVudCBpbnRlcmZhY2VcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gYHRydWVgIGlmIHVzZXIgaXMgYGFkbWluYCBvciBgaW5zdHJgXG4gICAqIC0gYGZhbHNlYCBpZiB1c2VyIGlzIG9ubHkgYSBgc3R1ZGVudGBcbiAgICovXG4gIGNhbkFjdGl2YXRlQ2hpbGQocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgbGV0IHVybDogc3RyaW5nID0gc3RhdGUudXJsO1xuXG4gICAgbGV0IHJvbGU6IGJvb2xlYW4gPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuY2FuQWNjZXNzQWRtaW4oKTtcbiAgICBpZihyb2xlKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UucmVkaXJlY3RVcmwgPSB1cmw7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4vbm90LWF1dGgnXSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5ndWFyZC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBFbnRyYW5jZSBjb21wb25lbnQgZm9yIGFkbWluIGZlYXR1cmVzXG4gKiBNYWlubHksIGl0IGlzIGEgY2FyZCB0aGF0IGFsbG93cyBuYXZpZ2F0aW9uIGJldHdlZW4gY291cnNlLXJlbGF0ZWRcbiAqIGluZm8gYW5kIHN0dWRlbnQtcmVsYXRlZCBpbmZvXG4gKiBDb250ZW50IG9mIHRoZSBjYXJkIGlzIGRldGVybWluZWQgYnkgcm91dGVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkbWluJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vYWRtaW4udGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgQWRtaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogTG9nZ2VkIGluIHVzZXJcbiAgICovXG4gIHByaXZhdGUgYWRtaW5Vc2VyOiBVc2VyO1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgKXt9XG5cbiAgLyoqXG4gICAqIFdoZW4gaW5pdGlhbGl6aW5nIHRoZSBjb21wb25lbnQsIGdldCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyJ3MgaW5mb3JtYXRpb25cbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5hZG1pblVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgdmlldyBjb21wb25lbnQgdGhhdCBpcyB2aXNpYmxlIHdoZW4gZ29pbmcgdG8gdGhlIG1haW4gYWRtaW4gcGFnZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZG1pbi1ob21lJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vYWRtaW4taG9tZS50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZG1pbkhvbWVDb21wb25lbnR7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgYmFzaWMgdmlldyBjb21wb25lbnQgd2hlbiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBhbiBhZG1pblxuICogcGFnZSBidXQgZG9lcyBub3QgaGF2ZSBhZG1pbiBhY2Nlc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm90LWF1dGgnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9ub3QtYXV0aC50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBOb3RBdXRoQ29tcG9uZW50e1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9ub3QtYXV0aC9ub3QtYXV0aC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcbi8qKlxuICogQ29tcG9uZW50IGZvciBleGlzdGluZyB1c2VycyB0byBzaWduIGluIGFuZCBiZSBhYmxlXG4gKiB0byBhY2Nlc3MgdGhlaXIgc2NlbmFyaW9zL2ZyaWRnZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaWduaW4nLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3NpZ25pbi50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogTG9naW4gY3JlZGVudGlhbHMgZm9yIHVzZXIgaW5jbHVkaW5nIGB1c2VybmFtZWAgKGVtYWlsKSBhbmQgYHBhc3N3b3JkYFxuICAgKi9cbiAgcHJpdmF0ZSBjcmVkZW50aWFsczogRm9ybUdyb3VwO1xuICAvKipcbiAgICogQXV0aGVudGljYXRpb24gc2VydmljZSBzdWJzY3JpcHRpb24gZnJvbSB3aGVuIHRyeWluZyB0byBsb2dpbiB0aGUgdXNlclxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgLyoqXG4gICogSW50aWFsaXplIHRoZSBmb3JtIGdyb3VwIG9uIGNvbXBvbmVudCBjcmVhdGlvblxuICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICB1c2VybmFtZTogbmV3IEZvcm1Db250cm9sKCcnLFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXSksXG4gICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSksXG4gIH0pO1xuICB9XG5cbiAgZ2V0IHVzZXJuYW1lKCkgeyByZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoJ3VzZXJuYW1lJyk7fVxuICBnZXQgcGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLmNyZWRlbnRpYWxzLmdldCgncGFzc3dvcmQnKTt9XG5cbiAgLyoqXG4gICAqIFVwb24gZm9ybSBzdWJtaXNzaW9uLCBhdHRlbXB0cyB0byBzaWduIGluIHRoZSB1c2VyIHdpdGggYGNyZWRlbnRpYWxzYCAodXNpbmcgdGhlIHNlcnZpY2UpXG4gICAqXG4gICAqIFdoZW4gc3VjY2Vzc2Z1bCwgbmF2aWdhdGUgdG9cbiAgICogLSB0aGUgcmVkaXJlY3QgVVJMIGlmIHNldCAod2hlbiBub24tbG9nZ2VkIGluIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGEgcGFnZSB0aGF0IHJlcXVpcmVkIGxvZ2dpbmcgaW4pXG4gICAqIC0gdGhlIGhvbWUgcGFnZSBpZiByZWRpcmVjdCBVUkwgaXMgbm90IHNldFxuICAgKlxuICAgKiBXaGVuIHVuc3VjY2Vzc2Z1bCwgZGlzcGxheSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICAgIHNpZ25pbigpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICAgICAgICAuc2lnbmluKHRoaXMuY3JlZGVudGlhbHMudmFsdWUpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnNldFVzZXIocmVzdWx0KTtcbiAgICAgICAgICBsZXQgcmVkaXJlY3QgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UucmVkaXJlY3RVcmwgPyB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UucmVkaXJlY3RVcmwgOiAnLyc7XG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtyZWRpcmVjdF0pO1xuICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAqIEdldCB0aGUgZm9ybSBpbnB1dCBDU1MgY2xhc3NlcyBzdHlsaW5nIHRvIHByb3ZpZGUgZmVlZGJhY2sgdG8gdXNlclxuICAqIHdoZXRoZXIgaW5wdXQgaXMgdmFsaWQgb24gbm90XG4gICpcbiAgKiBBbHdheXMgaGFzIGAuZm9ybS1jb250cm9sYCB0aGVuIGAuaXMtaW52YWxpZGAgb3IgYC5pcy12YWxpZGAgYXJlIHNldCBvbmNlIGlucHV0IGhhcyBiZWVuIHRvdWNoZWRcbiAgKlxuICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtTGFiZWwgLSBmb3JtIGdyb3VwIG5hbWUgbG9vay11cCBpbnB1dCBzdGF0ZVxuICAqXG4gICogQHJldHVybnMge09iamVjdH0gQ1NTIGNsYXNzZXMgd2hpY2ggYXBwbHkgdG8gdGhpcyBpbnB1dFxuICAqL1xuICBnZXRJbnB1dENsYXNzKGZvcm1MYWJlbDogc3RyaW5nKSB7XG4gICAgbGV0IG91dCA9IHsnZm9ybS1jb250cm9sJzogdHJ1ZX07XG4gICAgaWYodGhpcy5jcmVkZW50aWFscyAmJiB0aGlzLmNyZWRlbnRpYWxzLmdldChmb3JtTGFiZWwpKXtcbiAgICAgIGxldCBhYyA9IHRoaXMuY3JlZGVudGlhbHMuZ2V0KGZvcm1MYWJlbCk7XG4gICAgICBpZihhYy5kaXJ0eSB8fCBhYy50b3VjaGVkKXtcbiAgICAgICAgb3V0Wydpcy1pbnZhbGlkJ10gPSBhYy5pbnZhbGlkO1xuICAgICAgICBvdXRbJ2lzLXZhbGlkJ10gPSBhYy52YWxpZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzY3RydWN0aW9uLCB1bnN1YnNjcmliZSBmcm9tIHRoZSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4uLy4uL2FkbWluL2NvdXJzZS9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InXG5pbXBvcnQgeyBwYXNzd29yZE1hdGNoVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbmZpcm0tcGFzc3dvcmQudmFsaWRhdG9yJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBhbGxvd3MgbmV3IHVzZXJzIHRvIHNpZ24gdXAgdG8gdXNlIENyaWNrZXQuXG4gKiBVc2VzIGVtYWlsIGFzIHVzZXJuYW1lIGFuZCBpbmNsdWRlcyBzZXZlcmFsIGVycm9yXG4gKiBjaGVja3NcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaWdudXAnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3NpZ251cC50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogUG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIExpc3Qgb2YgY291cnNlcyBhdmFpbGFibGUgdG8gc2lnbiB1cCBmb3I7XG4gICAqIEFsbCB1c2VycyBtdXN0IHNlbGVjdCBhIGNvdXJzZSwgZXZlbiBpZiB0aGUgY291cnNlIGlzIFwiTkFcIlxuICAgKi9cbiAgcHJpdmF0ZSBjb3Vyc2VzOiBzdHJpbmdbXSA9IFtdO1xuICAvKipcbiAgICogVXNlciBkZXRhaWxzIHVzZWQgZm9yIHNpZ251cFxuICAgKiAtIGBmaXJzdE5hbWVgXG4gICAqIC0gYGxhc3ROYW1lYFxuICAgKiAtIGB1c2VybmFtZWAgKGVtYWlsIGFkZHJlc3MpXG4gICAqIC0gYGNvdXJzZWAgKGRhdGFiYXNlIGNvdXJzZSBJRCBub3QgY291cnNlIG5hbWUpXG4gICAqIC0gYHBhc3Nzd29yZGBcbiAgICogLSBgY29uZmlybVBhc3N3b3JkYFxuICAgKi9cbiAgcHJpdmF0ZSB1c2VyOiBGb3JtR3JvdXA7XG4gIC8qKlxuICAgKiBCb29sZWFuIHN0YXRlIG9iamVjdCB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbSBtdWx0aXBsZSBzZXJ2aWNlcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGNyZWF0aW9uLCBnZXQgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIGNvdXJzZXMgYW5kIG9yZGVyIHRoZW1cbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy51c2VyID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAnZmlyc3ROYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICdsYXN0TmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAndXNlcm5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdKSxcbiAgICAgICdjb3Vyc2UnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgJ3Bhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKCcnLFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pLFxuICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3JdKSxcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvdXJzZVNlcnZpY2UuZ2V0Q291cnNlTGlzdCgpXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICBsZXQgdG1wID0gdGhpcy5fcmVvcmRlckNvdXJzZXMocmVzKTtcbiAgICAgICAgdGhpcy5jb3Vyc2VzID0gdG1wO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgIHRoaXMuY291cnNlcyA9IFtdO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gYWNjZXNzb3JzIGZvciBmb3JtIHZhbGlkYXRpb25cbiAgZ2V0IGZpcnN0TmFtZSgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ2ZpcnN0TmFtZScpOyB9XG4gIGdldCBsYXN0TmFtZSgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ2xhc3ROYW1lJyk7IH1cbiAgZ2V0IHVzZXJuYW1lKCkgeyByZXR1cm4gdGhpcy51c2VyLmdldCgndXNlcm5hbWUnKTsgfVxuICBnZXQgY291cnNlKCkgeyByZXR1cm4gdGhpcy51c2VyLmdldCgnY291cnNlJyk7IH1cbiAgZ2V0IHBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy51c2VyLmdldCgncGFzc3dvcmQnKTsgfVxuICBnZXQgY29uZmlybVBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy51c2VyLmdldCgnY29uZmlybVBhc3N3b3JkJyk7IH1cblxuXG4gIC8qKlxuICAgKiBPcmRlciB0aGUgY291cnNlcyBzbyB0aGUgXCJOQVwiIGNvdXJzZSBpcyBhdCB0aGUgdG9wXG4gICAqXG4gICAqIEBwYXJhbSB7YW55W119IGNvdXJzZXMgbGlzdCBvZiBjdXJyZW50bHkgYXZhaWxhYmxlIGNvdXJzZXM7IGVhY2ggaXRlbSBpbiBsaXN0IGhhcyBgY291cnNlTnVtYCBhbmQgYGlkYFxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55W119IHRoZSBsaXN0IG9yZGVyZWQgc28gdGhlIFwiTkFcIiBjb3Vyc2UgaXMgYXQgdGhlIHRvcFxuICAgKi9cbiAgcHJpdmF0ZSBfcmVvcmRlckNvdXJzZXMoY291cnNlczogYW55W10pOiBhbnlbXXtcbiAgICBsZXQgbmEgPSBjb3Vyc2VzLmZpbHRlcigoYyk9PntyZXR1cm4gYy5jb3Vyc2VOdW0gPT09ICdOQSd9KTtcbiAgICBsZXQgb3RoZXIgPSBjb3Vyc2VzLmZpbHRlcigoYyk9PntcbiAgICAgIHJldHVybiBjLmNvdXJzZU51bSAhPT0gJ05BJ1xuICAgIH0pO1xuICAgIHJldHVybiBuYS5jb25jYXQob3RoZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIC0gQXR0ZW1wdHMgdG8gc2lnbiB0aGUgdXNlciB1cCB3aGVuIHRoZXkgc3VibWl0IHRoZSBmb3JtXG4gICAqIC0gSW5jbHVkZXMgZXJyb3IgY2hlY2tzIGZvciBzZWxlY3RpbmcgYSBjb3Vyc2UgYW5kIHBhc3N3b3JkcyBtYXRjaFxuICAgKiAtIFdoZW4gc2lnbi11cCBpcyBzdWNjZXNzZnVsLCBzZXRzIHRoZSBbbG9nZ2VkIGluIHVzZXJde0BsaW5rIGF1dGhlbnRpY2F0aW9uLnNlcnZpY2V9IGFuZCBuYXZpZ2F0ZXMgdG8gdGhlIGhvbWUgcGFnZVxuICAgKi9cbiAgc2lnbnVwKCkge1xuICAgICAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgICAgIC5zaWdudXAodGhpcy51c2VyLnZhbHVlKVxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2Uuc2V0VXNlcihyZXN1bHQpO1xuICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSlcbiAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnJvcilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAqIEdldCB0aGUgZm9ybSBpbnB1dCBDU1MgY2xhc3NlcyBzdHlsaW5nIHRvIHByb3ZpZGUgZmVlZGJhY2sgdG8gdXNlclxuICAqIHdoZXRoZXIgaW5wdXQgaXMgdmFsaWQgb24gbm90XG4gICpcbiAgKiBBbHdheXMgaGFzIGAuZm9ybS1jb250cm9sYCB0aGVuIGAuaXMtaW52YWxpZGAgb3IgYC5pcy12YWxpZGAgYXJlIHNldCBvbmNlIGlucHV0IGhhcyBiZWVuIHRvdWNoZWRcbiAgKlxuICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtTGFiZWwgLSBmb3JtIGdyb3VwIG5hbWUgbG9vay11cCBpbnB1dCBzdGF0ZVxuICAqXG4gICogQHJldHVybnMge09iamVjdH0gQ1NTIGNsYXNzZXMgd2hpY2ggYXBwbHkgdG8gdGhpcyBpbnB1dFxuICAqL1xuICBnZXRJbnB1dENsYXNzKGZvcm1MYWJlbDogc3RyaW5nKSB7XG4gICAgbGV0IG91dCA9IHsnZm9ybS1jb250cm9sJzogdHJ1ZX07XG4gICAgaWYodGhpcy51c2VyICYmIHRoaXMudXNlci5nZXQoZm9ybUxhYmVsKSl7XG4gICAgICBsZXQgYWMgPSB0aGlzLnVzZXIuZ2V0KGZvcm1MYWJlbCk7XG4gICAgICBpZihhYy5kaXJ0eSB8fCBhYy50b3VjaGVkKXtcbiAgICAgICAgb3V0Wydpcy1pbnZhbGlkJ10gPSBhYy5pbnZhbGlkO1xuICAgICAgICBvdXRbJ2lzLXZhbGlkJ10gPSBhYy52YWxpZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzY3RydWN0aW9uLCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzIHRvIHByZXZlbnQgYSBtZW1vcnkgbGVha1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cbiAgLyoqXG4gICogQ3VzdG9tIHZhbGlkYXRvciB0byBjaGVjayB0aGF0IGlucHV0IHBhc3N3b3JkIGFuZCBjb25maXJtYXRpb24gcGFzc3dvcmQgYXJlIHRoZSBzYW1lXG4gICpcbiAgKiBAcGFyYW0gYWMge0Fic3RyYWN0Q29udHJvbH0gLSByZWFjdGl2ZSBmb3JtIGNvbnRyb2wgZm9yIGBjb25maXJtUGFzc3dvcmRgIGlucHV0XG4gICogLSBtdXN0IGJlIHBhcnQgb2YgYSBGb3JtR3JvdXAgd2l0aCBhbHNvIGhhcyBhIGBwYXNzd29yZGAgaW5wdXRcbiAgKlxuICAqIEByZXR1cm5zIHtudWxsIHwgT2JqZWN0IH0gLSBgbnVsbGAgd2hlbiBwYXNzd29yZHMgbWF0Y2ggb3IgYmVmb3JlIGZvcm0gaXMgaW5pdGlhbGl6ZWRcbiAgKiAtIGB7bWlzbWF0Y2g6dHJ1ZX1gIHdoZW4gcGFzc3dvcmRzIGRvbid0IG1hdGNoXG4gICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXNzd29yZE1hdGNoVmFsaWRhdG9yKGFjOiBBYnN0cmFjdENvbnRyb2wpe1xuICAgICAgbGV0IGZnID0gYWMucGFyZW50O1xuICAgIGlmKCFmZyl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZnLmdldCgncGFzc3dvcmQnKS52YWx1ZSA9PT0gZmcuZ2V0KCdjb25maXJtUGFzc3dvcmQnKS52YWx1ZSA/IG51bGwgOiB7bWlzbWF0Y2g6IHRydWV9O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLXBhc3N3b3JkLnZhbGlkYXRvci50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRoYXQgYSB1c2VyIHNpZ25zIG91dC4gSGFzIG5vIHZpZXcvdGVtcGxhdGUtLXJlc2V0c1xuICogdmFyaWFibGVzIGFuZCBuYXZpZ2F0ZSB0byBob21lIHBhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lnbm91dCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNpZ25vdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcbiAgKXt9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBjcmVhdGlvblxuICAgKiAxLiBTaWduIG91dCB1c2VyIG9uIHNlcnZlclxuICAgKiAyLiBVbnNldCBbQXV0aGVudGljYXRpb25TZXJ2aWNlXXtAbGluayBBdXRoZW50aWNhdGlvblNlcnZpY2V9IHVzZXJcbiAgICogMy4gUmVkaXJlY3QgdG8gaG9tZSBwYWdlXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbm91dCgpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNldFVzZXIobnVsbCk7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gYXV0aGVudGljYXRpb24gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIElmIHVzZXIgZm9yZ2V0cyB0aGVpciBwYXNzd29yZCwgdGhleSBjYW4gZW50ZXJcbiAqIHRoZXJlIGVtYWlsIGFkZHJlc3MuIElmIHRoZXJlIGlzIGFuIGFjY291bnQgd2l0aCB0aGUgZW1haWwgYWRkcmVzcyxcbiAqIGFuIGVtYWlsIGlzIHNlbnQgd2l0aCBhIGxpbmsgdGhhdCBhbGxvd3MgdXNlciB0byByZXNldCB0aGVpciBwYXNzd29yZFxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIGZvciBlbnRlcmluZyBlbWFpbCBhZGRyZXNzIGFuZFxuICogaW5mb3JtaW5nIGlmIGVtYWlsIGFkZHJlc3Mgd2FzIHZhbGlkIGFuZCByZXNldCAqIHBhc3N3b3JkIGVtYWlsIHdhcyBzdWNjZXNzZnVsbHkgc2VudFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZvcmdldC1wc3dkJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9mb3JnZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95e1xuICAvKipcbiAgICogUG9zc2libGUgZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIE1lc3NhZ2Ugd2hlbiByZXNldCBwYXNzd29yZCBlbWFpbCB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnRcbiAgICovXG4gIHByaXZhdGUgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogVXNlcidzIGVtYWlsIHRvIGNoZWNrIGlmIGFuIGFjY291bnQgZXhpc3RzXG4gICAqL1xuICBlbWFpbDogRm9ybUNvbnRyb2w7XG4gIC8qKlxuICAgKiBBdXRoZW50aWNhdGlvbiBzZXJ2aWNlIHN1YnNjcmlwdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7IH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgZm9ybSBvbiBjb21wb25lbnQgY3JlYXRpb25cbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5lbWFpbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdKTtcbiAgfVxuICAvKipcbiAgICogQWZ0ZXIgc3VibWl0dGluZyBmb3JtLCByZXNldCBfc3VjY2Vzc18gYW5kIF9lcnJvcl8gbWVzc2FnZXMsIHNlbmQgZW1haWwgdG8gdGhlIHNlcnZlciwgYW5kIHdhaXQgZm9yIHJlc3BvbnNlXG4gICAqXG4gICAqIC0gSWYgcGFzc3dvcmQgcmVzZXQgZW1haWwgc3VjY2Vzc2Z1bGx5IHNldCwgX3N1Y2Nlc3NfIG1lc3NhZ2UgaXMgdXBkYXRlZFxuICAgKiAtIElmIHRoZXJlIHdhcyBhbiBlcnJvciAoc2VydmVyIGVycm9yLCBlbWFpbCBkb2Vzbid0IGJlbG93IHRvIGFueSB1c2VyKSwgX2Vycm9yXyBtZXNzYWdlIGlzIHNldCB3aXRoIGRlc2NyaXB0aW9uIG9mIHRoZSBlcnJvclxuICAgKi9cbiAgICBzZW5kRm9yZ2V0KCkge1xuICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9ICcnO1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgIGxldCBib2R5ID0ge2VtYWlsOiB0aGlzLmVtYWlsLnZhbHVlfTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICAgICAgICAuZm9yZ2V0UGFzc3dvcmQoYm9keSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAvLyBpZiBzdWNjZXNzZnVsLCBzaG91bGQgZ2V0IHN1Y2Nlc3MgbWVzc2FnZVxuICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnJvcilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIENTUyBjbGFzcyBmb3IgdGhlIGVtYWlsIGlucHV0IGJhc2VkIG9uIGl0J3MgdmFsaWRpdHlcbiAgICpcbiAgICogQWx3YXlzIGhhcyBgLmZvcm0tY29udHJvbGAgdGhlbiBgLmlzLWludmFsaWRgIG9yIGAuaXMtdmFsaWRgIGFyZSBzZXQgb25jZSBpbnB1dCBoYXMgYmVlbiB0b3VjaGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IENTUyBjbGFzc2VzIHdoaWNoIGFwcGx5XG4gICAqL1xuICBnZXRJbnB1dENsYXNzKCl7XG4gICAgbGV0IG91dCA9IHsnZm9ybS1jb250cm9sJzogdHJ1ZX07XG4gICAgaWYodGhpcy5lbWFpbCAmJiAodGhpcy5lbWFpbC5kaXJ0eSB8fCB0aGlzLmVtYWlsLnRvdWNoZWQpKXtcbiAgICAgIG91dFsnaXMtaW52YWxpZCddID0gdGhpcy5lbWFpbC5pbnZhbGlkO1xuICAgICAgb3V0Wydpcy12YWxpZCddID0gdGhpcy5lbWFpbC52YWxpZDtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgY29tcG9uZW50LCB1bnN1YnNjcmliZSBmcm9tIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2UgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcbmltcG9ydCB7IHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uZmlybS1wYXNzd29yZC52YWxpZGF0b3InO1xuXG4vKipcbiAqIEFmdGVyIHVzZXIgcmVxdWVzdHMgdG8gcmVzZXQgcGFzc3dvcmQgYW5kIHRoZXkgaGF2ZSBhIHRva2VuLFxuICogdGhpcyBjb21wb25lbnQgYWxsb3dzIHRoZW0gdG8gc2V0IHRoZSBwYXNzd29yZCB0byBhIG5ldyBwYXNzd29yZFxuICogKGFzc3VtaW5nIHRva2VuIGlzIHZhbGlkKVxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Jlc2V0LXBzd2QnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3Jlc2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogUG90ZW50aWFsIGVycm9yIG1lc3NhZ2UgZnJvbSBzZXJ2ZXJcbiAgICovXG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogTWVzc2FnZSB3aGVuIG5ldyBwYXNzd29yZCBzdWNjZXNzZnVsbHkgc2F2ZWRcbiAgICovXG4gIHByaXZhdGUgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogRW1haWwgYW5kIG5ldyBwYXNzd29yZHMgdG8gYmUgYWJsZSB0byB1cGRhdGUgdGhlIGRhdGFiYXNlXG4gICAqIC0gYHBhc3N3b3JkYCAtIHRoZSBuZXcgcGFzc3dvcmQgdG8gc2V0XG4gICAqIC0gYGNvbmZpcm1QYXNzd29yZGAgLSBjb25maXJtIHBhc3N3b3JkIHR5cGVkIGNvcnJlY3RseVxuICAgKiAtIGB0b2tlbmAgLSBwYXNzd29yZCByZXNldCB0b2tlbiB0byBjb25maXJtIHVzZXIgaGFkIGFjY2VzcyB0byB0aGUgZW1haWwgYW5kIGRpZG4ndCB3YWl0IHRvbyBsb25nXG4gICAqL1xuICBwcml2YXRlIGNyZWRlbnRpYWxzOiBGb3JtR3JvdXA7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8ge0BsaW5rIEF1dGhlbnRpY2F0aW9uU2VydmljZX0gd2hlbiByZXR0aW5nXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogSXMgdGhlIHN1Ym1pdCBidXR0b24gZGlzYWJsZWQ7IHRoaXMgd291bGQgaGFwcGVuIHdoZW5cbiAgICogdGhlcmUgaXMgbm8gdG9rZW5cbiAgICovXG4gIC8vcHJpdmF0ZSBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgfVxuICAvKipcbiAgICogV2hlbiBpbml0aWFsaXppbmcgdGhlIGNvbXBvbmVudCwgZ2V0IHRoZSB0b2tlbiBmcm9tIHRoZSBVUkxcbiAgICpcbiAgICogSWYgdGhlcmUgaXMgbm8gdG9rZW4sIGdpdmUgZXJyb3IgbWVzc2FnZSBhbmQgZGlzYWJsZSBzdWJtaXQgYnV0dG9uXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICdwYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSksXG4gICAgICAnY29uZmlybVBhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgcGFzc3dvcmRNYXRjaFZhbGlkYXRvcl0pLFxuICAgICAgJ3Rva2VuJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgIH0pO1xuXG4gICAgbGV0IHVybFRva2VuID0gdGhpcy5fcm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCd0b2tlbicpO1xuICAgIGlmICh1cmxUb2tlbiA9PT0gJycpe1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnTm8gdG9rZW4gc3BlY2lmaWVkLidcbiAgICB9XG4gICAgdGhpcy5jcmVkZW50aWFscy5wYXRjaFZhbHVlKHt0b2tlbjogdXJsVG9rZW59KTtcbiAgfVxuXG4gIGdldCBwYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KCdwYXNzd29yZCcpOyB9XG4gIGdldCBjb25maXJtUGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLmNyZWRlbnRpYWxzLmdldCgnY29uZmlybVBhc3N3b3JkJyk7IH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gcmVzZXQgdGhlIG5ldyBwYXNzd29yZFxuICAgKiAxLiBJZiBubyBlcnJvcnMsIHNlbmQgY3JlZGVudGlhbHMgdG8gc2VydmVyXG4gICAqIDIuIFBhc3N3b3JkIGNvcnJlY3RseSByZXNldCwgZGlzcGxheXMgdGhlIHN1Y2Nlc3MgbWVzc2FnZVxuICAgKiAzLiBJZiBlcnJvciByZXNldGluZyB0aGUgcGFzc3dvcmQsIGRpc3BsYXlzIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gICAgc2VuZFJlc2V0KCkge1xuICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgICAgIC5yZXNldFBhc3N3b3JkKHRoaXMuY3JlZGVudGlhbHMudmFsdWUpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgLy8gaWYgc3VjY2Vzc2Z1bCwgc2hvdWxkIGdldCBzdWNjZXNzIG1lc3NhZ2VcbiAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzLnNldFZhbHVlKHsncGFzc3dvcmQnOiAnJywgJ2NvbmZpcm1QYXNzd29yZCc6ICcnLCB0b2tlbjogJyd9KTtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gcmVzdWx0Lm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycm9yKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgKiBHZXQgdGhlIGZvcm0gaW5wdXQgQ1NTIGNsYXNzZXMgc3R5bGluZyB0byBwcm92aWRlIGZlZWRiYWNrIHRvIHVzZXJcbiAgKiB3aGV0aGVyIGlucHV0IGlzIHZhbGlkIG9uIG5vdFxuICAqXG4gICogQWx3YXlzIGhhcyBgLmZvcm0tY29udHJvbGAgdGhlbiBgLmlzLWludmFsaWRgIG9yIGAuaXMtdmFsaWRgIGFyZSBzZXQgb25jZSBpbnB1dCBoYXMgYmVlbiB0b3VjaGVkXG4gICpcbiAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybUxhYmVsIC0gZm9ybSBncm91cCBuYW1lIGxvb2stdXAgaW5wdXQgc3RhdGVcbiAgKlxuICAqIEByZXR1cm5zIHtPYmplY3R9IENTUyBjbGFzc2VzIHdoaWNoIGFwcGx5IHRvIHRoaXMgaW5wdXRcbiAgKi9cbiAgZ2V0SW5wdXRDbGFzcyhmb3JtTGFiZWw6IHN0cmluZykge1xuICAgIGxldCBvdXQgPSB7J2Zvcm0tY29udHJvbCc6IHRydWV9O1xuICAgIGlmKHRoaXMuY3JlZGVudGlhbHMgJiYgdGhpcy5jcmVkZW50aWFscy5nZXQoZm9ybUxhYmVsKSl7XG4gICAgICBsZXQgYWMgPSB0aGlzLmNyZWRlbnRpYWxzLmdldChmb3JtTGFiZWwpO1xuICAgICAgaWYoYWMuZGlydHkgfHwgYWMudG91Y2hlZCl7XG4gICAgICAgIG91dFsnaXMtaW52YWxpZCddID0gYWMuaW52YWxpZDtcbiAgICAgICAgb3V0Wydpcy12YWxpZCddID0gYWMudmFsaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RydWN0aW9uLCB1bnN1YnNjcmliZSBmcm9tIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2UgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWxwJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaGVscC50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vaGVscC5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIZWxwQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKCl7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBNYWluIHVzZXIgcHJvZmlsZSBjb21wb25lbnQ7IGFpbWVkIGZvciB1c2UgdG8gZWRpdCBuYW1lIGFuZFxuICogZW1haWwgYWRkcmVzcy4gQWxzbyBhY2Nlc3MgdXBkYXRlIHBhc3N3b3JkIGxpbmsgdG8gdXBkYXRlIHBhc3N3b3JkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VzZXItcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3VzZXItcHJvZmlsZS50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBVc2VyUHJvZmlsZUNvbXBvbmVudHtcblxuICAvKipcbiAgICogRGF0YWJhc2UgdXNlciBpZFxuICAgKi9cbiAgcHJpdmF0ZSB1c2VySWQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFVzZXIgZGV0YWlscyAoYXMgYW4gb2JqZWN0KVxuICAgKiBDdXJyZW50bHkgaW5jbHVkZXM6IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGFuZCBlbWFpbFxuICAgKi9cbiAgcHJpdmF0ZSB1c2VySW5mbzogYW55O1xuICAvKipcbiAgICogU3RhdGUgdG8gbWFpbnRhaW4gb3BlbiBzdWJzY3JpcHRpb25zIHVudGlsIGNvbXBvbmVudCBpcyBkZXN0b3J5ZWRcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogUG90ZW50aWFsIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3I7IGluY2x1ZGVzIHNlcnZpY2VzIHRvIGZldGNoIGluZm9cbiAgICpcbiAgICogQHBhcmFtIHtQcm9maWxlU2VydmljZX0gX3Byb2ZpbGVTZXJ2aWNlIFNlcnZpY2UgZm9yIHVwZGF0aW5nIHRoZSBpbmZvcm1hdGlvblxuICAgKiBAcGFyYW0ge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gX2F1dGhTZXJ2aWNlIFNlcnZpY2UgdG8gZ2V0IHRoZSBjdXJyZW50IHVzZXIgaW5mb3JtYXRpb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3Byb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICl7XG4gICAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnQgb24gY3JlYXRpb25cbiAgICogMS4gR2V0IHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKiAyLiBTYXZlIHRoZSB1c2VyJ3MgZGV0YWlscyB0byBvYmplY3QgdG8gYmUgYWJsZSB0byBlZGl0XG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIC8vIGdldCBjdXJyZW50IHVzZXIgaW5mb1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIkXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHJlcy5pZDtcbiAgICAgIHRoaXMudXNlckluZm8gPSB7XG4gICAgICAgIGZpcnN0TmFtZTogcmVzLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IHJlcy5sYXN0TmFtZSxcbiAgICAgICAgZW1haWw6IHJlcy5lbWFpbFxuICAgICAgfVxuICAgIH0sIChpZEVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShpZEVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gdXBkYXRlIHRoZSBwcm9maWxlIGlmIHBvc3NpYmxlIG9yIHNldCBlcnJvclxuICAgKiBtZXNzYWdlIGlmIHRoZXJlJ3MgYSBwcm9ibGVtXG4gICAqL1xuICB1cGRhdGVQcm9maWxlKCl7XG4gICAgdGhpcy5fcHJvZmlsZVNlcnZpY2UuZWRpdFByb2ZpbGUodGhpcy51c2VySWQsIHRoaXMudXNlckluZm8pXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgodXBkYXRlZCk9PntcbiAgICAgIHRoaXMudXNlckluZm8gPSB7Zmlyc3ROYW1lOiB1cGRhdGVkLmZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogdXBkYXRlZC5sYXN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXBkYXRlZC5lbWFpbH07XG4gICAgICB0aGlzLl9hdXRoU2VydmljZS5zZXRVc2VyKHVwZGF0ZWQpO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXMgdG8gcHJldmVudFxuICAgKiBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGEgbG9nZ2VkIGluIHVzZXIgdG8gdXBkYXRlIHRoZWlyIHBhc3N3b3JkXG4gKiBieSBlbnRlcmluZyB0aGVpciBjdXJyZW50IHBhc3N3b3JkIHRoZW4gdGhlIG5ldyBwYXNzd29yZFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1c2VyLXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vdXBkYXRlLXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50e1xuXG4gIC8qKlxuICAgKiBUaGUgbG9nZ2VkIGluIHVzZXJcbiAgICovXG4gIHByaXZhdGUgdXNlcjogVXNlcjtcbiAgLyoqXG4gICAqIC0gUGFzc3dvcmQgaW5mb3JtYXRpb24gdG8gc2VuZCB0byBzZXJ2ZXIgdG8gdXBkYXRlIHBhc3N3b3JkXG4gICAqIC0gSGFzIGZpZWxkcyBgcGFzc3dvcmRgIChjdXJyZW50IHBhc3N3b3JkKSwgYG5ld1Bhc3N3b3JkYCAocGFzc3dvcmQgdG8gY2hhbmdlIHRvKSwgXG4gICAqIGBjb25maXJtUGFzc3dvcmRgIChjb25maXJtcyB0eXBpbmcgb2YgbmV3IHBhc3N3b3JkKSwgYW5kIFxuICAgKiBgdXNlcm5hbWVgICh1c2VyJ3MgZW1haWwpXG4gICAqL1xuICBwcml2YXRlIGNyZWRlbnRpYWxzOiBhbnk7XG4gIC8qKlxuICAgKiBTdGF0ZSB0byBrZWVwIHRyYWNrIG9mIGNvbXBvZW5lbnQgYWxpdmVcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogUG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZSBkaXNwbGF5ZWQgcHJvbWluYW50bHlcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2UgYWJvdXQgc3VibWlzc2lvbiBhbmQgd2h5IHRoZSBzdWJtaXNzaW9uIGRpZG4ndCB3b3JrIGFzIGV4cGVjdGVkXG4gICAqL1xuICBwcml2YXRlIHBhc3N3b3JkTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgKXtcbiAgICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgbmV3UGFzc3dvcmQ6ICcnLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICcnXG4gICAgICB9O1xuICAgIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50XG4gICAqIDEuIEdldCB0aGUgbG9nZ2VkIGluIHVzZXIgaW5mb1xuICAgKiAyLiBTZXQgdXAgdGhlIGNyZWRlbnRpYWxzIHdpdGggZW1haWwgYWRkcmVzc1xuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICAvLyBnZXQgY3VycmVudCB1c2VyIGluZm9cbiAgICB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyJFxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgdGhpcy51c2VyID0gcmVzO1xuICAgICAgdGhpcy5jcmVkZW50aWFsc1sndXNlcm5hbWUnXSA9IHJlcy5lbWFpbDtcbiAgICB9LCAoaWRFcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoaWRFcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHQgdG8gdXBkYXRlIHRoZSBwYXNzd29yZFxuICAgKiAtIElmIHN1Y2Nlc3NmdWwsIHJlZGlyZWN0cyB0byBwcm9maWxlIHBhZ2VcbiAgICogLSBJZiB0aGVyZSdzIGFuIGVycm9yLCBkaXNwbGF5cyBlcnJvciBtZXNzYWdlXG4gICAqL1xuICB1cGRhdGVQYXNzd29yZCgpe1xuICAgIC8vIGRvIGNoZWNrc1xuICAgIHRoaXMucGFzc3dvcmRNZXNzYWdlID0gdGhpcy5fY2hlY2tQYXNzd29yZHMoKTtcbiAgICBpZih0aGlzLnBhc3N3b3JkTWVzc2FnZSA9PT0gJycpe1xuICAgICAgLy8gY2FuIHVwZGF0ZVxuICAgICAgdGhpcy5fcHJvZmlsZVNlcnZpY2UudXBkYXRlUGFzc3dvcmQodGhpcy51c2VyLmlkLCB0aGlzLmNyZWRlbnRpYWxzKVxuICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxlJ10pO1xuICAgICAgfSwgKGVycik9PntcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRG9lcyB2YXJpb3VzIGNoZWNrcyB0byBlbnN1cmUgdGhlIHBhc3N3b3JkIGZpZWxkcyBhcmUgdmFsaWRcbiAgICogMS4gQWxsIGZpZWxkcyBhcmUgZmlsbGVkIGluXG4gICAqIDIuIE5ldyBwYXNzd29yZCBpcyBkaWZmZXJlbnQgZnJvbSBvbGQgcGFzc3dvcmRcbiAgICogMy4gQ29uZmlybSBwYXNzd29yZCBtYXRjaGVzIG5ldyBwYXNzd29yZFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBlcnJvciBtZXNzYWdlIGlmIGF0IGxlYXN0IG9uZSBjb25kaXRpb24gaXNuJ3QgbWV0IG9yIGAnJ2AgaWYgZXZlcnl0aGluZyBpcyB2YWxpZFxuICAgKi9cbiAgcHJvdGVjdGVkIF9jaGVja1Bhc3N3b3Jkcygpe1xuICAgIGxldCBwID0gdGhpcy5jcmVkZW50aWFscy5wYXNzd29yZDtcbiAgICBsZXQgbiA9IHRoaXMuY3JlZGVudGlhbHMubmV3UGFzc3dvcmQ7XG4gICAgbGV0IGMgPSB0aGlzLmNyZWRlbnRpYWxzLmNvbmZpcm1QYXNzd29yZDtcbiAgICBpZihwID09PSAnJyl7XG4gICAgICByZXR1cm4gJ0VudGVyIG9sZCBwYXNzd29yZCc7XG4gICAgfSBlbHNlIGlmKG4gPT09ICcnKXtcbiAgICAgIHJldHVybiAnRW50ZXIgbmV3IHBhc3N3b3JkJztcbiAgICB9IGVsc2UgaWYoYyA9PT0gJycpe1xuICAgICAgcmV0dXJuICdDb25maXJtIG5ldyBwYXNzd29yZCc7XG4gICAgfSBlbHNlIGlmKHAgPT09IG4pe1xuICAgICAgcmV0dXJuICdOZXcgcGFzc3dvcmQgY2Fubm90IHRoZSBzYW1lIGFzIHRoZSBvbGQgcGFzc3dvcmQnO1xuICAgIH0gZWxzZSBpZihuICE9PSBjKXtcbiAgICAgIHJldHVybiAnQ29uZmlybSBwYXNzd29yZCBkb2VzIG5vdCBtYXRjaCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RydWN0aW9uLCB1bnN1YnNjcmliZSB0byBzZXJ2aWNlcy9zdHJlYW1zXG4gICAqIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcHJvZmlsZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFZpZXcgY29tcG9uZW50IHVzZWQgdG8gbGluayB0aGUgYnJlYWRjcnVtYiB3aXRoIHRoZSBsb2NhdGlvblxuICogbW9kdWxlIGNvbXBvbmVudHMgb3Igc2NlbmFyaW8gbGlzdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzY2VuYXJpbycsXG4gIHRlbXBsYXRlOiAnPG1jLWJyZWFkY3J1bWJzPjwvbWMtYnJlYWRjcnVtYnM+PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBTY2VuYXJpb0NvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2NlbmFyaW8uc2VydmljZSc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zY2VuYXJpby5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIENvbXBvbmVudCB3aGljaCBsaXN0cyBhbGwgYXZhaWxhYmxlIHNjZW5hcmlvc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NjZW5hcmlvLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2xpc3QudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgLyoqXG4gICAqIFVzZXIgb2JqZWN0IG9mIGxvZ2dlZCBpbiB1c2VyLCBpZiBhdmFpbGFibGVcbiAgICovXG4gICAgdXNlcjogVXNlcjtcbiAgLyoqXG4gICogbGlzdCBvZiBhdmFpbGFibGUgc2NlbmFyaW9zXG4gICovXG4gICAgc2NlbmFyaW9zOiBTY2VuYXJpb1tdO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBwcml2YXRlIHNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSkge1xuXG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnQgYnkgdXNpbmcgdGhlIHNlcnZpY2UgdG8gZmV0Y2ggdGhlXG4gICAqIGxpc3Qgb2Ygc2NlbmFyaW9zXG4gICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgIHRoaXMuc1N1YnNjcmlwdGlvbiA9IHRoaXMuX3NjZW5hcmlvU2VydmljZS5saXN0U2NlbmFyaW9zKClcbiAgICAgICAgLnN1YnNjcmliZSgoc2NlbmFyaW9zKSA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmFyaW9zID0gc2NlbmFyaW9zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICogdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zU3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29wdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9vcHRpb25zLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBPcHRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gIHVzZXI6IFVzZXI7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG5cbiAgfVxuICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcGVkZS1sYWJyb29tJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbXBlZGUtbGFicm9vbS50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgTWVuZGVscGVkZUxhYnJvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgdXNlcjogVXNlcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcblxuICB9XG4gIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbmRlbHBlZGUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tZW5kZWxwZWRlLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBNZW5kZWxwZWRlQ29tcG9uZW50e1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWRtaW5TdHVkZW50LCBTdHVkZW50RnJpZGdlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogU2VydmljZSB3aGljaCBkZWFscyB3aXRoIGFsbCBzdHVkZW50LXJlbGF0ZWQgYmFja2VuZCBjYWxsc1xuICogZnJvbSBhbiBhZG1pblxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3R1ZGVudFNlcnZpY2Uge1xuICBcbiAgcHJpdmF0ZSBfYmFzZVVSTCA9ICcvYXBpL2FkbWluJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHN0dWRlbnRzLCBjb250ZW50IGlzIGRlcGVuZGVudCBvZiBsb2dnZWQgaW4gdXNlciByb2xlXG4gICAqXG4gICAqIElmIGBhZG1pbmAsIHJldHVybiBhbGwgc3R1ZGVudHMvdXNlcnNcbiAgICogXG4gICAqIElmIGBpbnN0cmAsIHJldHVybnMgc3R1ZGVudHMgb2YgY291cnNlcyBpbnN0ciB0ZWFjaHNcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge0FkbWluU3R1ZGVudFtdfSAtIGxpc3Qgb2Ygc3R1ZGVudHNcbiAgICovXG4gIGxpc3RTdHVkZW50cyhhZG1pbklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudFtdPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxBZG1pblN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZXRhaWxzIGFib3V0IGEgc3R1ZGVudFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBmb3IgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBmb3Igc3R1ZGVudCB0byBiZSBsb29rZWQgdXBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50Pn0gLSBkZXRhaWxzIGFib3V0IHNwZWNpZmllZCBzdHVkZW50XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBnZXRTdHVkZW50KGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8QWRtaW5TdHVkZW50PihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgcm9sZSAoYWRtaW4sIGluc3RyLCBzdHVkZW50KSBvZiBhbm90aGVyIHN0dWRlbnQvdXNlclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBmb3IgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBmb3Igc3R1ZGVudCB0byB1cGRhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJvbGUgLSBuZXcgcm9sZSB0byBiZSBhc3NpZ25lZDsgb25lIG9mOiBgXCJhZG1pblwiLCBcImluc3RyXCIsIFwic3R1ZGVudFwiYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIHRoZSB1cGRhdGVkIHN0dWRlbnRcbiAgICogLSBlcnJvciBgVmFsdWUgXCJyb2xlXCIgaXMgbm90IGEgdmFsaWQgcm9sZWAgaWYgcm9sZSBpc24ndCBvbmUgb2YgYGFkbWluYCwgYGluc3RyYCwgYHN0dWRlbnRgXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBzZXRTdHVkZW50Um9sZShhZG1pbklkOiBudW1iZXIsIHN0dWRlbnRJZDogbnVtYmVyLCByb2xlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgbGV0IGJvZHkgPSB7cm9sZTogcm9sZX07XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHMvJHtzdHVkZW50SWR9YCwgYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgc3R1ZGVudC91c2VyXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIC0gdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB1c2VySWQgb2Ygc3R1ZGVudCB0byBkZWxldGVcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBzdHVkZW50IHdobyB3YXMganVzdCBkZWxldGVkXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBkZWxldGVTdHVkZW50KGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50cy8ke3N0dWRlbnRJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2NlbmFyaW8gZnJpZGdlIGZvciBhIHN0dWRlbnQ7IGluY2x1ZGVzIGZyaWRnZSBkZXRhaWxzIHN1Y2ggYXNcbiAgICogZnJpZGdlIHN0cmFpbnMgYW5kIGd1ZXNzZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBvZiBzdHVkZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgLSBzY2VuYXJpbyBJZCBmb3IgZnJpZGdlIHRvIGZpbmRcbiAgICpcbiAgICogQHJldHVybnN7T2JzZXJ2YWJsZTxTdHVkZW50RnJpZGdlPn0gLSB0aGUgc3R1ZGVudCdzIGZyaWRnZVxuICAgKiAtIGFuIGVtcHR5IGZyaWRnZSBpZiB0aGUgZnJpZGdlIGRvZXNuJ3QgZXhpc3QgeWV0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyIGVycm9yXG4gICAqL1xuICBnZXRGcmlkZ2UoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0dWRlbnRGcmlkZ2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PFN0dWRlbnRGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHMvJHtzdHVkZW50SWR9LyR7c2NlbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzY2VuYXJpbyBhY2Nlc3MgZm9yIGEgc3R1ZGVudDsgdGhpcyBkZWxldGVzIHRoZSBleGlzdGluZ1xuICAgKiBmcmlkZ2VcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBvZiBzdHVkZW50XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXBkYXRlZFN0YXRlIC0gdHJ1ZSB0byBncmFudCBhY2Nlc3MsIGZhbHNlIHRvIHJldm9rZSBhY2Nlc3NcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50Pn0gdXBkYXRlZCBzdHVkZW50XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBncmFudFNjZW5BY2Nlc3MoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHVwZGF0ZWRTdGF0ZTogYm9vbGVhbik6IE9ic2VydmFibGU8QWRtaW5TdHVkZW50PntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3Q8QWRtaW5TdHVkZW50PihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfS8ke3NjZW5JZH1gLCB7YWNjZXNzOiB1cGRhdGVkU3RhdGV9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuLyoqXG4gKiBUaGlzIGlzIGEgY29uZmlybWF0aW9uIGRpYWxvZyB3aGVuIHVzZXIgd2FudHMgdG8gZGVsZXRlXG4gKiBzb21ldGhpbmcgc2Vuc2l0aXZlLCBpLmUuIGFub3RoZXIgdXNlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb25maXJtLWRlbGV0ZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb25maXJtLWRlbGV0ZS1kaWFsb2cudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudHtcblxuICAvKipcbiAgICogTWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRpYWxvZyB3aW5kb3dcbiAgICovXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZyA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPydcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKXtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgTWNCcmVhZGNydW1ic01vZHVsZSB9IGZyb20gJ25neC1icmVhZGNydW1icyc7XG5cbmltcG9ydCB7IENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQZXJzb25OYW1lUGlwZSB9IGZyb20gJy4uL3BpcGVzL3BlcnNvbi1uYW1lLnBpcGUnO1xuaW1wb3J0IHsgUGVvcGxlTGlzdE5hbWVzUGlwZSB9IGZyb20gJy4uL3BpcGVzL3Blb3BsZS1saXN0LW5hbWVzLnBpcGUnO1xuaW1wb3J0IHsgUGhhZ2VQYXJlbnRzUGlwZSB9IGZyb20gJy4uL3BpcGVzL3BoYWdlLXBhcmVudHMucGlwZSc7XG5cbmltcG9ydCB7IEZvcm1FcnJvcnNNb2R1bGUgfSBmcm9tICcuL2Zvcm0tZXJyb3JzL2Zvcm0tZXJyb3JzLm1vZHVsZSc7XG5pbXBvcnQgeyBTZWxlY3REcm9wTW9kdWxlIH0gZnJvbSAnLi9zZWxlY3QtZHJvcC9zZWxlY3QtZHJvcC5tb2R1bGUnO1xuLy9pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3JzIH0gZnJvbSAnLi9jdXN0b20tdmFsaWRhdG9ycyc7XG4vKipcbiAqIFRoZSBTaGFyZWQgTW9kdWxlIGNvbnRhaW5zIG1vZHVsZXMsIHBpcGVzLCBhbmQgY29tcG9uZW50c1xuICogdGhhdCBhcmUgbmVlZGVkIGFjcm9zcyB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBTYXZlcyB0aW1lIGJ5IGltcG9ydGluZyB0aGlzIG1vZHVsZSByYXRoZXIgdGhhbiB0aGVcbiAqIHBpcGVzL21vZHVsZXMvY29tcG9uZW50cyBpbmRpdmlkdWFsbHlcbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICBGb3JtRXJyb3JzTW9kdWxlLFxuICAgICAgU2VsZWN0RHJvcE1vZHVsZS5mb3JSb290KCksXG4gICAgICBOZ2JNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgTWNCcmVhZGNydW1ic01vZHVsZS5mb3JSb290KClcbiAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQZXJzb25OYW1lUGlwZSxcbiAgICBQZW9wbGVMaXN0TmFtZXNQaXBlLFxuICAgIFBoYWdlUGFyZW50c1BpcGUsXG4gICAgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgIEZvcm1FcnJvcnNNb2R1bGUsXG4gICAgICBOZ2JNb2R1bGUsXG4gICAgICBTZWxlY3REcm9wTW9kdWxlLFxuICAgICAgTWNCcmVhZGNydW1ic01vZHVsZSxcbiAgICAgIFBlcnNvbk5hbWVQaXBlLFxuICAgICAgUGVvcGxlTGlzdE5hbWVzUGlwZSxcbiAgICAgIFBoYWdlUGFyZW50c1BpcGUsXG4gICAgICBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGFuIGVycm9yIG9iamVjdCBhbmQgbG9va3MgZm9yXG4gKiB0aGUgZXJyb3IgbWVzc2FnZTsgaXQgY2hlY2tzIHNldmVyYWwgcHJvcGVydGllcyBiZWNhdXNlXG4gKiBlcnJvcnMgYXJlIG5vdCBhbHdheXMgdW5pZm9ybVxuICpcbiAqIEBwYXJhbSB7YW55fSBlcnJvciAtIGVycm9yIG9iamVjdCB0byBmaW5kIGVycm9yIG1lc3NhZ2UgZnJvbVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlcnJvciBtZXNzYWdlIHdpdGhpbiB0aGUgb2JqZWN0IG9yXG4gKiBgXCJVbmtub3duIGVycm9yXCJgIGlmIHRoZSBlcnJvciBtZXNzYWdlIGNhbid0IGJlIGZvdW5kXG4gKi9cbmV4cG9ydCBjb25zdCByZWFkRXJyb3JNZXNzYWdlID0gZnVuY3Rpb24oZXJyb3I6IGFueSk6IHN0cmluZyB7XG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSAnVW5rbm93biBlcnJvcic7XG4gIGlmKGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLm1lc3NhZ2Upe1xuICAgcmV0dXJuIGVycm9yLmVycm9yLm1lc3NhZ2VcbiAgfSBlbHNlIGlmKGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLnRleHQpe1xuICAgcmV0dXJuIGVycm9yLmVycm9yLnRleHRcbiAgfSBlbHNlIGlmIChlcnJvciAmJiBlcnJvci5tZXNzYWdlKXtcbiAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICB9IGVsc2UgaWYoZXJyb3Ipe1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuICByZXR1cm4gZXJyb3JNZXNzYWdlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL3JlYWQtZXJyb3IudHMiLCJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyl7XG4gIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYm9vdHN0cmFwLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWNCcmVhZGNydW1ic0NvbmZpZyB9IGZyb20gJ25neC1icmVhZGNydW1icyc7XG5cbmltcG9ydCB7IEFwcFJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZWRJbkd1YXJkIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuL3NjZW5hcmlvL3NjZW5hcmlvLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4vYWRtaW4vY291cnNlL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvUmVzb2x2ZXIgfSBmcm9tICcuL3NjZW5hcmlvL3NjZW5hcmlvLnJlc29sdmVyJztcbi8vaW1wb3J0IHsgU2VsZWN0U2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlbGVjdC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBBZG1pbk1vZHVsZSB9IGZyb20gJy4vYWRtaW4vYWRtaW4ubW9kdWxlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTW9kdWxlIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgSGVscE1vZHVsZSB9IGZyb20gJy4vaGVscC9oZWxwLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9maWxlTW9kdWxlIH0gZnJvbSAnLi9wcm9maWxlL3Byb2ZpbGUubW9kdWxlJztcbmltcG9ydCB7IFNjZW5hcmlvTW9kdWxlIH0gZnJvbSAnLi9zY2VuYXJpby9zY2VuYXJpby5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uYXYvbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTWVuZGVscGVkZU1vZHVsZSB9IGZyb20gJy4vbWVuZGVscGVkZS9tZW5kZWxwZWRlLm1vZHVsZSdcbiBcbi8qKlxuICogVGhlIG1haW4gYm9vdHN0cmFwcGVkIG1vZHVsZVxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgIEhlbHBNb2R1bGUsXG4gICAgICBBZG1pbk1vZHVsZSxcbiAgICAgIFByb2ZpbGVNb2R1bGUsXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uTW9kdWxlLFxuICAgICAgU2NlbmFyaW9Nb2R1bGUsXG4gICAgICBNZW5kZWxwZWRlTW9kdWxlLFxuICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoQXBwUm91dGVzKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTmF2Q29tcG9uZW50LFxuICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgIFBhZ2VOb3RGb3VuZENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICBMb2dnZWRJbkd1YXJkLFxuICAgICAgU2NlbmFyaW9TZXJ2aWNlLFxuICAgICAgQ291cnNlU2VydmljZSxcbiAgICAgIFNjZW5hcmlvUmVzb2x2ZXIsXG4gICAgICAvL1NlbGVjdFNlcnZpY2VcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbmNvbnN0cnVjdG9yKGJyZWFkY3J1bWJzQ29uZmlnOiBNY0JyZWFkY3J1bWJzQ29uZmlnKSB7XG5cbiAgICBicmVhZGNydW1ic0NvbmZpZy5wb3N0UHJvY2VzcyA9ICh4KSA9PiB7XG5cbiAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBmaXJzdCBicmVhZGNydW1iIGFsd2F5cyBwb2ludHMgdG8gaG9tZVxuXG4gICAgICBsZXQgeSA9IHg7XG5cbiAgICAgIGlmKHgubGVuZ3RoICYmIHhbMF0udGV4dCAhPT0gJ0hvbWUnKSB7XG4gICAgICAgIHkgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0hvbWUnLFxuICAgICAgICAgICAgcGF0aDogJydcbiAgICAgICAgICB9XG4gICAgICAgIF0uY29uY2F0KHgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geTtcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXBwUm91dGVzOiBSb3V0ZXMgPVxuICAgICAgW3tcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuICAgICAgfSxcbiAgICAgICB7XG4gICAgICAgIHBhdGg6ICcqKicsXG4gICAgICAgIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50XG4gICAgICB9XTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FwcC5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODU3XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2hvbWUvaG9tZS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaG9tZS9ob21lLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gODU5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2hhcmVkL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODYwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBGb3JtYXQgYSB1c2VyJ3Mgb3Igc3R1ZGVudHMgZnJpc3QgYW5kIGxhc3QgbmFtZSBhcyBcImZpcnN0TmFtZSBsYXN0TmFtZVwiXG4gKiAtIFdoZW4gcmV2ZXJzZSBpcyB0cnVlLCBmb3JtYXQgYXMgXCJsYXN0TmFtZSwgZmlyc3ROYW1lXCJcbiAqIC0gQWJsZSB0byBoYW5kbGUgd2hlbiBvbmx5IGZpcnN0IG9yIGxhc3QgbmFtZSBpcyBzZXRcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBwZXJzb24gfCBwZXJzb25OYW1lOmlzUmV2ZXJzZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPntmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9PC9jb2RlPiBiZWNvbWVzIFwiTWlja2V5IE1vdXNlXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlJldmVyc2Ugb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPntmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9PC9jb2RlPiBiZWNvbWVzIFwiTW91c2UsIE1pY2tleVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5GaXJzdCBuYW1lIG9ubHkgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e2ZpcnN0TmFtZTogXCJNaWNrZXlcIiwgbGFzdE5hbWU6IHVuZGVmaW5lZH08L2NvZGU+IGJlY29tZXMgXCJNaWNrZXlcIlxuKi9cbkBQaXBlKHtuYW1lOiAncGVyc29uTmFtZSd9KVxuZXhwb3J0IGNsYXNzIFBlcnNvbk5hbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBlcnNvbjogYW55LCByZXZlcnNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBsZXQgZk5hbWU6IHN0cmluZyA9IHBlcnNvbi5maXJzdE5hbWUgfHwgJyc7XG4gICAgbGV0IGxOYW1lOiBzdHJpbmcgPSBwZXJzb24ubGFzdE5hbWUgfHwgJyc7XG4gIGlmKHJldmVyc2Upe1xuICAgIHJldHVybiBsTmFtZSArIChmTmFtZSE9PScnICYmIGxOYW1lICE9PSAnJyA/ICcsICcgOiAnJykrZk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJyAnIDogJycpK2xOYW1lO1xuICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3BpcGVzL3BlcnNvbi1uYW1lLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IGEgbGlzdCBvZiB1c2VyJ3Mgb3Igc3R1ZGVudHMgZnJpc3QgYW5kIGxhc3QgbmFtZSBhcyBcImZpcnN0TmFtZSBsYXN0TmFtZVwiXG4gKiAtIFdoZW4gcmV2ZXJzZSBpcyB0cnVlLCBmb3JtYXQgYXMgXCJsYXN0TmFtZSwgZmlyc3ROYW1lXCJcbiAqIC0gQWJsZSB0byBoYW5kbGUgd2hlbiBvbmx5IGZpcnN0IG9yIGxhc3QgbmFtZSBpcyBzZXRcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBwZW9wbGVMaXN0IHwgcGVvcGxlTGlzdE5hbWVzOmlzUmV2ZXJzZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlt7Zmlyc3ROYW1lOiBcIk1pY2tleVwiLCBsYXN0TmFtZTogXCJNb3VzZVwifSwge2ZpcnN0TmFtZTogXCJEb25hbGRcIiwgbGFzdE5hbWU6IFwiRHVja1wifV08L2NvZGU+IGJlY29tZXMgXCJNaWNrZXkgTW91c2UsIERvbmFsZCBEdWNrXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlJldmVyc2Ugb3VwdXQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+W3tmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogXCJEdWNrXCJ9XTwvY29kZT4gYmVjb21lcyBcIk1vdXNlLCBNaWNrZXk7IER1Y2ssIERvbmFsZFwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NaXNzaW5nIG5hbWVzIDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlt7Zmlyc3ROYW1lOiB1bmRlZmluZWQsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogdW5kZWZpbmVkfV08L2NvZGU+IGJlY29tZXMgXCJNb3VzZSwgRG9uYWxkXCJcbiAqL1xuQFBpcGUoe25hbWU6ICdwZW9wbGVMaXN0TmFtZXMnfSlcbmV4cG9ydCBjbGFzcyBQZW9wbGVMaXN0TmFtZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBlcnNvbkxpc3Q6IGFueVtdLCByZXZlcnNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgZm9yKGxldCBwZXJzb24gb2YgcGVyc29uTGlzdCl7XG4gICAgICBsZXQgZk5hbWU6IHN0cmluZyA9IHBlcnNvbi5maXJzdE5hbWUgfHwgJyc7XG4gICAgICBsZXQgbE5hbWU6IHN0cmluZyA9IHBlcnNvbi5sYXN0TmFtZSB8fCAnJztcbiAgICAgIGlmKG91dCAhPT0gJycgJiYgKGZOYW1lICE9PSAnJyB8fCBsTmFtZSAhPT0gJycpKXtcbiAgICAgICAgb3V0ICs9IChyZXZlcnNlID8gJzsgJyA6ICcsICcpO1xuICAgICAgfVxuICAgIGlmKHJldmVyc2Upe1xuICAgICAgb3V0ICs9IGxOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJywgJyA6ICcnKStmTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgb3V0ICs9IGZOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJyAnIDogJycpK2xOYW1lO1xuICAgICAgfVxuICAgIH0vLyBlbmQgZm9yXG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9wZW9wbGUtbGlzdC1uYW1lcy5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGhhZ2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BoYWdlLmludGVyZmFjZSc7XG5cbi8qKlxuICogRm9ybWF0IHRoZSB0ZXh0dWFsIHByZXNlbnRhdGlvbiBvZiBhIHBoYWdlIHN0cmFpbidzIHBhcmVudHNcbiAqIChpZiBhbnkpIHdoZW4gdmlld2luZyB0aGUgZGlhbG9nIGJveCBmb3IgYSBwaGFnZVxuICpcbiAqIFRoZSBgbnVtUGFyZW50c2AgdmFyaWFibGUgaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgb25lIG9mIHRoZVxuICogcGFyZW50cyBoYWQgYmVlbiBkZWxldGVkIGZyb20gdGhlIGRhdGFiYXNlIHdoZW4gYHBhcmVudHMubGVuZ3RoICE9IG51bVBhcmVudHNgXG4gKlxuICogTm90ZTogdGhlIHBoYWdlIGBzdHJhaW5OdW1gIGFyZSAwLWJhc2VkIGJ1dCBVSSBpcyAxLWJhc2VkIHNvXG4gKiB0aGUgc3RyYWluIG51bWJlciBpcyBhZGp1c3RlZFxuICpcbiAqICoqVXNhZ2U6KiogYHt7cGFyZW50c0xpc3QgfCBwaGFnZVBhcmVudHM6bnVtUGFyZW50c319YFxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk9uZSBwYXJlbnQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e3BhcmVudHM6IFt7aWQ6ICdpZDEnLCBzdHJhaW5OdW06ICc0J31dLCBudW1QYXJlbnRzOiAxfTwvY29kZT4gYmVjb21lcyBcIlN0cmFpbiA1XCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlR3byBwYXJlbnRzOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e3BhcmVudHM6IFt7aWQ6ICdpZDEnLCBzdHJhaW5OdW06IDR9LCB7aWQ6ICdpZDInLCBzdHJhaW5OdW06IDEwfV0sIG51bVBhcmVudHM6IDJ9PC9jb2RlPiBiZWNvbWVzIFwiU3RyYWlucyA1IGFuZCAxMVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ud28gcGFyZW50cyBidXQgbWlzc2luZyBvbmU6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT57cGFyZW50czogW3tpZDogJ2lkMycsIHN0cmFpbk51bTogOH1dLCBudW1QYXJlbnRzOiAyfTwvY29kZT4gYmVjb21lcyBcIlN0cmFpbnMgOSBhbmQgP1wiXG4gKi9cbkBQaXBlKHtuYW1lOiAncGhhZ2VQYXJlbnRzJ30pXG5leHBvcnQgY2xhc3MgUGhhZ2VQYXJlbnRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShwYXJlbnRzOiBQaGFnZVtdLCBudW1QYXJlbnRzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBvdXQgPSAnJztcbiAgICBpZihudW1QYXJlbnRzID09PSB1bmRlZmluZWQpe1xuICAgICAgbnVtUGFyZW50cyA9IHBhcmVudHMubGVuZ3RoXG4gICAgfVxuICAgIGlmKHBhcmVudHMubGVuZ3RoID09PSAwKXtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGxldCBzb3J0ZWQ6IFBoYWdlW10gPSBwYXJlbnRzLnNvcnQoKG4xLCBuMik9PntyZXR1cm4gbjEuc3RyYWluTnVtIC0gbjIuc3RyYWluTnVtfSk7XG4gICAgbGV0IG51bXMgPSBzb3J0ZWQubWFwKChwaGFnZSk9PntyZXR1cm4gKHBoYWdlLnN0cmFpbk51bSsxKS50b1N0cmluZygpfSk7XG5cbiAgICBpZihzb3J0ZWQubGVuZ3RoID09PSAxICYmIG51bVBhcmVudHMgPT09IDEpe1xuICAgICAgb3V0ID0gJ1N0cmFpbiAnICsgbnVtc1swXTtcbiAgICB9IGVsc2UgaWYoc29ydGVkLmxlbmd0aCA9PT0gMSAmJiBudW1QYXJlbnRzID09PSAyKXtcbiAgICAgIG91dCA9ICdTdHJhaW5zICcgKyBudW1zWzBdICsgJyBhbmQgPyc7XG4gICAgfSBlbHNlIGlmKHNvcnRlZC5sZW5ndGggPT09IDIgJiYgbnVtUGFyZW50cyA9PT0gMil7XG4gICAgICBvdXQgPSAnU3RyYWlucyAnICsgbnVtc1swXSArICcgYW5kICcgKyBudW1zWzFdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9waGFnZS1wYXJlbnRzLnBpcGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUmVxdWlyZWRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2VtYWlsLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybVBhc3N3b3JkRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50Jztcbi8qKlxuICogVGhlIEZvcm0gRXJyb3JzIE1vZHVsZSBjb250YWlucyB0ZW1wbGF0ZXMgZm9yIFJlYWN0aXZlRm9ybVxuICogaW5wdXQgZXJyb3JzIHRoYXQgYXJlIG5lZWRlZCBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogU2F2ZXMgdGltZSBmcm9tIGhhdmluZyB0byBjcmVhdGUgdGhlIHNhbWUgZXJyb3IgbWVzc2FnZXMgYWNyb3NzXG4gKiBudW1lcm91cyBwYWdlcyBhbmQga2VlcHMgdGhlIGVycm9yIG1lc3NhZ2VzIGNvbnNpc3RhbnRcbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZXF1aXJlZEVycm9yQ29tcG9uZW50LFxuICAgIEVtYWlsRXJyb3JDb21wb25lbnQsXG4gICAgUGFzc3dvcmRFcnJvckNvbXBvbmVudCxcbiAgICBDb25maXJtUGFzc3dvcmRFcnJvckNvbXBvbmVudFxuICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIFJlcXVpcmVkRXJyb3JDb21wb25lbnQsXG4gICAgICBFbWFpbEVycm9yQ29tcG9uZW50LFxuICAgICAgUGFzc3dvcmRFcnJvckNvbXBvbmVudCxcbiAgICAgIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUVycm9yc01vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZm9ybS1lcnJvcnMubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JlcXVpcmVkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9yZXF1aXJlZC1lcnJvci50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXF1aXJlZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZmllbGQ6IEFic3RyYWN0Q29udHJvbDtcbiAgQElucHV0KCkgdGV4dExhYmVsOiBzdHJpbmc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODY2XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBIYW5kbGUgZW1haWwgcmVsYXRlZCBlcnJvciBtZXNzYWdlcyBzdWNoIGFzXG4gKiAtIGlzIHJlcXVpcmVkOiBgRW1haWwgaXMgcmVxdWlyZWRgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZW1haWwtZXJyb3InLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2VtYWlsLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEVtYWlsRXJyb3JDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGlucHV0IGVtYWlsIGZyb20gZm9ybTsgaW5jbHVkZXMgZXJyb3JzIGlmIGFwcGxpY2FibGVcbiAgICovXG4gIEBJbnB1dCgpIGVtYWlsOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODY4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwYXNzd29yZC1lcnJvcicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRFcnJvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODcwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb25maXJtLXBhc3N3b3JkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uZmlybVBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODcyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlbGVjdERyb3BTZXJ2aWNlLCBzZWxlY3REcm9wU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NlbGVjdC1kcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0RHJvcENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWRyb3AuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3QtZHJvcC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0LWRyb3AuY29tcG9uZW50JztcblxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbe3Byb3ZpZGU6IFNlbGVjdERyb3BTZXJ2aWNlLCB1c2VGYWN0b3J5OiBzZWxlY3REcm9wU2VydmljZUZhY3Rvcnl9XTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2VsZWN0RHJvcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWxlY3REcm9wQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJze1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2VsZWN0RHJvcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3AubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFkbWluUm91dGVzIH0gZnJvbSAnLi9hZG1pbi5yb3V0ZXMnO1xuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuaW1wb3J0IHsgQWRtaW5HdWFyZCB9IGZyb20gJy4vYWRtaW4uZ3VhcmQuc2VydmljZSc7XG5cbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zdHVkZW50L3N0dWRlbnQuc2VydmljZSc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBhZG1pbiBmdW5jdGlvbnMgaGF2aW5nIHRvIGRlYWwgd2l0aCBzdHVkZW50cyBhbmQgY291cnNlcyB0aGF0IHNob3VsZCBub3QgYmUgYWNjZXNzZWQgYnkgYSByZWd1bGFyIHVzZXJcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQWRtaW5Sb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIEFkbWluSG9tZUNvbXBvbmVudCxcbiAgICBOb3RBdXRoQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFkbWluR3VhcmQsXG4gICAgU3R1ZGVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbk1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFkbWluR3VhcmQgfSBmcm9tICcuL2FkbWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VkSW5HdWFyZCB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEFkbWluUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnYWRtaW4nLFxuICAgIGRhdGE6IHtcbiAgICAgIGJyZWFkY3J1bWJzOiAnQWRtaW4nXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTpbTG9nZ2VkSW5HdWFyZF0sXG4gICAgY2FuQWN0aXZhdGVDaGlsZDogW0FkbWluR3VhcmRdLFxuICAgIGNvbXBvbmVudDogQWRtaW5Db21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2NvdXJzZXMnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2NvdXJzZS9jb3Vyc2UubW9kdWxlJylbJ0NvdXJzZU1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ0NvdXJzZXMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdzdHVkZW50cycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7ICAocmVxdWlyZSBhcyBhbnkpLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmU6IGFueSkgeyAgICByZXNvbHZlKHJlcXVpcmUoJy4vc3R1ZGVudC9zdHVkZW50Lm1vZHVsZScpWydTdHVkZW50TW9kdWxlJ10pOyAgfSwgZnVuY3Rpb24oZTogYW55KSB7ICAgIHJlamVjdCh7IGxvYWRDaHVua0Vycm9yOiB0cnVlLCBkZXRhaWxzOiBlIH0pOyAgfSk7fSkgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnU3R1ZGVudHMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEFkbWluSG9tZUNvbXBvbmVudFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhZG1pbi9ub3QtYXV0aCcsXG4gICAgY29tcG9uZW50OiBOb3RBdXRoQ29tcG9uZW50XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2FkbWluLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODc2XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGgudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODc4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJ1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRlcyB9IGZyb20gJy4vYXV0aGVudGljYXRpb24ucm91dGVzJztcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSB3aGljaCBkZWFscyB3aXRoIGFueXRoaW5nIHJlbGF0ZWQgdG8gYXV0aGVudGljYXRpbmcgdXNlcnMsXG4gKiBpLmUuIGxvZ2dpbmcgaW4vb3V0IHVzZXJzIGFuZCByZXNldHRpbmcgZm9yZ290dGVuIHBhc3N3b3Jkc1xuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQXV0aGVudGljYXRpb25Sb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2lnbmluQ29tcG9uZW50LFxuICAgICAgICBTaWdudXBDb21wb25lbnQsXG4gICAgICBTaWdub3V0Q29tcG9uZW50LFxuICAgICAgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQsXG4gICAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbk1vZHVsZSB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25Sb3V0ZXM6IFJvdXRlcyA9IFt7XG4gICAgcGF0aDogJ2F1dGhlbnRpY2F0aW9uJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICB7IHBhdGg6ICdzaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuICAgICAgICB7IHBhdGg6ICdzaWdub3V0JywgY29tcG9uZW50OiBTaWdub3V0Q29tcG9uZW50IH0sXG4gICAgICB7cGF0aDogJ2ZvcmdldC1wYXNzd29yZCcsIGNvbXBvbmVudDogRm9yZ2V0UGFzc3dvcmRDb21wb25lbnR9LFxuICAgICAge3BhdGg6ICdyZXNldC1wYXNzd29yZC86dG9rZW4nLCBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRDb21wb25lbnR9XG4gICAgXVxufV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODg0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBIZWxwUm91dGVzIH0gZnJvbSAnLi9oZWxwLnJvdXRlcyc7XG5pbXBvcnQgeyBIZWxwQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKEhlbHBSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEhlbHBDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWxwTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9oZWxwL2hlbHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhlbHBDb21wb25lbnQgfSBmcm9tICcuL2hlbHAuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEhlbHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdoZWxwJyxcbiAgICBjb21wb25lbnQ6IEhlbHBDb21wb25lbnQsXG4gICAgZGF0YToge2JyZWFkY3J1bWJzOiAnSGVscCd9XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9oZWxwL2hlbHAucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9oZWxwL2hlbHAudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9oZWxwL2hlbHAudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODg3XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaGVscC9oZWxwLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9oZWxwL2hlbHAuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA4ODhcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IFByb2ZpbGVSb3V0ZXMgfSBmcm9tICcuL3Byb2ZpbGUucm91dGVzJztcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFByb2ZpbGVSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFVzZXJQcm9maWxlQ29tcG9uZW50LFxuICAgIFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFByb2ZpbGVTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZU1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb2dnZWRJbkd1YXJkIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAncHJvZmlsZScsXG4gICAgY2FuQWN0aXZhdGU6IFtMb2dnZWRJbkd1YXJkXSxcbiAgICBjYW5BY3RpdmF0ZUNoaWxkOiBbTG9nZ2VkSW5HdWFyZF0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgcGF0aDogJ3VwZGF0ZS1wYXNzd29yZCcsXG4gICAgICBjb21wb25lbnQ6IFVwZGF0ZVBhc3N3b3JkQ29tcG9uZW50LFxuICAgICAgIGRhdGE6IHtcbiAgICAgICAgIGJyZWFkY3J1bWJzOiAnVXBkYXRlIHBhc3N3b3JkJ1xuICAgICAgIH1cbiAgICAgIH0sXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFVzZXJQcm9maWxlQ29tcG9uZW50XG4gIH1cbiAgICBdLFxuICAgIGRhdGE6IHtcbiAgICAgIGJyZWFkY3J1bWJzOiAnUHJvZmlsZSdcbiAgICB9XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODkxXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvcHJvZmlsZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvcHJvZmlsZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgU2NlbmFyaW9Sb3V0ZXMgfSBmcm9tICcuL3NjZW5hcmlvLnJvdXRlcyc7XG5pbXBvcnQgeyBTY2VuYXJpb0NvbXBvbmVudCB9IGZyb20gJy4vc2NlbmFyaW8uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSBmb3Igc2NlbmFyaW8tcmVsYXRlZCBjb21wb25lbnRzIGFuZCBtb2R1bGVzXG4gKlxuICogTWFpbmx5IHVzZWQgdG8gYmUgYWJsZSB0byBhc3luYyBsb2FkIHRoZSBzcGVjaWZpYyBzY2VuYXJpb3MgdmlhIHRoZSB7QGxpbmsgTG9jYXRpb25Nb2R1bGV9XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFNjZW5hcmlvUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTY2VuYXJpb0NvbXBvbmVudCxcbiAgICBMaXN0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9Nb2R1bGUge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vc2NlbmFyaW8ubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU2NlbmFyaW9Db21wb25lbnQgfSBmcm9tICcuL3NjZW5hcmlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2VuYXJpb1Jlc29sdmVyIH0gZnJvbSAnLi9zY2VuYXJpby5yZXNvbHZlcic7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2xpc3QuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFNjZW5hcmlvUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnc2NlbmFyaW9zJyxcbiAgICBkYXRhOiB7XG4gICAgICBicmVhZGNydW1iczogJ1NjZW5hcmlvcydcbiAgICB9LFxuICAgIGNvbXBvbmVudDogU2NlbmFyaW9Db21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJzpzY2VuSWQnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2xvY2F0aW9uL2xvY2F0aW9uLm1vZHVsZScpWydMb2NhdGlvbk1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBzY2VuYXJpbzogU2NlbmFyaW9SZXNvbHZlclxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnM6ICd7eyBzY2VuYXJpby5sYWJlbCB9fSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogTGlzdENvbXBvbmVudFxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbGlzdC9saXN0LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbGlzdC9saXN0LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGUgbWFpbiBhcHBsaWNhdGlvbiBjb21wb25lbnQ7XG4gKiBMaW5rcyB0aGUgbmF2IGJhciB0byB0aGUgY29udGVudCBuZWVkZWQgYmFzZWQgb24gdGhlIHVybFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NyaWNrZXQtYXBwJyxcbiAgICB0ZW1wbGF0ZTogJzxjcmlja2V0LW5hdj48L2NyaWNrZXQtbmF2Pjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4nXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gYmFyIGF0IHRoZSB0b3Agb2YgdGhlIHNpdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjcmlja2V0LW5hdicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbmF2LnRlbXBsYXRlLmh0bWwnKSxcbiAgICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL25hdi5zdHlsZS5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBVc2VyIG9iamVjdCB1c2VkIHRvIGRldGVybWluZSBpZiBwcm9maWxlIGxpbmsgc2hvdWxkIGJlXG4gICAqIGluY2x1ZGVkIGluIHRoZSBuYXYgYmFyXG4gICAqL1xuICBwcml2YXRlIHVzZXI6IFVzZXI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gc3RyZWFtIGZvciB0aGUgYXV0aGV0bmljYXRpb24gc2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSB0aGUgY29tcG9uZW50IGJ5IGdldHRpbmcgdGhlIGN1cnJlbnQgdXNlclxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIkXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgdGhpcy51c2VyID0gcmVzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdG9yeSB0aGUgY29tcG9uZW50IGJ5IHVuc3Vic2NyaWJpbmcsIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9uYXYvbmF2LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbmF2L25hdi50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL25hdi9uYXYudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODk4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbmF2L25hdi5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbmF2L25hdi5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9wdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVuZGVscGVkZUZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4vbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVuZGVscGVkZUxhYnJvb21Db21wb25lbnQgfSBmcm9tICcuL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS5jb21wb25lbnQnXG5pbXBvcnQgeyBNZW5kZWxwZWRlUm91dGVzIH0gZnJvbSAnLi9tZW5kZWxwZWRlLnJvdXRlcyc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlQ29tcG9uZW50IH0gZnJvbSAnLi9tZW5kZWxwZWRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBNZW5kZWxwZWRlLXJlbGF0ZWQgY29tcG9uZW50cyBhbmQgbW9kdWxlc1xuICpcbiAqIFxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChNZW5kZWxwZWRlUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBPcHRpb25zQ29tcG9uZW50LFxuICAgIE1lbmRlbHBlZGVGcmlkZ2VDb21wb25lbnQsXG4gICAgTWVuZGVscGVkZUxhYnJvb21Db21wb25lbnQsXG4gICAgTWVuZGVscGVkZUNvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNZW5kZWxwZWRlTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvb3B0aW9ucy9vcHRpb25zLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9vcHRpb25zL29wdGlvbnMudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW5kZWxwZWRlLWZyaWRnZScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL21wZWRlLWZyaWRnZS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbXBlZGUtZnJpZGdlLnN0eWxlLmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBNZW5kZWxwZWRlRnJpZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gIHVzZXI6IFVzZXI7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG5cbiAgfVxuICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MDNcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2Uuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50J1xuaW1wb3J0IHsgTWVuZGVscGVkZUNvbXBvbmVudCB9IGZyb20gJy4vbWVuZGVscGVkZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVuZGVscGVkZUZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4vbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS5jb21wb25lbnQnXG5pbXBvcnQgeyBNZW5kZWxwZWRlTGFicm9vbUNvbXBvbmVudCB9IGZyb20gJy4vbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLmNvbXBvbmVudCdcblxuZXhwb3J0IGNvbnN0IE1lbmRlbHBlZGVSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGggOiAnbWVuZGVscGVkZScsXG4gICAgY29tcG9uZW50IDogTWVuZGVscGVkZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICBicmVhZGNydW1iczogJ21lbmRlbHBlZGUnXG4gICAgfSxcblxuICAgIGNoaWxkcmVuOltcbiAgICAgIHtcbiAgICAgICAgcGF0aCA6ICdvcHRpb25zJywgXG4gICAgICAgIGNvbXBvbmVudCA6IE9wdGlvbnNDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGggOiAnbXBlZGUtbGFicm9vbScsIFxuICAgICAgICBjb21wb25lbnQgOiBNZW5kZWxwZWRlTGFicm9vbUNvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnbGFicm9vbSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MDdcbi8vIG1vZHVsZSBjaHVua3MgPSA0Il0sInNvdXJjZVJvb3QiOiIifQ==