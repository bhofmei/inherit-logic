/**
 * Information needed about each scenario
 */
export interface Scenario{
  /**
   * Human-readable visible label
   */
  label: string;
  /**
   * Short string ID for the scenario; used in the URL and for linking
   * scenario to other objects
   */
  scenCode: string;
  /**
   * Goal for completing the scenario
   */
  purpose: string;
  /**
   * Description of phage strains to begin the scenario
   */
  startingPoint: string;
  /**
   * The reason this scenario is important for learning
   */
  relevance: string;
}
