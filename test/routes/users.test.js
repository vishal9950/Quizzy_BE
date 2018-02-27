const Server = require('../../src/server');
const Models = require('../../models');

describe('Test server: ', () => {
  test('Should return statusCode 200: ', (done) => {
    Server.inject('/users', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return the users: ', (done) => {
    const options = {
      url: '/users',
      method: 'GET',
    };
    Server.inject(options, (response) => {
      expect(response.result).toEqual([]);
      done();
    });
  });

  test('Should store the user\'s details: ', (done) => {
    Models.users.destroy({ truncate: true }).then(() => {
      const options = {
        url: '/users',
        method: 'POST',
        payload: {
          username: 'Hva',
          score: 6,
        },
      };
      Server.inject(options, (response) => {
        expect(response.result).toBe('User enterred!');
        done();
      });
    });
  });
});
