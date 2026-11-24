const fs = require('fs');
const transcriptPath = 'C:/Users/User/.gemini/antigravity/brain/c0c55aaa-1155-4cb1-b6d7-e24ad2e84214/.system_generated/logs/transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
lines.forEach((line, i) => {
  if (line.includes('uploading an existing file') || line.includes('Commit changes') || line.includes('shreeji_na_saaj_vercel.zip')) {
    console.log('Line ' + (i+1));
    try {
      const obj = JSON.parse(line);
      if (obj.content) console.log(obj.content.substring(0, 300));
    } catch(e) {}
  }
});
