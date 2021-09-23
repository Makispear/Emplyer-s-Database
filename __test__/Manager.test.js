const Manager = require('../lib/Manager.js')

test('if all Employee methods an properties were inherited', () => {
    const manager = new Manager('Maki', 1, 'maki@gmail.com')

    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.getName()).toEqual(expect.any(String))
    expect(manager.getId()).toEqual(expect.any(Number))
    expect(manager.getEmail()).toEqual(expect.any(String))
    expect(manager.getRole()).toEqual(manager.constructor.name)
})

test('check for officeNumber property in Manager class', () => {
    const manager = new Manager('Maki', 1, 'maki@gmail.com', 1)

    expect(manager.officeNumber).toEqual(expect.any(Number))
    expect(manager.officeNumber).toBeGreaterThan(0)
})
