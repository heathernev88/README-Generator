const license = require("./license.js");

// function to generate markdown for README
function generateMarkdown(data) {
   
  return `
  # Title: ${data.title}
  
  ## Description:
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributers](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
  * [Badges](#badges)
  
  ## Installation Instructions:
  For installation follow these instructions: ${data.instructions}
  ## Usage Information:
  ${data.usage}
  ## Contributers:
  I'd like to thank ${data.contributing} for their contributions on this project!
  ## Test Instruction:
  For testing please follow these instructions: ${data.instructions}
## Questions:
If you have any questions please feel free to email me at ${data.email} or contact me at ${data.username} on GitHub!
  ## License: 
  ${data.license}

`;
}

module.exports = generateMarkdown;
