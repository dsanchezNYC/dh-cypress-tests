export class NavigationLinks {

    // Add locators for standard navigation links for .primary-nav .secondary-nav
    // Instead of having same locators in different page objects

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

    primaryNavOurStoryLink(){
        return cy.get('.primary-nav').contains('Our Story')
    }

    primaryNavGiftsLink(){
        return cy.get('.primary-nav').contains('Gifts')
    }
    
    dailyHarvestLogo(){
        return cy.get('.px-32 > svg')
    } 

    dailyHarvestDescription(){
        return cy.get('.display-1')
    }

    secondaryNavLoginHeaderLink(){
        return cy.get('.secondary-nav').contains('Login')
    }

    secondaryNavHelpLink(){
        return cy.get('.secondary-nav').contains('Help')
    }

    secondaryNavGetStartedLink(){
        return cy.get('.secondary-nav').contains('Get Started')
    }

}