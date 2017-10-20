import { Component } from '@angular/core';
import { ScenarioService } from './scenario.service';

@Component({
  selector: 'scenario',
  //template: '<router-outlet></router-outlet>',
  templateUrl: 'app/scenario/scenario.template.html',
  providers: [ScenarioService]
})

export class ScenarioComponent {
  constructor(){}

  ngOnInit(){}

  ngOnDestory(){}

}
