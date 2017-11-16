// not a mongoose model since we only have 2 bacteria types
const plateEnum = require('../genetics/plate.enum');

module.exports = {
  "B": {
    kind: plateEnum.BACTTYPE.PERM,
    wtPhenotype: plateEnum.PLAQUETYPE.SMALL,
    mutPhenotype: plateEnum.PLAQUETYPE.LARGE
  },
  "K": {
    kind: plateEnum.BACTTYPE.RESTR,
    wtPhenotype: plateEnum.PLAQUETYPE.SMALL,
    mutPhenotype: plateEnum.PLAQUETYPE.DEAD
  }
};
