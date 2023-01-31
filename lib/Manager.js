// allows employee class to be used by Manager. 
const Employee=require("./Employee")

class Manager extends Employee {
    constuctor(name,id,email,office){
       super(answers.name,answers.id,answers.email);
            this.office=answers.office;
    }
        getRole(){

        }
        getOffice(){
            return this.office;
        }

    }

 module.exports=Manager