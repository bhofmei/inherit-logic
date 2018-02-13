import { RouterLinkStubDirective } from './router-stubs';
import { ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export const getAllRouterLinks = function(debugElement: DebugElement): RouterLinkStubDirective[]{
  let linkDes = debugElement
    .queryAll(By.directive(RouterLinkStubDirective));
  let links = linkDes
    .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  return links;
}
