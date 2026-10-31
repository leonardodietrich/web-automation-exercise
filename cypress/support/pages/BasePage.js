export default class BasePage {
  constructor(path = '/') {
    this.path = path;
  }

  visit() {
    cy.visit(this.path);
    return this;
  }

  get currentUrl() {
    return cy.url();
  }
}
