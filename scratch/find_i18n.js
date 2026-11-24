const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('btn_cancel') || line.includes('btn_delete')) {
    console.log((i+1) + ': ' + line.trim());
  }
});
