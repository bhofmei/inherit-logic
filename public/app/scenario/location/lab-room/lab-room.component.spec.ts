import { fakeAsync, tick, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Directive, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs';
import { Router, RouterStub, ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective, getAllRouterLinks, recurCSSQuery, click, addMatchers } from '../../../testing';
import * as _ from 'lodash';

import { SharedModule } from '../../../shared/shared.module';
import { LabRoomComponent } from './lab-room.component';
import { ExperimentService } from '../experiment.service';
import { ScenarioService } from '../../../scenario/scenario.service';

import { ExperimentPhage, GenotypePhage, FridgePhage, Phage, PlateInput, PlateResults } from '../../../interfaces';
import { listOfPhage } from '../../../testing/sample-data';
import { ScenarioServiceStub, ExperimentServiceStub } from '../../../testing/service-stubs';

class LabRoomTestComponent extends LabRoomComponent {
  // so we have access to internal properties
}

// Testing variables
let fixture: ComponentFixture<LabRoomTestComponent>;
let comp: LabRoomTestComponent;
let page: Page;


describe('Lab Room Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [LabRoomTestComponent],
      providers: [
        { provide: ScenarioService, useClass: ScenarioServiceStub },
        { provide: ExperimentService, useClass: ExperimentServiceStub }
      ]
    }).compileComponents();
  })); // end beforeEach async

  describe('Test initial page (no previous interaction)', () => {
    beforeEach(fakeAsync(() => {
      createComponent();
      tick();
      page.addElements();
    })); // end beforeEach fakeAsync

    it('Should have both bacteria tubes visible', () => {
      expect(page.tubeB.nativeElement.className).not.toContain('invisible');
      expect(page.tubeK.nativeElement.className).not.toContain('invisible');
    }); // end Should have both bacteria tubes visible

    it('Should have dilution tubes with 1 visible label', () => {
      var label1 = page.dilutionLabels[0];
      expect(label1.nativeElement.className).not.toContain('invisible');
      var label2 = page.dilutionLabels[1];
      expect(label2.nativeElement.className).toContain('invisible');
    }); // end Should have dilution tubes with 1 visible label

    it('Should have empty plate', () => {
      let plateContents = page.labPlate.children;
      expect(plateContents.length).toBe(0);
    }); // end Should have empty plate

    it('Should not be able to drag bacteria tube', () => {
      var canDrag = comp.canDragBact();
      expect(canDrag).toBeFalsy();
    }); // end Should not be able to drag bacteria tube
  }); // end Test initial page (no previous interaction)

  describe('Test add to bacteria tube', () => {
    let dropPhage: FridgePhage = listOfPhage[0];
    beforeEach(fakeAsync(() => {
      createComponent();
      comp.dropPhageBact({ dragData: dropPhage }, 'B');
      tick();
      fixture.detectChanges();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync
    describe('Test add 1 phage', () => {

      it('Should have tube B visible only', () => {
        expect(page.tubeB.nativeElement.className).not.toContain('invisible');
        expect(page.tubeK.nativeElement.className).toContain('invisible');
      }); // end Should have tube B visible only

      it('Should have label visible on tube B', () => {
        var tubeLabel = fixture.debugElement.query(By.css('.phage-label-1')).nativeElement.innerHTML;
        expect(tubeLabel).toTemplateMatch('1');
      }); // end

      it('Should be able to drag bacteria tube', () => {
        var canDrag = comp.canDragBact();
        expect(canDrag).toBeTruthy();
      }); // end Should be able to drag bacteria tube

      it('Should be able to get data dragged from bacteria tube', () => {
        var dragData = comp.getDataBact('B');
        var expected = {
          lawnType: 'B',
          src: 'B',
          phage: [{ id: dropPhage.id, strainNum: dropPhage.strainNum, numPhage: 1000000 }]
        };
        expect(dragData).toEqual(expected);
      }); // end Should be able to get data dragged from bacteria tube

      it('Should not be able to add non-fridge phage', fakeAsync(() => {
        var platePhage: GenotypePhage = {
          shifts: [84, -234],
          deletion: [],
          parents: [{ id: 'a1', strainNum: 2 }],
          src: 'small'
        };
        comp.dropPhageBact({ dragData: platePhage }, 'B');
        tick();
        fixture.detectChanges();
        page.addElements();
        expect(page.errorMessage.innerHTML).toTemplateMatch('Only add phage from the fridge');
      })); // end Should not be able to add non-fridge phage
    }); // end Test add 1 phage

    describe('Test add 2 phage', () => {
      var dropPhage2: FridgePhage = listOfPhage[1];
      beforeEach(fakeAsync(() => {
        comp.dropPhageBact({ dragData: dropPhage2 }, 'B');
        tick();
        fixture.detectChanges();
        page.addElements();
      })); // end beforeEach fakeAsync

      it('Should have 2 labels visible on tube B', () => {
        var tubeLabel1 = fixture.debugElement.query(By.css('.phage-label-1')).nativeElement.innerHTML;
        expect(tubeLabel1).toTemplateMatch('1');
        var tubeLabel2 = fixture.debugElement.query(By.css('.phage-label-2')).nativeElement.innerHTML;
        expect(tubeLabel2).toTemplateMatch('2');
      }); // end Should have 2 labels visible on tube B

      it('Should be able to get data dragged from bacteria tube', () => {
        var dragData = comp.getDataBact('B');
        var expected = {
          lawnType: 'B',
          src: 'B',
          phage: [{ id: dropPhage.id, strainNum: dropPhage.strainNum, numPhage: 1000000 },
          { id: dropPhage2.id, strainNum: dropPhage2.strainNum, numPhage: 1000000 }]
        };
        expect(dragData).toEqual(expected);
      }); // end Should be able to get data dragged from bacteria tube

      it('Should not be able to add another phage', fakeAsync(() => {
        var dropPhage3: FridgePhage = listOfPhage[2];
        comp.dropPhageBact({ dragData: dropPhage3 }, 'B');
        tick();
        fixture.detectChanges();
        page.addElements();
        expect(page.errorMessage.innerHTML).toTemplateMatch('Cannot have more than 2 phage in a tube');
      })); // end Should not be able to add another phage
    }); // end Test add 2 phage
  }); // end Test add to bacteria tube

  describe('Test add to dilution tubes', () => {
    var phage1 = listOfPhage[2], phage2 = listOfPhage[3];
    var beginBactTube = {
      lawnType: 'K',
      src: 'K',
      phage: [{ id: phage1.id, strainNum: phage1.strainNum, numPhage: 1000000 },
      { id: phage2.id, strainNum: phage2.strainNum, numPhage: 1000000 }]
    };

    beforeEach(fakeAsync(() => {
      createComponent();
      comp.dropContentsDil({ dragData: beginBactTube }, 0);
      tick();
      fixture.detectChanges();
      page.addElements();
      addMatchers();
    })); // end beforeEach fakeAsync

    it('Should have K bacteria in dilution tube 1', () => {
      var dil1Classes = page.dilutionTubes[0].nativeElement.className;
      expect(dil1Classes).toContain('tube-k');
    }); // end Should have K bacteria in dilution tube 1

    it('Should have 2 dilution tube labels visible', () => {
      var label1 = page.dilutionLabels[0];
      expect(label1.nativeElement.className).not.toContain('invisible');
      var label2 = page.dilutionLabels[1];
      expect(label2.nativeElement.className).not.toContain('invisible');
      var label3 = page.dilutionLabels[2];
      expect(label3.nativeElement.className).toContain('invisible');
    }); // end Should have 2 dilution tube labels visible

    it('Should be able to drop tube 1 on tube 2', () => {
      let funcCanDrop = comp.canDropDil(1);
      let canDrop1 = funcCanDrop({ src: 0 });
      expect(canDrop1).toBeTruthy();
    }); // end Should be able to drop tube 1 on tube 2

    it('Should not be able to drop tube 1 on tube 3', () => {
      let funcCanDrop = comp.canDropDil(2);
      expect(funcCanDrop({ src: 0 })).toBeFalsy();
    }); // end Should not be able to drop tube 1 on tube 3

    it('Should be able to get drag data from tube 1', () => {
      var expected = {
        lawnType: 'K',
        src: 0,
        phage: [{ id: phage1.id, strainNum: phage1.strainNum, numPhage: 100000 },
        { id: phage2.id, strainNum: phage2.strainNum, numPhage: 100000 }]
      };
      var dragData = comp.getDataDil(0);
      expect(dragData).toEqual(expected);
    }); // end Should be able to get drag data from tube 1

    describe('Test add to dilution tube 2', () => {
      var tube1Contents = {
        lawnType: 'K',
        src: 0,
        phage: [{ id: phage1.id, strainNum: phage1.strainNum, numPhage: 100000 },
        { id: phage2.id, strainNum: phage2.strainNum, numPhage: 100000 }]
      };
      beforeEach(fakeAsync(() => {
        comp.dropContentsDil({ dragData: tube1Contents }, 1);
        tick();
        fixture.detectChanges();
        page.addElements();
      })); // end beforeEach fakeAsync

      it('Should have K bacteria in dilution tube 2', () => {
        var dil1Classes = page.dilutionTubes[1].nativeElement.className;
        expect(dil1Classes).toContain('tube-k');
      }); // end Should have K bacteria in dilution tube 1

      it('Should have 3 dilution tube labels visible', () => {
        var label1 = page.dilutionLabels[0];
        expect(label1.nativeElement.className).not.toContain('invisible');
        var label2 = page.dilutionLabels[1];
        expect(label2.nativeElement.className).not.toContain('invisible');
        var label3 = page.dilutionLabels[2];
        expect(label3.nativeElement.className).not.toContain('invisible');
        var label4 = page.dilutionLabels[3];
        expect(label4.nativeElement.className).toContain('invisible');
      }); // end Should have 3 dilution tube labels visible

      it('Should be able to drop tube 2 on tube 3', () => {
        let funcCanDrop = comp.canDropDil(2);
        let canDrop1 = funcCanDrop({ src: 1 });
        expect(canDrop1).toBeTruthy();
      }); // end Should be able to drop tube 2 on tube 3

      it('Should be able to get drag data from tube 2', () => {
        var expected = {
          lawnType: 'K',
          src: 1,
          phage: [{ id: phage1.id, strainNum: phage1.strainNum, numPhage: 10000 },
          { id: phage2.id, strainNum: phage2.strainNum, numPhage: 10000 }]
        };
        var dragData = comp.getDataDil(1);
        expect(dragData).toEqual(expected);
      }); // end Should be able to get drag data from tube 2

      describe('Test add to dilution tube 3', () => {
        var tube2Contents = {
          lawnType: 'K',
          src: 1,
          phage: [{ id: phage1.id, strainNum: phage1.strainNum, numPhage: 10000 },
          { id: phage2.id, strainNum: phage2.strainNum, numPhage: 10000 }]
        };
        beforeEach(fakeAsync(() => {
          comp.dropContentsDil({ dragData: tube1Contents }, 2);
          tick();
          fixture.detectChanges();
          page.addElements();
        })); // end beforeEach fakeAsync

        it('Should have K bacteria in dilution tube 3', () => {
          var dil1Classes = page.dilutionTubes[2].nativeElement.className;
          expect(dil1Classes).toContain('tube-k');
        }); // end Should have K bacteria in dilution tube 1

        it('Should have 4 dilution tube labels visible', () => {
          var label1 = page.dilutionLabels[0];
          expect(label1.nativeElement.className).not.toContain('invisible');
          var label2 = page.dilutionLabels[1];
          expect(label2.nativeElement.className).not.toContain('invisible');
          var label3 = page.dilutionLabels[2];
          expect(label3.nativeElement.className).not.toContain('invisible');
          var label4 = page.dilutionLabels[3];
          expect(label4.nativeElement.className).not.toContain('invisible');
        }); // end Should have 4 dilution tube labels visible

        it('Should be able to drop tube 3 on tube 4', () => {
          let funcCanDrop = comp.canDropDil(3);
          let canDrop = funcCanDrop({ src: 2 });
          expect(canDrop).toBeTruthy();
        }); // end Should be able to drop tube 3 on tube 4

        it('Should be able to get drag data from tube 3', () => {
          var expected = {
            lawnType: 'K',
            src: 2,
            phage: [{ id: phage1.id, strainNum: phage1.strainNum, numPhage: 10000 },
            { id: phage2.id, strainNum: phage2.strainNum, numPhage: 10000 }]
          };
          var dragData = comp.getDataDil(2);
          expect(dragData).toEqual(expected);
        }); // end Should be able to get drag data from tube 3
      }); // end Test add to dilution tube 3
    }); // end Test add to dilution tube 2
  }); // end Test add to dilution tubes

  describe('Test add to and remove from plate', () => {
    describe('Test WT input, PERM bact', () => {
      var dilContents = {
        lawnType: 'B',
        src: 3,
        phage: [{ id: 'a0', strainNum: 0, numPhage: 1300 }]
      };

      beforeEach(fakeAsync(() => {
        createComponent();
        comp.dropOnPlate({ dragData: dilContents });
        tick();
        fixture.detectChanges();
        page.addElements();
        addMatchers();
      })); // end beforeEach fakeAsync

      it('Should have small plaques', () => {
        var smallPlaques = page.smallPlaque;
        expect(smallPlaques.innerHTML).toTemplateMatch('1300');
      }); // end Should have small plaques

      it('Should have B bacteria', () => {
        let c = page.labPlate.nativeElement.className;
        expect(c).toContain('text-info');
      }); // end Should have B bacteria
    }); // end Test WT input, PERM bact

    describe('Test FS input, PERM bact', () => {
      var dilContents = {
        lawnType: 'B',
        src: 3,
        phage: [{ id: 'a1', strainNum: 1, numPhage: 1300 }]
      };

      beforeEach(fakeAsync(() => {
        createComponent();
        comp.dropOnPlate({ dragData: dilContents });
        tick();
        fixture.detectChanges();
        page.addElements();
        addMatchers();
      })); // end beforeEach fakeAsync

      it('Should not have small plaques', () => {
        var smallPlaques = page.smallPlaque;
        expect(smallPlaques.innerHTML).toTemplateMatch('0');
      }); // end Should not have small plaques

      it('Should have large plaques', () => {
        var smallPlaques = page.largePlaque;
        expect(smallPlaques.innerHTML).toTemplateMatch('1302');
      }); // end Should have large plaques

      it('Should have B bacteria', () => {
        let c = page.labPlate.nativeElement.className;
        expect(c).toContain('text-info');
      }); // end Should have B bacteria

      it('Should be able to get large plaque data', () => {
        var phage = comp.getPhagePlate('large');
        var expected: GenotypePhage = {
          shifts: [-77], deletion: [], parents: [{ id: 'a1', strainNum: 1 }], src: 'large'
        }
      }); // end Should be able to get large plaque data
    }); // end Test FS input, PERM bact

    describe('Test FS input, REST bact', () => {
      var dilContents = {
        lawnType: 'K',
        src: 3,
        phage: [{ id: 'a1', strainNum: 1, numPhage: 1300 }]
      };

      beforeEach(fakeAsync(() => {
        createComponent();
        comp.dropOnPlate({ dragData: dilContents });
        tick();
        fixture.detectChanges();
        page.addElements();
        addMatchers();
      })); // end beforeEach fakeAsync

      it('Should have 1 small plaque', () => {
        var smallPlaques = page.smallPlaque;
        expect(smallPlaques.innerHTML).toTemplateMatch('1');
      }); // end Should not have small plaques

      it('Should have not large plaques', () => {
        var largePlaques = page.largePlaque;
        expect(largePlaques.innerHTML).toTemplateMatch('0');
      }); // end Should have large plaques

      it('Should have K bacteria', () => {
        let c = page.labPlate.nativeElement.className;
        expect(c).toContain('text-danger');
      }); // end Should have K bacteria

      it('Should be able to get small plaque data', () => {
        var phage = comp.getPhagePlate('small');
        var expected: GenotypePhage = {
          shifts: [-77, 145], deletion: [], parents: [{ id: 'a1', strainNum: 1 }], src: 'small'
        }
        expect(phage).toEqual(expected);
      }); // end Should be able to get small plaque data

      it('Should be able to drag small but not large', () => {
        var canDragSmall = comp.canDragPlate('small');
        var canDragLarge = comp.canDragPlate('large');
        expect(canDragSmall).toBeTruthy();
        expect(canDragLarge).toBeFalsy();
      }); // end Should be able to drag small but not large

      it('Should remove plaque when added to fridge', fakeAsync(() => {
        comp.addedToFridge({ dragData: { src: 'small' } });
        tick();
        fixture.detectChanges();
        page.addElements();
        var smallPlaques = page.smallPlaque;
        expect(smallPlaques.innerHTML).toTemplateMatch('0');
      })); // end Should remove plaque when added to fridge
    }); // end Test FS input, REST bact

    describe('Test WT x FS input, PERM bact', () => {
      //a0 x b2 (0, 5) [0, 299]
      var dilContents = {
        lawnType: 'B',
        src: 2,
        phage: [{ id: 'a0', strainNum: 0, numPhage: 1100 },
        { id: 'b2', strainNum: 5, numPhage: 1400 }]
      };

      beforeEach(fakeAsync(() => {
        createComponent();
        comp.dropOnPlate({ dragData: dilContents });
        tick();
        fixture.detectChanges();
        page.addElements();
        addMatchers();
      })); // end beforeEach fakeAsync

      it('Should have B bacteria', () => {
        let c = page.labPlate.nativeElement.className;
        expect(c).toContain('text-info');
      }); // end Should have B bacteria

      it('Should have 656 small plaques', () => {
        var smallPlaques = page.smallPlaque;
        expect(smallPlaques.innerHTML).toTemplateMatch('656');
      }); // end Should have 656 small plaques

      it('Should have 838 large plaques', () => {
        var largePlaques = page.largePlaque;
        expect(largePlaques.innerHTML).toTemplateMatch('838');
      }); // end Should have 838 large plaques

      it('Should be able to get small plaque data', () => {
        var phage = comp.getPhagePlate('small');
        var expected: GenotypePhage = {
          shifts: [], deletion: [], parents: [{ id: 'a0', strainNum: 0 }, { id: 'b2', strainNum: 5 }], src: 'small'
        }
        expect(phage).toEqual(expected);
      }); // end Should be able to get small plaque data

      it('Should be able to get large plaque data', () => {
        var phage = comp.getPhagePlate('large');
        var expected: GenotypePhage = {
          shifts: [299], deletion: [], parents: [{ id: 'a0', strainNum: 0 }, { id: 'b2', strainNum: 5 }], src: 'large'
        }
        expect(phage).toEqual(expected);
      }); // end Should be able to get large plaque data

      it('Should be able to drag large and small plaques', () => {
        var canDragSmall = comp.canDragPlate('small');
        var canDragLarge = comp.canDragPlate('large');
        expect(canDragSmall).toBeTruthy();
        expect(canDragLarge).toBeTruthy();
      }); // end Should be able to drag large and small plaques

      it('Should remove small plaque from plate', fakeAsync(() => {
        comp.addedToFridge({ dragData: { src: 'small' } });
        tick();
        fixture.detectChanges();
        page.addElements();
        var smallPlaques = page.smallPlaque;
        expect(smallPlaques.innerHTML).toTemplateMatch('655');
      })); // end Should remove small plaque from plate

      it('Should remove large plaque from plate', fakeAsync(() => {
        comp.addedToFridge({ dragData: { src: 'large' } });
        tick();
        fixture.detectChanges();
        page.addElements();
        var largePlaques = page.largePlaque;
        expect(largePlaques.innerHTML).toTemplateMatch('837');
      })); // end Should remove large plaque from plate
    }); // end Test WT x FS input, PERM bact

    describe('Test FS x FS input, REST bact', () => {
      // a1 x a4 (1, 7) [-77, -201]
      var dilContents = {
        lawnType: 'K',
        src: 2,
        phage: [{ id: 'a1', strainNum: 1, numPhage: 1500 },
        { id: 'a4', strainNum: 7, numPhage: 1400 }]
      };

      beforeEach(fakeAsync(() => {
        createComponent();
        comp.dropOnPlate({ dragData: dilContents });
        tick();
        fixture.detectChanges();
        page.addElements();
        addMatchers();
      })); // end beforeEach fakeAsync

      it('Should have K bacteria', () => {
        let c = page.labPlate.nativeElement.className;
        expect(c).toContain('text-danger');
      }); // end Should have B bacteria

      it('Should have 8 small plaques', () => {
        var smallPlaques = page.smallPlaque;
        expect(smallPlaques.innerHTML).toTemplateMatch('8');
      }); // end Should have 8 small plaques

      it('Should not have large plaques', () => {
        var largePlaques = page.largePlaque;
        expect(largePlaques.innerHTML).toTemplateMatch('0');
      }); // end Should not have large plaques

      it('Should be able to get small plaque data', () => {
        var phage = comp.getPhagePlate('small');
        var expected: GenotypePhage = {
          shifts: [10, -77], deletion: [], parents: [{ id: 'a1', strainNum: 1 }, { id: 'a4', strainNum: 7 }], src: 'small'
        }
        expect(phage).toEqual(expected);
      }); // end Should be able to get small plaque data

      it('Should not be able to get large plaque data', () => {
        var phage = comp.getPhagePlate('large');
        expect(phage).toBeNull();
      }); // end Should not be able to get large plaque data

      it('Should be able to drag small plaque only', () => {
        var canDragSmall = comp.canDragPlate('small');
        var canDragLarge = comp.canDragPlate('large');
        expect(canDragSmall).toBeTruthy();
        expect(canDragLarge).toBeFalsy();
      }); // end Should be able to drag small plaques only

      it('Should remove small plaque from plate', fakeAsync(() => {
        comp.addedToFridge({ dragData: { src: 'small' } });
        tick();
        fixture.detectChanges();
        page.addElements();
        var smallPlaques = page.smallPlaque;
        expect(smallPlaques.innerHTML).toTemplateMatch('7');
      })); // end Should remove small plaque from plate

    }); // end Test WT x FS input, PERM bact

    describe('Test over capacity, PERM bact', () => {
      // Wt x WT a0 x b3
      var dilContents = {
        lawnType: 'B',
        src: 0,
        phage: [{ id: 'a0', strainNum: 0, numPhage: 2000 },
        { id: 'b3', strainNum: 6, numPhage: 2000 }]
      };
      beforeEach(fakeAsync(() => {
        createComponent();
        comp.dropOnPlate({ dragData: dilContents });
        tick();
        fixture.detectChanges();
        page.addElements();
        addMatchers();
      })); // end beforeEach fakeAsync

      it('Should be over capacity', () => {
        // background-secondary, innerHTML of inner-plate
        var cList = page.labPlate.nativeElement.className;
        expect(cList).toContain('bg-secondary');
        var innerPlate = page.labPlate.query(By.css('.inner-plate')).nativeElement;
        expect(innerPlate.innerHTML).toTemplateMatch('PLATE IS OVER CAPACITY.')
      }); // end Should be over capacity
    }); // end Test over capacity PERM bact
  }); // end Test add to and remove from plate

  describe('Test buttons', () => {
    // WT x FS (0,7) [0, -201]
    let phage1: Phage = { id: 'a0', strainNum: 0 };
    let phage2: Phage = { id: 'a4', strainNum: 7 };
    let dilContents = {
      lawnType: 'K',
      src: 3,
      phage: [{ id: phage1.id, strainNum: phage1.strainNum, numPhage: 1500 },
      { id: phage2.id, strainNum: phage2.strainNum, numPhage: 1400 }]
    };
    let bactContents = {
      lawnType: 'K',
      src: 'K',
      phage: [{ id: phage1.id, strainNum: phage1.strainNum, numPhage: 1000000 },
      { id: phage2.id, strainNum: phage2.strainNum, numPhage: 1000000 }]
    };
    describe('Test can setup', () => {
      beforeEach(fakeAsync(() => {
        // add stuff to bacteria tubes, dilution tubes, and plate
        createComponent();
        comp.dropPhageBact({ dragData: phage1 }, 'K');
        comp.dropContentsDil({ dragData: bactContents }, 0);
        tick();
        fixture.detectChanges();
        page.addElements();
        // add second phage
        comp.dropPhageBact({ dragData: phage2 }, 'K');
        comp.dropOnPlate({ dragData: dilContents });
        tick();
        fixture.detectChanges();
        page.addElements();
        addMatchers();
      })); // end beforeEach

      it('Should have bacteria tube K with 2 phage', () => {
        // B is hidden
        expect(page.tubeB.nativeElement.className).toContain('invisible');
        expect(page.tubeK.nativeElement.className).not.toContain('invisible');
        // correct strain numbers
        var tubeLabel1 = fixture.debugElement.query(By.css('.phage-label-1')).nativeElement.innerHTML;
        expect(tubeLabel1).toTemplateMatch('1');
        var tubeLabel2 = fixture.debugElement.query(By.css('.phage-label-2')).nativeElement.innerHTML;
        expect(tubeLabel2).toTemplateMatch('8');
      }); // end Should have bacteria tube K with 2 phage

      it('Should have dilution tube 1 with K and 2 labels visible', () => {
        var dil1Classes = page.dilutionTubes[0].nativeElement.className;
        expect(dil1Classes).toContain('tube-k');
        var label1 = page.dilutionLabels[0];
        expect(label1.nativeElement.className).not.toContain('invisible');
        var label2 = page.dilutionLabels[1];
        expect(label2.nativeElement.className).not.toContain('invisible');
        var label3 = page.dilutionLabels[2];
        expect(label3.nativeElement.className).toContain('invisible');
      }); // end Should have dilution tube 1 with K

      it('Should have plate', () => {
        // bacteria type
        let c = page.labPlate.nativeElement.className;
        expect(c).toContain('text-danger');
        // number of small plaques
        var smallPlaques = page.smallPlaque;
        expect(smallPlaques.innerHTML).toTemplateMatch('708');
        var largePlaques = page.largePlaque;
        expect(largePlaques.innerHTML).toTemplateMatch('0');
      }); // end Should have plate
    }); // end Test can set up

    describe('Test clear tubes', () => {
      beforeEach(fakeAsync(() => {
        // add stuff to bacteria tubes, dilution tubes, and plate
        createComponent();
        comp.dropPhageBact({ dragData: phage1 }, 'K');
        comp.dropContentsDil({ dragData: bactContents }, 0);
        tick();
        fixture.detectChanges();
        page.addElements();
        // add second phage
        comp.dropPhageBact({ dragData: phage2 }, 'K');
        comp.dropOnPlate({ dragData: dilContents });
        tick();
        fixture.detectChanges();
        click(page.clearTubeButton);
        tick();
        fixture.detectChanges();
        page.addElements();
        addMatchers();
      })); // end beforeEach

      it('Should have both bacteria tubes visible', () => {
        expect(page.tubeB.nativeElement.className).not.toContain('invisible');
        expect(page.tubeK.nativeElement.className).not.toContain('invisible');
      }); // end Should have both bacteria tubes visible

      it('Should have 1 dilution label visible', () => {
        var label1 = page.dilutionLabels[0];
        expect(label1.nativeElement.className).not.toContain('invisible');
        var label2 = page.dilutionLabels[1];
        expect(label2.nativeElement.className).toContain('invisible');
      }); // end Should have 1 dilution label visible

      it('Should have plate', () => {
        // bacteria type
        let c = page.labPlate.nativeElement.className;
        expect(c).toContain('text-danger');
        // number of small plaques
        var smallPlaques = page.smallPlaque;
        expect(smallPlaques.innerHTML).toTemplateMatch('708');
        var largePlaques = page.largePlaque;
        expect(largePlaques.innerHTML).toTemplateMatch('0');
      }); // end Should have plate
    }); // end Test clear tubes

    describe('Test clear plate', () => {
      beforeEach(fakeAsync(() => {
        // add stuff to bacteria tubes, dilution tubes, and plate
        createComponent();
        comp.dropPhageBact({ dragData: phage1 }, 'K');
        comp.dropContentsDil({ dragData: bactContents }, 0);
        tick();
        fixture.detectChanges();
        page.addElements();
        // add second phage
        comp.dropPhageBact({ dragData: phage2 }, 'K');
        comp.dropOnPlate({ dragData: dilContents });
        tick();
        fixture.detectChanges();
        click(page.clearPlateButton);
        tick();
        fixture.detectChanges();
        page.addElements();
        addMatchers();
      })); // end beforeEach

      it('Should have bacteria tube K with 2 phage', () => {
        // B is hidden
        expect(page.tubeB.nativeElement.className).toContain('invisible');
        expect(page.tubeK.nativeElement.className).not.toContain('invisible');
        // correct strain numbers
        var tubeLabel1 = fixture.debugElement.query(By.css('.phage-label-1')).nativeElement.innerHTML;
        expect(tubeLabel1).toTemplateMatch('1');
        var tubeLabel2 = fixture.debugElement.query(By.css('.phage-label-2')).nativeElement.innerHTML;
        expect(tubeLabel2).toTemplateMatch('8');
      }); // end Should have bacteria tube K with 2 phage

      it('Should have dilution tube 1 with K and 2 labels visible', () => {
        var dil1Classes = page.dilutionTubes[0].nativeElement.className;
        expect(dil1Classes).toContain('tube-k');
        var label1 = page.dilutionLabels[0];
        expect(label1.nativeElement.className).not.toContain('invisible');
        var label2 = page.dilutionLabels[1];
        expect(label2.nativeElement.className).not.toContain('invisible');
        var label3 = page.dilutionLabels[2];
        expect(label3.nativeElement.className).toContain('invisible');
      }); // end Should have dilution tube 1 with K

      it('Should have empty plate', () => {
        let plateContents = page.labPlate.children;
        expect(plateContents.length).toBe(0);
      }); // end Should have empty plate
    }); // end Test clear plate

    describe('Test clear all', () => {
      beforeEach(fakeAsync(() => {
        // add stuff to bacteria tubes, dilution tubes, and plate
        createComponent();
        comp.dropPhageBact({ dragData: phage1 }, 'K');
        comp.dropContentsDil({ dragData: bactContents }, 0);
        tick();
        fixture.detectChanges();
        page.addElements();
        // add second phage
        comp.dropPhageBact({ dragData: phage2 }, 'K');
        comp.dropOnPlate({ dragData: dilContents });
        tick();
        fixture.detectChanges();
        click(page.clearAllButton);
        tick();
        fixture.detectChanges();
        page.addElements();
        addMatchers();
      })); // end beforeEach

      it('Should have both bacteria tubes visible', () => {
        expect(page.tubeB.nativeElement.className).not.toContain('invisible');
        expect(page.tubeK.nativeElement.className).not.toContain('invisible');
      }); // end Should have both bacteria tubes visible

      it('Should have 1 dilution label visible', () => {
        var label1 = page.dilutionLabels[0];
        expect(label1.nativeElement.className).not.toContain('invisible');
        var label2 = page.dilutionLabels[1];
        expect(label2.nativeElement.className).toContain('invisible');
      }); // end Should have 1 dilution label visible

      it('Should have empty plate', () => {
        let plateContents = page.labPlate.children;
        expect(plateContents.length).toBe(0);
      }); // end Should have empty plate
    }); // end Test clear all
  }); // end Test buttons

}); // end Lab Room Component

class Page {

  tubeB: DebugElement;
  tubeK: DebugElement;

  dilutionInput: DebugElement;
  dilutionTubes: DebugElement[];
  dilutionLabels: DebugElement[];

  labPlate: DebugElement;
  smallPlaque: HTMLElement;
  largePlaque: HTMLElement;

  clearTubeButton: DebugElement;
  clearPlateButton: DebugElement;
  clearAllButton: DebugElement;

  errorMessage: HTMLElement;

  constructor() { }

  addElements() {
    // bacteria tubes
    this.tubeB = fixture.debugElement.query(By.css('#bact-tube-B'));
    this.tubeK = fixture.debugElement.query(By.css('#bact-tube-K'));

    // dilution stuff
    this.dilutionInput = fixture.debugElement.query(By.css('#dilution-value')).query(By.css('input'));
    this.dilutionTubes = fixture.debugElement.queryAll(By.css('.dil-tube'));
    this.dilutionLabels = fixture.debugElement.queryAll(By.css('.dil-value'));

    // lab plate
    this.labPlate = fixture.debugElement.query(By.css('#lab-plate'));
    let plaques = fixture.debugElement.queryAll(By.css('.plaque'));
    this.smallPlaque = (plaques.length > 0 ? plaques[0].nativeElement : null);
    this.largePlaque = (plaques.length > 1 ? plaques[1].nativeElement : null);

    // buttons
    let btns = fixture.debugElement.queryAll(By.css('button'));
    this.clearTubeButton = btns[0];
    this.clearPlateButton = btns[1];
    this.clearAllButton = btns[2];

    let tmp = fixture.debugElement.query(By.css('.alert'));
    this.errorMessage = (tmp ? tmp.nativeElement : null);
  }
}

function createComponent() {
  fixture = TestBed.createComponent(LabRoomTestComponent);
  comp = fixture.componentInstance;

  page = new Page();
  fixture.detectChanges(); // trigger ngOnInit
}
