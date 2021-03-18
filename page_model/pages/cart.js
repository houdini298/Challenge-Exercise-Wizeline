import { Selector } from 'testcafe'

class cart { 
    constructor(){
        this.cartIcon = Selector('#shopping_cart_container > a > svg > path')
        this.cartLabel = Selector('#contents_wrapper > div.subheader')
        this.saucelabsBackpack = Selector('#inventory_container > div > div:nth-child(1) > div.pricebar > button')
        this.itemName = Selector ('#item_4_title_link')
        this.item1 = Selector ('#inventory_container > div > div:nth-child(3) > div.pricebar > button')
        this.itemName1 = Selector ('#item_1_title_link')
        this.item2 = Selector ('#inventory_container > div > div:nth-child(6) > div.pricebar > button')
        this.itemName2 = Selector ('#item_3_title_link')
        this.item3 = Selector ('#inventory_container > div > div:nth-child(4) > div.pricebar > button')
        this.itemName3 = Selector ('#item_5_title_link')
        this.chechOut = Selector ('#contents_wrapper > div.subheader')
        this.chechOutButton = Selector ('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button')
        this.continueButton = Selector ('#checkout_info_container > div > form > div.checkout_buttons > input')
        this.finishButton = Selector ('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button')
        this.errorInformation = Selector('#checkout_info_container > div > form > h3')
        this.messageOrder = Selector ('#checkout_complete_container > h2')

    }

}

export default new cart()