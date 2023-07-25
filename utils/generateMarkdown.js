const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(fileName) {
  fs.writeFile("README.md", fileName, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
  // return `# ${data.title}`;
}

// generateMarkdown();
// module.exports = generateMarkdown;

// console.log(fs);

function adding(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

module.exports = { adding };
module.exports = { generateMarkdown };
