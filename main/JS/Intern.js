const Employee=require("./Employee")

class Intern extends Employee {
    constuctor(name, id, email, school){
        super(name,id,email);
            this.school=school;
        }
       
    
    getSchool(){
        return this.school;
    }
    }

    module.exports=Intern;
    