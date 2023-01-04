const Employee = require("../lib/Employee");

test("can create a new type of employee", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

test("can set name", () => {
  const name = "Josh";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("can set an id", () => {
  const testValue = 1;
  const employee = new Employee("Fix", testValue);
  expect(employee.id).toBe(testValue);
});

test("can set email", () => {
  const testValue = "test@test.com";
  const employee = new Employee("Fix", 1, testValue);
  expect(employee.email).toBe(testValue);
});

test("can get name with getName()", () => {
  const testValue = "Josh";
  const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test("can get id with getId()", () => {
  const testValue = 1;
  const employee = new Employee("Fix", testValue);
  expect(employee.getId()).toBe(testValue);
});

test("can get email with getEmail()", () => {
  const testValue = "test@test.com";
  const employee = new Employee("Fix", 1, testValue);
  expect(employee.getEmail()).toBe(testValue);
});

test("getRole() returns \"Employee\"", () => {
  const testValue = "Employee";
  const employee = new Employee("Josh", 1, "test@test.com");
  expect(employee.getRole()).toBe(testValue);
});
