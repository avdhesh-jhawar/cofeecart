import * as menuData from "../fixtures/menuData"
import commonPage from "../pageobjects/commonPage"
import menuPage from "../pageobjects/menuPage"

var emptyCartPrice:Number = 0.00
var mochaPrice:Number =  8.00
var americanoPrice:Number = 7.00
var espressoPrice:Number = 10.00
var discountedMochaPrice:Number = 4.00

var totalPrice: Number

describe("Menu Page Scenario", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false
    })

    beforeEach(() => {
        cy.clearCookies()
        cy.visit('/')
    });

    afterEach(() => {
        cy.clearCookies()
    });


    it("Scenario 1: Add item into cart and verify Cart items , price and free gift added on cart", () => {
        // verify menu page title 
        cy.verifyPageTitle(menuData.menuPageTitle)

        // verify empty cart price and cart count before adding any item
        menuPage.verifyCartTotalPrice(emptyCartPrice.toFixed(2))
        menuPage.verifyCartCount("0")

        // click on Mocha option
        menuPage.addCoffeeOption(menuData.elements.mochaOption)

        // verify cart count increase to 1, cart price and Mocha added to the cart
        menuPage.verifyCartCount("1")
        menuPage.verifyCartTotalPrice(mochaPrice.toFixed(2))
        commonPage.elementByDataTest(menuData.elements.totalButton).trigger("mouseover", { force: true })
        menuPage.verifyCartItem("Mocha","1")


        // click on Americano option 
        menuPage.addCoffeeOption(menuData.elements.americanoOption)

        // verify cart count increase to 2, cart price and Americano added to the cart
        menuPage.verifyCartCount("2")
        totalPrice = +mochaPrice + +americanoPrice
        menuPage.verifyCartTotalPrice(totalPrice.toFixed(2))
        commonPage.elementByDataTest(menuData.elements.totalButton).trigger("mouseover", { force: true })
        menuPage.verifyCartItem("Americano","1")

        // add coffee option hovering on checkout button
        menuPage.addCoffeeOptionbHoveringTotalButton(menuData.elements.addMochaPlusIcon)

        // verify cart count increase to 3, cart price and Mocha added to the cart
        menuPage.verifyCartCount("3")
        totalPrice = +mochaPrice*2 + +americanoPrice
        menuPage.verifyCartTotalPrice(totalPrice.toFixed(2))
        commonPage.elementByDataTest(menuData.elements.totalButton).trigger("mouseover", { force: true })
        menuPage.verifyCartItem("Mocha","2")

        // click on espresso option 3 times
        menuPage.addCoffeeOption(menuData.elements.espressoOption)
        menuPage.addCoffeeOption(menuData.elements.espressoOption)
        menuPage.addCoffeeOption(menuData.elements.espressoOption)

        // verify cart count increase to 6, cart price and Espresso added to the cart
        menuPage.verifyCartCount("6") 
        totalPrice = +mochaPrice*2 + +americanoPrice + +espressoPrice*3
        menuPage.verifyCartTotalPrice(totalPrice.toFixed(2))
        commonPage.elementByDataTest(menuData.elements.totalButton).trigger("mouseover", { force: true })
        menuPage.verifyCartItem("Espresso","3")

        // verify details on lucky day card
        cy.verifyPageText(menuData.elements.luckydayCardText)
        commonPage.elementByDataCy(menuData.elements.discountedMochaOption).should('be.visible')

        //click on yes button on luck day card
        menuPage.clickOnYesButton()

        // verify cart count increase to 7, cart price and discounted Mocha added to the cart
        menuPage.verifyCartCount("7")
        totalPrice = +mochaPrice*2 + +americanoPrice + +espressoPrice*3 + +discountedMochaPrice
        menuPage.verifyCartTotalPrice(totalPrice.toFixed(2))
        commonPage.elementByDataTest(menuData.elements.totalButton).trigger("mouseover", { force: true })
        menuPage.verifyCartItem("(Discounted) Mocha","1")

        // verify each items on price preview
        commonPage.elementByDataTest(menuData.elements.totalButton).trigger("mouseover", { force: true })
        menuPage.verifyCartItem("Mocha","2")
        menuPage.verifyCartItem("Espresso","3")
        menuPage.verifyCartItem("Americano","1")
        menuPage.verifyCartItem("(Discounted) Mocha","1")

        // click on total button and verify payment details popup
        menuPage.clickOnTotalButton()
        cy.verifyPageText(menuData.elements.paymentDetailsPopupHeadingText)
        cy.verifyPageText(menuData.elements.paymentDetailsPopupText)
        commonPage.elementById(menuData.elements.submitButton).should('be.visible')
    })
})