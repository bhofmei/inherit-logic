import { ExperimentPhage, GenotypePhage, Phage } from './phage.interface';

/**
 * @ignore
 */
export interface _experimentInput {
  /**
   * - E. coli bacteria type
   * - either `"B"` or `"K"`
   */
  lawnType: string;
  /**
   * Not used - empty object
   */
  specials: Object;
  /**
   * - Room that performing the experient
   * - either `"lab"` or `"plexer"`
   */
  location: string;
  /**
   * Scenario details needed to for genetics to create phage on the plate
   */
  scenarioData: string;
  /**
   * Maximum number of phage that can be plated
   */
  capacity: number;
}
/**
 * Information needed to create a new plate
 */
export interface PlateInput extends _experimentInput {
  /**
   * Parent 1 - first phage dragged into the tube
   */
  phage1: ExperimentPhage;
  /**
   * - Parent 2, if two phage in the tube
   * - Null if only one phage in the tube
   */
  phage2: ExperimentPhage;
}

/**
 * A phage genotype
 */
export interface _genotype {
  /**
   * List of frameshift mutations where each number is a single frameshift
   */
  shifts: number[];
  /**
   * List of deletion(s) as start and end position
   */
  deletion: number[];
}
/**
 * Data from server representing the lab room plate
 */
export interface PlateResults {
  /**
   * Is the plate over capacity?
   */
  full: boolean;
  /**
   * WT-phenotype phage on the plate; each number indicates the index
   * of the phage genotype in genotypes
   */
  smallPlaque: number[];
  /**
   * mutatnt phenotype phage on the plate; each number indicates
   * the index of the phage genotype in genotypes
   */
  largePlaque: number[];
  /**
   * - List of genotypes of the phage of the plate
   * - several individual phage from `"smallPlaque"` and `"largePlaque"`
   * can correspond to the same genotype
   */
  genotypes: _genotype[];
  /**
   * List of phage used to create this plate
   */
  parents: Phage[];
}

/**
 * Information needed to submit the plexer
 */
export interface PlexerInput extends _experimentInput {
  /**
   * List of phage in the rows of the plexer
   */
  rowPhage: ExperimentPhage[];
  /**
   * List of phage in the columns of the plexer
   */
  colPhage: ExperimentPhage[];
}
