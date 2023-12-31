const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports
    },
    //setting up the base URL of  application
    baseUrl: 'https://www.saucedemo.com',
    env: {
      "username": "standard_user",
      "password": "secret_sauce"
    }
  },
});
