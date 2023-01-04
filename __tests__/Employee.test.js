const Employee = require('../lib/Employee');

it('can create a new type of employee', () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe('object');
});

it('can set name', () => {
  const name = 'Josh';
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

it('can set an id', () => {
  const tester = 1;
  const employee = new Employee('Fix', tester);
  expect(employee.id).toBe(tester);
});

it('can set email', () => {
  const tester = 'test@test1.com';
  const employee = new Employee('Fix', 1, tester);
  expect(employee.email).toBe(tester);
});

it('can get name with getName()', () => {
  const tester = 'Josh';
  const employee = new Employee(tester);
  expect(employee.getName()).toBe(tester);
});

it('can get id with getId()', () => {
  const tester = 1;
  const employee = new Employee('Fix', tester);
  expect(employee.getId()).toBe(tester);
});

it('can get email with getEmail()', () => {
  const tester = 'test@test2.com';
  const employee = new Employee('Fix', 1, tester);
  expect(employee.getEmail()).toBe(tester);
});

it('getRole() returns \'Employee\'', () => {
  const tester = 'Employee';
  const employee = new Employee('Josh', 1, 'test@test3.com');
  expect(employee.getRole()).toBe(tester);
});
