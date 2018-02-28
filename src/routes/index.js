const home = require('./home');
const getQuestions = require('./getQuestions');
const users = require('./users');
const getOptions = require('./getOptions');
const leaderboard = require('./leaderboard');
const sync = require('./sync');

module.exports = [].concat(home, getQuestions, users, getOptions, leaderboard, sync);

