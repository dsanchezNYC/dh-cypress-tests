/// <reference types="cypress" />

import { HomePage } from "../page-objects/home-page"
import { LoginPage } from "../page-objects/login-page"

describe('Login Page smoke test', () => {

    const hp = new HomePage
    const lp = new LoginPage

    beforeEach(() => {
        lp.navigateToLoginPage()
    })
    
    

})