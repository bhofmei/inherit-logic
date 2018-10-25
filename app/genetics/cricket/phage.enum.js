/* different kinds of frame shift mutations */
exports.MUTEKIND = {
  PLUSONE: 'plusOne',
  MINUSONE: 'minusOne'
};

/* is the ORF readable depending on which mutations exist */
exports.READABLE = {
  ANY: 'any',
  CAN: 'can',
  CANNOT: 'cannot'
};

/* different kinds of deletions */
exports.DELETEKIND = {
  OUTLEFT: 'outLeft',
  OUTRIGHT: 'outRight',
  INTERNAL: 'internal',
  DEFINED: 'defined'
};

/* In phage mutliple phage shifts, should they be the same size */
exports.SHIFTMIXED = {
  ALWAYS: 'always',
  NEVER: 'never',
  SOMETIMES: 'sometimes'
};

/* Phenotype of grown transformmed plants*/
exports.FRAMEPHENOTYPE = {
  FRAMESHIFTED: 'frameShifted',
  STOPPED: 'stopped',
  ALLTRANSLATED: 'allTranslated',
  DELETED: 'deleted'
};

/* Type of phage depending on when/where generated */
exports.PHAGETYPE = {
  REF: 'reference',
  UNKNOWN: 'unknown',
  EMPTY: 'empty',
  USER: 'user'
};

/* Different ways a user can call the plate */
exports.FRAMECALLER = {
  TRUTH: 'truth',
  USER: 'user',
  OTHER: 'other'
};
