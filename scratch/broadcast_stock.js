const https = require('https');

const DEFAULT_STOCK_ITEMS = [
  { id: 'stk_1', itemName: 'શ્યામ કલ્યાણી પટોળા સિલ્ક કાપડ', category: 'fabric', quantity: 25.0, unit: 'meter', minAlertQty: 5, ratePerUnit: 650, notes: '૫ નંબર વાઘા માટે ખાસ' },
  { id: 'stk_2', itemName: 'અસલી બનારસી કિનખાબ જરી વાઘા કાપડ', category: 'fabric', quantity: 20.0, unit: 'meter', minAlertQty: 4, ratePerUnit: 850, notes: 'રાજભોગ & ઉત્સવ સાજ' },
  { id: 'stk_3', itemName: 'પવિત્ર પીતાંબરી જરી બોર્ડર લેસ', category: 'zari', quantity: 24.0, unit: 'meter', minAlertQty: 5, ratePerUnit: 320, notes: 'શ્રીનાથજી શૃંગાર માટે' },
  { id: 'stk_4', itemName: 'સુવર્ણ કસબ મોરપીંછ લેસ', category: 'zari', quantity: 12.0, unit: 'roll', minAlertQty: 3, ratePerUnit: 450, notes: 'હવેલી મનોરથ બોર્ડર' },
  { id: 'stk_5', itemName: 'જરદોશી મુકુટ & કુંડળ સાજ સેટ', category: 'shringar', quantity: 8, unit: 'set', minAlertQty: 2, ratePerUnit: 1200, notes: 'હાથવણાટ કારીગરી' },
  { id: 'stk_6', itemName: 'શ્રીમસ્તક મોતી પાઘ & કટિમેખલા સાજ', category: 'shringar', quantity: 6, unit: 'set', minAlertQty: 2, ratePerUnit: 1500, notes: 'રત્નજડિત સાજ સેટ' },
  { id: 'stk_7', itemName: 'મોતી ચુંદડી & પિછવાઈ સિલ્ક', category: 'fabric', quantity: 18.0, unit: 'meter', minAlertQty: 4, ratePerUnit: 480, notes: 'હવેલી મનોરથ પિછવાઈ' },
  { id: 'stk_8', itemName: 'પ્યોર મલમલ કોટન અસ્તર કાપડ', category: 'fabric', quantity: 45.0, unit: 'meter', minAlertQty: 10, ratePerUnit: 120, notes: 'સુતરાઉ નરમ અસ્તર' }
];

const payload = {
  action: 'STOCK_UPDATE',
  payload: DEFAULT_STOCK_ITEMS,
  senderId: 'cli_seeder_' + Date.now(),
  timestamp: new Date().toISOString()
};

const data = JSON.stringify(payload);

const req = https.request('https://ntfy.sh/shreeji_saaj_sync_cloud_v3', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
    'Title': 'Shreeji Saaj Stock Broadcast',
    'Priority': 'default'
  }
}, res => {
  console.log('Broadcast status code:', res.statusCode);
  let resData = '';
  res.on('data', c => resData += c);
  res.on('end', () => {
    console.log('Response:', resData);
  });
});

req.on('error', err => console.error('Broadcast error:', err.message));
req.write(data);
req.end();
