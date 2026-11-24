const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('mobileBottomNav') || line.includes('tab-stock') || line.includes('stockTotalValue') || line.includes('mob-')) {
    console.log((i+1) + ': ' + line.trim());
  }
});
