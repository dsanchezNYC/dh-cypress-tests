export class LoginPage {

    visitLoginPage(){
        cy.viewport(1440,900)
        cy.visit('https://www.daily-harvest.com/login')
    }

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

    hamburgerMenu(){
        return cy.get('.p-0 > .d-flex > svg')
    }

    dailyHarvestLogo(){
        return cy.get('.my-5')
    }

    emailAddressText(){
        return cy.get(':nth-child(2) > label')
    }

    emailAddressField(){
        return cy.get('#email')
    }

    passwordText(){
        return cy.get(':nth-child(3) > label')
    }

    passwordField(){
        return cy.get('#password')
    }

    rememberMeCheckbox(){
        return cy.get('#remember')
    }

    rememberMeText(){
        return cy.get('label > span')
    }

    forgotYourPasswordLink(){
        return cy.get('.pw_reset')
    }

    loginButton(){
        return cy.get('[data-cy=login-btn]')
    }

    signUpText(){
        return cy.get('.login > .text-center')
    }

    signUpLink(){
        return cy.get('.text-center > .acc-text')
    }
}