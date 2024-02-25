const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// External questions file
const questions = require("./src/questions");
const questionsManager = questions.questionsManager;
const questionsEngineer = questions.questionsEngineer;
const questionsIntern = questions.questionsIntern;
const questionsTeammember = questions.questionsTeammember;

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// The Code to gather information about the development team members, and render the HTML file.

// Create a blank team array 
let team = [];

// Create inquiry for manager
const managerInquiry = () => {
    inquirer
        .prompt(questionsManager)
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
            addTeamMember();

        });
}
// Create init function to run the code
const init = () => { 
    managerInquiry();
}
// Create inquiry for engineer
const engineerInquiry = () => {
    inquirer
        .prompt(questionsEngineer)
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            addTeamMember();
        })
}

// Create inquiry for intern
const internInquiry = () => {
    inquirer
        .prompt(questionsIntern)
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            addTeamMember();
        })
}


// the function for adding team member
const addTeamMember = ()=> {
    inquirer
        .prompt(questionsTeammember)
        .then((answers) => {
            if(answers.type === 'Engineer') {
                engineerInquiry();
            } else if (answers.type === 'Intern') {
               internInquiry();
            } else {
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

init();