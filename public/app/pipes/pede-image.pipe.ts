import { Pipe, PipeTransform } from '@angular/core';

/**
 * Format a MendelPede's phenotype into a CSS class list
 *
 * **Usage:** `{{ phenoList | pedeImage }}`
 *
 */
@Pipe({name: 'pedeImage'})
export class PedeImagePipe implements PipeTransform {

  transform(phenotype: string[]): string {
    // ["DotColor","EyeColor","SegColor","NumLegs","NumSegments"];
    var cssClass = 'mx-auto sizeI';
    cssClass += ' mpede-bodycol-' + phenotype[2]; // SegColor
    cssClass += ' mpede-eyecol-' + phenotype[1]; // EyeColor
    cssClass += ' mpede-pede-' + phenotype[0].toLowerCase() // DotColor
    cssClass += '-seg' + phenotype[4] // NumSegments
    cssClass += '-leg' + phenotype[3] + '-min'; // NumLegs

    return cssClass
  }
}
