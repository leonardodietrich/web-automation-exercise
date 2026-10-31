class Header {
  elements = {
    navbar: () => cy.get('header#header'),
    homeLink: () => cy.get('.shop-menu a[href="/"]'),
    productsLink: () => cy.get('.shop-menu a[href="/products"]'),
    cartLink: () => cy.get('.shop-menu a[href="/view_cart"]'),
    loginLink: () => cy.get('.shop-menu a[href="/login"]'),
    logoutLink: () => cy.get('.shop-menu a[href="/logout"]'),
    deleteAccountLink: () => cy.get('.shop-menu a[href="/delete_account"]'),
    loggedInUser: () => cy.get('.shop-menu li a b'),
  };

  goToHome() {
    this.elements.homeLink().click();
  }

  goToProducts() {
    this.elements.productsLink().click();
  }

  goToCart() {
    this.elements.cartLink().click();
  }

  goToLogin() {
    this.elements.loginLink().click();
  }

  logout() {
    this.elements.logoutLink().click();
  }

  deleteAccount() {
    this.elements.deleteAccountLink().click();
  }
}

export default new Header();
