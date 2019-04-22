import { Pipe, PipeTransform } from '@angular/core';

/**
 * Format a MendelPede's phenotype as traits
 * - When multAllele/multGenes, uses A^0, A^1, A^2
 *
 * **Usage:** `{{ phenoList | pedePhenotype }}`
 *
 * @example 4 elements in phenoList: [ "Yellow", "Red", "LightGreen", "2", "1" ]
 * "Yellow" is Dot color
 * "Red" is Eye color
 * "LightGreen" is segment color
 * "2" is no of legs
 * "1" is no of segments
 */
@Pipe({name: 'pedePhenotype'})
export class PedePhenotypePipe implements PipeTransform {

  transform(phenoList: string[]): string {
    // ["DotColor","EyeColor","SegColor","NumLegs","NumSegments"];
    var outStr = 'Dot Color: ' + phenoList[0] +'<br>';
    outStr += 'Eye Color: ' + phenoList[1] + '<br>';
    outStr += 'Segment Color: ' + phenoList[2] + '<br>';
    outStr += 'Number of Legs: ' + phenoList[3] + '<br>';
    outStr += 'Number of Segments: ' + phenoList[4];
    return outStr
  }
}
