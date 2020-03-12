/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { LoginPage } from "../page-objects/login-page"
import { BrowsePage } from "../page-objects/browse-page"
import { SmoothiesPage } from "../page-objects/smoothies-page"
import { NavigationLinks } from "../helpers/navigation"


describe('Home Page tests', () => {

    const hp = new HomePage
    const lp = new LoginPage
    const bp = new BrowsePage
    const sp = new SmoothiesPage
    const nav = new NavigationLinks
    
    describe('Smoke tests', () => {

    it('Home page displayed successfully', () => {
        hp.visitHomePage()
        nav.browseLink().should('be.visible')
        nav.allLink().should('not.be.visible')
        nav.smoothiesLink().should('not.be.visible')
        nav.harvestBowlsLink().should('not.be.visible')
        nav.soupsLink().should('not.be.visible')
        nav.bitesLink().should('not.be.visible')
        nav.oatBowlsLink().should('not.be.visible')
        nav.chiaBowlsLink().should('not.be.visible')
        nav.lattesLink().should('not.be.visible')
        nav.bitesLink().should('not.be.visible')
        nav.ourStoryLink().should('be.visible')
        nav.giftsLink().should('be.visible')
        nav.helpLink().should('be.visible')
        nav.loginLink().should('be.visible')
        nav.getStartedLink().should('be.visible')
        hp.titleText().should('be.visible')
        hp.subTitleText().should('be.visible')
        //hp.getStartedButton().should('be.visible').should('have.text', 'Get Started')
        //hp.secondaryTitleText().should('be.visible')
   })

})

   describe('Navigation tests', () => {

    beforeEach(() => {
        hp.visitHomePage()
    })

    it('Navigate to Browse page', () => {
        nav.browseLink().should('be.visible').click()
        nav.allLink().should('be.visible').click({ force: true })
        bp.bestSellersTitle().should('be.visible').should('contain.text', 'Best Sellers')
    })

    it('Navigate to Smoothies page', () => {
        nav.browseLink().should('be.visible').click()
        nav.smoothiesLink().should('be.visible').click({ force: true })
        sp .smoothiesTitle().should('be.visible').should('have.text', 'One Cup Wonder')
        sp.smoothiesDescription().should('be.visible').should('have.text', 'That full-night\'s-sleep energy, post-yoga bliss, feel-good glow now comes in smoothies you’ll crave morning, noon and night. Ready in seconds, blended to perfection, and seriously good for you - dreams do come true.')
    })

    it('Navigate to Login page', () => {
        hp.loginLink().should('be.visible').click({ force: true })
        lp.dailyHarvestLogo().should('be.visible')
    })

})

})