
const questions=[
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
]

module.exports=questions;
