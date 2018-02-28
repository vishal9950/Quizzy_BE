const Sequelize = require('sequelize');

const sequelize = new Sequelize('quesdb', 'vishalvasnani', null, {
  host: 'localhost',
  dialect: 'postgres',
});

const handler = (request, reply) => {
  sequelize.query('SELECT username,score FROM users order by score desc limit 5', { type: sequelize.QueryTypes.SELECT })
    .then((users) => {
      reply(users).code(200);
    });
};
module.exports = {
  path: '/leaderboard',
  method: 'GET',
  handler,
};

