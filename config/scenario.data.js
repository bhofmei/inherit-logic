const scenDefaults = require('./scenario.config');

module.exports = [
  {
    label: "Which phage is wild type?",
    fileCode: "CRK00",
    scenCode: "WTorMute",
    degOfDiff: 1,
    mutationFreq: scenDefaults.mutationFreq,
    recombinationFreq: scenDefaults.recombinationFreq,
    gcProb: scenDefaults.gcProb,
    minStops: scenDefaults.minStops,
    intraMuteDist: scenDefaults.intraMuteDist,
    interMuteDist: scenDefaults.interMuteDist,
    createDeletionModel: scenDefaults.createDeletionModel,
    purpose: "Determine which of two phage is wild type and which mutant for rIIb function.",
    relevance: "You must walk before you can run. This scenario acquaints you with the basic tools of your new trade. You'll meet with the bacterial strains and the two phage phenotypes.",
    startingPoint: "You are given two phage stocks. One of them has a wild-type phenotype, the other lacks rIIb gene function. Determine which is which. You may want to view the tutorial information about the rIIb phage system.",
    referencePhage: [],
    otherPhage: ['{"numToMake": 1, "isWildType": true, "comment": "Determine whether this phage has a wild type or mutant phenotype"}','{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "always", "readable": "any", "frameChoice": 0}, "deletion": false, "comment": "Determine whether this phage has a wild type or mutant phenotype"}']
  },
  {
    label: "Do both phage contain identical mutations?",
    fileCode: "CRK03",
    scenCode: "SameOrDiff1",
    degOfDiff: 12,
    mutationFreq: scenDefaults.mutationFreq,
    recombinationFreq: scenDefaults.recombinationFreq,
    gcProb: scenDefaults.gcProb,
    minStops: scenDefaults.minStops,
    intraMuteDist: scenDefaults.intraMuteDist,
    interMuteDist: scenDefaults.interMuteDist,
    createDeletionModel: scenDefaults.createDeletionModel,
    purpose: "Determine whether two mutant phage contain identical mutations.",
    relevance: "As you get to more advanced scenarios, a key theme will emerge a la Sesame Street's 'One of these things is not like the other'. It is critical to be able to determine whether a given phage is like or unlike another, and phenotype alone doesn't necessarily tell you about genotype.",
    startingPoint: "You are given two mutant phage stocks. Your task is to determine whether they both contain identical or different mutations (if different, they both have they're both addition or deletion mutations). In some ways, getting this foundational concept is the toughest task you'll do...You might want to read and think about the section entitled 'Hypothesis testing and problem solving' accessible from the front page of the website; this contains some general strategies for approaching difficult problems.",
    referencePhage: [scenDefaults.wildtypePhage],
    otherPhage: ['{"numToMake": -2, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "always", "readable": "any"}, "deletion": false, "comment": "Phage containing a single frameshift mutation"}']
  },
  {
    label: "Identify phage with compensating frameshift mutations",
    fileCode: "CRK01",
    scenCode: "ThreeOther",
    degOfDiff: 11,
    mutationFreq: scenDefaults.mutationFreq,
    recombinationFreq: scenDefaults.recombinationFreq,
    gcProb: scenDefaults.gcProb,
    minStops: scenDefaults.minStops,
    intraMuteDist: scenDefaults.intraMuteDist,
    interMuteDist: scenDefaults.interMuteDist,
    createDeletionModel: scenDefaults.createDeletionModel,
    purpose: "Generating and recovering new phage mutants. Starting with a phage mutant in its rIIb gene, identify three mutants of this phage that contain further mutations that restore it to wild type phenotype.",
    relevance: "Of critical importance to your overall goal here is generating new mutations and understanding their relevance to old ones. Just because a phage starts out with a certain genotype doesn't mean all its progeny will. Never forget that the billions of phage in each of your stocks arose from a founder individual through DNA replication. Errors in DNA copying will give rise to new mutations, which may confer new phenotypes.",
    startingPoint: "Starting with a wild type phage and a mutant bearing a single frameshift mutation, identify three phage that contain the original frameshift as well as a compensating mutation. Argue that each of these is probably different.",
    referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage],
    otherPhage: []
  },
  {
    label: "Recover each single mutant from a double mutant",
    fileCode: "CRK04",
    scenCode: "OneEach",
    degOfDiff: 20,
    mutationFreq: scenDefaults.mutationFreq,
    recombinationFreq: scenDefaults.recombinationFreq,
    gcProb: scenDefaults.gcProb,
    minStops: scenDefaults.minStops,
    intraMuteDist: scenDefaults.intraMuteDist,
    interMuteDist: scenDefaults.interMuteDist,
    purpose: "",
    relevance: "",
    startingPoint: "",
    createDeletionModel: scenDefaults.createDeletionModel,
    referencePhage: [scenDefaults.wildtypePhage, '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "always", "readable": "can", "frameChoice": 0}, "deletion": false, "comment": "Mutant phage bearing compensating +1 and -1 frameshifts resulting in successful translation and a wild type phenotype"}'],
    otherPhage: []
  },
  {
    label: "Map and order a series of deletions",
    fileCode: "CRK06",
    scenCode: "MapDelete",
    degOfDiff: 39,
    mutationFreq: scenDefaults.mutationFreq,
    recombinationFreq: scenDefaults.recombinationFreq,
    gcProb: scenDefaults.gcProb,
    minStops: scenDefaults.minStops,
    intraMuteDist: scenDefaults.intraMuteDist,
    interMuteDist: scenDefaults.interMuteDist,
    createDeletionModel: true,
    purpose: "Master the fine art of mapping deletions and roughly defining their endpoints. Take 8 phage containing deletions and figure out what DNA segments are removed in each.",
    relevance: "Deletion mapping was an essential tool in learning several key facts about the nature of genes and DNA, largely in work done by Sydney Brenner (see the Musty Texts section for more info about this work, which could provide you guidance for this scenario). With deletions in hand, one can proceed to very rapidly determine the general location of a new point mutation. In later scenarios, you'll want to know things about where mutations are relative to one another, and the techniques you discovered in the 'Who's in the middle' scenario can be tedious with large numbers of mutants. Finding out which point mutations lie 'inside' which deletion can lift a lot of this burden for you. For this scenario, do NOT worry about reading frame; assume that every deletion removes vital amino acids.",
    startingPoint: "You are given 8 phage, each containing a deletion of more than 10 nucleotide (note that while we have been speaking of single nucleotide deletions as 'frameshifts', they are formally deletions, but here we're talking about chunks of 10 to 500 nucleotides gone).  The Data Table and tools in the Modeling room will probably be essential. This simulation will help you master the fine art of ordering deletions given a set of phage cross data. Note that for this simulation, any phage containing a deletion bigger than 1 nucleotide is considered to have a mutant phenoype, regardless of its final effect on reading frame.",
    referencePhage: [scenDefaults.wildtypePhage],
    otherPhage: ['{"numToMake": 8, "isWildType": false, "deletion": true, "comment": "Phage containing a deletion of more than 10 nucleotides"}']
  },
  {
    label: "Which of 3 mutations is between the other two",
    fileCode: "CRK05",
    scenCode: "WhoMiddle",
    degOfDiff: 30,
    mutationFreq: scenDefaults.mutationFreq,
    recombinationFreq: scenDefaults.recombinationFreq,
    gcProb: scenDefaults.gcProb,
    minStops: scenDefaults.minStops,
    interMuteDist: scenDefaults.interMuteDist,
    intraMuteDist: [20,150],
    createDeletionModel: scenDefaults.createDeletionModel,
    purpose: "Figure out which of three +1 frameshift mutations lies between the other two.",
    relevance: "There are several cases upcoming where you'll need to know where different phage sit relative to one another. With any luck, this scenario will also have you thinking carefully about the mechanism and consequences of recombination.",
    startingPoint: "Three phage, each containing a +1 frameshift mutation and a wild type phage just in case you want it. You may want to view the Recombination tutorial.",
    referencePhage: [scenDefaults.wildtypePhage],
    otherPhage: ['{"numToMake": 3, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletion": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}']
  },
  {
    label: "How many mutations? (*HONORS*)",
    fileCode: "CRK11",
    scenCode: "HowMany",
    degOfDiff: 100,
    mutationFreq: scenDefaults.mutationFreq,
    recombinationFreq: scenDefaults.recombinationFreq,
    gcProb: scenDefaults.gcProb,
    minStops: scenDefaults.minStops,
    interMuteDist: scenDefaults.interMuteDist,
    intraMuteDist: [50,150],
    createDeletionModel: scenDefaults.createDeletionModel,
    purpose: "Figure out how many mutations (all +1 frameshifts) a phage contains.",
    relevance: "To see just how good you are. Developing a successful strategy here requires you to integrate several of the concepts you've been exposed to so far.",
    startingPoint: "A mutant phage containing either 1 or 2 (+1) frameshift mutations. You are given a wild type phage and a phage known to contain a single -1 frameshift mutation as potentially helpful tools. For another bonus point, describe a strategy for figuring out whether a mutant contains 2 or 3 +1 frameshifts (but does NOT produce wild type phenotype).",
    referencePhage: [scenDefaults.wildtypePhage, '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": -1}, "deletion": false, "comment": "Mutant phage containing a single -1 frameshift"}'],
    otherPhage: ['{"numToMake": 1, "isWildType": "false", "frameshifts": {"howMany": [1,2], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletion": false, "comment": "Mutant phage containing one OR two +1 frameshift mutations"}']
  },
  {
    label: "Same or different KIND of mutation? (*HONORS*)",
    fileCode: "CRK10",
    scenCode: "SameOrDiff2",
    degOfDiff: 55,
    gcProb: 85,
    minStops: 3,
    mutationFreq: scenDefaults.mutationFreq,
    recombinationFreq: scenDefaults.recombinationFreq,
    intraMuteDist: scenDefaults.intraMuteDist,
    interMuteDist: scenDefaults.interMuteDist,
    createDeletionModel: scenDefaults.createDeletionModel,
    purpose: "Figure out whether two starting phage both contain mutations of like type (i.e. both +1) or opposite types (+1 and -1).",
    relevance: "Exercising your skills in mutant isolation and putting your understanding of frameshifts and translation to the test. Think hard and make sure your conclusions are airtight. To get credit, your strategy must be 'robust'--i.e. no matter where the two mutations are, no matter what the location of stop codons, your approach must be doomed to succeed!",
    startingPoint: "A wild type phage as reference, and two mutant phage containing different mutations that may or may not be of the same sign.",
    referencePhage: [scenDefaults.wildtypePhage],
    otherPhage: ['{"numToMake": 2, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 0}, "deletion": false, "comment": "Mutant phage containing a single frameshift mutation"}']
  },
  {
    label: "Demonstrate codons consist of 3 bases",
    fileCode: "CRK08",
    scenCode: "ProveCode",
    degOfDiff: 40,
    mutationFreq: 0.0008,
    recombinationFreq: 0.25,
    gcProb: 85,
    minStops: 3,
    intraMuteDist: scenDefaults.intraMuteDist,
    interMuteDist: scenDefaults.interMuteDist,
    createDeletionModel: scenDefaults.createDeletionModel,
    purpose: "Going for it--can you recapitulate the work of Crick et al.? Demonstrate that codons are comprised of three nucleotides. Check with your instructor to see whether you have to execute this exercise, or only to map out and write up a STRATEGY.",
    relevance: "Are you kidding? This observation, as well as insights the authors derived about stop codons and synonyms in the genetic code addressed some of the biggest questions in biology. Period.",
    startingPoint: "You are given a wild type phage and a mutant one containing a single frameshift mutation (exactly the pieces Crick et al. started with). Create a phage whose genotype and phenotype combine to strongly suggest that the code is made of 3 letter 'words'. (Consider: with a three-letter code, what are the consequences of adding or subtracting 1, 2 or 3 letters?). You do not have to execute this scenario, but you must submit a detailed, workable grant application. It should read like a normal write up, except for 'I would do...' and 'I would expect to observe...' will replace 'I did' and 'I observed'. Note: there's a trick to the final step that makes spotting the 'winning phage' more elegant. Your instructor would undoubtedly look very kindly upon those clever enough to perceive the problem and the elegant solution.",
    referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage],
    otherPhage: []
  },
  {
    label: "Demonstrate and locate a STOP codon",
    fileCode: "CRK09",
    scenCode: "FindStop",
    degOfDiff: 50,
    mutationFreq: scenDefaults.mutationFreq,
    recombinationFreq: scenDefaults.recombinationFreq,
    gcProb: scenDefaults.gcProb,
    minStops: scenDefaults.minStops,
    intraMuteDist: scenDefaults.intraMuteDist,
    interMuteDist: scenDefaults.interMuteDist,
    createDeletionModel: scenDefaults.createDeletionModel,
    purpose: "Ice the cake--combine your skills and insights to locate a stop (a.k.a. nonsense) codon. Report roughly where it is relevant to other mutations and how you know it's a STOP. Check with your instructor to see whether you need to COMPLETE this exercise or only to map out and write up a STRATEGY.",
    relevance: "While the Crick et al. paper's flagship result was the 3-letter code thing, this result was not wholly unanticipated (for example, a two letter code with 4 nucleotides can't code for 16 amino acids, whereas a 4-letter code could code for a whoppingly unnecessary 256. Where would you put your money?). However, a striking and admirable feature of this work was that they milked their observations and mighty brains for more, demonstrating that the code contained untranslatable words. Here, you can try to 'Be Like Crick'.",
    startingPoint: "A wild type phage and a phage known to contain a single frameshift mutation. Note: you will first need to develop a strategy for RECOGNIZING the presence of a stop codon; be assured you'll be creating a lot of strains for this scenario. You might want to brush up on the implications of stop codons by viewing the Translation tutorial.",
    referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage],
    otherPhage: []
  },
  {
    label: "Make mine a double",
    fileCode: "CRK07",
    scenCode: "CombineTwo",
    degOfDiff: 38,
    mutationFreq: 0.0008,
    recombinationFreq: 0.25,
    gcProb: scenDefaults.gcProb,
    minStops: scenDefaults.minStops,
    intraMuteDist: scenDefaults.intraMuteDist,
    interMuteDist: 220,
    createDeletionModel: scenDefaults.createDeletionModel,
    purpose: "Combine two different +1 mutations to create a doubly mutant phage. Pick it out from the morass of unrecombined wannabes.",
    relevance: "Before you can get to three, you must pass through two. Making a working, triple mutant phage is the easy part since you're asking for a wild type to arise. Making double mutants to serve as its parents is tougher, but a necessary step.",
    startingPoint: " A pair of phage, each containing a single, different +1 frameshift mutation. It may not be under the first rock you turn over; consider what the SuperPlexer might have to offer you.",
    referencePhage: [scenDefaults.wildtypePhage, '{"numToMake": 2, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 0}, "deletion": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}'],
    otherPhage: []
  }
];
