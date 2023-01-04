const Engineer = require("../lib/Engineer");

test("sets GitHUb account with constructor", () => {
  const testValue = "GitHubUser";
  const employee = new Engineer("Fix", 1, "test@test.com", testValue);
  expect(employee.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const employee = new Engineer("Fix", 1, "test@test.com", "GitHubUser");
  expect(employee.getRole()).toBe(testValue);
});

test("can get GitHub username with getGithub()", () => {
  const testValue = "GitHubUser";
  const employee = new Engineer("Fix", 1, "test@test.com", testValue);
  expect(employee.getGithub()).toBe(testValue);
});
