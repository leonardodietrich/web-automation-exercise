import { HomePage, Footer } from '../support/pages';
import { buildUser } from '../support/utils/dataFactory';

describe('Verify Subscription in home page', () => {
    beforeEach (()=> {
        HomePage.visit()
    });

    it('should subscribe with a valid email from the footer', () => {
        const { email } = buildUser()

        cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
        HomePage.elements.slider().should('be.visible')
        Footer.scrollToFooter()
        Footer.elements.subscriptionTitle().should('have.text', 'Subscription')

        Footer.subscribe(email)

        Footer.elements.successMessage().should('be.visible').and('have.text', 'You have been successfully subscribed!')
    });
});
