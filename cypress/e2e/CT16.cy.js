import { HomePage, LoginPage, SignupPage, ProductsPage, CartPage, CheckoutPage, PaymentPage, Header } from '../support/pages';
import { buildUser, buildPayment } from '../support/utils/dataFactory';

describe('Place Order: Login before Checkout', () => {
    let user;

    beforeEach (()=> {
        user = buildUser({ country: 'United States' })
        cy.createUserViaApi(user)
        HomePage.visit()
    });

    it('should login, place an order and delete the account', () => {
        const payment = buildPayment()

        cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
        HomePage.elements.slider().should('be.visible')
        Header.goToLogin()
        LoginPage.login(user)
        Header.elements.loggedInUser().should('have.text', user.name)

        Header.goToProducts()
        ProductsPage.addToCart(0).continueShopping()
        ProductsPage.addToCart(1).viewCart()

        cy.url().should('include', '/view_cart')
        CartPage.elements.cartTable().should('be.visible')
        CartPage.elements.items().should('have.length', 2)
        CartPage.proceedToCheckout()

        cy.url().should('include', '/checkout')
        CheckoutPage.elements.deliveryAddress().should('contain.text', user.address)
        CheckoutPage.elements.invoiceAddress().should('contain.text', user.address)
        CheckoutPage.elements.orderReview().should('be.visible')
        CheckoutPage.placeOrder('Pedido gerado pela automação')

        PaymentPage.pay(payment)
        cy.url().should('include', '/payment_done')
        PaymentPage.elements.orderPlacedTitle().should('have.text', 'Order Placed!')

        Header.deleteAccount()
        SignupPage.elements.accountDeletedTitle().should('have.text', 'Account Deleted!')
        SignupPage.continue()
    });
});
