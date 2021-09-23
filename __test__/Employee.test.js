const Employee = require('../lib/Employee.js')

// checks if creates is an object
test('checks if creates Employee class', () => {
    const employee = new Employee('Maki')

    expect(employee.name).toEqual(expect.any(String))
})


// checks for employee name
test('checks for name in Employee class', () => {
    const employee = new Employee('Maki Abo Maki')
    const regEmployee = /^[a-zA-Z,.'-]+([a-zA-Z ,.'-]+)([a-z]+$)/

    // expect(employee.name).toEqual(expect.any(String))
    expect(employee.name).toMatch(regEmployee)
})

// checks for id of employee 
test('checks for employee ID Number in Employee class', () => {
    const employee = new Employee('Maki', 1)

    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.id).toBeGreaterThan(0)
})

// checks for email in Employee class 
test('checks email in Employee class', () => {
    const employee = new Employee('Maki', 3, 'maki_miko@hotmail.com')
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // words .OR- words @ .OR-Words . 2-3 letters

    expect(employee.email).toMatch(regexEmail)
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
})

// gets email() from Employee class 
test('checks for getEmail() method in Employee class', () => {
    const employee = new Employee('Maki', 1, 'maki-miko@hotmail.com')
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    expect(employee.getEmail()).toEqual('maki-miko@hotmail.com')
    expect(employee.getEmail()).toMatch(regexEmail)

})

// getting constructor name for the role 
test('Check for getRole() method in Employee class', () => {
    const employee = new Employee('Maki', 1, 'maki-miko@hotmail.com')
    
    expect(employee.getRole()).toEqual("Employee")
})