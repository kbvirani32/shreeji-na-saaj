const fs = require('fs');
let appContent = fs.readFileSync('app.js', 'utf8');

const oldCardRegex = /<div class="p-3\.5 rounded-2xl bg-slate-900\/60[\s\S]*?<\/div>\s*<\/div>\s*`;\s*\}\)\.join\(''\);/;

const newCardCode = `<div class="p-3.5 sm:p-4 rounded-2xl bg-slate-900/75 border \${isLow ? 'border-rose-500/50 bg-rose-950/25 shadow-rose-950/20' : 'border-slate-700/60 hover:border-amber-400/50'} shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-xl \${isLow ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' : 'bg-amber-500/15 text-amber-400 border border-amber-400/30'} flex items-center justify-center flex-shrink-0 font-bold shadow-inner">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5l-9 5.25-9-5.25V7.5L12 2.25l9 5.25v9zM12 4.15L5.04 8.2 12 12.26l6.96-4.06L12 4.15zm-7 5.5v6.52l6 3.5V13.15L5 9.65zm14 0l-6 3.5v6.52l6-3.5V9.65z"/></svg>
          </div>
          <div class="space-y-1">
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="font-bold text-sm sm:text-base text-slate-100">\${item.itemName}</h4>
              <span class="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-semibold text-slate-300 border border-slate-700/60">\${catLabels[item.category] || item.category}</span>
              \${isLow ? \`<span class="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-extrabold border border-rose-500/40 animate-pulse">⚠️ \${state.lang === 'gu' ? 'ઓછો સ્ટોક' : 'Low Stock'}</span>\` : \`<span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">✓ \${state.lang === 'gu' ? 'ઉપલબ્ધ' : 'In Stock'}</span>\`}
            </div>
            <div class="text-xs text-slate-300 flex items-center gap-2 sm:gap-3 flex-wrap pt-0.5">
              <span>\${state.lang === 'gu' ? 'જથ્થો' : 'Qty'}: <b class="\${isLow ? 'text-rose-400' : 'text-amber-300 font-black text-sm'}">\${item.quantity} \${unitLabels[item.unit] || item.unit}</b></span>
              \${item.ratePerUnit > 0 ? \`<span class="text-slate-400">• ભાવ: <b class="text-slate-200">₹\${Number(item.ratePerUnit).toLocaleString('en-IN')} / \${unitLabels[item.unit] || item.unit}</b></span>\` : ''}
              \${itemTotalVal > 0 ? \`<span class="px-2.5 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-extrabold border border-emerald-400/40 text-xs shadow-xs tracking-tight">\${state.lang === 'gu' ? 'કિંમત: ' : state.lang === 'mr' ? 'मूल्य: ' : 'Value: '}₹\${Math.round(itemTotalVal).toLocaleString('en-IN')}</span>\` : ''}
            </div>
            \${item.notes ? \`<div class="text-[11px] text-slate-400 italic">\${item.notes}</div>\` : ''}
          </div>
        </div>

        <div class="flex items-center gap-1.5 self-end sm:self-center pt-1 sm:pt-0">
          <button onclick="quickRestock('\${item.id}')" title="જથ્થો ઉમેરો" class="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center gap-1 transition active:scale-95 shadow-sm">
            <span class="text-sm font-black">+</span>
            <span>\${state.lang === 'gu' ? 'જથ્થો ઉમેરો' : 'Add'}</span>
          </button>
          <button onclick="openStockModal('\${item.id}')" title="Edit" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition active:scale-95 shadow-sm">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
          </button>
          <button onclick="deleteStockItem('\${item.id}')" title="Delete" class="p-2 rounded-xl bg-slate-800 hover:bg-rose-950 text-rose-400 border border-slate-700 transition active:scale-95 shadow-sm">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
          </button>
        </div>
      </div>
    \`;
  }).join('');`;

if (oldCardRegex.test(appContent)) {
  appContent = appContent.replace(oldCardRegex, newCardCode);
  fs.writeFileSync('app.js', appContent, 'utf8');
  console.log('Stock card template upgraded in app.js');
} else {
  console.error('Could not find oldCardRegex in app.js');
}
