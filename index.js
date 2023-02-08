const inquirer = require("inquirer");
// fs require will allow me to use the built in filestore for node
const fs = require("fs");
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
// the questions for inquirer
const questions = require("./lib/questions.js");
const Manager = require("./lib/Manager.js");
const prompt = inquirer.createPromptModule();
const { renderEmployee, myTeamHeader } = require("./src/generateHTML")
let htmlBody = "";
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));


// write to the HTML file build the start content

// collect employee information, store an array of employee object
const employeeList = [];

// will create new employees
const newEmployee = (answers) => {
  if (answers.defineRole === "Manager") {
    const employee = new Manager(answers.name, answers.id, answers.email, answers.office);
    return employeeList.push(employee);
  } else if (answers.defineRole === "Engineer") {
    const employee = new Engineer(answers.name, answers.id, answers.email, answers.github);
    return employeeList.push(employee);
  } else if (answers.defineRole === "Intern") {
    const employee = new Manager(answers.name, answers.id, answers.email, answers.office);
    return employeeList.push(employee);
  }

}


function html(employeeList) {
  const basketball = employeeList.forEach(renderEmployee());

  console.log(basketball);
  htmlpage = `${myTeamHeader} ${basketball}`

}


// create a card for an engineer for the HTML template.
function inquirerQuestions() {
  inquirer.prompt(questions).then(
    (answers) => {
      // this will create an employee and and push it to the employee list.
      answers.engineer.forEach(newEmployee);
      console.log("this is the list", employeeList);
      // should create a card for each employee.
      html(employeeList)

      fs.writeFile("./dist/index.html", htmlpage, "utf8", err => {
        if (err) {
          console.log(err);
        }
      });
    })
}









// start program
function init() {
  inquirerQuestions();

};

init();
// end program
