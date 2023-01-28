const Employee= require("./")
// name can not be empty
test('Name can not be empty',()=>{
// setup
    const employee=new Employee("Ron Swanson", 89, "ron.swanson@gmail.com")

    // logic

    // actual comparision compuicates the the values to Jest so it can validate.
    expect(employee.name).toBe("Ron Swanson")
})

test("validate email has correct syntax",()=>{
    const employee=new Employee("Ron Swanson", 89, "ron.swanson@gmail.com") 
    //logic

    // actual
    expect(employee.email).toContain("@")
})


// validate email has correct syntax



// employee id = number


