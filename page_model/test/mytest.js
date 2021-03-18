import LoginPage from '../pages/LoginPage'
import productsPage from '../pages/productsPage'
import cart from '../pages/cart'
import { CREDENTIALS } from '../data/Constants'
import { PERSONALINFO } from '../data/Constants'
import userInfo from '../pages/userInfo'


fixture ('Login feature testing')
    .page `https://www.saucedemo.com/`

test ('1. login with a valid user', async t => {
    await t
        .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(LoginPage.pageTitle.exists).ok()
})

test ('2. login with a invalid user', async t => {
    await t
        .typeText(LoginPage.userNameField, CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(LoginPage.errorMessage.exists).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})

test ('3. logout from product\'s page', async t => {
    await t
        .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(productsPage.menuButton)
        .click(productsPage.logoutlink)

    await t.expect(LoginPage.login.exists).ok()

})

test ('4. Navegate to the shopping cart', async t => {
    await t
        .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(cart.cartIcon)


    await t.expect(cart.cartLabel.exists).ok()

})

test ('5. Add a single item to the shipping cart', async t => {
    await t
        .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(cart.saucelabsBackpack)
        .click(cart.cartIcon)

    await t.expect(cart.itemName.innerText).eql('Sauce Labs Backpack')

})


test ('6. Add multiple items to the shopping cart', async t => {
    await t
        .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(cart.item1)
        .click(cart.item2)
        .click(cart.item3)
        .click(cart.cartIcon)

    await t
        .expect(cart.itemName1.innerText).eql('Sauce Labs Bolt T-Shirt')
        .expect(cart.itemName2.innerText).eql('Test.allTheThings() T-Shirt (Red)')
        .expect(cart.itemName3.innerText).eql('Sauce Labs Fleece Jacket')

})

test ('7. Continue whith missing mail information', async t => {
    await t
        .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(cart.item1)
        .click(cart.item2)
        .click(cart.item3)
        .click(cart.cartIcon)
        .click(cart.chechOutButton)
        .click(cart.continueButton)
        

    await t
        .expect(cart.errorInformation.innerText).eql('Error: First Name is required')

})

test ('8. Fill user\'s information', async t => {
    await t
        .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(cart.item1)
        .click(cart.item2)
        .click(cart.item3)
        .click(cart.cartIcon)
        .click(cart.chechOutButton)
        .typeText(userInfo.userFirstNameField, PERSONALINFO.MYINFO.FIRSTNAME)
        .typeText(userInfo.userLastNameField, PERSONALINFO.MYINFO.LASTNAME)
        .typeText(userInfo.userZipCodeField, PERSONALINFO.MYINFO.ZIPCODE)
        .click(cart.continueButton)
    await t
        .expect(cart.chechOut.innerText).eql('Checkout: Overview')

})

test ('9. Fill order items', async t => {
    await t
        .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(cart.item1)
        .click(cart.item2)
        .click(cart.item3)
        .click(cart.cartIcon)
        .click(cart.chechOutButton)
        .typeText(userInfo.userFirstNameField, PERSONALINFO.MYINFO.FIRSTNAME)
        .typeText(userInfo.userLastNameField, PERSONALINFO.MYINFO.LASTNAME)
        .typeText(userInfo.userZipCodeField, PERSONALINFO.MYINFO.ZIPCODE)
        .click(cart.continueButton)

    await t
        .expect(cart.itemName1.innerText).eql('Sauce Labs Bolt T-Shirt')
        .expect(cart.itemName2.innerText).eql('Test.allTheThings() T-Shirt (Red)')
        .expect(cart.itemName3.innerText).eql('Sauce Labs Fleece Jacket')


})

test ('10. Complete a purchase', async t => {
    await t
        .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .click(cart.item1)
        .click(cart.item2)
        .click(cart.item3)
        .click(cart.cartIcon)
        .click(cart.chechOutButton)
        .typeText(userInfo.userFirstNameField, PERSONALINFO.MYINFO.FIRSTNAME)
        .typeText(userInfo.userLastNameField, PERSONALINFO.MYINFO.LASTNAME)
        .typeText(userInfo.userZipCodeField, PERSONALINFO.MYINFO.ZIPCODE)
        .click(cart.continueButton)
        .click(cart.finishButton)


    await t.expect(cart.messageOrder.innerText).eql('THANK YOU FOR YOUR ORDER')


})