const inquirer = require("inquirer");
const fs = require("fs");
const { readmeQuestions, populateReadMe } = require("./questions");
const licenses = require('./licenses')


inquirer.prompt(readmeQuestions).then(function ({ projectTitle, projectLink, description, installationInstructions, usage, developerName, email, gitHubUsername, contributing, tests, license }) {
    let selectedLicense = '';
    let selectedBadge = '';
    licenses.licenses.forEach(function (item) {
        if (item.title === license.toString()) {
            //    console.log(license);
            //    console.log(item);
            selectedLicense = item.text;
            selectedBadge = item.badge;
        }
    })

    const readME = populateReadMe(projectTitle, projectLink, description, installationInstructions, usage, developerName, email, gitHubUsername, contributing, tests, selectedLicense, selectedBadge);
    console.log(readME);
    try {
        fs.writeFile("newREADME.md", readME, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    } catch (err) {
        console.log(err);
    }
})
