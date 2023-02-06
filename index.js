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
const {renderEmployee, myTeamHeader } = require("./src/generateHTML")
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
// start program

// write to the HTML file build the start content

// collect employee information, store an array of employee object
const employeeList = [];

// will create new employees
const newEmployee = (answers) => {
  if (answers.engineer.defineRole === "Manager") {
    const employee = new Manager(answers.name, answers.id, answers.email, answers.office);
    return employeeList.push(employee);
  } else if (answers.engineer.defineRole === "Engineer") {
    const employee = new Engineer(answers.name, answers.id, answers.email, answers.github);
    return employeeList.push(employee);
  } else if (answers.engineer.defineRole === "Intern") {
    const employee = new Manager(answers.name, answers.id, answers.email, answers.office);
    return employeeList.push(employee);
  }

}



  function createHtml(employeeList){
 employeeList.forEach((employee) =>{
  console.log(employee);
   html = renderEmployee(employeeList);
  const buildHtml=`${myTeamHeader}+ ${renderEmployee}`;
 
 });
}



// create a card for an engineer for the HTML template.

inquirer.prompt(questions).then(
  (answers) => {
    console.log(answers);
    newEmployee(answers);
    console.log(employeeList);
   
    createHtml(employeeList);
     }
    )

    writeHtml= ()=>{ fs.writeFileSync("./dist/index.html", buildHtml, "utf8", err => {
    if (err) {
      console.log(err);
    }
    }); }
   



function init() {};

init();
// end program
