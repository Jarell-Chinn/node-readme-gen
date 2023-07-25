const fs = require("fs");
const { title } = require("process");
const badge = {
  badgeimg: "",
  badgelink: "",
  badgesection: "",
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = [
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]",
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]",
    "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]",
  ];
  if (license === "MIT") {
    badge.badgeimg = badges[0];
    return;
  } else if (license === "The Unlicense") {
    badge.badgeimg = badges[1];
    return;
  } else if (license === "Mozilla Public License 2.0") {
    badge.badgeimg = badges[2];
    return;
  } else if (license === "Eclipse Public License 2.0") {
    badge.badgeimg = badges[3];
    return;
  } else {
    badge.badgeimg = "nothing";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = [
    "(https://opensource.org/licenses/MIT)",
    "(http://unlicense.org/)",
    "(https://opensource.org/licenses/MPL-2.0)",
    "(https://opensource.org/licenses/EPL-1.0)",
  ];
  if (license === "MIT") {
    badge.badgelink = links[0];
    return;
  } else if (license === "The Unlicense") {
    badge.badgelink = links[1];
    return;
  } else if (license === "Mozilla Public License 2.0") {
    badge.badgelink = links[2];
    return;
  } else if (license === "Eclipse Public License 2.0") {
    badge.badgelink = links[3];
    return;
  } else {
    badge.badgelink = "nothing";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  let githubUrl = `https://github.com/${data.username}`;
  let markDownLayout = ` # ${data.title}

  ## Description

   ${data.description}

  ## Installation

   ${data.install}

  ## Usage 

   ${data.usage}

  ## License
 ${badge.badgeimg}${badge.badgelink}


  ## Contributing
 
  ## Tests
  

  ## Author info
  - Github ${githubUrl} 
  ## Questions
  put email here
  
  `;

  fs.writeFile("GenREADME.md", markDownLayout, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
  // return `# ${data.title}`;c
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
