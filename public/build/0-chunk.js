webpackJsonp([0],{

/***/ 915:
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
const location_routes_1 = __webpack_require__(956);
const experiment_service_1 = __webpack_require__(918);
const fridge_component_1 = __webpack_require__(966);
const phage_dialog_component_1 = __webpack_require__(934);
const location_component_1 = __webpack_require__(929);
const landing_room_component_1 = __webpack_require__(933);
const lab_room_component_1 = __webpack_require__(930);
const plexer_room_component_1 = __webpack_require__(931);
const model_room_component_1 = __webpack_require__(932);
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

/***/ 916:
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

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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

/***/ 929:
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
        templateUrl: __webpack_require__(957),
        styleUrls: [__webpack_require__(958)]
    })
], LocationComponent);
exports.LocationComponent = LocationComponent;


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
const scenario_globals_1 = __webpack_require__(916);
const experiment_service_1 = __webpack_require__(918);
const scenario_service_1 = __webpack_require__(118);
const read_error_1 = __webpack_require__(64);
let LabRoomComponent = class LabRoomComponent {
    constructor(_experimentService, _scenarioService) {
        this._experimentService = _experimentService;
        this._scenarioService = _scenarioService;
        this.selectedObject = null;
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
        var incomingPhage = $event.data;
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
        let incomingDat = JSON.parse(JSON.stringify($event.data));
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
        let contents = $event.data;
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
        let strain = $event.data;
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
        templateUrl: __webpack_require__(959),
        styleUrls: [__webpack_require__(960)]
    }),
    __metadata("design:paramtypes", [experiment_service_1.ExperimentService,
        scenario_service_1.ScenarioService])
], LabRoomComponent);
exports.LabRoomComponent = LabRoomComponent;


/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
const scenario_globals_1 = __webpack_require__(916);
const experiment_service_1 = __webpack_require__(918);
const scenario_service_1 = __webpack_require__(118);
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
        let fphage = $event.data;
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
        templateUrl: __webpack_require__(961),
        styleUrls: [__webpack_require__(962)]
    }),
    __metadata("design:paramtypes", [experiment_service_1.ExperimentService,
        scenario_service_1.ScenarioService])
], PlexerRoomComponent);
exports.PlexerRoomComponent = PlexerRoomComponent;


/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
const scenario_service_1 = __webpack_require__(118);
const scenario_globals_1 = __webpack_require__(916);
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
        templateUrl: __webpack_require__(963),
        styleUrls: [__webpack_require__(964)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        scenario_service_1.ScenarioService])
], ModelRoomComponent);
exports.ModelRoomComponent = ModelRoomComponent;


/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
const scenario_service_1 = __webpack_require__(118);
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
        templateUrl: __webpack_require__(965)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        scenario_service_1.ScenarioService])
], LandingRoomComponent);
exports.LandingRoomComponent = LandingRoomComponent;


/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
        templateUrl: __webpack_require__(967)
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], PhageDialogComponent);
exports.PhageDialogComponent = PhageDialogComponent;


/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const location_component_1 = __webpack_require__(929);
const logged_in_guard_service_1 = __webpack_require__(120);
const lab_room_component_1 = __webpack_require__(930);
const plexer_room_component_1 = __webpack_require__(931);
const model_room_component_1 = __webpack_require__(932);
const landing_room_component_1 = __webpack_require__(933);
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

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/location.template.html";

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/location.style.css";

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/lab-room/lab-room.template.html";

/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/lab-room/lab-room.style.css";

/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/plexer-room/plexer-room.template.html";

/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/plexer-room/plexer-room.style.css";

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/model-room/model-room.template.html";

/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/model-room/model-room.style.css";

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/landing-room/landing-room.template.html";

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
const router_1 = __webpack_require__(22);
const ng_bootstrap_1 = __webpack_require__(119);
const rxjs_1 = __webpack_require__(52);
const scenario_service_1 = __webpack_require__(118);
const authentication_service_1 = __webpack_require__(18);
const scenario_globals_1 = __webpack_require__(916);
const phage_dialog_component_1 = __webpack_require__(934);
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
        this.nextSpot = fridgeStrains[0].strainNum + 1;
        for (let i = 0; i < fridgeStrains.length; i++) {
            let n = fridgeStrains[i].strainNum;
            out[n] = fridgeStrains[i];
            this.nextSpot = (n === this.nextSpot ? n + 1 : this.nextSpot);
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
        let strain = $event.data;
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
        templateUrl: __webpack_require__(968),
        styleUrls: [__webpack_require__(969)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        scenario_service_1.ScenarioService,
        ng_bootstrap_1.NgbModal])
], FridgeComponent);
exports.FridgeComponent = FridgeComponent;


/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/fridge/phage-dialog.template.html";

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/fridge/fridge.template.html";

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/fridge/fridge.style.css";

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLmdsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9leHBlcmltZW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbGFuZGluZy1yb29tL2xhbmRpbmctcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9mcmlkZ2UvcGhhZ2UtZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20uc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vcGxleGVyLXJvb20vcGxleGVyLXJvb20udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL21vZGVsLXJvb20vbW9kZWwtcm9vbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhbmRpbmctcm9vbS9sYW5kaW5nLXJvb20udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2ZyaWRnZS9mcmlkZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL3BoYWdlLWRpYWxvZy50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS5zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMseUNBQStDO0FBQy9DLGdEQUEwRDtBQUUxRCxtREFBbUQ7QUFFbkQsc0RBQXlEO0FBRXpELG9EQUE2RDtBQUM3RCwwREFBd0U7QUFFeEUsc0RBQXlEO0FBQ3pE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O0lBQ0wsQ0FBQztJQVNELFlBQVksQ0FBQyxHQUFXO1FBQ3RCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUc7YUFDakYsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDNUIsU0FBUyxDQUFDLENBQUMsR0FBRztZQUViLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxDQUFDLEdBQUc7WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLDZCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBaFZZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxtQkFBTyxDQUFDLEdBQXdCLENBQUM7UUFDaEQsU0FBUyxFQUFFLENBQUMsbUJBQU8sQ0FBQyxHQUFvQixDQUFDLENBQUM7S0FDM0MsQ0FBQztxQ0ErQzZCLGVBQU07UUFDTix1QkFBYztRQUNFLDhDQUFxQjtRQUMzQixrQ0FBZTtRQUNuQix1QkFBUTtHQWxEaEMsZUFBZSxDQWdWM0I7QUFoVlksMENBQWU7Ozs7Ozs7O0FDNUI1QixpRzs7Ozs7OztBQ0FBLDJGOzs7Ozs7O0FDQUEsdUYiLCJmaWxlIjoiMC1jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBMb2NhdGlvblJvdXRlcyB9IGZyb20gJy4vbG9jYXRpb24ucm91dGVzJztcblxuaW1wb3J0IHsgRXhwZXJpbWVudFNlcnZpY2UgfSBmcm9tICcuL2V4cGVyaW1lbnQuc2VydmljZSc7XG5cbmltcG9ydCB7IEZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZyaWRnZS9mcmlkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBoYWdlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vZnJpZGdlL3BoYWdlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IExhbmRpbmdSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5kaW5nLXJvb20vbGFuZGluZy1yb29tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYWJSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9sYWItcm9vbS9sYWItcm9vbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxleGVyUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vcGxleGVyLXJvb20vcGxleGVyLXJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGVsUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vbW9kZWwtcm9vbS9tb2RlbC1yb29tLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKExvY2F0aW9uUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGcmlkZ2VDb21wb25lbnQsXG4gICAgUGhhZ2VEaWFsb2dDb21wb25lbnQsXG4gICAgTG9jYXRpb25Db21wb25lbnQsXG4gICAgTGFiUm9vbUNvbXBvbmVudCxcbiAgICBQbGV4ZXJSb29tQ29tcG9uZW50LFxuICAgIE1vZGVsUm9vbUNvbXBvbmVudCxcbiAgICBMYW5kaW5nUm9vbUNvbXBvbmVudFxuICBdLFxuICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgUGhhZ2VEaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRXhwZXJpbWVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbk1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi5tb2R1bGUudHMiLCIvKipcbiAqIFNjZW5hcmlvL2V4cGVyaWVtZW50LXJlbGF0ZWQgdmFsdWVzIHVzZWQgdG9cbiAqIDEuIFNlbmQgdGhlIGNvcnJlY3QgcGFyYW1ldGVycyB0byBiYWNrZW5kIGNhbGxzXG4gKiAyLiBNYXRjaCBzb21lIGJhY2tlbmQgcGFyYW1ldGVyc1xuICogMy4gSGF2ZSBjb25zaXN0ZW50IGRlZmF1bHRzXG4gKi9cbmV4cG9ydCBjb25zdCBTY2VuYXJpb0dsb2JhbHMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygc3RhcnRpbmcgcGhhZ2Ugd2hlbiB0YWtlbiBmcm9tIGZyaWRnZVxuICAgKi9cbiAgbnVtUGhhZ2U6MTAwMDAwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBsYWIgcm9vbSBwbGF0ZVxuICAgKi9cbiAgcGxhdGVDYXBhY2l0eTogMTUwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBlYWNoIHBsZXhlciByb29tIHBsYXRlXG4gICAqL1xuICBwbGV4ZXJDYXBhY2l0eTogMjAwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHNoZWx2ZXMgaW4gdGhlIGZyaWRnZVxuICAgKi9cbiAgbkZyaWRnZVNoZWxmOiAzMixcbiAgLyoqXG4gICAqIE51bWJlciBvZiBzcG90cyBvbiBlYWNoIHNoZWxmIG9mIHRoZSBmcmlkZ2VcbiAgICovXG4gIG5GcmlkZ2VTcG90czogMTYsXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRpbHV0aW9uIHZhbHVlIGZvciBsYWIgcm9vbTsgY2FuIGJlIGNoYW5nZWQgYnkgdXNlclxuICAgKi9cbiAgZGVmYXVsdExhYkRpbHV0aW9uOiAxMCxcbiAgLyoqXG4gICAqIERlZmF1bHQgZGlsdXRpb24gdmFsdWUgZm9yIHBsZXhlciByb29tOyBjYW4gYmUgY2hhbmdlZCBieSB1c2VyXG4gICAqL1xuICBkZWZhdWx0UGxleGVyRGlsdXRpb246IDUsXG4gIC8qKlxuICAgKiBMZW5ndGggb2YgdGhlIGdlbmUgaW4gbnVtYmVyIG9mIGJhc2VwYWlyc1xuICAgKi9cbiAgZ2VuZUxlbmd0aDogMzUwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIGJhc2VwYWlycyBwZXIgXCJibG9ja1wiIHdoZW4gZ3Vlc3NpbmcgZGVsZXRpb24gbG9jYXRpb25cbiAgICovXG4gIGRlbGV0aW9uR3Vlc3NMZW5ndGg6IDEwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5nbG9iYWxzLnRzIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFBsYXRlSW5wdXQsIFBsYXRlUmVzdWx0cywgUGxleGVySW5wdXQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgcGVyZm9ybXMgdGhlIHBsYXRlIGFuZCBwbGV4ZXIgZXhwZXJpbWVudHMgdXNlZFxuICogd2hlbiBjcm9zc2luZyBvciBtdXRhdGluZyBwaGFnZSBzdHJhaW5zLCBpLmUuIHBlcmZvcm1pbmcgYVxuICogdmlydHVhbCBleHBlcmltZW50XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeHBlcmltZW50U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfYmFzZVVSTCA9ICcvYXBpL2NyaWNrZXQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIC8qKlxuICAgKiBXaXRoIHZhbGlkIGlucHV0IGZvciB0aGUgcGxhdGUsIGNhbGxzIHRoZSBiYWNrZW5kIHRvIGdlbmVyYXRlXG4gICAqIGEgbmV3IHBsYXRlIHRoYXQgaXMgZGlzcGxheWVkIGluIHRoZSBsYWIgcm9vbVxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXRlSW5wdXR9IHBsYXRlIC0gaW5mb3JtYXRpb24gbmVlZGVkIHRvIGdlbmVyYXRlIHRoZSBuZXcgcGxhdGVcbiAgICogLSBJbmNsdWRlcyAxLTIgcGhhZ2Ugd2l0aCBudW1QaGFnZSBlYWNoLCBsYXduIHR5cGUsIGxvY2F0aW9uLCBzcGVjaWFscywgcGxhdGUgY2FwYWNpdHksIGFuZCBzY2VuYXJpbyBkYXRhXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFBsYXRlUmVzdWx0cz59XG4gICAqIC0gbmV3bHkgZ2VuZXJhdGUgcGxhdGUgd2l0aCBpbmZvIGFib3V0IHBhcmVudHMgYW5kIChpcyBwbGF0ZSBmdWxsIG9yIGxpc3Qgb2Ygc21hbGwgYW5kIGxhcmdlIHBsYXF1ZXMpXG4gICAqIC0gb3IgZXJyb3IgXCJudW1QaGFnZSBub3Qgc2V0XCIgaWYgbnVtYmVyIG9mIHBoYWdlIGlzbid0IHNldFxuICAgKiAtIG9yIGVycm9yIFwiRXJyb3IgZmluZGluZyB0aGUgc3BlY2lmaWVkIHBoYWdlIDEvMlwiIGlmIHBoYWdlIG5vdCBpbiBkYXRhYmFzZVxuICAgKiAtIG9yIGVycm9yIG1lc3NhZ2UgZm9yIG90aGVyIHNlcnZlciBlcnJvclxuICAgKi9cbiAgY3JlYXRlUGxhdGUocGxhdGU6IFBsYXRlSW5wdXQpOiBPYnNlcnZhYmxlPFBsYXRlUmVzdWx0cz57XG4gICAgdmFyIHJlcyA9IHRoaXMuX2h0dHBcbiAgICAucG9zdDxQbGF0ZVJlc3VsdHM+KGAke3RoaXMuX2Jhc2VVUkx9L3BsYXRlYCwgcGxhdGUpXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBXaXRoIHZhbGlkIGlucHV0LCBjYWxsIHRoZSBiYWNrZW5kIHRvIGdlbmVyYXRlIHZhbGlkIHJlc3VsdHMgZm9yIHRoZSBwbGV4ZXJcbiAgICpcbiAgICogQHBhcmFtIHtQbGV4ZXJJbnB1dH0gZGF0YSAtIGluZm9ybWF0aW9uIG5lZWRlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogcGxleGVyIHJlc3VsdHNcbiAgICogLSBJbnB1dHMgYSBsaXN0IG9mIHBoYWdlIElEcyBmb3IgdGhlIHJvd3MgYW5kIGNvbHVtbnMsIEUuIGNvbGlcbiAgICogbGF3biB0eXBlLCBsb2NhdGlvbiwgc3BlY2lhbHMsIGluZGl2aWR1YWwgcGxleGVyIHBsYXRlIGNhcGFjaXR5XG4gICAqIGFuZCBzY2VuYXJpbyBkYXRhXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqIC0gdGhlIHJlc3VsdHMgb2YgdGhlIHBsZXhlciBhcyBhIDJEIGFycmF5XG4gICAqIHdlcmUgZWFjaCBjZWxsIGluIHRoZSBhcnJheSByZXByZXNlbnRzIGEgcGxhdGUgYW5kIGhhc1xuICAgKiBpcyBwbGF0ZSBmdWxsIG9yIGNvdW50cyBvZiBzbWFsbC9sYXJnZSBwbGFxdWVzXG4gICAqIC0gb3IgZXJyb3IgaWYgc2VydmVyIGVycm9yXG4gICAqL1xuICBwZXJmb3JtUGxleGVyKGRhdGE6IFBsZXhlcklucHV0KTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIC8vIGRhdGEgd2lsbCBoYXZlIHJvd1BoYWdlLCBjb2xQaGFnZSwgbGF3biB0eXBlLCBsb2NhdGlvbiwgc3BlY2lhbHMsIGNhcGFjaXR5LCBzY2VuYXJpb0RhdGFcbiAgICB2YXIgcmVzID0gdGhpcy5faHR0cFxuICAgIC5wb3N0KGAke3RoaXMuX2Jhc2VVUkx9L3BsZXhlcmAsIGRhdGEpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vZXhwZXJpbWVudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhpcyBpcyBhIHZpZXcgY29tcG9uZW50IHdoaWNoIGhvc3RzIHRoZSBsb2NhdGlvblxuICogdGFiIHNlbGVjdGlvbiBuYXZpZ2F0b3JcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9jYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9sb2NhdGlvbi50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbG9jYXRpb24uc3R5bGUuY3NzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNjZW5hcmlvR2xvYmFscyB9IGZyb20gJy4uLy4uL3NjZW5hcmlvLmdsb2JhbHMnO1xuaW1wb3J0IHsgRXhwZXJpbWVudFNlcnZpY2UgfSBmcm9tICcuLi9leHBlcmltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2NlbmFyaW8uc2VydmljZSc7XG5cbmltcG9ydCB7IEV4cGVyaW1lbnRQaGFnZSwgR2Vub3R5cGVQaGFnZSwgUGxhdGVJbnB1dCwgUGxhdGVSZXN1bHRzLCBfZ2Vub3R5cGUsIFBoYWdlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcyc7XG5cbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogQ29tcG9uZW50IHdoZXJlIHBoYWdlIGFyZSBwbGF0ZWQgYW5kIG11dGF0ZWQvY3Jvc3NlZFxuICogU3R1ZGVudHMgd2lsbCBzcGVuZCB0aGUgbWFqb3JpdHkgb2YgdGhlaXIgdGltZSBpbiB0aGlzIGNvbXBvbmVudFxuICpcbiAqIEluY2x1ZGVzOiAyIEUuIGNvbGkgdGVzdCB0dWJlcywgNCBzZXJpYWwgZGlsdXRpb24gdHViZXMsIDEgcGxhdGVcbiAqIFVzZXMgZHJhZyBhbmQgZHJvcCBtZWNoYW5pc20gdG8gbW92ZSBwaGFnZS90dWJlcyBhcm91bmRcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsYWItcm9vbScsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbGFiLXJvb20udGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2xhYi1yb29tLnN0eWxlLmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBMYWJSb29tQ29tcG9uZW50IHtcblxuICBwcm90ZWN0ZWQgc2VsZWN0ZWRPYmplY3Q6IHN0cmluZyA9IG51bGw7XG5cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gIC8vIGJhY3RlcmlhIHR1YmVzXG4gIC8qKlxuICAgKiBBdCBpbml0LCBib3RoIHR1YnMgdmlzaWJsZVxuICAgKiBPbmNlIGEgYmFjdGVyaWEgdHlwZSBoYXMgYmVlbiBzZWxlY3RlZCwgbmVlZCB0byBoaWRlIHRoZSBvdGhlclxuICAgKi9cbiAgcHJpdmF0ZSBpc0hpZGRlbjogT2JqZWN0ID0geydLJzogZmFsc2UsICdCJzogZmFsc2V9O1xuICAvKipcbiAgICogcGhhZ2Ugc3RyYWlucyB3aGljaCBhcmUgaW4gdGhlIHR1YmVcbiAgICovXG4gIHByaXZhdGUgcGhhZ2U6IEV4cGVyaW1lbnRQaGFnZVtdID0gW107XG5cbiAgLy8gZGlsdXRpb24gdHViZXNcbiAgLyoqXG4gICAqIHZhbHVlIHRvIGRpbHV0ZSB0aGUgbnVtYmVyIG9mIHBoYWdlIGF0IGVhY2ggZGlsdXRpb25cbiAgICovXG4gIHByaXZhdGUgZGlsdXRpb25WYWx1ZTogbnVtYmVyID0gU2NlbmFyaW9HbG9iYWxzLmRlZmF1bHRMYWJEaWx1dGlvbjtcbiAgLyoqXG4gICAqIENvbnRlbnRzIG9mIHRoZSBkaWx1dGlvbiB0dWJlXG4gICAqIGluY2x1ZGVzOiBsYXduVHlwZSBhbmQgcGhhZ2VcbiAgICovXG4gIHByaXZhdGUgY29udGVudHM6IGFueVtdO1xuICAvKipcbiAgICogT25seSBzaG93IGRpbHV0aW9uIGxhYmVscyBhcyB3ZSBkbyB0aGUgc2VyaWFsIGRpbHV0aW9uXG4gICAqL1xuICBwcml2YXRlIHZpc2libGVMYWJlbDogYm9vbGVhbltdO1xuICAvKipcbiAgICogYm9vbGVhbiB0byBzdG9wIHVzZXJzIGZyb20gY2hhbmdpbmcgdGhlIGRpbHVhdGlvbiBmYWN0b3Igb25jZVxuICAgKiB0aGV5IHN0YXJ0IGRpbHV0aW5nXG4gICAqIGFsbG93aW5nIGNoYW5nZXMgd2hpbGUgZGlsdXRpbmcgY291bGQgbGVhZCB0byB1bmV4cGVjdGVkIG51bWJlcnNcbiAgICogb2YgcGhhZ2UgYW5kIHdvdWxkIG1ha2UgdHViZSBsYWJlbGluZyBkaWZmaWN1bHRcbiAgICovXG4gIHByaXZhdGUgY2FuRWRpdERpbHV0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICAvLyBwbGF0ZVxuICBwcml2YXRlIGlzRW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogRS4gY29saSB0eXBlIG9uIHRoZSBwbGF0ZSBjdXJyZW50bHlcbiAgICovXG4gIHByaXZhdGUgbGF3blR5cGU6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogc2NlbmFyaW8gZGV0YWlscyAoZnJvbSB0aGUgZnJpZGdlKSB3aGljaCBpcyBuZWVkZWQgd2hlbiBkb2luZyBjcm9zc1xuICAgKi9cbiAgcHJpdmF0ZSBzY2VuYXJpb0RldGFpbHM6IHN0cmluZztcbiAgLyoqXG4gICAqIGlzIHRoZSBwbGF0ZSBvdmVyIGNhcGFjaXR5P1xuICAgKi9cbiAgcHJpdmF0ZSBpc0Z1bGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgZ2Vub3R5cGUgaW5kZXggZm9yIHBoYWdlIHdpdGggc21hbGwgcGxhcXVlc1xuICAgKi9cbiAgcHJpdmF0ZSBzbWFsbFBsYXF1ZUxpc3Q6IGFueVtdO1xuICAvKipcbiAgICogbGlzdCBvZiBnZW5vdHlwZSBpbmRleCBmb3IgcGhhZ2Ugd2l0aCBsYXJnZSBwbGFxdWVzXG4gICAqL1xuICBwcml2YXRlIGxhcmdlUGxhcXVlTGlzdDogYW55W107XG4gIC8qKlxuICAgKiBnZW5vdHlwZXMgd2hpY2ggY29ycmVzcG9uZCB0byBjb250ZW50cyBvZiBzbWFsbFBsYXF1ZUxpc3QgYW5kIGxhcmdlUGxhcXVlTGlzdFxuICAgKi9cbiAgcHJpdmF0ZSBnZW5vdHlwZXM6IF9nZW5vdHlwZVtdO1xuICAvKipcbiAgICogSWQgYW5kIHN0cmFpbiBudW1iZXIgb2YgcGhhZ2UgdXNlZCB0byBjcmVhdGUgdGhpcyBwbGF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBwbGF0ZVBhcmVudHM6IFBoYWdlW107XG5cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHZhcmlhYmxlcyAtIGRpbHV0aW9uIHR1YmUgY29udGVudHMgYW5kIHZpc2libGUgbGFiZWxzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9leHBlcmltZW50U2VydmljZTogRXhwZXJpbWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2Upe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICB0aGlzLmNvbnRlbnRzID0gW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuICAgIHRoaXMudmlzaWJsZUxhYmVsID0gW3RydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRhbGl6ZSB0aGUgY29tcG9uZW50XG4gICAqIEdldCB0aGUgc2NlbmFyaW8gZGV0YWlscyAoc2NlbmFyaW8gZGV0YWlscyBhcmUgYWxyZWFkeSBzZXRcbiAgICogYnkgTG9jYXRpb25Db21wb25lbnQpXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0U2NlbmFyaW9EZXRhaWxzXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKGRldGFpbHMpID0+IHt0aGlzLnNjZW5hcmlvRGV0YWlscyA9IGRldGFpbHN9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSB0dWJlLXJlbGF0ZWQgdmFyaWFibGVzXG4gICAqIGJhY3RlcmlhIHR1YmUgLSBwaGFnZSBjb250ZW50cyBhbmQgd2hpY2ggaXMgaGlkZGVuXG4gICAqIGRpbHV0aW9uIHR1YmUgLSBjb250ZW50cywgbGFiZWxzLCBhbmQgY2FuIGVkaXQgZGlsdXRpb24gdmFsdWVcbiAgICogY2xlYXIgYW55IGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGNsZWFyVHViZXMoKXtcbiAgICB0aGlzLnBoYWdlID0gW107XG4gICAgdGhpcy5pc0hpZGRlbiA9IHsnSyc6IGZhbHNlLCAnQic6IGZhbHNlfTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIHRoaXMuY29udGVudHMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgdGhpcy52aXNpYmxlTGFiZWwgPSBbdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07XG4gICAgdGhpcy5jYW5FZGl0RGlsdXRpb24gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBwbGF0ZSB2YXJpYWJsZXNcbiAgICogcGxhdGUgaXMgZW1wdHksIG5vdCBmdWxsXG4gICAqIG5vIHNtYWxsIHBscWF1ZXMsIGxhcmdlIHBsYXF1ZXMsIG9yIGdlbm90eXBlc1xuICAgKiBjbGVhciBhbnkgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgY2xlYXJQbGF0ZSgpIHtcbiAgICAvLyByZXNldCBhbGwgdmFyaWFibGVzXG4gICAgdGhpcy5pc0Z1bGwgPSBmYWxzZTtcbiAgICB0aGlzLmlzRW1wdHkgPSB0cnVlO1xuICAgIHRoaXMuZ2Vub3R5cGVzID0gW107XG4gICAgdGhpcy5zbWFsbFBsYXF1ZUxpc3QgPSBbXTtcbiAgICB0aGlzLmxhcmdlUGxhcXVlTGlzdCA9IFtdO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgdGhpcy5sYXduVHlwZSA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGFsbCB2YXJpYWJsZXNcbiAgICovXG4gIGNsZWFyQWxsKCl7XG4gICAgdGhpcy5jbGVhclR1YmVzKCk7XG4gICAgdGhpcy5jbGVhclBsYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGJhY3RlcmlhIHR1YmUgY2FuIGJlIGRyYWdnZWRcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2RyYWdFbmFibGVkXWAgb2YgYmFjdCB0dWJlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdHViZSBoYXMgcGhhZ2VcbiAgICovXG4gIGNhbkRyYWdCYWN0KCk6IGJvb2xlYW57XG4gICAgcmV0dXJuIHRoaXMucGhhZ2UubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIHRvIGJlIGRyYWdnZWQgZnJvbSB0aGUgYmFjdGVyaWEgdHViZVxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbZHJhZ0RhdGFdYCBvZiBiYWN0IHR1YmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBFLiBjb2xpIHNvdXJjZSwgYFwiQlwiYCBvciBgXCJLXCJgXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGRhdGEgd2l0aCBsYXduIHR5cGUsIHNyYywgYW5kIHBoYWdlIGxpc3RcbiAgICovXG4gIGdldERhdGFCYWN0KHNyYzogc3RyaW5nKTogT2JqZWN0e1xuICAgIHJldHVybiB7XG4gICAgICBsYXduVHlwZTogc3JjLFxuICAgICAgc3JjOiBzcmMsXG4gICAgICBwaGFnZTogdGhpcy5waGFnZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGNsYXNzZXMgZm9yIGEgYmFjdGVyaWEgdHViZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIEUuIGNvbGkgc291cmNlLCBgXCJCXCJgIG9yIGBcIktcImBcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gYXBwbGljYWJsZSBjbGFzc2VzIGluIHRoZSBmb3JtXG4gICAqIGB7J2NsYXNzJzogYm9vbGVhbiwgLi4ufWBcbiAgICovXG4gICAgZ2V0Q2xhc3Nlc0JhY3Qoc3JjOiBzdHJpbmcpOiBPYmplY3Qge1xuICAgIHJldHVybiB7J2JhY3QtdHViZSB0ZXN0LXR1YmUtb3V0ZXInOiB0cnVlLFxuICAgICAgICAgICAgJ2ludmlzaWJsZSc6IChzcmMgPT09ICdCJyA/IHRoaXMuaXNIaWRkZW5bXCJCXCJdIDogdGhpcy5pc0hpZGRlbltcIktcIl0pLFxuICAgICAgICAgICAgJ3R1YmUtYic6IChzcmM9PT0nQicpLFxuICAgICAgICAgICAgJ3R1YmUtayc6IChzcmM9PT0nSycpLFxuICAgICAgICAgICAgJ24tcGhhZ2UtMSc6IHRoaXMucGhhZ2UubGVuZ3RoID09PSAxLFxuICAgICAgICAgICAgJ24tcGhhZ2UtMic6IHRoaXMucGhhZ2UubGVuZ3RoID09PSAyXG4gICAgICAgICAgIH1cbiAgICB9XG5cbiAgLyoqXG4gICAqIERyb3AgcGhhZ2UgZnJvbSBmcmlkZ2UgaW50byBiYWN0ZXJpYSB0dWJlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKG9uRHJvcFN1Y2Nlc3MpYCBvZiBiYWN0ZXJpYSB0dWJlc1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gJGV2ZW50IGRyYWcgZXZlbnQgd2l0aCBwaGFnZSBkYXRhXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgYmFjdGVyaWEgc291cmNlIHBoYWdlIGRyYWdnZWQgdG9cbiAgICovXG4gIGRyb3BQaGFnZUJhY3QoJGV2ZW50OiBhbnksIHNyYzogc3RyaW5nKXtcbiAgICB2YXIgaW5jb21pbmdQaGFnZSA9ICRldmVudC5kYXRhO1xuICAgIGlmKGluY29taW5nUGhhZ2UuaGFzT3duUHJvcGVydHkoJ2lkJykgPT0gZmFsc2Upe1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnT25seSBhZGQgcGhhZ2UgZnJvbSB0aGUgZnJpZGdlJztcbiAgICB9IGVsc2UgaWYodGhpcy5waGFnZS5sZW5ndGggPj0gMikge1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnQ2Fubm90IGhhdmUgbW9yZSB0aGFuIDIgcGhhZ2UgaW4gYSB0dWJlJztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWRkIHBoYWdlIC0gdHlwZSBFeHBlcmltZW50UGhhZ2VcbiAgICAgIHRoaXMucGhhZ2UucHVzaCh7XG4gICAgICAgIGlkOiBpbmNvbWluZ1BoYWdlLmlkLFxuICAgICAgICBzdHJhaW5OdW06IGluY29taW5nUGhhZ2Uuc3RyYWluTnVtLFxuICAgICAgbnVtUGhhZ2U6IFNjZW5hcmlvR2xvYmFscy5udW1QaGFnZVxuICAgICAgfSk7XG4gICAgICBzd2l0Y2goc3JjKXtcbiAgICAgICAgY2FzZSAnQic6XG4gICAgICAgICAgdGhpcy5pc0hpZGRlblsnSyddID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSyc6XG4gICAgICAgICAgdGhpcy5pc0hpZGRlblsnQiddID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH19XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGRpbHV0aW9uIHR1YmUgY2FuIGJlIGRyYWdnZWRcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2RyYWdFbmFibGVkXWAgb2YgZGlsdXRpb24gdHViZSAoMC0zKVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIGRpbHV0aW9uIHR1YmUgbnVtYmVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdHViZSBoYXMgY29udGVudHNcbiAgICovXG4gIGNhbkRyYWdEaWwoc3JjOiBudW1iZXIpOiBib29sZWFue1xuICAgIHJldHVybiAodGhpcy5jb250ZW50c1tzcmNdICE9PSBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGNsYXNzZXMgZm9yIGEgZGlsdXRpb24gdHViZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIGRpbHV0aW9uIHR1YmUgbnVtYmVyICgwLTMpXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGFwcGxpY2FibGUgY2xhc3NlcyBpbiB0aGUgZm9ybVxuICAgKiBgeydjbGFzcyc6IGJvb2xlYW4sIC4uLn1gXG4gICAqL1xuICBnZXRDbGFzc2VzRGlsKHNyYzogbnVtYmVyKTogT2JqZWN0IHtcbiAgICBsZXQgdHViZSA9IHRoaXMuY29udGVudHNbc3JjXTtcbiAgICByZXR1cm4geydkaWwtdHViZSB0ZXN0LXR1YmUtb3V0ZXInOiB0cnVlLFxuICAgICAgICAgICAgJ3R1YmUtYic6ICh0dWJlICE9PSBudWxsICYmIHR1YmUubGF3blR5cGU9PT0nQicpLFxuICAgICAgICAgICAgJ3R1YmUtayc6ICh0dWJlICE9PSBudWxsICYmIHR1YmUubGF3blR5cGU9PT0nSycpXG4gICAgICAgICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGNsYXNzZXMgZm9yIGEgZGlsdXRpb24gdHViZSBsYWJlbFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIGRpbHV0aW9uIHR1YmUgbnVtYmVyICgwLTMpXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGFwcGxpY2FibGUgY2xhc3Nlc1xuICAgKi9cbiAgZ2V0Q2xhc3Nlc0RpbExhYmVsKHNyYzogbnVtYmVyKTogT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2RpbC12YWx1ZSc6IHRydWUsXG4gICAgICAnaW52aXNpYmxlJzogIXRoaXMudmlzaWJsZUxhYmVsW3NyY11cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBvYmplY3QgY2FuIGJlIGRyb3BwZWQgaW4gZGlsdXRpb24gdHViZVxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbYWxsb3dEcm9wXWAgb2YgZGlsdXRpb24gdHViZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVzdCBkaWx1dGlvbiB0dWJlIG51bWJlciAoMC0zKVxuICAgKlxuICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259IGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYHRydWVgIG9yIGBmYWxzZWAgaWYgb2JqZWN0IGNhbiBiZSBkcm9wcGVkXG4gICAqL1xuICBjYW5Ecm9wRGlsKGRlc3Q6IG51bWJlcik6IGFueSB7XG4gIHJldHVybiAoZHJhZ0RhdGE6IGFueSkgPT4ge1xuICAgIGlmKGRyYWdEYXRhID09PSBudWxsIHx8IGRyYWdEYXRhID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYoZHJhZ0RhdGEuaGFzT3duUHJvcGVydHkoJ3NyYycpID09PSBmYWxzZSl7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgbGV0IHNyYyA9IGRyYWdEYXRhLnNyYztcbiAgICBpZihkZXN0ID09PSAwICYmIChzcmMgPT09ICdCJyB8fCBzcmMgPT09ICdLJykpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChkZXN0ID4gMCAmJiBzcmMgPT09IGRlc3QtMSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xufVxuICAvKipcbiAgICogRGF0YSB0byBiZSBkcmFnZ2VkIGZyb20gdGhlIGRpbHV0aW9uIHR1YmVcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2RyYWdEYXRhXWAgb2YgZGlsdXRpb24gdHViZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIGRpbHV0aW9uIHR1YmUgbnVtYmVyICgwLTMpXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGRhdGEgd2l0aCBkaWx1dGlvbiB0dWJlIGNvbnRlbnRzIGFuZCBzcmNcbiAgICovXG4gIGdldERhdGFEaWwoc3JjOiBudW1iZXIpOiBPYmplY3Qge1xuICAgIGlmKHRoaXMuY29udGVudHNbc3JjXSAhPT0gbnVsbClcbiAgICAgIHRoaXMuY29udGVudHNbc3JjXVsnc3JjJ10gPSBzcmM7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudHNbc3JjXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcm9wIGNvbnRlbnRzIGZyb20gYmFjdCB0dWJlL2RpbHV0aW9uIHR1YmUgaW50byBkaWx1dGlvbiB0dWJlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKG9Ecm9wU3VjY2VzcylgIG9mIGRpbHV0aW9uIHR1YmVzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgZHJhZyBldmVudCB3aXRoIGNvbnRlbnQvcGhhZ2UgZGF0YVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzdCBkZXN0IHR1YmUgbnVtYmVyICgwLTMpXG4gICAqL1xuICBkcm9wQ29udGVudHNEaWwoJGV2ZW50OiBhbnksIGRlc3Q6IG51bWJlcil7XG4gICAgbGV0IGluY29taW5nRGF0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkZXZlbnQuZGF0YSkpO1xuICAgIGlmKGluY29taW5nRGF0Lmhhc093blByb3BlcnR5KCdsYXduVHlwZScpICYmIGluY29taW5nRGF0Lmhhc093blByb3BlcnR5KCdwaGFnZScpKXtcbiAgICAgIC8vIGRpbHV0ZVxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGluY29taW5nRGF0LnBoYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaW5jb21pbmdEYXQucGhhZ2VbaV0ubnVtUGhhZ2UgLz0gdGhpcy5kaWx1dGlvblZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcy5jb250ZW50c1tkZXN0XSA9IGluY29taW5nRGF0O1xuICAgICAgaWYoZGVzdCA8IDMpe1xuICAgICAgICB0aGlzLnZpc2libGVMYWJlbFtkZXN0KzFdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGRpc2FibGUgZGlsdXRpb24gdmFsdWUgY2hhbmdlc1xuICAgICAgdGhpcy5jYW5FZGl0RGlsdXRpb24gPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGNsYXNzZXMgZm9yIHBsYXRlIGRlcGVuZGluZyBpZiBlbXB0eSwgZnVsbCwgaGFzIHBoYWdlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGFwcGxpY2FibGUgY2xhc3NlcyBpbiB0aGUgZm9ybVxuICAgKiBgeydjbGFzcyc6IGJvb2xlYW4sIC4uLn1gXG4gICAqL1xuICBnZXRDbGFzc2VzUGxhdGUoKXtcbiAgICByZXR1cm4ge1xuICAgICAgJ2NvbC0xMiBjb2wtbWQtNSByb3VuZGVkLWNpcmNsZSBib3JkZXIgYm9yZGVyLWRhcmsnOiB0cnVlLFxuICAgICAgJ2JnLXNlY29uZGFyeSB0ZXh0LWxpZ2h0JzogdGhpcy5pc0Z1bGwsXG4gICAgICAnYmctbGlnaHQgdGV4dC1wcmltYXJ5JzogKCF0aGlzLmlzRnVsbCAmJiAhdGhpcy5pc0VtcHR5KSxcbiAgICAgICd0ZXh0LWRhbmdlcic6ICh0aGlzLmxhd25UeXBlID09PSAnSycpLFxuICAgICAgJ3RleHQtaW5mbyc6ICh0aGlzLmxhd25UeXBlID09PSAnQicpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgb2JqZWN0IGNhbiBiZSBkcm9wcGVkIG9uIHBsYXRlXG4gICAqXG4gICAqIENhbGxlZCBmb3IgYFthbGxvd0Ryb3BdYCBvZiBwbGF0ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259IGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYHRydWVgIG9yIGBmYWxzZWAgaWYgb2JqZWN0IGNhbiBiZSBkcm9wcGVkXG4gICAqL1xuICBjYW5Ecm9wUGxhdGUoKTphbnkge1xuICAgIHJldHVybiAoZHJhZ0RhdGE6IGFueSkgPT4ge1xuICAgICAgbGV0IGludmFsaWRTcmMgPSBbJ0InLCAnSycsICdzbWFsbCcsICdsYXJnZSddXG4gICAgaWYoZHJhZ0RhdGEgPT09IG51bGwgfHwgZHJhZ0RhdGEgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZihkcmFnRGF0YS5oYXNPd25Qcm9wZXJ0eSgnc3JjJykgJiYgaW52YWxpZFNyYy5pbmRleE9mKGRyYWdEYXRhLnNyYykgPT09IC0xKXtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERyb3AgdHViZSBjb250ZW50cyBvbiB0aGUgcGxhdGVcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAob25Ecm9wU3VjY2VzcylgIG9mIHBsYXRlXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgZHJhZyBldmVudCB3aXRoIGNvbnRlbnRzXG4gICAqL1xuICBkcm9wT25QbGF0ZSgkZXZlbnQ6IGFueSl7XG4gICAgbGV0IGNvbnRlbnRzID0gJGV2ZW50LmRhdGE7XG4gICAgLy8gY2hlY2sgd2UgaGF2ZSBldmVyeXRoaW5nIHdlIG5lZWRcbiAgICBpZiAoY29udGVudHMuaGFzT3duUHJvcGVydHkoJ2xhd25UeXBlJykgPT09IGZhbHNlKXtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ1RoZXJlIGlzIG5vIGJhY3RlcmlhIGluIHRoZSB0dWJlIGZvciBwaGFnZSB0byBncm93IG9uLidcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnRzLmhhc093blByb3BlcnR5KCdwaGFnZScpID09PSBmYWxzZSB8fCBjb250ZW50cy5waGFnZS5sZW5ndGggPT09IDApe1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnVGhlcmUgaXMgbm8gcGhhZ2UgaW4gdGhlIHR1YmUuJ1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZihjb250ZW50cy5zcmMgPT09ICdCJyB8fCBjb250ZW50cy5zcmMgPT09ICdLJyl7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdEbyBub3QgcGxhdGUgZGlyZWN0bHkgZnJvbSBiYWN0ZXJpYSB0dWJlJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZ2F0aGVyIGRhdGFcbiAgICB0aGlzLmxhd25UeXBlID0gY29udGVudHMubGF3blR5cGU7XG4gICAgbGV0IHBoYWdlMSA9IGNvbnRlbnRzLnBoYWdlWzBdO1xuICAgIGxldCBwaGFnZTIgPSBudWxsO1xuICAgIGlmKGNvbnRlbnRzLnBoYWdlLmxlbmd0aCA9PT0gMil7XG4gICAgICBwaGFnZTIgPSBjb250ZW50cy5waGFnZVsxXTtcbiAgICB9XG4gICAgLy8gcGVyZm9ybSB0aGUgY3Jvc3NcbiAgICB0aGlzLl9wZXJmb3JtQ3Jvc3ModGhpcy5sYXduVHlwZSwgcGhhZ2UxLCBwaGFnZTIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBleHBlcmltZW50IHNlcnZpY2UgdG8gcGVyZm9ybSB0aGUgY3Jvc3MgYW5kIHNhdmVzXG4gICAqIHZhcmlhYmxlc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGF3blR5cGUgYmFjdGVyaWEgdXNlZCwgYFwiQlwiYCBvciBgXCJLXCJgXG4gICAqIEBwYXJhbSB7YW55fSBwaGFnZTEgZmlyc3QgcGhhZ2UgaW4gY3Jvc3NcbiAgICogQHBhcmFtIHthbnl9IHBoYWdlMiBzZWNvbmQgcGhhZ2UgaW4gY3Jvc3MsIG9yIG51bGxcbiAgICovXG4gIF9wZXJmb3JtQ3Jvc3MobGF3blR5cGU6IHN0cmluZywgcGhhZ2UxOiBFeHBlcmltZW50UGhhZ2UsIHBoYWdlMjogRXhwZXJpbWVudFBoYWdlKXtcbiAgICBsZXQgbmV3UGxhdGU6IFBsYXRlSW5wdXQgPSB7XG4gICAgICBsYXduVHlwZTogbGF3blR5cGUsXG4gICAgICBwaGFnZTE6IHBoYWdlMSxcbiAgICAgIHBoYWdlMjogcGhhZ2UyLFxuICAgICAgc3BlY2lhbHM6IHt9LFxuICAgICAgbG9jYXRpb246ICdsYWInLFxuICAgICAgc2NlbmFyaW9EYXRhOiB0aGlzLnNjZW5hcmlvRGV0YWlscyxcbiAgICAgIGNhcGFjaXR5OiBTY2VuYXJpb0dsb2JhbHMucGxhdGVDYXBhY2l0eVxuICAgIH1cbiAgICB0aGlzLl9leHBlcmltZW50U2VydmljZS5jcmVhdGVQbGF0ZShuZXdQbGF0ZSlcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9Pntcbi8vICAgICAgY29uc29sZS5sb2coJ2dlbm90eXBlczonLCByZXMuZ2Vub3R5cGVzKTtcbi8vICAgICAgY29uc29sZS5sb2coJ3NtYWxsIHBsYXF1ZTonLCByZXMuc21hbGxQbGFxdWUpO1xuLy8gICAgICBjb25zb2xlLmxvZygnbGFyZ2UgcGxhcXVlOicsIHJlcy5sYXJnZVBsYXF1ZSk7XG4gICAgICB0aGlzLmlzRnVsbCA9IHJlcy5mdWxsO1xuICAgICAgdGhpcy5zbWFsbFBsYXF1ZUxpc3QgPSByZXMuc21hbGxQbGFxdWU7XG4gICAgICB0aGlzLmxhcmdlUGxhcXVlTGlzdCA9IHJlcy5sYXJnZVBsYXF1ZTtcbiAgICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5nZW5vdHlwZXMgPSByZXMuZ2Vub3R5cGVzO1xuICAgICAgdGhpcy5wbGF0ZVBhcmVudHMgPSByZXMucGFyZW50cztcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgLy8gZXJyb3JcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBwbGFxdWUgZnJvbSBwbGF0ZSBjYW4gYmUgZHJhZ2dlZFxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbZHJhZ0VuYWJsZWRdYCBvZiBwbGFxdWVzIG9uIHBsYXRlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgYFwic21hbGxcImAgb3IgYFwibGFyZ2VcImAgcGxhcXVlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlcmUgYXJlIHN0aWxsIHBsYXF1ZXMgb2YgdGhhdCBzaXplXG4gICAqL1xuICBjYW5EcmFnUGxhdGUoc3JjOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZihzcmMgPT09ICdzbWFsbCcpXG4gICAgICByZXR1cm4gdGhpcy5zbWFsbFBsYXF1ZUxpc3QubGVuZ3RoID4gMDtcbiAgICBlbHNlIC8vIGJpZ1xuICAgICAgcmV0dXJuIHRoaXMubGFyZ2VQbGFxdWVMaXN0Lmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogUGljayBhIHBsYXF1ZSBmcm9tIHRoZSBwbGF0ZSB0byBzYXZlIHRvIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2RyYWdEYXRhXWAgb2YgcGxhcXVlIG9uIHBsYXRlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgYFwic21hbGxcImAgb3IgYFwibGFyZ2VcImAgcGxhcXVlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHBoYWdlIGdlbm90eXBlIGRhdGFcbiAgICovXG4gIGdldFBoYWdlUGxhdGUoc3JjOiBzdHJpbmcpOiBHZW5vdHlwZVBoYWdle1xuICAgIGxldCB0bXBMaXN0ID0gKHNyYyA9PT0gJ3NtYWxsJyA/IHRoaXMuc21hbGxQbGFxdWVMaXN0IDogdGhpcy5sYXJnZVBsYXF1ZUxpc3QpO1xuICAgIGlmKHRtcExpc3QubGVuZ3RoID09PSAwKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgcGxhcXVlID0gdG1wTGlzdFswXTtcbiAgICBsZXQgZ2Vub3R5cGVJbmRleCA9IHBsYXF1ZTtcbiAgICBsZXQgcGhhZ2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZ2Vub3R5cGVzW2dlbm90eXBlSW5kZXhdKSk7XG4gICAgcGhhZ2VbJ3NyYyddID0gc3JjO1xuICAgIHBoYWdlWydwYXJlbnRzJ10gPSB0aGlzLnBsYXRlUGFyZW50cztcbiAgICByZXR1cm4gcGhhZ2U7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBzdWNjZXNzZnVsbHkgZHJhZ2dlZCBwaGFnZSBmcm9tIGF2YWlsYWJsZSBwaGFnZSBsaXN0XG4gICAqXG4gICAqIENhbGxlZCBvbiBgKG9uRHJhZ1N1Y2Nlc3MpYCBvZiBwbGFxdWUgb24gcGxhdGVcbiAgICpcbiAgICogQHBhcmFtIHthbnl9ICRldmVudCBkcmFnIGV2ZW50IHdpdGggcGhhZ2Ugc2F2ZWRcbiAgICovXG4gIGFkZGVkVG9GcmlkZ2UoJGV2ZW50KSB7XG4gICAgbGV0IHN0cmFpbiA9ICRldmVudC5kYXRhO1xuICAgIGxldCBzcmMgPSBzdHJhaW4uc3JjO1xuICAgIGlmKHNyYyA9PT0gJ3NtYWxsJyl7XG4gICAgICB0aGlzLnNtYWxsUGxhcXVlTGlzdC5zaGlmdCgpO1xuICAgIH0gZWxzZSB7IC8vIGxhcmdlXG4gICAgICB0aGlzLmxhcmdlUGxhcXVlTGlzdC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgcGhhZ2UgZnJvbSB0aGUgcGxhdGUgd2l0aG91dCBhZGRpbmcgaXQgdG8gdGhlIGZyaWRnZVxuICAgKlxuICAgKiBDYWxsZWQgb24gYChkYmxjbGljaylgIG9mIHBsYXF1ZSBvbiB0aGUgcGxhdGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBzb3VyY2Ugb2YgcGxhcXVlIGNsaWNrZWQ7IGBcImxhcmdlXCJgIG9yIGBcInNtYWxsXCJgXG4gICAqL1xuICBkZWxQaGFnZVBsYXRlKHNyYzogc3RyaW5nKXtcbiAgICBpZihzcmMgPT09ICdzbWFsbCcpe1xuICAgICAgdGhpcy5zbWFsbFBsYXF1ZUxpc3Quc2hpZnQoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMubGFyZ2VQbGFxdWVMaXN0LnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhYi1yb29tL2xhYi1yb29tLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFNjZW5hcmlvR2xvYmFscyB9IGZyb20gJy4uLy4uL3NjZW5hcmlvLmdsb2JhbHMnO1xuaW1wb3J0IHsgRXhwZXJpbWVudFNlcnZpY2UgfSBmcm9tICcuLi9leHBlcmltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2NlbmFyaW8uc2VydmljZSdcbmltcG9ydCB7IEZyaWRnZVBoYWdlLCBFeHBlcmltZW50UGhhZ2UsIFBsZXhlcklucHV0IH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdGhlIG11bHRpcGxleGVyIHJvb20gd2hpY2ggYWxsb3dzIGZvclxuICogTnhNIHBoYWdlIGNyb3NzZXMgYXQgb25jZVxuICpcbiAqIE9mZnNwcmluZyBwaGFnZSBjYW5ub3QgYmUgc2F2ZWQgdG8gdGhlIGZyaWRnZSwgYnV0IHRoZSB1c2VyXG4gKiBnZXRzIGEgY291bnQgb2Ygc21hbGwgYW5kIGxhcmdlIHBsYXF1ZSBmb3IgZWFjaCBjcm9zc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BsZXhlci1yb29tJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9wbGV4ZXItcm9vbS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vcGxleGVyLXJvb20uc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIFBsZXhlclJvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIEUuIGNvbGkgc3RyYWluIGNob3NlbiB0byBwbGF0ZSBvblxuICAgKi9cbiAgcHJpdmF0ZSBjaG9zZW5CYWN0OiBzdHJpbmcgPSAnbm9uZSc7XG4gIC8qKlxuICAgKiBWYWx1ZSB0byBkaWx1dGUgbnVtYmVyIG9mIHBoYWdlIGJ5XG4gICAqL1xuICBwcml2YXRlIGRpbHV0aW9uVmFsdWU6IG51bWJlciA9IFNjZW5hcmlvR2xvYmFscy5kZWZhdWx0UGxleGVyRGlsdXRpb247XG4gIC8qKlxuICAgKiBMb2NhdGlvbiBjYWxsIHVzZWQgYnkgYmFja2VuZFxuICAgKi9cbiAgcHJpdmF0ZSBwbGV4ZXJUeXBlOiBzdHJpbmcgPSAncGxleGVyJztcbiAgLyoqXG4gICAqIFNjZW5hcmlvIGRldGFpbHMgKGZyb20gZnJpZGdlKSBuZWVkZWQgdG8gcGVyZm9ybSB0aGUgcGxleGVyXG4gICAqL1xuICBwcml2YXRlIHNjZW5hcmlvRGV0YWlsczogc3RyaW5nO1xuICAvKipcbiAgICogSW5mbyBmb3IgcGhhZ2UgYWxvbmcgdGhlIHJvd3NcbiAgICovXG4gIHByaXZhdGUgcm93czogRXhwZXJpbWVudFBoYWdlW107XG4gIC8qKlxuICAgKiBJbmZvIGZvciBwaGFnZSBhbG9uZyB0aGUgY29sdW1uc1xuICAgKi9cbiAgcHJpdmF0ZSBjb2xzOiBFeHBlcmltZW50UGhhZ2VbXTtcbiAgLyoqXG4gICAqIEN1cnJlbnQgbnVtYmVyIG9mIHN0cmFpbnMgaW4gdGhlIHJvd3MgYW5kIGNvbHVtbnMsIHJlc3BlY3RpdmVseVxuICAgKi9cbiAgcHJpdmF0ZSBuU3RyYWluczogbnVtYmVyW10gPSBbMCwwXTtcbiAgLyoqXG4gICAqIFRoZSBwbGV4ZXIgcmVzdWx0cztcbiAgICogSXMgT2JqZWN0IGZvcm0gb2YgYSAyLUQgYXJyYXkgd2hlcmUgZWFjaCBjZWxsIGhhcyB7c21hbGxQbGFxdWU6ICMsIGxhcmdlUGxhcXVlOiAjfVxuICAgKi9cbiAgcHJpdmF0ZSByZXN1bHRzOiBPYmplY3Q7XG4gIC8qKlxuICAgKiBQb3NzaWJsZSBiYWNrZW5kIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIFNjZW5hcmlvIHNlcnZpY2Ugc3Vic2NyaXB0aW9uIGZvciBzY2VuYXJpbyBkZXRhaWxzXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogRXhwZXJpbWVudCBzZXJ2aWNlIHN1YnNjcmlwdGlvbiB0byBwcmVmb3JtIHBsZXhlclxuICAgKi9cbiAgcHJpdmF0ZSBleHBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgLyoqXG4gICAqIENvbnRyb2wgdGhlIGRpbHV0aW9uIGZhY3RvciB0byBhIG1pbi9tYXggdmFsdWVcbiAgICovXG4gIHByaXZhdGUgZGlsdXRpb25Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgLyoqXG4gICAqIC0gQ1NTIGNsYXNzZXMgZm9yIHRoZSBzdWJtaXQgc3Bpbm5lclxuICAgKiAtIFZpc2libGUgYWZ0ZXIgc3VibWl0IGJ1dHRvbiBoaXQgYW5kIGJlZm9yZSByZXN1bHRzIHJlY2VpdmVkXG4gICAqL1xuICBwcml2YXRlIF9zcGlubmVyQ2xhc3M6IE9iamVjdCA9IHtcbiAgICAnaGlkaW5nJzogdHJ1ZSxcbiAgICAnc3Bpbm5pbmcnOiBmYWxzZSxcbiAgICAnb2kgb2ktbG9vcC1jaXJjdWxhcic6IHRydWVcbiAgfTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBkYXRhIGFuZCBzZXQgZGlsdXRpb24gY29udHJvbFxuICAgKlxuICAgKiBAcGFyYW0ge0V4cGVyaW1lbnRTZXJ2aWNlfSBfZXhwZXJpbWVudFNlcnZpY2UgdXNlZCB0byBnZW5lcmF0ZSB0aGUgcmVzdWx0cyBvZiB0aGUgcGxleGVyXG4gICAqIEBwYXJhbSB7U2NlbmFyaW9TZXJ2aWNlfSBfc2NlbmFyaW9TZXJ2aWNlIHVzZWQgdG8gZ2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzIG5lZWRlZCB0byBwZXJmb3JtIHBsZXhlclxuICAgKi9cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgX2V4cGVyaW1lbnRTZXJ2aWNlOiBFeHBlcmltZW50U2VydmljZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKXtcbiAgICB0aGlzLmRpbHV0aW9uQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5taW4oMC4xKSwgVmFsaWRhdG9ycy5tYXgoMTAwKV0pO1xuICAgIHRoaXMuX2NsZWFyRGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudCBhbmQgZ2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX3NjZW5hcmlvU2VydmljZS5nZXRTY2VuYXJpb0RldGFpbHNcbiAgICAgIC5zdWJzY3JpYmUoKGRldGFpbHMpID0+IHRoaXMuc2NlbmFyaW9EZXRhaWxzID0gZGV0YWlscyk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdG9yeSB0aGUgY29tcG9uZW50IGFuZCB1bnN1YnNjcmliZSBhcyBuZWVkZWRcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIGlmKHRoaXMuZXhwU3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuZXhwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGFsaXplL2NsZWFyIHJvdyBhbmQgY29sdW1uIHBoYWdlXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NsZWFyRGF0YSgpe1xuICAgIHRoaXMucm93cyA9IFtdO1xuICAgIHRoaXMuY29scyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA4OyBpKyspe1xuICAgICAgdGhpcy5yb3dzLnB1c2gobnVsbCk7XG4gICAgICB0aGlzLmNvbHMucHVzaChudWxsKTtcbiAgICB9XG4gICAgdGhpcy5uU3RyYWlucyA9IFswLDBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBwbGV4ZXIgYW5kIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiByZXNldCBidXR0b25cbiAgICovXG4gIHJlc2V0KCl7XG4gICAgdGhpcy5jaG9zZW5CYWN0ID0gJ25vbmUnO1xuICAgIHRoaXMuZGlsdXRpb25WYWx1ZSA9IFNjZW5hcmlvR2xvYmFscy5kZWZhdWx0UGxleGVyRGlsdXRpb247XG4gICAgdGhpcy5wbGV4ZXJUeXBlID0gJ3BsZXhlcic7XG4gICAgdGhpcy5fY2xlYXJEYXRhKCk7XG4gICAgdGhpcy5yZXN1bHRzID0ge307XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICB0aGlzLl9zZXRTcGlubmVyQ2xhc3MoJ3Jlc2V0Jyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBDU1MgY2xhc3NlcyBmb3IgZWFjaCBwaGFnZSBidXR0b24gYmFzZWQgb24gd2hpY2hcbiAgICogcGhhZ2UgdHlwZSBpcyBzZXRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBidXR0b24gdG8gZ2V0IGNsYXNzZXMgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGNsYXNzZXMgd2hpY2ggYXBwbHkgdG8gdGhpcyBidXR0b24gaW4gdGhlXG4gICAqIGZvcm0gYHsnY2xhc3MnOmJvb2xlYW4sICdjbGFzczInOiBib29sZWFufWBcbiAgICovXG4gIGdldFR1YmVDbGFzc2VzKHNyYzogc3RyaW5nKTogT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2J0biBib3JkZXIgYm9yZGVyLXNlY29uZGFyeSc6IHRydWUsXG4gICAgICAnY2hvc2VuJzogKHRoaXMuY2hvc2VuQmFjdCA9PT0gc3JjKSxcbiAgICAgICdidG4tb3V0bGluZS1pbmZvJzogKHNyYz09PSdCJyAmJiB0aGlzLmNob3NlbkJhY3QgIT09IHNyYyksXG4gICAgICAnYnRuLWluZm8nOiAoc3JjPT09J0InICYmIHRoaXMuY2hvc2VuQmFjdCA9PT0gc3JjKSxcbiAgICAgICdidG4tb3V0bGluZS1kYW5nZXInOiAoc3JjPT09J0snICYmIHRoaXMuY2hvc2VuQmFjdCAhPT0gc3JjKSxcbiAgICAgICdidG4tZGFuZ2VyJzogKHNyYz09PSdLJyAmJiB0aGlzLmNob3NlbkJhY3QgPT09IHNyYylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHVzZXIgaXMgYWJsZSB0byBzdWJtaXQgcGxleGVyIGJ5IGRpc2FibGluZ1xuICAgKiB0aGUgc3VibWl0IGJ1dHRvbiB3aGVuIHVuYWJsZSB0byBzdWJtaXRcbiAgICpcbiAgICogQWJsZSB0byBzdWJtaXQgb25seSB3aGVuOlxuICAgKiAxLiBiYWN0ZXJpYSBjaG9zZW5cbiAgICogMi4gYXQgbGVhc3Qgb25lIHBoYWdlIGluIGVhY2ggcm93IGFuZCBjb2x1bW5cbiAgICogMy4gZGlsdXRpb24gdmFsdWUgaXMgdmFsaWQsIEFORFxuICAgKiA0LiBub3Qgc3RpbGwgd2FpdGluZyBmb3IgcHJldmlvdXMgc3VibWl0IHJlc3BvbnNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiAtIGB0cnVlYCBpZiB1c2VyIGNhbiBzdWJtaXQgKGFsbCBjb25kaXRpb25zIG1ldClcbiAgICogLSBgZmFsc2VgIG90aGVyd2lzZVxuICAgKi9cbiAgc3VibWl0RGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cbiAgICAvLyBpZiBzcGlubmVyIGlzIHNwaW5uaW5nLCBkaXNhYmxlXG4gICAgaWYodGhpcy5fc3Bpbm5lckNsYXNzWydzcGlubmluZyddKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBkZXRlcm1pbmUgaWYgZGlzYWJsZWRcbiAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLmNob3NlbkJhY3QgPT09ICdub25lJztcbiAgICAvLyBjaGVjayB0aGF0IGF0IGxlYXN0IDEgcGhhZ2UgYWRkZWQgZm9yIHJvdy9jb2xcbiAgICBpZih0aGlzLm5TdHJhaW5zWzBdID09PSAwIHx8IHRoaXMublN0cmFpbnNbMV0gPT09IDApe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpbHV0aW9uVmFsdWUgPCAwLjEgfHwgdGhpcy5kaWx1dGlvblZhbHVlID4gMjApe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIG51bGwgZWxlbWVudHMgZnJvbSBpbnB1dCBhcnJheSBhbmQgZGlsdXRlcyB0aGVcbiAgICogbnVtYmVyIG9mIHBoYWdlXG4gICAqXG4gICAqIFVzZWQgYmVmb3JlIHN1Ym1pdHRpbmcgcm93L2NvbCBwaGFnZSB0byBzZXJ2aWNlXG4gICAqXG4gICAqIEBwYXJhbSB7RXhwZXJpbWVudFBoYWdlW119IGluRGF0YSAtIGlucHV0IGFycmF5IHRvIGJlIGNsZWFuZWRcbiAgICogLSBjYW4gY29udGFpbiBudWxsIHZhbHVlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7RXhwZXJpbWVudFBoYWdlW119XG4gICAqIC0gY2xlYW5lZCBhcnJheVxuICAgKiAtIGRvZXMgbm90IGNvbnRhaW4gbnVsbCB2YWx1ZXNcbiAgICovXG4gIHByb3RlY3RlZCBfY2xlYW5BcnJheXMoaW5EYXRhOiBFeHBlcmltZW50UGhhZ2VbXSk6IEV4cGVyaW1lbnRQaGFnZVtde1xuICAgIHZhciBjbGVhbiA9IGluRGF0YS5maWx0ZXIoKGVsdCk9PntcbiAgICAgIHJldHVybiBlbHQgIT09IG51bGxcbiAgICB9KS5tYXAoKGVsdCk9PntcbiAgICAgICAgcmV0dXJuIHtpZDogZWx0LmlkLFxuICAgICAgICAgICAgICAgIHN0cmFpbk51bTogZWx0LnN0cmFpbk51bSxcbiAgICAgICAgICAgICAgIG51bVBoYWdlOiBlbHQubnVtUGhhZ2UgLyAodGhpcy5kaWx1dGlvblZhbHVlICogMTAwMClcbiAgICAgICAgICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xlYW5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZvcm1hdHMgdGhlIHJlc3VsdHMgdG8gdGFrZSBpbnRvIGFjY291bnQgb2YgbnVsbCBpbiB0aGUgcm93cy9jb2xzXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXN1bHRzIC0gcmVzdWx0cyBvZiBjb21wdXRpbmcgdGhlIHBsZXhlclxuICAgKiAtIGRvZXMgbm90IGNvbnRhaW4gbnVsbCB2YWx1ZXNcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICogLSB1cGRhdGVkIHJlc3VsdHNcbiAgICogLSBjYW4gY29udGFpbiBudWxsIHZhbHVlc1xuICAgKi9cbiAgcHJvdGVjdGVkIF91bkNsZWFuUmVzdWx0cyhyZXN1bHRzOiBPYmplY3QpOk9iamVjdHtcbiAgICBsZXQgb3V0ID0ge30sXG4gICAgICAgIG5ld0NvbHMgPSB7fTtcbiAgICBsZXQgY3VyUm93ID0gMCxcbiAgICAgICAgY3VyQ29sID0gMDtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzLmxlbmd0aDsgaisrKXtcbiAgICAgIGxldCBjb2wgPSB0aGlzLmNvbHNbal07XG4gICAgICBpZihjb2wgIT09IG51bGwpe1xuICAgICAgICBuZXdDb2xzW2N1ckNvbF0gPSBqO1xuICAgICAgICBjdXJDb2wgKys7XG4gICAgICB9XG4gICAgfSAvLyBlbmQgZm9yIHRoaXMuY29sc1xuICAgIGZvcihsZXQgaSBpbiB0aGlzLnJvd3Mpe1xuICAgICAgaWYodGhpcy5yb3dzW2ldICE9PSBudWxsKXtcbiAgICAgICAgbGV0IHJvdyA9IHJlc3VsdHNbY3VyUm93XTtcbiAgICAgICAgbGV0IHRtcCA9IHt9O1xuICAgICAgICBmb3IobGV0IGogaW4gcm93KXtcbiAgICAgICAgICBsZXQgbmV3Q29sID0gbmV3Q29sc1tqXTtcbiAgICAgICAgICB0bXBbbmV3Q29sXSA9IHJvd1tqXTtcbiAgICAgICAgfVxuICAgICAgICBvdXRbaV0gPSB0bXA7XG4gICAgICAgIGN1clJvdysrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHNwaW5uZXIgQ1NTIGNsYXNzZXMgYmFzZWQgb24gdGhlIGlucHV0IHN0YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdDbGFzcyB1cGRhdGVkIHN0YXRlIGZvciB0aGUgc3Bpbm5lclxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0U3Bpbm5lckNsYXNzKG5ld0NsYXNzOiBzdHJpbmcpe1xuICAgIHRoaXMuX3NwaW5uZXJDbGFzc1snaGlkaW5nJ10gPSAobmV3Q2xhc3MgPT09IFwic3Bpbm5pbmdcIiA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgIHRoaXMuX3NwaW5uZXJDbGFzc1snc3Bpbm5pbmcnXSA9IChuZXdDbGFzcyA9PT0gXCJzcGlubmluZ1wiID8gdHJ1ZSA6IGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgQ1NTIGNsYXNzZXMgZm9yIHRoZSBzcGlubmVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IENTUyBjbGFzc2VzIGZvciB0aGUgc3Bpbm5lciBpbiB0aGUgZm9ybVxuICAgKiBgeydjbGFzcyc6IGJvb2xlYW4sIC4uLn1gXG4gICAqL1xuICBnZXRTcGlubmVyQ2xhc3MoKXtcbiAgICByZXR1cm4gdGhpcy5fc3Bpbm5lckNsYXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZXhwZXJpbWVudCBkYXRhIGFuZCBzdWJtaXRzIHRvIHNlcnZpY2UgdG8gZ2V0IHJlc3VsdHNcbiAgICogb2YgdGhlIG11bHRpcGxleGVyXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2Ygc3VibWl0IGJ1dHRvblxuICAgKi9cbiAgcGVyZm9ybVBsZXhlcigpe1xuICAgIC8vIHNldCB0aGUgc3Bpbm5lclxuICAgIHRoaXMuX3NldFNwaW5uZXJDbGFzcygnc3Bpbm5pbmcnKTtcbiAgICAvLyBjbGVhbiB0aGUgcm93IGFuZCBjb2x1bW4gYXJyYXlzXG4gICAgbGV0IHRtcFJvd3MgPSB0aGlzLnJvd3M7XG4gICAgbGV0IGNsZWFuUm93cyA9IHRoaXMuX2NsZWFuQXJyYXlzKHRtcFJvd3MpO1xuICAgIGxldCBjbGVhbkNvbHMgPSB0aGlzLl9jbGVhbkFycmF5cyh0aGlzLmNvbHMpO1xuICAgIC8vIGdhdGhlciBkYXRhXG4gICAgdmFyIGRhdGE6IFBsZXhlcklucHV0ID0ge1xuICAgICAgbGF3blR5cGU6IHRoaXMuY2hvc2VuQmFjdCxcbiAgICAgIHJvd1BoYWdlOiBjbGVhblJvd3MsXG4gICAgICBjb2xQaGFnZTogY2xlYW5Db2xzLFxuICAgICAgc3BlY2lhbHM6IHt9LFxuICAgICAgbG9jYXRpb246IHRoaXMucGxleGVyVHlwZSxcbiAgICAgIHNjZW5hcmlvRGF0YTogdGhpcy5zY2VuYXJpb0RldGFpbHMsXG4gICAgICBjYXBhY2l0eTogU2NlbmFyaW9HbG9iYWxzLnBsZXhlckNhcGFjaXR5XG4gICAgfTtcbiAgICAvLyB1c2UgdGhlIHNlcnZpY2VcbiAgICB0aGlzLmV4cFN1YnNjcmlwdGlvbiA9IHRoaXMuX2V4cGVyaW1lbnRTZXJ2aWNlLnBlcmZvcm1QbGV4ZXIoZGF0YSlcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICB0aGlzLnJlc3VsdHMgPSB0aGlzLl91bkNsZWFuUmVzdWx0cyhyZXMpO1xuICAgICAgdGhpcy5fc2V0U3Bpbm5lckNsYXNzKCdoaWRpbmcnKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICB0aGlzLl9zZXRTcGlubmVyQ2xhc3MoJ2hpZGluZycpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBwaGFnZSB0byByb3cgb3IgY29sdW1uIG9mIHBsZXhlclxuICAgKiB3aGVuIHN1Y2Nlc3NmdWwsIHVwZGF0ZXMgdGhlIHJvdy9jb2wgcGhhZ2UgY291bnRzXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKG9uRHJvcFN1Y2Nlc3MpYCBvZiByb3cvY29sIGhlYWRlclxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gJGV2ZW50IGRyYWdFdmVudDsgaW5jbHVkZXMgcGhhZ2UgZGF0YVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyIGRpcmVjdGlvbjsgYWRkIHRvIGByb3dgIG9yIGBjb2xgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcG90IHBvc2l0aW9uIHRvIGFkZCBwaGFnZVxuICAgKi9cbiAgYWRkUGhhZ2UoJGV2ZW50OiBhbnksIGRpcjogc3RyaW5nLCBzcG90OiBudW1iZXIpe1xuICAgIGxldCBmcGhhZ2U6IEZyaWRnZVBoYWdlID0gJGV2ZW50LmRhdGE7XG4gICAgbGV0IHBoYWdlOiBFeHBlcmltZW50UGhhZ2UgPSB7XG4gICAgICBpZDogZnBoYWdlLmlkLFxuICAgICAgc3RyYWluTnVtOiBmcGhhZ2Uuc3RyYWluTnVtLFxuICAgICAgbnVtUGhhZ2U6IFNjZW5hcmlvR2xvYmFscy5udW1QaGFnZVxuICAgIH1cbiAgICAvLyBhZGQgdG8gcm93XG4gICAgaWYoZGlyID09PSAncm93JyAmJiBzcG90IDwgOCl7XG4gICAgICB0aGlzLnJvd3Nbc3BvdF0gPSBwaGFnZTtcbiAgICAgIHRoaXMublN0cmFpbnNbMF0gPSB0aGlzLnJvd3MuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZSAhPT0gbnVsbCB9KS5sZW5ndGg7XG4gICAgfSBlbHNlIGlmIChzcG90IDwgOCkgeyAvLyBjb2x1bW5cbiAgICAgIHRoaXMuY29sc1tzcG90XSA9IHBoYWdlO1xuICAgICAgdGhpcy5uU3RyYWluc1sxXSA9IHRoaXMuY29scy5maWx0ZXIoZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlICE9PSBudWxsIH0pLmxlbmd0aDtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2NlbmFyaW8uc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb0dsb2JhbHMgfSBmcm9tICcuLi8uLi9zY2VuYXJpby5nbG9iYWxzJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogVGhpcyByb29tIGlzIHVzZWQgZm9yIHN0dWRlbnRzIHRvIHN1Ym1pdCB0aGVpciBkZWxldGlvbiBndWVzc2VzXG4gKiBmb3IgcGhhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2RlbC1yb29tJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tb2RlbC1yb29tLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9tb2RlbC1yb29tLnN0eWxlLmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIE1vZGVsUm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogQ3VycmVudCB1c2VyIGd1ZXNzZXMgYXMgb2JqZWN0XG4gICAqL1xuICBwcml2YXRlIGd1ZXNzZXM6IGFueTtcbiAgLyoqXG4gICAqIEFycmF5IG9mIHN0cmFpbiBudW1iZXJzIGluY2x1ZGVkXG4gICAqL1xuICBwcml2YXRlIGtleXM6IG51bWJlcltdO1xuICAvKipcbiAgICpcbiAgICovXG4gIHByaXZhdGUgZ2VuZUFyOiBudW1iZXJbXTtcbiAgLyoqXG4gICAqIFNpemUgb2YgZWFjaCBibG9ja1xuICAgKi9cbiAgcHJpdmF0ZSBzdGVwU2l6ZTogbnVtYmVyO1xuICAvKipcbiAgICogU2NlbmFyaW8gY29kZVxuICAgKi9cbiAgcHJpdmF0ZSBzY2VuYXJpb0lkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVc2VyIGlkXG4gICAqL1xuICBwcml2YXRlIHVzZXJJZDogbnVtYmVyO1xuICAvKipcbiAgICogUG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIENTUyB3aWR0aCBvZiBlYWNoIGJsb2NrIGRlcGVuZGVudCBvbiBsZW5ndGggb2YgZ2VuZSBhbmQgc3RlcCBzaXplXG4gICAqL1xuICBwcml2YXRlIF93aWR0aDogc3RyaW5nO1xuICAvKipcbiAgICogQm9vbGVhbiBzdGF0ZSB2YXJpYWJsZSB1c2VkIHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tXG4gICAqIG11bHRpcGxlIHNlcnZpY2VzIGVhc2llclxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2Upe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIHRoaXMuc3RlcFNpemUgPSBTY2VuYXJpb0dsb2JhbHMuZGVsZXRpb25HdWVzc0xlbmd0aDtcbiAgICB0aGlzLmdlbmVBciA9IFtdO1xuICAgIGxldCBuQmxvY2tzOiBudW1iZXIgPSBNYXRoLmNlaWwoU2NlbmFyaW9HbG9iYWxzLmdlbmVMZW5ndGgvdGhpcy5zdGVwU2l6ZSk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG5CbG9ja3M7IGkrKyl7XG4gICAgICB0aGlzLmdlbmVBci5wdXNoKGkpO1xuICAgIH1cbiAgICB0aGlzLl93aWR0aCA9ICgxMDAgLyBuQmxvY2tzKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgdXNlciBpZFxuICAgKiAyLiBHZXQgdGhlIHNjZW5hcmlvIGlkIGZyb20gcGFyZW50IFVSTFxuICAgKiAzLiBHZXQgdXNlciBndWVzc2VzIGZyb20gc2NlbmFyaW8gc2VydmljZSAoc2V0IGJ5IGZyaWRnZSlcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgbGV0IHUgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIGlmKHUpe1xuICAgICAgdGhpcy51c2VySWQgPSB1LmlkO1xuICAgIH1cbiAgICB0aGlzLnNjZW5hcmlvSWQgPSB0aGlzLl9yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzY2VuSWQnKTtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0R3Vlc3Nlc1xuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKGRlbHMpID0+IHtcbiAgICAgIHRoaXMuZ3Vlc3NlcyA9IGRlbHM7XG5cbiAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKGRlbHMpLm1hcCgoayk9PiB7cmV0dXJuIE51bWJlci5wYXJzZUludChrKTt9KTtcbiAgICAgIGlmKHRoaXMua2V5cy5sZW5ndGggPT09IDApe1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdObyBwaGFnZSBhdmFpbGFibGUgZm9yIG1vZGVsbGluZydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICB9XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGNvbXBvbmVudCBieSB1bnN1YnNjcmliaW5nXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIENTUyBjbGFzc2VzIGZvciBhIHN0cmFpbiBndWVzcyBibG9ja1xuICAgKiBCbG9jayBpbmRpY2F0ZXMgd2hlYXRlciB1c2VyIHRoaW5rcyB0aGF0IHNlY3Rpb24gb2YgdGhlIGNocm9tb3NvbWVcbiAgICogaXMgZGVsZXRlZCBpbiB0aGUgc3RyYWluXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJhaW4gLSBzdHJhaW4gbnVtYmVyIChtYXRjaGVzIG51bW1iZXIgaXMgZnJpZGdlKVxuICAgKiBAcGFyYW0ge251bWJlcn0gcG9zIC0gYmxvY2sgaW5kZXhcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gYXBwbGljYWJsZSBDU1MgY2xhc3NlcyBpbiB0aGUgZm9ybVxuICAgKiBgeydjbGFzcyc6IGJvb2xlYW4sIC4uLn1gXG4gICAqL1xuICBnZXRCbG9ja0NsYXNzKHN0cmFpbjogbnVtYmVyLCBwb3M6IG51bWJlcil7XG4gICAgbGV0IHBvc0d1ZXNzID0gdGhpcy5ndWVzc2VzW3N0cmFpbl1bcG9zXTtcbiAgICByZXR1cm4ge1xuICAgICAgJ2d1ZXNzLWJsb2NrIGJ0biBwLTAnOiB0cnVlLFxuICAgICAgJ2J0bi1vdXRsaW5lLXNlY29uZGFyeSc6ICFwb3NHdWVzcywgLy8gaW5hY3RpdmVcbiAgICAgICdiZy1kYXJrJzogcG9zR3Vlc3MgLy8gYWN0aXZlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBibG9jayBndWVzcyBmcm9tIHRydWUgdG8gZmFsc2UgT1IgZmFsc2UgdG8gdHJ1ZVxuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIHRoZSBibG9ja1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RyYWluIC0gc3RyYWluIG51bWJlciAobWF0Y2hlcyBudW1tYmVyIGlzIGZyaWRnZSlcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBvcyAtIGJsb2NrIGluZGV4XG4gICAqL1xuICB0b2dnbGVCbG9jayhzdHJhaW46IG51bWJlciwgcG9zOiBudW1iZXIpe1xuICAgIGxldCBjID0gdGhpcy5ndWVzc2VzW3N0cmFpbl1bcG9zXTtcbiAgICB0aGlzLmd1ZXNzZXNbc3RyYWluXVtwb3NdID0gIWM7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIGd1ZXNzZXMgdG8gdGhlIGJhY2tlbmQvZGF0YWJhc2UgdXNpbmcgdGhlIHNlcnZpY2VcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiBTYXZlIEJ1dHRvblxuICAgKi9cbiAgc2F2ZURhdGEoKXtcbiAgICAvLyBjbGVhciBlcnJvciBtZXNzYWdlIGJlZm9yZWhhbmRcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIC8vIHVzZSBzZXJ2aWNlIGFuZCBzYXZlIGRhdGEgKGFzIGEgc3RyaW5nKVxuICAgIGxldCBvdXQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmd1ZXNzZXMpXG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlXG4gICAgICAuc2F2ZURlbGV0aW9ucyh0aGlzLmd1ZXNzZXMsIHRoaXMudXNlcklkLCB0aGlzLnNjZW5hcmlvSWQpXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgoZGF0KT0+e1xuICAgICAgdGhpcy5ndWVzc2VzID0gSlNPTi5wYXJzZShkYXQpO1xuICAgICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLnNldFNjZW5hcmlvKG51bGwsIGRhdCk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uLy4uL3NjZW5hcmlvLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW8gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBzaG93cyB0aGUgc2NlbmFyaW8gZGV0YWlscyBpbmNsdWRpbmdcbiAqIDEuIHB1cnBvc2UgLSB0aGUgZ29hbCBvZiB0aGUgc2NlbmFyaW8sIHVzdWFsbHkgZWl0aGVyIGlkZW50aWZ5IG11dGF0aW9ucyBvZiBnaXZlbiB1bmtub3duIHBoYWdlIG9yIGNyZWF0ZSBwaGFnZSB3aXRoIGNlcnRhaW4gbXV0YXRpb25cbiAqIDIuIHJlbGV2YW5jZSAtIHdoeSB0aGUgc2NlbmFyaW8gaXMgcmVsZXZhbnQgZm9yIGxlYXJuaW5nIGFuZCBmdXR1cmUgc2NlbmFyaW9zXG4gKiAzLiBzdGFydGluZyBwb2ludCAtIGRlc2NyaXB0aW9uIG9mIHRoZSBwaGFnZSBzdHVkZW50cyBzdGFydCB0aGUgc2NlbmFyaW8gd2l0aFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYW5kaW5nLXJvb20nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9sYW5kaW5nLXJvb20udGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgTGFuZGluZ1Jvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIHdlIGFyZSB2aWV3aW5nXG4gICAqL1xuICBzY2VuYXJpbzogU2NlbmFyaW87XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gdGhlIGdldFNjZW5hcmlvIG1ldGhvZCBvZiBzY2VuYXJpbyBzZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogYW55O1xuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgY29udHJ1Y3RvclxuICAgKiBAcGFyYW0ge1JvdXRlcn0gX3JvdXRlciBBbmd1bGFyIHJvdXRlclxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlfSBfcm91dGUgVGhlIGN1cnJlbnQgVVJMIHJvdXRlIHRvIGdldCBzY2VuYXJpbyBpZFxuICAgKiBAcGFyYW0ge1NjZW5hcmlvU2VydmljZX0gX3NjZW5hcmlvU2VydmljZSBTZXJ2aWNlIHRvIGdldCBzY2VuYXJpbyBpbmZvcm1hdGlvblxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IFNjZW5hcmlvU2VydmljZSl7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnRcbiAgICogMS4gR2V0IHNjZW5Db2RlIGZyb20gdGhlIHVybCAodXNlIHBhcmFtZXRlciBmcm9tIHBhcmVudCByb3V0ZSBiZWNhdXNlIHRoaXMgcm91dGUgZW5kcyBcIi9sYW5kaW5nLXJvb21cIilcbiAgICogMi4gR2V0IHRoZSBkZXRhaWxzIGZvciBzY2VuYXJpb3NcbiAgICogSWYgZXJyb3IsIGdvIGJhY2sgdG8gaG9tZSBwYWdlXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIGxldCBzY2VuSWQgPSB0aGlzLl9yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzY2VuSWQnKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX3NjZW5hcmlvU2VydmljZVxuICAgICAgLmdldFNjZW5hcmlvKHNjZW5JZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICBzY2VuYXJpbyA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmFyaW8gPSBzY2VuYXJpbztcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgdGhlIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgaWYgbmVjZXNzYXJ5IHRvXG4gICAqIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhbmRpbmctcm9vbS9sYW5kaW5nLXJvb20uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYkFjdGl2ZU1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEZyaWRnZVBoYWdlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9waGFnZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIE1vZGFsIGRpYWxvZyBib3ggZm9yIGluZGl2aWR1YWwgcGhhZ2Ugc3RyYWluc1xuICogVXNlZCB0byBlZGl0IHBoYWdlIGNvbW1lbnQsIHZpZXcgcGhhZ2UgcGFyZW50cywgb3IgZGVsZXRlIHBoYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BoYWdlLWRpYWxvZy1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGhhZ2UtZGlhbG9nLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBQaGFnZURpYWxvZ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgcGhhZ2Ugd2UgYXJlIHZpZXdpbmdcbiAgICovXG4gIEBJbnB1dCgpIHBoYWdlOiBGcmlkZ2VQaGFnZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKSB7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL3BoYWdlLWRpYWxvZy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2dlZEluR3VhcmQgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9sb2dnZWQtaW4uZ3VhcmQuc2VydmljZSc7XG5cbmltcG9ydCB7IExhYlJvb21Db21wb25lbnQgfSBmcm9tICcuL2xhYi1yb29tL2xhYi1yb29tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGV4ZXJSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kZWxSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RlbC1yb29tL21vZGVsLXJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IExhbmRpbmdSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5kaW5nLXJvb20vbGFuZGluZy1yb29tLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBMb2NhdGlvblJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBMb2NhdGlvbkNvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZTogW0xvZ2dlZEluR3VhcmRdLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdsYWItcm9vbScsXG4gICAgICAgIGNvbXBvbmVudDogTGFiUm9vbUNvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnTGFiJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAncGxleGVyLXJvb20nLFxuICAgICAgICBjb21wb25lbnQ6IFBsZXhlclJvb21Db21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ1BsZXhlcidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ21vZGVsLXJvb20nLFxuICAgICAgICBjb21wb25lbnQ6IE1vZGVsUm9vbUNvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnTW9kZWwnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHBhdGg6ICdpbmZvJywgY29tcG9uZW50OiBMYW5kaW5nUm9vbUNvbXBvbmVudH0sXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IExhbmRpbmdSb29tQ29tcG9uZW50fVxuICAgIF1cbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbG9jYXRpb24udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbG9jYXRpb24uc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5NThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhYi1yb29tL2xhYi1yb29tLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhYi1yb29tL2xhYi1yb29tLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vcGxleGVyLXJvb20vcGxleGVyLXJvb20udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vcGxleGVyLXJvb20vcGxleGVyLXJvb20uc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL21vZGVsLXJvb20vbW9kZWwtcm9vbS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbGFuZGluZy1yb29tL2xhbmRpbmctcm9vbS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhbmRpbmctcm9vbS9sYW5kaW5nLXJvb20udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE1vZGFsRGlzbWlzc1JlYXNvbnMgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uL3NjZW5hcmlvLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb0dsb2JhbHMgfSBmcm9tICcuLi9zY2VuYXJpby5nbG9iYWxzJztcbmltcG9ydCB7IFBoYWdlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9waGFnZS1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRnJpZGdlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mcmlkZ2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IEZyaWRnZVBoYWdlLCBHZW5vdHlwZVBoYWdlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9waGFnZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBPbmUgb2YgdGhlIG1haW4gY29tcG9uZW50cyBvZiB0aGUgYXBwIC0gdGhlIGZyaWRnZSBzdG9yZXMgdGhlIHBoYWdlIGZvclxuICogdGhlIGdpdmVuIHVzZXIvc2NlbmFyaW9cbiAqXG4gKiBOZWVkcyB0byBnZXQgZXhpc3RpbmcgZnJpZGdlL2NyZWF0ZSBuZXcgb25lOyBlZGl0IGFuZCByZW1vdmUgZXhpc3Rpbmcgc3RyYWlucztcbiAqXG4gKiBhZGQgbmV3IHN0cmFpbnM7IGNoYW5nZSBzaGVsZlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZyaWRnZScsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vZnJpZGdlLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9mcmlkZ2Uuc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEZyaWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuXG4gIC8qKlxuICAgKiBUaGUgbG9nZ2VkIGluIHVzZXJcbiAgICovXG4gIHByaXZhdGUgdXNlcjogVXNlcjtcbiAgLyoqXG4gICAqIFRoZSBmcmlkZ2Ugb2JqZWN0XG4gICAqL1xuICBmcmlkZ2U6IEZyaWRnZTtcbiAgLyoqXG4gICAqIGxpc3Qgb2Ygc3RyYWlucyBpbiB0aGUgZnJpZGdlLCBpbmNsdWRpbmcgZW1wdHkgb25lc1xuICAgKi9cbiAgc3RyYWluczogRnJpZGdlUGhhZ2VbXTtcbiAgLyoqXG4gICAqIGN1cnJlbnRseSB2aXNpYmxlIHN0cmFpbnMgYmFzZWQgb24gc2hlbGYgbnVtYmVyXG4gICAqL1xuICBjdXJyU3RyYWluczogRnJpZGdlUGhhZ2VbXTtcbiAgLyoqXG4gICAqIGN1cnJlbnQgc2hlbGZcbiAgICovXG4gIHNoZWxmOiBudW1iZXIgPSAwO1xuICAvKipcbiAgICogbWF4aW11bSBudW1iZXIgb2Ygc2hlbHZlcyBpbiBmcmlkZ2VcbiAgICovXG4gIG1heFNoZWxmOiBudW1iZXI7XG4gIC8qKlxuICAgKiBudW1iZXIgb2Ygc2xvdHMgcGVyIHNoZWxmXG4gICAqL1xuICBzcG90czogbnVtYmVyO1xuICAvKipcbiAgICogcG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIFN0YXRlIHRvIG1vbml0aW9yIGlmIGNvbXBvbmVudCBhY3RpdmUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIHRvXG4gICAqIG11bHRpcGxlIHN0cmVhbXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIE9ic2VydmVzIHRoZSBzY2VuQ29kZSBvZiB0aGUgVVJMXG4gICAqL1xuICBwcml2YXRlIHBhcmFtT2JzZXJ2ZXI6IGFueTtcblxuICBwcml2YXRlIG5leHRTcG90OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE5nYk1vZGFsKSB7XG4gICAgdGhpcy5tYXhTaGVsZiA9IFNjZW5hcmlvR2xvYmFscy5uRnJpZGdlU2hlbGY7XG4gICAgdGhpcy5zcG90cyA9IFNjZW5hcmlvR2xvYmFscy5uRnJpZGdlU3BvdHM7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRhaWxpemUgdGhlIGZyaWRnZSB3aGVuIGNyZWF0aW5nIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgbG9nZ2VkIGluIHVzZXIgYW5kIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogMi4gRmV0Y2ggdGhlIGNvcnJlc3BvbmRpbmcgZnJpZGdlXG4gICAqIDNhLiBJZiB0aGUgZnJpZGdlIGRvZXNuJ3QgZXhpc3QgeWV0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAqIDNiLiBJZiB0aGUgZnJpZGdlIGRvZXMgZXhpc3QsIGluaXRpYWxpemUgaXRcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcblxuICAgIGxldCB1c2VySWQgPSB0aGlzLnVzZXIuaWQ7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgbGV0IHNjZW5JZCA9IHBhcmFtc1snc2NlbklkJ107XG4gICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0RnJpZGdlKHVzZXJJZCwgc2NlbklkKVxuICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChmcmlkZ2UpID0+IHt0aGlzLl9pbml0RnJpZGdlKGZyaWRnZSl9LFxuICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmKGVyci5zdGF0dXMgPT09IDMwNyl7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVGcmlkZ2UodXNlcklkLCBzY2VuSWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICB9IH1cbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgdGhlIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlc1xuICAgKiB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGZyaWRnZSBiZWNhdXNlIHRoaXMgdXNlciBkb2Vzbid0IGhhdmUgb25lIGZvciB0aGlzIHNjZW5hcmlvXG4gICAqXG4gICAqIE9uIHN1Y2Nlc3MsIGluaWFsaXplcyBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCAtIGxvZ2dlZCBpbiB1c2VyJ3MgaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCAtIGN1cnJlbnQgc2NlbmFyaW8gaWRcbiAgICovXG4gIF9jcmVhdGVGcmlkZ2UodXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKXtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuY3JlYXRlRnJpZGdlKHVzZXJJZCwgc2NlbklkKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChmcmlkZ2UpPT57XG4gICAgICB0aGlzLl9pbml0RnJpZGdlKGZyaWRnZSk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGlhbGl6ZXMgdGhlIGZyaWRnZSBhbmQgY29tcG9uZW50IHZhcmlhYmxlcyByZWxhdGVkIHRvIHdoaWNoIHN0cmFpbnMgYXJlXG4gICAqIHZpc2libGUgYmFzZWQgb24gdGhlIGN1cnJlbnQgc2hlbGZcbiAgICpcbiAgICogQHBhcmFtIHtGcmlkZ2V9IG5ld0ZyaWRnZSAtIGZyaWRnZSBvYmplY3QgdG8gYmUgaW5pdGFsaXplZFxuICAgKi9cbiAgX2luaXRGcmlkZ2UobmV3RnJpZGdlOiBGcmlkZ2Upe1xuICAgIHRoaXMuZnJpZGdlID0gbmV3RnJpZGdlO1xuICAgIHRoaXMuc3RyYWlucyA9IHRoaXMuX2ZpbGxTdHJhaW5zKG5ld0ZyaWRnZS5zdHJhaW5zKTtcbiAgICB0aGlzLl9jdXJyU3RyYWlucygpO1xuICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5zZXRTY2VuYXJpbyhuZXdGcmlkZ2Uuc2NlbmFyaW9EZXRhaWxzLCBuZXdGcmlkZ2UuZ3Vlc3Nlcyk7XG4gIH1cblxuICAvKipcbiAgICogRmlsbHMgaW4gdGhlIGVtcHR5IHNsb3RzIHdpdGggXCJlbXB0eVwiIHBoYWdlIG9iamVjdHNcbiAgICpcbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZVtdfSBmcmlkZ2VTdHJhaW5zIC0gYXJyYXkgb2Ygc3RyYWlucyBhY3R1YWxseSBpbiB0aGUgZnJpZGdlXG4gICAqXG4gICAqIEByZXR1cm5zIHtGcmlkZ2VQaGFnZVtdfSBhcnJheSBvZiBhbGwgc2xvdHMgaW4gZnJpZGdlLCBpbmNsdWRpbmcgZW1wdHlcbiAgICovXG4gIF9maWxsU3RyYWlucyhmcmlkZ2VTdHJhaW5zOiBGcmlkZ2VQaGFnZVtdKTogRnJpZGdlUGhhZ2VbXXtcbiAgICB2YXIgb3V0OiBGcmlkZ2VQaGFnZVtdID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubWF4U2hlbGYqdGhpcy5zcG90czsgaSsrKXtcbiAgICAgIG91dC5wdXNoKHtzdHJhaW5OdW06IGksIHBoYWdlVHlwZTogJ2VtcHR5JywgY29tbWVudDogJycsIGlkOiAnJ30pO1xuICAgIH1cbiAgICB0aGlzLm5leHRTcG90ID0gZnJpZGdlU3RyYWluc1swXS5zdHJhaW5OdW0gKyAxO1xuICAgIC8vIGFkZCBvcmlnaW5hbCBzdHJhaW5zXG4gICAgZm9yKGxldCBpPTA7IGkgPCBmcmlkZ2VTdHJhaW5zLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBuID0gZnJpZGdlU3RyYWluc1tpXS5zdHJhaW5OdW07XG4gICAgICBvdXRbbl0gPSBmcmlkZ2VTdHJhaW5zW2ldO1xuICAgICAgdGhpcy5uZXh0U3BvdCA9IChuID09PSB0aGlzLm5leHRTcG90ID8gbisxIDogdGhpcy5uZXh0U3BvdCk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBzdHJhaW5zIGZvciB2aXNpYmxlIHNoZWxmXG4gICAqL1xuICBfY3VyclN0cmFpbnMoKXtcbiAgICBsZXQgc3RhcnQgPSB0aGlzLnNoZWxmKnRoaXMuc3BvdHM7XG4gICAgbGV0IGVuZCA9IHN0YXJ0K3RoaXMuc3BvdHM7XG4gICAgdGhpcy5jdXJyU3RyYWlucyA9IHRoaXMuc3RyYWlucy5zbGljZShzdGFydCxlbmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgQ1NTIGNsYXNzZXMgYXBwbGljYWJsZSB0byB0aGUgcGhhZ2UgYmFzZWQgb24gdGhlIHBoYWdlIHR5cGVcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyYyAtIHN0cmFpbiBudW1iZXIgb2YgcGhhZ2VcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gY2xhc3NlcyB3aGljaCBhcHB5IHRvIHRoaXMgYnV0dG9uIGluIHRoZSBmb3JtIHtcImNsYXNzXCI6IGJvb2xlYW4sIC4uLn1cbiAgICovXG4gIGdldFBoYWdlQ2xhc3Moc3JjOiBudW1iZXIpOiBPYmplY3R7XG4gICAgbGV0IHBoYWdlID0gdGhpcy5zdHJhaW5zW3NyY107XG4gICAgcmV0dXJuIHtcbiAgICAgICdjb2wtNyBjb2wteGwtOCBwLTAgc3RyYWluLWltYWdlJzogdHJ1ZSxcbiAgICAgICdzdHJhaW4taW1hZ2UtcmVmZXJlbmNlJzogcGhhZ2UucGhhZ2VUeXBlID09PSAncmVmZXJlbmNlJyxcbiAgICAgICdzdHJhaW4taW1hZ2UtdW5rbm93bic6IHBoYWdlLnBoYWdlVHlwZSA9PT0gJ3Vua25vd24nLFxuICAgICAgJ3N0cmFpbi1pbWFnZS1zdWJtaXR0ZWQnOiBwaGFnZS5zdWJtaXR0ZWRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2Ugb3IgZGVjcmVhc2UgdmlzaWJsZSBzaGVsZiB0aGVuIHVwZGF0ZSB0aGUgdmlzaWJsZSBzdHJhaW5zXG4gICAqXG4gICAqIENhbGxlZCBieSBgKGNsaWNrKWAgb2YgcHJldi9uZXh0IGJ1dHRvbnNcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluYyAtIGFtb3VudCB0byBjaGFuZ2Ugc2hlbGYgYnlcbiAgICovXG4gIGNoYW5nZVNoZWxmKGluYzogbnVtYmVyKXtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIGlmKHRoaXMuc2hlbGYgPD0gdGhpcy5tYXhTaGVsZi0xICYmIGluYyA9PT0gMSl7XG4gICAgICB0aGlzLnNoZWxmKys7XG4gICAgICB0aGlzLl9jdXJyU3RyYWlucygpO1xuICAgIH0gZWxzZSBpZih0aGlzLnNoZWxmID4gMCAmJiBpbmMgPT09IC0xKXtcbiAgICAgIHRoaXMuc2hlbGYtLTtcbiAgICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2aXNpYmxlIHNoZWxmIHRvIGEgc3BlY2lmaWMgbnVtYmVyO1xuICAgKiB1c2VkIHRvIGp1bXAgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kXG4gICAqXG4gICAqIENhbGxlZCBieSAoY2xpY2spIG9mIGZpcnN0L2xhc3QgYnV0dG9uc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gblNoZWxmIC0gc2hlbGYgdG8gZ28gdG9cbiAgICovXG4gIHNldFNoZWxmKG5TaGVsZjogbnVtYmVyKXtcbiAgICB0aGlzLnNoZWxmID0gblNoZWxmO1xuICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHN0cmFpbiBjYW4gYmUgZHJvcHBlZCBpbiBhIHNsb3RcbiAgICogY2FuIGJlIGRyb3BwZWQgaWYgc2xvdCBpcyBlbXB0eSBhbmQgc3JjIGlzIHNtYWxsIG9yIGxhcmdlXG4gICAqXG4gICAqIENhbGxlZCBieSBgW2FsbG93RHJvcF1gIG9mIGZyaWRnZSBzbG90XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcG90IC0gc3BvdCB0byB0ZXN0IHRvIHNlZSBpZiBjYW4gZHJvcFxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIHRydWUgb3IgZmFsc2UgaWZcbiAgICogc3RyYWluIGNhbiBiZSBkcm9wcGVkIGluIHNsb3RcbiAgICovXG4gIGNhbkRyb3Aoc3BvdDogbnVtYmVyKTogYW55IHtcbiAgcmV0dXJuIChkcmFnRGF0YTogR2Vub3R5cGVQaGFnZSkgPT4ge1xuICAgIGxldCBvdXQgPSBmYWxzZTtcbiAgICBpZihkcmFnRGF0YSAmJiBkcmFnRGF0YS5oYXNPd25Qcm9wZXJ0eSgnc3JjJykpe1xuICAgICAgaWYoZHJhZ0RhdGEuc3JjID09PSAnc21hbGwnIHx8IGRyYWdEYXRhLnNyYz09PSAnbGFyZ2UnKXtcbiAgICAgICAgbGV0IHRyeVNwb3Q6IEZyaWRnZVBoYWdlID0gdGhpcy5zdHJhaW5zW3Nwb3RdO1xuICAgICAgICBpZih0cnlTcG90LnBoYWdlVHlwZSA9PT0gJ2VtcHR5Jyl7XG4gICAgICAgICAgb3V0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9O1xufVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IHN0cmFpbiB0byBhIGZyaWRnZVxuICAgKlxuICAgKiBDYWxsZWQgYnkgYChvbkRyb3BTdWNlc3MpYCBvZiBzbG90XG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgLSBkcmFnIGV2ZW50LCBpbmN1ZGluZyBkYXRhIGZvciBzdHJhaW4gdG8gYWRkO1xuICAgKiBoYXM6IHNoaWZ0cywgZGVsZXRpb24sIHBhcmVudHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNwb3QgLSBzbG90IHRvIGRyb3AgbmV3IHN0cmFpblxuICAgKi9cbiAgZHJvcFN0cmFpbigkZXZlbnQ6IGFueSwgc3BvdDogbnVtYmVyKXtcbiAgICBsZXQgc3RyYWluOiBHZW5vdHlwZVBoYWdlID0gJGV2ZW50LmRhdGE7XG4gICAgLy8gbmVlZCBzdHJhaW5OdW0sIG11dGF0aW9uTGlzdCwgZGVsZXRpb25cbiAgICBsZXQgbmV3U3RyYWluID0ge1xuICAgICAgc3RyYWluTnVtOiBzcG90LFxuICAgICAgbXV0YXRpb25MaXN0OiBzdHJhaW4uc2hpZnRzLFxuICAgICAgZGVsZXRpb246IHN0cmFpbi5kZWxldGlvbixcbiAgICAgIHBhcmVudHM6IHN0cmFpbi5wYXJlbnRzXG4gICAgfVxuICAgIC8vIGFkZCB0byBmcmlkZ2VcbiAgICBsZXQgdXNlcklkID0gdGhpcy51c2VyLmlkO1xuICAgIGxldCBzY2VuQ29kZSA9IHRoaXMuZnJpZGdlLnNjZW5Db2RlO1xuICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5hZGRTdHJhaW4odXNlcklkLCBzY2VuQ29kZSwgbmV3U3RyYWluKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIHRoaXMuc3RyYWluc1tzcG90XSA9IHtcbiAgICAgICAgLy8gc3RyYWluTnVtIGNvbW1lbnQgcGhhZ2VUeXBlIGlkIHBhcmVudHNcbiAgICAgICAgc3RyYWluTnVtOiByZXMuc3RyYWluTnVtLFxuICAgICAgICBjb21tZW50OiByZXMuY29tbWVudCxcbiAgICAgICAgcGhhZ2VUeXBlOiByZXMucGhhZ2VUeXBlLFxuICAgICAgICBpZDogcmVzLmlkLFxuICAgICAgICBwYXJlbnRzOiByZXMucGFyZW50cyxcbiAgICAgICAgbnVtUGFyZW50czogcmVzLm51bVBhcmVudHNcbiAgICAgIH1cbiAgICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gICAgfSxcbiAgICAgIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIG9wZW5zIGEgZGlhbG9nIGJveCB0byBlZGl0L2xlYXJuIG1vcmUgYWJvdXQgc2VsZWN0ZWQgcGhhZ2VcbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBvcGVucyB0aGUgYm94IGNhbGxzIGhlbHBlciBtZXRob2RzIGJhc2VkIG9uIGJveCBvdXRwdXRcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyYyAtIHN0cmFpbiBudW1iZXIgdG8gb3BlbiBib3ggZm9yXG4gICAqL1xuICBlZGl0UGhhZ2Uoc3JjOiBudW1iZXIpIHtcbiAgICBsZXQgcGhhZ2UgPSB0aGlzLnN0cmFpbnNbc3JjXTtcbiAgICBjb25zdCBtb2RlbFJlZiA9IHRoaXMuX21vZGFsU2VydmljZS5vcGVuKFBoYWdlRGlhbG9nQ29tcG9uZW50LCB7IHdpbmRvd0NsYXNzOiAncGhhZ2UtZGlhbG9nJ30pO1xuICAgIG1vZGVsUmVmLmNvbXBvbmVudEluc3RhbmNlLnBoYWdlID0gcGhhZ2U7XG5cbiAgICBtb2RlbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KT0+e1xuICAgICAgbGV0IHJlc1R5cGUgPSB0eXBlb2YgcmVzdWx0O1xuICAgICAgaWYocmVzVHlwZSA9PT0gXCJzdHJpbmdcIiAmJiByZXN1bHQgPT09ICdkZWxldGUnKXtcbiAgICAgICAgLy8gZGVsZXRlIHRoZSBwaGFnZVxuICAgICAgICB0aGlzLl9kZWxldGVQaGFnZShzcmMpO1xuICAgICAgfSBlbHNlIGlmIChyZXNUeXBlID09PSBcIm9iamVjdFwiKXtcbiAgICAgICAgLy8gZWRpdCBpdFxuICAgICAgICB0aGlzLl9lZGl0UGhhZ2Uoc3JjLCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9LCAocmVhc29uKT0+e1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiB3aGljaCB1cGRhdGVzIHRoZSBwaGFnZSBhZnRlciBkaWFsb2cgYm94IGhhcyBjbG9zZWRcbiAgICpcbiAgICogVXBkYXRlcyB0aGUgc3RyYWluIG9uIHN1Y2Nlc3MgYW5kIHNldHMgZXJyb3IgbWVzc2FnZSBvbiBlcnJvclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIC0gc3RyYWluIG51bWJlciB0byB1cGRhdGVcbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZX0gbmV3UGhhZ2UgLSB1cGRhdGVkIGRldGFpbHNcbiAgICovXG4gIF9lZGl0UGhhZ2Uoc3JjOiBudW1iZXIsIG5ld1BoYWdlOiBGcmlkZ2VQaGFnZSl7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLnVwZGF0ZVN0cmFpbih0aGlzLnVzZXIuaWQsIHRoaXMuZnJpZGdlLnNjZW5Db2RlLCBuZXdQaGFnZSlcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIHRoaXMuc3RyYWluc1tzcmNdID0gcmVzO1xuICAgICAgdGhpcy5fY3VyclN0cmFpbnMoKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIHdoaWNoIGRlbGV0ZXMgdGhlIHBoYWdlIGZyb20gdGhlIGZyaWRnZSBhZnRlciBkaWFsb2cgYm94IGhhcyBjbG9zZWRcbiAgICpcbiAgICogU2V0cyBzcG90IHRvIGVtcHR5IHBoYWdlIG9uIHN1Y2Nlc3MgYW5kIHNldHMgZXJyb3IgbWVzc2FnZSBvbiBlcnJvclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIC0gc3RyYWluIG51bWJlciB0byBkZWxldGVcbiAgICovXG4gIF9kZWxldGVQaGFnZShzcmM6IG51bWJlcil7XG4gICAgbGV0IG5ld1BoYWdlID0gdGhpcy5zdHJhaW5zW3NyY107XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmRlbGV0ZVN0cmFpbih0aGlzLnVzZXIuaWQsIHRoaXMuZnJpZGdlLnNjZW5Db2RlLCBuZXdQaGFnZSwgKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgLy8gc3VjY2Vzc2Z1bFxuICAgICAgdGhpcy5zdHJhaW5zW3NyY10gPSB7c3RyYWluTnVtOiBzcmMsIHBoYWdlVHlwZTogJ2VtcHR5JywgY29tbWVudDonJywgaWQ6ICcnfTtcbiAgICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9mcmlkZ2UvZnJpZGdlLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL3BoYWdlLWRpYWxvZy50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2ZyaWRnZS9waGFnZS1kaWFsb2cudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2ZyaWRnZS9mcmlkZ2UudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9