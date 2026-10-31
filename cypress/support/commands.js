import userApi from './api/userApi';

const AD_HOSTS = [
  'https://pagead2.googlesyndication.com/**',
  'https://googleads.g.doubleclick.net/**',
  'https://*.doubleclick.net/**',
  'https://*.adtrafficquality.google/**',
  'https://www.googletagservices.com/**',
];

Cypress.Commands.add('blockAds', () => {
  AD_HOSTS.forEach((pattern) => {
    cy.intercept(pattern, { statusCode: 204, body: '' });
  });
});

Cypress.Commands.add('createUserViaApi', (user) => userApi.create(user));

Cypress.Commands.add('deleteUserViaApi', (user) => userApi.remove(user));
