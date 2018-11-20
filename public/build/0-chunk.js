webpackJsonp([0],{

/***/ 923:
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
const router_1 = __webpack_require__(15);
const shared_module_1 = __webpack_require__(54);
const location_routes_1 = __webpack_require__(968);
const experiment_service_1 = __webpack_require__(926);
const fridge_component_1 = __webpack_require__(978);
const phage_dialog_component_1 = __webpack_require__(945);
const location_component_1 = __webpack_require__(940);
const landing_room_component_1 = __webpack_require__(944);
const lab_room_component_1 = __webpack_require__(941);
const plexer_room_component_1 = __webpack_require__(942);
const model_room_component_1 = __webpack_require__(943);
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

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CricketGlobals = {
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

/***/ 926:
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

/***/ 940:
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
        templateUrl: __webpack_require__(969),
        styleUrls: [__webpack_require__(970)]
    })
], LocationComponent);
exports.LocationComponent = LocationComponent;


/***/ }),

/***/ 941:
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
const rxjs_1 = __webpack_require__(27);
const cricket_globals_1 = __webpack_require__(924);
const experiment_service_1 = __webpack_require__(926);
const cricket_service_1 = __webpack_require__(121);
const read_error_1 = __webpack_require__(53);
let LabRoomComponent = class LabRoomComponent {
    constructor(_experimentService, _scenarioService) {
        this._experimentService = _experimentService;
        this._scenarioService = _scenarioService;
        this.selectedObject = null;
        this.isHidden = { 'K': false, 'B': false };
        this.phage = [];
        this.dilutionValue = cricket_globals_1.CricketGlobals.defaultLabDilution;
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
                numPhage: cricket_globals_1.CricketGlobals.numPhage
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
            capacity: cricket_globals_1.CricketGlobals.plateCapacity
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
        templateUrl: __webpack_require__(971),
        styleUrls: [__webpack_require__(972)]
    }),
    __metadata("design:paramtypes", [experiment_service_1.ExperimentService,
        cricket_service_1.CricketService])
], LabRoomComponent);
exports.LabRoomComponent = LabRoomComponent;


/***/ }),

/***/ 942:
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
const cricket_globals_1 = __webpack_require__(924);
const experiment_service_1 = __webpack_require__(926);
const cricket_service_1 = __webpack_require__(121);
const read_error_1 = __webpack_require__(53);
let PlexerRoomComponent = class PlexerRoomComponent {
    constructor(_experimentService, _scenarioService) {
        this._experimentService = _experimentService;
        this._scenarioService = _scenarioService;
        this.chosenBact = 'none';
        this.dilutionValue = cricket_globals_1.CricketGlobals.defaultPlexerDilution;
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
        this.dilutionValue = cricket_globals_1.CricketGlobals.defaultPlexerDilution;
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
            capacity: cricket_globals_1.CricketGlobals.plexerCapacity
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
            numPhage: cricket_globals_1.CricketGlobals.numPhage
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
        templateUrl: __webpack_require__(973),
        styleUrls: [__webpack_require__(974)]
    }),
    __metadata("design:paramtypes", [experiment_service_1.ExperimentService,
        cricket_service_1.CricketService])
], PlexerRoomComponent);
exports.PlexerRoomComponent = PlexerRoomComponent;


/***/ }),

/***/ 943:
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
const router_1 = __webpack_require__(15);
const rxjs_1 = __webpack_require__(27);
const authentication_service_1 = __webpack_require__(17);
const cricket_service_1 = __webpack_require__(121);
const cricket_globals_1 = __webpack_require__(924);
const read_error_1 = __webpack_require__(53);
let ModelRoomComponent = class ModelRoomComponent {
    constructor(_router, _route, _authenticationService, _scenarioService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._scenarioService = _scenarioService;
        this.errorMessage = '';
        this.isDestroyed$ = new rxjs_1.Subject();
        this.stepSize = cricket_globals_1.CricketGlobals.deletionGuessLength;
        this.geneAr = [];
        let nBlocks = Math.ceil(cricket_globals_1.CricketGlobals.geneLength / this.stepSize);
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
        templateUrl: __webpack_require__(975),
        styleUrls: [__webpack_require__(976)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        cricket_service_1.CricketService])
], ModelRoomComponent);
exports.ModelRoomComponent = ModelRoomComponent;


/***/ }),

/***/ 944:
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
const router_1 = __webpack_require__(15);
const cricket_service_1 = __webpack_require__(121);
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
        templateUrl: __webpack_require__(977)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        cricket_service_1.CricketService])
], LandingRoomComponent);
exports.LandingRoomComponent = LandingRoomComponent;


/***/ }),

/***/ 945:
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
        templateUrl: __webpack_require__(979)
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], PhageDialogComponent);
exports.PhageDialogComponent = PhageDialogComponent;


/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const location_component_1 = __webpack_require__(940);
const logged_in_guard_service_1 = __webpack_require__(92);
const lab_room_component_1 = __webpack_require__(941);
const plexer_room_component_1 = __webpack_require__(942);
const model_room_component_1 = __webpack_require__(943);
const landing_room_component_1 = __webpack_require__(944);
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

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/location.template.html";

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/location.style.css";

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/lab-room/lab-room.template.html";

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/lab-room/lab-room.style.css";

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/plexer-room/plexer-room.template.html";

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/plexer-room/plexer-room.style.css";

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/model-room/model-room.template.html";

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/model-room/model-room.style.css";

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/landing-room/landing-room.template.html";

/***/ }),

/***/ 978:
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
const router_1 = __webpack_require__(15);
const ng_bootstrap_1 = __webpack_require__(70);
const rxjs_1 = __webpack_require__(27);
const cricket_service_1 = __webpack_require__(121);
const authentication_service_1 = __webpack_require__(17);
const cricket_globals_1 = __webpack_require__(924);
const phage_dialog_component_1 = __webpack_require__(945);
const read_error_1 = __webpack_require__(53);
let FridgeComponent = class FridgeComponent {
    constructor(_router, _route, _authenticationService, _scenarioService, _modalService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._scenarioService = _scenarioService;
        this._modalService = _modalService;
        this.shelf = 0;
        this.errorMessage = '';
        this.maxShelf = cricket_globals_1.CricketGlobals.nFridgeShelf;
        this.spots = cricket_globals_1.CricketGlobals.nFridgeSpots;
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
        templateUrl: __webpack_require__(980),
        styleUrls: [__webpack_require__(981)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        cricket_service_1.CricketService,
        ng_bootstrap_1.NgbModal])
], FridgeComponent);
exports.FridgeComponent = FridgeComponent;


/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/fridge/phage-dialog.template.html";

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/fridge/fridge.template.html";

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/fridge/fridge.style.css";

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbG9jYXRpb24ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0Lmdsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2V4cGVyaW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbGFuZGluZy1yb29tL2xhbmRpbmctcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9waGFnZS1kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sb2NhdGlvbi5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xvY2F0aW9uLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xvY2F0aW9uLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20uc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL21vZGVsLXJvb20vbW9kZWwtcm9vbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20uc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sYW5kaW5nLXJvb20vbGFuZGluZy1yb29tLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9mcmlkZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9mcmlkZ2UvcGhhZ2UtZGlhbG9nLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9mcmlkZ2UudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvZnJpZGdlL2ZyaWRnZS5zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMseUNBQStDO0FBQy9DLGdEQUEwRDtBQUUxRCxtREFBbUQ7QUFFbkQsc0RBQXlEO0FBRXpELG9EQUE2RDtBQUM3RCwwREFBd0U7QUFFeEUsc0RBQXlEO0FBQ3pELDBEQUE2RTtBQUM3RSxzREFBaUU7QUFD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QyxHQUFXO1FBQ3RCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUc7YUFDakYsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDNUIsU0FBUyxDQUFDLENBQUMsR0FBRztZQUViLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxDQUFDLEdBQUc7WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLDZCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBaFZZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxtQkFBTyxDQUFDLEdBQXdCLENBQUM7UUFDaEQsU0FBUyxFQUFFLENBQUMsbUJBQU8sQ0FBQyxHQUFvQixDQUFDLENBQUM7S0FDM0MsQ0FBQztxQ0ErQzZCLGVBQU07UUFDTix1QkFBYztRQUNFLDhDQUFxQjtRQUMzQixnQ0FBYztRQUNsQix1QkFBUTtHQWxEaEMsZUFBZSxDQWdWM0I7QUFoVlksMENBQWU7Ozs7Ozs7O0FDNUI1QixnRzs7Ozs7OztBQ0FBLDBGOzs7Ozs7O0FDQUEsc0YiLCJmaWxlIjoiMC1jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBMb2NhdGlvblJvdXRlcyB9IGZyb20gJy4vbG9jYXRpb24ucm91dGVzJztcblxuaW1wb3J0IHsgRXhwZXJpbWVudFNlcnZpY2UgfSBmcm9tICcuL2V4cGVyaW1lbnQuc2VydmljZSc7XG5cbmltcG9ydCB7IEZyaWRnZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZyaWRnZS9mcmlkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBoYWdlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vZnJpZGdlL3BoYWdlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMb2NhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9jYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IExhbmRpbmdSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5kaW5nLXJvb20vbGFuZGluZy1yb29tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYWJSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9sYWItcm9vbS9sYWItcm9vbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxleGVyUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vcGxleGVyLXJvb20vcGxleGVyLXJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGVsUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vbW9kZWwtcm9vbS9tb2RlbC1yb29tLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKExvY2F0aW9uUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGcmlkZ2VDb21wb25lbnQsXG4gICAgUGhhZ2VEaWFsb2dDb21wb25lbnQsXG4gICAgTG9jYXRpb25Db21wb25lbnQsXG4gICAgTGFiUm9vbUNvbXBvbmVudCxcbiAgICBQbGV4ZXJSb29tQ29tcG9uZW50LFxuICAgIE1vZGVsUm9vbUNvbXBvbmVudCxcbiAgICBMYW5kaW5nUm9vbUNvbXBvbmVudFxuICBdLFxuICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgUGhhZ2VEaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRXhwZXJpbWVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbk1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xvY2F0aW9uLm1vZHVsZS50cyIsIi8qKlxuICogU2NlbmFyaW8vZXhwZXJpZW1lbnQtcmVsYXRlZCB2YWx1ZXMgdXNlZCB0b1xuICogMS4gU2VuZCB0aGUgY29ycmVjdCBwYXJhbWV0ZXJzIHRvIGJhY2tlbmQgY2FsbHNcbiAqIDIuIE1hdGNoIHNvbWUgYmFja2VuZCBwYXJhbWV0ZXJzXG4gKiAzLiBIYXZlIGNvbnNpc3RlbnQgZGVmYXVsdHNcbiAqL1xuZXhwb3J0IGNvbnN0IENyaWNrZXRHbG9iYWxzID0ge1xuICAvKipcbiAgICogTnVtYmVyIG9mIHN0YXJ0aW5nIHBoYWdlIHdoZW4gdGFrZW4gZnJvbSBmcmlkZ2VcbiAgICovXG4gIG51bVBoYWdlOjEwMDAwMDAsXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBwbGFxdWVzIGFsbG93ZWQgb24gbGFiIHJvb20gcGxhdGVcbiAgICovXG4gIHBsYXRlQ2FwYWNpdHk6IDE1MDAsXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBwbGFxdWVzIGFsbG93ZWQgb24gZWFjaCBwbGV4ZXIgcm9vbSBwbGF0ZVxuICAgKi9cbiAgcGxleGVyQ2FwYWNpdHk6IDIwMCxcbiAgLyoqXG4gICAqIE51bWJlciBvZiBzaGVsdmVzIGluIHRoZSBmcmlkZ2VcbiAgICovXG4gIG5GcmlkZ2VTaGVsZjogMzIsXG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygc3BvdHMgb24gZWFjaCBzaGVsZiBvZiB0aGUgZnJpZGdlXG4gICAqL1xuICBuRnJpZGdlU3BvdHM6IDE2LFxuICAvKipcbiAgICogRGVmYXVsdCBkaWx1dGlvbiB2YWx1ZSBmb3IgbGFiIHJvb207IGNhbiBiZSBjaGFuZ2VkIGJ5IHVzZXJcbiAgICovXG4gIGRlZmF1bHRMYWJEaWx1dGlvbjogMTAsXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRpbHV0aW9uIHZhbHVlIGZvciBwbGV4ZXIgcm9vbTsgY2FuIGJlIGNoYW5nZWQgYnkgdXNlclxuICAgKi9cbiAgZGVmYXVsdFBsZXhlckRpbHV0aW9uOiA1LFxuICAvKipcbiAgICogTGVuZ3RoIG9mIHRoZSBnZW5lIGluIG51bWJlciBvZiBiYXNlcGFpcnNcbiAgICovXG4gIGdlbmVMZW5ndGg6IDM1MCxcbiAgLyoqXG4gICAqIE51bWJlciBvZiBiYXNlcGFpcnMgcGVyIFwiYmxvY2tcIiB3aGVuIGd1ZXNzaW5nIGRlbGV0aW9uIGxvY2F0aW9uXG4gICAqL1xuICBkZWxldGlvbkd1ZXNzTGVuZ3RoOiAxMFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0Lmdsb2JhbHMudHMiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUGxhdGVJbnB1dCwgUGxhdGVSZXN1bHRzLCBQbGV4ZXJJbnB1dCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIFRoaXMgc2VydmljZSBwZXJmb3JtcyB0aGUgcGxhdGUgYW5kIHBsZXhlciBleHBlcmltZW50cyB1c2VkXG4gKiB3aGVuIGNyb3NzaW5nIG9yIG11dGF0aW5nIHBoYWdlIHN0cmFpbnMsIGkuZS4gcGVyZm9ybWluZyBhXG4gKiB2aXJ0dWFsIGV4cGVyaW1lbnRcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV4cGVyaW1lbnRTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9iYXNlVVJMID0gJy9hcGkvY3JpY2tldCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgLyoqXG4gICAqIFdpdGggdmFsaWQgaW5wdXQgZm9yIHRoZSBwbGF0ZSwgY2FsbHMgdGhlIGJhY2tlbmQgdG8gZ2VuZXJhdGVcbiAgICogYSBuZXcgcGxhdGUgdGhhdCBpcyBkaXNwbGF5ZWQgaW4gdGhlIGxhYiByb29tXG4gICAqXG4gICAqIEBwYXJhbSB7UGxhdGVJbnB1dH0gcGxhdGUgLSBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gZ2VuZXJhdGUgdGhlIG5ldyBwbGF0ZVxuICAgKiAtIEluY2x1ZGVzIDEtMiBwaGFnZSB3aXRoIG51bVBoYWdlIGVhY2gsIGxhd24gdHlwZSwgbG9jYXRpb24sIHNwZWNpYWxzLCBwbGF0ZSBjYXBhY2l0eSwgYW5kIHNjZW5hcmlvIGRhdGFcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8UGxhdGVSZXN1bHRzPn1cbiAgICogLSBuZXdseSBnZW5lcmF0ZSBwbGF0ZSB3aXRoIGluZm8gYWJvdXQgcGFyZW50cyBhbmQgKGlzIHBsYXRlIGZ1bGwgb3IgbGlzdCBvZiBzbWFsbCBhbmQgbGFyZ2UgcGxhcXVlcylcbiAgICogLSBvciBlcnJvciBcIm51bVBoYWdlIG5vdCBzZXRcIiBpZiBudW1iZXIgb2YgcGhhZ2UgaXNuJ3Qgc2V0XG4gICAqIC0gb3IgZXJyb3IgXCJFcnJvciBmaW5kaW5nIHRoZSBzcGVjaWZpZWQgcGhhZ2UgMS8yXCIgaWYgcGhhZ2Ugbm90IGluIGRhdGFiYXNlXG4gICAqIC0gb3IgZXJyb3IgbWVzc2FnZSBmb3Igb3RoZXIgc2VydmVyIGVycm9yXG4gICAqL1xuICBjcmVhdGVQbGF0ZShwbGF0ZTogUGxhdGVJbnB1dCk6IE9ic2VydmFibGU8UGxhdGVSZXN1bHRzPntcbiAgICB2YXIgcmVzID0gdGhpcy5faHR0cFxuICAgIC5wb3N0PFBsYXRlUmVzdWx0cz4oYCR7dGhpcy5fYmFzZVVSTH0vcGxhdGVgLCBwbGF0ZSlcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpdGggdmFsaWQgaW5wdXQsIGNhbGwgdGhlIGJhY2tlbmQgdG8gZ2VuZXJhdGUgdmFsaWQgcmVzdWx0cyBmb3IgdGhlIHBsZXhlclxuICAgKlxuICAgKiBAcGFyYW0ge1BsZXhlcklucHV0fSBkYXRhIC0gaW5mb3JtYXRpb24gbmVlZGVkIHRvIGdlbmVyYXRlIHRoZVxuICAgKiBwbGV4ZXIgcmVzdWx0c1xuICAgKiAtIElucHV0cyBhIGxpc3Qgb2YgcGhhZ2UgSURzIGZvciB0aGUgcm93cyBhbmQgY29sdW1ucywgRS4gY29saVxuICAgKiBsYXduIHR5cGUsIGxvY2F0aW9uLCBzcGVjaWFscywgaW5kaXZpZHVhbCBwbGV4ZXIgcGxhdGUgY2FwYWNpdHlcbiAgICogYW5kIHNjZW5hcmlvIGRhdGFcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICogLSB0aGUgcmVzdWx0cyBvZiB0aGUgcGxleGVyIGFzIGEgMkQgYXJyYXlcbiAgICogd2VyZSBlYWNoIGNlbGwgaW4gdGhlIGFycmF5IHJlcHJlc2VudHMgYSBwbGF0ZSBhbmQgaGFzXG4gICAqIGlzIHBsYXRlIGZ1bGwgb3IgY291bnRzIG9mIHNtYWxsL2xhcmdlIHBsYXF1ZXNcbiAgICogLSBvciBlcnJvciBpZiBzZXJ2ZXIgZXJyb3JcbiAgICovXG4gIHBlcmZvcm1QbGV4ZXIoZGF0YTogUGxleGVySW5wdXQpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgLy8gZGF0YSB3aWxsIGhhdmUgcm93UGhhZ2UsIGNvbFBoYWdlLCBsYXduIHR5cGUsIGxvY2F0aW9uLCBzcGVjaWFscywgY2FwYWNpdHksIHNjZW5hcmlvRGF0YVxuICAgIHZhciByZXMgPSB0aGlzLl9odHRwXG4gICAgLnBvc3QoYCR7dGhpcy5fYmFzZVVSTH0vcGxleGVyYCwgZGF0YSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2V4cGVyaW1lbnQuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoaXMgaXMgYSB2aWV3IGNvbXBvbmVudCB3aGljaCBob3N0cyB0aGUgbG9jYXRpb25cbiAqIHRhYiBzZWxlY3Rpb24gbmF2aWdhdG9yXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xvY2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vbG9jYXRpb24udGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2xvY2F0aW9uLnN0eWxlLmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIExvY2F0aW9uQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENyaWNrZXRHbG9iYWxzIH0gZnJvbSAnLi4vLi4vY3JpY2tldC5nbG9iYWxzJztcbmltcG9ydCB7IEV4cGVyaW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vZXhwZXJpbWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IENyaWNrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3JpY2tldC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRXhwZXJpbWVudFBoYWdlLCBHZW5vdHlwZVBoYWdlLCBQbGF0ZUlucHV0LCBQbGF0ZVJlc3VsdHMsIF9nZW5vdHlwZSwgUGhhZ2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBDb21wb25lbnQgd2hlcmUgcGhhZ2UgYXJlIHBsYXRlZCBhbmQgbXV0YXRlZC9jcm9zc2VkXG4gKiBTdHVkZW50cyB3aWxsIHNwZW5kIHRoZSBtYWpvcml0eSBvZiB0aGVpciB0aW1lIGluIHRoaXMgY29tcG9uZW50XG4gKlxuICogSW5jbHVkZXM6IDIgRS4gY29saSB0ZXN0IHR1YmVzLCA0IHNlcmlhbCBkaWx1dGlvbiB0dWJlcywgMSBwbGF0ZVxuICogVXNlcyBkcmFnIGFuZCBkcm9wIG1lY2hhbmlzbSB0byBtb3ZlIHBoYWdlL3R1YmVzIGFyb3VuZFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xhYi1yb29tJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9sYWItcm9vbS50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbGFiLXJvb20uc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIExhYlJvb21Db21wb25lbnQge1xuXG4gIHByb3RlY3RlZCBzZWxlY3RlZE9iamVjdDogc3RyaW5nID0gbnVsbDtcblxuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLy8gYmFjdGVyaWEgdHViZXNcbiAgLyoqXG4gICAqIEF0IGluaXQsIGJvdGggdHVicyB2aXNpYmxlXG4gICAqIE9uY2UgYSBiYWN0ZXJpYSB0eXBlIGhhcyBiZWVuIHNlbGVjdGVkLCBuZWVkIHRvIGhpZGUgdGhlIG90aGVyXG4gICAqL1xuICBwcml2YXRlIGlzSGlkZGVuOiBPYmplY3QgPSB7J0snOiBmYWxzZSwgJ0InOiBmYWxzZX07XG4gIC8qKlxuICAgKiBwaGFnZSBzdHJhaW5zIHdoaWNoIGFyZSBpbiB0aGUgdHViZVxuICAgKi9cbiAgcHJpdmF0ZSBwaGFnZTogRXhwZXJpbWVudFBoYWdlW10gPSBbXTtcblxuICAvLyBkaWx1dGlvbiB0dWJlc1xuICAvKipcbiAgICogdmFsdWUgdG8gZGlsdXRlIHRoZSBudW1iZXIgb2YgcGhhZ2UgYXQgZWFjaCBkaWx1dGlvblxuICAgKi9cbiAgcHJpdmF0ZSBkaWx1dGlvblZhbHVlOiBudW1iZXIgPSBDcmlja2V0R2xvYmFscy5kZWZhdWx0TGFiRGlsdXRpb247XG4gIC8qKlxuICAgKiBDb250ZW50cyBvZiB0aGUgZGlsdXRpb24gdHViZVxuICAgKiBpbmNsdWRlczogbGF3blR5cGUgYW5kIHBoYWdlXG4gICAqL1xuICBwcml2YXRlIGNvbnRlbnRzOiBhbnlbXTtcbiAgLyoqXG4gICAqIE9ubHkgc2hvdyBkaWx1dGlvbiBsYWJlbHMgYXMgd2UgZG8gdGhlIHNlcmlhbCBkaWx1dGlvblxuICAgKi9cbiAgcHJpdmF0ZSB2aXNpYmxlTGFiZWw6IGJvb2xlYW5bXTtcbiAgLyoqXG4gICAqIGJvb2xlYW4gdG8gc3RvcCB1c2VycyBmcm9tIGNoYW5naW5nIHRoZSBkaWx1YXRpb24gZmFjdG9yIG9uY2VcbiAgICogdGhleSBzdGFydCBkaWx1dGluZ1xuICAgKiBhbGxvd2luZyBjaGFuZ2VzIHdoaWxlIGRpbHV0aW5nIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCBudW1iZXJzXG4gICAqIG9mIHBoYWdlIGFuZCB3b3VsZCBtYWtlIHR1YmUgbGFiZWxpbmcgZGlmZmljdWx0XG4gICAqL1xuICBwcml2YXRlIGNhbkVkaXREaWx1dGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gcGxhdGVcbiAgcHJpdmF0ZSBpc0VtcHR5OiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIEUuIGNvbGkgdHlwZSBvbiB0aGUgcGxhdGUgY3VycmVudGx5XG4gICAqL1xuICBwcml2YXRlIGxhd25UeXBlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIHNjZW5hcmlvIGRldGFpbHMgKGZyb20gdGhlIGZyaWRnZSkgd2hpY2ggaXMgbmVlZGVkIHdoZW4gZG9pbmcgY3Jvc3NcbiAgICovXG4gIHByaXZhdGUgc2NlbmFyaW9EZXRhaWxzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpcyB0aGUgcGxhdGUgb3ZlciBjYXBhY2l0eT9cbiAgICovXG4gIHByaXZhdGUgaXNGdWxsOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBsaXN0IG9mIGdlbm90eXBlIGluZGV4IGZvciBwaGFnZSB3aXRoIHNtYWxsIHBsYXF1ZXNcbiAgICovXG4gIHByaXZhdGUgc21hbGxQbGFxdWVMaXN0OiBhbnlbXTtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgZ2Vub3R5cGUgaW5kZXggZm9yIHBoYWdlIHdpdGggbGFyZ2UgcGxhcXVlc1xuICAgKi9cbiAgcHJpdmF0ZSBsYXJnZVBsYXF1ZUxpc3Q6IGFueVtdO1xuICAvKipcbiAgICogZ2Vub3R5cGVzIHdoaWNoIGNvcnJlc3BvbmQgdG8gY29udGVudHMgb2Ygc21hbGxQbGFxdWVMaXN0IGFuZCBsYXJnZVBsYXF1ZUxpc3RcbiAgICovXG4gIHByaXZhdGUgZ2Vub3R5cGVzOiBfZ2Vub3R5cGVbXTtcbiAgLyoqXG4gICAqIElkIGFuZCBzdHJhaW4gbnVtYmVyIG9mIHBoYWdlIHVzZWQgdG8gY3JlYXRlIHRoaXMgcGxhdGVcbiAgICovXG4gIHByaXZhdGUgcGxhdGVQYXJlbnRzOiBQaGFnZVtdO1xuXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB2YXJpYWJsZXMgLSBkaWx1dGlvbiB0dWJlIGNvbnRlbnRzIGFuZCB2aXNpYmxlIGxhYmVsc1xuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXhwZXJpbWVudFNlcnZpY2U6IEV4cGVyaW1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogQ3JpY2tldFNlcnZpY2Upe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICB0aGlzLmNvbnRlbnRzID0gW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuICAgIHRoaXMudmlzaWJsZUxhYmVsID0gW3RydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRhbGl6ZSB0aGUgY29tcG9uZW50XG4gICAqIEdldCB0aGUgc2NlbmFyaW8gZGV0YWlscyAoc2NlbmFyaW8gZGV0YWlscyBhcmUgYWxyZWFkeSBzZXRcbiAgICogYnkgTG9jYXRpb25Db21wb25lbnQpXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0U2NlbmFyaW9EZXRhaWxzXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKGRldGFpbHMpID0+IHt0aGlzLnNjZW5hcmlvRGV0YWlscyA9IGRldGFpbHN9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSB0dWJlLXJlbGF0ZWQgdmFyaWFibGVzXG4gICAqIGJhY3RlcmlhIHR1YmUgLSBwaGFnZSBjb250ZW50cyBhbmQgd2hpY2ggaXMgaGlkZGVuXG4gICAqIGRpbHV0aW9uIHR1YmUgLSBjb250ZW50cywgbGFiZWxzLCBhbmQgY2FuIGVkaXQgZGlsdXRpb24gdmFsdWVcbiAgICogY2xlYXIgYW55IGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGNsZWFyVHViZXMoKXtcbiAgICB0aGlzLnBoYWdlID0gW107XG4gICAgdGhpcy5pc0hpZGRlbiA9IHsnSyc6IGZhbHNlLCAnQic6IGZhbHNlfTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIHRoaXMuY29udGVudHMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgdGhpcy52aXNpYmxlTGFiZWwgPSBbdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07XG4gICAgdGhpcy5jYW5FZGl0RGlsdXRpb24gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBwbGF0ZSB2YXJpYWJsZXNcbiAgICogcGxhdGUgaXMgZW1wdHksIG5vdCBmdWxsXG4gICAqIG5vIHNtYWxsIHBscWF1ZXMsIGxhcmdlIHBsYXF1ZXMsIG9yIGdlbm90eXBlc1xuICAgKiBjbGVhciBhbnkgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgY2xlYXJQbGF0ZSgpIHtcbiAgICAvLyByZXNldCBhbGwgdmFyaWFibGVzXG4gICAgdGhpcy5pc0Z1bGwgPSBmYWxzZTtcbiAgICB0aGlzLmlzRW1wdHkgPSB0cnVlO1xuICAgIHRoaXMuZ2Vub3R5cGVzID0gW107XG4gICAgdGhpcy5zbWFsbFBsYXF1ZUxpc3QgPSBbXTtcbiAgICB0aGlzLmxhcmdlUGxhcXVlTGlzdCA9IFtdO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgdGhpcy5sYXduVHlwZSA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGFsbCB2YXJpYWJsZXNcbiAgICovXG4gIGNsZWFyQWxsKCl7XG4gICAgdGhpcy5jbGVhclR1YmVzKCk7XG4gICAgdGhpcy5jbGVhclBsYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGJhY3RlcmlhIHR1YmUgY2FuIGJlIGRyYWdnZWRcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2RyYWdFbmFibGVkXWAgb2YgYmFjdCB0dWJlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdHViZSBoYXMgcGhhZ2VcbiAgICovXG4gIGNhbkRyYWdCYWN0KCk6IGJvb2xlYW57XG4gICAgcmV0dXJuIHRoaXMucGhhZ2UubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIHRvIGJlIGRyYWdnZWQgZnJvbSB0aGUgYmFjdGVyaWEgdHViZVxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbZHJhZ0RhdGFdYCBvZiBiYWN0IHR1YmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBFLiBjb2xpIHNvdXJjZSwgYFwiQlwiYCBvciBgXCJLXCJgXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGRhdGEgd2l0aCBsYXduIHR5cGUsIHNyYywgYW5kIHBoYWdlIGxpc3RcbiAgICovXG4gIGdldERhdGFCYWN0KHNyYzogc3RyaW5nKTogT2JqZWN0e1xuICAgIHJldHVybiB7XG4gICAgICBsYXduVHlwZTogc3JjLFxuICAgICAgc3JjOiBzcmMsXG4gICAgICBwaGFnZTogdGhpcy5waGFnZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGNsYXNzZXMgZm9yIGEgYmFjdGVyaWEgdHViZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIEUuIGNvbGkgc291cmNlLCBgXCJCXCJgIG9yIGBcIktcImBcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gYXBwbGljYWJsZSBjbGFzc2VzIGluIHRoZSBmb3JtXG4gICAqIGB7J2NsYXNzJzogYm9vbGVhbiwgLi4ufWBcbiAgICovXG4gICAgZ2V0Q2xhc3Nlc0JhY3Qoc3JjOiBzdHJpbmcpOiBPYmplY3Qge1xuICAgIHJldHVybiB7J2JhY3QtdHViZSB0ZXN0LXR1YmUtb3V0ZXInOiB0cnVlLFxuICAgICAgICAgICAgJ2ludmlzaWJsZSc6IChzcmMgPT09ICdCJyA/IHRoaXMuaXNIaWRkZW5bXCJCXCJdIDogdGhpcy5pc0hpZGRlbltcIktcIl0pLFxuICAgICAgICAgICAgJ3R1YmUtYic6IChzcmM9PT0nQicpLFxuICAgICAgICAgICAgJ3R1YmUtayc6IChzcmM9PT0nSycpLFxuICAgICAgICAgICAgJ24tcGhhZ2UtMSc6IHRoaXMucGhhZ2UubGVuZ3RoID09PSAxLFxuICAgICAgICAgICAgJ24tcGhhZ2UtMic6IHRoaXMucGhhZ2UubGVuZ3RoID09PSAyXG4gICAgICAgICAgIH1cbiAgICB9XG5cbiAgLyoqXG4gICAqIERyb3AgcGhhZ2UgZnJvbSBmcmlkZ2UgaW50byBiYWN0ZXJpYSB0dWJlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKG9uRHJvcFN1Y2Nlc3MpYCBvZiBiYWN0ZXJpYSB0dWJlc1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gJGV2ZW50IGRyYWcgZXZlbnQgd2l0aCBwaGFnZSBkYXRhXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgYmFjdGVyaWEgc291cmNlIHBoYWdlIGRyYWdnZWQgdG9cbiAgICovXG4gIGRyb3BQaGFnZUJhY3QoJGV2ZW50OiBhbnksIHNyYzogc3RyaW5nKXtcbiAgICB2YXIgaW5jb21pbmdQaGFnZSA9ICRldmVudC5kYXRhO1xuICAgIGlmKGluY29taW5nUGhhZ2UuaGFzT3duUHJvcGVydHkoJ2lkJykgPT0gZmFsc2Upe1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnT25seSBhZGQgcGhhZ2UgZnJvbSB0aGUgZnJpZGdlJztcbiAgICB9IGVsc2UgaWYodGhpcy5waGFnZS5sZW5ndGggPj0gMikge1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnQ2Fubm90IGhhdmUgbW9yZSB0aGFuIDIgcGhhZ2UgaW4gYSB0dWJlJztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWRkIHBoYWdlIC0gdHlwZSBFeHBlcmltZW50UGhhZ2VcbiAgICAgIHRoaXMucGhhZ2UucHVzaCh7XG4gICAgICAgIGlkOiBpbmNvbWluZ1BoYWdlLmlkLFxuICAgICAgICBzdHJhaW5OdW06IGluY29taW5nUGhhZ2Uuc3RyYWluTnVtLFxuICAgICAgbnVtUGhhZ2U6IENyaWNrZXRHbG9iYWxzLm51bVBoYWdlXG4gICAgICB9KTtcbiAgICAgIHN3aXRjaChzcmMpe1xuICAgICAgICBjYXNlICdCJzpcbiAgICAgICAgICB0aGlzLmlzSGlkZGVuWydLJ10gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdLJzpcbiAgICAgICAgICB0aGlzLmlzSGlkZGVuWydCJ10gPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfX1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgZGlsdXRpb24gdHViZSBjYW4gYmUgZHJhZ2dlZFxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbZHJhZ0VuYWJsZWRdYCBvZiBkaWx1dGlvbiB0dWJlICgwLTMpXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgZGlsdXRpb24gdHViZSBudW1iZXJcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0dWJlIGhhcyBjb250ZW50c1xuICAgKi9cbiAgY2FuRHJhZ0RpbChzcmM6IG51bWJlcik6IGJvb2xlYW57XG4gICAgcmV0dXJuICh0aGlzLmNvbnRlbnRzW3NyY10gIT09IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgY2xhc3NlcyBmb3IgYSBkaWx1dGlvbiB0dWJlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgZGlsdXRpb24gdHViZSBudW1iZXIgKDAtMylcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gYXBwbGljYWJsZSBjbGFzc2VzIGluIHRoZSBmb3JtXG4gICAqIGB7J2NsYXNzJzogYm9vbGVhbiwgLi4ufWBcbiAgICovXG4gIGdldENsYXNzZXNEaWwoc3JjOiBudW1iZXIpOiBPYmplY3Qge1xuICAgIGxldCB0dWJlID0gdGhpcy5jb250ZW50c1tzcmNdO1xuICAgIHJldHVybiB7J2RpbC10dWJlIHRlc3QtdHViZS1vdXRlcic6IHRydWUsXG4gICAgICAgICAgICAndHViZS1iJzogKHR1YmUgIT09IG51bGwgJiYgdHViZS5sYXduVHlwZT09PSdCJyksXG4gICAgICAgICAgICAndHViZS1rJzogKHR1YmUgIT09IG51bGwgJiYgdHViZS5sYXduVHlwZT09PSdLJylcbiAgICAgICAgICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgY2xhc3NlcyBmb3IgYSBkaWx1dGlvbiB0dWJlIGxhYmVsXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgZGlsdXRpb24gdHViZSBudW1iZXIgKDAtMylcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gYXBwbGljYWJsZSBjbGFzc2VzXG4gICAqL1xuICBnZXRDbGFzc2VzRGlsTGFiZWwoc3JjOiBudW1iZXIpOiBPYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICAnZGlsLXZhbHVlJzogdHJ1ZSxcbiAgICAgICdpbnZpc2libGUnOiAhdGhpcy52aXNpYmxlTGFiZWxbc3JjXVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIG9iamVjdCBjYW4gYmUgZHJvcHBlZCBpbiBkaWx1dGlvbiB0dWJlXG4gICAqXG4gICAqIENhbGxlZCBmb3IgYFthbGxvd0Ryb3BdYCBvZiBkaWx1dGlvbiB0dWJlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZXN0IGRpbHV0aW9uIHR1YmUgbnVtYmVyICgwLTMpXG4gICAqXG4gICAqIEByZXR1cm5zIHtmdW5jdGlvbn0gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBgdHJ1ZWAgb3IgYGZhbHNlYCBpZiBvYmplY3QgY2FuIGJlIGRyb3BwZWRcbiAgICovXG4gIGNhbkRyb3BEaWwoZGVzdDogbnVtYmVyKTogYW55IHtcbiAgcmV0dXJuIChkcmFnRGF0YTogYW55KSA9PiB7XG4gICAgaWYoZHJhZ0RhdGEgPT09IG51bGwgfHwgZHJhZ0RhdGEgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZihkcmFnRGF0YS5oYXNPd25Qcm9wZXJ0eSgnc3JjJykgPT09IGZhbHNlKXtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBsZXQgc3JjID0gZHJhZ0RhdGEuc3JjO1xuICAgIGlmKGRlc3QgPT09IDAgJiYgKHNyYyA9PT0gJ0InIHx8IHNyYyA9PT0gJ0snKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGRlc3QgPiAwICYmIHNyYyA9PT0gZGVzdC0xKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59XG4gIC8qKlxuICAgKiBEYXRhIHRvIGJlIGRyYWdnZWQgZnJvbSB0aGUgZGlsdXRpb24gdHViZVxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbZHJhZ0RhdGFdYCBvZiBkaWx1dGlvbiB0dWJlXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgZGlsdXRpb24gdHViZSBudW1iZXIgKDAtMylcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gZGF0YSB3aXRoIGRpbHV0aW9uIHR1YmUgY29udGVudHMgYW5kIHNyY1xuICAgKi9cbiAgZ2V0RGF0YURpbChzcmM6IG51bWJlcik6IE9iamVjdCB7XG4gICAgaWYodGhpcy5jb250ZW50c1tzcmNdICE9PSBudWxsKVxuICAgICAgdGhpcy5jb250ZW50c1tzcmNdWydzcmMnXSA9IHNyYztcbiAgICByZXR1cm4gdGhpcy5jb250ZW50c1tzcmNdO1xuICB9XG5cbiAgLyoqXG4gICAqIERyb3AgY29udGVudHMgZnJvbSBiYWN0IHR1YmUvZGlsdXRpb24gdHViZSBpbnRvIGRpbHV0aW9uIHR1YmVcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAob0Ryb3BTdWNjZXNzKWAgb2YgZGlsdXRpb24gdHViZXNcbiAgICpcbiAgICogQHBhcmFtIHthbnl9ICRldmVudCBkcmFnIGV2ZW50IHdpdGggY29udGVudC9waGFnZSBkYXRhXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXN0IGRlc3QgdHViZSBudW1iZXIgKDAtMylcbiAgICovXG4gIGRyb3BDb250ZW50c0RpbCgkZXZlbnQ6IGFueSwgZGVzdDogbnVtYmVyKXtcbiAgICBsZXQgaW5jb21pbmdEYXQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KCRldmVudC5kYXRhKSk7XG4gICAgaWYoaW5jb21pbmdEYXQuaGFzT3duUHJvcGVydHkoJ2xhd25UeXBlJykgJiYgaW5jb21pbmdEYXQuaGFzT3duUHJvcGVydHkoJ3BoYWdlJykpe1xuICAgICAgLy8gZGlsdXRlXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW5jb21pbmdEYXQucGhhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICBpbmNvbWluZ0RhdC5waGFnZVtpXS5udW1QaGFnZSAvPSB0aGlzLmRpbHV0aW9uVmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRlbnRzW2Rlc3RdID0gaW5jb21pbmdEYXQ7XG4gICAgICBpZihkZXN0IDwgMyl7XG4gICAgICAgIHRoaXMudmlzaWJsZUxhYmVsW2Rlc3QrMV0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gZGlzYWJsZSBkaWx1dGlvbiB2YWx1ZSBjaGFuZ2VzXG4gICAgICB0aGlzLmNhbkVkaXREaWx1dGlvbiA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgY2xhc3NlcyBmb3IgcGxhdGUgZGVwZW5kaW5nIGlmIGVtcHR5LCBmdWxsLCBoYXMgcGhhZ2VcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gYXBwbGljYWJsZSBjbGFzc2VzIGluIHRoZSBmb3JtXG4gICAqIGB7J2NsYXNzJzogYm9vbGVhbiwgLi4ufWBcbiAgICovXG4gIGdldENsYXNzZXNQbGF0ZSgpe1xuICAgIHJldHVybiB7XG4gICAgICAnY29sLTEyIGNvbC1tZC01IHJvdW5kZWQtY2lyY2xlIGJvcmRlciBib3JkZXItZGFyayc6IHRydWUsXG4gICAgICAnYmctc2Vjb25kYXJ5IHRleHQtbGlnaHQnOiB0aGlzLmlzRnVsbCxcbiAgICAgICdiZy1saWdodCB0ZXh0LXByaW1hcnknOiAoIXRoaXMuaXNGdWxsICYmICF0aGlzLmlzRW1wdHkpLFxuICAgICAgJ3RleHQtZGFuZ2VyJzogKHRoaXMubGF3blR5cGUgPT09ICdLJyksXG4gICAgICAndGV4dC1pbmZvJzogKHRoaXMubGF3blR5cGUgPT09ICdCJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBvYmplY3QgY2FuIGJlIGRyb3BwZWQgb24gcGxhdGVcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2FsbG93RHJvcF1gIG9mIHBsYXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHtmdW5jdGlvbn0gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBgdHJ1ZWAgb3IgYGZhbHNlYCBpZiBvYmplY3QgY2FuIGJlIGRyb3BwZWRcbiAgICovXG4gIGNhbkRyb3BQbGF0ZSgpOmFueSB7XG4gICAgcmV0dXJuIChkcmFnRGF0YTogYW55KSA9PiB7XG4gICAgICBsZXQgaW52YWxpZFNyYyA9IFsnQicsICdLJywgJ3NtYWxsJywgJ2xhcmdlJ11cbiAgICBpZihkcmFnRGF0YSA9PT0gbnVsbCB8fCBkcmFnRGF0YSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmKGRyYWdEYXRhLmhhc093blByb3BlcnR5KCdzcmMnKSAmJiBpbnZhbGlkU3JjLmluZGV4T2YoZHJhZ0RhdGEuc3JjKSA9PT0gLTEpe1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIH1cblxuICAvKipcbiAgICogRHJvcCB0dWJlIGNvbnRlbnRzIG9uIHRoZSBwbGF0ZVxuICAgKlxuICAgKiBDYWxsZWQgb24gYChvbkRyb3BTdWNjZXNzKWAgb2YgcGxhdGVcbiAgICpcbiAgICogQHBhcmFtIHthbnl9ICRldmVudCBkcmFnIGV2ZW50IHdpdGggY29udGVudHNcbiAgICovXG4gIGRyb3BPblBsYXRlKCRldmVudDogYW55KXtcbiAgICBsZXQgY29udGVudHMgPSAkZXZlbnQuZGF0YTtcbiAgICAvLyBjaGVjayB3ZSBoYXZlIGV2ZXJ5dGhpbmcgd2UgbmVlZFxuICAgIGlmIChjb250ZW50cy5oYXNPd25Qcm9wZXJ0eSgnbGF3blR5cGUnKSA9PT0gZmFsc2Upe1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnVGhlcmUgaXMgbm8gYmFjdGVyaWEgaW4gdGhlIHR1YmUgZm9yIHBoYWdlIHRvIGdyb3cgb24uJ1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29udGVudHMuaGFzT3duUHJvcGVydHkoJ3BoYWdlJykgPT09IGZhbHNlIHx8IGNvbnRlbnRzLnBoYWdlLmxlbmd0aCA9PT0gMCl7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdUaGVyZSBpcyBubyBwaGFnZSBpbiB0aGUgdHViZS4nXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKGNvbnRlbnRzLnNyYyA9PT0gJ0InIHx8IGNvbnRlbnRzLnNyYyA9PT0gJ0snKXtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0RvIG5vdCBwbGF0ZSBkaXJlY3RseSBmcm9tIGJhY3RlcmlhIHR1YmUnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBnYXRoZXIgZGF0YVxuICAgIHRoaXMubGF3blR5cGUgPSBjb250ZW50cy5sYXduVHlwZTtcbiAgICBsZXQgcGhhZ2UxID0gY29udGVudHMucGhhZ2VbMF07XG4gICAgbGV0IHBoYWdlMiA9IG51bGw7XG4gICAgaWYoY29udGVudHMucGhhZ2UubGVuZ3RoID09PSAyKXtcbiAgICAgIHBoYWdlMiA9IGNvbnRlbnRzLnBoYWdlWzFdO1xuICAgIH1cbiAgICAvLyBwZXJmb3JtIHRoZSBjcm9zc1xuICAgIHRoaXMuX3BlcmZvcm1Dcm9zcyh0aGlzLmxhd25UeXBlLCBwaGFnZTEsIHBoYWdlMik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgdGhlIGV4cGVyaW1lbnQgc2VydmljZSB0byBwZXJmb3JtIHRoZSBjcm9zcyBhbmQgc2F2ZXNcbiAgICogdmFyaWFibGVzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYXduVHlwZSBiYWN0ZXJpYSB1c2VkLCBgXCJCXCJgIG9yIGBcIktcImBcbiAgICogQHBhcmFtIHthbnl9IHBoYWdlMSBmaXJzdCBwaGFnZSBpbiBjcm9zc1xuICAgKiBAcGFyYW0ge2FueX0gcGhhZ2UyIHNlY29uZCBwaGFnZSBpbiBjcm9zcywgb3IgbnVsbFxuICAgKi9cbiAgX3BlcmZvcm1Dcm9zcyhsYXduVHlwZTogc3RyaW5nLCBwaGFnZTE6IEV4cGVyaW1lbnRQaGFnZSwgcGhhZ2UyOiBFeHBlcmltZW50UGhhZ2Upe1xuICAgIGxldCBuZXdQbGF0ZTogUGxhdGVJbnB1dCA9IHtcbiAgICAgIGxhd25UeXBlOiBsYXduVHlwZSxcbiAgICAgIHBoYWdlMTogcGhhZ2UxLFxuICAgICAgcGhhZ2UyOiBwaGFnZTIsXG4gICAgICBzcGVjaWFsczoge30sXG4gICAgICBsb2NhdGlvbjogJ2xhYicsXG4gICAgICBzY2VuYXJpb0RhdGE6IHRoaXMuc2NlbmFyaW9EZXRhaWxzLFxuICAgICAgY2FwYWNpdHk6IENyaWNrZXRHbG9iYWxzLnBsYXRlQ2FwYWNpdHlcbiAgICB9XG4gICAgdGhpcy5fZXhwZXJpbWVudFNlcnZpY2UuY3JlYXRlUGxhdGUobmV3UGxhdGUpXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4vLyAgICAgIGNvbnNvbGUubG9nKCdnZW5vdHlwZXM6JywgcmVzLmdlbm90eXBlcyk7XG4vLyAgICAgIGNvbnNvbGUubG9nKCdzbWFsbCBwbGFxdWU6JywgcmVzLnNtYWxsUGxhcXVlKTtcbi8vICAgICAgY29uc29sZS5sb2coJ2xhcmdlIHBsYXF1ZTonLCByZXMubGFyZ2VQbGFxdWUpO1xuICAgICAgdGhpcy5pc0Z1bGwgPSByZXMuZnVsbDtcbiAgICAgIHRoaXMuc21hbGxQbGFxdWVMaXN0ID0gcmVzLnNtYWxsUGxhcXVlO1xuICAgICAgdGhpcy5sYXJnZVBsYXF1ZUxpc3QgPSByZXMubGFyZ2VQbGFxdWU7XG4gICAgICB0aGlzLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuZ2Vub3R5cGVzID0gcmVzLmdlbm90eXBlcztcbiAgICAgIHRoaXMucGxhdGVQYXJlbnRzID0gcmVzLnBhcmVudHM7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfSwgKGVycik9PntcbiAgICAgIC8vIGVycm9yXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgcGxhcXVlIGZyb20gcGxhdGUgY2FuIGJlIGRyYWdnZWRcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2RyYWdFbmFibGVkXWAgb2YgcGxhcXVlcyBvbiBwbGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIGBcInNtYWxsXCJgIG9yIGBcImxhcmdlXCJgIHBsYXF1ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZXJlIGFyZSBzdGlsbCBwbGFxdWVzIG9mIHRoYXQgc2l6ZVxuICAgKi9cbiAgY2FuRHJhZ1BsYXRlKHNyYzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYoc3JjID09PSAnc21hbGwnKVxuICAgICAgcmV0dXJuIHRoaXMuc21hbGxQbGFxdWVMaXN0Lmxlbmd0aCA+IDA7XG4gICAgZWxzZSAvLyBiaWdcbiAgICAgIHJldHVybiB0aGlzLmxhcmdlUGxhcXVlTGlzdC5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFBpY2sgYSBwbGFxdWUgZnJvbSB0aGUgcGxhdGUgdG8gc2F2ZSB0byB0aGUgZnJpZGdlXG4gICAqXG4gICAqIENhbGxlZCBmb3IgYFtkcmFnRGF0YV1gIG9mIHBsYXF1ZSBvbiBwbGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIGBcInNtYWxsXCJgIG9yIGBcImxhcmdlXCJgIHBsYXF1ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBwaGFnZSBnZW5vdHlwZSBkYXRhXG4gICAqL1xuICBnZXRQaGFnZVBsYXRlKHNyYzogc3RyaW5nKTogR2Vub3R5cGVQaGFnZXtcbiAgICBsZXQgdG1wTGlzdCA9IChzcmMgPT09ICdzbWFsbCcgPyB0aGlzLnNtYWxsUGxhcXVlTGlzdCA6IHRoaXMubGFyZ2VQbGFxdWVMaXN0KTtcbiAgICBpZih0bXBMaXN0Lmxlbmd0aCA9PT0gMCl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHBsYXF1ZSA9IHRtcExpc3RbMF07XG4gICAgbGV0IGdlbm90eXBlSW5kZXggPSBwbGFxdWU7XG4gICAgbGV0IHBoYWdlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmdlbm90eXBlc1tnZW5vdHlwZUluZGV4XSkpO1xuICAgIHBoYWdlWydzcmMnXSA9IHNyYztcbiAgICBwaGFnZVsncGFyZW50cyddID0gdGhpcy5wbGF0ZVBhcmVudHM7XG4gICAgcmV0dXJuIHBoYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgc3VjY2Vzc2Z1bGx5IGRyYWdnZWQgcGhhZ2UgZnJvbSBhdmFpbGFibGUgcGhhZ2UgbGlzdFxuICAgKlxuICAgKiBDYWxsZWQgb24gYChvbkRyYWdTdWNjZXNzKWAgb2YgcGxhcXVlIG9uIHBsYXRlXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgZHJhZyBldmVudCB3aXRoIHBoYWdlIHNhdmVkXG4gICAqL1xuICBhZGRlZFRvRnJpZGdlKCRldmVudCkge1xuICAgIGxldCBzdHJhaW4gPSAkZXZlbnQuZGF0YTtcbiAgICBsZXQgc3JjID0gc3RyYWluLnNyYztcbiAgICBpZihzcmMgPT09ICdzbWFsbCcpe1xuICAgICAgdGhpcy5zbWFsbFBsYXF1ZUxpc3Quc2hpZnQoKTtcbiAgICB9IGVsc2UgeyAvLyBsYXJnZVxuICAgICAgdGhpcy5sYXJnZVBsYXF1ZUxpc3Quc2hpZnQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHBoYWdlIGZyb20gdGhlIHBsYXRlIHdpdGhvdXQgYWRkaW5nIGl0IHRvIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoZGJsY2xpY2spYCBvZiBwbGFxdWUgb24gdGhlIHBsYXRlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgc291cmNlIG9mIHBsYXF1ZSBjbGlja2VkOyBgXCJsYXJnZVwiYCBvciBgXCJzbWFsbFwiYFxuICAgKi9cbiAgZGVsUGhhZ2VQbGF0ZShzcmM6IHN0cmluZyl7XG4gICAgaWYoc3JjID09PSAnc21hbGwnKXtcbiAgICAgIHRoaXMuc21hbGxQbGFxdWVMaXN0LnNoaWZ0KCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0aGlzLmxhcmdlUGxhcXVlTGlzdC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xhYi1yb29tL2xhYi1yb29tLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENyaWNrZXRHbG9iYWxzIH0gZnJvbSAnLi4vLi4vY3JpY2tldC5nbG9iYWxzJztcbmltcG9ydCB7IEV4cGVyaW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vZXhwZXJpbWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IENyaWNrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3JpY2tldC5zZXJ2aWNlJ1xuaW1wb3J0IHsgRnJpZGdlUGhhZ2UsIEV4cGVyaW1lbnRQaGFnZSwgUGxleGVySW5wdXQgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciB0aGUgbXVsdGlwbGV4ZXIgcm9vbSB3aGljaCBhbGxvd3MgZm9yXG4gKiBOeE0gcGhhZ2UgY3Jvc3NlcyBhdCBvbmNlXG4gKlxuICogT2Zmc3ByaW5nIHBoYWdlIGNhbm5vdCBiZSBzYXZlZCB0byB0aGUgZnJpZGdlLCBidXQgdGhlIHVzZXJcbiAqIGdldHMgYSBjb3VudCBvZiBzbWFsbCBhbmQgbGFyZ2UgcGxhcXVlIGZvciBlYWNoIGNyb3NzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGxleGVyLXJvb20nLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL3BsZXhlci1yb29tLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9wbGV4ZXItcm9vbS5zdHlsZS5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgUGxleGVyUm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogRS4gY29saSBzdHJhaW4gY2hvc2VuIHRvIHBsYXRlIG9uXG4gICAqL1xuICBwcml2YXRlIGNob3NlbkJhY3Q6IHN0cmluZyA9ICdub25lJztcbiAgLyoqXG4gICAqIFZhbHVlIHRvIGRpbHV0ZSBudW1iZXIgb2YgcGhhZ2UgYnlcbiAgICovXG4gIHByaXZhdGUgZGlsdXRpb25WYWx1ZTogbnVtYmVyID0gQ3JpY2tldEdsb2JhbHMuZGVmYXVsdFBsZXhlckRpbHV0aW9uO1xuICAvKipcbiAgICogTG9jYXRpb24gY2FsbCB1c2VkIGJ5IGJhY2tlbmRcbiAgICovXG4gIHByaXZhdGUgcGxleGVyVHlwZTogc3RyaW5nID0gJ3BsZXhlcic7XG4gIC8qKlxuICAgKiBTY2VuYXJpbyBkZXRhaWxzIChmcm9tIGZyaWRnZSkgbmVlZGVkIHRvIHBlcmZvcm0gdGhlIHBsZXhlclxuICAgKi9cbiAgcHJpdmF0ZSBzY2VuYXJpb0RldGFpbHM6IHN0cmluZztcbiAgLyoqXG4gICAqIEluZm8gZm9yIHBoYWdlIGFsb25nIHRoZSByb3dzXG4gICAqL1xuICBwcml2YXRlIHJvd3M6IEV4cGVyaW1lbnRQaGFnZVtdO1xuICAvKipcbiAgICogSW5mbyBmb3IgcGhhZ2UgYWxvbmcgdGhlIGNvbHVtbnNcbiAgICovXG4gIHByaXZhdGUgY29sczogRXhwZXJpbWVudFBoYWdlW107XG4gIC8qKlxuICAgKiBDdXJyZW50IG51bWJlciBvZiBzdHJhaW5zIGluIHRoZSByb3dzIGFuZCBjb2x1bW5zLCByZXNwZWN0aXZlbHlcbiAgICovXG4gIHByaXZhdGUgblN0cmFpbnM6IG51bWJlcltdID0gWzAsMF07XG4gIC8qKlxuICAgKiBUaGUgcGxleGVyIHJlc3VsdHM7XG4gICAqIElzIE9iamVjdCBmb3JtIG9mIGEgMi1EIGFycmF5IHdoZXJlIGVhY2ggY2VsbCBoYXMge3NtYWxsUGxhcXVlOiAjLCBsYXJnZVBsYXF1ZTogI31cbiAgICovXG4gIHByaXZhdGUgcmVzdWx0czogT2JqZWN0O1xuICAvKipcbiAgICogUG9zc2libGUgYmFja2VuZCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBwcml2YXRlIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBTY2VuYXJpbyBzZXJ2aWNlIHN1YnNjcmlwdGlvbiBmb3Igc2NlbmFyaW8gZGV0YWlsc1xuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgLyoqXG4gICAqIEV4cGVyaW1lbnQgc2VydmljZSBzdWJzY3JpcHRpb24gdG8gcHJlZm9ybSBwbGV4ZXJcbiAgICovXG4gIHByaXZhdGUgZXhwU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBDb250cm9sIHRoZSBkaWx1dGlvbiBmYWN0b3IgdG8gYSBtaW4vbWF4IHZhbHVlXG4gICAqL1xuICBwcml2YXRlIGRpbHV0aW9uQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gIC8qKlxuICAgKiAtIENTUyBjbGFzc2VzIGZvciB0aGUgc3VibWl0IHNwaW5uZXJcbiAgICogLSBWaXNpYmxlIGFmdGVyIHN1Ym1pdCBidXR0b24gaGl0IGFuZCBiZWZvcmUgcmVzdWx0cyByZWNlaXZlZFxuICAgKi9cbiAgcHJpdmF0ZSBfc3Bpbm5lckNsYXNzOiBPYmplY3QgPSB7XG4gICAgJ2hpZGluZyc6IHRydWUsXG4gICAgJ3NwaW5uaW5nJzogZmFsc2UsXG4gICAgJ29pIG9pLWxvb3AtY2lyY3VsYXInOiB0cnVlXG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZGF0YSBhbmQgc2V0IGRpbHV0aW9uIGNvbnRyb2xcbiAgICpcbiAgICogQHBhcmFtIHtFeHBlcmltZW50U2VydmljZX0gX2V4cGVyaW1lbnRTZXJ2aWNlIHVzZWQgdG8gZ2VuZXJhdGUgdGhlIHJlc3VsdHMgb2YgdGhlIHBsZXhlclxuICAgKiBAcGFyYW0ge0NyaWNrZXRTZXJ2aWNlfSBfc2NlbmFyaW9TZXJ2aWNlIHVzZWQgdG8gZ2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzIG5lZWRlZCB0byBwZXJmb3JtIHBsZXhlclxuICAgKi9cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgX2V4cGVyaW1lbnRTZXJ2aWNlOiBFeHBlcmltZW50U2VydmljZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogQ3JpY2tldFNlcnZpY2Upe1xuICAgIHRoaXMuZGlsdXRpb25Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLm1pbigwLjEpLCBWYWxpZGF0b3JzLm1heCgxMDApXSk7XG4gICAgdGhpcy5fY2xlYXJEYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IGFuZCBnZXQgdGhlIHNjZW5hcmlvIGRldGFpbHNcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmdldFNjZW5hcmlvRGV0YWlsc1xuICAgICAgLnN1YnNjcmliZSgoZGV0YWlscykgPT4gdGhpcy5zY2VuYXJpb0RldGFpbHMgPSBkZXRhaWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0b3J5IHRoZSBjb21wb25lbnQgYW5kIHVuc3Vic2NyaWJlIGFzIG5lZWRlZFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYodGhpcy5leHBTdWJzY3JpcHRpb24pXG4gICAgdGhpcy5leHBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0YWxpemUvY2xlYXIgcm93IGFuZCBjb2x1bW4gcGhhZ2VcbiAgICovXG4gIHByb3RlY3RlZCBfY2xlYXJEYXRhKCl7XG4gICAgdGhpcy5yb3dzID0gW107XG4gICAgdGhpcy5jb2xzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDg7IGkrKyl7XG4gICAgICB0aGlzLnJvd3MucHVzaChudWxsKTtcbiAgICAgIHRoaXMuY29scy5wdXNoKG51bGwpO1xuICAgIH1cbiAgICB0aGlzLm5TdHJhaW5zID0gWzAsMF07XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHBsZXhlciBhbmQgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIHJlc2V0IGJ1dHRvblxuICAgKi9cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmNob3NlbkJhY3QgPSAnbm9uZSc7XG4gICAgdGhpcy5kaWx1dGlvblZhbHVlID0gQ3JpY2tldEdsb2JhbHMuZGVmYXVsdFBsZXhlckRpbHV0aW9uO1xuICAgIHRoaXMucGxleGVyVHlwZSA9ICdwbGV4ZXInO1xuICAgIHRoaXMuX2NsZWFyRGF0YSgpO1xuICAgIHRoaXMucmVzdWx0cyA9IHt9O1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgdGhpcy5fc2V0U3Bpbm5lckNsYXNzKCdyZXNldCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgQ1NTIGNsYXNzZXMgZm9yIGVhY2ggcGhhZ2UgYnV0dG9uIGJhc2VkIG9uIHdoaWNoXG4gICAqIHBoYWdlIHR5cGUgaXMgc2V0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgYnV0dG9uIHRvIGdldCBjbGFzc2VzIGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjbGFzc2VzIHdoaWNoIGFwcGx5IHRvIHRoaXMgYnV0dG9uIGluIHRoZVxuICAgKiBmb3JtIGB7J2NsYXNzJzpib29sZWFuLCAnY2xhc3MyJzogYm9vbGVhbn1gXG4gICAqL1xuICBnZXRUdWJlQ2xhc3NlcyhzcmM6IHN0cmluZyk6IE9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdidG4gYm9yZGVyIGJvcmRlci1zZWNvbmRhcnknOiB0cnVlLFxuICAgICAgJ2Nob3Nlbic6ICh0aGlzLmNob3NlbkJhY3QgPT09IHNyYyksXG4gICAgICAnYnRuLW91dGxpbmUtaW5mbyc6IChzcmM9PT0nQicgJiYgdGhpcy5jaG9zZW5CYWN0ICE9PSBzcmMpLFxuICAgICAgJ2J0bi1pbmZvJzogKHNyYz09PSdCJyAmJiB0aGlzLmNob3NlbkJhY3QgPT09IHNyYyksXG4gICAgICAnYnRuLW91dGxpbmUtZGFuZ2VyJzogKHNyYz09PSdLJyAmJiB0aGlzLmNob3NlbkJhY3QgIT09IHNyYyksXG4gICAgICAnYnRuLWRhbmdlcic6IChzcmM9PT0nSycgJiYgdGhpcy5jaG9zZW5CYWN0ID09PSBzcmMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB1c2VyIGlzIGFibGUgdG8gc3VibWl0IHBsZXhlciBieSBkaXNhYmxpbmdcbiAgICogdGhlIHN1Ym1pdCBidXR0b24gd2hlbiB1bmFibGUgdG8gc3VibWl0XG4gICAqXG4gICAqIEFibGUgdG8gc3VibWl0IG9ubHkgd2hlbjpcbiAgICogMS4gYmFjdGVyaWEgY2hvc2VuXG4gICAqIDIuIGF0IGxlYXN0IG9uZSBwaGFnZSBpbiBlYWNoIHJvdyBhbmQgY29sdW1uXG4gICAqIDMuIGRpbHV0aW9uIHZhbHVlIGlzIHZhbGlkLCBBTkRcbiAgICogNC4gbm90IHN0aWxsIHdhaXRpbmcgZm9yIHByZXZpb3VzIHN1Ym1pdCByZXNwb25zZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogLSBgdHJ1ZWAgaWYgdXNlciBjYW4gc3VibWl0IChhbGwgY29uZGl0aW9ucyBtZXQpXG4gICAqIC0gYGZhbHNlYCBvdGhlcndpc2VcbiAgICovXG4gIHN1Ym1pdERpc2FibGVkKCk6IGJvb2xlYW4ge1xuXG4gICAgLy8gaWYgc3Bpbm5lciBpcyBzcGlubmluZywgZGlzYWJsZVxuICAgIGlmKHRoaXMuX3NwaW5uZXJDbGFzc1snc3Bpbm5pbmcnXSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gZGV0ZXJtaW5lIGlmIGRpc2FibGVkXG4gICAgdmFyIGRpc2FibGVkID0gdGhpcy5jaG9zZW5CYWN0ID09PSAnbm9uZSc7XG4gICAgLy8gY2hlY2sgdGhhdCBhdCBsZWFzdCAxIHBoYWdlIGFkZGVkIGZvciByb3cvY29sXG4gICAgaWYodGhpcy5uU3RyYWluc1swXSA9PT0gMCB8fCB0aGlzLm5TdHJhaW5zWzFdID09PSAwKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaWx1dGlvblZhbHVlIDwgMC4xIHx8IHRoaXMuZGlsdXRpb25WYWx1ZSA+IDIwKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBudWxsIGVsZW1lbnRzIGZyb20gaW5wdXQgYXJyYXkgYW5kIGRpbHV0ZXMgdGhlXG4gICAqIG51bWJlciBvZiBwaGFnZVxuICAgKlxuICAgKiBVc2VkIGJlZm9yZSBzdWJtaXR0aW5nIHJvdy9jb2wgcGhhZ2UgdG8gc2VydmljZVxuICAgKlxuICAgKiBAcGFyYW0ge0V4cGVyaW1lbnRQaGFnZVtdfSBpbkRhdGEgLSBpbnB1dCBhcnJheSB0byBiZSBjbGVhbmVkXG4gICAqIC0gY2FuIGNvbnRhaW4gbnVsbCB2YWx1ZXNcbiAgICpcbiAgICogQHJldHVybnMge0V4cGVyaW1lbnRQaGFnZVtdfVxuICAgKiAtIGNsZWFuZWQgYXJyYXlcbiAgICogLSBkb2VzIG5vdCBjb250YWluIG51bGwgdmFsdWVzXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NsZWFuQXJyYXlzKGluRGF0YTogRXhwZXJpbWVudFBoYWdlW10pOiBFeHBlcmltZW50UGhhZ2VbXXtcbiAgICB2YXIgY2xlYW4gPSBpbkRhdGEuZmlsdGVyKChlbHQpPT57XG4gICAgICByZXR1cm4gZWx0ICE9PSBudWxsXG4gICAgfSkubWFwKChlbHQpPT57XG4gICAgICAgIHJldHVybiB7aWQ6IGVsdC5pZCxcbiAgICAgICAgICAgICAgICBzdHJhaW5OdW06IGVsdC5zdHJhaW5OdW0sXG4gICAgICAgICAgICAgICBudW1QaGFnZTogZWx0Lm51bVBoYWdlIC8gKHRoaXMuZGlsdXRpb25WYWx1ZSAqIDEwMDApXG4gICAgICAgICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsZWFuXG4gIH1cblxuICAvKipcbiAgICogUmVmb3JtYXRzIHRoZSByZXN1bHRzIHRvIHRha2UgaW50byBhY2NvdW50IG9mIG51bGwgaW4gdGhlIHJvd3MvY29sc1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzdWx0cyAtIHJlc3VsdHMgb2YgY29tcHV0aW5nIHRoZSBwbGV4ZXJcbiAgICogLSBkb2VzIG5vdCBjb250YWluIG51bGwgdmFsdWVzXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqIC0gdXBkYXRlZCByZXN1bHRzXG4gICAqIC0gY2FuIGNvbnRhaW4gbnVsbCB2YWx1ZXNcbiAgICovXG4gIHByb3RlY3RlZCBfdW5DbGVhblJlc3VsdHMocmVzdWx0czogT2JqZWN0KTpPYmplY3R7XG4gICAgbGV0IG91dCA9IHt9LFxuICAgICAgICBuZXdDb2xzID0ge307XG4gICAgbGV0IGN1clJvdyA9IDAsXG4gICAgICAgIGN1ckNvbCA9IDA7XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuY29scy5sZW5ndGg7IGorKyl7XG4gICAgICBsZXQgY29sID0gdGhpcy5jb2xzW2pdO1xuICAgICAgaWYoY29sICE9PSBudWxsKXtcbiAgICAgICAgbmV3Q29sc1tjdXJDb2xdID0gajtcbiAgICAgICAgY3VyQ29sICsrO1xuICAgICAgfVxuICAgIH0gLy8gZW5kIGZvciB0aGlzLmNvbHNcbiAgICBmb3IobGV0IGkgaW4gdGhpcy5yb3dzKXtcbiAgICAgIGlmKHRoaXMucm93c1tpXSAhPT0gbnVsbCl7XG4gICAgICAgIGxldCByb3cgPSByZXN1bHRzW2N1clJvd107XG4gICAgICAgIGxldCB0bXAgPSB7fTtcbiAgICAgICAgZm9yKGxldCBqIGluIHJvdyl7XG4gICAgICAgICAgbGV0IG5ld0NvbCA9IG5ld0NvbHNbal07XG4gICAgICAgICAgdG1wW25ld0NvbF0gPSByb3dbal07XG4gICAgICAgIH1cbiAgICAgICAgb3V0W2ldID0gdG1wO1xuICAgICAgICBjdXJSb3crKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzcGlubmVyIENTUyBjbGFzc2VzIGJhc2VkIG9uIHRoZSBpbnB1dCBzdGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3Q2xhc3MgdXBkYXRlZCBzdGF0ZSBmb3IgdGhlIHNwaW5uZXJcbiAgICovXG4gIHByaXZhdGUgX3NldFNwaW5uZXJDbGFzcyhuZXdDbGFzczogc3RyaW5nKXtcbiAgICB0aGlzLl9zcGlubmVyQ2xhc3NbJ2hpZGluZyddID0gKG5ld0NsYXNzID09PSBcInNwaW5uaW5nXCIgPyBmYWxzZSA6IHRydWUpO1xuICAgICB0aGlzLl9zcGlubmVyQ2xhc3NbJ3NwaW5uaW5nJ10gPSAobmV3Q2xhc3MgPT09IFwic3Bpbm5pbmdcIiA/IHRydWUgOiBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IENTUyBjbGFzc2VzIGZvciB0aGUgc3Bpbm5lclxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBDU1MgY2xhc3NlcyBmb3IgdGhlIHNwaW5uZXIgaW4gdGhlIGZvcm1cbiAgICogYHsnY2xhc3MnOiBib29sZWFuLCAuLi59YFxuICAgKi9cbiAgZ2V0U3Bpbm5lckNsYXNzKCl7XG4gICAgcmV0dXJuIHRoaXMuX3NwaW5uZXJDbGFzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGV4cGVyaW1lbnQgZGF0YSBhbmQgc3VibWl0cyB0byBzZXJ2aWNlIHRvIGdldCByZXN1bHRzXG4gICAqIG9mIHRoZSBtdWx0aXBsZXhlclxuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIHN1Ym1pdCBidXR0b25cbiAgICovXG4gIHBlcmZvcm1QbGV4ZXIoKXtcbiAgICAvLyBzZXQgdGhlIHNwaW5uZXJcbiAgICB0aGlzLl9zZXRTcGlubmVyQ2xhc3MoJ3NwaW5uaW5nJyk7XG4gICAgLy8gY2xlYW4gdGhlIHJvdyBhbmQgY29sdW1uIGFycmF5c1xuICAgIGxldCB0bXBSb3dzID0gdGhpcy5yb3dzO1xuICAgIGxldCBjbGVhblJvd3MgPSB0aGlzLl9jbGVhbkFycmF5cyh0bXBSb3dzKTtcbiAgICBsZXQgY2xlYW5Db2xzID0gdGhpcy5fY2xlYW5BcnJheXModGhpcy5jb2xzKTtcbiAgICAvLyBnYXRoZXIgZGF0YVxuICAgIHZhciBkYXRhOiBQbGV4ZXJJbnB1dCA9IHtcbiAgICAgIGxhd25UeXBlOiB0aGlzLmNob3NlbkJhY3QsXG4gICAgICByb3dQaGFnZTogY2xlYW5Sb3dzLFxuICAgICAgY29sUGhhZ2U6IGNsZWFuQ29scyxcbiAgICAgIHNwZWNpYWxzOiB7fSxcbiAgICAgIGxvY2F0aW9uOiB0aGlzLnBsZXhlclR5cGUsXG4gICAgICBzY2VuYXJpb0RhdGE6IHRoaXMuc2NlbmFyaW9EZXRhaWxzLFxuICAgICAgY2FwYWNpdHk6IENyaWNrZXRHbG9iYWxzLnBsZXhlckNhcGFjaXR5XG4gICAgfTtcbiAgICAvLyB1c2UgdGhlIHNlcnZpY2VcbiAgICB0aGlzLmV4cFN1YnNjcmlwdGlvbiA9IHRoaXMuX2V4cGVyaW1lbnRTZXJ2aWNlLnBlcmZvcm1QbGV4ZXIoZGF0YSlcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICB0aGlzLnJlc3VsdHMgPSB0aGlzLl91bkNsZWFuUmVzdWx0cyhyZXMpO1xuICAgICAgdGhpcy5fc2V0U3Bpbm5lckNsYXNzKCdoaWRpbmcnKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICB0aGlzLl9zZXRTcGlubmVyQ2xhc3MoJ2hpZGluZycpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBwaGFnZSB0byByb3cgb3IgY29sdW1uIG9mIHBsZXhlclxuICAgKiB3aGVuIHN1Y2Nlc3NmdWwsIHVwZGF0ZXMgdGhlIHJvdy9jb2wgcGhhZ2UgY291bnRzXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKG9uRHJvcFN1Y2Nlc3MpYCBvZiByb3cvY29sIGhlYWRlclxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gJGV2ZW50IGRyYWdFdmVudDsgaW5jbHVkZXMgcGhhZ2UgZGF0YVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyIGRpcmVjdGlvbjsgYWRkIHRvIGByb3dgIG9yIGBjb2xgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcG90IHBvc2l0aW9uIHRvIGFkZCBwaGFnZVxuICAgKi9cbiAgYWRkUGhhZ2UoJGV2ZW50OiBhbnksIGRpcjogc3RyaW5nLCBzcG90OiBudW1iZXIpe1xuICAgIGxldCBmcGhhZ2U6IEZyaWRnZVBoYWdlID0gJGV2ZW50LmRhdGE7XG4gICAgbGV0IHBoYWdlOiBFeHBlcmltZW50UGhhZ2UgPSB7XG4gICAgICBpZDogZnBoYWdlLmlkLFxuICAgICAgc3RyYWluTnVtOiBmcGhhZ2Uuc3RyYWluTnVtLFxuICAgICAgbnVtUGhhZ2U6IENyaWNrZXRHbG9iYWxzLm51bVBoYWdlXG4gICAgfVxuICAgIC8vIGFkZCB0byByb3dcbiAgICBpZihkaXIgPT09ICdyb3cnICYmIHNwb3QgPCA4KXtcbiAgICAgIHRoaXMucm93c1tzcG90XSA9IHBoYWdlO1xuICAgICAgdGhpcy5uU3RyYWluc1swXSA9IHRoaXMucm93cy5maWx0ZXIoZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlICE9PSBudWxsIH0pLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKHNwb3QgPCA4KSB7IC8vIGNvbHVtblxuICAgICAgdGhpcy5jb2xzW3Nwb3RdID0gcGhhZ2U7XG4gICAgICB0aGlzLm5TdHJhaW5zWzFdID0gdGhpcy5jb2xzLmZpbHRlcihmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWUgIT09IG51bGwgfSkubGVuZ3RoO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENyaWNrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3JpY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IENyaWNrZXRHbG9iYWxzIH0gZnJvbSAnLi4vLi4vY3JpY2tldC5nbG9iYWxzJztcbmltcG9ydCB7IHJlYWRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcmVhZC1lcnJvcic7XG5cbi8qKlxuICogVGhpcyByb29tIGlzIHVzZWQgZm9yIHN0dWRlbnRzIHRvIHN1Ym1pdCB0aGVpciBkZWxldGlvbiBndWVzc2VzXG4gKiBmb3IgcGhhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2RlbC1yb29tJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9tb2RlbC1yb29tLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9tb2RlbC1yb29tLnN0eWxlLmNzcycpXVxufSlcblxuZXhwb3J0IGNsYXNzIE1vZGVsUm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogQ3VycmVudCB1c2VyIGd1ZXNzZXMgYXMgb2JqZWN0XG4gICAqL1xuICBwcml2YXRlIGd1ZXNzZXM6IGFueTtcbiAgLyoqXG4gICAqIEFycmF5IG9mIHN0cmFpbiBudW1iZXJzIGluY2x1ZGVkXG4gICAqL1xuICBwcml2YXRlIGtleXM6IG51bWJlcltdO1xuICAvKipcbiAgICpcbiAgICovXG4gIHByaXZhdGUgZ2VuZUFyOiBudW1iZXJbXTtcbiAgLyoqXG4gICAqIFNpemUgb2YgZWFjaCBibG9ja1xuICAgKi9cbiAgcHJpdmF0ZSBzdGVwU2l6ZTogbnVtYmVyO1xuICAvKipcbiAgICogU2NlbmFyaW8gY29kZVxuICAgKi9cbiAgcHJpdmF0ZSBzY2VuYXJpb0lkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVc2VyIGlkXG4gICAqL1xuICBwcml2YXRlIHVzZXJJZDogbnVtYmVyO1xuICAvKipcbiAgICogUG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZXNcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIENTUyB3aWR0aCBvZiBlYWNoIGJsb2NrIGRlcGVuZGVudCBvbiBsZW5ndGggb2YgZ2VuZSBhbmQgc3RlcCBzaXplXG4gICAqL1xuICBwcml2YXRlIF93aWR0aDogc3RyaW5nO1xuICAvKipcbiAgICogQm9vbGVhbiBzdGF0ZSB2YXJpYWJsZSB1c2VkIHRvIG1ha2UgdW5zdWJzY3JpYmluZyBmcm9tXG4gICAqIG11bHRpcGxlIHNlcnZpY2VzIGVhc2llclxuICAgKi9cbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCQ6IFN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBDcmlja2V0U2VydmljZSl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgdGhpcy5zdGVwU2l6ZSA9IENyaWNrZXRHbG9iYWxzLmRlbGV0aW9uR3Vlc3NMZW5ndGg7XG4gICAgdGhpcy5nZW5lQXIgPSBbXTtcbiAgICBsZXQgbkJsb2NrczogbnVtYmVyID0gTWF0aC5jZWlsKENyaWNrZXRHbG9iYWxzLmdlbmVMZW5ndGgvdGhpcy5zdGVwU2l6ZSk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG5CbG9ja3M7IGkrKyl7XG4gICAgICB0aGlzLmdlbmVBci5wdXNoKGkpO1xuICAgIH1cbiAgICB0aGlzLl93aWR0aCA9ICgxMDAgLyBuQmxvY2tzKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgdXNlciBpZFxuICAgKiAyLiBHZXQgdGhlIHNjZW5hcmlvIGlkIGZyb20gcGFyZW50IFVSTFxuICAgKiAzLiBHZXQgdXNlciBndWVzc2VzIGZyb20gc2NlbmFyaW8gc2VydmljZSAoc2V0IGJ5IGZyaWRnZSlcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgbGV0IHUgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuICAgIGlmKHUpe1xuICAgICAgdGhpcy51c2VySWQgPSB1LmlkO1xuICAgIH1cbiAgICB0aGlzLnNjZW5hcmlvSWQgPSB0aGlzLl9yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzY2VuSWQnKTtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0R3Vlc3Nlc1xuICAgICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKGRlbHMpID0+IHtcbiAgICAgIHRoaXMuZ3Vlc3NlcyA9IGRlbHM7XG5cbiAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKGRlbHMpLm1hcCgoayk9PiB7cmV0dXJuIE51bWJlci5wYXJzZUludChrKTt9KTtcbiAgICAgIGlmKHRoaXMua2V5cy5sZW5ndGggPT09IDApe1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdObyBwaGFnZSBhdmFpbGFibGUgZm9yIG1vZGVsbGluZydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICB9XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIGNvbXBvbmVudCBieSB1bnN1YnNjcmliaW5nXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIENTUyBjbGFzc2VzIGZvciBhIHN0cmFpbiBndWVzcyBibG9ja1xuICAgKiBCbG9jayBpbmRpY2F0ZXMgd2hlYXRlciB1c2VyIHRoaW5rcyB0aGF0IHNlY3Rpb24gb2YgdGhlIGNocm9tb3NvbWVcbiAgICogaXMgZGVsZXRlZCBpbiB0aGUgc3RyYWluXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJhaW4gLSBzdHJhaW4gbnVtYmVyIChtYXRjaGVzIG51bW1iZXIgaXMgZnJpZGdlKVxuICAgKiBAcGFyYW0ge251bWJlcn0gcG9zIC0gYmxvY2sgaW5kZXhcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gYXBwbGljYWJsZSBDU1MgY2xhc3NlcyBpbiB0aGUgZm9ybVxuICAgKiBgeydjbGFzcyc6IGJvb2xlYW4sIC4uLn1gXG4gICAqL1xuICBnZXRCbG9ja0NsYXNzKHN0cmFpbjogbnVtYmVyLCBwb3M6IG51bWJlcil7XG4gICAgbGV0IHBvc0d1ZXNzID0gdGhpcy5ndWVzc2VzW3N0cmFpbl1bcG9zXTtcbiAgICByZXR1cm4ge1xuICAgICAgJ2d1ZXNzLWJsb2NrIGJ0biBwLTAnOiB0cnVlLFxuICAgICAgJ2J0bi1vdXRsaW5lLXNlY29uZGFyeSc6ICFwb3NHdWVzcywgLy8gaW5hY3RpdmVcbiAgICAgICdiZy1kYXJrJzogcG9zR3Vlc3MgLy8gYWN0aXZlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBibG9jayBndWVzcyBmcm9tIHRydWUgdG8gZmFsc2UgT1IgZmFsc2UgdG8gdHJ1ZVxuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIHRoZSBibG9ja1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RyYWluIC0gc3RyYWluIG51bWJlciAobWF0Y2hlcyBudW1tYmVyIGlzIGZyaWRnZSlcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBvcyAtIGJsb2NrIGluZGV4XG4gICAqL1xuICB0b2dnbGVCbG9jayhzdHJhaW46IG51bWJlciwgcG9zOiBudW1iZXIpe1xuICAgIGxldCBjID0gdGhpcy5ndWVzc2VzW3N0cmFpbl1bcG9zXTtcbiAgICB0aGlzLmd1ZXNzZXNbc3RyYWluXVtwb3NdID0gIWM7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIGd1ZXNzZXMgdG8gdGhlIGJhY2tlbmQvZGF0YWJhc2UgdXNpbmcgdGhlIHNlcnZpY2VcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAoY2xpY2spYCBvZiBTYXZlIEJ1dHRvblxuICAgKi9cbiAgc2F2ZURhdGEoKXtcbiAgICAvLyBjbGVhciBlcnJvciBtZXNzYWdlIGJlZm9yZWhhbmRcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIC8vIHVzZSBzZXJ2aWNlIGFuZCBzYXZlIGRhdGEgKGFzIGEgc3RyaW5nKVxuICAgIGxldCBvdXQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmd1ZXNzZXMpXG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlXG4gICAgICAuc2F2ZURlbGV0aW9ucyh0aGlzLmd1ZXNzZXMsIHRoaXMudXNlcklkLCB0aGlzLnNjZW5hcmlvSWQpXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgoZGF0KT0+e1xuICAgICAgdGhpcy5ndWVzc2VzID0gSlNPTi5wYXJzZShkYXQpO1xuICAgICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLnNldFNjZW5hcmlvKG51bGwsIGRhdCk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL21vZGVsLXJvb20vbW9kZWwtcm9vbS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ3JpY2tldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jcmlja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NlbmFyaW8gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBzaG93cyB0aGUgc2NlbmFyaW8gZGV0YWlscyBpbmNsdWRpbmdcbiAqIDEuIHB1cnBvc2UgLSB0aGUgZ29hbCBvZiB0aGUgc2NlbmFyaW8sIHVzdWFsbHkgZWl0aGVyIGlkZW50aWZ5IG11dGF0aW9ucyBvZiBnaXZlbiB1bmtub3duIHBoYWdlIG9yIGNyZWF0ZSBwaGFnZSB3aXRoIGNlcnRhaW4gbXV0YXRpb25cbiAqIDIuIHJlbGV2YW5jZSAtIHdoeSB0aGUgc2NlbmFyaW8gaXMgcmVsZXZhbnQgZm9yIGxlYXJuaW5nIGFuZCBmdXR1cmUgc2NlbmFyaW9zXG4gKiAzLiBzdGFydGluZyBwb2ludCAtIGRlc2NyaXB0aW9uIG9mIHRoZSBwaGFnZSBzdHVkZW50cyBzdGFydCB0aGUgc2NlbmFyaW8gd2l0aFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYW5kaW5nLXJvb20nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9sYW5kaW5nLXJvb20udGVtcGxhdGUuaHRtbCcpXG59KVxuXG5leHBvcnQgY2xhc3MgTGFuZGluZ1Jvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHNjZW5hcmlvIHdlIGFyZSB2aWV3aW5nXG4gICAqL1xuICBzY2VuYXJpbzogU2NlbmFyaW87XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gdG8gdGhlIGdldFNjZW5hcmlvIG1ldGhvZCBvZiBzY2VuYXJpbyBzZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogYW55O1xuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgY29udHJ1Y3RvclxuICAgKiBAcGFyYW0ge1JvdXRlcn0gX3JvdXRlciBBbmd1bGFyIHJvdXRlclxuICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlfSBfcm91dGUgVGhlIGN1cnJlbnQgVVJMIHJvdXRlIHRvIGdldCBzY2VuYXJpbyBpZFxuICAgKiBAcGFyYW0ge0NyaWNrZXRTZXJ2aWNlfSBfc2NlbmFyaW9TZXJ2aWNlIFNlcnZpY2UgdG8gZ2V0IHNjZW5hcmlvIGluZm9ybWF0aW9uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogQ3JpY2tldFNlcnZpY2Upe1xuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50XG4gICAqIDEuIEdldCBzY2VuQ29kZSBmcm9tIHRoZSB1cmwgKHVzZSBwYXJhbWV0ZXIgZnJvbSBwYXJlbnQgcm91dGUgYmVjYXVzZSB0aGlzIHJvdXRlIGVuZHMgXCIvbGFuZGluZy1yb29tXCIpXG4gICAqIDIuIEdldCB0aGUgZGV0YWlscyBmb3Igc2NlbmFyaW9zXG4gICAqIElmIGVycm9yLCBnbyBiYWNrIHRvIGhvbWUgcGFnZVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICBsZXQgc2NlbklkID0gdGhpcy5fcm91dGUucGFyZW50LnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc2NlbklkJyk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9zY2VuYXJpb1NlcnZpY2VcbiAgICAgIC5nZXRTY2VuYXJpbyhzY2VuSWQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgc2NlbmFyaW8gPT4ge1xuICAgICAgICB0aGlzLnNjZW5hcmlvID0gc2NlbmFyaW87XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBkZXN0cm95aW5nIHRoZSBjb21wb25lbnQsIHVuc3Vic2NyaWJlIGlmIG5lY2Vzc2FyeSB0b1xuICAgKiBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgKi9cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBpZih0aGlzLnN1YnNjcmlwdGlvbilcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xhbmRpbmctcm9vbS9sYW5kaW5nLXJvb20uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE5nYkFjdGl2ZU1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEZyaWRnZVBoYWdlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9waGFnZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIE1vZGFsIGRpYWxvZyBib3ggZm9yIGluZGl2aWR1YWwgcGhhZ2Ugc3RyYWluc1xuICogVXNlZCB0byBlZGl0IHBoYWdlIGNvbW1lbnQsIHZpZXcgcGhhZ2UgcGFyZW50cywgb3IgZGVsZXRlIHBoYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BoYWdlLWRpYWxvZy1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGhhZ2UtZGlhbG9nLnRlbXBsYXRlLmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBQaGFnZURpYWxvZ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgcGhhZ2Ugd2UgYXJlIHZpZXdpbmdcbiAgICovXG4gIEBJbnB1dCgpIHBoYWdlOiBGcmlkZ2VQaGFnZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKSB7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvY3JpY2tldC9mcmlkZ2UvcGhhZ2UtZGlhbG9nLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2NhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nZ2VkSW5HdWFyZCB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2xvZ2dlZC1pbi5ndWFyZC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTGFiUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vbGFiLXJvb20vbGFiLXJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IFBsZXhlclJvb21Db21wb25lbnQgfSBmcm9tICcuL3BsZXhlci1yb29tL3BsZXhlci1yb29tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RlbFJvb21Db21wb25lbnQgfSBmcm9tICcuL21vZGVsLXJvb20vbW9kZWwtcm9vbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFuZGluZ1Jvb21Db21wb25lbnQgfSBmcm9tICcuL2xhbmRpbmctcm9vbS9sYW5kaW5nLXJvb20uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IExvY2F0aW9uUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IExvY2F0aW9uQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlOiBbTG9nZ2VkSW5HdWFyZF0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2xhYi1yb29tJyxcbiAgICAgICAgY29tcG9uZW50OiBMYWJSb29tQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnM6ICdMYWInXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdwbGV4ZXItcm9vbScsXG4gICAgICAgIGNvbXBvbmVudDogUGxleGVyUm9vbUNvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGJyZWFkY3J1bWJzOiAnUGxleGVyJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnbW9kZWwtcm9vbScsXG4gICAgICAgIGNvbXBvbmVudDogTW9kZWxSb29tQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnM6ICdNb2RlbCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgcGF0aDogJ2luZm8nLCBjb21wb25lbnQ6IExhbmRpbmdSb29tQ29tcG9uZW50fSxcbiAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogTGFuZGluZ1Jvb21Db21wb25lbnR9XG4gICAgXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sb2NhdGlvbi5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbG9jYXRpb24udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xvY2F0aW9uLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbG9jYXRpb24uc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbG9jYXRpb24uc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5NzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xhYi1yb29tL2xhYi1yb29tLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xhYi1yb29tL2xhYi1yb29tLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xhYi1yb29tL2xhYi1yb29tLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vcGxleGVyLXJvb20vcGxleGVyLXJvb20udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20uc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sYW5kaW5nLXJvb20vbGFuZGluZy1yb29tLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sYW5kaW5nLXJvb20vbGFuZGluZy1yb29tLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nYk1vZGFsLCBNb2RhbERpc21pc3NSZWFzb25zIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDcmlja2V0U2VydmljZSB9IGZyb20gJy4uL2NyaWNrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENyaWNrZXRHbG9iYWxzIH0gZnJvbSAnLi4vY3JpY2tldC5nbG9iYWxzJztcbmltcG9ydCB7IFBoYWdlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9waGFnZS1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRnJpZGdlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mcmlkZ2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IEZyaWRnZVBoYWdlLCBHZW5vdHlwZVBoYWdlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9waGFnZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBPbmUgb2YgdGhlIG1haW4gY29tcG9uZW50cyBvZiB0aGUgYXBwIC0gdGhlIGZyaWRnZSBzdG9yZXMgdGhlIHBoYWdlIGZvclxuICogdGhlIGdpdmVuIHVzZXIvc2NlbmFyaW9cbiAqXG4gKiBOZWVkcyB0byBnZXQgZXhpc3RpbmcgZnJpZGdlL2NyZWF0ZSBuZXcgb25lOyBlZGl0IGFuZCByZW1vdmUgZXhpc3Rpbmcgc3RyYWlucztcbiAqXG4gKiBhZGQgbmV3IHN0cmFpbnM7IGNoYW5nZSBzaGVsZlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZyaWRnZScsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vZnJpZGdlLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9mcmlkZ2Uuc3R5bGUuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEZyaWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95e1xuXG4gIC8qKlxuICAgKiBUaGUgbG9nZ2VkIGluIHVzZXJcbiAgICovXG4gIHByaXZhdGUgdXNlcjogVXNlcjtcbiAgLyoqXG4gICAqIFRoZSBmcmlkZ2Ugb2JqZWN0XG4gICAqL1xuICBmcmlkZ2U6IEZyaWRnZTtcbiAgLyoqXG4gICAqIGxpc3Qgb2Ygc3RyYWlucyBpbiB0aGUgZnJpZGdlLCBpbmNsdWRpbmcgZW1wdHkgb25lc1xuICAgKi9cbiAgc3RyYWluczogRnJpZGdlUGhhZ2VbXTtcbiAgLyoqXG4gICAqIGN1cnJlbnRseSB2aXNpYmxlIHN0cmFpbnMgYmFzZWQgb24gc2hlbGYgbnVtYmVyXG4gICAqL1xuICBjdXJyU3RyYWluczogRnJpZGdlUGhhZ2VbXTtcbiAgLyoqXG4gICAqIGN1cnJlbnQgc2hlbGZcbiAgICovXG4gIHNoZWxmOiBudW1iZXIgPSAwO1xuICAvKipcbiAgICogbWF4aW11bSBudW1iZXIgb2Ygc2hlbHZlcyBpbiBmcmlkZ2VcbiAgICovXG4gIG1heFNoZWxmOiBudW1iZXI7XG4gIC8qKlxuICAgKiBudW1iZXIgb2Ygc2xvdHMgcGVyIHNoZWxmXG4gICAqL1xuICBzcG90czogbnVtYmVyO1xuICAvKipcbiAgICogcG90ZW50aWFsIGJhY2tlbmQgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIFN0YXRlIHRvIG1vbml0aW9yIGlmIGNvbXBvbmVudCBhY3RpdmUgdG8gbWFrZSB1bnN1YnNjcmliaW5nIHRvXG4gICAqIG11bHRpcGxlIHN0cmVhbXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcbiAgLyoqXG4gICAqIE9ic2VydmVzIHRoZSBzY2VuQ29kZSBvZiB0aGUgVVJMXG4gICAqL1xuICBwcml2YXRlIHBhcmFtT2JzZXJ2ZXI6IGFueTtcblxuICBwcml2YXRlIG5leHRTcG90OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgX3NjZW5hcmlvU2VydmljZTogQ3JpY2tldFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTmdiTW9kYWwpIHtcbiAgICB0aGlzLm1heFNoZWxmID0gQ3JpY2tldEdsb2JhbHMubkZyaWRnZVNoZWxmO1xuICAgIHRoaXMuc3BvdHMgPSBDcmlja2V0R2xvYmFscy5uRnJpZGdlU3BvdHM7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRhaWxpemUgdGhlIGZyaWRnZSB3aGVuIGNyZWF0aW5nIGNvbXBvbmVudFxuICAgKiAxLiBHZXQgbG9nZ2VkIGluIHVzZXIgYW5kIGN1cnJlbnQgc2NlbmFyaW9cbiAgICogMi4gRmV0Y2ggdGhlIGNvcnJlc3BvbmRpbmcgZnJpZGdlXG4gICAqIDNhLiBJZiB0aGUgZnJpZGdlIGRvZXNuJ3QgZXhpc3QgeWV0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAqIDNiLiBJZiB0aGUgZnJpZGdlIGRvZXMgZXhpc3QsIGluaXRpYWxpemUgaXRcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy51c2VyID0gdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXIoKTtcblxuICAgIGxldCB1c2VySWQgPSB0aGlzLnVzZXIuaWQ7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgbGV0IHNjZW5JZCA9IHBhcmFtc1snc2NlbklkJ107XG4gICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0RnJpZGdlKHVzZXJJZCwgc2NlbklkKVxuICAgICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChmcmlkZ2UpID0+IHt0aGlzLl9pbml0RnJpZGdlKGZyaWRnZSl9LFxuICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmKGVyci5zdGF0dXMgPT09IDMwNyl7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVGcmlkZ2UodXNlcklkLCBzY2VuSWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICB9IH1cbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgdGhlIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgZnJvbSBzZXJ2aWNlc1xuICAgKiB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMucGFyYW1PYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGZyaWRnZSBiZWNhdXNlIHRoaXMgdXNlciBkb2Vzbid0IGhhdmUgb25lIGZvciB0aGlzIHNjZW5hcmlvXG4gICAqXG4gICAqIE9uIHN1Y2Nlc3MsIGluaWFsaXplcyBmcmlkZ2VcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHVzZXJJZCAtIGxvZ2dlZCBpbiB1c2VyJ3MgaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjZW5JZCAtIGN1cnJlbnQgc2NlbmFyaW8gaWRcbiAgICovXG4gIF9jcmVhdGVGcmlkZ2UodXNlcklkOiBudW1iZXIsIHNjZW5JZDogc3RyaW5nKXtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuY3JlYXRlRnJpZGdlKHVzZXJJZCwgc2NlbklkKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChmcmlkZ2UpPT57XG4gICAgICB0aGlzLl9pbml0RnJpZGdlKGZyaWRnZSk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGlhbGl6ZXMgdGhlIGZyaWRnZSBhbmQgY29tcG9uZW50IHZhcmlhYmxlcyByZWxhdGVkIHRvIHdoaWNoIHN0cmFpbnMgYXJlXG4gICAqIHZpc2libGUgYmFzZWQgb24gdGhlIGN1cnJlbnQgc2hlbGZcbiAgICpcbiAgICogQHBhcmFtIHtGcmlkZ2V9IG5ld0ZyaWRnZSAtIGZyaWRnZSBvYmplY3QgdG8gYmUgaW5pdGFsaXplZFxuICAgKi9cbiAgX2luaXRGcmlkZ2UobmV3RnJpZGdlOiBGcmlkZ2Upe1xuICAgIHRoaXMuZnJpZGdlID0gbmV3RnJpZGdlO1xuICAgIHRoaXMuc3RyYWlucyA9IHRoaXMuX2ZpbGxTdHJhaW5zKG5ld0ZyaWRnZS5zdHJhaW5zKTtcbiAgICB0aGlzLl9jdXJyU3RyYWlucygpO1xuICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5zZXRTY2VuYXJpbyhuZXdGcmlkZ2Uuc2NlbmFyaW9EZXRhaWxzLCBuZXdGcmlkZ2UuZ3Vlc3Nlcyk7XG4gIH1cblxuICAvKipcbiAgICogRmlsbHMgaW4gdGhlIGVtcHR5IHNsb3RzIHdpdGggXCJlbXB0eVwiIHBoYWdlIG9iamVjdHNcbiAgICpcbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZVtdfSBmcmlkZ2VTdHJhaW5zIC0gYXJyYXkgb2Ygc3RyYWlucyBhY3R1YWxseSBpbiB0aGUgZnJpZGdlXG4gICAqXG4gICAqIEByZXR1cm5zIHtGcmlkZ2VQaGFnZVtdfSBhcnJheSBvZiBhbGwgc2xvdHMgaW4gZnJpZGdlLCBpbmNsdWRpbmcgZW1wdHlcbiAgICovXG4gIF9maWxsU3RyYWlucyhmcmlkZ2VTdHJhaW5zOiBGcmlkZ2VQaGFnZVtdKTogRnJpZGdlUGhhZ2VbXXtcbiAgICB2YXIgb3V0OiBGcmlkZ2VQaGFnZVtdID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubWF4U2hlbGYqdGhpcy5zcG90czsgaSsrKXtcbiAgICAgIG91dC5wdXNoKHtzdHJhaW5OdW06IGksIHBoYWdlVHlwZTogJ2VtcHR5JywgY29tbWVudDogJycsIGlkOiAnJ30pO1xuICAgIH1cbiAgICB0aGlzLm5leHRTcG90ID0gZnJpZGdlU3RyYWluc1swXS5zdHJhaW5OdW0gKyAxO1xuICAgIC8vIGFkZCBvcmlnaW5hbCBzdHJhaW5zXG4gICAgZm9yKGxldCBpPTA7IGkgPCBmcmlkZ2VTdHJhaW5zLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBuID0gZnJpZGdlU3RyYWluc1tpXS5zdHJhaW5OdW07XG4gICAgICBvdXRbbl0gPSBmcmlkZ2VTdHJhaW5zW2ldO1xuICAgICAgdGhpcy5uZXh0U3BvdCA9IChuID09PSB0aGlzLm5leHRTcG90ID8gbisxIDogdGhpcy5uZXh0U3BvdCk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBzdHJhaW5zIGZvciB2aXNpYmxlIHNoZWxmXG4gICAqL1xuICBfY3VyclN0cmFpbnMoKXtcbiAgICBsZXQgc3RhcnQgPSB0aGlzLnNoZWxmKnRoaXMuc3BvdHM7XG4gICAgbGV0IGVuZCA9IHN0YXJ0K3RoaXMuc3BvdHM7XG4gICAgdGhpcy5jdXJyU3RyYWlucyA9IHRoaXMuc3RyYWlucy5zbGljZShzdGFydCxlbmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgQ1NTIGNsYXNzZXMgYXBwbGljYWJsZSB0byB0aGUgcGhhZ2UgYmFzZWQgb24gdGhlIHBoYWdlIHR5cGVcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyYyAtIHN0cmFpbiBudW1iZXIgb2YgcGhhZ2VcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gY2xhc3NlcyB3aGljaCBhcHB5IHRvIHRoaXMgYnV0dG9uIGluIHRoZSBmb3JtIHtcImNsYXNzXCI6IGJvb2xlYW4sIC4uLn1cbiAgICovXG4gIGdldFBoYWdlQ2xhc3Moc3JjOiBudW1iZXIpOiBPYmplY3R7XG4gICAgbGV0IHBoYWdlID0gdGhpcy5zdHJhaW5zW3NyY107XG4gICAgcmV0dXJuIHtcbiAgICAgICdjb2wtNyBjb2wteGwtOCBwLTAgc3RyYWluLWltYWdlJzogdHJ1ZSxcbiAgICAgICdzdHJhaW4taW1hZ2UtcmVmZXJlbmNlJzogcGhhZ2UucGhhZ2VUeXBlID09PSAncmVmZXJlbmNlJyxcbiAgICAgICdzdHJhaW4taW1hZ2UtdW5rbm93bic6IHBoYWdlLnBoYWdlVHlwZSA9PT0gJ3Vua25vd24nLFxuICAgICAgJ3N0cmFpbi1pbWFnZS1zdWJtaXR0ZWQnOiBwaGFnZS5zdWJtaXR0ZWRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2Ugb3IgZGVjcmVhc2UgdmlzaWJsZSBzaGVsZiB0aGVuIHVwZGF0ZSB0aGUgdmlzaWJsZSBzdHJhaW5zXG4gICAqXG4gICAqIENhbGxlZCBieSBgKGNsaWNrKWAgb2YgcHJldi9uZXh0IGJ1dHRvbnNcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluYyAtIGFtb3VudCB0byBjaGFuZ2Ugc2hlbGYgYnlcbiAgICovXG4gIGNoYW5nZVNoZWxmKGluYzogbnVtYmVyKXtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgIGlmKHRoaXMuc2hlbGYgPD0gdGhpcy5tYXhTaGVsZi0xICYmIGluYyA9PT0gMSl7XG4gICAgICB0aGlzLnNoZWxmKys7XG4gICAgICB0aGlzLl9jdXJyU3RyYWlucygpO1xuICAgIH0gZWxzZSBpZih0aGlzLnNoZWxmID4gMCAmJiBpbmMgPT09IC0xKXtcbiAgICAgIHRoaXMuc2hlbGYtLTtcbiAgICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2aXNpYmxlIHNoZWxmIHRvIGEgc3BlY2lmaWMgbnVtYmVyO1xuICAgKiB1c2VkIHRvIGp1bXAgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kXG4gICAqXG4gICAqIENhbGxlZCBieSAoY2xpY2spIG9mIGZpcnN0L2xhc3QgYnV0dG9uc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gblNoZWxmIC0gc2hlbGYgdG8gZ28gdG9cbiAgICovXG4gIHNldFNoZWxmKG5TaGVsZjogbnVtYmVyKXtcbiAgICB0aGlzLnNoZWxmID0gblNoZWxmO1xuICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHN0cmFpbiBjYW4gYmUgZHJvcHBlZCBpbiBhIHNsb3RcbiAgICogY2FuIGJlIGRyb3BwZWQgaWYgc2xvdCBpcyBlbXB0eSBhbmQgc3JjIGlzIHNtYWxsIG9yIGxhcmdlXG4gICAqXG4gICAqIENhbGxlZCBieSBgW2FsbG93RHJvcF1gIG9mIGZyaWRnZSBzbG90XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcG90IC0gc3BvdCB0byB0ZXN0IHRvIHNlZSBpZiBjYW4gZHJvcFxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIHRydWUgb3IgZmFsc2UgaWZcbiAgICogc3RyYWluIGNhbiBiZSBkcm9wcGVkIGluIHNsb3RcbiAgICovXG4gIGNhbkRyb3Aoc3BvdDogbnVtYmVyKTogYW55IHtcbiAgcmV0dXJuIChkcmFnRGF0YTogR2Vub3R5cGVQaGFnZSkgPT4ge1xuICAgIGxldCBvdXQgPSBmYWxzZTtcbiAgICBpZihkcmFnRGF0YSAmJiBkcmFnRGF0YS5oYXNPd25Qcm9wZXJ0eSgnc3JjJykpe1xuICAgICAgaWYoZHJhZ0RhdGEuc3JjID09PSAnc21hbGwnIHx8IGRyYWdEYXRhLnNyYz09PSAnbGFyZ2UnKXtcbiAgICAgICAgbGV0IHRyeVNwb3Q6IEZyaWRnZVBoYWdlID0gdGhpcy5zdHJhaW5zW3Nwb3RdO1xuICAgICAgICBpZih0cnlTcG90LnBoYWdlVHlwZSA9PT0gJ2VtcHR5Jyl7XG4gICAgICAgICAgb3V0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9O1xufVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IHN0cmFpbiB0byBhIGZyaWRnZVxuICAgKlxuICAgKiBDYWxsZWQgYnkgYChvbkRyb3BTdWNlc3MpYCBvZiBzbG90XG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgLSBkcmFnIGV2ZW50LCBpbmN1ZGluZyBkYXRhIGZvciBzdHJhaW4gdG8gYWRkO1xuICAgKiBoYXM6IHNoaWZ0cywgZGVsZXRpb24sIHBhcmVudHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNwb3QgLSBzbG90IHRvIGRyb3AgbmV3IHN0cmFpblxuICAgKi9cbiAgZHJvcFN0cmFpbigkZXZlbnQ6IGFueSwgc3BvdDogbnVtYmVyKXtcbiAgICBsZXQgc3RyYWluOiBHZW5vdHlwZVBoYWdlID0gJGV2ZW50LmRhdGE7XG4gICAgLy8gbmVlZCBzdHJhaW5OdW0sIG11dGF0aW9uTGlzdCwgZGVsZXRpb25cbiAgICBsZXQgbmV3U3RyYWluID0ge1xuICAgICAgc3RyYWluTnVtOiBzcG90LFxuICAgICAgbXV0YXRpb25MaXN0OiBzdHJhaW4uc2hpZnRzLFxuICAgICAgZGVsZXRpb246IHN0cmFpbi5kZWxldGlvbixcbiAgICAgIHBhcmVudHM6IHN0cmFpbi5wYXJlbnRzXG4gICAgfVxuICAgIC8vIGFkZCB0byBmcmlkZ2VcbiAgICBsZXQgdXNlcklkID0gdGhpcy51c2VyLmlkO1xuICAgIGxldCBzY2VuQ29kZSA9IHRoaXMuZnJpZGdlLnNjZW5Db2RlO1xuICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5hZGRTdHJhaW4odXNlcklkLCBzY2VuQ29kZSwgbmV3U3RyYWluKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIHRoaXMuc3RyYWluc1tzcG90XSA9IHtcbiAgICAgICAgLy8gc3RyYWluTnVtIGNvbW1lbnQgcGhhZ2VUeXBlIGlkIHBhcmVudHNcbiAgICAgICAgc3RyYWluTnVtOiByZXMuc3RyYWluTnVtLFxuICAgICAgICBjb21tZW50OiByZXMuY29tbWVudCxcbiAgICAgICAgcGhhZ2VUeXBlOiByZXMucGhhZ2VUeXBlLFxuICAgICAgICBpZDogcmVzLmlkLFxuICAgICAgICBwYXJlbnRzOiByZXMucGFyZW50cyxcbiAgICAgICAgbnVtUGFyZW50czogcmVzLm51bVBhcmVudHNcbiAgICAgIH1cbiAgICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gICAgfSxcbiAgICAgIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIG9wZW5zIGEgZGlhbG9nIGJveCB0byBlZGl0L2xlYXJuIG1vcmUgYWJvdXQgc2VsZWN0ZWQgcGhhZ2VcbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBvcGVucyB0aGUgYm94IGNhbGxzIGhlbHBlciBtZXRob2RzIGJhc2VkIG9uIGJveCBvdXRwdXRcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyYyAtIHN0cmFpbiBudW1iZXIgdG8gb3BlbiBib3ggZm9yXG4gICAqL1xuICBlZGl0UGhhZ2Uoc3JjOiBudW1iZXIpIHtcbiAgICBsZXQgcGhhZ2UgPSB0aGlzLnN0cmFpbnNbc3JjXTtcbiAgICBjb25zdCBtb2RlbFJlZiA9IHRoaXMuX21vZGFsU2VydmljZS5vcGVuKFBoYWdlRGlhbG9nQ29tcG9uZW50LCB7IHdpbmRvd0NsYXNzOiAncGhhZ2UtZGlhbG9nJ30pO1xuICAgIG1vZGVsUmVmLmNvbXBvbmVudEluc3RhbmNlLnBoYWdlID0gcGhhZ2U7XG5cbiAgICBtb2RlbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KT0+e1xuICAgICAgbGV0IHJlc1R5cGUgPSB0eXBlb2YgcmVzdWx0O1xuICAgICAgaWYocmVzVHlwZSA9PT0gXCJzdHJpbmdcIiAmJiByZXN1bHQgPT09ICdkZWxldGUnKXtcbiAgICAgICAgLy8gZGVsZXRlIHRoZSBwaGFnZVxuICAgICAgICB0aGlzLl9kZWxldGVQaGFnZShzcmMpO1xuICAgICAgfSBlbHNlIGlmIChyZXNUeXBlID09PSBcIm9iamVjdFwiKXtcbiAgICAgICAgLy8gZWRpdCBpdFxuICAgICAgICB0aGlzLl9lZGl0UGhhZ2Uoc3JjLCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9LCAocmVhc29uKT0+e1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiB3aGljaCB1cGRhdGVzIHRoZSBwaGFnZSBhZnRlciBkaWFsb2cgYm94IGhhcyBjbG9zZWRcbiAgICpcbiAgICogVXBkYXRlcyB0aGUgc3RyYWluIG9uIHN1Y2Nlc3MgYW5kIHNldHMgZXJyb3IgbWVzc2FnZSBvbiBlcnJvclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIC0gc3RyYWluIG51bWJlciB0byB1cGRhdGVcbiAgICogQHBhcmFtIHtGcmlkZ2VQaGFnZX0gbmV3UGhhZ2UgLSB1cGRhdGVkIGRldGFpbHNcbiAgICovXG4gIF9lZGl0UGhhZ2Uoc3JjOiBudW1iZXIsIG5ld1BoYWdlOiBGcmlkZ2VQaGFnZSl7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLnVwZGF0ZVN0cmFpbih0aGlzLnVzZXIuaWQsIHRoaXMuZnJpZGdlLnNjZW5Db2RlLCBuZXdQaGFnZSlcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIHRoaXMuc3RyYWluc1tzcmNdID0gcmVzO1xuICAgICAgdGhpcy5fY3VyclN0cmFpbnMoKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIHdoaWNoIGRlbGV0ZXMgdGhlIHBoYWdlIGZyb20gdGhlIGZyaWRnZSBhZnRlciBkaWFsb2cgYm94IGhhcyBjbG9zZWRcbiAgICpcbiAgICogU2V0cyBzcG90IHRvIGVtcHR5IHBoYWdlIG9uIHN1Y2Nlc3MgYW5kIHNldHMgZXJyb3IgbWVzc2FnZSBvbiBlcnJvclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIC0gc3RyYWluIG51bWJlciB0byBkZWxldGVcbiAgICovXG4gIF9kZWxldGVQaGFnZShzcmM6IG51bWJlcil7XG4gICAgbGV0IG5ld1BoYWdlID0gdGhpcy5zdHJhaW5zW3NyY107XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmRlbGV0ZVN0cmFpbih0aGlzLnVzZXIuaWQsIHRoaXMuZnJpZGdlLnNjZW5Db2RlLCBuZXdQaGFnZSwgKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgLy8gc3VjY2Vzc2Z1bFxuICAgICAgdGhpcy5zdHJhaW5zW3NyY10gPSB7c3RyYWluTnVtOiBzcmMsIHBoYWdlVHlwZTogJ2VtcHR5JywgY29tbWVudDonJywgaWQ6ICcnfTtcbiAgICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gICAgfSwgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9mcmlkZ2UuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9waGFnZS1kaWFsb2cudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9waGFnZS1kaWFsb2cudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvY3JpY2tldC9mcmlkZ2UvZnJpZGdlLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvY3JpY2tldC9mcmlkZ2UvZnJpZGdlLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2NyaWNrZXQvZnJpZGdlL2ZyaWRnZS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvY3JpY2tldC9mcmlkZ2UvZnJpZGdlLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=