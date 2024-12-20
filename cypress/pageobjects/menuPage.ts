import * as menuData from "../fixtures/menuData"
import commonPage from "../pageobjects/commonPage"

class menuPage {

    // element to verify item on pay preview popup
    cartItem(value:String){
        return cy.xpath(`(//*[text()='${value}']//following::span)[1]`)
    }

    /**
       * Add coffee option on cart
       */
    addCoffeeOption(option: string) {
        // click on coffee option 
        commonPage.elementByDataCy(option).should('be.visible').click()
    }

    /**
       * verify cart count
       */
    verifyCartCount(count: string) {
        let cartCount =  `cart (${count})`
        // verify cart count increase to 
        commonPage.elementByText(cartCount).should('be.visible')
    }

    /**
      * Verify Total Price on cart
      */
    verifyCartTotalPrice(amount: string) {
        let totalPrice = "Total: $"+ amount
        // verify total price 
        commonPage.elementByDataTest(menuData.elements.totalButton).should('have.text',totalPrice)
    }

    /**
     * Add coffee option while hovering on total button
     */
    addCoffeeOptionbHoveringTotalButton(button: string) {
        // mouse hover on total button
        commonPage.elementByDataTest(menuData.elements.totalButton).trigger("mouseover", { force: true })
        //click on mocha plus icon
        commonPage.elementByAriaLabel(button).should('be.visible').click()
    }

    /**
      * verify details on lucky day card and click on yes button
      */
    clickOnYesButton() {
        //click on yesbutton
        commonPage.elementByText(menuData.elements.yesButton).should('be.visible').click()
    }

    /**
       * click on total button
       */
    clickOnTotalButton() {
        commonPage.elementByDataTest(menuData.elements.totalButton).should('be.visible').click()
    }

    /**
     * verify all added item on Cart
     */
    verifyCartItem(option:string, count:string) {
        //verify item on pay preview
        this.cartItem(option).should('contain.text', count)
    }
    

}
export default new menuPage