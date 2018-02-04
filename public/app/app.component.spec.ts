import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App Component', ()=>{
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  })); // end beforeEach async

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  }); // end beforeEach

  it('should be initialized', ()=>{
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  }); // end should be initialized
}); // end App Component
