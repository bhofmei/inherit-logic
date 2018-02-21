export interface Phage {
  strainNum: number;
  id: string;
}

export interface FridgePhage extends Phage {
  phageType: string;
  comment: string;
  parents?: Phage[];
  submitted?: boolean;
}

export interface ExperimentPhage extends Phage {
    numPhage: number;
}

export interface GenotypePhage {
  shifts: number[];
  deletion: number[];
  parents: Phage[];
  src?: string;
}

export interface StudentPhage extends FridgePhage {
  mutationList: number[];
  deletion: number[];
  guesses?: boolean[];
}
