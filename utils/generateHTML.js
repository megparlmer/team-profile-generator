const data = require('../index');
const fs = require('fs');

//generate html
generateHTML = (data) => {
    console.log({data});
    var team = ``;

    //manager data is retrieved from zero index of array
    for (let i = 1; i < data.length; i++) {
        if (data[i].role === 'Intern') {
            team +=

            //intern card
            `
            <div class="card">
                <div class="card-content">
                    <ul>
                        <li>Name: ${data[i].getName()}</li>
                        <li>Role: ${data[i].getRole()}</li>
                        <li>ID: ${data[i].getId()}</li>
                        <li>Email: ${data[i].getEmail()}</li>
                        <li>School: ${data[i].getSchool()}</li>
                    </ul>
                </div>
            </div>
            `
        }
        if (data[i].role === "Engineer") {
            team +=

            //engineer card
            `
            <div class="card">
                <div class="card-content">
                    <ul>
                    <li>Name: ${data[i].getName()}</li>
                    <li>Role: ${data[i].getRole()}</li>
                    <li>ID: ${data[i].getId()}</li>
                    <li>Email: ${data[i].getEmail()}</li>
                    <li>School: ${data[i].getGithub()}</li>
                </ul>
            </div>
        </div>
            `
        }
    }

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Team Profile Page </title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma-rtl.min.css">
    <!--CSS STYLESHEET LINK -->
</head>
<body>
<div>
    <div>
        <div>
            <!-- Start Manager Card -->
            <div class="card">
                <div class="card-content">
                    <ul>
                        <li>Name: ${data[0].getName()}</li>
                        <li>Role: ${data[0].getRole()}</li>
                        <li>ID: ${data[0].getId()}</li>
                        <li>Email: ${data[0].getEmail()}</li>
                        <li>Office Number: ${data[0].getOffice()}</li>
                    </ul>
                </div>
            </div>
            <!-- End Manager Card -->
        </div>
    </div>
    <!-- DYNAMIC DATA LOADS HERE -->
        ${team}

</div>        
</body>
`
}

module.exports = generateHTML;