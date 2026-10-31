// A API do site responde HTTP 200 com o status real dentro do corpo (responseCode).
const parseBody = (body) => (typeof body === 'string' ? JSON.parse(body) : body);

const userApi = {
  create(user) {
    return cy
      .request({
        method: 'POST',
        url: '/api/createAccount',
        form: true,
        body: {
          name: user.name,
          email: user.email,
          password: user.password,
          title: user.title,
          birth_date: user.birthDay,
          birth_month: user.birthMonth,
          birth_year: user.birthYear,
          firstname: user.firstName,
          lastname: user.lastName,
          company: user.company,
          address1: user.address,
          address2: user.address2,
          country: user.country,
          zipcode: user.zipcode,
          state: user.state,
          city: user.city,
          mobile_number: user.mobileNumber,
        },
      })
      .then((response) => {
        expect(parseBody(response.body).responseCode).to.eq(201);
      });
  },

  remove(user) {
    return cy
      .request({
        method: 'DELETE',
        url: '/api/deleteAccount',
        form: true,
        body: { email: user.email, password: user.password },
        failOnStatusCode: false,
      })
      .its('body');
  },
};

export default userApi;
