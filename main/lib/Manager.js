const Employee=require("./Employee")

class Manager extends Employee{
    constuctor(name,id,email,office){
       super(name,id,email);
            this.office=office;
        }
        getRole(){
            
        }
        getOffice(){
            return this.office;
        }

    }

    module.exports=Manager;