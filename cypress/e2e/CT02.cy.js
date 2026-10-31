import { HomePage, LoginPage, SignupPage, Header } from '../support/pages';
import { buildUser } from '../support/utils/dataFactory';

describe('Login User with correct email and password', () => {
    let user;

    beforeEach (()=> {
        user = buildUser()
        cy.createUserViaApi(user)
        HomePage.visit()
    });

    it('should login with valid credentials and delete the account', () => {
        cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
        HomePage.elements.slider().should('be.visible')
        Header.goToLogin()
        LoginPage.elements.loginTitle().should('have.text', 'Login to your account')
        LoginPage.login(user)

        Header.elements.loggedInUser().should('have.text', user.name)

        Header.deleteAccount()
        SignupPage.elements.accountDeletedTitle().should('have.text', 'Account Deleted!')
    });
});
