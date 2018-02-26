import { Pipe, PipeTransform } from '@angular/core';
import { Phage } from '../interfaces/phage.interface';

@Pipe({name: 'phageParents'})
export class PhageParentsPipe implements PipeTransform {

  transform(parents: Phage[], numParents: number): string {
    let out = '';
    if(numParents === undefined){
      numParents = parents.length
    }
    let sorted: Phage[] = parents.sort((n1, n2)=>{return n1.strainNum - n2.strainNum});

    if(sorted.length === 1 && numParents === 1){
      out = 'Strain ' + sorted[0].strainNum.toString();
    } else if(sorted.length === 2 && numParents === 1){
      out = 'Strains ' + sorted[0].strainNum.toString() + ' and ?';
    } else if(sorted.length === 2 && numParents === 2){
      out = 'Strains ' + sorted[0].strainNum.toString() + ' and ' + sorted[1].strainNum.toString();
    }
    return out;
  }
}
