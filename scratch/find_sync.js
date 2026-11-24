const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('pushToCloudStore') || line.includes('applyRemoteSync') || line.includes('handleSyncPayload')) {
    console.log((i+1) + ': ' + line.trim());
  }
});
