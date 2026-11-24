const fs = require('fs');

['app.js', 'index.html'].forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('deleteOrder')) {
      console.log(`${file}:${i+1}: ${line.trim()}`);
    }
  });
});
