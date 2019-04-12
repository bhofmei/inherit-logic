/**
 * Information needed about each Mendel scenario
 */
export interface MendelpedeScenario{
  /**
   * Human-readable visible label
   */
  label: string;
  /**
   * Short string ID for the scenario; used in the URL and for linking
   * scenario to other objects
   */
  shortCode: string;
  /**
   * Scenario type like quiz, discovery etc.
   */
  scenType: string;
  /**
   * Order of Scenario
   */
  ordOfScen: number;
}

/**
 * Function to sort scenarios by ordOfScen
 *
 */
export const sortScenarios = function(a,b){
    return a.ordOfScen - b.ordOfScen;
}
