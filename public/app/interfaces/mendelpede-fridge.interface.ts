import { MendelpedePede } from './mendelpede-pede.interface';
import { _User } from './user.interface';
import { MendelpedeQuiz } from './mendelpede-quiz.interface';

/**
 * A user/scenario fridge for Mendelpede
 */
export interface MendelpedeFridge {

  /**
   * id of the mendelfridge
   */
  id: string;

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
  mendelpedeScenCode: string;

  /**
   * List of mendelpedes belonging to the fridge
   */
  pedes: MendelpedePede[];

  /**
   * Genofacts of the mendel fridge
   */
  genoFacts: string;

  /**
   * First trait to be displayed as a hint in case quiz is associated
   */
  firstTraitForQuiz?: string;

  /**
   * associated quiz if it exists
   */
  quiz?: MendelpedeQuiz;

}

/**
 * Student Fridge information used by admin
 */
export interface StudentMendelFridge {
  /**
   * Owner of the fridge
  */
  owner: _User;
  /**
   * Scenario this fridge is for
   */
  scenario: {scenCode: string, label: string};
  /**
   * If fridge exists, the list of pedes that are in this fridge
   */
  pedes?: MendelpedePede[];
  /**
   * If the fridge exists, has access been granted for this user/scenario
   */
  accessGranted?: boolean;
  /**
   * Genofacts of the fridge
   */
  genoFacts: string;
  /**
   * associated quiz if it exists
   */
  quiz?: MendelpedeQuiz;

}
