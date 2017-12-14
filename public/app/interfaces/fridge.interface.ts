import { FridgePhage } from './phage.interface';

export interface Fridge {
  scenarioDetails: string;
  guesses: string;
  strains: FridgePhage[];
  accessGranted: boolean;
  userId: number;
  scenCode: string;
}
