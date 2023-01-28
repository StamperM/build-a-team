const Employee=require("./Employee")
const engineerTest=require("./test/Engineer.test")

class Engineer extends Employee{
    constructor(name, employeeId,email,github){
        super(github);
        this.github=github;
    }
}

module.exports=Engineer;

