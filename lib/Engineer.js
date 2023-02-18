const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email,"Engineer");
    this.github = github;
  }
 
  getGithub() {
    return this.github;
  }
  render(){
   
    return  `<div class="container">
    <div class="row">
    <h2 class="employeeName">${this.name}</h2>
    <h3 class="employeeRole">${this.role}</h3>
</div>
<div class="container">
    <div class="row">
   <p class="id"> ID: ${this.id}</p> 
   <p class="email">Email: <a href=${this.email}>${this.email} </a> </p>
   <p class="gitHub">GitHub: ${this.github}</p>
    </div>
    </div>
</div>
</div>`
  }
}

module.exports = Engineer;
