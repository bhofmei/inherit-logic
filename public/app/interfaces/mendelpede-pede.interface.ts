import { _User } from './user.interface';

/**
 * A user/scenario fridge
 */
export interface MendelpedePede {
  /**
   * User id for owner of this fridge
   */
  userId: number;

  id: number;
  /**
   * Scenario id this fridge belongs to
   */
  scenCode: string;

  bugId: number;

  isFemale: string;

  genotype: number[];

  phenotype: string[];

  
}
