const inquirer = require("inquirer");
const fs = require("fs");
const { readmeQuestions, populateReadMe } = require("./questions");


inquirer.prompt(readmeQuestions).then(function({projectTitle, projectLink, description, installationInstructions, usage, developerName, email, gitHubUsername, contributing, tests, license}) {
    console.log(populateReadMe(projectTitle, projectLink, description, installationInstructions, usage, developerName, email, gitHubUsername, contributing, tests, license));
})
