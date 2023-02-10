/**
 * @class Employee
 * @property {string} name
 * @property {string} id
 * @property {string} email
 * @property {"Manager" | "Engineer" | "Intern"} role
 */
class Employee {
  /**
   * 
   * @param {string} name 
   * @param {string} id 
   * @param {string} email 
   * @param {string} role 
   */
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
  getName() {
    return this.name;
  }
  getRole() {
    return this.role;
  }
  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  render () {
    throw new Error('General employees can not be rendered.')
  }
}

module.exports = { Employee };
