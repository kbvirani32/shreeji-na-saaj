const fs = require('fs');
const transcriptPath = 'C:/Users/User/.gemini/antigravity/brain/c0c55aaa-1155-4cb1-b6d7-e24ad2e84214/.system_generated/logs/transcript.jsonl';
if (fs.existsSync(transcriptPath)) {
  const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (line.includes('remote-debugging-port') || line.includes('mobile_stock_view')) {
      console.log('Line ' + (i+1));
      try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
          console.log(JSON.stringify(obj.tool_calls).substring(0, 300));
        }
      } catch(e) {}
    }
  });
}
