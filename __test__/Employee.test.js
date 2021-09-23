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
    // const employee = new Employee('Maki')

    expect(Employee.name).toEqual(expect.any(String))
})

// checks for employee name
test('checks for employee name', () => {
    const employee = new Employee('Maki')

    expect(Employee.name).toEqual(expect.any(String))
})