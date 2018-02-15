import { RouterLinkStubDirective } from './router-stubs';
import { ComponentFixture, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export const getAllRouterLinks = function(debugElement: DebugElement): RouterLinkStubDirective[]{
  let linkDes = debugElement
    .queryAll(By.directive(RouterLinkStubDirective));
  let links = linkDes
    .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  return links;
}

export const recurCSSQuery = function(debugElement: DebugElement, queries: string[]): HTMLElement{
  let elSoFar = debugElement;
  for(let q of queries){
    let tmp = elSoFar.query(By.css(q));
    if(tmp){
      elSoFar = tmp;
    } else {
      return null;
    }
  } // end for q
  return elSoFar.nativeElement;
}

/**
 * Create custom DOM event the old fashioned way
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Event/initEvent
 * Although officially deprecated, some browsers (phantom) don't accept the preferred "new Event(eventName)"
 */
export function newEvent(eventName: string, bubbles = false, cancelable = false) {
  let evt = document.createEvent('CustomEvent');  // MUST be 'CustomEvent'
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}

// See https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
export const ButtonClickEvents = {
   left:  { button: 0 },
   right: { button: 2 }
};

/** Simulate element click. Defaults to mouse left-button click event. */
export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}
