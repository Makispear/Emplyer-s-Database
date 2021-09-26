const generateTeam = teamInfo => {

    let template = [];

    const generateManager = manager => {
return `
            <div class="card employee-card m-3 shadow-sm">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item bg-white">ID: ${manager.getId()}</li>
                        <li class="list-group-item bg-white">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item bg-white">Office number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        `
    };

    const generateEngineer = engineer => {
return `
            <div class="card employee-card m-3 shadow-sm">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${engineer.getRole()}</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item bg-white">ID: ${engineer.getId()}</li>
                        <li class="list-group-item bg-white">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item bg-white">Office number: ${engineer.getGithub()}</li>
                    </ul>
                </div>
            </div>
        `
    };

    const generateIntern = intern => {
return `
            <div class="card employee-card m-3 shadow-sm">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${intern.getRole()}</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item bg-white">ID: ${intern.getId()}</li>
                        <li class="list-group-item bg-white">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item bg-white">Office number: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `
    };

    template.push(
        teamInfo
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager)))

    template.push(
        teamInfo
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer)))

    template.push(
        teamInfo
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern)));

    return template.join("")

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
<script src="https://kit.fontawesome.com/074e1ad80a.js" crossorigin="anonymous"></script>
</body>
</html>`
}

module.exports = generateTemplate