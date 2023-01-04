const Intern = require("../lib/Intern");

test("can set school with constructor", () => {
  const testValue = "UTA";
  const employee = new Intern("Fix", 1, "test@test.com", testValue);
  expect(employee.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const employee = new Intern("Fix", 1, "test@test.com", "UTA");
  expect(employee.getRole()).toBe(testValue);
});

test("can get school withs getSchool()", () => {
  const testValue = "UTA";
  const employee = new Intern("Fix", 1, "test@test.com", testValue);
  expect(employee.getSchool()).toBe(testValue);
});
