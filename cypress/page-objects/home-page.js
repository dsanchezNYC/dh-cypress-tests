export class HomePage {

    navigateToHomePage(){
        cy.visit('https://www.daily-harvest.com/')
    }

    dailyHarvestLogoVisible(){
        cy.get('.px-md-32 > svg').should('be.visible')
    }

    dailyHarvestDescriptionVisible(){
        cy.get('.display-1').should('be.visible')
    }

    loginLinkVisible(){
        cy.get('.flex-grow-1 > .nav-item > .text-nowrap > span').should('be.visible')
    }

    loginLinkClick(){
        cy.get('.flex-grow-1 > .nav-item > .text-nowrap > span').click()
    }

}