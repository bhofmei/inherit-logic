import { PeopleListNamesPipe } from './people-list-names.pipe';

describe('People List Names Pipe', ()=>{
  let pipe = new PeopleListNamesPipe();

  it('should have empty string for empty list', ()=>{
    let emptyList = [];
    expect(pipe.transform(emptyList, false)).toBe('');
    expect(pipe.transform(emptyList, true)).toBe('');
  }); // end should have empty string for empty list

  describe('Test one person in list', ()=>{
    let personList = [{firstName: 'Mickey', lastName: 'Mouse'}];
    it('should print out normal', ()=>{
      expect(pipe.transform(personList, false)).toBe('Mickey Mouse');
    }); // end should print out normal
    it('should print out reverse', ()=>{
      expect(pipe.transform(personList, true)).toBe('Mouse, Mickey');
    }); // should print out reverse

    let missingFirstList = [{lastName: 'Mouse'}];
    it('should only print last name, normal', ()=>{
       expect(pipe.transform(missingFirstList, false)).toBe('Mouse');
    }); // end should only print last name, normal
    it('should only print last name, reverse', ()=>{
       expect(pipe.transform(missingFirstList, true)).toBe('Mouse');
    }); // end should only print last name, reverse

    let missingLastList = [{firstName: 'Mickey'}];
    it('should only print first name, normal', ()=>{
       expect(pipe.transform(missingLastList, false)).toBe('Mickey');
    }); // end should only print first name, normal
    it('should only print first name, reverse', ()=>{
       expect(pipe.transform(missingLastList, true)).toBe('Mickey');
    }); // end should only print first name, reverse

    let missingBothList = [{name: 'Unused'}];
    it('should not print name', ()=>{
      expect(pipe.transform(missingBothList, false)).toBe('');
      expect(pipe.transform(missingBothList, true)).toBe('');
    }); // should not print name
  }); // end Test one person in list

  describe('Test two people in list', ()=>{
    let peopleList = [{firstName: 'Mickey', lastName: 'Mouse'}, {firstName: 'Donald', lastName: 'Duck'}];

    it('should print out normal', ()=>{
      expect(pipe.transform(peopleList, false)).toBe('Mickey Mouse, Donald Duck');
    }); // end should print out normal
    it('should print out reverse', ()=>{
      expect(pipe.transform(peopleList, true)).toBe('Mouse, Mickey; Duck, Donald');
    }); // end should print out reverse

    let missingLastList = [{firstName: 'Mickey'}, {firstName: 'Donald', lastName: 'Duck'}];
    it('should print first name normal', ()=>{
      expect(pipe.transform(missingLastList, false)).toBe('Mickey, Donald Duck');
    }); // end should print first name normal
    it('should print first name reverse', ()=>{
      expect(pipe.transform(missingLastList, true)).toBe('Mickey; Duck, Donald');
    }); // end should print first name reverse

    let missingFirstList = [{firstName: 'Mickey', lastName: 'Mouse'}, {lastName: 'Duck'}];
    it('should print last name normal', ()=>{
      expect(pipe.transform(missingFirstList, false)).toBe('Mickey Mouse, Duck');
    }); // end should print last name normal
    it('should print last name reverse', ()=>{
      expect(pipe.transform(missingFirstList, true)).toBe('Mouse, Mickey; Duck');
    }); // end should print last name reverse

    let missingBothList = [{firstName: 'Mickey'}, {lastName: 'Duck'}, {name: 'Goofy'}];
    it('should only print given info normal', ()=>{
      expect(pipe.transform(missingBothList, false)).toBe('Mickey, Duck');
    }); // end should only print given info normal
    it('should only print given info reverse', ()=>{
      expect(pipe.transform(missingBothList, true)).toBe('Mickey; Duck');
    }); // end should only print given info reverse

  }); // end Test two people in list
}); // end People List Names Pipe
