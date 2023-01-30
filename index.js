const inquirer = require('inquirer');
// fs require will allow me to use the built in filestore for node
const fs=require("fs")
// gives me access to the the classes
const Employee= require("./main/lib/Employee");
// const Intern = require("./JS/Intern");
const Engineer =require("./main/lib/Engineer");
// the questions for inquirer
const questions = require('./main/lib/questions');
const Manager = require("./main/lib/Manager.js").default;
const prompt = inquirer.createPromptModule();
// start program(loop it when yes)
// collect employee information, store an array of employee object
// write to the HTML file build the start content 
// end program








// inquirer
// .prompt(questions)
// .then((answers)=>{
//     console.log(answers);
// })

function employeeInfo(){
    const managerinfo = new Manager(answers.name, answers.id, answers.email,answers.role, answer.office);
}
// create a card for an engineer for the HTML template.
// function createEngineer(){
//     if 
// }
// function createNewEmployee(){

// }
function init(){
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
       
        employeeInfo();
    //     fs.writeFile("/dist/main.html",teamBuildHTML, err=>{
    //         if (err) {
    //             console.log(err);

    //         }
     
    //  })    
    })
}

// function init(){

// }
init()

// function writeHtml(){
// fs.writeFile("/dist/main.html",teamBuildHTML, err=>{
//     if (err) {
//         console.log(err);
//     }
// })
// 