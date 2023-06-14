class LoginPage{

    tf_username='#user-name'
    tf_password='#password'
    btn_login='#login-button'

    setUserName(username){
        cy.get(this.tf_username).type(username)
    }

    setPassword(password){
        cy.get(this.tf_password).type(password)
    }

    clickLogin(){
        cy.get(this.btn_login).click()
    }
}

export default LoginPage;