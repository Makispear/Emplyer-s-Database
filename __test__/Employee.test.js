// properties :
        // name
        // id
        // email
        // getName()
        // getId()
        // getEmail()
        // getRole()  returns employee

const Employee = require('../lib/Employee.js')

// checks if creates is an object
test('Creates and employee object', () => {
    const employee = new Employee('Maki')

    expect(employee.name).toEqual(expect.any(String))
})


// checks for employee name
test('checks for employee name', () => {
    const employee = new Employee('Maki')

    expect(employee.name).toEqual(expect.any(String))
})

// checks for id of employee 
test('checks for employee ID', () => {
    const employee = new Employee('Maki', 1)

    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.id).toBeGreaterThan(0)
})