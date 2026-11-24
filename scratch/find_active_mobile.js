const fs = require('fs');
['styles.css', 'index.html', 'app.js'].forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('active-mobile-tab')) {
      console.log('Found in ' + file);
    }
  }
});
