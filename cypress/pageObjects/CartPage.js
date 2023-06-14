class CartPage{

    link_shopping_cart='.shopping_cart_link'
    lbl_cart='span.title'
    btn_remove_item='.item_pricebar button'

    clickShoppingCart(){
        cy.get(this.link_shopping_cart).click()
    }

    clickRemove(){
        cy.get(this.btn_remove_item).click()
    }

}

export default CartPage;