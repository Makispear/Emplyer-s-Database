// const Manager = require("../lib/Manager")

// [
//     Manager {
//       name: 'sdf',
//       id: '123',
//       email: 'ratf@fds.fd',
//       officeNumber: 'esdf'
//     },
//     Engineer {
//       name: 'sadf',
//       id: '12',
//       email: 'fr@fe.fd',
//       githubUsername: 'frwes'
//     }
// ]


generateTeam = teamInfo => {
    teamInfo.map(constructor => {


        if (constructor.getRole() === "Manager") {
            let name = constructor.getName()
            let id = constructor.getId()
            let email = constructor.getEmail()
            return `
            <div class="shadow-lg w-auto bg-light m-3">
                <div class="bg-primary text-white px-2 py-1">
                    <p>${name}</p>
                    
                </div>
                <div class="bg-light p-4 py-5">
                    <div>
                        <div class="bg-white p-2 border">ID: ${id}</div>
                        <div class="bg-white p-2 border">Email: ${email}</div>
                        
                    </div>
                </div>
            </div>
            `
        } 
        if (constructor.getRole() === "Engineer") {
            let name = constructor.getName()
            let id = constructor.getId()
            let email = constructor.getEmail()
            return `
            <div class="shadow-lg w-auto bg-light m-3">
                <div class="bg-primary text-white px-2 py-1">
                    <p>${name}</p>
                    
                </div>
                <div class="bg-light p-4 py-5">
                    <div>
                        <div class="bg-white p-2 border">ID: ${id}</div>
                        <div class="bg-white p-2 border">Email: ${email}</div>
                        
                    </div>
                </div>
            </div>
            `
        } 
        if (constructor.getRole() === "Intern") {
            let name = constructor.getName()
            let id = constructor.getId()
            let email = constructor.getEmail()
            return `
            <div class="shadow-lg w-auto bg-light m-3">
                <div class="bg-primary text-white px-2 py-1">
                    <p>${name}</p>
                    
                </div>
                <div class="bg-light p-4 py-5">
                    <div>
                        <div class="bg-white p-2 border">ID: ${id}</div>
                        <div class="bg-white p-2 border">Email: ${email}</div>
                        
                    </div>
                </div>
            </div>
            `
        } 
    })
    .join('')


}


generateTemplate = teamInfo => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <title>Team management</title>
</head>
<body>
    <div class="container-fluid bg-danger text-light text-center p-4">
        <div class="row">
            <div class="col">
                <h1>My Team</h1>
            </div>
        </div>
    </div>

    <div class="container-fluid d-flex p-5 justify-content-center">
        <div class="container-fluid d-flex flex-wrap justify-content-center">
            ${generateTeam(teamInfo)}
        </div>
    </div>
</body>
</html>`
}

module.exports = generateTemplate