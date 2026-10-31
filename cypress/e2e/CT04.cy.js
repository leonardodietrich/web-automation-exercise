import { HomePage, LoginPage, Header } from '../support/pages';
import { buildUser } from '../support/utils/dataFactory';

describe('Logout User', () => {
    let user;

    beforeEach (()=> {
        user = buildUser()
        cy.createUserViaApi(user)
        HomePage.visit()
    });

    afterEach (()=> {
        cy.deleteUserViaApi(user)
    });

    it('should logout and return to the login page', () => {
        cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
        HomePage.elements.slider().should('be.visible')
        Header.goToLogin()
        LoginPage.elements.loginTitle().should('have.text', 'Login to your account')
        LoginPage.login(user)
        Header.elements.loggedInUser().should('have.text', user.name)

        Header.logout()

        cy.url().should('include', '/login')
        LoginPage.elements.loginTitle().should('have.text', 'Login to your account')
        Header.elements.loginLink().should('be.visible')
    });
});
