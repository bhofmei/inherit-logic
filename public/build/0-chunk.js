webpackJsonp([0],{

/***/ 1019:
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
const location_routes_1 = __webpack_require__(1060);
const experiment_service_1 = __webpack_require__(1022);
const fridge_component_1 = __webpack_require__(1070);
const phage_dialog_component_1 = __webpack_require__(1038);
const location_component_1 = __webpack_require__(1033);
const landing_room_component_1 = __webpack_require__(1037);
const lab_room_component_1 = __webpack_require__(1034);
const plexer_room_component_1 = __webpack_require__(1035);
const model_room_component_1 = __webpack_require__(1036);
let LocationModule = class LocationModule {
};
LocationModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(location_routes_1.LocationRoutes)
        ],
        declarations: [
            fridge_component_1.FridgeComponent,
            phage_dialog_component_1.PhageDialogComponent,
            location_component_1.LocationComponent,
            lab_room_component_1.LabRoomComponent,
            plexer_room_component_1.PlexerRoomComponent,
            model_room_component_1.ModelRoomComponent,
            landing_room_component_1.LandingRoomComponent
        ],
        entryComponents: [
            phage_dialog_component_1.PhageDialogComponent
        ],
        providers: [
            experiment_service_1.ExperimentService
        ]
    })
], LocationModule);
exports.LocationModule = LocationModule;


/***/ }),

/***/ 1020:
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

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
        this._baseURL = '/api/cricket';
    }
    createPlate(plate) {
        var res = this._http
            .post(`${this._baseURL}/plate`, plate);
        return res;
    }
    performPlexer(data) {
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

/***/ 1033:
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
        templateUrl: __webpack_require__(1061),
        styleUrls: [__webpack_require__(1062)]
    })
], LocationComponent);
exports.LocationComponent = LocationComponent;


/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
const scenario_globals_1 = __webpack_require__(1020);
const experiment_service_1 = __webpack_require__(1022);
const scenario_service_1 = __webpack_require__(128);
const read_error_1 = __webpack_require__(64);
let LabRoomComponent = class LabRoomComponent {
    constructor(_experimentService, _scenarioService) {
        this._experimentService = _experimentService;
        this._scenarioService = _scenarioService;
        this.isHidden = { 'K': false, 'B': false };
        this.phage = [];
        this.dilutionValue = scenario_globals_1.ScenarioGlobals.defaultLabDilution;
        this.canEditDilution = true;
        this.isEmpty = true;
        this.lawnType = '';
        this.isFull = false;
        this.errorMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
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
    clearTubes() {
        this.phage = [];
        this.isHidden = { 'K': false, 'B': false };
        this.errorMessage = '';
        this.contents = [null, null, null, null];
        this.visibleLabel = [true, false, false, false];
        this.canEditDilution = true;
    }
    clearPlate() {
        this.isFull = false;
        this.isEmpty = true;
        this.genotypes = [];
        this.smallPlaqueList = [];
        this.largePlaqueList = [];
        this.errorMessage = '';
        this.lawnType = '';
    }
    clearAll() {
        this.clearTubes();
        this.clearPlate();
    }
    canDragBact() {
        return this.phage.length > 0;
    }
    getDataBact(src) {
        return {
            lawnType: src,
            src: src,
            phage: this.phage
        };
    }
    getClassesBact(src) {
        return { 'bact-tube test-tube-outer': true,
            'invisible': (src === 'B' ? this.isHidden["B"] : this.isHidden["K"]),
            'tube-b': (src === 'B'),
            'tube-k': (src === 'K'),
            'n-phage-1': this.phage.length === 1,
            'n-phage-2': this.phage.length === 2
        };
    }
    dropPhageBact($event, src) {
        var incomingPhage = $event.dragData;
        if (incomingPhage.hasOwnProperty('id') == false) {
            this.errorMessage = 'Only add phage from the fridge';
        }
        else if (this.phage.length >= 2) {
            this.errorMessage = 'Cannot have more than 2 phage in a tube';
        }
        else {
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
    canDragDil(src) {
        return (this.contents[src] !== null);
    }
    getClassesDil(src) {
        let tube = this.contents[src];
        return { 'dil-tube test-tube-outer': true,
            'tube-b': (tube !== null && tube.lawnType === 'B'),
            'tube-k': (tube !== null && tube.lawnType === 'K')
        };
    }
    getClassesDilLabel(src) {
        return {
            'dil-value': true,
            'invisible': !this.visibleLabel[src]
        };
    }
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
    getDataDil(src) {
        if (this.contents[src] !== null)
            this.contents[src]['src'] = src;
        return this.contents[src];
    }
    dropContentsDil($event, dest) {
        let incomingDat = JSON.parse(JSON.stringify($event.dragData));
        if (incomingDat.hasOwnProperty('lawnType') && incomingDat.hasOwnProperty('phage')) {
            for (let i = 0; i < incomingDat.phage.length; i++) {
                incomingDat.phage[i].numPhage /= this.dilutionValue;
            }
            this.contents[dest] = incomingDat;
            if (dest < 3) {
                this.visibleLabel[dest + 1] = true;
            }
            this.canEditDilution = false;
        }
    }
    getClassesPlate() {
        return {
            'col-12 col-md-5 rounded-circle border border-dark': true,
            'bg-secondary text-light': this.isFull,
            'bg-light text-primary': (!this.isFull && !this.isEmpty),
            'text-danger': (this.lawnType === 'K'),
            'text-info': (this.lawnType === 'B')
        };
    }
    canDropPlate() {
        return (dragData) => {
            let invalidSrc = ['B', 'K', 'small', 'large'];
            if (dragData === null || dragData === undefined)
                return false;
            if (dragData.hasOwnProperty('src') && invalidSrc.indexOf(dragData.src) === -1) {
                return true;
            }
            return false;
        };
    }
    dropOnPlate($event) {
        let contents = $event.dragData;
        if (contents.hasOwnProperty('lawnType') === false) {
            this.errorMessage = 'There is no bacteria in the tube for phage to grow on.';
            return;
        }
        if (contents.hasOwnProperty('phage') === false || contents.phage.length === 0) {
            this.errorMessage = 'There is no phage in the tube.';
            return;
        }
        if (contents.src === 'B' || contents.src === 'K') {
            this.errorMessage = 'Do not plate directly from bacteria tube';
            return;
        }
        this.lawnType = contents.lawnType;
        let phage1 = contents.phage[0];
        let phage2 = null;
        if (contents.phage.length === 2) {
            phage2 = contents.phage[1];
        }
        this._performCross(this.lawnType, phage1, phage2);
    }
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
            this.plateParents = res.parents;
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    canDragPlate(src) {
        if (src === 'small')
            return this.smallPlaqueList.length > 0;
        else
            return this.largePlaqueList.length > 0;
    }
    getPhagePlate(src) {
        let tmpList = (src === 'small' ? this.smallPlaqueList : this.largePlaqueList);
        if (tmpList.length === 0) {
            return null;
        }
        let plaque = tmpList[0];
        let genotypeIndex = plaque;
        let phage = JSON.parse(JSON.stringify(this.genotypes[genotypeIndex]));
        phage['src'] = src;
        phage['parents'] = this.plateParents;
        return phage;
    }
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
    delPhagePlate(src) {
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
        templateUrl: __webpack_require__(1063),
        styleUrls: [__webpack_require__(1064)]
    }),
    __metadata("design:paramtypes", [experiment_service_1.ExperimentService,
        scenario_service_1.ScenarioService])
], LabRoomComponent);
exports.LabRoomComponent = LabRoomComponent;


/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const forms_1 = __webpack_require__(11);
const scenario_globals_1 = __webpack_require__(1020);
const experiment_service_1 = __webpack_require__(1022);
const scenario_service_1 = __webpack_require__(128);
const read_error_1 = __webpack_require__(64);
let PlexerRoomComponent = class PlexerRoomComponent {
    constructor(_experimentService, _scenarioService) {
        this._experimentService = _experimentService;
        this._scenarioService = _scenarioService;
        this.chosenBact = 'none';
        this.dilutionValue = scenario_globals_1.ScenarioGlobals.defaultPlexerDilution;
        this.plexerType = 'plexer';
        this.nStrains = [0, 0];
        this.errorMessage = '';
        this._spinnerClass = {
            'hiding': true,
            'spinning': false,
            'oi oi-loop-circular': true
        };
        this.dilutionControl = new forms_1.FormControl("", [forms_1.Validators.min(0.1), forms_1.Validators.max(100)]);
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
    _clearData() {
        this.rows = [];
        this.cols = [];
        for (let i = 0; i < 8; i++) {
            this.rows.push(null);
            this.cols.push(null);
        }
        this.nStrains = [0, 0];
    }
    reset() {
        this.chosenBact = 'none';
        this.dilutionValue = scenario_globals_1.ScenarioGlobals.defaultPlexerDilution;
        this.plexerType = 'plexer';
        this._clearData();
        this.results = {};
        this.errorMessage = '';
        this._setSpinnerClass('reset');
    }
    getTubeClasses(src) {
        return {
            'btn border border-secondary': true,
            'chosen': (this.chosenBact === src),
            'btn-outline-info': (src === 'B' && this.chosenBact !== src),
            'btn-info': (src === 'B' && this.chosenBact === src),
            'btn-outline-danger': (src === 'K' && this.chosenBact !== src),
            'btn-danger': (src === 'K' && this.chosenBact === src)
        };
    }
    submitDisabled() {
        if (this._spinnerClass['spinning']) {
            return true;
        }
        var disabled = this.chosenBact === 'none';
        if (this.nStrains[0] === 0 || this.nStrains[1] === 0) {
            return true;
        }
        else if (this.dilutionValue < 0.1 || this.dilutionValue > 20) {
            return true;
        }
        return disabled;
    }
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
    _unCleanResults(results) {
        let out = {}, newCols = {};
        let curRow = 0, curCol = 0;
        for (let j = 0; j < this.cols.length; j++) {
            let col = this.cols[j];
            if (col !== null) {
                newCols[curCol] = j;
                curCol++;
            }
        }
        for (let i in this.rows) {
            if (this.rows[i] !== null) {
                let row = results[curRow];
                let tmp = {};
                for (let j in row) {
                    let newCol = newCols[j];
                    tmp[newCol] = row[j];
                }
                out[i] = tmp;
                curRow++;
            }
        }
        return out;
    }
    _setSpinnerClass(newClass) {
        this._spinnerClass['hiding'] = (newClass === "spinning" ? false : true);
        this._spinnerClass['spinning'] = (newClass === "spinning" ? true : false);
    }
    getSpinnerClass() {
        return this._spinnerClass;
    }
    performPlexer() {
        this._setSpinnerClass('spinning');
        let tmpRows = this.rows;
        let cleanRows = this._cleanArrays(tmpRows);
        let cleanCols = this._cleanArrays(this.cols);
        var data = {
            lawnType: this.chosenBact,
            rowPhage: cleanRows,
            colPhage: cleanCols,
            specials: {},
            location: this.plexerType,
            scenarioData: this.scenarioDetails,
            capacity: scenario_globals_1.ScenarioGlobals.plexerCapacity
        };
        this.expSubscription = this._experimentService.performPlexer(data)
            .subscribe((res) => {
            this.results = this._unCleanResults(res);
            this._setSpinnerClass('hiding');
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
            this._setSpinnerClass('hiding');
        });
    }
    addPhage($event, dir, spot) {
        let fphage = $event.dragData;
        let phage = {
            id: fphage.id,
            strainNum: fphage.strainNum,
            numPhage: scenario_globals_1.ScenarioGlobals.numPhage
        };
        if (dir === 'row' && spot < 8) {
            this.rows[spot] = phage;
            this.nStrains[0] = this.rows.filter(function (value) { return value !== null; }).length;
        }
        else if (spot < 8) {
            this.cols[spot] = phage;
            this.nStrains[1] = this.cols.filter(function (value) { return value !== null; }).length;
        }
    }
};
PlexerRoomComponent = __decorate([
    core_1.Component({
        selector: 'plexer-room',
        templateUrl: __webpack_require__(1065),
        styleUrls: [__webpack_require__(1066)]
    }),
    __metadata("design:paramtypes", [experiment_service_1.ExperimentService,
        scenario_service_1.ScenarioService])
], PlexerRoomComponent);
exports.PlexerRoomComponent = PlexerRoomComponent;


/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
const authentication_service_1 = __webpack_require__(18);
const scenario_service_1 = __webpack_require__(128);
const scenario_globals_1 = __webpack_require__(1020);
const read_error_1 = __webpack_require__(64);
let ModelRoomComponent = class ModelRoomComponent {
    constructor(_router, _route, _authenticationService, _scenarioService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._scenarioService = _scenarioService;
        this.errorMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
        this.stepSize = scenario_globals_1.ScenarioGlobals.deletionGuessLength;
        this.geneAr = [];
        let nBlocks = Math.ceil(scenario_globals_1.ScenarioGlobals.geneLength / this.stepSize);
        for (let i = 0; i < nBlocks; i++) {
            this.geneAr.push(i);
        }
        this._width = (100 / nBlocks).toString();
    }
    ngOnInit() {
        let u = this._authenticationService.getUser();
        if (u) {
            this.userId = u.id;
        }
        this.scenarioId = this._route.parent.snapshot.paramMap.get('scenId');
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
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    ngOnDestroy() {
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
    getBlockClass(strain, pos) {
        let posGuess = this.guesses[strain][pos];
        return {
            'guess-block btn p-0': true,
            'btn-outline-secondary': !posGuess,
            'bg-dark': posGuess
        };
    }
    toggleBlock(strain, pos) {
        let c = this.guesses[strain][pos];
        this.guesses[strain][pos] = !c;
    }
    saveData() {
        this.errorMessage = '';
        let out = JSON.stringify(this.guesses);
        this._scenarioService
            .saveDeletions(this.guesses, this.userId, this.scenarioId)
            .takeUntil(this.isDestroyed$)
            .subscribe((dat) => {
            this.guesses = JSON.parse(dat);
            this._scenarioService.setScenario(null, dat);
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
};
ModelRoomComponent = __decorate([
    core_1.Component({
        selector: 'model-room',
        templateUrl: __webpack_require__(1067),
        styleUrls: [__webpack_require__(1068)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        scenario_service_1.ScenarioService])
], ModelRoomComponent);
exports.ModelRoomComponent = ModelRoomComponent;


/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
const scenario_service_1 = __webpack_require__(128);
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
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
LandingRoomComponent = __decorate([
    core_1.Component({
        selector: 'landing-room',
        templateUrl: __webpack_require__(1069)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        scenario_service_1.ScenarioService])
], LandingRoomComponent);
exports.LandingRoomComponent = LandingRoomComponent;


/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
let PhageDialogComponent = class PhageDialogComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PhageDialogComponent.prototype, "phage", void 0);
PhageDialogComponent = __decorate([
    core_1.Component({
        selector: 'phage-dialog-content',
        templateUrl: __webpack_require__(1071)
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], PhageDialogComponent);
exports.PhageDialogComponent = PhageDialogComponent;


/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const location_component_1 = __webpack_require__(1033);
const logged_in_guard_service_1 = __webpack_require__(130);
const lab_room_component_1 = __webpack_require__(1034);
const plexer_room_component_1 = __webpack_require__(1035);
const model_room_component_1 = __webpack_require__(1036);
const landing_room_component_1 = __webpack_require__(1037);
exports.LocationRoutes = [
    {
        path: '',
        component: location_component_1.LocationComponent,
        canActivate: [logged_in_guard_service_1.LoggedInGuard],
        children: [
            {
                path: 'lab-room',
                component: lab_room_component_1.LabRoomComponent,
                data: {
                    breadcrumbs: 'Lab'
                }
            },
            {
                path: 'plexer-room',
                component: plexer_room_component_1.PlexerRoomComponent,
                data: {
                    breadcrumbs: 'Plexer'
                }
            },
            {
                path: 'model-room',
                component: model_room_component_1.ModelRoomComponent,
                data: {
                    breadcrumbs: 'Model'
                }
            },
            { path: 'info', component: landing_room_component_1.LandingRoomComponent },
            { path: '', component: landing_room_component_1.LandingRoomComponent }
        ]
    }
];


/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/location.template.html";

/***/ }),

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/location.style.css";

/***/ }),

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/lab-room/lab-room.template.html";

/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/lab-room/lab-room.style.css";

/***/ }),

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/plexer-room/plexer-room.template.html";

/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/plexer-room/plexer-room.style.css";

/***/ }),

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/model-room/model-room.template.html";

/***/ }),

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/model-room/model-room.style.css";

/***/ }),

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/landing-room/landing-room.template.html";

/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
const ng_bootstrap_1 = __webpack_require__(129);
const rxjs_1 = __webpack_require__(52);
const scenario_service_1 = __webpack_require__(128);
const authentication_service_1 = __webpack_require__(18);
const scenario_globals_1 = __webpack_require__(1020);
const phage_dialog_component_1 = __webpack_require__(1038);
const read_error_1 = __webpack_require__(64);
let FridgeComponent = class FridgeComponent {
    constructor(_router, _route, _authenticationService, _scenarioService, _modalService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._scenarioService = _scenarioService;
        this._modalService = _modalService;
        this.shelf = 0;
        this.errorMessage = '';
        this.maxShelf = scenario_globals_1.ScenarioGlobals.nFridgeShelf;
        this.spots = scenario_globals_1.ScenarioGlobals.nFridgeSpots;
        this.isDestroyed$ = new rxjs_1.Subject();
    }
    ngOnInit() {
        this.user = this._authenticationService.getUser();
        let userId = this.user.id;
        this.paramObserver = this._route.params.subscribe((params) => {
            let scenId = params['scenId'];
            this._scenarioService.getFridge(userId, scenId)
                .takeUntil(this.isDestroyed$)
                .subscribe((fridge) => { this._initFridge(fridge); }, (err) => {
                if (err.status === 307) {
                    this._createFridge(userId, scenId);
                }
                else {
                    this.errorMessage = read_error_1.readErrorMessage(err);
                }
            });
        });
    }
    ngOnDestroy() {
        this.paramObserver.unsubscribe();
        this.isDestroyed$.next(true);
        this.isDestroyed$.unsubscribe();
    }
    _createFridge(userId, scenId) {
        this._scenarioService.createFridge(userId, scenId)
            .takeUntil(this.isDestroyed$)
            .subscribe((fridge) => {
            this._initFridge(fridge);
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    _initFridge(newFridge) {
        this.fridge = newFridge;
        this.strains = this._fillStrains(newFridge.strains);
        this._currStrains();
        this._scenarioService.setScenario(newFridge.scenarioDetails, newFridge.guesses);
    }
    _fillStrains(fridgeStrains) {
        var out = [];
        for (let i = 0; i < this.maxShelf * this.spots; i++) {
            out.push({ strainNum: i, phageType: 'empty', comment: '', id: '' });
        }
        for (let i = 0; i < fridgeStrains.length; i++) {
            let n = fridgeStrains[i].strainNum;
            out[n] = fridgeStrains[i];
        }
        return out;
    }
    _currStrains() {
        let start = this.shelf * this.spots;
        let end = start + this.spots;
        this.currStrains = this.strains.slice(start, end);
    }
    getPhageClass(src) {
        let phage = this.strains[src];
        return {
            'col-7 col-xl-8 p-0 strain-image': true,
            'strain-image-reference': phage.phageType === 'reference',
            'strain-image-unknown': phage.phageType === 'unknown',
            'strain-image-submitted': phage.submitted
        };
    }
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
    setShelf(nShelf) {
        this.shelf = nShelf;
        this._currStrains();
    }
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
    dropStrain($event, spot) {
        let strain = $event.dragData;
        let newStrain = {
            strainNum: spot,
            mutationList: strain.shifts,
            deletion: strain.deletion,
            parents: strain.parents
        };
        let userId = this.user.id;
        let scenCode = this.fridge.scenCode;
        this._scenarioService.addStrain(userId, scenCode, newStrain)
            .subscribe((res) => {
            this.strains[spot] = {
                strainNum: res.strainNum,
                comment: res.comment,
                phageType: res.phageType,
                id: res.id,
                parents: res.parents,
                numParents: res.numParents
            };
            this._currStrains();
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    editPhage(src) {
        let phage = this.strains[src];
        const modelRef = this._modalService.open(phage_dialog_component_1.PhageDialogComponent, { windowClass: 'phage-dialog' });
        modelRef.componentInstance.phage = phage;
        modelRef.result.then((result) => {
            let resType = typeof result;
            if (resType === "string" && result === 'delete') {
                this._deletePhage(src);
            }
            else if (resType === "object") {
                this._editPhage(src, result);
            }
            else {
                return;
            }
        }, (reason) => {
            return;
        });
    }
    _editPhage(src, newPhage) {
        this._scenarioService.updateStrain(this.user.id, this.fridge.scenCode, newPhage)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            this.strains[src] = res;
            this._currStrains();
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
    _deletePhage(src) {
        let newPhage = this.strains[src];
        this._scenarioService.deleteStrain(this.user.id, this.fridge.scenCode, newPhage)
            .takeUntil(this.isDestroyed$)
            .subscribe((res) => {
            this.strains[src] = { strainNum: src, phageType: 'empty', comment: '', id: '' };
            this._currStrains();
        }, (err) => {
            this.errorMessage = read_error_1.readErrorMessage(err);
        });
    }
};
FridgeComponent = __decorate([
    core_1.Component({
        selector: 'fridge',
        templateUrl: __webpack_require__(1072),
        styleUrls: [__webpack_require__(1073)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        scenario_service_1.ScenarioService,
        ng_bootstrap_1.NgbModal])
], FridgeComponent);
exports.FridgeComponent = FridgeComponent;


/***/ }),

/***/ 1071:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/fridge/phage-dialog.template.html";

/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/fridge/fridge.template.html";

/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/fridge/fridge.style.css";

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLmdsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9leHBlcmltZW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbGFuZGluZy1yb29tL2xhbmRpbmctcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9mcmlkZ2UvcGhhZ2UtZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20uc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vcGxleGVyLXJvb20vcGxleGVyLXJvb20udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL21vZGVsLXJvb20vbW9kZWwtcm9vbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhbmRpbmctcm9vbS9sYW5kaW5nLXJvb20udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2ZyaWRnZS9mcmlkZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL3BoYWdlLWRpYWxvZy50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS5zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMseUNBQStDO0FBQy9DLGdEQUEwRDtBQUUxRCxvREFBbUQ7QUFFbkQsdURBQXlEO0FBRXpELHFEQUE2RDtBQUM3RCwyREFBd0U7QUFFeEUsdURBQXlEO0FBQ3pE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UyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDNUIsU0FBUyxDQUFDLENBQUMsR0FBRztZQUViLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxDQUFDLEdBQUc7WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLDZCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBNVVZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxtQkFBTyxDQUFDLElBQXdCLENBQUM7UUFDaEQsU0FBUyxFQUFFLENBQUMsbUJBQU8sQ0FBQyxJQUFvQixDQUFDLENBQUM7S0FDM0MsQ0FBQztxQ0E2QzZCLGVBQU07UUFDTix1QkFBYztRQUNFLDhDQUFxQjtRQUMzQixrQ0FBZTtRQUNuQix1QkFBUTtHQWhEaEMsZUFBZSxDQTRVM0I7QUE1VVksMENBQWU7Ozs7Ozs7O0FDNUI1QixpRzs7Ozs7OztBQ0FBLDJGOzs7Ozs7O0FDQUEsdUYiLCJmaWxlIjoiMC1jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBMb2NhdGlvblJvdXRlcyB9IGZyb20gJy4vbG9jYXRpb24ucm91dGVzJztcblxuaW1wb3J0IHsgRXhwZXJpbWVudFNlcnZpY2UgfSBmcm9tICcuL2V4cGVyaW1lbnQuc2VydmljZSc7XG5cbmltcG9ydCB7IEZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZyaWRnZS9mcmlkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBoYWdlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vZnJpZGdlL3BoYWdlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IExhbmRpbmdSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5kaW5nLXJvb20vbGFuZGluZy1yb29tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYWJSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9sYWItcm9vbS9sYWItcm9vbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxleGVyUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vcGxleGVyLXJvb20vcGxleGVyLXJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGVsUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vbW9kZWwtcm9vbS9tb2RlbC1yb29tLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKExvY2F0aW9uUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGcmlkZ2VDb21wb25lbnQsXG4gICAgUGhhZ2VEaWFsb2dDb21wb25lbnQsXG4gICAgTG9jYXRpb25Db21wb25lbnQsXG4gICAgTGFiUm9vbUNvbXBvbmVudCxcbiAgICBQbGV4ZXJSb29tQ29tcG9uZW50LFxuICAgIE1vZGVsUm9vbUNvbXBvbmVudCxcbiAgICBMYW5kaW5nUm9vbUNvbXBvbmVudFxuICBdLFxuICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgUGhhZ2VEaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRXhwZXJpbWVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbk1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi5tb2R1bGUudHMiLCIvKipcbiAqIFNjZW5hcmlvL2V4cGVyaWVtZW50LXJlbGF0ZWQgdmFsdWVzIHVzZWQgdG9cbiAqIDEuIFNlbmQgdGhlIGNvcnJlY3QgcGFyYW1ldGVycyB0byBiYWNrZW5kIGNhbGxzXG4gKiAyLiBNYXRjaCBzb21lIGJhY2tlbmQgcGFyYW1ldGVyc1xuICogMy4gSGF2ZSBjb25zaXN0ZW50IGRlZmF1bHRzXG4gKi9cbmV4cG9ydCBjb25zdCBTY2VuYXJpb0dsb2JhbHMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygc3RhcnRpbmcgcGhhZ2Ugd2hlbiB0YWtlbiBmcm9tIGZyaWRnZVxuICAgKi9cbiAgbnVtUGhhZ2U6MTAwMDAwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBsYWIgcm9vbSBwbGF0ZVxuICAgKi9cbiAgcGxhdGVDYXBhY2l0eTogMTUwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBlYWNoIHBsZXhlciByb29tIHBsYXRlXG4gICAqL1xuICBwbGV4ZXJDYXBhY2l0eTogMjAwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHNoZWx2ZXMgaW4gdGhlIGZyaWRnZVxuICAgKi9cbiAgbkZyaWRnZVNoZWxmOiAzMixcbiAgLyoqXG4gICAqIE51bWJlciBvZiBzcG90cyBvbiBlYWNoIHNoZWxmIG9mIHRoZSBmcmlkZ2VcbiAgICovXG4gIG5GcmlkZ2VTcG90czogMTYsXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRpbHV0aW9uIHZhbHVlIGZvciBsYWIgcm9vbTsgY2FuIGJlIGNoYW5nZWQgYnkgdXNlclxuICAgKi9cbiAgZGVmYXVsdExhYkRpbHV0aW9uOiAxMCxcbiAgLyoqXG4gICAqIERlZmF1bHQgZGlsdXRpb24gdmFsdWUgZm9yIHBsZXhlciByb29tOyBjYW4gYmUgY2hhbmdlZCBieSB1c2VyXG4gICAqL1xuICBkZWZhdWx0UGxleGVyRGlsdXRpb246IDUsXG4gIC8qKlxuICAgKiBMZW5ndGggb2YgdGhlIGdlbmUgaW4gbnVtYmVyIG9mIGJhc2VwYWlyc1xuICAgKi9cbiAgZ2VuZUxlbmd0aDogMzUwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIGJhc2VwYWlycyBwZXIgXCJibG9ja1wiIHdoZW4gZ3Vlc3NpbmcgZGVsZXRpb24gbG9jYXRpb25cbiAgICovXG4gIGRlbGV0aW9uR3Vlc3NMZW5ndGg6IDEwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5nbG9iYWxzLnRzIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFBsYXRlSW5wdXQsIFBsYXRlUmVzdWx0cywgUGxleGVySW5wdXQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgcGVyZm9ybXMgdGhlIHBsYXRlIGFuZCBwbGV4ZXIgZXhwZXJpbWVudHMgdXNlZFxuICogd2hlbiBjcm9zc2luZyBvciBtdXRhdGluZyBwaGFnZSBzdHJhaW5zLCBpLmUuIHBlcmZvcm1pbmcgYVxuICogdmlydHVhbCBleHBlcmltZW50XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeHBlcmltZW50U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfYmFzZVVSTCA9ICcvYXBpL2NyaWNrZXQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIC8qKlxuICAgKiBXaXRoIHZhbGlkIGlucHV0IGZvciB0aGUgcGxhdGUsIGNhbGxzIHRoZSBiYWNrZW5kIHRvIGdlbmVyYXRlXG4gICAqIGEgbmV3IHBsYXRlIHRoYXQgaXMgZGlzcGxheWVkIGluIHRoZSBsYWIgcm9vbVxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXRlSW5wdXR9IHBsYXRlIC0gaW5mb3JtYXRpb24gbmVlZGVkIHRvIGdlbmVyYXRlIHRoZSBuZXcgcGxhdGVcbiAgICogLSBJbmNsdWRlcyAxLTIgcGhhZ2Ugd2l0aCBudW1QaGFnZSBlYWNoLCBsYXduIHR5cGUsIGxvY2F0aW9uLCBzcGVjaWFscywgcGxhdGUgY2FwYWNpdHksIGFuZCBzY2VuYXJpbyBkYXRhXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFBsYXRlUmVzdWx0cz59XG4gICAqIC0gbmV3bHkgZ2VuZXJhdGUgcGxhdGUgd2l0aCBpbmZvIGFib3V0IHBhcmVudHMgYW5kIChpcyBwbGF0ZSBmdWxsIG9yIGxpc3Qgb2Ygc21hbGwgYW5kIGxhcmdlIHBsYXF1ZXMpXG4gICAqIC0gb3IgZXJyb3IgXCJudW1QaGFnZSBub3Qgc2V0XCIgaWYgbnVtYmVyIG9mIHBoYWdlIGlzbid0IHNldFxuICAgKiAtIG9yIGVycm9yIFwiRXJyb3IgZmluZGluZyB0aGUgc3BlY2lmaWVkIHBoYWdlIDEvMlwiIGlmIHBoYWdlIG5vdCBpbiBkYXRhYmFzZVxuICAgKiAtIG9yIGVycm9yIG1lc3NhZ2UgZm9yIG90aGVyIHNlcnZlciBlcnJvclxuICAgKi9cbiAgY3JlYXRlUGxhdGUocGxhdGU6IFBsYXRlSW5wdXQpOiBPYnNlcnZhYmxlPFBsYXRlUmVzdWx0cz57XG4gICAgdmFyIHJlcyA9IHRoaXMuX2h0dHBcbiAgICAucG9zdDxQbGF0ZVJlc3VsdHM+KGAke3RoaXMuX2Jhc2VVUkx9L3BsYXRlYCwgcGxhdGUpXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBXaXRoIHZhbGlkIGlucHV0LCBjYWxsIHRoZSBiYWNrZW5kIHRvIGdlbmVyYXRlIHZhbGlkIHJlc3VsdHMgZm9yIHRoZSBwbGV4ZXJcbiAgICpcbiAgICogQHBhcmFtIHtQbGV4ZXJJbnB1dH0gZGF0YSAtIGluZm9ybWF0aW9uIG5lZWRlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogcGxleGVyIHJlc3VsdHNcbiAgICogLSBJbnB1dHMgYSBsaXN0IG9mIHBoYWdlIElEcyBmb3IgdGhlIHJvd3MgYW5kIGNvbHVtbnMsIEUuIGNvbGlcbiAgICogbGF3biB0eXBlLCBsb2NhdGlvbiwgc3BlY2lhbHMsIGluZGl2aWR1YWwgcGxleGVyIHBsYXRlIGNhcGFjaXR5XG4gICAqIGFuZCBzY2VuYXJpbyBkYXRhXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqIC0gdGhlIHJlc3VsdHMgb2YgdGhlIHBsZXhlciBhcyBhIDJEIGFycmF5XG4gICAqIHdlcmUgZWFjaCBjZWxsIGluIHRoZSBhcnJheSByZXByZXNlbnRzIGEgcGxhdGUgYW5kIGhhc1xuICAgKiBpcyBwbGF0ZSBmdWxsIG9yIGNvdW50cyBvZiBzbWFsbC9sYXJnZSBwbGFxdWVzXG4gICAqIC0gb3IgZXJyb3IgaWYgc2VydmVyIGVycm9yXG4gICAqL1xuICBwZXJmb3JtUGxleGVyKGRhdGE6IFBsZXhlcklucHV0KTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIC8vIGRhdGEgd2lsbCBoYXZlIHJvd1BoYWdlLCBjb2xQaGFnZSwgbGF3biB0eXBlLCBsb2NhdGlvbiwgc3BlY2lhbHMsIGNhcGFjaXR5LCBzY2VuYXJpb0RhdGFcbiAgICB2YXIgcmVzID0gdGhpcy5faHR0cFxuICAgIC5wb3N0KGAke3RoaXMuX2Jhc2VVUkx9L3BsZXhlcmAsIGRhdGEpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vZXhwZXJpbWVudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhpcyBpcyBhIHZpZXcgY29tcG9uZW50IHdoaWNoIGhvc3RzIHRoZSBsb2NhdGlvblxuICogdGFiIHNlbGVjdGlvbiBuYXZpZ2F0b3JcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9jYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9sb2NhdGlvbi50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbG9jYXRpb24uc3R5bGUuY3NzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgU2NlbmFyaW9HbG9iYWxzIH0gZnJvbSAnLi4vLi4vc2NlbmFyaW8uZ2xvYmFscyc7XG5pbXBvcnQgeyBFeHBlcmltZW50U2VydmljZSB9IGZyb20gJy4uL2V4cGVyaW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zY2VuYXJpby5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRXhwZXJpbWVudFBoYWdlLCBHZW5vdHlwZVBoYWdlLCBQbGF0ZUlucHV0LCBQbGF0ZVJlc3VsdHMsIF9nZW5vdHlwZSwgUGhhZ2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBDb21wb25lbnQgd2hlcmUgcGhhZ2UgYXJlIHBsYXRlZCBhbmQgbXV0YXRlZC9jcm9zc2VkXG4gKiBTdHVkZW50cyB3aWxsIHNwZW5kIHRoZSBtYWpvcml0eSBvZiB0aGVpciB0aW1lIGluIHRoaXMgY29tcG9uZW50XG4gKlxuICogSW5jbHVkZXM6IDIgRS4gY29saSB0ZXN0IHR1YmVzLCA0IHNlcmlhbCBkaWx1dGlvbiB0dWJlcywgMSBwbGF0ZVxuICogVXNlcyBkcmFnIGFuZCBkcm9wIG1lY2hhbmlzbSB0byBtb3ZlIHBoYWdlL3R1YmVzIGFyb3VuZFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xhYi1yb29tJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9sYWItcm9vbS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbGFiLXJvb20uc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIExhYlJvb21Db21wb25lbnQge1xuXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvLyBiYWN0ZXJpYSB0dWJlc1xuICAvKipcbiAgICogQXQgaW5pdCwgYm90aCB0dWJzIHZpc2libGVcbiAgICogT25jZSBhIGJhY3RlcmlhIHR5cGUgaGFzIGJlZW4gc2VsZWN0ZWQsIG5lZWQgdG8gaGlkZSB0aGUgb3RoZXJcbiAgICovXG4gIHByaXZhdGUgaXNIaWRkZW46IE9iamVjdCA9IHsnSyc6IGZhbHNlLCAnQic6IGZhbHNlfTtcbiAgLyoqXG4gICAqIHBoYWdlIHN0cmFpbnMgd2hpY2ggYXJlIGluIHRoZSB0dWJlXG4gICAqL1xuICBwcml2YXRlIHBoYWdlOiBFeHBlcmltZW50UGhhZ2VbXSA9IFtdO1xuXG4gIC8vIGRpbHV0aW9uIHR1YmVzXG4gIC8qKlxuICAgKiB2YWx1ZSB0byBkaWx1dGUgdGhlIG51bWJlciBvZiBwaGFnZSBhdCBlYWNoIGRpbHV0aW9uXG4gICAqL1xuICBwcml2YXRlIGRpbHV0aW9uVmFsdWU6IG51bWJlciA9IFNjZW5hcmlvR2xvYmFscy5kZWZhdWx0TGFiRGlsdXRpb247XG4gIC8qKlxuICAgKiBDb250ZW50cyBvZiB0aGUgZGlsdXRpb24gdHViZVxuICAgKiBpbmNsdWRlczogbGF3blR5cGUgYW5kIHBoYWdlXG4gICAqL1xuICBwcml2YXRlIGNvbnRlbnRzOiBhbnlbXTtcbiAgLyoqXG4gICAqIE9ubHkgc2hvdyBkaWx1dGlvbiBsYWJlbHMgYXMgd2UgZG8gdGhlIHNlcmlhbCBkaWx1dGlvblxuICAgKi9cbiAgcHJpdmF0ZSB2aXNpYmxlTGFiZWw6IGJvb2xlYW5bXTtcbiAgLyoqXG4gICAqIGJvb2xlYW4gdG8gc3RvcCB1c2VycyBmcm9tIGNoYW5naW5nIHRoZSBkaWx1YXRpb24gZmFjdG9yIG9uY2VcbiAgICogdGhleSBzdGFydCBkaWx1dGluZ1xuICAgKiBhbGxvd2luZyBjaGFuZ2VzIHdoaWxlIGRpbHV0aW5nIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCBudW1iZXJzXG4gICAqIG9mIHBoYWdlIGFuZCB3b3VsZCBtYWtlIHR1YmUgbGFiZWxpbmcgZGlmZmljdWx0XG4gICAqL1xuICBwcml2YXRlIGNhbkVkaXREaWx1dGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gcGxhdGVcbiAgcHJpdmF0ZSBpc0VtcHR5OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIEUuIGNvbGkgdHlwZSBvbiB0aGUgcGxhdGUgY3VycmVudGx5XG4gICAqL1xuICBwcml2YXRlIGxhd25UeXBlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIHNjZW5hcmlvIGRldGFpbHMgKGZyb20gdGhlIGZyaWRnZSkgd2hpY2ggaXMgbmVlZGVkIHdoZW4gZG9pbmcgY3Jvc3NcbiAgICovXG4gIHByaXZhdGUgc2NlbmFyaW9EZXRhaWxzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpcyB0aGUgcGxhdGUgb3ZlciBjYXBhY2l0eT9cbiAgICovXG4gIHByaXZhdGUgaXNGdWxsOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBsaXN0IG9mIGdlbm90eXBlIGluZGV4IGZvciBwaGFnZSB3aXRoIHNtYWxsIHBsYXF1ZXNcbiAgICovXG4gIHByaXZhdGUgc21hbGxQbGFxdWVMaXN0OiBhbnlbXTtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgZ2Vub3R5cGUgaW5kZXggZm9yIHBoYWdlIHdpdGggbGFyZ2UgcGxhcXVlc1xuICAgKi9cbiAgcHJpdmF0ZSBsYXJnZVBsYXF1ZUxpc3Q6IGFueVtdO1xuICAvKipcbiAgICogZ2Vub3R5cGVzIHdoaWNoIGNvcnJlc3BvbmQgdG8gY29udGVudHMgb2Ygc21hbGxQbGFxdWVMaXN0IGFuZCBsYXJnZVBsYXF1ZUxpc3RcbiAgICovXG4gIHByaXZhdGUgZ2Vub3R5cGVzOiBfZ2Vub3R5cGVbXTtcbiAgLyoqXG4gICAqIElkIGFuZCBzdHJhaW4gbnVtYmVyIG9mIHBoYWdlIHVzZWQgdG8gY3JlYXRlIHRoaXMgcGxhdGVcbiAgICovXG4gIHByaXZhdGUgcGxhdGVQYXJlbnRzOiBQaGFnZVtdO1xuXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB2YXJpYWJsZXMgLSBkaWx1dGlvbiB0dWJlIGNvbnRlbnRzIGFuZCB2aXNpYmxlIGxhYmVsc1xuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXhwZXJpbWVudFNlcnZpY2U6IEV4cGVyaW1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgdGhpcy5jb250ZW50cyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsXTtcbiAgICB0aGlzLnZpc2libGVMYWJlbCA9IFt0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0YWxpemUgdGhlIGNvbXBvbmVudFxuICAgKiBHZXQgdGhlIHNjZW5hcmlvIGRldGFpbHMgKHNjZW5hcmlvIGRldGFpbHMgYXJlIGFscmVhZHkgc2V0XG4gICAqIGJ5IExvY2F0aW9uQ29tcG9uZW50KVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmdldFNjZW5hcmlvRGV0YWlsc1xuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChkZXRhaWxzKSA9PiB7dGhpcy5zY2VuYXJpb0RldGFpbHMgPSBkZXRhaWxzfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgdHViZS1yZWxhdGVkIHZhcmlhYmxlc1xuICAgKiBiYWN0ZXJpYSB0dWJlIC0gcGhhZ2UgY29udGVudHMgYW5kIHdoaWNoIGlzIGhpZGRlblxuICAgKiBkaWx1dGlvbiB0dWJlIC0gY29udGVudHMsIGxhYmVscywgYW5kIGNhbiBlZGl0IGRpbHV0aW9uIHZhbHVlXG4gICAqIGNsZWFyIGFueSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBjbGVhclR1YmVzKCl7XG4gICAgdGhpcy5waGFnZSA9IFtdO1xuICAgIHRoaXMuaXNIaWRkZW4gPSB7J0snOiBmYWxzZSwgJ0InOiBmYWxzZX07XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICB0aGlzLmNvbnRlbnRzID0gW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuICAgIHRoaXMudmlzaWJsZUxhYmVsID0gW3RydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xuICAgIHRoaXMuY2FuRWRpdERpbHV0aW9uID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgcGxhdGUgdmFyaWFibGVzXG4gICAqIHBsYXRlIGlzIGVtcHR5LCBub3QgZnVsbFxuICAgKiBubyBzbWFsbCBwbHFhdWVzLCBsYXJnZSBwbGFxdWVzLCBvciBnZW5vdHlwZXNcbiAgICogY2xlYXIgYW55IGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGNsZWFyUGxhdGUoKSB7XG4gICAgLy8gcmVzZXQgYWxsIHZhcmlhYmxlc1xuICAgIHRoaXMuaXNGdWxsID0gZmFsc2U7XG4gICAgdGhpcy5pc0VtcHR5ID0gdHJ1ZTtcbiAgICB0aGlzLmdlbm90eXBlcyA9IFtdO1xuICAgIHRoaXMuc21hbGxQbGFxdWVMaXN0ID0gW107XG4gICAgdGhpcy5sYXJnZVBsYXF1ZUxpc3QgPSBbXTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIHRoaXMubGF3blR5cGUgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBhbGwgdmFyaWFibGVzXG4gICAqL1xuICBjbGVhckFsbCgpe1xuICAgIHRoaXMuY2xlYXJUdWJlcygpO1xuICAgIHRoaXMuY2xlYXJQbGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBiYWN0ZXJpYSB0dWJlIGNhbiBiZSBkcmFnZ2VkXG4gICAqXG4gICAqIENhbGxlZCBmb3IgYFtkcmFnRW5hYmxlZF1gIG9mIGJhY3QgdHViZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHR1YmUgaGFzIHBoYWdlXG4gICAqL1xuICBjYW5EcmFnQmFjdCgpOiBib29sZWFue1xuICAgIHJldHVybiB0aGlzLnBoYWdlLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogRGF0YSB0byBiZSBkcmFnZ2VkIGZyb20gdGhlIGJhY3RlcmlhIHR1YmVcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2RyYWdEYXRhXWAgb2YgYmFjdCB0dWJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgRS4gY29saSBzb3VyY2UsIGBcIkJcImAgb3IgYFwiS1wiYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBkYXRhIHdpdGggbGF3biB0eXBlLCBzcmMsIGFuZCBwaGFnZSBsaXN0XG4gICAqL1xuICBnZXREYXRhQmFjdChzcmM6IHN0cmluZyk6IE9iamVjdHtcbiAgICByZXR1cm4ge1xuICAgICAgbGF3blR5cGU6IHNyYyxcbiAgICAgIHNyYzogc3JjLFxuICAgICAgcGhhZ2U6IHRoaXMucGhhZ2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBjbGFzc2VzIGZvciBhIGJhY3RlcmlhIHR1YmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBFLiBjb2xpIHNvdXJjZSwgYFwiQlwiYCBvciBgXCJLXCJgXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGFwcGxpY2FibGUgY2xhc3NlcyBpbiB0aGUgZm9ybVxuICAgKiBgeydjbGFzcyc6IGJvb2xlYW4sIC4uLn1gXG4gICAqL1xuICAgIGdldENsYXNzZXNCYWN0KHNyYzogc3RyaW5nKTogT2JqZWN0IHtcbiAgICByZXR1cm4geydiYWN0LXR1YmUgdGVzdC10dWJlLW91dGVyJzogdHJ1ZSxcbiAgICAgICAgICAgICdpbnZpc2libGUnOiAoc3JjID09PSAnQicgPyB0aGlzLmlzSGlkZGVuW1wiQlwiXSA6IHRoaXMuaXNIaWRkZW5bXCJLXCJdKSxcbiAgICAgICAgICAgICd0dWJlLWInOiAoc3JjPT09J0InKSxcbiAgICAgICAgICAgICd0dWJlLWsnOiAoc3JjPT09J0snKSxcbiAgICAgICAgICAgICduLXBoYWdlLTEnOiB0aGlzLnBoYWdlLmxlbmd0aCA9PT0gMSxcbiAgICAgICAgICAgICduLXBoYWdlLTInOiB0aGlzLnBoYWdlLmxlbmd0aCA9PT0gMlxuICAgICAgICAgICB9XG4gICAgfVxuXG4gIC8qKlxuICAgKiBEcm9wIHBoYWdlIGZyb20gZnJpZGdlIGludG8gYmFjdGVyaWEgdHViZVxuICAgKlxuICAgKiBDYWxsZWQgb24gYChvbkRyb3BTdWNjZXNzKWAgb2YgYmFjdGVyaWEgdHViZXNcbiAgICpcbiAgICogQHBhcmFtIHthbnl9ICRldmVudCBkcmFnIGV2ZW50IHdpdGggcGhhZ2UgZGF0YVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIGJhY3RlcmlhIHNvdXJjZSBwaGFnZSBkcmFnZ2VkIHRvXG4gICAqL1xuICBkcm9wUGhhZ2VCYWN0KCRldmVudDogYW55LCBzcmM6IHN0cmluZyl7XG4gICAgdmFyIGluY29taW5nUGhhZ2UgPSAkZXZlbnQuZHJhZ0RhdGE7XG4gICAgaWYoaW5jb21pbmdQaGFnZS5oYXNPd25Qcm9wZXJ0eSgnaWQnKSA9PSBmYWxzZSl7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdPbmx5IGFkZCBwaGFnZSBmcm9tIHRoZSBmcmlkZ2UnO1xuICAgIH0gZWxzZSBpZih0aGlzLnBoYWdlLmxlbmd0aCA+PSAyKSB7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdDYW5ub3QgaGF2ZSBtb3JlIHRoYW4gMiBwaGFnZSBpbiBhIHR1YmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhZGQgcGhhZ2UgLSB0eXBlIEV4cGVyaW1lbnRQaGFnZVxuICAgICAgdGhpcy5waGFnZS5wdXNoKHtcbiAgICAgICAgaWQ6IGluY29taW5nUGhhZ2UuaWQsXG4gICAgICAgIHN0cmFpbk51bTogaW5jb21pbmdQaGFnZS5zdHJhaW5OdW0sXG4gICAgICBudW1QaGFnZTogU2NlbmFyaW9HbG9iYWxzLm51bVBoYWdlXG4gICAgICB9KTtcbiAgICAgIHN3aXRjaChzcmMpe1xuICAgICAgICBjYXNlICdCJzpcbiAgICAgICAgICB0aGlzLmlzSGlkZGVuWydLJ10gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdLJzpcbiAgICAgICAgICB0aGlzLmlzSGlkZGVuWydCJ10gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfX1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgZGlsdXRpb24gdHViZSBjYW4gYmUgZHJhZ2dlZFxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbZHJhZ0VuYWJsZWRdYCBvZiBkaWx1dGlvbiB0dWJlICgwLTMpXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgZGlsdXRpb24gdHViZSBudW1iZXJcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0dWJlIGhhcyBjb250ZW50c1xuICAgKi9cbiAgY2FuRHJhZ0RpbChzcmM6IG51bWJlcik6IGJvb2xlYW57XG4gICAgcmV0dXJuICh0aGlzLmNvbnRlbnRzW3NyY10gIT09IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgY2xhc3NlcyBmb3IgYSBkaWx1dGlvbiB0dWJlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgZGlsdXRpb24gdHViZSBudW1iZXIgKDAtMylcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gYXBwbGljYWJsZSBjbGFzc2VzIGluIHRoZSBmb3JtXG4gICAqIGB7J2NsYXNzJzogYm9vbGVhbiwgLi4ufWBcbiAgICovXG4gIGdldENsYXNzZXNEaWwoc3JjOiBudW1iZXIpOiBPYmplY3Qge1xuICAgIGxldCB0dWJlID0gdGhpcy5jb250ZW50c1tzcmNdO1xuICAgIHJldHVybiB7J2RpbC10dWJlIHRlc3QtdHViZS1vdXRlcic6IHRydWUsXG4gICAgICAgICAgICAndHViZS1iJzogKHR1YmUgIT09IG51bGwgJiYgdHViZS5sYXduVHlwZT09PSdCJyksXG4gICAgICAgICAgICAndHViZS1rJzogKHR1YmUgIT09IG51bGwgJiYgdHViZS5sYXduVHlwZT09PSdLJylcbiAgICAgICAgICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgY2xhc3NlcyBmb3IgYSBkaWx1dGlvbiB0dWJlIGxhYmVsXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgZGlsdXRpb24gdHViZSBudW1iZXIgKDAtMylcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gYXBwbGljYWJsZSBjbGFzc2VzXG4gICAqL1xuICBnZXRDbGFzc2VzRGlsTGFiZWwoc3JjOiBudW1iZXIpOiBPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICAnZGlsLXZhbHVlJzogdHJ1ZSxcbiAgICAgICdpbnZpc2libGUnOiAhdGhpcy52aXNpYmxlTGFiZWxbc3JjXVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIG9iamVjdCBjYW4gYmUgZHJvcHBlZCBpbiBkaWx1dGlvbiB0dWJlXG4gICAqXG4gICAqIENhbGxlZCBmb3IgYFthbGxvd0Ryb3BdYCBvZiBkaWx1dGlvbiB0dWJlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZXN0IGRpbHV0aW9uIHR1YmUgbnVtYmVyICgwLTMpXG4gICAqXG4gICAqIEByZXR1cm5zIHtmdW5jdGlvbn0gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBgdHJ1ZWAgb3IgYGZhbHNlYCBpZiBvYmplY3QgY2FuIGJlIGRyb3BwZWRcbiAgICovXG4gIGNhbkRyb3BEaWwoZGVzdDogbnVtYmVyKTogYW55IHtcbiAgcmV0dXJuIChkcmFnRGF0YTogYW55KSA9PiB7XG4gICAgaWYoZHJhZ0RhdGEgPT09IG51bGwgfHwgZHJhZ0RhdGEgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZihkcmFnRGF0YS5oYXNPd25Qcm9wZXJ0eSgnc3JjJykgPT09IGZhbHNlKXtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBsZXQgc3JjID0gZHJhZ0RhdGEuc3JjO1xuICAgIGlmKGRlc3QgPT09IDAgJiYgKHNyYyA9PT0gJ0InIHx8IHNyYyA9PT0gJ0snKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGRlc3QgPiAwICYmIHNyYyA9PT0gZGVzdC0xKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59XG4gIC8qKlxuICAgKiBEYXRhIHRvIGJlIGRyYWdnZWQgZnJvbSB0aGUgZGlsdXRpb24gdHViZVxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbZHJhZ0RhdGFdYCBvZiBkaWx1dGlvbiB0dWJlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgZGlsdXRpb24gdHViZSBudW1iZXIgKDAtMylcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gZGF0YSB3aXRoIGRpbHV0aW9uIHR1YmUgY29udGVudHMgYW5kIHNyY1xuICAgKi9cbiAgZ2V0RGF0YURpbChzcmM6IG51bWJlcik6IE9iamVjdCB7XG4gICAgaWYodGhpcy5jb250ZW50c1tzcmNdICE9PSBudWxsKVxuICAgICAgdGhpcy5jb250ZW50c1tzcmNdWydzcmMnXSA9IHNyYztcbiAgICByZXR1cm4gdGhpcy5jb250ZW50c1tzcmNdO1xuICB9XG5cbiAgLyoqXG4gICAqIERyb3AgY29udGVudHMgZnJvbSBiYWN0IHR1YmUvZGlsdXRpb24gdHViZSBpbnRvIGRpbHV0aW9uIHR1YmVcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAob0Ryb3BTdWNjZXNzKWAgb2YgZGlsdXRpb24gdHViZXNcbiAgICpcbiAgICogQHBhcmFtIHthbnl9ICRldmVudCBkcmFnIGV2ZW50IHdpdGggY29udGVudC9waGFnZSBkYXRhXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXN0IGRlc3QgdHViZSBudW1iZXIgKDAtMylcbiAgICovXG4gIGRyb3BDb250ZW50c0RpbCgkZXZlbnQ6IGFueSwgZGVzdDogbnVtYmVyKXtcbiAgICBsZXQgaW5jb21pbmdEYXQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KCRldmVudC5kcmFnRGF0YSkpO1xuICAgIGlmKGluY29taW5nRGF0Lmhhc093blByb3BlcnR5KCdsYXduVHlwZScpICYmIGluY29taW5nRGF0Lmhhc093blByb3BlcnR5KCdwaGFnZScpKXtcbiAgICAgIC8vIGRpbHV0ZVxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGluY29taW5nRGF0LnBoYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaW5jb21pbmdEYXQucGhhZ2VbaV0ubnVtUGhhZ2UgLz0gdGhpcy5kaWx1dGlvblZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcy5jb250ZW50c1tkZXN0XSA9IGluY29taW5nRGF0O1xuICAgICAgaWYoZGVzdCA8IDMpe1xuICAgICAgICB0aGlzLnZpc2libGVMYWJlbFtkZXN0KzFdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGRpc2FibGUgZGlsdXRpb24gdmFsdWUgY2hhbmdlc1xuICAgICAgdGhpcy5jYW5FZGl0RGlsdXRpb24gPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGNsYXNzZXMgZm9yIHBsYXRlIGRlcGVuZGluZyBpZiBlbXB0eSwgZnVsbCwgaGFzIHBoYWdlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGFwcGxpY2FibGUgY2xhc3NlcyBpbiB0aGUgZm9ybVxuICAgKiBgeydjbGFzcyc6IGJvb2xlYW4sIC4uLn1gXG4gICAqL1xuICBnZXRDbGFzc2VzUGxhdGUoKXtcbiAgICByZXR1cm4ge1xuICAgICAgJ2NvbC0xMiBjb2wtbWQtNSByb3VuZGVkLWNpcmNsZSBib3JkZXIgYm9yZGVyLWRhcmsnOiB0cnVlLFxuICAgICAgJ2JnLXNlY29uZGFyeSB0ZXh0LWxpZ2h0JzogdGhpcy5pc0Z1bGwsXG4gICAgICAnYmctbGlnaHQgdGV4dC1wcmltYXJ5JzogKCF0aGlzLmlzRnVsbCAmJiAhdGhpcy5pc0VtcHR5KSxcbiAgICAgICd0ZXh0LWRhbmdlcic6ICh0aGlzLmxhd25UeXBlID09PSAnSycpLFxuICAgICAgJ3RleHQtaW5mbyc6ICh0aGlzLmxhd25UeXBlID09PSAnQicpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgb2JqZWN0IGNhbiBiZSBkcm9wcGVkIG9uIHBsYXRlXG4gICAqXG4gICAqIENhbGxlZCBmb3IgYFthbGxvd0Ryb3BdYCBvZiBwbGF0ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259IGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYHRydWVgIG9yIGBmYWxzZWAgaWYgb2JqZWN0IGNhbiBiZSBkcm9wcGVkXG4gICAqL1xuICBjYW5Ecm9wUGxhdGUoKTphbnkge1xuICAgIHJldHVybiAoZHJhZ0RhdGE6IGFueSkgPT4ge1xuICAgICAgbGV0IGludmFsaWRTcmMgPSBbJ0InLCAnSycsICdzbWFsbCcsICdsYXJnZSddXG4gICAgaWYoZHJhZ0RhdGEgPT09IG51bGwgfHwgZHJhZ0RhdGEgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZihkcmFnRGF0YS5oYXNPd25Qcm9wZXJ0eSgnc3JjJykgJiYgaW52YWxpZFNyYy5pbmRleE9mKGRyYWdEYXRhLnNyYykgPT09IC0xKXtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERyb3AgdHViZSBjb250ZW50cyBvbiB0aGUgcGxhdGVcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAob25Ecm9wU3VjY2VzcylgIG9mIHBsYXRlXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgZHJhZyBldmVudCB3aXRoIGNvbnRlbnRzXG4gICAqL1xuICBkcm9wT25QbGF0ZSgkZXZlbnQ6IGFueSl7XG4gICAgbGV0IGNvbnRlbnRzID0gJGV2ZW50LmRyYWdEYXRhO1xuICAgIC8vIGNoZWNrIHdlIGhhdmUgZXZlcnl0aGluZyB3ZSBuZWVkXG4gICAgaWYgKGNvbnRlbnRzLmhhc093blByb3BlcnR5KCdsYXduVHlwZScpID09PSBmYWxzZSl7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdUaGVyZSBpcyBubyBiYWN0ZXJpYSBpbiB0aGUgdHViZSBmb3IgcGhhZ2UgdG8gZ3JvdyBvbi4nXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb250ZW50cy5oYXNPd25Qcm9wZXJ0eSgncGhhZ2UnKSA9PT0gZmFsc2UgfHwgY29udGVudHMucGhhZ2UubGVuZ3RoID09PSAwKXtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ1RoZXJlIGlzIG5vIHBoYWdlIGluIHRoZSB0dWJlLidcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoY29udGVudHMuc3JjID09PSAnQicgfHwgY29udGVudHMuc3JjID09PSAnSycpe1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnRG8gbm90IHBsYXRlIGRpcmVjdGx5IGZyb20gYmFjdGVyaWEgdHViZSc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGdhdGhlciBkYXRhXG4gICAgdGhpcy5sYXduVHlwZSA9IGNvbnRlbnRzLmxhd25UeXBlO1xuICAgIGxldCBwaGFnZTEgPSBjb250ZW50cy5waGFnZVswXTtcbiAgICBsZXQgcGhhZ2UyID0gbnVsbDtcbiAgICBpZihjb250ZW50cy5waGFnZS5sZW5ndGggPT09IDIpe1xuICAgICAgcGhhZ2UyID0gY29udGVudHMucGhhZ2VbMV07XG4gICAgfVxuICAgIC8vIHBlcmZvcm0gdGhlIGNyb3NzXG4gICAgdGhpcy5fcGVyZm9ybUNyb3NzKHRoaXMubGF3blR5cGUsIHBoYWdlMSwgcGhhZ2UyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyB0aGUgZXhwZXJpbWVudCBzZXJ2aWNlIHRvIHBlcmZvcm0gdGhlIGNyb3NzIGFuZCBzYXZlc1xuICAgKiB2YXJpYWJsZXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhd25UeXBlIGJhY3RlcmlhIHVzZWQsIGBcIkJcImAgb3IgYFwiS1wiYFxuICAgKiBAcGFyYW0ge2FueX0gcGhhZ2UxIGZpcnN0IHBoYWdlIGluIGNyb3NzXG4gICAqIEBwYXJhbSB7YW55fSBwaGFnZTIgc2Vjb25kIHBoYWdlIGluIGNyb3NzLCBvciBudWxsXG4gICAqL1xuICBfcGVyZm9ybUNyb3NzKGxhd25UeXBlOiBzdHJpbmcsIHBoYWdlMTogRXhwZXJpbWVudFBoYWdlLCBwaGFnZTI6IEV4cGVyaW1lbnRQaGFnZSl7XG4gICAgbGV0IG5ld1BsYXRlOiBQbGF0ZUlucHV0ID0ge1xuICAgICAgbGF3blR5cGU6IGxhd25UeXBlLFxuICAgICAgcGhhZ2UxOiBwaGFnZTEsXG4gICAgICBwaGFnZTI6IHBoYWdlMixcbiAgICAgIHNwZWNpYWxzOiB7fSxcbiAgICAgIGxvY2F0aW9uOiAnbGFiJyxcbiAgICAgIHNjZW5hcmlvRGF0YTogdGhpcy5zY2VuYXJpb0RldGFpbHMsXG4gICAgICBjYXBhY2l0eTogU2NlbmFyaW9HbG9iYWxzLnBsYXRlQ2FwYWNpdHlcbiAgICB9XG4gICAgdGhpcy5fZXhwZXJpbWVudFNlcnZpY2UuY3JlYXRlUGxhdGUobmV3UGxhdGUpXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4vLyAgICAgIGNvbnNvbGUubG9nKCdnZW5vdHlwZXM6JywgcmVzLmdlbm90eXBlcyk7XG4vLyAgICAgIGNvbnNvbGUubG9nKCdzbWFsbCBwbGFxdWU6JywgcmVzLnNtYWxsUGxhcXVlKTtcbi8vICAgICAgY29uc29sZS5sb2coJ2xhcmdlIHBsYXF1ZTonLCByZXMubGFyZ2VQbGFxdWUpO1xuICAgICAgdGhpcy5pc0Z1bGwgPSByZXMuZnVsbDtcbiAgICAgIHRoaXMuc21hbGxQbGFxdWVMaXN0ID0gcmVzLnNtYWxsUGxhcXVlO1xuICAgICAgdGhpcy5sYXJnZVBsYXF1ZUxpc3QgPSByZXMubGFyZ2VQbGFxdWU7XG4gICAgICB0aGlzLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuZ2Vub3R5cGVzID0gcmVzLmdlbm90eXBlcztcbiAgICAgIHRoaXMucGxhdGVQYXJlbnRzID0gcmVzLnBhcmVudHM7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfSwgKGVycik9PntcbiAgICAgIC8vIGVycm9yXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgcGxhcXVlIGZyb20gcGxhdGUgY2FuIGJlIGRyYWdnZWRcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2RyYWdFbmFibGVkXWAgb2YgcGxhcXVlcyBvbiBwbGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIGBcInNtYWxsXCJgIG9yIGBcImxhcmdlXCJgIHBsYXF1ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZXJlIGFyZSBzdGlsbCBwbGFxdWVzIG9mIHRoYXQgc2l6ZVxuICAgKi9cbiAgY2FuRHJhZ1BsYXRlKHNyYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYoc3JjID09PSAnc21hbGwnKVxuICAgICAgcmV0dXJuIHRoaXMuc21hbGxQbGFxdWVMaXN0Lmxlbmd0aCA+IDA7XG4gICAgZWxzZSAvLyBiaWdcbiAgICAgIHJldHVybiB0aGlzLmxhcmdlUGxhcXVlTGlzdC5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFBpY2sgYSBwbGFxdWUgZnJvbSB0aGUgcGxhdGUgdG8gc2F2ZSB0byB0aGUgZnJpZGdlXG4gICAqXG4gICAqIENhbGxlZCBmb3IgYFtkcmFnRGF0YV1gIG9mIHBsYXF1ZSBvbiBwbGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIGBcInNtYWxsXCJgIG9yIGBcImxhcmdlXCJgIHBsYXF1ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBwaGFnZSBnZW5vdHlwZSBkYXRhXG4gICAqL1xuICBnZXRQaGFnZVBsYXRlKHNyYzogc3RyaW5nKTogR2Vub3R5cGVQaGFnZXtcbiAgICBsZXQgdG1wTGlzdCA9IChzcmMgPT09ICdzbWFsbCcgPyB0aGlzLnNtYWxsUGxhcXVlTGlzdCA6IHRoaXMubGFyZ2VQbGFxdWVMaXN0KTtcbiAgICBpZih0bXBMaXN0Lmxlbmd0aCA9PT0gMCl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHBsYXF1ZSA9IHRtcExpc3RbMF07XG4gICAgbGV0IGdlbm90eXBlSW5kZXggPSBwbGFxdWU7XG4gICAgbGV0IHBoYWdlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmdlbm90eXBlc1tnZW5vdHlwZUluZGV4XSkpO1xuICAgIHBoYWdlWydzcmMnXSA9IHNyYztcbiAgICBwaGFnZVsncGFyZW50cyddID0gdGhpcy5wbGF0ZVBhcmVudHM7XG4gICAgcmV0dXJuIHBoYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgc3VjY2Vzc2Z1bGx5IGRyYWdnZWQgcGhhZ2UgZnJvbSBhdmFpbGFibGUgcGhhZ2UgbGlzdFxuICAgKlxuICAgKiBDYWxsZWQgb24gYChvbkRyYWdTdWNjZXNzKWAgb2YgcGxhcXVlIG9uIHBsYXRlXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgZHJhZyBldmVudCB3aXRoIHBoYWdlIHNhdmVkXG4gICAqL1xuICBhZGRlZFRvRnJpZGdlKCRldmVudCkge1xuICAgIGxldCBzdHJhaW4gPSAkZXZlbnQuZHJhZ0RhdGE7XG4gICAgbGV0IHNyYyA9IHN0cmFpbi5zcmM7XG4gICAgaWYoc3JjID09PSAnc21hbGwnKXtcbiAgICAgIHRoaXMuc21hbGxQbGFxdWVMaXN0LnNoaWZ0KCk7XG4gICAgfSBlbHNlIHsgLy8gbGFyZ2VcbiAgICAgIHRoaXMubGFyZ2VQbGFxdWVMaXN0LnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBwaGFnZSBmcm9tIHRoZSBwbGF0ZSB3aXRob3V0IGFkZGluZyBpdCB0byB0aGUgZnJpZGdlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGRibGNsaWNrKWAgb2YgcGxhcXVlIG9uIHRoZSBwbGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIHNvdXJjZSBvZiBwbGFxdWUgY2xpY2tlZDsgYFwibGFyZ2VcImAgb3IgYFwic21hbGxcImBcbiAgICovXG4gIGRlbFBoYWdlUGxhdGUoc3JjOiBzdHJpbmcpe1xuICAgIGlmKHNyYyA9PT0gJ3NtYWxsJyl7XG4gICAgICB0aGlzLnNtYWxsUGxhcXVlTGlzdC5zaGlmdCgpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgdGhpcy5sYXJnZVBsYXF1ZUxpc3Quc2hpZnQoKTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU2NlbmFyaW9HbG9iYWxzIH0gZnJvbSAnLi4vLi4vc2NlbmFyaW8uZ2xvYmFscyc7XG5pbXBvcnQgeyBFeHBlcmltZW50U2VydmljZSB9IGZyb20gJy4uL2V4cGVyaW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zY2VuYXJpby5zZXJ2aWNlJ1xuaW1wb3J0IHsgRnJpZGdlUGhhZ2UsIEV4cGVyaW1lbnRQaGFnZSwgUGxleGVySW5wdXQgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB0aGUgbXVsdGlwbGV4ZXIgcm9vbSB3aGljaCBhbGxvd3MgZm9yXG4gKiBOeE0gcGhhZ2UgY3Jvc3NlcyBhdCBvbmNlXG4gKlxuICogT2Zmc3ByaW5nIHBoYWdlIGNhbm5vdCBiZSBzYXZlZCB0byB0aGUgZnJpZGdlLCBidXQgdGhlIHVzZXJcbiAqIGdldHMgYSBjb3VudCBvZiBzbWFsbCBhbmQgbGFyZ2UgcGxhcXVlIGZvciBlYWNoIGNyb3NzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGxleGVyLXJvb20nLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3BsZXhlci1yb29tLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9wbGV4ZXItcm9vbS5zdHlsZS5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgUGxleGVyUm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogRS4gY29saSBzdHJhaW4gY2hvc2VuIHRvIHBsYXRlIG9uXG4gICAqL1xuICBwcml2YXRlIGNob3NlbkJhY3Q6IHN0cmluZyA9ICdub25lJztcbiAgLyoqXG4gICAqIFZhbHVlIHRvIGRpbHV0ZSBudW1iZXIgb2YgcGhhZ2UgYnlcbiAgICovXG4gIHByaXZhdGUgZGlsdXRpb25WYWx1ZTogbnVtYmVyID0gU2NlbmFyaW9HbG9iYWxzLmRlZmF1bHRQbGV4ZXJEaWx1dGlvbjtcbiAgLyoqXG4gICAqIExvY2F0aW9uIGNhbGwgdXNlZCBieSBiYWNrZW5kXG4gICAqL1xuICBwcml2YXRlIHBsZXhlclR5cGU6IHN0cmluZyA9ICdwbGV4ZXInO1xuICAvKipcbiAgICogU2NlbmFyaW8gZGV0YWlscyAoZnJvbSBmcmlkZ2UpIG5lZWRlZCB0byBwZXJmb3JtIHRoZSBwbGV4ZXJcbiAgICovXG4gIHByaXZhdGUgc2NlbmFyaW9EZXRhaWxzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJbmZvIGZvciBwaGFnZSBhbG9uZyB0aGUgcm93c1xuICAgKi9cbiAgcHJpdmF0ZSByb3dzOiBFeHBlcmltZW50UGhhZ2VbXTtcbiAgLyoqXG4gICAqIEluZm8gZm9yIHBoYWdlIGFsb25nIHRoZSBjb2x1bW5zXG4gICAqL1xuICBwcml2YXRlIGNvbHM6IEV4cGVyaW1lbnRQaGFnZVtdO1xuICAvKipcbiAgICogQ3VycmVudCBudW1iZXIgb2Ygc3RyYWlucyBpbiB0aGUgcm93cyBhbmQgY29sdW1ucywgcmVzcGVjdGl2ZWx5XG4gICAqL1xuICBwcml2YXRlIG5TdHJhaW5zOiBudW1iZXJbXSA9IFswLDBdO1xuICAvKipcbiAgICogVGhlIHBsZXhlciByZXN1bHRzO1xuICAgKiBJcyBPYmplY3QgZm9ybSBvZiBhIDItRCBhcnJheSB3aGVyZSBlYWNoIGNlbGwgaGFzIHtzbWFsbFBsYXF1ZTogIywgbGFyZ2VQbGFxdWU6ICN9XG4gICAqL1xuICBwcml2YXRlIHJlc3VsdHM6IE9iamVjdDtcbiAgLyoqXG4gICAqIFBvc3NpYmxlIGJhY2tlbmQgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogU2NlbmFyaW8gc2VydmljZSBzdWJzY3JpcHRpb24gZm9yIHNjZW5hcmlvIGRldGFpbHNcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBFeHBlcmltZW50IHNlcnZpY2Ugc3Vic2NyaXB0aW9uIHRvIHByZWZvcm0gcGxleGVyXG4gICAqL1xuICBwcml2YXRlIGV4cFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogQ29udHJvbCB0aGUgZGlsdXRpb24gZmFjdG9yIHRvIGEgbWluL21heCB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBkaWx1dGlvbkNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAvKipcbiAgICogLSBDU1MgY2xhc3NlcyBmb3IgdGhlIHN1Ym1pdCBzcGlubmVyXG4gICAqIC0gVmlzaWJsZSBhZnRlciBzdWJtaXQgYnV0dG9uIGhpdCBhbmQgYmVmb3JlIHJlc3VsdHMgcmVjZWl2ZWRcbiAgICovXG4gIHByaXZhdGUgX3NwaW5uZXJDbGFzczogT2JqZWN0ID0ge1xuICAgICdoaWRpbmcnOiB0cnVlLFxuICAgICdzcGlubmluZyc6IGZhbHNlLFxuICAgICdvaSBvaS1sb29wLWNpcmN1bGFyJzogdHJ1ZVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGRhdGEgYW5kIHNldCBkaWx1dGlvbiBjb250cm9sXG4gICAqXG4gICAqIEBwYXJhbSB7RXhwZXJpbWVudFNlcnZpY2V9IF9leHBlcmltZW50U2VydmljZSB1c2VkIHRvIGdlbmVyYXRlIHRoZSByZXN1bHRzIG9mIHRoZSBwbGV4ZXJcbiAgICogQHBhcmFtIHtTY2VuYXJpb1NlcnZpY2V9IF9zY2VuYXJpb1NlcnZpY2UgdXNlZCB0byBnZXQgdGhlIHNjZW5hcmlvIGRldGFpbHMgbmVlZGVkIHRvIHBlcmZvcm0gcGxleGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfZXhwZXJpbWVudFNlcnZpY2U6IEV4cGVyaW1lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2Upe1xuICAgIHRoaXMuZGlsdXRpb25Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLm1pbigwLjEpLCBWYWxpZGF0b3JzLm1heCgxMDApXSk7XG4gICAgdGhpcy5fY2xlYXJEYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IGFuZCBnZXQgdGhlIHNjZW5hcmlvIGRldGFpbHNcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmdldFNjZW5hcmlvRGV0YWlsc1xuICAgICAgLnN1YnNjcmliZSgoZGV0YWlscykgPT4gdGhpcy5zY2VuYXJpb0RldGFpbHMgPSBkZXRhaWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IHRoZSBjb21wb25lbnQgYW5kIHVuc3Vic2NyaWJlIGFzIG5lZWRlZFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYodGhpcy5leHBTdWJzY3JpcHRpb24pXG4gICAgdGhpcy5leHBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0YWxpemUvY2xlYXIgcm93IGFuZCBjb2x1bW4gcGhhZ2VcbiAgICovXG4gIHByb3RlY3RlZCBfY2xlYXJEYXRhKCl7XG4gICAgdGhpcy5yb3dzID0gW107XG4gICAgdGhpcy5jb2xzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDg7IGkrKyl7XG4gICAgICB0aGlzLnJvd3MucHVzaChudWxsKTtcbiAgICAgIHRoaXMuY29scy5wdXNoKG51bGwpO1xuICAgIH1cbiAgICB0aGlzLm5TdHJhaW5zID0gWzAsMF07XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHBsZXhlciBhbmQgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIHJlc2V0IGJ1dHRvblxuICAgKi9cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmNob3NlbkJhY3QgPSAnbm9uZSc7XG4gICAgdGhpcy5kaWx1dGlvblZhbHVlID0gU2NlbmFyaW9HbG9iYWxzLmRlZmF1bHRQbGV4ZXJEaWx1dGlvbjtcbiAgICB0aGlzLnBsZXhlclR5cGUgPSAncGxleGVyJztcbiAgICB0aGlzLl9jbGVhckRhdGEoKTtcbiAgICB0aGlzLnJlc3VsdHMgPSB7fTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIHRoaXMuX3NldFNwaW5uZXJDbGFzcygncmVzZXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIENTUyBjbGFzc2VzIGZvciBlYWNoIHBoYWdlIGJ1dHRvbiBiYXNlZCBvbiB3aGljaFxuICAgKiBwaGFnZSB0eXBlIGlzIHNldFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIGJ1dHRvbiB0byBnZXQgY2xhc3NlcyBmb3JcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gY2xhc3NlcyB3aGljaCBhcHBseSB0byB0aGlzIGJ1dHRvbiBpbiB0aGVcbiAgICogZm9ybSBgeydjbGFzcyc6Ym9vbGVhbiwgJ2NsYXNzMic6IGJvb2xlYW59YFxuICAgKi9cbiAgZ2V0VHViZUNsYXNzZXMoc3JjOiBzdHJpbmcpOiBPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICAnYnRuIGJvcmRlciBib3JkZXItc2Vjb25kYXJ5JzogdHJ1ZSxcbiAgICAgICdjaG9zZW4nOiAodGhpcy5jaG9zZW5CYWN0ID09PSBzcmMpLFxuICAgICAgJ2J0bi1vdXRsaW5lLWluZm8nOiAoc3JjPT09J0InICYmIHRoaXMuY2hvc2VuQmFjdCAhPT0gc3JjKSxcbiAgICAgICdidG4taW5mbyc6IChzcmM9PT0nQicgJiYgdGhpcy5jaG9zZW5CYWN0ID09PSBzcmMpLFxuICAgICAgJ2J0bi1vdXRsaW5lLWRhbmdlcic6IChzcmM9PT0nSycgJiYgdGhpcy5jaG9zZW5CYWN0ICE9PSBzcmMpLFxuICAgICAgJ2J0bi1kYW5nZXInOiAoc3JjPT09J0snICYmIHRoaXMuY2hvc2VuQmFjdCA9PT0gc3JjKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdXNlciBpcyBhYmxlIHRvIHN1Ym1pdCBwbGV4ZXIgYnkgZGlzYWJsaW5nXG4gICAqIHRoZSBzdWJtaXQgYnV0dG9uIHdoZW4gdW5hYmxlIHRvIHN1Ym1pdFxuICAgKlxuICAgKiBBYmxlIHRvIHN1Ym1pdCBvbmx5IHdoZW46XG4gICAqIDEuIGJhY3RlcmlhIGNob3NlblxuICAgKiAyLiBhdCBsZWFzdCBvbmUgcGhhZ2UgaW4gZWFjaCByb3cgYW5kIGNvbHVtblxuICAgKiAzLiBkaWx1dGlvbiB2YWx1ZSBpcyB2YWxpZCwgQU5EXG4gICAqIDQuIG5vdCBzdGlsbCB3YWl0aW5nIGZvciBwcmV2aW91cyBzdWJtaXQgcmVzcG9uc2VcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIC0gYHRydWVgIGlmIHVzZXIgY2FuIHN1Ym1pdCAoYWxsIGNvbmRpdGlvbnMgbWV0KVxuICAgKiAtIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBzdWJtaXREaXNhYmxlZCgpOiBib29sZWFuIHtcblxuICAgIC8vIGlmIHNwaW5uZXIgaXMgc3Bpbm5pbmcsIGRpc2FibGVcbiAgICBpZih0aGlzLl9zcGlubmVyQ2xhc3NbJ3NwaW5uaW5nJ10pe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIGRldGVybWluZSBpZiBkaXNhYmxlZFxuICAgIHZhciBkaXNhYmxlZCA9IHRoaXMuY2hvc2VuQmFjdCA9PT0gJ25vbmUnO1xuICAgIC8vIGNoZWNrIHRoYXQgYXQgbGVhc3QgMSBwaGFnZSBhZGRlZCBmb3Igcm93L2NvbFxuICAgIGlmKHRoaXMublN0cmFpbnNbMF0gPT09IDAgfHwgdGhpcy5uU3RyYWluc1sxXSA9PT0gMCl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlsdXRpb25WYWx1ZSA8IDAuMSB8fCB0aGlzLmRpbHV0aW9uVmFsdWUgPiAyMCl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgbnVsbCBlbGVtZW50cyBmcm9tIGlucHV0IGFycmF5IGFuZCBkaWx1dGVzIHRoZVxuICAgKiBudW1iZXIgb2YgcGhhZ2VcbiAgICpcbiAgICogVXNlZCBiZWZvcmUgc3VibWl0dGluZyByb3cvY29sIHBoYWdlIHRvIHNlcnZpY2VcbiAgICpcbiAgICogQHBhcmFtIHtFeHBlcmltZW50UGhhZ2VbXX0gaW5EYXRhIC0gaW5wdXQgYXJyYXkgdG8gYmUgY2xlYW5lZFxuICAgKiAtIGNhbiBjb250YWluIG51bGwgdmFsdWVzXG4gICAqXG4gICAqIEByZXR1cm5zIHtFeHBlcmltZW50UGhhZ2VbXX1cbiAgICogLSBjbGVhbmVkIGFycmF5XG4gICAqIC0gZG9lcyBub3QgY29udGFpbiBudWxsIHZhbHVlc1xuICAgKi9cbiAgcHJvdGVjdGVkIF9jbGVhbkFycmF5cyhpbkRhdGE6IEV4cGVyaW1lbnRQaGFnZVtdKTogRXhwZXJpbWVudFBoYWdlW117XG4gICAgdmFyIGNsZWFuID0gaW5EYXRhLmZpbHRlcigoZWx0KT0+e1xuICAgICAgcmV0dXJuIGVsdCAhPT0gbnVsbFxuICAgIH0pLm1hcCgoZWx0KT0+e1xuICAgICAgICByZXR1cm4ge2lkOiBlbHQuaWQsXG4gICAgICAgICAgICAgICAgc3RyYWluTnVtOiBlbHQuc3RyYWluTnVtLFxuICAgICAgICAgICAgICAgbnVtUGhhZ2U6IGVsdC5udW1QaGFnZSAvICh0aGlzLmRpbHV0aW9uVmFsdWUgKiAxMDAwKVxuICAgICAgICAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjbGVhblxuICB9XG5cbiAgLyoqXG4gICAqIFJlZm9ybWF0cyB0aGUgcmVzdWx0cyB0byB0YWtlIGludG8gYWNjb3VudCBvZiBudWxsIGluIHRoZSByb3dzL2NvbHNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3VsdHMgLSByZXN1bHRzIG9mIGNvbXB1dGluZyB0aGUgcGxleGVyXG4gICAqIC0gZG9lcyBub3QgY29udGFpbiBudWxsIHZhbHVlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKiAtIHVwZGF0ZWQgcmVzdWx0c1xuICAgKiAtIGNhbiBjb250YWluIG51bGwgdmFsdWVzXG4gICAqL1xuICBwcm90ZWN0ZWQgX3VuQ2xlYW5SZXN1bHRzKHJlc3VsdHM6IE9iamVjdCk6T2JqZWN0e1xuICAgIGxldCBvdXQgPSB7fSxcbiAgICAgICAgbmV3Q29scyA9IHt9O1xuICAgIGxldCBjdXJSb3cgPSAwLFxuICAgICAgICBjdXJDb2wgPSAwO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHMubGVuZ3RoOyBqKyspe1xuICAgICAgbGV0IGNvbCA9IHRoaXMuY29sc1tqXTtcbiAgICAgIGlmKGNvbCAhPT0gbnVsbCl7XG4gICAgICAgIG5ld0NvbHNbY3VyQ29sXSA9IGo7XG4gICAgICAgIGN1ckNvbCArKztcbiAgICAgIH1cbiAgICB9IC8vIGVuZCBmb3IgdGhpcy5jb2xzXG4gICAgZm9yKGxldCBpIGluIHRoaXMucm93cyl7XG4gICAgICBpZih0aGlzLnJvd3NbaV0gIT09IG51bGwpe1xuICAgICAgICBsZXQgcm93ID0gcmVzdWx0c1tjdXJSb3ddO1xuICAgICAgICBsZXQgdG1wID0ge307XG4gICAgICAgIGZvcihsZXQgaiBpbiByb3cpe1xuICAgICAgICAgIGxldCBuZXdDb2wgPSBuZXdDb2xzW2pdO1xuICAgICAgICAgIHRtcFtuZXdDb2xdID0gcm93W2pdO1xuICAgICAgICB9XG4gICAgICAgIG91dFtpXSA9IHRtcDtcbiAgICAgICAgY3VyUm93Kys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc3Bpbm5lciBDU1MgY2xhc3NlcyBiYXNlZCBvbiB0aGUgaW5wdXQgc3RhdGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0NsYXNzIHVwZGF0ZWQgc3RhdGUgZm9yIHRoZSBzcGlubmVyXG4gICAqL1xuICBwcml2YXRlIF9zZXRTcGlubmVyQ2xhc3MobmV3Q2xhc3M6IHN0cmluZyl7XG4gICAgdGhpcy5fc3Bpbm5lckNsYXNzWydoaWRpbmcnXSA9IChuZXdDbGFzcyA9PT0gXCJzcGlubmluZ1wiID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgdGhpcy5fc3Bpbm5lckNsYXNzWydzcGlubmluZyddID0gKG5ld0NsYXNzID09PSBcInNwaW5uaW5nXCIgPyB0cnVlIDogZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBDU1MgY2xhc3NlcyBmb3IgdGhlIHNwaW5uZXJcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gQ1NTIGNsYXNzZXMgZm9yIHRoZSBzcGlubmVyIGluIHRoZSBmb3JtXG4gICAqIGB7J2NsYXNzJzogYm9vbGVhbiwgLi4ufWBcbiAgICovXG4gIGdldFNwaW5uZXJDbGFzcygpe1xuICAgIHJldHVybiB0aGlzLl9zcGlubmVyQ2xhc3M7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBleHBlcmltZW50IGRhdGEgYW5kIHN1Ym1pdHMgdG8gc2VydmljZSB0byBnZXQgcmVzdWx0c1xuICAgKiBvZiB0aGUgbXVsdGlwbGV4ZXJcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiBzdWJtaXQgYnV0dG9uXG4gICAqL1xuICBwZXJmb3JtUGxleGVyKCl7XG4gICAgLy8gc2V0IHRoZSBzcGlubmVyXG4gICAgdGhpcy5fc2V0U3Bpbm5lckNsYXNzKCdzcGlubmluZycpO1xuICAgIC8vIGNsZWFuIHRoZSByb3cgYW5kIGNvbHVtbiBhcnJheXNcbiAgICBsZXQgdG1wUm93cyA9IHRoaXMucm93cztcbiAgICBsZXQgY2xlYW5Sb3dzID0gdGhpcy5fY2xlYW5BcnJheXModG1wUm93cyk7XG4gICAgbGV0IGNsZWFuQ29scyA9IHRoaXMuX2NsZWFuQXJyYXlzKHRoaXMuY29scyk7XG4gICAgLy8gZ2F0aGVyIGRhdGFcbiAgICB2YXIgZGF0YTogUGxleGVySW5wdXQgPSB7XG4gICAgICBsYXduVHlwZTogdGhpcy5jaG9zZW5CYWN0LFxuICAgICAgcm93UGhhZ2U6IGNsZWFuUm93cyxcbiAgICAgIGNvbFBoYWdlOiBjbGVhbkNvbHMsXG4gICAgICBzcGVjaWFsczoge30sXG4gICAgICBsb2NhdGlvbjogdGhpcy5wbGV4ZXJUeXBlLFxuICAgICAgc2NlbmFyaW9EYXRhOiB0aGlzLnNjZW5hcmlvRGV0YWlscyxcbiAgICAgIGNhcGFjaXR5OiBTY2VuYXJpb0dsb2JhbHMucGxleGVyQ2FwYWNpdHlcbiAgICB9O1xuICAgIC8vIHVzZSB0aGUgc2VydmljZVxuICAgIHRoaXMuZXhwU3Vic2NyaXB0aW9uID0gdGhpcy5fZXhwZXJpbWVudFNlcnZpY2UucGVyZm9ybVBsZXhlcihkYXRhKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIHRoaXMucmVzdWx0cyA9IHRoaXMuX3VuQ2xlYW5SZXN1bHRzKHJlcyk7XG4gICAgICB0aGlzLl9zZXRTcGlubmVyQ2xhc3MoJ2hpZGluZycpO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgIHRoaXMuX3NldFNwaW5uZXJDbGFzcygnaGlkaW5nJyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHBoYWdlIHRvIHJvdyBvciBjb2x1bW4gb2YgcGxleGVyXG4gICAqIHdoZW4gc3VjY2Vzc2Z1bCwgdXBkYXRlcyB0aGUgcm93L2NvbCBwaGFnZSBjb3VudHNcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAob25Ecm9wU3VjY2VzcylgIG9mIHJvdy9jb2wgaGVhZGVyXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgZHJhZ0V2ZW50OyBpbmNsdWRlcyBwaGFnZSBkYXRhXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgZGlyZWN0aW9uOyBhZGQgdG8gYHJvd2Agb3IgYGNvbGBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNwb3QgcG9zaXRpb24gdG8gYWRkIHBoYWdlXG4gICAqL1xuICBhZGRQaGFnZSgkZXZlbnQ6IGFueSwgZGlyOiBzdHJpbmcsIHNwb3Q6IG51bWJlcil7XG4gICAgbGV0IGZwaGFnZTogRnJpZGdlUGhhZ2UgPSAkZXZlbnQuZHJhZ0RhdGE7XG4gICAgbGV0IHBoYWdlOiBFeHBlcmltZW50UGhhZ2UgPSB7XG4gICAgICBpZDogZnBoYWdlLmlkLFxuICAgICAgc3RyYWluTnVtOiBmcGhhZ2Uuc3RyYWluTnVtLFxuICAgICAgbnVtUGhhZ2U6IFNjZW5hcmlvR2xvYmFscy5udW1QaGFnZVxuICAgIH1cbiAgICAvLyBhZGQgdG8gcm93XG4gICAgaWYoZGlyID09PSAncm93JyAmJiBzcG90IDwgOCl7XG4gICAgICB0aGlzLnJvd3Nbc3BvdF0gPSBwaGFnZTtcbiAgICAgIHRoaXMublN0cmFpbnNbMF0gPSB0aGlzLnJvd3MuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZSAhPT0gbnVsbCB9KS5sZW5ndGg7XG4gICAgfSBlbHNlIGlmIChzcG90IDwgOCkgeyAvLyBjb2x1bW5cbiAgICAgIHRoaXMuY29sc1tzcG90XSA9IHBoYWdlO1xuICAgICAgdGhpcy5uU3RyYWluc1sxXSA9IHRoaXMuY29scy5maWx0ZXIoZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlICE9PSBudWxsIH0pLmxlbmd0aDtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2NlbmFyaW8uc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb0dsb2JhbHMgfSBmcm9tICcuLi8uLi9zY2VuYXJpby5nbG9iYWxzJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogVGhpcyByb29tIGlzIHVzZWQgZm9yIHN0dWRlbnRzIHRvIHN1Ym1pdCB0aGVpciBkZWxldGlvbiBndWVzc2VzXG4gKiBmb3IgcGhhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2RlbC1yb29tJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tb2RlbC1yb29tLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9tb2RlbC1yb29tLnN0eWxlLmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIE1vZGVsUm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogQ3VycmVudCB1c2VyIGd1ZXNzZXMgYXMgb2JqZWN0XG4gICAqL1xuICBwcml2YXRlIGd1ZXNzZXM6IGFueTtcbiAgLyoqXG4gICAqIEFycmF5IG9mIHN0cmFpbiBudW1iZXJzIGluY2x1ZGVkXG4gICAqL1xuICBwcml2YXRlIGtleXM6IG51bWJlcltdO1xuICAvKipcbiAgICpcbiAgICovXG4gIHByaXZhdGUgZ2VuZUFyOiBudW1iZXJbXTtcbiAgLyoqXG4gICAqIFNpemUgb2YgZWFjaCBibG9ja1xuICAgKi9cbiAgcHJpdmF0ZSBzdGVwU2l6ZTogbnVtYmVyO1xuICAvKipcbiAgICogU2NlbmFyaW8gY29kZVxuICAgKi9cbiAgcHJpdmF0ZSBzY2VuYXJpb0lkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVc2VyIGlkXG4gICAqL1xuICBwcml2YXRlIHVzZXJJZDogbnVtYmVyO1xuICAvKipcbiAgICogUG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIENTUyB3aWR0aCBvZiBlYWNoIGJsb2NrIGRlcGVuZGVudCBvbiBsZW5ndGggb2YgZ2VuZSBhbmQgc3RlcCBzaXplXG4gICAqL1xuICBwcml2YXRlIF93aWR0aDogc3RyaW5nO1xuICAvKipcbiAgICogQm9vbGVhbiBzdGF0ZSB2YXJpYWJsZSB1c2VkIHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tXG4gICAqIG11bHRpcGxlIHNlcnZpY2VzIGVhc2llclxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2Upe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIHRoaXMuc3RlcFNpemUgPSBTY2VuYXJpb0dsb2JhbHMuZGVsZXRpb25HdWVzc0xlbmd0aDtcbiAgICB0aGlzLmdlbmVBciA9IFtdO1xuICAgIGxldCBuQmxvY2tzOiBudW1iZXIgPSBNYXRoLmNlaWwoU2NlbmFyaW9HbG9iYWxzLmdlbmVMZW5ndGgvdGhpcy5zdGVwU2l6ZSk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG5CbG9ja3M7IGkrKyl7XG4gICAgICB0aGlzLmdlbmVBci5wdXNoKGkpO1xuICAgIH1cbiAgICB0aGlzLl93aWR0aCA9ICgxMDAgLyBuQmxvY2tzKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgdXNlciBpZFxuICAgKiAyLiBHZXQgdGhlIHNjZW5hcmlvIGlkIGZyb20gcGFyZW50IFVSTFxuICAgKiAzLiBHZXQgdXNlciBndWVzc2VzIGZyb20gc2NlbmFyaW8gc2VydmljZSAoc2V0IGJ5IGZyaWRnZSlcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgbGV0IHUgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIGlmKHUpe1xuICAgICAgdGhpcy51c2VySWQgPSB1LmlkO1xuICAgIH1cbiAgICB0aGlzLnNjZW5hcmlvSWQgPSB0aGlzLl9yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzY2VuSWQnKTtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0R3Vlc3Nlc1xuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKGRlbHMpID0+IHtcbiAgICAgIHRoaXMuZ3Vlc3NlcyA9IGRlbHM7XG5cbiAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKGRlbHMpLm1hcCgoayk9PiB7cmV0dXJuIE51bWJlci5wYXJzZUludChrKTt9KTtcbiAgICAgIGlmKHRoaXMua2V5cy5sZW5ndGggPT09IDApe1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdObyBwaGFnZSBhdmFpbGFibGUgZm9yIG1vZGVsbGluZydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICB9XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGNvbXBvbmVudCBieSB1bnN1YnNjcmliaW5nXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIENTUyBjbGFzc2VzIGZvciBhIHN0cmFpbiBndWVzcyBibG9ja1xuICAgKiBCbG9jayBpbmRpY2F0ZXMgd2hlYXRlciB1c2VyIHRoaW5rcyB0aGF0IHNlY3Rpb24gb2YgdGhlIGNocm9tb3NvbWVcbiAgICogaXMgZGVsZXRlZCBpbiB0aGUgc3RyYWluXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJhaW4gLSBzdHJhaW4gbnVtYmVyIChtYXRjaGVzIG51bW1iZXIgaXMgZnJpZGdlKVxuICAgKiBAcGFyYW0ge251bWJlcn0gcG9zIC0gYmxvY2sgaW5kZXhcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gYXBwbGljYWJsZSBDU1MgY2xhc3NlcyBpbiB0aGUgZm9ybVxuICAgKiBgeydjbGFzcyc6IGJvb2xlYW4sIC4uLn1gXG4gICAqL1xuICBnZXRCbG9ja0NsYXNzKHN0cmFpbjogbnVtYmVyLCBwb3M6IG51bWJlcil7XG4gICAgbGV0IHBvc0d1ZXNzID0gdGhpcy5ndWVzc2VzW3N0cmFpbl1bcG9zXTtcbiAgICByZXR1cm4ge1xuICAgICAgJ2d1ZXNzLWJsb2NrIGJ0biBwLTAnOiB0cnVlLFxuICAgICAgJ2J0bi1vdXRsaW5lLXNlY29uZGFyeSc6ICFwb3NHdWVzcywgLy8gaW5hY3RpdmVcbiAgICAgICdiZy1kYXJrJzogcG9zR3Vlc3MgLy8gYWN0aXZlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBibG9jayBndWVzcyBmcm9tIHRydWUgdG8gZmFsc2UgT1IgZmFsc2UgdG8gdHJ1ZVxuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIHRoZSBibG9ja1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RyYWluIC0gc3RyYWluIG51bWJlciAobWF0Y2hlcyBudW1tYmVyIGlzIGZyaWRnZSlcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBvcyAtIGJsb2NrIGluZGV4XG4gICAqL1xuICB0b2dnbGVCbG9jayhzdHJhaW46IG51bWJlciwgcG9zOiBudW1iZXIpe1xuICAgIGxldCBjID0gdGhpcy5ndWVzc2VzW3N0cmFpbl1bcG9zXTtcbiAgICB0aGlzLmd1ZXNzZXNbc3RyYWluXVtwb3NdID0gIWM7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIGd1ZXNzZXMgdG8gdGhlIGJhY2tlbmQvZGF0YWJhc2UgdXNpbmcgdGhlIHNlcnZpY2VcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiBTYXZlIEJ1dHRvblxuICAgKi9cbiAgc2F2ZURhdGEoKXtcbiAgICAvLyBjbGVhciBlcnJvciBtZXNzYWdlIGJlZm9yZWhhbmRcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIC8vIHVzZSBzZXJ2aWNlIGFuZCBzYXZlIGRhdGEgKGFzIGEgc3RyaW5nKVxuICAgIGxldCBvdXQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmd1ZXNzZXMpXG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlXG4gICAgICAuc2F2ZURlbGV0aW9ucyh0aGlzLmd1ZXNzZXMsIHRoaXMudXNlcklkLCB0aGlzLnNjZW5hcmlvSWQpXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgoZGF0KT0+e1xuICAgICAgdGhpcy5ndWVzc2VzID0gSlNPTi5wYXJzZShkYXQpO1xuICAgICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLnNldFNjZW5hcmlvKG51bGwsIGRhdCk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uLy4uL3NjZW5hcmlvLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW8gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBzaG93cyB0aGUgc2NlbmFyaW8gZGV0YWlscyBpbmNsdWRpbmdcbiAqIDEuIHB1cnBvc2UgLSB0aGUgZ29hbCBvZiB0aGUgc2NlbmFyaW8sIHVzdWFsbHkgZWl0aGVyIGlkZW50aWZ5IG11dGF0aW9ucyBvZiBnaXZlbiB1bmtub3duIHBoYWdlIG9yIGNyZWF0ZSBwaGFnZSB3aXRoIGNlcnRhaW4gbXV0YXRpb25cbiAqIDIuIHJlbGV2YW5jZSAtIHdoeSB0aGUgc2NlbmFyaW8gaXMgcmVsZXZhbnQgZm9yIGxlYXJuaW5nIGFuZCBmdXR1cmUgc2NlbmFyaW9zXG4gKiAzLiBzdGFydGluZyBwb2ludCAtIGRlc2NyaXB0aW9uIG9mIHRoZSBwaGFnZSBzdHVkZW50cyBzdGFydCB0aGUgc2NlbmFyaW8gd2l0aFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYW5kaW5nLXJvb20nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9sYW5kaW5nLXJvb20udGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgTGFuZGluZ1Jvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIHdlIGFyZSB2aWV3aW5nXG4gICAqL1xuICBzY2VuYXJpbzogU2NlbmFyaW87XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gdGhlIGdldFNjZW5hcmlvIG1ldGhvZCBvZiBzY2VuYXJpbyBzZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogYW55O1xuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgY29udHJ1Y3RvclxuICAgKiBAcGFyYW0ge1JvdXRlcn0gX3JvdXRlciBBbmd1bGFyIHJvdXRlclxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlfSBfcm91dGUgVGhlIGN1cnJlbnQgVVJMIHJvdXRlIHRvIGdldCBzY2VuYXJpbyBpZFxuICAgKiBAcGFyYW0ge1NjZW5hcmlvU2VydmljZX0gX3NjZW5hcmlvU2VydmljZSBTZXJ2aWNlIHRvIGdldCBzY2VuYXJpbyBpbmZvcm1hdGlvblxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSl7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnRcbiAgICogMS4gR2V0IHNjZW5Db2RlIGZyb20gdGhlIHVybCAodXNlIHBhcmFtZXRlciBmcm9tIHBhcmVudCByb3V0ZSBiZWNhdXNlIHRoaXMgcm91dGUgZW5kcyBcIi9sYW5kaW5nLXJvb21cIilcbiAgICogMi4gR2V0IHRoZSBkZXRhaWxzIGZvciBzY2VuYXJpb3NcbiAgICogSWYgZXJyb3IsIGdvIGJhY2sgdG8gaG9tZSBwYWdlXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIGxldCBzY2VuSWQgPSB0aGlzLl9yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzY2VuSWQnKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX3NjZW5hcmlvU2VydmljZVxuICAgICAgLmdldFNjZW5hcmlvKHNjZW5JZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICBzY2VuYXJpbyA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmFyaW8gPSBzY2VuYXJpbztcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgdGhlIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgaWYgbmVjZXNzYXJ5IHRvXG4gICAqIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhbmRpbmctcm9vbS9sYW5kaW5nLXJvb20uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYkFjdGl2ZU1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEZyaWRnZVBoYWdlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9waGFnZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIE1vZGFsIGRpYWxvZyBib3ggZm9yIGluZGl2aWR1YWwgcGhhZ2Ugc3RyYWluc1xuICogVXNlZCB0byBlZGl0IHBoYWdlIGNvbW1lbnQsIHZpZXcgcGhhZ2UgcGFyZW50cywgb3IgZGVsZXRlIHBoYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BoYWdlLWRpYWxvZy1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGhhZ2UtZGlhbG9nLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBQaGFnZURpYWxvZ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgcGhhZ2Ugd2UgYXJlIHZpZXdpbmdcbiAgICovXG4gIEBJbnB1dCgpIHBoYWdlOiBGcmlkZ2VQaGFnZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKSB7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL3BoYWdlLWRpYWxvZy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2dlZEluR3VhcmQgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZSc7XG5cbmltcG9ydCB7IExhYlJvb21Db21wb25lbnQgfSBmcm9tICcuL2xhYi1yb29tL2xhYi1yb29tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGV4ZXJSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kZWxSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RlbC1yb29tL21vZGVsLXJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IExhbmRpbmdSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5kaW5nLXJvb20vbGFuZGluZy1yb29tLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBMb2NhdGlvblJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBMb2NhdGlvbkNvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZTogW0xvZ2dlZEluR3VhcmRdLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdsYWItcm9vbScsXG4gICAgICAgIGNvbXBvbmVudDogTGFiUm9vbUNvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnTGFiJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAncGxleGVyLXJvb20nLFxuICAgICAgICBjb21wb25lbnQ6IFBsZXhlclJvb21Db21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ1BsZXhlcidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ21vZGVsLXJvb20nLFxuICAgICAgICBjb21wb25lbnQ6IE1vZGVsUm9vbUNvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnTW9kZWwnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHBhdGg6ICdpbmZvJywgY29tcG9uZW50OiBMYW5kaW5nUm9vbUNvbXBvbmVudH0sXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IExhbmRpbmdSb29tQ29tcG9uZW50fVxuICAgIF1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbG9jYXRpb24udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbG9jYXRpb24uc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhYi1yb29tL2xhYi1yb29tLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhYi1yb29tL2xhYi1yb29tLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vcGxleGVyLXJvb20vcGxleGVyLXJvb20uc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20uc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL21vZGVsLXJvb20vbW9kZWwtcm9vbS5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYW5kaW5nLXJvb20vbGFuZGluZy1yb29tLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbGFuZGluZy1yb29tL2xhbmRpbmctcm9vbS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtOZ2JNb2RhbCwgTW9kYWxEaXNtaXNzUmVhc29uc30gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuLi9zY2VuYXJpby5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW9HbG9iYWxzIH0gZnJvbSAnLi4vc2NlbmFyaW8uZ2xvYmFscyc7XG5pbXBvcnQgeyBQaGFnZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGhhZ2UtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEZyaWRnZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZnJpZGdlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBGcmlkZ2VQaGFnZSwgR2Vub3R5cGVQaGFnZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcGhhZ2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogT25lIG9mIHRoZSBtYWluIGNvbXBvbmVudHMgb2YgdGhlIGFwcCAtIHRoZSBmcmlkZ2Ugc3RvcmVzIHRoZSBwaGFnZSBmb3JcbiAqIHRoZSBnaXZlbiB1c2VyL3NjZW5hcmlvXG4gKlxuICogTmVlZHMgdG8gZ2V0IGV4aXN0aW5nIGZyaWRnZS9jcmVhdGUgbmV3IG9uZTsgZWRpdCBhbmQgcmVtb3ZlIGV4aXN0aW5nIHN0cmFpbnM7XG4gKlxuICogYWRkIG5ldyBzdHJhaW5zOyBjaGFuZ2Ugc2hlbGZcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmcmlkZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2ZyaWRnZS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vZnJpZGdlLnN0eWxlLmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBGcmlkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcblxuICAvKipcbiAgICogVGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAqL1xuICB1c2VyOiBVc2VyO1xuICAvKipcbiAgICogVGhlIGZyaWRnZSBvYmplY3RcbiAgICovXG4gIGZyaWRnZTogRnJpZGdlO1xuICAvKipcbiAgICogbGlzdCBvZiBzdHJhaW5zIGluIHRoZSBmcmlkZ2UsIGluY2x1ZGluZyBlbXB0eSBvbmVzXG4gICAqL1xuICBzdHJhaW5zOiBGcmlkZ2VQaGFnZVtdO1xuICAvKipcbiAgICogY3VycmVudGx5IHZpc2libGUgc3RyYWlucyBiYXNlZCBvbiBzaGVsZiBudW1iZXJcbiAgICovXG4gIGN1cnJTdHJhaW5zOiBGcmlkZ2VQaGFnZVtdO1xuICAvKipcbiAgICogY3VycmVudCBzaGVsZlxuICAgKi9cbiAgc2hlbGY6IG51bWJlciA9IDA7XG4gIC8qKlxuICAgKiBtYXhpbXVtIG51bWJlciBvZiBzaGVsdmVzIGluIGZyaWRnZVxuICAgKi9cbiAgbWF4U2hlbGY6IG51bWJlcjtcbiAgLyoqXG4gICAqIG51bWJlciBvZiBzbG90cyBwZXIgc2hlbGZcbiAgICovXG4gIHNwb3RzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBwb3RlbnRpYWwgYmFja2VuZCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogU3RhdGUgdG8gbW9uaXRpb3IgaWYgY29tcG9uZW50IGFjdGl2ZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgdG9cbiAgICogbXVsdGlwbGUgc3RyZWFtcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogT2JzZXJ2ZXMgdGhlIHNjZW5Db2RlIG9mIHRoZSBVUkxcbiAgICovXG4gIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCkge1xuICAgIHRoaXMubWF4U2hlbGYgPSBTY2VuYXJpb0dsb2JhbHMubkZyaWRnZVNoZWxmO1xuICAgIHRoaXMuc3BvdHMgPSBTY2VuYXJpb0dsb2JhbHMubkZyaWRnZVNwb3RzO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0YWlsaXplIHRoZSBmcmlkZ2Ugd2hlbiBjcmVhdGluZyBjb21wb25lbnRcbiAgICogMS4gR2V0IGxvZ2dlZCBpbiB1c2VyIGFuZCBjdXJyZW50IHNjZW5hcmlvXG4gICAqIDIuIEZldGNoIHRoZSBjb3JyZXNwb25kaW5nIGZyaWRnZVxuICAgKiAzYS4gSWYgdGhlIGZyaWRnZSBkb2Vzbid0IGV4aXN0IHlldCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgKiAzYi4gSWYgdGhlIGZyaWRnZSBkb2VzIGV4aXN0LCBpbml0aWFsaXplIGl0XG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMudXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG5cbiAgICBsZXQgdXNlcklkID0gdGhpcy51c2VyLmlkO1xuICAgIHRoaXMucGFyYW1PYnNlcnZlciA9IHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgIGxldCBzY2VuSWQgPSBwYXJhbXNbJ3NjZW5JZCddO1xuICAgICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmdldEZyaWRnZSh1c2VySWQsIHNjZW5JZClcbiAgICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoZnJpZGdlKSA9PiB7dGhpcy5faW5pdEZyaWRnZShmcmlkZ2UpfSxcbiAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZihlcnIuc3RhdHVzID09PSAzMDcpe1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlRnJpZGdlKHVzZXJJZCwgc2NlbklkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgfSB9XG4gICAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIHRoZSBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGZyb20gc2VydmljZXNcbiAgICogdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBmcmlkZ2UgYmVjYXVzZSB0aGlzIHVzZXIgZG9lc24ndCBoYXZlIG9uZSBmb3IgdGhpcyBzY2VuYXJpb1xuICAgKlxuICAgKiBPbiBzdWNjZXNzLCBpbmlhbGl6ZXMgZnJpZGdlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQgLSBsb2dnZWQgaW4gdXNlcidzIGlkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2VuSWQgLSBjdXJyZW50IHNjZW5hcmlvIGlkXG4gICAqL1xuICBfY3JlYXRlRnJpZGdlKHVzZXJJZDogbnVtYmVyLCBzY2VuSWQ6IHN0cmluZyl7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmNyZWF0ZUZyaWRnZSh1c2VySWQsIHNjZW5JZClcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgoZnJpZGdlKT0+e1xuICAgICAgdGhpcy5faW5pdEZyaWRnZShmcmlkZ2UpO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRpYWxpemVzIHRoZSBmcmlkZ2UgYW5kIGNvbXBvbmVudCB2YXJpYWJsZXMgcmVsYXRlZCB0byB3aGljaCBzdHJhaW5zIGFyZVxuICAgKiB2aXNpYmxlIGJhc2VkIG9uIHRoZSBjdXJyZW50IHNoZWxmXG4gICAqXG4gICAqIEBwYXJhbSB7RnJpZGdlfSBuZXdGcmlkZ2UgLSBmcmlkZ2Ugb2JqZWN0IHRvIGJlIGluaXRhbGl6ZWRcbiAgICovXG4gIF9pbml0RnJpZGdlKG5ld0ZyaWRnZTogRnJpZGdlKXtcbiAgICB0aGlzLmZyaWRnZSA9IG5ld0ZyaWRnZTtcbiAgICB0aGlzLnN0cmFpbnMgPSB0aGlzLl9maWxsU3RyYWlucyhuZXdGcmlkZ2Uuc3RyYWlucyk7XG4gICAgdGhpcy5fY3VyclN0cmFpbnMoKTtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2Uuc2V0U2NlbmFyaW8obmV3RnJpZGdlLnNjZW5hcmlvRGV0YWlscywgbmV3RnJpZGdlLmd1ZXNzZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGxzIGluIHRoZSBlbXB0eSBzbG90cyB3aXRoIFwiZW1wdHlcIiBwaGFnZSBvYmplY3RzXG4gICAqXG4gICAqIEBwYXJhbSB7RnJpZGdlUGhhZ2VbXX0gZnJpZGdlU3RyYWlucyAtIGFycmF5IG9mIHN0cmFpbnMgYWN0dWFsbHkgaW4gdGhlIGZyaWRnZVxuICAgKlxuICAgKiBAcmV0dXJucyB7RnJpZGdlUGhhZ2VbXX0gYXJyYXkgb2YgYWxsIHNsb3RzIGluIGZyaWRnZSwgaW5jbHVkaW5nIGVtcHR5XG4gICAqL1xuICBfZmlsbFN0cmFpbnMoZnJpZGdlU3RyYWluczogRnJpZGdlUGhhZ2VbXSk6IEZyaWRnZVBoYWdlW117XG4gICAgdmFyIG91dDogRnJpZGdlUGhhZ2VbXSA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1heFNoZWxmKnRoaXMuc3BvdHM7IGkrKyl7XG4gICAgICBvdXQucHVzaCh7c3RyYWluTnVtOiBpLCBwaGFnZVR5cGU6ICdlbXB0eScsIGNvbW1lbnQ6ICcnLCBpZDogJyd9KTtcbiAgICB9XG4gICAgLy8gYWRkIG9yaWdpbmFsIHN0cmFpbnNcbiAgICBmb3IobGV0IGk9MDsgaSA8IGZyaWRnZVN0cmFpbnMubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IG4gPSBmcmlkZ2VTdHJhaW5zW2ldLnN0cmFpbk51bTtcbiAgICAgIG91dFtuXSA9IGZyaWRnZVN0cmFpbnNbaV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBzdHJhaW5zIGZvciB2aXNpYmxlIHNoZWxmXG4gICAqL1xuICBfY3VyclN0cmFpbnMoKXtcbiAgICBsZXQgc3RhcnQgPSB0aGlzLnNoZWxmKnRoaXMuc3BvdHM7XG4gICAgbGV0IGVuZCA9IHN0YXJ0K3RoaXMuc3BvdHM7XG4gICAgdGhpcy5jdXJyU3RyYWlucyA9IHRoaXMuc3RyYWlucy5zbGljZShzdGFydCxlbmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgQ1NTIGNsYXNzZXMgYXBwbGljYWJsZSB0byB0aGUgcGhhZ2UgYmFzZWQgb24gdGhlIHBoYWdlIHR5cGVcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyYyAtIHN0cmFpbiBudW1iZXIgb2YgcGhhZ2VcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gY2xhc3NlcyB3aGljaCBhcHB5IHRvIHRoaXMgYnV0dG9uIGluIHRoZSBmb3JtIHtcImNsYXNzXCI6IGJvb2xlYW4sIC4uLn1cbiAgICovXG4gIGdldFBoYWdlQ2xhc3Moc3JjOiBudW1iZXIpOiBPYmplY3R7XG4gICAgbGV0IHBoYWdlID0gdGhpcy5zdHJhaW5zW3NyY107XG4gICAgcmV0dXJuIHtcbiAgICAgICdjb2wtNyBjb2wteGwtOCBwLTAgc3RyYWluLWltYWdlJzogdHJ1ZSxcbiAgICAgICdzdHJhaW4taW1hZ2UtcmVmZXJlbmNlJzogcGhhZ2UucGhhZ2VUeXBlID09PSAncmVmZXJlbmNlJyxcbiAgICAgICdzdHJhaW4taW1hZ2UtdW5rbm93bic6IHBoYWdlLnBoYWdlVHlwZSA9PT0gJ3Vua25vd24nLFxuICAgICAgJ3N0cmFpbi1pbWFnZS1zdWJtaXR0ZWQnOiBwaGFnZS5zdWJtaXR0ZWRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2Ugb3IgZGVjcmVhc2UgdmlzaWJsZSBzaGVsZiB0aGVuIHVwZGF0ZSB0aGUgdmlzaWJsZSBzdHJhaW5zXG4gICAqXG4gICAqIENhbGxlZCBieSBgKGNsaWNrKWAgb2YgcHJldi9uZXh0IGJ1dHRvbnNcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluYyAtIGFtb3VudCB0byBjaGFuZ2Ugc2hlbGYgYnlcbiAgICovXG4gIGNoYW5nZVNoZWxmKGluYzogbnVtYmVyKXtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIGlmKHRoaXMuc2hlbGYgPD0gdGhpcy5tYXhTaGVsZi0xICYmIGluYyA9PT0gMSl7XG4gICAgICB0aGlzLnNoZWxmKys7XG4gICAgICB0aGlzLl9jdXJyU3RyYWlucygpO1xuICAgIH0gZWxzZSBpZih0aGlzLnNoZWxmID4gMCAmJiBpbmMgPT09IC0xKXtcbiAgICAgIHRoaXMuc2hlbGYtLTtcbiAgICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2aXNpYmxlIHNoZWxmIHRvIGEgc3BlY2lmaWMgbnVtYmVyO1xuICAgKiB1c2VkIHRvIGp1bXAgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kXG4gICAqXG4gICAqIENhbGxlZCBieSAoY2xpY2spIG9mIGZpcnN0L2xhc3QgYnV0dG9uc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gblNoZWxmIC0gc2hlbGYgdG8gZ28gdG9cbiAgICovXG4gIHNldFNoZWxmKG5TaGVsZjogbnVtYmVyKXtcbiAgICB0aGlzLnNoZWxmID0gblNoZWxmO1xuICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHN0cmFpbiBjYW4gYmUgZHJvcHBlZCBpbiBhIHNsb3RcbiAgICogY2FuIGJlIGRyb3BwZWQgaWYgc2xvdCBpcyBlbXB0eSBhbmQgc3JjIGlzIHNtYWxsIG9yIGxhcmdlXG4gICAqXG4gICAqIENhbGxlZCBieSBgW2FsbG93RHJvcF1gIG9mIGZyaWRnZSBzbG90XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcG90IC0gc3BvdCB0byB0ZXN0IHRvIHNlZSBpZiBjYW4gZHJvcFxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIHRydWUgb3IgZmFsc2UgaWZcbiAgICogc3RyYWluIGNhbiBiZSBkcm9wcGVkIGluIHNsb3RcbiAgICovXG4gIGNhbkRyb3Aoc3BvdDogbnVtYmVyKTogYW55IHtcbiAgcmV0dXJuIChkcmFnRGF0YTogR2Vub3R5cGVQaGFnZSkgPT4ge1xuICAgIGxldCBvdXQgPSBmYWxzZTtcbiAgICBpZihkcmFnRGF0YSAmJiBkcmFnRGF0YS5oYXNPd25Qcm9wZXJ0eSgnc3JjJykpe1xuICAgICAgaWYoZHJhZ0RhdGEuc3JjID09PSAnc21hbGwnIHx8IGRyYWdEYXRhLnNyYz09PSAnbGFyZ2UnKXtcbiAgICAgICAgbGV0IHRyeVNwb3Q6IEZyaWRnZVBoYWdlID0gdGhpcy5zdHJhaW5zW3Nwb3RdO1xuICAgICAgICBpZih0cnlTcG90LnBoYWdlVHlwZSA9PT0gJ2VtcHR5Jyl7XG4gICAgICAgICAgb3V0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9O1xufVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IHN0cmFpbiB0byBhIGZyaWRnZVxuICAgKlxuICAgKiBDYWxsZWQgYnkgYChvbkRyb3BTdWNlc3MpYCBvZiBzbG90XG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgLSBkcmFnIGV2ZW50LCBpbmN1ZGluZyBkYXRhIGZvciBzdHJhaW4gdG8gYWRkO1xuICAgKiBoYXM6IHNoaWZ0cywgZGVsZXRpb24sIHBhcmVudHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNwb3QgLSBzbG90IHRvIGRyb3AgbmV3IHN0cmFpblxuICAgKi9cbiAgZHJvcFN0cmFpbigkZXZlbnQ6IGFueSwgc3BvdDogbnVtYmVyKXtcbiAgICBsZXQgc3RyYWluOiBHZW5vdHlwZVBoYWdlID0gJGV2ZW50LmRyYWdEYXRhO1xuICAgIC8vIG5lZWQgc3RyYWluTnVtLCBtdXRhdGlvbkxpc3QsIGRlbGV0aW9uXG4gICAgbGV0IG5ld1N0cmFpbiA9IHtcbiAgICAgIHN0cmFpbk51bTogc3BvdCxcbiAgICAgIG11dGF0aW9uTGlzdDogc3RyYWluLnNoaWZ0cyxcbiAgICAgIGRlbGV0aW9uOiBzdHJhaW4uZGVsZXRpb24sXG4gICAgICBwYXJlbnRzOiBzdHJhaW4ucGFyZW50c1xuICAgIH1cbiAgICAvLyBhZGQgdG8gZnJpZGdlXG4gICAgbGV0IHVzZXJJZCA9IHRoaXMudXNlci5pZDtcbiAgICBsZXQgc2NlbkNvZGUgPSB0aGlzLmZyaWRnZS5zY2VuQ29kZTtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuYWRkU3RyYWluKHVzZXJJZCwgc2NlbkNvZGUsIG5ld1N0cmFpbilcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICB0aGlzLnN0cmFpbnNbc3BvdF0gPSB7XG4gICAgICAgIC8vIHN0cmFpbk51bSBjb21tZW50IHBoYWdlVHlwZSBpZCBwYXJlbnRzXG4gICAgICAgIHN0cmFpbk51bTogcmVzLnN0cmFpbk51bSxcbiAgICAgICAgY29tbWVudDogcmVzLmNvbW1lbnQsXG4gICAgICAgIHBoYWdlVHlwZTogcmVzLnBoYWdlVHlwZSxcbiAgICAgICAgaWQ6IHJlcy5pZCxcbiAgICAgICAgcGFyZW50czogcmVzLnBhcmVudHMsXG4gICAgICAgIG51bVBhcmVudHM6IHJlcy5udW1QYXJlbnRzXG4gICAgICB9XG4gICAgICB0aGlzLl9jdXJyU3RyYWlucygpO1xuICAgIH0sXG4gICAgICAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBvcGVucyBhIGRpYWxvZyBib3ggdG8gZWRpdC9sZWFybiBtb3JlIGFib3V0IHNlbGVjdGVkIHBoYWdlXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gb3BlbnMgdGhlIGJveCBjYWxscyBoZWxwZXIgbWV0aG9kcyBiYXNlZCBvbiBib3ggb3V0cHV0XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgLSBzdHJhaW4gbnVtYmVyIHRvIG9wZW4gYm94IGZvclxuICAgKi9cbiAgZWRpdFBoYWdlKHNyYzogbnVtYmVyKSB7XG4gICAgbGV0IHBoYWdlID0gdGhpcy5zdHJhaW5zW3NyY107XG4gICAgY29uc3QgbW9kZWxSZWYgPSB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihQaGFnZURpYWxvZ0NvbXBvbmVudCwgeyB3aW5kb3dDbGFzczogJ3BoYWdlLWRpYWxvZyd9KTtcbiAgICBtb2RlbFJlZi5jb21wb25lbnRJbnN0YW5jZS5waGFnZSA9IHBoYWdlO1xuXG4gICAgbW9kZWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCk9PntcbiAgICAgIGxldCByZXNUeXBlID0gdHlwZW9mIHJlc3VsdDtcbiAgICAgIGlmKHJlc1R5cGUgPT09IFwic3RyaW5nXCIgJiYgcmVzdWx0ID09PSAnZGVsZXRlJyl7XG4gICAgICAgIC8vIGRlbGV0ZSB0aGUgcGhhZ2VcbiAgICAgICAgdGhpcy5fZGVsZXRlUGhhZ2Uoc3JjKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzVHlwZSA9PT0gXCJvYmplY3RcIil7XG4gICAgICAgIC8vIGVkaXQgaXRcbiAgICAgICAgdGhpcy5fZWRpdFBoYWdlKHNyYywgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSwgKHJlYXNvbik9PntcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gd2hpY2ggdXBkYXRlcyB0aGUgcGhhZ2UgYWZ0ZXIgZGlhbG9nIGJveCBoYXMgY2xvc2VkXG4gICAqXG4gICAqIFVwZGF0ZXMgdGhlIHN0cmFpbiBvbiBzdWNjZXNzIGFuZCBzZXRzIGVycm9yIG1lc3NhZ2Ugb24gZXJyb3JcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyYyAtIHN0cmFpbiBudW1iZXIgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSB7RnJpZGdlUGhhZ2V9IG5ld1BoYWdlIC0gdXBkYXRlZCBkZXRhaWxzXG4gICAqL1xuICBfZWRpdFBoYWdlKHNyYzogbnVtYmVyLCBuZXdQaGFnZTogRnJpZGdlUGhhZ2Upe1xuICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS51cGRhdGVTdHJhaW4odGhpcy51c2VyLmlkLCB0aGlzLmZyaWRnZS5zY2VuQ29kZSwgbmV3UGhhZ2UpXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICB0aGlzLnN0cmFpbnNbc3JjXSA9IHJlcztcbiAgICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiB3aGljaCBkZWxldGVzIHRoZSBwaGFnZSBmcm9tIHRoZSBmcmlkZ2UgYWZ0ZXIgZGlhbG9nIGJveCBoYXMgY2xvc2VkXG4gICAqXG4gICAqIFNldHMgc3BvdCB0byBlbXB0eSBwaGFnZSBvbiBzdWNjZXNzIGFuZCBzZXRzIGVycm9yIG1lc3NhZ2Ugb24gZXJyb3JcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyYyAtIHN0cmFpbiBudW1iZXIgdG8gZGVsZXRlXG4gICAqL1xuICBfZGVsZXRlUGhhZ2Uoc3JjOiBudW1iZXIpe1xuICAgIGxldCBuZXdQaGFnZSA9IHRoaXMuc3RyYWluc1tzcmNdO1xuICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5kZWxldGVTdHJhaW4odGhpcy51c2VyLmlkLCB0aGlzLmZyaWRnZS5zY2VuQ29kZSwgbmV3UGhhZ2UsIClcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIC8vIHN1Y2Nlc3NmdWxcbiAgICAgIHRoaXMuc3RyYWluc1tzcmNdID0ge3N0cmFpbk51bTogc3JjLCBwaGFnZVR5cGU6ICdlbXB0eScsIGNvbW1lbnQ6JycsIGlkOiAnJ307XG4gICAgICB0aGlzLl9jdXJyU3RyYWlucygpO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NjZW5hcmlvL2ZyaWRnZS9waGFnZS1kaWFsb2cudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zY2VuYXJpby9mcmlkZ2UvcGhhZ2UtZGlhbG9nLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zY2VuYXJpby9mcmlkZ2UvZnJpZGdlLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==