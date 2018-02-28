const home = require('./home');
const getQuestions = require('./getQuestions');
const users = require('./users');
const getOptions = require('./getOptions');

module.exports = [].concat(home, getQuestions, users, getOptions);

