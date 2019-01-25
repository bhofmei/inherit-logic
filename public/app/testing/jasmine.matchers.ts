/// <reference path="./jasmine.matchers.d.ts" />

// Jasmine Custom Matchers

export function addMatchers(): void {
  jasmine.addMatchers({
    toTemplateMatch: toTemplateMatch
});
}

function toTemplateMatch(): jasmine.CustomMatcher{
  return{
    compare: function(actual: any, expected: string, expectationFailOutput?: any): jasmine.CustomMatcherResult {
      let efo = expectationFailOutput ? ` '${expectationFailOutput}'` : ''
      expected = (expected === undefined ? '' : expected);
      if(typeof actual !== 'string'){
        return {pass: false, message: `Expected element '${actual}' to be a string${efo}`}
      }
      const actualText = actual.replace(/^(\s|\n|\t)+|(\s|\n|\t)+$/g, '');
      if(actualText !== expected){
        return {pass: false,
               message: `Expected element '${actual}' to be '${expected}'${efo}`}
      } else {
        return {pass: true, message: ''}
      }
    }
  }
}
