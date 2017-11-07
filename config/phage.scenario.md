# Phage for Scenarios
## Defaults
- intraMuteDist: [10, 80]

WT (WildType)
- numToMake: 1,1
- isWildType: true
- frameShifts: null
- makeDelete: null
- comments: Wild type phage

FS (FrameShift)
- numToMake 1,1
- isWildType: false
- frameShifts
  - howMany: 1,1
  - mixed: never
  - readable: any read
  - frameChoice: 0
- makeDelete: null
- comment: Mutant phage containing a single frame shift mutation

## Same or Diff 1 (SameOrDiff1)
### Reference Phage
WT
## Other Phage
null
### Alternate Phage
- numToMake: 2,2
- isWildtype: false
- frameShifts
  - howMany: 1,1
  - mixed: always
  - readable: any read
  - frameChoice: void
- makeDelete: null
- comment: Phage containing a single frameshift mutation
- altStyle: -1

## WT or Mutant(WTorMute)
### Reference Phage
null
### Other Phage
- numToMake: 1,1
- isWildType: true
- frameShifts: null
- makeDelete: null
- comment: Determine whether this phage has a wild type or mutant phenotype
### Alternative Phage
- numToMake: 1,1
- isWildType: false
- frameShifts
  - howMany 1,1
  - mixed: always
  - readable: any read
  - frameChoice: 0
- makeDelete: null
- comment: determine whether this phage has a wild type or mutant phenotype
- altStyle: 2

## Three other (ThreeOther)
### Reference Phage
WT
### Other Phage
FS
### Alternative Phage
null

## One Each (OneEach)
### Reference Phage
WT
### Other Phage
- numToMake: 1,1
- isWildType: false
- frameShifts
  - howMany: 2,2
  - mixed: always
  - readable: can read
  - frameChoice: 0
- makeDelete: null
- comment: Mutant phage bearing compensating +1 and -1 frameshifts resulting in successful translation and a wild type phenotype
### Alternative Phage
null

## Map Delete (MapDelete)
### Reference Phage
WT
### Other Phage
- numToMake: 8,8
- isWildType: false
- frameShifts: null
- makeDelete
  - delKind: choose
- comment: Phage containing a deletion of more than 10 nucleotides
### Alternative Phage
null

## Who Middle(WhoMiddle)
** intraMuteDistance: 20, 150 **
### Reference Phage
WT
### Other Phage
- numToMake: 3,3
- isWildType: false
- frameShifts
  - howMany 1,1
  - mixed: never
  - readable: any read
  - frameChoice: 1
- makeDelete: null
- comment: Mutant phage containing a single +1 frameshift mutation
### Alternative Phage
null

## How Many (HowMany)
** intraMuteDistance: 50, 150 **
### Reference Phage
1. Phage 1
  - numToMake: 1,1
  - isWildType: true
  - frameShifts: null
  - makeDelete: null
  - comment: Wild type phage
2. Phage 2
  - numToMake: 1,1
  - isWildType: false\
  - frameShifts
    - howMany: 1,1
    - mixed: never
    - readable: any read
    - frameChoice: -1
  - makeDelete: null
  - comment: Mutant phage containing a single -1 frameshift
### Other Phage
- numToMake: 1,1
- isWildType: false
- frameShifts
  - howMany: 1,2
  - mixed: never
  - readable: any read
  - frameChoice: 1
- makeDelete: null
- comment: Mutant phage containing one OR two +1 frameshift mutations
### Alternative Phage
null

## Same of Diff 2 (SameOrDiff2)
### Reference Phage
WT
### Other Phage
- numToMake: 2,2
- isWildType: false
- frameShifts
  - howMany: 1,1
  - mixed: never
  - readable: any read
  - frameChoice: 0
- makeDelete: null
- comment: Mutant phage containing a single frameshift mutation
### Alternative Phage
null

## Prove Code (ProveCode)
### Reference Phage
WT
### Other Phage
FS
### Alternative Phage
null

## Find Stop (FindStop)
### Reference Phage
WT
### Other Phage
FS
### Alternative Phage
null

## Combine Two (CombineTwo)
** InterMuteDist: 220 ** (starting phage mutations must be 100 nt apart)
### Reference Phage
WT
### Other Phage
- numToMake: 2,2
- isWildType: false
- frameShifts
  - howMany: 1,1
  - mixed: never
  - readable: any read
  - frame choice: 1
- makeDelete: null
- comment: Mutant phage containing a single +1 frameshift mutation
### Alternative Phage
null