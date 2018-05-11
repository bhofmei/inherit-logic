import { FridgePhage, StudentPhage } from './phage.interface';
import { _User } from './user.interface';

/**
 * A user/scenario fridge
 */
export interface Fridge {
  /**
   * Information for this specific user/scenario needed when
   * submitting the plexer or generating a new plate
   */
  scenarioDetails: string;
  /**
   * Deletion guesses
   */
  guesses: string;
  /**
   * List of phage in the fridge
   */
  strains: FridgePhage[];
  /**
   * Has access already been granted for this user/scenario;
   * Fridges for each scenario are the same when access not granted
   */
  accessGranted: boolean;
  /**
   * User id for owner of this fridge
   */
  userId: number;
  /**
   * Scenario id this fridge belongs to
   */
  scenCode: string;
}

/**
 * Fridge information used by admin
 */
export interface StudentFridge {
  /**
   * Owner of the fridge
   */
  owner: _User;
  /**
   * Scenario this fridge is for
   */
  scenario: {scenCode: string, label: string};
  /**
   * If fridge exists, the list of phage that are in this fridge
   */
  strains?: StudentPhage[];
  /**
   * If the fridge exists, has access been granted for this user/scenario
   */
  accessGranted?: boolean;
  /**
   * If the fridge exists, the deletion guesses by the student
   */
  guesses?: string;
}
