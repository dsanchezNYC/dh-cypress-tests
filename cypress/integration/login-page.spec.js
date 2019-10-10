/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { LoginPage } from "../page-objects/login-page"

describe('Login Page smoke test', () => {

    const hp = new HomePage
    const lp = new LoginPage

    beforeEach(() => {
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

})