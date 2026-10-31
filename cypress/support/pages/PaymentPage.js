import BasePage from './BasePage';

class PaymentPage extends BasePage {
  constructor() {
    super('/payment');
  }

  elements = {
    nameOnCard: () => cy.get('[data-qa="name-on-card"]'),
    cardNumber: () => cy.get('[data-qa="card-number"]'),
    cvc: () => cy.get('[data-qa="cvc"]'),
    expiryMonth: () => cy.get('[data-qa="expiry-month"]'),
    expiryYear: () => cy.get('[data-qa="expiry-year"]'),
    payButton: () => cy.get('[data-qa="pay-button"]'),
    orderPlacedTitle: () => cy.get('[data-qa="order-placed"]'),
  };

  pay(payment) {
    this.elements.nameOnCard().type(payment.nameOnCard);
    this.elements.cardNumber().type(payment.cardNumber, { log: false });
    this.elements.cvc().type(payment.cvc, { log: false });
    this.elements.expiryMonth().type(payment.expiryMonth);
    this.elements.expiryYear().type(payment.expiryYear);
    this.elements.payButton().click();
  }
}

export default new PaymentPage();
