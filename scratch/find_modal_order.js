const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('orderModal') || line.includes('deleteOrder') || line.includes('modalOrder')) {
    console.log((i+1) + ': ' + line.trim());
  }
});
