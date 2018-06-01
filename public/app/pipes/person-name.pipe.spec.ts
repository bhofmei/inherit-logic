import { PersonNamePipe } from './person-name.pipe';

describe('Person Name Pipe', ()=>{
  let pipe = new PersonNamePipe();

  it('should print name normal', ()=>{
    let person = {firstName: 'Mickey', lastName: 'Mouse'};
    expect(pipe.transform(person, false)).toBe('Mickey Mouse');
  }); // end should print name normal

  it('should print name reverse', ()=>{
    let person = {firstName: 'Mickey', lastName: 'Mouse'};
    expect(pipe.transform(person, true)).toBe('Mouse, Mickey');
  }); // end should print name reverse

  it('should print first name only normal', ()=>{
    let person = {firstName: 'Mickey', lastName: undefined};
    expect(pipe.transform(person, false)).toBe('Mickey');
  }); // end should print first name only normal

  it('should print first name only reverse', ()=>{
    let person = {firstName: 'Mickey', lastName: undefined};
    expect(pipe.transform(person, true)).toBe('Mickey');
  }); // end should print first name only reverse

  it('should print last name only normal', ()=>{
    let person = {firstName: undefined, lastName: 'Mouse'};
    expect(pipe.transform(person, false)).toBe('Mouse');
  }); // end should print last name only normal

  it('should print last name only reverse', ()=>{
    let person = {firstName: undefined, lastName: 'Mouse'};
    expect(pipe.transform(person, true)).toBe('Mouse');
  }); // end should print last name only reverse

  it('should print empty string', ()=>{
    let person = {name: 'Goofy'};
    expect(pipe.transform(person, false)).toBe('');
    expect(pipe.transform(person, true)).toBe('');
  }); // end should print empty string
}); // end Person Name Pipe
