/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { LoginPage } from "../page-objects/login-page"
import { PwResetPage } from "../page-objects/pw-reset-page"
import { SignUpPage } from "../page-objects/sign-up-page"

describe('Login Page tests', () => {

    const hp = new HomePage
    const lp = new LoginPage
    
    describe('Sanity tests', () => {

    it('Page displayed successfully', () => {
        lp.visitLoginPage()
        lp.browseLink().should('be.visible')
        lp.allLink().should('not.be.visible')
        lp.smoothiesLink().should('not.be.visible')
        lp.harvestBowlsLink().should('not.be.visible')
        lp.soupsLink().should('not.be.visible')
        lp.bitesLink().should('not.be.visible')
        lp.oatBowlsLink().should('not.be.visible')
        lp.chiaBowlsLink().should('not.be.visible')
        lp.lattesLink().should('not.be.visible')
    })

    it('Title loads successfully', () => {
        lp.dailyHarvestLogo().should('be.visible')
    })

    it('Email and Password text and fields load successfully', () => {
        lp.emailAddressText().should('be.visible').should('have.text', 'Email Address')
        lp.emailAddressField().should('be.visible').should('be.enabled')
        lp.passwordText().should('be.visible').should('have.text', 'Password')
        lp.passwordField().should('be.visible').should('be.enabled')
    })

    it('Remember Me checkbox loads successfully', () => {
        lp.rememberMeText().should('be.visible').should('have.text', 'Remember Me')
        lp.rememberMeCheckbox().should('be.visible').should('not.be.checked')
    })

    it('Forgot your password? link loads successfully', () => {
        lp.forgotYourPasswordLink().should('be.visible')
    })

    it('Login button loads successfully', () => {
        lp.loginButton().should('be.visible')
    })

    it('Sign Up text and link loads successfully', () => {
        lp.signUpText().should('be.visible').should('have.text', 'Don\'t have an account? Sign Up.')
        lp.signUpLink().should('be.visible')
    })

})

describe('Navigation tests', () => {
    
    const lp = new LoginPage
    const pwrp = new PwResetPage
    const sup = new SignUpPage

    beforeEach(() => {
        hp.visitHomePage()
        cy.wait(2000)
        hp.loginLink().should('be.visible').click()
        lp.dailyHarvestLogo().should('be.visible')
    })

    it('User can navigate to Forgot Password page successfully', () => {
        lp.forgotYourPasswordLink().should('be.visible').click()
        pwrp.passwordResetTitle().should('be.visible').should('have.text', 'Password Reset')
        pwrp.passwordResetDescription().should('be.visible').should('have.text', 'Enter your email address, and we will send you password reset instructions.')
        
    })

    // it('User can navigate to Sign Up page successfully', () => {
    //     lp.signUpLink().should('be.visible').click()
    //     sup.signUpPageTitle().should('be.visible').should('have.text', 'WE TAKE CARE OF FOOD, SO FOOD CAN TAKE CARE OF YOU')
    //     sup.signUpPageDescription().should('be.visible').should('have.text', 'Find out if we deliver to your zip code')
    // })

    // it('User sees error message for invalid credentials', () => {
    //     lp.loginButton().should('be.visible').click()
    //     cy.get('flash-notifications').should('contain', ' Error: Invalid login credentials. ')
    // })

})

})