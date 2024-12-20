class commonPage {
    /**
         * Get element by data-cy attribute
         */
    elementByDataCy(value: string) {
        return cy.get(`[data-cy="${value}"]`, { timeout: 10000 })
    }

    /**
         * Get element by data-test attribute
         */
    elementByDataTest(value: string) {
        return cy.get(`[data-test="${value}"]`, { timeout: 10000 })
    }

    /**
       * Get element by aria-label attribute
       */
    elementByAriaLabel(value: string) {
        return cy.get(`[aria-label="${value}"]`, { timeout: 10000 })
    }

    /**
   * Get element by text
   */
    elementByText(value: any) {
        return cy.xpath(`//*[text()="${value}"]`, { timeout: 20000 })
    }

    /**
    * Get element by title attribute
    */
    elementByTitle(value: string) {
        return cy.get(`[title="${value}"]`, { timeout: 10000 })
    }

     /**
     * Get element by id attribute
     */
     elementById(value: string) {
        return cy.get(`#${value}`)
    }
}
export default new commonPage