/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { LoginPage } from "../page-objects/login-page"
import { BrowsePage } from "../page-objects/browse-page"
import { SmoothiesPage } from "../page-objects/smoothies-page"


describe('Home Page tests', () => {

    const hp = new HomePage
    const lp = new LoginPage
    const bp = new BrowsePage
    const sp = new SmoothiesPage
    
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

    beforeEach(() => {
        hp.visitHomePage()
    })

    it('Navigate to Browse page', () => {
        hp.browseLink().should('be.visible').click()
        hp.allLink().should('be.visible').click({ force: true })
        bp.bestSellersTitle().should('be.visible').should('contain.text', 'Best Sellers')
    })

    it('Navigate to Smoothies page', () => {
        hp.browseLink().should('be.visible').click()
        hp.smoothiesLink().should('be.visible').click({ force: true })
        sp.smoothiesTitle().should('be.visible').should('contain.text', 'One Cup Wonder')
        sp.smoothiesDescription().should('be.visible').should('have.text', 'That full-night\'s-sleep energy, post-yoga bliss, feel-good glow now comes in smoothies you’ll crave morning, noon and night. Ready in seconds, blended to perfection, and seriously good for you - dreams do come true.')
    })

    it('Navigate to Login page', () => {
        hp.loginLink().should('be.visible').click({ force: true })
        lp.dailyHarvestLogo().should('be.visible')
    })

})

})