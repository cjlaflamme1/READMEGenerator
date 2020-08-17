const inquirer = require("inquirer");
const fs = require("fs");
const questions = require('./questions');
const { readmeQuestions } = require("./questions");

const populateReadMe = (projectTitle, projectLink, description, installationInstructions, usage, developerName, email, gitHubUsername, contributing, tests, license) => {
    `# ${projectTitle}


    <!-- TABLE OF CONTENTS -->
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
    
    ${license}`
}

inquirer.prompt(readmeQuestions).then(function(answers) {
    console.log(answers);
})
