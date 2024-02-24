const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// The Code to gather information about the development team members, and render the HTML file.

// Create a blank team array 
let team = [];

// Create inquiry for manager
const managerInquiry = () => {
    inquirer
        .prompt([
            {
                type : 'input',
                name : 'name',
                message : 'What is the name of the manager?'
            },
            {
                type : 'input',
                name : 'id',
                message : 'What is the ID of the manager?'
            },
            {
                type : 'input',
                name : 'email',
                message : 'What is the email of the manager?'
            },
            {
                type : 'input',
                name : 'officeNumber',
                message : 'What is the office number of the manager?'
            },
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
            addTeamMember();

        });
}
// Create inquiry for engineer
const engineerInquiry = () => {
    inquirer
        .prompt([
            {
                type : 'input',
                name : 'name',
                message : 'What is the name of the engineer?'
            },
            {
                type : 'input',
                name : 'id',
                message : 'What is the ID of the engineer?'
            },
            {
                type : 'input',
                name : 'email',
                message : 'What is the email of the engineer?'
            },
            {
                type : 'input',
                name : 'github',
                message : 'What is the Github username of the engineer?'
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            addTeamMember();
        })
}

// Create inquiry for intern
const internInquiry = () => {
    inquirer
        .prompt([
            {
                type : 'input',
                name : 'name',
                message : 'What is the name of the intern?',
            },
            {
                type : 'input',
                name : 'id',
                message : 'What is the ID of the intern?',
            },
            {
                type : 'input',
                name : 'email',
                message : 'What is the email of the intern?',
            },
            {
                type : 'input',
                name : 'school',
                message : 'What is the school of the intern?',
            },
        ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            addTeamMember();
        })
}


// the function for adding team member
const addTeamMember = ()=> {
    inquirer
        .prompt([
            {
                type : 'list',
                name : 'type',
                message : 'Would you like to add an Enginner or Intern?',
                choices : ['Engineer','Intern','None' ]
            },
        ])
        .then((answers) => {
            if(answers.type === 'Engineer') {
                engineerInquiry();
            } else if (answers.type === 'Intern') {
               internInquiry();
            } else {
                console.log(team);
                writeFile()
            }
        })
}

// Create file 
async function writeFile() {
    // Check if the output folder exists 
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    } else {
    await fs.writeFile(outputPath, render(team), (err)=> {
        console.log(err);
        })
    }
}

managerInquiry();