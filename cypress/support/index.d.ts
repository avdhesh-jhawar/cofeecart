declare namespace Cypress {
    interface Chainable {
      verifyPageTitle(title: string): Cypress.Chainable<Element>;
      verifyPageText(title: string): Cypress.Chainable<Element>;
    }
  }
  