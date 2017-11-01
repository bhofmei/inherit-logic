export class Scenario{
  constructor(
    public label: string,
    public mutationFreq: number,
    public recombinationFreq: number,
    public purpose: string,
    public relevance: string,
    public startingPoint: string,
    public defaultLocation: string,
    public availableLocations: [string]
  ){ }
}
