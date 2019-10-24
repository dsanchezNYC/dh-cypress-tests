/// <reference types="cypress" />

import { HelpPage } from "../page-objects/help-page"


describe('Help Page tests', () => {

    const hp = new HelpPage

    describe('Smoke tests', () => {

    it('Help page displayed successfully', () => {
        hp.visitHelpPage()
        //cy.wait(2000)
        hp.navLeftBrowse().should('be.visible')
        hp.navLeftWhoWeAre().should('be.visible')
        hp.navLeftGifts().should('be.visible')
        hp.dailyHarvestLogo().should('be.visible')
        hp.navRightHelp().should('be.visible')
        hp.navRightLogin().should('be.visible')
        hp.navRightGetStarted().should('be.visible')
   })

   it('Ask a queston search feature loads successfully', () => {
        hp.searchInput().should('be.visible')
        hp.searchButton().should('be.visible')
   })

})
})