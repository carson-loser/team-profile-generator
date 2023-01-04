const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

it('can set office number with constructor', () => {
  const tester = 1;
  const employee = new Manager('Fix', 1, 'test@test1.com', tester);
  expect(employee.officeNumber).toBe(tester);
});

it('getRole() should return \'Manager\'', () => {
  const tester = 'Manager';
  const employee = new Manager('Fix', 1, 'test@test2.com', 5);
  expect(employee.getRole()).toBe(tester);
});

it('can get office number with getOffice()', () => {
  const tester = 1;
  const employee = new Manager('Foo', 1, 'test@tes3.com', tester);
  expect(employee.getOfficeNumber()).toBe(tester);
});
