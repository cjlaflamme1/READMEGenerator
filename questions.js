const licenses = require('./licenses');

const readmeQuestions = [
    {
       type: "input",
       message: "What is the title of your project?",
       name: "projectTitle"
    },
    {
        type: "input",
        message: "What is the link to you project?",
        name: "projectLink"
     },
     {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description"
     },
     {
        type: "input",
        message: "What are the instructions for installation?",
        name: "installationInstructions"
     },
     {
        type: "input",
        message: "What are the instructions for usage?",
        name: "usage"
     },
     {
        type: "input",
        message: "What is the developers name?",
        name: "developerName"
     },
     {
        type: "input",
        message: "What is the developers email?",
        name: "email"
     },
     {
        type: "input",
        message: "What is the developers GitHub username?",
        name: "gitHubUsername"
     },
     {
        type: "input",
        message: "What are you instructions for contributions?",
        name: "contributing"
     },
     {
        type: "input",
        message: "How do you run tests on your application?",
        name: "tests"
     },
     {
        type: "list",
        message: "What license would you like to use for your project?",
        name: "license", 
        choices: [
            licenses.licenses[0].title,
            licenses.licenses[1].title,
            licenses.licenses[2].title
        ]
     },
];

const populateReadMe = (projectTitle, projectLink, description, installationInstructions, usage, developerName, email, gitHubUsername, contributing, tests, selectedLicense, selectedBadge) => {
    return `# ${projectTitle}
${selectedBadge}


## Table of Contents
* [About the Project](#about-the-project)
    * [Finished Project Link](#finished-project)
    * [Project Screenshot](#project-screenshot)
* [Installation Instructions](#installation-instructions)
* [Usage](#usage)
* [Questions](#questions)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
    
## About The Project
    
${description}
    
    
### Finished Project
Project Link: [${projectTitle}](${projectLink})
    
    
### Project Screenshot
    
    
    
## Installation Instructions
    
${installationInstructions}
    
## Usage
    
${usage}
    
## Questions
    
### ${developerName}
* [${email}](${email})
* [https://github.com/${gitHubUsername}](https://github.com/${gitHubUsername})
    
## Contributing
    
${contributing}
    
## Tests
    
${tests}
    
# License
    
${selectedLicense}`
}


module.exports = {
    readmeQuestions,
    populateReadMe
};