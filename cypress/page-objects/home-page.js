export class HomePage {

    navigateToHomePage(){
        cy.viewport(1440,900)
        cy.visit('https://www.daily-harvest.com/')
    }

    dailyHarvestLogoVisible(){
        cy.get('.px-32 > svg').should('be.visible')
    } 

    dailyHarvestDescriptionVisible(){
        cy.get('.display-1').should('be.visible')
    }

    loginLinkVisible(){
        cy.get('.secondary-nav > :nth-child(2) > .text-nowrap > span').should('be.visible')
    }

    loginLinkClick(){
        cy.get('.secondary-nav > :nth-child(2) > .text-nowrap > span').click()
    }

}