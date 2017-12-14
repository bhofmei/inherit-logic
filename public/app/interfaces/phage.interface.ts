export interface Phage {
  strainNum: number;
  id: string;
}

export interface FridgePhage extends Phage {
  phageType: string;
  comment: string;
  parents?: Phage[];
}

export interface ExperimentPhage extends Phage {
    numPhage: number;
}

export interface GenotypePhage{
  shifts: any[];
  deletion: number[];
  parents: Phage[];
  src?: string;
}
