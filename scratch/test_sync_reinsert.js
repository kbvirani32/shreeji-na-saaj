const fs = require('fs');

// Look at handleIncomingSyncEvent in app.js:
// Case 1: UPSERT_ORDER
// Case 2: FULL_STATE_BROADCAST
// Case 3: 24h replay
console.log('Inspecting handleIncomingSyncEvent...');
