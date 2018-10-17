import { NgModule, ModuleWithProviders } from '@angular/core';

import { SelectDropService, selectDropServiceFactory } from './select-drop.service';

export * from './select-drop.service';

export let providers = [{provide: SelectDropService, useFactory: selectDropServiceFactory}];

@NgModule({

})

export class SelectDropModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SelectDropModule,
      providers: providers
    }
  }
}
