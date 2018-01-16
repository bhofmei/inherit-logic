import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'

import { StudentService } from '../student.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { ScenarioService } from '../../../scenario/scenario.service';

import { Course } from '../../../interfaces/course.interface';
import { AdminStudent } from '../../../interfaces/student.interface';
import { Scenario } from '../../../interfaces/scenario.interface';
import { StudentPhage } from '../../../interfaces/phage.interface';
import { StudentFridge } from '../../../interfaces/fridge.interface';

import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'student-fridge',
  templateUrl: 'app/admin/student/student-fridge/student-fridge.template.html',
  //styleUrls: ['app/admin/student/student-indiv/student-indiv.style.css']
})

export class StudentFridgeComponent{

  private fridge: StudentFridge;
  private hasFridge: boolean = false;
  private isDestroyed$: Subject<boolean>;
  private paramObserver: any;

  private viewStrains: string = 'all';
  private strainList: StudentPhage[];

  private errorMessage: string = '';

  constructor(private _router: Router,
        private _route: ActivatedRoute,
               private _studentService: StudentService,
              private _authService: AuthenticationService){
    this.isDestroyed$ = new Subject<boolean>();
  }

  ngOnInit(){
    this.paramObserver = this._route.params.subscribe(params => {
            let studentId = params['studentId'];
      let scenId = params['scenId'];
      let admin = this._authService.getUser();

            this._studentService.getFridge(admin.id, studentId, scenId)
        .takeUntil(this.isDestroyed$)
              .subscribe((fridge) => {
              this.fridge = fridge;
              this.hasFridge = (fridge.strains !== undefined);
              if(this.hasFridge){
                this.fridge.strains.sort((a,b)=>{return a.strainNum - b.strainNum});
              }
              this.setPhage('all');
            },
                (error) => {
              this.errorMessage = readErrorMessage(error);
            });
        });
  }

  getButtonClass(src: string): Object{
    return {
      'btn btn-sm': true,
      'btn-primary': (src === this.viewStrains),
      'btn-outline-primary': (src !== this.viewStrains)
    }
  }

  setPhage(src: string){
    this.viewStrains = src;
    if(this.viewStrains === 'all'){
      this.strainList = this.fridge.strains;
    } else {
      this.strainList = this.fridge.strains.filter((strain)=>{
        if(strain.phageType === 'unknown'){
          return true;
        } else if(strain.phageType === 'user' && strain.submitted){
          return true;
        } else {
          return false;
        }
      });
    }
  }

  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
