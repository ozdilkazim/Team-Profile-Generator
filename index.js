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

const managerInquiry = () => {
    inquirer
        .prompt([
            {
                type : 'input',
                name : 'name',
                message : 'What is the name of the manager?'
            }
            {
                type : 'input',
                name : 'id',
                message : 'What is the ID of the manager?'
            }
            {
                type : 'input',
                name : 'email',
                message : 'What is the email of the manager?'
            }
            {
                type : 'input',
                name : 'officeNumber',
                message : 'What is the office number of the manager?'
            }
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamArray.push(manager);
            addTeamMember();

        });

}