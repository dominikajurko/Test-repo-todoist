const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pdyo3k',
  e2e: {
    baseUrl: 'https://todoist.com/',
    videosFolder: 'cypress\videos',
    screenshotsFolder: 'cypress/screenshots',
    downloadsFolder: 'cypress/downloads',
    trashAssetsBeforeRuns: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalSessionAndOrigin: true,
    experimentalSessionSupport:true,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
