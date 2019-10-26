/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { LoginPage } from "../page-objects/login-page"


describe('Home Page tests', () => {

    const hp = new HomePage
    const lp = new LoginPage
    
    describe('Smoke tests', () => {

    it('Home page displayed successfully', () => {
        hp.visitHomePage()
        hp.browseLink().should('be.visible')
        hp.allLink().should('not.be.visible')
        hp.smoothiesLink().should('not.be.visible')
        hp.harvestBowlsLink().should('not.be.visible')
        hp.soupsLink().should('not.be.visible')
        hp.bitesLink().should('not.be.visible')
        hp.oatBowlsLink().should('not.be.visible')
        hp.chiaBowlsLink().should('not.be.visible')
        hp.lattesLink().should('not.be.visible')
        hp.bitesLink().should('not.be.visible')
        hp.ourStoryLink().should('be.visible')
        hp.giftsLink().should('be.visible')
        hp.helpLink().should('be.visible')
        hp.loginLink().should('be.visible')
        hp.getStartedLink().should('be.visible')
   })

})

   describe('Navigation tests', () => {

    it('Navigate from Home page to Login page successfully', () => {
        hp.visitHomePage()
        cy.wait(2000)
        hp.loginLink().should('be.visible').click()
        lp.dailyHarvestLogo().should('be.visible')
    })

    })

})