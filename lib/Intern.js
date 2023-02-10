const { Employee } = require("./Employee");

/**
 * @class Intern
 * @extends Employee
 * @property {string} school
 * @property {"Intern"} role
 */
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, "Intern");
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  render () {
    return `
      <div class="container">
          <div class="row">
          <h2 class="employeeName">${this.name}</h2>
          <h3 class="employeeRole">${this.role}</h3>
      </div>
      <div class="container">
          <div class="row">
      <p class="id"> ID: ${this.id}</p> 
      <p class="email">Email: <a href=${this.email}>${this.email} </a> </p>
      <p class="school">school: ${this.school}</p>
          </div>
          </div>
      </div>
      </div>
    `
  }
}

module.exports = { Intern };
