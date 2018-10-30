const scenEnum = require('./mendelpede.config');

module.exports = [
  {
    label: 'All Mendel',
    shortCode: 'Mendel',
    inheritType: 'mendel',
    scenType: scenEnum.SCENTYPE.SCEN,
    ordOfScen: 1
  },
  {
    label: 'Incomplete Dominance',
    shortCode: 'IncDom',
    inheritType: 'incDom',
    scenType: 'scenario',
    ordOfScen: 2
  },
  {
    label: 'Mitochondrial Inheritance',
    shortCode: 'Mito',
    inheritType: 'mito',
    scenType: 'scenario',
    ordOfScen: 3
  },
  {
    label: 'Autosomal Linkage',
    shortCode: 'AutoLink',
    inheritType: 'autoLink',
    scenType: 'scenario',
    ordOfScen: 4
  },
  {
    label: 'X-linkage',
    shortCode: 'XLink',
    inheritType: 'xLink',
    scenType: 'scenario',
    ordOfScen: 5
  },
  {
    label: 'Homozygous Dominant Lethality',
    shortCode: 'HomoDomLeth',
    inheritType: 'homoDomLeth',
    scenType: 'scenario',
    ordOfScen: 6
  },
  {
    label: 'Synthetic Lethality',
    shortCode: 'SynthLeth',
    inheritType: 'synthLeth',
    scenType: 'scenario',
    ordOfScen: 7
  },
  {
    label: 'Segregation Distortion',
    shortCode: 'SegDistort',
    inheritType: 'segDistort',
    scenType: 'scenario', 
    ordOfScen: 8
  },
  {
    label: 'Maternal Effect',
    shortCode: 'MatEffect',
    inheritType: 'matEffect',
    scenType: 'scenario',
    ordOfScen: 9
  },
  {
    label: 'Penetrance',
    shortCode: 'Penetrance',
    inheritType: 'penetrance',
    scenType: 'scenario',
    ordOfScen: 10
  },
  {
    label: 'Multiple Genes',
    shortCode: 'MultGenes',
    inheritType: 'multGenes',
    scenType: 'scenario',
    ordOfScen: 11
  },
  {
    label: 'Multiple Alleles',
    shortCode: 'MultAlleles',
    inheritType: 'multAlleles',
    scenType: 'scenario',
    ordOfScen: 12
  },
  {
    label: 'Discovery1',
    shortCode: 'Disc1',
    inheritType: 'mito',
    scenType: 'discovery',
    ordOfScen: 1
  },
  {
    label: 'Discovery2',
    shortCode: 'Disc2',
    inheritType: 'homoDomLeth',
    scenType: 'discovery',
    ordOfScen: 2
  },
  {
    label: 'Discovery3',
    shortCode: 'Disc3',
    inheritType: 'synthLeth',
    scenType: 'discovery',
    ordOfScen: 3
  },
  {
    label: 'Discovery4',
    shortCode: 'Disc4',
    inheritType: 'segDistort',
    scenType: 'discovery',
    ordOfScen: 4
  },
  {
    label: 'Discovery5',
    shortCode: 'Disc5',
    inheritType: 'penetrance',
    scenType: 'discovery',
    ordOfScen: 5
  },
  {
    label: 'Pathway1',
    shortCode: 'Path1',
    inheritType: 'epiDup',
    scenType: 'pathway',
    ordOfScen: 1
  },
  {
    label: 'Pathway2',
    shortCode: 'Path2',
    inheritType: 'epiComp',
    scenType: 'pathway',
    ordOfScen: 2
  },
  {
    label: 'Pathway3',
    shortCode: 'Path3',
    inheritType: 'epiRec',
    scenType: 'pathway',
    ordOfScen: 3
  },
  {
    label: 'Pathway4',
    shortCode: 'Path4',
    inheritType: 'epiDom',
    scenType: 'pathway',
    ordOfScen: 4
  },
  {
    label: 'Quiz1',
    shortCode: 'quiz1',
    inheritType: 'quiz',
    scenType: 'quiz',
    ordOfScen: 1
  },
  {
    label: 'Quiz2',
    shortCode: 'quiz2',
    inheritType: 'quiz',
    scenType: 'quiz',
    ordOfScen: 2
  }
]
