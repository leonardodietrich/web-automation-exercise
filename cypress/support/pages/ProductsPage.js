import BasePage from './BasePage';

class ProductsPage extends BasePage {
  constructor() {
    super('/products');
  }

  elements = {
    pageTitle: () => cy.get('.features_items h2.title'),
    searchInput: () => cy.get('#search_product'),
    searchButton: () => cy.get('#submit_search'),
    productCards: () => cy.get('.features_items .product-image-wrapper'),
    productNames: () => cy.get('.features_items .productinfo p'),
    cartModal: () => cy.get('#cartModal'),
    continueShoppingButton: () => cy.get('#cartModal button.close-modal'),
    viewCartLink: () => cy.get('#cartModal a[href="/view_cart"]'),
  };

  openProductDetails(index = 0) {
    this.elements.productCards().eq(index).find('.choose a').click();
  }

  addToCart(index = 0) {
    this.elements.productCards().eq(index).find('.productinfo a.add-to-cart').click({ force: true });
    return this;
  }

  continueShopping() {
    this.elements.continueShoppingButton().click();
    this.elements.cartModal().should('not.be.visible');
    return this;
  }

  viewCart() {
    this.elements.viewCartLink().click();
  }

  search(term) {
    this.elements.searchInput().clear().type(term);
    this.elements.searchButton().click();
  }
}

export default new ProductsPage();
