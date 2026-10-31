import BasePage from './BasePage';

class CheckoutPage extends BasePage {
  constructor() {
    super('/checkout');
  }

  elements = {
    deliveryAddress: () => cy.get('#address_delivery'),
    invoiceAddress: () => cy.get('#address_invoice'),
    orderReview: () => cy.get('#cart_info'),
    commentInput: () => cy.get('textarea[name="message"]'),
    placeOrderButton: () => cy.get('a[href="/payment"]'),
  };

  placeOrder(comment) {
    this.elements.commentInput().type(comment);
    this.elements.placeOrderButton().click();
  }
}

export default new CheckoutPage();
