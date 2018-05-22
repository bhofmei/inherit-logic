/**
 * Scenario/experiement-related values used to
 * 1. Send the correct parameters to backend calls
 * 2. Match some backend parameters
 * 3. Have consistent defaults
 */
export const ScenarioGlobals = {
  /**
   * Number of starting phage when taken from fridge
   */
  numPhage:1000000,
  /**
   * Maximum number of plaques allowed on lab room plate
   */
  plateCapacity: 1500,
  /**
   * Maximum number of plaques allowed on each plexer room plate
   */
  plexerCapacity: 200,
  /**
   * Number of shelves in the fridge
   */
  nFridgeShelf: 32,
  /**
   * Number of spots on each shelf of the fridge
   */
  nFridgeSpots: 16,
  /**
   * Default dilution value for lab room; can be changed by user
   */
  defaultLabDilution: 10,
  /**
   * Default dilution value for plexer room; can be changed by user
   */
  defaultPlexerDilution: 5,
  /**
   * Length of the gene in number of basepairs
   */
  geneLength: 350,
  /**
   * Number of basepairs per "block" when guessing deletion location
   */
  deletionGuessLength: 10
}
