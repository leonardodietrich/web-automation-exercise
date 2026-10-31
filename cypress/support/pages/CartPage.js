import BasePage from './BasePage';

class CartPage extends BasePage {
  constructor() {
    super('/view_cart');
  }

  elements = {
    cartTable: () => cy.get('#cart_info_table'),
    items: () => cy.get('#cart_info_table tbody tr'),
    proceedToCheckoutButton: () => cy.get('.check_out'),
  };

  proceedToCheckout() {
    this.elements.proceedToCheckoutButton().click();
  }
}

export default new CartPage();
