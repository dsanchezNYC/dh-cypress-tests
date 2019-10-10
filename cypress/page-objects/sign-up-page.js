export class SignUpPage{

    signUpTitleVisible(){
        cy.get('.heading > .text-center > h2').should('have.text', 'WE TAKE CARE OF FOOD, SO FOOD CAN TAKE CARE OF YOU')
    }

    signUpDescriptionVisibe(){
        cy.get('.text-center > p').should('have.text', 'Find out if we deliver to your zip code')
    }
}