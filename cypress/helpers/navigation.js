export class NavigationLinks {
    
    browseLink(){
        return cy.get('.primary-nav').contains('Browse')
    }

    allLink(){
        return cy.get('.primary-nav').contains('All')
    }

    smoothiesLink(){
        return cy.get('.primary-nav').contains('Smoothies')
    }

    harvestBowlsLink(){
        return cy.get('.primary-nav').contains('Harvest Bowls')
    }

    soupsLink(){
        return cy.get('.primary-nav').contains('Soups')
    }

    bitesLink(){
        return cy.get('.primary-nav').contains('Bites')
    }

    oatBowlsLink(){
        return cy.get('.primary-nav').contains('Oat Bowls')
    }

    chiaBowlsLink(){
        return cy.get('.primary-nav').contains('Chia Bowls')
    }

    lattesLink(){
        return cy.get('.primary-nav').contains('Lattes')
    }

    ourStoryLink(){
        return cy.get('.primary-nav').contains('Our Story')
    }

    giftsLink(){
        return cy.get('.primary-nav').contains('Gifts')
    }
    
    dailyHarvestLogo(){
        return cy.get('.px-32 > svg')
    } 

    helpLink(){
        return cy.get('.secondary-nav').contains('Help')
    }

    loginLink(){
        return cy.get('.secondary-nav').contains('Login')
    }

    getStartedLink(){
        return cy.get('.secondary-nav').contains('Get Started')
    }

    kustomerAppIcon(){
        return cy.get('.kustomer-app-icon > div')
    }

}