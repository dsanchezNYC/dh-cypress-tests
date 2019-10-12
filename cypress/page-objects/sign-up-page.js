export class SignUpPage{

    signUpPageTitle(){
        return cy.get('.heading > .text-center > h2')
    }

    signUpPageDescription(){
        return cy.get('.text-center > p')
    }

}