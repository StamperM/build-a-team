const employee=require("./Assets/Test/JS/Employee")

class Manager extends Employee{
    constuctor(name,employeeId,email,school){
        super(name,employeeId,email);
            this.Office=office;
        }
    }

    module.exports=Manager;