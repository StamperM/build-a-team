const inguier = require("inquirer");


const questions=[
    {
        type:"input",
        message:"What is the employee name?",
        name:"name",
    }

{
    type:"input",
    message:"What is the employee id?",
    name:"id",
}
{
    type:"input",
    message:"What is the employees email address",
    name:"email",
}
{
    type:"list",
    message:"What is the emplyee role?",
    choices:["Manager","Engineer","Intern"],
}
{
    type:"input",
    message:"What is your office number",
    name:"Office"
    when: questions=>(questions.choices=== "Manager"),
}
{
    type:"input",
    message:"What is the employee's GitHub username?",
    name:"GitHub"
    when: questions=>(questions.choices=== "Engineer"),
}
{
    type:"input",
    message:"What is school does the intern attend?",
    name:"School"
    when: questions=>(questions.choices=== "Engineer"),
}
]

module.exports=questions;
