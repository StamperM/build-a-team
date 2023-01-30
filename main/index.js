// fs require will allow me to use the built in filestore for node
const fs=require("fs")
// gives me access to the the classes
const Employee= require("./lib/Employee");
// const Intern = require("./JS/Intern");
const Engineer =require("./lib/Engineer");
const Manager = require("./lib/Manager.js").default;


// the questions for inquirer
// const questions=require("./lib/questions");


// const teamBuildHTML = require("./src/generateHTML")
const inquirer = require("inquirer");


inquirer
.prompt([
    {
        type:"input",
        message:"What is the employee name?",
        name:"name",
    },

{
    type:"input",
    message:"What is the employee id?",
    name:"id",
},
{
    type:"input",
    message:"What is the employees email address",
    name:"email",
},
{
    type:"list",
    message:"What is the emplyee role?",
    choices:["Manager","Engineer","Intern"],
    name:"role",
},
{
    type:"input",
    message:"What is your office number",
    name:"office",
    when: questions=>(questions.choices=== "Manager"),
},
{
    type:"input",
    message:"What is the employee's GitHub username?",
    name:"github",
    when: questions=>(questions.choices=== "Engineer"),
},
{
    type:"input",
    message:"What is school does the intern attend?",
    name:"school",
    when: questions=>(questions.choices=== "Engineer"),
},
])
.then((answers)=>{
    console.log(answers);
})
function employeeInfo(){
    const newEmployeeInfo = new Employee(answers.name, answers.id, answers.email,answers.role,)
}
// create a card for an engineer for the HTML template.
function createEngineer(){
    if 
}
// function createNewEmployee(){

// }
// function init(){
//     inquirer.prompt(questions).then(answers => {
//         fs.writeFile("/dist/main.html",teamBuildHTML, err=>{
//             if (err) {
//                 console.log(err);
//             }
     
//      })    
//     })

// }
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