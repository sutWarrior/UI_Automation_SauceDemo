import LoginPage from "../pageObjects/LoginPage"

const username=Cypress.env('username')
const password=Cypress.env('password')
const loginPage=new LoginPage();

describe('Verify login functionality', () => {

  //Access data through hooks for multiple it blocks
      let login_test_data
      before(()=>{
        cy.fixture('login_page_data').then((data)=>{
          login_test_data=data
        })

      })

      it('verify login with valid creds', () => {
        cy.visit('/')
        cy.login(username,password)   
        cy.contains(login_test_data.expected_success).should('be.visible')
              
      })

      it('verify login with valid username and invalid password', () => {
        cy.visit('/')
        cy.login(username,"invalid")   
        cy.contains(login_test_data.expected_fail_invalid_creds).should('be.visible') 
      })

      it('verify Login button is clicked without filling the username and password', () => {
        cy.visit('/')
        loginPage.clickLogin()
        cy.contains(login_test_data.expected_fail_blank_creds).should('be.visible') 
      })
  })