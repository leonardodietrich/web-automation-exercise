import { HomePage, ProductsPage, ProductDetailPage, Header } from '../support/pages';

describe('Verify All Products and product detail page', () => {
    beforeEach (()=> {
        HomePage.visit()
    });

    it('should list all products and open the first product detail page', () => {
        cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
        HomePage.elements.slider().should('be.visible')
        Header.goToProducts()

        cy.url().should('include', '/products')
        ProductsPage.elements.pageTitle().should('have.text', 'All Products')
        ProductsPage.elements.productCards().should('have.length.greaterThan', 0)

        ProductsPage.openProductDetails(0)

        cy.url().should('include', '/product_details/')
        ProductDetailPage.elements.name().should('be.visible').and('not.be.empty')
        ProductDetailPage.elements.category().should('be.visible')
        ProductDetailPage.elements.price().should('be.visible')
        ProductDetailPage.elements.availability().should('be.visible')
        ProductDetailPage.elements.condition().should('be.visible')
        ProductDetailPage.elements.brand().should('be.visible')
    });
});
