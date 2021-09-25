const inquirer = require('inquirer')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

const regName = /^[a-zA-Z,']+([a-zA-Z ,.'-]+)([a-z]+$)/
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regId = /^[1-9][0-9]?/
const regGitHubUsername = /^[a-z]+[a-z-][a-z]+$/i

let dataArr = []
// let engineersArr = []
// let internsArr = []

const getTeamMembers = () => {
    inquirer
    .prompt([
        {
            // asks for adding intern, engineer or finish project 
            type: 'list',
            name: 'addMember',
            message: '* Which type of team member would you like to add? (required!)',
            choices: ['Engineer', 'Intern', "I'm done adding Team members!"],
            // validate: addMember =>  {
            //    return addMember
            // }
        }
    ])
    .then(answer => {
        const {choice} = answer 
        if (choice === 'Engineer') {
            return getEngineerInfo()
        } else if (choice === 'Intern') {
           return getInternInfo()
        } else {
            return console.log(dataArr)
        }
    })
}

const getManagerInfo = () => {
    console.log(`
    =====================================
    Please Fill in Manager's Information:
    =====================================
    `)
    // asks for manager's name, id email and office number 
    inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "* What is the team manager's name? (required!)",
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
        message: "* What is the manager's Id? (required!)",
        validate: managerId =>  {
            if (regId.test(managerId)) {
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
        message: "* What is the manager's Email? (required!)",
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
        name: 'managerOfficeNumber',
        message: "* What is the team manager's office number? (required!)",
        validate: managerOfficeNumber =>  {
            if (managerOfficeNumber) {
                return true
            } else {
                console.log(`\nPlease Enter a Valid Email!`)
                return false
            }
        }
    }
])
.then(answers => {
    const {name, id, email, officeNumber} = answers
    return new Manager(name, id, email, officeNumber)
})
.then(obj => {
    dataArr.push(obj)
    console.log(dataArr)
})
.then(getTeamMembers())
}

// prompts get Engineer name, email, github and id 
const getEngineerInfo = () => {
    console.log(`
    ======================================
    Please Fill in Engineer's Information:
    ======================================
    `)
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "* What is your Engineer's name? (required!)",
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
            message: "* What is your Engineer's Id? (required!)",
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
            message: "* What is your Engineer's Email? (required!)",
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
            message: "* What is your Engineer's Github username? (required!)",
            validate: engineerGitHub => {
                if (regGitHubUsername.test(engineerGitHub)) {
                    return true
                } else {
                    return false
                }
            }
        }
    ]).then(obj => {
        const {name, id, email, githubUsername} = obj
        return new Engineer(name, id, email, githubUsername)
    }).then(newObj => {
        dataArr.push(newObj)
    })
    .then(getTeamMembers())
}

// prompts get's intern's name , email, id and school name 
const getInternInfo = () => {
    console.log(`
    ====================================
    Please Fill in Inters's Information:
    ====================================
    `)
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: "* What is your intern's name? (required!)",
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
            message: "* What is your intern's Id? (required!)",
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
            message: "* What is your intern's Email? (required!)",
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
            message: "* What is your intern's school name? (required!)",
            validate: schoolName => {
                if (regName.test(schoolName)) {
                    return true
                } else {
                    return false
                }
            }
        }
    ])
    .then(obj => {
        const {name, id, email, schoolName} = obj
        return new Intern(name, id, email, schoolName)
    }).then(newObj => {
        dataArr.push(newObj)
    })
    .then(getTeamMembers())
}


getManagerInfo()
