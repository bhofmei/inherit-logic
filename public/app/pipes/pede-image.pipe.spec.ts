import { PedeImagePipe } from './pede-image.pipe';

describe('Pede Image Pipe', ()=>{
  let pipe = new PedeImagePipe();
  it('should work for test 1', ()=>{
    var pheno = ['red', 'blue', 'orange', '2', '4'];
    var expected = 'mx-auto sizeI mpede-bodycol-orange mpede-eyecol-blue mpede-pede-red-seg4-leg2-min';
    expect(pipe.transform(pheno)).toBe(expected);
  });
}); // end Pede Image Pipe
