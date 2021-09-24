const inquirer = require('inquirer')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

const regName = /^[a-zA-Z,']+([a-zA-Z ,.'-]+)([a-z]+$)/
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regId = /[0-9]+/
const regGitHubUsername = /^[a-z]+[a-z-][a-z]+$/i




howonswerslook = {
    managerName: 'maki',
    managerId: 'maki',
    managerEmail: 'maki',
    addMember: 'Engineer'
}

PromptUser = () => {
    console.log(`
    ================================
    Please fill out these questions:
    ================================
    `)
    return inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name? (required!)",
        validate: managerName =>  {
            if (regName.test(managerName)) {
                return true
            } else {
                console.log(`\nPlease Enter a Valid Name!`)
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's Id? (required!)",
        validate: managerId =>  {
            if (managerId) {
                return true
            } else {
                console.log(`\nPlease Enter a Valid Number!`)
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's Email? (required!)",
        validate: managerEmail =>  {
            if (regEmail.test(managerEmail)) {
                return true
            } else {
                console.log(`\nPlease Enter a Valid Email!`)
                return false
            }
        }
    },
    {
        type: "input",
        name: 'managerEmail',
        message: "What is the team manager's office number? (required!)",
        validate: managerOfficeNumber =>  {
            if (managerOfficeNumber) {
                return true
            } else {
                console.log(`\nPlease Enter a Valid Email!`)
                return false
            }
        }
    },
    {
        type: 'list',
        name: 'addMember',
        message: 'Which type of team member would you like to add? (required!)',
        choices: ['Engineer', 'Intern', 'Finish building my team'],
        validate: addMember =>  {
            if (addMember) {
                return true
            } else {
                return false
            }
        }
    }
])
}

getEngineerInfo = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is your Engineer's name? (required!)",
            validate: engineerName => {
                if (regName.test(engineerName)) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: "input",
            name: 'engineerId',
            message: "What is your Engineer's Id? (required!)",
            validate: engineerId => {
                if (engineerId) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: "input",
            name: 'engineerEmail',
            message: "What is your Engineer's Email? (required!)",
            validate: engineerEmail => {
                if (regEmail.test(engineerEmail)) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: "input",
            name: 'engineerGitHub',
            message: "What is your Engineer's Github username? (required!)",
            validate: engineerGitHub => {
                if (regGitHubUsername.test(engineerGitHub)) {
                    return true
                } else {
                    return false
                }
            }
        }
    ])
}

getInternInfo = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is your intern's name? (required!)",
            validate: internName => {
                if (regName.test(internName)) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: "input",
            name: 'internId',
            message: "What is your intern's Id? (required!)",
            validate: internId => {
                if (internId) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: "input",
            name: 'internEmail',
            message: "What is your intern's Email? (required!)",
            validate: internEmail => {
                if (regEmail.test(internEmail)) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is your intern's school name? (required!)",
            validate: schoolName => {
                if (regName.test(schoolName)) {
                    return true
                } else {
                    return false
                }
            }
        }
    ])
}


PromptUser()
.then(data => {
    const {managerName, managerId, managerEmail, addMember} = data
    new Manager(managerName, managerId, managerEmail)
    if (addMember === 'Engineer') {
        getEngineerInfo()
        .then(engineerInfo => {
            const {name, id, email, githubUsername} = engineerInfo
            new Engineer(name, id, email, githubUsername)
        })
        return
    } else if (addMember === 'Intern') {
        getInternInfo()
        .then(internInfo => {
            const {name, id, email, internSchool} = internInfo
            new Intern(name, id, email, internSchool)
        })
        return
    } else {
        return
    }
})
