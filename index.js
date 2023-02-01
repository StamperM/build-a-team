const inquirer = require("inquirer");
// fs require will allow me to use the built in filestore for node
const fs = require("fs");
// gives me access to the the classes
const Employee = require("./lib/Employee");
// const Intern = require("./JS/Intern");
const Engineer = require("./lib/Engineer");
// the questions for inquirer
const questions = require("./lib/questions");
const Manager = require("./lib/Manager.js");
const prompt = inquirer.createPromptModule();
const {renderEmployee}= require("./src/generateHTML")
// start program

// write to the HTML file build the start content

// collect employee information, store an array of employee object
const employeeList = [];


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


function renderEmployees(employees){
   return employees
        .map((employee)=>renderEmployee(employee))
        .join('')
    
}




// create a card for an engineer for the HTML template.

// // }
function init() {
  inquirer.prompt(questions).then(
    (answers) => {
      const employee = newEmployee(answers);
      employeeList.push(employee);
      console.log(employeeList);
      const html=renderEmployees(employeeList);
    }

    //     fs.writeFile("/dist/main.html",html, err=>{
    //         if (err) {
    //             console.log(err);

    //         }

    //  })
  );
}

// function init(){

// }
init();
// end program
/

