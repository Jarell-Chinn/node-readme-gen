// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
} = require("./utils/generateMarkdown");
// const { default: Choices } = require("inquirer/lib/objects/choices");

const questions = [
  "What is the title of your project?",
  "Provide a short description of the project.",
  "How to install?",
  "How do you use it?",
  "Any other contributors?",
  "Any test instructions?",
  "Licenses?",
  "What is your Github user name?",
  "Email for questions",
];
const licenseOptions = [
  "MIT",
  "The Unlicense",
  "Mozilla Public License 2.0",
  "Eclipse Public License 2.0",
];

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: questions[0],
    },
    {
      type: "input",
      name: "description",
      message: questions[1],
    },
    {
      type: "input",
      name: "install",
      message: questions[2],
    },
    {
      type: "input",
      name: "usage",
      message: questions[3],
    },
    {
      type: "input",
      name: "contributors",
      message: questions[4],
    },
    {
      type: "input",
      name: "testInstructions",
      message: questions[5],
    },
    {
      type: "list",
      choices: licenseOptions,
      name: "licenseSelection",
      message: questions[6],
    },
    {
      type: "input",
      name: "username",
      message: questions[7],
    },
    {
      type: "input",
      name: "email",
      message: questions[8],
    },
  ])
  .then((data) => {
    let license = data.licenseSelection;
    renderLicenseBadge(license);
    renderLicenseLink(license);
    generateMarkdown(data);
  });
