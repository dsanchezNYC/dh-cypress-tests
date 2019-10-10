/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { LoginPage } from "../page-objects/login-page"
import { PasswordReset } from "../page-objects/password-reset"
import { SignUpPage } from "../page-objects/sign-up-page"

describe('Login Page smoke test', () => {

    const hp = new HomePage
    const lp = new LoginPage

    // beforeEach(() => {
    //     hp.navigateToHomePage()
    //     hp.loginLinkVisible()
    //     lp.navigateToLoginPage()
    // })
    
    it('Navigate to Login page from Home page', () => {
         hp.navigateToHomePage()
         hp.loginLinkVisible()
         lp.navigateToLoginPage()
    })

    it('Login page Title loads successfully', () => {
        lp.loginTitleVisible()
    })

    it('Login page Email title and field loads successfully', () => {
        lp.emailFieldEnabled()
        lp.loginTitleVisible()
        lp.passwordFieldEnabled()
        lp.passwordTextVisible()
    })

    it('Login page Password title and field loads successfully', () => {
        lp.passwordFieldEnabled()
        lp.passwordTextVisible()
    })

    it('Login page Remember Me checkbox loads successfully', () => {
        lp.rememberMeCheckboxVisibleAndNotChecked()
    })

    it('Login page Forgot your password link loads successfully', () => {
        lp.forgotPasswordLinkVisible()
    })

    it('Login page Login button loads successfully', () => {
        lp.loginButtonVisible()
    })

    it('Login page Sign Up text and link loads successfully', () => {
        lp.signUpTextandLinkVisible()
    })

})

describe('Login Page functional test', () => {
    
    const hp = new HomePage
    const lp = new LoginPage
    const pr = new PasswordReset
    const su = new SignUpPage

    beforeEach(() => {
        hp.navigateToHomePage()
        hp.loginLinkVisible()
        lp.navigateToLoginPage()
    })

    it('User can navigate to Home page successfully', () => {
        lp.loginTitleClick()
        hp.dailyHarvestLogoVisible()
    })

    it('User can check and uncheck Remember Me box successfully', () => {
        lp.rememberMeCheckboxCheck()
        lp.rememberMeCheckboxVisibleAndChecked()
        lp.rememberMeCheckboxUncheck()
        lp.rememberMeCheckboxVisibleAndNotChecked()
    })

    it('User can navigate to Forgot Password page successfully', () => {
        lp.forgotPasswordLinkClick()
        pr.passwordResetTitleVisible()
        pr.passwordResetDescriptionVisibe()
    })

    it('User can navigate to Sign Up page successfully', () => {
        lp.signUpClick()
        su.signUpTitleVisible()
        su.signUpTitleVisible()
    })

})