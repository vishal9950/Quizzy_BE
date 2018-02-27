const Server = require('../../src/server');

describe('Test server: ', () => {
  test('should return statusCode 200', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
