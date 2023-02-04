const questions = [
  {
    type: "loop",
    name: "engineer",
    message: "Would you like to enter an employee?",
    questions: [
      {
        type: "list",
        message: "Are you adding an Intern or Engineer?",
        name: "defineRole",
        choices:["Manager","Engineer","Intern"]
      },
      {
        type: "input",
        message: "What is the employee name?",
        name: "name",
      },

      {
        type: "input",
        message: "What is the employee id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employees email address",
        name: "email",
      },
      {
        type: "input",
        message: "What is your office number",
        name: "office",
        when: (answers) => answers.defineRole === "Manager",
      },
      {
        type: "input",
        message: "What is the employee's GitHub username?",
        name: "github",
        when: (answers) => answers.defineRole === "Engineer",
      },
      {
        type: "input",
        message: "What is school does the intern attend?",
        name: "school",
        when: (answers) => answers.defineRole === "Intern"
      },
    ]
  },
]
 
module.exports = questions;
