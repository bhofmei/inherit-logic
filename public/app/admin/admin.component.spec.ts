import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement, Directive } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { RouterLinkStubDirective, getAllRouterLinks } from '../testing';

import { AdminComponent } from './admin.component';
import { AuthenticationService } from '../authentication/authentication.service';

import { AuthServiceStub } from '../testing/service-stubs';
import { userInstr, userAdmin } from '../testing/sample-data';

let fixture: ComponentFixture<AdminComponent>;
let comp: AdminComponent;
let authService: AuthenticationService;
let page: Page;

describe('Admin Component', ()=>{

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      imports: [McBreadcrumbsModule.forRoot(), RouterTestingModule],
      declarations: [AdminComponent, RouterLinkStubDirective],
      providers: [{provide: AuthenticationService, useClass: AuthServiceStub}]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test with admin', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent(false);
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should have header', ()=>{
      let headerText = page.header.innerHTML;
      expect(headerText).toBe('Administrator Page');
    }); // end Should have header

    it('Should have courses link', ()=>{
      let linkEl = page.links[0];
      expect(linkEl.linkParams[0]).toMatch(/courses/);
    }); // end Should have courses link

    it('Should have students link', ()=>{
      let linkEl = page.links[1];
      expect(linkEl.linkParams[0]).toMatch(/students/);
    }); // end Should have students link
  }); // end Test with admin

  describe('Test with instr', ()=>{
    beforeEach(fakeAsync(()=>{
      createComponent(true);
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should have header', ()=>{
      let headerText = page.header.innerHTML;
      expect(headerText).toBe('Instructor Page');
    }); // end Should have header

    it('Should have courses link', ()=>{
      let linkEl = page.links[0];
      expect(linkEl.linkParams[0]).toMatch(/courses/);
    }); // end Should have courses link

    it('Should have students link', ()=>{
      let linkEl = page.links[1];
      expect(linkEl.linkParams[0]).toMatch(/students/);
    }); // end Should have students link
  }); // end Test with instr

}); // end Admin Component

class Page {
  header: HTMLElement;
  links: any[];

  constructor(){}

  addElements(){
    if(fixture){
      this.header = fixture.debugElement.query(By.css('h2')).nativeElement;
      this.links = getAllRouterLinks(fixture.debugElement);
    }
  }
}

function createComponent(isInstr: boolean){
  fixture = TestBed.createComponent(AdminComponent);
  comp = fixture.componentInstance;
  authService = TestBed.get(AuthenticationService);
  if(isInstr){
    authService.setUser(userInstr);
  }
  page = new Page();
  fixture.detectChanges();
}
