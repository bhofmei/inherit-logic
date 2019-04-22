import { PedeQuizTraitPipe } from './pede-quizTrait.pipe';

describe('Pede Phenotype Pipe', ()=>{
  let pipe = new PedeQuizTraitPipe();

  describe('quiz trait to description', ()=>{
    it('should print Dot color', ()=>{
      expect(pipe.transform("DotColor")).toBe("Color of dot");
    }); // end should print Dot color
    it('should print Segment color', ()=>{
      expect(pipe.transform("SegColor")).toBe("Color of body segment");
    }); // end should print Eye color
    it('should print Eye color', ()=>{
      expect(pipe.transform("EyeColor")).toBe("Color of eyes");
    }); // end should print Segment color
    it('should print Number of Segments', ()=>{
      expect(pipe.transform("NumSegments")).toBe("Number of segments");
    }); // end should print Number of Legs
    it('should print Number of Legs', ()=>{
      expect(pipe.transform("NumLegs")).toBe("Number of Legs");
    }); // end should print Number of Segments
  }); // end Regular alleles
}); // end Person Name Pipe
