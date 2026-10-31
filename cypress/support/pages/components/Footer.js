class Footer {
  elements = {
    container: () => cy.get('footer#footer'),
    subscriptionTitle: () => cy.get('footer .single-widget h2'),
    emailInput: () => cy.get('#susbscribe_email'),
    subscribeButton: () => cy.get('#subscribe'),
    successMessage: () => cy.get('#success-subscribe .alert-success'),
  };

  scrollToFooter() {
    this.elements.container().scrollIntoView();
  }

  subscribe(email) {
    this.elements.emailInput().type(email);
    this.elements.subscribeButton().click();
  }
}

export default new Footer();
