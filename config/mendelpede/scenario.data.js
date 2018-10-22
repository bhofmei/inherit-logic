const scenEnum = require('./mendelpede.config');

module.exports = [
  {
    label: 'All Mendel',
    shortCode: 'Mendel',
    inheritType: 'mendel',
    scenType: scenEnum.SCENTYPE.SCEN
  },
  {
    label: 'Incomplete Dominance',
    shortCode: 'IncDom',
    inheritType: 'incDom',
    scenType: 'scenario'
  },
  {
    label: 'Mitochondrial Inheritance',
    shortCode: 'Mito',
    inheritType: 'mito',
    scenType: 'scenario'
  },
  {
    label: 'Autosomal Linkage',
    shortCode: 'AutoLink',
    inheritType: 'autoLink',
    scenType: 'scenario'
  },
  {
    label: 'X-linkage',
    shortCode: 'XLink',
    inheritType: 'xLink',
    scenType: 'scenario'
  },
  {
    label: 'Homozygous Dominant Lethality',
    shortCode: 'HomoDomLeth',
    inheritType: 'homoDomLeth',
    scenType: 'scenario'
  },
  {
    label: 'Synthetic Lethality',
    shortCode: 'SynthLeth',
    inheritType: 'synthLeth',
    scenType: 'scenario'
  },
  {
    label: 'Segregation Distortion',
    shortCode: 'SegDistort',
    inheritType: 'segDistort',
    scenType: 'scenario'
  },
  {
    label: 'Maternal Effect',
    shortCode: 'MatEffect',
    inheritType: 'matEffect',
    scenType: 'scenario'
  },
  {
    label: 'Penetrance',
    shortCode: 'Penetrance',
    inheritType: 'penetrance',
    scenType: 'scenario'
  },
  {
    label: 'Multiple Genes',
    shortCode: 'MultGenes',
    inheritType: 'multGenes',
    scenType: 'scenario'
  },
  {
    label: 'Multiple Alleles',
    shortCode: 'MultAllele',
    inheritType: 'multAllele',
    scenType: 'scenario'
  },
  {
    label: 'Discovery1',
    shortCode: 'Disc1',
    inheritType: 'mito',
    scenType: 'discovery'
  },
  {
    label: 'Discovery2',
    shortCode: 'Disc2',
    inheritType: 'homoDomLeth',
    scenType: 'discovery'
  },
  {
    label: 'Discovery3',
    shortCode: 'Disc3',
    inheritType: 'synthLeth',
    scenType: 'discovery'
  },
  {
    label: 'Discovery4',
    shortCode: 'Disc4',
    inheritType: 'segDistort',
    scenType: 'discovery'
  },
  {
    label: 'Discovery5',
    shortCode: 'Disc5',
    inheritType: 'penetrance',
    scenType: 'discovery'
  },
  {
    label: 'Discovery6',
    shortCode: 'Disc6',
    inheritType: 'martian',
    scenType: 'discovery'
  },
  {
    label: 'Pathway1',
    shortCode: 'Path1',
    inheritType: 'epiDup',
    scenType: 'pathway'
  },
  {
    label: 'Pathway2',
    shortCode: 'Path2',
    inheritType: 'epiComp',
    scenType: 'pathway'
  },
  {
    label: 'Pathway3',
    shortCode: 'Path3',
    inheritType: 'epiRec',
    scenType: 'pathway'
  },
  {
    label: 'Pathway4',
    shortCode: 'Path4',
    inheritType: 'epiDom',
    scenType: 'pathway'
  },
  {
    label: 'Quiz1',
    shortCode: 'quiz1',
    inheritType: 'quiz',
    scenType: 'quiz'
  },
  {
    label: 'Quiz2',
    shortCode: 'quiz2',
    inheritType: 'quiz',
    scenType: 'quiz'
  }
]
