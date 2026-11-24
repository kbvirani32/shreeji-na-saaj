const https = require('https');

const testPayload = {
  action: 'PING',
  senderId: 'test_seeder',
  timestamp: new Date().toISOString()
};

const data = JSON.stringify(testPayload);

const req = https.request('https://ntfy.sh/shreeji_saaj_sync_cloud_v4', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
    'Title': 'Ping Test'
  }
}, res => {
  console.log('Status code for v4:', res.statusCode);
  let resData = '';
  res.on('data', c => resData += c);
  res.on('end', () => console.log('Response:', resData));
});

req.on('error', err => console.error(err));
req.write(data);
req.end();
