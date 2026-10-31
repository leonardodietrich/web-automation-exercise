import 'cypress-mochawesome-reporter/register';
import './commands';

Cypress.on('uncaught:exception', (err) => {
  if (/adsbygoogle|googletag|Script error/i.test(err.message)) {
    return false;
  }
});

beforeEach(() => {
  cy.blockAds();
});


