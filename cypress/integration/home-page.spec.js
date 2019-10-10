/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { LoginPage } from "../page-objects/login-page"

describe('Home Page smoke test', () => {

    const hp = new HomePage
    const lp = new LoginPage

    beforeEach(() => {
        hp.navigateToHomePage()
    })

    it('Home page loads successfully', () => {
        hp.dailyHarvestLogoVisible()
        hp.dailyHarvestDescriptionVisible()
    })

    it('Login link visible on home page', () => {
        hp.loginLinkVisible()
    })

    it('Navigate to Login Page successfully', () => {
        hp.loginLinkClick()
        lp.loginTitleVisible()
    })
})