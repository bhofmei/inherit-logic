import { PedeGenotypePipe } from './pede-genotype.pipe';

describe('Pede Genotype Pipe', ()=>{
  let pipe = new PedeGenotypePipe();

  describe('Regular alleles', ()=>{
    it('should print genotype 0', ()=>{
      expect(pipe.transform(0, false)).toBe('aa');
    }); // end should print genotype 0

    it('should print genotype 1', ()=>{
      expect(pipe.transform(1, false)).toBe('Aa');
    }); // end should print genotype 1

    it('should print genotype 2', ()=>{
      expect(pipe.transform(2, false)).toBe('?a');
    }); // end should print genotype 2

    it('should print genotype 3', ()=>{
      expect(pipe.transform(3, false)).toBe('Aa');
    }); // end should print genotype 3

    it('should print genotype 4', ()=>{
      expect(pipe.transform(4, false)).toBe('AA');
    }); // end should print genotype 4

    it('should print genotype 5', ()=>{
      expect(pipe.transform(5, false)).toBe('?A');
    }); // end should print genotype 5

    it('should print genotype 6', ()=>{
      expect(pipe.transform(6, false)).toBe('?a');
    }); // end should print genotype 6

    it('should print genotype 7', ()=>{
      expect(pipe.transform(7, false)).toBe('?A');
    }); // end should print genotype 7

    it('should print genotype 8', ()=>{
      expect(pipe.transform(8, false)).toBe('??');
    }); // end should print genotype 8
  }); // end Regular alleles

  describe('Multiple alleles', ()=>{
    it('should print genotype 0', ()=>{
      expect(pipe.transform(0, true)).toBe('A<sup>0</sup>A<sup>0</sup>');
    }); // end should print genotype 0

    it('should print genotype 1', ()=>{
      expect(pipe.transform(1, true)).toBe('A<sup>1</sup>A<sup>0</sup>');
    }); // end should print genotype 1

    it('should print genotype 2', ()=>{
      expect(pipe.transform(2, true)).toBe('A<sup>2</sup>A<sup>0</sup>');
    }); // end should print genotype 2

    it('should print genotype 3', ()=>{
      expect(pipe.transform(3, true)).toBe('A<sup>1</sup>A<sup>0</sup>');
    }); // end should print genotype 3

    it('should print genotype 4', ()=>{
      expect(pipe.transform(4, true)).toBe('A<sup>1</sup>A<sup>1</sup>');
    }); // end should print genotype 4

    it('should print genotype 5', ()=>{
      expect(pipe.transform(5, true)).toBe('A<sup>2</sup>A<sup>1</sup>');
    }); // end should print genotype 5

    it('should print genotype 6', ()=>{
      expect(pipe.transform(6, true)).toBe('A<sup>2</sup>A<sup>0</sup>');
    }); // end should print genotype 6

    it('should print genotype 7', ()=>{
      expect(pipe.transform(7, true)).toBe('A<sup>2</sup>A<sup>1</sup>');
    }); // end should print genotype 7

    it('should print genotype 8', ()=>{
      expect(pipe.transform(8, true)).toBe('A<sup>2</sup>A<sup>2</sup>');
    }); // end should print genotype 8
  }); // end Multiple alleles


}); // end Person Name Pipe
