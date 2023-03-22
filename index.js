import inquirer from "inquirer";
import { createRequire } from "module";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs/promises";

const require = createRequire(import.meta.url);

async function main() {
  const questions = [
    {
      type: "input",
      message: "What do you want your README file to be named?",
      name: "fileName",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your project all about?",
      name: "description",
    },
    {
      type: "list",
      message: "What kind of license is your project?",
      name: "license",
      choices: [
        {
          name: "MIT",
          value:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        },
        {
          name: "ISC",
          value:
            "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        },
        {
          name: "BOOST",
          value:
            "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
        },
        { name: "None", value: false },
      ],
    },
    {
      type: "input",
      message: "What contributing factors are allowed for your project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Enter your email address if the user has any questions",
      name: "questions",
    },
    {
      type: "input",
      message: "Please add your Github username",
      name: "username",
    },
    {
      type: "input",
      message: "Please add a link to you Github profile",
      name: "profileLink",
    },
    {
      type: "input",
      message:
        "What are the steps required to install your project? Provide instructions for use.",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide examples on how to test your project if applicable",
      name: "test",
    },
    {
      type: "input",
      message: "Please provide instructions and example for use",
      name: "usage",
    },
  ];

  const answers = await inquirer.prompt(questions);
  const readmeContent = generateMarkdown(answers);

  try {
    await fs.writeFile(`${answers.fileName}.md`, readmeContent);
    console.log("README.md has been generated!");
  } catch (error) {
    console.error("Error while generating the README.md file:", error);
  }
}

main();
