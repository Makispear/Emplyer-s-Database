const Intern = require('../lib/Intern.js')

test('check if Intern.js exports constructor from Employee.js', () => {
    const intern = new Intern('Maki', 1, 'maki-miko@hotmail.com', 1)

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.getName()).toEqual(expect.any(String))
    expect(intern.getId()).toEqual(expect.any(Number))
    expect(intern.getEmail()).toEqual(expect.any(String))
    expect(intern.getRole()).toEqual(intern.constructor.name)
})

test('check school property in Intern class', () => {
    const intern = new Intern('Maki', 1, 'maki-miko@hotmail.com', 'Junior High School')

    expect(intern.school).toEqual(expect.any(String))
})

test('checks for getSchool() in Intern class', () => {
    const intern = new Intern('Maki', 1, 'maki-miko@hotmail.com', 'Junior High School')
    const school = intern.school
    
    expect(intern.getSchool()).toEqual(school)
})
