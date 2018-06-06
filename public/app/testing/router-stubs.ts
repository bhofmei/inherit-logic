// From: https://angular.io/guide/testing#test-a-routeroutlet-component
 // export for convenience.
export { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

import { Component, Directive, Injectable, Input } from '@angular/core';
import { NavigationExtras, convertToParamMap, ParamMap } from '@angular/router';

@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

@Component({selector: 'router-outlet', template: ''})
export class RouterOutletStubComponent { }

@Injectable()
export class RouterStub {
  path: string;
  navigate(commands: any[], extras?: NavigationExtras) {
    this.path = commands.join('/').replace(/\/\//g, '/');
  }
}


// Only implements params and part of snapshot.params
import { BehaviorSubject ,  Observable } from 'rxjs';
//import { convertToParamMap } from '@angular/router';

@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();
  parent: ActivatedRouteStub;
  paramMap: ParamMap;
  //params = Observable.of(this.subject);

  // Test parameters
  private _testParams: {};
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
    this.paramMap = convertToParamMap(this.testParams);
  }

  // ActivatedRoute.snapshot
  get snapshot() {
    return this;
  }

  // handle parent stuff?
  set parentParams(params: {}){
    this.parent.testParams = params;
  }

}
