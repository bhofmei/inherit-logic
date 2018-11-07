import { User } from '../../../interfaces/user.interface';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

import { MendelpedeScenarioService } from '../mendelpede-scenarios.service';

import { MendelpedeFridge } from '../../../interfaces/mendelpede-fridge.interface';
import { MendelpedePede } from '../../../interfaces/mendelpede-pede.interface';
import { readErrorMessage } from '../../../shared/read-error';

@Component({
  selector: 'mendelpede-fridge',
  templateUrl: './mpede-fridge.template.html',
  styleUrls: ['./mpede-fridge.style.css']
})
export class MendelpedeFridgeComponent implements OnInit, OnDestroy{

  user: User;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _authenticationService: AuthenticationService,
    private _scenarioService: MendelpedeScenarioService,
    private _modalService: NgbModal) {
    this.maxShelf = 32;
    this.spots = 8;
    this.isDestroyed$ = new Subject<boolean>();
    }
  /**
   * Gets CSS classes 
   *
   * @returns {Object} classes wh
   */

  getMendelpede(phenotype: string[]): Object{
    console.log(phenotype)

    // For location
    let loc:number = this.pedeImgLocMap.get(phenotype[1].concat(phenotype[2]))
    console.log('*****************************'+loc)
    let flagLocArray: Array<boolean> = [];
    for (let i = 0; i < 100; i++){
      if (i == loc){
        flagLocArray[i] = true
      }else{
        flagLocArray[i] = false
      }
    }
    
    // For image URL
    console.log(phenotype[0].concat(phenotype[3]).concat(phenotype[4]))
    let imUrl:number = this.pedeImgUrlMap.get(phenotype[0].concat(phenotype[4]).concat(phenotype[3]))
    console.log('*****************************'+imUrl)
    let flagUrlArray: Array<boolean> = [];
    for (let i = 0; i < 105; i++){
      if (i == imUrl){
        flagUrlArray[i] = true
      }else{
        flagUrlArray[i] = false
      }
    }
    console.log(flagUrlArray[imUrl])

    return {
      'sizeI': true,
      'mpede-loc-68-128': flagLocArray[0],
      'mpede-loc-68-256': flagLocArray[1],
      'mpede-loc-68-384': flagLocArray[2],
      'mpede-loc-68-512': flagLocArray[3],
      'mpede-loc-68-640': flagLocArray[4],
      'mpede-loc-68-768': flagLocArray[5],
      'mpede-loc-68-896': flagLocArray[6],
      'mpede-loc-68-1024': flagLocArray[7],
      'mpede-loc-68-1152': flagLocArray[8],
      'mpede-loc-68-1280': flagLocArray[9],
      'mpede-loc-136-128': flagLocArray[10],
      'mpede-loc-136-256': flagLocArray[11],
      'mpede-loc-136-384': flagLocArray[12],
      'mpede-loc-136-512': flagLocArray[13],
      'mpede-loc-136-640': flagLocArray[14],
      'mpede-loc-136-768': flagLocArray[15],
      'mpede-loc-136-896': flagLocArray[16],
      'mpede-loc-136-1024': flagLocArray[17],
      'mpede-loc-136-1152': flagLocArray[18],
      'mpede-loc-136-1280': flagLocArray[19],
      'mpede-loc-204-128': flagLocArray[20],
      'mpede-loc-204-256': flagLocArray[21],
      'mpede-loc-204-384': flagLocArray[22],
      'mpede-loc-204-512': flagLocArray[23],
      'mpede-loc-204-640': flagLocArray[24],
      'mpede-loc-204-768': flagLocArray[25],
      'mpede-loc-204-896': flagLocArray[26],
      'mpede-loc-204-1024': flagLocArray[27],
      'mpede-loc-204-1152': flagLocArray[28],
      'mpede-loc-204-1280': flagLocArray[29],
      'mpede-loc-272-128': flagLocArray[30],
      'mpede-loc-272-256': flagLocArray[31],
      'mpede-loc-272-384': flagLocArray[32],
      'mpede-loc-272-512': flagLocArray[33],
      'mpede-loc-272-640': flagLocArray[34],
      'mpede-loc-272-768': flagLocArray[35],
      'mpede-loc-272-896': flagLocArray[36],
      'mpede-loc-272-1024': flagLocArray[37],
      'mpede-loc-272-1152': flagLocArray[38],
      'mpede-loc-272-1280': flagLocArray[39],
      'mpede-loc-340-128': flagLocArray[40],
      'mpede-loc-340-256': flagLocArray[41],
      'mpede-loc-340-384': flagLocArray[42],
      'mpede-loc-340-512': flagLocArray[43],
      'mpede-loc-340-640': flagLocArray[44],
      'mpede-loc-340-768': flagLocArray[45],
      'mpede-loc-340-896': flagLocArray[46],
      'mpede-loc-340-1024': flagLocArray[47],
      'mpede-loc-340-1152': flagLocArray[48],
      'mpede-loc-340-1280': flagLocArray[49],
      'mpede-loc-408-128': flagLocArray[50],
      'mpede-loc-408-256': flagLocArray[51],
      'mpede-loc-408-384': flagLocArray[52],
      'mpede-loc-408-512': flagLocArray[53],
      'mpede-loc-408-640': flagLocArray[54],
      'mpede-loc-408-768': flagLocArray[55],
      'mpede-loc-408-896': flagLocArray[56],
      'mpede-loc-408-1024': flagLocArray[57],
      'mpede-loc-408-1152': flagLocArray[58],
      'mpede-loc-408-1280': flagLocArray[59],
      'mpede-loc-476-128': flagLocArray[60],
      'mpede-loc-476-256': flagLocArray[61],
      'mpede-loc-476-384': flagLocArray[62],
      'mpede-loc-476-512': flagLocArray[63],
      'mpede-loc-476-640': flagLocArray[64],
      'mpede-loc-476-768': flagLocArray[65],
      'mpede-loc-476-896': flagLocArray[66],
      'mpede-loc-476-1024': flagLocArray[67],
      'mpede-loc-476-1152': flagLocArray[68],
      'mpede-loc-476-1280': flagLocArray[69],
      'mpede-loc-544-128': flagLocArray[70],
      'mpede-loc-544-256': flagLocArray[71],
      'mpede-loc-544-384': flagLocArray[72],
      'mpede-loc-544-512': flagLocArray[73],
      'mpede-loc-544-640': flagLocArray[74],
      'mpede-loc-544-768': flagLocArray[75],
      'mpede-loc-544-896': flagLocArray[76],
      'mpede-loc-544-1024': flagLocArray[77],
      'mpede-loc-544-1152': flagLocArray[78],
      'mpede-loc-544-1280': flagLocArray[79],
      'mpede-loc-612-128': flagLocArray[80],
      'mpede-loc-612-256': flagLocArray[81],
      'mpede-loc-612-384': flagLocArray[82],
      'mpede-loc-612-512': flagLocArray[83],
      'mpede-loc-612-640': flagLocArray[84],
      'mpede-loc-612-768': flagLocArray[85],
      'mpede-loc-612-896': flagLocArray[86],
      'mpede-loc-612-1024': flagLocArray[87],
      'mpede-loc-612-1152': flagLocArray[88],
      'mpede-loc-612-1280': flagLocArray[89],
      'mpede-loc-680-128': flagLocArray[90],
      'mpede-loc-680-256': flagLocArray[91],
      'mpede-loc-680-384': flagLocArray[92],
      'mpede-loc-680-512': flagLocArray[93],
      'mpede-loc-680-640': flagLocArray[94],
      'mpede-loc-680-768': flagLocArray[95],
      'mpede-loc-680-896': flagLocArray[96],
      'mpede-loc-680-1024': flagLocArray[97],
      'mpede-loc-680-1152': flagLocArray[98],
      'mpede-loc-680-1280': flagLocArray[99],
      // URL
      'mpede-pede-black-seg1-leg0-min': flagUrlArray[0],
      'mpede-pede-black-seg1-leg1-min': flagUrlArray[1],
      'mpede-pede-black-seg1-leg2-min': flagUrlArray[2],
      'mpede-pede-black-seg2-leg0-min': flagUrlArray[3],
      'mpede-pede-black-seg2-leg1-min': flagUrlArray[4],
      'mpede-pede-black-seg2-leg2-min': flagUrlArray[5],
      'mpede-pede-black-seg3-leg0-min': flagUrlArray[6],
      'mpede-pede-black-seg3-leg1-min': flagUrlArray[7],
      'mpede-pede-black-seg3-leg2-min': flagUrlArray[8],
      'mpede-pede-black-seg4-leg0-min': flagUrlArray[9],
      'mpede-pede-black-seg4-leg1-min': flagUrlArray[10],
      'mpede-pede-black-seg4-leg2-min': flagUrlArray[11],
      'mpede-pede-black-seg5-leg0-min': flagUrlArray[12],
      'mpede-pede-black-seg5-leg1-min': flagUrlArray[13],
      'mpede-pede-black-seg5-leg2-min': flagUrlArray[14],
      'mpede-pede-blue-seg1-leg0-min': flagUrlArray[15],
      'mpede-pede-blue-seg1-leg1-min': flagUrlArray[16],
      'mpede-pede-blue-seg1-leg2-min': flagUrlArray[17],
      'mpede-pede-blue-seg2-leg0-min': flagUrlArray[18],
      'mpede-pede-blue-seg2-leg1-min': flagUrlArray[19],
      'mpede-pede-blue-seg2-leg2-min': flagUrlArray[20],
      'mpede-pede-blue-seg3-leg0-min': flagUrlArray[21],
      'mpede-pede-blue-seg3-leg1-min': flagUrlArray[22],
      'mpede-pede-blue-seg3-leg2-min': flagUrlArray[23],
      'mpede-pede-blue-seg4-leg0-min': flagUrlArray[24],
      'mpede-pede-blue-seg4-leg1-min': flagUrlArray[25],
      'mpede-pede-blue-seg4-leg2-min': flagUrlArray[26],
      'mpede-pede-blue-seg5-leg0-min': flagUrlArray[27],
      'mpede-pede-blue-seg5-leg1-min': flagUrlArray[28],
      'mpede-pede-blue-seg5-leg2-min': flagUrlArray[29],
      'mpede-pede-gray-seg1-leg0-min': flagUrlArray[30],
      'mpede-pede-gray-seg1-leg1-min': flagUrlArray[31],
      'mpede-pede-gray-seg1-leg2-min': flagUrlArray[32],
      'mpede-pede-gray-seg2-leg0-min': flagUrlArray[33],
      'mpede-pede-gray-seg2-leg1-min': flagUrlArray[34],
      'mpede-pede-gray-seg2-leg2-min': flagUrlArray[35],
      'mpede-pede-gray-seg3-leg0-min': flagUrlArray[36],
      'mpede-pede-gray-seg3-leg1-min': flagUrlArray[37],
      'mpede-pede-gray-seg3-leg2-min': flagUrlArray[38],
      'mpede-pede-gray-seg4-leg0-min': flagUrlArray[39],
      'mpede-pede-gray-seg4-leg1-min': flagUrlArray[40],
      'mpede-pede-gray-seg4-leg2-min': flagUrlArray[41],
      'mpede-pede-gray-seg5-leg0-min': flagUrlArray[42],
      'mpede-pede-gray-seg5-leg1-min': flagUrlArray[43],
      'mpede-pede-gray-seg5-leg2-min': flagUrlArray[44],
      'mpede-pede-green-seg1-leg0-min': flagUrlArray[45],
      'mpede-pede-green-seg1-leg1-min': flagUrlArray[46],
      'mpede-pede-green-seg1-leg2-min': flagUrlArray[47],
      'mpede-pede-green-seg2-leg0-min': flagUrlArray[48],
      'mpede-pede-green-seg2-leg1-min': flagUrlArray[49],
      'mpede-pede-green-seg2-leg2-min': flagUrlArray[50],
      'mpede-pede-green-seg3-leg0-min': flagUrlArray[51],
      'mpede-pede-green-seg3-leg1-min': flagUrlArray[52],
      'mpede-pede-green-seg3-leg2-min': flagUrlArray[53],
      'mpede-pede-green-seg4-leg0-min': flagUrlArray[54],
      'mpede-pede-green-seg4-leg1-min': flagUrlArray[55],
      'mpede-pede-green-seg4-leg2-min': flagUrlArray[56],
      'mpede-pede-green-seg5-leg0-min': flagUrlArray[57],
      'mpede-pede-green-seg5-leg1-min': flagUrlArray[58],
      'mpede-pede-green-seg5-leg2-min': flagUrlArray[59],
      'mpede-pede-pink-seg1-leg0-min': flagUrlArray[60],
      'mpede-pede-pink-seg1-leg1-min': flagUrlArray[61],
      'mpede-pede-pink-seg1-leg2-min': flagUrlArray[62],
      'mpede-pede-pink-seg2-leg0-min': flagUrlArray[63],
      'mpede-pede-pink-seg2-leg1-min': flagUrlArray[64],
      'mpede-pede-pink-seg2-leg2-min': flagUrlArray[65],
      'mpede-pede-pink-seg3-leg0-min': flagUrlArray[66],
      'mpede-pede-pink-seg3-leg1-min': flagUrlArray[67],
      'mpede-pede-pink-seg3-leg2-min': flagUrlArray[68],
      'mpede-pede-pink-seg4-leg0-min': flagUrlArray[69],
      'mpede-pede-pink-seg4-leg1-min': flagUrlArray[70],
      'mpede-pede-pink-seg4-leg2-min': flagUrlArray[71],
      'mpede-pede-pink-seg5-leg0-min': flagUrlArray[72],
      'mpede-pede-pink-seg5-leg1-min': flagUrlArray[73],
      'mpede-pede-pink-seg5-leg2-min': flagUrlArray[74],
      'mpede-pede-white-seg1-leg0-min': flagUrlArray[75],
      'mpede-pede-white-seg1-leg1-min': flagUrlArray[76],
      'mpede-pede-white-seg1-leg2-min': flagUrlArray[77],
      'mpede-pede-white-seg2-leg0-min': flagUrlArray[78],
      'mpede-pede-white-seg2-leg1-min': flagUrlArray[79],
      'mpede-pede-white-seg2-leg2-min': flagUrlArray[80],
      'mpede-pede-white-seg3-leg0-min': flagUrlArray[81],
      'mpede-pede-white-seg3-leg1-min': flagUrlArray[82],
      'mpede-pede-white-seg3-leg2-min': flagUrlArray[83],
      'mpede-pede-white-seg4-leg0-min': flagUrlArray[84],
      'mpede-pede-white-seg4-leg1-min': flagUrlArray[85],
      'mpede-pede-white-seg4-leg2-min': flagUrlArray[86],
      'mpede-pede-white-seg5-leg0-min': flagUrlArray[87],
      'mpede-pede-white-seg5-leg1-min': flagUrlArray[88],
      'mpede-pede-white-seg5-leg2-min': flagUrlArray[89],
      'mpede-pede-yellow-seg1-leg0-min': flagUrlArray[90],
      'mpede-pede-yellow-seg1-leg1-min': flagUrlArray[91],
      'mpede-pede-yellow-seg1-leg2-min': flagUrlArray[92],
      'mpede-pede-yellow-seg2-leg0-min': flagUrlArray[93],
      'mpede-pede-yellow-seg2-leg1-min': flagUrlArray[94],
      'mpede-pede-yellow-seg2-leg2-min': flagUrlArray[95],
      'mpede-pede-yellow-seg3-leg0-min': flagUrlArray[96],
      'mpede-pede-yellow-seg3-leg1-min': flagUrlArray[97],
      'mpede-pede-yellow-seg3-leg2-min': flagUrlArray[98],
      'mpede-pede-yellow-seg4-leg0-min': flagUrlArray[99],
      'mpede-pede-yellow-seg4-leg1-min': flagUrlArray[100],
      'mpede-pede-yellow-seg4-leg2-min': flagUrlArray[101],
      'mpede-pede-yellow-seg5-leg0-min': flagUrlArray[102],
      'mpede-pede-yellow-seg5-leg1-min': flagUrlArray[103],
      'mpede-pede-yellow-seg5-leg2-min': flagUrlArray[104]
    }
  }
  getMendelpedetopleft(phenotype: string[]): Object{
    return {
      'mpede-basic-top-left': true,
    }
  }
  getMendelpedebottomleft(): Object{
    return {
      'mpede-basic-bottom-left': true,
    }
  }

  /**
   * The fridge object
   */
  fridge: MendelpedeFridge;

   /**
   * list of strains in the fridge, including empty ones
   */
  pedeList: MendelpedePede[];

  /**
   * currently pedes strains based on shelf number
   */
  currPedes: MendelpedePede[][];

  /**
   * currently visible pedes based on shelf number 1D
   */
  currPedes_1d: MendelpedePede[];

  /**
   * maximum number of shelves in fridge
   */
  maxShelf: number;
  /**
   * number of slots per shelf
   */
  spots: number;

  /**
   * current shelf
   */
  shelf: number = 0;
  
  /**
   * potential backend error message
   */
  errorMessage: string = '';
  /**
   * State to monitior if component active to make unsubscribing to
   * multiple streams easier
   */
  private isDestroyed$: Subject<boolean>;
  /**
   * Observes the scenCode of the URL
   */
  private paramObserver: any;

  private nextSpot: number;
  // The 105 combinations of dotcolor, numsegments and num legs
  pedeImgUrlMap: Map<string, number> = new Map([['Black10', 0],
  ['Black11', 1],
  ['Black12', 2],
  ['Black20', 3],
  ['Black21', 4],
  ['Black22', 5],
  ['Black30', 6],
  ['Black31', 7],
  ['Black32', 8],
  ['Black40', 9],
  ['Black41', 10],
  ['Black42', 11],
  ['Black50', 12],
  ['Black51', 13],
  ['Black52', 14],
  ['Blue10', 15],
  ['Blue11', 16],
  ['Blue12', 17],
  ['Blue20', 18],
  ['Blue21', 19],
  ['Blue22', 20],
  ['Blue30', 21],
  ['Blue31', 22],
  ['Blue32', 23],
  ['Blue40', 24],
  ['Blue41', 25],
  ['Blue42', 26],
  ['Blue50', 27],
  ['Blue51', 28],
  ['Blue52', 29],
  ['Gray10', 30],
  ['Gray11', 31],
  ['Gray12', 32],
  ['Gray20', 33],
  ['Gray21', 34],
  ['Gray22', 35],
  ['Gray30', 36],
  ['Gray31', 37],
  ['Gray32', 38],
  ['Gray40', 39],
  ['Gray41', 40],
  ['Gray42', 41],
  ['Gray50', 42],
  ['Gray51', 43],
  ['Gray52', 44],
  ['Green10', 45],
  ['Green11', 46],
  ['Green12', 47],
  ['Green20', 48],
  ['Green21', 49],
  ['Green22', 50],
  ['Green30', 51],
  ['Green31', 52],
  ['Green32', 53],
  ['Green40', 54],
  ['Green41', 55],
  ['Green42', 56],
  ['Green50', 57],
  ['Green51', 58],
  ['Green52', 59],
  ['Pink10', 60],
  ['Pink11', 61],
  ['Pink12', 62],
  ['Pink20', 63],
  ['Pink21', 64],
  ['Pink22', 65],
  ['Pink30', 66],
  ['Pink31', 67],
  ['Pink32', 68],
  ['Pink40', 69],
  ['Pink41', 70],
  ['Pink42', 71],
  ['Pink50', 72],
  ['Pink51', 73],
  ['Pink52', 74],
  ['White10', 75],
  ['White11', 76],
  ['White12', 77],
  ['White20', 78],
  ['White21', 79],
  ['White22', 80],
  ['White30', 81],
  ['White31', 82],
  ['White32', 83],
  ['White40', 84],
  ['White41', 85],
  ['White42', 86],
  ['White50', 87],
  ['White51', 88],
  ['White52', 89],
  ['Yellow10', 90],
  ['Yellow11', 91],
  ['Yellow12', 92],
  ['Yellow20', 93],
  ['Yellow21', 94],
  ['Yellow22', 95],
  ['Yellow30', 96],
  ['Yellow31', 97],
  ['Yellow32', 98],
  ['Yellow40', 99],
  ['Yellow41', 100],
  ['Yellow42', 101],
  ['Yellow50', 102],
  ['Yellow51', 103],
  ['Yellow52', 104]])
  // The one hundred combination of eye color vs body color
  pedeImgLocMap: Map<string, number> = new Map([['RedRed', 0],
  ['OrangeRed', 1],
  ['BeigeRed', 2],
  ['PurpleRed', 3],
  ['SkyBlueRed', 4],
  ['CyanRed', 5],
  ['TealRed', 6],
  ['LightGreenRed', 7],
  ['NavyRed', 8],
  ['LightGrayRed', 9],
  ['RedOrange', 10],
  ['OrangeOrange', 11],
  ['BeigeOrange', 12],
  ['PurpleOrange', 13],
  ['SkyBlueOrange', 14],
  ['CyanOrange', 15],
  ['TealOrange', 16],
  ['LightGreenOrange', 17],
  ['NavyOrange', 18],
  ['LightGrayOrange', 19],
  ['RedBeige', 20],
  ['OrangeBeige', 21],
  ['BeigeBeige', 22],
  ['PurpleBeige', 23],
  ['SkyBlueBeige', 24],
  ['CyanBeige', 25],
  ['TealBeige', 26],
  ['LightGreenBeige', 27],
  ['NavyBeige', 28],
  ['LightGrayBeige', 29],
  ['RedPurple', 30],
  ['OrangePurple', 31],
  ['BeigePurple', 32],
  ['PurplePurple', 33],
  ['SkyBluePurple', 34],
  ['CyanPurple', 35],
  ['TealPurple', 36],
  ['LightGreenPurple', 37],
  ['NavyPurple', 38],
  ['LightGrayPurple', 39],
  ['RedSkyBlue', 40],
  ['OrangeSkyBlue', 41],
  ['BeigeSkyBlue', 42],
  ['PurpleSkyBlue', 43],
  ['SkyBlueSkyBlue', 44],
  ['CyanSkyBlue', 45],
  ['TealSkyBlue', 46],
  ['LightGreenSkyBlue', 47],
  ['NavySkyBlue', 48],
  ['LightGraySkyBlue', 49],
  ['RedCyan', 50],
  ['OrangeCyan', 51],
  ['BeigeCyan', 52],
  ['PurpleCyan', 53],
  ['SkyBlueCyan', 54],
  ['CyanCyan', 55],
  ['TealCyan', 56],
  ['LightGreenCyan', 57],
  ['NavyCyan', 58],
  ['LightGrayCyan', 59],
  ['RedTeal', 60],
  ['OrangeTeal', 61],
  ['BeigeTeal', 62],
  ['PurpleTeal', 63],
  ['SkyBlueTeal', 64],
  ['CyanTeal', 65],
  ['TealTeal', 66],
  ['LightGreenTeal', 67],
  ['NavyTeal', 68],
  ['LightGrayTeal', 69],
  ['RedLightGreen', 70],
  ['OrangeLightGreen', 71],
  ['BeigeLightGreen', 72],
  ['PurpleLightGreen', 73],
  ['SkyBlueLightGreen', 74],
  ['CyanLightGreen', 75],
  ['TealLightGreen', 76],
  ['LightGreenLightGreen', 77],
  ['NavyLightGreen', 78],
  ['LightGrayLightGreen', 79],
  ['RedNavy', 80],
  ['OrangeNavy', 81],
  ['BeigeNavy', 82],
  ['PurpleNavy', 83],
  ['SkyBlueNavy', 84],
  ['CyanNavy', 85],
  ['TealNavy', 86],
  ['LightGreenNavy', 87],
  ['NavyNavy', 88],
  ['LightGrayNavy', 89],
  ['RedLightGray', 90],
  ['OrangeLightGray', 91],
  ['BeigeLightGray', 92],
  ['PurpleLightGray', 93],
  ['SkyBlueLightGray', 94],
  ['CyanLightGray', 95],
  ['TealLightGray', 96],
  ['LightGreenLightGray', 97],
  ['NavyLightGray', 98],
  ['LightGrayLightGray', 99]]);
   /**
   * Initailize the fridge when creating component
   * 1. Get logged in user and current scenario
   * 2. Fetch the corresponding fridge
   * 3a. If the fridge doesn't exist yet, create a new one
   * 3b. If the fridge does exist, initialize it
   */
  ngOnInit(){
    console.log('ng init......');
    this.user = this._authenticationService.getUser();

    let userId = this.user.id;
    this.paramObserver = this._route.params.subscribe((params) => {
      let scenShortCode = params['scenShortCode'];
      this._scenarioService.getMendelFridge(userId, scenShortCode)
        .takeUntil(this.isDestroyed$)
        .subscribe(
          (fridge) => {this._initFridge(fridge);},
          (err) => {
            if(err.status === 307){
            console.log('creating a new fridge');
            this._createMendelFridge(userId, scenShortCode);
          } else {
            console.log('error message'+ err);
            this.errorMessage = readErrorMessage(err);
          } }
        );
    });
  }

  /**
   * Creates a new fridge because this user doesn't have one for this scenario
   *
   * On success, inializes fridge
   *
   * @param {number} userId - logged in user's id
   * @param {string} scenId - current scenario id
   */
  _createMendelFridge(userId: number, scenShortCode: string){
    this._scenarioService.createMendelFridge(userId, scenShortCode)
    .takeUntil(this.isDestroyed$)
      .subscribe((fridge)=>{
        console.log('we got the new fridge: ');
        console.log(fridge);
      this._initFridge(fridge);
    }, (err)=>{
      this.errorMessage = readErrorMessage(err);
    });
  }

  /**
   * Sets pedes for visible shelf
   */
  _currPedes(){
    let start = this.shelf*this.spots;
    let end = start+this.spots;
    this.currPedes_1d = this.pedeList.slice(start,end);
    var ind: number = 0;
    
    this.currPedes = [];
    for (var j = 0; j < (this.spots/2) ; j++){
      this.currPedes[j] = [];
      for (var k = 0; k < 2; k++){
        this.currPedes[j][k] = this.currPedes_1d[ind];
        ind++;
      }
    }
    
  }

  /**
   * Intializes the fridge and component variables related to which strains are
   * visible based on the current shelf
   *
   * @param {Fridge} newFridge - fridge object to be initalized
   */
  _initFridge(newFridge: MendelpedeFridge){
    this.fridge = newFridge;
    this.pedeList = this._fillPedes(newFridge.pedes);
    this._currPedes();
    this._scenarioService.setScenario(newFridge.genoFacts);
  }

  /**
   * Fills in the empty slots with "empty" phage objects
   *
   * @param {FridgePhage[]} fridgeStrains - array of strains actually in the fridge
   *
   * @returns {FridgePhage[]} array of all slots in fridge, including empty
   */
  _fillPedes(fridgePedes: MendelpedePede[]): MendelpedePede[]{
    var out: MendelpedePede[] = [];
    for(let i = 0; i < this.maxShelf*this.spots; i++){
      out.push({bugId: i, genotype: null, phenotype: null, userId: null, isFemale: null});
    }
    this.nextSpot = fridgePedes[0].bugId + 1;
    // add original pedes
    for(let i=0; i < fridgePedes.length; i++){
      let n = fridgePedes[i].bugId;
      out[n] = fridgePedes[i];
      this.nextSpot = (n === this.nextSpot ? n+1 : this.nextSpot);
    }
    return out;
  } 

  /**
   * Increase or decrease visible shelf then update the visible strains
   *
   * Called by `(click)` of prev/next buttons
   *
   * @param {number} inc - amount to change shelf by
   */
  changeShelf(inc: number){
    this.errorMessage = '';
    if(this.shelf <= this.maxShelf-1 && inc === 1){
      this.shelf++;
      this._currPedes();
    } else if(this.shelf > 0 && inc === -1){
      this.shelf--;
      this._currPedes();
    }
  }

  /**
   * Set visible shelf to a specific number;
   * used to jump to the beginning and end
   *
   * Called by (click) of first/last buttons
   *
   * @param {number} nShelf - shelf to go to
   */
  setShelf(nShelf: number){
    this.shelf = nShelf;
    this._currPedes();
  }
 /**
   * When destroying the component, unsubscribe from services
   * to prevent memory leak
   */
  ngOnDestroy(){
    this.paramObserver.unsubscribe();
    this.isDestroyed$.next(true);
    this.isDestroyed$.unsubscribe();
  }

}
