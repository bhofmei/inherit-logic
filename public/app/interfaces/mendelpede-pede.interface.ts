import { _User } from './user.interface';

/**
 * A Mendelpede
 */
export interface MendelpedePede {
  /**
   * User id associated with mendelpede
   */
  userId: number;

  /**
   * id of the mendelpede 
   */
  id: number;

  /**
   * Scenario code this mendelpede belongs to
   */
  scenCode: string;

  /**
   * bugId of the mendelpede
   */
  bugID: number;

  /**
   * Is the mendelpede female?'F':'M'
   */
  isFemale: string;

  /**
   * genotype of the mendelpede
   */
  genotype: number[];

  /**
   * phenotype of the mendelpede
   */
  phenotype: string[];

  /**
   * If this is one of the original six mendelpedes, false else true
   */
  canDelete?: boolean
}
