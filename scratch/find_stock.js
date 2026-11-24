const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('loadDataFromStorage') || line.includes('STOCK') || line.includes('renderStock') || line.includes('state.stock')) {
    if (i < 500 || line.includes('function ') || line.includes('loadData') || line.includes('renderStockList')) {
      console.log((i+1) + ': ' + line.trim());
    }
  }
});
