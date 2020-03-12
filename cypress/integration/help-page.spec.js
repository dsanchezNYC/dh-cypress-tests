/// <reference types="cypress" />

import { HelpPage } from "../page-objects/help-page"


describe('Help Page tests', () => {

    const hp = new HelpPage

    describe('Sanity tests', () => {

    it('Page displayed successfully', () => {
        hp.visitHelpPage()
        hp.browseLink().should('be.visible')
        hp.whoWeAreLink().should('be.visible')
        hp.giftsLink().should('be.visible')
        hp.dailyHarvestLogo().should('be.visible')
        hp.helpLink().should('be.visible')
        hp.loginLink().should('be.visible')
        hp.getStartedLink().should('be.visible')
   })

   it('Ask a queston search feature loads successfully', () => {
        hp.searchInput().should('be.visible')
        hp.searchButton().should('be.visible')
   })

})
})