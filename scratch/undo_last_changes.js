const fs = require('fs');

console.log('--- REVERTING LAST CHANGES ---');

// 1. Revert sw.js
let swContent = fs.readFileSync('sw.js', 'utf8');
swContent = swContent.replace(/const CACHE_NAME = 'shreeji-saaj-v\d+';/, "const CACHE_NAME = 'shreeji-saaj-v5';");
fs.writeFileSync('sw.js', swContent, 'utf8');
console.log('1. sw.js reverted to v5');

// 2. Revert app.js
let appContent = fs.readFileSync('app.js', 'utf8');

// Revert serviceWorker registration to v5
appContent = appContent.replace(/navigator\.serviceWorker\.register\('sw\.js\?v=\d+'\)/g, "navigator.serviceWorker.register('sw.js?v=5')");

// Revert DEFAULT_STOCK_ITEMS and loadDataFromStorage
const defaultStockRegex = /\/\/ Authentic Pushtimarg Divine Stock Catalog[\s\S]*?\/\/ Load Data\s*function loadDataFromStorage\(\) \{[\s\S]*?localStorage\.setItem\(STORAGE_KEYS\.STOCK, JSON\.stringify\(state\.stock\)\);\s*\}/;

const originalLoadStock = `// Load Data
function loadDataFromStorage() {
  try {
    
    const savedStock = localStorage.getItem(STORAGE_KEYS.STOCK);
    state.stock = savedStock ? JSON.parse(savedStock) : [
      { id: 'stk_1', itemName: 'શ્યામ કલ્યાણી પટોળા સિલ્ક કાપડ', category: 'fabric', quantity: 24.5, unit: 'meter', minAlertQty: 5, ratePerUnit: 650, notes: '૫ નંબર વાઘા માટે ખાસ' },
      { id: 'stk_2', itemName: 'પવિત્ર પીતાંબરી જરી બોર્ડર લેસ', category: 'zari', quantity: 18.0, unit: 'meter', minAlertQty: 4, ratePerUnit: 320, notes: 'શ્રીનાથજી શૃંગાર માટે' },
      { id: 'stk_3', itemName: 'જરદોશી મુકુટ & કુંડળ સાજ સેટ', category: 'shringar', quantity: 8, unit: 'set', minAlertQty: 2, ratePerUnit: 1200, notes: 'હાથવણાટ કારીગરી' },
      { id: 'stk_4', itemName: 'મોતી ચુંદડી & પિછવાઈ સિલ્ક', category: 'fabric', quantity: 12.0, unit: 'meter', minAlertQty: 3, ratePerUnit: 480, notes: 'હવેલી મનોરથ' }
    ];`;

if (defaultStockRegex.test(appContent)) {
  appContent = appContent.replace(defaultStockRegex, originalLoadStock);
  console.log('2. app.js loadDataFromStorage reverted to previous 4 default items');
} else {
  console.error('Could not match defaultStockRegex in app.js');
}

// Revert switchTab mobile button highlights
const switchTabMobRegex = /document\.querySelectorAll\('#mobileBottomNav button'\)\.forEach\(btn => \{[\s\S]*?currentMobBtn\.classList\.remove\('text-slate-400'\);\s*\}/;

const originalSwitchTabMob = `document.querySelectorAll('#mobileBottomNav button').forEach(btn => {
    btn.classList.remove('active-mobile-tab', 'text-royal-900', 'text-amber-500');
    btn.classList.add('text-slate-500');
  });
  const currentMobBtn = document.getElementById(\`mob-\${tabName}\`);
  if (currentMobBtn) {
    currentMobBtn.classList.add('active-mobile-tab', 'text-royal-900');
    currentMobBtn.classList.remove('text-slate-500');
  }`;

if (switchTabMobRegex.test(appContent)) {
  appContent = appContent.replace(switchTabMobRegex, originalSwitchTabMob);
  console.log('3. app.js switchTab reverted');
}

// Revert badgeLowStock in renderStockList
const badgeLowStockRegex = /const badgeLowStock = document\.getElementById\('badge-low-stock-count'\);[\s\S]*?mobileBadgeStock\.classList\.add\('hidden'\);\s*\}\s*\}/;

const originalBadgeLowStock = `const badgeLowStock = document.getElementById('badge-low-stock-count');
  if (badgeLowStock) {
    if (lowStockCount > 0) {
      badgeLowStock.innerText = lowStockCount;
      badgeLowStock.classList.remove('hidden');
    } else {
      badgeLowStock.classList.add('hidden');
    }
  }`;

if (badgeLowStockRegex.test(appContent)) {
  appContent = appContent.replace(badgeLowStockRegex, originalBadgeLowStock);
  console.log('4. app.js renderStockList badge reverted');
}

// Revert stock card template in renderStockList
const newCardRegex = /<div class="p-3\.5 sm:p-4 rounded-2xl bg-slate-900\/75 border[\s\S]*?<\/div>\s*<\/div>\s*`;\s*\}\)\.join\(''\);/;

const originalCard = `<div class="p-3.5 rounded-2xl bg-slate-900/60 border \${isLow ? 'border-rose-500/50 bg-rose-950/20' : 'border-slate-700/60'} hover:border-amber-400/60 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-xl \${isLow ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' : 'bg-amber-500/15 text-amber-400 border border-amber-400/30'} flex items-center justify-center flex-shrink-0 font-bold">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5l-9 5.25-9-5.25V7.5L12 2.25l9 5.25v9zM12 4.15L5.04 8.2 12 12.26l6.96-4.06L12 4.15zm-7 5.5v6.52l6 3.5V13.15L5 9.65zm14 0l-6 3.5v6.52l6-3.5V9.65z"/></svg>
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="font-bold text-sm text-slate-100">\${item.itemName}</h4>
              <span class="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-semibold text-slate-300 border border-slate-700/60">\${catLabels[item.category] || item.category}</span>
              \${isLow ? \`<span class="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-extrabold border border-rose-500/40">⚠️ \${state.lang === 'gu' ? 'ઓછો સ્ટોક' : 'Low Stock'}</span>\` : \`<span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">✓ \${state.lang === 'gu' ? 'ઉપલબ્ધ' : 'In Stock'}</span>\`}
            </div>
            <div class="text-xs text-slate-400 mt-1 flex items-center gap-3 flex-wrap">
              <span>\${state.lang === 'gu' ? 'જથ્થો' : 'Qty'}: <b class="\${isLow ? 'text-rose-400' : 'text-amber-300'} text-sm">\${item.quantity} \${unitLabels[item.unit] || item.unit}</b></span>
              \${item.ratePerUnit > 0 ? \`<span>ભાવ: <b class="text-slate-200">₹\${item.ratePerUnit} / \${unitLabels[item.unit] || item.unit}</b></span>\` : ''}
              \${itemTotalVal > 0 ? \`<span class="px-2 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30 text-[11px]">\${state.lang === 'gu' ? 'કુલ કિંમત: ' : state.lang === 'mr' ? 'एकूण मूल्य: ' : 'Total Val: '}₹\${Math.round(itemTotalVal).toLocaleString('en-IN')}</span>\` : ''}
              \${item.notes ? \`<span class="text-slate-400 italic text-[11px]">\${item.notes}</span>\` : ''}
            </div>
          </div>
        </div>

        <div class="flex items-center gap-1.5 self-end sm:self-center">
          <button onclick="quickRestock('\${item.id}')" title="જથ્થો ઉમેરો" class="px-2.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center gap-1 transition">
            <span>+</span>
            <span>\${state.lang === 'gu' ? 'ઉમેરો' : 'Add'}</span>
          </button>
          <button onclick="openStockModal('\${item.id}')" title="Edit" class="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
          </button>
          <button onclick="deleteStockItem('\${item.id}')" title="Delete" class="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-950 text-rose-400 border border-slate-700 transition">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
          </button>
        </div>
      </div>
    \`;
  }).join('');`;

if (newCardRegex.test(appContent)) {
  appContent = appContent.replace(newCardRegex, originalCard);
  console.log('5. app.js stock card template reverted');
}

fs.writeFileSync('app.js', appContent, 'utf8');
console.log('Saved reverted app.js');

// 3. Revert index.html
let htmlContent = fs.readFileSync('index.html', 'utf8');

// A. Shlok Bar on Mobile:
const curShlokBar = `<span class="hidden sm:inline" id="headerShlokLeft">॥ શ્રી ગોપીજનવલ્લભાય નમઃ ॥</span>
        <span class="hidden sm:inline font-semibold" id="headerShlokMain">॥ શ્રી કૃષ્ણઃ શરણં મમ ॥ શ્રીજી ના સાજ વ્યવસ્થાપન</span>
        <span class="sm:hidden font-black text-xs text-amber-300 truncate">॥ શ્રીજી ના સાજ ॥</span>`;

const origShlokBar = `<span class="hidden sm:inline" id="headerShlokLeft">॥ શ્રી ગોપીજનવલ્લભાય નમઃ ॥</span>
        <span class="mx-auto sm:mx-0 font-semibold" id="headerShlokMain">॥ શ્રી કૃષ્ણઃ શરણં મમ ॥ શ્રીજી ના સાજ વ્યવસ્થાપન</span>`;

htmlContent = htmlContent.replace(curShlokBar, origShlokBar);

// B. Sync Button & Language switcher on mobile:
const curSyncBtn = `<button onclick="triggerManualSync()" id="headerSyncBtn" class="px-2 py-1 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 flex items-center space-x-1 transition active:scale-95 text-[10px] sm:text-[11px] font-bold shadow-sm" title="લાઇવ મોબાઇલ & PC સિંક (Real-time Sync)">
            <span id="syncDot" class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span id="syncText" data-i18n="lbl_sync_active" class="hidden sm:inline">સિંક સક્રિય</span>
          </button>`;

const origSyncBtn = `<button onclick="triggerManualSync()" id="headerSyncBtn" class="px-2.5 py-1 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 flex items-center space-x-1.5 transition active:scale-95 text-[11px] font-bold shadow-sm" title="લાઇવ મોબાઇલ & PC સિંક (Real-time Sync)">
            <span id="syncDot" class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span id="syncText" data-i18n="lbl_sync_active">સિંક સક્રિય</span>
          </button>`;

htmlContent = htmlContent.replace(curSyncBtn, origSyncBtn);

const curLangButtons = `<div class="flex items-center space-x-0.5 sm:space-x-1 bg-black/40 p-0.5 rounded-xl border border-amber-500/30">
            <button onclick="setLanguage('gu')" id="langBtn-gu" class="px-1.5 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition active-lang">
              <span class="sm:hidden">ગુજ</span><span class="hidden sm:inline">ગુજરાતી</span>
            </button>
            <button onclick="setLanguage('mr')" id="langBtn-mr" class="px-1.5 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold text-slate-300 hover:text-white transition">
              <span class="sm:hidden">मरा</span><span class="hidden sm:inline">मराठी</span>
            </button>
            <button onclick="setLanguage('en')" id="langBtn-en" class="px-1.5 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold text-slate-300 hover:text-white transition">
              <span class="sm:hidden">EN</span><span class="hidden sm:inline">English</span>
            </button>
          </div>`;

const origLangButtons = `<div class="flex items-center space-x-1 bg-black/40 p-0.5 rounded-xl border border-amber-500/30">
            <button onclick="setLanguage('gu')" id="langBtn-gu" class="px-2.5 py-1 rounded-lg text-xs font-bold transition active-lang">
              ગુજરાતી
            </button>
            <button onclick="setLanguage('mr')" id="langBtn-mr" class="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-300 hover:text-white transition">
              मराठी
            </button>
            <button onclick="setLanguage('en')" id="langBtn-en" class="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-300 hover:text-white transition">
              English
            </button>
          </div>`;

htmlContent = htmlContent.replace(curLangButtons, origLangButtons);

// C. Stock KPI 3 and stock container padding:
const curKpi3 = `<div class="mt-2.5 flex flex-col">
            <span class="text-xl sm:text-3xl font-black text-emerald-600 tracking-tight" id="stockTotalValue">₹0</span>
            <span class="text-xs text-slate-400 font-medium mt-0.5" data-i18n="unit_total_value">કુલ ઇન્વેન્ટરી મૂલ્ય</span>
          </div>`;

const origKpi3 = `<div class="mt-2.5">
            <span class="text-2xl sm:text-3xl font-black text-emerald-600" id="stockTotalValue">₹0</span>
            <span class="text-xs text-slate-400 ml-1 font-medium" data-i18n="unit_total_value">કુલ ઇન્વેન્ટરી મૂલ્ય</span>
          </div>`;

htmlContent = htmlContent.replace(curKpi3, origKpi3);

const curStockContainer = `<div id="stockItemsContainer" class="space-y-3 pb-32">`;
const origStockContainer = `<div id="stockItemsContainer" class="space-y-3">`;
htmlContent = htmlContent.replace(curStockContainer, origStockContainer);

// D. Mobile Bottom Navigation: restore 4 tabs (Dashboard, Orders, +, PnL, More)
const curMobileNavRegex = /<nav id="mobileBottomNav"[\s\S]*?<\/nav>/;
const origMobileNav = `<nav id="mobileBottomNav" class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-2 py-1 flex items-center justify-around safe-bottom">
    
    <!-- Tab 1: Dashboard -->
    <button onclick="switchTab('dashboard')" id="mob-dashboard" class="flex flex-col items-center justify-center py-1 px-2.5 active-mobile-tab text-royal-900 transition active:scale-90">
      <svg class="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
      <span class="text-[10px] font-bold" data-i18n="nav_dashboard">ડેશબોર્ડ</span>
    </button>

    <!-- Tab 2: Orders -->
    <button onclick="switchTab('orders')" id="mob-orders" class="relative flex flex-col items-center justify-center py-1 px-2.5 text-slate-500 transition active:scale-90">
      <svg class="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
      <span class="text-[10px] font-bold" data-i18n="nav_orders">ઓર્ડર્સ</span>
      <span id="mobileBadgeOrders" class="absolute -top-0.5 right-1 px-1.5 py-0.2 bg-amber-500 text-slate-950 text-[10px] font-extrabold rounded-full">0</span>
    </button>

    <!-- Center Floating Action Button: + New Order -->
    <div class="relative -top-3">
      <button onclick="openNewOrderModal()" class="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 text-slate-950 shadow-lg shadow-amber-500/40 flex items-center justify-center active:scale-90 transition border-2 border-white ring-2 ring-amber-400/30" title="+ નવો ઓર્ડર">
        <svg class="w-4 h-4 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
      </button>
    </div>

    <!-- Tab 3: Profit & Loss -->
    <button onclick="switchTab('pnl')" id="mob-pnl" class="flex flex-col items-center justify-center py-1 px-2.5 text-slate-500 transition active:scale-90">
      <svg class="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2 0v8.99H22c-.47-4.74-4.24-8.52-9-8.99zm0 11.01V22c4.76-.47 8.53-4.25 9-8.99H13z"/></svg>
      <span class="text-[10px] font-bold" data-i18n="nav_pnl">નફો-નુકસાન</span>
    </button>

    <!-- Tab 4: More / Menu -->
    <button onclick="toggleMobileMoreMenu()" id="mob-more" class="flex flex-col items-center justify-center py-1 px-2.5 text-slate-500 transition active:scale-90">
      <svg class="w-5 h-5 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      <span class="text-[10px] font-bold" data-i18n="nav_more">મેનુ</span>
    </button>
  </nav>`;

if (curMobileNavRegex.test(htmlContent)) {
  htmlContent = htmlContent.replace(curMobileNavRegex, origMobileNav);
  console.log('6. index.html mobileBottomNav restored to original');
}

// E. In mobileMoreSheet, restore stock button (replacing PnL):
const curMorePnlBtn = /<!-- Profit & Loss \/ Accounting -->\s*<button onclick="switchTab\('pnl'\); closeMobileMoreMenu\(\)"[\s\S]*?<\/button>/;

const origMoreStockBtn = `<!-- Stock / Inventory -->
        <button onclick="switchTab('stock'); closeMobileMoreMenu()" class="more-sheet-btn p-3 bg-slate-800/80 hover:bg-amber-500/15 rounded-2xl border border-slate-700 hover:border-amber-400/50 text-left transition flex items-center space-x-2.5 group active:scale-95">
          <div class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-400/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
            <svg class="w-4 h-4 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5l-9 5.25-9-5.25V7.5L12 2.25l9 5.25v9zM12 4.15L5.04 8.2 12 12.26l6.96-4.06L12 4.15zm-7 5.5v6.52l6 3.5V13.15L5 9.65zm14 0l-6 3.5v6.52l6-3.5V9.65z"/></svg>
          </div>
          <div>
            <div class="text-xs font-bold text-slate-100 group-hover:text-amber-300 transition" data-i18n="nav_stock">સ્ટોક</div>
            <div class="text-[10px] text-slate-400">કાપડ & સાજ ઇન્વેન્ટરી</div>
          </div>
        </button>`;

if (curMorePnlBtn.test(htmlContent)) {
  htmlContent = htmlContent.replace(curMorePnlBtn, origMoreStockBtn);
  console.log('7. index.html mobileMoreSheet restored Stock button');
}

fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log('Saved reverted index.html');
console.log('--- REVERT COMPLETE ---');
