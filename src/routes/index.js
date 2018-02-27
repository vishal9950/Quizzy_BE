const home = require('./home');
const getQuestions = require('./getQuestions');
const users = require('./users');

module.exports = [].concat(home, getQuestions, users);

