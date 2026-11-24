const https = require('https');

https.get('https://ntfy.sh/shreeji_saaj_sync_cloud_v3/json?poll=1&since=24h', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const lines = data.trim().split('\n').filter(Boolean);
    console.log('Total cached messages on ntfy (last 24h):', lines.length);
    lines.forEach((line, i) => {
      try {
        const msg = JSON.parse(line);
        if (msg.event === 'message' && msg.message) {
          const parsed = JSON.parse(msg.message);
          console.log(`Msg ${i+1}: Action = ${parsed.action}, Sender = ${parsed.senderId}, Orders = ${parsed.payload?.orders ? parsed.payload.orders.length : (parsed.payload?.id || parsed.payload?.orderNo || 'none')}`);
        }
      } catch(e) {
        console.log(`Msg ${i+1}: raw parse err`);
      }
    });
  });
}).on('error', err => console.error(err));
