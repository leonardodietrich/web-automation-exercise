import BasePage from './BasePage';

class SignupPage extends BasePage {
  constructor() {
    super('/signup');
  }

  elements = {
    title: () => cy.get('.login-form h2.title'),
    titleRadio: (title) => cy.get(title === 'Mrs' ? '#id_gender2' : '#id_gender1'),
    password: () => cy.get('[data-qa="password"]'),
    day: () => cy.get('[data-qa="days"]'),
    month: () => cy.get('[data-qa="months"]'),
    year: () => cy.get('[data-qa="years"]'),
    firstName: () => cy.get('[data-qa="first_name"]'),
    lastName: () => cy.get('[data-qa="last_name"]'),
    company: () => cy.get('[data-qa="company"]'),
    address: () => cy.get('[data-qa="address"]'),
    address2: () => cy.get('[data-qa="address2"]'),
    country: () => cy.get('[data-qa="country"]'),
    state: () => cy.get('[data-qa="state"]'),
    city: () => cy.get('[data-qa="city"]'),
    zipcode: () => cy.get('[data-qa="zipcode"]'),
    mobileNumber: () => cy.get('[data-qa="mobile_number"]'),
    createAccountButton: () => cy.get('[data-qa="create-account"]'),
    accountCreatedTitle: () => cy.get('[data-qa="account-created"]'),
    accountDeletedTitle: () => cy.get('[data-qa="account-deleted"]'),
    continueButton: () => cy.get('[data-qa="continue-button"]'),
  };

  fillAccountInformation(user) {
    this.elements.titleRadio(user.title).check();
    this.elements.password().type(user.password, { log: false });
    this.elements.day().select(user.birthDay);
    this.elements.month().select(user.birthMonth);
    this.elements.year().select(user.birthYear);
    return this;
  }

  fillAddressInformation(user) {
    this.elements.firstName().type(user.firstName);
    this.elements.lastName().type(user.lastName);
    this.elements.company().type(user.company);
    this.elements.address().type(user.address);
    this.elements.address2().type(user.address2);
    this.elements.country().select(user.country);
    this.elements.state().type(user.state);
    this.elements.city().type(user.city);
    this.elements.zipcode().type(user.zipcode);
    this.elements.mobileNumber().type(user.mobileNumber);
    return this;
  }

  submit() {
    this.elements.createAccountButton().click();
  }

  register(user) {
    this.fillAccountInformation(user).fillAddressInformation(user).submit();
  }

  continue() {
    this.elements.continueButton().click();
  }
}

export default new SignupPage();
