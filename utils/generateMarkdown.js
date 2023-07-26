const fs = require("fs");
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

   ## Table of contents

   -[Description](#description)
   
   -[Installation](#installation)
   
   -[License](#license)
   
   -[Contributing](#contributing)
   
   -[Tests](#tests)
   
   -[Author](#author)
   
   -[Questions](#questions)
   
   -[Usage](#usage)
   

  ## License

  ${badge.badgeimg}${badge.badgelink}

  ## Contributing

  ${data.contributors}

  ## Tests

  ${data.testInstructions}

  ## Author info

  - Github ${githubUrl} 

  ## Questions
  If you have any questions about this project you can reach me at

  ${githubUrl}
  
  ${data.email}
  
  `;

  fs.writeFile("GenREADME.md", markDownLayout, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
};
