import { Pipe, PipeTransform } from '@angular/core';

/**
 * Format a MendelPede's genotype as A and a alleles
 * - When multAllele/multGenes, uses A^0, A^1, A^2
 *
 * **Usage:** `{{ genotypeNum | pedeGenotype:scenCode }}`
 *
 * @example <caption>Normal output :  </caption>
 * code>0</code> becomes "aa"
 * <code>1</code> becomes "Aa"
 * <code>3</code> becomes "Aa"
 * <code>4</code> becomes "AA"
 * @example <caption>Multiple Allele output :  </caption>
 * code>0</code> becomes "A^0A^0"
 * <code>1</code> becomes "A^1A^0"
 * <code>2</code> becomes "A^2A^0"
 * <code>5</code> becomes "A^2A^1"
 * <code>8</code> becomes "A^2A^2"
 * @example <caption>Invalid :  </caption>
 * <code>10</code> becomes "invalid"
 */
@Pipe({name: 'pedeQuizTrait'})
export class PedeQuizTraitPipe implements PipeTransform {

  transform(quizTrait: string): string {
    if (quizTrait === "DotColor"){
      return "Color of dot"
    } else if (quizTrait === "SegColor"){
      return "Color of body segment"
    } else if (quizTrait === "EyeColor"){
      return "Color of eyes"
    } else if (quizTrait === "NumSegments"){
      return "Number of segments"
    } else if (quizTrait === "NumLegs"){
      return "Number of Legs"
    }
  }
}
