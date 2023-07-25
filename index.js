// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { generateMarkdown } = require("./utils/generateMarkdown");
// const { default: Choices } = require("inquirer/lib/objects/choices");

const questions = [
  "What is the title of your project?",
  "Provide a short description of the project.",
  "How to install?",
  "How do you use it?",
  "Any other contributors?",
  "Any test instructions?",
  "licenses?",
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
      type: "checkbox",
      choices: licenseOptions,
      name: "licenses",
      message: questions[6],
    },
  ])
  .then((data) => {
    let title = data.title;
    let description = data.description;
    let install = data.install;
    let usage = data.usage;
    let contributors = data.contributors;
    let testInstructions = data.testInstructions;
    let fileName = "goofy";
    console.log(fileName);
    generateMarkdown(fileName);

    // function writeToFile(fileName, data) {}
    // console.log(data);
  });
// add a package that would import generate file
// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
//  what is being asked?
// title of project
// sections entitled
// description
// Table of contents
// Installation
// Usage
// License
// Contributing
// tests
// questions
// entered title is displayed on the README
// entetered info is added to different sections of the page
// a badge for that license is added near the top of the README and a link to the liicense description
// github user name is added to the questions section
// email is added to the question section
// TOC is added and each item will jump link to the correct section of the page

// import - inquire - which is a command line prompt library
// writeToFile -- built in JS library that we will be importing in
// path variable will be imported --
// import generateMarket object
// questions array - array of objects
// look up documentation on inquire how an object should to prompt the user correctly
//
// Title of project, Description, Github UserName, Email, License type, Installation, Usage, Contributers
// option selector will have badges
// badge generator

// const lib = require("./utils/generateMarkdown.js");
// const Test = {
//   title: "Testing Title",
// };

// const fs = require("fs");

// fs.writeFile("log.md", process.argv[2], (err) =>
//   err ? console.error(err) : console.log("Success!")
// );

// const Test = process.argv[2];

// const result = lib.generateMarkdown(Test);

// console.log(`${result}`);
