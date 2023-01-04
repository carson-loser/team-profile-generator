const Engineer = require('../lib/Engineer');

it('sets GitHUb account with constructor', () => {
  const tester = 'GitHubUser';
  const employee = new Engineer('Fix', 1, 'test@test1.com', tester);
  expect(employee.github).toBe(tester);
});

it('getRole() should return \'Engineer\'', () => {
  const tester = 'Engineer';
  const employee = new Engineer('Fix', 1, 'test@test2.com', 'GitHubUser');
  expect(employee.getRole()).toBe(tester);
});

it('can get GitHub username with getGithub()', () => {
  const tester = 'GitHubUser';
  const employee = new Engineer('Fix', 1, 'test@test3.com', tester);
  expect(employee.getGithub()).toBe(tester);
});
