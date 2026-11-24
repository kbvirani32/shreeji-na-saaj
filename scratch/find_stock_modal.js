const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('function openStockModal') || line.includes('function saveStockItem') || line.includes('modalStockRate')) {
    console.log((i+1) + ': ' + line.trim());
  }
});
