import 'cypress-mochawesome-reporter/register';
import './commands';

// Erros de scripts de anúncios de terceiros não devem derrubar os testes.
Cypress.on('uncaught:exception', (err) => {
  if (/adsbygoogle|googletag|Script error/i.test(err.message)) {
    return false;
  }
});

beforeEach(() => {
  cy.blockAds();
});


