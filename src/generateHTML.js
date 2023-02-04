// const Employee = require("./lib/Employee")
// const Intern = require("./lib/Intern");
// const Engineer = require("./lib/Engineer");
// const Manager = require("./lib/Manager.js");

const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const myTeamHeader=
     `<nav><h1> My Team</h1></nav>` 


const managerCard = (Manager) => {
 return `<div class="container">
    <div class="row">
    <h2 class="employeeName">${Manager.name}</h2>
    <h3 class="employeeRole">${Manager.role}</h3>
</div>
<div class="container">
    <div class="row">
   <p class="id"> ID: ${Manager.id}</p> 
   <p class="email">Email: <a href=${Manager.email}>${Manager.emal} </a> </p>
   <p class="officeNumber">Office Number: ${Manager.office}</p>
    </div>
    </div>
</div>
</div>`;
};

function renderEmployee(Employee){
    if(Employee.role=== "Manager"){
        return managerCard(Employee);
    } if(Employee.role=== "Engineer"){
        return engineerCard(Employee);
    }if(Employee.role === "Intern"){
        return internCard(Employee)
    }
}

const engineerCard =(Engineer)=>{
`<div class="container">
    <div class="row">
    <h2 class="employeeName">${Engineer.name}</h2>
    <h3 class="employeeRole">${Engineer.role}</h3>
</div>
<div class="container">
    <div class="row">
   <p class="id"> ID: ${Engineer.id}</p> 
   <p class="email">Email: <a href=${Engineer.email}>${Engineer.emal} </a> </p>
   <p class="gitHub">GitHub: ${Engineer.github}</p>
    </div>
    </div>
</div>
</div>`
};


const internCard =(Intern)=>{
`<div class="container">
    <div class="row">
    <h2 class="employeeName">${Intern.name}</h2>
    <h3 class="employeeRole">${Intern.role}</h3>
</div>
<div class="container">
    <div class="row">
   <p class="id"> ID: ${Intern.id}</p> 
   <p class="email">Email: <a href=${Intern.email}>${Intern.emal} </a> </p>
   <p class="school">school: ${Intern.school}</p>
    </div>
    </div>
</div>
</div>`};


module.exports={
  myTeamHeader,
    renderEmployee,
    internCard
}

;