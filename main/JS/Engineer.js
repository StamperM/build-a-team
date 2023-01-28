const employee=require("./Employee")
const engineerTest=require("./test/Engineer.test")

class engineer extends Employee{
    constructor(name, employeeId,email,github){
        super(github);
        this.github=github;
    }
}



