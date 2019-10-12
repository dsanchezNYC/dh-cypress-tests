export class HomePage {

    visitHomePage(){
        cy.viewport(1440,900)
        cy.clearCookie('session-id')
        cy.visit('https://www.daily-harvest.com/')
    }

    dailyHarvestLogo(){
        return cy.get('.px-32 > svg')
    } 

    dailyHarvestDescription(){
        return cy.get('.display-1')
    }

    loginHeaderLink(){
        return cy.get('.secondary-nav').contains('Login')
    }

}