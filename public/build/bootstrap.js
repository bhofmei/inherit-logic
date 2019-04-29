webpackJsonp([4],{

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
const rxjs_1 = __webpack_require__(26);
const core_1 = __webpack_require__(1);
const http_1 = __webpack_require__(46);
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

/***/ 122:
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
const http_1 = __webpack_require__(46);
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
    getCourseById(courseId) {
        return this._http
            .get(`${this._baseURL}/course-by-id/${courseId}`);
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
    getMendelScenarioStatus(adminId, courseNum, scenId) {
        return this._http
            .get(`${this._baseURL}/${adminId}/mendel-courses/${courseNum}/${scenId}`);
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

/***/ 17:
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
const http_1 = __webpack_require__(46);
const rxjs_1 = __webpack_require__(26);
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

/***/ 182:
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
const http_1 = __webpack_require__(46);
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
const authentication_service_1 = __webpack_require__(17);
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(16);
const ng_bootstrap_1 = __webpack_require__(70);
const rxjs_1 = __webpack_require__(26);
const mendelpede_scenarios_service_1 = __webpack_require__(65);
const mpede_labroom_component_1 = __webpack_require__(417);
const read_error_1 = __webpack_require__(45);
let MendelpedeFridgeComponent = class MendelpedeFridgeComponent {
    constructor(_router, _route, _authenticationService, _scenarioService, _modalService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._scenarioService = _scenarioService;
        this._modalService = _modalService;
        this.currPedes_1d = [];
        this.shelf = 0;
        this.errorMessage = '';
        this.isQuiz = false;
        this.maxShelf = 32;
        this.spots = 8;
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        this.user = this._authenticationService.getUser();
        this.userId = this.user.id;
        this.paramObserver = this._route.params.subscribe((params) => {
            this.scenShortCode = params['scenShortCode'];
            this._scenarioService.getMendelFridge(this.userId, this.scenShortCode)
                .takeUntil(this.isDestroyed$)
                .subscribe((fridge) => {
                this._initFridge(fridge);
            }, (err) => {
                if (err.status === 307) {
                    this._createMendelFridge(this.userId, this.scenShortCode);
                }
                else {
                    this.errorMessage = read_error_1.readErrorMessage(err);
                }
            });
        });
    }
    _createMendelFridge(userId, scenShortCode) {
        this._scenarioService.createMendelFridge(userId, scenShortCode)
            .takeUntil(this.isDestroyed$)
            .subscribe((fridge) => {
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
        this._scenarioService.setFridge(newFridge);
        this._scenarioService.setScenario(newFridge.genoFacts);
        this.isQuiz = newFridge.firstTraitForQuiz !== undefined;
    }
    _fillPedes(fridgePedes) {
        var out = [];
        for (let i = 0; i < this.maxShelf * this.spots; i++) {
            out.push({ bugID: i, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null });
        }
        this.nextSpot = fridgePedes[0].bugID + 1;
        let noOriginalPedes = this.scenShortCode.toUpperCase().includes('QUIZ') ? 8 : 6;
        for (let i = 0; i < fridgePedes.length; i++) {
            let n = fridgePedes[i].bugID;
            out[n] = fridgePedes[i];
            if (i < noOriginalPedes) {
                out[n].canDelete = false;
            }
            else {
                out[n].canDelete = true;
            }
            this.nextSpot = (n >= this.nextSpot ? n + 1 : this.nextSpot);
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
    sendPede(pede) {
        this.labroom.dropPede(pede);
    }
    deletePede(pede) {
        let pedeToDelete = {
            bugID: pede.bugID,
            userId: pede.userId,
            id: pede.id,
            scenCode: pede.scenCode,
            isFemale: pede.isFemale,
            genotype: pede.genotype,
            phenotype: pede.phenotype
        };
        this._scenarioService.deletePede(this.userId, this.scenShortCode, pedeToDelete)
            .takeUntil(this.isDestroyed$)
            .subscribe((fridge) => {
            this._initFridge(fridge);
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    storePede(pedeToStore) {
        let pedeToStoreL = {
            bugID: this.nextSpot,
            userId: pedeToStore.userId,
            id: pedeToStore.id,
            scenCode: pedeToStore.scenCode,
            isFemale: pedeToStore.isFemale,
            genotype: pedeToStore.genotype,
            phenotype: pedeToStore.phenotype
        };
        this._scenarioService.insertPede(pedeToStoreL, this.fridge, this.scenShortCode)
            .takeUntil(this.isDestroyed$)
            .subscribe((fridge) => {
            this._initFridge(fridge);
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
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
__decorate([
    core_1.Input(),
    __metadata("design:type", mpede_labroom_component_1.MendelpedeLabroomComponent)
], MendelpedeFridgeComponent.prototype, "labroom", void 0);
__decorate([
    core_1.HostListener('sendPede'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MendelpedeFridgeComponent.prototype, "sendPede", null);
__decorate([
    core_1.HostListener('deletePede'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MendelpedeFridgeComponent.prototype, "deletePede", null);
MendelpedeFridgeComponent = __decorate([
    core_1.Component({
        selector: 'mendelpede-fridge',
        templateUrl: __webpack_require__(917),
        styleUrls: [__webpack_require__(918), __webpack_require__(418)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        mendelpede_scenarios_service_1.MendelpedeScenarioService,
        ng_bootstrap_1.NgbModal])
], MendelpedeFridgeComponent);
exports.MendelpedeFridgeComponent = MendelpedeFridgeComponent;


/***/ }),

/***/ 185:
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
const cricket_service_1 = __webpack_require__(121);
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

/***/ 186:
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
const mendelpede_scenarios_service_1 = __webpack_require__(65);
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
let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
};
PageNotFoundComponent = __decorate([
    core_1.Component({
        selector: 'page-not-found',
        templateUrl: __webpack_require__(865),
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;


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
const authentication_service_1 = __webpack_require__(17);
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
        templateUrl: __webpack_require__(866),
        styleUrls: [__webpack_require__(867)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], HomeComponent);
exports.HomeComponent = HomeComponent;


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
const core_2 = __webpack_require__(1);
const select_drop_service_1 = __webpack_require__(182);
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
const router_1 = __webpack_require__(16);
const authentication_service_1 = __webpack_require__(17);
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
const authentication_service_1 = __webpack_require__(17);
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
        templateUrl: __webpack_require__(888)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AdminComponent);
exports.AdminComponent = AdminComponent;


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
let AdminHomeComponent = class AdminHomeComponent {
};
AdminHomeComponent = __decorate([
    core_1.Component({
        selector: 'admin-home',
        templateUrl: __webpack_require__(889)
    })
], AdminHomeComponent);
exports.AdminHomeComponent = AdminHomeComponent;


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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
let NotAuthComponent = class NotAuthComponent {
};
NotAuthComponent = __decorate([
    core_1.Component({
        selector: 'not-auth',
        templateUrl: __webpack_require__(890)
    })
], NotAuthComponent);
exports.NotAuthComponent = NotAuthComponent;


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
const router_1 = __webpack_require__(16);
const forms_1 = __webpack_require__(13);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(45);
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
        templateUrl: __webpack_require__(893)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.Router])
], SigninComponent);
exports.SigninComponent = SigninComponent;


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
const router_1 = __webpack_require__(16);
const rxjs_1 = __webpack_require__(26);
const authentication_service_1 = __webpack_require__(17);
const course_service_1 = __webpack_require__(122);
const read_error_1 = __webpack_require__(45);
const confirm_password_validator_1 = __webpack_require__(405);
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
        templateUrl: __webpack_require__(894)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        course_service_1.CourseService,
        router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ 405:
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
const router_1 = __webpack_require__(16);
const authentication_service_1 = __webpack_require__(17);
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
const forms_1 = __webpack_require__(13);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(45);
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
        templateUrl: __webpack_require__(895)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], ForgetPasswordComponent);
exports.ForgetPasswordComponent = ForgetPasswordComponent;


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
const router_1 = __webpack_require__(16);
const forms_1 = __webpack_require__(13);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(45);
const confirm_password_validator_1 = __webpack_require__(405);
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
        templateUrl: __webpack_require__(896)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.ActivatedRoute])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;


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
let HelpComponent = class HelpComponent {
    constructor() { }
};
HelpComponent = __decorate([
    core_1.Component({
        selector: 'help',
        templateUrl: __webpack_require__(899)
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);
exports.HelpComponent = HelpComponent;


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
let HelpCricketComponent = class HelpCricketComponent {
    constructor() { }
};
HelpCricketComponent = __decorate([
    core_1.Component({
        selector: 'help-cricket',
        templateUrl: __webpack_require__(900)
    }),
    __metadata("design:paramtypes", [])
], HelpCricketComponent);
exports.HelpCricketComponent = HelpCricketComponent;


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
let HelpMendelpedeComponent = class HelpMendelpedeComponent {
    constructor() { }
};
HelpMendelpedeComponent = __decorate([
    core_1.Component({
        selector: 'help-mendelpede',
        templateUrl: __webpack_require__(901)
    }),
    __metadata("design:paramtypes", [])
], HelpMendelpedeComponent);
exports.HelpMendelpedeComponent = HelpMendelpedeComponent;


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
const rxjs_1 = __webpack_require__(26);
const profile_service_1 = __webpack_require__(183);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(45);
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
        templateUrl: __webpack_require__(904)
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        authentication_service_1.AuthenticationService])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;


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
const router_1 = __webpack_require__(16);
const rxjs_1 = __webpack_require__(26);
const profile_service_1 = __webpack_require__(183);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(45);
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
        templateUrl: __webpack_require__(905)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        profile_service_1.ProfileService,
        authentication_service_1.AuthenticationService])
], UpdatePasswordComponent);
exports.UpdatePasswordComponent = UpdatePasswordComponent;


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
const authentication_service_1 = __webpack_require__(17);
const cricket_service_1 = __webpack_require__(121);
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
        templateUrl: __webpack_require__(908)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        cricket_service_1.CricketService])
], ScenarioListComponent);
exports.ScenarioListComponent = ScenarioListComponent;


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
const rxjs_1 = __webpack_require__(26);
const authentication_service_1 = __webpack_require__(17);
const mendelpede_scenarios_service_1 = __webpack_require__(65);
const course_service_1 = __webpack_require__(122);
const mendelpede_scenarios_interface_1 = __webpack_require__(423);
let OptionsComponent = class OptionsComponent {
    constructor(_authenticationService, _scenarioService, _courseService) {
        this._authenticationService = _authenticationService;
        this._scenarioService = _scenarioService;
        this._courseService = _courseService;
        this.scenarios = Array();
        this.quizzes = Array();
        this.discoveries = Array();
        this.pathways = Array();
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        this.user = this._authenticationService.getUser();
        this._courseService.getCourseById(this.user.courseId)
            .takeUntil(this.isDestroyed$)
            .subscribe((course) => {
            this.isUndergrad = (course.level === 'undergraduate');
            this._scenarioService.listScenarios(course.level)
                .takeUntil(this.isDestroyed$)
                .subscribe((options) => {
                this._initOptions(options);
            }, (err) => {
                this._initOptions([]);
                this.errorMessage = err;
            });
        }, (err) => {
            console.log(err);
            this.errorMessage = err;
        });
    }
    _initOptions(optList) {
        for (let opt of optList) {
            switch (opt.scenType) {
                case 'quiz':
                    this.quizzes.push(opt);
                    break;
                case 'discovery':
                    this.discoveries.push(opt);
                    break;
                case 'pathway':
                    this.pathways.push(opt);
                    break;
                default:
                    this.scenarios.push(opt);
            }
        }
        this.scenarios.sort(mendelpede_scenarios_interface_1.sortScenarios);
        this.quizzes.sort(mendelpede_scenarios_interface_1.sortScenarios);
        this.discoveries.sort(mendelpede_scenarios_interface_1.sortScenarios);
        this.pathways.sort(mendelpede_scenarios_interface_1.sortScenarios);
    }
    ngOnDestroy() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
OptionsComponent = __decorate([
    core_1.Component({
        selector: 'options',
        templateUrl: __webpack_require__(914),
        styles: ['.list-group-item {padding: 0.5em 1.25em!important; }']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        mendelpede_scenarios_service_1.MendelpedeScenarioService,
        course_service_1.CourseService])
], OptionsComponent);
exports.OptionsComponent = OptionsComponent;


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
const rxjs_1 = __webpack_require__(26);
const router_1 = __webpack_require__(16);
const authentication_service_1 = __webpack_require__(17);
const mendelpede_scenarios_service_1 = __webpack_require__(65);
const mpede_fridge_component_1 = __webpack_require__(184);
let MendelpedeLabroomComponent = class MendelpedeLabroomComponent {
    constructor(_authenticationService, _router, _scenarioService, _route) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this._scenarioService = _scenarioService;
        this._route = _route;
        this.undoSpotList = [];
        this.errorMessage = '';
        this.isQuiz = null;
        this.isDestroyed$ = new rxjs_1.Subject();
        this.numOfChildren = 20;
        this.storageSlots = 8;
    }
    ngOnInit() {
        this._initPedes();
        this.user = this._authenticationService.getUser();
        let userId = this.user.id;
        this.paramObserver = this._route.params.subscribe((params) => {
            this._scenarioService.getGenoFacts
                .takeUntil(this.isDestroyed$)
                .subscribe((details) => { this.currFridgeGenoFacts = details; });
        });
    }
    _initPedes() {
        this.currNumChildren = 0;
        this.malePede = { bugID: 0, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null };
        this._initChildPedes();
        this._emptyStoragePedes();
        this.undoSpotList = [];
        this.femalePede = { bugID: 1, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null };
    }
    _emptyStoragePedes() {
        var counter = 0;
        this.storablePedes = [];
        for (let j = 0; j < this.storageSlots / 4; j++) {
            this.storablePedes[j] = [];
            for (let k = 0; k < 4; k++) {
                this.storablePedes[j][k] = [];
                this.storablePedes[j][k].push({ bugID: counter, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null });
                counter++;
            }
        }
    }
    _initChildPedes() {
        this.childPedes = [];
        for (let i = 0; i < this.numOfChildren; i++) {
            this.childPedes.push({ bugID: 0, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null });
        }
    }
    storePede(pedeToStore) {
        this.mendelFridge.storePede(pedeToStore);
    }
    clearAll() {
        this._initPedes();
    }
    undoPede() {
        var undoSpot = this.undoSpotList[this.undoSpotList.length - 1];
        var undoPede = this.storablePedes[Math.ceil((undoSpot + 1) / 4) - 1][undoSpot > 3 ? (undoSpot - 4) : (undoSpot)].pop();
        undoPede.bugID = this.childPedes[0].bugID - 1;
        this.childPedes.unshift(undoPede);
        this.undoSpotList.pop();
    }
    dropPedeToStorage(spot) {
        let pede = this.childPedes[0];
        this.undoSpotList.push(spot);
        this.storablePedes[Math.ceil((spot + 1) / 4) - 1][spot > 3 ? (spot - 4) : (spot)].push({
            bugID: this.storablePedes[Math.ceil((spot + 1) / 4) - 1][spot > 3 ? (spot - 4) : (spot)][0].bugID,
            genotype: pede.genotype,
            userId: pede.userId,
            phenotype: pede.phenotype,
            isFemale: pede.isFemale,
            scenCode: pede.scenCode,
            id: pede.id
        });
        if (this.childPedes.length === 1) {
            this.createChildPedes();
            this.childPedes.push({ bugID: 0, genotype: null, phenotype: null, userId: null, isFemale: null, scenCode: null, id: null });
            this.childPedes.shift();
        }
        else {
            this.childPedes.shift();
        }
    }
    keyEvent(event) {
        var keyCode = event.keyCode;
        if (this.childPedes[0].phenotype !== null) {
            if (keyCode > 48 && keyCode < 57) {
                this.dropPedeToStorage(keyCode - 49);
            }
            else if (keyCode > 96 && keyCode < 105) {
                this.dropPedeToStorage(keyCode - 97);
            }
            else if ((keyCode === 48 || keyCode === 96) && this.undoSpotList.length > 0) {
                this.undoPede();
            }
        }
    }
    dropPede(pede) {
        this._checkQuiz();
        if (pede.isFemale === 'M' && this.malePede.phenotype === null) {
            this.malePede = {
                bugID: pede.bugID,
                genotype: pede.genotype,
                phenotype: pede.phenotype,
                userId: pede.userId,
                isFemale: pede.isFemale,
                scenCode: pede.scenCode,
                id: pede.id
            };
            if (this.femalePede.phenotype !== null) {
                this.createChildPedes();
            }
        }
        else if (pede.isFemale === 'F' && this.femalePede.phenotype === null) {
            this.femalePede = {
                bugID: pede.bugID,
                genotype: pede.genotype,
                phenotype: pede.phenotype,
                userId: pede.userId,
                isFemale: pede.isFemale,
                scenCode: pede.scenCode,
                id: pede.id
            };
            if (this.malePede.phenotype !== null) {
                this.createChildPedes();
            }
        }
    }
    _checkQuiz() {
        if (this.isQuiz == null) {
            if (this.mendelFridge) {
                this.isQuiz = this.mendelFridge.isQuiz;
            }
        }
    }
    createChildPedes() {
        if (this.malePede.phenotype !== null && this.femalePede.phenotype !== null) {
            let userId = this.user.id;
            this.paramObserver = this._route.params.subscribe((params) => {
                let scenShortCode = params['scenShortCode'];
                this._scenarioService.makeChildren(this.malePede, this.femalePede, this.currFridgeGenoFacts)
                    .takeUntil(this.isDestroyed$)
                    .subscribe((childPedes) => {
                    if (this.childPedes[this.childPedes.length - 1].phenotype === null) {
                        this.childPedes = [];
                    }
                    for (let i = 0; i < childPedes.length; i++) {
                        childPedes[i].bugID = this.currNumChildren + i + 1;
                        this.childPedes.push(childPedes[i]);
                    }
                    this.currNumChildren += this.childPedes.length;
                }, (err) => {
                    this.errorMessage = err;
                });
            });
        }
    }
    ngOnDestroy() {
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", mpede_fridge_component_1.MendelpedeFridgeComponent)
], MendelpedeLabroomComponent.prototype, "mendelFridge", void 0);
__decorate([
    core_1.HostListener('storePede'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MendelpedeLabroomComponent.prototype, "storePede", null);
__decorate([
    core_1.HostListener('clearAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MendelpedeLabroomComponent.prototype, "clearAll", null);
__decorate([
    core_1.HostListener('clearAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MendelpedeLabroomComponent.prototype, "undoPede", null);
__decorate([
    core_1.HostListener('dropPedeToStorage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MendelpedeLabroomComponent.prototype, "dropPedeToStorage", null);
__decorate([
    core_1.HostListener('window:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], MendelpedeLabroomComponent.prototype, "keyEvent", null);
MendelpedeLabroomComponent = __decorate([
    core_1.Component({
        selector: 'mpede-labroom',
        templateUrl: __webpack_require__(915),
        styleUrls: [__webpack_require__(916), __webpack_require__(418)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.Router,
        mendelpede_scenarios_service_1.MendelpedeScenarioService,
        router_1.ActivatedRoute])
], MendelpedeLabroomComponent);
exports.MendelpedeLabroomComponent = MendelpedeLabroomComponent;


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-pedes.style.css";

/***/ }),

/***/ 419:
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
const authentication_service_1 = __webpack_require__(17);
const router_1 = __webpack_require__(16);
const rxjs_1 = __webpack_require__(26);
const ng_bootstrap_1 = __webpack_require__(70);
let MendelpedeScenariosComponent = class MendelpedeScenariosComponent {
    constructor(_router, _route, _authenticationService, _modalService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._modalService = _modalService;
        this.hasQuiz = false;
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        this.user = this._authenticationService.getUser();
        this.paramObserver = this._route.params.subscribe((params) => {
            let scenShortCode = params['scenShortCode'];
            if (scenShortCode.toUpperCase().includes('QUIZ')) {
                this.hasQuiz = true;
            }
        });
    }
    ngOnDestroy() {
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
MendelpedeScenariosComponent = __decorate([
    core_1.Component({
        selector: 'mendelpede-scenarios',
        templateUrl: __webpack_require__(919),
        styleUrls: [__webpack_require__(920)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        ng_bootstrap_1.NgbModal])
], MendelpedeScenariosComponent);
exports.MendelpedeScenariosComponent = MendelpedeScenariosComponent;


/***/ }),

/***/ 420:
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
        templateUrl: __webpack_require__(925)
    })
], MendelpedeComponent);
exports.MendelpedeComponent = MendelpedeComponent;


/***/ }),

/***/ 421:
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
const http_1 = __webpack_require__(46);
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
    getMendelFridge(adminId, studentId, scenId) {
        return this._http
            .get(`${this._baseURL}/${adminId}/mendel-students/${studentId}/${scenId}`);
    }
    deleteStudentMendelFridge(adminId, studentId, scenShortCode) {
        return this._http
            .delete(`${this._baseURL}/${adminId}/delete-mendel-fridge/${studentId}/${scenShortCode}`);
    }
    deleteQuizScore(adminId, studentId, scenShortCode) {
        return this._http
            .delete(`${this._baseURL}/${adminId}/delete-quiz-score/${studentId}/${scenShortCode}`);
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

/***/ 422:
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
const ng_bootstrap_1 = __webpack_require__(70);
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
        templateUrl: __webpack_require__(868)
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], ConfirmDeleteDialogComponent);
exports.ConfirmDeleteDialogComponent = ConfirmDeleteDialogComponent;


/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sortScenarios = function (a, b) {
    return a.ordOfScen - b.ordOfScen;
};


/***/ }),

/***/ 45:
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
const ng_bootstrap_1 = __webpack_require__(70);
const ngx_breadcrumbs_1 = __webpack_require__(181);
const confirm_delete_dialog_component_1 = __webpack_require__(422);
const person_name_pipe_1 = __webpack_require__(869);
const title_case_pipe_1 = __webpack_require__(870);
const pede_image_pipe_1 = __webpack_require__(871);
const pede_quizTrait_pipe_1 = __webpack_require__(872);
const pede_genotype_pipe_1 = __webpack_require__(873);
const people_list_names_pipe_1 = __webpack_require__(874);
const phage_parents_pipe_1 = __webpack_require__(875);
const form_errors_module_1 = __webpack_require__(876);
const select_drop_module_1 = __webpack_require__(885);
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
            title_case_pipe_1.TitleCasePipe,
            pede_genotype_pipe_1.PedeGenotypePipe,
            pede_image_pipe_1.PedeImagePipe,
            pede_quizTrait_pipe_1.PedeQuizTraitPipe,
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
            title_case_pipe_1.TitleCasePipe,
            pede_genotype_pipe_1.PedeGenotypePipe,
            pede_image_pipe_1.PedeImagePipe,
            people_list_names_pipe_1.PeopleListNamesPipe,
            phage_parents_pipe_1.PhageParentsPipe,
            pede_quizTrait_pipe_1.PedeQuizTraitPipe,
            confirm_delete_dialog_component_1.ConfirmDeleteDialogComponent
        ],
    })
], SharedModule);
exports.SharedModule = SharedModule;


/***/ }),

/***/ 65:
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
const rxjs_1 = __webpack_require__(26);
const core_1 = __webpack_require__(1);
const http_1 = __webpack_require__(46);
let MendelpedeScenarioService = class MendelpedeScenarioService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = 'api/mendelpede';
        this._scenarioGenoFacts = new rxjs_1.BehaviorSubject({});
        this.getGenoFacts = this._scenarioGenoFacts.asObservable();
        this._fridge = new rxjs_1.BehaviorSubject({});
        this.getFridge = this._fridge.asObservable();
        this._scenarioCode = new rxjs_1.BehaviorSubject('');
        this.getScenarioCode = this._scenarioCode.asObservable();
    }
    listScenarios(courseLevel) {
        var body = { level: courseLevel };
        return this._http
            .post(this._baseURL, body);
    }
    setScenario(scenarioGenoFacts) {
        if (scenarioGenoFacts !== null)
            this._scenarioGenoFacts
                .next(scenarioGenoFacts);
    }
    setFridge(fridge) {
        this._fridge.next(fridge);
    }
    getScenario(scenShortCode) {
        this._scenarioCode.next(scenShortCode);
        return this._http
            .get(`${this._baseURL}/${scenShortCode}`);
    }
    createMendelFridge(userId, scenShortCode) {
        return this._http.get(`${this._baseURL}/${userId}/${scenShortCode}/new-fridge`);
    }
    makeChildren(malePede, femalePede, genoFacts) {
        var genoFactsObj = {
            'genoFacts': genoFacts,
            'malePede': malePede,
            'femalePede': femalePede
        };
        return this._http.post(`${this._baseURL}/make-children`, genoFactsObj);
    }
    insertPede(pede, fridge, scenShortCode) {
        let isF = pede.isFemale === 'F' ? true : false;
        var insertObj = {
            'fridgeId': fridge.id,
            'pedeToBeInserted': {
                bugID: pede.bugID,
                genotype: pede.genotype,
                isFemale: isF,
                phenotype: pede.phenotype,
            }
        };
        return this._http.post(`${this._baseURL}/${scenShortCode}/add-pede`, insertObj);
    }
    calculateQuizScore(quizPedes, studentAnswers, quizFridgeId) {
        var scoreHelperObj = {
            quizPedes: quizPedes,
            studentAnswers: studentAnswers,
            fridgeId: quizFridgeId
        };
        return this._http.post(`${this._baseURL}/calculate-score`, scoreHelperObj);
    }
    getMendelFridge(userId, scenShortCode) {
        return this._http.get(`${this._baseURL}/${userId}/${scenShortCode}`);
    }
    deletePede(userId, scenShortCode, pede) {
        let mendelPedeId = pede.id;
        return this._http
            .delete(`${this._baseURL}/${userId}/${scenShortCode}/${mendelPedeId}`);
    }
};
MendelpedeScenarioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], MendelpedeScenarioService);
exports.MendelpedeScenarioService = MendelpedeScenarioService;


/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = __webpack_require__(233);
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(863);
if (process.env.NODE_ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320)))

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const platform_browser_1 = __webpack_require__(68);
const router_1 = __webpack_require__(16);
const http_1 = __webpack_require__(46);
const ngx_breadcrumbs_1 = __webpack_require__(181);
const app_routes_1 = __webpack_require__(864);
const authentication_service_1 = __webpack_require__(17);
const logged_in_guard_service_1 = __webpack_require__(92);
const cricket_service_1 = __webpack_require__(121);
const course_service_1 = __webpack_require__(122);
const scenario_resolver_1 = __webpack_require__(185);
const mendelpede_scenario_resolver_1 = __webpack_require__(186);
const shared_module_1 = __webpack_require__(54);
const admin_module_1 = __webpack_require__(886);
const authentication_module_1 = __webpack_require__(891);
const help_module_1 = __webpack_require__(897);
const profile_module_1 = __webpack_require__(902);
const cricket_module_1 = __webpack_require__(906);
const app_component_1 = __webpack_require__(909);
const nav_component_1 = __webpack_require__(910);
const page_not_found_component_1 = __webpack_require__(396);
const home_component_1 = __webpack_require__(397);
const mendelpede_module_1 = __webpack_require__(913);
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

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const page_not_found_component_1 = __webpack_require__(396);
const home_component_1 = __webpack_require__(397);
exports.AppRoutes = [{
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }];


/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/page-not-found/page-not-found.template.html";

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/home/home.template.html";

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/home/home.style.css";

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/confirm-delete-dialog.template.html";

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

/***/ 870:
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
let TitleCasePipe = class TitleCasePipe {
    transform(inputString) {
        return inputString.toLowerCase().split(' ').map((word) => {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }
};
TitleCasePipe = __decorate([
    core_1.Pipe({ name: 'titleCase' })
], TitleCasePipe);
exports.TitleCasePipe = TitleCasePipe;


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
let PedeImagePipe = class PedeImagePipe {
    transform(phenotype) {
        var cssClass = 'mx-auto sizeI';
        cssClass += ' mpede-bodycol-' + phenotype[2];
        cssClass += ' mpede-eyecol-' + phenotype[1];
        cssClass += ' mpede-pede-' + phenotype[0].toLowerCase();
        cssClass += '-seg' + phenotype[4];
        cssClass += '-leg' + phenotype[3] + '-min';
        return cssClass;
    }
};
PedeImagePipe = __decorate([
    core_1.Pipe({ name: 'pedeImage' })
], PedeImagePipe);
exports.PedeImagePipe = PedeImagePipe;


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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
let PedeQuizTraitPipe = class PedeQuizTraitPipe {
    transform(quizTrait) {
        if (quizTrait === "DotColor") {
            return "Color of dot";
        }
        else if (quizTrait === "SegColor") {
            return "Color of body segment";
        }
        else if (quizTrait === "EyeColor") {
            return "Color of eyes";
        }
        else if (quizTrait === "NumSegments") {
            return "Number of segments";
        }
        else if (quizTrait === "NumLegs") {
            return "Number of Legs";
        }
    }
};
PedeQuizTraitPipe = __decorate([
    core_1.Pipe({ name: 'pedeQuizTrait' })
], PedeQuizTraitPipe);
exports.PedeQuizTraitPipe = PedeQuizTraitPipe;


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
let PedeGenotypePipe = class PedeGenotypePipe {
    transform(pedeGenotype, scenCode) {
        if (pedeGenotype > 8) {
            return 'invalid';
        }
        var genoList = [[0, 0], [1, 0], [2, 0], [1, 0], [1, 1], [2, 1], [2, 0], [2, 1], [2, 2]];
        var regGenoStr = ['a', 'A', '?'];
        var alleleGenoStr = ['A<sup>0</sup>', 'A<sup>1</sup>', 'A<sup>2</sup>'];
        var geno = genoList[pedeGenotype];
        if (scenCode === "MultAlleles") {
            return alleleGenoStr[geno[0]] + alleleGenoStr[geno[1]];
        }
        else {
            return regGenoStr[geno[0]] + regGenoStr[geno[1]];
        }
    }
};
PedeGenotypePipe = __decorate([
    core_1.Pipe({ name: 'pedeGenotype' })
], PedeGenotypePipe);
exports.PedeGenotypePipe = PedeGenotypePipe;


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
const forms_1 = __webpack_require__(13);
const forms_2 = __webpack_require__(13);
const required_error_component_1 = __webpack_require__(877);
const email_error_component_1 = __webpack_require__(879);
const password_error_component_1 = __webpack_require__(881);
const confirm_password_error_component_1 = __webpack_require__(883);
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

/***/ 877:
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
        templateUrl: __webpack_require__(878)
    })
], RequiredErrorComponent);
exports.RequiredErrorComponent = RequiredErrorComponent;


/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/required-error.template.html";

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
        templateUrl: __webpack_require__(880)
    })
], EmailErrorComponent);
exports.EmailErrorComponent = EmailErrorComponent;


/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/email-error.template.html";

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
        templateUrl: __webpack_require__(882)
    })
], PasswordErrorComponent);
exports.PasswordErrorComponent = PasswordErrorComponent;


/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/password-error.template.html";

/***/ }),

/***/ 883:
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
        templateUrl: __webpack_require__(884)
    })
], ConfirmPasswordErrorComponent);
exports.ConfirmPasswordErrorComponent = ConfirmPasswordErrorComponent;


/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/shared/form-errors/confirm-password-error.template.html";

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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const select_drop_service_1 = __webpack_require__(182);
const select_drop_component_1 = __webpack_require__(398);
__export(__webpack_require__(182));
__export(__webpack_require__(398));
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
const router_1 = __webpack_require__(16);
const shared_module_1 = __webpack_require__(54);
const admin_routes_1 = __webpack_require__(887);
const admin_component_1 = __webpack_require__(400);
const admin_home_component_1 = __webpack_require__(401);
const not_auth_component_1 = __webpack_require__(402);
const admin_guard_service_1 = __webpack_require__(399);
const student_service_1 = __webpack_require__(421);
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

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const admin_guard_service_1 = __webpack_require__(399);
const logged_in_guard_service_1 = __webpack_require__(92);
const admin_component_1 = __webpack_require__(400);
const admin_home_component_1 = __webpack_require__(401);
const not_auth_component_1 = __webpack_require__(402);
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
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(2).then((function (require) { resolve(__webpack_require__(926)['CourseModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
                data: {
                    breadcrumbs: 'Courses'
                }
            },
            {
                path: 'students',
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(1).then((function (require) { resolve(__webpack_require__(927)['StudentModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
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

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/admin.template.html";

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/admin-home/admin-home.template.html";

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/admin/not-auth/not-auth.template.html";

/***/ }),

/***/ 891:
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
const router_1 = __webpack_require__(16);
const shared_module_1 = __webpack_require__(54);
const authentication_routes_1 = __webpack_require__(892);
const signin_component_1 = __webpack_require__(403);
const signup_component_1 = __webpack_require__(404);
const signout_component_1 = __webpack_require__(406);
const forget_password_component_1 = __webpack_require__(407);
const reset_password_component_1 = __webpack_require__(408);
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

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const signin_component_1 = __webpack_require__(403);
const signup_component_1 = __webpack_require__(404);
const signout_component_1 = __webpack_require__(406);
const forget_password_component_1 = __webpack_require__(407);
const reset_password_component_1 = __webpack_require__(408);
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

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/signin/signin.template.html";

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/signup/signup.template.html";

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/forget-password/forget-password.template.html";

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/authentication/reset-password/reset-password.template.html";

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
const router_1 = __webpack_require__(16);
const shared_module_1 = __webpack_require__(54);
const help_routes_1 = __webpack_require__(898);
const help_component_1 = __webpack_require__(409);
const help_cricket_component_1 = __webpack_require__(410);
const help_mendelpede_component_1 = __webpack_require__(411);
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
            help_cricket_component_1.HelpCricketComponent,
            help_mendelpede_component_1.HelpMendelpedeComponent
        ]
    })
], HelpModule);
exports.HelpModule = HelpModule;


/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const help_component_1 = __webpack_require__(409);
const help_cricket_component_1 = __webpack_require__(410);
const help_mendelpede_component_1 = __webpack_require__(411);
exports.HelpRoutes = [
    {
        path: 'help',
        component: help_component_1.HelpComponent,
        data: { breadcrumbs: 'Help' },
        children: [
            { path: 'cricket',
                component: help_cricket_component_1.HelpCricketComponent,
                data: { breadcrumbs: 'Cricket' }
            },
            { path: 'mendelpede',
                component: help_mendelpede_component_1.HelpMendelpedeComponent,
                data: { breadcrumbs: 'MendelPede' }
            }
        ]
    }
];


/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help.template.html";

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help-cricket/help-cricket.template.html";

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/help/help-mendelpede/help-mendelpede.template.html";

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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(16);
const shared_module_1 = __webpack_require__(54);
const profile_routes_1 = __webpack_require__(903);
const profile_service_1 = __webpack_require__(183);
const user_profile_component_1 = __webpack_require__(412);
const update_password_component_1 = __webpack_require__(413);
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

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const logged_in_guard_service_1 = __webpack_require__(92);
const user_profile_component_1 = __webpack_require__(412);
const update_password_component_1 = __webpack_require__(413);
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

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/profile/user-profile/user-profile.template.html";

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/profile/update-password/update-password.template.html";

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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const router_1 = __webpack_require__(16);
const shared_module_1 = __webpack_require__(54);
const cricket_routes_1 = __webpack_require__(907);
const cricket_component_1 = __webpack_require__(414);
const scenario_list_component_1 = __webpack_require__(415);
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

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cricket_component_1 = __webpack_require__(414);
const scenario_resolver_1 = __webpack_require__(185);
const scenario_list_component_1 = __webpack_require__(415);
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
                loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e/* require.ensure */(0).then((function (require) { resolve(__webpack_require__(928)['LocationModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); },
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

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/scenario-list/scenario-list.template.html";

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
let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'inherit-logic',
        template: '<IL-nav></IL-nav><router-outlet></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;


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
const authentication_service_1 = __webpack_require__(17);
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
        selector: 'IL-nav',
        templateUrl: __webpack_require__(911),
        styleUrls: [__webpack_require__(912)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], NavComponent);
exports.NavComponent = NavComponent;


/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/nav/nav.template.html";

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/nav/nav.style.css";

/***/ }),

/***/ 913:
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
const options_component_1 = __webpack_require__(416);
const mpede_fridge_component_1 = __webpack_require__(184);
const mpede_labroom_component_1 = __webpack_require__(417);
const mendelpede_scenarios_component_1 = __webpack_require__(419);
const mpede_quiz_component_1 = __webpack_require__(921);
const mendelpede_scenarios_service_1 = __webpack_require__(65);
const mendelpede_routes_1 = __webpack_require__(924);
const mendelpede_component_1 = __webpack_require__(420);
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
            mpede_quiz_component_1.MendelpedeQuizComponent,
            mendelpede_component_1.MendelpedeComponent,
        ],
        providers: [
            mendelpede_scenarios_service_1.MendelpedeScenarioService,
        ],
    })
], MendelpedeModule);
exports.MendelpedeModule = MendelpedeModule;


/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/options/options.template.html";

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-labroom/mpede-labroom.template.html";

/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-labroom/mpede-labroom.style.css";

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-fridge/mpede-fridge.template.html";

/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-fridge/mpede-fridge.style.css";

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mendelpede-scenarios.template.html";

/***/ }),

/***/ 92:
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
const authentication_service_1 = __webpack_require__(17);
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

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mendelpede-scenarios.style.css";

/***/ }),

/***/ 921:
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
const mpede_fridge_component_1 = __webpack_require__(184);
const mendelpede_scenarios_service_1 = __webpack_require__(65);
const authentication_service_1 = __webpack_require__(17);
const read_error_1 = __webpack_require__(45);
let MendelpedeQuizComponent = class MendelpedeQuizComponent {
    constructor(_authenticationService, _scenarioService) {
        this._authenticationService = _authenticationService;
        this._scenarioService = _scenarioService;
        this.quizPedes = [];
        this.quizSubmitted = false;
        this.errorMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    getQuizBackgroundColor(n) {
        return {
            'text-success': this.quiz.isAnswerCorrect && this.quiz.isAnswerCorrect[n] && this.quizSubmitted
        };
    }
    ngOnInit() {
        this._scenarioService.getFridge
            .takeUntil(this.isDestroyed$)
            .subscribe((fridge) => {
            this.quizPedes = fridge.pedes;
            this.quizTrait = fridge.firstTraitForQuiz;
            this.quizFridgeId = fridge.id;
            if (fridge.quiz) {
                this.quizSubmitted = true;
                this.quiz = fridge.quiz;
            }
            else {
                this.quizSubmitted = false;
                this.quiz = this._initQuiz();
            }
        });
    }
    _initQuiz() {
        var arr1 = [];
        var arr2 = [];
        for (let i = 0; i < 8; i++) {
            arr1.push(null);
            arr2.push(false);
        }
        return {
            score: -1,
            submittedAnswers: arr1,
            isAnswerCorrect: arr2
        };
    }
    submitQuiz() {
        this.errorMessage = '';
        var returnPedes = this.quizPedes.slice(0, 8);
        this._scenarioService.calculateQuizScore(returnPedes, this.quiz.submittedAnswers, this.quizFridgeId)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            this.quiz = res;
            this.quizSubmitted = true;
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
            this.quiz = this._initQuiz();
        });
    }
    ngOnDestroy() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", mpede_fridge_component_1.MendelpedeFridgeComponent)
], MendelpedeQuizComponent.prototype, "mendelFridge", void 0);
MendelpedeQuizComponent = __decorate([
    core_1.Component({
        selector: 'mendelpede-quiz',
        templateUrl: __webpack_require__(922),
        styleUrls: [__webpack_require__(923)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        mendelpede_scenarios_service_1.MendelpedeScenarioService])
], MendelpedeQuizComponent);
exports.MendelpedeQuizComponent = MendelpedeQuizComponent;


/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-quiz/mpede-quiz.template.html";

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/scenarios/mpede-quiz/mpede-quiz.style.css";

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const options_component_1 = __webpack_require__(416);
const mendelpede_component_1 = __webpack_require__(420);
const logged_in_guard_service_1 = __webpack_require__(92);
const mendelpede_scenarios_component_1 = __webpack_require__(419);
const mendelpede_scenario_resolver_1 = __webpack_require__(186);
exports.MendelpedeRoutes = [
    {
        path: 'mendelpede',
        component: mendelpede_component_1.MendelpedeComponent,
        canActivate: [logged_in_guard_service_1.LoggedInGuard],
        data: {
            breadcrumbs: 'MendelPede'
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

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/mendelpede/mendelpede.template.html";

/***/ })

},[862]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvY3JpY2tldC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vY291cnNlL2NvdXJzZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9zZWxlY3QtZHJvcC9zZWxlY3QtZHJvcC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1mcmlkZ2UvbXBlZGUtZnJpZGdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvc2NlbmFyaW8ucmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUtc2NlbmFyaW8ucmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLmd1YXJkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLXBhc3N3b3JkLnZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25vdXQvc2lnbm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAtY3JpY2tldC9oZWxwLWNyaWNrZXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLW1lbmRlbHBlZGUvaGVscC1tZW5kZWxwZWRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvc2NlbmFyaW8tbGlzdC9zY2VuYXJpby1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1wZWRlcy5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2ludGVyZmFjZXMvbWVuZGVscGVkZS1zY2VuYXJpb3MuaW50ZXJmYWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3JlYWQtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21lbmRlbHBlZGUtc2NlbmFyaW9zLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Jvb3RzdHJhcC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcHAucm91dGVzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hvbWUvaG9tZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaG9tZS9ob21lLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BpcGVzL3BlcnNvbi1uYW1lLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy90aXRsZS1jYXNlLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9wZWRlLWltYWdlLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9waXBlcy9wZWRlLXF1aXpUcmFpdC5waXBlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGVkZS1nZW5vdHlwZS5waXBlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcGlwZXMvcGVvcGxlLWxpc3QtbmFtZXMucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3BpcGVzL3BoYWdlLXBhcmVudHMucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL3JlcXVpcmVkLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2VtYWlsLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL3Bhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2hhcmVkL3NlbGVjdC1kcm9wL3NlbGVjdC1kcm9wLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi1ob21lL2FkbWluLWhvbWUudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9oZWxwL2hlbHAudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hlbHAvaGVscC1jcmlja2V0L2hlbHAtY3JpY2tldC50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaGVscC9oZWxwLW1lbmRlbHBlZGUvaGVscC1tZW5kZWxwZWRlLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS9wcm9maWxlLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcHJvZmlsZS91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0LnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvc2NlbmFyaW8tbGlzdC9zY2VuYXJpby1saXN0LnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbmF2L25hdi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9uYXYvbmF2LnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9uYXYvbmF2LnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL29wdGlvbnMvb3B0aW9ucy50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20uc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtZnJpZGdlL21wZWRlLWZyaWRnZS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1xdWl6L21wZWRlLXF1aXouY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtcXVpei9tcGVkZS1xdWl6LnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1xdWl6L21wZWRlLXF1aXouc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tZW5kZWxwZWRlLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvbWVuZGVscGVkZS50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQWdFO0FBQ2hFLHNDQUEyQztBQUMzQyx1Q0FBa0Q7QUFRbEQsSUFBYSxjQUFjLEdBQTNCO0lBNEJJLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUExQjdCLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFLekIscUJBQWdCLEdBQUcsSUFBSSxzQkFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzNELHVCQUFrQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUlsRCxxQkFBZ0IsR0FBRyxJQUFJLHNCQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDeEQsZUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU8xQyxrQkFBYSxHQUFHLElBQUksc0JBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUN4RCxvQkFBZSxH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MEY7QUFDMUYsZ0VBQTRFO0FBRS9ELHdCQUFnQixHQUFXO0lBQ3RDO1FBQ0UsSUFBSSxFQUFHLFlBQVk7UUFDbkIsU0FBUyxFQUFHLDBDQUFtQjtRQUMvQixXQUFXLEVBQUUsQ0FBQyx1Q0FBYSxDQUFDO1FBQzVCLElBQUksRUFBRTtZQUNKLFdBQVcsRUFBRSxZQUFZO1NBQzFCO1FBRUQsUUFBUSxFQUFDO1lBQ1A7Z0JBQ0UsSUFBSSxFQUFHLEVBQUU7Z0JBQ1QsU0FBUyxFQUFHLG9DQUFnQjthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRyxnQkFBZ0I7Z0JBQ3ZCLE9BQU8sRUFBRTtvQkFDUCxrQkFBa0IsRUFBRSx5REFBMEI7aUJBQy9DO2dCQUNELFNBQVMsRUFBRyw2REFBNEI7Z0JBQ3hDLElBQUksRUFBRTtvQkFDSixXQUFXLEVBQUUsZ0NBQWdDO2lCQUM5QzthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUM7Ozs7Ozs7O0FDakNGLGlCQUFpQixxQkFBdUIsb0QiLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBCZWhhdmlvclN1YmplY3QgLCAgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgU2NlbmFyaW8sIEZyaWRnZSwgRnJpZGdlUGhhZ2UsIEdlbm90eXBlUGhhZ2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBTY2VuYXJpby9mcmlkZ2UgcmVsYXRlZCBmdW5jdGlvbnMgdGhhdCBnZXQvc2VuZCBkYXRhIHRvIHRoZSBiYWNrZW5kIHNlcnZlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3JpY2tldFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfYmFzZVVSTCA9ICdhcGkvY3JpY2tldCc7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBzY2VuYXJpbyBkZXRhaWxzIHdoaWNoIGlzIG5lZWRlZCB3aGVuXG4gICAqIHBlcmZvcm1pbmcgY3Jvc3Nlc1xuICAgKi9cbiAgICBwcml2YXRlIF9zY2VuYXJpb0RldGFpbHMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuICAgIGdldFNjZW5hcmlvRGV0YWlscyA9IHRoaXMuX3NjZW5hcmlvRGV0YWlscy5hc09ic2VydmFibGUoKTtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGd1ZXNzZXNcbiAgICovXG4gICAgcHJpdmF0ZSBfc2NlbmFyaW9HdWVzc2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHt9KTtcbiAgICBnZXRHdWVzc2VzID0gdGhpcy5fc2NlbmFyaW9HdWVzc2VzLmFzT2JzZXJ2YWJsZSgpO1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2NlbmFyaW8gY29kZVxuICAgKlxuICAgKiBVc2VkIGJ5IGZyaWRnZSBhbmQgbG9jYXRpb24gY29tcG9uZW50c1xuICAgKiB0byBnZXQgdGhlIGNvZGUgd2l0aG91dCB0aGUgcm91dGVcbiAgICovXG4gICAgcHJpdmF0ZSBfc2NlbmFyaW9Db2RlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcbiAgICBnZXRTY2VuYXJpb0NvZGUgPSB0aGlzLl9zY2VuYXJpb0NvZGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgdGhlIHNlcnZpY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SHR0cENsaWVudH0gX2h0dHAgQW5ndWFyIG1lY2hhbmlzbSB0byBtYWtlIGNhbGxzIHRvIGJhY2tlbmQgc2VydmVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge31cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHNhdmUgc2NlbmFyaW8gc3R1ZmY6XG4gICAqIHNjZW5hcmlvRGV0YWlscywgc2NlbmFyaW9HdWVzc2VzLCBhbmQgc2NlbmFyaW9Db2RlXG4gICAqXG4gICAqIFVzZWQgd2hlbiBuYXZpZ2F0aW5nIGF3YXkgZnJvbSBzY2VuYXJpbyBjb21wb25lbnRcbiAgICovXG4gIHJlc2V0U2NlbmFyaW8oKSB7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvRGV0YWlscy5uZXh0KCcnKTtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9HdWVzc2VzLm5leHQoe30pO1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0NvZGUubmV4dCgnJyk7XG4gICAgfVxuXG4gIC8qKlxuICAqIFNldCB0aGUgc2NlbmFyaW8gZGV0YWlscyBhbmQgc2NlbmFyaW8gZ3Vlc3Nlc1xuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IHNjZW5hcmlvRGV0YWlscyAtIHNjZW5hcmlvIGRldGFpbHNcbiAgKiAtIG5lY2Vzc2FyeSBmb3IgcGVyZm9ybWluZyBleHBlcmltZW50c1xuICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuYXJpb0d1ZXNzZXMgY3VycmVudCBzY2VuYXJpbyBndWVzc2VzXG4gICovXG4gIHNldFNjZW5hcmlvKHNjZW5hcmlvRGV0YWlsczogc3RyaW5nLCBzY2VuYXJpb0d1ZXNzZXM6IHN0cmluZykge1xuICAgICAgICBpZiAoc2NlbmFyaW9EZXRhaWxzICE9PSBudWxsKVxuICAgICAgICAgICAgdGhpcy5fc2NlbmFyaW9EZXRhaWxzLm5leHQoc2NlbmFyaW9EZXRhaWxzKTtcbiAgICAgICAgaWYgKHNjZW5hcmlvRGV0YWlscyAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX3NjZW5hcmlvR3Vlc3Nlc1xuICAgICAgICAgICAgICAubmV4dChKU09OLnBhcnNlKHNjZW5hcmlvR3Vlc3NlcykpO1xuICAgIH1cblxuICAvKipcbiAgICogTGlzdCBhdmFpbGFibGUgc2NlbmFyaW9zXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFNjZW5hcmlvW10+fSBsaXN0IG9mIHNjZW5hcmlvc1xuICAgKi9cbiAgICBsaXN0U2NlbmFyaW9zKCk6IE9ic2VydmFibGU8U2NlbmFyaW9bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxTY2VuYXJpb1tdPih0aGlzLl9iYXNlVVJMKVxuICAgIH1cblxuICAvKipcbiAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGEgc3BlY2lmaWMgc2NlbmFyaW9cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBpZGVudGlmaWVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtTY2VuYXJpb31cbiAgICogLSBzY2VuYXJpbyBpbmZvcm1hdGlvblxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGxvYWQgc2NlbmFyaW8gPHNjZW5JZD5cIiBpZiBzY2VuYXJpbyBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIGdldFNjZW5hcmlvKHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTY2VuYXJpbz4ge1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0NvZGUubmV4dChzY2VuSWQpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxTY2VuYXJpbz4oYCR7dGhpcy5fYmFzZVVSTH0vJHtzY2VuSWR9YCk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHVwZGF0ZWQgZ3Vlc3NlcyBmb3IgdGhlIHNjZW5hcmlvIHRvIGJlIHNhdmVkIGluIGRhdGFiYXNlXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBndWVzc2VzIHN0cmluZyBvZiB1cGRhdGVkIGd1ZXNzZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICogLSB1cGRhdGVkIGd1ZXNzZXNcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBmaW5kIGZyaWRnZVwiIGlmIGZyaWRnZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgXCJDb3VsZCBub3Qgc2F2ZSBuZXcgZ3Vlc3Nlc1wiIGlmIGNvdWxkbid0IHVwZGF0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgICBzYXZlRGVsZXRpb25zKGd1ZXNzZXM6IGFueSwgdXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vZGVsZXRpb25zYCwgZ3Vlc3Nlcyk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZnJpZGdlIGZvciB0aGUgdXNlci9zY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2U+fVxuICAgKiAtIG5ld2x5IGNyZWF0ZWQgZnJpZGdlXG4gICAqIC0gb3IgZXJyb3IgXCJVbmFibGUgdG8gY3JlYXRlIG5ldyBwaGFnZSBmb3Igc2NlbmFyaW9cIiBpZiBpc3N1ZSBjcmVhdGUgcGhhZ2VcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byBzYXZlIG5ldyBmcmlkZ2VcIiBpZiBjb3VsZG4ndCBjcmVhdGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgY3JlYXRlRnJpZGdlKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RnJpZGdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vbmV3LWZyaWRnZWApO1xuICAgIH1cblxuICAvKipcbiAgICogR2V0IGFuIGV4aXN0aW5nIGZyaWRnZSBmb3IgdXNlci9zY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2U+fVxuICAgKiAtIGV4aXN0aW5nIGZyaWRnZVxuICAgKiAtIG9yIGVycm9yIFwiTm8gZnJpZGdlIGZvciBzY2VuYXJpby91c2VyXCIgaWYgZnJpZGdlIGRvZXMgbm90IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIGdldEZyaWRnZSh1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZyaWRnZT4ge1xuICAgICAgICB2YXIgcmVzID0gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH1gKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBwaGFnZSBzdHJhaW4gdG8gdGhlIGZyaWRnZTtcbiAgICogU2VydmVyIHVzZXMgdXNlcklkIGFuZCBzY2VuQ29kZSB0byBmaW5kIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHthbnl9IHN0cmFpbiAtIG5ldyBwaGFnZSB0byBhZGQgdG8gZnJpZGdlXG4gICAqIC0gaGFzIHN0cmFpbk51bSwgbXV0YXRpb25MaXN0LCBhbmQgZGVsZXRpb25cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlUGhhZ2U+fVxuICAgKiAtIG5ld2x5IHNhdmVkIHBoYWdlXG4gICAqIC0gb3IgZXJyb3IgXCJVc2VyIG5vdCBmb3VuZFwiIGlmIHVzZXIgbm90IGZvdW5kXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gbG9hZCBzY2VuYXJpbyA8c2NlbklkPlwiIGlmIHNjZW5hcmlvIG5vdCBmb3VuZFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgYWRkU3RyYWluKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgc3RyYWluOiBhbnkpOiBPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAucG9zdDxGcmlkZ2VQaGFnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9mcmlkZ2UtcGhhZ2VgLCBzdHJhaW4pXG4gICAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgZGV0YWlscy9pbmZvcm1hdGlvbiBhYm91dCBhbiBleGlzdGluZyBwaGFnZSBpbiB0aGUgZnJpZGdlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqIEBwYXJhbSB7RnJpZGdlUGhhZ2V9IHN0cmFpbiAtIHN0cmFpbiB0byB1cGRhdGVcbiAgICogLSB1c2Ugc3RyYWluIGBpZGAgdG8gc3BlY2lmeSBzdHJhaW4gYW5kIHNlbmQgdXBkYXRlZCBpbmZvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPn1cbiAgICogLSB1cGRhdGVkIHN0cmFpblxuICAgKiAtIG9yIGVycm9yIFwiUGhhZ2Ugbm90IGZvdW5kXCIgaWYgc3RyYWluIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAgdXBkYXRlU3RyYWluKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZywgc3RyYWluOiBGcmlkZ2VQaGFnZSk6IE9ic2VydmFibGU8RnJpZGdlUGhhZ2U+IHtcbiAgICAgICAgbGV0IHN0cmFpbklkID0gc3RyYWluLmlkO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3Q8RnJpZGdlUGhhZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vJHtzdHJhaW5JZH1gLCBzdHJhaW4pXG4gICAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYSBzdHJhaW4gZnJvbSB0aGUgZnJpZGdlIChhbmQgZGF0YWJhc2UpXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqIEBwYXJhbSB7RnJpZGdlUGhhZ2V9IHN0cmFpbiAtIHRoZSBzdHJhaW4gdG8gZGVsZXRlXG4gICAqIC0gdXNlIHN0cmFpbiBgaWRgIHRvIHNwZWNpZnkgd2hpY2ggc3RyYWluIHRvIGRlbGV0ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fVxuICAgKiAtIHRoZSBzdHJhaW4ganVzdCBkZWxldGVkXG4gICAqIC0gb3IgZXJyb3IgXCJQaGFnZSBub3QgZm91bmRcIiBpZiBzdHJhaW4gZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byByZW1vdmUgc3RyYWluIGZyb20gZnJpZGdlXCIgaWYgY291bGRuJ3QgZGVsZXRlXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgIGRlbGV0ZVN0cmFpbih1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHN0cmFpbjogRnJpZGdlUGhhZ2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgc3RyYWluSWQgPSBzdHJhaW4uaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vJHtzdHJhaW5JZH1gKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2NyaWNrZXQvY3JpY2tldC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ291cnNlLCBTdHVkZW50LCBBZG1pblN0dWRlbnQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBGdW5jdGlvbnMgcmVsYXRlZCB0byBnZXR0aW5nIGNvdXJzZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBiYWNrIGVuZCBzZXJ2ZXJcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvdXJzZVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2Jhc2VVUkwgPSAnL2FwaS9hZG1pbic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBhdmFpbGFibGUgY291cnNlcyBkZXBlbmRpbmcgaWYgdXNlclxuICAgKiBpcyBhIGZ1bGwgYWRtaW4gb3IgaW5zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCBkYXRhYmFzZSB1c2VyIElEIG9mIHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxDb3Vyc2VbXT59IC0gV2hlbiBzdWNjZXNzZnVsIGFuZCBgYWRtaW5gLCBsaXN0IG9mIGFsbCBjb3Vyc2VzXG4gICAqIC0gV2hlbiBzdWNjZXNzZnVsIGFuZCBgaW5zdHJgLCBsaXN0IG9mIGNvdXJzZXMgaW4gd2hpY2ggdXNlciBpcyBhbiBpbnN0cnVjdG9yIGZvclxuICAgKiAtIG9yIGVycm9yIFwiTm8gY291cnNlcyBmb3VuZFwiIGlmIG5vIGNvdXJzZXMgdG8gbGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBsaXN0Q291cnNlcyhhZG1pbklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPENvdXJzZVtdPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLmdldDxDb3Vyc2VbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzYCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGNvdXJzZSB3aXRoIGxvZ2dlZCBpbiB1c2VyIGFzIGluc3RydWN0b3IgYW5kXG4gICAqIGRldGFpbHMgc3BlY2lmaWVkIGluIGBib2R5YFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge2FueX0gYm9keSBjb3Vyc2UgZGV0YWlscyBpbmNsdWRpbmcgYGNvdXJzZU51bWAgYW5kIGBkZXNjcmlwdGlvbmBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB0aGUgbmV3bHkgY3JlYXRlZCBjb3Vyc2UgaWYgc3VjY2Vzc2Z1bFxuICAgKiAtIG9yIGVycm9yIG1lc3NhZ2UgZm9yIHNlcnZlci9kYXRhYmFzZSBlcnJvcnNcbiAgICovXG4gIGNyZWF0ZUNvdXJzZShhZG1pbklkOiBudW1iZXIsIGJvZHk6IGFueSk6IE9ic2VydmFibGU8Q291cnNlPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLnBvc3Q8Q291cnNlPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXNgLCBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBjb3Vyc2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciAod2hvIGlzIGFuIGFkbWluIG9yIGluc3RyKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHRvIGdldCBpbmZvcm1hdGlvbiBmb3JcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB0aGUgY291cnNlIGluZm9ybWF0aW9uIGluY2x1ZGluZyBgY291cnNlTnVtYCwgYGRlc2NyaXB0aW9uYCwgYW5kIGBpbnN0cnVjdG9yc2BcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBnZXRDb3Vyc2UoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZyk6IE9ic2VydmFibGU8Q291cnNlPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLmdldDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlcy8ke2NvdXJzZU51bX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBjb3Vyc2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciAod2hvIGlzIGFuIGFkbWluIG9yIGluc3RyKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHRvIGdldCBpbmZvcm1hdGlvbiBmb3JcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB0aGUgY291cnNlIGluZm9ybWF0aW9uIGluY2x1ZGluZyBgY291cnNlTnVtYCwgYGRlc2NyaXB0aW9uYCwgYW5kIGBpbnN0cnVjdG9yc2BcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBnZXRDb3Vyc2VCeUlkKGNvdXJzZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvdXJzZT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQ8Q291cnNlPihgJHt0aGlzLl9iYXNlVVJMfS9jb3Vyc2UtYnktaWQvJHtjb3Vyc2VJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpc3Qgb2Ygc3R1ZGVudHMgaW4gYSBjb3Vyc2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciB3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdXJzZU51bSBjb3Vyc2UgbnVtYmVyIG9mIHRoZSBjb3Vyc2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8U3R1ZGVudFtdPn0gLSBsaXN0IG9mIHN0dWRlbnRzIGVhY2ggd2l0aCBwcm9wZXJ0aWVzIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcklkYCwgYGFjY2Vzc0dyYW50ZWRgLCBhbmQgYGVtYWlsYFxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBtZXNzYWdlIGZvciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JzXG4gICAqL1xuICBnZXRTdHVkZW50cyhhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxTdHVkZW50W10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PFN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfS9zdHVkZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZWRpdGluZyBhIGNvdXJzZSwgdXNlciBpcyBhYmxlIHRvIGFkZCBuZXcgaW5zdHJ1Y3RvcnMuIFRoaXMgbWV0aG9kIHByb2R1Y2VzIHRoZSBsaXN0IG9mIHBvc3NpYmxlIGluc3RydWN0b3JzIHRoYXQgY291bGQgYmUgYWRkZWRcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHdlIGFyZSBlZGl0aW5nXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEFkbWluU3R1ZGVudFtdPn0gLSBsaXN0IG9mIHBvdGVudGlhbCBpbnN0dWN0b3JzIHdpdGggcHJvcGVydGllcyBgZmlyc3ROYW1lYCwgYGxhc3ROYW1lYCwgYHVzZXJJZGAsIGFuZCBgcm9sZWBcbiAgICogLSBvciBcIkZhaWxlZCB0byBsb2FkIGNvdXJzZSA8Y291cnNlTnVtPlwiIGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBnZXRQb3NzaWJsZUluc3RydWN0b3JzKGFkbWluSWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudFtdPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLmdldDxBZG1pblN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfS9pbnN0cnVjdG9yc2ApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSB1c2VyIGFzIGFuIGluc3RydWN0b3Igb2YgdGhlIGNvdXJzZSBhbmQgY2hhbmdlIHRoZSBuZXcgaW5zdHJ1Y3RvcidzIHJvbGUgdG8gYGluc3RyYCBpZiBuZWNlc3NhcnlcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgdG8gYWRkIGluc3RydWN0b3IgZm9yXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdJbnN0cklkIHVzZXJJZCBvZiB1c2VyIHRvIGFkZCBhcyBpbnN0cnVjdG9yIG9mIHRoaXMgY291cnNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENvdXJzZT59IC0gdGhlIHVwZGF0ZWQgY291cnNlIGluZm9ybWF0aW9uXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIGVycm9yIGlmIHByb2JsZW0gdXBkYXRpbmcgdGhlIGNvdXJzZVxuICAgKiAtIG9yIGVycm9yIGlmIHByb2JsZW0gdXBkYXRpbmcgdGhlIG5ldyBpbnN0cnVjdG9yIHJvbGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGFkZEluc3RydWN0b3IoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZywgbmV3SW5zdHJJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxDb3Vyc2U+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLnBvc3Q8Q291cnNlPihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2NvdXJzZXMvJHtjb3Vyc2VOdW19L2luc3RydWN0b3JzLyR7bmV3SW5zdHJJZH1gLCB7aW5zdHJ1Y3RvcjogdHJ1ZX0pXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjb3Vyc2UgZGVzY3JpcHRpb25cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciB3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdXJzZU51bSBjb3Vyc2UgbnVtYmVyIG9mIGNvdXJzZSB0byB1cGRhdGVcbiAgICogQHBhcmFtIHthbnl9IGJvZHkgdXBkYXRlZCBjb3Vyc2UgZGVzY3JpcHRpb25cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8Q291cnNlPn0gLSB1cGRhdGVkIGNvdXJzZSBpbmZvcm1hdGlvblxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGVkaXRDb3Vyc2UoYWRtaW5JZDogbnVtYmVyLCBjb3Vyc2VOdW06IHN0cmluZywgYm9keTogYW55KTogT2JzZXJ2YWJsZTxDb3Vyc2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAucG9zdDxDb3Vyc2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vY291cnNlcy8ke2NvdXJzZU51bX1gLCBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlIHRvIGRlbGV0ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb3Vyc2UganVzdCBkZWxldGVkXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT5cIiBpZiBjb3Vyc2UgZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBkZWxldGVDb3Vyc2UodXNlcklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgb2YgdGhlIHN0dWRlbnRzIGluIHRoZSBjb3Vyc2U7IHVzZWZ1bCBmb3IgYnVsayBkZWxldGlvbnNcbiAgICogd2hlbiBhIGNvdXJzZSBpcyBvdmVyXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIHVzZXJJZCBvZiB0aGUgbG9nZ2VkIGluIHVzZXIgd2hvIGlzIGFuIGFkbWluIG9yIGluc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3Vyc2VOdW0gY291cnNlIG51bWJlciBvZiBjb3Vyc2VcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBsaXN0IG9mIHN0dWRlbnRzIGp1c3QgZGVsZXRlZFxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+XCIgaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgZGVsZXRlU3R1ZGVudHModXNlcklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfS9zdHVkZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzY2VuYXJpbyBzdGF0dXMgKGFrYSBhY2Nlc3MgZ3JhbnRlZCkgZm9yIGEgc2NlbmFyaW8gZm9yIGFsbCBzdHVkZW50cyBpbiBhIGNvdXJzZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCB1c2VySWQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyIHdobyBpcyBhbiBhZG1pbiBvciBpbnN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gY291cnNlTnVtIGNvdXJzZSBudW1iZXIgb2YgY291cnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbkNvZGUgb2Ygc2NlbmFyaW8gb2YgaW50ZXJlc3RcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8U3R1ZGVudFtdPn0gLSBsaXN0IG9mIHN0dWRlbnRzIGluIGNvdXJzZSBlYWNoIHdpdGggcHJvcGVydGllcyBgZmlyc3ROYW1lYCwgYGxhc3ROYW1lYCwgYHVzZXJJZGAsIGFuZCBgc3RhdHVzYFxuICAgKiAtIG9yIFwibm8gc3R1ZGVudHMgZm91bmRcIiBpZiBubyBzdHVkZW50cyBpbiB0aGUgY291cnNlXG4gICAqIC0gb3IgXCJGYWlsZWQgdG8gbG9hZCBjb3Vyc2UgPGNvdXJzZU51bT4gaWYgY291cnNlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldFNjZW5hcmlvU3RhdHVzKGFkbWluSWQ6IG51bWJlciwgY291cnNlTnVtOiBzdHJpbmcsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTdHVkZW50W10+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAuZ2V0PFN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9jb3Vyc2VzLyR7Y291cnNlTnVtfS8ke3NjZW5JZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2NlbmFyaW8gc3RhdHVzIChha2EgYWNjZXNzIGdyYW50ZWQpIGZvciBhIHNjZW5hcmlvIGZvciBhbGwgc3R1ZGVudHMgaW4gYSBjb3Vyc2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgdXNlcklkIG9mIHRoZSBsb2dnZWQgaW4gdXNlciB3aG8gaXMgYW4gYWRtaW4gb3IgaW5zdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdXJzZU51bSBjb3Vyc2UgbnVtYmVyIG9mIGNvdXJzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5Db2RlIG9mIHNjZW5hcmlvIG9mIGludGVyZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFN0dWRlbnRbXT59IC0gbGlzdCBvZiBzdHVkZW50cyBpbiBjb3Vyc2UgZWFjaCB3aXRoIHByb3BlcnRpZXMgYGZpcnN0TmFtZWAsIGBsYXN0TmFtZWAsIGB1c2VySWRgLCBhbmQgYHN0YXR1c2BcbiAgICogLSBvciBcIm5vIHN0dWRlbnRzIGZvdW5kXCIgaWYgbm8gc3R1ZGVudHMgaW4gdGhlIGNvdXJzZVxuICAgKiAtIG9yIFwiRmFpbGVkIHRvIGxvYWQgY291cnNlIDxjb3Vyc2VOdW0+IGlmIGNvdXJzZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBnZXRNZW5kZWxTY2VuYXJpb1N0YXR1cyhhZG1pbklkOiBudW1iZXIsIGNvdXJzZU51bTogc3RyaW5nLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8U3R1ZGVudFtdPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgLmdldDxTdHVkZW50W10+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vbWVuZGVsLWNvdXJzZXMvJHtjb3Vyc2VOdW19LyR7c2NlbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIGNvdXJzZSBudW1iZXJzIGZvciBhbGwgYXZhaWxhYmxlIGNvdXJzZXNcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBsaXN0IG9mIGNvdXJzZXMgd2l0aCBwcm9wZXJ0aWVzIGBjb3Vyc2VOdW1gIGFuZCBgaWRgXG4gICAqIC0gb3IgXCJObyBjb3Vyc2VzIGZvdW5kXCIgZXJyb3IgaWYgbm8gY291cnNlcyBmb3VuZFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZ2V0Q291cnNlTGlzdCgpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgIC5nZXQoYC9hcGkvY291cnNlc2ApO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2NvdXJzZS9jb3Vyc2Uuc2VydmljZS50cyIsIi8vaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBkZWFscyB3aXRoIHZhbGlkYXRpbmcgYW5kIGxvZ2dpbmcgaW4vb3V0IHVzZXJzIGFuZFxuICogcmVzZXR0aW5nIGZvcmdvdHRlbiBwYXNzd29yZHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfdXNlcjogQmVoYXZpb3JTdWJqZWN0PFVzZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyPihudWxsKTtcbiAgICBnZXRVc2VyJCA9IHRoaXMuX3VzZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBwcml2YXRlIF9iYXNlVXJsID0gJy9hcGkvYXV0aC8nXG5cbiAgLyoqXG4gICAqIFdoZW4gYSBub24tbG9nZ2VkIGluIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGEgcGFnZSB3aGljaCByZXF1aXJlcyBsb2dnaW5nIGluLFxuICAgKiBzYXZlIHRoYXQgcGFnZSdzIHVybCBhbmQgZGlyZWN0IHVzZXIgdGhlcmUgYWZ0ZXIgdGhleSBsb2cgaW5cbiAgICovXG4gICAgcHVibGljIHJlZGlyZWN0VXJsOiBzdHJpbmcgPSAnLyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlcnZpY2VzIGB1c2VyYCB2YXJpYWJsZSB3aGljaCBpcyBzdG9yZWQgYWZ0ZXIgdXNlciBsb2dzIGluXG4gICAqXG4gICAqIEBwYXJhbSB7VXNlcn0gdXNlciAtIGN1cnJlbnQgdXNlciB3aG8gbG9nZ2VkIGluXG4gICAqIC0gb3IgYG51bGxgIHRvIHVuc2V0IHRoZSB1c2VyXG4gICAqL1xuICBzZXRVc2VyKHVzZXI6IFVzZXIpe1xuICAgIHRoaXMuX3VzZXIubmV4dCh1c2VyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgdXNlciBpbmZvcm1hdGlvbiBub3QgYXMgYW4gb2JzZXJ2YWJsZVxuICAgKiBzbyBpdCBpcyBzeW5jaHJvbm91cyBhbmQga2VlcHMgdGhlIGFwcCBjb21wb25lbnRzJyBgbmdPbkluaXRgXG4gICAqIGZ1bmN0aW9ucyBjbGVhbmVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtVc2VyfSB0aGUgY3VycmVudCB1c2VyIG9yIGBudWxsYCBpZiBubyB1c2VyIGxvZ2dlZCBpblxuICAgKi9cbiAgZ2V0VXNlcigpOiBVc2Vye1xuICAgIHJldHVybiB0aGlzLl91c2VyLmdldFZhbHVlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgdXNlciBpcyBsb2dnZWQgaW5cbiAgICpcbiAgICogQHJlcXVpcmVzIHtib29sZWFufSAtIGB0cnVlYCBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqIC0gYGZhbHNlYCBvdGhlcndpc2VcbiAgICovXG4gIGlzTG9nZ2VkSW4oKTogYm9vbGVhbntcbiAgICByZXR1cm4gKCEhdGhpcy5nZXRVc2VyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB1c2VyIGNhbiBhY2Nlc3MgdGhlIGFkbWluIHBhZ2VzXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIGB0cnVlYCBpZiB1c2VyIGlzIGluc3RyIG9yIGFkbWluXG4gICAqIC0gYGZhbHNlYCBpZiB1c2VyIGlzIG9ubHkgYSBzdHVkZW50XG4gICAqL1xuICBjYW5BY2Nlc3NBZG1pbigpOiBib29sZWFue1xuICAgIGlmKHRoaXMuZ2V0VXNlcigpKXtcbiAgICAgIHJldHVybiB0aGlzLmdldFVzZXIoKS5yb2xlID4gMFxuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byBzaWduIGEgdXNlciBpbiB1c2luZyB0aGUgcHJvdmlkZWQgY3JlZGVudGlhbHNcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGNyZWRlbnRpYWxzIC0gYHVzZXJuYW1lYCAoYXMgZW1haWwpIGFuZCBgcGFzc3dvcmRgIHRvIGJlIHRlc3RlZCBmb3IgbG9nZ2luZyBpblxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxVc2VyPn0gLSB0aGUgc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiB1c2VyXG4gICAqIGVycm9yIG1lc3NhZ2UgYE1pc3NpbmcgY3JlZGVudGlhbHNgIGlmIG5vIGVtYWlsIG9yIHBhc3N3b3JkXG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgSW52YWxpZCBwYXNzd29yZGAgaWYgcGFzc3dvcmQgaXMgaW5jb3JyZWN0XG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgVXNlciBub3QgZm91bmRgIGlmIGludmFsaWQgZW1haWxcbiAgICogLSBlcnJvciBtZXNzYWdlIGZvciBzZXJ2ZXIvZGF0YWJhc2UvYXV0aGVudGljYXRpb24gZXJyb3JcbiAgICovXG4gIHNpZ25pbihjcmVkZW50aWFsczogYW55KTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWxzKTtcbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KHRoaXMuX2Jhc2VVcmwgKyAnc2lnbmluJywgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIGNyZWF0ZSBhIG5ldyB1c2VyIHVzaW5nIHRoZSBwcm92aWRlZCB1c2VyIGRldGFpbHNcbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHVzZXIgLSB1c2VyIGRldGFpbHMgaW5jbHVkaW5nIGBmaXJzdE5hbWVgLCBgbGFzdE5hbWVgLCBgdXNlcm5hbWVgIChlbWFpbCksIGBjb3Vyc2VgLCBhbmQgYHBhc3N3b3JkYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxVc2VyPn0gLSBUaGUgbmV3IGxvZ2dlZC1pbiB1c2VyIHdoZW4gc3VjY2Vzc2Z1bGx5IGNyZWF0ZSBuZXcgdXNlclxuICAgKiAtIGVycm9yIDQwMCBpZiBlcnJyb3IgbG9nZ2luZyBpblxuICAgKiAtIGVycm9yIDUwMCBpZiBlcnJvciBjcmVhdGluZyB1c2VyXG4gICAqL1xuICBzaWdudXAodXNlcjogYW55KTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4odGhpcy5fYmFzZVVybCArICdzaWdudXAnLCBib2R5LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2lnbnMgb3V0IHRoZSB1c2VyXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IHJldHVybnMgYHRydWVgIGlmIHN1Y2Nlc3NmdWxseSBzaWduZWQgb3V0XG4gICAqL1xuICBzaWdub3V0KCk6IE9ic2VydmFibGU8YW55PntcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLl9iYXNlVXJsICsgJ3NpZ25vdXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXQgZW1haWwgYWRkcmVzcyBvZiBwb3RlbnRpYWwgdXNlciB0byBhbGxvdyB0aGF0IHVzZXJcbiAgICogdG8gcmVzZXQgdGhlaXIgcGFzc3dvcmQgaWYgdGhlIHVzZXIgZXhpc3RzXG4gICAqXG4gICAqIFRoZSBiYWNrZW5kIHRoZW4gc2VuZHMgYSBwYXNzd29yZCByZXNldCBlbWFpbCB0byB0aGVcbiAgICogZW1haWwgYWRkcmVzc1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gYm9keSAtIHJlcXVlc3QgYm9keSB0aGF0IGluY2x1ZGVzIGBlbWFpbGAgb2YgdXNlclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIFN1Y2Nlc3MgbWVzc2FnZSBpZiBwYXNzd29yZCByZXNldCBlbWFpbCBzZW50XG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgRXJyb3Igd2l0aCBzZXJ2ZXIgZW1haWwgc2VydmljZWAgaWYgcHJvYmxlbSB3aXRoIGVtYWlsIHRyYW5zcG9ydGVyXG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgTm8gYWNjb3VudCB3aXRoIHRoYXQgZW1haWwuYCBpZiBlbWFpbCBhZGRyZXNzIGRvZXNuJ3QgY29ycmVzcG9uZCB0byBhbiBleGlzdGluZyB1c2VyXG4gICAqIC0gZXJyb3IgNDIyIGZvciBvdGhlciBzZXJ2ZXIgZXJyb3JzXG4gICAqL1xuICBmb3JnZXRQYXNzd29yZChib2R5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuX2Jhc2VVcmwgKyAnZm9yZ2V0LXBhc3N3b3JkJywgYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdHMgdG8gcmVzZXQgYSB1c2VyJ3MgcGFzc3dvcmQgdXNpbmcgdGhlIGNyZWRlbnRpYWxzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBjcmVkZW50aWFscyAtIGluZm8gbmVlZGVkIHRvIHJlc2V0IHBhc3N3b3JkOiBgcGFzc3dvcmQsIGBjb25maXJtUGFzc3dvcmRgLCBhbmQgYHRva2VuYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIElmIHN1Y2Nlc3NmdWwsIHNlbmRzIHN1Y2Nlc3MgbWVzc2FnZSBgUGFzc3dvcmRzIGhhcyBiZWVuIHJlc2V0YC5cbiAgICogLSBlcnJvciBtZXNzYWdlIGBJbnZhbGlkIHRva2VuYCBpZiB0b2tlbiBkb2Vzbid0IGV4aXN0XG4gICAqIC0gZXJyb3IgbWVzc2FnZSBgVG9rZW4gaGFzIGV4cGlyZWRgIGZvciB2YWxpZCB0b2tlbnMgYnV0IHVzZXIgdG9vayB0b28gbG9uZyB0byBhdHRlbXB0IHRvIHJlc2V0XG4gICAqIC0gZXJyb3IgbWVzc2FnZSBmb3IgYWxsIG90aGVyIGVycm9yc1xuICAgKi9cbiAgcmVzZXRQYXNzd29yZChjcmVkZW50aWFsczogYW55KTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9iYXNlVXJsICsgJ3Jlc2V0LXBhc3N3b3JkJywgY3JlZGVudGlhbHMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0RHJvcERhdGEge1xuICBkYXRhOiBhbnk7XG4gIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQ7XG4gIC8vbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0RHJvcFNlcnZpY2VGYWN0b3J5KCk6IFNlbGVjdERyb3BTZXJ2aWNlIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3REcm9wU2VydmljZSgpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0RHJvcFNlcnZpY2Uge1xuICAvLyBhbGxvd2VkIGRyb3Agem9uZXM/XG4gIGN1clNvdXJjZTogc3RyaW5nO1xuICBkYXRhOiBhbnk7XG4gIG9uU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8U2VsZWN0RHJvcERhdGE+O1xuICBpc1NlbGVjdGVkOiBib29sZWFuO1xuICBlbGVtOiBIVE1MRWxlbWVudDtcblxuICBkZXNlbGVjdCgpe1xuICAgIHRoaXMuY3VyU291cmNlID0gbnVsbDtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMub25TdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xuICAgIHRoaXMucmVtb3ZlRWxlbUNsYXNzKCk7XG4gICAgdGhpcy5lbGVtPW51bGw7XG4gIH1cblxuICBzZWxlY3Qoc291cmNlTmFtZTogc3RyaW5nLCBkYXRhOiBhbnksIGh0bWxlbGVtZW50OiBIVE1MRWxlbWVudCl7XG4gICAgdGhpcy5jdXJTb3VyY2UgPSBzb3VyY2VOYW1lO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmVsZW0gPSBodG1sZWxlbWVudDtcbiAgICBpZih0aGlzLmVsZW0pXG4gICAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtb2JqZWN0Jyk7XG4gIH1cblxuICByZW1vdmVFbGVtQ2xhc3MoKTogdm9pZHtcbiAgICBpZih0aGlzLmVsZW0pXG4gICAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtb2JqZWN0Jyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9zZWxlY3QtZHJvcC9zZWxlY3QtZHJvcC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5cbi8qKlxuICogRnVuY3Rpb25zIHdoaWNoIGNvbW11bmljYXRlIHRvIGJhY2tlbmQgdG8gYWxsb3dcbiAqIHVzZXJzIHRvIHVwZGF0ZSB0aGVpciBwcm9maWxlIGFuZC9vciBjaGFuZ2UgdGhlIHBhc3N3b3JkXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIExlYWRpbmcgYmFja2VuZCB1cmwgcGF0aFxuICAgKi9cbiAgcHJpdmF0ZSBfYmFzZVVybDogc3RyaW5nID0gJy9hcGkvdXNlcnMvJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpe31cblxuICAvKipcbiAgICogRWRpdCBkZXRhaWxzIGFib3V0IHRoZSB1c2VyIHByb2ZpbGUgaW5jbHVkaW5nXG4gICAqIDEuIE5tZVxuICAgKiAyLiBFbWFpbCBhZGRyZXNzXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklEIG9mIHRoZSBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge2FueX0gZGV0YWlscyB1c2VyIGRldGFpbHMgdG8gdXBkYXRlIHdpdGhcbiAgICogZXhpc2l0aW5nIGluZm9ybWF0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFVzZXI+fSAtIFRoZSB1cGRhdGVkIHVzZXIgaW5mb3JtYXRpb25cbiAgICogLSBvciBlcnJvciBcIlVzZXIgZG9lcyBub3QgZXhpc3RcIiBpZiBub24tZXhpc3RhbnQgdXNlclxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgZWRpdFByb2ZpbGUodXNlcklkOiBudW1iZXIsIGRldGFpbHM6IGFueSk6IE9ic2VydmFibGU8VXNlcj57XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KHRoaXMuX2Jhc2VVcmwgKyB1c2VySWQsIGRldGFpbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgdXNlcidzIHBhc3N3b3JkIG9uY2UgYWxyZWFkeSBzaWduZWQgaW5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySUQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHthbnl9IGNyZWRlbnRpYWxzIC0gcGFzc3dvcmQgaW5mb3JtYXRpb25cbiAgICogLSBpbmNsdWRlczogXCJwYXNzd29yZFwiIChvbGQgcGFzc3dvcmQpIGFuZCBcIm5ld1Bhc3N3b3JkXCIgIChwYXNzd29yZCB0byB1cGRhdGUgdG8pXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFVzZXI+fSAtIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyIGp1c3QgdXBkYXRlZFxuICAgKiAtIG9yIGVycm9yIFwiVXNlciBkb2VzIG5vdCBleGlzdFwiIGlmIG5vbi1leGlzdGFudCB1c2VyXG4gICAqIC0gb3IgZXJyb3IgXCJJbmNvcnJlY3QgcGFzc3dvcmRcIiBpZiB3cm9uZyBvbGQgcGFzc3dvcmRcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIHVwZGF0ZVBhc3N3b3JkKHVzZXJJZDogbnVtYmVyLCBjcmVkZW50aWFsczogYW55KTogT2JzZXJ2YWJsZTxVc2VyPntcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4odGhpcy5fYmFzZVVybCArIHVzZXJJZCArICcvdXBkYXRlLXBhc3N3b3JkJywgY3JlZGVudGlhbHMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUuc2VydmljZS50cyIsImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTW9kYWxEaXNtaXNzUmVhc29ucyB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uL21lbmRlbHBlZGUtc2NlbmFyaW9zLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVuZGVscGVkZUxhYnJvb21Db21wb25lbnQgfSBmcm9tICcuLi9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IE1lbmRlbHBlZGVGcmlkZ2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL21lbmRlbHBlZGUtZnJpZGdlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlUGVkZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvbWVuZGVscGVkZS1wZWRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuaW1wb3J0IHsgUGVkZUltYWdlUGlwZSB9IGZyb20gJy4uLy4uLy4uL3BpcGVzL3BlZGUtaW1hZ2UucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbmRlbHBlZGUtZnJpZGdlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbXBlZGUtZnJpZGdlLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9tcGVkZS1mcmlkZ2Uuc3R5bGUuY3NzJyksIHJlcXVpcmUoJy4uL21wZWRlLXBlZGVzLnN0eWxlLmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBNZW5kZWxwZWRlRnJpZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG5cbiAgdXNlcjogVXNlcjtcblxuICAvKipcbiAgICogVGhlIGZyaWRnZSBvYmplY3RcbiAgICovXG4gIGZyaWRnZTogTWVuZGVscGVkZUZyaWRnZTtcblxuICAgLyoqXG4gICAqIGxpc3Qgb2Ygc3RyYWlucyBpbiB0aGUgZnJpZGdlLCBpbmNsdWRpbmcgZW1wdHkgb25lc1xuICAgKi9cbiAgcGVkZUxpc3Q6IE1lbmRlbHBlZGVQZWRlW107XG5cbiAgLyoqXG4gICAqIGN1cnJlbnRseSBwZWRlcyBzdHJhaW5zIGJhc2VkIG9uIHNoZWxmIG51bWJlclxuICAgKi9cbiAgY3VyclBlZGVzOiBNZW5kZWxwZWRlUGVkZVtdW107XG5cbiAgLyoqXG4gICAqIGN1cnJlbnRseSB2aXNpYmxlIHBlZGVzIGJhc2VkIG9uIHNoZWxmIG51bWJlciAxRFxuICAgKi9cbiAgY3VyclBlZGVzXzFkOiBNZW5kZWxwZWRlUGVkZVtdID0gW107XG5cbiAgLyoqXG4gICAqIG1heGltdW0gbnVtYmVyIG9mIHNoZWx2ZXMgaW4gZnJpZGdlXG4gICAqL1xuICBtYXhTaGVsZjogbnVtYmVyO1xuICAvKipcbiAgICogbnVtYmVyIG9mIHNsb3RzIHBlciBzaGVsZlxuICAgKi9cbiAgc3BvdHM6IG51bWJlcjtcblxuICAvKipcbiAgICogY3VycmVudCBzaGVsZlxuICAgKi9cbiAgc2hlbGY6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIHBvdGVudGlhbCBiYWNrZW5kIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIGlzIHRoaXMgZnJpZGdlIGJlaW5nIHVzZWQgZm9yIGEgcXVpej9cbiAgICovXG4gIGlzUXVpejogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTdGF0ZSB0byBtb25pdGlvciBpZiBjb21wb25lbnQgYWN0aXZlIHRvIG1ha2UgdW5zdWJzY3JpYmluZyB0b1xuICAgKiBtdWx0aXBsZSBzdHJlYW1zIGVhc2llclxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBPYnNlcnZlcyB0aGUgc2NlbkNvZGUgb2YgdGhlIFVSTFxuICAgKi9cbiAgcHJpdmF0ZSBwYXJhbU9ic2VydmVyOiBhbnk7XG5cbiAgcHJpdmF0ZSBuZXh0U3BvdDogbnVtYmVyO1xuXG4gIHByaXZhdGUgc2NlblNob3J0Q29kZTogYW55O1xuXG4gIHByaXZhdGUgdXNlcklkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSxcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE5nYk1vZGFsKSB7XG4gICAgdGhpcy5tYXhTaGVsZiA9IDMyO1xuICAgIHRoaXMuc3BvdHMgPSA4O1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgIC8qKlxuICAgKiBJbml0YWlsaXplIHRoZSBmcmlkZ2Ugd2hlbiBjcmVhdGluZyBjb21wb25lbnRcbiAgICogMS4gR2V0IGxvZ2dlZCBpbiB1c2VyIGFuZCBjdXJyZW50IHNjZW5hcmlvXG4gICAqIDIuIEZldGNoIHRoZSBjb3JyZXNwb25kaW5nIGZyaWRnZVxuICAgKiAzYS4gSWYgdGhlIGZyaWRnZSBkb2Vzbid0IGV4aXN0IHlldCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgKiAzYi4gSWYgdGhlIGZyaWRnZSBkb2VzIGV4aXN0LCBpbml0aWFsaXplIGl0XG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIC8vY29uc29sZS5sb2coJ25nIGluaXQuLi4uLi4nKTtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuXG4gICAgdGhpcy51c2VySWQgPSB0aGlzLnVzZXIuaWQ7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnNjZW5TaG9ydENvZGUgPSBwYXJhbXNbJ3NjZW5TaG9ydENvZGUnXTtcbiAgICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5nZXRNZW5kZWxGcmlkZ2UodGhpcy51c2VySWQsIHRoaXMuc2NlblNob3J0Q29kZSlcbiAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoZnJpZGdlKSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGZyaWRnZSlcbiAgICAgICAgICAgIHRoaXMuX2luaXRGcmlkZ2UoZnJpZGdlKTt9LFxuICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmKGVyci5zdGF0dXMgPT09IDMwNyl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjcmVhdGluZyBhIG5ldyBmcmlkZ2UnKTtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU1lbmRlbEZyaWRnZSh0aGlzLnVzZXJJZCwgdGhpcy5zY2VuU2hvcnRDb2RlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZScrIGVycik7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICB9IH1cbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGZyaWRnZSBiZWNhdXNlIHRoaXMgdXNlciBkb2Vzbid0IGhhdmUgb25lIGZvciB0aGlzIHNjZW5hcmlvXG4gICAqXG4gICAqIE9uIHN1Y2Nlc3MsIGluaWFsaXplcyBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCAtIGxvZ2dlZCBpbiB1c2VyJ3MgaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCAtIGN1cnJlbnQgc2NlbmFyaW8gaWRcbiAgICovXG4gIF9jcmVhdGVNZW5kZWxGcmlkZ2UodXNlcklkOiBudW1iZXIsIHNjZW5TaG9ydENvZGU6IHN0cmluZyl7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmNyZWF0ZU1lbmRlbEZyaWRnZSh1c2VySWQsIHNjZW5TaG9ydENvZGUpXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKGZyaWRnZSk9PntcbiAgICAgICAgLy9jb25zb2xlLmxvZygnd2UgZ290IHRoZSBuZXcgZnJpZGdlOiAnKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmcmlkZ2UpO1xuICAgICAgdGhpcy5faW5pdEZyaWRnZShmcmlkZ2UpO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHBlZGVzIGZvciB2aXNpYmxlIHNoZWxmXG4gICAqL1xuICBfY3VyclBlZGVzKCl7XG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5zaGVsZip0aGlzLnNwb3RzO1xuICAgIGxldCBlbmQgPSBzdGFydCt0aGlzLnNwb3RzO1xuICAgIHRoaXMuY3VyclBlZGVzXzFkID0gdGhpcy5wZWRlTGlzdC5zbGljZShzdGFydCxlbmQpO1xuICAgIC8vdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLnNldFF1aXpQZWRlcyh0aGlzLmN1cnJQZWRlc18xZCk7XG4gICAgdmFyIGluZDogbnVtYmVyID0gMDtcblxuICAgIHRoaXMuY3VyclBlZGVzID0gW107XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCAodGhpcy5zcG90cy8yKSA7IGorKyl7XG4gICAgICB0aGlzLmN1cnJQZWRlc1tqXSA9IFtdO1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCAyOyBrKyspe1xuICAgICAgICB0aGlzLmN1cnJQZWRlc1tqXVtrXSA9IHRoaXMuY3VyclBlZGVzXzFkW2luZF07XG4gICAgICAgIGluZCsrO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKCdzZXR0aW5nIGN1cnJwZWRlcycpO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5jdXJyUGVkZXMpO1xuXG4gIH1cblxuICAvKipcbiAgICogSW50aWFsaXplcyB0aGUgZnJpZGdlIGFuZCBjb21wb25lbnQgdmFyaWFibGVzIHJlbGF0ZWQgdG8gd2hpY2ggc3RyYWlucyBhcmVcbiAgICogdmlzaWJsZSBiYXNlZCBvbiB0aGUgY3VycmVudCBzaGVsZlxuICAgKlxuICAgKiBAcGFyYW0ge0ZyaWRnZX0gbmV3RnJpZGdlIC0gZnJpZGdlIG9iamVjdCB0byBiZSBpbml0YWxpemVkXG4gICAqL1xuICBfaW5pdEZyaWRnZShuZXdGcmlkZ2U6IE1lbmRlbHBlZGVGcmlkZ2Upe1xuICAgIHRoaXMuZnJpZGdlID0gbmV3RnJpZGdlO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5mcmlkZ2UpO1xuICAgIHRoaXMucGVkZUxpc3QgPSB0aGlzLl9maWxsUGVkZXMobmV3RnJpZGdlLnBlZGVzKTtcbiAgICB0aGlzLl9jdXJyUGVkZXMoKTtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2Uuc2V0RnJpZGdlKG5ld0ZyaWRnZSk7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLnNldFNjZW5hcmlvKG5ld0ZyaWRnZS5nZW5vRmFjdHMpO1xuICAgIHRoaXMuaXNRdWl6ID0gbmV3RnJpZGdlLmZpcnN0VHJhaXRGb3JRdWl6ICE9PSB1bmRlZmluZWQ7XG4gICAgLypcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2Uuc2V0RnJpZGdlSWQobmV3RnJpZGdlLmlkKTtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2Uuc2V0Rmlyc3RUcmFpdEZvclF1aXoobmV3RnJpZGdlLmZpcnN0VHJhaXRGb3JRdWl6KTtcbiAgICBpZih0aGlzLmZyaWRnZS5xdWl6U2NvcmUgJiYgdGhpcy5mcmlkZ2UucXVpelNjb3JlLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoJ1FVSVogTk9UIFNVQk1JVFRFRCBZRVQnKSl7XG4gICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2Uuc2V0UXVpekRvbmUoZmFsc2UpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLnNldFF1aXpEb25lKHRydWUpO1xuICAgIH0qL1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGxzIGluIHRoZSBlbXB0eSBzbG90cyB3aXRoIFwiZW1wdHlcIiBwaGFnZSBvYmplY3RzXG4gICAqXG4gICAqIEBwYXJhbSB7RnJpZGdlUGhhZ2VbXX0gZnJpZGdlU3RyYWlucyAtIGFycmF5IG9mIHN0cmFpbnMgYWN0dWFsbHkgaW4gdGhlIGZyaWRnZVxuICAgKlxuICAgKiBAcmV0dXJucyB7RnJpZGdlUGhhZ2VbXX0gYXJyYXkgb2YgYWxsIHNsb3RzIGluIGZyaWRnZSwgaW5jbHVkaW5nIGVtcHR5XG4gICAqL1xuICBfZmlsbFBlZGVzKGZyaWRnZVBlZGVzOiBNZW5kZWxwZWRlUGVkZVtdKTogTWVuZGVscGVkZVBlZGVbXXtcbiAgICB2YXIgb3V0OiBNZW5kZWxwZWRlUGVkZVtdID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubWF4U2hlbGYqdGhpcy5zcG90czsgaSsrKXtcbiAgICAgIG91dC5wdXNoKHtidWdJRDogaSwgZ2Vub3R5cGU6IG51bGwsIHBoZW5vdHlwZTogbnVsbCwgdXNlcklkOiBudWxsLCBpc0ZlbWFsZTogbnVsbCwgc2NlbkNvZGU6IG51bGwsIGlkOiBudWxsfSk7XG4gICAgfVxuICAgIHRoaXMubmV4dFNwb3QgPSBmcmlkZ2VQZWRlc1swXS5idWdJRCArIDE7XG4gICAgbGV0IG5vT3JpZ2luYWxQZWRlcyA9IHRoaXMuc2NlblNob3J0Q29kZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKCdRVUlaJyk/ODo2XG4gICAgLy8gYWRkIG9yaWdpbmFsIHBlZGVzXG4gICAgZm9yKGxldCBpPTA7IGkgPCBmcmlkZ2VQZWRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgbiA9IGZyaWRnZVBlZGVzW2ldLmJ1Z0lEO1xuICAgICAgb3V0W25dID0gZnJpZGdlUGVkZXNbaV07XG4gICAgICBpZiggaSA8IG5vT3JpZ2luYWxQZWRlcyl7XG4gICAgICAgIG91dFtuXS5jYW5EZWxldGUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0W25dLmNhbkRlbGV0ZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIHRoaXMubmV4dFNwb3QgPSAobiA+PSB0aGlzLm5leHRTcG90ID8gbisxIDogdGhpcy5uZXh0U3BvdCk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2Ugb3IgZGVjcmVhc2UgdmlzaWJsZSBzaGVsZiB0aGVuIHVwZGF0ZSB0aGUgdmlzaWJsZSBzdHJhaW5zXG4gICAqXG4gICAqIENhbGxlZCBieSBgKGNsaWNrKWAgb2YgcHJldi9uZXh0IGJ1dHRvbnNcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluYyAtIGFtb3VudCB0byBjaGFuZ2Ugc2hlbGYgYnlcbiAgICovXG4gIGNoYW5nZVNoZWxmKGluYzogbnVtYmVyKXtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIGlmKHRoaXMuc2hlbGYgPD0gdGhpcy5tYXhTaGVsZi0xICYmIGluYyA9PT0gMSl7XG4gICAgICB0aGlzLnNoZWxmKys7XG4gICAgICB0aGlzLl9jdXJyUGVkZXMoKTtcbiAgICB9IGVsc2UgaWYodGhpcy5zaGVsZiA+IDAgJiYgaW5jID09PSAtMSl7XG4gICAgICB0aGlzLnNoZWxmLS07XG4gICAgICB0aGlzLl9jdXJyUGVkZXMoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSBsYWJyb29tOiBNZW5kZWxwZWRlTGFicm9vbUNvbXBvbmVudDtcblxuICBASG9zdExpc3RlbmVyKCdzZW5kUGVkZScpXG4gIHNlbmRQZWRlKHBlZGU6IE1lbmRlbHBlZGVQZWRlKXtcbiAgICAvL2NvbnNvbGUubG9nKCdjbGljayBldmVudCBjYWxsZWQnKTtcbiAgICB0aGlzLmxhYnJvb20uZHJvcFBlZGUocGVkZSlcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RlbGV0ZVBlZGUnKVxuICBkZWxldGVQZWRlKHBlZGU6IE1lbmRlbHBlZGVQZWRlKXtcbiAgICAvL2NvbnNvbGUubG9nKCdjbGljayBldmVudCBjYWxsZWQnKTtcbiAgICBsZXQgcGVkZVRvRGVsZXRlOiBNZW5kZWxwZWRlUGVkZSA9IHtcbiAgICAgIGJ1Z0lEOiBwZWRlLmJ1Z0lELFxuICAgICAgdXNlcklkOiBwZWRlLnVzZXJJZCxcbiAgICAgIGlkOiBwZWRlLmlkLFxuICAgICAgc2NlbkNvZGU6IHBlZGUuc2NlbkNvZGUsXG4gICAgICBpc0ZlbWFsZTogcGVkZS5pc0ZlbWFsZSxcbiAgICAgIGdlbm90eXBlOiBwZWRlLmdlbm90eXBlLFxuICAgICAgcGhlbm90eXBlOiBwZWRlLnBoZW5vdHlwZVxuICAgIH1cbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZGVsZXRlUGVkZSh0aGlzLnVzZXJJZCwgdGhpcy5zY2VuU2hvcnRDb2RlLCBwZWRlVG9EZWxldGUpXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKGZyaWRnZSk9PntcbiAgICAgICAgLy9jb25zb2xlLmxvZygnd2UgZ290IHRoZSBuZXcgYWZ0ZXIgZGVsZXRpbmcgZnJpZGdlOiAnKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmcmlkZ2UpO1xuICAgICAgdGhpcy5faW5pdEZyaWRnZShmcmlkZ2UpO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0b3JlUGVkZShwZWRlVG9TdG9yZTogTWVuZGVscGVkZVBlZGUpe1xuICAgIC8vcGVkZVRvU3RvcmVMWydidWdJRCddID0gdGhpcy5mcmlkZ2UucGVkZXMubGVuZ3RoO1xuICAgIGxldCBwZWRlVG9TdG9yZUw6IE1lbmRlbHBlZGVQZWRlID0ge1xuICAgICAgYnVnSUQ6IHRoaXMubmV4dFNwb3QsXG4gICAgICB1c2VySWQ6IHBlZGVUb1N0b3JlLnVzZXJJZCxcbiAgICAgIGlkOiBwZWRlVG9TdG9yZS5pZCxcbiAgICAgIHNjZW5Db2RlOiBwZWRlVG9TdG9yZS5zY2VuQ29kZSxcbiAgICAgIGlzRmVtYWxlOiBwZWRlVG9TdG9yZS5pc0ZlbWFsZSxcbiAgICAgIGdlbm90eXBlOiBwZWRlVG9TdG9yZS5nZW5vdHlwZSxcbiAgICAgIHBoZW5vdHlwZTogcGVkZVRvU3RvcmUucGhlbm90eXBlXG4gICAgfVxuICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5pbnNlcnRQZWRlKHBlZGVUb1N0b3JlTCwgdGhpcy5mcmlkZ2UsIHRoaXMuc2NlblNob3J0Q29kZSlcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgoZnJpZGdlKT0+e1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd3ZSBnb3QgdGhlIG5ldyBhZnRlciBpbnNlcnRlZCBmcmlkZ2U6ICcpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGZyaWRnZSk7XG4gICAgICB0aGlzLl9pbml0RnJpZGdlKGZyaWRnZSk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2aXNpYmxlIHNoZWxmIHRvIGEgc3BlY2lmaWMgbnVtYmVyO1xuICAgKiB1c2VkIHRvIGp1bXAgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kXG4gICAqXG4gICAqIENhbGxlZCBieSAoY2xpY2spIG9mIGZpcnN0L2xhc3QgYnV0dG9uc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gblNoZWxmIC0gc2hlbGYgdG8gZ28gdG9cbiAgICovXG4gIHNldFNoZWxmKG5TaGVsZjogbnVtYmVyKXtcbiAgICB0aGlzLnNoZWxmID0gblNoZWxmO1xuICAgIHRoaXMuX2N1cnJQZWRlcygpO1xuICB9XG4gLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyB0aGUgY29tcG9uZW50LCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzXG4gICAqIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2UuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUmVzb2x2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDcmlja2V0U2VydmljZSB9IGZyb20gJy4vY3JpY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zY2VuYXJpby5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFJlc29sdmVzIGEgcm91dGUgVVJMIHRvIGdldCB0aGUgc2NlbmFyaW8gaWQgKGZyb20gdGhlIHVybClcbiAqIHRoZW4gdXNlcyB0aGF0IHRvIGdldCB0aGUgc2NlbmFyaW8gbGFiZWwgdXNpbmcgc2NlbmFyaW8gc2VydmljZVxuICpcbiAqIFRoaXMgaXMgdXNlZCB0byBnZW5lcmF0ZSBodW1hbi1yZWFkYWJsZSBicmVhZGNydW1iIGxhYmVsc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9SZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8U2NlbmFyaW8+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IENyaWNrZXRTZXJ2aWNlKSB7IH1cblxuICAvKipcbiAgICogTWV0aG9kIHJlcXVpcmVkIGJ5IGltcGxlbWVudGF0aW9uXG4gICAqIEJhc2VkIG9uIHRoZSBpZGVudGlmaWVkIHNjZW5Db2RlIGZyb20gdGhlIFVSTCwgdXNlIHRoZSBzZXJ2aWNlIGdvIGdldCB0aGUgc2NlbmFyaW8gZGV0YWlscyBhbmQgc2VuZCBiYWNrIHRvIGNsaWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIGN1cnJlbnQgcm9vdCBVUkxcbiAgICogQHBhcmFtIHtSb3V0ZXJTdGF0ZVNhbnBzaG90fSBjdXJyZW50IHJvdXRlIHNuYXBzaG90XG4gICAqXG4gICAqIEByZXR1cm5zIHtTY2VuYXJpb30gLSBUaGUgc2NlbmFyaW8gb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gZG8gdGhlIHVybCBwYXJhbSBJRCBpZiBpdCBleGlzdHNcbiAgIC0gb3IgZW1wdHkgc2NlbmFyaW8gaWYgaXQgZG9lcyBub3QgZXhpc3RcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8U2NlbmFyaW8+IHtcblxuICAgIGNvbnN0IHNjZW5Db2RlID0gcm91dGUucGFyYW1zWydzY2VuSWQnXTtcblxuICAgIGlmIChzY2VuQ29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NjZW5hcmlvU2VydmljZS5nZXRTY2VuYXJpbyhzY2VuQ29kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxTY2VuYXJpbz4oKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2NyaWNrZXQvc2NlbmFyaW8ucmVzb2x2ZXIudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSZXNvbHZlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5zZXJ2aWNlJztcbmltcG9ydCB7IE1lbmRlbHBlZGVTY2VuYXJpbyB9IGZyb20gJy4uL2ludGVyZmFjZXMvbWVuZGVscGVkZS1zY2VuYXJpb3MuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBSZXNvbHZlcyBhIHJvdXRlIFVSTCB0byBnZXQgdGhlIHNjZW5hcmlvIGlkIChmcm9tIHRoZSB1cmwpXG4gKiB0aGVuIHVzZXMgdGhhdCB0byBnZXQgdGhlIHNjZW5hcmlvIGxhYmVsIHVzaW5nIHNjZW5hcmlvIHNlcnZpY2VcbiAqXG4gKiBUaGlzIGlzIHVzZWQgdG8gZ2VuZXJhdGUgaHVtYW4tcmVhZGFibGUgYnJlYWRjcnVtYiBsYWJlbHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lbmRlbHBlZGVTY2VuYXJpb1Jlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxNZW5kZWxwZWRlU2NlbmFyaW8+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgcmVxdWlyZWQgYnkgaW1wbGVtZW50YXRpb25cbiAgICogQmFzZWQgb24gdGhlIGlkZW50aWZpZWQgc2NlbkNvZGUgZnJvbSB0aGUgVVJMLCB1c2UgdGhlIHNlcnZpY2UgZ28gZ2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzIGFuZCBzZW5kIGJhY2sgdG8gY2xpZW50XG4gICAqXG4gICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gcm91dGUgY3VycmVudCByb290IFVSTFxuICAgKiBAcGFyYW0ge1JvdXRlclN0YXRlU2FucHNob3R9IGN1cnJlbnQgcm91dGUgc25hcHNob3RcbiAgICpcbiAgICogQHJldHVybnMge1NjZW5hcmlvfSAtIFRoZSBzY2VuYXJpbyBvYmplY3QgY29ycmVzcG9uZGluZyB0byBkbyB0aGUgdXJsIHBhcmFtIElEIGlmIGl0IGV4aXN0c1xuICAgLSBvciBlbXB0eSBzY2VuYXJpbyBpZiBpdCBkb2VzIG5vdCBleGlzdFxuICAgKi9cbiAgcHVibGljIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxNZW5kZWxwZWRlU2NlbmFyaW8+IHtcblxuICAgIGNvbnN0IHNjZW5TaG9ydENvZGUgPSByb3V0ZS5wYXJhbXNbJ3NjZW5TaG9ydENvZGUnXTtcblxuICAgIGlmIChzY2VuU2hvcnRDb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmdldFNjZW5hcmlvKHNjZW5TaG9ydENvZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8TWVuZGVscGVkZVNjZW5hcmlvPigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9tZW5kZWxwZWRlLXNjZW5hcmlvLnJlc29sdmVyLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogV2hlbiBVUkwgZ29lcyB0byBhIHBhZ2UgdGhhdCBkb2Vzbid0IGV4aXN0O1xuICogVGhpcyBpcyBzaW1wbGUsIHZpc3VhbCBjb21wb25lbnQgbmVlZGVkIHRvIGdldCB0aGUgdGVtcGxhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1ub3QtZm91bmQnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9wYWdlLW5vdC1mb3VuZC50ZW1wbGF0ZS5odG1sJyksXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZU5vdEZvdW5kQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKCl7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBob21lIGxhbmRpbmcgcGFnZSB3aGVuIGdvaW5nIHRvIHRoZSB3ZWJzaXRlXG4gKlxuICogTWFpbmx5IGEgdmlldyBjb21wb25lbnQsIGJ1dCBzb21lIGFzcGVjdHMgYXJlIGRlcGVuZGVudFxuICogb24gaWYgYSB1c2VyIGlzIGxvZ2dlZCBpbiBhbmQgdGhlIHVzZXIgcm9sZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaG9tZS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vaG9tZS5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBUaGUgbG9nZ2VkIGluIHVzZXIsIGlmIGFueVxuICAgKi9cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKXt9XG5cbiAgLyoqXG4gICAqIFdoZW4gaW50aWFsaXppbmcgY29tcG9uZW50LCBnZXQgdGhlIGxvZ2dlZCBpbiB1c2VyLCBpZiBhbnlcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgdGhlIGNvbXBvbmVudCwgdW5zZXQgdGhlIHVzZXIgdmFyaWFibGVcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy51c2VyID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2VsZWN0RHJvcFNlcnZpY2UsIFNlbGVjdERyb3BEYXRhIH0gZnJvbSAnLi9zZWxlY3QtZHJvcC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbc2VsZWN0LWRyb3BwYWJsZV0nfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REcm9wQ29tcG9uZW50IHtcbiAgICBfZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgX2RlZmF1bHRDdXJzb3I6IHN0cmluZztcblxuICAgIHByaXZhdGUgX3NlbGVjdEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzZXQgc2VsZWN0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdEVuYWJsZWQgPSAhIWVuYWJsZWQ7XG4gICAgfVxuICAgIGdldCBzZWxlY3RFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0RW5hYmxlZDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfZHJvcERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2V0IGRyb3BEaXNhYmxlZChkaXNhYmxlOiBib29sZWFuKXtcbiAgICAgIHRoaXMuX2Ryb3BEaXNhYmxlZCA9ICEhZGlzYWJsZTtcbiAgICB9XG4gICAgZ2V0IGRyb3BEaXNhYmxlZCgpOiBib29sZWFue1xuICAgICAgcmV0dXJuIHRoaXMuX2Ryb3BEaXNhYmxlZDtcbiAgICB9XG5cbiAgICAgQElucHV0KFwic2VsZWN0RW5hYmxlZFwiKSBzZXQgc2VsZWN0YWJsZSh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgICB0aGlzLnNlbGVjdEVuYWJsZWQgPSAhIXZhbHVlO1xuICAgICB9XG4gICAgIEBJbnB1dChcImRyb3BEaXNhYmxlZFwiKSBzZXQgdW5kcm9wcGFibGUodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAgdGhpcy5kcm9wRGlzYWJsZWQgPSAhIXZhbHVlO1xuICAgICB9XG5cbiAgICAgQElucHV0KCkgYWxsb3dEcm9wOiAoZHJvcERhdGE6IGFueSkgPT4gYm9vbGVhbjtcbiAgICAgQElucHV0KFwic2VsZWN0RGF0YVwiKSBkYXRhOiBhbnk7XG4gICAgIEBJbnB1dCgpIHNvdXJjZU5hbWU6IHN0cmluZztcblxuICAgICBAT3V0cHV0KCkgb25Ecm9wU3VjY2VzczogRXZlbnRFbWl0dGVyPFNlbGVjdERyb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RHJvcERhdGE+KCk7XG5AT3V0cHV0KFwib25TdWNjZXNzXCIpIG9uU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8U2VsZWN0RHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3REcm9wRGF0YT4oKTtcbkBPdXRwdXQoKSBvbkVycm9yOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBfc2VsZWN0RHJvcFNlcnZpY2U6IFNlbGVjdERyb3BTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICAgICAgLy8gQXNzaWduIGRlZmF1bHQgY3Vyc29yIHVubGVzcyBvdmVycmlkZGVuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmKCF0aGlzLmRyb3BEaXNhYmxlZCAmJiAhdGhpcy5zZWxlY3RFbmFibGVkKVxuICAgICAgICAgIHRoaXMuX2VsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5fZGVmYXVsdEN1cnNvcjsgIC8vIHNldCBkZWZhdWx0IGN1cnNvciBvbiBvdXIgZWxlbWVudFxuXG4gICAgICAgIHRoaXMuX2VsZW0ub25tb3VzZWVudGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2VsZW0ub25tb3VzZW91dCA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuX29uTW91c2VPdXQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsaWNrIGV2ZW50cyAtIGJvdGggc2VsZWN0IGFuZCBkcm9wXG4gICAgICB0aGlzLl9lbGVtLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+e1xuICAgICAgICB0aGlzLl9vbkNsaWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAvLyBOZWNlc3NhcnkuIEFsbG93cyB1cyB0byBkcm9wLlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICAvLyBpZiBub3RoaW5nIHNlbGVjdGVkIGFuZCBzZWxlY3RFbmFibGVkIC0+IHNlbGVjdFxuICAgICAgaWYodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuaXNTZWxlY3RlZCA9PT0gZmFsc2UgJiYgdGhpcy5zZWxlY3RFbmFibGVkKXtcbiAgICAgICAgLy90aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICAgICAgICB0aGlzLl9vblNlbGVjdENhbGxiYWNrKGV2ZW50KTtcbiAgICB9IC8vIGlmIHdlIHJlLWNsaWNrZWQgdGhlIG9iamVjdCAtPiBkZXNlbGVjdFxuICAgIGVsc2UgaWYodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuaXNTZWxlY3RlZCAmJiB0aGlzLnNvdXJjZU5hbWUgPT09IHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmN1clNvdXJjZSl7XG4gICAgICAgIC8vdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1vYmplY3QnKTtcbiAgICAgICAgdGhpcy5fb25EZXNlbGVjdENhbGxiYWNrKGV2ZW50KTtcbiAgICB9IC8vIGlmIHdlIGNhbiBkcm9wLCB0aGVuIGRyb3BcbiAgICBlbHNlIGlmKHRoaXMuX2lzRHJvcEFsbG93ZWQoZXZlbnQpKXtcbiAgICAgIC8vdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1vYmplY3QnKTtcbiAgICAgIHRoaXMuX29uRHJvcENhbGxiYWNrKGV2ZW50KTtcbiAgICB9IC8vIGlmIHNvbWV0aGluZyBzZWxlY3RlZCwgc2VsZWN0IHRoaXMgaW5zdGVhZFxuICAgIGVsc2UgaWYodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuaXNTZWxlY3RlZCAmJiB0aGlzLnNlbGVjdEVuYWJsZWQpe1xuICAgICAgLy90aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLW9iamVjdCcpO1xuICAgICAgLy8gdXBkYXRlIHRvIHJlbW92ZSBzZWxlY3RlZC1jbGFzcyBvbiBwcmV2aW91c2x5IHNlbGVjdGVkIGVsZW1cbiAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLnJlbW92ZUVsZW1DbGFzcygpO1xuICAgICAgdGhpcy5fb25TZWxlY3RDYWxsYmFjayhldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uRXJyb3JDYWxsYmFjayhldmVudCk7XG4gICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uTW91c2VFbnRlcihldmVudDogRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdvdmVyLl9pc0Ryb3BBbGxvd2VkJywgdGhpcy5faXNEcm9wQWxsb3dlZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNEcm9wQWxsb3dlZChldmVudCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKCdkcm9wLW9iamVjdCcpO1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IGlzIG92ZXIgdGhlIHNhbWUgc291cmNlIGVsZW1lbnQgLSBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5lY2Vzc2FyeS4gQWxsb3dzIHVzIHRvIGRyb3AuXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgcHJpdmF0ZSBfb25Nb3VzZU91dChldmVudDogRXZlbnQpe1xuICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wLW9iamVjdCcpO1xuICAgIH1cblxuICAgIGRldGVjdENoYW5nZXMgKCkge1xuICAgICAgICAvLyBQcm9ncmFtbWF0aWNhbGx5IHJ1biBjaGFuZ2UgZGV0ZWN0aW9uIHRvIGZpeCBpc3N1ZSBpbiBTYWZhcmlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIHRoaXMuX2NkciAmJiAhKHRoaXMuX2NkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjUwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0Ryb3BBbGxvd2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIEZpcnN0LCBpZiBgYWxsb3dEcm9wYCBpcyBzZXQsIGNhbGwgaXQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlXG4gICAgICAgICAgICBpZih0aGlzLmRyb3BEaXNhYmxlZCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd0Ryb3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxvd0Ryb3AodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcHJldmVudEFuZFN0b3AoZXZlbnQ6IEV2ZW50KTogYW55IHtcbiAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgX29uRXJyb3JDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uRXJyb3IuZW1pdCgnVGhlcmUgd2FzIGFuIGVycm9yJyk7XG4gICAgdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZGVzZWxlY3QoKTtcbiAgfVxuXG4gICAgX29uRHJvcENhbGxiYWNrKCBldmVudDogTW91c2VFdmVudCApe1xuICAgICAgbGV0IGRhdGFUcmFuc2ZlciA9IChldmVudCBhcyBhbnkpLmRhdGFUcmFuc2ZlcjtcbiAgICAgIGlmKHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmlzU2VsZWN0ZWQpe1xuICAgICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3MuZW1pdCh7ZGF0YTogdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcbiAgICAgICAgaWYodGhpcy5fc2VsZWN0RHJvcFNlcnZpY2Uub25TdWNjZXNzQ2FsbGJhY2spe1xuICAgICAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLm9uU3VjY2Vzc0NhbGxiYWNrLmVtaXQoe2RhdGE6IHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLmRhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZGVzZWxlY3QoKTtcblxuICAgICAgfVxuICAgIH1cblxuICAgIF9vbkRlc2VsZWN0Q2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpe1xuICAgICAgdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZGVzZWxlY3QoKTtcbiAgICB9XG5cbiAgICBfb25TZWxlY3RDYWxsYmFjayhldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZighdGhpcy5zb3VyY2VOYW1lICYmICh0aGlzLmRhdGEuc291cmNlIHx8IHRoaXMuZGF0YS5zcmMpKXtcbiAgICAgICAgICB0aGlzLnNvdXJjZU5hbWUgPSB0aGlzLmRhdGEuc291cmNlID8gdGhpcy5kYXRhLnNvdXJjZSA6IHRoaXMuZGF0YS5zcmM7XG4gICAgICAgIH0gZWxzZSBpZighdGhpcy5zb3VyY2VOYW1lKXtcbiAgICAgICAgICB0aGlzLnNvdXJjZU5hbWUgPSAnJ1xuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5fc2VsZWN0RHJvcFNlcnZpY2UuZWxlbSA9IHRoaXMuX2VsZW07XG4gICAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLnNlbGVjdCh0aGlzLnNvdXJjZU5hbWUsIHRoaXMuZGF0YSwgdGhpcy5fZWxlbSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdERyb3BTZXJ2aWNlLm9uU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vblN1Y2Nlc3NDYWxsYmFjaztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3AuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGVDaGlsZCwgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIEd1YXJkIHRoZSBhZG1pbiBwYXRocyBzbyBvbmx5IHVzZXJzIHdpdGggYGFkbWluYCBvciBgaW5zdHJgXG4gKiByb2xlIGNhbiBhY2Nlc3MgdGhlIHJvdXRlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZG1pbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGVDaGlsZCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdXNlciBjYW4gYWN0aXZhdGUgdGhlIHJvdXRlIGJhc2VkIG9uIHRoZWlyIHJvbGVcbiAgICpcbiAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSByb3V0ZSAtIHJvdXRlIFVSTCBhdCB0aGUgbW9tZW50XG4gICAqIEBwYXJhbSB7Um91dGVyU3RhdGVTbmFwc2hvdH0gc3RhdGUgLSByb3V0ZXIgc3RhdGU7IG5lZWRlZCB0byBpbXBsZW1lbnQgaW50ZXJmYWNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIGB0cnVlYCBpZiB1c2VyIGlzIGBhZG1pbmAgb3IgYGluc3RyYFxuICAgKiAtIGBmYWxzZWAgaWYgdXNlciBpcyBvbmx5IGEgYHN0dWRlbnRgXG4gICAqL1xuICBjYW5BY3RpdmF0ZUNoaWxkKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGxldCB1cmw6IHN0cmluZyA9IHN0YXRlLnVybDtcblxuICAgIGxldCByb2xlOiBib29sZWFuID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmNhbkFjY2Vzc0FkbWluKCk7XG4gICAgaWYocm9sZSlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VXJsID0gdXJsO1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL25vdC1hdXRoJ10pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4uZ3VhcmQuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5cbi8qKlxuICogRW50cmFuY2UgY29tcG9uZW50IGZvciBhZG1pbiBmZWF0dXJlc1xuICogTWFpbmx5LCBpdCBpcyBhIGNhcmQgdGhhdCBhbGxvd3MgbmF2aWdhdGlvbiBiZXR3ZWVuIGNvdXJzZS1yZWxhdGVkXG4gKiBpbmZvIGFuZCBzdHVkZW50LXJlbGF0ZWQgaW5mb1xuICogQ29udGVudCBvZiB0aGUgY2FyZCBpcyBkZXRlcm1pbmVkIGJ5IHJvdXRlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZG1pbicsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2FkbWluLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIExvZ2dlZCBpbiB1c2VyXG4gICAqL1xuICBwcml2YXRlIGFkbWluVXNlcjogVXNlcjtcbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICl7fVxuXG4gIC8qKlxuICAgKiBXaGVuIGluaXRpYWxpemluZyB0aGUgY29tcG9uZW50LCBnZXQgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlcidzIGluZm9ybWF0aW9uXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuYWRtaW5Vc2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBIHZpZXcgY29tcG9uZW50IHRoYXQgaXMgdmlzaWJsZSB3aGVuIGdvaW5nIHRvIHRoZSBtYWluIGFkbWluIHBhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRtaW4taG9tZScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2FkbWluLWhvbWUudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgQWRtaW5Ib21lQ29tcG9uZW50e31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2FkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBIGJhc2ljIHZpZXcgY29tcG9uZW50IHdoZW4gdXNlciB0cmllcyB0byBhY2Nlc3MgYW4gYWRtaW5cbiAqIHBhZ2UgYnV0IGRvZXMgbm90IGhhdmUgYWRtaW4gYWNjZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdC1hdXRoJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbm90LWF1dGgudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgTm90QXV0aENvbXBvbmVudHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG4vKipcbiAqIENvbXBvbmVudCBmb3IgZXhpc3RpbmcgdXNlcnMgdG8gc2lnbiBpbiBhbmQgYmUgYWJsZVxuICogdG8gYWNjZXNzIHRoZWlyIHNjZW5hcmlvcy9mcmlkZ2VzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2lnbmluJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zaWduaW4udGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIExvZ2luIGNyZWRlbnRpYWxzIGZvciB1c2VyIGluY2x1ZGluZyBgdXNlcm5hbWVgIChlbWFpbCkgYW5kIGBwYXNzd29yZGBcbiAgICovXG4gIHByaXZhdGUgY3JlZGVudGlhbHM6IEZvcm1Hcm91cDtcbiAgLyoqXG4gICAqIEF1dGhlbnRpY2F0aW9uIHNlcnZpY2Ugc3Vic2NyaXB0aW9uIGZyb20gd2hlbiB0cnlpbmcgdG8gbG9naW4gdGhlIHVzZXJcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIC8qKlxuICAqIEludGlhbGl6ZSB0aGUgZm9ybSBncm91cCBvbiBjb21wb25lbnQgY3JlYXRpb25cbiAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgdXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbCgnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pLFxuICAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pLFxuICB9KTtcbiAgfVxuXG4gIGdldCB1c2VybmFtZSgpIHsgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KCd1c2VybmFtZScpO31cbiAgZ2V0IHBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoJ3Bhc3N3b3JkJyk7fVxuXG4gIC8qKlxuICAgKiBVcG9uIGZvcm0gc3VibWlzc2lvbiwgYXR0ZW1wdHMgdG8gc2lnbiBpbiB0aGUgdXNlciB3aXRoIGBjcmVkZW50aWFsc2AgKHVzaW5nIHRoZSBzZXJ2aWNlKVxuICAgKlxuICAgKiBXaGVuIHN1Y2Nlc3NmdWwsIG5hdmlnYXRlIHRvXG4gICAqIC0gdGhlIHJlZGlyZWN0IFVSTCBpZiBzZXQgKHdoZW4gbm9uLWxvZ2dlZCBpbiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBhIHBhZ2UgdGhhdCByZXF1aXJlZCBsb2dnaW5nIGluKVxuICAgKiAtIHRoZSBob21lIHBhZ2UgaWYgcmVkaXJlY3QgVVJMIGlzIG5vdCBzZXRcbiAgICpcbiAgICogV2hlbiB1bnN1Y2Nlc3NmdWwsIGRpc3BsYXkgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgICBzaWduaW4oKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgLnNpZ25pbih0aGlzLmNyZWRlbnRpYWxzLnZhbHVlKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5zZXRVc2VyKHJlc3VsdCk7XG4gICAgICAgICAgbGV0IHJlZGlyZWN0ID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VXJsID8gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VXJsIDogJy8nO1xuICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbcmVkaXJlY3RdKTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgKiBHZXQgdGhlIGZvcm0gaW5wdXQgQ1NTIGNsYXNzZXMgc3R5bGluZyB0byBwcm92aWRlIGZlZWRiYWNrIHRvIHVzZXJcbiAgKiB3aGV0aGVyIGlucHV0IGlzIHZhbGlkIG9uIG5vdFxuICAqXG4gICogQWx3YXlzIGhhcyBgLmZvcm0tY29udHJvbGAgdGhlbiBgLmlzLWludmFsaWRgIG9yIGAuaXMtdmFsaWRgIGFyZSBzZXQgb25jZSBpbnB1dCBoYXMgYmVlbiB0b3VjaGVkXG4gICpcbiAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybUxhYmVsIC0gZm9ybSBncm91cCBuYW1lIGxvb2stdXAgaW5wdXQgc3RhdGVcbiAgKlxuICAqIEByZXR1cm5zIHtPYmplY3R9IENTUyBjbGFzc2VzIHdoaWNoIGFwcGx5IHRvIHRoaXMgaW5wdXRcbiAgKi9cbiAgZ2V0SW5wdXRDbGFzcyhmb3JtTGFiZWw6IHN0cmluZykge1xuICAgIGxldCBvdXQgPSB7J2Zvcm0tY29udHJvbCc6IHRydWV9O1xuICAgIGlmKHRoaXMuY3JlZGVudGlhbHMgJiYgdGhpcy5jcmVkZW50aWFscy5nZXQoZm9ybUxhYmVsKSl7XG4gICAgICBsZXQgYWMgPSB0aGlzLmNyZWRlbnRpYWxzLmdldChmb3JtTGFiZWwpO1xuICAgICAgaWYoYWMuZGlydHkgfHwgYWMudG91Y2hlZCl7XG4gICAgICAgIG91dFsnaXMtaW52YWxpZCddID0gYWMuaW52YWxpZDtcbiAgICAgICAgb3V0Wydpcy12YWxpZCddID0gYWMudmFsaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc2N0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSB0aGUgYXV0aGVudGljYXRpb24gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9hZG1pbi9jb3Vyc2UvY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJ1xuaW1wb3J0IHsgcGFzc3dvcmRNYXRjaFZhbGlkYXRvciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25maXJtLXBhc3N3b3JkLnZhbGlkYXRvcic7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgYWxsb3dzIG5ldyB1c2VycyB0byBzaWduIHVwIHRvIHVzZSBDcmlja2V0LlxuICogVXNlcyBlbWFpbCBhcyB1c2VybmFtZSBhbmQgaW5jbHVkZXMgc2V2ZXJhbCBlcnJvclxuICogY2hlY2tzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2lnbnVwJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9zaWdudXAudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBiYWNrZW5kIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBMaXN0IG9mIGNvdXJzZXMgYXZhaWxhYmxlIHRvIHNpZ24gdXAgZm9yO1xuICAgKiBBbGwgdXNlcnMgbXVzdCBzZWxlY3QgYSBjb3Vyc2UsIGV2ZW4gaWYgdGhlIGNvdXJzZSBpcyBcIk5BXCJcbiAgICovXG4gIHByaXZhdGUgY291cnNlczogc3RyaW5nW10gPSBbXTtcbiAgLyoqXG4gICAqIFVzZXIgZGV0YWlscyB1c2VkIGZvciBzaWdudXBcbiAgICogLSBgZmlyc3ROYW1lYFxuICAgKiAtIGBsYXN0TmFtZWBcbiAgICogLSBgdXNlcm5hbWVgIChlbWFpbCBhZGRyZXNzKVxuICAgKiAtIGBjb3Vyc2VgIChkYXRhYmFzZSBjb3Vyc2UgSUQgbm90IGNvdXJzZSBuYW1lKVxuICAgKiAtIGBwYXNzc3dvcmRgXG4gICAqIC0gYGNvbmZpcm1QYXNzd29yZGBcbiAgICovXG4gIHByaXZhdGUgdXNlcjogRm9ybUdyb3VwO1xuICAvKipcbiAgICogQm9vbGVhbiBzdGF0ZSBvYmplY3QgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb20gbXVsdGlwbGUgc2VydmljZXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfY291cnNlU2VydmljZTogQ291cnNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBjcmVhdGlvbiwgZ2V0IHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBjb3Vyc2VzIGFuZCBvcmRlciB0aGVtXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMudXNlciA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgJ2ZpcnN0TmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAnbGFzdE5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgJ3VzZXJuYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXSksXG4gICAgICAnY291cnNlJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICdwYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCgnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKSxcbiAgICAgICdjb25maXJtUGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBwYXNzd29yZE1hdGNoVmFsaWRhdG9yXSksXG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb3Vyc2VTZXJ2aWNlLmdldENvdXJzZUxpc3QoKVxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuX3Jlb3JkZXJDb3Vyc2VzKHJlcyk7XG4gICAgICAgIHRoaXMuY291cnNlcyA9IHRtcDtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICB0aGlzLmNvdXJzZXMgPSBbXTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGFjY2Vzc29ycyBmb3IgZm9ybSB2YWxpZGF0aW9uXG4gIGdldCBmaXJzdE5hbWUoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdmaXJzdE5hbWUnKTsgfVxuICBnZXQgbGFzdE5hbWUoKSB7IHJldHVybiB0aGlzLnVzZXIuZ2V0KCdsYXN0TmFtZScpOyB9XG4gIGdldCB1c2VybmFtZSgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ3VzZXJuYW1lJyk7IH1cbiAgZ2V0IGNvdXJzZSgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ2NvdXJzZScpOyB9XG4gIGdldCBwYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ3Bhc3N3b3JkJyk7IH1cbiAgZ2V0IGNvbmZpcm1QYXNzd29yZCgpIHsgcmV0dXJuIHRoaXMudXNlci5nZXQoJ2NvbmZpcm1QYXNzd29yZCcpOyB9XG5cblxuICAvKipcbiAgICogT3JkZXIgdGhlIGNvdXJzZXMgc28gdGhlIFwiTkFcIiBjb3Vyc2UgaXMgYXQgdGhlIHRvcFxuICAgKlxuICAgKiBAcGFyYW0ge2FueVtdfSBjb3Vyc2VzIGxpc3Qgb2YgY3VycmVudGx5IGF2YWlsYWJsZSBjb3Vyc2VzOyBlYWNoIGl0ZW0gaW4gbGlzdCBoYXMgYGNvdXJzZU51bWAgYW5kIGBpZGBcbiAgICpcbiAgICogQHJldHVybnMge2FueVtdfSB0aGUgbGlzdCBvcmRlcmVkIHNvIHRoZSBcIk5BXCIgY291cnNlIGlzIGF0IHRoZSB0b3BcbiAgICovXG4gIHByaXZhdGUgX3Jlb3JkZXJDb3Vyc2VzKGNvdXJzZXM6IGFueVtdKTogYW55W117XG4gICAgbGV0IG5hID0gY291cnNlcy5maWx0ZXIoKGMpPT57cmV0dXJuIGMuY291cnNlTnVtID09PSAnTkEnfSk7XG4gICAgbGV0IG90aGVyID0gY291cnNlcy5maWx0ZXIoKGMpPT57XG4gICAgICByZXR1cm4gYy5jb3Vyc2VOdW0gIT09ICdOQSdcbiAgICB9KTtcbiAgICByZXR1cm4gbmEuY29uY2F0KG90aGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAtIEF0dGVtcHRzIHRvIHNpZ24gdGhlIHVzZXIgdXAgd2hlbiB0aGV5IHN1Ym1pdCB0aGUgZm9ybVxuICAgKiAtIEluY2x1ZGVzIGVycm9yIGNoZWNrcyBmb3Igc2VsZWN0aW5nIGEgY291cnNlIGFuZCBwYXNzd29yZHMgbWF0Y2hcbiAgICogLSBXaGVuIHNpZ24tdXAgaXMgc3VjY2Vzc2Z1bCwgc2V0cyB0aGUgW2xvZ2dlZCBpbiB1c2VyXXtAbGluayBhdXRoZW50aWNhdGlvbi5zZXJ2aWNlfSBhbmQgbmF2aWdhdGVzIHRvIHRoZSBob21lIHBhZ2VcbiAgICovXG4gIHNpZ251cCgpIHtcbiAgICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICAgICAgICAuc2lnbnVwKHRoaXMudXNlci52YWx1ZSlcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnNldFVzZXIocmVzdWx0KTtcbiAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pXG4gICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgKiBHZXQgdGhlIGZvcm0gaW5wdXQgQ1NTIGNsYXNzZXMgc3R5bGluZyB0byBwcm92aWRlIGZlZWRiYWNrIHRvIHVzZXJcbiAgKiB3aGV0aGVyIGlucHV0IGlzIHZhbGlkIG9uIG5vdFxuICAqXG4gICogQWx3YXlzIGhhcyBgLmZvcm0tY29udHJvbGAgdGhlbiBgLmlzLWludmFsaWRgIG9yIGAuaXMtdmFsaWRgIGFyZSBzZXQgb25jZSBpbnB1dCBoYXMgYmVlbiB0b3VjaGVkXG4gICpcbiAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybUxhYmVsIC0gZm9ybSBncm91cCBuYW1lIGxvb2stdXAgaW5wdXQgc3RhdGVcbiAgKlxuICAqIEByZXR1cm5zIHtPYmplY3R9IENTUyBjbGFzc2VzIHdoaWNoIGFwcGx5IHRvIHRoaXMgaW5wdXRcbiAgKi9cbiAgZ2V0SW5wdXRDbGFzcyhmb3JtTGFiZWw6IHN0cmluZykge1xuICAgIGxldCBvdXQgPSB7J2Zvcm0tY29udHJvbCc6IHRydWV9O1xuICAgIGlmKHRoaXMudXNlciAmJiB0aGlzLnVzZXIuZ2V0KGZvcm1MYWJlbCkpe1xuICAgICAgbGV0IGFjID0gdGhpcy51c2VyLmdldChmb3JtTGFiZWwpO1xuICAgICAgaWYoYWMuZGlydHkgfHwgYWMudG91Y2hlZCl7XG4gICAgICAgIG91dFsnaXMtaW52YWxpZCddID0gYWMuaW52YWxpZDtcbiAgICAgICAgb3V0Wydpcy12YWxpZCddID0gYWMudmFsaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc2N0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlcyB0byBwcmV2ZW50IGEgbWVtb3J5IGxlYWtcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG4gIC8qKlxuICAqIEN1c3RvbSB2YWxpZGF0b3IgdG8gY2hlY2sgdGhhdCBpbnB1dCBwYXNzd29yZCBhbmQgY29uZmlybWF0aW9uIHBhc3N3b3JkIGFyZSB0aGUgc2FtZVxuICAqXG4gICogQHBhcmFtIGFjIHtBYnN0cmFjdENvbnRyb2x9IC0gcmVhY3RpdmUgZm9ybSBjb250cm9sIGZvciBgY29uZmlybVBhc3N3b3JkYCBpbnB1dFxuICAqIC0gbXVzdCBiZSBwYXJ0IG9mIGEgRm9ybUdyb3VwIHdpdGggYWxzbyBoYXMgYSBgcGFzc3dvcmRgIGlucHV0XG4gICpcbiAgKiBAcmV0dXJucyB7bnVsbCB8IE9iamVjdCB9IC0gYG51bGxgIHdoZW4gcGFzc3dvcmRzIG1hdGNoIG9yIGJlZm9yZSBmb3JtIGlzIGluaXRpYWxpemVkXG4gICogLSBge21pc21hdGNoOnRydWV9YCB3aGVuIHBhc3N3b3JkcyBkb24ndCBtYXRjaFxuICAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFzc3dvcmRNYXRjaFZhbGlkYXRvcihhYzogQWJzdHJhY3RDb250cm9sKXtcbiAgICAgIGxldCBmZyA9IGFjLnBhcmVudDtcbiAgICBpZighZmcpe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmZy5nZXQoJ3Bhc3N3b3JkJykudmFsdWUgPT09IGZnLmdldCgnY29uZmlybVBhc3N3b3JkJykudmFsdWUgPyBudWxsIDoge21pc21hdGNoOiB0cnVlfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1wYXNzd29yZC52YWxpZGF0b3IudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0aGF0IGEgdXNlciBzaWducyBvdXQuIEhhcyBubyB2aWV3L3RlbXBsYXRlLS1yZXNldHNcbiAqIHZhcmlhYmxlcyBhbmQgbmF2aWdhdGUgdG8gaG9tZSBwYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZ25vdXQnLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWdub3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG4gICl7fVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgY3JlYXRpb25cbiAgICogMS4gU2lnbiBvdXQgdXNlciBvbiBzZXJ2ZXJcbiAgICogMi4gVW5zZXQgW0F1dGhlbnRpY2F0aW9uU2VydmljZV17QGxpbmsgQXV0aGVudGljYXRpb25TZXJ2aWNlfSB1c2VyXG4gICAqIDMuIFJlZGlyZWN0IHRvIGhvbWUgcGFnZVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ25vdXQoKVxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zZXRVc2VyKG51bGwpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogT24gY29tcG9uZW50IGRlc3RydWN0aW9uLCB1bnN1YnNjcmliZSBmcm9tIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2UgaWYgbmVjZXNzYXJ5XG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbm91dC9zaWdub3V0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBJZiB1c2VyIGZvcmdldHMgdGhlaXIgcGFzc3dvcmQsIHRoZXkgY2FuIGVudGVyXG4gKiB0aGVyZSBlbWFpbCBhZGRyZXNzLiBJZiB0aGVyZSBpcyBhbiBhY2NvdW50IHdpdGggdGhlIGVtYWlsIGFkZHJlc3MsXG4gKiBhbiBlbWFpbCBpcyBzZW50IHdpdGggYSBsaW5rIHRoYXQgYWxsb3dzIHVzZXIgdG8gcmVzZXQgdGhlaXIgcGFzc3dvcmRcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBmb3IgZW50ZXJpbmcgZW1haWwgYWRkcmVzcyBhbmRcbiAqIGluZm9ybWluZyBpZiBlbWFpbCBhZGRyZXNzIHdhcyB2YWxpZCBhbmQgcmVzZXQgKiBwYXNzd29yZCBlbWFpbCB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmb3JnZXQtcHN3ZCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vZm9yZ2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBGb3JnZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveXtcbiAgLyoqXG4gICAqIFBvc3NpYmxlIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBNZXNzYWdlIHdoZW4gcmVzZXQgcGFzc3dvcmQgZW1haWwgd2FzIHN1Y2Nlc3NmdWxseSBzZW50XG4gICAqL1xuICBwcml2YXRlIHN1Y2Nlc3NNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIFVzZXIncyBlbWFpbCB0byBjaGVjayBpZiBhbiBhY2NvdW50IGV4aXN0c1xuICAgKi9cbiAgZW1haWw6IEZvcm1Db250cm9sO1xuICAvKipcbiAgICogQXV0aGVudGljYXRpb24gc2VydmljZSBzdWJzY3JpcHRpb25cbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGZvcm0gb24gY29tcG9uZW50IGNyZWF0aW9uXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuZW1haWwgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXSk7XG4gIH1cbiAgLyoqXG4gICAqIEFmdGVyIHN1Ym1pdHRpbmcgZm9ybSwgcmVzZXQgX3N1Y2Nlc3NfIGFuZCBfZXJyb3JfIG1lc3NhZ2VzLCBzZW5kIGVtYWlsIHRvIHRoZSBzZXJ2ZXIsIGFuZCB3YWl0IGZvciByZXNwb25zZVxuICAgKlxuICAgKiAtIElmIHBhc3N3b3JkIHJlc2V0IGVtYWlsIHN1Y2Nlc3NmdWxseSBzZXQsIF9zdWNjZXNzXyBtZXNzYWdlIGlzIHVwZGF0ZWRcbiAgICogLSBJZiB0aGVyZSB3YXMgYW4gZXJyb3IgKHNlcnZlciBlcnJvciwgZW1haWwgZG9lc24ndCBiZWxvdyB0byBhbnkgdXNlciksIF9lcnJvcl8gbWVzc2FnZSBpcyBzZXQgd2l0aCBkZXNjcmlwdGlvbiBvZiB0aGUgZXJyb3JcbiAgICovXG4gICAgc2VuZEZvcmdldCgpIHtcbiAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSAnJztcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICBsZXQgYm9keSA9IHtlbWFpbDogdGhpcy5lbWFpbC52YWx1ZX07XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgICAgLmZvcmdldFBhc3N3b3JkKGJvZHkpXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgLy8gaWYgc3VjY2Vzc2Z1bCwgc2hvdWxkIGdldCBzdWNjZXNzIG1lc3NhZ2VcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gcmVzdWx0Lm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyb3IpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBDU1MgY2xhc3MgZm9yIHRoZSBlbWFpbCBpbnB1dCBiYXNlZCBvbiBpdCdzIHZhbGlkaXR5XG4gICAqXG4gICAqIEFsd2F5cyBoYXMgYC5mb3JtLWNvbnRyb2xgIHRoZW4gYC5pcy1pbnZhbGlkYCBvciBgLmlzLXZhbGlkYCBhcmUgc2V0IG9uY2UgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBDU1MgY2xhc3NlcyB3aGljaCBhcHBseVxuICAgKi9cbiAgZ2V0SW5wdXRDbGFzcygpe1xuICAgIGxldCBvdXQgPSB7J2Zvcm0tY29udHJvbCc6IHRydWV9O1xuICAgIGlmKHRoaXMuZW1haWwgJiYgKHRoaXMuZW1haWwuZGlydHkgfHwgdGhpcy5lbWFpbC50b3VjaGVkKSl7XG4gICAgICBvdXRbJ2lzLWludmFsaWQnXSA9IHRoaXMuZW1haWwuaW52YWxpZDtcbiAgICAgIG91dFsnaXMtdmFsaWQnXSA9IHRoaXMuZW1haWwudmFsaWQ7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgZnJvbSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5pbXBvcnQgeyBwYXNzd29yZE1hdGNoVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbmZpcm0tcGFzc3dvcmQudmFsaWRhdG9yJztcblxuLyoqXG4gKiBBZnRlciB1c2VyIHJlcXVlc3RzIHRvIHJlc2V0IHBhc3N3b3JkIGFuZCB0aGV5IGhhdmUgYSB0b2tlbixcbiAqIHRoaXMgY29tcG9uZW50IGFsbG93cyB0aGVtIHRvIHNldCB0aGUgcGFzc3dvcmQgdG8gYSBuZXcgcGFzc3dvcmRcbiAqIChhc3N1bWluZyB0b2tlbiBpcyB2YWxpZClcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyZXNldC1wc3dkJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9yZXNldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBlcnJvciBtZXNzYWdlIGZyb20gc2VydmVyXG4gICAqL1xuICAgIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIE1lc3NhZ2Ugd2hlbiBuZXcgcGFzc3dvcmQgc3VjY2Vzc2Z1bGx5IHNhdmVkXG4gICAqL1xuICBwcml2YXRlIHN1Y2Nlc3NNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIEVtYWlsIGFuZCBuZXcgcGFzc3dvcmRzIHRvIGJlIGFibGUgdG8gdXBkYXRlIHRoZSBkYXRhYmFzZVxuICAgKiAtIGBwYXNzd29yZGAgLSB0aGUgbmV3IHBhc3N3b3JkIHRvIHNldFxuICAgKiAtIGBjb25maXJtUGFzc3dvcmRgIC0gY29uZmlybSBwYXNzd29yZCB0eXBlZCBjb3JyZWN0bHlcbiAgICogLSBgdG9rZW5gIC0gcGFzc3dvcmQgcmVzZXQgdG9rZW4gdG8gY29uZmlybSB1c2VyIGhhZCBhY2Nlc3MgdG8gdGhlIGVtYWlsIGFuZCBkaWRuJ3Qgd2FpdCB0b28gbG9uZ1xuICAgKi9cbiAgcHJpdmF0ZSBjcmVkZW50aWFsczogRm9ybUdyb3VwO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHtAbGluayBBdXRoZW50aWNhdGlvblNlcnZpY2V9IHdoZW4gcmV0dGluZ1xuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgLyoqXG4gICAqIElzIHRoZSBzdWJtaXQgYnV0dG9uIGRpc2FibGVkOyB0aGlzIHdvdWxkIGhhcHBlbiB3aGVuXG4gICAqIHRoZXJlIGlzIG5vIHRva2VuXG4gICAqL1xuICAvL3ByaXZhdGUgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgIH1cbiAgLyoqXG4gICAqIFdoZW4gaW5pdGlhbGl6aW5nIHRoZSBjb21wb25lbnQsIGdldCB0aGUgdG9rZW4gZnJvbSB0aGUgVVJMXG4gICAqXG4gICAqIElmIHRoZXJlIGlzIG5vIHRva2VuLCBnaXZlIGVycm9yIG1lc3NhZ2UgYW5kIGRpc2FibGUgc3VibWl0IGJ1dHRvblxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAncGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pLFxuICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3JdKSxcbiAgICAgICd0b2tlbic6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICB9KTtcblxuICAgIGxldCB1cmxUb2tlbiA9IHRoaXMuX3JvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgndG9rZW4nKTtcbiAgICBpZiAodXJsVG9rZW4gPT09ICcnKXtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ05vIHRva2VuIHNwZWNpZmllZC4nXG4gICAgfVxuICAgIHRoaXMuY3JlZGVudGlhbHMucGF0Y2hWYWx1ZSh7dG9rZW46IHVybFRva2VufSk7XG4gIH1cblxuICBnZXQgcGFzc3dvcmQoKSB7IHJldHVybiB0aGlzLmNyZWRlbnRpYWxzLmdldCgncGFzc3dvcmQnKTsgfVxuICBnZXQgY29uZmlybVBhc3N3b3JkKCkgeyByZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoJ2NvbmZpcm1QYXNzd29yZCcpOyB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHRzIHRvIHJlc2V0IHRoZSBuZXcgcGFzc3dvcmRcbiAgICogMS4gSWYgbm8gZXJyb3JzLCBzZW5kIGNyZWRlbnRpYWxzIHRvIHNlcnZlclxuICAgKiAyLiBQYXNzd29yZCBjb3JyZWN0bHkgcmVzZXQsIGRpc3BsYXlzIHRoZSBzdWNjZXNzIG1lc3NhZ2VcbiAgICogMy4gSWYgZXJyb3IgcmVzZXRpbmcgdGhlIHBhc3N3b3JkLCBkaXNwbGF5cyBlcnJvciBtZXNzYWdlXG4gICAqL1xuICAgIHNlbmRSZXNldCgpIHtcbiAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgICAgICAgICAucmVzZXRQYXNzd29yZCh0aGlzLmNyZWRlbnRpYWxzLnZhbHVlKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIC8vIGlmIHN1Y2Nlc3NmdWwsIHNob3VsZCBnZXQgc3VjY2VzcyBtZXNzYWdlXG4gICAgICAgICAgdGhpcy5jcmVkZW50aWFscy5zZXRWYWx1ZSh7J3Bhc3N3b3JkJzogJycsICdjb25maXJtUGFzc3dvcmQnOiAnJywgdG9rZW46ICcnfSk7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IHJlc3VsdC5tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnJvcilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICogR2V0IHRoZSBmb3JtIGlucHV0IENTUyBjbGFzc2VzIHN0eWxpbmcgdG8gcHJvdmlkZSBmZWVkYmFjayB0byB1c2VyXG4gICogd2hldGhlciBpbnB1dCBpcyB2YWxpZCBvbiBub3RcbiAgKlxuICAqIEFsd2F5cyBoYXMgYC5mb3JtLWNvbnRyb2xgIHRoZW4gYC5pcy1pbnZhbGlkYCBvciBgLmlzLXZhbGlkYCBhcmUgc2V0IG9uY2UgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZFxuICAqXG4gICogQHBhcmFtIHtzdHJpbmd9IGZvcm1MYWJlbCAtIGZvcm0gZ3JvdXAgbmFtZSBsb29rLXVwIGlucHV0IHN0YXRlXG4gICpcbiAgKiBAcmV0dXJucyB7T2JqZWN0fSBDU1MgY2xhc3NlcyB3aGljaCBhcHBseSB0byB0aGlzIGlucHV0XG4gICovXG4gIGdldElucHV0Q2xhc3MoZm9ybUxhYmVsOiBzdHJpbmcpIHtcbiAgICBsZXQgb3V0ID0geydmb3JtLWNvbnRyb2wnOiB0cnVlfTtcbiAgICBpZih0aGlzLmNyZWRlbnRpYWxzICYmIHRoaXMuY3JlZGVudGlhbHMuZ2V0KGZvcm1MYWJlbCkpe1xuICAgICAgbGV0IGFjID0gdGhpcy5jcmVkZW50aWFscy5nZXQoZm9ybUxhYmVsKTtcbiAgICAgIGlmKGFjLmRpcnR5IHx8IGFjLnRvdWNoZWQpe1xuICAgICAgICBvdXRbJ2lzLWludmFsaWQnXSA9IGFjLmludmFsaWQ7XG4gICAgICAgIG91dFsnaXMtdmFsaWQnXSA9IGFjLnZhbGlkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVscCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2hlbHAudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgSGVscENvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcigpe31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVscC1jcmlja2V0JyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vaGVscC1jcmlja2V0LnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEhlbHBDcmlja2V0Q29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKCl7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvaGVscC9oZWxwLWNyaWNrZXQvaGVscC1jcmlja2V0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWxwLW1lbmRlbHBlZGUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9oZWxwLW1lbmRlbHBlZGUudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgSGVscE1lbmRlbHBlZGVDb21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IoKXt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9oZWxwL2hlbHAtbWVuZGVscGVkZS9oZWxwLW1lbmRlbHBlZGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIE1haW4gdXNlciBwcm9maWxlIGNvbXBvbmVudDsgYWltZWQgZm9yIHVzZSB0byBlZGl0IG5hbWUgYW5kXG4gKiBlbWFpbCBhZGRyZXNzLiBBbHNvIGFjY2VzcyB1cGRhdGUgcGFzc3dvcmQgbGluayB0byB1cGRhdGUgcGFzc3dvcmRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXNlci1wcm9maWxlJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vdXNlci1wcm9maWxlLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJQcm9maWxlQ29tcG9uZW50e1xuXG4gIC8qKlxuICAgKiBEYXRhYmFzZSB1c2VyIGlkXG4gICAqL1xuICBwcml2YXRlIHVzZXJJZDogbnVtYmVyO1xuICAvKipcbiAgICogVXNlciBkZXRhaWxzIChhcyBhbiBvYmplY3QpXG4gICAqIEN1cnJlbnRseSBpbmNsdWRlczogZmlyc3ROYW1lLCBsYXN0TmFtZSwgYW5kIGVtYWlsXG4gICAqL1xuICBwcml2YXRlIHVzZXJJbmZvOiBhbnk7XG4gIC8qKlxuICAgKiBTdGF0ZSB0byBtYWludGFpbiBvcGVuIHN1YnNjcmlwdGlvbnMgdW50aWwgY29tcG9uZW50IGlzIGRlc3RvcnllZFxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvcjsgaW5jbHVkZXMgc2VydmljZXMgdG8gZmV0Y2ggaW5mb1xuICAgKlxuICAgKiBAcGFyYW0ge1Byb2ZpbGVTZXJ2aWNlfSBfcHJvZmlsZVNlcnZpY2UgU2VydmljZSBmb3IgdXBkYXRpbmcgdGhlIGluZm9ybWF0aW9uXG4gICAqIEBwYXJhbSB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBfYXV0aFNlcnZpY2UgU2VydmljZSB0byBnZXQgdGhlIGN1cnJlbnQgdXNlciBpbmZvcm1hdGlvblxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAgKXtcbiAgICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudCBvbiBjcmVhdGlvblxuICAgKiAxLiBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqIDIuIFNhdmUgdGhlIHVzZXIncyBkZXRhaWxzIHRvIG9iamVjdCB0byBiZSBhYmxlIHRvIGVkaXRcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgLy8gZ2V0IGN1cnJlbnQgdXNlciBpbmZvXG4gICAgdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlciRcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAgIHRoaXMudXNlcklkID0gcmVzLmlkO1xuICAgICAgdGhpcy51c2VySW5mbyA9IHtcbiAgICAgICAgZmlyc3ROYW1lOiByZXMuZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZTogcmVzLmxhc3ROYW1lLFxuICAgICAgICBlbWFpbDogcmVzLmVtYWlsXG4gICAgICB9XG4gICAgfSwgKGlkRXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGlkRXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRlbXB0cyB0byB1cGRhdGUgdGhlIHByb2ZpbGUgaWYgcG9zc2libGUgb3Igc2V0IGVycm9yXG4gICAqIG1lc3NhZ2UgaWYgdGhlcmUncyBhIHByb2JsZW1cbiAgICovXG4gIHVwZGF0ZVByb2ZpbGUoKXtcbiAgICB0aGlzLl9wcm9maWxlU2VydmljZS5lZGl0UHJvZmlsZSh0aGlzLnVzZXJJZCwgdGhpcy51c2VySW5mbylcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKCh1cGRhdGVkKT0+e1xuICAgICAgdGhpcy51c2VySW5mbyA9IHtmaXJzdE5hbWU6IHVwZGF0ZWQuZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiB1cGRhdGVkLmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1cGRhdGVkLmVtYWlsfTtcbiAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNldFVzZXIodXBkYXRlZCk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCBkZXN0cnVjdGlvbiwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlcyB0byBwcmV2ZW50XG4gICAqIG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgYSBsb2dnZWQgaW4gdXNlciB0byB1cGRhdGUgdGhlaXIgcGFzc3dvcmRcbiAqIGJ5IGVudGVyaW5nIHRoZWlyIGN1cnJlbnQgcGFzc3dvcmQgdGhlbiB0aGUgbmV3IHBhc3N3b3JkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VzZXItcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRDb21wb25lbnR7XG5cbiAgLyoqXG4gICAqIFRoZSBsb2dnZWQgaW4gdXNlclxuICAgKi9cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuICAvKipcbiAgICogLSBQYXNzd29yZCBpbmZvcm1hdGlvbiB0byBzZW5kIHRvIHNlcnZlciB0byB1cGRhdGUgcGFzc3dvcmRcbiAgICogLSBIYXMgZmllbGRzIGBwYXNzd29yZGAgKGN1cnJlbnQgcGFzc3dvcmQpLCBgbmV3UGFzc3dvcmRgIChwYXNzd29yZCB0byBjaGFuZ2UgdG8pLCBcbiAgICogYGNvbmZpcm1QYXNzd29yZGAgKGNvbmZpcm1zIHR5cGluZyBvZiBuZXcgcGFzc3dvcmQpLCBhbmQgXG4gICAqIGB1c2VybmFtZWAgKHVzZXIncyBlbWFpbClcbiAgICovXG4gIHByaXZhdGUgY3JlZGVudGlhbHM6IGFueTtcbiAgLyoqXG4gICAqIFN0YXRlIHRvIGtlZXAgdHJhY2sgb2YgY29tcG9lbmVudCBhbGl2ZVxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgYmFja2VuZCBlcnJvciBtZXNzYWdlIGRpc3BsYXllZCBwcm9taW5hbnRseVxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogRXJyb3IgbWVzc2FnZSBhYm91dCBzdWJtaXNzaW9uIGFuZCB3aHkgdGhlIHN1Ym1pc3Npb24gZGlkbid0IHdvcmsgYXMgZXhwZWN0ZWRcbiAgICovXG4gIHByaXZhdGUgcGFzc3dvcmRNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9wcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICApe1xuICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHtcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBuZXdQYXNzd29yZDogJycsXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogJydcbiAgICAgIH07XG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnRcbiAgICogMS4gR2V0IHRoZSBsb2dnZWQgaW4gdXNlciBpbmZvXG4gICAqIDIuIFNldCB1cCB0aGUgY3JlZGVudGlhbHMgd2l0aCBlbWFpbCBhZGRyZXNzXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIC8vIGdldCBjdXJyZW50IHVzZXIgaW5mb1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIkXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgICB0aGlzLnVzZXIgPSByZXM7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzWyd1c2VybmFtZSddID0gcmVzLmVtYWlsO1xuICAgIH0sIChpZEVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShpZEVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXR0ZW1wdCB0byB1cGRhdGUgdGhlIHBhc3N3b3JkXG4gICAqIC0gSWYgc3VjY2Vzc2Z1bCwgcmVkaXJlY3RzIHRvIHByb2ZpbGUgcGFnZVxuICAgKiAtIElmIHRoZXJlJ3MgYW4gZXJyb3IsIGRpc3BsYXlzIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIHVwZGF0ZVBhc3N3b3JkKCl7XG4gICAgLy8gZG8gY2hlY2tzXG4gICAgdGhpcy5wYXNzd29yZE1lc3NhZ2UgPSB0aGlzLl9jaGVja1Bhc3N3b3JkcygpO1xuICAgIGlmKHRoaXMucGFzc3dvcmRNZXNzYWdlID09PSAnJyl7XG4gICAgICAvLyBjYW4gdXBkYXRlXG4gICAgICB0aGlzLl9wcm9maWxlU2VydmljZS51cGRhdGVQYXNzd29yZCh0aGlzLnVzZXIuaWQsIHRoaXMuY3JlZGVudGlhbHMpXG4gICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGUnXSk7XG4gICAgICB9LCAoZXJyKT0+e1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEb2VzIHZhcmlvdXMgY2hlY2tzIHRvIGVuc3VyZSB0aGUgcGFzc3dvcmQgZmllbGRzIGFyZSB2YWxpZFxuICAgKiAxLiBBbGwgZmllbGRzIGFyZSBmaWxsZWQgaW5cbiAgICogMi4gTmV3IHBhc3N3b3JkIGlzIGRpZmZlcmVudCBmcm9tIG9sZCBwYXNzd29yZFxuICAgKiAzLiBDb25maXJtIHBhc3N3b3JkIG1hdGNoZXMgbmV3IHBhc3N3b3JkXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGVycm9yIG1lc3NhZ2UgaWYgYXQgbGVhc3Qgb25lIGNvbmRpdGlvbiBpc24ndCBtZXQgb3IgYCcnYCBpZiBldmVyeXRoaW5nIGlzIHZhbGlkXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NoZWNrUGFzc3dvcmRzKCl7XG4gICAgbGV0IHAgPSB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkO1xuICAgIGxldCBuID0gdGhpcy5jcmVkZW50aWFscy5uZXdQYXNzd29yZDtcbiAgICBsZXQgYyA9IHRoaXMuY3JlZGVudGlhbHMuY29uZmlybVBhc3N3b3JkO1xuICAgIGlmKHAgPT09ICcnKXtcbiAgICAgIHJldHVybiAnRW50ZXIgb2xkIHBhc3N3b3JkJztcbiAgICB9IGVsc2UgaWYobiA9PT0gJycpe1xuICAgICAgcmV0dXJuICdFbnRlciBuZXcgcGFzc3dvcmQnO1xuICAgIH0gZWxzZSBpZihjID09PSAnJyl7XG4gICAgICByZXR1cm4gJ0NvbmZpcm0gbmV3IHBhc3N3b3JkJztcbiAgICB9IGVsc2UgaWYocCA9PT0gbil7XG4gICAgICByZXR1cm4gJ05ldyBwYXNzd29yZCBjYW5ub3QgdGhlIHNhbWUgYXMgdGhlIG9sZCBwYXNzd29yZCc7XG4gICAgfSBlbHNlIGlmKG4gIT09IGMpe1xuICAgICAgcmV0dXJuICdDb25maXJtIHBhc3N3b3JkIGRvZXMgbm90IG1hdGNoJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJ1Y3Rpb24sIHVuc3Vic2NyaWJlIHRvIHNlcnZpY2VzL3N0cmVhbXNcbiAgICogdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVmlldyBjb21wb25lbnQgdXNlZCB0byBsaW5rIHRoZSBicmVhZGNydW1iIHdpdGggdGhlIGxvY2F0aW9uXG4gKiBtb2R1bGUgY29tcG9uZW50cyBvciBzY2VuYXJpbyBsaXN0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NyaWNrZXQnLFxuICB0ZW1wbGF0ZTogJzxtYy1icmVhZGNydW1icz48L21jLWJyZWFkY3J1bWJzPjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4nXG59KVxuXG5leHBvcnQgY2xhc3MgQ3JpY2tldENvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENyaWNrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vY3JpY2tldC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW8gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NjZW5hcmlvLmludGVyZmFjZSc7XG5cbi8qKlxuICogQ29tcG9uZW50IHdoaWNoIGxpc3RzIGFsbCBhdmFpbGFibGUgc2NlbmFyaW9zXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NlbmFyaW8tbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vc2NlbmFyaW8tbGlzdC50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgU2NlbmFyaW9MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gIC8qKlxuICAgKiBVc2VyIG9iamVjdCBvZiBsb2dnZWQgaW4gdXNlciwgaWYgYXZhaWxhYmxlXG4gICAqL1xuICAgIHVzZXI6IFVzZXI7XG4gIC8qKlxuICAqIGxpc3Qgb2YgYXZhaWxhYmxlIHNjZW5hcmlvc1xuICAqL1xuICAgIHNjZW5hcmlvczogU2NlbmFyaW9bXTtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSBzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogQ3JpY2tldFNlcnZpY2UpIHtcblxuICAgIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IGJ5IHVzaW5nIHRoZSBzZXJ2aWNlIHRvIGZldGNoIHRoZVxuICAgKiBsaXN0IG9mIHNjZW5hcmlvc1xuICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMudXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICB0aGlzLnNTdWJzY3JpcHRpb24gPSB0aGlzLl9zY2VuYXJpb1NlcnZpY2UubGlzdFNjZW5hcmlvcygpXG4gICAgICAgIC5zdWJzY3JpYmUoKHNjZW5hcmlvcykgPT4ge1xuICAgICAgICB0aGlzLnNjZW5hcmlvcyA9IHNjZW5hcmlvc1xuICAgICAgfSk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgY29tcG9uZW50LCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2UgaWYgbmVjZXNzYXJ5XG4gICAqIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc1N1YnNjcmlwdGlvbilcbiAgICB0aGlzLnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvY3JpY2tldC9zY2VuYXJpby1saXN0L3NjZW5hcmlvLWxpc3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2NlbmFyaW9zL21lbmRlbHBlZGUtc2NlbmFyaW9zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4uLy4uL2FkbWluL2NvdXJzZS9jb3Vyc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW8sIHNvcnRTY2VuYXJpb3MgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL21lbmRlbHBlZGUtc2NlbmFyaW9zLmludGVyZmFjZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcHRpb25zJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vb3B0aW9ucy50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlczogWycubGlzdC1ncm91cC1pdGVtIHtwYWRkaW5nOiAwLjVlbSAxLjI1ZW0haW1wb3J0YW50OyB9J11cbn0pXG5leHBvcnQgY2xhc3MgT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdXNlcjogVXNlcjtcbiAgcHJpdmF0ZSBpc1VuZGVyZ3JhZDogYm9vbGVhbjtcbiAgLyoqXG4gICogbGlzdCBvZiBhdmFpbGFibGUgc2NlbmFyaW9zXG4gICovXG4gIG9wdGlvbnM6IE1lbmRlbHBlZGVTY2VuYXJpb1tdO1xuICBzY2VuYXJpb3M6IE1lbmRlbHBlZGVTY2VuYXJpb1tdID0gQXJyYXkoKTtcbiAgcXVpenplczogTWVuZGVscGVkZVNjZW5hcmlvW10gPSBBcnJheSgpO1xuICBkaXNjb3ZlcmllczogTWVuZGVscGVkZVNjZW5hcmlvW10gPSBBcnJheSgpO1xuICBwYXRod2F5czogTWVuZGVscGVkZVNjZW5hcmlvW10gPSBBcnJheSgpO1xuXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAvKipcbiAgICogU3RhdGUgdG8gbW9uaXRpb3IgaWYgY29tcG9uZW50IGFjdGl2ZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgdG9cbiAgICogbXVsdGlwbGUgc3RyZWFtcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSxcbiAgICBwcml2YXRlIF9jb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMudXNlcik7XG4gICAgdGhpcy5fY291cnNlU2VydmljZS5nZXRDb3Vyc2VCeUlkKHRoaXMudXNlci5jb3Vyc2VJZClcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChjb3Vyc2UpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjb3Vyc2UpO1xuICAgICAgICB0aGlzLmlzVW5kZXJncmFkID0gKGNvdXJzZS5sZXZlbCA9PT0gJ3VuZGVyZ3JhZHVhdGUnKTtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmxpc3RTY2VuYXJpb3MoY291cnNlLmxldmVsKVxuICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgLnN1YnNjcmliZSgob3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvcHRpb25zKVxuICAgICAgICAgICAgdGhpcy5faW5pdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5faW5pdE9wdGlvbnMoW10pO1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnI7XG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycjtcbiAgICAgICAgfSk7XG4gIH0gLy8gZW5kIG5nSW5pdFxuXG4gIF9pbml0T3B0aW9ucyhvcHRMaXN0OiBNZW5kZWxwZWRlU2NlbmFyaW9bXSkge1xuICAgIC8vIHNlcGFyYXRlIGludG8gbGlzdCB0eXBlc1xuICAgIGZvciAobGV0IG9wdCBvZiBvcHRMaXN0KSB7XG4gICAgICBzd2l0Y2ggKG9wdC5zY2VuVHlwZSkge1xuICAgICAgICBjYXNlICdxdWl6JzpcbiAgICAgICAgICB0aGlzLnF1aXp6ZXMucHVzaChvcHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkaXNjb3ZlcnknOlxuICAgICAgICAgIHRoaXMuZGlzY292ZXJpZXMucHVzaChvcHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYXRod2F5JzpcbiAgICAgICAgICB0aGlzLnBhdGh3YXlzLnB1c2gob3B0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gc2NlbmFyaW9cbiAgICAgICAgICB0aGlzLnNjZW5hcmlvcy5wdXNoKG9wdCk7XG4gICAgICB9XG4gICAgfSAvLyBlbmQgZm9yXG4gICAgdGhpcy5zY2VuYXJpb3Muc29ydChzb3J0U2NlbmFyaW9zKTtcbiAgICB0aGlzLnF1aXp6ZXMuc29ydChzb3J0U2NlbmFyaW9zKTtcbiAgICB0aGlzLmRpc2NvdmVyaWVzLnNvcnQoc29ydFNjZW5hcmlvcyk7XG4gICAgdGhpcy5wYXRod2F5cy5zb3J0KHNvcnRTY2VuYXJpb3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZSBpZiBuZWNlc3NhcnlcbiAgICogdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVBlZGUgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL21lbmRlbHBlZGUtcGVkZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uLy4uL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTWVuZGVscGVkZUZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4uL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2UuY29tcG9uZW50J1xuaW1wb3J0IHsgUGVkZUltYWdlUGlwZSB9IGZyb20gJy4uLy4uLy4uL3BpcGVzL3BlZGUtaW1hZ2UucGlwZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcGVkZS1sYWJyb29tJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbXBlZGUtbGFicm9vbS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbXBlZGUtbGFicm9vbS5zdHlsZS5jc3MnKSwgcmVxdWlyZSgnLi4vbXBlZGUtcGVkZXMuc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE1lbmRlbHBlZGVMYWJyb29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB1c2VyOiBVc2VyO1xuXG4gIG1hbGVQZWRlOiBNZW5kZWxwZWRlUGVkZTtcbiAgY2hpbGRQZWRlczogTWVuZGVscGVkZVBlZGVbXTtcbiAgZmVtYWxlUGVkZTogTWVuZGVscGVkZVBlZGU7XG4gIHN0b3JhYmxlUGVkZXM6IE1lbmRlbHBlZGVQZWRlW11bXVtdO1xuXG4gIHByaXZhdGUgc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuXG4gIC8vIFVzZWQgdG8gZGV0ZXJtaW5lIGhvdyBtYW55IGNoaWxkcmVuIHdlIHdpbGwgZ2V0IGZyb20gYmFja2VuZFxuICBwcml2YXRlIG51bU9mQ2hpbGRyZW46IG51bWJlcjtcblxuICBwcml2YXRlIHN0b3JhZ2VTbG90czogbnVtYmVyO1xuXG4gIHByaXZhdGUgY3VyckZyaWRnZUdlbm9GYWN0czogc3RyaW5nO1xuXG4gIC8vVXNlZCB0byBmaWxsIGNvcnJlY3QgbnVtYmVyIG9mIGNoaWxkIHBlZGVzXG4gIHByaXZhdGUgY3Vyck51bUNoaWxkcmVuOiBudW1iZXI7XG5cbiAgdW5kb1Nwb3RMaXN0OiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBwb3RlbnRpYWwgYmFja2VuZCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogU3RhdGUgdG8gbW9uaXRpb3IgaWYgY29tcG9uZW50IGFjdGl2ZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgdG9cbiAgICogbXVsdGlwbGUgc3RyZWFtcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuXG4gIEBJbnB1dCgpIG1lbmRlbEZyaWRnZTogTWVuZGVscGVkZUZyaWRnZUNvbXBvbmVudDtcbiAgaXNRdWl6OiBib29sZWFuID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHRoaXMubnVtT2ZDaGlsZHJlbiA9IDIwO1xuICAgIHRoaXMuc3RvcmFnZVNsb3RzID0gOFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5faW5pdFBlZGVzKCk7XG4gICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICBsZXQgdXNlcklkID0gdGhpcy51c2VyLmlkO1xuICAgIHRoaXMucGFyYW1PYnNlcnZlciA9IHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmdldEdlbm9GYWN0c1xuICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAuc3Vic2NyaWJlKChkZXRhaWxzKSA9PiB7IHRoaXMuY3VyckZyaWRnZUdlbm9GYWN0cyA9IGRldGFpbHMgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfaW5pdFBlZGVzKCkge1xuXG4gICAgdGhpcy5jdXJyTnVtQ2hpbGRyZW4gPSAwO1xuICAgIHRoaXMubWFsZVBlZGUgPSB7IGJ1Z0lEOiAwLCBnZW5vdHlwZTogbnVsbCwgcGhlbm90eXBlOiBudWxsLCB1c2VySWQ6IG51bGwsIGlzRmVtYWxlOiBudWxsLCBzY2VuQ29kZTogbnVsbCwgaWQ6IG51bGwgfTtcbiAgICB0aGlzLl9pbml0Q2hpbGRQZWRlcygpO1xuICAgIHRoaXMuX2VtcHR5U3RvcmFnZVBlZGVzKCk7XG4gICAgdGhpcy51bmRvU3BvdExpc3QgPSBbXTtcbiAgICB0aGlzLmZlbWFsZVBlZGUgPSB7IGJ1Z0lEOiAxLCBnZW5vdHlwZTogbnVsbCwgcGhlbm90eXBlOiBudWxsLCB1c2VySWQ6IG51bGwsIGlzRmVtYWxlOiBudWxsLCBzY2VuQ29kZTogbnVsbCwgaWQ6IG51bGwgfVxuICB9XG5cbiAgX2VtcHR5U3RvcmFnZVBlZGVzKCkge1xuICAgIHZhciBjb3VudGVyOiBudW1iZXIgPSAwO1xuICAgIHRoaXMuc3RvcmFibGVQZWRlcyA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zdG9yYWdlU2xvdHMgLyA0OyBqKyspIHtcbiAgICAgIHRoaXMuc3RvcmFibGVQZWRlc1tqXSA9IFtdO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICAgICAgdGhpcy5zdG9yYWJsZVBlZGVzW2pdW2tdID0gW107XG4gICAgICAgIHRoaXMuc3RvcmFibGVQZWRlc1tqXVtrXS5wdXNoKHsgYnVnSUQ6IGNvdW50ZXIsIGdlbm90eXBlOiBudWxsLCBwaGVub3R5cGU6IG51bGwsIHVzZXJJZDogbnVsbCwgaXNGZW1hbGU6IG51bGwsIHNjZW5Db2RlOiBudWxsLCBpZDogbnVsbCB9KTtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9pbml0Q2hpbGRQZWRlcygpIHtcbiAgICB0aGlzLmNoaWxkUGVkZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtT2ZDaGlsZHJlbjsgaSsrKSB7XG4gICAgICB0aGlzLmNoaWxkUGVkZXMucHVzaCh7IGJ1Z0lEOiAwLCBnZW5vdHlwZTogbnVsbCwgcGhlbm90eXBlOiBudWxsLCB1c2VySWQ6IG51bGwsIGlzRmVtYWxlOiBudWxsLCBzY2VuQ29kZTogbnVsbCwgaWQ6IG51bGwgfSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignc3RvcmVQZWRlJylcbiAgc3RvcmVQZWRlKHBlZGVUb1N0b3JlOiBNZW5kZWxwZWRlUGVkZSkge1xuICAgIC8vY29uc29sZS5sb2coJ2J1dHRvbiBwcmVzc2VkJyk7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0b3JhYmxlUGVkZXMpO1xuICAgIHRoaXMubWVuZGVsRnJpZGdlLnN0b3JlUGVkZShwZWRlVG9TdG9yZSk7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0b3JhYmxlUGVkZXMpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xlYXJBbGwnKVxuICBjbGVhckFsbCgpIHtcbiAgICB0aGlzLl9pbml0UGVkZXMoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsZWFyQWxsJylcbiAgdW5kb1BlZGUoKSB7XG4gICAgdmFyIHVuZG9TcG90OiBudW1iZXIgPSB0aGlzLnVuZG9TcG90TGlzdFt0aGlzLnVuZG9TcG90TGlzdC5sZW5ndGggLSAxXVxuICAgIC8vdmFyIGFyckxlbmd0aCA9IHRoaXMuc3RvcmFibGVQZWRlc1tNYXRoLmNlaWwoKHRoaXMudW5kb1Nwb3QrMSkvNCktMV1bdGhpcy51bmRvU3BvdD4zPyh0aGlzLnVuZG9TcG90LTQpOih0aGlzLnVuZG9TcG90KV0ubGVuZ3RoO1xuICAgIHZhciB1bmRvUGVkZTogTWVuZGVscGVkZVBlZGUgPSB0aGlzLnN0b3JhYmxlUGVkZXNbTWF0aC5jZWlsKCh1bmRvU3BvdCArIDEpIC8gNCkgLSAxXVt1bmRvU3BvdCA+IDMgPyAodW5kb1Nwb3QgLSA0KSA6ICh1bmRvU3BvdCldLnBvcCgpO1xuICAgIHVuZG9QZWRlLmJ1Z0lEID0gdGhpcy5jaGlsZFBlZGVzWzBdLmJ1Z0lEIC0gMTtcbiAgICB0aGlzLmNoaWxkUGVkZXMudW5zaGlmdCh1bmRvUGVkZSk7XG4gICAgdGhpcy51bmRvU3BvdExpc3QucG9wKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wUGVkZVRvU3RvcmFnZScpXG4gIGRyb3BQZWRlVG9TdG9yYWdlKHNwb3Q6IG51bWJlcikge1xuICAgIGxldCBwZWRlOiBNZW5kZWxwZWRlUGVkZSA9IHRoaXMuY2hpbGRQZWRlc1swXTtcbiAgICAvL2NvbnNvbGUubG9nKHBlZGUpO1xuICAgIC8vY29uc29sZS5sb2coc3BvdCk7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0b3JhYmxlUGVkZXMpO1xuICAgIHRoaXMudW5kb1Nwb3RMaXN0LnB1c2goc3BvdCk7XG4gICAgdGhpcy5zdG9yYWJsZVBlZGVzW01hdGguY2VpbCgoc3BvdCArIDEpIC8gNCkgLSAxXVtzcG90ID4gMyA/IChzcG90IC0gNCkgOiAoc3BvdCldLnB1c2goe1xuICAgICAgYnVnSUQ6IHRoaXMuc3RvcmFibGVQZWRlc1tNYXRoLmNlaWwoKHNwb3QgKyAxKSAvIDQpIC0gMV1bc3BvdCA+IDMgPyAoc3BvdCAtIDQpIDogKHNwb3QpXVswXS5idWdJRCxcbiAgICAgIGdlbm90eXBlOiBwZWRlLmdlbm90eXBlLFxuICAgICAgdXNlcklkOiBwZWRlLnVzZXJJZCxcbiAgICAgIHBoZW5vdHlwZTogcGVkZS5waGVub3R5cGUsXG4gICAgICBpc0ZlbWFsZTogcGVkZS5pc0ZlbWFsZSxcbiAgICAgIHNjZW5Db2RlOiBwZWRlLnNjZW5Db2RlLFxuICAgICAgaWQ6IHBlZGUuaWRcbiAgICB9KVxuICAgIGlmICh0aGlzLmNoaWxkUGVkZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmNyZWF0ZUNoaWxkUGVkZXMoKTtcbiAgICAgIHRoaXMuY2hpbGRQZWRlcy5wdXNoKHsgYnVnSUQ6IDAsIGdlbm90eXBlOiBudWxsLCBwaGVub3R5cGU6IG51bGwsIHVzZXJJZDogbnVsbCwgaXNGZW1hbGU6IG51bGwsIHNjZW5Db2RlOiBudWxsLCBpZDogbnVsbCB9KTtcbiAgICAgIHRoaXMuY2hpbGRQZWRlcy5zaGlmdCgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hpbGRQZWRlcy5zaGlmdCgpO1xuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKCdzdGFjayBvZiBwZWRlcycpO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5zdG9yYWJsZVBlZGVzKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5dXAnLCBbJyRldmVudCddKVxuICBrZXlFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vY29uc29sZS5sb2coZXZlbnQua2V5Q29kZSk7XG4gICAgLy8ga2V5Y29kZSBmb3IgbnVtYmVycyBhYm92ZSBrZXlwYWQgYXJlIDQ4LTU2IGZvciAwLThcbiAgICAvLyBrZXljb2RlIGZvciBudW1wYWQgYXJlIDk2LTEwNCBmb3IgMC04XG4gICAgdmFyIGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGlmICh0aGlzLmNoaWxkUGVkZXNbMF0ucGhlbm90eXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAoa2V5Q29kZSA+IDQ4ICYmIGtleUNvZGUgPCA1Nykge1xuICAgICAgICB0aGlzLmRyb3BQZWRlVG9TdG9yYWdlKGtleUNvZGUgLSA0OSk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPiA5NiAmJiBrZXlDb2RlIDwgMTA1KSB7XG4gICAgICAgIHRoaXMuZHJvcFBlZGVUb1N0b3JhZ2Uoa2V5Q29kZSAtIDk3KTtcbiAgICAgIH0gZWxzZSBpZiAoKGtleUNvZGUgPT09IDQ4IHx8IGtleUNvZGUgPT09IDk2KSAmJiB0aGlzLnVuZG9TcG90TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMudW5kb1BlZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBzdHJhaW4gdG8gYSBmcmlkZ2VcbiAgICpcbiAgICogQ2FsbGVkIGJ5IGAob25Ecm9wU3VjZXNzKWAgb2Ygc2xvdFxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gJGV2ZW50IC0gZHJhZyBldmVudCwgaW5jdWRpbmcgZGF0YSBmb3Igc3RyYWluIHRvIGFkZDtcbiAgICogaGFzOiBzaGlmdHMsIGRlbGV0aW9uLCBwYXJlbnRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcG90IC0gc2xvdCB0byBkcm9wIG5ldyBzdHJhaW5cbiAgICovXG4gIGRyb3BQZWRlKHBlZGU6IE1lbmRlbHBlZGVQZWRlKSB7XG4gICAgdGhpcy5fY2hlY2tRdWl6KCk7XG4gICAgLy9jb25zb2xlLmxvZygnZHJvcHBpbmcgcGVkZScpXG4gICAgaWYgKHBlZGUuaXNGZW1hbGUgPT09ICdNJyAmJiB0aGlzLm1hbGVQZWRlLnBoZW5vdHlwZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5tYWxlUGVkZSA9IHtcbiAgICAgICAgYnVnSUQ6IHBlZGUuYnVnSUQsXG4gICAgICAgIGdlbm90eXBlOiBwZWRlLmdlbm90eXBlLFxuICAgICAgICBwaGVub3R5cGU6IHBlZGUucGhlbm90eXBlLFxuICAgICAgICB1c2VySWQ6IHBlZGUudXNlcklkLFxuICAgICAgICBpc0ZlbWFsZTogcGVkZS5pc0ZlbWFsZSxcbiAgICAgICAgc2NlbkNvZGU6IHBlZGUuc2NlbkNvZGUsXG4gICAgICAgIGlkOiBwZWRlLmlkXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5mZW1hbGVQZWRlLnBoZW5vdHlwZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkUGVkZXMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBlZGUuaXNGZW1hbGUgPT09ICdGJyAmJiB0aGlzLmZlbWFsZVBlZGUucGhlbm90eXBlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmZlbWFsZVBlZGUgPSB7XG4gICAgICAgIGJ1Z0lEOiBwZWRlLmJ1Z0lELFxuICAgICAgICBnZW5vdHlwZTogcGVkZS5nZW5vdHlwZSxcbiAgICAgICAgcGhlbm90eXBlOiBwZWRlLnBoZW5vdHlwZSxcbiAgICAgICAgdXNlcklkOiBwZWRlLnVzZXJJZCxcbiAgICAgICAgaXNGZW1hbGU6IHBlZGUuaXNGZW1hbGUsXG4gICAgICAgIHNjZW5Db2RlOiBwZWRlLnNjZW5Db2RlLFxuICAgICAgICBpZDogcGVkZS5pZFxuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWFsZVBlZGUucGhlbm90eXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGRQZWRlcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jaGVja1F1aXooKSB7XG4gICAgaWYgKHRoaXMuaXNRdWl6ID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLm1lbmRlbEZyaWRnZSkge1xuICAgICAgICB0aGlzLmlzUXVpeiA9IHRoaXMubWVuZGVsRnJpZGdlLmlzUXVpejtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVDaGlsZFBlZGVzKCkge1xuICAgIGlmICh0aGlzLm1hbGVQZWRlLnBoZW5vdHlwZSAhPT0gbnVsbCAmJiB0aGlzLmZlbWFsZVBlZGUucGhlbm90eXBlICE9PSBudWxsKSB7XG4gICAgICBsZXQgdXNlcklkID0gdGhpcy51c2VyLmlkO1xuICAgICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG5cbiAgICAgICAgbGV0IHNjZW5TaG9ydENvZGUgPSBwYXJhbXNbJ3NjZW5TaG9ydENvZGUnXTtcblxuICAgICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UubWFrZUNoaWxkcmVuKHRoaXMubWFsZVBlZGUsIHRoaXMuZmVtYWxlUGVkZSwgdGhpcy5jdXJyRnJpZGdlR2Vub0ZhY3RzKVxuICAgICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIChjaGlsZFBlZGVzKSA9PiB7XG4gICAgICAgICAgICAgIC8vdGhpcy5jaGlsZFBlZGVzID0gY2hpbGRQZWRlcztcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjaGlsZFBlZGVzKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRQZWRlc1t0aGlzLmNoaWxkUGVkZXMubGVuZ3RoIC0gMV0ucGhlbm90eXBlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2xlYXJpbmcgdGhlIGxpc3QnKVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jaGlsZFBlZGVzW3RoaXMuY2hpbGRQZWRlcy5sZW5ndGgtMV0pXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZFBlZGVzID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZFBlZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRQZWRlc1tpXS5idWdJRCA9IHRoaXMuY3Vyck51bUNoaWxkcmVuICsgaSArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZFBlZGVzLnB1c2goY2hpbGRQZWRlc1tpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5jdXJyTnVtQ2hpbGRyZW4gKz0gdGhpcy5jaGlsZFBlZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNoaWxkUGVkZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgdGhlIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlc1xuICAgKiB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtcGVkZXMuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLXBlZGVzLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gNDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTW9kYWxEaXNtaXNzUmVhc29ucyB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVuZGVscGVkZS1zY2VuYXJpb3MnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tZW5kZWxwZWRlLXNjZW5hcmlvcy50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbWVuZGVscGVkZS1zY2VuYXJpb3Muc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE1lbmRlbHBlZGVTY2VuYXJpb3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgdXNlcjogVXNlcjtcblxuICAvKipcbiAgICogU3RhdGUgdG8gbW9uaXRpb3IgaWYgY29tcG9uZW50IGFjdGl2ZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgdG9cbiAgICogbXVsdGlwbGUgc3RyZWFtcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogT2JzZXJ2ZXMgdGhlIHNjZW5Db2RlIG9mIHRoZSBVUkxcbiAgICovXG4gIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuXG4gIHByaXZhdGUgaGFzUXVpejogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICBsZXQgc2NlblNob3J0Q29kZTogU3RyaW5nID0gcGFyYW1zWydzY2VuU2hvcnRDb2RlJ107XG4gICAgICBpZiAoc2NlblNob3J0Q29kZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKCdRVUlaJykpe1xuICAgICAgICB0aGlzLmhhc1F1aXogPSB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTmdiTW9kYWwpIHtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG4gIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbWVuZGVscGVkZS1zY2VuYXJpb3MuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbmRlbHBlZGUnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tZW5kZWxwZWRlLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBNZW5kZWxwZWRlQ29tcG9uZW50e1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWRtaW5TdHVkZW50LCBTdHVkZW50RnJpZGdlLCBTdHVkZW50TWVuZGVsRnJpZGdlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogU2VydmljZSB3aGljaCBkZWFscyB3aXRoIGFsbCBzdHVkZW50LXJlbGF0ZWQgYmFja2VuZCBjYWxsc1xuICogZnJvbSBhbiBhZG1pblxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3R1ZGVudFNlcnZpY2Uge1xuICBcbiAgcHJpdmF0ZSBfYmFzZVVSTCA9ICcvYXBpL2FkbWluJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHN0dWRlbnRzLCBjb250ZW50IGlzIGRlcGVuZGVudCBvZiBsb2dnZWQgaW4gdXNlciByb2xlXG4gICAqXG4gICAqIElmIGBhZG1pbmAsIHJldHVybiBhbGwgc3R1ZGVudHMvdXNlcnNcbiAgICogXG4gICAqIElmIGBpbnN0cmAsIHJldHVybnMgc3R1ZGVudHMgb2YgY291cnNlcyBpbnN0ciB0ZWFjaHNcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge0FkbWluU3R1ZGVudFtdfSAtIGxpc3Qgb2Ygc3R1ZGVudHNcbiAgICovXG4gIGxpc3RTdHVkZW50cyhhZG1pbklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudFtdPntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldDxBZG1pblN0dWRlbnRbXT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZXRhaWxzIGFib3V0IGEgc3R1ZGVudFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBmb3IgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBmb3Igc3R1ZGVudCB0byBiZSBsb29rZWQgdXBcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50Pn0gLSBkZXRhaWxzIGFib3V0IHNwZWNpZmllZCBzdHVkZW50XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBnZXRTdHVkZW50KGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEFkbWluU3R1ZGVudD57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8QWRtaW5TdHVkZW50PihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgcm9sZSAoYWRtaW4sIGluc3RyLCBzdHVkZW50KSBvZiBhbm90aGVyIHN0dWRlbnQvdXNlclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBmb3IgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBmb3Igc3R1ZGVudCB0byB1cGRhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJvbGUgLSBuZXcgcm9sZSB0byBiZSBhc3NpZ25lZDsgb25lIG9mOiBgXCJhZG1pblwiLCBcImluc3RyXCIsIFwic3R1ZGVudFwiYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSAtIHRoZSB1cGRhdGVkIHN0dWRlbnRcbiAgICogLSBlcnJvciBgVmFsdWUgXCJyb2xlXCIgaXMgbm90IGEgdmFsaWQgcm9sZWAgaWYgcm9sZSBpc24ndCBvbmUgb2YgYGFkbWluYCwgYGluc3RyYCwgYHN0dWRlbnRgXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBzZXRTdHVkZW50Um9sZShhZG1pbklkOiBudW1iZXIsIHN0dWRlbnRJZDogbnVtYmVyLCByb2xlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgbGV0IGJvZHkgPSB7cm9sZTogcm9sZX07XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHMvJHtzdHVkZW50SWR9YCwgYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgc3R1ZGVudC91c2VyXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhZG1pbklkIC0gdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHVkZW50SWQgLSB1c2VySWQgb2Ygc3R1ZGVudCB0byBkZWxldGVcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gLSBzdHVkZW50IHdobyB3YXMganVzdCBkZWxldGVkXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBkZWxldGVTdHVkZW50KGFkbWluSWQ6IG51bWJlciwgc3R1ZGVudElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9zdHVkZW50cy8ke3N0dWRlbnRJZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2NlbmFyaW8gZnJpZGdlIGZvciBhIHN0dWRlbnQ7IGluY2x1ZGVzIGZyaWRnZSBkZXRhaWxzIHN1Y2ggYXNcbiAgICogZnJpZGdlIHN0cmFpbnMgYW5kIGd1ZXNzZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBvZiBzdHVkZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgLSBzY2VuYXJpbyBJZCBmb3IgZnJpZGdlIHRvIGZpbmRcbiAgICpcbiAgICogQHJldHVybnN7T2JzZXJ2YWJsZTxTdHVkZW50RnJpZGdlPn0gLSB0aGUgc3R1ZGVudCdzIGZyaWRnZVxuICAgKiAtIGFuIGVtcHR5IGZyaWRnZSBpZiB0aGUgZnJpZGdlIGRvZXNuJ3QgZXhpc3QgeWV0XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyIGVycm9yXG4gICAqL1xuICBnZXRGcmlkZ2UoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0dWRlbnRGcmlkZ2U+e1xuICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZ2V0PFN0dWRlbnRGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7YWRtaW5JZH0vc3R1ZGVudHMvJHtzdHVkZW50SWR9LyR7c2NlbklkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzY2VuYXJpbyBmcmlkZ2UgZm9yIGEgc3R1ZGVudDsgaW5jbHVkZXMgZnJpZGdlIGRldGFpbHMgc3VjaCBhc1xuICAgKiBmcmlkZ2Ugc3RyYWlucyBhbmQgZ3Vlc3Nlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gYWRtaW5JZCAtIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3R1ZGVudElkIC0gdXNlcklkIG9mIHN0dWRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCAtIHNjZW5hcmlvIElkIGZvciBmcmlkZ2UgdG8gZmluZFxuICAgKlxuICAgKiBAcmV0dXJuc3tPYnNlcnZhYmxlPFN0dWRlbnRGcmlkZ2U+fSAtIHRoZSBzdHVkZW50J3MgZnJpZGdlXG4gICAqIC0gYW4gZW1wdHkgZnJpZGdlIGlmIHRoZSBmcmlkZ2UgZG9lc24ndCBleGlzdCB5ZXRcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIgZXJyb3JcbiAgICovXG4gIGdldE1lbmRlbEZyaWRnZShhZG1pbklkOiBudW1iZXIsIHN0dWRlbnRJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8U3R1ZGVudE1lbmRlbEZyaWRnZT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8U3R1ZGVudE1lbmRlbEZyaWRnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9tZW5kZWwtc3R1ZGVudHMvJHtzdHVkZW50SWR9LyR7c2NlbklkfWApO1xuICB9XG5cbiAgZGVsZXRlU3R1ZGVudE1lbmRlbEZyaWRnZShhZG1pbklkOiBudW1iZXIsIHN0dWRlbnRJZDogbnVtYmVyLCBzY2VuU2hvcnRDb2RlOiBzdHJpbmcpOk9ic2VydmFibGU8YW55PntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmRlbGV0ZShgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L2RlbGV0ZS1tZW5kZWwtZnJpZGdlLyR7c3R1ZGVudElkfS8ke3NjZW5TaG9ydENvZGV9YCk7XG4gIH1cblxuICBkZWxldGVRdWl6U2NvcmUoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlciwgc2NlblNob3J0Q29kZTogc3RyaW5nKTpPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5kZWxldGUoYCR7dGhpcy5fYmFzZVVSTH0vJHthZG1pbklkfS9kZWxldGUtcXVpei1zY29yZS8ke3N0dWRlbnRJZH0vJHtzY2VuU2hvcnRDb2RlfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzY2VuYXJpbyBhY2Nlc3MgZm9yIGEgc3R1ZGVudDsgdGhpcyBkZWxldGVzIHRoZSBleGlzdGluZ1xuICAgKiBmcmlkZ2VcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFkbWluSWQgLSB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0dWRlbnRJZCAtIHVzZXJJZCBvZiBzdHVkZW50XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXBkYXRlZFN0YXRlIC0gdHJ1ZSB0byBncmFudCBhY2Nlc3MsIGZhbHNlIHRvIHJldm9rZSBhY2Nlc3NcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QWRtaW5TdHVkZW50Pn0gdXBkYXRlZCBzdHVkZW50XG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICBncmFudFNjZW5BY2Nlc3MoYWRtaW5JZDogbnVtYmVyLCBzdHVkZW50SWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHVwZGF0ZWRTdGF0ZTogYm9vbGVhbik6IE9ic2VydmFibGU8QWRtaW5TdHVkZW50PntcbiAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3Q8QWRtaW5TdHVkZW50PihgJHt0aGlzLl9iYXNlVVJMfS8ke2FkbWluSWR9L3N0dWRlbnRzLyR7c3R1ZGVudElkfS8ke3NjZW5JZH1gLCB7YWNjZXNzOiB1cGRhdGVkU3RhdGV9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuLyoqXG4gKiBUaGlzIGlzIGEgY29uZmlybWF0aW9uIGRpYWxvZyB3aGVuIHVzZXIgd2FudHMgdG8gZGVsZXRlXG4gKiBzb21ldGhpbmcgc2Vuc2l0aXZlLCBpLmUuIGFub3RoZXIgdXNlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb25maXJtLWRlbGV0ZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb25maXJtLWRlbGV0ZS1kaWFsb2cudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlybURlbGV0ZURpYWxvZ0NvbXBvbmVudHtcblxuICAvKipcbiAgICogTWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRpYWxvZyB3aW5kb3dcbiAgICovXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZyA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPydcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKXtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsIi8qKlxuICogSW5mb3JtYXRpb24gbmVlZGVkIGFib3V0IGVhY2ggc2NlbmFyaW9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZW5kZWxwZWRlU2NlbmFyaW97XG4gIC8qKlxuICAgKiBIdW1hbi1yZWFkYWJsZSB2aXNpYmxlIGxhYmVsXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogU2hvcnQgc3RyaW5nIElEIGZvciB0aGUgc2NlbmFyaW87IHVzZWQgaW4gdGhlIFVSTCBhbmQgZm9yIGxpbmtpbmdcbiAgICogc2NlbmFyaW8gdG8gb3RoZXIgb2JqZWN0c1xuICAgKi9cbiAgc2hvcnRDb2RlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBvZiBwaGFnZSBzdHJhaW5zIHRvIGJlZ2luIHRoZSBzY2VuYXJpb1xuICAgKi9cbiAgc2NlblR5cGU6IHN0cmluZztcbiAgLyoqXG4gICAqIE9yZGVyIG9mIFNjZW5hcmlvXG4gICAqL1xuICBvcmRPZlNjZW46IG51bWJlcjtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBzb3J0IHNjZW5hcmlvcyBieSBvcmRPZlNjZW5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBzb3J0U2NlbmFyaW9zID0gZnVuY3Rpb24oYSxiKXtcbiAgICByZXR1cm4gYS5vcmRPZlNjZW4gLSBiLm9yZE9mU2Nlbjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2ludGVyZmFjZXMvbWVuZGVscGVkZS1zY2VuYXJpb3MuaW50ZXJmYWNlLnRzIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGFuIGVycm9yIG9iamVjdCBhbmQgbG9va3MgZm9yXG4gKiB0aGUgZXJyb3IgbWVzc2FnZTsgaXQgY2hlY2tzIHNldmVyYWwgcHJvcGVydGllcyBiZWNhdXNlXG4gKiBlcnJvcnMgYXJlIG5vdCBhbHdheXMgdW5pZm9ybVxuICpcbiAqIEBwYXJhbSB7YW55fSBlcnJvciAtIGVycm9yIG9iamVjdCB0byBmaW5kIGVycm9yIG1lc3NhZ2UgZnJvbVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlcnJvciBtZXNzYWdlIHdpdGhpbiB0aGUgb2JqZWN0IG9yXG4gKiBgXCJVbmtub3duIGVycm9yXCJgIGlmIHRoZSBlcnJvciBtZXNzYWdlIGNhbid0IGJlIGZvdW5kXG4gKi9cbmV4cG9ydCBjb25zdCByZWFkRXJyb3JNZXNzYWdlID0gZnVuY3Rpb24oZXJyb3I6IGFueSk6IHN0cmluZyB7XG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSAnVW5rbm93biBlcnJvcic7XG4gIGlmKGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLm1lc3NhZ2Upe1xuICAgcmV0dXJuIGVycm9yLmVycm9yLm1lc3NhZ2VcbiAgfSBlbHNlIGlmKGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLnRleHQpe1xuICAgcmV0dXJuIGVycm9yLmVycm9yLnRleHRcbiAgfSBlbHNlIGlmIChlcnJvciAmJiBlcnJvci5tZXNzYWdlKXtcbiAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICB9IGVsc2UgaWYoZXJyb3Ipe1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuICByZXR1cm4gZXJyb3JNZXNzYWdlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2hhcmVkL3JlYWQtZXJyb3IudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE1jQnJlYWRjcnVtYnNNb2R1bGUgfSBmcm9tICduZ3gtYnJlYWRjcnVtYnMnO1xuXG5pbXBvcnQgeyBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUGVyc29uTmFtZVBpcGUgfSBmcm9tICcuLi9waXBlcy9wZXJzb24tbmFtZS5waXBlJztcbmltcG9ydCB7IFRpdGxlQ2FzZVBpcGUgfSBmcm9tICcuLi9waXBlcy90aXRsZS1jYXNlLnBpcGUnO1xuaW1wb3J0IHsgUGVkZUltYWdlUGlwZSB9IGZyb20gJy4uL3BpcGVzL3BlZGUtaW1hZ2UucGlwZSc7XG5pbXBvcnQgeyBQZWRlUXVpelRyYWl0UGlwZSB9IGZyb20gJy4uL3BpcGVzL3BlZGUtcXVpelRyYWl0LnBpcGUnXG5pbXBvcnQgeyBQZWRlR2Vub3R5cGVQaXBlIH0gZnJvbSAnLi4vcGlwZXMvcGVkZS1nZW5vdHlwZS5waXBlJztcbmltcG9ydCB7IFBlb3BsZUxpc3ROYW1lc1BpcGUgfSBmcm9tICcuLi9waXBlcy9wZW9wbGUtbGlzdC1uYW1lcy5waXBlJztcbmltcG9ydCB7IFBoYWdlUGFyZW50c1BpcGUgfSBmcm9tICcuLi9waXBlcy9waGFnZS1wYXJlbnRzLnBpcGUnO1xuXG5pbXBvcnQgeyBGb3JtRXJyb3JzTW9kdWxlIH0gZnJvbSAnLi9mb3JtLWVycm9ycy9mb3JtLWVycm9ycy5tb2R1bGUnO1xuaW1wb3J0IHsgU2VsZWN0RHJvcE1vZHVsZSB9IGZyb20gJy4vc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3AubW9kdWxlJztcbi8vaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9ycyB9IGZyb20gJy4vY3VzdG9tLXZhbGlkYXRvcnMnO1xuLyoqXG4gKiBUaGUgU2hhcmVkIE1vZHVsZSBjb250YWlucyBtb2R1bGVzLCBwaXBlcywgYW5kIGNvbXBvbmVudHNcbiAqIHRoYXQgYXJlIG5lZWRlZCBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogU2F2ZXMgdGltZSBieSBpbXBvcnRpbmcgdGhpcyBtb2R1bGUgcmF0aGVyIHRoYW4gdGhlXG4gKiBwaXBlcy9tb2R1bGVzL2NvbXBvbmVudHMgaW5kaXZpZHVhbGx5XG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgRm9ybUVycm9yc01vZHVsZSxcbiAgICAgIFNlbGVjdERyb3BNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgTmdiTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgIE1jQnJlYWRjcnVtYnNNb2R1bGUuZm9yUm9vdCgpXG4gICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGVyc29uTmFtZVBpcGUsXG4gICAgVGl0bGVDYXNlUGlwZSxcbiAgICBQZWRlR2Vub3R5cGVQaXBlLFxuICAgIFBlZGVJbWFnZVBpcGUsXG4gICAgUGVkZVF1aXpUcmFpdFBpcGUsXG4gICAgUGVvcGxlTGlzdE5hbWVzUGlwZSxcbiAgICBQaGFnZVBhcmVudHNQaXBlLFxuICAgIENvbmZpcm1EZWxldGVEaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICBGb3JtRXJyb3JzTW9kdWxlLFxuICAgICAgTmdiTW9kdWxlLFxuICAgICAgU2VsZWN0RHJvcE1vZHVsZSxcbiAgICAgIE1jQnJlYWRjcnVtYnNNb2R1bGUsXG4gICAgICBQZXJzb25OYW1lUGlwZSxcbiAgICAgIFRpdGxlQ2FzZVBpcGUsXG4gICAgICBQZWRlR2Vub3R5cGVQaXBlLFxuICAgICAgUGVkZUltYWdlUGlwZSxcbiAgICAgIFBlb3BsZUxpc3ROYW1lc1BpcGUsXG4gICAgICBQaGFnZVBhcmVudHNQaXBlLFxuICAgICAgUGVkZVF1aXpUcmFpdFBpcGUsXG4gICAgICBDb25maXJtRGVsZXRlRGlhbG9nQ29tcG9uZW50XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiLy9pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBCZWhhdmlvclN1YmplY3QgLCAgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgTWVuZGVscGVkZVNjZW5hcmlvLCBNZW5kZWxwZWRlRnJpZGdlLCBNZW5kZWxwZWRlUGVkZSwgTWVuZGVscGVkZVF1aXogfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBTY2VuYXJpby9mcmlkZ2UgcmVsYXRlZCBmdW5jdGlvbnMgdGhhdCBnZXQvc2VuZCBkYXRhIHRvIHRoZSBiYWNrZW5kIHNlcnZlclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfYmFzZVVSTCA9ICdhcGkvbWVuZGVscGVkZSc7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgdGhlIHNlcnZpY2VcbiAgICpcbiAgICogQHBhcmFtIHtIdHRwQ2xpZW50fSBfaHR0cCBBbmd1YXIgbWVjaGFuaXNtIHRvIG1ha2UgY2FsbHMgdG8gYmFja2VuZCBzZXJ2ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgLyoqXG4gICogTGlzdCBhdmFpbGFibGUgc2NlbmFyaW9zXG4gICpcbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTY2VuYXJpb1tdPn0gbGlzdCBvZiBzY2VuYXJpb3NcbiAgKi9cbiAgbGlzdFNjZW5hcmlvcyhjb3Vyc2VMZXZlbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxNZW5kZWxwZWRlU2NlbmFyaW9bXT4ge1xuICAgIHZhciBib2R5ID0ge2xldmVsOiBjb3Vyc2VMZXZlbH07XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgLnBvc3Q8TWVuZGVscGVkZVNjZW5hcmlvW10+KHRoaXMuX2Jhc2VVUkwsIGJvZHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2NlbmFyaW9HZW5vRmFjdHMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe30pO1xuICBnZXRHZW5vRmFjdHMgPSB0aGlzLl9zY2VuYXJpb0dlbm9GYWN0cy5hc09ic2VydmFibGUoKTtcbiAgLyoqXG4gICAqIFNldCBGcmlkZ2U6IHRvIGJlIHVzZWQgYnkgUXVpeiBjb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgX2ZyaWRnZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih7fSk7XG4gIGdldEZyaWRnZSA9IHRoaXMuX2ZyaWRnZS5hc09ic2VydmFibGUoKTtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIGNvZGVcbiAgICpcbiAgICogVXNlZCBieSBmcmlkZ2UgYW5kIGxvY2F0aW9uIGNvbXBvbmVudHNcbiAgICogdG8gZ2V0IHRoZSBjb2RlIHdpdGhvdXQgdGhlIHJvdXRlXG4gICAqL1xuICAgIC8vIHByaXZhdGUgX3NjZW5hcmlvQ29kZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gICAgLy8gZ2V0U2NlbmFyaW9Db2RlID0gdGhpcy5fc2NlbmFyaW9Db2RlLmFzT2JzZXJ2YWJsZSgpO1xuXG5cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHNhdmUgc2NlbmFyaW8gc3R1ZmY6XG4gICAqIHNjZW5hcmlvRGV0YWlscywgc2NlbmFyaW9HdWVzc2VzLCBhbmQgc2NlbmFyaW9Db2RlXG4gICAqXG4gICAqIFVzZWQgd2hlbiBuYXZpZ2F0aW5nIGF3YXkgZnJvbSBzY2VuYXJpbyBjb21wb25lbnRcbiAgICovXG4gIC8qcmVzZXRTY2VuYXJpbygpIHtcbiAgICAgICAgdGhpcy5fc2NlbmFyaW9EZXRhaWxzLm5leHQoJycpO1xuICAgICAgICB0aGlzLl9zY2VuYXJpb0d1ZXNzZXMubmV4dCh7fSk7XG4gICAgICAgIHRoaXMuX3NjZW5hcmlvQ29kZS5uZXh0KCcnKTtcbiAgICB9Ki9cblxuICAvKipcbiAgKiBTZXQgdGhlIHNjZW5hcmlvIGRldGFpbHMgYW5kIHNjZW5hcmlvIGd1ZXNzZXNcbiAgKlxuICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuYXJpb0RldGFpbHMgLSBzY2VuYXJpbyBkZXRhaWxzXG4gICogLSBuZWNlc3NhcnkgZm9yIHBlcmZvcm1pbmcgZXhwZXJpbWVudHNcbiAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbmFyaW9HdWVzc2VzIGN1cnJlbnQgc2NlbmFyaW8gZ3Vlc3Nlc1xuICAqL1xuICBzZXRTY2VuYXJpbyhzY2VuYXJpb0dlbm9GYWN0czogc3RyaW5nKSB7XG4gICAgICAgIGlmIChzY2VuYXJpb0dlbm9GYWN0cyAhPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX3NjZW5hcmlvR2Vub0ZhY3RzXG4gICAgICAgICAgICAgIC5uZXh0KHNjZW5hcmlvR2Vub0ZhY3RzKTtcbiAgICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZnJpZGdlIEZyaWRnZSB0byBiZSBzZXRcbiAgICovXG4gIHNldEZyaWRnZShmcmlkZ2U6IE1lbmRlbHBlZGVGcmlkZ2UpIHtcbiAgICB0aGlzLl9mcmlkZ2UubmV4dChmcmlkZ2UpO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBzY2VuYXJpbyBjb2RlXG4gICAqXG4gICAqIFVzZWQgYnkgY29tcG9uZW50c1xuICAgKiB0byBnZXQgdGhlIGNvZGUgd2l0aG91dCB0aGUgcm91dGVcbiAgICovXG4gIHByaXZhdGUgX3NjZW5hcmlvQ29kZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XG4gIGdldFNjZW5hcmlvQ29kZSA9IHRoaXMuX3NjZW5hcmlvQ29kZS5hc09ic2VydmFibGUoKTtcbi8qKlxuICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGEgc3BlY2lmaWMgc2NlbmFyaW9cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGlkZW50aWZpZXJcbiAqXG4gKiBAcmV0dXJucyB7U2NlbmFyaW99XG4gKiAtIHNjZW5hcmlvIGluZm9ybWF0aW9uXG4gKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGxvYWQgc2NlbmFyaW8gPHNjZW5JZD5cIiBpZiBzY2VuYXJpbyBkb2Vzbid0IGV4aXN0XG4gKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICovXG4gIGdldFNjZW5hcmlvKHNjZW5TaG9ydENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8TWVuZGVscGVkZVNjZW5hcmlvPiB7XG4gICAgICB0aGlzLl9zY2VuYXJpb0NvZGUubmV4dChzY2VuU2hvcnRDb2RlKTtcbiAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgLmdldDxNZW5kZWxwZWRlU2NlbmFyaW8+KGAke3RoaXMuX2Jhc2VVUkx9LyR7c2NlblNob3J0Q29kZX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZnJpZGdlIGZvciB0aGUgdXNlci9zY2VuYXJpb1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxGcmlkZ2U+fVxuICAgKiAtIG5ld2x5IGNyZWF0ZWQgZnJpZGdlXG4gICAqIC0gb3IgZXJyb3IgXCJVbmFibGUgdG8gY3JlYXRlIG5ldyBwaGFnZSBmb3Igc2NlbmFyaW9cIiBpZiBpc3N1ZSBjcmVhdGUgcGhhZ2VcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byBzYXZlIG5ldyBmcmlkZ2VcIiBpZiBjb3VsZG4ndCBjcmVhdGVcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGNyZWF0ZU1lbmRlbEZyaWRnZSh1c2VySWQ6IG51bWJlciwgc2NlblNob3J0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxNZW5kZWxwZWRlRnJpZGdlPiB7XG4gICAgLy9jb25zb2xlLmxvZygndXNlcmlkLi4uJyt1c2VySWQrJyBzY2VuYXJpbyBzaG9ydCBjb2RlOi4uJytzY2VuU2hvcnRDb2RlKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8TWVuZGVscGVkZUZyaWRnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlblNob3J0Q29kZX0vbmV3LWZyaWRnZWApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmcmlkZ2UgZm9yIHRoZSB1c2VyL3NjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZT59XG4gICAqIC0gbmV3bHkgY3JlYXRlZCBmcmlkZ2VcbiAgICogLSBvciBlcnJvciBcIlVuYWJsZSB0byBjcmVhdGUgbmV3IHBoYWdlIGZvciBzY2VuYXJpb1wiIGlmIGlzc3VlIGNyZWF0ZSBwaGFnZVxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIHNhdmUgbmV3IGZyaWRnZVwiIGlmIGNvdWxkbid0IGNyZWF0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvciAgL2FwaS9tZW5kZWxwZWRlLzp1c2VySWQvOnNjZW5TaG9ydENvZGUvOm1hbGVQZWRlSWQvOmZlbWFsZVBlZGVJZFxuICAgKi9cbiAgbWFrZUNoaWxkcmVuKG1hbGVQZWRlOiBNZW5kZWxwZWRlUGVkZSwgZmVtYWxlUGVkZTogTWVuZGVscGVkZVBlZGUsIGdlbm9GYWN0czogc3RyaW5nKTogT2JzZXJ2YWJsZTxNZW5kZWxwZWRlUGVkZVtdPiB7XG5cbiAgICAvL2NvbnNvbGUubG9nKGdlbm9GYWN0cyk7XG4gICAgLy9jb25zb2xlLmxvZyh0eXBlb2YgZ2Vub0ZhY3RzKTtcbiAgICB2YXIgZ2Vub0ZhY3RzT2JqID0ge1xuICAgICAgJ2dlbm9GYWN0cyc6IGdlbm9GYWN0cyxcbiAgICAgICdtYWxlUGVkZSc6IG1hbGVQZWRlLFxuICAgICAgJ2ZlbWFsZVBlZGUnOiBmZW1hbGVQZWRlXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3Q8TWVuZGVscGVkZVBlZGVbXT4oYCR7dGhpcy5fYmFzZVVSTH0vbWFrZS1jaGlsZHJlbmAsIGdlbm9GYWN0c09iaik7XG4gIH1cblxuICBpbnNlcnRQZWRlKHBlZGU6IE1lbmRlbHBlZGVQZWRlLCBmcmlkZ2U6IE1lbmRlbHBlZGVGcmlkZ2UsIHNjZW5TaG9ydENvZGU6IFN0cmluZyk6IE9ic2VydmFibGU8TWVuZGVscGVkZUZyaWRnZT4ge1xuICAgIC8vY29uc29sZS5sb2cocGVkZSk7XG4gICAgLy9jb25zb2xlLmxvZyhmcmlkZ2UpO1xuICAgIGxldCBpc0Y6IGJvb2xlYW4gPSBwZWRlLmlzRmVtYWxlPT09J0YnP3RydWU6ZmFsc2VcbiAgICB2YXIgaW5zZXJ0T2JqID0ge1xuICAgICAgJ2ZyaWRnZUlkJyA6IGZyaWRnZS5pZCxcbiAgICAgICdwZWRlVG9CZUluc2VydGVkJyA6IHtcbiAgICAgICAgYnVnSUQgOiBwZWRlLmJ1Z0lELFxuICAgICAgICBnZW5vdHlwZSA6IHBlZGUuZ2Vub3R5cGUsXG4gICAgICAgIGlzRmVtYWxlIDogaXNGLFxuICAgICAgICBwaGVub3R5cGU6IHBlZGUucGhlbm90eXBlLFxuICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKGluc2VydE9iaik7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdDxNZW5kZWxwZWRlRnJpZGdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3NjZW5TaG9ydENvZGV9L2FkZC1wZWRlYCwgaW5zZXJ0T2JqKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVF1aXpTY29yZShxdWl6UGVkZXM6IE1lbmRlbHBlZGVQZWRlW10sIHN0dWRlbnRBbnN3ZXJzOiBzdHJpbmdbXSwgcXVpekZyaWRnZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE1lbmRlbHBlZGVRdWl6PiB7XG4gICAgdmFyIHNjb3JlSGVscGVyT2JqID0ge1xuICAgICAgcXVpelBlZGVzOiBxdWl6UGVkZXMsXG4gICAgICBzdHVkZW50QW5zd2Vyczogc3R1ZGVudEFuc3dlcnMsXG4gICAgICBmcmlkZ2VJZCA6IHF1aXpGcmlkZ2VJZFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0PE1lbmRlbHBlZGVRdWl6PihgJHt0aGlzLl9iYXNlVVJMfS9jYWxjdWxhdGUtc2NvcmVgLCBzY29yZUhlbHBlck9iaik7XG4gIH1cblxuICAgIC8qKlxuICAgKiBHZXQgYW4gZXhpc3RpbmcgZnJpZGdlIGZvciB1c2VyL3NjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZT59XG4gICAqIC0gZXhpc3RpbmcgZnJpZGdlXG4gICAqIC0gb3IgZXJyb3IgXCJObyBmcmlkZ2UgZm9yIHNjZW5hcmlvL3VzZXJcIiBpZiBmcmlkZ2UgZG9lcyBub3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIGdldE1lbmRlbEZyaWRnZSh1c2VySWQ6IG51bWJlciwgc2NlblNob3J0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxNZW5kZWxwZWRlRnJpZGdlPiB7XG4gICAgLy9jb25zb2xlLmxvZygndXNlcklkLS0nK3VzZXJJZCsnIFNjZW4gc2hvcnQgY29kZTogJytzY2VuU2hvcnRDb2RlKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8TWVuZGVscGVkZUZyaWRnZT4oYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlblNob3J0Q29kZX1gKTtcblxuICB9XG5cbiAgZGVsZXRlUGVkZSh1c2VySWQ6IG51bWJlciwgc2NlblNob3J0Q29kZTogc3RyaW5nLCBwZWRlOiBNZW5kZWxwZWRlUGVkZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IG1lbmRlbFBlZGVJZCA9IHBlZGUuaWQ7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgLmRlbGV0ZShgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuU2hvcnRDb2RlfS8ke21lbmRlbFBlZGVJZH1gKVxuICB9XG4gIC8qKlxuICAgKiBTZW5kIHVwZGF0ZWQgZ3Vlc3NlcyBmb3IgdGhlIHNjZW5hcmlvIHRvIGJlIHNhdmVkIGluIGRhdGFiYXNlXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBndWVzc2VzIHN0cmluZyBvZiB1cGRhdGVkIGd1ZXNzZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICogLSB1cGRhdGVkIGd1ZXNzZXNcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBmaW5kIGZyaWRnZVwiIGlmIGZyaWRnZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgXCJDb3VsZCBub3Qgc2F2ZSBuZXcgZ3Vlc3Nlc1wiIGlmIGNvdWxkbid0IHVwZGF0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgIC8qIHNhdmVEZWxldGlvbnMoZ3Vlc3NlczogYW55LCB1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLnBvc3QoYCR7dGhpcy5fYmFzZVVSTH0vJHt1c2VySWR9LyR7c2NlbklkfS9kZWxldGlvbnNgLCBndWVzc2VzKTtcbiAgICB9Ki9cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZyaWRnZSBmb3IgdGhlIHVzZXIvc2NlbmFyaW9cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlPn1cbiAgICogLSBuZXdseSBjcmVhdGVkIGZyaWRnZVxuICAgKiAtIG9yIGVycm9yIFwiVW5hYmxlIHRvIGNyZWF0ZSBuZXcgcGhhZ2UgZm9yIHNjZW5hcmlvXCIgaWYgaXNzdWUgY3JlYXRlIHBoYWdlXG4gICAqIC0gb3IgZXJyb3IgXCJVbmFibGUgdG8gc2F2ZSBuZXcgZnJpZGdlXCIgaWYgY291bGRuJ3QgY3JlYXRlXG4gICAqIC0gb3Igb3RoZXIgc2VydmVyL2RhdGFiYXNlIGVycm9yXG4gICAqL1xuICAgLyogY3JlYXRlRnJpZGdlKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RnJpZGdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxGcmlkZ2U+KGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vbmV3LWZyaWRnZWApO1xuICAgIH0qL1xuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXhpc3RpbmcgZnJpZGdlIGZvciB1c2VyL3NjZW5hcmlvXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgdXNlcklkIG9mIGxvZ2dlZCBpbiB1c2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgc2NlbmFyaW8gY29kZSBvZiBjdXJyZW50IHNjZW5hcmlvXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEZyaWRnZT59XG4gICAqIC0gZXhpc3RpbmcgZnJpZGdlXG4gICAqIC0gb3IgZXJyb3IgXCJObyBmcmlkZ2UgZm9yIHNjZW5hcmlvL3VzZXJcIiBpZiBmcmlkZ2UgZG9lcyBub3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gIC8qICBnZXRGcmlkZ2UodXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGcmlkZ2U+IHtcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5nZXQ8RnJpZGdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9YCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSovXG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBwaGFnZSBzdHJhaW4gdG8gdGhlIGZyaWRnZTtcbiAgICogU2VydmVyIHVzZXMgdXNlcklkIGFuZCBzY2VuQ29kZSB0byBmaW5kIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHthbnl9IHN0cmFpbiAtIG5ldyBwaGFnZSB0byBhZGQgdG8gZnJpZGdlXG4gICAqIC0gaGFzIHN0cmFpbk51bSwgbXV0YXRpb25MaXN0LCBhbmQgZGVsZXRpb25cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlUGhhZ2U+fVxuICAgKiAtIG5ld2x5IHNhdmVkIHBoYWdlXG4gICAqIC0gb3IgZXJyb3IgXCJVc2VyIG5vdCBmb3VuZFwiIGlmIHVzZXIgbm90IGZvdW5kXG4gICAqIC0gb3IgZXJyb3IgXCJGYWlsZWQgdG8gbG9hZCBzY2VuYXJpbyA8c2NlbklkPlwiIGlmIHNjZW5hcmlvIG5vdCBmb3VuZFxuICAgKiAtIG9yIGVycm9yIFwiRmFpbGVkIHRvIGZpbmQgZnJpZGdlXCIgaWYgZnJpZGdlIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBvdGhlciBzZXJ2ZXIvZGF0YWJhc2UgZXJyb3JcbiAgICovXG4gICAvKiBhZGRTdHJhaW4odXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nLCBzdHJhaW46IGFueSk6IE9ic2VydmFibGU8RnJpZGdlUGhhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0PEZyaWRnZVBoYWdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9L2ZyaWRnZS1waGFnZWAsIHN0cmFpbilcbiAgICB9ICovXG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBkZXRhaWxzL2luZm9ybWF0aW9uIGFib3V0IGFuIGV4aXN0aW5nIHBoYWdlIGluIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCB1c2VySWQgb2YgbG9nZ2VkIGluIHVzZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCBzY2VuYXJpbyBjb2RlIG9mIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZX0gc3RyYWluIC0gc3RyYWluIHRvIHVwZGF0ZVxuICAgKiAtIHVzZSBzdHJhaW4gYGlkYCB0byBzcGVjaWZ5IHN0cmFpbiBhbmQgc2VuZCB1cGRhdGVkIGluZm9cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RnJpZGdlUGhhZ2U+fVxuICAgKiAtIHVwZGF0ZWQgc3RyYWluXG4gICAqIC0gb3IgZXJyb3IgXCJQaGFnZSBub3QgZm91bmRcIiBpZiBzdHJhaW4gZG9lc24ndCBleGlzdFxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgIC8qIHVwZGF0ZVN0cmFpbih1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHN0cmFpbjogRnJpZGdlUGhhZ2UpOiBPYnNlcnZhYmxlPEZyaWRnZVBoYWdlPiB7XG4gICAgICAgIGxldCBzdHJhaW5JZCA9IHN0cmFpbi5pZDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgIC5wb3N0PEZyaWRnZVBoYWdlPihgJHt0aGlzLl9iYXNlVVJMfS8ke3VzZXJJZH0vJHtzY2VuSWR9LyR7c3RyYWluSWR9YCwgc3RyYWluKVxuICAgIH0gKi9cblxuICAvKipcbiAgICogRGVsZXRlIGEgc3RyYWluIGZyb20gdGhlIGZyaWRnZSAoYW5kIGRhdGFiYXNlKVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIHVzZXJJZCBvZiBsb2dnZWQgaW4gdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIHNjZW5hcmlvIGNvZGUgb2YgY3VycmVudCBzY2VuYXJpb1xuICAgKiBAcGFyYW0ge0ZyaWRnZVBoYWdlfSBzdHJhaW4gLSB0aGUgc3RyYWluIHRvIGRlbGV0ZVxuICAgKiAtIHVzZSBzdHJhaW4gYGlkYCB0byBzcGVjaWZ5IHdoaWNoIHN0cmFpbiB0byBkZWxldGVcbiAgICpcbiAgICogQHJldHVybnMge2FueX1cbiAgICogLSB0aGUgc3RyYWluIGp1c3QgZGVsZXRlZFxuICAgKiAtIG9yIGVycm9yIFwiUGhhZ2Ugbm90IGZvdW5kXCIgaWYgc3RyYWluIGRvZXNuJ3QgZXhpc3RcbiAgICogLSBvciBlcnJvciBcIkZhaWxlZCB0byBmaW5kIGZyaWRnZVwiIGlmIGZyaWRnZSBkb2Vzbid0IGV4aXN0XG4gICAqIC0gb3IgZXJyb3IgXCJVbmFibGUgdG8gcmVtb3ZlIHN0cmFpbiBmcm9tIGZyaWRnZVwiIGlmIGNvdWxkbid0IGRlbGV0ZVxuICAgKiAtIG9yIG90aGVyIHNlcnZlci9kYXRhYmFzZSBlcnJvclxuICAgKi9cbiAgLyogIGRlbGV0ZVN0cmFpbih1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcsIHN0cmFpbjogRnJpZGdlUGhhZ2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgc3RyYWluSWQgPSBzdHJhaW4uaWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAuZGVsZXRlKGAke3RoaXMuX2Jhc2VVUkx9LyR7dXNlcklkfS8ke3NjZW5JZH0vJHtzdHJhaW5JZH1gKVxuICAgIH0qL1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbWVuZGVscGVkZS1zY2VuYXJpb3Muc2VydmljZS50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKXtcbiAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9ib290c3RyYXAudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNY0JyZWFkY3J1bWJzQ29uZmlnIH0gZnJvbSAnbmd4LWJyZWFkY3J1bWJzJztcblxuaW1wb3J0IHsgQXBwUm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlZEluR3VhcmQgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlJztcbmltcG9ydCB7IENyaWNrZXRTZXJ2aWNlIH0gZnJvbSAnLi9jcmlja2V0L2NyaWNrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBDb3Vyc2VTZXJ2aWNlIH0gZnJvbSAnLi9hZG1pbi9jb3Vyc2UvY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW9SZXNvbHZlciB9IGZyb20gJy4vY3JpY2tldC9zY2VuYXJpby5yZXNvbHZlcic7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9SZXNvbHZlciB9IGZyb20gJy4vbWVuZGVscGVkZS9tZW5kZWxwZWRlLXNjZW5hcmlvLnJlc29sdmVyJ1xuLy9pbXBvcnQgeyBTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2VsZWN0LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEFkbWluTW9kdWxlIH0gZnJvbSAnLi9hZG1pbi9hZG1pbi5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2R1bGUgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBIZWxwTW9kdWxlIH0gZnJvbSAnLi9oZWxwL2hlbHAubW9kdWxlJztcbmltcG9ydCB7IFByb2ZpbGVNb2R1bGUgfSBmcm9tICcuL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ3JpY2tldE1vZHVsZSB9IGZyb20gJy4vY3JpY2tldC9jcmlja2V0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZDb21wb25lbnQgfSBmcm9tICcuL25hdi9uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBNZW5kZWxwZWRlTW9kdWxlIH0gZnJvbSAnLi9tZW5kZWxwZWRlL21lbmRlbHBlZGUubW9kdWxlJ1xuXG4vKipcbiAqIFRoZSBtYWluIGJvb3RzdHJhcHBlZCBtb2R1bGVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSGVscE1vZHVsZSxcbiAgICBBZG1pbk1vZHVsZSxcbiAgICBQcm9maWxlTW9kdWxlLFxuICAgIEF1dGhlbnRpY2F0aW9uTW9kdWxlLFxuICAgIENyaWNrZXRNb2R1bGUsXG4gICAgTWVuZGVscGVkZU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChBcHBSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBOYXZDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBQYWdlTm90Rm91bmRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIExvZ2dlZEluR3VhcmQsXG4gICAgQ3JpY2tldFNlcnZpY2UsXG4gICAgQ291cnNlU2VydmljZSxcbiAgICBTY2VuYXJpb1Jlc29sdmVyLFxuICAgIE1lbmRlbHBlZGVTY2VuYXJpb1Jlc29sdmVyLFxuICAgIC8vU2VsZWN0U2VydmljZVxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGJyZWFkY3J1bWJzQ29uZmlnOiBNY0JyZWFkY3J1bWJzQ29uZmlnKSB7XG5cbiAgICBicmVhZGNydW1ic0NvbmZpZy5wb3N0UHJvY2VzcyA9ICh4KSA9PiB7XG5cbiAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBmaXJzdCBicmVhZGNydW1iIGFsd2F5cyBwb2ludHMgdG8gaG9tZVxuXG4gICAgICBsZXQgeSA9IHg7XG5cbiAgICAgIGlmICh4Lmxlbmd0aCAmJiB4WzBdLnRleHQgIT09ICdIb21lJykge1xuICAgICAgICB5ID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdIb21lJyxcbiAgICAgICAgICAgIHBhdGg6ICcnXG4gICAgICAgICAgfVxuICAgICAgICBdLmNvbmNhdCh4KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHk7XG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXBwLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEFwcFJvdXRlczogUm91dGVzID1cbiAgICAgIFt7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICAge1xuICAgICAgICBwYXRoOiAnKionLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VOb3RGb3VuZENvbXBvbmVudFxuICAgICAgfV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hcHAucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2hvbWUvaG9tZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2hvbWUvaG9tZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA4NjZcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9ob21lL2hvbWUuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2hvbWUvaG9tZS5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NoYXJlZC9jb25maXJtLWRlbGV0ZS1kaWFsb2cudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvY29uZmlybS1kZWxldGUtZGlhbG9nLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IGEgdXNlcidzIG9yIHN0dWRlbnRzIGZyaXN0IGFuZCBsYXN0IG5hbWUgYXMgXCJmaXJzdE5hbWUgbGFzdE5hbWVcIlxuICogLSBXaGVuIHJldmVyc2UgaXMgdHJ1ZSwgZm9ybWF0IGFzIFwibGFzdE5hbWUsIGZpcnN0TmFtZVwiXG4gKiAtIEFibGUgdG8gaGFuZGxlIHdoZW4gb25seSBmaXJzdCBvciBsYXN0IG5hbWUgaXMgc2V0XG4gKlxuICogKipVc2FnZToqKiBge3sgcGVyc29uIHwgcGVyc29uTmFtZTppc1JldmVyc2UgfX1gXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+Tm9ybWFsIG91dHB1dCA6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT57Zmlyc3ROYW1lOiBcIk1pY2tleVwiLCBsYXN0TmFtZTogXCJNb3VzZVwifTwvY29kZT4gYmVjb21lcyBcIk1pY2tleSBNb3VzZVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5SZXZlcnNlIG91dHB1dCA6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT57Zmlyc3ROYW1lOiBcIk1pY2tleVwiLCBsYXN0TmFtZTogXCJNb3VzZVwifTwvY29kZT4gYmVjb21lcyBcIk1vdXNlLCBNaWNrZXlcIlxuICogQGV4YW1wbGUgPGNhcHRpb24+Rmlyc3QgbmFtZSBvbmx5IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPntmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiB1bmRlZmluZWR9PC9jb2RlPiBiZWNvbWVzIFwiTWlja2V5XCJcbiovXG5AUGlwZSh7bmFtZTogJ3BlcnNvbk5hbWUnfSlcbmV4cG9ydCBjbGFzcyBQZXJzb25OYW1lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShwZXJzb246IGFueSwgcmV2ZXJzZTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgbGV0IGZOYW1lOiBzdHJpbmcgPSBwZXJzb24uZmlyc3ROYW1lIHx8ICcnO1xuICAgIGxldCBsTmFtZTogc3RyaW5nID0gcGVyc29uLmxhc3ROYW1lIHx8ICcnO1xuICBpZihyZXZlcnNlKXtcbiAgICByZXR1cm4gbE5hbWUgKyAoZk5hbWUhPT0nJyAmJiBsTmFtZSAhPT0gJycgPyAnLCAnIDogJycpK2ZOYW1lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmTmFtZSArIChmTmFtZSE9PScnICYmIGxOYW1lICE9PSAnJyA/ICcgJyA6ICcnKStsTmFtZTtcbiAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9wZXJzb24tbmFtZS5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEZvcm1hdCBhIHN0cmluZyB0byBjYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCB3b3JkXG4gKlxuICogKipVc2FnZToqKiBge3tpbnB1dFN0cmluZyB8IHRpdGxlQ2FzZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSBcIkknbSBhIGNhdFwiIGJlY29tZXMgXCJJJ20gQSBDYXRcIlxuICogQGV4YW1wbGUgXCJoZWFyIE1FIHJvYVJcIiBiZWNvbWVzIFwiSGVhciBNZSBSb2FyXCJcbiAqL1xuXG4gQFBpcGUoe25hbWU6ICd0aXRsZUNhc2UnfSlcbiBleHBvcnQgY2xhc3MgVGl0bGVDYXNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICB0cmFuc2Zvcm0oaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgIHJldHVybiBpbnB1dFN0cmluZy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykubWFwKCh3b3JkKT0+e1xuICAgICAgIHJldHVybiAod29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpO1xuICAgICB9KS5qb2luKCcgJyk7XG4gICB9XG4gfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvcGlwZXMvdGl0bGUtY2FzZS5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEZvcm1hdCBhIE1lbmRlbFBlZGUncyBwaGVub3R5cGUgaW50byBhIENTUyBjbGFzcyBsaXN0XG4gKlxuICogKipVc2FnZToqKiBge3sgcGhlbm9MaXN0IHwgcGVkZUltYWdlIH19YFxuICpcbiAqL1xuQFBpcGUoe25hbWU6ICdwZWRlSW1hZ2UnfSlcbmV4cG9ydCBjbGFzcyBQZWRlSW1hZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBoZW5vdHlwZTogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIC8vIFtcIkRvdENvbG9yXCIsXCJFeWVDb2xvclwiLFwiU2VnQ29sb3JcIixcIk51bUxlZ3NcIixcIk51bVNlZ21lbnRzXCJdO1xuICAgIHZhciBjc3NDbGFzcyA9ICdteC1hdXRvIHNpemVJJztcbiAgICBjc3NDbGFzcyArPSAnIG1wZWRlLWJvZHljb2wtJyArIHBoZW5vdHlwZVsyXTsgLy8gU2VnQ29sb3JcbiAgICBjc3NDbGFzcyArPSAnIG1wZWRlLWV5ZWNvbC0nICsgcGhlbm90eXBlWzFdOyAvLyBFeWVDb2xvclxuICAgIGNzc0NsYXNzICs9ICcgbXBlZGUtcGVkZS0nICsgcGhlbm90eXBlWzBdLnRvTG93ZXJDYXNlKCkgLy8gRG90Q29sb3JcbiAgICBjc3NDbGFzcyArPSAnLXNlZycgKyBwaGVub3R5cGVbNF0gLy8gTnVtU2VnbWVudHNcbiAgICBjc3NDbGFzcyArPSAnLWxlZycgKyBwaGVub3R5cGVbM10gKyAnLW1pbic7IC8vIE51bUxlZ3NcblxuICAgIHJldHVybiBjc3NDbGFzc1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9wZWRlLWltYWdlLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IGEgTWVuZGVsUGVkZSdzIGdlbm90eXBlIGFzIEEgYW5kIGEgYWxsZWxlc1xuICogLSBXaGVuIG11bHRBbGxlbGUvbXVsdEdlbmVzLCB1c2VzIEFeMCwgQV4xLCBBXjJcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBnZW5vdHlwZU51bSB8IHBlZGVHZW5vdHlwZTpzY2VuQ29kZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIGNvZGU+MDwvY29kZT4gYmVjb21lcyBcImFhXCJcbiAqIDxjb2RlPjE8L2NvZGU+IGJlY29tZXMgXCJBYVwiXG4gKiA8Y29kZT4zPC9jb2RlPiBiZWNvbWVzIFwiQWFcIlxuICogPGNvZGU+NDwvY29kZT4gYmVjb21lcyBcIkFBXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk11bHRpcGxlIEFsbGVsZSBvdXRwdXQgOiAgPC9jYXB0aW9uPlxuICogY29kZT4wPC9jb2RlPiBiZWNvbWVzIFwiQV4wQV4wXCJcbiAqIDxjb2RlPjE8L2NvZGU+IGJlY29tZXMgXCJBXjFBXjBcIlxuICogPGNvZGU+MjwvY29kZT4gYmVjb21lcyBcIkFeMkFeMFwiXG4gKiA8Y29kZT41PC9jb2RlPiBiZWNvbWVzIFwiQV4yQV4xXCJcbiAqIDxjb2RlPjg8L2NvZGU+IGJlY29tZXMgXCJBXjJBXjJcIlxuICogQGV4YW1wbGUgPGNhcHRpb24+SW52YWxpZCA6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT4xMDwvY29kZT4gYmVjb21lcyBcImludmFsaWRcIlxuICovXG5AUGlwZSh7bmFtZTogJ3BlZGVRdWl6VHJhaXQnfSlcbmV4cG9ydCBjbGFzcyBQZWRlUXVpelRyYWl0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShxdWl6VHJhaXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHF1aXpUcmFpdCA9PT0gXCJEb3RDb2xvclwiKXtcbiAgICAgIHJldHVybiBcIkNvbG9yIG9mIGRvdFwiXG4gICAgfSBlbHNlIGlmIChxdWl6VHJhaXQgPT09IFwiU2VnQ29sb3JcIil7XG4gICAgICByZXR1cm4gXCJDb2xvciBvZiBib2R5IHNlZ21lbnRcIlxuICAgIH0gZWxzZSBpZiAocXVpelRyYWl0ID09PSBcIkV5ZUNvbG9yXCIpe1xuICAgICAgcmV0dXJuIFwiQ29sb3Igb2YgZXllc1wiXG4gICAgfSBlbHNlIGlmIChxdWl6VHJhaXQgPT09IFwiTnVtU2VnbWVudHNcIil7XG4gICAgICByZXR1cm4gXCJOdW1iZXIgb2Ygc2VnbWVudHNcIlxuICAgIH0gZWxzZSBpZiAocXVpelRyYWl0ID09PSBcIk51bUxlZ3NcIil7XG4gICAgICByZXR1cm4gXCJOdW1iZXIgb2YgTGVnc1wiXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9wZWRlLXF1aXpUcmFpdC5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEZvcm1hdCBhIE1lbmRlbFBlZGUncyBnZW5vdHlwZSBhcyBBIGFuZCBhIGFsbGVsZXNcbiAqIC0gV2hlbiBtdWx0QWxsZWxlL211bHRHZW5lcywgdXNlcyBBXjAsIEFeMSwgQV4yXG4gKlxuICogKipVc2FnZToqKiBge3sgZ2Vub3R5cGVOdW0gfCBwZWRlR2Vub3R5cGU6c2NlbkNvZGUgfX1gXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+Tm9ybWFsIG91dHB1dCA6ICA8L2NhcHRpb24+XG4gKiBjb2RlPjA8L2NvZGU+IGJlY29tZXMgXCJhYVwiXG4gKiA8Y29kZT4xPC9jb2RlPiBiZWNvbWVzIFwiQWFcIlxuICogPGNvZGU+MzwvY29kZT4gYmVjb21lcyBcIkFhXCJcbiAqIDxjb2RlPjQ8L2NvZGU+IGJlY29tZXMgXCJBQVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NdWx0aXBsZSBBbGxlbGUgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIGNvZGU+MDwvY29kZT4gYmVjb21lcyBcIkFeMEFeMFwiXG4gKiA8Y29kZT4xPC9jb2RlPiBiZWNvbWVzIFwiQV4xQV4wXCJcbiAqIDxjb2RlPjI8L2NvZGU+IGJlY29tZXMgXCJBXjJBXjBcIlxuICogPGNvZGU+NTwvY29kZT4gYmVjb21lcyBcIkFeMkFeMVwiXG4gKiA8Y29kZT44PC9jb2RlPiBiZWNvbWVzIFwiQV4yQV4yXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkludmFsaWQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+MTA8L2NvZGU+IGJlY29tZXMgXCJpbnZhbGlkXCJcbiAqL1xuQFBpcGUoe25hbWU6ICdwZWRlR2Vub3R5cGUnfSlcbmV4cG9ydCBjbGFzcyBQZWRlR2Vub3R5cGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBlZGVHZW5vdHlwZTogbnVtYmVyLCBzY2VuQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZihwZWRlR2Vub3R5cGUgPiA4KXtcbiAgICAgIHJldHVybiAnaW52YWxpZCdcbiAgICB9XG4gICAgLy8gaW5jbHVkZXMgb3JkZXJpbmcgYWxsZWxlcyBieSBkb21pbmFuY2VcbiAgICB2YXIgZ2Vub0xpc3QgPSBbWzAsMF0sIFsxLDBdLCBbMiwwXSwgWzEsMF0sIFsxLDFdLCBbMiwxXSwgWzIsMF0sIFsyLDFdLCBbMiwyXV07XG4gICAgdmFyIHJlZ0dlbm9TdHIgPSBbJ2EnLCAnQScsICc/J107XG4gICAgdmFyIGFsbGVsZUdlbm9TdHIgPSBbJ0E8c3VwPjA8L3N1cD4nLCAnQTxzdXA+MTwvc3VwPicsICdBPHN1cD4yPC9zdXA+J11cbiAgICB2YXIgZ2VubyA9IGdlbm9MaXN0W3BlZGVHZW5vdHlwZV07XG4gICAgaWYoc2NlbkNvZGUgPT09IFwiTXVsdEFsbGVsZXNcIil7IC8vIHBvdGVudGlhbGx5IGluY2x1ZGUgIHx8IHNjZW5Db2RlID09PSBcIk11bHRHZW5lc1wiXG4gICAgICByZXR1cm4gYWxsZWxlR2Vub1N0cltnZW5vWzBdXSArIGFsbGVsZUdlbm9TdHJbZ2Vub1sxXV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlZ0dlbm9TdHJbZ2Vub1swXV0gKyByZWdHZW5vU3RyW2dlbm9bMV1dXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9wZWRlLWdlbm90eXBlLnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRm9ybWF0IGEgbGlzdCBvZiB1c2VyJ3Mgb3Igc3R1ZGVudHMgZnJpc3QgYW5kIGxhc3QgbmFtZSBhcyBcImZpcnN0TmFtZSBsYXN0TmFtZVwiXG4gKiAtIFdoZW4gcmV2ZXJzZSBpcyB0cnVlLCBmb3JtYXQgYXMgXCJsYXN0TmFtZSwgZmlyc3ROYW1lXCJcbiAqIC0gQWJsZSB0byBoYW5kbGUgd2hlbiBvbmx5IGZpcnN0IG9yIGxhc3QgbmFtZSBpcyBzZXRcbiAqXG4gKiAqKlVzYWdlOioqIGB7eyBwZW9wbGVMaXN0IHwgcGVvcGxlTGlzdE5hbWVzOmlzUmV2ZXJzZSB9fWBcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ob3JtYWwgb3V0cHV0IDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlt7Zmlyc3ROYW1lOiBcIk1pY2tleVwiLCBsYXN0TmFtZTogXCJNb3VzZVwifSwge2ZpcnN0TmFtZTogXCJEb25hbGRcIiwgbGFzdE5hbWU6IFwiRHVja1wifV08L2NvZGU+IGJlY29tZXMgXCJNaWNrZXkgTW91c2UsIERvbmFsZCBEdWNrXCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlJldmVyc2Ugb3VwdXQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+W3tmaXJzdE5hbWU6IFwiTWlja2V5XCIsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogXCJEdWNrXCJ9XTwvY29kZT4gYmVjb21lcyBcIk1vdXNlLCBNaWNrZXk7IER1Y2ssIERvbmFsZFwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NaXNzaW5nIG5hbWVzIDogIDwvY2FwdGlvbj5cbiAqIDxjb2RlPlt7Zmlyc3ROYW1lOiB1bmRlZmluZWQsIGxhc3ROYW1lOiBcIk1vdXNlXCJ9LCB7Zmlyc3ROYW1lOiBcIkRvbmFsZFwiLCBsYXN0TmFtZTogdW5kZWZpbmVkfV08L2NvZGU+IGJlY29tZXMgXCJNb3VzZSwgRG9uYWxkXCJcbiAqL1xuQFBpcGUoe25hbWU6ICdwZW9wbGVMaXN0TmFtZXMnfSlcbmV4cG9ydCBjbGFzcyBQZW9wbGVMaXN0TmFtZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHBlcnNvbkxpc3Q6IGFueVtdLCByZXZlcnNlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgZm9yKGxldCBwZXJzb24gb2YgcGVyc29uTGlzdCl7XG4gICAgICBsZXQgZk5hbWU6IHN0cmluZyA9IHBlcnNvbi5maXJzdE5hbWUgfHwgJyc7XG4gICAgICBsZXQgbE5hbWU6IHN0cmluZyA9IHBlcnNvbi5sYXN0TmFtZSB8fCAnJztcbiAgICAgIGlmKG91dCAhPT0gJycgJiYgKGZOYW1lICE9PSAnJyB8fCBsTmFtZSAhPT0gJycpKXtcbiAgICAgICAgb3V0ICs9IChyZXZlcnNlID8gJzsgJyA6ICcsICcpO1xuICAgICAgfVxuICAgIGlmKHJldmVyc2Upe1xuICAgICAgb3V0ICs9IGxOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJywgJyA6ICcnKStmTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgb3V0ICs9IGZOYW1lICsgKGZOYW1lIT09JycgJiYgbE5hbWUgIT09ICcnID8gJyAnIDogJycpK2xOYW1lO1xuICAgICAgfVxuICAgIH0vLyBlbmQgZm9yXG4gICAgcmV0dXJuIG91dFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9wZW9wbGUtbGlzdC1uYW1lcy5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGhhZ2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BoYWdlLmludGVyZmFjZSc7XG5cbi8qKlxuICogRm9ybWF0IHRoZSB0ZXh0dWFsIHByZXNlbnRhdGlvbiBvZiBhIHBoYWdlIHN0cmFpbidzIHBhcmVudHNcbiAqIChpZiBhbnkpIHdoZW4gdmlld2luZyB0aGUgZGlhbG9nIGJveCBmb3IgYSBwaGFnZVxuICpcbiAqIFRoZSBgbnVtUGFyZW50c2AgdmFyaWFibGUgaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgb25lIG9mIHRoZVxuICogcGFyZW50cyBoYWQgYmVlbiBkZWxldGVkIGZyb20gdGhlIGRhdGFiYXNlIHdoZW4gYHBhcmVudHMubGVuZ3RoICE9IG51bVBhcmVudHNgXG4gKlxuICogTm90ZTogdGhlIHBoYWdlIGBzdHJhaW5OdW1gIGFyZSAwLWJhc2VkIGJ1dCBVSSBpcyAxLWJhc2VkIHNvXG4gKiB0aGUgc3RyYWluIG51bWJlciBpcyBhZGp1c3RlZFxuICpcbiAqICoqVXNhZ2U6KiogYHt7cGFyZW50c0xpc3QgfCBwaGFnZVBhcmVudHM6bnVtUGFyZW50c319YFxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPk9uZSBwYXJlbnQgOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e3BhcmVudHM6IFt7aWQ6ICdpZDEnLCBzdHJhaW5OdW06ICc0J31dLCBudW1QYXJlbnRzOiAxfTwvY29kZT4gYmVjb21lcyBcIlN0cmFpbiA1XCJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlR3byBwYXJlbnRzOiAgPC9jYXB0aW9uPlxuICogPGNvZGU+e3BhcmVudHM6IFt7aWQ6ICdpZDEnLCBzdHJhaW5OdW06IDR9LCB7aWQ6ICdpZDInLCBzdHJhaW5OdW06IDEwfV0sIG51bVBhcmVudHM6IDJ9PC9jb2RlPiBiZWNvbWVzIFwiU3RyYWlucyA1IGFuZCAxMVwiXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Ud28gcGFyZW50cyBidXQgbWlzc2luZyBvbmU6ICA8L2NhcHRpb24+XG4gKiA8Y29kZT57cGFyZW50czogW3tpZDogJ2lkMycsIHN0cmFpbk51bTogOH1dLCBudW1QYXJlbnRzOiAyfTwvY29kZT4gYmVjb21lcyBcIlN0cmFpbnMgOSBhbmQgP1wiXG4gKi9cbkBQaXBlKHtuYW1lOiAncGhhZ2VQYXJlbnRzJ30pXG5leHBvcnQgY2xhc3MgUGhhZ2VQYXJlbnRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShwYXJlbnRzOiBQaGFnZVtdLCBudW1QYXJlbnRzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBvdXQgPSAnJztcbiAgICBpZihudW1QYXJlbnRzID09PSB1bmRlZmluZWQpe1xuICAgICAgbnVtUGFyZW50cyA9IHBhcmVudHMubGVuZ3RoXG4gICAgfVxuICAgIGlmKHBhcmVudHMubGVuZ3RoID09PSAwKXtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGxldCBzb3J0ZWQ6IFBoYWdlW10gPSBwYXJlbnRzLnNvcnQoKG4xLCBuMik9PntyZXR1cm4gbjEuc3RyYWluTnVtIC0gbjIuc3RyYWluTnVtfSk7XG4gICAgbGV0IG51bXMgPSBzb3J0ZWQubWFwKChwaGFnZSk9PntyZXR1cm4gKHBoYWdlLnN0cmFpbk51bSsxKS50b1N0cmluZygpfSk7XG5cbiAgICBpZihzb3J0ZWQubGVuZ3RoID09PSAxICYmIG51bVBhcmVudHMgPT09IDEpe1xuICAgICAgb3V0ID0gJ1N0cmFpbiAnICsgbnVtc1swXTtcbiAgICB9IGVsc2UgaWYoc29ydGVkLmxlbmd0aCA9PT0gMSAmJiBudW1QYXJlbnRzID09PSAyKXtcbiAgICAgIG91dCA9ICdTdHJhaW5zICcgKyBudW1zWzBdICsgJyBhbmQgPyc7XG4gICAgfSBlbHNlIGlmKHNvcnRlZC5sZW5ndGggPT09IDIgJiYgbnVtUGFyZW50cyA9PT0gMil7XG4gICAgICBvdXQgPSAnU3RyYWlucyAnICsgbnVtc1swXSArICcgYW5kICcgKyBudW1zWzFdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9waXBlcy9waGFnZS1wYXJlbnRzLnBpcGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUmVxdWlyZWRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2VtYWlsLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC1lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybVBhc3N3b3JkRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50Jztcbi8qKlxuICogVGhlIEZvcm0gRXJyb3JzIE1vZHVsZSBjb250YWlucyB0ZW1wbGF0ZXMgZm9yIFJlYWN0aXZlRm9ybVxuICogaW5wdXQgZXJyb3JzIHRoYXQgYXJlIG5lZWRlZCBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogU2F2ZXMgdGltZSBmcm9tIGhhdmluZyB0byBjcmVhdGUgdGhlIHNhbWUgZXJyb3IgbWVzc2FnZXMgYWNyb3NzXG4gKiBudW1lcm91cyBwYWdlcyBhbmQga2VlcHMgdGhlIGVycm9yIG1lc3NhZ2VzIGNvbnNpc3RhbnRcbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZXF1aXJlZEVycm9yQ29tcG9uZW50LFxuICAgIEVtYWlsRXJyb3JDb21wb25lbnQsXG4gICAgUGFzc3dvcmRFcnJvckNvbXBvbmVudCxcbiAgICBDb25maXJtUGFzc3dvcmRFcnJvckNvbXBvbmVudFxuICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgIFJlcXVpcmVkRXJyb3JDb21wb25lbnQsXG4gICAgICBFbWFpbEVycm9yQ29tcG9uZW50LFxuICAgICAgUGFzc3dvcmRFcnJvckNvbXBvbmVudCxcbiAgICAgIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUVycm9yc01vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZm9ybS1lcnJvcnMubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JlcXVpcmVkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9yZXF1aXJlZC1lcnJvci50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXF1aXJlZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZmllbGQ6IEFic3RyYWN0Q29udHJvbDtcbiAgQElucHV0KCkgdGV4dExhYmVsOiBzdHJpbmc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcmVxdWlyZWQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODc4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBIYW5kbGUgZW1haWwgcmVsYXRlZCBlcnJvciBtZXNzYWdlcyBzdWNoIGFzXG4gKiAtIGlzIHJlcXVpcmVkOiBgRW1haWwgaXMgcmVxdWlyZWRgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZW1haWwtZXJyb3InLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2VtYWlsLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIEVtYWlsRXJyb3JDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGlucHV0IGVtYWlsIGZyb20gZm9ybTsgaW5jbHVkZXMgZXJyb3JzIGlmIGFwcGxpY2FibGVcbiAgICovXG4gIEBJbnB1dCgpIGVtYWlsOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvZW1haWwtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODgwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwYXNzd29yZC1lcnJvcicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRFcnJvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODgyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb25maXJtLXBhc3N3b3JkLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpcm1QYXNzd29yZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uZmlybVBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2w7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvZm9ybS1lcnJvcnMvY29uZmlybS1wYXNzd29yZC1lcnJvci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NoYXJlZC9mb3JtLWVycm9ycy9jb25maXJtLXBhc3N3b3JkLWVycm9yLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2hhcmVkL2Zvcm0tZXJyb3JzL2NvbmZpcm0tcGFzc3dvcmQtZXJyb3IudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODg0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlbGVjdERyb3BTZXJ2aWNlLCBzZWxlY3REcm9wU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NlbGVjdC1kcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0RHJvcENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWRyb3AuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3QtZHJvcC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0LWRyb3AuY29tcG9uZW50JztcblxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbe3Byb3ZpZGU6IFNlbGVjdERyb3BTZXJ2aWNlLCB1c2VGYWN0b3J5OiBzZWxlY3REcm9wU2VydmljZUZhY3Rvcnl9XTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2VsZWN0RHJvcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWxlY3REcm9wQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3BNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJze1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2VsZWN0RHJvcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zaGFyZWQvc2VsZWN0LWRyb3Avc2VsZWN0LWRyb3AubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFkbWluUm91dGVzIH0gZnJvbSAnLi9hZG1pbi5yb3V0ZXMnO1xuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuaW1wb3J0IHsgQWRtaW5HdWFyZCB9IGZyb20gJy4vYWRtaW4uZ3VhcmQuc2VydmljZSc7XG5cbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9zdHVkZW50L3N0dWRlbnQuc2VydmljZSc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBhZG1pbiBmdW5jdGlvbnMgaGF2aW5nIHRvIGRlYWwgd2l0aCBzdHVkZW50cyBhbmQgY291cnNlcyB0aGF0IHNob3VsZCBub3QgYmUgYWNjZXNzZWQgYnkgYSByZWd1bGFyIHVzZXJcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQWRtaW5Sb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIEFkbWluSG9tZUNvbXBvbmVudCxcbiAgICBOb3RBdXRoQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFkbWluR3VhcmQsXG4gICAgU3R1ZGVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbk1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFkbWluR3VhcmQgfSBmcm9tICcuL2FkbWluLmd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VkSW5HdWFyZCB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkhvbWVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90QXV0aENvbXBvbmVudCB9IGZyb20gJy4vbm90LWF1dGgvbm90LWF1dGguY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEFkbWluUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnYWRtaW4nLFxuICAgIGRhdGE6IHtcbiAgICAgIGJyZWFkY3J1bWJzOiAnQWRtaW4nXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTpbTG9nZ2VkSW5HdWFyZF0sXG4gICAgY2FuQWN0aXZhdGVDaGlsZDogW0FkbWluR3VhcmRdLFxuICAgIGNvbXBvbmVudDogQWRtaW5Db21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2NvdXJzZXMnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2NvdXJzZS9jb3Vyc2UubW9kdWxlJylbJ0NvdXJzZU1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ0NvdXJzZXMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdzdHVkZW50cycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7ICAocmVxdWlyZSBhcyBhbnkpLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmU6IGFueSkgeyAgICByZXNvbHZlKHJlcXVpcmUoJy4vc3R1ZGVudC9zdHVkZW50Lm1vZHVsZScpWydTdHVkZW50TW9kdWxlJ10pOyAgfSwgZnVuY3Rpb24oZTogYW55KSB7ICAgIHJlamVjdCh7IGxvYWRDaHVua0Vycm9yOiB0cnVlLCBkZXRhaWxzOiBlIH0pOyAgfSk7fSkgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnU3R1ZGVudHMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEFkbWluSG9tZUNvbXBvbmVudFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhZG1pbi9ub3QtYXV0aCcsXG4gICAgY29tcG9uZW50OiBOb3RBdXRoQ29tcG9uZW50XG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL2FkbWluLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODg4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2FkbWluL25vdC1hdXRoL25vdC1hdXRoLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYWRtaW4vbm90LWF1dGgvbm90LWF1dGgudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gODkwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJ1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRlcyB9IGZyb20gJy4vYXV0aGVudGljYXRpb24ucm91dGVzJztcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdub3V0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdub3V0L3NpZ25vdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSB3aGljaCBkZWFscyB3aXRoIGFueXRoaW5nIHJlbGF0ZWQgdG8gYXV0aGVudGljYXRpbmcgdXNlcnMsXG4gKiBpLmUuIGxvZ2dpbmcgaW4vb3V0IHVzZXJzIGFuZCByZXNldHRpbmcgZm9yZ290dGVuIHBhc3N3b3Jkc1xuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoQXV0aGVudGljYXRpb25Sb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNpZ25pbkNvbXBvbmVudCxcbiAgICBTaWdudXBDb21wb25lbnQsXG4gICAgU2lnbm91dENvbXBvbmVudCxcbiAgICBGb3JnZXRQYXNzd29yZENvbXBvbmVudCxcbiAgICBSZXNldFBhc3N3b3JkQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Nb2R1bGUgeyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tICcuL3NpZ25pbi9zaWduaW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbm91dENvbXBvbmVudCB9IGZyb20gJy4vc2lnbm91dC9zaWdub3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JnZXRQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzZXRQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uUm91dGVzOiBSb3V0ZXMgPSBbe1xuICAgIHBhdGg6ICdhdXRoZW50aWNhdGlvbicsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAgeyBwYXRoOiAnc2lnbmluJywgY29tcG9uZW50OiBTaWduaW5Db21wb25lbnQgfSxcbiAgICAgICAgeyBwYXRoOiAnc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQgfSxcbiAgICAgICAgeyBwYXRoOiAnc2lnbm91dCcsIGNvbXBvbmVudDogU2lnbm91dENvbXBvbmVudCB9LFxuICAgICAge3BhdGg6ICdmb3JnZXQtcGFzc3dvcmQnLCBjb21wb25lbnQ6IEZvcmdldFBhc3N3b3JkQ29tcG9uZW50fSxcbiAgICAgIHtwYXRoOiAncmVzZXQtcGFzc3dvcmQvOnRva2VuJywgY29tcG9uZW50OiBSZXNldFBhc3N3b3JkQ29tcG9uZW50fVxuICAgIF1cbn1dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWduaW4vc2lnbmluLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OTNcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL3NpZ251cC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OTRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OTVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgSGVscFJvdXRlcyB9IGZyb20gJy4vaGVscC5yb3V0ZXMnO1xuaW1wb3J0IHsgSGVscENvbXBvbmVudCB9IGZyb20gJy4vaGVscC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVscENyaWNrZXRDb21wb25lbnQgfSBmcm9tICcuL2hlbHAtY3JpY2tldC9oZWxwLWNyaWNrZXQuY29tcG9uZW50JztcbmltcG9ydCB7IEhlbHBNZW5kZWxwZWRlQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLW1lbmRlbHBlZGUvaGVscC1tZW5kZWxwZWRlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKEhlbHBSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEhlbHBDb21wb25lbnQsXG4gICAgSGVscENyaWNrZXRDb21wb25lbnQsXG4gICAgSGVscE1lbmRlbHBlZGVDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWxwTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9oZWxwL2hlbHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhlbHBDb21wb25lbnQgfSBmcm9tICcuL2hlbHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhlbHBDcmlja2V0Q29tcG9uZW50IH0gZnJvbSAnLi9oZWxwLWNyaWNrZXQvaGVscC1jcmlja2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWxwTWVuZGVscGVkZUNvbXBvbmVudCB9IGZyb20gJy4vaGVscC1tZW5kZWxwZWRlL2hlbHAtbWVuZGVscGVkZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgSGVscFJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ2hlbHAnLFxuICAgIGNvbXBvbmVudDogSGVscENvbXBvbmVudCxcbiAgICBkYXRhOiB7YnJlYWRjcnVtYnM6ICdIZWxwJ30sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtwYXRoOiAnY3JpY2tldCcsXG4gICAgICBjb21wb25lbnQ6IEhlbHBDcmlja2V0Q29tcG9uZW50LFxuICAgICAgZGF0YToge2JyZWFkY3J1bWJzOiAnQ3JpY2tldCd9XG4gICAgfSxcbiAgICB7cGF0aDogJ21lbmRlbHBlZGUnLFxuICAgIGNvbXBvbmVudDogSGVscE1lbmRlbHBlZGVDb21wb25lbnQsXG4gICAgZGF0YToge2JyZWFkY3J1bWJzOiAnTWVuZGVsUGVkZSd9XG4gICAgfVxuICAgIF1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2hlbHAvaGVscC5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2hlbHAvaGVscC50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2hlbHAvaGVscC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OTlcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9oZWxwL2hlbHAtY3JpY2tldC9oZWxwLWNyaWNrZXQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9oZWxwL2hlbHAtY3JpY2tldC9oZWxwLWNyaWNrZXQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvaGVscC9oZWxwLW1lbmRlbHBlZGUvaGVscC1tZW5kZWxwZWRlLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvaGVscC9oZWxwLW1lbmRlbHBlZGUvaGVscC1tZW5kZWxwZWRlLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgUHJvZmlsZVJvdXRlcyB9IGZyb20gJy4vcHJvZmlsZS5yb3V0ZXMnO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoUHJvZmlsZVJvdXRlcylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVXNlclByb2ZpbGVDb21wb25lbnQsXG4gICAgVXBkYXRlUGFzc3dvcmRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvZmlsZVNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9wcm9maWxlL3Byb2ZpbGUubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvZ2dlZEluR3VhcmQgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdwcm9maWxlJyxcbiAgICBjYW5BY3RpdmF0ZTogW0xvZ2dlZEluR3VhcmRdLFxuICAgIGNhbkFjdGl2YXRlQ2hpbGQ6IFtMb2dnZWRJbkd1YXJkXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBwYXRoOiAndXBkYXRlLXBhc3N3b3JkJyxcbiAgICAgIGNvbXBvbmVudDogVXBkYXRlUGFzc3dvcmRDb21wb25lbnQsXG4gICAgICAgZGF0YToge1xuICAgICAgICAgYnJlYWRjcnVtYnM6ICdVcGRhdGUgcGFzc3dvcmQnXG4gICAgICAgfVxuICAgICAgfSxcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogVXNlclByb2ZpbGVDb21wb25lbnRcbiAgfVxuICAgIF0sXG4gICAgZGF0YToge1xuICAgICAgYnJlYWRjcnVtYnM6ICdQcm9maWxlJ1xuICAgIH1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3Byb2ZpbGUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MDRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9wcm9maWxlL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDcmlja2V0Um91dGVzIH0gZnJvbSAnLi9jcmlja2V0LnJvdXRlcyc7XG5pbXBvcnQgeyBDcmlja2V0Q29tcG9uZW50IH0gZnJvbSAnLi9jcmlja2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2VuYXJpb0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3NjZW5hcmlvLWxpc3Qvc2NlbmFyaW8tbGlzdC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE1vZHVsZSBmb3Igc2NlbmFyaW8tcmVsYXRlZCBjb21wb25lbnRzIGFuZCBtb2R1bGVzXG4gKlxuICogTWFpbmx5IHVzZWQgdG8gYmUgYWJsZSB0byBhc3luYyBsb2FkIHRoZSBzcGVjaWZpYyBzY2VuYXJpb3MgdmlhIHRoZSB7QGxpbmsgTG9jYXRpb25Nb2R1bGV9XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKENyaWNrZXRSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENyaWNrZXRDb21wb25lbnQsXG4gICAgU2NlbmFyaW9MaXN0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JpY2tldE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ3JpY2tldENvbXBvbmVudCB9IGZyb20gJy4vY3JpY2tldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2NlbmFyaW9SZXNvbHZlciB9IGZyb20gJy4vc2NlbmFyaW8ucmVzb2x2ZXInO1xuaW1wb3J0IHsgU2NlbmFyaW9MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zY2VuYXJpby1saXN0L3NjZW5hcmlvLWxpc3QuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENyaWNrZXRSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdjcmlja2V0JyxcbiAgICBkYXRhOiB7XG4gICAgICBicmVhZGNydW1iczogJ0NyaWNrZXQnXG4gICAgfSxcbiAgICBjb21wb25lbnQ6IENyaWNrZXRDb21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJzpzY2VuSWQnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2xvY2F0aW9uL2xvY2F0aW9uLm1vZHVsZScpWydMb2NhdGlvbk1vZHVsZSddKTsgIH0sIGZ1bmN0aW9uKGU6IGFueSkgeyAgICByZWplY3QoeyBsb2FkQ2h1bmtFcnJvcjogdHJ1ZSwgZGV0YWlsczogZSB9KTsgIH0pO30pIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICBzY2VuYXJpbzogU2NlbmFyaW9SZXNvbHZlclxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnM6ICd7eyBzY2VuYXJpby5sYWJlbCB9fSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogU2NlbmFyaW9MaXN0Q29tcG9uZW50XG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0LnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvY3JpY2tldC9zY2VuYXJpby1saXN0L3NjZW5hcmlvLWxpc3QudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jcmlja2V0L3NjZW5hcmlvLWxpc3Qvc2NlbmFyaW8tbGlzdC50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MDhcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50O1xuICogTGlua3MgdGhlIG5hdiBiYXIgdG8gdGhlIGNvbnRlbnQgbmVlZGVkIGJhc2VkIG9uIHRoZSB1cmxcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpbmhlcml0LWxvZ2ljJyxcbiAgICB0ZW1wbGF0ZTogJzxJTC1uYXY+PC9JTC1uYXY+PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0Pidcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5cbi8qKlxuICogTmF2aWdhdGlvbiBiYXIgYXQgdGhlIHRvcCBvZiB0aGUgc2l0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0lMLW5hdicsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbmF2LnRlbXBsYXRlLmh0bWwnKSxcbiAgICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL25hdi5zdHlsZS5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBVc2VyIG9iamVjdCB1c2VkIHRvIGRldGVybWluZSBpZiBwcm9maWxlIGxpbmsgc2hvdWxkIGJlXG4gICAqIGluY2x1ZGVkIGluIHRoZSBuYXYgYmFyXG4gICAqL1xuICBwcml2YXRlIHVzZXI6IFVzZXI7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gc3RyZWFtIGZvciB0aGUgYXV0aGV0bmljYXRpb24gc2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWF0ZSB0aGUgY29tcG9uZW50IGJ5IGdldHRpbmcgdGhlIGN1cnJlbnQgdXNlclxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIkXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgdGhpcy51c2VyID0gcmVzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdG9yeSB0aGUgY29tcG9uZW50IGJ5IHVuc3Vic2NyaWJpbmcsIGlmIG5lY2Vzc2FyeVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9uYXYvbmF2LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbmF2L25hdi50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL25hdi9uYXYudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTExXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbmF2L25hdi5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbmF2L25hdi5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9wdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVuZGVscGVkZUZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4vc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbmRlbHBlZGVMYWJyb29tQ29tcG9uZW50IH0gZnJvbSAnLi9zY2VuYXJpb3MvbXBlZGUtbGFicm9vbS9tcGVkZS1sYWJyb29tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9zQ29tcG9uZW50IH0gZnJvbSAnLi9zY2VuYXJpb3MvbWVuZGVscGVkZS1zY2VuYXJpb3MuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbmRlbHBlZGVRdWl6Q29tcG9uZW50IH0gZnJvbSAnLi9zY2VuYXJpb3MvbXBlZGUtcXVpei9tcGVkZS1xdWl6LmNvbXBvbmVudCdcbmltcG9ydCB7IE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgTWVuZGVscGVkZVJvdXRlcyB9IGZyb20gJy4vbWVuZGVscGVkZS5yb3V0ZXMnO1xuaW1wb3J0IHsgTWVuZGVscGVkZUNvbXBvbmVudCB9IGZyb20gJy4vbWVuZGVscGVkZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG4vKipcbiAqIE1vZHVsZSBmb3IgTWVuZGVscGVkZS1yZWxhdGVkIGNvbXBvbmVudHMgYW5kIG1vZHVsZXNcbiAqXG4gKiBcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoTWVuZGVscGVkZVJvdXRlcylcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgT3B0aW9uc0NvbXBvbmVudCxcbiAgICBNZW5kZWxwZWRlRnJpZGdlQ29tcG9uZW50LFxuICAgIE1lbmRlbHBlZGVMYWJyb29tQ29tcG9uZW50LFxuICAgIE1lbmRlbHBlZGVTY2VuYXJpb3NDb21wb25lbnQsXG4gICAgTWVuZGVscGVkZVF1aXpDb21wb25lbnQsXG4gICAgTWVuZGVscGVkZUNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTWVuZGVscGVkZVNjZW5hcmlvU2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVuZGVscGVkZU1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL29wdGlvbnMvb3B0aW9ucy50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvb3B0aW9ucy9vcHRpb25zLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MTVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1sYWJyb29tL21wZWRlLWxhYnJvb20uc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWxhYnJvb20vbXBlZGUtbGFicm9vbS5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2UudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tcGVkZS1mcmlkZ2UvbXBlZGUtZnJpZGdlLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2Uuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2Uuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MThcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21lbmRlbHBlZGUtc2NlbmFyaW9zLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogUm91dGVyIGd1YXJkIHRoYXQgbWFrZXMgc3VyZSBvbmx5IGxvZ2dlZCBpbiB1c2VycyBjYW4gYWNjZXNzIHRoZSBwYWdlIGFuZCBhbGwgY2hpbGQgcGFnZXNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2dlZEluR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdXNlciBjYW4gYWN0aXZhdGUgKHZpc2l0KSBhIHBhZ2VcbiAgICogYmFzZWQgb24gaWYgYSB1c2VyIGlzIGxvZ2dlZCBpblxuICAgKlxuICAgKiBJZiBub3QgbG9nZ2VkIGluLCBzZXRzIHRoZSByZWRpcmVjdCB1cmwgdG8gdGFrZSB1c2VyIGJhY2sgdG8gdGhpcyBwYWdlIF9hZnRlcl8gbG9nZ2luZyBpbiBhbmRcbiAgICogc2VuZHMgdGhlIHVzZXIgdG8gdGhlIHNpZ24gaW4gcGFnZVxuICAgKlxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIC0gY3VycmVudCBVUkxcbiAgICogQHBhcmFtIHtSb3V0ZXJTdGF0ZXNuYXBzaG90fSBzdGF0ZSAtIHJvdXRlciBzdGF0ZSBpbmNsdWRpbmcgdGhlIHVybCB0cnlpbmcgdG8gYWNlc3NcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gYHRydWVgIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqIC0gYGZhbHNlYCBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW5cbiAgICovXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBib29sZWFuIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSBzdGF0ZS51cmw7XG5cbiAgICBsZXQgaXNMb2dnZWRJbjogYm9vbGVhbiA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgaWYoaXNMb2dnZWRJbilcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZGlyZWN0VXJsID0gdXJsO1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnYXV0aGVudGljYXRpb24vc2lnbmluJ10pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHVzZXIgY2FuIGFjdGl2YXRlIGFsbCBjaGlsZC9zdWIgcGFnZXMgZGVwZW5kaW5nIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gICAqXG4gICAqIE9ubHkgbG9nZ2VkIGluIHVzZXJzIGNhbiBhY3RpdmF0ZSB0aGUgcGFnZXNcbiAgICovXG4gIGNhbkFjdGl2YXRlQ2hpbGQocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuQWN0aXZhdGUocm91dGUsIHN0YXRlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21lbmRlbHBlZGUtc2NlbmFyaW9zLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL3NjZW5hcmlvcy9tZW5kZWxwZWRlLXNjZW5hcmlvcy5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEhvc3RMaXN0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWVuZGVscGVkZUZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4uL21wZWRlLWZyaWRnZS9tcGVkZS1mcmlkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbmRlbHBlZGVTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuLi9tZW5kZWxwZWRlLXNjZW5hcmlvcy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuaW1wb3J0IHsgTWVuZGVscGVkZVBlZGUsIE1lbmRlbHBlZGVRdWl6IH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcyc7XG5cbi8vaW1wb3J0IHsgTmdiTW9kYWwsIE1vZGFsRGlzbWlzc1JlYXNvbnMgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbmRlbHBlZGUtcXVpeicsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL21wZWRlLXF1aXoudGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL21wZWRlLXF1aXouc3R5bGUuY3NzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgTWVuZGVscGVkZVF1aXpDb21wb25lbnR7XG5cbiAgLy9wcml2YXRlIHBhcmFtT2JzZXJ2ZXI6IGFueTtcblxuICAvKipcbiAgICogU3RhdGUgdG8gbW9uaXRpb3IgaWYgY29tcG9uZW50IGFjdGl2ZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgdG9cbiAgICogbXVsdGlwbGUgc3RyZWFtcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiAgQWxsIHRoZSBtZW5kZWxwZWRlcyBiZWxvbmdpbmcgdG8gcXVpelxuICAgKi9cbiAgcHJpdmF0ZSBxdWl6UGVkZXM6IE1lbmRlbHBlZGVQZWRlW10gPSBbXTtcblxuICAvKipcbiAgICogcGxhY2Vob2xkZXIgdG8gc3RvcmUgUXVpeiBhbnN3ZXJzXG4gICAqL1xuICBwcml2YXRlIHF1aXpUcmFpdDogc3RyaW5nO1xuXG4gIHByaXZhdGUgcXVpelN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgcXVpekZyaWRnZUlkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBxdWl6OiBNZW5kZWxwZWRlUXVpejtcblxuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgbWVuZGVsRnJpZGdlOiBNZW5kZWxwZWRlRnJpZGdlQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIC8vcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBNZW5kZWxwZWRlU2NlbmFyaW9TZXJ2aWNlLFxuICAgIC8vcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge1xuICAgICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICB9XG5cbiAgZ2V0UXVpekJhY2tncm91bmRDb2xvcihuOiBudW1iZXIpe1xuICAgIHJldHVybiB7XG4gICAgICAndGV4dC1zdWNjZXNzJzogdGhpcy5xdWl6LmlzQW5zd2VyQ29ycmVjdCAmJiB0aGlzLnF1aXouaXNBbnN3ZXJDb3JyZWN0W25dICYmIHRoaXMucXVpelN1Ym1pdHRlZFxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmdldEZyaWRnZVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChmcmlkZ2UpID0+IHtcbiAgICAgICAgdGhpcy5xdWl6UGVkZXMgPSBmcmlkZ2UucGVkZXM7XG4gICAgICAgIHRoaXMucXVpelRyYWl0ID0gZnJpZGdlLmZpcnN0VHJhaXRGb3JRdWl6O1xuICAgICAgICB0aGlzLnF1aXpGcmlkZ2VJZCA9IGZyaWRnZS5pZDtcbiAgICAgICAgaWYoZnJpZGdlLnF1aXope1xuICAgICAgICAgIHRoaXMucXVpelN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5xdWl6ID0gZnJpZGdlLnF1aXo7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICB0aGlzLnF1aXpTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnF1aXogPSB0aGlzLl9pbml0UXVpeigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRRdWl6KCl7XG4gICAgdmFyIGFycjEgPSBbXTtcbiAgICB2YXIgYXJyMiA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA4OyBpKyspe1xuICAgICAgYXJyMS5wdXNoKG51bGwpO1xuICAgICAgYXJyMi5wdXNoKGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjb3JlOiAtMSxcbiAgICAgIHN1Ym1pdHRlZEFuc3dlcnM6IGFycjEsXG4gICAgICBpc0Fuc3dlckNvcnJlY3Q6IGFycjJcbiAgICB9XG4gIH1cblxuICBzdWJtaXRRdWl6KCl7XG4gICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIHZhciByZXR1cm5QZWRlcyA9IHRoaXMucXVpelBlZGVzLnNsaWNlKDAsOCk7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmNhbGN1bGF0ZVF1aXpTY29yZShyZXR1cm5QZWRlcywgdGhpcy5xdWl6LnN1Ym1pdHRlZEFuc3dlcnMsIHRoaXMucXVpekZyaWRnZUlkKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICB0aGlzLnF1aXogPSByZXM7XG4gICAgICB0aGlzLnF1aXpTdWJtaXR0ZWQgPSB0cnVlO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgIHRoaXMucXVpeiA9IHRoaXMuX2luaXRRdWl6KCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIHRoZSBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXNcbiAgICogdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICAvL3RoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtcXVpei9tcGVkZS1xdWl6LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtcXVpei9tcGVkZS1xdWl6LnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtcXVpei9tcGVkZS1xdWl6LnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL21lbmRlbHBlZGUvc2NlbmFyaW9zL21wZWRlLXF1aXovbXBlZGUtcXVpei5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvbWVuZGVscGVkZS9zY2VuYXJpb3MvbXBlZGUtcXVpei9tcGVkZS1xdWl6LnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbmRlbHBlZGVDb21wb25lbnQgfSBmcm9tICcuL21lbmRlbHBlZGUuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2dlZEluR3VhcmQgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBNZW5kZWxwZWRlU2NlbmFyaW9zQ29tcG9uZW50IH0gZnJvbSAnLi9zY2VuYXJpb3MvbWVuZGVscGVkZS1zY2VuYXJpb3MuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbmRlbHBlZGVTY2VuYXJpb1Jlc29sdmVyIH0gZnJvbSAnLi9tZW5kZWxwZWRlLXNjZW5hcmlvLnJlc29sdmVyJztcblxuZXhwb3J0IGNvbnN0IE1lbmRlbHBlZGVSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGggOiAnbWVuZGVscGVkZScsXG4gICAgY29tcG9uZW50IDogTWVuZGVscGVkZUNvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZTogW0xvZ2dlZEluR3VhcmRdLFxuICAgIGRhdGE6IHtcbiAgICAgIGJyZWFkY3J1bWJzOiAnTWVuZGVsUGVkZSdcbiAgICB9LFxuXG4gICAgY2hpbGRyZW46W1xuICAgICAge1xuICAgICAgICBwYXRoIDogJycsXG4gICAgICAgIGNvbXBvbmVudCA6IE9wdGlvbnNDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGggOiAnOnNjZW5TaG9ydENvZGUnLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgbWVuZGVscGVkZVNjZW5hcmlvOiBNZW5kZWxwZWRlU2NlbmFyaW9SZXNvbHZlclxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnQgOiBNZW5kZWxwZWRlU2NlbmFyaW9zQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnM6ICd7eyBtZW5kZWxwZWRlU2NlbmFyaW8ubGFiZWwgfX0nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9tZW5kZWxwZWRlL21lbmRlbHBlZGUudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=