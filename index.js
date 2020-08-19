const inquirer = require("inquirer");
const fs = require("fs");
const { readmeQuestions, populateReadMe } = require("./questions");
const licenses = require('./licenses');


// This is some code Mike the TA shared with me to help me understand Promises.
// const writeFileAsync = (fileName, data) => {
//     return fs.writeFile(fileName, data, (err) => {
//         if (err) return Promise.reject(err);
//         return Promise.resolve();
//     })
// };

inquirer.prompt(readmeQuestions).then(function ({ projectTitle, projectLink, description, installationInstructions, usage, developerName, email, gitHubUsername, contributing, tests, license }) {
    const { text: selectedLicense, badge: selectedBadge } = licenses.licenses.find((item) => item.title === license);
    const readME = populateReadMe(projectTitle, projectLink, description, installationInstructions, usage, developerName, email, gitHubUsername, contributing, tests, selectedLicense, selectedBadge);
    console.log(readME);
    fs.writeFile("newREADME.md", readME, (err) => {
        if (err) console.log(err);
        console.log('The file has been saved!');
    });
    // Continued code from Mike.
    // return writeFileAsync("newREADME.md", readME);
    // I didn't use this code because I thought I had a better understanding of what was represented above.
}).catch((err) => console.log(err));
