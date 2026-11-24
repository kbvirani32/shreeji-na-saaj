const https = require('https');

https.get('https://raw.githubusercontent.com/kbvirani32/shreeji-na-saaj/main/index.html', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    console.log('GitHub index.html length:', data.length);
    console.log('Includes mob-stock:', data.includes('id="mob-stock"'));
    console.log('Includes mob-pnl:', data.includes('id="mob-pnl"'));
  });
}).on('error', err => console.error(err.message));
