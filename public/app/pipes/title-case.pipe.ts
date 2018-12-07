import { Pipe, PipeTransform } from '@angular/core';

/**
 * Format a string to capitalize the first letter of each word
 *
 * **Usage:** `{{inputString | titleCase }}`
 *
 * @example "I'm a cat" becomes "I'm A Cat"
 * @example "hear ME roaR" becomes "Hear Me Roar"
 */

 @Pipe({name: 'titleCase'})
 export class TitleCasePipe implements PipeTransform {

   transform(inputString: string): string {
     return inputString.toLowerCase().split(' ').map((word)=>{
       return (word.charAt(0).toUpperCase() + word.slice(1));
     }).join(' ');
   }
 }
