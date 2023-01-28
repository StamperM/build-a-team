const employeeTest=require("./test")
class intern extends employee{
    constuctor(name,employeeId,email,school){
        super(name,employeeId,email);
            this.school=school;
        }
    }

    module.exports=intern;