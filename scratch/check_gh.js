const https = require('https');

https.get('https://raw.githubusercontent.com/kbvirani32/shreeji-na-saaj/main/sw.js', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    console.log('GitHub main sw.js:');
    console.log(data.substring(0, 100));
  });
}).on('error', err => console.log('Err:', err.message));
