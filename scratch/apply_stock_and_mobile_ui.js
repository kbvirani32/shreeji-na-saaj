const fs = require('fs');
const path = require('path');

// 1. Update sw.js
let swContent = fs.readFileSync('sw.js', 'utf8');
swContent = swContent.replace(/const CACHE_NAME = 'shreeji-saaj-v\d+';/, "const CACHE_NAME = 'shreeji-saaj-v6';");
fs.writeFileSync('sw.js', swContent, 'utf8');
console.log('Updated sw.js to v6');

// 2. Update app.js
let appContent = fs.readFileSync('app.js', 'utf8');

// Replace serviceWorker registration to v6
appContent = appContent.replace(/navigator\.serviceWorker\.register\('sw\.js\?v=\d+'\)/g, "navigator.serviceWorker.register('sw.js?v=6')");

// Define DEFAULT_STOCK_ITEMS constant and update loadDataFromStorage
const defaultStockDefinition = `// Authentic Pushtimarg Divine Stock Catalog
const DEFAULT_STOCK_ITEMS = [
  { id: 'stk_1', itemName: 'શ્યામ કલ્યાણી પટોળા સિલ્ક કાપડ', category: 'fabric', quantity: 25.0, unit: 'meter', minAlertQty: 5, ratePerUnit: 650, notes: '૫ નંબર વાઘા માટે ખાસ' },
  { id: 'stk_2', itemName: 'અસલી બનારસી કિનખાબ જરી વાઘા કાપડ', category: 'fabric', quantity: 20.0, unit: 'meter', minAlertQty: 4, ratePerUnit: 850, notes: 'રાજભોગ & ઉત્સવ સાજ' },
  { id: 'stk_3', itemName: 'પવિત્ર પીતાંબરી જરી બોર્ડર લેસ', category: 'zari', quantity: 24.0, unit: 'meter', minAlertQty: 5, ratePerUnit: 320, notes: 'શ્રીનાથજી શૃંગાર માટે' },
  { id: 'stk_4', itemName: 'સુવર્ણ કસબ મોરપીંછ લેસ', category: 'zari', quantity: 12.0, unit: 'roll', minAlertQty: 3, ratePerUnit: 450, notes: 'હવેલી મનોરથ બોર્ડર' },
  { id: 'stk_5', itemName: 'જરદોશી મુકુટ & કુંડળ સાજ સેટ', category: 'shringar', quantity: 8, unit: 'set', minAlertQty: 2, ratePerUnit: 1200, notes: 'હાથવણાટ કારીગરી' },
  { id: 'stk_6', itemName: 'શ્રીમસ્તક મોતી પાઘ & કટિમેખલા સાજ', category: 'shringar', quantity: 6, unit: 'set', minAlertQty: 2, ratePerUnit: 1500, notes: 'રત્નજડિત સાજ સેટ' },
  { id: 'stk_7', itemName: 'મોતી ચુંદડી & પિછવાઈ સિલ્ક', category: 'fabric', quantity: 18.0, unit: 'meter', minAlertQty: 4, ratePerUnit: 480, notes: 'હવેલી મનોરથ પિછવાઈ' },
  { id: 'stk_8', itemName: 'પ્યોર મલમલ કોટન અસ્તર કાપડ', category: 'fabric', quantity: 45.0, unit: 'meter', minAlertQty: 10, ratePerUnit: 120, notes: 'સુતરાઉ નરમ અસ્તર' }
];

// Load Data
function loadDataFromStorage() {
  try {
    const savedStock = localStorage.getItem(STORAGE_KEYS.STOCK);
    let parsedStock = null;
    if (savedStock) {
      try {
        parsedStock = JSON.parse(savedStock);
      } catch (e) {
        parsedStock = null;
      }
    }

    if (!Array.isArray(parsedStock) || parsedStock.length === 0) {
      state.stock = JSON.parse(JSON.stringify(DEFAULT_STOCK_ITEMS));
      localStorage.setItem(STORAGE_KEYS.STOCK, JSON.stringify(state.stock));
    } else {
      // Gracefully ensure all items have valid ratePerUnit > 0
      state.stock = parsedStock.map(item => {
        if (!item.ratePerUnit || Number(item.ratePerUnit) <= 0) {
          const match = DEFAULT_STOCK_ITEMS.find(d => d.itemName === item.itemName || d.id === item.id);
          item.ratePerUnit = match ? match.ratePerUnit : (item.category === 'fabric' ? 500 : item.category === 'shringar' ? 1200 : item.category === 'zari' ? 350 : 250);
        }
        return item;
      });
      localStorage.setItem(STORAGE_KEYS.STOCK, JSON.stringify(state.stock));
    }`;

// Replace lines around line 1281-1292
const oldLoadStockRegex = /\/\/ Load Data\s*function loadDataFromStorage\(\) \{[\s\S]*?state\.stock = savedStock \? JSON\.parse\(savedStock\) : \[[\s\S]*?\];/;
if (oldLoadStockRegex.test(appContent)) {
  appContent = appContent.replace(oldLoadStockRegex, defaultStockDefinition);
  console.log('Replaced loadDataFromStorage and added DEFAULT_STOCK_ITEMS');
} else {
  console.error('Could not find oldLoadStockRegex in app.js');
}

// In switchTab, update mobile button active styling
const oldSwitchTabMob = /document\.querySelectorAll\('#mobileBottomNav button'\)\.forEach\(btn => \{[\s\S]*?currentMobBtn\.classList\.remove\('text-slate-500'\);\s*\}/;
const newSwitchTabMob = `document.querySelectorAll('#mobileBottomNav button').forEach(btn => {
    btn.classList.remove('active-mobile-tab', 'text-amber-400');
    btn.classList.add('text-slate-400');
  });
  const currentMobBtn = document.getElementById(\`mob-\${tabName}\`);
  if (currentMobBtn) {
    currentMobBtn.classList.add('active-mobile-tab', 'text-amber-400');
    currentMobBtn.classList.remove('text-slate-400');
  }`;

if (oldSwitchTabMob.test(appContent)) {
  appContent = appContent.replace(oldSwitchTabMob, newSwitchTabMob);
  console.log('Updated switchTab mobile button highlights');
}

// In renderStockList, update mobileBadgeStock and enhanced card formatting
const oldBadgeLowStock = /const badgeLowStock = document\.getElementById\('badge-low-stock-count'\);[\s\S]*?badgeLowStock\.classList\.add\('hidden'\);\s*\}\s*\}/;
const newBadgeLowStock = `const badgeLowStock = document.getElementById('badge-low-stock-count');
  if (badgeLowStock) {
    if (lowStockCount > 0) {
      badgeLowStock.innerText = lowStockCount;
      badgeLowStock.classList.remove('hidden');
    } else {
      badgeLowStock.classList.add('hidden');
    }
  }

  // Mobile bottom navigation stock badge
  const mobileBadgeStock = document.getElementById('mobileBadgeStock');
  if (mobileBadgeStock) {
    if (lowStockCount > 0) {
      mobileBadgeStock.innerText = lowStockCount;
      mobileBadgeStock.classList.remove('hidden');
    } else {
      mobileBadgeStock.classList.add('hidden');
    }
  }`;

if (oldBadgeLowStock.test(appContent)) {
  appContent = appContent.replace(oldBadgeLowStock, newBadgeLowStock);
  console.log('Updated renderStockList badges for mobile bottom nav');
}

fs.writeFileSync('app.js', appContent, 'utf8');
console.log('Saved app.js');

// 3. Update index.html
let htmlContent = fs.readFileSync('index.html', 'utf8');

// A. Shlok Bar on Mobile:
const oldShlokBar = `<span class="hidden sm:inline" id="headerShlokLeft">॥ શ્રી ગોપીજનવલ્લભાય નમઃ ॥</span>
        <span class="mx-auto sm:mx-0 font-semibold" id="headerShlokMain">॥ શ્રી કૃષ્ણઃ શરણં મમ ॥ શ્રીજી ના સાજ વ્યવસ્થાપન</span>`;

const newShlokBar = `<span class="hidden sm:inline" id="headerShlokLeft">॥ શ્રી ગોપીજનવલ્લભાય નમઃ ॥</span>
        <span class="hidden sm:inline font-semibold" id="headerShlokMain">॥ શ્રી કૃષ્ણઃ શરણં મમ ॥ શ્રીજી ના સાજ વ્યવસ્થાપન</span>
        <span class="sm:hidden font-black text-xs text-amber-300 truncate">॥ શ્રીજી ના સાજ ॥</span>`;

htmlContent = htmlContent.replace(oldShlokBar, newShlokBar);

// B. Sync Button & Language switcher on mobile:
const oldSyncBtn = `<button onclick="triggerManualSync()" id="headerSyncBtn" class="px-2.5 py-1 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 flex items-center space-x-1.5 transition active:scale-95 text-[11px] font-bold shadow-sm" title="લાઇવ મોબાઇલ & PC સિંક (Real-time Sync)">
            <span id="syncDot" class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span id="syncText" data-i18n="lbl_sync_active">સિંક સક્રિય</span>
          </button>`;

const newSyncBtn = `<button onclick="triggerManualSync()" id="headerSyncBtn" class="px-2 py-1 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 flex items-center space-x-1 transition active:scale-95 text-[10px] sm:text-[11px] font-bold shadow-sm" title="લાઇવ મોબાઇલ & PC સિંક (Real-time Sync)">
            <span id="syncDot" class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span id="syncText" data-i18n="lbl_sync_active" class="hidden sm:inline">સિંક સક્રિય</span>
          </button>`;

htmlContent = htmlContent.replace(oldSyncBtn, newSyncBtn);

const oldLangButtons = `<div class="flex items-center space-x-1 bg-black/40 p-0.5 rounded-xl border border-amber-500/30">
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

const newLangButtons = `<div class="flex items-center space-x-0.5 sm:space-x-1 bg-black/40 p-0.5 rounded-xl border border-amber-500/30">
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

htmlContent = htmlContent.replace(oldLangButtons, newLangButtons);

// C. Stock KPI 3 and stock container padding:
const oldKpi3 = `<div class="mt-2.5">
            <span class="text-2xl sm:text-3xl font-black text-emerald-600" id="stockTotalValue">₹0</span>
            <span class="text-xs text-slate-400 ml-1 font-medium" data-i18n="unit_total_value">કુલ ઇન્વેન્ટરી મૂલ્ય</span>
          </div>`;

const newKpi3 = `<div class="mt-2.5 flex flex-col">
            <span class="text-xl sm:text-3xl font-black text-emerald-600 tracking-tight" id="stockTotalValue">₹0</span>
            <span class="text-xs text-slate-400 font-medium mt-0.5" data-i18n="unit_total_value">કુલ ઇન્વેન્ટરી મૂલ્ય</span>
          </div>`;

htmlContent = htmlContent.replace(oldKpi3, newKpi3);

const oldStockContainer = `<div id="stockItemsContainer" class="space-y-3">`;
const newStockContainer = `<div id="stockItemsContainer" class="space-y-3 pb-32">`;
htmlContent = htmlContent.replace(oldStockContainer, newStockContainer);

// D. Mobile Bottom Navigation: replace with 5 items (Dashboard, Orders, +, Stock, More)
const oldMobileNavRegex = /<nav id="mobileBottomNav"[\s\S]*?<\/nav>/;
const newMobileNav = `<nav id="mobileBottomNav" class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-amber-500/30 shadow-2xl px-2 py-1 flex items-center justify-around safe-bottom">
    
    <!-- Tab 1: Dashboard -->
    <button onclick="switchTab('dashboard')" id="mob-dashboard" class="flex flex-col items-center justify-center py-1 px-2.5 active-mobile-tab text-amber-400 transition active:scale-90">
      <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
      <span class="text-[10px] font-bold mt-0.5" data-i18n="nav_dashboard">ડેશબોર્ડ</span>
    </button>

    <!-- Tab 2: Orders -->
    <button onclick="switchTab('orders')" id="mob-orders" class="relative flex flex-col items-center justify-center py-1 px-2.5 text-slate-400 hover:text-amber-300 transition active:scale-90">
      <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
      <span class="text-[10px] font-bold mt-0.5" data-i18n="nav_orders">ઓર્ડર્સ</span>
      <span id="mobileBadgeOrders" class="absolute -top-0.5 right-1 px-1.5 py-0.2 bg-amber-500 text-slate-950 text-[10px] font-extrabold rounded-full">0</span>
    </button>

    <!-- Center Floating Action Button: + New Order -->
    <div class="relative -top-3">
      <button onclick="openNewOrderModal()" class="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 text-slate-950 shadow-lg shadow-amber-500/40 flex items-center justify-center active:scale-90 transition border-2 border-slate-900 ring-2 ring-amber-400/40" title="+ નવો ઓર્ડર">
        <svg class="w-5 h-5 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
      </button>
    </div>

    <!-- Tab 3: Stock / Inventory (NEW DIRECT MOBILE TAB) -->
    <button onclick="switchTab('stock')" id="mob-stock" class="relative flex flex-col items-center justify-center py-1 px-2.5 text-slate-400 hover:text-amber-300 transition active:scale-90">
      <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5l-9 5.25-9-5.25V7.5L12 2.25l9 5.25v9zM12 4.15L5.04 8.2 12 12.26l6.96-4.06L12 4.15zm-7 5.5v6.52l6 3.5V13.15L5 9.65zm14 0l-6 3.5v6.52l6-3.5V9.65z"/></svg>
      <span class="text-[10px] font-bold mt-0.5" data-i18n="nav_stock">સ્ટોક</span>
      <span id="mobileBadgeStock" class="hidden absolute -top-0.5 right-1 px-1.5 py-0.2 bg-rose-500 text-white text-[10px] font-extrabold rounded-full">!</span>
    </button>

    <!-- Tab 4: More / Menu -->
    <button onclick="toggleMobileMoreMenu()" id="mob-more" class="flex flex-col items-center justify-center py-1 px-2.5 text-slate-400 hover:text-amber-300 transition active:scale-90">
      <svg class="w-5 h-5 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      <span class="text-[10px] font-bold mt-0.5" data-i18n="nav_more">મેનુ</span>
    </button>
  </nav>`;

if (oldMobileNavRegex.test(htmlContent)) {
  htmlContent = htmlContent.replace(oldMobileNavRegex, newMobileNav);
  console.log('Replaced mobileBottomNav with 5 items');
}

// E. In mobileMoreSheet, replace stock button with PnL button:
const oldMoreStockBtn = /<!-- Stock \/ Inventory -->\s*<button onclick="switchTab\('stock'\); closeMobileMoreMenu\(\)"[\s\S]*?<\/button>/;
const newMorePnlBtn = `<!-- Profit & Loss / Accounting -->
        <button onclick="switchTab('pnl'); closeMobileMoreMenu()" class="more-sheet-btn p-3 bg-slate-800/80 hover:bg-amber-500/15 rounded-2xl border border-slate-700 hover:border-amber-400/50 text-left transition flex items-center space-x-2.5 group active:scale-95">
          <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
            <svg class="w-4 h-4 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2 0v8.99H22c-.47-4.74-4.24-8.52-9-8.99zm0 11.01V22c4.76-.47 8.53-4.25 9-8.99H13z"/></svg>
          </div>
          <div>
            <div class="text-xs font-bold text-slate-100 group-hover:text-amber-300 transition" data-i18n="nav_pnl">નફો-નુકસાન</div>
            <div class="text-[10px] text-slate-400">હિસાબ & ખર્ચ</div>
          </div>
        </button>`;

if (oldMoreStockBtn.test(htmlContent)) {
  htmlContent = htmlContent.replace(oldMoreStockBtn, newMorePnlBtn);
  console.log('Replaced Stock with PnL in mobileMoreSheet');
}

fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log('Saved index.html');
