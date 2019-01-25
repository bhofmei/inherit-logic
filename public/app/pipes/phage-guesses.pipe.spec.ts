import { PhageGuessesPipe } from './phage-guesses.pipe';

describe('Phage Guesses Pipe', ()=>{
  let pipe = new PhageGuessesPipe();

  it('should print for all false', ()=>{
    let guesses = createArray(35, false);
    expect(pipe.transform(guesses)).toBe('None');
  }); // end should print for all false

  it('should print for all true', ()=>{
    let guesses = createArray(35, true);
    expect(pipe.transform(guesses)).toBe('0 - 350');
  }); // end should print for all true

  it('should print starting with deletion', ()=>{
    let guesses = createArray(5, true).concat(createArray(30, false));
    expect(pipe.transform(guesses)).toBe('0 - 50');
  }); // end should print starting with deletion

  it('should print ending with deletion', ()=>{
     let guesses = createArray(29, false).concat(createArray(6, true));
    expect(pipe.transform(guesses)).toBe('290 - 350');
  }); // end should print ending with deletion

  it('should print for deletion in the middle', ()=>{
    let guesses = createArray(3, false).concat(createArray(15, true)).concat(createArray(17, false));
    expect(pipe.transform(guesses)).toBe('30 - 180');
  }); // end should print for deletion in the middle

  it('should print for two deletions in the middle', ()=>{
     let guesses = createArray(5, false).concat(createArray(5, true)).concat(createArray(10, false)).concat(createArray(6, true)).concat(createArray(9, false));
    expect(pipe.transform(guesses)).toBe('50 - 100, 200 - 260');
  }); // end should print for two deletions in the middle

  it('should print for deletion in the beginning and middle', ()=>{
    let guesses = createArray(9, true).concat(createArray(11, false)).concat(createArray(8, true)).concat(createArray(7, false))
    expect(pipe.transform(guesses)).toBe('0 - 90, 200 - 280');
  }); // end should print for deletion in the beginning and middle

  it('should print for deletion in the middle and end', ()=>{
    let guesses = createArray(12, false).concat(createArray(5, true)).concat(createArray(11, false)).concat(createArray(7, true))
    expect(pipe.transform(guesses)).toBe('120 - 170, 280 - 350');
  }); // end should print for deletion in the middle and end

  it('should print for deletion in the beginning and end', ()=>{
    let guesses = createArray(15, true).concat(createArray(15, false)).concat(createArray(5, true))
    expect(pipe.transform(guesses)).toBe('0 - 150, 300 - 350');
  }); // end should print for deletion in the beginning and end

  it('should print None for empty array', ()=>{
    let guesses = [];
    expect(pipe.transform(guesses)).toBe('None')
  }); // end should print None for empty array
}); // end Phage Guesses Pipe

function createArray (l: number, v: any): any[]{
  return new Array(l).fill(v);
}
