class InventoryPage{

    lbl_inventory_item_name='#user-name'
    tf_password='#password'
    btn_login='#login-button'

    setUserName(username){
        cy.get(this.tf_username).type(username)
    }

    setPassword(password){
        cy.get(this.tf_password).type(password)
    }

    clickSubmit(){
        cy.get(this.btn_login).click()
    }
}

export default LoginPage;