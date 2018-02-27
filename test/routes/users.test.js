const Server = require('../../src/server');

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
});
