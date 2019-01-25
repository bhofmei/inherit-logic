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
@Pipe({name: 'pedeGenotype'})
export class PedeGenotypePipe implements PipeTransform {

  transform(pedeGenotype: number, scenCode: string): string {
    if(pedeGenotype > 8){
      return 'invalid'
    }
    // includes ordering alleles by dominance
    var genoList = [[0,0], [1,0], [2,0], [1,0], [1,1], [2,1], [2,0], [2,1], [2,2]];
    var regGenoStr = ['a', 'A', '?'];
    var alleleGenoStr = ['A<sup>0</sup>', 'A<sup>1</sup>', 'A<sup>2</sup>']
    var geno = genoList[pedeGenotype];
    if(scenCode === "MultAlleles"){ // potentially include  || scenCode === "MultGenes"
      return alleleGenoStr[geno[0]] + alleleGenoStr[geno[1]]
    } else {
      return regGenoStr[geno[0]] + regGenoStr[geno[1]]
    }
  }
}
