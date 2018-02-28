const Models = require('../../models');

const handler = (request, reply) => {
  Models.options.findAll({
    attributes: ['option'],
    where: {
      quesid: request.params.quesid,
    },
  }).then((options) => {
    reply(options).code(200);
  });
};

module.exports = {
  path: '/options/{quesid}',
  method: 'GET',
  handler,
};

