const Server = require('../../src/server');

describe('Test server: ', () => {
  test('Should return statusCode 200: ', (done) => {
    Server.inject('/users', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
