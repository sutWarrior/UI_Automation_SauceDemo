import InventoryPage from "../pageObjects/InventoryPage"

const inventoryPage=new InventoryPage();

describe('Verify Inventory functionality', () => {

      beforeEach( () => {
        cy.visit('/')
        cy.login(Cypress.env('username'),Cypress.env('password'))
      })

      //Access data through hooks for multiple it blocks
      let inventory_test_data
      before(()=>{
        cy.fixture('inventory_page_data').then((data)=>{
          inventory_test_data=data
        })
      })

      it('verify user can click on item link', () => {
        cy.clickLink(inventory_test_data.click_item_name) //custom command
        cy.contains(inventory_test_data.click_item_name).should('be.visible')
        //cy.get('div[class="inventory_details_name large_size"]').should('have.text','Sauce Labs Backpack')
      })

      it('verify user can add item to cart', () => {
        inventoryPage.clickAddToCartItem()
        // inventoryPage.verifyCartItemCount('1')
        cy.verifyCartItemCount('1') //custom command
      })
  })