import { HomePage, LoginPage, SignupPage, Header } from '../support/pages';
import { buildUser } from '../support/utils/dataFactory';

describe('Register User', () => {
    beforeEach (()=> {
        HomePage.visit()
        
    });
    
    it('should register a new user and delete the account', () => {
        const user = buildUser()

        cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
        Header.goToLogin()
        LoginPage.elements.signupTitle().should('have.text', 'New User Signup!')
        LoginPage.startSignup(user)

        SignupPage.elements.title().should('contain.text', 'Enter Account Information')
        SignupPage.register(user)

        SignupPage.elements.accountCreatedTitle().should('have.text', 'Account Created!')
        SignupPage.continue()
        Header.elements.loggedInUser().should('have.text', user.name)

        Header.deleteAccount()
        SignupPage.elements.accountDeletedTitle().should('have.text', 'Account Deleted!')
        SignupPage.continue()
    });
});