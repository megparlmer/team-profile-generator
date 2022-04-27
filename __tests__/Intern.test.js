const Intern = require('../lib/Intern');

//test to see the class is generating
test('test to check that the class is generating', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe('object');
})

//test intern school
test('test for intern school', () => {
    const school = 'Survey Corps';
    const intern = new Intern('Reiner', '', 'reiner@gmail.com', school);

    expect(intern.school).toBe('Survey Corps');
})

//testing for getSchool method
test('test for getSchool() method', () => {
    const intern = new Intern();

    expect(intern.getSchool()).toBe('Survey Corps');
})

//test to override getRole()
test('test to override getRole() method', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
})