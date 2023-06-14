import CartPage from "../pageObjects/CartPage"

const cartPage=new CartPage();

describe('Verify Cart functionality', () => {

      beforeEach( () => {
        cy.visit('/')
        cy.login(Cypress.env('username'),Cypress.env('password'))
      })

      //Access data through hooks for multiple it blocks
      let cart_test_data
      let inventory_test_data
      before(()=>{
        cy.fixture('cart_page_data').then((data)=>{
            cart_test_data=data
        })
        cy.fixture('inventory_page_data').then((data)=>{
            inventory_test_data=data
          })
      })


      it('verify user can click on shopping cart', () => {
        cartPage.clickShoppingCart()
        cy.get(cartPage.lbl_cart).should('have.text',cart_test_data.expected_title)
      })

    //   it.only('verify user can remove item on shopping cart', () => {
    //     cy.clickLink(inventory_test_data.click_item_name) //custom command
    //     cartPage.clickShoppingCart()
    //     cartPage.clickRemove()
    //     cy.verifyCartItemCount('') //custom command
    //   })
  })