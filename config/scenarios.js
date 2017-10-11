module.exports = [
  {
    label: "Which phage is wild type?",
    fileCode: "CRK00",
    sceneCode: "WTorMute",
    degOfDiff: "1",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Do both phage contain identical mutations?",
    fileCode: "CRK03",
    sceneCode: "SameOrDiff1",
    degOfDiff: "12",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Identify phage with compensating frameshift mutations",
    fileCode: "CRK00",
    sceneCode: "ThreeOther",
    degOfDiff: "11",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Recover each single mutant from a double mutant",
    fileCode: "CRK04",
    sceneCode: "OneEach",
    degOfDiff: "20",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Map and order a series of deletions",
    fileCode: "CRK06",
    sceneCode: "MapDelete",
    degOfDiff: "39",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Which of 3 mutations is between the other two",
    fileCode: "CRK05",
    sceneCode: "WhoMiddle",
    degOfDiff: "30",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "How many mutations? (*HONORS*)",
    fileCode: "CRK11",
    sceneCode: "HowMany",
    degOfDiff: "100",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Same or different KIND of mutation? (*HONORS*)",
    fileCode: "CRK10",
    sceneCode: "SameOrDiff2",
    degOfDiff: "55",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Demonstrate codons consist of 3 bases",
    fileCode: "CRK08",
    sceneCode: "ProveCode",
    degOfDiff: "40",
    helpMessage: "",
    mutationFreq: 0.0008,
    recombinationFreq: 0.25
  },
  {
    label: "Demonstrate and locate a STOP codon",
    fileCode: "CRK09",
    sceneCode: "FindStop",
    degOfDiff: "50",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Make mine a double",
    fileCode: "CRK07",
    sceneCode: "CombineTwo",
    degOfDiff: "38",
    helpMessage: "",
    mutationFreq: 0.0008,
    recombinationFreq: 0.25
  }

];
