const Employee = require('../lib/Employee');
//check for name, ID, email, and role
//create test employee
const testEmployee = {
  name: 'Reiner',
  ID: '1',
  email: 'reiner@gmail.com',
  role: 'Employee'
};

test('tests for name, id, and email', () => {
  const name = 'Reiner';
  const ID = '1';
  const email = 'reiner@gmail.com';
  const employee = new Employee(name, ID, email);

  expect(employee.name).toBe('Reiner');
  expect(employee.ID).toBe('1');
  expect(employee.email).toBe('reiner@gmail.com');
  
})

//test to see if Employee parent class is generating
test('tests for Employee class', () => {
  const employee = new Employee(testEmployee);

  expect(typeof(employee)).toBe('object');
})

//tests for getName() method
test('tests for getName() method', () => {
  const name = 'Reiner';
  const employee = new Employee('Reiner');

  expect(employee.getName()).toBe('Reiner');
})

//test for getId() method
test('test for getId() method', () => {
  const ID = '1';
  const employee = new Employee('Reiner', ID);

  expect(employee.getId()).toBe('1');
}) 

//test for getEmail() method
test('test for getEmail() method', () => {
  const email = 'reiner@gmail.com';
  const employee = new Employee('Reiner', '1', email);

  expect(employee.getEmail()).toBe('reiner@gmail.com');
})

//test for getRole() method
test('test for getRole() method', () => {
  const role = 'Employee';
  const employee = new Employee('Reiner', '1', 'reiner@gmail.com', role);

  expect(employee.getRole()).toBe('Employee');
})