import { HomePage, LoginPage, SignupPage, ProductsPage, CartPage, CheckoutPage, PaymentPage, Header } from '../support/pages';
import { buildUser, buildPayment } from '../support/utils/dataFactory';

describe('Place Order: Register before Checkout', () => {
    beforeEach (()=> {
        HomePage.visit()
    });

    it('should register, place an order and delete the account', () => {
        const user = buildUser({ title: 'Mrs', country: 'United States' })
        const payment = buildPayment()

        cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
        HomePage.elements.slider().should('be.visible')
        Header.goToLogin()
        LoginPage.startSignup(user)
        SignupPage.register(user)
        SignupPage.elements.accountCreatedTitle().should('have.text', 'Account Created!')
        SignupPage.continue()
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
