const fs = require('fs');
const transcriptPath = 'C:/Users/User/.gemini/antigravity/brain/c0c55aaa-1155-4cb1-b6d7-e24ad2e84214/.system_generated/logs/transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
const obj = JSON.parse(lines[2997]);
console.log(obj.tool_calls[0].args.Content);
