const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('deleteOrder') || line.includes('DELETE_ORDER') || line.includes('delete') && line.includes('order') || line.includes('confirmDelete')) {
    console.log((i+1) + ': ' + line.trim());
  }
});
