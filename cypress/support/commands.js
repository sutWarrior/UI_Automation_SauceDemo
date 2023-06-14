// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from "../pageObjects/LoginPage"
import InventoryPage from "../pageObjects/InventoryPage"


const loginPage=new LoginPage();
const inventoryPage=new InventoryPage();

//custom comand for clicking on link using label
Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click()
})

//custom command for login
Cypress.Commands.add('login',(username,password) =>{
    loginPage.setUserName(username)
    loginPage.setPassword(password)
    loginPage.clickLogin()   
})

//custom command for verify item count on shopping cart
Cypress.Commands.add('verifyCartItemCount',(expectedItemCount) =>{
    inventoryPage.verifyCartItemCount(expectedItemCount) 
})