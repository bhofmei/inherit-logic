webpackJsonp([1],{1006:function(e,t,s){"use strict";var i=this&&this.__decorate||function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});const r=s(1),n=s(18),o=s(992),a=s(127),l=s(993),c=s(994),h=s(995),u=s(996);t.LocationRoutes=[{path:"",component:o.LocationComponent,canActivate:[a.LoggedInGuard],children:[{path:"lab-room",component:l.LabRoomComponent,data:{breadcrumbs:"Lab"}},{path:"plexer-room",component:c.PlexerRoomComponent,data:{breadcrumbs:"Plexer"}},{path:"model-room",component:h.ModelRoomComponent,data:{breadcrumbs:"Model"}},{path:"info",component:u.LandingRoomComponent},{path:"",component:u.LandingRoomComponent}]}];let p=class{};p=i([r.NgModule({imports:[n.RouterModule.forChild(t.LocationRoutes)],exports:[n.RouterModule]})],p),t.LocationRouteModule=p},1007:function(e,t,s){"use strict";var i=this&&this.__decorate||function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),o=s(18),a=s(203),l=s(10),c=s(126),h=s(22),u=s(979),p=s(997),d=s(69);let g=class{constructor(e,t,s,i,r){this._router=e,this._route=t,this._authenticationService=s,this._scenarioService=i,this._modalService=r,this.modalDialog="Hi",this.shelf=0,this.errorMessage="",this.maxShelf=u.ScenarioGlobals.nFridgeShelf,this.spots=u.ScenarioGlobals.nFridgeSpots,this.isDestroyed$=new l.Subject}ngOnInit(){this.user=this._authenticationService.getUser();let e=this.user.id,t=this._route.snapshot.paramMap.get("scenId");this._scenarioService.getFridge(e,t).takeUntil(this.isDestroyed$).subscribe(e=>{this._initFridge(e)},s=>{307===s.status?this._createFridge(e,t):this.errorMessage=s.message})}ngOnDestroy(){this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}_createFridge(e,t){this._scenarioService.createFridge(e,t).takeUntil(this.isDestroyed$).subscribe(e=>{this._initFridge(e)},e=>{this.errorMessage=e.message})}_initFridge(e){this.fridge=e,this.strains=this._fillStrains(e.strains),this._currStrains(),this._scenarioService.setScenario(e.scenarioDetails,e.guesses)}_fillStrains(e){var t=[];for(let e=0;e<this.maxShelf*this.spots;e++)t.push({strainNum:e,phageType:"empty",comment:"",id:""});for(let s=0;s<e.length;s++){t[e[s].strainNum]=e[s]}return t}_currStrains(){let e=this.shelf*this.spots,t=e+this.spots;this.currStrains=this.strains.slice(e,t)}changeShelf(e){this.errorMessage="",this.shelf<=this.maxShelf-1&&1===e?(this.shelf++,this._currStrains()):this.shelf>0&&-1===e&&(this.shelf--,this._currStrains())}getPhageClass(e){let t=this.strains[e];return{"col-7 col-xl-8 p-0 strain-image":!0,"strain-image-reference":"reference"===t.phageType,"strain-image-unknown":"unknown"===t.phageType,"strain-image-submitted":t.submitted}}setShelf(e){this.shelf=e,this._currStrains()}canDrop(e){return t=>{let s=!1;t&&t.hasOwnProperty("src")&&("small"!==t.src&&"large"!==t.src||"empty"===this.strains[e].phageType&&(s=!0));return s}}dropStrain(e,t){let s=e.dragData,i={strainNum:t,mutationList:s.shifts,deletion:s.deletion},r=this.user.id,n=this.fridge.scenCode;this._scenarioService.addStrain(i,r,n).subscribe(e=>{this.strains[t]={strainNum:e.strainNum,comment:e.comment,phageType:e.phageType,id:e.id,parents:e.parents},this._currStrains()},e=>{this.errorMessage=d.readErrorMessage(e)})}editPhage(e){let t=this.strains[e];const s=this._modalService.open(p.PhageDialogComponent,{windowClass:"phage-dialog"});s.componentInstance.phage=t,s.result.then(t=>{let s=typeof t;if("string"===s&&"delete"===t)this._deletePhage(e);else{if("object"!==s)return;this._editPhage(e,t)}},e=>{})}_editPhage(e,t){this._scenarioService.updateStrain(t,this.user.id,this.fridge.scenCode).takeUntil(this.isDestroyed$).subscribe(t=>{this.strains[e]=t,this._currStrains()},e=>{this.errorMessage=e.error.message})}_deletePhage(e){let t=this.strains[e];this._scenarioService.deleteStrain(t,this.user.id,this.fridge.scenCode).takeUntil(this.isDestroyed$).subscribe(t=>{this.strains[e]={strainNum:e,phageType:"empty",comment:"",id:""},this._currStrains()},e=>{this.errorMessage=e.error.message})}};g=i([n.Component({selector:"fridge",templateUrl:"./app/scenario/fridge/fridge.template.html",styleUrls:["./app/scenario/fridge/fridge.style.css"]}),r("design:paramtypes",[o.Router,o.ActivatedRoute,h.AuthenticationService,c.ScenarioService,a.NgbModal])],g),t.FridgeComponent=g},978:function(e,t,s){"use strict";var i=this&&this.__decorate||function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});const r=s(1),n=s(63),o=s(1006),a=s(981),l=s(1007),c=s(997),h=s(992),u=s(996),p=s(993),d=s(994),g=s(995);let f=class{};f=i([r.NgModule({imports:[n.SharedModule,o.LocationRouteModule],declarations:[l.FridgeComponent,c.PhageDialogComponent,h.LocationComponent,p.LabRoomComponent,d.PlexerRoomComponent,g.ModelRoomComponent,u.LandingRoomComponent],entryComponents:[c.PhageDialogComponent],providers:[a.ExperimentService]})],f),t.LocationModule=f},979:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScenarioGlobals={numPhage:1e6,plateCapacity:1500,plexerCapacity:200,nFridgeShelf:32,nFridgeSpots:16,defaultLabDilution:10,defaultPlexerDilution:5,geneLength:350,deletionGuessLength:10}},981:function(e,t,s){"use strict";var i=this&&this.__decorate||function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),o=s(54);let a=class{constructor(e){this._http=e,this._baseURL="api/cricket"}createPlate(e){return this._http.post(`${this._baseURL}/plate`,e)}performPlexer(e){return this._http.post(`${this._baseURL}/plexer`,e)}};a=i([n.Injectable(),r("design:paramtypes",[o.HttpClient])],a),t.ExperimentService=a},992:function(e,t,s){"use strict";var i=this&&this.__decorate||function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});let r=class{};r=i([s(1).Component({selector:"location",templateUrl:"./app/scenario/location/location.template.html",styleUrls:["./app/scenario/location/location.style.css"]})],r),t.LocationComponent=r},993:function(e,t,s){"use strict";var i=this&&this.__decorate||function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),o=s(10);s(68);const a=s(205),l=s(979),c=s(981),h=s(126);let u=class{constructor(e,t,s){this._experimentService=e,this._scenarioService=t,this.dnd=s,this.isHidden={K:!1,B:!1},this.phage=[],this.dilutionValue=l.ScenarioGlobals.defaultLabDilution,this.canEditDilution=!0,this.isEmpty=!0,this.lawnType="",this.isFull=!1,this.errorMessage="",this.isDestroyed$=new o.Subject,this.contents=[null,null,null,null],this.visibleLabel=[!0,!1,!1,!1]}ngOnInit(){this._scenarioService.getScenarioDetails.takeUntil(this.isDestroyed$).subscribe(e=>{this.scenarioDetails=e})}ngOnDestroy(){this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}clearTubes(){this.phage=[],this.isHidden={K:!1,B:!1},this.errorMessage="",this.contents=[null,null,null,null],this.visibleLabel=[!0,!1,!1,!1],this.canEditDilution=!0}clearPlate(){this.isFull=!1,this.isEmpty=!0,this.genotypes=[],this.smallPlaqueList=[],this.largePlaqueList=[],this.errorMessage="",this.lawnType=""}clearAll(){this.clearTubes(),this.clearPlate()}canDragBact(){return this.phage.length>0}getDataBact(e){return{lawnType:e,src:e,phage:this.phage}}getClassesBact(e){return{"bact-tube test-tube-outer":!0,invisible:"B"===e?this.isHidden.B:this.isHidden.K,"tube-b":"B"===e,"tube-k":"K"===e,"n-phage-1":1===this.phage.length,"n-phage-2":2===this.phage.length}}dropPhageBact(e,t){var s=e.dragData;if(0==s.hasOwnProperty("id"))this.errorMessage="Only add phage from the fridge";else if(this.phage.length>=2)this.errorMessage="Cannot have more than 2 phage in a tube";else switch(this.phage.push({id:s.id,strainNum:s.strainNum,numPhage:l.ScenarioGlobals.numPhage}),t){case"B":this.isHidden.K=!0;break;case"K":this.isHidden.B=!0}}canDragDil(e){return null!==this.contents[e]}getClassesDil(e){let t=this.contents[e];return{"dil-tube test-tube-outer":!0,"tube-b":null!==t&&"B"===t.lawnType,"tube-k":null!==t&&"K"===t.lawnType}}getClassesDilLabel(e){return{"dil-value":!0,invisible:!this.visibleLabel[e]}}canDropDil(e){return t=>{if(null===t||void 0===t)return!1;if(!1===t.hasOwnProperty("src"))return!1;let s=t.src;return 0===e&&("B"===s||"K"===s)||e>0&&s===e-1}}getDataDil(e){return null!==this.contents[e]&&(this.contents[e].src=e),this.contents[e]}dropContentsDil(e,t){let s=JSON.parse(JSON.stringify(e.dragData));if(s.hasOwnProperty("lawnType")&&s.hasOwnProperty("phage")){for(let e=0;e<s.phage.length;e++)s.phage[e].numPhage/=this.dilutionValue;this.contents[t]=s,t<3&&(this.visibleLabel[t+1]=!0),this.canEditDilution=!1}}getClassesPlate(){return{"col-12 col-md-5 rounded-circle border border-dark":!0,"bg-secondary text-light":this.isFull,"bg-light text-primary":!this.isFull&&!this.isEmpty,"text-danger":"K"===this.lawnType,"text-info":"B"===this.lawnType}}canDropPlate(){return e=>null!==e&&void 0!==e&&!(!e.hasOwnProperty("src")||"small"===e.src||"large"===e.src)}dropOnPlate(e){let t=e.dragData;if(!1===t.hasOwnProperty("lawnType"))return void(this.errorMessage="There is no bacteria in the tube for phage to grow on.");if(!1===t.hasOwnProperty("phage")||0===t.phage.length)return void(this.errorMessage="There is no phage in the tube.");this.lawnType=t.lawnType;let s=t.phage[0],i=null;2===t.phage.length&&(i=t.phage[1]),this._performCross(this.lawnType,s,i)}_performCross(e,t,s){let i={lawnType:e,phage1:t,phage2:s,specials:{},location:"lab",scenarioData:this.scenarioDetails,capacity:l.ScenarioGlobals.plateCapacity};this._experimentService.createPlate(i).takeUntil(this.isDestroyed$).subscribe(e=>{this.isFull=e.full,this.smallPlaqueList=e.smallPlaque,this.largePlaqueList=e.largePlaque,this.isEmpty=!1,this.genotypes=e.genotypes},e=>{this.errorMessage=e.error.message||e.message||"Error"})}canDragPlate(e){return"small"===e?this.smallPlaqueList.length>0:this.largePlaqueList.length>0}getPhagePlate(e){let t="small"===e?this.smallPlaqueList:this.largePlaqueList;if(0===t.length)return null;let s=t[0],i=s.i,r=JSON.parse(JSON.stringify(this.genotypes[i]));return r.src=s.pheno,r}addedToFridge(e){"small"===e.dragData.src?this.smallPlaqueList.shift():this.largePlaqueList.shift()}};u=i([n.Component({selector:"lab-room",templateUrl:"./app/scenario/location/lab-room/lab-room.template.html",styleUrls:["./app/scenario/location/lab-room/lab-room.style.css"]}),r("design:paramtypes",[c.ExperimentService,h.ScenarioService,a.SkyhookDndService])],u),t.LabRoomComponent=u},994:function(e,t,s){"use strict";var i=this&&this.__decorate||function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),o=s(979),a=s(981),l=s(126);let c=class{constructor(e,t){this._experimentService=e,this._scenarioService=t,this.chosenBact="none",this.dilutionValue=o.ScenarioGlobals.defaultPlexerDilution,this.plexerType="plexer",this.nStrains=[0,0],this.errorMessage="",this._clearData()}ngOnInit(){this.subscription=this._scenarioService.getScenarioDetails.subscribe(e=>this.scenarioDetails=e)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.expSubscription&&this.expSubscription.unsubscribe()}_clearData(){this.rows=[],this.cols=[];for(let e=0;e<8;e++)this.rows.push(null),this.cols.push(null);this.nStrains=[0,0]}reset(){this.chosenBact="none",this.dilutionValue=o.ScenarioGlobals.defaultPlexerDilution,this.plexerType="plexer",this._clearData(),this.results={},this.errorMessage=""}getTubeClasses(e){return{"btn border border-secondary":!0,chosen:this.chosenBact===e,"btn-outline-info":"B"===e&&this.chosenBact!==e,"btn-info":"B"===e&&this.chosenBact===e,"btn-outline-danger":"K"===e&&this.chosenBact!==e,"btn-danger":"K"===e&&this.chosenBact===e}}submitDisabled(){var e="none"===this.chosenBact;return 0===this.nStrains[0]||0===this.nStrains[1]||e}_cleanArrays(e){return e.filter(e=>null!==e).map(e=>({id:e.id,strainNum:e.strainNum,numPhage:e.numPhage/(1e3*this.dilutionValue)}))}_unCleanResults(e){let t={},s={},i=0,r=0;for(let e=0;e<this.cols.length;e++){null!==this.cols[e]&&(s[r]=e,r++)}for(let r in this.rows)if(null!==this.rows[r]){let n=e[i],o={};for(let e in n){o[s[e]]=n[e]}t[r]=o,i++}return t}performPlexer(){let e=this.rows,t=this._cleanArrays(e),s=this._cleanArrays(this.cols);var i={lawnType:this.chosenBact,rowPhage:t,colPhage:s,specials:{},location:this.plexerType,scenarioData:this.scenarioDetails,capacity:o.ScenarioGlobals.plexerCapacity};this.expSubscription=this._experimentService.performPlexer(i).subscribe(e=>{this.results=this._unCleanResults(e)},e=>{this.errorMessage=e.error.message||e.message||"Unknown error"})}addPhage(e,t,s){let i=e.dragData,r={id:i.id,strainNum:i.strainNum,numPhage:o.ScenarioGlobals.numPhage};"row"===t&&s<8?(this.rows[s]=r,this.nStrains[0]=this.rows.filter(function(e){return null!==e}).length):s<8&&(this.cols[s]=r,this.nStrains[1]=this.cols.filter(function(e){return null!==e}).length)}};c=i([n.Component({selector:"plexer-room",templateUrl:"./app/scenario/location/plexer-room/plexer-room.template.html",styleUrls:["./app/scenario/location/plexer-room/plexer-room.style.css"]}),r("design:paramtypes",[a.ExperimentService,l.ScenarioService])],c),t.PlexerRoomComponent=c},995:function(e,t,s){"use strict";var i=this&&this.__decorate||function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),o=s(18),a=s(10);s(68);const l=s(22),c=s(126),h=s(979);let u=class{constructor(e,t,s,i){this._router=e,this._route=t,this._authenticationService=s,this._scenarioService=i,this.errorMessage="",this.isDestroyed$=new a.Subject,this.stepSize=h.ScenarioGlobals.deletionGuessLength,this.geneAr=[];let r=Math.ceil(h.ScenarioGlobals.geneLength/this.stepSize);for(let e=0;e<r;e++)this.geneAr.push(e);this._width=(100/r).toString()}ngOnInit(){let e=this._authenticationService.getUser();e&&(this.userId=e.id),this._route.parent.params.takeUntil(this.isDestroyed$).subscribe(e=>{this.scenarioId=e.scenId}),this._scenarioService.getGuesses.takeUntil(this.isDestroyed$).subscribe(e=>{this.guesses=e,this.keys=Object.keys(e).map(e=>Number.parseInt(e)),0===this.keys.length?this.errorMessage="No phage available for modelling":this.errorMessage=""})}ngOnDestory(){this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}getBlockClass(e,t){let s=this.guesses[e][t];return{"guess-block btn p-0":!0,"btn-outline-secondary":!s,"bg-dark":s}}toggleBlock(e,t){let s=this.guesses[e][t];this.guesses[e][t]=!s}saveData(){JSON.stringify(this.guesses);this._scenarioService.saveDeletions(this.guesses,this.userId,this.scenarioId).takeUntil(this.isDestroyed$).subscribe(e=>{this.guesses=JSON.parse(e),this._scenarioService.setScenario(null,e)})}};u=i([n.Component({selector:"model-room",templateUrl:"./app/scenario/location/model-room/model-room.template.html",styleUrls:["./app/scenario/location/model-room/model-room.style.css"]}),r("design:paramtypes",[o.Router,o.ActivatedRoute,l.AuthenticationService,c.ScenarioService])],u),t.ModelRoomComponent=u},996:function(e,t,s){"use strict";var i=this&&this.__decorate||function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),o=s(18),a=s(126);let l=class{constructor(e,t,s){this._router=e,this._route=t,this._scenarioService=s}ngOnInit(){let e=this._route.parent.snapshot.paramMap.get("scenId");this.subscription=this._scenarioService.getScenario(e).subscribe(e=>{this.scenario=e},e=>this._router.navigate(["/"]))}ngOnDestory(){this.subscription.unsubscribe()}};l=i([n.Component({selector:"landing-room",templateUrl:"app/scenario/location/landing-room/landing-room.template.html"}),r("design:paramtypes",[o.Router,o.ActivatedRoute,a.ScenarioService])],l),t.LandingRoomComponent=l},997:function(e,t,s){"use strict";var i=this&&this.__decorate||function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),o=s(203);let a=class{constructor(e){this.activeModal=e,this.viewParents=!1}};i([n.Input(),r("design:type",Object)],a.prototype,"phage",void 0),a=i([n.Component({selector:"phage-dialog-content",templateUrl:"./app/scenario/fridge/phage-dialog.template.html"}),r("design:paramtypes",[o.NgbActiveModal])],a),t.PhageDialogComponent=a}});