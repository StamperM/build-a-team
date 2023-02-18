// allows employee class to be used by Manager.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email,"Manager");
    this.office = office;
  }

  getOffice() {
    return this.office;
  }
  render(){
   
    return`<div class="container">
    <div class="row">
    <h2 class="employeeName">${this.name}</h2>
    <h3 class="employeeRole">${this.role}</h3>
</div>
<div class="container">
    <div class="row">
   <p class="id"> ID: ${this.id}</p> 
   <p class="email">Email: <a href=${this.email}>${this.email} </a> </p>
   <p class="officeNumber">Office Number: ${this.office}</p>
    </div>
    </div>
</div>
</div>`
}
  }


module.exports = Manager;
