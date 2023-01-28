const fs=require("fs")
const Employee= require("./JS/Employee");
const Intern = require("./JS/Intern");
const Engineer =require("./JS/Engineer");
const Manager = require("./JS/Manager");
const questions=require("./JS/questions");
const { inherits } = require("util");
const { default: inquirer } = require("inquirer");

const teamBuildHTML =

// function writeHtml(){
// fs.writeFile("/dist/main.html",teamBuildHTML, err=>{
//     if (err) {
//         console.log(err);
//     }
// })
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

init()