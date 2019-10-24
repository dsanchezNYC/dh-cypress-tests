export class HomePage {

    visitHomePage(){
        cy.viewport(1440,900)
        cy.clearCookie('session-id')
        cy.visit('https://www.daily-harvest.com/')
    }

    primaryNavBrowse(){
        return cy.get('.primary-nav').contains('Browse')
    }

    primaryNavAll(){
        return cy.get('.primary-nav').contains('All')
    }

    primaryNavSmoothies(){
        return cy.get('.primary-nav').contains('Smoothies')
    }

    primaryNavHarvestBowls(){
        return cy.get('.primary-nav').contains('Harvest Bowls')
    }

    primaryNavSoups(){
        return cy.get('.primary-nav').contains('Soups')
    }

    primaryNavBites(){
        return cy.get('.primary-nav').contains('Bites')
    }

    primaryNavOatBowls(){
        return cy.get('.primary-nav').contains('Oat Bowls')
    }

    primaryNavChiaBowls(){
        return cy.get('.primary-nav').contains('Chia Bowls')
    }

    primaryNavLattes(){
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

    dailyHarvestDescription(){
        return cy.get('.display-1')
    }

    loginHeaderLink(){
        return cy.get('.secondary-nav').contains('Login')
    }

    helpLink(){
        return cy.get('.secondary-nav').contains('Help')
    }

    getStartedLink(){
        return cy.get('.secondary-nav').contains('Get Started')
    }



}