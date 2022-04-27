const Manager = require('../lib/Manager');

const testManager = {
    officeNumber: '4'
};

//testing for Manager class
test('tests to see if class can be generated', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe('object');
});

//testing for officeNumber
test('test to check for officeNumber', () => {
    const officeNumber = '4';
    const manager = new Manager('Reiner', '1', 'reiner@gmail.com', officeNumber);

    expect(manager.officeNumber).toBe('4');
})

//testing for getRole() method(should override to return 'Manager')
test('tests for getRole() method', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
})