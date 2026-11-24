const fs = require('fs');
const stats = fs.statSync('c:/Users/User/Desktop/shreeji_na_saaj_vercel.zip');
console.log('Zip size:', stats.size, 'Modified:', stats.mtime);
