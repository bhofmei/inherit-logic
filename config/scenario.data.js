module.exports = [
  {
    label: "Which phage is wild type?",
    fileCode: "CRK00",
    scenCode: "WTorMute",
    degOfDiff: "1",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Do both phage contain identical mutations?",
    fileCode: "CRK03",
    scenCode: "SameOrDiff1",
    degOfDiff: "12",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Identify phage with compensating frameshift mutations",
    fileCode: "CRK01",
    scenCode: "ThreeOther",
    degOfDiff: "11",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Recover each single mutant from a double mutant",
    fileCode: "CRK04",
    scenCode: "OneEach",
    degOfDiff: "20",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Map and order a series of deletions",
    fileCode: "CRK06",
    scenCode: "MapDelete",
    degOfDiff: "39",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Which of 3 mutations is between the other two",
    fileCode: "CRK05",
    scenCode: "WhoMiddle",
    degOfDiff: "30",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "How many mutations? (*HONORS*)",
    fileCode: "CRK11",
    scenCode: "HowMany",
    degOfDiff: "100",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Same or different KIND of mutation? (*HONORS*)",
    fileCode: "CRK10",
    scenCode: "SameOrDiff2",
    degOfDiff: "55",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Demonstrate codons consist of 3 bases",
    fileCode: "CRK08",
    scenCode: "ProveCode",
    degOfDiff: "40",
    helpMessage: "",
    mutationFreq: 0.0008,
    recombinationFreq: 0.25
  },
  {
    label: "Demonstrate and locate a STOP codon",
    fileCode: "CRK09",
    scenCode: "FindStop",
    degOfDiff: "50",
    helpMessage: "",
    mutationFreq: 0.0004,
    recombinationFreq: 0.04
  },
  {
    label: "Make mine a double",
    fileCode: "CRK07",
    scenCode: "CombineTwo",
    degOfDiff: "38",
    helpMessage: "",
    mutationFreq: 0.0008,
    recombinationFreq: 0.25
  }

];
