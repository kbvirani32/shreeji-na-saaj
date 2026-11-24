const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('Modal') || line.includes('modal')) {
    if (line.includes('id="')) {
      console.log((i+1) + ': ' + line.trim());
    }
  }
});
