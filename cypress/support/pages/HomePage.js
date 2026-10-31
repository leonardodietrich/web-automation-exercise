import BasePage from './BasePage';

class HomePage extends BasePage {
  constructor() {
    super('/');
  }

  elements = {
    logo: () => cy.get('.logo img'),
    slider: () => cy.get('#slider'),
    featuredItems: () => cy.get('.features_items .product-image-wrapper'),
    footer: () => cy.get('footer#footer'),
  };
}

export default new HomePage();
