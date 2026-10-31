import { HomePage, LoginPage, Header } from '../support/pages';

describe('Login User with incorrect email and password', () => {
    beforeEach (()=> {
        HomePage.visit()
    });

    it('should show an error message when logging in with invalid credentials', () => {
        cy.fixture('users').then(({ invalid }) => {
            cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
            HomePage.elements.slider().should('be.visible')
            Header.goToLogin()
            LoginPage.elements.loginTitle().should('have.text', 'Login to your account')
            LoginPage.login(invalid)

            LoginPage.elements.loginError().should('have.text', 'Your email or password is incorrect!')
        })
    });
});
