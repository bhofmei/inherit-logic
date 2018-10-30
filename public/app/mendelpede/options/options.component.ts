import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';
import { MendelpedeScenarioService } from '../scenarios/scenarios.service';

import { User } from '../../interfaces/user.interface';
import { MendelpedeScenario } from '../../interfaces/mendelpede-scenarios.interface';
@Component({
  selector: 'options',
  templateUrl: './options.template.html'
})
export class OptionsComponent implements OnInit{

  user: User;

  /**
  * list of available scenarios
  */
  options: MendelpedeScenario[];
  scenarios: MendelpedeScenario[] = Array();
  quizes: MendelpedeScenario[] = Array();
  discoveries: MendelpedeScenario[] = Array();
  pathways: MendelpedeScenario[] = Array();

  s: number;
  q: number;
  d: number;
  p: number;

  errorMessage: string;
  private sSubscription: Subscription;

  constructor(
    private _authenticationService: AuthenticationService,
    private _scenarioService: MendelpedeScenarioService) {

  }

  ngOnInit() {
    this.user = this._authenticationService.getUser();
    this.sSubscription = this._scenarioService.listScenarios()
        .subscribe((options) => {
          this.s = 0;
          this.q = 0;
          this.p = 0;
          this.d = 0;
          this.options = options;
          this.options.forEach((option) => {
            if (option.scenType === 'scenario') {
              this.scenarios[this.s] = option;
              this.s++;
            } else if(option.scenType === 'quiz'){
              this.quizes[this.q] = option;
              this.q++;
            } else if(option.scenType === 'discovery'){
              this.discoveries[this.d] = option;
              this.d++;
            }else if(option.scenType === 'pathway'){
              this.pathways[this.p] = option;
              this.p++;
            }
          });
          this.scenarios = this.scenarios.sort((o1, o2) => {
            if (o1.ordOfScen < o2.ordOfScen){
              return -1;
            } else if (o1.ordOfScen > o2.ordOfScen){
              return 1;
            } else{
              return 0;
            }
          })
          this.quizes = this.quizes.sort((o1, o2) => {
            if (o1.ordOfScen < o2.ordOfScen){
              return -1;
            } else if (o1.ordOfScen > o2.ordOfScen){
              return 1;
            } else{
              return 0;
            }
          })
          this.discoveries = this.discoveries.sort((o1, o2) => {
            if (o1.ordOfScen < o2.ordOfScen){
              return -1;
            } else if (o1.ordOfScen > o2.ordOfScen){
              return 1;
            } else{
              return 0;
            }
          })
          this.pathways = this.pathways.sort((o1, o2) => {
            if (o1.ordOfScen < o2.ordOfScen){
              return -1;
            } else if (o1.ordOfScen > o2.ordOfScen){
              return 1;
            } else{
              return 0;
            }
          })
    });
  }

  /**
   * When destroying component, unsubscribe from service if necessary
   * to prevent memory leaks
   */
  ngOnDestroy(){
    if(this.sSubscription)
    this.sSubscription.unsubscribe();
  }

}
