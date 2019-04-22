import { Pipe, PipeTransform } from '@angular/core';

/**
 * Format a quiz trait code to user displayable string
 *
 * **Usage:** `{{ quizTrait | pedeQuizTrait }}`
 *
 * @example <caption>Normal output :  </caption>
 * "DotColor" to "Color of Dot"
 * "NumLegs" to "Number of Legs"
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
