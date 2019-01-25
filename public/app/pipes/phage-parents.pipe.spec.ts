import { PhageParentsPipe } from './phage-parents.pipe';
import { Phage } from '../interfaces/phage.interface';

describe('Phage Parents Pipe', ()=>{
  let pipe = new PhageParentsPipe();

  it('should print empty string for no parents', ()=>{
    let parents: Phage[] = [];
    expect(pipe.transform(parents, 0)).toBe('')
  }); // end should print empty string for no parents

  it('should print for one parent', ()=>{
    let parents: Phage[] = [{id: 'id1', strainNum: 4}];
    expect(pipe.transform(parents, 1)).toBe('Strain 5')
  }); // end should print for one parent

  it('should print for two parents', ()=>{
    let parents: Phage[] = [{id: 'id1', strainNum: 4}, {id: 'id2', strainNum: 10}];
    expect(pipe.transform(parents, 2)).toBe('Strains 5 and 11')
  }); // end should print for two parents

  it('should print empty string for one parent missing one', ()=>{
    let parents: Phage[] = [];
    expect(pipe.transform(parents, 1)).toBe('')
  }); // end should print empty string for one parent missing one

  it('should print for two parents missing one', ()=>{
    let parents: Phage[] = [{id: 'id3', strainNum: 8}];
    expect(pipe.transform(parents, 2)).toBe('Strains 9 and ?')
  }); // end should print for two parents missing one

  it('should print for one parent, numParents not specified', ()=>{
    let parents: Phage[] = [{id: 'id4', strainNum: 11}];
    expect(pipe.transform(parents, undefined)).toBe('Strain 12')
  }); // end should print for one parent, numParents not specified

  it('should print for two parents, numParents not specified', ()=>{
    let parents: Phage[] = [{id: 'id4', strainNum: 11}, {id: 'id5', strainNum: 14}];
    expect(pipe.transform(parents, undefined)).toBe('Strains 12 and 15')
  }); // end should print for two parents, numParents not specified
}); // end Phage Parents Pipe
