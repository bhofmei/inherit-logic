webpackJsonp([0],{

/***/ 1008:
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
const location_routes_1 = __webpack_require__(1049);
const experiment_service_1 = __webpack_require__(1011);
const fridge_component_1 = __webpack_require__(1059);
const phage_dialog_component_1 = __webpack_require__(1027);
const location_component_1 = __webpack_require__(1022);
const landing_room_component_1 = __webpack_require__(1026);
const lab_room_component_1 = __webpack_require__(1023);
const plexer_room_component_1 = __webpack_require__(1024);
const model_room_component_1 = __webpack_require__(1025);
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

/***/ 1009:
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

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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

/***/ 1022:
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
        templateUrl: __webpack_require__(1050),
        styleUrls: [__webpack_require__(1051)]
    })
], LocationComponent);
exports.LocationComponent = LocationComponent;


/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
const scenario_globals_1 = __webpack_require__(1009);
const experiment_service_1 = __webpack_require__(1011);
const scenario_service_1 = __webpack_require__(128);
const read_error_1 = __webpack_require__(63);
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
        templateUrl: __webpack_require__(1052),
        styleUrls: [__webpack_require__(1053)]
    }),
    __metadata("design:paramtypes", [experiment_service_1.ExperimentService,
        scenario_service_1.ScenarioService])
], LabRoomComponent);
exports.LabRoomComponent = LabRoomComponent;


/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
const scenario_globals_1 = __webpack_require__(1009);
const experiment_service_1 = __webpack_require__(1011);
const scenario_service_1 = __webpack_require__(128);
const read_error_1 = __webpack_require__(63);
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
        templateUrl: __webpack_require__(1054),
        styleUrls: [__webpack_require__(1055)]
    }),
    __metadata("design:paramtypes", [experiment_service_1.ExperimentService,
        scenario_service_1.ScenarioService])
], PlexerRoomComponent);
exports.PlexerRoomComponent = PlexerRoomComponent;


/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
const authentication_service_1 = __webpack_require__(25);
const scenario_service_1 = __webpack_require__(128);
const scenario_globals_1 = __webpack_require__(1009);
const read_error_1 = __webpack_require__(63);
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
        templateUrl: __webpack_require__(1056),
        styleUrls: [__webpack_require__(1057)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        scenario_service_1.ScenarioService])
], ModelRoomComponent);
exports.ModelRoomComponent = ModelRoomComponent;


/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
        templateUrl: __webpack_require__(1058)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        scenario_service_1.ScenarioService])
], LandingRoomComponent);
exports.LandingRoomComponent = LandingRoomComponent;


/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
        templateUrl: __webpack_require__(1060)
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], PhageDialogComponent);
exports.PhageDialogComponent = PhageDialogComponent;


/***/ }),

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const location_component_1 = __webpack_require__(1022);
const logged_in_guard_service_1 = __webpack_require__(130);
const lab_room_component_1 = __webpack_require__(1023);
const plexer_room_component_1 = __webpack_require__(1024);
const model_room_component_1 = __webpack_require__(1025);
const landing_room_component_1 = __webpack_require__(1026);
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

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/location.template.html";

/***/ }),

/***/ 1051:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/location.style.css";

/***/ }),

/***/ 1052:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/lab-room/lab-room.template.html";

/***/ }),

/***/ 1053:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/lab-room/lab-room.style.css";

/***/ }),

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/plexer-room/plexer-room.template.html";

/***/ }),

/***/ 1055:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/plexer-room/plexer-room.style.css";

/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/model-room/model-room.template.html";

/***/ }),

/***/ 1057:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/model-room/model-room.style.css";

/***/ }),

/***/ 1058:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/location/landing-room/landing-room.template.html";

/***/ }),

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
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
const authentication_service_1 = __webpack_require__(25);
const scenario_globals_1 = __webpack_require__(1009);
const phage_dialog_component_1 = __webpack_require__(1027);
const read_error_1 = __webpack_require__(63);
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
        templateUrl: __webpack_require__(1061),
        styleUrls: [__webpack_require__(1062)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        scenario_service_1.ScenarioService,
        ng_bootstrap_1.NgbModal])
], FridgeComponent);
exports.FridgeComponent = FridgeComponent;


/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/fridge/phage-dialog.template.html";

/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/fridge/fridge.template.html";

/***/ }),

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/scenario/fridge/fridge.style.css";

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL3NjZW5hcmlvLmdsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9leHBlcmltZW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbGFuZGluZy1yb29tL2xhbmRpbmctcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9mcmlkZ2UvcGhhZ2UtZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20uc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vcGxleGVyLXJvb20vcGxleGVyLXJvb20udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL21vZGVsLXJvb20vbW9kZWwtcm9vbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhbmRpbmctcm9vbS9sYW5kaW5nLXJvb20udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2ZyaWRnZS9mcmlkZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL3BoYWdlLWRpYWxvZy50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS5zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMseUNBQStDO0FBQy9DLGdEQUEwRDtBQUUxRCxvREFBbUQ7QUFFbkQsdURBQXlEO0FBRXpELHFEQUE2RDtBQUM3RCwyREFBd0U7QUFFeEUsdURBQXlEO0FBQ3pE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UyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDNUIsU0FBUyxDQUFDLENBQUMsR0FBRztZQUViLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxDQUFDLEdBQUc7WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLDZCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBNVVZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxtQkFBTyxDQUFDLElBQXdCLENBQUM7UUFDaEQsU0FBUyxFQUFFLENBQUMsbUJBQU8sQ0FBQyxJQUFvQixDQUFDLENBQUM7S0FDM0MsQ0FBQztxQ0E2QzZCLGVBQU07UUFDTix1QkFBYztRQUNFLDhDQUFxQjtRQUMzQixrQ0FBZTtRQUNuQix1QkFBUTtHQWhEaEMsZUFBZSxDQTRVM0I7QUE1VVksMENBQWU7Ozs7Ozs7O0FDNUI1QixpRzs7Ozs7OztBQ0FBLDJGOzs7Ozs7O0FDQUEsdUYiLCJmaWxlIjoiMC1jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBMb2NhdGlvblJvdXRlcyB9IGZyb20gJy4vbG9jYXRpb24ucm91dGVzJztcblxuaW1wb3J0IHsgRXhwZXJpbWVudFNlcnZpY2UgfSBmcm9tICcuL2V4cGVyaW1lbnQuc2VydmljZSc7XG5cbmltcG9ydCB7IEZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZyaWRnZS9mcmlkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBoYWdlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vZnJpZGdlL3BoYWdlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IExhbmRpbmdSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5kaW5nLXJvb20vbGFuZGluZy1yb29tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYWJSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9sYWItcm9vbS9sYWItcm9vbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxleGVyUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vcGxleGVyLXJvb20vcGxleGVyLXJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGVsUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vbW9kZWwtcm9vbS9tb2RlbC1yb29tLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKExvY2F0aW9uUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGcmlkZ2VDb21wb25lbnQsXG4gICAgUGhhZ2VEaWFsb2dDb21wb25lbnQsXG4gICAgTG9jYXRpb25Db21wb25lbnQsXG4gICAgTGFiUm9vbUNvbXBvbmVudCxcbiAgICBQbGV4ZXJSb29tQ29tcG9uZW50LFxuICAgIE1vZGVsUm9vbUNvbXBvbmVudCxcbiAgICBMYW5kaW5nUm9vbUNvbXBvbmVudFxuICBdLFxuICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgUGhhZ2VEaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRXhwZXJpbWVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbk1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi5tb2R1bGUudHMiLCIvKipcbiAqIFNjZW5hcmlvL2V4cGVyaWVtZW50LXJlbGF0ZWQgdmFsdWVzIHVzZWQgdG9cbiAqIDEuIFNlbmQgdGhlIGNvcnJlY3QgcGFyYW1ldGVycyB0byBiYWNrZW5kIGNhbGxzXG4gKiAyLiBNYXRjaCBzb21lIGJhY2tlbmQgcGFyYW1ldGVyc1xuICogMy4gSGF2ZSBjb25zaXN0ZW50IGRlZmF1bHRzXG4gKi9cbmV4cG9ydCBjb25zdCBTY2VuYXJpb0dsb2JhbHMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygc3RhcnRpbmcgcGhhZ2Ugd2hlbiB0YWtlbiBmcm9tIGZyaWRnZVxuICAgKi9cbiAgbnVtUGhhZ2U6MTAwMDAwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBsYWIgcm9vbSBwbGF0ZVxuICAgKi9cbiAgcGxhdGVDYXBhY2l0eTogMTUwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBlYWNoIHBsZXhlciByb29tIHBsYXRlXG4gICAqL1xuICBwbGV4ZXJDYXBhY2l0eTogMjAwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHNoZWx2ZXMgaW4gdGhlIGZyaWRnZVxuICAgKi9cbiAgbkZyaWRnZVNoZWxmOiAzMixcbiAgLyoqXG4gICAqIE51bWJlciBvZiBzcG90cyBvbiBlYWNoIHNoZWxmIG9mIHRoZSBmcmlkZ2VcbiAgICovXG4gIG5GcmlkZ2VTcG90czogMTYsXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRpbHV0aW9uIHZhbHVlIGZvciBsYWIgcm9vbTsgY2FuIGJlIGNoYW5nZWQgYnkgdXNlclxuICAgKi9cbiAgZGVmYXVsdExhYkRpbHV0aW9uOiAxMCxcbiAgLyoqXG4gICAqIERlZmF1bHQgZGlsdXRpb24gdmFsdWUgZm9yIHBsZXhlciByb29tOyBjYW4gYmUgY2hhbmdlZCBieSB1c2VyXG4gICAqL1xuICBkZWZhdWx0UGxleGVyRGlsdXRpb246IDUsXG4gIC8qKlxuICAgKiBMZW5ndGggb2YgdGhlIGdlbmUgaW4gbnVtYmVyIG9mIGJhc2VwYWlyc1xuICAgKi9cbiAgZ2VuZUxlbmd0aDogMzUwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIGJhc2VwYWlycyBwZXIgXCJibG9ja1wiIHdoZW4gZ3Vlc3NpbmcgZGVsZXRpb24gbG9jYXRpb25cbiAgICovXG4gIGRlbGV0aW9uR3Vlc3NMZW5ndGg6IDEwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9zY2VuYXJpby5nbG9iYWxzLnRzIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFBsYXRlSW5wdXQsIFBsYXRlUmVzdWx0cywgUGxleGVySW5wdXQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgcGVyZm9ybXMgdGhlIHBsYXRlIGFuZCBwbGV4ZXIgZXhwZXJpbWVudHMgdXNlZFxuICogd2hlbiBjcm9zc2luZyBvciBtdXRhdGluZyBwaGFnZSBzdHJhaW5zLCBpLmUuIHBlcmZvcm1pbmcgYVxuICogdmlydHVhbCBleHBlcmltZW50XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeHBlcmltZW50U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfYmFzZVVSTCA9ICcvYXBpL2NyaWNrZXQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIC8qKlxuICAgKiBXaXRoIHZhbGlkIGlucHV0IGZvciB0aGUgcGxhdGUsIGNhbGxzIHRoZSBiYWNrZW5kIHRvIGdlbmVyYXRlXG4gICAqIGEgbmV3IHBsYXRlIHRoYXQgaXMgZGlzcGxheWVkIGluIHRoZSBsYWIgcm9vbVxuICAgKlxuICAgKiBAcGFyYW0ge1BsYXRlSW5wdXR9IHBsYXRlIC0gaW5mb3JtYXRpb24gbmVlZGVkIHRvIGdlbmVyYXRlIHRoZSBuZXcgcGxhdGVcbiAgICogLSBJbmNsdWRlcyAxLTIgcGhhZ2Ugd2l0aCBudW1QaGFnZSBlYWNoLCBsYXduIHR5cGUsIGxvY2F0aW9uLCBzcGVjaWFscywgcGxhdGUgY2FwYWNpdHksIGFuZCBzY2VuYXJpbyBkYXRhXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFBsYXRlUmVzdWx0cz59XG4gICAqIC0gbmV3bHkgZ2VuZXJhdGUgcGxhdGUgd2l0aCBpbmZvIGFib3V0IHBhcmVudHMgYW5kIChpcyBwbGF0ZSBmdWxsIG9yIGxpc3Qgb2Ygc21hbGwgYW5kIGxhcmdlIHBsYXF1ZXMpXG4gICAqIC0gb3IgZXJyb3IgXCJudW1QaGFnZSBub3Qgc2V0XCIgaWYgbnVtYmVyIG9mIHBoYWdlIGlzbid0IHNldFxuICAgKiAtIG9yIGVycm9yIFwiRXJyb3IgZmluZGluZyB0aGUgc3BlY2lmaWVkIHBoYWdlIDEvMlwiIGlmIHBoYWdlIG5vdCBpbiBkYXRhYmFzZVxuICAgKiAtIG9yIGVycm9yIG1lc3NhZ2UgZm9yIG90aGVyIHNlcnZlciBlcnJvclxuICAgKi9cbiAgY3JlYXRlUGxhdGUocGxhdGU6IFBsYXRlSW5wdXQpOiBPYnNlcnZhYmxlPFBsYXRlUmVzdWx0cz57XG4gICAgdmFyIHJlcyA9IHRoaXMuX2h0dHBcbiAgICAucG9zdDxQbGF0ZVJlc3VsdHM+KGAke3RoaXMuX2Jhc2VVUkx9L3BsYXRlYCwgcGxhdGUpXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBXaXRoIHZhbGlkIGlucHV0LCBjYWxsIHRoZSBiYWNrZW5kIHRvIGdlbmVyYXRlIHZhbGlkIHJlc3VsdHMgZm9yIHRoZSBwbGV4ZXJcbiAgICpcbiAgICogQHBhcmFtIHtQbGV4ZXJJbnB1dH0gZGF0YSAtIGluZm9ybWF0aW9uIG5lZWRlZCB0byBnZW5lcmF0ZSB0aGVcbiAgICogcGxleGVyIHJlc3VsdHNcbiAgICogLSBJbnB1dHMgYSBsaXN0IG9mIHBoYWdlIElEcyBmb3IgdGhlIHJvd3MgYW5kIGNvbHVtbnMsIEUuIGNvbGlcbiAgICogbGF3biB0eXBlLCBsb2NhdGlvbiwgc3BlY2lhbHMsIGluZGl2aWR1YWwgcGxleGVyIHBsYXRlIGNhcGFjaXR5XG4gICAqIGFuZCBzY2VuYXJpbyBkYXRhXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqIC0gdGhlIHJlc3VsdHMgb2YgdGhlIHBsZXhlciBhcyBhIDJEIGFycmF5XG4gICAqIHdlcmUgZWFjaCBjZWxsIGluIHRoZSBhcnJheSByZXByZXNlbnRzIGEgcGxhdGUgYW5kIGhhc1xuICAgKiBpcyBwbGF0ZSBmdWxsIG9yIGNvdW50cyBvZiBzbWFsbC9sYXJnZSBwbGFxdWVzXG4gICAqIC0gb3IgZXJyb3IgaWYgc2VydmVyIGVycm9yXG4gICAqL1xuICBwZXJmb3JtUGxleGVyKGRhdGE6IFBsZXhlcklucHV0KTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIC8vIGRhdGEgd2lsbCBoYXZlIHJvd1BoYWdlLCBjb2xQaGFnZSwgbGF3biB0eXBlLCBsb2NhdGlvbiwgc3BlY2lhbHMsIGNhcGFjaXR5LCBzY2VuYXJpb0RhdGFcbiAgICB2YXIgcmVzID0gdGhpcy5faHR0cFxuICAgIC5wb3N0KGAke3RoaXMuX2Jhc2VVUkx9L3BsZXhlcmAsIGRhdGEpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vZXhwZXJpbWVudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhpcyBpcyBhIHZpZXcgY29tcG9uZW50IHdoaWNoIGhvc3RzIHRoZSBsb2NhdGlvblxuICogdGFiIHNlbGVjdGlvbiBuYXZpZ2F0b3JcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9jYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9sb2NhdGlvbi50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbG9jYXRpb24uc3R5bGUuY3NzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuaW1wb3J0IHsgU2NlbmFyaW9HbG9iYWxzIH0gZnJvbSAnLi4vLi4vc2NlbmFyaW8uZ2xvYmFscyc7XG5pbXBvcnQgeyBFeHBlcmltZW50U2VydmljZSB9IGZyb20gJy4uL2V4cGVyaW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zY2VuYXJpby5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRXhwZXJpbWVudFBoYWdlLCBHZW5vdHlwZVBoYWdlLCBQbGF0ZUlucHV0LCBQbGF0ZVJlc3VsdHMsIF9nZW5vdHlwZSwgUGhhZ2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBDb21wb25lbnQgd2hlcmUgcGhhZ2UgYXJlIHBsYXRlZCBhbmQgbXV0YXRlZC9jcm9zc2VkXG4gKiBTdHVkZW50cyB3aWxsIHNwZW5kIHRoZSBtYWpvcml0eSBvZiB0aGVpciB0aW1lIGluIHRoaXMgY29tcG9uZW50XG4gKlxuICogSW5jbHVkZXM6IDIgRS4gY29saSB0ZXN0IHR1YmVzLCA0IHNlcmlhbCBkaWx1dGlvbiB0dWJlcywgMSBwbGF0ZVxuICogVXNlcyBkcmFnIGFuZCBkcm9wIG1lY2hhbmlzbSB0byBtb3ZlIHBoYWdlL3R1YmVzIGFyb3VuZFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xhYi1yb29tJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9sYWItcm9vbS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbGFiLXJvb20uc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIExhYlJvb21Db21wb25lbnQge1xuXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvLyBiYWN0ZXJpYSB0dWJlc1xuICAvKipcbiAgICogQXQgaW5pdCwgYm90aCB0dWJzIHZpc2libGVcbiAgICogT25jZSBhIGJhY3RlcmlhIHR5cGUgaGFzIGJlZW4gc2VsZWN0ZWQsIG5lZWQgdG8gaGlkZSB0aGUgb3RoZXJcbiAgICovXG4gIHByaXZhdGUgaXNIaWRkZW46IE9iamVjdCA9IHsnSyc6IGZhbHNlLCAnQic6IGZhbHNlfTtcbiAgLyoqXG4gICAqIHBoYWdlIHN0cmFpbnMgd2hpY2ggYXJlIGluIHRoZSB0dWJlXG4gICAqL1xuICBwcml2YXRlIHBoYWdlOiBFeHBlcmltZW50UGhhZ2VbXSA9IFtdO1xuXG4gIC8vIGRpbHV0aW9uIHR1YmVzXG4gIC8qKlxuICAgKiB2YWx1ZSB0byBkaWx1dGUgdGhlIG51bWJlciBvZiBwaGFnZSBhdCBlYWNoIGRpbHV0aW9uXG4gICAqL1xuICBwcml2YXRlIGRpbHV0aW9uVmFsdWU6IG51bWJlciA9IFNjZW5hcmlvR2xvYmFscy5kZWZhdWx0TGFiRGlsdXRpb247XG4gIC8qKlxuICAgKiBDb250ZW50cyBvZiB0aGUgZGlsdXRpb24gdHViZVxuICAgKiBpbmNsdWRlczogbGF3blR5cGUgYW5kIHBoYWdlXG4gICAqL1xuICBwcml2YXRlIGNvbnRlbnRzOiBhbnlbXTtcbiAgLyoqXG4gICAqIE9ubHkgc2hvdyBkaWx1dGlvbiBsYWJlbHMgYXMgd2UgZG8gdGhlIHNlcmlhbCBkaWx1dGlvblxuICAgKi9cbiAgcHJpdmF0ZSB2aXNpYmxlTGFiZWw6IGJvb2xlYW5bXTtcbiAgLyoqXG4gICAqIGJvb2xlYW4gdG8gc3RvcCB1c2VycyBmcm9tIGNoYW5naW5nIHRoZSBkaWx1YXRpb24gZmFjdG9yIG9uY2VcbiAgICogdGhleSBzdGFydCBkaWx1dGluZ1xuICAgKiBhbGxvd2luZyBjaGFuZ2VzIHdoaWxlIGRpbHV0aW5nIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCBudW1iZXJzXG4gICAqIG9mIHBoYWdlIGFuZCB3b3VsZCBtYWtlIHR1YmUgbGFiZWxpbmcgZGlmZmljdWx0XG4gICAqL1xuICBwcml2YXRlIGNhbkVkaXREaWx1dGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gcGxhdGVcbiAgcHJpdmF0ZSBpc0VtcHR5OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIEUuIGNvbGkgdHlwZSBvbiB0aGUgcGxhdGUgY3VycmVudGx5XG4gICAqL1xuICBwcml2YXRlIGxhd25UeXBlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIHNjZW5hcmlvIGRldGFpbHMgKGZyb20gdGhlIGZyaWRnZSkgd2hpY2ggaXMgbmVlZGVkIHdoZW4gZG9pbmcgY3Jvc3NcbiAgICovXG4gIHByaXZhdGUgc2NlbmFyaW9EZXRhaWxzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpcyB0aGUgcGxhdGUgb3ZlciBjYXBhY2l0eT9cbiAgICovXG4gIHByaXZhdGUgaXNGdWxsOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBsaXN0IG9mIGdlbm90eXBlIGluZGV4IGZvciBwaGFnZSB3aXRoIHNtYWxsIHBsYXF1ZXNcbiAgICovXG4gIHByaXZhdGUgc21hbGxQbGFxdWVMaXN0OiBhbnlbXTtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgZ2Vub3R5cGUgaW5kZXggZm9yIHBoYWdlIHdpdGggbGFyZ2UgcGxhcXVlc1xuICAgKi9cbiAgcHJpdmF0ZSBsYXJnZVBsYXF1ZUxpc3Q6IGFueVtdO1xuICAvKipcbiAgICogZ2Vub3R5cGVzIHdoaWNoIGNvcnJlc3BvbmQgdG8gY29udGVudHMgb2Ygc21hbGxQbGFxdWVMaXN0IGFuZCBsYXJnZVBsYXF1ZUxpc3RcbiAgICovXG4gIHByaXZhdGUgZ2Vub3R5cGVzOiBfZ2Vub3R5cGVbXTtcbiAgLyoqXG4gICAqIElkIGFuZCBzdHJhaW4gbnVtYmVyIG9mIHBoYWdlIHVzZWQgdG8gY3JlYXRlIHRoaXMgcGxhdGVcbiAgICovXG4gIHByaXZhdGUgcGxhdGVQYXJlbnRzOiBQaGFnZVtdO1xuXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB2YXJpYWJsZXMgLSBkaWx1dGlvbiB0dWJlIGNvbnRlbnRzIGFuZCB2aXNpYmxlIGxhYmVsc1xuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXhwZXJpbWVudFNlcnZpY2U6IEV4cGVyaW1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgdGhpcy5jb250ZW50cyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsXTtcbiAgICB0aGlzLnZpc2libGVMYWJlbCA9IFt0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0YWxpemUgdGhlIGNvbXBvbmVudFxuICAgKiBHZXQgdGhlIHNjZW5hcmlvIGRldGFpbHMgKHNjZW5hcmlvIGRldGFpbHMgYXJlIGFscmVhZHkgc2V0XG4gICAqIGJ5IExvY2F0aW9uQ29tcG9uZW50KVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmdldFNjZW5hcmlvRGV0YWlsc1xuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChkZXRhaWxzKSA9PiB7dGhpcy5zY2VuYXJpb0RldGFpbHMgPSBkZXRhaWxzfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgdHViZS1yZWxhdGVkIHZhcmlhYmxlc1xuICAgKiBiYWN0ZXJpYSB0dWJlIC0gcGhhZ2UgY29udGVudHMgYW5kIHdoaWNoIGlzIGhpZGRlblxuICAgKiBkaWx1dGlvbiB0dWJlIC0gY29udGVudHMsIGxhYmVscywgYW5kIGNhbiBlZGl0IGRpbHV0aW9uIHZhbHVlXG4gICAqIGNsZWFyIGFueSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBjbGVhclR1YmVzKCl7XG4gICAgdGhpcy5waGFnZSA9IFtdO1xuICAgIHRoaXMuaXNIaWRkZW4gPSB7J0snOiBmYWxzZSwgJ0InOiBmYWxzZX07XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICB0aGlzLmNvbnRlbnRzID0gW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuICAgIHRoaXMudmlzaWJsZUxhYmVsID0gW3RydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xuICAgIHRoaXMuY2FuRWRpdERpbHV0aW9uID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgcGxhdGUgdmFyaWFibGVzXG4gICAqIHBsYXRlIGlzIGVtcHR5LCBub3QgZnVsbFxuICAgKiBubyBzbWFsbCBwbHFhdWVzLCBsYXJnZSBwbGFxdWVzLCBvciBnZW5vdHlwZXNcbiAgICogY2xlYXIgYW55IGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGNsZWFyUGxhdGUoKSB7XG4gICAgLy8gcmVzZXQgYWxsIHZhcmlhYmxlc1xuICAgIHRoaXMuaXNGdWxsID0gZmFsc2U7XG4gICAgdGhpcy5pc0VtcHR5ID0gdHJ1ZTtcbiAgICB0aGlzLmdlbm90eXBlcyA9IFtdO1xuICAgIHRoaXMuc21hbGxQbGFxdWVMaXN0ID0gW107XG4gICAgdGhpcy5sYXJnZVBsYXF1ZUxpc3QgPSBbXTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIHRoaXMubGF3blR5cGUgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBhbGwgdmFyaWFibGVzXG4gICAqL1xuICBjbGVhckFsbCgpe1xuICAgIHRoaXMuY2xlYXJUdWJlcygpO1xuICAgIHRoaXMuY2xlYXJQbGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBiYWN0ZXJpYSB0dWJlIGNhbiBiZSBkcmFnZ2VkXG4gICAqXG4gICAqIENhbGxlZCBmb3IgYFtkcmFnRW5hYmxlZF1gIG9mIGJhY3QgdHViZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHR1YmUgaGFzIHBoYWdlXG4gICAqL1xuICBjYW5EcmFnQmFjdCgpOiBib29sZWFue1xuICAgIHJldHVybiB0aGlzLnBoYWdlLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogRGF0YSB0byBiZSBkcmFnZ2VkIGZyb20gdGhlIGJhY3RlcmlhIHR1YmVcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2RyYWdEYXRhXWAgb2YgYmFjdCB0dWJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgRS4gY29saSBzb3VyY2UsIGBcIkJcImAgb3IgYFwiS1wiYFxuICAgKiBcbiAgICogQHJldHVybnMge09iamVjdH0gZGF0YSB3aXRoIGxhd24gdHlwZSwgc3JjLCBhbmQgcGhhZ2UgbGlzdFxuICAgKi9cbiAgZ2V0RGF0YUJhY3Qoc3JjOiBzdHJpbmcpOiBPYmplY3R7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhd25UeXBlOiBzcmMsXG4gICAgICBzcmM6IHNyYyxcbiAgICAgIHBoYWdlOiB0aGlzLnBoYWdlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgY2xhc3NlcyBmb3IgYSBiYWN0ZXJpYSB0dWJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgRS4gY29saSBzb3VyY2UsIGBcIkJcImAgb3IgYFwiS1wiYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhcHBsaWNhYmxlIGNsYXNzZXMgaW4gdGhlIGZvcm1cbiAgICogYHsnY2xhc3MnOiBib29sZWFuLCAuLi59YFxuICAgKi9cbiAgICBnZXRDbGFzc2VzQmFjdChzcmM6IHN0cmluZyk6IE9iamVjdCB7XG4gICAgcmV0dXJuIHsnYmFjdC10dWJlIHRlc3QtdHViZS1vdXRlcic6IHRydWUsXG4gICAgICAgICAgICAnaW52aXNpYmxlJzogKHNyYyA9PT0gJ0InID8gdGhpcy5pc0hpZGRlbltcIkJcIl0gOiB0aGlzLmlzSGlkZGVuW1wiS1wiXSksXG4gICAgICAgICAgICAndHViZS1iJzogKHNyYz09PSdCJyksXG4gICAgICAgICAgICAndHViZS1rJzogKHNyYz09PSdLJyksXG4gICAgICAgICAgICAnbi1waGFnZS0xJzogdGhpcy5waGFnZS5sZW5ndGggPT09IDEsXG4gICAgICAgICAgICAnbi1waGFnZS0yJzogdGhpcy5waGFnZS5sZW5ndGggPT09IDJcbiAgICAgICAgICAgfVxuICAgIH1cblxuICAvKipcbiAgICogRHJvcCBwaGFnZSBmcm9tIGZyaWRnZSBpbnRvIGJhY3RlcmlhIHR1YmVcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAob25Ecm9wU3VjY2VzcylgIG9mIGJhY3RlcmlhIHR1YmVzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgZHJhZyBldmVudCB3aXRoIHBoYWdlIGRhdGFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBiYWN0ZXJpYSBzb3VyY2UgcGhhZ2UgZHJhZ2dlZCB0b1xuICAgKi9cbiAgZHJvcFBoYWdlQmFjdCgkZXZlbnQ6IGFueSwgc3JjOiBzdHJpbmcpe1xuICAgIHZhciBpbmNvbWluZ1BoYWdlID0gJGV2ZW50LmRyYWdEYXRhO1xuICAgIGlmKGluY29taW5nUGhhZ2UuaGFzT3duUHJvcGVydHkoJ2lkJykgPT0gZmFsc2Upe1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnT25seSBhZGQgcGhhZ2UgZnJvbSB0aGUgZnJpZGdlJztcbiAgICB9IGVsc2UgaWYodGhpcy5waGFnZS5sZW5ndGggPj0gMikge1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnQ2Fubm90IGhhdmUgbW9yZSB0aGFuIDIgcGhhZ2UgaW4gYSB0dWJlJztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWRkIHBoYWdlIC0gdHlwZSBFeHBlcmltZW50UGhhZ2VcbiAgICAgIHRoaXMucGhhZ2UucHVzaCh7XG4gICAgICAgIGlkOiBpbmNvbWluZ1BoYWdlLmlkLFxuICAgICAgICBzdHJhaW5OdW06IGluY29taW5nUGhhZ2Uuc3RyYWluTnVtLFxuICAgICAgbnVtUGhhZ2U6IFNjZW5hcmlvR2xvYmFscy5udW1QaGFnZVxuICAgICAgfSk7XG4gICAgICBzd2l0Y2goc3JjKXtcbiAgICAgICAgY2FzZSAnQic6XG4gICAgICAgICAgdGhpcy5pc0hpZGRlblsnSyddID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSyc6XG4gICAgICAgICAgdGhpcy5pc0hpZGRlblsnQiddID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH19XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGRpbHV0aW9uIHR1YmUgY2FuIGJlIGRyYWdnZWRcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2RyYWdFbmFibGVkXWAgb2YgZGlsdXRpb24gdHViZSAoMC0zKVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIGRpbHV0aW9uIHR1YmUgbnVtYmVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdHViZSBoYXMgY29udGVudHNcbiAgICovXG4gIGNhbkRyYWdEaWwoc3JjOiBudW1iZXIpOiBib29sZWFue1xuICAgIHJldHVybiAodGhpcy5jb250ZW50c1tzcmNdICE9PSBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGNsYXNzZXMgZm9yIGEgZGlsdXRpb24gdHViZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIGRpbHV0aW9uIHR1YmUgbnVtYmVyICgwLTMpXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGFwcGxpY2FibGUgY2xhc3NlcyBpbiB0aGUgZm9ybVxuICAgKiBgeydjbGFzcyc6IGJvb2xlYW4sIC4uLn1gXG4gICAqL1xuICBnZXRDbGFzc2VzRGlsKHNyYzogbnVtYmVyKTogT2JqZWN0IHtcbiAgICBsZXQgdHViZSA9IHRoaXMuY29udGVudHNbc3JjXTtcbiAgICByZXR1cm4geydkaWwtdHViZSB0ZXN0LXR1YmUtb3V0ZXInOiB0cnVlLFxuICAgICAgICAgICAgJ3R1YmUtYic6ICh0dWJlICE9PSBudWxsICYmIHR1YmUubGF3blR5cGU9PT0nQicpLFxuICAgICAgICAgICAgJ3R1YmUtayc6ICh0dWJlICE9PSBudWxsICYmIHR1YmUubGF3blR5cGU9PT0nSycpXG4gICAgICAgICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGNsYXNzZXMgZm9yIGEgZGlsdXRpb24gdHViZSBsYWJlbFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIGRpbHV0aW9uIHR1YmUgbnVtYmVyICgwLTMpXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGFwcGxpY2FibGUgY2xhc3Nlc1xuICAgKi9cbiAgZ2V0Q2xhc3Nlc0RpbExhYmVsKHNyYzogbnVtYmVyKTogT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2RpbC12YWx1ZSc6IHRydWUsXG4gICAgICAnaW52aXNpYmxlJzogIXRoaXMudmlzaWJsZUxhYmVsW3NyY11cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBvYmplY3QgY2FuIGJlIGRyb3BwZWQgaW4gZGlsdXRpb24gdHViZVxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbYWxsb3dEcm9wXWAgb2YgZGlsdXRpb24gdHViZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVzdCBkaWx1dGlvbiB0dWJlIG51bWJlciAoMC0zKVxuICAgKlxuICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259IGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYHRydWVgIG9yIGBmYWxzZWAgaWYgb2JqZWN0IGNhbiBiZSBkcm9wcGVkXG4gICAqL1xuICBjYW5Ecm9wRGlsKGRlc3Q6IG51bWJlcik6IGFueSB7XG4gIHJldHVybiAoZHJhZ0RhdGE6IGFueSkgPT4ge1xuICAgIGlmKGRyYWdEYXRhID09PSBudWxsIHx8IGRyYWdEYXRhID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYoZHJhZ0RhdGEuaGFzT3duUHJvcGVydHkoJ3NyYycpID09PSBmYWxzZSl7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgbGV0IHNyYyA9IGRyYWdEYXRhLnNyYztcbiAgICBpZihkZXN0ID09PSAwICYmIChzcmMgPT09ICdCJyB8fCBzcmMgPT09ICdLJykpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChkZXN0ID4gMCAmJiBzcmMgPT09IGRlc3QtMSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xufVxuICAvKipcbiAgICogRGF0YSB0byBiZSBkcmFnZ2VkIGZyb20gdGhlIGRpbHV0aW9uIHR1YmVcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2RyYWdEYXRhXWAgb2YgZGlsdXRpb24gdHViZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIGRpbHV0aW9uIHR1YmUgbnVtYmVyICgwLTMpXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGRhdGEgd2l0aCBkaWx1dGlvbiB0dWJlIGNvbnRlbnRzIGFuZCBzcmNcbiAgICovXG4gIGdldERhdGFEaWwoc3JjOiBudW1iZXIpOiBPYmplY3Qge1xuICAgIGlmKHRoaXMuY29udGVudHNbc3JjXSAhPT0gbnVsbClcbiAgICAgIHRoaXMuY29udGVudHNbc3JjXVsnc3JjJ10gPSBzcmM7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudHNbc3JjXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcm9wIGNvbnRlbnRzIGZyb20gYmFjdCB0dWJlL2RpbHV0aW9uIHR1YmUgaW50byBkaWx1dGlvbiB0dWJlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKG9Ecm9wU3VjY2VzcylgIG9mIGRpbHV0aW9uIHR1YmVzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgZHJhZyBldmVudCB3aXRoIGNvbnRlbnQvcGhhZ2UgZGF0YVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzdCBkZXN0IHR1YmUgbnVtYmVyICgwLTMpXG4gICAqL1xuICBkcm9wQ29udGVudHNEaWwoJGV2ZW50OiBhbnksIGRlc3Q6IG51bWJlcil7XG4gICAgbGV0IGluY29taW5nRGF0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkZXZlbnQuZHJhZ0RhdGEpKTtcbiAgICBpZihpbmNvbWluZ0RhdC5oYXNPd25Qcm9wZXJ0eSgnbGF3blR5cGUnKSAmJiBpbmNvbWluZ0RhdC5oYXNPd25Qcm9wZXJ0eSgncGhhZ2UnKSl7XG4gICAgICAvLyBkaWx1dGVcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbmNvbWluZ0RhdC5waGFnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGluY29taW5nRGF0LnBoYWdlW2ldLm51bVBoYWdlIC89IHRoaXMuZGlsdXRpb25WYWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGVudHNbZGVzdF0gPSBpbmNvbWluZ0RhdDtcbiAgICAgIGlmKGRlc3QgPCAzKXtcbiAgICAgICAgdGhpcy52aXNpYmxlTGFiZWxbZGVzdCsxXSA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBkaXNhYmxlIGRpbHV0aW9uIHZhbHVlIGNoYW5nZXNcbiAgICAgIHRoaXMuY2FuRWRpdERpbHV0aW9uID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBjbGFzc2VzIGZvciBwbGF0ZSBkZXBlbmRpbmcgaWYgZW1wdHksIGZ1bGwsIGhhcyBwaGFnZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhcHBsaWNhYmxlIGNsYXNzZXMgaW4gdGhlIGZvcm1cbiAgICogYHsnY2xhc3MnOiBib29sZWFuLCAuLi59YFxuICAgKi9cbiAgZ2V0Q2xhc3Nlc1BsYXRlKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICdjb2wtMTIgY29sLW1kLTUgcm91bmRlZC1jaXJjbGUgYm9yZGVyIGJvcmRlci1kYXJrJzogdHJ1ZSxcbiAgICAgICdiZy1zZWNvbmRhcnkgdGV4dC1saWdodCc6IHRoaXMuaXNGdWxsLFxuICAgICAgJ2JnLWxpZ2h0IHRleHQtcHJpbWFyeSc6ICghdGhpcy5pc0Z1bGwgJiYgIXRoaXMuaXNFbXB0eSksXG4gICAgICAndGV4dC1kYW5nZXInOiAodGhpcy5sYXduVHlwZSA9PT0gJ0snKSxcbiAgICAgICd0ZXh0LWluZm8nOiAodGhpcy5sYXduVHlwZSA9PT0gJ0InKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIG9iamVjdCBjYW4gYmUgZHJvcHBlZCBvbiBwbGF0ZVxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbYWxsb3dEcm9wXWAgb2YgcGxhdGVcbiAgICpcbiAgICogQHJldHVybnMge2Z1bmN0aW9ufSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGB0cnVlYCBvciBgZmFsc2VgIGlmIG9iamVjdCBjYW4gYmUgZHJvcHBlZFxuICAgKi9cbiAgY2FuRHJvcFBsYXRlKCk6YW55IHtcbiAgICByZXR1cm4gKGRyYWdEYXRhOiBhbnkpID0+IHtcbiAgICAgIGxldCBpbnZhbGlkU3JjID0gWydCJywgJ0snLCAnc21hbGwnLCAnbGFyZ2UnXVxuICAgIGlmKGRyYWdEYXRhID09PSBudWxsIHx8IGRyYWdEYXRhID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYoZHJhZ0RhdGEuaGFzT3duUHJvcGVydHkoJ3NyYycpICYmIGludmFsaWRTcmMuaW5kZXhPZihkcmFnRGF0YS5zcmMpID09PSAtMSl7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcm9wIHR1YmUgY29udGVudHMgb24gdGhlIHBsYXRlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKG9uRHJvcFN1Y2Nlc3MpYCBvZiBwbGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gJGV2ZW50IGRyYWcgZXZlbnQgd2l0aCBjb250ZW50c1xuICAgKi9cbiAgZHJvcE9uUGxhdGUoJGV2ZW50OiBhbnkpe1xuICAgIGxldCBjb250ZW50cyA9ICRldmVudC5kcmFnRGF0YTtcbiAgICAvLyBjaGVjayB3ZSBoYXZlIGV2ZXJ5dGhpbmcgd2UgbmVlZFxuICAgIGlmIChjb250ZW50cy5oYXNPd25Qcm9wZXJ0eSgnbGF3blR5cGUnKSA9PT0gZmFsc2Upe1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnVGhlcmUgaXMgbm8gYmFjdGVyaWEgaW4gdGhlIHR1YmUgZm9yIHBoYWdlIHRvIGdyb3cgb24uJ1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29udGVudHMuaGFzT3duUHJvcGVydHkoJ3BoYWdlJykgPT09IGZhbHNlIHx8IGNvbnRlbnRzLnBoYWdlLmxlbmd0aCA9PT0gMCl7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdUaGVyZSBpcyBubyBwaGFnZSBpbiB0aGUgdHViZS4nXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKGNvbnRlbnRzLnNyYyA9PT0gJ0InIHx8IGNvbnRlbnRzLnNyYyA9PT0gJ0snKXtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0RvIG5vdCBwbGF0ZSBkaXJlY3RseSBmcm9tIGJhY3RlcmlhIHR1YmUnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBnYXRoZXIgZGF0YVxuICAgIHRoaXMubGF3blR5cGUgPSBjb250ZW50cy5sYXduVHlwZTtcbiAgICBsZXQgcGhhZ2UxID0gY29udGVudHMucGhhZ2VbMF07XG4gICAgbGV0IHBoYWdlMiA9IG51bGw7XG4gICAgaWYoY29udGVudHMucGhhZ2UubGVuZ3RoID09PSAyKXtcbiAgICAgIHBoYWdlMiA9IGNvbnRlbnRzLnBoYWdlWzFdO1xuICAgIH1cbiAgICAvLyBwZXJmb3JtIHRoZSBjcm9zc1xuICAgIHRoaXMuX3BlcmZvcm1Dcm9zcyh0aGlzLmxhd25UeXBlLCBwaGFnZTEsIHBoYWdlMik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgdGhlIGV4cGVyaW1lbnQgc2VydmljZSB0byBwZXJmb3JtIHRoZSBjcm9zcyBhbmQgc2F2ZXNcbiAgICogdmFyaWFibGVzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYXduVHlwZSBiYWN0ZXJpYSB1c2VkLCBgXCJCXCJgIG9yIGBcIktcImBcbiAgICogQHBhcmFtIHthbnl9IHBoYWdlMSBmaXJzdCBwaGFnZSBpbiBjcm9zc1xuICAgKiBAcGFyYW0ge2FueX0gcGhhZ2UyIHNlY29uZCBwaGFnZSBpbiBjcm9zcywgb3IgbnVsbFxuICAgKi9cbiAgX3BlcmZvcm1Dcm9zcyhsYXduVHlwZTogc3RyaW5nLCBwaGFnZTE6IEV4cGVyaW1lbnRQaGFnZSwgcGhhZ2UyOiBFeHBlcmltZW50UGhhZ2Upe1xuICAgIGxldCBuZXdQbGF0ZTogUGxhdGVJbnB1dCA9IHtcbiAgICAgIGxhd25UeXBlOiBsYXduVHlwZSxcbiAgICAgIHBoYWdlMTogcGhhZ2UxLFxuICAgICAgcGhhZ2UyOiBwaGFnZTIsXG4gICAgICBzcGVjaWFsczoge30sXG4gICAgICBsb2NhdGlvbjogJ2xhYicsXG4gICAgICBzY2VuYXJpb0RhdGE6IHRoaXMuc2NlbmFyaW9EZXRhaWxzLFxuICAgICAgY2FwYWNpdHk6IFNjZW5hcmlvR2xvYmFscy5wbGF0ZUNhcGFjaXR5XG4gICAgfVxuICAgIHRoaXMuX2V4cGVyaW1lbnRTZXJ2aWNlLmNyZWF0ZVBsYXRlKG5ld1BsYXRlKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuLy8gICAgICBjb25zb2xlLmxvZygnZ2Vub3R5cGVzOicsIHJlcy5nZW5vdHlwZXMpO1xuLy8gICAgICBjb25zb2xlLmxvZygnc21hbGwgcGxhcXVlOicsIHJlcy5zbWFsbFBsYXF1ZSk7XG4vLyAgICAgIGNvbnNvbGUubG9nKCdsYXJnZSBwbGFxdWU6JywgcmVzLmxhcmdlUGxhcXVlKTtcbiAgICAgIHRoaXMuaXNGdWxsID0gcmVzLmZ1bGw7XG4gICAgICB0aGlzLnNtYWxsUGxhcXVlTGlzdCA9IHJlcy5zbWFsbFBsYXF1ZTtcbiAgICAgIHRoaXMubGFyZ2VQbGFxdWVMaXN0ID0gcmVzLmxhcmdlUGxhcXVlO1xuICAgICAgdGhpcy5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICB0aGlzLmdlbm90eXBlcyA9IHJlcy5nZW5vdHlwZXM7XG4gICAgICB0aGlzLnBsYXRlUGFyZW50cyA9IHJlcy5wYXJlbnRzO1xuICAgICAgLy8gc3VjY2Vzc1xuICAgIH0sIChlcnIpPT57XG4gICAgICAvLyBlcnJvclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHBsYXF1ZSBmcm9tIHBsYXRlIGNhbiBiZSBkcmFnZ2VkXG4gICAqXG4gICAqIENhbGxlZCBmb3IgYFtkcmFnRW5hYmxlZF1gIG9mIHBsYXF1ZXMgb24gcGxhdGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBgXCJzbWFsbFwiYCBvciBgXCJsYXJnZVwiYCBwbGFxdWVcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGVyZSBhcmUgc3RpbGwgcGxhcXVlcyBvZiB0aGF0IHNpemVcbiAgICovXG4gIGNhbkRyYWdQbGF0ZShzcmM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmKHNyYyA9PT0gJ3NtYWxsJylcbiAgICAgIHJldHVybiB0aGlzLnNtYWxsUGxhcXVlTGlzdC5sZW5ndGggPiAwO1xuICAgIGVsc2UgLy8gYmlnXG4gICAgICByZXR1cm4gdGhpcy5sYXJnZVBsYXF1ZUxpc3QubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQaWNrIGEgcGxhcXVlIGZyb20gdGhlIHBsYXRlIHRvIHNhdmUgdG8gdGhlIGZyaWRnZVxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbZHJhZ0RhdGFdYCBvZiBwbGFxdWUgb24gcGxhdGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBgXCJzbWFsbFwiYCBvciBgXCJsYXJnZVwiYCBwbGFxdWVcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gcGhhZ2UgZ2Vub3R5cGUgZGF0YVxuICAgKi9cbiAgZ2V0UGhhZ2VQbGF0ZShzcmM6IHN0cmluZyk6IEdlbm90eXBlUGhhZ2V7XG4gICAgbGV0IHRtcExpc3QgPSAoc3JjID09PSAnc21hbGwnID8gdGhpcy5zbWFsbFBsYXF1ZUxpc3QgOiB0aGlzLmxhcmdlUGxhcXVlTGlzdCk7XG4gICAgaWYodG1wTGlzdC5sZW5ndGggPT09IDApe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBwbGFxdWUgPSB0bXBMaXN0WzBdO1xuICAgIGxldCBnZW5vdHlwZUluZGV4ID0gcGxhcXVlO1xuICAgIGxldCBwaGFnZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5nZW5vdHlwZXNbZ2Vub3R5cGVJbmRleF0pKTtcbiAgICBwaGFnZVsnc3JjJ10gPSBzcmM7XG4gICAgcGhhZ2VbJ3BhcmVudHMnXSA9IHRoaXMucGxhdGVQYXJlbnRzO1xuICAgIHJldHVybiBwaGFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHN1Y2Nlc3NmdWxseSBkcmFnZ2VkIHBoYWdlIGZyb20gYXZhaWxhYmxlIHBoYWdlIGxpc3RcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAob25EcmFnU3VjY2VzcylgIG9mIHBsYXF1ZSBvbiBwbGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gJGV2ZW50IGRyYWcgZXZlbnQgd2l0aCBwaGFnZSBzYXZlZFxuICAgKi9cbiAgYWRkZWRUb0ZyaWRnZSgkZXZlbnQpIHtcbiAgICBsZXQgc3RyYWluID0gJGV2ZW50LmRyYWdEYXRhO1xuICAgIGxldCBzcmMgPSBzdHJhaW4uc3JjO1xuICAgIGlmKHNyYyA9PT0gJ3NtYWxsJyl7XG4gICAgICB0aGlzLnNtYWxsUGxhcXVlTGlzdC5zaGlmdCgpO1xuICAgIH0gZWxzZSB7IC8vIGxhcmdlXG4gICAgICB0aGlzLmxhcmdlUGxhcXVlTGlzdC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgcGhhZ2UgZnJvbSB0aGUgcGxhdGUgd2l0aG91dCBhZGRpbmcgaXQgdG8gdGhlIGZyaWRnZVxuICAgKlxuICAgKiBDYWxsZWQgb24gYChkYmxjbGljaylgIG9mIHBsYXF1ZSBvbiB0aGUgcGxhdGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBzb3VyY2Ugb2YgcGxhcXVlIGNsaWNrZWQ7IGBcImxhcmdlXCJgIG9yIGBcInNtYWxsXCJgXG4gICAqL1xuICBkZWxQaGFnZVBsYXRlKHNyYzogc3RyaW5nKXtcbiAgICBpZihzcmMgPT09ICdzbWFsbCcpe1xuICAgICAgdGhpcy5zbWFsbFBsYXF1ZUxpc3Quc2hpZnQoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMubGFyZ2VQbGFxdWVMaXN0LnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhYi1yb29tL2xhYi1yb29tLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFNjZW5hcmlvR2xvYmFscyB9IGZyb20gJy4uLy4uL3NjZW5hcmlvLmdsb2JhbHMnO1xuaW1wb3J0IHsgRXhwZXJpbWVudFNlcnZpY2UgfSBmcm9tICcuLi9leHBlcmltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2NlbmFyaW8uc2VydmljZSdcbmltcG9ydCB7IEZyaWRnZVBoYWdlLCBFeHBlcmltZW50UGhhZ2UsIFBsZXhlcklucHV0IH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgdGhlIG11bHRpcGxleGVyIHJvb20gd2hpY2ggYWxsb3dzIGZvclxuICogTnhNIHBoYWdlIGNyb3NzZXMgYXQgb25jZVxuICpcbiAqIE9mZnNwcmluZyBwaGFnZSBjYW5ub3QgYmUgc2F2ZWQgdG8gdGhlIGZyaWRnZSwgYnV0IHRoZSB1c2VyXG4gKiBnZXRzIGEgY291bnQgb2Ygc21hbGwgYW5kIGxhcmdlIHBsYXF1ZSBmb3IgZWFjaCBjcm9zc1xuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BsZXhlci1yb29tJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9wbGV4ZXItcm9vbS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vcGxleGVyLXJvb20uc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIFBsZXhlclJvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIEUuIGNvbGkgc3RyYWluIGNob3NlbiB0byBwbGF0ZSBvblxuICAgKi9cbiAgcHJpdmF0ZSBjaG9zZW5CYWN0OiBzdHJpbmcgPSAnbm9uZSc7XG4gIC8qKlxuICAgKiBWYWx1ZSB0byBkaWx1dGUgbnVtYmVyIG9mIHBoYWdlIGJ5XG4gICAqL1xuICBwcml2YXRlIGRpbHV0aW9uVmFsdWU6IG51bWJlciA9IFNjZW5hcmlvR2xvYmFscy5kZWZhdWx0UGxleGVyRGlsdXRpb247XG4gIC8qKlxuICAgKiBMb2NhdGlvbiBjYWxsIHVzZWQgYnkgYmFja2VuZFxuICAgKi9cbiAgcHJpdmF0ZSBwbGV4ZXJUeXBlOiBzdHJpbmcgPSAncGxleGVyJztcbiAgLyoqXG4gICAqIFNjZW5hcmlvIGRldGFpbHMgKGZyb20gZnJpZGdlKSBuZWVkZWQgdG8gcGVyZm9ybSB0aGUgcGxleGVyXG4gICAqL1xuICBwcml2YXRlIHNjZW5hcmlvRGV0YWlsczogc3RyaW5nO1xuICAvKipcbiAgICogSW5mbyBmb3IgcGhhZ2UgYWxvbmcgdGhlIHJvd3NcbiAgICovXG4gIHByaXZhdGUgcm93czogRXhwZXJpbWVudFBoYWdlW107XG4gIC8qKlxuICAgKiBJbmZvIGZvciBwaGFnZSBhbG9uZyB0aGUgY29sdW1uc1xuICAgKi9cbiAgcHJpdmF0ZSBjb2xzOiBFeHBlcmltZW50UGhhZ2VbXTtcbiAgLyoqXG4gICAqIEN1cnJlbnQgbnVtYmVyIG9mIHN0cmFpbnMgaW4gdGhlIHJvd3MgYW5kIGNvbHVtbnMsIHJlc3BlY3RpdmVseVxuICAgKi9cbiAgcHJpdmF0ZSBuU3RyYWluczogbnVtYmVyW10gPSBbMCwwXTtcbiAgLyoqXG4gICAqIFRoZSBwbGV4ZXIgcmVzdWx0cztcbiAgICogSXMgT2JqZWN0IGZvcm0gb2YgYSAyLUQgYXJyYXkgd2hlcmUgZWFjaCBjZWxsIGhhcyB7c21hbGxQbGFxdWU6ICMsIGxhcmdlUGxhcXVlOiAjfVxuICAgKi9cbiAgcHJpdmF0ZSByZXN1bHRzOiBPYmplY3Q7XG4gIC8qKlxuICAgKiBQb3NzaWJsZSBiYWNrZW5kIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIFNjZW5hcmlvIHNlcnZpY2Ugc3Vic2NyaXB0aW9uIGZvciBzY2VuYXJpbyBkZXRhaWxzXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogRXhwZXJpbWVudCBzZXJ2aWNlIHN1YnNjcmlwdGlvbiB0byBwcmVmb3JtIHBsZXhlclxuICAgKi9cbiAgcHJpdmF0ZSBleHBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgLyoqXG4gICAqIENvbnRyb2wgdGhlIGRpbHV0aW9uIGZhY3RvciB0byBhIG1pbi9tYXggdmFsdWVcbiAgICovXG4gIHByaXZhdGUgZGlsdXRpb25Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgLyoqXG4gICAqIC0gQ1NTIGNsYXNzZXMgZm9yIHRoZSBzdWJtaXQgc3Bpbm5lclxuICAgKiAtIFZpc2libGUgYWZ0ZXIgc3VibWl0IGJ1dHRvbiBoaXQgYW5kIGJlZm9yZSByZXN1bHRzIHJlY2VpdmVkXG4gICAqL1xuICBwcml2YXRlIF9zcGlubmVyQ2xhc3M6IE9iamVjdCA9IHtcbiAgICAnaGlkaW5nJzogdHJ1ZSxcbiAgICAnc3Bpbm5pbmcnOiBmYWxzZSxcbiAgICAnb2kgb2ktbG9vcC1jaXJjdWxhcic6IHRydWVcbiAgfTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBkYXRhIGFuZCBzZXQgZGlsdXRpb24gY29udHJvbFxuICAgKlxuICAgKiBAcGFyYW0ge0V4cGVyaW1lbnRTZXJ2aWNlfSBfZXhwZXJpbWVudFNlcnZpY2UgdXNlZCB0byBnZW5lcmF0ZSB0aGUgcmVzdWx0cyBvZiB0aGUgcGxleGVyXG4gICAqIEBwYXJhbSB7U2NlbmFyaW9TZXJ2aWNlfSBfc2NlbmFyaW9TZXJ2aWNlIHVzZWQgdG8gZ2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzIG5lZWRlZCB0byBwZXJmb3JtIHBsZXhlclxuICAgKi9cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgX2V4cGVyaW1lbnRTZXJ2aWNlOiBFeHBlcmltZW50U2VydmljZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKXtcbiAgICB0aGlzLmRpbHV0aW9uQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5taW4oMC4xKSwgVmFsaWRhdG9ycy5tYXgoMTAwKV0pO1xuICAgIHRoaXMuX2NsZWFyRGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudCBhbmQgZ2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX3NjZW5hcmlvU2VydmljZS5nZXRTY2VuYXJpb0RldGFpbHNcbiAgICAgIC5zdWJzY3JpYmUoKGRldGFpbHMpID0+IHRoaXMuc2NlbmFyaW9EZXRhaWxzID0gZGV0YWlscyk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdG9yeSB0aGUgY29tcG9uZW50IGFuZCB1bnN1YnNjcmliZSBhcyBuZWVkZWRcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb24pXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIGlmKHRoaXMuZXhwU3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuZXhwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGFsaXplL2NsZWFyIHJvdyBhbmQgY29sdW1uIHBoYWdlXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NsZWFyRGF0YSgpe1xuICAgIHRoaXMucm93cyA9IFtdO1xuICAgIHRoaXMuY29scyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA4OyBpKyspe1xuICAgICAgdGhpcy5yb3dzLnB1c2gobnVsbCk7XG4gICAgICB0aGlzLmNvbHMucHVzaChudWxsKTtcbiAgICB9XG4gICAgdGhpcy5uU3RyYWlucyA9IFswLDBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBwbGV4ZXIgYW5kIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiByZXNldCBidXR0b25cbiAgICovXG4gIHJlc2V0KCl7XG4gICAgdGhpcy5jaG9zZW5CYWN0ID0gJ25vbmUnO1xuICAgIHRoaXMuZGlsdXRpb25WYWx1ZSA9IFNjZW5hcmlvR2xvYmFscy5kZWZhdWx0UGxleGVyRGlsdXRpb247XG4gICAgdGhpcy5wbGV4ZXJUeXBlID0gJ3BsZXhlcic7XG4gICAgdGhpcy5fY2xlYXJEYXRhKCk7XG4gICAgdGhpcy5yZXN1bHRzID0ge307XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICB0aGlzLl9zZXRTcGlubmVyQ2xhc3MoJ3Jlc2V0Jyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBDU1MgY2xhc3NlcyBmb3IgZWFjaCBwaGFnZSBidXR0b24gYmFzZWQgb24gd2hpY2hcbiAgICogcGhhZ2UgdHlwZSBpcyBzZXRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBidXR0b24gdG8gZ2V0IGNsYXNzZXMgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGNsYXNzZXMgd2hpY2ggYXBwbHkgdG8gdGhpcyBidXR0b24gaW4gdGhlXG4gICAqIGZvcm0gYHsnY2xhc3MnOmJvb2xlYW4sICdjbGFzczInOiBib29sZWFufWBcbiAgICovXG4gIGdldFR1YmVDbGFzc2VzKHNyYzogc3RyaW5nKTogT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2J0biBib3JkZXIgYm9yZGVyLXNlY29uZGFyeSc6IHRydWUsXG4gICAgICAnY2hvc2VuJzogKHRoaXMuY2hvc2VuQmFjdCA9PT0gc3JjKSxcbiAgICAgICdidG4tb3V0bGluZS1pbmZvJzogKHNyYz09PSdCJyAmJiB0aGlzLmNob3NlbkJhY3QgIT09IHNyYyksXG4gICAgICAnYnRuLWluZm8nOiAoc3JjPT09J0InICYmIHRoaXMuY2hvc2VuQmFjdCA9PT0gc3JjKSxcbiAgICAgICdidG4tb3V0bGluZS1kYW5nZXInOiAoc3JjPT09J0snICYmIHRoaXMuY2hvc2VuQmFjdCAhPT0gc3JjKSxcbiAgICAgICdidG4tZGFuZ2VyJzogKHNyYz09PSdLJyAmJiB0aGlzLmNob3NlbkJhY3QgPT09IHNyYylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHVzZXIgaXMgYWJsZSB0byBzdWJtaXQgcGxleGVyIGJ5IGRpc2FibGluZ1xuICAgKiB0aGUgc3VibWl0IGJ1dHRvbiB3aGVuIHVuYWJsZSB0byBzdWJtaXRcbiAgICpcbiAgICogQWJsZSB0byBzdWJtaXQgb25seSB3aGVuOlxuICAgKiAxLiBiYWN0ZXJpYSBjaG9zZW5cbiAgICogMi4gYXQgbGVhc3Qgb25lIHBoYWdlIGluIGVhY2ggcm93IGFuZCBjb2x1bW5cbiAgICogMy4gZGlsdXRpb24gdmFsdWUgaXMgdmFsaWQsIEFORFxuICAgKiA0LiBub3Qgc3RpbGwgd2FpdGluZyBmb3IgcHJldmlvdXMgc3VibWl0IHJlc3BvbnNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiAtIGB0cnVlYCBpZiB1c2VyIGNhbiBzdWJtaXQgKGFsbCBjb25kaXRpb25zIG1ldClcbiAgICogLSBgZmFsc2VgIG90aGVyd2lzZVxuICAgKi9cbiAgc3VibWl0RGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cbiAgICAvLyBpZiBzcGlubmVyIGlzIHNwaW5uaW5nLCBkaXNhYmxlXG4gICAgaWYodGhpcy5fc3Bpbm5lckNsYXNzWydzcGlubmluZyddKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBkZXRlcm1pbmUgaWYgZGlzYWJsZWRcbiAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLmNob3NlbkJhY3QgPT09ICdub25lJztcbiAgICAvLyBjaGVjayB0aGF0IGF0IGxlYXN0IDEgcGhhZ2UgYWRkZWQgZm9yIHJvdy9jb2xcbiAgICBpZih0aGlzLm5TdHJhaW5zWzBdID09PSAwIHx8IHRoaXMublN0cmFpbnNbMV0gPT09IDApe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpbHV0aW9uVmFsdWUgPCAwLjEgfHwgdGhpcy5kaWx1dGlvblZhbHVlID4gMjApe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIG51bGwgZWxlbWVudHMgZnJvbSBpbnB1dCBhcnJheSBhbmQgZGlsdXRlcyB0aGVcbiAgICogbnVtYmVyIG9mIHBoYWdlXG4gICAqXG4gICAqIFVzZWQgYmVmb3JlIHN1Ym1pdHRpbmcgcm93L2NvbCBwaGFnZSB0byBzZXJ2aWNlXG4gICAqXG4gICAqIEBwYXJhbSB7RXhwZXJpbWVudFBoYWdlW119IGluRGF0YSAtIGlucHV0IGFycmF5IHRvIGJlIGNsZWFuZWRcbiAgICogLSBjYW4gY29udGFpbiBudWxsIHZhbHVlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7RXhwZXJpbWVudFBoYWdlW119XG4gICAqIC0gY2xlYW5lZCBhcnJheVxuICAgKiAtIGRvZXMgbm90IGNvbnRhaW4gbnVsbCB2YWx1ZXNcbiAgICovXG4gIHByb3RlY3RlZCBfY2xlYW5BcnJheXMoaW5EYXRhOiBFeHBlcmltZW50UGhhZ2VbXSk6IEV4cGVyaW1lbnRQaGFnZVtde1xuICAgIHZhciBjbGVhbiA9IGluRGF0YS5maWx0ZXIoKGVsdCk9PntcbiAgICAgIHJldHVybiBlbHQgIT09IG51bGxcbiAgICB9KS5tYXAoKGVsdCk9PntcbiAgICAgICAgcmV0dXJuIHtpZDogZWx0LmlkLFxuICAgICAgICAgICAgICAgIHN0cmFpbk51bTogZWx0LnN0cmFpbk51bSxcbiAgICAgICAgICAgICAgIG51bVBoYWdlOiBlbHQubnVtUGhhZ2UgLyAodGhpcy5kaWx1dGlvblZhbHVlICogMTAwMClcbiAgICAgICAgICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xlYW5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZvcm1hdHMgdGhlIHJlc3VsdHMgdG8gdGFrZSBpbnRvIGFjY291bnQgb2YgbnVsbCBpbiB0aGUgcm93cy9jb2xzXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXN1bHRzIC0gcmVzdWx0cyBvZiBjb21wdXRpbmcgdGhlIHBsZXhlclxuICAgKiAtIGRvZXMgbm90IGNvbnRhaW4gbnVsbCB2YWx1ZXNcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICogLSB1cGRhdGVkIHJlc3VsdHNcbiAgICogLSBjYW4gY29udGFpbiBudWxsIHZhbHVlc1xuICAgKi9cbiAgcHJvdGVjdGVkIF91bkNsZWFuUmVzdWx0cyhyZXN1bHRzOiBPYmplY3QpOk9iamVjdHtcbiAgICBsZXQgb3V0ID0ge30sXG4gICAgICAgIG5ld0NvbHMgPSB7fTtcbiAgICBsZXQgY3VyUm93ID0gMCxcbiAgICAgICAgY3VyQ29sID0gMDtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzLmxlbmd0aDsgaisrKXtcbiAgICAgIGxldCBjb2wgPSB0aGlzLmNvbHNbal07XG4gICAgICBpZihjb2wgIT09IG51bGwpe1xuICAgICAgICBuZXdDb2xzW2N1ckNvbF0gPSBqO1xuICAgICAgICBjdXJDb2wgKys7XG4gICAgICB9XG4gICAgfSAvLyBlbmQgZm9yIHRoaXMuY29sc1xuICAgIGZvcihsZXQgaSBpbiB0aGlzLnJvd3Mpe1xuICAgICAgaWYodGhpcy5yb3dzW2ldICE9PSBudWxsKXtcbiAgICAgICAgbGV0IHJvdyA9IHJlc3VsdHNbY3VyUm93XTtcbiAgICAgICAgbGV0IHRtcCA9IHt9O1xuICAgICAgICBmb3IobGV0IGogaW4gcm93KXtcbiAgICAgICAgICBsZXQgbmV3Q29sID0gbmV3Q29sc1tqXTtcbiAgICAgICAgICB0bXBbbmV3Q29sXSA9IHJvd1tqXTtcbiAgICAgICAgfVxuICAgICAgICBvdXRbaV0gPSB0bXA7XG4gICAgICAgIGN1clJvdysrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHNwaW5uZXIgQ1NTIGNsYXNzZXMgYmFzZWQgb24gdGhlIGlucHV0IHN0YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdDbGFzcyB1cGRhdGVkIHN0YXRlIGZvciB0aGUgc3Bpbm5lclxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0U3Bpbm5lckNsYXNzKG5ld0NsYXNzOiBzdHJpbmcpe1xuICAgIHRoaXMuX3NwaW5uZXJDbGFzc1snaGlkaW5nJ10gPSAobmV3Q2xhc3MgPT09IFwic3Bpbm5pbmdcIiA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgIHRoaXMuX3NwaW5uZXJDbGFzc1snc3Bpbm5pbmcnXSA9IChuZXdDbGFzcyA9PT0gXCJzcGlubmluZ1wiID8gdHJ1ZSA6IGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgQ1NTIGNsYXNzZXMgZm9yIHRoZSBzcGlubmVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IENTUyBjbGFzc2VzIGZvciB0aGUgc3Bpbm5lciBpbiB0aGUgZm9ybVxuICAgKiBgeydjbGFzcyc6IGJvb2xlYW4sIC4uLn1gXG4gICAqL1xuICBnZXRTcGlubmVyQ2xhc3MoKXtcbiAgICByZXR1cm4gdGhpcy5fc3Bpbm5lckNsYXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZXhwZXJpbWVudCBkYXRhIGFuZCBzdWJtaXRzIHRvIHNlcnZpY2UgdG8gZ2V0IHJlc3VsdHNcbiAgICogb2YgdGhlIG11bHRpcGxleGVyXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2Ygc3VibWl0IGJ1dHRvblxuICAgKi9cbiAgcGVyZm9ybVBsZXhlcigpe1xuICAgIC8vIHNldCB0aGUgc3Bpbm5lclxuICAgIHRoaXMuX3NldFNwaW5uZXJDbGFzcygnc3Bpbm5pbmcnKTtcbiAgICAvLyBjbGVhbiB0aGUgcm93IGFuZCBjb2x1bW4gYXJyYXlzXG4gICAgbGV0IHRtcFJvd3MgPSB0aGlzLnJvd3M7XG4gICAgbGV0IGNsZWFuUm93cyA9IHRoaXMuX2NsZWFuQXJyYXlzKHRtcFJvd3MpO1xuICAgIGxldCBjbGVhbkNvbHMgPSB0aGlzLl9jbGVhbkFycmF5cyh0aGlzLmNvbHMpO1xuICAgIC8vIGdhdGhlciBkYXRhXG4gICAgdmFyIGRhdGE6IFBsZXhlcklucHV0ID0ge1xuICAgICAgbGF3blR5cGU6IHRoaXMuY2hvc2VuQmFjdCxcbiAgICAgIHJvd1BoYWdlOiBjbGVhblJvd3MsXG4gICAgICBjb2xQaGFnZTogY2xlYW5Db2xzLFxuICAgICAgc3BlY2lhbHM6IHt9LFxuICAgICAgbG9jYXRpb246IHRoaXMucGxleGVyVHlwZSxcbiAgICAgIHNjZW5hcmlvRGF0YTogdGhpcy5zY2VuYXJpb0RldGFpbHMsXG4gICAgICBjYXBhY2l0eTogU2NlbmFyaW9HbG9iYWxzLnBsZXhlckNhcGFjaXR5XG4gICAgfTtcbiAgICAvLyB1c2UgdGhlIHNlcnZpY2VcbiAgICB0aGlzLmV4cFN1YnNjcmlwdGlvbiA9IHRoaXMuX2V4cGVyaW1lbnRTZXJ2aWNlLnBlcmZvcm1QbGV4ZXIoZGF0YSlcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICB0aGlzLnJlc3VsdHMgPSB0aGlzLl91bkNsZWFuUmVzdWx0cyhyZXMpO1xuICAgICAgdGhpcy5fc2V0U3Bpbm5lckNsYXNzKCdoaWRpbmcnKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICB0aGlzLl9zZXRTcGlubmVyQ2xhc3MoJ2hpZGluZycpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBwaGFnZSB0byByb3cgb3IgY29sdW1uIG9mIHBsZXhlclxuICAgKiB3aGVuIHN1Y2Nlc3NmdWwsIHVwZGF0ZXMgdGhlIHJvdy9jb2wgcGhhZ2UgY291bnRzXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKG9uRHJvcFN1Y2Nlc3MpYCBvZiByb3cvY29sIGhlYWRlclxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gJGV2ZW50IGRyYWdFdmVudDsgaW5jbHVkZXMgcGhhZ2UgZGF0YVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyIGRpcmVjdGlvbjsgYWRkIHRvIGByb3dgIG9yIGBjb2xgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcG90IHBvc2l0aW9uIHRvIGFkZCBwaGFnZVxuICAgKi9cbiAgYWRkUGhhZ2UoJGV2ZW50OiBhbnksIGRpcjogc3RyaW5nLCBzcG90OiBudW1iZXIpe1xuICAgIGxldCBmcGhhZ2U6IEZyaWRnZVBoYWdlID0gJGV2ZW50LmRyYWdEYXRhO1xuICAgIGxldCBwaGFnZTogRXhwZXJpbWVudFBoYWdlID0ge1xuICAgICAgaWQ6IGZwaGFnZS5pZCxcbiAgICAgIHN0cmFpbk51bTogZnBoYWdlLnN0cmFpbk51bSxcbiAgICAgIG51bVBoYWdlOiBTY2VuYXJpb0dsb2JhbHMubnVtUGhhZ2VcbiAgICB9XG4gICAgLy8gYWRkIHRvIHJvd1xuICAgIGlmKGRpciA9PT0gJ3JvdycgJiYgc3BvdCA8IDgpe1xuICAgICAgdGhpcy5yb3dzW3Nwb3RdID0gcGhhZ2U7XG4gICAgICB0aGlzLm5TdHJhaW5zWzBdID0gdGhpcy5yb3dzLmZpbHRlcihmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWUgIT09IG51bGwgfSkubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoc3BvdCA8IDgpIHsgLy8gY29sdW1uXG4gICAgICB0aGlzLmNvbHNbc3BvdF0gPSBwaGFnZTtcbiAgICAgIHRoaXMublN0cmFpbnNbMV0gPSB0aGlzLmNvbHMuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZSAhPT0gbnVsbCB9KS5sZW5ndGg7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvU2VydmljZSB9IGZyb20gJy4uLy4uL3NjZW5hcmlvLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW9HbG9iYWxzIH0gZnJvbSAnLi4vLi4vc2NlbmFyaW8uZ2xvYmFscyc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIFRoaXMgcm9vbSBpcyB1c2VkIGZvciBzdHVkZW50cyB0byBzdWJtaXQgdGhlaXIgZGVsZXRpb24gZ3Vlc3Nlc1xuICogZm9yIHBoYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kZWwtcm9vbScsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbW9kZWwtcm9vbS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbW9kZWwtcm9vbS5zdHlsZS5jc3MnKV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNb2RlbFJvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIEN1cnJlbnQgdXNlciBndWVzc2VzIGFzIG9iamVjdFxuICAgKi9cbiAgcHJpdmF0ZSBndWVzc2VzOiBhbnk7XG4gIC8qKlxuICAgKiBBcnJheSBvZiBzdHJhaW4gbnVtYmVycyBpbmNsdWRlZFxuICAgKi9cbiAgcHJpdmF0ZSBrZXlzOiBudW1iZXJbXTtcbiAgLyoqXG4gICAqXG4gICAqL1xuICBwcml2YXRlIGdlbmVBcjogbnVtYmVyW107XG4gIC8qKlxuICAgKiBTaXplIG9mIGVhY2ggYmxvY2tcbiAgICovXG4gIHByaXZhdGUgc3RlcFNpemU6IG51bWJlcjtcbiAgLyoqXG4gICAqIFNjZW5hcmlvIGNvZGVcbiAgICovXG4gIHByaXZhdGUgc2NlbmFyaW9JZDogc3RyaW5nO1xuICAvKipcbiAgICogVXNlciBpZFxuICAgKi9cbiAgcHJpdmF0ZSB1c2VySWQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFBvdGVudGlhbCBiYWNrZW5kIGVycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBDU1Mgd2lkdGggb2YgZWFjaCBibG9jayBkZXBlbmRlbnQgb24gbGVuZ3RoIG9mIGdlbmUgYW5kIHN0ZXAgc2l6ZVxuICAgKi9cbiAgcHJpdmF0ZSBfd2lkdGg6IHN0cmluZztcbiAgLyoqXG4gICAqIEJvb2xlYW4gc3RhdGUgdmFyaWFibGUgdXNlZCB0byBtYWtlIHVuc3Vic2NyaWJpbmcgZnJvbVxuICAgKiBtdWx0aXBsZSBzZXJ2aWNlcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogU2NlbmFyaW9TZXJ2aWNlKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICB0aGlzLnN0ZXBTaXplID0gU2NlbmFyaW9HbG9iYWxzLmRlbGV0aW9uR3Vlc3NMZW5ndGg7XG4gICAgdGhpcy5nZW5lQXIgPSBbXTtcbiAgICBsZXQgbkJsb2NrczogbnVtYmVyID0gTWF0aC5jZWlsKFNjZW5hcmlvR2xvYmFscy5nZW5lTGVuZ3RoL3RoaXMuc3RlcFNpemUpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuQmxvY2tzOyBpKyspe1xuICAgICAgdGhpcy5nZW5lQXIucHVzaChpKTtcbiAgICB9XG4gICAgdGhpcy5fd2lkdGggPSAoMTAwIC8gbkJsb2NrcykudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnRcbiAgICogMS4gR2V0IHVzZXIgaWRcbiAgICogMi4gR2V0IHRoZSBzY2VuYXJpbyBpZCBmcm9tIHBhcmVudCBVUkxcbiAgICogMy4gR2V0IHVzZXIgZ3Vlc3NlcyBmcm9tIHNjZW5hcmlvIHNlcnZpY2UgKHNldCBieSBmcmlkZ2UpXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIGxldCB1ID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcbiAgICBpZih1KXtcbiAgICAgIHRoaXMudXNlcklkID0gdS5pZDtcbiAgICB9XG4gICAgdGhpcy5zY2VuYXJpb0lkID0gdGhpcy5fcm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc2NlbklkJyk7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmdldEd1ZXNzZXNcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChkZWxzKSA9PiB7XG4gICAgICB0aGlzLmd1ZXNzZXMgPSBkZWxzO1xuXG4gICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyhkZWxzKS5tYXAoKGspPT4ge3JldHVybiBOdW1iZXIucGFyc2VJbnQoayk7fSk7XG4gICAgICBpZih0aGlzLmtleXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnTm8gcGhhZ2UgYXZhaWxhYmxlIGZvciBtb2RlbGxpbmcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgfVxuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBjb21wb25lbnQgYnkgdW5zdWJzY3JpYmluZ1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBDU1MgY2xhc3NlcyBmb3IgYSBzdHJhaW4gZ3Vlc3MgYmxvY2tcbiAgICogQmxvY2sgaW5kaWNhdGVzIHdoZWF0ZXIgdXNlciB0aGlua3MgdGhhdCBzZWN0aW9uIG9mIHRoZSBjaHJvbW9zb21lXG4gICAqIGlzIGRlbGV0ZWQgaW4gdGhlIHN0cmFpblxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RyYWluIC0gc3RyYWluIG51bWJlciAobWF0Y2hlcyBudW1tYmVyIGlzIGZyaWRnZSlcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBvcyAtIGJsb2NrIGluZGV4XG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGFwcGxpY2FibGUgQ1NTIGNsYXNzZXMgaW4gdGhlIGZvcm1cbiAgICogYHsnY2xhc3MnOiBib29sZWFuLCAuLi59YFxuICAgKi9cbiAgZ2V0QmxvY2tDbGFzcyhzdHJhaW46IG51bWJlciwgcG9zOiBudW1iZXIpe1xuICAgIGxldCBwb3NHdWVzcyA9IHRoaXMuZ3Vlc3Nlc1tzdHJhaW5dW3Bvc107XG4gICAgcmV0dXJuIHtcbiAgICAgICdndWVzcy1ibG9jayBidG4gcC0wJzogdHJ1ZSxcbiAgICAgICdidG4tb3V0bGluZS1zZWNvbmRhcnknOiAhcG9zR3Vlc3MsIC8vIGluYWN0aXZlXG4gICAgICAnYmctZGFyayc6IHBvc0d1ZXNzIC8vIGFjdGl2ZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgYmxvY2sgZ3Vlc3MgZnJvbSB0cnVlIHRvIGZhbHNlIE9SIGZhbHNlIHRvIHRydWVcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiB0aGUgYmxvY2tcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0cmFpbiAtIHN0cmFpbiBudW1iZXIgKG1hdGNoZXMgbnVtbWJlciBpcyBmcmlkZ2UpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwb3MgLSBibG9jayBpbmRleFxuICAgKi9cbiAgdG9nZ2xlQmxvY2soc3RyYWluOiBudW1iZXIsIHBvczogbnVtYmVyKXtcbiAgICBsZXQgYyA9IHRoaXMuZ3Vlc3Nlc1tzdHJhaW5dW3Bvc107XG4gICAgdGhpcy5ndWVzc2VzW3N0cmFpbl1bcG9zXSA9ICFjO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSBndWVzc2VzIHRvIHRoZSBiYWNrZW5kL2RhdGFiYXNlIHVzaW5nIHRoZSBzZXJ2aWNlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2YgU2F2ZSBCdXR0b25cbiAgICovXG4gIHNhdmVEYXRhKCl7XG4gICAgLy8gY2xlYXIgZXJyb3IgbWVzc2FnZSBiZWZvcmVoYW5kXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAvLyB1c2Ugc2VydmljZSBhbmQgc2F2ZSBkYXRhIChhcyBhIHN0cmluZylcbiAgICBsZXQgb3V0ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5ndWVzc2VzKVxuICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZVxuICAgICAgLnNhdmVEZWxldGlvbnModGhpcy5ndWVzc2VzLCB0aGlzLnVzZXJJZCwgdGhpcy5zY2VuYXJpb0lkKVxuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKGRhdCk9PntcbiAgICAgIHRoaXMuZ3Vlc3NlcyA9IEpTT04ucGFyc2UoZGF0KTtcbiAgICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5zZXRTY2VuYXJpbyhudWxsLCBkYXQpO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTY2VuYXJpb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zY2VuYXJpby5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgc2hvd3MgdGhlIHNjZW5hcmlvIGRldGFpbHMgaW5jbHVkaW5nXG4gKiAxLiBwdXJwb3NlIC0gdGhlIGdvYWwgb2YgdGhlIHNjZW5hcmlvLCB1c3VhbGx5IGVpdGhlciBpZGVudGlmeSBtdXRhdGlvbnMgb2YgZ2l2ZW4gdW5rbm93biBwaGFnZSBvciBjcmVhdGUgcGhhZ2Ugd2l0aCBjZXJ0YWluIG11dGF0aW9uXG4gKiAyLiByZWxldmFuY2UgLSB3aHkgdGhlIHNjZW5hcmlvIGlzIHJlbGV2YW50IGZvciBsZWFybmluZyBhbmQgZnV0dXJlIHNjZW5hcmlvc1xuICogMy4gc3RhcnRpbmcgcG9pbnQgLSBkZXNjcmlwdGlvbiBvZiB0aGUgcGhhZ2Ugc3R1ZGVudHMgc3RhcnQgdGhlIHNjZW5hcmlvIHdpdGhcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGFuZGluZy1yb29tJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbGFuZGluZy1yb29tLnRlbXBsYXRlLmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIExhbmRpbmdSb29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBzY2VuYXJpbyB3ZSBhcmUgdmlld2luZ1xuICAgKi9cbiAgc2NlbmFyaW86IFNjZW5hcmlvO1xuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBnZXRTY2VuYXJpbyBtZXRob2Qgb2Ygc2NlbmFyaW8gc2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IGFueTtcblxuICAvKipcbiAgICogQ29tcG9uZW50IGNvbnRydWN0b3JcbiAgICogQHBhcmFtIHtSb3V0ZXJ9IF9yb3V0ZXIgQW5ndWxhciByb3V0ZXJcbiAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZX0gX3JvdXRlIFRoZSBjdXJyZW50IFVSTCByb3V0ZSB0byBnZXQgc2NlbmFyaW8gaWRcbiAgICogQHBhcmFtIHtTY2VuYXJpb1NlcnZpY2V9IF9zY2VuYXJpb1NlcnZpY2UgU2VydmljZSB0byBnZXQgc2NlbmFyaW8gaW5mb3JtYXRpb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2Upe1xuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50XG4gICAqIDEuIEdldCBzY2VuQ29kZSBmcm9tIHRoZSB1cmwgKHVzZSBwYXJhbWV0ZXIgZnJvbSBwYXJlbnQgcm91dGUgYmVjYXVzZSB0aGlzIHJvdXRlIGVuZHMgXCIvbGFuZGluZy1yb29tXCIpXG4gICAqIDIuIEdldCB0aGUgZGV0YWlscyBmb3Igc2NlbmFyaW9zXG4gICAqIElmIGVycm9yLCBnbyBiYWNrIHRvIGhvbWUgcGFnZVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICBsZXQgc2NlbklkID0gdGhpcy5fcm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc2NlbklkJyk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9zY2VuYXJpb1NlcnZpY2VcbiAgICAgIC5nZXRTY2VuYXJpbyhzY2VuSWQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgc2NlbmFyaW8gPT4ge1xuICAgICAgICB0aGlzLnNjZW5hcmlvID0gc2NlbmFyaW87XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIHRoZSBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGlmIG5lY2Vzc2FyeSB0b1xuICAgKiBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYW5kaW5nLXJvb20vbGFuZGluZy1yb29tLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE5nYk1vZGFsLCBOZ2JBY3RpdmVNb2RhbH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBGcmlkZ2VQaGFnZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcGhhZ2UuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBNb2RhbCBkaWFsb2cgYm94IGZvciBpbmRpdmlkdWFsIHBoYWdlIHN0cmFpbnNcbiAqIFVzZWQgdG8gZWRpdCBwaGFnZSBjb21tZW50LCB2aWV3IHBoYWdlIHBhcmVudHMsIG9yIGRlbGV0ZSBwaGFnZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwaGFnZS1kaWFsb2ctY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3BoYWdlLWRpYWxvZy50ZW1wbGF0ZS5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgUGhhZ2VEaWFsb2dDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIHBoYWdlIHdlIGFyZSB2aWV3aW5nXG4gICAqL1xuICBASW5wdXQoKSBwaGFnZTogRnJpZGdlUGhhZ2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCkge1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2ZyaWRnZS9waGFnZS1kaWFsb2cuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTG9jYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2xvY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dnZWRJbkd1YXJkIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBMYWJSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9sYWItcm9vbS9sYWItcm9vbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxleGVyUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vcGxleGVyLXJvb20vcGxleGVyLXJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGVsUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vbW9kZWwtcm9vbS9tb2RlbC1yb29tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYW5kaW5nUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vbGFuZGluZy1yb29tL2xhbmRpbmctcm9vbS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgTG9jYXRpb25Sb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogTG9jYXRpb25Db21wb25lbnQsXG4gICAgY2FuQWN0aXZhdGU6IFtMb2dnZWRJbkd1YXJkXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnbGFiLXJvb20nLFxuICAgICAgICBjb21wb25lbnQ6IExhYlJvb21Db21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ0xhYidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3BsZXhlci1yb29tJyxcbiAgICAgICAgY29tcG9uZW50OiBQbGV4ZXJSb29tQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnM6ICdQbGV4ZXInXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdtb2RlbC1yb29tJyxcbiAgICAgICAgY29tcG9uZW50OiBNb2RlbFJvb21Db21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ01vZGVsJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBwYXRoOiAnaW5mbycsIGNvbXBvbmVudDogTGFuZGluZ1Jvb21Db21wb25lbnR9LFxuICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBMYW5kaW5nUm9vbUNvbXBvbmVudH1cbiAgICBdXG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbG9jYXRpb24udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xvY2F0aW9uLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sb2NhdGlvbi5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhYi1yb29tL2xhYi1yb29tLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20uc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vcGxleGVyLXJvb20vcGxleGVyLXJvb20udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vcGxleGVyLXJvb20vcGxleGVyLXJvb20uc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL21vZGVsLXJvb20vbW9kZWwtcm9vbS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL21vZGVsLXJvb20vbW9kZWwtcm9vbS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9zY2VuYXJpby9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20uc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vbG9jYXRpb24vbGFuZGluZy1yb29tL2xhbmRpbmctcm9vbS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2xvY2F0aW9uL2xhbmRpbmctcm9vbS9sYW5kaW5nLXJvb20udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TmdiTW9kYWwsIE1vZGFsRGlzbWlzc1JlYXNvbnN9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2NlbmFyaW8uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFNjZW5hcmlvR2xvYmFscyB9IGZyb20gJy4uL3NjZW5hcmlvLmdsb2JhbHMnO1xuaW1wb3J0IHsgUGhhZ2VEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BoYWdlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBGcmlkZ2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ZyaWRnZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRnJpZGdlUGhhZ2UsIEdlbm90eXBlUGhhZ2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BoYWdlLmludGVyZmFjZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIE9uZSBvZiB0aGUgbWFpbiBjb21wb25lbnRzIG9mIHRoZSBhcHAgLSB0aGUgZnJpZGdlIHN0b3JlcyB0aGUgcGhhZ2UgZm9yXG4gKiB0aGUgZ2l2ZW4gdXNlci9zY2VuYXJpb1xuICpcbiAqIE5lZWRzIHRvIGdldCBleGlzdGluZyBmcmlkZ2UvY3JlYXRlIG5ldyBvbmU7IGVkaXQgYW5kIHJlbW92ZSBleGlzdGluZyBzdHJhaW5zO1xuICpcbiAqIGFkZCBuZXcgc3RyYWluczsgY2hhbmdlIHNoZWxmXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZnJpZGdlJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9mcmlkZ2UudGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2ZyaWRnZS5zdHlsZS5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgRnJpZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG5cbiAgLyoqXG4gICAqIFRoZSBsb2dnZWQgaW4gdXNlclxuICAgKi9cbiAgdXNlcjogVXNlcjtcbiAgLyoqXG4gICAqIFRoZSBmcmlkZ2Ugb2JqZWN0XG4gICAqL1xuICBmcmlkZ2U6IEZyaWRnZTtcbiAgLyoqXG4gICAqIGxpc3Qgb2Ygc3RyYWlucyBpbiB0aGUgZnJpZGdlLCBpbmNsdWRpbmcgZW1wdHkgb25lc1xuICAgKi9cbiAgc3RyYWluczogRnJpZGdlUGhhZ2VbXTtcbiAgLyoqXG4gICAqIGN1cnJlbnRseSB2aXNpYmxlIHN0cmFpbnMgYmFzZWQgb24gc2hlbGYgbnVtYmVyXG4gICAqL1xuICBjdXJyU3RyYWluczogRnJpZGdlUGhhZ2VbXTtcbiAgLyoqXG4gICAqIGN1cnJlbnQgc2hlbGZcbiAgICovXG4gIHNoZWxmOiBudW1iZXIgPSAwO1xuICAvKipcbiAgICogbWF4aW11bSBudW1iZXIgb2Ygc2hlbHZlcyBpbiBmcmlkZ2VcbiAgICovXG4gIG1heFNoZWxmOiBudW1iZXI7XG4gIC8qKlxuICAgKiBudW1iZXIgb2Ygc2xvdHMgcGVyIHNoZWxmXG4gICAqL1xuICBzcG90czogbnVtYmVyO1xuICAvKipcbiAgICogcG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIFN0YXRlIHRvIG1vbml0aW9yIGlmIGNvbXBvbmVudCBhY3RpdmUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIHRvXG4gICAqIG11bHRpcGxlIHN0cmVhbXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIE9ic2VydmVzIHRoZSBzY2VuQ29kZSBvZiB0aGUgVVJMXG4gICAqL1xuICBwcml2YXRlIHBhcmFtT2JzZXJ2ZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBTY2VuYXJpb1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTmdiTW9kYWwpIHtcbiAgICB0aGlzLm1heFNoZWxmID0gU2NlbmFyaW9HbG9iYWxzLm5GcmlkZ2VTaGVsZjtcbiAgICB0aGlzLnNwb3RzID0gU2NlbmFyaW9HbG9iYWxzLm5GcmlkZ2VTcG90cztcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGFpbGl6ZSB0aGUgZnJpZGdlIHdoZW4gY3JlYXRpbmcgY29tcG9uZW50XG4gICAqIDEuIEdldCBsb2dnZWQgaW4gdXNlciBhbmQgY3VycmVudCBzY2VuYXJpb1xuICAgKiAyLiBGZXRjaCB0aGUgY29ycmVzcG9uZGluZyBmcmlkZ2VcbiAgICogM2EuIElmIHRoZSBmcmlkZ2UgZG9lc24ndCBleGlzdCB5ZXQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICogM2IuIElmIHRoZSBmcmlkZ2UgZG9lcyBleGlzdCwgaW5pdGlhbGl6ZSBpdFxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuXG4gICAgbGV0IHVzZXJJZCA9IHRoaXMudXNlci5pZDtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICBsZXQgc2NlbklkID0gcGFyYW1zWydzY2VuSWQnXTtcbiAgICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5nZXRGcmlkZ2UodXNlcklkLCBzY2VuSWQpXG4gICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGZyaWRnZSkgPT4ge3RoaXMuX2luaXRGcmlkZ2UoZnJpZGdlKX0sXG4gICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYoZXJyLnN0YXR1cyA9PT0gMzA3KXtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUZyaWRnZSh1c2VySWQsIHNjZW5JZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIH0gfVxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyB0aGUgY29tcG9uZW50LCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzXG4gICAqIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgZnJpZGdlIGJlY2F1c2UgdGhpcyB1c2VyIGRvZXNuJ3QgaGF2ZSBvbmUgZm9yIHRoaXMgc2NlbmFyaW9cbiAgICpcbiAgICogT24gc3VjY2VzcywgaW5pYWxpemVzIGZyaWRnZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIC0gbG9nZ2VkIGluIHVzZXIncyBpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIC0gY3VycmVudCBzY2VuYXJpbyBpZFxuICAgKi9cbiAgX2NyZWF0ZUZyaWRnZSh1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpe1xuICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5jcmVhdGVGcmlkZ2UodXNlcklkLCBzY2VuSWQpXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKGZyaWRnZSk9PntcbiAgICAgIHRoaXMuX2luaXRGcmlkZ2UoZnJpZGdlKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW50aWFsaXplcyB0aGUgZnJpZGdlIGFuZCBjb21wb25lbnQgdmFyaWFibGVzIHJlbGF0ZWQgdG8gd2hpY2ggc3RyYWlucyBhcmVcbiAgICogdmlzaWJsZSBiYXNlZCBvbiB0aGUgY3VycmVudCBzaGVsZlxuICAgKlxuICAgKiBAcGFyYW0ge0ZyaWRnZX0gbmV3RnJpZGdlIC0gZnJpZGdlIG9iamVjdCB0byBiZSBpbml0YWxpemVkXG4gICAqL1xuICBfaW5pdEZyaWRnZShuZXdGcmlkZ2U6IEZyaWRnZSl7XG4gICAgdGhpcy5mcmlkZ2UgPSBuZXdGcmlkZ2U7XG4gICAgdGhpcy5zdHJhaW5zID0gdGhpcy5fZmlsbFN0cmFpbnMobmV3RnJpZGdlLnN0cmFpbnMpO1xuICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLnNldFNjZW5hcmlvKG5ld0ZyaWRnZS5zY2VuYXJpb0RldGFpbHMsIG5ld0ZyaWRnZS5ndWVzc2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxscyBpbiB0aGUgZW1wdHkgc2xvdHMgd2l0aCBcImVtcHR5XCIgcGhhZ2Ugb2JqZWN0c1xuICAgKlxuICAgKiBAcGFyYW0ge0ZyaWRnZVBoYWdlW119IGZyaWRnZVN0cmFpbnMgLSBhcnJheSBvZiBzdHJhaW5zIGFjdHVhbGx5IGluIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQHJldHVybnMge0ZyaWRnZVBoYWdlW119IGFycmF5IG9mIGFsbCBzbG90cyBpbiBmcmlkZ2UsIGluY2x1ZGluZyBlbXB0eVxuICAgKi9cbiAgX2ZpbGxTdHJhaW5zKGZyaWRnZVN0cmFpbnM6IEZyaWRnZVBoYWdlW10pOiBGcmlkZ2VQaGFnZVtde1xuICAgIHZhciBvdXQ6IEZyaWRnZVBoYWdlW10gPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhTaGVsZip0aGlzLnNwb3RzOyBpKyspe1xuICAgICAgb3V0LnB1c2goe3N0cmFpbk51bTogaSwgcGhhZ2VUeXBlOiAnZW1wdHknLCBjb21tZW50OiAnJywgaWQ6ICcnfSk7XG4gICAgfVxuICAgIC8vIGFkZCBvcmlnaW5hbCBzdHJhaW5zXG4gICAgZm9yKGxldCBpPTA7IGkgPCBmcmlkZ2VTdHJhaW5zLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBuID0gZnJpZGdlU3RyYWluc1tpXS5zdHJhaW5OdW07XG4gICAgICBvdXRbbl0gPSBmcmlkZ2VTdHJhaW5zW2ldO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgc3RyYWlucyBmb3IgdmlzaWJsZSBzaGVsZlxuICAgKi9cbiAgX2N1cnJTdHJhaW5zKCl7XG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5zaGVsZip0aGlzLnNwb3RzO1xuICAgIGxldCBlbmQgPSBzdGFydCt0aGlzLnNwb3RzO1xuICAgIHRoaXMuY3VyclN0cmFpbnMgPSB0aGlzLnN0cmFpbnMuc2xpY2Uoc3RhcnQsZW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIENTUyBjbGFzc2VzIGFwcGxpY2FibGUgdG8gdGhlIHBoYWdlIGJhc2VkIG9uIHRoZSBwaGFnZSB0eXBlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgLSBzdHJhaW4gbnVtYmVyIG9mIHBoYWdlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGNsYXNzZXMgd2hpY2ggYXBweSB0byB0aGlzIGJ1dHRvbiBpbiB0aGUgZm9ybSB7XCJjbGFzc1wiOiBib29sZWFuLCAuLi59XG4gICAqL1xuICBnZXRQaGFnZUNsYXNzKHNyYzogbnVtYmVyKTogT2JqZWN0e1xuICAgIGxldCBwaGFnZSA9IHRoaXMuc3RyYWluc1tzcmNdO1xuICAgIHJldHVybiB7XG4gICAgICAnY29sLTcgY29sLXhsLTggcC0wIHN0cmFpbi1pbWFnZSc6IHRydWUsXG4gICAgICAnc3RyYWluLWltYWdlLXJlZmVyZW5jZSc6IHBoYWdlLnBoYWdlVHlwZSA9PT0gJ3JlZmVyZW5jZScsXG4gICAgICAnc3RyYWluLWltYWdlLXVua25vd24nOiBwaGFnZS5waGFnZVR5cGUgPT09ICd1bmtub3duJyxcbiAgICAgICdzdHJhaW4taW1hZ2Utc3VibWl0dGVkJzogcGhhZ2Uuc3VibWl0dGVkXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlYXNlIG9yIGRlY3JlYXNlIHZpc2libGUgc2hlbGYgdGhlbiB1cGRhdGUgdGhlIHZpc2libGUgc3RyYWluc1xuICAgKlxuICAgKiBDYWxsZWQgYnkgYChjbGljaylgIG9mIHByZXYvbmV4dCBidXR0b25zXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmMgLSBhbW91bnQgdG8gY2hhbmdlIHNoZWxmIGJ5XG4gICAqL1xuICBjaGFuZ2VTaGVsZihpbmM6IG51bWJlcil7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICBpZih0aGlzLnNoZWxmIDw9IHRoaXMubWF4U2hlbGYtMSAmJiBpbmMgPT09IDEpe1xuICAgICAgdGhpcy5zaGVsZisrO1xuICAgICAgdGhpcy5fY3VyclN0cmFpbnMoKTtcbiAgICB9IGVsc2UgaWYodGhpcy5zaGVsZiA+IDAgJiYgaW5jID09PSAtMSl7XG4gICAgICB0aGlzLnNoZWxmLS07XG4gICAgICB0aGlzLl9jdXJyU3RyYWlucygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdmlzaWJsZSBzaGVsZiB0byBhIHNwZWNpZmljIG51bWJlcjtcbiAgICogdXNlZCB0byBqdW1wIHRvIHRoZSBiZWdpbm5pbmcgYW5kIGVuZFxuICAgKlxuICAgKiBDYWxsZWQgYnkgKGNsaWNrKSBvZiBmaXJzdC9sYXN0IGJ1dHRvbnNcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5TaGVsZiAtIHNoZWxmIHRvIGdvIHRvXG4gICAqL1xuICBzZXRTaGVsZihuU2hlbGY6IG51bWJlcil7XG4gICAgdGhpcy5zaGVsZiA9IG5TaGVsZjtcbiAgICB0aGlzLl9jdXJyU3RyYWlucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBzdHJhaW4gY2FuIGJlIGRyb3BwZWQgaW4gYSBzbG90XG4gICAqIGNhbiBiZSBkcm9wcGVkIGlmIHNsb3QgaXMgZW1wdHkgYW5kIHNyYyBpcyBzbWFsbCBvciBsYXJnZVxuICAgKlxuICAgKiBDYWxsZWQgYnkgYFthbGxvd0Ryb3BdYCBvZiBmcmlkZ2Ugc2xvdFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3BvdCAtIHNwb3QgdG8gdGVzdCB0byBzZWUgaWYgY2FuIGRyb3BcbiAgICpcbiAgICogQHJldHVybnMge2FueX0gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyB0cnVlIG9yIGZhbHNlIGlmXG4gICAqIHN0cmFpbiBjYW4gYmUgZHJvcHBlZCBpbiBzbG90XG4gICAqL1xuICBjYW5Ecm9wKHNwb3Q6IG51bWJlcik6IGFueSB7XG4gIHJldHVybiAoZHJhZ0RhdGE6IEdlbm90eXBlUGhhZ2UpID0+IHtcbiAgICBsZXQgb3V0ID0gZmFsc2U7XG4gICAgaWYoZHJhZ0RhdGEgJiYgZHJhZ0RhdGEuaGFzT3duUHJvcGVydHkoJ3NyYycpKXtcbiAgICAgIGlmKGRyYWdEYXRhLnNyYyA9PT0gJ3NtYWxsJyB8fCBkcmFnRGF0YS5zcmM9PT0gJ2xhcmdlJyl7XG4gICAgICAgIGxldCB0cnlTcG90OiBGcmlkZ2VQaGFnZSA9IHRoaXMuc3RyYWluc1tzcG90XTtcbiAgICAgICAgaWYodHJ5U3BvdC5waGFnZVR5cGUgPT09ICdlbXB0eScpe1xuICAgICAgICAgIG91dCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcbn1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBzdHJhaW4gdG8gYSBmcmlkZ2VcbiAgICpcbiAgICogQ2FsbGVkIGJ5IGAob25Ecm9wU3VjZXNzKWAgb2Ygc2xvdFxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gJGV2ZW50IC0gZHJhZyBldmVudCwgaW5jdWRpbmcgZGF0YSBmb3Igc3RyYWluIHRvIGFkZDtcbiAgICogaGFzOiBzaGlmdHMsIGRlbGV0aW9uLCBwYXJlbnRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcG90IC0gc2xvdCB0byBkcm9wIG5ldyBzdHJhaW5cbiAgICovXG4gIGRyb3BTdHJhaW4oJGV2ZW50OiBhbnksIHNwb3Q6IG51bWJlcil7XG4gICAgbGV0IHN0cmFpbjogR2Vub3R5cGVQaGFnZSA9ICRldmVudC5kcmFnRGF0YTtcbiAgICAvLyBuZWVkIHN0cmFpbk51bSwgbXV0YXRpb25MaXN0LCBkZWxldGlvblxuICAgIGxldCBuZXdTdHJhaW4gPSB7XG4gICAgICBzdHJhaW5OdW06IHNwb3QsXG4gICAgICBtdXRhdGlvbkxpc3Q6IHN0cmFpbi5zaGlmdHMsXG4gICAgICBkZWxldGlvbjogc3RyYWluLmRlbGV0aW9uLFxuICAgICAgcGFyZW50czogc3RyYWluLnBhcmVudHNcbiAgICB9XG4gICAgLy8gYWRkIHRvIGZyaWRnZVxuICAgIGxldCB1c2VySWQgPSB0aGlzLnVzZXIuaWQ7XG4gICAgbGV0IHNjZW5Db2RlID0gdGhpcy5mcmlkZ2Uuc2NlbkNvZGU7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmFkZFN0cmFpbih1c2VySWQsIHNjZW5Db2RlLCBuZXdTdHJhaW4pXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgdGhpcy5zdHJhaW5zW3Nwb3RdID0ge1xuICAgICAgICAvLyBzdHJhaW5OdW0gY29tbWVudCBwaGFnZVR5cGUgaWQgcGFyZW50c1xuICAgICAgICBzdHJhaW5OdW06IHJlcy5zdHJhaW5OdW0sXG4gICAgICAgIGNvbW1lbnQ6IHJlcy5jb21tZW50LFxuICAgICAgICBwaGFnZVR5cGU6IHJlcy5waGFnZVR5cGUsXG4gICAgICAgIGlkOiByZXMuaWQsXG4gICAgICAgIHBhcmVudHM6IHJlcy5wYXJlbnRzLFxuICAgICAgICBudW1QYXJlbnRzOiByZXMubnVtUGFyZW50c1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VyclN0cmFpbnMoKTtcbiAgICB9LFxuICAgICAgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogb3BlbnMgYSBkaWFsb2cgYm94IHRvIGVkaXQvbGVhcm4gbW9yZSBhYm91dCBzZWxlY3RlZCBwaGFnZVxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIG9wZW5zIHRoZSBib3ggY2FsbHMgaGVscGVyIG1ldGhvZHMgYmFzZWQgb24gYm94IG91dHB1dFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIC0gc3RyYWluIG51bWJlciB0byBvcGVuIGJveCBmb3JcbiAgICovXG4gIGVkaXRQaGFnZShzcmM6IG51bWJlcikge1xuICAgIGxldCBwaGFnZSA9IHRoaXMuc3RyYWluc1tzcmNdO1xuICAgIGNvbnN0IG1vZGVsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oUGhhZ2VEaWFsb2dDb21wb25lbnQsIHsgd2luZG93Q2xhc3M6ICdwaGFnZS1kaWFsb2cnfSk7XG4gICAgbW9kZWxSZWYuY29tcG9uZW50SW5zdGFuY2UucGhhZ2UgPSBwaGFnZTtcblxuICAgIG1vZGVsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpPT57XG4gICAgICBsZXQgcmVzVHlwZSA9IHR5cGVvZiByZXN1bHQ7XG4gICAgICBpZihyZXNUeXBlID09PSBcInN0cmluZ1wiICYmIHJlc3VsdCA9PT0gJ2RlbGV0ZScpe1xuICAgICAgICAvLyBkZWxldGUgdGhlIHBoYWdlXG4gICAgICAgIHRoaXMuX2RlbGV0ZVBoYWdlKHNyYyk7XG4gICAgICB9IGVsc2UgaWYgKHJlc1R5cGUgPT09IFwib2JqZWN0XCIpe1xuICAgICAgICAvLyBlZGl0IGl0XG4gICAgICAgIHRoaXMuX2VkaXRQaGFnZShzcmMsIHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0sIChyZWFzb24pPT57XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgICByZXR1cm47XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIHdoaWNoIHVwZGF0ZXMgdGhlIHBoYWdlIGFmdGVyIGRpYWxvZyBib3ggaGFzIGNsb3NlZFxuICAgKlxuICAgKiBVcGRhdGVzIHRoZSBzdHJhaW4gb24gc3VjY2VzcyBhbmQgc2V0cyBlcnJvciBtZXNzYWdlIG9uIGVycm9yXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgLSBzdHJhaW4gbnVtYmVyIHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge0ZyaWRnZVBoYWdlfSBuZXdQaGFnZSAtIHVwZGF0ZWQgZGV0YWlsc1xuICAgKi9cbiAgX2VkaXRQaGFnZShzcmM6IG51bWJlciwgbmV3UGhhZ2U6IEZyaWRnZVBoYWdlKXtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UudXBkYXRlU3RyYWluKHRoaXMudXNlci5pZCwgdGhpcy5mcmlkZ2Uuc2NlbkNvZGUsIG5ld1BoYWdlKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgdGhpcy5zdHJhaW5zW3NyY10gPSByZXM7XG4gICAgICB0aGlzLl9jdXJyU3RyYWlucygpO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gd2hpY2ggZGVsZXRlcyB0aGUgcGhhZ2UgZnJvbSB0aGUgZnJpZGdlIGFmdGVyIGRpYWxvZyBib3ggaGFzIGNsb3NlZFxuICAgKlxuICAgKiBTZXRzIHNwb3QgdG8gZW1wdHkgcGhhZ2Ugb24gc3VjY2VzcyBhbmQgc2V0cyBlcnJvciBtZXNzYWdlIG9uIGVycm9yXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgLSBzdHJhaW4gbnVtYmVyIHRvIGRlbGV0ZVxuICAgKi9cbiAgX2RlbGV0ZVBoYWdlKHNyYzogbnVtYmVyKXtcbiAgICBsZXQgbmV3UGhhZ2UgPSB0aGlzLnN0cmFpbnNbc3JjXTtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZGVsZXRlU3RyYWluKHRoaXMudXNlci5pZCwgdGhpcy5mcmlkZ2Uuc2NlbkNvZGUsIG5ld1BoYWdlLCApXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAvLyBzdWNjZXNzZnVsXG4gICAgICB0aGlzLnN0cmFpbnNbc3JjXSA9IHtzdHJhaW5OdW06IHNyYywgcGhhZ2VUeXBlOiAnZW1wdHknLCBjb21tZW50OicnLCBpZDogJyd9O1xuICAgICAgdGhpcy5fY3VyclN0cmFpbnMoKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2ZyaWRnZS9mcmlkZ2UuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9zY2VuYXJpby9mcmlkZ2UvcGhhZ2UtZGlhbG9nLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL3BoYWdlLWRpYWxvZy50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvc2NlbmFyaW8vZnJpZGdlL2ZyaWRnZS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2ZyaWRnZS9mcmlkZ2UudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL3NjZW5hcmlvL2ZyaWRnZS9mcmlkZ2Uuc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL3NjZW5hcmlvL2ZyaWRnZS9mcmlkZ2Uuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
