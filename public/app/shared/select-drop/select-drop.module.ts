import { NgModule, ModuleWithProviders } from '@angular/core';

import { SelectDropService, selectDropServiceFactory } from './select-drop.service';
import { SelectDropComponent } from './select-drop.component';

export * from './select-drop.service';
export * from './select-drop.component';

export let providers = [{provide: SelectDropService, useFactory: selectDropServiceFactory}];

@NgModule({
  declarations: [SelectDropComponent],
  exports: [SelectDropComponent]
})

export class SelectDropModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SelectDropModule,
      providers: providers
    }
  }
}
