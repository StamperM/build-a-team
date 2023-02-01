const Employee = require("./Employee.js");
const Manager = require("./Manager");
// office number is the length of 10
test("lenth of office number should be ten", () =>
  expect(Manager.office).toHaveLenght(10));
