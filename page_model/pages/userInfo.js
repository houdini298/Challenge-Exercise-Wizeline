import { Selector } from 'testcafe'

class userInfo { 
    constructor(){
        this.userFirstNameField = Selector('#first-name')
        this.userLastNameField = Selector('#last-name')
        this.userZipCodeField = Selector('#postal-code')

    }

}

export default new userInfo()