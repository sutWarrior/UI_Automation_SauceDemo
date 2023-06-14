class InventoryPage{

    btn_add_to_cart_of_item='#add-to-cart-sauce-labs-backpack'
    // btn_add_to_cart_of_item='button[id^="add-to-cart"]:first-of-type'
    lbl_cart_item_actual_count='.shopping_cart_link span'

    clickAddToCartItem(){
        cy.get(this.btn_add_to_cart_of_item).click()
    }

    verifyCartItemCount(expectedItemCount){
        cy.get(this.lbl_cart_item_actual_count).should('have.text',expectedItemCount)
    }

}

export default InventoryPage;