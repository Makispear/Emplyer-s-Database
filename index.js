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

const getTeamMembers = async () => {
    await inquirer.prompt([
        {
            // asks for adding intern, engineer or finish project 
            type: 'list',
            name: 'addMember',
            message: '* Which type of team member would you like to add? (required!)',
            choices: ['Engineer', 'Intern', "I'm done adding Team members!"]
        }
    ])
    .then(answer => {
        const {choice} = answer 
        if (choice === 'Engineer') {
            getEngineerInfo()
            return
        } else if (choice === 'Intern') {
            getInternInfo()
            return
        } else {
            console.log(dataArr)
            return
        }
        return
    })
}

const getManagerInfo = async () => {
    console.log(`
    =====================================
    Please Fill in Manager's Information:
    =====================================
    `)
    // asks for manager's name, id email and office number 
    await inquirer.prompt([
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
    const manager = new Manager(name, id, email, officeNumber)
    dataArr.push(manager)
    console.log(dataArr)
    getTeamMembers()
})

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
    ]).then(answers => {
        const {name, id, email, githubUsername} = answers
        const engineer =  new Engineer(name, id, email, githubUsername)
        dataArr.push(engineer)
        console.log(dataArr)
        getTeamMembers()
    })
}

// prompts get's intern's name , email, id and school name 
const getInternInfo = async () => {
    console.log(`
    ====================================
    Please Fill in Inters's Information:
    ====================================
    `)
    await inquirer
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
    .then(answers => {
        const {name, id, email, schoolName} = answers
        const intern =  new Intern(name, id, email, schoolName)
        dataArr.push(intern)
        console.log(dataArr)
        getTeamMembers()
    })
}


getManagerInfo()
