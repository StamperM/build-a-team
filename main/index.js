const fs=require("fs")
const Employee= require("./lib/Employee");
// const Intern = require("./JS/Intern");
const Engineer =require("./lib/Engineer");
const Manager = require("./lib/Manager")
const questions=require("./lib/questions");
const { inherits } = require("util");
const { default: inquirer } = require("inquirer");

const teamBuildHTML = require("./src/generateHTML")

function employeeInfo(){
    const newEmployeeInfo = new Employee(answers.name, answers.id, answers.email,answers.role,)
}
// function createNewEmployee(){

// }
function init(){
    inquirer.prompt(questions).then(answers => {
        fs.writeFile("/dist/main.html",teamBuildHTML, err=>{
            if (err) {
                console.log(err);
            }
     
     })    
    })

}
function init(){

}
init()

// function writeHtml(){
// fs.writeFile("/dist/main.html",teamBuildHTML, err=>{
//     if (err) {
//         console.log(err);
//     }
// })
// }