const Server = require('../../src/server');

// jest.setTimeout(20000);
describe('Test server for POST /ques: ', () => {
  test('Should return statusCode 201: ', (done) => {
    const options = {
      method: 'POST',
      url: '/ques',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(201);
      done();
    });
  });

  test('Should return result \'Questions Stored in DB!\': ', (done) => {
    const options = {
      method: 'POST',
      url: '/ques',
    };
    Server.inject(options, (response) => {
      expect(response.result).toBe('Questions Stored in DB!');
      done();
    });
  });
});
