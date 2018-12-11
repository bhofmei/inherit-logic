webpackJsonp([1],{925:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),n=s(15),o=s(54),a=s(958),c=s(937),d=s(938),u=s(939),l=s(940),h=s(965),p=s(420),f=s(941),g=s(967),m=s(968),b=s(969),y=s(970);let S=class{};S=r([i.NgModule({imports:[o.SharedModule,n.RouterModule.forChild(a.StudentRoutes)],declarations:[c.StudentListComponent,d.StudentIndivComponent,u.StudentFridgeComponent,l.StudentMendelFridgeComponent,h.StudentPhageComponent,g.PhageGuessesPipe,m.PhageMutationsPipe,b.PhageDeletionsPipe,y.PedePhenotypePipe],entryComponents:[p.ConfirmDeleteDialogComponent],providers:[f.StudentResolver]})],S),t.StudentModule=S},927:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CricketGlobals={numPhage:1e6,plateCapacity:1500,plexerCapacity:200,nFridgeShelf:32,nFridgeSpots:16,defaultLabDilution:10,defaultPlexerDilution:5,geneLength:350,deletionGuessLength:10}},928:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sortStudents=function(e,t){var s=e.lastName.toLowerCase().localeCompare(t.lastName.toLowerCase());return 0===s?e.firstName.toLowerCase().localeCompare(t.firstName.toLowerCase()):s}},937:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),o=s(26),a=s(419),c=s(17),d=s(45),u=s(928);let l=class{constructor(e,t){this._studentService=e,this._authService=t,this.errorMessage="",this.isDestroyed$=new o.Subject}ngOnInit(){let e=this._authService.getUser();this._studentService.listStudents(e.id).takeUntil(this.isDestroyed$).subscribe(e=>{this.students=e.sort(u.sortStudents)},e=>{this.errorMessage=d.readErrorMessage(e)})}ngOnDestroy(){this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};l=r([n.Component({selector:"student-list",templateUrl:s(959)}),i("design:paramtypes",[a.StudentService,c.AuthenticationService])],l),t.StudentListComponent=l},938:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),o=s(15),a=s(70),c=s(26),d=s(17),u=s(419),l=s(121),h=s(65),p=s(960),f=s(420),g=s(45);let m=class{constructor(e,t,s,r,i,n,o){this._router=e,this._route=t,this._authService=s,this._studentService=r,this._scenarioService=i,this._mpedeScenarioService=n,this._modalService=o,this.roles=p.StudentRolesArray,this.scoreMap=new Map,this.mpedeScenarios=Array(),this.quizes=Array(),this.discoveries=Array(),this.pathways=Array(),this.errorMessage="",this.isDestroyed$=new c.Subject}ngOnInit(){this._admin=this._authService.getUser(),this.paramObserver=this._route.params.subscribe(e=>{let t=e.studentId;this._studentService.getStudent(this._admin.id,t).takeUntil(this.isDestroyed$).subscribe(e=>{this.student=e,this.newRole=this.student.role,this._scenarioService.listScenarios().takeUntil(this.isDestroyed$).subscribe(e=>{this.scenarios=e}),this._mpedeScenarioService.listScenarios("all").takeUntil(this.isDestroyed$).subscribe(e=>{this.mpedeOptions=e,this.mpedeOptions.forEach(e=>{"scenario"===e.scenType?this.mpedeScenarios.push(e):"quiz"===e.scenType?(this.paramObserver=this._route.params.subscribe(t=>{let s=t.studentId,r=(t.scenShortCode,this._authService.getUser());this._studentService.getMendelFridge(r.id,s,e.shortCode).takeUntil(this.isDestroyed$).subscribe(t=>{let s="Quiz not submitted yet";t.quiz&&(s=t.quiz.score.toString()),this.scoreMap[e.shortCode]=s},e=>{this.errorMessage=g.readErrorMessage(e)})}),this.quizes.push(e)):"discovery"===e.scenType?this.discoveries.push(e):"pathway"===e.scenType&&this.pathways.push(e)}),this.mpedeScenarios=this.mpedeScenarios.sort((e,t)=>e.ordOfScen<t.ordOfScen?-1:e.ordOfScen>t.ordOfScen?1:0),this.quizes=this.quizes.sort((e,t)=>e.ordOfScen<t.ordOfScen?-1:e.ordOfScen>t.ordOfScen?1:0),this.discoveries=this.discoveries.sort((e,t)=>e.ordOfScen<t.ordOfScen?-1:e.ordOfScen>t.ordOfScen?1:0),this.pathways=this.pathways.sort((e,t)=>e.ordOfScen<t.ordOfScen?-1:e.ordOfScen>t.ordOfScen?1:0)})},e=>{this.errorMessage=g.readErrorMessage(e)})})}getScenStatus(e){let t=this.student.accessGranted[e];return!0===t?"Access granted":!1===t?"Access not granted":"NA"}getQuizScore(e){return null==this.scoreMap[e]?"Quiz not submitted":this.scoreMap[e]}getStudentCourse(){let e=this.student;return e.course?"<a [routlerLink]=\"['/admin/courses/', \""+e.course.courseNum+']">s.course.courseNum</a>':"No course"}grantAccess(e){this._studentService.grantScenAccess(this._admin.id,this.student.userId,e,!0).takeUntil(this.isDestroyed$).subscribe(e=>{void 0!==e&&null!==e&&(this.student=e)},e=>{this.errorMessage=g.readErrorMessage(e)})}roleDisabled(e){return void 0!==this._admin&&(this.student.userId===this._admin.id||("admin"===e&&this._admin.role<2||"instr"===e&&this._admin.role<1))}roleButtonClass(e){return{"btn btn-sm":!0,"btn-outline-secondary":e!==this.student.role,"btn-secondary":e===this.student.role}}clickButton(e){this._studentService.setStudentRole(this._admin.id,this.student.userId,e).takeUntil(this.isDestroyed$).subscribe(e=>{this.student=e},e=>{this.errorMessage=g.readErrorMessage(e)})}deleteDisabled(){return void 0===this._admin||this.student.userId!==this._admin.id&&"admin"===this.student.role}checkDelete(){const e=this._modalService.open(f.ConfirmDeleteDialogComponent,{size:"sm"});e.componentInstance.message="Are you sure you want to delete?",e.result.then(e=>{"delete"===e&&this._callDelete()},e=>{})}_callDelete(){this._studentService.deleteStudent(this._admin.id,this.student.userId).takeUntil(this.isDestroyed$).subscribe(e=>{this._router.navigate(["/admin/students"])},e=>{this.errorMessage=g.readErrorMessage(e)})}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};m=r([n.Component({selector:"student-indiv",templateUrl:s(961)}),i("design:paramtypes",[o.Router,o.ActivatedRoute,d.AuthenticationService,u.StudentService,l.CricketService,h.MendelpedeScenarioService,a.NgbModal])],m),t.StudentIndivComponent=m},939:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),o=s(15),a=s(26),c=s(419),d=s(17),u=s(45);let l=class{constructor(e,t,s,r){this._router=e,this._route=t,this._studentService=s,this._authService=r,this.hasFridge=!1,this.viewStrains="all",this.errorMessage="",this.isDestroyed$=new a.Subject}ngOnInit(){this.paramObserver=this._route.params.subscribe(e=>{let t=e.studentId,s=e.scenId,r=this._authService.getUser();this._studentService.getFridge(r.id,t,s).takeUntil(this.isDestroyed$).subscribe(e=>{if(this.fridge=e,this.hasFridge=void 0!==e.strains,this.hasFridge){let e=JSON.parse(this.fridge.guesses);for(let t of this.fridge.strains){let s=e[t.strainNum];t.guesses=s||[]}this.fridge.strains.sort((e,t)=>e.strainNum-t.strainNum)}this.setPhage("all")},e=>{this.errorMessage=u.readErrorMessage(e)})})}getButtonClass(e){return{"btn btn-sm":!0,"btn-primary":e===this.viewStrains,"btn-outline-primary":e!==this.viewStrains}}setPhage(e){this.viewStrains=e,"all"===this.viewStrains?this.strainList=this.fridge.strains:this.strainList=this.fridge.strains.filter(e=>"unknown"===e.phageType||!("user"!==e.phageType||!e.submitted))}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};l=r([n.Component({selector:"student-fridge",templateUrl:s(962)}),i("design:paramtypes",[o.Router,o.ActivatedRoute,c.StudentService,d.AuthenticationService])],l),t.StudentFridgeComponent=l},940:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),o=s(15),a=s(26),c=s(70),d=s(420),u=s(419),l=s(17),h=s(45);let p=class{constructor(e,t,s,r,i){this._router=e,this._route=t,this._studentService=s,this._authService=r,this._modalService=i,this.hasFridge=!1,this.isQuizTaken=!1,this.errorMessage="",this.isDestroyed$=new a.Subject}getMendelpede(e){var t={},s="mpede-bodycol-"+e[2],r="mpede-eyecol-"+e[1],i="mpede-pede-"+e[0].toLowerCase()+"-seg"+e[4]+"-leg"+e[3]+"-min";return t[s]=!0,t[r]=!0,t[i]=!0,t.sizeI=!0,t}ngOnInit(){this.paramObserver=this._route.params.subscribe(e=>{this.studentId=e.studentId,this.scenId=e.scenShortCode,this.admin=this._authService.getUser(),this._studentService.getMendelFridge(this.admin.id,this.studentId,this.scenId).takeUntil(this.isDestroyed$).subscribe(e=>{this.fridge=e,this.fridge.owner=e.owner,this.fridge.quiz&&(this.isQuizTaken=!0),e.genoFacts&&(this.currGenoFacts=JSON.parse(e.genoFacts),null!==this.currGenoFacts&&(this.hasFridge=!0))},e=>{this.errorMessage=h.readErrorMessage(e)})})}checkDeleteStudentFridge(){const e=this._modalService.open(d.ConfirmDeleteDialogComponent,{size:"sm"});e.componentInstance.message="Are you sure you want to delete?",e.result.then(e=>{"delete"===e&&this.deleteStudentFridge()},e=>{})}checkDeleteQuizScore(){const e=this._modalService.open(d.ConfirmDeleteDialogComponent,{size:"sm"});e.componentInstance.message="Are you sure you want to delete?",e.result.then(e=>{"delete"===e&&this.deleteQuizScore()},e=>{})}deleteQuizScore(){this.isQuizTaken=!1,this._studentService.deleteQuizScore(this.admin.id,this.studentId,this.scenId).takeUntil(this.isDestroyed$).subscribe(e=>{})}deleteStudentFridge(){this.fridge=null,this.hasFridge=!1,this.currGenoFacts=null,this.isQuizTaken=!1,this._studentService.deleteStudentMendelFridge(this.admin.id,this.studentId,this.scenId).takeUntil(this.isDestroyed$).subscribe(e=>{this.fridge=e,this.fridge.owner=e.owner,this.fridge.quiz&&(this.isQuizTaken=!0),e.genoFacts&&(this.currGenoFacts=JSON.parse(e.genoFacts),null!==this.currGenoFacts&&(this.hasFridge=!0))},e=>{this.errorMessage=h.readErrorMessage(e)})}ngOnDestroy(){this.paramObserver.unsubscribe(),this.isDestroyed$.next(!0),this.isDestroyed$.unsubscribe()}};p=r([n.Component({selector:"student-mendel-fridge",templateUrl:s(963),styleUrls:[s(964),s(187)]}),i("design:paramtypes",[o.Router,o.ActivatedRoute,u.StudentService,l.AuthenticationService,c.NgbModal])],p),t.StudentMendelFridgeComponent=p},941:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),o=s(26),a=s(17),c=s(419);let d=class{constructor(e,t){this._studentService=e,this._authService=t}resolve(e,t){let s=this._authService.getUser();const r=e.params.studentId;return r?this._studentService.getStudent(s.id,r):new o.Observable}};d=r([n.Injectable(),i("design:paramtypes",[c.StudentService,a.AuthenticationService])],d),t.StudentResolver=d},958:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s(937),i=s(938),n=s(939),o=s(940),a=s(185),c=s(186),d=s(941);t.StudentRoutes=[{path:"",children:[{path:":studentId",resolve:{student:d.StudentResolver},data:{breadcrumbs:"{{ student.firstName }} {{ student.lastName }}"},children:[{path:"cricket/:scenId",component:n.StudentFridgeComponent,resolve:{scenario:a.ScenarioResolver},data:{breadcrumbs:"{{ scenario.label }}"}},{path:"mendelpede/:scenShortCode",component:o.StudentMendelFridgeComponent,resolve:{mendelpedeScenario:c.MendelpedeScenarioResolver},data:{breadcrumbs:"{{ mendelpedeScenario.label }}"}},{path:"",component:i.StudentIndivComponent}]},{path:"",component:r.StudentListComponent}]}]},959:function(e,t,s){e.exports=s.p+"public/app/admin/student/student-list/student-list.template.html"},960:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StudentRolesArray=[{key:"student",label:"Student",value:0},{key:"instr",label:"Instructor",value:1},{key:"admin",label:"Administrator",value:2}]},961:function(e,t,s){e.exports=s.p+"public/app/admin/student/student-indiv/student-indiv.template.html"},962:function(e,t,s){e.exports=s.p+"public/app/admin/student/student-fridge/student-fridge.template.html"},963:function(e,t,s){e.exports=s.p+"public/app/admin/student/student-mendel-fridge/student-mendel-fridge.template.html"},964:function(e,t,s){e.exports=s.p+"public/app/admin/student/student-mendel-fridge/student-mendel-fridge.style.css"},965:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1);let o=class{constructor(){}formatPhageType(){if(this.phage){this.phage.phageType;return"user"===this.phage.phageType&&this.phage.submitted?"SUBMISSION":this.phage.phageType.toUpperCase()}return""}};r([n.Input(),i("design:type",Object)],o.prototype,"phage",void 0),o=r([n.Component({selector:"student-phage",templateUrl:s(966)}),i("design:paramtypes",[])],o),t.StudentPhageComponent=o},966:function(e,t,s){e.exports=s.p+"public/app/admin/student/student-fridge/student-phage.template.html"},967:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});const i=s(1),n=s(927);let o=class{transform(e){let t=n.CricketGlobals.deletionGuessLength,s="",r=-1;for(let i in e){let n=+i;if(r<0&&e[n])r=t*n;else if(r>=0&&!1===e[n]){s+=""===s?"":", ",s+=r+" - "+t*n,r=-1}}return-1!=r&&(s+=""===s?"":", ",s+=r+" - "+n.CricketGlobals.geneLength),""===s?"None":s}};o=r([i.Pipe({name:"phageGuesses"})],o),t.PhageGuessesPipe=o},968:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});let i=class{transform(e){let t="";for(let s of e){t+=""===t?"":", ",t+=(s>0?"+1":"-1")+" at "+Math.abs(s)}return t}};i=r([s(1).Pipe({name:"phageMutations"})],i),t.PhageMutationsPipe=i},969:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});let i=class{transform(e){let t="",s=e.length%2==0?e.length:e.length-1;for(let r=0;r<s;r+=2)t+=r>1?", ":"",t+=e[r]+" - "+e[r+1];return t}};i=r([s(1).Pipe({name:"phageDeletions"})],i),t.PhageDeletionsPipe=i},970:function(e,t,s){"use strict";var r=this&&this.__decorate||function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o};Object.defineProperty(t,"__esModule",{value:!0});let i=class{transform(e){var t="Dot Color: "+e[0]+"<br>";return t+="Eye Color: "+e[1]+"<br>",t+="Segment Color: "+e[2]+"<br>",t+="Number of Legs: "+e[3]+"<br>",t+="Number of Segments: "+e[4]}};i=r([s(1).Pipe({name:"pedePhenotype"})],i),t.PedePhenotypePipe=i}});