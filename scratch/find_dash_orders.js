const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('dashRecentOrders') || line.includes('recentOrders')) {
    console.log((i+1) + ': ' + line.trim());
  }
});
