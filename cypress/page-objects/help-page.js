export class HelpPage {

    visitHelpPage(){
        cy.viewport(1440,900)
        cy.clearCookie('session-id')
        cy.visit('https://help.dailyharvest.com')

        // When clicking the Help link from the Home page, it opens a new tab.
        // Cypress DOES NOT support multi-tab testing, so need to 
        // directly navigate to the DH Help page (for now)
        // See workarounds via https://docs.cypress.io/examples/examples/recipes.html#Testing-the-DOM
    }

    navLeftBrowse(){
        return cy.get('.nav-left').contains('Browse')
    }

    navLeftWhoWeAre(){
        return cy.get('.nav-left').contains('Who We Are')
    }

    navLeftGifts(){
        return cy.get('.nav-left').contains('Gifts')
    }

    dailyHarvestLogo(){
        return cy.get('.dh-nav-logo')
    }

    navRightHelp(){
        return cy.get('.nav-right').contains('Help')
    }

    navRightLogin(){
        return cy.get('.nav-right').contains('Login')
    }

    navRightGetStarted(){
        return cy.get('.nav-right').contains('Get Started')
    }

    searchInput(){
        return cy.get('#searchInput')
    }

    searchButton(){
        return cy.get('.dh-search-form-submit')
    }
    


   
}