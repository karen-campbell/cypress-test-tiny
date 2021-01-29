/// <reference types="cypress" />

describe('Creates an account', function() {
    
    var accountDetails;
    
    beforeEach(function () {
        
        cy.log("-----BEFORE EACH--------");
        cy.fixture('add-account').as('addAccount').then(addAccountFixture => {
            accountDetails = addAccountFixture.AccountDetails[0];
        });
    });
    
    describe('First Test Creation', function() {
        before(function () {
            cy.log("-----BEFORE--------");
            //accountDetails.UserName = 'Test1';
            //accountDetails.Email = 'test@test.com';
            
            cy.createAccount(this.addAccount).then((accountId) => {
                cy.navigateToLoginPage(accountId);
            });
        });
        
        it('validate login page', function() {
            cy.log("-----TEST BLOCK--------");
            cy.get(loginPage.UserNameField).should('be.visible');
        });
    });
});