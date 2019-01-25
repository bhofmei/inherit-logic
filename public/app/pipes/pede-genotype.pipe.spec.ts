import { PedeGenotypePipe } from './pede-genotype.pipe';

describe('Pede Genotype Pipe', ()=>{
  let pipe = new PedeGenotypePipe();

  describe('Regular alleles', ()=>{
    it('should print genotype 0', ()=>{
      expect(pipe.transform(0, "Mendel")).toBe('aa');
    }); // end should print genotype 0

    it('should print genotype 1', ()=>{
      expect(pipe.transform(1, "Mendel")).toBe('Aa');
    }); // end should print genotype 1

    it('should print genotype 2', ()=>{
      expect(pipe.transform(2, "Mendel")).toBe('?a');
    }); // end should print genotype 2

    it('should print genotype 3', ()=>{
      expect(pipe.transform(3, "Mendel")).toBe('Aa');
    }); // end should print genotype 3

    it('should print genotype 4', ()=>{
      expect(pipe.transform(4, "Mendel")).toBe('AA');
    }); // end should print genotype 4

    it('should print genotype 5', ()=>{
      expect(pipe.transform(5, "Mendel")).toBe('?A');
    }); // end should print genotype 5

    it('should print genotype 6', ()=>{
      expect(pipe.transform(6, "Mendel")).toBe('?a');
    }); // end should print genotype 6

    it('should print genotype 7', ()=>{
      expect(pipe.transform(7, "Mendel")).toBe('?A');
    }); // end should print genotype 7

    it('should print genotype 8', ()=>{
      expect(pipe.transform(8, "Mendel")).toBe('??');
    }); // end should print genotype 8
  }); // end Regular alleles

  describe('Multiple alleles', ()=>{
    it('should print genotype 0', ()=>{
      expect(pipe.transform(0, "MultAlleles")).toBe('A<sup>0</sup>A<sup>0</sup>');
    }); // end should print genotype 0

    it('should print genotype 1', ()=>{
      expect(pipe.transform(1, "MultAlleles")).toBe('A<sup>1</sup>A<sup>0</sup>');
    }); // end should print genotype 1

    it('should print genotype 2', ()=>{
      expect(pipe.transform(2, "MultAlleles")).toBe('A<sup>2</sup>A<sup>0</sup>');
    }); // end should print genotype 2

    it('should print genotype 3', ()=>{
      expect(pipe.transform(3, "MultAlleles")).toBe('A<sup>1</sup>A<sup>0</sup>');
    }); // end should print genotype 3

    it('should print genotype 4', ()=>{
      expect(pipe.transform(4, "MultAlleles")).toBe('A<sup>1</sup>A<sup>1</sup>');
    }); // end should print genotype 4

    it('should print genotype 5', ()=>{
      expect(pipe.transform(5, "MultAlleles")).toBe('A<sup>2</sup>A<sup>1</sup>');
    }); // end should print genotype 5

    it('should print genotype 6', ()=>{
      expect(pipe.transform(6, "MultAlleles")).toBe('A<sup>2</sup>A<sup>0</sup>');
    }); // end should print genotype 6

    it('should print genotype 7', ()=>{
      expect(pipe.transform(7, "MultAlleles")).toBe('A<sup>2</sup>A<sup>1</sup>');
    }); // end should print genotype 7

    it('should print genotype 8', ()=>{
      expect(pipe.transform(8, "MultAlleles")).toBe('A<sup>2</sup>A<sup>2</sup>');
    }); // end should print genotype 8
  }); // end Multiple alleles


}); // end Person Name Pipe
