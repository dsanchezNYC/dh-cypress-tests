export class LoginPage {

    navigateToLoginPage(){
        cy.viewport(1440,900)
        cy.visit('https://www.daily-harvest.com/login')
    }

    loginTitleVisible(){
        cy.get('.my-5', {timeout: 30000}).should('be.visible')
    }
    
    emailAddressTextVisible(){
        cy.get(':nth-child(2) > label').should('have.text', 'Email Address')
    }

    emailFieldEnabled(){
        cy.get('#email').should('be.enabled')
    }

    passwordTextVisible(){
        cy.get(':nth-child(3) > label').should('have.text', 'Password')
    }

    passwordFieldEnabled(){
        cy.get('#password').should('be.enabled')
    }

    clickloginButton(){
        cy.get('[data-cy=login-btn]').click()
    }

    loginButtonVisible(){
        cy.get('[data-cy=login-btn]').should('be.visible')
    }

    rememberMeCheckboxVisibleAndNotEnabled(){
        cy.get('label > span').should('be.visible')
        cy.get('label > span').should('not.be.enabled')
    }

}