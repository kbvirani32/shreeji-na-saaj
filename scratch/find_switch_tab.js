const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('function switchTab') || line.includes('mob-')) {
    console.log((i+1) + ': ' + line.trim());
  }
});
