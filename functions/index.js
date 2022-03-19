const functions = require('firebase-functions');
const { google } = require('googleapis');
const path = require('path');
const { parse } = require('csv');

async function getJobs() {
  const { JWT } = google.auth;
  const authClient = new JWT({
    keyFile: path.resolve(__dirname, 'web-hacks-f4482c227c1b.json'),
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });
  await authClient.authorize();

  const drive = google.drive({
    auth: authClient,
    version: 'v3',
  });

  const res = await drive.files.export({
    fileId: '16sn1jg7iy7T4JmnbuseNVrjt2xPg2-qNKtH9khAimdc',
    mimeType: 'text/csv',
  });
  const records = parse(res.data, { columns: true });

  const jobs = [];
  for await (const record of records) {
    jobs.push({
      position: record?.Position,
      company: record?.Company,
      location: record?.Location,
      keywords: record?.Keywords?.split('; ').filter(Boolean),
      url: record?.URL,
      modified: record['Modified Date'],
    });
  }

  return jobs;
}

exports.getJobs = functions.https.onRequest(async (_, response) => {
  const jobs = await getJobs();
  response.send(jobs);
});

if (require.main) {
  (async () => {
    const jobs = await getJobs();

    // eslint-disable-next-line
    console.log(jobs);
  })();
}
