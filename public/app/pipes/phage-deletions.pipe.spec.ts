import { PhageDeletionsPipe } from './phage-deletions.pipe';

describe('Phage Deletions Pipe', ()=>{
  let pipe = new PhageDeletionsPipe();

  it('should print out empty deletion', ()=>{
    let del = [];
    expect(pipe.transform(del)).toBe('');
  }); // end should print out empty deletion

  it('should print out one deletion', ()=>{
    let del = [50, 145];
    expect(pipe.transform(del)).toBe('50 - 145');
  }); // end should print out one deletion

  it('should print out two deletions', ()=>{
    let del = [50, 140, 190, 260];
    expect(pipe.transform(del)).toBe('50 - 140, 190 - 260');
  }); // end should print out two deletions

  it('should print one deletion for uneven input', ()=>{
    let del = [20, 120, 250];
    expect(pipe.transform(del)).toBe('20 - 120');
  }); // end should print one deletion for uneven input
}); // end Phage Deletions Pipe
