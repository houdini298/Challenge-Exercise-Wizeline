import { Selector } from 'testcafe'

class LoginPage { 
    constructor(){
        this.userNameField = Selector('input[name="user-name"]')
        this.passwordField = Selector('input[name="password"]')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('#login_button_container > div > form > h3')
        this.pageTitle = Selector('#inventory_filter_container > div')
        this.login = Selector('#login_credentials > h4')

    }

}

export default new LoginPage()