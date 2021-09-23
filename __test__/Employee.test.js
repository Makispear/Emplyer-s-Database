// properties :

        // getId()
        // getEmail()
        // getRole()  returns employee

const Employee = require('../lib/Employee.js')

// checks if creates is an object
test('checks if creates Employee class', () => {
    const employee = new Employee('Maki')

    expect(employee.name).toEqual(expect.any(String))
})


// checks for employee name
test('checks for name in Employee class', () => {
    const employee = new Employee('Maki')

    expect(employee.name).toEqual(expect.any(String))
})

// checks for id of employee 
test('checks for employee ID in Employee class', () => {
    const employee = new Employee('Maki', 1)

    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.id).toBeGreaterThan(0)
})

// checks for email in Employee class 
test('checks email in Employee class', () => {
    const employee = new Employee('Maki', 3, 'maki-miko@hotmail.com')

    expect(employee.email).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.stringContaining('@'))
    expect(employee.email).toEqual(expect.stringContaining('.'))
})

// checking getName function in Employee class 
test('Check for getName() method in Employee Class', () => {
    const employee = new Employee('Maki', 1)

    expect(employee.getName()).toEqual('Maki')
})

// gets id from the Employee class 
test('checks for getId() in Employee class', () => {
    const employee = new Employee('Maki', 1, 'maki-miko@hotmail.com')

    expect(employee.getId()).toEqual(expect.any(Number))
    console.log(employee.getId())
})