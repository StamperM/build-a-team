const Engineer = require("./JS/Engineer");
const Intern = require("./JS/Intern");
const Manager = require("./JS/Manager");

const managerCard = (manager) => {
 return `<div class="container">
    <div class="row">
    <h2 class="employeeName">${manager.name}</h2>
    <h3 class="employeeRole">${manager.role}</h3>
</div>
<div class="container">
    <div class="row">
   <p class="id"> ID: ${manager.id}</p> 
   <p class="email">Email: <a href=${manager.email}>${manager.emal} </a> </p>
   <p class="officeNumber">Office Number: ${manager.office}</p>
    </div>
    </div>
</div>
</div>`;
};
function renderEmployee(employee){
    if(employee.role==="manager"){
        return managerCard(employee);
    } if(employee.role==="engineer"){
        return engineerCard(employee);
    }if(employee.role === "intern"){
        return internCard(employee)
    }
}

const engineerCard =(engineer)=>{
`<div class="container">
    <div class="row">
    <h2 class="employeeName">${answers.name}</h2>
    <h3 class="employeeRole">${answers.role}</h3>
</div>
<div class="container">
    <div class="row">
   <p class="id"> ID: ${answers.id}</p> 
   <p class="email">Email: <a href=${answers.email}>${answers.emal} </a> </p>
   <p class="gitHub">GitHub: ${answers.github}</p>
    </div>
    </div>
</div>
</div>`
};


const internCard =(intern)=>{
`<div class="container">
    <div class="row">
    <h2 class="employeeName">${answers.name}</h2>
    <h3 class="employeeRole">${answers.role}</h3>
</div>
<div class="container">
    <div class="row">
   <p class="id"> ID: ${answers.id}</p> 
   <p class="email">Email: <a href=${answers.email}>${answers.emal} </a> </p>
   <p class="school">school: ${answers.school}</p>
    </div>
    </div>
</div>
</div>`};


module.exports={
  
    renderEmployee

}

;