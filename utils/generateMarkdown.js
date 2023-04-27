// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgev2(license) {
  if (!license) {
    return '';
  }

  switch (license.toLowerCase()) {
    case 'mit':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'apache':
    case 'apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    default:
      return '';
  }
}

function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  switch (license.toLowerCase()) {
    case 'mit':
      return 'https://opensource.org/licenses/MIT';
    case 'apache':
    case 'apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  switch (license.toLowerCase()) {
    case 'mit':
      return `## License\n\nThis project is licensed under the [MIT License](${getLicenseLink(license)}).`;
    case 'apache':
    case 'apache 2.0':
      return `## License\n\nThis project is licensed under the [Apache License 2.0](${getLicenseLink(license)}).`;
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n${data.description}\n\n## Table of Contents\n\n- [Installation](#installation)\n- 
  [Usage](#usage)\n\n## Installation\n\n${data.installation}\n\n## 
  Usage\n\n${data.usage}\n\n${renderLicenseBadge(data.license)}`;
}

module.exports = generateMarkdown;