const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generatemarkdown.js")

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
const writeToFile = (filename, data) => {
  
  fs.writeFile(filename + ".md", data, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Succesfully created file")
    }

  })
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    console.log(answers)
    fs.appendFile("README.md", generateMarkdown(answers), (err) => {
      if (err) {
        throw err
      }
    })
  })
  
}

// function call to initialize program
init();

  