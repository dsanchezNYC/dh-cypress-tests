/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"


describe('Help Page tests', () => {

    const hp = new HomePage
    
    describe('Smoke tests', () => {})

    it('Home page displayed successfully', () => {
        hp.visitHomePage()
        //cy.wait(2000)
        hp.loginHeaderLink().should('be.visible')
        hp.primaryNavBrowse().should('be.visible')
        hp.primaryNavAll().should('not.be.visible')
        hp.primaryNavSmoothies().should('not.be.visible')
        hp.primaryNavHarvestBowls().should('not.be.visible')
        hp.primaryNavSoups().should('not.be.visible')
        hp.primaryNavBites().should('not.be.visible')
        hp.primaryNavOatBowls().should('not.be.visible')
        hp.primaryNavChiaBowls().should('not.be.visible')
        hp.primaryNavLattes().should('not.be.visible')
        hp.primaryNavBites().should('not.be.visible')
        hp.ourStoryLink().should('be.visible')
        hp.giftsLink().should('be.visible')
        hp.helpLink().should('be.visible')
        hp.loginHeaderLink().should('be.visible')
        hp.getStartedLink().should('be.visible')
   })
})