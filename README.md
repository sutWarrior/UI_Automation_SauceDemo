# UI_Automation_SauceDemo
This repo contains e2e tests written in Cypress for SauceDemo (https://www.saucedemo.com/) applications

# Test Setup

## Installations
You need to have Node.js installed before using Cypress.

Setup project folder on local machine : git clone https://github.com/sutWarrior/UI_Automation_SauceDemo.git

For rest of the installations move to project folder in command prompt and type

npm install

which will install Cypress and other supporting tools

## Run tests
If you installed Cypress via npm:
cypress test runner:npx cypress open

command line: 
npx cypress run --browser chrome --headed

command line(run selected specs): 
npx cypress run --spec "cypress\e2e\{spec_file}.cy.js" --browser chrome --headed

cypress headless mode:
npx cypress run --browser chrome

##  Information

Tests are located in cypress/e2e folder

Custom commands are located in cypress/support folder (commands.js)

data used in tests are  are located in cypress/fixtures folder (.json files)

pageobjects are located in cypress/pageObjects folder [only difference from cypress default project structure] -  using page object model(POM) design pattern and keeping selectors separately

cypress.config.js - Main config file where default behavior of Cypress can be modified
