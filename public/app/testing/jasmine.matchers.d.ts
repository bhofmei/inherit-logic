declare namespace jasmine {
  interface Matchers<T> {
    toTemplateMatch(actual: any, expectationFailOutput?: any): jasmine.CustomMatcher;
  }
}
