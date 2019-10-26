export class SmoothiesPage {

    smoothiesTitle(){
        return cy.get('.collection-title')
    }

    smoothiesDescription(){
        return cy.get('.collection-description')
    }
}