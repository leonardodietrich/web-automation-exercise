import { HomePage, LoginPage, Header } from '../support/pages';
import { buildUser } from '../support/utils/dataFactory';

describe('Register User with existing email', () => {
    let user;

    beforeEach (()=> {
        user = buildUser()
        cy.createUserViaApi(user)
        HomePage.visit()
    });

    afterEach (()=> {
        cy.deleteUserViaApi(user)
    });

    it('should show an error when signing up with an already registered email', () => {
        cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
        Header.goToLogin()
        LoginPage.elements.signupTitle().should('have.text', 'New User Signup!')
        LoginPage.startSignup(user)

        LoginPage.elements.signupError().should('have.text', 'Email Address already exist!')
    });
});
