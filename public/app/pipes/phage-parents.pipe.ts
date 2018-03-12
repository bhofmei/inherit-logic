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
    let nums = sorted.map((phage)=>{return (phage.strainNum+1).toString()});

    if(sorted.length === 1 && numParents === 1){

      out = 'Strain ' + nums[0];
    } else if(sorted.length === 1 && numParents === 2){
      out = 'Strains ' + nums[0] + ' and ?';
    } else if(sorted.length === 2 && numParents === 2){
      out = 'Strains ' + nums[0] + ' and ' + nums[1];
    }
    return out;
  }
}
