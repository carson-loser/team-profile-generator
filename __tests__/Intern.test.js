const Intern = require('../lib/Intern');

it('can set school with constructor', () => {
  const tester = 'UTA';
  const employee = new Intern('Fix', 1, 'test@test1.com', tester);
  expect(employee.school).toBe(tester);
});

it('getRole() should return \'Intern\'', () => {
  const tester = 'Intern';
  const employee = new Intern('Fix', 1, 'test@test2.com', 'UTA');
  expect(employee.getRole()).toBe(tester);
});

it('can get school withs getSchool()', () => {
  const tester = 'UTA';
  const employee = new Intern('Fix', 1, 'test@test3.com', tester);
  expect(employee.getSchool()).toBe(tester);
});
