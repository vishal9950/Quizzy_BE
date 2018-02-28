const Models = require('../../models');

const handler = (request, reply) => {
//   const { option, quesid, rt } = request.payload;
  const arr = Object.keys(request.payload);
  const arrJSON = JSON.parse(arr[0]);
  Models.state.destroy({ truncate: true }).then(() => {
    Models.state.bulkCreate(arrJSON).then(() => {
      reply('Synced!').code(200);
    });
  });
//   console.log(arrJSON);
//   Models.state.upsert({
//     where: {
//       id: arrJSON.username,
//       quesid: arrJSON.quesid,
//       username: arrJSON.username,
//     },
//   }).then(() => {
//     reply('Synced!');
//   });
};

const handler1 = (request, reply) => {
  Models.state.findAll({
    where: {
      username: request.params.username,
    },
    attributes: ['quesid', 'option', 'rt', 'username'],
  }).then((value) => {
    reply(value);
  });
};

module.exports = [
  {
    path: '/sync',
    method: 'POST',
    handler,
  },
  {
    path: '/sync/{username}',
    method: 'GET',
    handler: handler1,
  },
];

