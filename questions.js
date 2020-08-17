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
            "License 1",
            "License 2",
            "License 3",
            "License 4",
        ]
     },
]

module.exports = {
    readmeQuestions: readmeQuestions
};