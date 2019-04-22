import { PedePhenotypePipe } from './pede-phenotype.pipe';

describe('Pede Phenotype Pipe', ()=>{
  let pipe = new PedePhenotypePipe();

  describe('phenoType to traits', ()=>{
    it('should print Dot color', ()=>{
      expect(pipe.transform([ "Yellow", "Red", "LightGreen", "2", "1" ])).toContain('Dot Color: Yellow');
    }); // end should print Dot color
    it('should print Eye color', ()=>{
      expect(pipe.transform([ "Yellow", "Red", "LightGreen", "2", "1" ])).toContain('Eye Color: Red');
    }); // end should print Eye color
    it('should print Segment color', ()=>{
      expect(pipe.transform([ "Yellow", "Red", "LightGreen", "2", "1" ])).toContain('Segment Color: LightGreen');
    }); // end should print Segment color
    it('should print Number of Legs', ()=>{
      expect(pipe.transform([ "Yellow", "Red", "LightGreen", "2", "1" ])).toContain('Number of Legs: 2');
    }); // end should print Number of Legs
    it('should print Number of Segments', ()=>{
      expect(pipe.transform([ "Yellow", "Red", "LightGreen", "2", "1" ])).toContain('Number of Segments: 1');
    }); // end should print Number of Segments
  }); // end Regular alleles
}); // end Person Name Pipe
