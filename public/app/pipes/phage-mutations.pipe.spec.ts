import { PhageMutationsPipe } from './phage-mutations.pipe';

describe('Phage Mutations Pipe', ()=>{

  let pipe = new PhageMutationsPipe();

  it('should print empty string for no mutations', ()=>{
    let muts = [];
    expect(pipe.transform(muts)).toBe('');
  }); // end should print empty string for no mutations

  it('should print for single negative FS mutation', ()=>{
    let muts = [-99];
    expect(pipe.transform(muts)).toBe('-1 at 99');
  }); // end should print for single negative FS mutation

  it('should print for single positive FS mutation', ()=>{
    let muts = [254];
    expect(pipe.transform(muts)).toBe('+1 at 254');
  }); // end should print for single positive FS mutation

  it('should print for two negative FS mutations', ()=>{
    let muts = [-13, -270];
    expect(pipe.transform(muts)).toBe('-1 at 13, -1 at 270');
  }); // end should print for two negative FS mutations

  it('should print for two positive FS mutations', ()=>{
    let muts = [87, 245];
    expect(pipe.transform(muts)).toBe('+1 at 87, +1 at 245');
  }); // end should print for two positive FS mutations

  it('should print for two mixed FS mutations', ()=>{
    let muts = [109, -198];
    expect(pipe.transform(muts)).toBe('+1 at 109, -1 at 198');
  }); // end should print for two mixed FS mutations

  it('should print for three negative FS mutations', ()=>{
    let muts = [-5, -113, -276];
    expect(pipe.transform(muts)).toBe('-1 at 5, -1 at 113, -1 at 276');
  }); // end should print for three negative FS mutations

  it('should print for three positive FS mutations', ()=>{
    let muts = [59, 111, 213];
    expect(pipe.transform(muts)).toBe('+1 at 59, +1 at 111, +1 at 213');
  }); // end should print for three positive FS mutations

  it('should print for three mixed FS mutations', ()=>{
    let muts = [-99, 136, -221];
    expect(pipe.transform(muts)).toBe('-1 at 99, +1 at 136, -1 at 221');
  }); // end should print for three mixed FS mutations
}); // end Phage Mutations Pipe
