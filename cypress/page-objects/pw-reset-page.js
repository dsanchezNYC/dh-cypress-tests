export class PwResetPage{

    passwordResetTitle(){
        return cy.get('h1')
    }

    passwordResetDescription(){
        return cy.get('.col-sm-6 > p')
    }

    emailAddressText(){
        return cy.get('.pw_reset > .form-group > label')
    }

    emailAddressField(){
        return cy.get('#email')
    }

    sendPasswordResetInstructionsButton(){
        return cy.get('.button')
    }
}