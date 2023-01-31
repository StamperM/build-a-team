
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
    type:"confirm",
    message:"What is this a manager",
    choices:"Manager",
    name:"manager",
},
{
    type:"confirm",
    message:"What is this a Engineer",
    name:"engineer",
},

{
    type:"input",
    message:"What is your office number",
    name:"office",
    when: answers=>(answers.manager=== true),
},
{
    type:"input",
    message:"What is the employee's GitHub username?",
    name:"github",
    when: answers=>(answers.engineer=== true),
},
{
    type:"input",
    message:"What is school does the intern attend?",
    name:"school",
    when:  answers=>(answers.engineer=== false && answers.manager=== false)
},
]

module.exports=questions
