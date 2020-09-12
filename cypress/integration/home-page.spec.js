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
    
    describe('Sanity tests', () => {

    it('Page displayed successfully', () => {
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
   })

})

})
