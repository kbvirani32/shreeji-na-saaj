const fs = require('fs');
const content = fs.readFileSync('styles.css', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('active-mobile-tab') || line.includes('mobileBottomNav')) {
    console.log((i+1) + ': ' + line.trim());
  }
});
