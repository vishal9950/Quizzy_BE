const Server = require('../../src/server');

describe('Test server: ', () => {
  test('Should return statusCode 200', (done) => {
    Server.inject('/leaderboard', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
