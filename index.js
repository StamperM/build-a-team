const inquirer = require("inquirer");
// fs require will allow me to use the built in filestore for node
const fs = require("fs");
const Employee = require("./lib/Employee.js")
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
// the questions for inquirer
const questions = require("./lib/questions");
const Manager = require("./lib/Manager.js");
// const prompt = inquirer.createPromptModule();
const { renderEmployee, myTeamHeader } = require("./src/generateHTML")

// start program

// write to the HTML file build the start content

// collect employee information, store an array of employee object
const employeeList = [];

// will create new employees
const newEmployee = (answers) => {
  if (answers.manager === true) {
    return new Manager(answers.name, answers.id, answers.email, answers.office);
  } else if (answers.engineer === true) {
    return new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
  } else answers.manager === false && answers.engineer === false;
  return new Manager(answers.name, answers.id, answers.email, answers.office);
};


function renderEmployees(employees) {
  return employees
    .map((employee) => renderEmployee(employee))
    .join('');

}




// create a card for an engineer for the HTML template.


function init() {
  inquirer.prompt(questions).then(
    (answers) => {
      const employee = newEmployee(answers);
      employeeList.push(employee);
      console.log(employeeList);
      html = `${myTeamHeader} ${renderEmployees(employeeList)}`;

      fs.writeFile("./dist/index.html", html, "utf8", err => {
        if (err) {
          console.log(err);

        }
      }

       

     
  )

}
  )
}

init();
// end program

