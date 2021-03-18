import { Selector } from 'testcafe'

class productsPage { 
    constructor(){
        this.errorMessage = Selector('#inventory_filter_container > div')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.logoutlink = Selector('#logout_sidebar_link')


    }

}

export default new productsPage()