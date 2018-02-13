import { FridgePhage, StudentPhage } from './phage.interface';
import { _User } from './user.interface';

export interface Fridge {
  scenarioDetails: string;
  guesses: string;
  strains: FridgePhage[];
  accessGranted: boolean;
  userId: number;
  scenCode: string;
}

export interface StudentFridge {
  owner: _User;
  scenario: {scenCode: string, label: string};
  strains?: StudentPhage[];
  accessGranted?: boolean;
  guesses?: string;
}
