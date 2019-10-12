/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { LoginPage } from "../page-objects/login-page"

describe('Login Page tests', () => {

    const hp = new HomePage
    const lp = new LoginPage
    
    describe('Smoke tests', () => {

    it('Navigate to Login page from Home page successfully', () => {
         hp.visitHomePage()
         cy.wait(2000)
         hp.loginHeaderLink().should('be.visible').click()
         lp.dailyHarvestLogo().should('be.visible')
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

    it('Login page Remember Me checkbox loads successfully', () => {
        lp.rememberMeText().should('be.visible').should('have.text', 'Remember Me')
        lp.rememberMeCheckbox().should('be.visible').should('not.be.checked')
    })

    it('Login page Forgot your password? link loads successfully', () => {
        lp.forgotYourPasswordLink().should('be.visible')
    })

    it('Login page Login button loads successfully', () => {
        lp.loginButton().should('be.visible')
    })

    it('Login page Sign Up text and link loads successfully', () => {
        lp.signUpText().should('be.visible').should('have.text', 'Don\'t have an account? Sign Up.')
        lp.signUpLink().should('be.visible')
    })

// })

// describe('Login Page functional test', () => {
    
//     const hp = new HomePage
//     const lp = new LoginPage
//     const pr = new PasswordReset
//     const su = new SignUpPage

//     beforeEach(() => {
//         hp.navigateToHomePage()
//         hp.loginLinkVisible()
//         lp.navigateToLoginPage()
//     })

//     it('User can navigate to Home page successfully', () => {
//         lp.loginTitleClick()
//         hp.dailyHarvestLogoVisible()
//     })

//     it('User can check and uncheck Remember Me box successfully', () => {
//         lp.rememberMeCheckboxCheck()
//         lp.rememberMeCheckboxVisibleAndChecked()
//         lp.rememberMeCheckboxUncheck()
//         lp.rememberMeCheckboxVisibleAndNotChecked()
//     })

//     it('User can navigate to Forgot Password page successfully', () => {
//         lp.forgotPasswordLinkClick()
//         pr.passwordResetTitleVisible()
//         pr.passwordResetDescriptionVisibe()
//     })

//     it('User can navigate to Sign Up page successfully', () => {
//         lp.signUpClick()
//         su.signUpTitleVisible()
//         su.signUpTitleVisible()
    // })

})

})