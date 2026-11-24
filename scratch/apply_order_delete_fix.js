const fs = require('fs');

console.log('--- APPLYING ORDER DELETE FIX ---');

// 1. Update index.html
let htmlContent = fs.readFileSync('index.html', 'utf8');

// A. Add modalOrderDeleteBtn to orderModal footer:
const oldOrderModalFooter = `<div class="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-200">
        <button type="button" onclick="closeOrderModal()" class="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs sm:text-sm transition" data-i18n="btn_cancel">
          રદ કરો
        </button>
        <button type="button" onclick="saveOrder()" class="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-md shadow-amber-500/20 active:scale-95 transition flex items-center gap-2">
          <svg class="w-4 h-4 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
          <span id="orderModalSaveBtnText">ઓર્ડર સેવ કરો</span>
        </button>
      </div>`;

const newOrderModalFooter = `<div class="bg-slate-50 px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-t border-slate-200 flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <button type="button" onclick="closeOrderModal()" class="px-3.5 sm:px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs sm:text-sm transition" data-i18n="btn_cancel">
            બંધ કરો
          </button>
          <button type="button" id="modalOrderDeleteBtn" onclick="deleteOrder(state.editingOrderId)" class="hidden px-3 sm:px-3.5 py-2 bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-600 font-bold rounded-xl text-xs sm:text-sm transition flex items-center gap-1.5 active:scale-95" title="ઓર્ડર ડિલીટ કરો">
            <svg class="w-4 h-4 text-rose-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            <span data-i18n="btn_delete_order">ઓર્ડર ડિલીટ</span>
          </button>
        </div>
        <button type="button" onclick="saveOrder()" class="px-5 sm:px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-md shadow-amber-500/20 active:scale-95 transition flex items-center gap-2">
          <svg class="w-4 h-4 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
          <span id="orderModalSaveBtnText">ઓર્ડર સેવ કરો</span>
        </button>
      </div>`;

if (htmlContent.includes(oldOrderModalFooter)) {
  htmlContent = htmlContent.replace(oldOrderModalFooter, newOrderModalFooter);
  console.log('1. Updated orderModal footer with Delete button');
} else {
  console.warn('Could not match oldOrderModalFooter directly');
}

// B. Insert deleteConfirmModal right after orderModal:
const deleteConfirmModalHtml = `
  <!-- ======================================================= -->
  <!-- MODAL: CONFIRM ORDER DELETION (BULLETPROOF & IN-APP)   -->
  <!-- ======================================================= -->
  <div id="deleteConfirmModal" class="hidden fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4" onclick="if(event.target === this) closeDeleteConfirmModal()">
    <div class="bg-slate-900 border-2 border-rose-500/40 rounded-3xl shadow-2xl max-w-sm w-full p-6 text-white text-center space-y-4 animate-in fade-in zoom-in-95 duration-150">
      
      <!-- Trash Icon with Glow -->
      <div class="w-14 h-14 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center mx-auto shadow-inner">
        <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
      </div>

      <!-- Text -->
      <div>
        <h3 class="text-base sm:text-lg font-black text-white" id="deleteConfirmTitle">ઓર્ડર ડિલીટ કરવો છે?</h3>
        <p class="text-xs text-slate-300 mt-2 font-medium leading-relaxed whitespace-pre-line" id="deleteConfirmDesc">
          શું તમે ખરેખર આ ઓર્ડર કાયમી રદ કરવા માંગો છો?
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="grid grid-cols-2 gap-3 pt-2">
        <button type="button" onclick="closeDeleteConfirmModal()" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs sm:text-sm border border-slate-700 transition active:scale-95">
          ના, રહેવા દો
        </button>
        <button type="button" id="deleteConfirmActionBtn" onclick="executeDeleteOrder()" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-rose-600/30 transition active:scale-95">
          હા, ડિલીટ કરો
        </button>
      </div>
    </div>
  </div>
`;

if (!htmlContent.includes('id="deleteConfirmModal"')) {
  htmlContent = htmlContent.replace('</div>\n  </div>\n\n  <!-- ======================================================= -->\n  <!-- MODAL: ADD EXPENSE -->', '</div>\n  </div>\n' + deleteConfirmModalHtml + '\n  <!-- ======================================================= -->\n  <!-- MODAL: ADD EXPENSE -->');
  console.log('2. Inserted deleteConfirmModal in index.html');
}

fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log('Saved index.html');

// 2. Update app.js
let appContent = fs.readFileSync('app.js', 'utf8');

// A. Storage Keys: add DELETED_ORDERS
if (!appContent.includes("DELETED_ORDERS: 'shreeji_deleted_orders_v1'")) {
  appContent = appContent.replace(
    "FONT: 'shreeji_font_v1'",
    "FONT: 'shreeji_font_v1',\n  DELETED_ORDERS: 'shreeji_deleted_orders_v1'"
  );
  console.log('3. Added DELETED_ORDERS to STORAGE_KEYS in app.js');
}

// B. Global State: add deletedOrderIds
if (!appContent.includes("deletedOrderIds: []")) {
  appContent = appContent.replace(
    "orders: [],",
    "orders: [],\n  deletedOrderIds: [],"
  );
  console.log('4. Added deletedOrderIds to state in app.js');
}

// C. loadDataFromStorage: load deletedOrderIds and filter state.orders
const oldLoadOrders = `    const savedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
    state.orders = savedOrders ? JSON.parse(savedOrders) : [];`;

const newLoadOrders = `    const savedDeleted = localStorage.getItem(STORAGE_KEYS.DELETED_ORDERS);
    state.deletedOrderIds = savedDeleted ? JSON.parse(savedDeleted) : [];

    const savedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
    state.orders = savedOrders ? JSON.parse(savedOrders) : [];
    if (state.deletedOrderIds.length > 0) {
      state.orders = state.orders.filter(o => !state.deletedOrderIds.includes(o.id));
    }`;

if (appContent.includes(oldLoadOrders)) {
  appContent = appContent.replace(oldLoadOrders, newLoadOrders);
  console.log('5. Updated loadDataFromStorage to load deletedOrderIds');
}

// D. Update delete button on order card in renderOrdersList:
const oldCardDeleteBtn = `<div class="flex items-center space-x-1">
            <button onclick="openEditOrderModal('\${order.id}')" title="Edit Order" class="p-1.5 rounded-lg bg-slate-800/80 hover:bg-amber-950 border border-slate-700 text-amber-400 transition">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </button>
            <button onclick="deleteOrder('\${order.id}')" title="Delete Order" class="p-1.5 rounded-lg bg-slate-800/80 hover:bg-rose-950 border border-slate-700 text-rose-400 transition">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </button>
          </div>`;

const newCardDeleteBtn = `<div class="flex items-center space-x-1.5">
            <button onclick="openEditOrderModal('\${order.id}')" title="Edit Order" class="p-2 rounded-xl bg-slate-800/80 hover:bg-amber-950 border border-slate-700 text-amber-400 transition active:scale-95 shadow-xs" title="એડિટ કરો">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </button>
            <button onclick="deleteOrder('\${order.id}')" title="Delete Order" class="px-2.5 py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-400 text-xs font-bold flex items-center gap-1 transition active:scale-95 shadow-xs" title="ઓર્ડર ડિલીટ કરો">
              <svg class="w-3.5 h-3.5 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
              <span>\${state.lang === 'gu' ? 'ડિલીટ' : state.lang === 'mr' ? 'हटवा' : 'Delete'}</span>
            </button>
          </div>`;

if (appContent.includes(oldCardDeleteBtn)) {
  appContent = appContent.replace(oldCardDeleteBtn, newCardDeleteBtn);
  console.log('6. Updated order card delete button with text and larger target');
}

// E. Update openEditOrderModal and openNewOrderModal for modalOrderDeleteBtn
const oldOpenEdit = `  updateCustomerDatalist();\n  populateKarigarSelect(order.karigarId);\n  document.getElementById('orderModal').classList.remove('hidden');`;
const newOpenEdit = `  updateCustomerDatalist();\n  populateKarigarSelect(order.karigarId);\n  const delBtn = document.getElementById('modalOrderDeleteBtn');\n  if (delBtn) delBtn.classList.remove('hidden');\n  document.getElementById('orderModal').classList.remove('hidden');`;

if (appContent.includes(oldOpenEdit)) {
  appContent = appContent.replace(oldOpenEdit, newOpenEdit);
  console.log('7. Updated openEditOrderModal to show Delete button');
}

const oldOpenNew = `  state.editingOrderId = null;\n  state.currentModalPhoto = null;`;
const newOpenNew = `  state.editingOrderId = null;\n  state.currentModalPhoto = null;\n  const delBtnNew = document.getElementById('modalOrderDeleteBtn');\n  if (delBtnNew) delBtnNew.classList.add('hidden');`;

if (appContent.includes(oldOpenNew)) {
  appContent = appContent.replace(oldOpenNew, newOpenNew);
  console.log('8. Updated openNewOrderModal to hide Delete button');
}

// F. Replace deleteOrder function with bulletproof in-app modal confirmation & executeDeleteOrder:
const oldDeleteOrderFunc = /function deleteOrder\(orderId\) \{[\s\S]*?broadcastSyncEvent\('DELETE_ORDER', \{ orderId: orderId \}\);\s*\}\s*\}/;

const newDeleteOrderFunc = `let orderIdPendingDelete = null;

function deleteOrder(orderId) {
  if (!orderId) return;
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  orderIdPendingDelete = orderId;
  const modal = document.getElementById('deleteConfirmModal');
  const title = document.getElementById('deleteConfirmTitle');
  const desc = document.getElementById('deleteConfirmDesc');

  if (title) {
    title.innerText = state.lang === 'gu'
      ? \`ઓર્ડર #\${order.orderNo || ''} ડિલીટ કરવો છે?\`
      : state.lang === 'mr'
      ? \`ऑर्डर #\${order.orderNo || ''} हटवायची आहे का?\`
      : \`Delete Order #\${order.orderNo || ''}?\`;
  }

  if (desc) {
    desc.innerText = state.lang === 'gu'
      ? \`ગ્રાહક: \${order.partyName || 'ગ્રાહક'} (\${getLocalizedItem(order.itemCategory) || 'સાજ'})\nશું તમે ખરેખર આ ઓર્ડર કાયમી રદ કરવા માંગો છો?\`
      : \`Party: \${order.partyName || '-'}\nAre you sure you want to permanently delete this order?\`;
  }

  if (modal) {
    modal.classList.remove('hidden');
  } else {
    if (confirm(state.lang === 'gu' ? \`શું તમે ખરેખર ઓર્ડર \${order.orderNo} રદ કરવા માંગો છો?\` : \`Delete order \${order.orderNo}?\`)) {
      executeDeleteOrder(orderId);
    }
  }
}

function closeDeleteConfirmModal() {
  const modal = document.getElementById('deleteConfirmModal');
  if (modal) modal.classList.add('hidden');
  orderIdPendingDelete = null;
}

function executeDeleteOrder(orderId = null) {
  const targetId = orderId || orderIdPendingDelete;
  if (!targetId) return;

  const order = state.orders.find(o => o.id === targetId);
  const orderNo = order ? (order.orderNo || '') : '';

  // 1. Add to tombstone deletedOrderIds so sync NEVER re-adds it
  if (!state.deletedOrderIds) state.deletedOrderIds = [];
  if (!state.deletedOrderIds.includes(targetId)) {
    state.deletedOrderIds.push(targetId);
    if (state.deletedOrderIds.length > 500) state.deletedOrderIds.shift();
    localStorage.setItem(STORAGE_KEYS.DELETED_ORDERS, JSON.stringify(state.deletedOrderIds));
  }

  // 2. Return stock if this order deducted inventory
  if (order && order.stockUsage && order.stockUsage.stockId && Number(order.stockUsage.quantity) > 0) {
    const stockItem = (state.stock || []).find(s => s.id === order.stockUsage.stockId);
    if (stockItem) {
      stockItem.quantity = Number((stockItem.quantity + Number(order.stockUsage.quantity)).toFixed(2));
      localStorage.setItem(STORAGE_KEYS.STOCK, JSON.stringify(state.stock));
    }
  }

  // 3. Remove from local state
  state.orders = state.orders.filter(o => o.id !== targetId);
  saveDataToStorage();

  // 4. Close any open modals
  closeDeleteConfirmModal();
  closeOrderModal();

  // 5. Update UI everywhere
  renderDashboard();
  renderOrdersList();
  renderPnL();
  renderPartiesList();
  checkUrgentDeliveries();
  updatePendingBadges();

  // 6. Show toast notification
  flashSyncSuccess(state.lang === 'gu' ? \`🗑️ ઓર્ડર #\${orderNo} ડિલીટ થઈ ગયો છે.\` : \`Order #\${orderNo} deleted.\`);

  // 7. Broadcast deletion to cloud sync with tombstone
  broadcastSyncEvent('DELETE_ORDER', {
    orderId: targetId,
    deletedOrderIds: state.deletedOrderIds
  });
}`;

if (oldDeleteOrderFunc.test(appContent)) {
  appContent = appContent.replace(oldDeleteOrderFunc, newDeleteOrderFunc);
  console.log('9. Replaced deleteOrder with in-app confirmation modal & executeDeleteOrder');
} else {
  console.warn('Could not match oldDeleteOrderFunc');
}

// G. Update handleIncomingSyncEvent for tombstone protection:
// In UPSERT_ORDER:
const oldUpsertOrder = `    case 'UPSERT_ORDER': {
      if (payload && payload.id) {`;
const newUpsertOrder = `    case 'UPSERT_ORDER': {
      if (payload && payload.id) {
        if (state.deletedOrderIds && state.deletedOrderIds.includes(payload.id)) {
          break; // Never resurrect deleted order!
        }`;

if (appContent.includes(oldUpsertOrder)) {
  appContent = appContent.replace(oldUpsertOrder, newUpsertOrder);
  console.log('10. Protected UPSERT_ORDER from resurrecting deleted orders');
}

// In DELETE_ORDER case:
const oldDeleteOrderCase = `    case 'DELETE_ORDER': {
      if (payload && payload.orderId) {
        const idx = state.orders.findIndex(o => o.id === payload.orderId);
        if (idx !== -1) {
          state.orders.splice(idx, 1);
          localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(state.orders));
          stateChanged = true;
          flashMsg = state.lang === 'gu' ? '⚡ ઓર્ડર ડિલીટ સિંક થયો' : '⚡ Order deletion synced';
        }
      }
      break;
    }`;

const newDeleteOrderCase = `    case 'DELETE_ORDER': {
      if (payload && payload.orderId) {
        if (!state.deletedOrderIds) state.deletedOrderIds = [];
        if (!state.deletedOrderIds.includes(payload.orderId)) {
          state.deletedOrderIds.push(payload.orderId);
          localStorage.setItem(STORAGE_KEYS.DELETED_ORDERS, JSON.stringify(state.deletedOrderIds));
        }
        if (Array.isArray(payload.deletedOrderIds)) {
          payload.deletedOrderIds.forEach(id => {
            if (!state.deletedOrderIds.includes(id)) state.deletedOrderIds.push(id);
          });
          localStorage.setItem(STORAGE_KEYS.DELETED_ORDERS, JSON.stringify(state.deletedOrderIds));
        }
        const idx = state.orders.findIndex(o => o.id === payload.orderId);
        if (idx !== -1) {
          state.orders.splice(idx, 1);
          localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(state.orders));
          stateChanged = true;
          flashMsg = state.lang === 'gu' ? '⚡ ઓર્ડર ડિલીટ સિંક થયો' : '⚡ Order deletion synced';
        }
      }
      break;
    }`;

if (appContent.includes(oldDeleteOrderCase)) {
  appContent = appContent.replace(oldDeleteOrderCase, newDeleteOrderCase);
  console.log('11. Updated DELETE_ORDER sync case with tombstone sync');
}

// In FULL_STATE_BROADCAST case:
const oldFullStateCase = `    case 'FULL_STATE_BROADCAST': {
      if (payload && typeof payload === 'object') {
        let merged = false;
        if (Array.isArray(payload.orders) && payload.orders.length > 0) {
          const map = new Map();
          state.orders.forEach(o => map.set(o.id, o));
          payload.orders.forEach(o => {
            if (!map.has(o.id)) {
              state.orders.unshift(o);
              map.set(o.id, o);
              merged = true;
            } else {
              const cur = map.get(o.id);
              if ((o.updatedAt || '') >= (cur.updatedAt || '')) {
                Object.assign(cur, o);
              }
            }
          });
          if (merged) {
            localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(state.orders));
            stateChanged = true;
          }
        }`;

const newFullStateCase = `    case 'FULL_STATE_BROADCAST': {
      if (payload && typeof payload === 'object') {
        let merged = false;

        if (Array.isArray(payload.deletedOrderIds)) {
          if (!state.deletedOrderIds) state.deletedOrderIds = [];
          payload.deletedOrderIds.forEach(id => {
            if (!state.deletedOrderIds.includes(id)) state.deletedOrderIds.push(id);
          });
          localStorage.setItem(STORAGE_KEYS.DELETED_ORDERS, JSON.stringify(state.deletedOrderIds));
        }

        if (state.deletedOrderIds && state.deletedOrderIds.length > 0) {
          const origLen = state.orders.length;
          state.orders = state.orders.filter(o => !state.deletedOrderIds.includes(o.id));
          if (state.orders.length !== origLen) merged = true;
        }

        if (Array.isArray(payload.orders) && payload.orders.length > 0) {
          const map = new Map();
          state.orders.forEach(o => map.set(o.id, o));
          payload.orders.forEach(o => {
            if (state.deletedOrderIds && state.deletedOrderIds.includes(o.id)) {
              return; // Do not re-add deleted order!
            }
            if (!map.has(o.id)) {
              state.orders.unshift(o);
              map.set(o.id, o);
              merged = true;
            } else {
              const cur = map.get(o.id);
              if ((o.updatedAt || '') >= (cur.updatedAt || '')) {
                Object.assign(cur, o);
              }
            }
          });
          if (merged) {
            localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(state.orders));
            stateChanged = true;
          }
        }`;

if (appContent.includes(oldFullStateCase)) {
  appContent = appContent.replace(oldFullStateCase, newFullStateCase);
  console.log('12. Protected FULL_STATE_BROADCAST from resurrecting deleted orders');
}

// In pushToCloudStore:
const oldPush = `    broadcastSyncEvent('FULL_STATE_BROADCAST', {
      orders: state.orders,
      expenses: state.expenses,
      customers: state.customers,
      karigars: state.karigars,
      stock: state.stock,
      settings: state.settings
    });`;

const newPush = `    broadcastSyncEvent('FULL_STATE_BROADCAST', {
      orders: state.orders,
      expenses: state.expenses,
      customers: state.customers,
      karigars: state.karigars,
      stock: state.stock,
      settings: state.settings,
      deletedOrderIds: state.deletedOrderIds || []
    });`;

if (appContent.includes(oldPush)) {
  appContent = appContent.replace(oldPush, newPush);
  console.log('13. Included deletedOrderIds in pushToCloudStore');
}

// Add showToast helper if missing
if (!appContent.includes('function showToast')) {
  appContent += `\nfunction showToast(msg, type = 'info') {\n  flashSyncSuccess(msg);\n}\n`;
  console.log('14. Added showToast helper function');
}

fs.writeFileSync('app.js', appContent, 'utf8');
console.log('Saved app.js');
console.log('--- ORDER DELETE FIX APPLIED ---');
