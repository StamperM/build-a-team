const inquirer = require('inquirer');
// fs require will allow me to use the built in filestore for node
const fs=require("fs")
// gives me access to the the classes
const Employee= require("./lib/Employee");
// const Intern = require("./JS/Intern");
const Engineer =require("./lib/Engineer");
// the questions for inquirer
const questions = require('./lib/questions');
const Manager = require("./lib/Manager.js").default;
const prompt = inquirer.createPromptModule();
// start program

// write to the HTML file build the start content 

// collect employee information, store an array of employee object
const employeeList=[];
const newEmployee =(answers) =>{
    if(answers.manager===true){
        return new Manager(answers.name,answers.id,answers.email,answers.office);   
    
    }else if(answers.engineer===true){
       return new Engineer(answers.name,answers.id,answers.email,answers.github);
       
} else (answers.manager===false && answers.engineer ===false)
   return new Manager(answers.name,answers.id,answers.email,answers.office);

}

// create a card for an engineer for the HTML template.


// }
function init(){
    inquirer.prompt(questions).then(answers => {
       for(i=0;i<answers.length(); i++){
        const employee= newEmployee(answers[i])
        employeeList.append(employee)
       }
      
      
      
        
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
// end program
// function writeHtml(){
// fs.writeFile("/dist/main.html",teamBuildHTML, err=>{
//     if (err) {
//         console.log(err);
//     }
// })
// 