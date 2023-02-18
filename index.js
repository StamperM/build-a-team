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


inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));


// collect employee information, store an array of employee object
const employeeList = [];

// will create new employees
const newEmployee = (answers) => {
  const employee = answers.defineRole === "Manager" ? 
     new Manager(answers.name, answers.id, answers.email, answers.office) :
    answers.defineRole === "Engineer" ? 
    new Engineer(answers.name, answers.id, answers.email, answers.github):
    answers.defineRole === "Intern" ?
     new Manager(answers.name, answers.id, answers.email, answers.office):
     null;
     if(!employee){
      throw Error("Not a valid role")
    }
     
    return employee;

    }

function html(employeeList) {
  console.log("this",employeeList);
  const myTeamHeader = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <nav><h1> My Team</h1></nav> <div class="container">`;
  const endingHtml = `</body>
  </html>`;
  const  basketball = employeeList.map((employee) => employee.render()).join(" ");
let htmlBody=`${myTeamHeader} ${basketball}${endingHtml}`;
console.log(htmlBody);

fs.writeFile("./dist/index.html", htmlBody, "utf8", err => {
  if (err) {
    console.log(err);

  }
})
}

// create a card for an engineer for the HTML template.
function inquirerQuestions() {
  inquirer.prompt(questions).then(
    (answers) => {

      // employee.answers is the array of answers from Questions prompt. 
      const employeeInfo = answers.employee;
      console.log(employeeInfo);
      // Uses the newEmployee funtion to create the employee list. 
     const employeeList = employeeInfo.map(newEmployee)
    console.log(employeeList);

      // should create a card for each employee.
      html(employeeList);

    
        })
      }
      


// const writeHTML= ()=>{
 
// }

//   })
// }




// start program
function init() {
  inquirerQuestions();

};

init();
// end program
