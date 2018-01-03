import { FridgePhage, StudentPhage } from './phage.interface';

export interface Fridge {
  scenarioDetails: string;
  guesses: string;
  strains: FridgePhage[];
  accessGranted: boolean;
  userId: number;
  scenCode: string;
}

export interface StudentFridge {
  owner: { name: string, userId: number };
  scenario: {scenCode: string, label: string};
  strains?: StudentPhage[];
  accessGranted?: boolean;
  guesses?: string;
}
