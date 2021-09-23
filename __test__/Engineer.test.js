const Engineer = require('../lib/Engineer.js')

test('check if Engineer.js exports constructor from Employee.js', () => {
    const engineer = new Engineer('Maki', 1, 'maki-miko@hotmail.com', 1)

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.getName()).toEqual(expect.any(String))
    expect(engineer.getId()).toEqual(expect.any(Number))
    expect(engineer.getEmail()).toEqual(expect.any(String))
    expect(engineer.getRole()).toEqual(engineer.constructor.name)
})

test('check github username in Manager class', () => {
    const engineer = new Engineer('Maki', 1, 'maki-miko@hotmail.com', 'Makispear')

    expect(engineer.githubUsername).toEqual(expect.any(String))
    expect(engineer.githubUsername.length).toBeLessThanOrEqual(39)
})