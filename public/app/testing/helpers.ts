import { RouterLinkStubDirective } from './router-stubs';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export const getAllRouterLinks = function(fixture: ComponentFixture<any>): RouterLinkStubDirective[]{
  let linkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkStubDirective));
  let links = linkDes
    .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  return links;
}
