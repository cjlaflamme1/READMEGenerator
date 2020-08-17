const inquirer = require("inquirer");
const fs = require("fs");
const { readmeQuestions, populateReadMe } = require("./questions");


inquirer.prompt(readmeQuestions).then(function({projectTitle, projectLink, description, installationInstructions, usage, developerName, email, gitHubUsername, contributing, tests, license}) {
    const readME = populateReadMe(projectTitle, projectLink, description, installationInstructions, usage, developerName, email, gitHubUsername, contributing, tests, license);
    try {
    fs.writeFile("newREADME.md", readME, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
    } catch (err) {
        console.log(err);
    }
})
