import { ExperimentPhage, GenotypePhage, Phage } from './phage.interface';

export interface _experimentInput {
  lawnType: string;
    specials: Object;
  location: string;
  scenarioData: string;
  capacity: number;
}

export interface plateInput extends _experimentInput {
  phage1: ExperimentPhage;
  phage2: ExperimentPhage;
}

export interface _genotype {
  shifts: number[];
  deletion: number[];
}
export interface plateResults {
  full: boolean;
  smallPlaque: number[];
  largePlaque: number[];
  genotypes: _genotype[];
  parents: Phage[];
}

export interface plexerInput extends _experimentInput {
  rowPhage: ExperimentPhage[];
  colPhage: ExperimentPhage[];
}
