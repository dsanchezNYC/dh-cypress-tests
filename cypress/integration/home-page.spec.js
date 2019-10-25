/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { LoginPage } from "../page-objects/login-page"


describe('Home Page tests', () => {

    const hp = new HomePage
    const lp = new LoginPage
    
    describe('Smoke tests', () => {

    it('Home page displayed successfully', () => {
        hp.visitHomePage()
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

   describe('Navigation tests', () => {

    it('Navigate from Home page to Login page successfully', () => {
        hp.visitHomePage()
        cy.wait(2000)
        hp.loginHeaderLink().should('be.visible').click()
        lp.dailyHarvestLogo().should('be.visible')
    })

    })

})