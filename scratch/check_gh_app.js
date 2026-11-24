const https = require('https');

https.get('https://raw.githubusercontent.com/kbvirani32/shreeji-na-saaj/main/app.js', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    console.log('GitHub app.js length:', data.length);
    console.log('Includes DEFAULT_STOCK_ITEMS:', data.includes('DEFAULT_STOCK_ITEMS'));
    console.log('Includes sw.js?v=6:', data.includes('sw.js?v=6'));
    console.log('Includes sw.js?v=5:', data.includes('sw.js?v=5'));
    console.log('Includes sw.js?v=4:', data.includes('sw.js?v=4'));
  });
}).on('error', err => console.error(err.message));
