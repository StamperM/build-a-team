const Employee=require("./Employee")
const engineerTest=require("../test/Engineer.test")

class Engineer extends Employee{
    constructor(name, id,email,github){
        super(name,id,email);
        this.github=github;
    }
getRole(){
    return this.getRole;
}
getGithub(){
    return this.github;
}
}

module.exports=Engineer;

