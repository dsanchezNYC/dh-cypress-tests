export class PasswordReset{
 
    passwordResetTitleVisible(){
        cy.get('h1').should('have.text', 'Password Reset')
    }

    passwordResetDescriptionVisibe(){
        cy.get('.col-sm-6 > p').should('have.text', 'Enter your email address, and we will send you password reset instructions.')
    }
}