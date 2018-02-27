const Models = require('../../models');

const handler = (request, reply) => {
  Models.users.findAll({
    attributes: ['username', 'score'],
  }).then((allUsers) => {
    reply(allUsers);
  });
};

const handler1 = (request, reply) => {
  console.log(request.payload);
  const { username, score } = request.payload;
  Models.users.upsert({
    id: username,
    username,
    score,
  }).then((value) => {
    if (value === true) {
      reply('User enterred!').code(201);
    } else {
      reply('User updated').code(201);
    }
  });
};

module.exports = [{
  path: '/users',
  method: 'GET',
  handler,
},
{
  path: '/users',
  method: 'POST',
  handler: handler1,
},
];

