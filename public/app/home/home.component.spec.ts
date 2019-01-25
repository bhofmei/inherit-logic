import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Directive, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { RouterLinkStubDirective } from '../testing';

import { HomeComponent } from './home.component';
import { AuthenticationService } from '../authentication/authentication.service';

import { User } from '../interfaces/user.interface';

const testAdmin: User = {
    id: 1,
    firstName: 'Admin',
    lastName: 'Last',
    email: 'admin@test.com',
    role: 2 // admin
}
const testUser: User = {
    id: 2,
    firstName: 'Student',
    lastName: 'Last',
    email: 'test@test.com',
    role: 0 // admin
}

class AuthServiceStub {
  getUser$ = Observable.of(testUser);
  getUser(): User {
    return null;
  }
}

describe('Home Component', ()=>{
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let authService: AuthenticationService;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [HomeComponent, RouterLinkStubDirective],
      providers: [{provide: AuthenticationService, useClass: AuthServiceStub}]
    }).compileComponents();
  })); // end beforeEach async

  beforeEach(()=>{
    fixture = TestBed.createComponent(HomeComponent);
    authService = TestBed.get(AuthenticationService);
  }); // end beforeEach

  it('Should have jumbotron', ()=>{
    fixture.detectChanges();
    let paragraph = fixture.debugElement.query(By.css('#jumbotron-contents')).query(By.css('p'));
    let pContent = paragraph.nativeElement.innerHTML;
    expect(pContent).toBe('Relive the logic of Crick and collegues as they discover the "words" of the genetic code.')
  }); // end Should have jumbotron

  describe('Without user', ()=>{
    let links;
    beforeEach(()=>{
      //authService.getUser = ()=>{return null};
      fixture.detectChanges();
      let linkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkStubDirective));
      links = linkDes
    .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    }); // end beforeEach

    it('Should have sign in link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/authentication/signin'});
     expect(linkEl.length).toBe(1);
    }); // end Should have sign in link

    it('Should have sign up link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/authentication/signup'});
     expect(linkEl.length).toBe(1);
    }); // end Should have sign up link

    it('Should not have sign out link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/authentication/signout'});
     expect(linkEl.length).toBe(0);
    }); // end Should not have sign out link

    it('Should not have scenarios link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/scenarios'});
     expect(linkEl.length).toBe(0);
    }); // end Should not have scenarios link

    it('Should not have admin link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/admin'});
     expect(linkEl.length).toBe(0);
    }); // end Should not have admin link
  }); // end Without user

  describe('With admin', ()=>{
    let links;
    beforeEach(()=>{
      authService.getUser = ()=>{return testAdmin};
      fixture.detectChanges();
      let linkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkStubDirective));
      links = linkDes
    .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    }); // end beforeEach

    it('Should not have sign in link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/authentication/signin'});
     expect(linkEl.length).toBe(0);
    }); // end Should have not sign in link

    it('Should have not sign up link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/authentication/signup'});
     expect(linkEl.length).toBe(0);
    }); // end Should not have sign up link

    it('Should have sign out link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/authentication/signout'});
     expect(linkEl.length).toBe(1);
    }); // end Should have sign out link

    it('Should have scenarios link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/scenarios'});
     expect(linkEl.length).toBe(1);
    }); // end Should have scenarios link

    it('Should have admin link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/admin'});
     expect(linkEl.length).toBe(1);
    }); // end Should have admin link
  }); // end With admin

  describe('With student', ()=>{
    let links;
    beforeEach(()=>{
      authService.getUser = ()=>{return testUser};
      fixture.detectChanges();
      let linkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkStubDirective));
      links = linkDes
    .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    }); // end beforeEach

    it('Should not have sign in link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/authentication/signin'});
     expect(linkEl.length).toBe(0);
    }); // end Should have not sign in link

    it('Should have not sign up link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/authentication/signup'});
     expect(linkEl.length).toBe(0);
    }); // end Should not have sign up link

    it('Should have sign out link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/authentication/signout'});
     expect(linkEl.length).toBe(1);
    }); // end Should have sign out link

    it('Should have scenarios link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/scenarios'});
     expect(linkEl.length).toBe(1);
    }); // end Should have scenarios link

    it('Should not have admin link', ()=>{
      let linkEl = links.filter((el)=>{return el.linkParams[0] === '/admin'});
     expect(linkEl.length).toBe(0);
    }); // end Should not have admin link
  }); // end With student

}); // end Home Component
