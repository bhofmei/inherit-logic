/**
 * Information needed about each scenario
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
   * Description of phage strains to begin the scenario
   */
  scenType: string;
  /**
   * Order of Scenario
   */
  ordOfScen: number;
}
