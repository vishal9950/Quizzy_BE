const rp = require('request-promise');
const Models = require('../../models');

const handler = (request, reply) => {
  rp('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions').then((allQues) => {
    const allQuesJSON = JSON.parse(allQues).allQuestions;
    const allQuesMapped = allQuesJSON.map(ques => ({
      quesid: ques.questionId,
      ques: ques.question,
    }));
    const prom = [];
    for (let k = 0; k < allQuesMapped.length; k += 1) {
      prom.push(rp(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/${allQuesMapped[k].quesid}`).then((corrAns) => {
        const corrAnsJSON = JSON.parse(corrAns);
        return corrAnsJSON;
      }));
    }
    Promise.all(prom).then((answers) => {
      for (let k = 0; k < allQuesMapped.length; k += 1) {
        allQuesMapped[k].correctans = answers[k].answer;
      }
      Models.questions.destroy({ truncate: true }).then(() => {
        Models.questions.bulkCreate(allQuesMapped).then(() => {
          Models.options.destroy({ truncate: true }).then(() => {
            for (let i = 0; i < allQuesJSON.length; i += 1) {
              const keyValuePair = Object.entries(allQuesJSON[i]);
              // console.log(keyValuePair);
              const prom1 = [];
              for (let j = 2; j < keyValuePair.length; j += 1) {
                prom1.push(Models.options.create({
                  quesid: keyValuePair[1][1],
                  option: keyValuePair[j][1],
                }));
              }
              Promise.all(prom1).then(() => {
              });
            }
          });
        });
        reply('Questions Stored in DB!').code(201);
      });
    });
  });
};

module.exports = {
  path: '/ques',
  method: 'POST',
  handler,
};
