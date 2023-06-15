# UI_Automation_SauceDemo
This repo contains e2e tests written in Cypress for SauceDemo (https://www.saucedemo.com/) applications

# Test Setup

## Installations
You need to have Node.js installed before using Cypress.

For rest of the installations move to project folder in command prompt and type

npm install

which will install Cypress and other supporting tools

## Run tests
If you installed Cypress via npm:
cypress test runner:npx cypress open

command line: 
npx cypress run --browser chrome --headed

command line(specs indivially): 
npx cypress run --spec "cypress\e2e\{spec_file}.cy.js" --browser chrome --headed

cypress headless mode:
npx cypress run --spec "cypress\e2e\login.cy.js" --browser chrome
