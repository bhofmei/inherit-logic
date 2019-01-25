const courseEnum = {
  ALL: 0,
  OTHER: 1, // list for 'all' level but not 'grad' and 'undergrad'
  GRAD: 2,
  UNGRAD: 3
}

module.exports = [
  {
    label: 'All Mendel',
    shortCode: 'Mendel',
    inheritType: 'mendel',
    scenType: 'scenario',
    ordOfScen: 1,
    courseLevel: courseEnum.ALL
  },
  {
    label: 'Incomplete Dominance',
    shortCode: 'IncDom',
    inheritType: 'incDom',
    scenType: 'scenario',
    ordOfScen: 2,
    courseLevel: courseEnum.ALL
  },
  {
    label: 'Mitochondrial Inheritance',
    shortCode: 'Mito',
    inheritType: 'mito',
    scenType: 'scenario',
    ordOfScen: 3,
    courseLevel: courseEnum.GRAD
  },
  {
    label: 'Autosomal Linkage',
    shortCode: 'AutoLink',
    inheritType: 'autoLink',
    scenType: 'scenario',
    ordOfScen: 4,
    courseLevel: courseEnum.ALL
  },
  {
    label: 'X-linkage',
    shortCode: 'XLink',
    inheritType: 'xLink',
    scenType: 'scenario',
    ordOfScen: 5,
    courseLevel: courseEnum.ALL
  },
  {
    label: 'AA Lethality',
    shortCode: 'AALeth',
    inheritType: 'homoDomLeth',
    scenType: 'scenario',
    ordOfScen: 6,
    courseLevel: courseEnum.GRAD
  },
  {
    label: 'Synthetic Lethality aabb',
    shortCode: 'SynthLeth',
    inheritType: 'synthLeth',
    scenType: 'scenario',
    ordOfScen: 7,
    courseLevel: courseEnum.GRAD
  },
  {
    label: 'Segregation Distortion',
    shortCode: 'SegDistort',
    inheritType: 'segDistort',
    scenType: 'scenario',
    ordOfScen: 8,
    courseLevel: courseEnum.OTHER
  },
  {
    label: 'Maternal Effect',
    shortCode: 'MatEffect',
    inheritType: 'matEffect',
    scenType: 'scenario',
    ordOfScen: 9,
    courseLevel: courseEnum.OTHER
  },
  {
    label: 'Penetrance',
    shortCode: 'Penetrance',
    inheritType: 'penetrance',
    scenType: 'scenario',
    ordOfScen: 10,
    courseLevel: courseEnum.OTHER
  },
  {
    label: 'Multiple Genes',
    shortCode: 'MultGenes',
    inheritType: 'multGenes',
    scenType: 'scenario',
    ordOfScen: 11,
    courseLevel: courseEnum.UNGRAD
  },
  {
    label: 'Multiple Alleles',
    shortCode: 'MultAlleles',
    inheritType: 'multAlleles',
    scenType: 'scenario',
    ordOfScen: 12,
    courseLevel: courseEnum.UNGRAD
  },
  {
    label: 'Discovery1',
    shortCode: 'Disc1',
    inheritType: 'mito',
    scenType: 'discovery',
    ordOfScen: 1,
    courseLevel: courseEnum.UNGRAD
  },
  {
    label: 'Discovery2',
    shortCode: 'Disc2',
    inheritType: 'homoDomLeth',
    scenType: 'discovery',
    ordOfScen: 2,
    courseLevel: courseEnum.UNGRAD
  },
  {
    label: 'Discovery3',
    shortCode: 'Disc3',
    inheritType: 'synthLeth',
    scenType: 'discovery',
    ordOfScen: 3,
    courseLevel: courseEnum.UNGRAD
  },
  {
    label: 'Discovery4',
    shortCode: 'Disc4',
    inheritType: 'segDistort',
    scenType: 'discovery',
    ordOfScen: 4,
    courseLevel: courseEnum.UNGRAD
  },
  /*{
    label: 'Discovery5',
    shortCode: 'Disc5',
    inheritType: 'penetrance',
    scenType: 'discovery',
    ordOfScen: 5,
    courseLevel: courseEnum.UNGRAD
  },*/
  {
    label: 'Mitochondrial or Maternal Effect',
    shortCode: 'MitoMatEffect',
    inheritType: 'mitoMatEffect',
    scenType: 'discovery',
    ordOfScen: 5,
    courseLevel: courseEnum.UNGRAD
  },
  {
    label: 'Mystery',
    shortCode: 'Mystery',
    inheritType: 'mystery',
    scenType: 'discovery',
    ordOfScen: 6,
    courseLevel: courseEnum.ALL
  },
  {
    label: 'Pathway1',
    shortCode: 'Path1',
    inheritType: 'epiDup',
    scenType: 'pathway',
    ordOfScen: 1,
    courseLevel: courseEnum.ALL
  },
  {
    label: 'Pathway2',
    shortCode: 'Path2',
    inheritType: 'epiComp',
    scenType: 'pathway',
    ordOfScen: 2,
    courseLevel: courseEnum.ALL
  },
  {
    label: 'Pathway3',
    shortCode: 'Path3',
    inheritType: 'epiRec',
    scenType: 'pathway',
    ordOfScen: 3,
    courseLevel: courseEnum.ALL
  },
  {
    label: 'Pathway4',
    shortCode: 'Path4',
    inheritType: 'epiDom',
    scenType: 'pathway',
    ordOfScen: 4,
    courseLevel: courseEnum.ALL
  },
  {
    label: 'Quiz1',
    shortCode: 'quiz1',
    inheritType: 'quiz',
    scenType: 'quiz',
    ordOfScen: 1,
    courseLevel: courseEnum.ALL
  },
  {
    label: 'Quiz2',
    shortCode: 'quiz2',
    inheritType: 'quiz',
    scenType: 'quiz',
    ordOfScen: 2,
    courseLevel: courseEnum.ALL
  }
]
