// properties :
        // name
        // id
        // email
        // getName()
        // getId()
        // getEmail()
        // getRole()  returns employee

const Employee = require('../lib/Employee.js')

test('checks for employee name', () => {
    const employee = new Employee('Maki')

    expect(Employee.name).toEqual(expect.any(String))
})