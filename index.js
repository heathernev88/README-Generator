const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [

    {
      type: "input",
      message: "What is the title of your application?",
      name: "title"
    },
    {
      type: "input",
      message: "Please provide a brief description of your application",
      name: "description"
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email"
    },
    {
      type: "input",
      message: "Please provide instructions for installation",
      name: "instructions"
    },
    {
      type: "input",
      message: "Please provide usage information",
      name: "usage"
    },
    {
      type: "input",
      message: "Please provide contribution guidelines",
      name: "contribution"
    },
    {
      type: "input",
      message: "Please provide test instructions",
      name: "test"
    },
    {
      type: 'list',
      message: 'Please choose a license from the following: (use arrow to choose response)',
      choices: ['MIT', 'Apache', 'GNU GPLv3'],
      name: 'license'
  }

  ];

  // function to write README file
function writeToFile(filename, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

  