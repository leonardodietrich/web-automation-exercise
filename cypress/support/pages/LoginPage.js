import BasePage from './BasePage';

class LoginPage extends BasePage {
  constructor() {
    super('/login');
  }

  elements = {
    loginTitle: () => cy.get('.login-form h2'),
    loginEmail: () => cy.get('[data-qa="login-email"]'),
    loginPassword: () => cy.get('[data-qa="login-password"]'),
    loginButton: () => cy.get('[data-qa="login-button"]'),
    loginError: () => cy.get('.login-form p'),
    signupTitle: () => cy.get('.signup-form h2'),
    signupName: () => cy.get('[data-qa="signup-name"]'),
    signupEmail: () => cy.get('[data-qa="signup-email"]'),
    signupButton: () => cy.get('[data-qa="signup-button"]'),
    signupError: () => cy.get('.signup-form p'),
  };

  login({ email, password }) {
    this.elements.loginEmail().type(email);
    this.elements.loginPassword().type(password, { log: false });
    this.elements.loginButton().click();
  }

  startSignup({ name, email }) {
    this.elements.signupName().type(name);
    this.elements.signupEmail().type(email);
    this.elements.signupButton().click();
  }
}

export default new LoginPage();
