const Employee= require("../Employee")
// name can not be empty
test('Name can not be empty',()=>{
// setup
    const employee=new Employee("Ron Swanson", 89, "ron.swanson@gmail.com")

    // actual comparision compuicates the the values to Jest so it can validate.
    expect(employee.name).toBe("Ron Swanson")}
)
// validate email has correct syntax
test("validate email has correct syntax",()=>{
    const employee=new Employee("Ron Swanson", 89, "ron.swanson@gmail.com") 
    expect(employee.email).toContain("@")
})









