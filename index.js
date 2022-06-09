let teamData = []

//link to HTML
const generateHTML = require('./utils/generateHTML');

//node packages
const inquirer = require('inquirer');
const fs = require('fs');

//team member profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//prompt for Manager --> name, email, id, office number
const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your manager's ID?",
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log("Please enter your manager's ID!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?",
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log("Please enter your manager's office number!");
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
};

const createTeam = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "nextPerson",
            message: "Please choose one of the following options:",
            choices: ["Add Intern", "Add Engineer", "Done editing my team"],
        },
    ])
    .then((userSelection) => {
        if (userSelection.nextPerson === "Add Intern") {
            addIntern();
        } else if (userSelection.nextPerson === "Add Engineer") {
            addEngineer();
        } else if (userSelection.nextPerson === "Done editing my team") {
            writeFile(generateHTML(teamData));
        }
    });
};

//new function for employees added to team
function addIntern() {

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please provide your intern's name.",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's ID?",
            validate: userInput => {
                if (isNaN(userInput)) {
                    console.log("Please enter your intern's ID!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's email!");
                    return false;
                }
            }
        }
    ])
    .then((data) => {
        data.role = "Intern";
        teamData.push(new Intern (data.name, data.id, data.email, data.school));
        createTeam();
    })
};
    function addEngineer() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your engineer's name?",
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log("Please enter your engineer's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "name",
                message: "What is your engineer's ID?",
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log("Please enter your engineer's ID!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "name",
                message: "What is your engineer's email?",
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log("Please enter your engineer's email!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "name",
                message: "What is your engineer's github",
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log("Please enter your engineer's github!");
                        return false;
                    }
                }
            },
        ])
        .then((data) => {
            data.role = "Engineer";
            teamData.push(new Engineer (data.name, data.id, data.email, data.github))
        })
    }

//IF INQUIRER STOPS SHOWING PROMPTS
//update version of inquirer
//remove ^ ? maybe get different version

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

addManager().then((data) => {
    console.log("addManager", {data})
    data.role = "Manager";
    teamData.push(new Manager(data.name, data.id, data.email, data.officeNumber));
    createTeam();
});
