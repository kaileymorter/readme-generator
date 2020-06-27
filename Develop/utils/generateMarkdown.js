// function to generate badges for README
const generateBadge = badgeText => {
  if (badgeText === 'GNU AGPLv3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (badgeText === 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (badgeText === 'GNU LGPLv3') {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (badgeText === 'Mozilla Public 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (badgeText === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (badgeText === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (badgeText === 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } 
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${generateBadge(data.license)}

  ## Description:
  ${data.description}

  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Credits:
  ${data.credits}

  ## License:
  ${data.license}

  ## Contributing:
  ${data.contribution}

  ## Tests:
  ${data.tests}

  ## Questions:
  [My Github Account](github.com/${data.github})

  If you have additional questions about this project, please reach me at: ${data.email}
`;
}

module.exports = generateMarkdown;
