/* Cricket scenario default data */
module.exports = {
  geneLength: 350,
  /*deleteSizes: [50, 50, 50, 95, 95, 95, 140, 155],
  deleteSpots: [-15, 10, 35, 60, 85, 110, 135, 160, 185, 210],*/
  deleteSizes: [50, 50, 50, 90, 90, 100, 140, 160],
  deleteSpots: [-10, 10, 40, 60, 80, 110, 130, 160, 190, 210],
  maxDeleteTries: 5000,
  maxFrameTries: 300,
  maxMuteTries: 200,
  shiftOkDist: 25,
  shiftMin: 18,
  muteOkDist: 12,
  recFrame: 1,
  wildtypePhage: '{"numToMake": 1, "isWildType": true, "deletion": false, "comment": "Wild type phage"}',
  frameShiftPhage: '{"numToMake": 1, "isWildType": false, "frameshifts" : {"howMany" : [1,1], "mixed": "never", "readable": "any", "frameChoice": 0}, "deletion": false, "comment": "Mutant phage containing a single frame shift mutation"}',
  mutationFreq: 0.0004,
  recombinationFreq: 0.04,
  gcProb: 72,
  minStops: 10,
  intraMuteDist: [10, 80],
  interMuteDist: -1,
  probDeletion: 0.005,
  probRadSurvive: 0.01,
  plateCapacity: 1500, // only used for testing
  plexerCapcaity: 200, // only used for testing
  /* fridge config */
  fridge: {
    nShelves: 32,
    nSpots: 16
  },
  createDeletionModel: false,
  deletionGuessLength: 5
};
