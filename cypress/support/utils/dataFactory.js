export const buildUser = (overrides = {}) => {
  const stamp = `${Date.now()}${Cypress._.random(100, 999)}`;

  return {
    name: `QA ${stamp}`,
    email: `qa.${stamp}@example.com`,
    password: 'Test@1234',
    title: 'Mr',
    birthDay: '10',
    birthMonth: 'May',
    birthYear: '1990',
    firstName: 'QA',
    lastName: 'Tester',
    company: 'PGATS',
    address: 'Rua dos Testes, 100',
    address2: 'Apto 1',
    country: 'India',
    state: 'Karnataka',
    city: 'Bengaluru',
    zipcode: '560001',
    mobileNumber: '5511999999999',
    ...overrides,
  };
};

export const buildPayment = (overrides = {}) => ({
  nameOnCard: 'QA Tester',
  cardNumber: '4111111111111111',
  cvc: '123',
  expiryMonth: '12',
  expiryYear: '2030',
  ...overrides,
});
