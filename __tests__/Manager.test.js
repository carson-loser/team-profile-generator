const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("can set office number with constructor", () => {
  const testValue = 1;
  const employee = new Manager("Fix", 1, "test@test.com", testValue);
  expect(employee.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const employee = new Manager("Fix", 1, "test@test.com", 5);
  expect(employee.getRole()).toBe(testValue);
});

test("can get office number with getOffice()", () => {
  const testValue = 1;
  const employee = new Manager("Foo", 1, "test@test.com", testValue);
  expect(employee.getOfficeNumber()).toBe(testValue);
});
