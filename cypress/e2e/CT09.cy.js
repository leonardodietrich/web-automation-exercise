import { HomePage, ProductsPage, Header } from '../support/pages';

describe('Search Product', () => {
    beforeEach (()=> {
        HomePage.visit()
    });

    it('should show only products related to the searched term', () => {
        const term = 'dress'

        cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
        HomePage.elements.slider().should('be.visible')
        Header.goToProducts()
        ProductsPage.elements.pageTitle().should('have.text', 'All Products')

        ProductsPage.search(term)

        ProductsPage.elements.pageTitle().should('have.text', 'Searched Products')
        ProductsPage.elements.productNames().should('have.length.greaterThan', 0)
        ProductsPage.elements.productCards().each(($card) => {
            const name = $card.find('.productinfo p').first().text()
            if (name.toLowerCase().includes(term)) return

            const detailPath = $card.find('.choose a').attr('href')
            cy.request(detailPath).then(({ body }) => {
                const doc = new DOMParser().parseFromString(body, 'text/html')
                const category = [...doc.querySelectorAll('.product-information p')]
                    .map((p) => p.textContent)
                    .find((text) => text.includes('Category')) || ''

                expect(category.toLowerCase(), `categoria de "${name}"`).to.contain(term)
            })
        })
    });
});
