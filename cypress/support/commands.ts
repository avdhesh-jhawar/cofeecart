import commonPage from "../pageobjects/commonPage"

//Verify page title
Cypress.Commands.add('verifyPageTitle', (title) => {
    cy.title().should('eq', title)
})

//Verify page text
Cypress.Commands.add('verifyPageText', (text) => {
    commonPage.elementByText(text).should('be.visible')
})