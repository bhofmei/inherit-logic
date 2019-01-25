/**
 * Base phage interface
 */
export interface Phage {
  /**
   * Location in fridge
   */
  strainNum: number;
  /**
   * MongoDB object ID
   */
  id: string;
}

/**
 * Phage stored in the fridge
 */
export interface FridgePhage extends Phage {
  /**
   * Phage type; one of "reference", "unknown", and "user" depending
   * on who created it and if mutation state is known
   */
  phageType: string;
  /**
   * Description for this phage
   */
  comment: string;
  /**
   * If a user phage, the phage used in the cross to create this phage
   */
  parents?: Phage[];
  /**
   * If user phage, number of parents in the cross to create this phage;
   * used to check if one of the parents no longer exists
   */
  numParents?: number;
  /**
   * For user phage, should this phage be graded
   */
  submitted?: boolean;
}

/**
 * Phage interface used for plating and plexer
 */
export interface ExperimentPhage extends Phage {
  /**
   * Number of this phage in the tube/plate
   */
    numPhage: number;
}

/**
 * Phage on the lab room plate that will be saved to
 * the fridge
 */
export interface GenotypePhage {
  /**
   * List of frameshift mutations; negative numbers indicate -1
   * frameshift at the location; positive numbers indicate +1
   * frameshift at the location
   */
  shifts: number[];
  /**
   * Start and stop locations of deletion; if array
   * has more than 2 elements, start/stop are paired for separate
   * deletions in the same phage
   */
  deletion: number[];
  /**
   * Phage used in cross to create this phage
   */
  parents: Phage[];
  /**
   * Where the phage is being dragged from
   */
  src?: string;
}

/**
 * Additional information about the phage used for admin
 * and grading
 */
export interface StudentPhage extends FridgePhage {
  /**
   * List of frameshift mutations; negative numbers indicate -1
   * frameshift at the location; positive numbers indicate +1
   * frameshift at the location
   */
  mutationList: number[];
  /**
   * Start and stop location of deleetion; if array
   * has more than 2 elements, start/stop are paired for separate
   * deletions in the same phage
   */
  deletion: number[];
  /**
   * Deletion guesses from the student
   */
  guesses?: boolean[];
}
