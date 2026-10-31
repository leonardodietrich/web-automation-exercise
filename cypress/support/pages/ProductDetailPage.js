import BasePage from './BasePage';

class ProductDetailPage extends BasePage {
  constructor() {
    super('/product_details/1');
  }

  elements = {
    name: () => cy.get('.product-information h2'),
    category: () => cy.get('.product-information p:contains("Category")'),
    price: () => cy.get('.product-information span > span'),
    availability: () => cy.get('.product-information p:contains("Availability")'),
    condition: () => cy.get('.product-information p:contains("Condition")'),
    brand: () => cy.get('.product-information p:contains("Brand")'),
  };
}

export default new ProductDetailPage();
