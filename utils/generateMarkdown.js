function generateMarkdown(data) {
  return `# ${data.title}
  
  ${data.license}
  ## Description
  ${data.description}
  ## Table of Contents
  -[Description](#description)
  -[License](#license)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[Contribution](#contribution)
  -[Tests](#tests)
  ## License
${data.license}
  ## Installation
${data.installation}
  ## Usage
${data.usage}
  ## Credits
${data.credits}
  ## Contribution
${data.contribution}
  ## Tests
${data.tests}

## Questions
if you have any additional questions, please email me at -- ${data.questions}
My Github username -- @${data.username}
The link to my Github -- ${data.profileLink}

`;
}

export default generateMarkdown;
