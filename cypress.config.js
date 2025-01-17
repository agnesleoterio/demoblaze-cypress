const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
    "screenshotsFolder": "cypress/screenshots",
    "video": true,
    "videoUploadOnPasses": false,
  
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
