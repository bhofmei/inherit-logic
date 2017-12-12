import { Phage } from './phage.interface';

export interface Fridge {
  scenarioDetails: string;
  guesses: string;
  strains: Phage[];
  accessGranted: boolean;
  userId: number;
  scenCode: string;
}
