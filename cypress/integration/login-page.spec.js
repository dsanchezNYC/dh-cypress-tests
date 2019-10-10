/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { LoginPage } from "../page-objects/login-page"

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
        lp.rememberMeCheckboxVisibleAndNotEnabled()
    })

    it('Login page Forgot your password link loads successfully', () => {
        lp.forgotPasswordLinkVisible()
    })

    it('Login page Sign Up text and link loads successfully', () => {
        lp.signUpTextandLinkVisible()
    })

})