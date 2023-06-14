import LoginPage from "../pageObjects/LoginPage"

const login=new LoginPage();

describe('Verify login functionality', () => {

      it.only('verify login with valid creds', () => {
        cy.visit('/')

        cy.fixture('login_credentials').then((data)=>{      
          cy.login(data.username,data.password)//custom command
        }
        )
        cy.contains('Products').should('be.visible')
        cy.clickLink("Sauce Labs Backpack") //custom command
        //cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('div[class="inventory_details_name large_size"]').should('have.text','Sauce Labs Backpack')
      })
  })