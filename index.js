// @ts-check
const inquirer = require("inquirer");
const fs = require("fs");

const { Employee } = require("./lib/Employee");
const { Intern } = require("./lib/Intern");
const { Engineer } = require("./lib/Engineer");
const { Manager } = require("./lib/Manager.js");

// the questions for inquirer
const questions = require("./lib/questions.js");

inquirer.createPromptModule();
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

/**
 * @typedef {Object} Answers
 * @property {string} name
 * @property {string} id
 * @property {string} email
 * @property {"Manager" | "Engineer" | "Intern"} defineRole
 * @property {string | undefined} office
 * @property {string | undefined} github
 * @property {string | undefined} school
 */

/**
 * will create new employees
 * @param {Answers} answers
 * @returns {Employee}
 */
const newEmployee = (answers) => {
  const employee = answers.defineRole === "Manager" ? new Manager(answers.name, answers.id, answers.email, answers.office) 
    : answers.defineRole === "Engineer" ? new Engineer(answers.name, answers.id, answers.email, answers.github) 
    : answers.defineRole === "Intern" ? new Intern(answers.name, answers.id, answers.email, answers.school) 
    : null;

  if (!employee) {
    throw new Error("Invalid employee type")
  }

  return employee
};

/**
 * @param {Employee[]} employees 
 */
function writeHTML (employees)  {
  const teamHeader = `<nav><h1> My Team</h1></nav>`;
  const employeeCards = employees.map((employee) => employee.render()).join(" ");
  const htmlBody = `${teamHeader} ${employeeCards}`;

  console.log(htmlBody)
  
  fs.writeFile("./dist/index.html", htmlBody, "utf8", (error) => {
    if (error) {
      console.log(error);
      throw error
    }
  });
}

// start program
async function init() {
  /**
   * @typedef {Object} Response
   * @property {Answers[]} employees
   */

  /* @type {Response} */
  const answers = await inquirer.prompt(questions)

  /* @type {Answers[]} */
  const employeeAnswers = answers.employees;

  // this will create an employee and and push it to the employee list.
  /* @type {Employee[]} */
  const employees = employeeAnswers.map(newEmployee);

  console.log("this is the list", employees);

  // should create a card for each employee.
  writeHTML(employees);
}

init();
// end program
