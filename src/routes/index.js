const home = require('./home');
const getQuestions = require('./getQuestions');
const users = require('./users');
const getOptions = require('./getOptions');
const leaderboard = require('./leaderboard');

module.exports = [].concat(home, getQuestions, users, getOptions, leaderboard);

