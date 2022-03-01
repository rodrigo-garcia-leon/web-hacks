const functions = require('firebase-functions');

exports.getJobs = functions.https.onRequest((_, response) => {
  const jobs = [];
  response.send(jobs);
});
