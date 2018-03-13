import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkStubDirective, getAllRouterLinks } from '../testing';

import { AdminComponent } from './admin.component';
import { AuthenticationService } from '../authentication/authentication.service';

import { userAdmin, userInstr } from '../testing/sample-data';
import { AuthServiceStub } from '../testing/service-stubs';

describe('Admin Component', ()=>{
  let fixture: ComponentFixture<AdminComponent>;
  let authService: AuthenticationService;


  beforeEach(async()=>{
    TestBed.configureTestingModule({
      imports: [McBreadcrumbsModule.forRoot(), RouterTestingModule],
      declarations: [AdminComponent, RouterLinkStubDirective],
      providers: [
        {provide: AuthenticationService, useClass: AuthServiceStub}
      ]
    }).compileComponents();
  }) // end beforeEach async

  beforeEach(()=>{
    fixture = TestBed.createComponent(AdminComponent);
    authService = TestBed.get(AuthenticationService);
  }); // end beforeEach

  describe('Check routes', ()=>{
    let links;
    beforeEach(()=>{
      fixture.detectChanges();
      links = getAllRouterLinks(fixture.debugElement);
    }); // end beforeEach

    it('Should have courses link', ()=>{
      let linkEl = links[0];
      expect(linkEl.linkParams[0]).toMatch(/courses/);
    }); // end Should have courses link

    it('Should have students link', ()=>{
      let linkEl = links[1];
      expect(linkEl.linkParams[0]).toMatch(/students/);
    }); // end Should have students link
  }); // end Check routes

  describe('With admin', ()=>{
    it('Should have admin header', ()=>{
      fixture.detectChanges();
      let h = fixture.debugElement.query(By.css('h2'));
      let hText = h.nativeElement.innerHTML;
      expect(hText).toBe('Administrator Page');
    }); // end Should have admin header
  }); // end With admin

  describe('With instr', ()=>{
    let links;
    beforeEach(()=>{
      authService.setUser(userInstr);
      fixture.detectChanges();
      links = getAllRouterLinks(fixture.debugElement);
    }); // end beforeEach

    it('Should have instr header', ()=>{
      fixture.detectChanges();
      let h = fixture.debugElement.query(By.css('h2'));
      let hText = h.nativeElement.innerHTML;
      expect(hText).toBe('Instructor Page');
    }); // end Should have instr header
  }); // end With instr

}); // end Admin Component
