const handler = (request, reply) => {
  reply('Working!').code(200);
};

module.exports = {
  path: '/',
  method: 'GET',
  handler,
};

