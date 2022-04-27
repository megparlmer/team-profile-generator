const Engineer = require('../lib/Engineer');

//test for generating engineer class
test('testing to see if engineer class generates', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe('object');
})

//test for getGithub() method
test('testing for getGithub() method', () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toBe('marleywarrior123');
})

//getRole() method should override to return engineer
test('test for getRole() to return engineer', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
})