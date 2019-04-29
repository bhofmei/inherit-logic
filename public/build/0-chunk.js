webpackJsonp([0],{

/***/ 928:
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
const location_routes_1 = __webpack_require__(972);
const experiment_service_1 = __webpack_require__(931);
const fridge_component_1 = __webpack_require__(982);
const phage_dialog_component_1 = __webpack_require__(949);
const location_component_1 = __webpack_require__(944);
const landing_room_component_1 = __webpack_require__(948);
const lab_room_component_1 = __webpack_require__(945);
const plexer_room_component_1 = __webpack_require__(946);
const model_room_component_1 = __webpack_require__(947);
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

/***/ 929:
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
const http_1 = __webpack_require__(46);
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

/***/ 944:
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
        templateUrl: __webpack_require__(973),
        styleUrls: [__webpack_require__(974)]
    })
], LocationComponent);
exports.LocationComponent = LocationComponent;


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
const rxjs_1 = __webpack_require__(26);
const cricket_globals_1 = __webpack_require__(929);
const experiment_service_1 = __webpack_require__(931);
const cricket_service_1 = __webpack_require__(121);
const read_error_1 = __webpack_require__(45);
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
        templateUrl: __webpack_require__(975),
        styleUrls: [__webpack_require__(976)]
    }),
    __metadata("design:paramtypes", [experiment_service_1.ExperimentService,
        cricket_service_1.CricketService])
], LabRoomComponent);
exports.LabRoomComponent = LabRoomComponent;


/***/ }),

/***/ 946:
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
const cricket_globals_1 = __webpack_require__(929);
const experiment_service_1 = __webpack_require__(931);
const cricket_service_1 = __webpack_require__(121);
const read_error_1 = __webpack_require__(45);
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
        templateUrl: __webpack_require__(977),
        styleUrls: [__webpack_require__(978)]
    }),
    __metadata("design:paramtypes", [experiment_service_1.ExperimentService,
        cricket_service_1.CricketService])
], PlexerRoomComponent);
exports.PlexerRoomComponent = PlexerRoomComponent;


/***/ }),

/***/ 947:
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
const authentication_service_1 = __webpack_require__(17);
const cricket_service_1 = __webpack_require__(121);
const cricket_globals_1 = __webpack_require__(929);
const read_error_1 = __webpack_require__(45);
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
        templateUrl: __webpack_require__(979),
        styleUrls: [__webpack_require__(980)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        cricket_service_1.CricketService])
], ModelRoomComponent);
exports.ModelRoomComponent = ModelRoomComponent;


/***/ }),

/***/ 948:
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
        templateUrl: __webpack_require__(981)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        cricket_service_1.CricketService])
], LandingRoomComponent);
exports.LandingRoomComponent = LandingRoomComponent;


/***/ }),

/***/ 949:
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
        templateUrl: __webpack_require__(983)
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], PhageDialogComponent);
exports.PhageDialogComponent = PhageDialogComponent;


/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const location_component_1 = __webpack_require__(944);
const logged_in_guard_service_1 = __webpack_require__(92);
const lab_room_component_1 = __webpack_require__(945);
const plexer_room_component_1 = __webpack_require__(946);
const model_room_component_1 = __webpack_require__(947);
const landing_room_component_1 = __webpack_require__(948);
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

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/location.template.html";

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/location.style.css";

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/lab-room/lab-room.template.html";

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/lab-room/lab-room.style.css";

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/plexer-room/plexer-room.template.html";

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/plexer-room/plexer-room.style.css";

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/model-room/model-room.template.html";

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/model-room/model-room.style.css";

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/location/landing-room/landing-room.template.html";

/***/ }),

/***/ 982:
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
const ng_bootstrap_1 = __webpack_require__(70);
const rxjs_1 = __webpack_require__(26);
const cricket_service_1 = __webpack_require__(121);
const authentication_service_1 = __webpack_require__(17);
const cricket_globals_1 = __webpack_require__(929);
const phage_dialog_component_1 = __webpack_require__(949);
const read_error_1 = __webpack_require__(45);
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
        templateUrl: __webpack_require__(984),
        styleUrls: [__webpack_require__(985)]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        cricket_service_1.CricketService,
        ng_bootstrap_1.NgbModal])
], FridgeComponent);
exports.FridgeComponent = FridgeComponent;


/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/fridge/phage-dialog.template.html";

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/fridge/fridge.template.html";

/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/app/cricket/fridge/fridge.style.css";

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbG9jYXRpb24ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9jcmlja2V0Lmdsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2V4cGVyaW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sYWItcm9vbS9sYWItcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbGFuZGluZy1yb29tL2xhbmRpbmctcm9vbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9waGFnZS1kaWFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sb2NhdGlvbi5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xvY2F0aW9uLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xvY2F0aW9uLnN0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20udGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20uc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL21vZGVsLXJvb20vbW9kZWwtcm9vbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20uc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sYW5kaW5nLXJvb20vbGFuZGluZy1yb29tLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9mcmlkZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY3JpY2tldC9mcmlkZ2UvcGhhZ2UtZGlhbG9nLnRlbXBsYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9mcmlkZ2UudGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NyaWNrZXQvZnJpZGdlL2ZyaWRnZS5zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMseUNBQStDO0FBQy9DLGdEQUEwRDtBQUUxRCxtREFBbUQ7QUFFbkQsc0RBQXlEO0FBRXpELG9EQUE2RDtBQUM3RCwwREFBd0U7QUFFeEUsc0RBQXlEO0FBQ3pELDBEQUE2RTtBQUM3RSxzREFBaUU7QUFD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cUJBQXVCLDBEOzs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsb0Q7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixnRCIsImZpbGUiOiIwLWNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IExvY2F0aW9uUm91dGVzIH0gZnJvbSAnLi9sb2NhdGlvbi5yb3V0ZXMnO1xuXG5pbXBvcnQgeyBFeHBlcmltZW50U2VydmljZSB9IGZyb20gJy4vZXhwZXJpbWVudC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRnJpZGdlQ29tcG9uZW50IH0gZnJvbSAnLi4vZnJpZGdlL2ZyaWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhhZ2VEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9mcmlkZ2UvcGhhZ2UtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IExvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2NhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFuZGluZ1Jvb21Db21wb25lbnQgfSBmcm9tICcuL2xhbmRpbmctcm9vbS9sYW5kaW5nLXJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IExhYlJvb21Db21wb25lbnQgfSBmcm9tICcuL2xhYi1yb29tL2xhYi1yb29tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGV4ZXJSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kZWxSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RlbC1yb29tL21vZGVsLXJvb20uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoTG9jYXRpb25Sb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZyaWRnZUNvbXBvbmVudCxcbiAgICBQaGFnZURpYWxvZ0NvbXBvbmVudCxcbiAgICBMb2NhdGlvbkNvbXBvbmVudCxcbiAgICBMYWJSb29tQ29tcG9uZW50LFxuICAgIFBsZXhlclJvb21Db21wb25lbnQsXG4gICAgTW9kZWxSb29tQ29tcG9uZW50LFxuICAgIExhbmRpbmdSb29tQ29tcG9uZW50XG4gIF0sXG4gICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBQaGFnZURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBFeHBlcmltZW50U2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExvY2F0aW9uTW9kdWxlIHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbG9jYXRpb24ubW9kdWxlLnRzIiwiLyoqXG4gKiBTY2VuYXJpby9leHBlcmllbWVudC1yZWxhdGVkIHZhbHVlcyB1c2VkIHRvXG4gKiAxLiBTZW5kIHRoZSBjb3JyZWN0IHBhcmFtZXRlcnMgdG8gYmFja2VuZCBjYWxsc1xuICogMi4gTWF0Y2ggc29tZSBiYWNrZW5kIHBhcmFtZXRlcnNcbiAqIDMuIEhhdmUgY29uc2lzdGVudCBkZWZhdWx0c1xuICovXG5leHBvcnQgY29uc3QgQ3JpY2tldEdsb2JhbHMgPSB7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygc3RhcnRpbmcgcGhhZ2Ugd2hlbiB0YWtlbiBmcm9tIGZyaWRnZVxuICAgKi9cbiAgbnVtUGhhZ2U6MTAwMDAwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBsYWIgcm9vbSBwbGF0ZVxuICAgKi9cbiAgcGxhdGVDYXBhY2l0eTogMTUwMCxcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHBsYXF1ZXMgYWxsb3dlZCBvbiBlYWNoIHBsZXhlciByb29tIHBsYXRlXG4gICAqL1xuICBwbGV4ZXJDYXBhY2l0eTogMjAwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHNoZWx2ZXMgaW4gdGhlIGZyaWRnZVxuICAgKi9cbiAgbkZyaWRnZVNoZWxmOiAzMixcbiAgLyoqXG4gICAqIE51bWJlciBvZiBzcG90cyBvbiBlYWNoIHNoZWxmIG9mIHRoZSBmcmlkZ2VcbiAgICovXG4gIG5GcmlkZ2VTcG90czogMTYsXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRpbHV0aW9uIHZhbHVlIGZvciBsYWIgcm9vbTsgY2FuIGJlIGNoYW5nZWQgYnkgdXNlclxuICAgKi9cbiAgZGVmYXVsdExhYkRpbHV0aW9uOiAxMCxcbiAgLyoqXG4gICAqIERlZmF1bHQgZGlsdXRpb24gdmFsdWUgZm9yIHBsZXhlciByb29tOyBjYW4gYmUgY2hhbmdlZCBieSB1c2VyXG4gICAqL1xuICBkZWZhdWx0UGxleGVyRGlsdXRpb246IDUsXG4gIC8qKlxuICAgKiBMZW5ndGggb2YgdGhlIGdlbmUgaW4gbnVtYmVyIG9mIGJhc2VwYWlyc1xuICAgKi9cbiAgZ2VuZUxlbmd0aDogMzUwLFxuICAvKipcbiAgICogTnVtYmVyIG9mIGJhc2VwYWlycyBwZXIgXCJibG9ja1wiIHdoZW4gZ3Vlc3NpbmcgZGVsZXRpb24gbG9jYXRpb25cbiAgICovXG4gIGRlbGV0aW9uR3Vlc3NMZW5ndGg6IDEwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2NyaWNrZXQuZ2xvYmFscy50cyIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBQbGF0ZUlucHV0LCBQbGF0ZVJlc3VsdHMsIFBsZXhlcklucHV0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogVGhpcyBzZXJ2aWNlIHBlcmZvcm1zIHRoZSBwbGF0ZSBhbmQgcGxleGVyIGV4cGVyaW1lbnRzIHVzZWRcbiAqIHdoZW4gY3Jvc3Npbmcgb3IgbXV0YXRpbmcgcGhhZ2Ugc3RyYWlucywgaS5lLiBwZXJmb3JtaW5nIGFcbiAqIHZpcnR1YWwgZXhwZXJpbWVudFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXhwZXJpbWVudFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2Jhc2VVUkwgPSAnL2FwaS9jcmlja2V0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAvKipcbiAgICogV2l0aCB2YWxpZCBpbnB1dCBmb3IgdGhlIHBsYXRlLCBjYWxscyB0aGUgYmFja2VuZCB0byBnZW5lcmF0ZVxuICAgKiBhIG5ldyBwbGF0ZSB0aGF0IGlzIGRpc3BsYXllZCBpbiB0aGUgbGFiIHJvb21cbiAgICpcbiAgICogQHBhcmFtIHtQbGF0ZUlucHV0fSBwbGF0ZSAtIGluZm9ybWF0aW9uIG5lZWRlZCB0byBnZW5lcmF0ZSB0aGUgbmV3IHBsYXRlXG4gICAqIC0gSW5jbHVkZXMgMS0yIHBoYWdlIHdpdGggbnVtUGhhZ2UgZWFjaCwgbGF3biB0eXBlLCBsb2NhdGlvbiwgc3BlY2lhbHMsIHBsYXRlIGNhcGFjaXR5LCBhbmQgc2NlbmFyaW8gZGF0YVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxQbGF0ZVJlc3VsdHM+fVxuICAgKiAtIG5ld2x5IGdlbmVyYXRlIHBsYXRlIHdpdGggaW5mbyBhYm91dCBwYXJlbnRzIGFuZCAoaXMgcGxhdGUgZnVsbCBvciBsaXN0IG9mIHNtYWxsIGFuZCBsYXJnZSBwbGFxdWVzKVxuICAgKiAtIG9yIGVycm9yIFwibnVtUGhhZ2Ugbm90IHNldFwiIGlmIG51bWJlciBvZiBwaGFnZSBpc24ndCBzZXRcbiAgICogLSBvciBlcnJvciBcIkVycm9yIGZpbmRpbmcgdGhlIHNwZWNpZmllZCBwaGFnZSAxLzJcIiBpZiBwaGFnZSBub3QgaW4gZGF0YWJhc2VcbiAgICogLSBvciBlcnJvciBtZXNzYWdlIGZvciBvdGhlciBzZXJ2ZXIgZXJyb3JcbiAgICovXG4gIGNyZWF0ZVBsYXRlKHBsYXRlOiBQbGF0ZUlucHV0KTogT2JzZXJ2YWJsZTxQbGF0ZVJlc3VsdHM+e1xuICAgIHZhciByZXMgPSB0aGlzLl9odHRwXG4gICAgLnBvc3Q8UGxhdGVSZXN1bHRzPihgJHt0aGlzLl9iYXNlVVJMfS9wbGF0ZWAsIHBsYXRlKVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogV2l0aCB2YWxpZCBpbnB1dCwgY2FsbCB0aGUgYmFja2VuZCB0byBnZW5lcmF0ZSB2YWxpZCByZXN1bHRzIGZvciB0aGUgcGxleGVyXG4gICAqXG4gICAqIEBwYXJhbSB7UGxleGVySW5wdXR9IGRhdGEgLSBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gZ2VuZXJhdGUgdGhlXG4gICAqIHBsZXhlciByZXN1bHRzXG4gICAqIC0gSW5wdXRzIGEgbGlzdCBvZiBwaGFnZSBJRHMgZm9yIHRoZSByb3dzIGFuZCBjb2x1bW5zLCBFLiBjb2xpXG4gICAqIGxhd24gdHlwZSwgbG9jYXRpb24sIHNwZWNpYWxzLCBpbmRpdmlkdWFsIHBsZXhlciBwbGF0ZSBjYXBhY2l0eVxuICAgKiBhbmQgc2NlbmFyaW8gZGF0YVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKiAtIHRoZSByZXN1bHRzIG9mIHRoZSBwbGV4ZXIgYXMgYSAyRCBhcnJheVxuICAgKiB3ZXJlIGVhY2ggY2VsbCBpbiB0aGUgYXJyYXkgcmVwcmVzZW50cyBhIHBsYXRlIGFuZCBoYXNcbiAgICogaXMgcGxhdGUgZnVsbCBvciBjb3VudHMgb2Ygc21hbGwvbGFyZ2UgcGxhcXVlc1xuICAgKiAtIG9yIGVycm9yIGlmIHNlcnZlciBlcnJvclxuICAgKi9cbiAgcGVyZm9ybVBsZXhlcihkYXRhOiBQbGV4ZXJJbnB1dCk6IE9ic2VydmFibGU8YW55PntcbiAgICAvLyBkYXRhIHdpbGwgaGF2ZSByb3dQaGFnZSwgY29sUGhhZ2UsIGxhd24gdHlwZSwgbG9jYXRpb24sIHNwZWNpYWxzLCBjYXBhY2l0eSwgc2NlbmFyaW9EYXRhXG4gICAgdmFyIHJlcyA9IHRoaXMuX2h0dHBcbiAgICAucG9zdChgJHt0aGlzLl9iYXNlVVJMfS9wbGV4ZXJgLCBkYXRhKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vZXhwZXJpbWVudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhpcyBpcyBhIHZpZXcgY29tcG9uZW50IHdoaWNoIGhvc3RzIHRoZSBsb2NhdGlvblxuICogdGFiIHNlbGVjdGlvbiBuYXZpZ2F0b3JcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9jYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9sb2NhdGlvbi50ZW1wbGF0ZS5odG1sJyksXG4gIHN0eWxlVXJsczogW3JlcXVpcmUoJy4vbG9jYXRpb24uc3R5bGUuY3NzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyP2tlZXBVcmw9dHJ1ZSEuL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ3JpY2tldEdsb2JhbHMgfSBmcm9tICcuLi8uLi9jcmlja2V0Lmdsb2JhbHMnO1xuaW1wb3J0IHsgRXhwZXJpbWVudFNlcnZpY2UgfSBmcm9tICcuLi9leHBlcmltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3JpY2tldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jcmlja2V0LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBFeHBlcmltZW50UGhhZ2UsIEdlbm90eXBlUGhhZ2UsIFBsYXRlSW5wdXQsIFBsYXRlUmVzdWx0cywgX2dlbm90eXBlLCBQaGFnZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIENvbXBvbmVudCB3aGVyZSBwaGFnZSBhcmUgcGxhdGVkIGFuZCBtdXRhdGVkL2Nyb3NzZWRcbiAqIFN0dWRlbnRzIHdpbGwgc3BlbmQgdGhlIG1ham9yaXR5IG9mIHRoZWlyIHRpbWUgaW4gdGhpcyBjb21wb25lbnRcbiAqXG4gKiBJbmNsdWRlczogMiBFLiBjb2xpIHRlc3QgdHViZXMsIDQgc2VyaWFsIGRpbHV0aW9uIHR1YmVzLCAxIHBsYXRlXG4gKiBVc2VzIGRyYWcgYW5kIGRyb3AgbWVjaGFuaXNtIHRvIG1vdmUgcGhhZ2UvdHViZXMgYXJvdW5kXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGFiLXJvb20nLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2xhYi1yb29tLnRlbXBsYXRlLmh0bWwnKSxcbiAgc3R5bGVVcmxzOiBbcmVxdWlyZSgnLi9sYWItcm9vbS5zdHlsZS5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTGFiUm9vbUNvbXBvbmVudCB7XG5cbiAgcHJvdGVjdGVkIHNlbGVjdGVkT2JqZWN0OiBzdHJpbmcgPSBudWxsO1xuXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvLyBiYWN0ZXJpYSB0dWJlc1xuICAvKipcbiAgICogQXQgaW5pdCwgYm90aCB0dWJzIHZpc2libGVcbiAgICogT25jZSBhIGJhY3RlcmlhIHR5cGUgaGFzIGJlZW4gc2VsZWN0ZWQsIG5lZWQgdG8gaGlkZSB0aGUgb3RoZXJcbiAgICovXG4gIHByaXZhdGUgaXNIaWRkZW46IE9iamVjdCA9IHsnSyc6IGZhbHNlLCAnQic6IGZhbHNlfTtcbiAgLyoqXG4gICAqIHBoYWdlIHN0cmFpbnMgd2hpY2ggYXJlIGluIHRoZSB0dWJlXG4gICAqL1xuICBwcml2YXRlIHBoYWdlOiBFeHBlcmltZW50UGhhZ2VbXSA9IFtdO1xuXG4gIC8vIGRpbHV0aW9uIHR1YmVzXG4gIC8qKlxuICAgKiB2YWx1ZSB0byBkaWx1dGUgdGhlIG51bWJlciBvZiBwaGFnZSBhdCBlYWNoIGRpbHV0aW9uXG4gICAqL1xuICBwcml2YXRlIGRpbHV0aW9uVmFsdWU6IG51bWJlciA9IENyaWNrZXRHbG9iYWxzLmRlZmF1bHRMYWJEaWx1dGlvbjtcbiAgLyoqXG4gICAqIENvbnRlbnRzIG9mIHRoZSBkaWx1dGlvbiB0dWJlXG4gICAqIGluY2x1ZGVzOiBsYXduVHlwZSBhbmQgcGhhZ2VcbiAgICovXG4gIHByaXZhdGUgY29udGVudHM6IGFueVtdO1xuICAvKipcbiAgICogT25seSBzaG93IGRpbHV0aW9uIGxhYmVscyBhcyB3ZSBkbyB0aGUgc2VyaWFsIGRpbHV0aW9uXG4gICAqL1xuICBwcml2YXRlIHZpc2libGVMYWJlbDogYm9vbGVhbltdO1xuICAvKipcbiAgICogYm9vbGVhbiB0byBzdG9wIHVzZXJzIGZyb20gY2hhbmdpbmcgdGhlIGRpbHVhdGlvbiBmYWN0b3Igb25jZVxuICAgKiB0aGV5IHN0YXJ0IGRpbHV0aW5nXG4gICAqIGFsbG93aW5nIGNoYW5nZXMgd2hpbGUgZGlsdXRpbmcgY291bGQgbGVhZCB0byB1bmV4cGVjdGVkIG51bWJlcnNcbiAgICogb2YgcGhhZ2UgYW5kIHdvdWxkIG1ha2UgdHViZSBsYWJlbGluZyBkaWZmaWN1bHRcbiAgICovXG4gIHByaXZhdGUgY2FuRWRpdERpbHV0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICAvLyBwbGF0ZVxuICBwcml2YXRlIGlzRW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogRS4gY29saSB0eXBlIG9uIHRoZSBwbGF0ZSBjdXJyZW50bHlcbiAgICovXG4gIHByaXZhdGUgbGF3blR5cGU6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogc2NlbmFyaW8gZGV0YWlscyAoZnJvbSB0aGUgZnJpZGdlKSB3aGljaCBpcyBuZWVkZWQgd2hlbiBkb2luZyBjcm9zc1xuICAgKi9cbiAgcHJpdmF0ZSBzY2VuYXJpb0RldGFpbHM6IHN0cmluZztcbiAgLyoqXG4gICAqIGlzIHRoZSBwbGF0ZSBvdmVyIGNhcGFjaXR5P1xuICAgKi9cbiAgcHJpdmF0ZSBpc0Z1bGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIGxpc3Qgb2YgZ2Vub3R5cGUgaW5kZXggZm9yIHBoYWdlIHdpdGggc21hbGwgcGxhcXVlc1xuICAgKi9cbiAgcHJpdmF0ZSBzbWFsbFBsYXF1ZUxpc3Q6IGFueVtdO1xuICAvKipcbiAgICogbGlzdCBvZiBnZW5vdHlwZSBpbmRleCBmb3IgcGhhZ2Ugd2l0aCBsYXJnZSBwbGFxdWVzXG4gICAqL1xuICBwcml2YXRlIGxhcmdlUGxhcXVlTGlzdDogYW55W107XG4gIC8qKlxuICAgKiBnZW5vdHlwZXMgd2hpY2ggY29ycmVzcG9uZCB0byBjb250ZW50cyBvZiBzbWFsbFBsYXF1ZUxpc3QgYW5kIGxhcmdlUGxhcXVlTGlzdFxuICAgKi9cbiAgcHJpdmF0ZSBnZW5vdHlwZXM6IF9nZW5vdHlwZVtdO1xuICAvKipcbiAgICogSWQgYW5kIHN0cmFpbiBudW1iZXIgb2YgcGhhZ2UgdXNlZCB0byBjcmVhdGUgdGhpcyBwbGF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBwbGF0ZVBhcmVudHM6IFBoYWdlW107XG5cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHZhcmlhYmxlcyAtIGRpbHV0aW9uIHR1YmUgY29udGVudHMgYW5kIHZpc2libGUgbGFiZWxzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9leHBlcmltZW50U2VydmljZTogRXhwZXJpbWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBDcmlja2V0U2VydmljZSl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIHRoaXMuY29udGVudHMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgdGhpcy52aXNpYmxlTGFiZWwgPSBbdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07XG4gIH1cblxuICAvKipcbiAgICogSW5pdGFsaXplIHRoZSBjb21wb25lbnRcbiAgICogR2V0IHRoZSBzY2VuYXJpbyBkZXRhaWxzIChzY2VuYXJpbyBkZXRhaWxzIGFyZSBhbHJlYWR5IHNldFxuICAgKiBieSBMb2NhdGlvbkNvbXBvbmVudClcbiAgICovXG4gIG5nT25Jbml0KCl7XG4gICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5nZXRTY2VuYXJpb0RldGFpbHNcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgoZGV0YWlscykgPT4ge3RoaXMuc2NlbmFyaW9EZXRhaWxzID0gZGV0YWlsc30pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC5uZXh0KHRydWUpO1xuICAgIHRoaXMuaXNEZXN0cm95ZWQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHR1YmUtcmVsYXRlZCB2YXJpYWJsZXNcbiAgICogYmFjdGVyaWEgdHViZSAtIHBoYWdlIGNvbnRlbnRzIGFuZCB3aGljaCBpcyBoaWRkZW5cbiAgICogZGlsdXRpb24gdHViZSAtIGNvbnRlbnRzLCBsYWJlbHMsIGFuZCBjYW4gZWRpdCBkaWx1dGlvbiB2YWx1ZVxuICAgKiBjbGVhciBhbnkgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgY2xlYXJUdWJlcygpe1xuICAgIHRoaXMucGhhZ2UgPSBbXTtcbiAgICB0aGlzLmlzSGlkZGVuID0geydLJzogZmFsc2UsICdCJzogZmFsc2V9O1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgdGhpcy5jb250ZW50cyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsXTtcbiAgICB0aGlzLnZpc2libGVMYWJlbCA9IFt0cnVlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXTtcbiAgICB0aGlzLmNhbkVkaXREaWx1dGlvbiA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHBsYXRlIHZhcmlhYmxlc1xuICAgKiBwbGF0ZSBpcyBlbXB0eSwgbm90IGZ1bGxcbiAgICogbm8gc21hbGwgcGxxYXVlcywgbGFyZ2UgcGxhcXVlcywgb3IgZ2Vub3R5cGVzXG4gICAqIGNsZWFyIGFueSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBjbGVhclBsYXRlKCkge1xuICAgIC8vIHJlc2V0IGFsbCB2YXJpYWJsZXNcbiAgICB0aGlzLmlzRnVsbCA9IGZhbHNlO1xuICAgIHRoaXMuaXNFbXB0eSA9IHRydWU7XG4gICAgdGhpcy5nZW5vdHlwZXMgPSBbXTtcbiAgICB0aGlzLnNtYWxsUGxhcXVlTGlzdCA9IFtdO1xuICAgIHRoaXMubGFyZ2VQbGFxdWVMaXN0ID0gW107XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICB0aGlzLmxhd25UeXBlID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgYWxsIHZhcmlhYmxlc1xuICAgKi9cbiAgY2xlYXJBbGwoKXtcbiAgICB0aGlzLmNsZWFyVHViZXMoKTtcbiAgICB0aGlzLmNsZWFyUGxhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYmFjdGVyaWEgdHViZSBjYW4gYmUgZHJhZ2dlZFxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbZHJhZ0VuYWJsZWRdYCBvZiBiYWN0IHR1YmVcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0dWJlIGhhcyBwaGFnZVxuICAgKi9cbiAgY2FuRHJhZ0JhY3QoKTogYm9vbGVhbntcbiAgICByZXR1cm4gdGhpcy5waGFnZS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgdG8gYmUgZHJhZ2dlZCBmcm9tIHRoZSBiYWN0ZXJpYSB0dWJlXG4gICAqXG4gICAqIENhbGxlZCBmb3IgYFtkcmFnRGF0YV1gIG9mIGJhY3QgdHViZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIEUuIGNvbGkgc291cmNlLCBgXCJCXCJgIG9yIGBcIktcImBcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gZGF0YSB3aXRoIGxhd24gdHlwZSwgc3JjLCBhbmQgcGhhZ2UgbGlzdFxuICAgKi9cbiAgZ2V0RGF0YUJhY3Qoc3JjOiBzdHJpbmcpOiBPYmplY3R7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhd25UeXBlOiBzcmMsXG4gICAgICBzcmM6IHNyYyxcbiAgICAgIHBoYWdlOiB0aGlzLnBoYWdlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgY2xhc3NlcyBmb3IgYSBiYWN0ZXJpYSB0dWJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgRS4gY29saSBzb3VyY2UsIGBcIkJcImAgb3IgYFwiS1wiYFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhcHBsaWNhYmxlIGNsYXNzZXMgaW4gdGhlIGZvcm1cbiAgICogYHsnY2xhc3MnOiBib29sZWFuLCAuLi59YFxuICAgKi9cbiAgICBnZXRDbGFzc2VzQmFjdChzcmM6IHN0cmluZyk6IE9iamVjdCB7XG4gICAgcmV0dXJuIHsnYmFjdC10dWJlIHRlc3QtdHViZS1vdXRlcic6IHRydWUsXG4gICAgICAgICAgICAnaW52aXNpYmxlJzogKHNyYyA9PT0gJ0InID8gdGhpcy5pc0hpZGRlbltcIkJcIl0gOiB0aGlzLmlzSGlkZGVuW1wiS1wiXSksXG4gICAgICAgICAgICAndHViZS1iJzogKHNyYz09PSdCJyksXG4gICAgICAgICAgICAndHViZS1rJzogKHNyYz09PSdLJyksXG4gICAgICAgICAgICAnbi1waGFnZS0xJzogdGhpcy5waGFnZS5sZW5ndGggPT09IDEsXG4gICAgICAgICAgICAnbi1waGFnZS0yJzogdGhpcy5waGFnZS5sZW5ndGggPT09IDJcbiAgICAgICAgICAgfVxuICAgIH1cblxuICAvKipcbiAgICogRHJvcCBwaGFnZSBmcm9tIGZyaWRnZSBpbnRvIGJhY3RlcmlhIHR1YmVcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAob25Ecm9wU3VjY2VzcylgIG9mIGJhY3RlcmlhIHR1YmVzXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgZHJhZyBldmVudCB3aXRoIHBoYWdlIGRhdGFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBiYWN0ZXJpYSBzb3VyY2UgcGhhZ2UgZHJhZ2dlZCB0b1xuICAgKi9cbiAgZHJvcFBoYWdlQmFjdCgkZXZlbnQ6IGFueSwgc3JjOiBzdHJpbmcpe1xuICAgIHZhciBpbmNvbWluZ1BoYWdlID0gJGV2ZW50LmRhdGE7XG4gICAgaWYoaW5jb21pbmdQaGFnZS5oYXNPd25Qcm9wZXJ0eSgnaWQnKSA9PSBmYWxzZSl7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdPbmx5IGFkZCBwaGFnZSBmcm9tIHRoZSBmcmlkZ2UnO1xuICAgIH0gZWxzZSBpZih0aGlzLnBoYWdlLmxlbmd0aCA+PSAyKSB7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdDYW5ub3QgaGF2ZSBtb3JlIHRoYW4gMiBwaGFnZSBpbiBhIHR1YmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhZGQgcGhhZ2UgLSB0eXBlIEV4cGVyaW1lbnRQaGFnZVxuICAgICAgdGhpcy5waGFnZS5wdXNoKHtcbiAgICAgICAgaWQ6IGluY29taW5nUGhhZ2UuaWQsXG4gICAgICAgIHN0cmFpbk51bTogaW5jb21pbmdQaGFnZS5zdHJhaW5OdW0sXG4gICAgICBudW1QaGFnZTogQ3JpY2tldEdsb2JhbHMubnVtUGhhZ2VcbiAgICAgIH0pO1xuICAgICAgc3dpdGNoKHNyYyl7XG4gICAgICAgIGNhc2UgJ0InOlxuICAgICAgICAgIHRoaXMuaXNIaWRkZW5bJ0snXSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0snOlxuICAgICAgICAgIHRoaXMuaXNIaWRkZW5bJ0InXSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9fVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBkaWx1dGlvbiB0dWJlIGNhbiBiZSBkcmFnZ2VkXG4gICAqXG4gICAqIENhbGxlZCBmb3IgYFtkcmFnRW5hYmxlZF1gIG9mIGRpbHV0aW9uIHR1YmUgKDAtMylcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyYyBkaWx1dGlvbiB0dWJlIG51bWJlclxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHR1YmUgaGFzIGNvbnRlbnRzXG4gICAqL1xuICBjYW5EcmFnRGlsKHNyYzogbnVtYmVyKTogYm9vbGVhbntcbiAgICByZXR1cm4gKHRoaXMuY29udGVudHNbc3JjXSAhPT0gbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBjbGFzc2VzIGZvciBhIGRpbHV0aW9uIHR1YmVcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyYyBkaWx1dGlvbiB0dWJlIG51bWJlciAoMC0zKVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhcHBsaWNhYmxlIGNsYXNzZXMgaW4gdGhlIGZvcm1cbiAgICogYHsnY2xhc3MnOiBib29sZWFuLCAuLi59YFxuICAgKi9cbiAgZ2V0Q2xhc3Nlc0RpbChzcmM6IG51bWJlcik6IE9iamVjdCB7XG4gICAgbGV0IHR1YmUgPSB0aGlzLmNvbnRlbnRzW3NyY107XG4gICAgcmV0dXJuIHsnZGlsLXR1YmUgdGVzdC10dWJlLW91dGVyJzogdHJ1ZSxcbiAgICAgICAgICAgICd0dWJlLWInOiAodHViZSAhPT0gbnVsbCAmJiB0dWJlLmxhd25UeXBlPT09J0InKSxcbiAgICAgICAgICAgICd0dWJlLWsnOiAodHViZSAhPT0gbnVsbCAmJiB0dWJlLmxhd25UeXBlPT09J0snKVxuICAgICAgICAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBjbGFzc2VzIGZvciBhIGRpbHV0aW9uIHR1YmUgbGFiZWxcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyYyBkaWx1dGlvbiB0dWJlIG51bWJlciAoMC0zKVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhcHBsaWNhYmxlIGNsYXNzZXNcbiAgICovXG4gIGdldENsYXNzZXNEaWxMYWJlbChzcmM6IG51bWJlcik6IE9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdkaWwtdmFsdWUnOiB0cnVlLFxuICAgICAgJ2ludmlzaWJsZSc6ICF0aGlzLnZpc2libGVMYWJlbFtzcmNdXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgb2JqZWN0IGNhbiBiZSBkcm9wcGVkIGluIGRpbHV0aW9uIHR1YmVcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2FsbG93RHJvcF1gIG9mIGRpbHV0aW9uIHR1YmVcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlc3QgZGlsdXRpb24gdHViZSBudW1iZXIgKDAtMylcbiAgICpcbiAgICogQHJldHVybnMge2Z1bmN0aW9ufSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGB0cnVlYCBvciBgZmFsc2VgIGlmIG9iamVjdCBjYW4gYmUgZHJvcHBlZFxuICAgKi9cbiAgY2FuRHJvcERpbChkZXN0OiBudW1iZXIpOiBhbnkge1xuICByZXR1cm4gKGRyYWdEYXRhOiBhbnkpID0+IHtcbiAgICBpZihkcmFnRGF0YSA9PT0gbnVsbCB8fCBkcmFnRGF0YSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmKGRyYWdEYXRhLmhhc093blByb3BlcnR5KCdzcmMnKSA9PT0gZmFsc2Upe1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGxldCBzcmMgPSBkcmFnRGF0YS5zcmM7XG4gICAgaWYoZGVzdCA9PT0gMCAmJiAoc3JjID09PSAnQicgfHwgc3JjID09PSAnSycpKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZGVzdCA+IDAgJiYgc3JjID09PSBkZXN0LTEpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn1cbiAgLyoqXG4gICAqIERhdGEgdG8gYmUgZHJhZ2dlZCBmcm9tIHRoZSBkaWx1dGlvbiB0dWJlXG4gICAqXG4gICAqIENhbGxlZCBmb3IgYFtkcmFnRGF0YV1gIG9mIGRpbHV0aW9uIHR1YmVcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyYyBkaWx1dGlvbiB0dWJlIG51bWJlciAoMC0zKVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBkYXRhIHdpdGggZGlsdXRpb24gdHViZSBjb250ZW50cyBhbmQgc3JjXG4gICAqL1xuICBnZXREYXRhRGlsKHNyYzogbnVtYmVyKTogT2JqZWN0IHtcbiAgICBpZih0aGlzLmNvbnRlbnRzW3NyY10gIT09IG51bGwpXG4gICAgICB0aGlzLmNvbnRlbnRzW3NyY11bJ3NyYyddID0gc3JjO1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzW3NyY107XG4gIH1cblxuICAvKipcbiAgICogRHJvcCBjb250ZW50cyBmcm9tIGJhY3QgdHViZS9kaWx1dGlvbiB0dWJlIGludG8gZGlsdXRpb24gdHViZVxuICAgKlxuICAgKiBDYWxsZWQgb24gYChvRHJvcFN1Y2Nlc3MpYCBvZiBkaWx1dGlvbiB0dWJlc1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gJGV2ZW50IGRyYWcgZXZlbnQgd2l0aCBjb250ZW50L3BoYWdlIGRhdGFcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlc3QgZGVzdCB0dWJlIG51bWJlciAoMC0zKVxuICAgKi9cbiAgZHJvcENvbnRlbnRzRGlsKCRldmVudDogYW55LCBkZXN0OiBudW1iZXIpe1xuICAgIGxldCBpbmNvbWluZ0RhdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJGV2ZW50LmRhdGEpKTtcbiAgICBpZihpbmNvbWluZ0RhdC5oYXNPd25Qcm9wZXJ0eSgnbGF3blR5cGUnKSAmJiBpbmNvbWluZ0RhdC5oYXNPd25Qcm9wZXJ0eSgncGhhZ2UnKSl7XG4gICAgICAvLyBkaWx1dGVcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbmNvbWluZ0RhdC5waGFnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGluY29taW5nRGF0LnBoYWdlW2ldLm51bVBoYWdlIC89IHRoaXMuZGlsdXRpb25WYWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGVudHNbZGVzdF0gPSBpbmNvbWluZ0RhdDtcbiAgICAgIGlmKGRlc3QgPCAzKXtcbiAgICAgICAgdGhpcy52aXNpYmxlTGFiZWxbZGVzdCsxXSA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBkaXNhYmxlIGRpbHV0aW9uIHZhbHVlIGNoYW5nZXNcbiAgICAgIHRoaXMuY2FuRWRpdERpbHV0aW9uID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBjbGFzc2VzIGZvciBwbGF0ZSBkZXBlbmRpbmcgaWYgZW1wdHksIGZ1bGwsIGhhcyBwaGFnZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhcHBsaWNhYmxlIGNsYXNzZXMgaW4gdGhlIGZvcm1cbiAgICogYHsnY2xhc3MnOiBib29sZWFuLCAuLi59YFxuICAgKi9cbiAgZ2V0Q2xhc3Nlc1BsYXRlKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICdjb2wtMTIgY29sLW1kLTUgcm91bmRlZC1jaXJjbGUgYm9yZGVyIGJvcmRlci1kYXJrJzogdHJ1ZSxcbiAgICAgICdiZy1zZWNvbmRhcnkgdGV4dC1saWdodCc6IHRoaXMuaXNGdWxsLFxuICAgICAgJ2JnLWxpZ2h0IHRleHQtcHJpbWFyeSc6ICghdGhpcy5pc0Z1bGwgJiYgIXRoaXMuaXNFbXB0eSksXG4gICAgICAndGV4dC1kYW5nZXInOiAodGhpcy5sYXduVHlwZSA9PT0gJ0snKSxcbiAgICAgICd0ZXh0LWluZm8nOiAodGhpcy5sYXduVHlwZSA9PT0gJ0InKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIG9iamVjdCBjYW4gYmUgZHJvcHBlZCBvbiBwbGF0ZVxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbYWxsb3dEcm9wXWAgb2YgcGxhdGVcbiAgICpcbiAgICogQHJldHVybnMge2Z1bmN0aW9ufSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGB0cnVlYCBvciBgZmFsc2VgIGlmIG9iamVjdCBjYW4gYmUgZHJvcHBlZFxuICAgKi9cbiAgY2FuRHJvcFBsYXRlKCk6YW55IHtcbiAgICByZXR1cm4gKGRyYWdEYXRhOiBhbnkpID0+IHtcbiAgICAgIGxldCBpbnZhbGlkU3JjID0gWydCJywgJ0snLCAnc21hbGwnLCAnbGFyZ2UnXVxuICAgIGlmKGRyYWdEYXRhID09PSBudWxsIHx8IGRyYWdEYXRhID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYoZHJhZ0RhdGEuaGFzT3duUHJvcGVydHkoJ3NyYycpICYmIGludmFsaWRTcmMuaW5kZXhPZihkcmFnRGF0YS5zcmMpID09PSAtMSl7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcm9wIHR1YmUgY29udGVudHMgb24gdGhlIHBsYXRlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKG9uRHJvcFN1Y2Nlc3MpYCBvZiBwbGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gJGV2ZW50IGRyYWcgZXZlbnQgd2l0aCBjb250ZW50c1xuICAgKi9cbiAgZHJvcE9uUGxhdGUoJGV2ZW50OiBhbnkpe1xuICAgIGxldCBjb250ZW50cyA9ICRldmVudC5kYXRhO1xuICAgIC8vIGNoZWNrIHdlIGhhdmUgZXZlcnl0aGluZyB3ZSBuZWVkXG4gICAgaWYgKGNvbnRlbnRzLmhhc093blByb3BlcnR5KCdsYXduVHlwZScpID09PSBmYWxzZSl7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdUaGVyZSBpcyBubyBiYWN0ZXJpYSBpbiB0aGUgdHViZSBmb3IgcGhhZ2UgdG8gZ3JvdyBvbi4nXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb250ZW50cy5oYXNPd25Qcm9wZXJ0eSgncGhhZ2UnKSA9PT0gZmFsc2UgfHwgY29udGVudHMucGhhZ2UubGVuZ3RoID09PSAwKXtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ1RoZXJlIGlzIG5vIHBoYWdlIGluIHRoZSB0dWJlLidcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoY29udGVudHMuc3JjID09PSAnQicgfHwgY29udGVudHMuc3JjID09PSAnSycpe1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnRG8gbm90IHBsYXRlIGRpcmVjdGx5IGZyb20gYmFjdGVyaWEgdHViZSc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGdhdGhlciBkYXRhXG4gICAgdGhpcy5sYXduVHlwZSA9IGNvbnRlbnRzLmxhd25UeXBlO1xuICAgIGxldCBwaGFnZTEgPSBjb250ZW50cy5waGFnZVswXTtcbiAgICBsZXQgcGhhZ2UyID0gbnVsbDtcbiAgICBpZihjb250ZW50cy5waGFnZS5sZW5ndGggPT09IDIpe1xuICAgICAgcGhhZ2UyID0gY29udGVudHMucGhhZ2VbMV07XG4gICAgfVxuICAgIC8vIHBlcmZvcm0gdGhlIGNyb3NzXG4gICAgdGhpcy5fcGVyZm9ybUNyb3NzKHRoaXMubGF3blR5cGUsIHBoYWdlMSwgcGhhZ2UyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyB0aGUgZXhwZXJpbWVudCBzZXJ2aWNlIHRvIHBlcmZvcm0gdGhlIGNyb3NzIGFuZCBzYXZlc1xuICAgKiB2YXJpYWJsZXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhd25UeXBlIGJhY3RlcmlhIHVzZWQsIGBcIkJcImAgb3IgYFwiS1wiYFxuICAgKiBAcGFyYW0ge2FueX0gcGhhZ2UxIGZpcnN0IHBoYWdlIGluIGNyb3NzXG4gICAqIEBwYXJhbSB7YW55fSBwaGFnZTIgc2Vjb25kIHBoYWdlIGluIGNyb3NzLCBvciBudWxsXG4gICAqL1xuICBfcGVyZm9ybUNyb3NzKGxhd25UeXBlOiBzdHJpbmcsIHBoYWdlMTogRXhwZXJpbWVudFBoYWdlLCBwaGFnZTI6IEV4cGVyaW1lbnRQaGFnZSl7XG4gICAgbGV0IG5ld1BsYXRlOiBQbGF0ZUlucHV0ID0ge1xuICAgICAgbGF3blR5cGU6IGxhd25UeXBlLFxuICAgICAgcGhhZ2UxOiBwaGFnZTEsXG4gICAgICBwaGFnZTI6IHBoYWdlMixcbiAgICAgIHNwZWNpYWxzOiB7fSxcbiAgICAgIGxvY2F0aW9uOiAnbGFiJyxcbiAgICAgIHNjZW5hcmlvRGF0YTogdGhpcy5zY2VuYXJpb0RldGFpbHMsXG4gICAgICBjYXBhY2l0eTogQ3JpY2tldEdsb2JhbHMucGxhdGVDYXBhY2l0eVxuICAgIH1cbiAgICB0aGlzLl9leHBlcmltZW50U2VydmljZS5jcmVhdGVQbGF0ZShuZXdQbGF0ZSlcbiAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9Pntcbi8vICAgICAgY29uc29sZS5sb2coJ2dlbm90eXBlczonLCByZXMuZ2Vub3R5cGVzKTtcbi8vICAgICAgY29uc29sZS5sb2coJ3NtYWxsIHBsYXF1ZTonLCByZXMuc21hbGxQbGFxdWUpO1xuLy8gICAgICBjb25zb2xlLmxvZygnbGFyZ2UgcGxhcXVlOicsIHJlcy5sYXJnZVBsYXF1ZSk7XG4gICAgICB0aGlzLmlzRnVsbCA9IHJlcy5mdWxsO1xuICAgICAgdGhpcy5zbWFsbFBsYXF1ZUxpc3QgPSByZXMuc21hbGxQbGFxdWU7XG4gICAgICB0aGlzLmxhcmdlUGxhcXVlTGlzdCA9IHJlcy5sYXJnZVBsYXF1ZTtcbiAgICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5nZW5vdHlwZXMgPSByZXMuZ2Vub3R5cGVzO1xuICAgICAgdGhpcy5wbGF0ZVBhcmVudHMgPSByZXMucGFyZW50cztcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgLy8gZXJyb3JcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBwbGFxdWUgZnJvbSBwbGF0ZSBjYW4gYmUgZHJhZ2dlZFxuICAgKlxuICAgKiBDYWxsZWQgZm9yIGBbZHJhZ0VuYWJsZWRdYCBvZiBwbGFxdWVzIG9uIHBsYXRlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgYFwic21hbGxcImAgb3IgYFwibGFyZ2VcImAgcGxhcXVlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlcmUgYXJlIHN0aWxsIHBsYXF1ZXMgb2YgdGhhdCBzaXplXG4gICAqL1xuICBjYW5EcmFnUGxhdGUoc3JjOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZihzcmMgPT09ICdzbWFsbCcpXG4gICAgICByZXR1cm4gdGhpcy5zbWFsbFBsYXF1ZUxpc3QubGVuZ3RoID4gMDtcbiAgICBlbHNlIC8vIGJpZ1xuICAgICAgcmV0dXJuIHRoaXMubGFyZ2VQbGFxdWVMaXN0Lmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogUGljayBhIHBsYXF1ZSBmcm9tIHRoZSBwbGF0ZSB0byBzYXZlIHRvIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQ2FsbGVkIGZvciBgW2RyYWdEYXRhXWAgb2YgcGxhcXVlIG9uIHBsYXRlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgYFwic21hbGxcImAgb3IgYFwibGFyZ2VcImAgcGxhcXVlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHBoYWdlIGdlbm90eXBlIGRhdGFcbiAgICovXG4gIGdldFBoYWdlUGxhdGUoc3JjOiBzdHJpbmcpOiBHZW5vdHlwZVBoYWdle1xuICAgIGxldCB0bXBMaXN0ID0gKHNyYyA9PT0gJ3NtYWxsJyA/IHRoaXMuc21hbGxQbGFxdWVMaXN0IDogdGhpcy5sYXJnZVBsYXF1ZUxpc3QpO1xuICAgIGlmKHRtcExpc3QubGVuZ3RoID09PSAwKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgcGxhcXVlID0gdG1wTGlzdFswXTtcbiAgICBsZXQgZ2Vub3R5cGVJbmRleCA9IHBsYXF1ZTtcbiAgICBsZXQgcGhhZ2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZ2Vub3R5cGVzW2dlbm90eXBlSW5kZXhdKSk7XG4gICAgcGhhZ2VbJ3NyYyddID0gc3JjO1xuICAgIHBoYWdlWydwYXJlbnRzJ10gPSB0aGlzLnBsYXRlUGFyZW50cztcbiAgICByZXR1cm4gcGhhZ2U7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBzdWNjZXNzZnVsbHkgZHJhZ2dlZCBwaGFnZSBmcm9tIGF2YWlsYWJsZSBwaGFnZSBsaXN0XG4gICAqXG4gICAqIENhbGxlZCBvbiBgKG9uRHJhZ1N1Y2Nlc3MpYCBvZiBwbGFxdWUgb24gcGxhdGVcbiAgICpcbiAgICogQHBhcmFtIHthbnl9ICRldmVudCBkcmFnIGV2ZW50IHdpdGggcGhhZ2Ugc2F2ZWRcbiAgICovXG4gIGFkZGVkVG9GcmlkZ2UoJGV2ZW50KSB7XG4gICAgbGV0IHN0cmFpbiA9ICRldmVudC5kYXRhO1xuICAgIGxldCBzcmMgPSBzdHJhaW4uc3JjO1xuICAgIGlmKHNyYyA9PT0gJ3NtYWxsJyl7XG4gICAgICB0aGlzLnNtYWxsUGxhcXVlTGlzdC5zaGlmdCgpO1xuICAgIH0gZWxzZSB7IC8vIGxhcmdlXG4gICAgICB0aGlzLmxhcmdlUGxhcXVlTGlzdC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgcGhhZ2UgZnJvbSB0aGUgcGxhdGUgd2l0aG91dCBhZGRpbmcgaXQgdG8gdGhlIGZyaWRnZVxuICAgKlxuICAgKiBDYWxsZWQgb24gYChkYmxjbGljaylgIG9mIHBsYXF1ZSBvbiB0aGUgcGxhdGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBzb3VyY2Ugb2YgcGxhcXVlIGNsaWNrZWQ7IGBcImxhcmdlXCJgIG9yIGBcInNtYWxsXCJgXG4gICAqL1xuICBkZWxQaGFnZVBsYXRlKHNyYzogc3RyaW5nKXtcbiAgICBpZihzcmMgPT09ICdzbWFsbCcpe1xuICAgICAgdGhpcy5zbWFsbFBsYXF1ZUxpc3Quc2hpZnQoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMubGFyZ2VQbGFxdWVMaXN0LnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ3JpY2tldEdsb2JhbHMgfSBmcm9tICcuLi8uLi9jcmlja2V0Lmdsb2JhbHMnO1xuaW1wb3J0IHsgRXhwZXJpbWVudFNlcnZpY2UgfSBmcm9tICcuLi9leHBlcmltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3JpY2tldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jcmlja2V0LnNlcnZpY2UnXG5pbXBvcnQgeyBGcmlkZ2VQaGFnZSwgRXhwZXJpbWVudFBoYWdlLCBQbGV4ZXJJbnB1dCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHRoZSBtdWx0aXBsZXhlciByb29tIHdoaWNoIGFsbG93cyBmb3JcbiAqIE54TSBwaGFnZSBjcm9zc2VzIGF0IG9uY2VcbiAqXG4gKiBPZmZzcHJpbmcgcGhhZ2UgY2Fubm90IGJlIHNhdmVkIHRvIHRoZSBmcmlkZ2UsIGJ1dCB0aGUgdXNlclxuICogZ2V0cyBhIGNvdW50IG9mIHNtYWxsIGFuZCBsYXJnZSBwbGFxdWUgZm9yIGVhY2ggY3Jvc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwbGV4ZXItcm9vbScsXG4gICAgdGVtcGxhdGVVcmw6IHJlcXVpcmUoJy4vcGxleGVyLXJvb20udGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL3BsZXhlci1yb29tLnN0eWxlLmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBQbGV4ZXJSb29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBFLiBjb2xpIHN0cmFpbiBjaG9zZW4gdG8gcGxhdGUgb25cbiAgICovXG4gIHByaXZhdGUgY2hvc2VuQmFjdDogc3RyaW5nID0gJ25vbmUnO1xuICAvKipcbiAgICogVmFsdWUgdG8gZGlsdXRlIG51bWJlciBvZiBwaGFnZSBieVxuICAgKi9cbiAgcHJpdmF0ZSBkaWx1dGlvblZhbHVlOiBudW1iZXIgPSBDcmlja2V0R2xvYmFscy5kZWZhdWx0UGxleGVyRGlsdXRpb247XG4gIC8qKlxuICAgKiBMb2NhdGlvbiBjYWxsIHVzZWQgYnkgYmFja2VuZFxuICAgKi9cbiAgcHJpdmF0ZSBwbGV4ZXJUeXBlOiBzdHJpbmcgPSAncGxleGVyJztcbiAgLyoqXG4gICAqIFNjZW5hcmlvIGRldGFpbHMgKGZyb20gZnJpZGdlKSBuZWVkZWQgdG8gcGVyZm9ybSB0aGUgcGxleGVyXG4gICAqL1xuICBwcml2YXRlIHNjZW5hcmlvRGV0YWlsczogc3RyaW5nO1xuICAvKipcbiAgICogSW5mbyBmb3IgcGhhZ2UgYWxvbmcgdGhlIHJvd3NcbiAgICovXG4gIHByaXZhdGUgcm93czogRXhwZXJpbWVudFBoYWdlW107XG4gIC8qKlxuICAgKiBJbmZvIGZvciBwaGFnZSBhbG9uZyB0aGUgY29sdW1uc1xuICAgKi9cbiAgcHJpdmF0ZSBjb2xzOiBFeHBlcmltZW50UGhhZ2VbXTtcbiAgLyoqXG4gICAqIEN1cnJlbnQgbnVtYmVyIG9mIHN0cmFpbnMgaW4gdGhlIHJvd3MgYW5kIGNvbHVtbnMsIHJlc3BlY3RpdmVseVxuICAgKi9cbiAgcHJpdmF0ZSBuU3RyYWluczogbnVtYmVyW10gPSBbMCwwXTtcbiAgLyoqXG4gICAqIFRoZSBwbGV4ZXIgcmVzdWx0cztcbiAgICogSXMgT2JqZWN0IGZvcm0gb2YgYSAyLUQgYXJyYXkgd2hlcmUgZWFjaCBjZWxsIGhhcyB7c21hbGxQbGFxdWU6ICMsIGxhcmdlUGxhcXVlOiAjfVxuICAgKi9cbiAgcHJpdmF0ZSByZXN1bHRzOiBPYmplY3Q7XG4gIC8qKlxuICAgKiBQb3NzaWJsZSBiYWNrZW5kIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIHByaXZhdGUgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgLyoqXG4gICAqIFNjZW5hcmlvIHNlcnZpY2Ugc3Vic2NyaXB0aW9uIGZvciBzY2VuYXJpbyBkZXRhaWxzXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvKipcbiAgICogRXhwZXJpbWVudCBzZXJ2aWNlIHN1YnNjcmlwdGlvbiB0byBwcmVmb3JtIHBsZXhlclxuICAgKi9cbiAgcHJpdmF0ZSBleHBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgLyoqXG4gICAqIENvbnRyb2wgdGhlIGRpbHV0aW9uIGZhY3RvciB0byBhIG1pbi9tYXggdmFsdWVcbiAgICovXG4gIHByaXZhdGUgZGlsdXRpb25Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgLyoqXG4gICAqIC0gQ1NTIGNsYXNzZXMgZm9yIHRoZSBzdWJtaXQgc3Bpbm5lclxuICAgKiAtIFZpc2libGUgYWZ0ZXIgc3VibWl0IGJ1dHRvbiBoaXQgYW5kIGJlZm9yZSByZXN1bHRzIHJlY2VpdmVkXG4gICAqL1xuICBwcml2YXRlIF9zcGlubmVyQ2xhc3M6IE9iamVjdCA9IHtcbiAgICAnaGlkaW5nJzogdHJ1ZSxcbiAgICAnc3Bpbm5pbmcnOiBmYWxzZSxcbiAgICAnb2kgb2ktbG9vcC1jaXJjdWxhcic6IHRydWVcbiAgfTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBkYXRhIGFuZCBzZXQgZGlsdXRpb24gY29udHJvbFxuICAgKlxuICAgKiBAcGFyYW0ge0V4cGVyaW1lbnRTZXJ2aWNlfSBfZXhwZXJpbWVudFNlcnZpY2UgdXNlZCB0byBnZW5lcmF0ZSB0aGUgcmVzdWx0cyBvZiB0aGUgcGxleGVyXG4gICAqIEBwYXJhbSB7Q3JpY2tldFNlcnZpY2V9IF9zY2VuYXJpb1NlcnZpY2UgdXNlZCB0byBnZXQgdGhlIHNjZW5hcmlvIGRldGFpbHMgbmVlZGVkIHRvIHBlcmZvcm0gcGxleGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfZXhwZXJpbWVudFNlcnZpY2U6IEV4cGVyaW1lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBDcmlja2V0U2VydmljZSl7XG4gICAgdGhpcy5kaWx1dGlvbkNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMubWluKDAuMSksIFZhbGlkYXRvcnMubWF4KDEwMCldKTtcbiAgICB0aGlzLl9jbGVhckRhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnQgYW5kIGdldCB0aGUgc2NlbmFyaW8gZGV0YWlsc1xuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZ2V0U2NlbmFyaW9EZXRhaWxzXG4gICAgICAuc3Vic2NyaWJlKChkZXRhaWxzKSA9PiB0aGlzLnNjZW5hcmlvRGV0YWlscyA9IGRldGFpbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3RvcnkgdGhlIGNvbXBvbmVudCBhbmQgdW5zdWJzY3JpYmUgYXMgbmVlZGVkXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICBpZih0aGlzLmV4cFN1YnNjcmlwdGlvbilcbiAgICB0aGlzLmV4cFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRhbGl6ZS9jbGVhciByb3cgYW5kIGNvbHVtbiBwaGFnZVxuICAgKi9cbiAgcHJvdGVjdGVkIF9jbGVhckRhdGEoKXtcbiAgICB0aGlzLnJvd3MgPSBbXTtcbiAgICB0aGlzLmNvbHMgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgODsgaSsrKXtcbiAgICAgIHRoaXMucm93cy5wdXNoKG51bGwpO1xuICAgICAgdGhpcy5jb2xzLnB1c2gobnVsbCk7XG4gICAgfVxuICAgIHRoaXMublN0cmFpbnMgPSBbMCwwXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgcGxleGVyIGFuZCBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2YgcmVzZXQgYnV0dG9uXG4gICAqL1xuICByZXNldCgpe1xuICAgIHRoaXMuY2hvc2VuQmFjdCA9ICdub25lJztcbiAgICB0aGlzLmRpbHV0aW9uVmFsdWUgPSBDcmlja2V0R2xvYmFscy5kZWZhdWx0UGxleGVyRGlsdXRpb247XG4gICAgdGhpcy5wbGV4ZXJUeXBlID0gJ3BsZXhlcic7XG4gICAgdGhpcy5fY2xlYXJEYXRhKCk7XG4gICAgdGhpcy5yZXN1bHRzID0ge307XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICB0aGlzLl9zZXRTcGlubmVyQ2xhc3MoJ3Jlc2V0Jyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBDU1MgY2xhc3NlcyBmb3IgZWFjaCBwaGFnZSBidXR0b24gYmFzZWQgb24gd2hpY2hcbiAgICogcGhhZ2UgdHlwZSBpcyBzZXRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBidXR0b24gdG8gZ2V0IGNsYXNzZXMgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IGNsYXNzZXMgd2hpY2ggYXBwbHkgdG8gdGhpcyBidXR0b24gaW4gdGhlXG4gICAqIGZvcm0gYHsnY2xhc3MnOmJvb2xlYW4sICdjbGFzczInOiBib29sZWFufWBcbiAgICovXG4gIGdldFR1YmVDbGFzc2VzKHNyYzogc3RyaW5nKTogT2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2J0biBib3JkZXIgYm9yZGVyLXNlY29uZGFyeSc6IHRydWUsXG4gICAgICAnY2hvc2VuJzogKHRoaXMuY2hvc2VuQmFjdCA9PT0gc3JjKSxcbiAgICAgICdidG4tb3V0bGluZS1pbmZvJzogKHNyYz09PSdCJyAmJiB0aGlzLmNob3NlbkJhY3QgIT09IHNyYyksXG4gICAgICAnYnRuLWluZm8nOiAoc3JjPT09J0InICYmIHRoaXMuY2hvc2VuQmFjdCA9PT0gc3JjKSxcbiAgICAgICdidG4tb3V0bGluZS1kYW5nZXInOiAoc3JjPT09J0snICYmIHRoaXMuY2hvc2VuQmFjdCAhPT0gc3JjKSxcbiAgICAgICdidG4tZGFuZ2VyJzogKHNyYz09PSdLJyAmJiB0aGlzLmNob3NlbkJhY3QgPT09IHNyYylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHVzZXIgaXMgYWJsZSB0byBzdWJtaXQgcGxleGVyIGJ5IGRpc2FibGluZ1xuICAgKiB0aGUgc3VibWl0IGJ1dHRvbiB3aGVuIHVuYWJsZSB0byBzdWJtaXRcbiAgICpcbiAgICogQWJsZSB0byBzdWJtaXQgb25seSB3aGVuOlxuICAgKiAxLiBiYWN0ZXJpYSBjaG9zZW5cbiAgICogMi4gYXQgbGVhc3Qgb25lIHBoYWdlIGluIGVhY2ggcm93IGFuZCBjb2x1bW5cbiAgICogMy4gZGlsdXRpb24gdmFsdWUgaXMgdmFsaWQsIEFORFxuICAgKiA0LiBub3Qgc3RpbGwgd2FpdGluZyBmb3IgcHJldmlvdXMgc3VibWl0IHJlc3BvbnNlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiAtIGB0cnVlYCBpZiB1c2VyIGNhbiBzdWJtaXQgKGFsbCBjb25kaXRpb25zIG1ldClcbiAgICogLSBgZmFsc2VgIG90aGVyd2lzZVxuICAgKi9cbiAgc3VibWl0RGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cbiAgICAvLyBpZiBzcGlubmVyIGlzIHNwaW5uaW5nLCBkaXNhYmxlXG4gICAgaWYodGhpcy5fc3Bpbm5lckNsYXNzWydzcGlubmluZyddKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBkZXRlcm1pbmUgaWYgZGlzYWJsZWRcbiAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLmNob3NlbkJhY3QgPT09ICdub25lJztcbiAgICAvLyBjaGVjayB0aGF0IGF0IGxlYXN0IDEgcGhhZ2UgYWRkZWQgZm9yIHJvdy9jb2xcbiAgICBpZih0aGlzLm5TdHJhaW5zWzBdID09PSAwIHx8IHRoaXMublN0cmFpbnNbMV0gPT09IDApe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpbHV0aW9uVmFsdWUgPCAwLjEgfHwgdGhpcy5kaWx1dGlvblZhbHVlID4gMjApe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIG51bGwgZWxlbWVudHMgZnJvbSBpbnB1dCBhcnJheSBhbmQgZGlsdXRlcyB0aGVcbiAgICogbnVtYmVyIG9mIHBoYWdlXG4gICAqXG4gICAqIFVzZWQgYmVmb3JlIHN1Ym1pdHRpbmcgcm93L2NvbCBwaGFnZSB0byBzZXJ2aWNlXG4gICAqXG4gICAqIEBwYXJhbSB7RXhwZXJpbWVudFBoYWdlW119IGluRGF0YSAtIGlucHV0IGFycmF5IHRvIGJlIGNsZWFuZWRcbiAgICogLSBjYW4gY29udGFpbiBudWxsIHZhbHVlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7RXhwZXJpbWVudFBoYWdlW119XG4gICAqIC0gY2xlYW5lZCBhcnJheVxuICAgKiAtIGRvZXMgbm90IGNvbnRhaW4gbnVsbCB2YWx1ZXNcbiAgICovXG4gIHByb3RlY3RlZCBfY2xlYW5BcnJheXMoaW5EYXRhOiBFeHBlcmltZW50UGhhZ2VbXSk6IEV4cGVyaW1lbnRQaGFnZVtde1xuICAgIHZhciBjbGVhbiA9IGluRGF0YS5maWx0ZXIoKGVsdCk9PntcbiAgICAgIHJldHVybiBlbHQgIT09IG51bGxcbiAgICB9KS5tYXAoKGVsdCk9PntcbiAgICAgICAgcmV0dXJuIHtpZDogZWx0LmlkLFxuICAgICAgICAgICAgICAgIHN0cmFpbk51bTogZWx0LnN0cmFpbk51bSxcbiAgICAgICAgICAgICAgIG51bVBoYWdlOiBlbHQubnVtUGhhZ2UgLyAodGhpcy5kaWx1dGlvblZhbHVlICogMTAwMClcbiAgICAgICAgICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xlYW5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZvcm1hdHMgdGhlIHJlc3VsdHMgdG8gdGFrZSBpbnRvIGFjY291bnQgb2YgbnVsbCBpbiB0aGUgcm93cy9jb2xzXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXN1bHRzIC0gcmVzdWx0cyBvZiBjb21wdXRpbmcgdGhlIHBsZXhlclxuICAgKiAtIGRvZXMgbm90IGNvbnRhaW4gbnVsbCB2YWx1ZXNcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICogLSB1cGRhdGVkIHJlc3VsdHNcbiAgICogLSBjYW4gY29udGFpbiBudWxsIHZhbHVlc1xuICAgKi9cbiAgcHJvdGVjdGVkIF91bkNsZWFuUmVzdWx0cyhyZXN1bHRzOiBPYmplY3QpOk9iamVjdHtcbiAgICBsZXQgb3V0ID0ge30sXG4gICAgICAgIG5ld0NvbHMgPSB7fTtcbiAgICBsZXQgY3VyUm93ID0gMCxcbiAgICAgICAgY3VyQ29sID0gMDtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzLmxlbmd0aDsgaisrKXtcbiAgICAgIGxldCBjb2wgPSB0aGlzLmNvbHNbal07XG4gICAgICBpZihjb2wgIT09IG51bGwpe1xuICAgICAgICBuZXdDb2xzW2N1ckNvbF0gPSBqO1xuICAgICAgICBjdXJDb2wgKys7XG4gICAgICB9XG4gICAgfSAvLyBlbmQgZm9yIHRoaXMuY29sc1xuICAgIGZvcihsZXQgaSBpbiB0aGlzLnJvd3Mpe1xuICAgICAgaWYodGhpcy5yb3dzW2ldICE9PSBudWxsKXtcbiAgICAgICAgbGV0IHJvdyA9IHJlc3VsdHNbY3VyUm93XTtcbiAgICAgICAgbGV0IHRtcCA9IHt9O1xuICAgICAgICBmb3IobGV0IGogaW4gcm93KXtcbiAgICAgICAgICBsZXQgbmV3Q29sID0gbmV3Q29sc1tqXTtcbiAgICAgICAgICB0bXBbbmV3Q29sXSA9IHJvd1tqXTtcbiAgICAgICAgfVxuICAgICAgICBvdXRbaV0gPSB0bXA7XG4gICAgICAgIGN1clJvdysrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHNwaW5uZXIgQ1NTIGNsYXNzZXMgYmFzZWQgb24gdGhlIGlucHV0IHN0YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdDbGFzcyB1cGRhdGVkIHN0YXRlIGZvciB0aGUgc3Bpbm5lclxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0U3Bpbm5lckNsYXNzKG5ld0NsYXNzOiBzdHJpbmcpe1xuICAgIHRoaXMuX3NwaW5uZXJDbGFzc1snaGlkaW5nJ10gPSAobmV3Q2xhc3MgPT09IFwic3Bpbm5pbmdcIiA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgIHRoaXMuX3NwaW5uZXJDbGFzc1snc3Bpbm5pbmcnXSA9IChuZXdDbGFzcyA9PT0gXCJzcGlubmluZ1wiID8gdHJ1ZSA6IGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgQ1NTIGNsYXNzZXMgZm9yIHRoZSBzcGlubmVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IENTUyBjbGFzc2VzIGZvciB0aGUgc3Bpbm5lciBpbiB0aGUgZm9ybVxuICAgKiBgeydjbGFzcyc6IGJvb2xlYW4sIC4uLn1gXG4gICAqL1xuICBnZXRTcGlubmVyQ2xhc3MoKXtcbiAgICByZXR1cm4gdGhpcy5fc3Bpbm5lckNsYXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgZXhwZXJpbWVudCBkYXRhIGFuZCBzdWJtaXRzIHRvIHNlcnZpY2UgdG8gZ2V0IHJlc3VsdHNcbiAgICogb2YgdGhlIG11bHRpcGxleGVyXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2Ygc3VibWl0IGJ1dHRvblxuICAgKi9cbiAgcGVyZm9ybVBsZXhlcigpe1xuICAgIC8vIHNldCB0aGUgc3Bpbm5lclxuICAgIHRoaXMuX3NldFNwaW5uZXJDbGFzcygnc3Bpbm5pbmcnKTtcbiAgICAvLyBjbGVhbiB0aGUgcm93IGFuZCBjb2x1bW4gYXJyYXlzXG4gICAgbGV0IHRtcFJvd3MgPSB0aGlzLnJvd3M7XG4gICAgbGV0IGNsZWFuUm93cyA9IHRoaXMuX2NsZWFuQXJyYXlzKHRtcFJvd3MpO1xuICAgIGxldCBjbGVhbkNvbHMgPSB0aGlzLl9jbGVhbkFycmF5cyh0aGlzLmNvbHMpO1xuICAgIC8vIGdhdGhlciBkYXRhXG4gICAgdmFyIGRhdGE6IFBsZXhlcklucHV0ID0ge1xuICAgICAgbGF3blR5cGU6IHRoaXMuY2hvc2VuQmFjdCxcbiAgICAgIHJvd1BoYWdlOiBjbGVhblJvd3MsXG4gICAgICBjb2xQaGFnZTogY2xlYW5Db2xzLFxuICAgICAgc3BlY2lhbHM6IHt9LFxuICAgICAgbG9jYXRpb246IHRoaXMucGxleGVyVHlwZSxcbiAgICAgIHNjZW5hcmlvRGF0YTogdGhpcy5zY2VuYXJpb0RldGFpbHMsXG4gICAgICBjYXBhY2l0eTogQ3JpY2tldEdsb2JhbHMucGxleGVyQ2FwYWNpdHlcbiAgICB9O1xuICAgIC8vIHVzZSB0aGUgc2VydmljZVxuICAgIHRoaXMuZXhwU3Vic2NyaXB0aW9uID0gdGhpcy5fZXhwZXJpbWVudFNlcnZpY2UucGVyZm9ybVBsZXhlcihkYXRhKVxuICAgIC5zdWJzY3JpYmUoKHJlcyk9PntcbiAgICAgIHRoaXMucmVzdWx0cyA9IHRoaXMuX3VuQ2xlYW5SZXN1bHRzKHJlcyk7XG4gICAgICB0aGlzLl9zZXRTcGlubmVyQ2xhc3MoJ2hpZGluZycpO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgIHRoaXMuX3NldFNwaW5uZXJDbGFzcygnaGlkaW5nJyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHBoYWdlIHRvIHJvdyBvciBjb2x1bW4gb2YgcGxleGVyXG4gICAqIHdoZW4gc3VjY2Vzc2Z1bCwgdXBkYXRlcyB0aGUgcm93L2NvbCBwaGFnZSBjb3VudHNcbiAgICpcbiAgICogQ2FsbGVkIG9uIGAob25Ecm9wU3VjY2VzcylgIG9mIHJvdy9jb2wgaGVhZGVyXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSAkZXZlbnQgZHJhZ0V2ZW50OyBpbmNsdWRlcyBwaGFnZSBkYXRhXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgZGlyZWN0aW9uOyBhZGQgdG8gYHJvd2Agb3IgYGNvbGBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNwb3QgcG9zaXRpb24gdG8gYWRkIHBoYWdlXG4gICAqL1xuICBhZGRQaGFnZSgkZXZlbnQ6IGFueSwgZGlyOiBzdHJpbmcsIHNwb3Q6IG51bWJlcil7XG4gICAgbGV0IGZwaGFnZTogRnJpZGdlUGhhZ2UgPSAkZXZlbnQuZGF0YTtcbiAgICBsZXQgcGhhZ2U6IEV4cGVyaW1lbnRQaGFnZSA9IHtcbiAgICAgIGlkOiBmcGhhZ2UuaWQsXG4gICAgICBzdHJhaW5OdW06IGZwaGFnZS5zdHJhaW5OdW0sXG4gICAgICBudW1QaGFnZTogQ3JpY2tldEdsb2JhbHMubnVtUGhhZ2VcbiAgICB9XG4gICAgLy8gYWRkIHRvIHJvd1xuICAgIGlmKGRpciA9PT0gJ3JvdycgJiYgc3BvdCA8IDgpe1xuICAgICAgdGhpcy5yb3dzW3Nwb3RdID0gcGhhZ2U7XG4gICAgICB0aGlzLm5TdHJhaW5zWzBdID0gdGhpcy5yb3dzLmZpbHRlcihmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWUgIT09IG51bGwgfSkubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoc3BvdCA8IDgpIHsgLy8gY29sdW1uXG4gICAgICB0aGlzLmNvbHNbc3BvdF0gPSBwaGFnZTtcbiAgICAgIHRoaXMublN0cmFpbnNbMV0gPSB0aGlzLmNvbHMuZmlsdGVyKGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZSAhPT0gbnVsbCB9KS5sZW5ndGg7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3JpY2tldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jcmlja2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3JpY2tldEdsb2JhbHMgfSBmcm9tICcuLi8uLi9jcmlja2V0Lmdsb2JhbHMnO1xuaW1wb3J0IHsgcmVhZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9yZWFkLWVycm9yJztcblxuLyoqXG4gKiBUaGlzIHJvb20gaXMgdXNlZCBmb3Igc3R1ZGVudHMgdG8gc3VibWl0IHRoZWlyIGRlbGV0aW9uIGd1ZXNzZXNcbiAqIGZvciBwaGFnZVxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZGVsLXJvb20nLFxuICAgIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL21vZGVsLXJvb20udGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL21vZGVsLXJvb20uc3R5bGUuY3NzJyldXG59KVxuXG5leHBvcnQgY2xhc3MgTW9kZWxSb29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBDdXJyZW50IHVzZXIgZ3Vlc3NlcyBhcyBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgZ3Vlc3NlczogYW55O1xuICAvKipcbiAgICogQXJyYXkgb2Ygc3RyYWluIG51bWJlcnMgaW5jbHVkZWRcbiAgICovXG4gIHByaXZhdGUga2V5czogbnVtYmVyW107XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lQXI6IG51bWJlcltdO1xuICAvKipcbiAgICogU2l6ZSBvZiBlYWNoIGJsb2NrXG4gICAqL1xuICBwcml2YXRlIHN0ZXBTaXplOiBudW1iZXI7XG4gIC8qKlxuICAgKiBTY2VuYXJpbyBjb2RlXG4gICAqL1xuICBwcml2YXRlIHNjZW5hcmlvSWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFVzZXIgaWRcbiAgICovXG4gIHByaXZhdGUgdXNlcklkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBQb3RlbnRpYWwgYmFja2VuZCBlcnJvciBtZXNzYWdlc1xuICAgKi9cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogQ1NTIHdpZHRoIG9mIGVhY2ggYmxvY2sgZGVwZW5kZW50IG9uIGxlbmd0aCBvZiBnZW5lIGFuZCBzdGVwIHNpemVcbiAgICovXG4gIHByaXZhdGUgX3dpZHRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCb29sZWFuIHN0YXRlIHZhcmlhYmxlIHVzZWQgdG8gbWFrZSB1bnN1YnNjcmliaW5nIGZyb21cbiAgICogbXVsdGlwbGUgc2VydmljZXMgZWFzaWVyXG4gICAqL1xuICBwcml2YXRlIGlzRGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zY2VuYXJpb1NlcnZpY2U6IENyaWNrZXRTZXJ2aWNlKXtcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICB0aGlzLnN0ZXBTaXplID0gQ3JpY2tldEdsb2JhbHMuZGVsZXRpb25HdWVzc0xlbmd0aDtcbiAgICB0aGlzLmdlbmVBciA9IFtdO1xuICAgIGxldCBuQmxvY2tzOiBudW1iZXIgPSBNYXRoLmNlaWwoQ3JpY2tldEdsb2JhbHMuZ2VuZUxlbmd0aC90aGlzLnN0ZXBTaXplKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbkJsb2NrczsgaSsrKXtcbiAgICAgIHRoaXMuZ2VuZUFyLnB1c2goaSk7XG4gICAgfVxuICAgIHRoaXMuX3dpZHRoID0gKDEwMCAvIG5CbG9ja3MpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50XG4gICAqIDEuIEdldCB1c2VyIGlkXG4gICAqIDIuIEdldCB0aGUgc2NlbmFyaW8gaWQgZnJvbSBwYXJlbnQgVVJMXG4gICAqIDMuIEdldCB1c2VyIGd1ZXNzZXMgZnJvbSBzY2VuYXJpbyBzZXJ2aWNlIChzZXQgYnkgZnJpZGdlKVxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICBsZXQgdSA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VyKCk7XG4gICAgaWYodSl7XG4gICAgICB0aGlzLnVzZXJJZCA9IHUuaWQ7XG4gICAgfVxuICAgIHRoaXMuc2NlbmFyaW9JZCA9IHRoaXMuX3JvdXRlLnBhcmVudC5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NjZW5JZCcpO1xuICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5nZXRHdWVzc2VzXG4gICAgICAudGFrZVVudGlsKHRoaXMuaXNEZXN0cm95ZWQkKVxuICAgICAgLnN1YnNjcmliZSgoZGVscykgPT4ge1xuICAgICAgdGhpcy5ndWVzc2VzID0gZGVscztcblxuICAgICAgdGhpcy5rZXlzID0gT2JqZWN0LmtleXMoZGVscykubWFwKChrKT0+IHtyZXR1cm4gTnVtYmVyLnBhcnNlSW50KGspO30pO1xuICAgICAgaWYodGhpcy5rZXlzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ05vIHBoYWdlIGF2YWlsYWJsZSBmb3IgbW9kZWxsaW5nJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgIH1cbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgY29tcG9uZW50IGJ5IHVuc3Vic2NyaWJpbmdcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgQ1NTIGNsYXNzZXMgZm9yIGEgc3RyYWluIGd1ZXNzIGJsb2NrXG4gICAqIEJsb2NrIGluZGljYXRlcyB3aGVhdGVyIHVzZXIgdGhpbmtzIHRoYXQgc2VjdGlvbiBvZiB0aGUgY2hyb21vc29tZVxuICAgKiBpcyBkZWxldGVkIGluIHRoZSBzdHJhaW5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0cmFpbiAtIHN0cmFpbiBudW1iZXIgKG1hdGNoZXMgbnVtbWJlciBpcyBmcmlkZ2UpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwb3MgLSBibG9jayBpbmRleFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhcHBsaWNhYmxlIENTUyBjbGFzc2VzIGluIHRoZSBmb3JtXG4gICAqIGB7J2NsYXNzJzogYm9vbGVhbiwgLi4ufWBcbiAgICovXG4gIGdldEJsb2NrQ2xhc3Moc3RyYWluOiBudW1iZXIsIHBvczogbnVtYmVyKXtcbiAgICBsZXQgcG9zR3Vlc3MgPSB0aGlzLmd1ZXNzZXNbc3RyYWluXVtwb3NdO1xuICAgIHJldHVybiB7XG4gICAgICAnZ3Vlc3MtYmxvY2sgYnRuIHAtMCc6IHRydWUsXG4gICAgICAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5JzogIXBvc0d1ZXNzLCAvLyBpbmFjdGl2ZVxuICAgICAgJ2JnLWRhcmsnOiBwb3NHdWVzcyAvLyBhY3RpdmVcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGJsb2NrIGd1ZXNzIGZyb20gdHJ1ZSB0byBmYWxzZSBPUiBmYWxzZSB0byB0cnVlXG4gICAqXG4gICAqIENhbGxlZCBvbiBgKGNsaWNrKWAgb2YgdGhlIGJsb2NrXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJhaW4gLSBzdHJhaW4gbnVtYmVyIChtYXRjaGVzIG51bW1iZXIgaXMgZnJpZGdlKVxuICAgKiBAcGFyYW0ge251bWJlcn0gcG9zIC0gYmxvY2sgaW5kZXhcbiAgICovXG4gIHRvZ2dsZUJsb2NrKHN0cmFpbjogbnVtYmVyLCBwb3M6IG51bWJlcil7XG4gICAgbGV0IGMgPSB0aGlzLmd1ZXNzZXNbc3RyYWluXVtwb3NdO1xuICAgIHRoaXMuZ3Vlc3Nlc1tzdHJhaW5dW3Bvc10gPSAhYztcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyB0aGUgZ3Vlc3NlcyB0byB0aGUgYmFja2VuZC9kYXRhYmFzZSB1c2luZyB0aGUgc2VydmljZVxuICAgKlxuICAgKiBDYWxsZWQgb24gYChjbGljaylgIG9mIFNhdmUgQnV0dG9uXG4gICAqL1xuICBzYXZlRGF0YSgpe1xuICAgIC8vIGNsZWFyIGVycm9yIG1lc3NhZ2UgYmVmb3JlaGFuZFxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgLy8gdXNlIHNlcnZpY2UgYW5kIHNhdmUgZGF0YSAoYXMgYSBzdHJpbmcpXG4gICAgbGV0IG91dCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ3Vlc3NlcylcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2VcbiAgICAgIC5zYXZlRGVsZXRpb25zKHRoaXMuZ3Vlc3NlcywgdGhpcy51c2VySWQsIHRoaXMuc2NlbmFyaW9JZClcbiAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAuc3Vic2NyaWJlKChkYXQpPT57XG4gICAgICB0aGlzLmd1ZXNzZXMgPSBKU09OLnBhcnNlKGRhdCk7XG4gICAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2Uuc2V0U2NlbmFyaW8obnVsbCwgZGF0KTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbW9kZWwtcm9vbS9tb2RlbC1yb29tLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDcmlja2V0U2VydmljZSB9IGZyb20gJy4uLy4uL2NyaWNrZXQuc2VydmljZSc7XG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IHNob3dzIHRoZSBzY2VuYXJpbyBkZXRhaWxzIGluY2x1ZGluZ1xuICogMS4gcHVycG9zZSAtIHRoZSBnb2FsIG9mIHRoZSBzY2VuYXJpbywgdXN1YWxseSBlaXRoZXIgaWRlbnRpZnkgbXV0YXRpb25zIG9mIGdpdmVuIHVua25vd24gcGhhZ2Ugb3IgY3JlYXRlIHBoYWdlIHdpdGggY2VydGFpbiBtdXRhdGlvblxuICogMi4gcmVsZXZhbmNlIC0gd2h5IHRoZSBzY2VuYXJpbyBpcyByZWxldmFudCBmb3IgbGVhcm5pbmcgYW5kIGZ1dHVyZSBzY2VuYXJpb3NcbiAqIDMuIHN0YXJ0aW5nIHBvaW50IC0gZGVzY3JpcHRpb24gb2YgdGhlIHBoYWdlIHN0dWRlbnRzIHN0YXJ0IHRoZSBzY2VuYXJpbyB3aXRoXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xhbmRpbmctcm9vbScsXG4gIHRlbXBsYXRlVXJsOiByZXF1aXJlKCcuL2xhbmRpbmctcm9vbS50ZW1wbGF0ZS5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBMYW5kaW5nUm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2NlbmFyaW8gd2UgYXJlIHZpZXdpbmdcbiAgICovXG4gIHNjZW5hcmlvOiBTY2VuYXJpbztcbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiB0byB0aGUgZ2V0U2NlbmFyaW8gbWV0aG9kIG9mIHNjZW5hcmlvIHNlcnZpY2VcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBjb250cnVjdG9yXG4gICAqIEBwYXJhbSB7Um91dGVyfSBfcm91dGVyIEFuZ3VsYXIgcm91dGVyXG4gICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGV9IF9yb3V0ZSBUaGUgY3VycmVudCBVUkwgcm91dGUgdG8gZ2V0IHNjZW5hcmlvIGlkXG4gICAqIEBwYXJhbSB7Q3JpY2tldFNlcnZpY2V9IF9zY2VuYXJpb1NlcnZpY2UgU2VydmljZSB0byBnZXQgc2NlbmFyaW8gaW5mb3JtYXRpb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBDcmlja2V0U2VydmljZSl7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBjb21wb25lbnRcbiAgICogMS4gR2V0IHNjZW5Db2RlIGZyb20gdGhlIHVybCAodXNlIHBhcmFtZXRlciBmcm9tIHBhcmVudCByb3V0ZSBiZWNhdXNlIHRoaXMgcm91dGUgZW5kcyBcIi9sYW5kaW5nLXJvb21cIilcbiAgICogMi4gR2V0IHRoZSBkZXRhaWxzIGZvciBzY2VuYXJpb3NcbiAgICogSWYgZXJyb3IsIGdvIGJhY2sgdG8gaG9tZSBwYWdlXG4gICAqL1xuICBuZ09uSW5pdCgpe1xuICAgIGxldCBzY2VuSWQgPSB0aGlzLl9yb3V0ZS5wYXJlbnQuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzY2VuSWQnKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuX3NjZW5hcmlvU2VydmljZVxuICAgICAgLmdldFNjZW5hcmlvKHNjZW5JZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICBzY2VuYXJpbyA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmFyaW8gPSBzY2VuYXJpbztcbiAgICAgIH0sXG4gICAgICBlcnJvciA9PiB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGRlc3Ryb3lpbmcgdGhlIGNvbXBvbmVudCwgdW5zdWJzY3JpYmUgaWYgbmVjZXNzYXJ5IHRvXG4gICAqIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAqL1xuICBuZ09uRGVzdHJveSgpe1xuICAgIGlmKHRoaXMuc3Vic2NyaXB0aW9uKVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbGFuZGluZy1yb29tL2xhbmRpbmctcm9vbS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgRnJpZGdlUGhhZ2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BoYWdlLmludGVyZmFjZSc7XG5cbi8qKlxuICogTW9kYWwgZGlhbG9nIGJveCBmb3IgaW5kaXZpZHVhbCBwaGFnZSBzdHJhaW5zXG4gKiBVc2VkIHRvIGVkaXQgcGhhZ2UgY29tbWVudCwgdmlldyBwaGFnZSBwYXJlbnRzLCBvciBkZWxldGUgcGhhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGhhZ2UtZGlhbG9nLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9waGFnZS1kaWFsb2cudGVtcGxhdGUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIFBoYWdlRGlhbG9nQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFRoZSBwaGFnZSB3ZSBhcmUgdmlld2luZ1xuICAgKi9cbiAgQElucHV0KCkgcGhhZ2U6IEZyaWRnZVBoYWdlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwpIHtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9waGFnZS1kaWFsb2cuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTG9jYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2xvY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dnZWRJbkd1YXJkIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vbG9nZ2VkLWluLmd1YXJkLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBMYWJSb29tQ29tcG9uZW50IH0gZnJvbSAnLi9sYWItcm9vbS9sYWItcm9vbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxleGVyUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vcGxleGVyLXJvb20vcGxleGVyLXJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGVsUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vbW9kZWwtcm9vbS9tb2RlbC1yb29tLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYW5kaW5nUm9vbUNvbXBvbmVudCB9IGZyb20gJy4vbGFuZGluZy1yb29tL2xhbmRpbmctcm9vbS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgTG9jYXRpb25Sb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogTG9jYXRpb25Db21wb25lbnQsXG4gICAgY2FuQWN0aXZhdGU6IFtMb2dnZWRJbkd1YXJkXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnbGFiLXJvb20nLFxuICAgICAgICBjb21wb25lbnQ6IExhYlJvb21Db21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ0xhYidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3BsZXhlci1yb29tJyxcbiAgICAgICAgY29tcG9uZW50OiBQbGV4ZXJSb29tQ29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYnM6ICdQbGV4ZXInXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdtb2RlbC1yb29tJyxcbiAgICAgICAgY29tcG9uZW50OiBNb2RlbFJvb21Db21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBicmVhZGNydW1iczogJ01vZGVsJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBwYXRoOiAnaW5mbycsIGNvbXBvbmVudDogTGFuZGluZ1Jvb21Db21wb25lbnR9LFxuICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBMYW5kaW5nUm9vbUNvbXBvbmVudH1cbiAgICBdXG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXI/a2VlcFVybD10cnVlIS4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xvY2F0aW9uLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sb2NhdGlvbi50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbG9jYXRpb24udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sb2NhdGlvbi5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9sb2NhdGlvbi5zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xhYi1yb29tL2xhYi1yb29tLnRlbXBsYXRlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20uc3R5bGUuY3NzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2NyaWNrZXQvbG9jYXRpb24vbGFiLXJvb20vbGFiLXJvb20uc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5NzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLnRlbXBsYXRlLmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9wbGV4ZXItcm9vbS9wbGV4ZXItcm9vbS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5Nzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL3BsZXhlci1yb29tL3BsZXhlci1yb29tLnN0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL21vZGVsLXJvb20vbW9kZWwtcm9vbS50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5Nzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL21vZGVsLXJvb20vbW9kZWwtcm9vbS5zdHlsZS5jc3NcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvY3JpY2tldC9sb2NhdGlvbi9tb2RlbC1yb29tL21vZGVsLXJvb20uc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5ODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xhbmRpbmctcm9vbS9sYW5kaW5nLXJvb20udGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jcmlja2V0L2xvY2F0aW9uL2xhbmRpbmctcm9vbS9sYW5kaW5nLXJvb20udGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kYWwsIE1vZGFsRGlzbWlzc1JlYXNvbnMgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENyaWNrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vY3JpY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3JpY2tldEdsb2JhbHMgfSBmcm9tICcuLi9jcmlja2V0Lmdsb2JhbHMnO1xuaW1wb3J0IHsgUGhhZ2VEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BoYWdlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBGcmlkZ2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ZyaWRnZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRnJpZGdlUGhhZ2UsIEdlbm90eXBlUGhhZ2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3BoYWdlLmludGVyZmFjZSc7XG5pbXBvcnQgeyByZWFkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3JlYWQtZXJyb3InO1xuXG4vKipcbiAqIE9uZSBvZiB0aGUgbWFpbiBjb21wb25lbnRzIG9mIHRoZSBhcHAgLSB0aGUgZnJpZGdlIHN0b3JlcyB0aGUgcGhhZ2UgZm9yXG4gKiB0aGUgZ2l2ZW4gdXNlci9zY2VuYXJpb1xuICpcbiAqIE5lZWRzIHRvIGdldCBleGlzdGluZyBmcmlkZ2UvY3JlYXRlIG5ldyBvbmU7IGVkaXQgYW5kIHJlbW92ZSBleGlzdGluZyBzdHJhaW5zO1xuICpcbiAqIGFkZCBuZXcgc3RyYWluczsgY2hhbmdlIHNoZWxmXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZnJpZGdlJyxcbiAgICB0ZW1wbGF0ZVVybDogcmVxdWlyZSgnLi9mcmlkZ2UudGVtcGxhdGUuaHRtbCcpLFxuICBzdHlsZVVybHM6IFtyZXF1aXJlKCcuL2ZyaWRnZS5zdHlsZS5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgRnJpZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG5cbiAgLyoqXG4gICAqIFRoZSBsb2dnZWQgaW4gdXNlclxuICAgKi9cbiAgcHJpdmF0ZSB1c2VyOiBVc2VyO1xuICAvKipcbiAgICogVGhlIGZyaWRnZSBvYmplY3RcbiAgICovXG4gIGZyaWRnZTogRnJpZGdlO1xuICAvKipcbiAgICogbGlzdCBvZiBzdHJhaW5zIGluIHRoZSBmcmlkZ2UsIGluY2x1ZGluZyBlbXB0eSBvbmVzXG4gICAqL1xuICBzdHJhaW5zOiBGcmlkZ2VQaGFnZVtdO1xuICAvKipcbiAgICogY3VycmVudGx5IHZpc2libGUgc3RyYWlucyBiYXNlZCBvbiBzaGVsZiBudW1iZXJcbiAgICovXG4gIGN1cnJTdHJhaW5zOiBGcmlkZ2VQaGFnZVtdO1xuICAvKipcbiAgICogY3VycmVudCBzaGVsZlxuICAgKi9cbiAgc2hlbGY6IG51bWJlciA9IDA7XG4gIC8qKlxuICAgKiBtYXhpbXVtIG51bWJlciBvZiBzaGVsdmVzIGluIGZyaWRnZVxuICAgKi9cbiAgbWF4U2hlbGY6IG51bWJlcjtcbiAgLyoqXG4gICAqIG51bWJlciBvZiBzbG90cyBwZXIgc2hlbGZcbiAgICovXG4gIHNwb3RzOiBudW1iZXI7XG4gIC8qKlxuICAgKiBwb3RlbnRpYWwgYmFja2VuZCBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogU3RhdGUgdG8gbW9uaXRpb3IgaWYgY29tcG9uZW50IGFjdGl2ZSB0byBtYWtlIHVuc3Vic2NyaWJpbmcgdG9cbiAgICogbXVsdGlwbGUgc3RyZWFtcyBlYXNpZXJcbiAgICovXG4gIHByaXZhdGUgaXNEZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAvKipcbiAgICogT2JzZXJ2ZXMgdGhlIHNjZW5Db2RlIG9mIHRoZSBVUkxcbiAgICovXG4gIHByaXZhdGUgcGFyYW1PYnNlcnZlcjogYW55O1xuXG4gIHByaXZhdGUgbmV4dFNwb3Q6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2NlbmFyaW9TZXJ2aWNlOiBDcmlja2V0U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCkge1xuICAgIHRoaXMubWF4U2hlbGYgPSBDcmlja2V0R2xvYmFscy5uRnJpZGdlU2hlbGY7XG4gICAgdGhpcy5zcG90cyA9IENyaWNrZXRHbG9iYWxzLm5GcmlkZ2VTcG90cztcbiAgICB0aGlzLmlzRGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGFpbGl6ZSB0aGUgZnJpZGdlIHdoZW4gY3JlYXRpbmcgY29tcG9uZW50XG4gICAqIDEuIEdldCBsb2dnZWQgaW4gdXNlciBhbmQgY3VycmVudCBzY2VuYXJpb1xuICAgKiAyLiBGZXRjaCB0aGUgY29ycmVzcG9uZGluZyBmcmlkZ2VcbiAgICogM2EuIElmIHRoZSBmcmlkZ2UgZG9lc24ndCBleGlzdCB5ZXQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICogM2IuIElmIHRoZSBmcmlkZ2UgZG9lcyBleGlzdCwgaW5pdGlhbGl6ZSBpdFxuICAgKi9cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcigpO1xuXG4gICAgbGV0IHVzZXJJZCA9IHRoaXMudXNlci5pZDtcbiAgICB0aGlzLnBhcmFtT2JzZXJ2ZXIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICBsZXQgc2NlbklkID0gcGFyYW1zWydzY2VuSWQnXTtcbiAgICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5nZXRGcmlkZ2UodXNlcklkLCBzY2VuSWQpXG4gICAgICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGZyaWRnZSkgPT4ge3RoaXMuX2luaXRGcmlkZ2UoZnJpZGdlKX0sXG4gICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYoZXJyLnN0YXR1cyA9PT0gMzA3KXtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUZyaWRnZSh1c2VySWQsIHNjZW5JZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIH0gfVxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gZGVzdHJveWluZyB0aGUgY29tcG9uZW50LCB1bnN1YnNjcmliZSBmcm9tIHNlcnZpY2VzXG4gICAqIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICovXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5wYXJhbU9ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmlzRGVzdHJveWVkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgZnJpZGdlIGJlY2F1c2UgdGhpcyB1c2VyIGRvZXNuJ3QgaGF2ZSBvbmUgZm9yIHRoaXMgc2NlbmFyaW9cbiAgICpcbiAgICogT24gc3VjY2VzcywgaW5pYWxpemVzIGZyaWRnZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIC0gbG9nZ2VkIGluIHVzZXIncyBpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NlbklkIC0gY3VycmVudCBzY2VuYXJpbyBpZFxuICAgKi9cbiAgX2NyZWF0ZUZyaWRnZSh1c2VySWQ6IG51bWJlciwgc2NlbklkOiBzdHJpbmcpe1xuICAgIHRoaXMuX3NjZW5hcmlvU2VydmljZS5jcmVhdGVGcmlkZ2UodXNlcklkLCBzY2VuSWQpXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAgIC5zdWJzY3JpYmUoKGZyaWRnZSk9PntcbiAgICAgIHRoaXMuX2luaXRGcmlkZ2UoZnJpZGdlKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW50aWFsaXplcyB0aGUgZnJpZGdlIGFuZCBjb21wb25lbnQgdmFyaWFibGVzIHJlbGF0ZWQgdG8gd2hpY2ggc3RyYWlucyBhcmVcbiAgICogdmlzaWJsZSBiYXNlZCBvbiB0aGUgY3VycmVudCBzaGVsZlxuICAgKlxuICAgKiBAcGFyYW0ge0ZyaWRnZX0gbmV3RnJpZGdlIC0gZnJpZGdlIG9iamVjdCB0byBiZSBpbml0YWxpemVkXG4gICAqL1xuICBfaW5pdEZyaWRnZShuZXdGcmlkZ2U6IEZyaWRnZSl7XG4gICAgdGhpcy5mcmlkZ2UgPSBuZXdGcmlkZ2U7XG4gICAgdGhpcy5zdHJhaW5zID0gdGhpcy5fZmlsbFN0cmFpbnMobmV3RnJpZGdlLnN0cmFpbnMpO1xuICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLnNldFNjZW5hcmlvKG5ld0ZyaWRnZS5zY2VuYXJpb0RldGFpbHMsIG5ld0ZyaWRnZS5ndWVzc2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxscyBpbiB0aGUgZW1wdHkgc2xvdHMgd2l0aCBcImVtcHR5XCIgcGhhZ2Ugb2JqZWN0c1xuICAgKlxuICAgKiBAcGFyYW0ge0ZyaWRnZVBoYWdlW119IGZyaWRnZVN0cmFpbnMgLSBhcnJheSBvZiBzdHJhaW5zIGFjdHVhbGx5IGluIHRoZSBmcmlkZ2VcbiAgICpcbiAgICogQHJldHVybnMge0ZyaWRnZVBoYWdlW119IGFycmF5IG9mIGFsbCBzbG90cyBpbiBmcmlkZ2UsIGluY2x1ZGluZyBlbXB0eVxuICAgKi9cbiAgX2ZpbGxTdHJhaW5zKGZyaWRnZVN0cmFpbnM6IEZyaWRnZVBoYWdlW10pOiBGcmlkZ2VQaGFnZVtde1xuICAgIHZhciBvdXQ6IEZyaWRnZVBoYWdlW10gPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhTaGVsZip0aGlzLnNwb3RzOyBpKyspe1xuICAgICAgb3V0LnB1c2goe3N0cmFpbk51bTogaSwgcGhhZ2VUeXBlOiAnZW1wdHknLCBjb21tZW50OiAnJywgaWQ6ICcnfSk7XG4gICAgfVxuICAgIHRoaXMubmV4dFNwb3QgPSBmcmlkZ2VTdHJhaW5zWzBdLnN0cmFpbk51bSArIDE7XG4gICAgLy8gYWRkIG9yaWdpbmFsIHN0cmFpbnNcbiAgICBmb3IobGV0IGk9MDsgaSA8IGZyaWRnZVN0cmFpbnMubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IG4gPSBmcmlkZ2VTdHJhaW5zW2ldLnN0cmFpbk51bTtcbiAgICAgIG91dFtuXSA9IGZyaWRnZVN0cmFpbnNbaV07XG4gICAgICB0aGlzLm5leHRTcG90ID0gKG4gPT09IHRoaXMubmV4dFNwb3QgPyBuKzEgOiB0aGlzLm5leHRTcG90KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHN0cmFpbnMgZm9yIHZpc2libGUgc2hlbGZcbiAgICovXG4gIF9jdXJyU3RyYWlucygpe1xuICAgIGxldCBzdGFydCA9IHRoaXMuc2hlbGYqdGhpcy5zcG90cztcbiAgICBsZXQgZW5kID0gc3RhcnQrdGhpcy5zcG90cztcbiAgICB0aGlzLmN1cnJTdHJhaW5zID0gdGhpcy5zdHJhaW5zLnNsaWNlKHN0YXJ0LGVuZCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBDU1MgY2xhc3NlcyBhcHBsaWNhYmxlIHRvIHRoZSBwaGFnZSBiYXNlZCBvbiB0aGUgcGhhZ2UgdHlwZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIC0gc3RyYWluIG51bWJlciBvZiBwaGFnZVxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjbGFzc2VzIHdoaWNoIGFwcHkgdG8gdGhpcyBidXR0b24gaW4gdGhlIGZvcm0ge1wiY2xhc3NcIjogYm9vbGVhbiwgLi4ufVxuICAgKi9cbiAgZ2V0UGhhZ2VDbGFzcyhzcmM6IG51bWJlcik6IE9iamVjdHtcbiAgICBsZXQgcGhhZ2UgPSB0aGlzLnN0cmFpbnNbc3JjXTtcbiAgICByZXR1cm4ge1xuICAgICAgJ2NvbC03IGNvbC14bC04IHAtMCBzdHJhaW4taW1hZ2UnOiB0cnVlLFxuICAgICAgJ3N0cmFpbi1pbWFnZS1yZWZlcmVuY2UnOiBwaGFnZS5waGFnZVR5cGUgPT09ICdyZWZlcmVuY2UnLFxuICAgICAgJ3N0cmFpbi1pbWFnZS11bmtub3duJzogcGhhZ2UucGhhZ2VUeXBlID09PSAndW5rbm93bicsXG4gICAgICAnc3RyYWluLWltYWdlLXN1Ym1pdHRlZCc6IHBoYWdlLnN1Ym1pdHRlZFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZSBvciBkZWNyZWFzZSB2aXNpYmxlIHNoZWxmIHRoZW4gdXBkYXRlIHRoZSB2aXNpYmxlIHN0cmFpbnNcbiAgICpcbiAgICogQ2FsbGVkIGJ5IGAoY2xpY2spYCBvZiBwcmV2L25leHQgYnV0dG9uc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5jIC0gYW1vdW50IHRvIGNoYW5nZSBzaGVsZiBieVxuICAgKi9cbiAgY2hhbmdlU2hlbGYoaW5jOiBudW1iZXIpe1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgaWYodGhpcy5zaGVsZiA8PSB0aGlzLm1heFNoZWxmLTEgJiYgaW5jID09PSAxKXtcbiAgICAgIHRoaXMuc2hlbGYrKztcbiAgICAgIHRoaXMuX2N1cnJTdHJhaW5zKCk7XG4gICAgfSBlbHNlIGlmKHRoaXMuc2hlbGYgPiAwICYmIGluYyA9PT0gLTEpe1xuICAgICAgdGhpcy5zaGVsZi0tO1xuICAgICAgdGhpcy5fY3VyclN0cmFpbnMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHZpc2libGUgc2hlbGYgdG8gYSBzcGVjaWZpYyBudW1iZXI7XG4gICAqIHVzZWQgdG8ganVtcCB0byB0aGUgYmVnaW5uaW5nIGFuZCBlbmRcbiAgICpcbiAgICogQ2FsbGVkIGJ5IChjbGljaykgb2YgZmlyc3QvbGFzdCBidXR0b25zXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuU2hlbGYgLSBzaGVsZiB0byBnbyB0b1xuICAgKi9cbiAgc2V0U2hlbGYoblNoZWxmOiBudW1iZXIpe1xuICAgIHRoaXMuc2hlbGYgPSBuU2hlbGY7XG4gICAgdGhpcy5fY3VyclN0cmFpbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgc3RyYWluIGNhbiBiZSBkcm9wcGVkIGluIGEgc2xvdFxuICAgKiBjYW4gYmUgZHJvcHBlZCBpZiBzbG90IGlzIGVtcHR5IGFuZCBzcmMgaXMgc21hbGwgb3IgbGFyZ2VcbiAgICpcbiAgICogQ2FsbGVkIGJ5IGBbYWxsb3dEcm9wXWAgb2YgZnJpZGdlIHNsb3RcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNwb3QgLSBzcG90IHRvIHRlc3QgdG8gc2VlIGlmIGNhbiBkcm9wXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgdHJ1ZSBvciBmYWxzZSBpZlxuICAgKiBzdHJhaW4gY2FuIGJlIGRyb3BwZWQgaW4gc2xvdFxuICAgKi9cbiAgY2FuRHJvcChzcG90OiBudW1iZXIpOiBhbnkge1xuICByZXR1cm4gKGRyYWdEYXRhOiBHZW5vdHlwZVBoYWdlKSA9PiB7XG4gICAgbGV0IG91dCA9IGZhbHNlO1xuICAgIGlmKGRyYWdEYXRhICYmIGRyYWdEYXRhLmhhc093blByb3BlcnR5KCdzcmMnKSl7XG4gICAgICBpZihkcmFnRGF0YS5zcmMgPT09ICdzbWFsbCcgfHwgZHJhZ0RhdGEuc3JjPT09ICdsYXJnZScpe1xuICAgICAgICBsZXQgdHJ5U3BvdDogRnJpZGdlUGhhZ2UgPSB0aGlzLnN0cmFpbnNbc3BvdF07XG4gICAgICAgIGlmKHRyeVNwb3QucGhhZ2VUeXBlID09PSAnZW1wdHknKXtcbiAgICAgICAgICBvdXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH07XG59XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgc3RyYWluIHRvIGEgZnJpZGdlXG4gICAqXG4gICAqIENhbGxlZCBieSBgKG9uRHJvcFN1Y2VzcylgIG9mIHNsb3RcbiAgICpcbiAgICogQHBhcmFtIHthbnl9ICRldmVudCAtIGRyYWcgZXZlbnQsIGluY3VkaW5nIGRhdGEgZm9yIHN0cmFpbiB0byBhZGQ7XG4gICAqIGhhczogc2hpZnRzLCBkZWxldGlvbiwgcGFyZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gc3BvdCAtIHNsb3QgdG8gZHJvcCBuZXcgc3RyYWluXG4gICAqL1xuICBkcm9wU3RyYWluKCRldmVudDogYW55LCBzcG90OiBudW1iZXIpe1xuICAgIGxldCBzdHJhaW46IEdlbm90eXBlUGhhZ2UgPSAkZXZlbnQuZGF0YTtcbiAgICAvLyBuZWVkIHN0cmFpbk51bSwgbXV0YXRpb25MaXN0LCBkZWxldGlvblxuICAgIGxldCBuZXdTdHJhaW4gPSB7XG4gICAgICBzdHJhaW5OdW06IHNwb3QsXG4gICAgICBtdXRhdGlvbkxpc3Q6IHN0cmFpbi5zaGlmdHMsXG4gICAgICBkZWxldGlvbjogc3RyYWluLmRlbGV0aW9uLFxuICAgICAgcGFyZW50czogc3RyYWluLnBhcmVudHNcbiAgICB9XG4gICAgLy8gYWRkIHRvIGZyaWRnZVxuICAgIGxldCB1c2VySWQgPSB0aGlzLnVzZXIuaWQ7XG4gICAgbGV0IHNjZW5Db2RlID0gdGhpcy5mcmlkZ2Uuc2NlbkNvZGU7XG4gICAgdGhpcy5fc2NlbmFyaW9TZXJ2aWNlLmFkZFN0cmFpbih1c2VySWQsIHNjZW5Db2RlLCBuZXdTdHJhaW4pXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgdGhpcy5zdHJhaW5zW3Nwb3RdID0ge1xuICAgICAgICAvLyBzdHJhaW5OdW0gY29tbWVudCBwaGFnZVR5cGUgaWQgcGFyZW50c1xuICAgICAgICBzdHJhaW5OdW06IHJlcy5zdHJhaW5OdW0sXG4gICAgICAgIGNvbW1lbnQ6IHJlcy5jb21tZW50LFxuICAgICAgICBwaGFnZVR5cGU6IHJlcy5waGFnZVR5cGUsXG4gICAgICAgIGlkOiByZXMuaWQsXG4gICAgICAgIHBhcmVudHM6IHJlcy5wYXJlbnRzLFxuICAgICAgICBudW1QYXJlbnRzOiByZXMubnVtUGFyZW50c1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VyclN0cmFpbnMoKTtcbiAgICB9LFxuICAgICAgKGVycik9PntcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVhZEVycm9yTWVzc2FnZShlcnIpO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogb3BlbnMgYSBkaWFsb2cgYm94IHRvIGVkaXQvbGVhcm4gbW9yZSBhYm91dCBzZWxlY3RlZCBwaGFnZVxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIG9wZW5zIHRoZSBib3ggY2FsbHMgaGVscGVyIG1ldGhvZHMgYmFzZWQgb24gYm94IG91dHB1dFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3JjIC0gc3RyYWluIG51bWJlciB0byBvcGVuIGJveCBmb3JcbiAgICovXG4gIGVkaXRQaGFnZShzcmM6IG51bWJlcikge1xuICAgIGxldCBwaGFnZSA9IHRoaXMuc3RyYWluc1tzcmNdO1xuICAgIGNvbnN0IG1vZGVsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oUGhhZ2VEaWFsb2dDb21wb25lbnQsIHsgd2luZG93Q2xhc3M6ICdwaGFnZS1kaWFsb2cnfSk7XG4gICAgbW9kZWxSZWYuY29tcG9uZW50SW5zdGFuY2UucGhhZ2UgPSBwaGFnZTtcblxuICAgIG1vZGVsUmVmLnJlc3VsdC50aGVuKChyZXN1bHQpPT57XG4gICAgICBsZXQgcmVzVHlwZSA9IHR5cGVvZiByZXN1bHQ7XG4gICAgICBpZihyZXNUeXBlID09PSBcInN0cmluZ1wiICYmIHJlc3VsdCA9PT0gJ2RlbGV0ZScpe1xuICAgICAgICAvLyBkZWxldGUgdGhlIHBoYWdlXG4gICAgICAgIHRoaXMuX2RlbGV0ZVBoYWdlKHNyYyk7XG4gICAgICB9IGVsc2UgaWYgKHJlc1R5cGUgPT09IFwib2JqZWN0XCIpe1xuICAgICAgICAvLyBlZGl0IGl0XG4gICAgICAgIHRoaXMuX2VkaXRQaGFnZShzcmMsIHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0sIChyZWFzb24pPT57XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgICByZXR1cm47XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIHdoaWNoIHVwZGF0ZXMgdGhlIHBoYWdlIGFmdGVyIGRpYWxvZyBib3ggaGFzIGNsb3NlZFxuICAgKlxuICAgKiBVcGRhdGVzIHRoZSBzdHJhaW4gb24gc3VjY2VzcyBhbmQgc2V0cyBlcnJvciBtZXNzYWdlIG9uIGVycm9yXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgLSBzdHJhaW4gbnVtYmVyIHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge0ZyaWRnZVBoYWdlfSBuZXdQaGFnZSAtIHVwZGF0ZWQgZGV0YWlsc1xuICAgKi9cbiAgX2VkaXRQaGFnZShzcmM6IG51bWJlciwgbmV3UGhhZ2U6IEZyaWRnZVBoYWdlKXtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UudXBkYXRlU3RyYWluKHRoaXMudXNlci5pZCwgdGhpcy5mcmlkZ2Uuc2NlbkNvZGUsIG5ld1BoYWdlKVxuICAgIC50YWtlVW50aWwodGhpcy5pc0Rlc3Ryb3llZCQpXG4gICAgLnN1YnNjcmliZSgocmVzKT0+e1xuICAgICAgdGhpcy5zdHJhaW5zW3NyY10gPSByZXM7XG4gICAgICB0aGlzLl9jdXJyU3RyYWlucygpO1xuICAgIH0sIChlcnIpPT57XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlYWRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gd2hpY2ggZGVsZXRlcyB0aGUgcGhhZ2UgZnJvbSB0aGUgZnJpZGdlIGFmdGVyIGRpYWxvZyBib3ggaGFzIGNsb3NlZFxuICAgKlxuICAgKiBTZXRzIHNwb3QgdG8gZW1wdHkgcGhhZ2Ugb24gc3VjY2VzcyBhbmQgc2V0cyBlcnJvciBtZXNzYWdlIG9uIGVycm9yXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcmMgLSBzdHJhaW4gbnVtYmVyIHRvIGRlbGV0ZVxuICAgKi9cbiAgX2RlbGV0ZVBoYWdlKHNyYzogbnVtYmVyKXtcbiAgICBsZXQgbmV3UGhhZ2UgPSB0aGlzLnN0cmFpbnNbc3JjXTtcbiAgICB0aGlzLl9zY2VuYXJpb1NlcnZpY2UuZGVsZXRlU3RyYWluKHRoaXMudXNlci5pZCwgdGhpcy5mcmlkZ2Uuc2NlbkNvZGUsIG5ld1BoYWdlLCApXG4gICAgLnRha2VVbnRpbCh0aGlzLmlzRGVzdHJveWVkJClcbiAgICAuc3Vic2NyaWJlKChyZXMpPT57XG4gICAgICAvLyBzdWNjZXNzZnVsXG4gICAgICB0aGlzLnN0cmFpbnNbc3JjXSA9IHtzdHJhaW5OdW06IHNyYywgcGhhZ2VUeXBlOiAnZW1wdHknLCBjb21tZW50OicnLCBpZDogJyd9O1xuICAgICAgdGhpcy5fY3VyclN0cmFpbnMoKTtcbiAgICB9LCAoZXJyKT0+e1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZWFkRXJyb3JNZXNzYWdlKGVycik7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9hbmd1bGFyLXJvdXRlci1sb2FkZXIvc3JjIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlcj9rZWVwVXJsPXRydWUhLi9wdWJsaWMvYXBwL2NyaWNrZXQvZnJpZGdlL2ZyaWRnZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwdWJsaWMvYXBwL2NyaWNrZXQvZnJpZGdlL3BoYWdlLWRpYWxvZy50ZW1wbGF0ZS5odG1sXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2NyaWNrZXQvZnJpZGdlL3BoYWdlLWRpYWxvZy50ZW1wbGF0ZS5odG1sXG4vLyBtb2R1bGUgaWQgPSA5ODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9mcmlkZ2UudGVtcGxhdGUuaHRtbFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9mcmlkZ2UudGVtcGxhdGUuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInB1YmxpYy9hcHAvY3JpY2tldC9mcmlkZ2UvZnJpZGdlLnN0eWxlLmNzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jcmlja2V0L2ZyaWRnZS9mcmlkZ2Uuc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5ODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==