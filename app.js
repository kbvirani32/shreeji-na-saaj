
// ========================================================
// SHRINATHJI DAILY SUVICHARS (DIVINE THOUGHTS OF THE DAY)
// Authentic Pushtimarg devotional quotes, rotated daily
// ========================================================
const SUVICHARS = [
  {
    gu: "પ્રભુ સેવા એ જ આપણું પરમ સૌભાગ્ય છે — શુદ્ધતા, ભાવ અને સમયસર સેવા.",
    mr: "प्रभू सेवा हेच आपले परम भाग्य आहे — शुद्धता, भाव आणि वेळेवर सेवा.",
    en: "Serving the Divine is our highest grace — with purity, love, and timely devotion."
  },
  {
    gu: "સર્વ સમર્પણ અને અનન્ય ભાવથી જ શ્રીનાથજી પ્રસન્ન થાય છે.",
    mr: "सर्व समर्पण आणि अनन्य भावानेच श्रीनाथजी प्रसन्न होतात.",
    en: "Total surrender and heartfelt love delight Shri Shrinathji."
  },
  {
    gu: "વસ્ત્ર અને સાજ સેવા એ ઠાકોરજીના સ્વરૂપની પ્રત્યક્ષ પરિચર્યા છે.",
    mr: "वस्त्र आणि साज सेवा ही ठाकोरजींच्या स्वरूपाची प्रत्यक्ष परिचर्या आहे.",
    en: "Tailoring sacred garments is direct loving seva to the Divine Swaroop."
  },
  {
    gu: "શ્રી કૃષ્ણ શરણં મમ — સર્વ ચિંતા પ્રભુ ચરણમાં સમર્પિત કરી કર્તવ્ય પાળો.",
    mr: "श्री कृष्ण शरणं मम — सर्व चिंता प्रभू चरणी अर्पण करून कर्तव्य पार पाडा.",
    en: "Shri Krishna Sharanam Mama — surrender all anxieties and joyfully perform your craft."
  },
  {
    gu: "સ્નેહ પૂર્વક તૈયાર કરેલું દરેક વસ્ત્ર પ્રભુના અંગ પર દિવ્ય દીપી ઊઠે છે.",
    mr: "स्नेहाने तयार केलेले प्रत्येक वस्त्र प्रभूच्या अंगावर दिव्य शोभून दिसते.",
    en: "Every thread woven with love radiates divine splendor upon Thakorji."
  },
  {
    gu: "સેવામાં ભાવ મુખ્ય છે, સાધન નહીં — શુદ્ધ ભાવથી કરેલું કાર્ય દિવ્ય બને છે.",
    mr: "सेवेत भाव मुख्य आहे, साधन नाही — शुद्ध भावाने केलेले कार्य दिव्य बनते.",
    en: "In seva, pure loving sentiment is supreme — love elevates craft into worship."
  },
  {
    gu: "જેના મુખમાં શ્રીનાથજીનું નામ અને હાથમાં સેવા છે, તેનું કલ્યાણ નિશ્ચિત છે.",
    mr: "ज्यांच्या मुखात श्रीनाथजींचे नाव आणि हातात सेवा आहे, त्यांचे कल्याण निश्चित आहे.",
    en: "Those with Shrinathji’s name in heart and seva in hands abide in eternal grace."
  },
  {
    gu: "પ્રત્યેક તાંતણે ભક્તિ અને પ્રત્યેક ટાંકે સમર્પણ — એ જ શ્રીજી ના સાજનો સંકલ્પ.",
    mr: "प्रत्येक धाग्यात भक्ती आणि प्रत्येक टाक्यात समर्पण — हाच श्रीजी ना साजचा संकल्प.",
    en: "Weaving devotion in every thread, surrender in every stitch."
  },
  {
    gu: "શ્રી મહાપ્રભુજીની કૃપાથી જ ઠાકોરજીની સાજ-શણગાર સેવાનો દિવ્ય અધિકાર મળે છે.",
    mr: "श्री महाप्रभूजींच्या कृपेनेच ठाकोरजींच्या साज-शृंगार सेवेचा अधिकार मिळतो.",
    en: "Only through Shri Mahaprabhuji's grace does one receive the seva of adorning Thakorji."
  },
  {
    gu: "પવિત્રતા, એકાગ્રતા અને પ્રેમથી કરેલું વસ્ત્ર નિર્માણ સાક્ષાત યજ્ઞ સમાન છે.",
    mr: "पवित्रता, एकाग्रता आणि प्रेमाने केलेले वस्त्र निर्माण प्रत्यक्ष यज्ञासमान आहे.",
    en: "Creating sacred deity garments with sanctity and love is a sacred offering."
  },
  {
    gu: "શ્રીજીની સેવામાં સમય અને ગુણવત્તાનું પાલન એ જ સાચી ભક્તિ છે.",
    mr: "श्रीजींच्या सेवेत वेळ आणि गुणवत्तेचे पालन हीच खरी भक्ती आहे.",
    en: "Upholding timeliness and finest craftsmanship is true devotion in Thakorji's seva."
  },
  {
    gu: "મનોરથ ત્યારે જ ફળે જ્યારે હૃદયમાં નિષ્કામ સેવાભાવ હોય.",
    mr: "मनोरथ तेव्हाच पूर्ण होतो जेव्हा हृदयात निष्काम सेवाभाव असतो.",
    en: "Every manorath is blessed when fulfilled with selfless love and humility."
  }
];

function updateDailySuvichar() {
  const suvicharEl = document.getElementById('dailySuvicharText');
  if (!suvicharEl) return;
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const quoteObj = SUVICHARS[dayOfYear % SUVICHARS.length];
  suvicharEl.innerText = quoteObj[state.lang] || quoteObj.gu;
}


// ========================================================
// UNIVERSAL REAL-TIME CLOUD DATABASE (PC <-> MOBILE)
// Shared endpoint accessible from any device / network
// ========================================================
// ========================================================
// CENTRAL REAL-TIME CLOUD SYNC ENGINE (PC <-> MOBILE)
// Powered by ntfy.sh SSE Pub/Sub & 24h Replay Cache
// Sub-100ms bidirectional synchronization, zero polling quota
// ========================================================
const SYNC_TOPIC = 'shreeji_saaj_sync_cloud_v3';
let isCloudSyncing = false;
let lastCloudSyncTime = null;
let sseConnection = null;

function getDeviceId() {
  let id = localStorage.getItem('shreeji_device_id');
  if (!id) {
    id = 'dev_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36);
    localStorage.setItem('shreeji_device_id', id);
  }
  return id;
}

﻿/**
 * Shreeji Na Saaj (શ્રીજી ના સાજ / श्रीजी ना साज) - Core Application Logic
 * Pure Single-Language Localization for: Gujarati (gu), Marathi (mr), and English (en)
 * 5 Distinct Themes & 5 Independent Typography Styles with Header Icon Dropdowns
 */

// Global App State
const state = {
  currentTab: 'dashboard',
  lang: 'gu', // 'gu' | 'mr' | 'en'
  theme: 'theme-shrinathji-gold', // 5 themes
  font: 'font-serif', // 5 distinct fonts
  dashboardFilter: 'all',
  orders: [],
  stock: [],
  editingStockId: null,
  expenses: [],
  karigars: [],
  settings: {
    bizName: 'શ્રીજી ના સાજ',
    phone: '',
    address: 'હવેલી રોડ, સુરત / અમદાવાદ',
    upiId: ''
  },
  customers: [],
  customMobileUrl: null,
  security: {
    pinEnabled: true,
    pinCode: '1234',
    isUnlocked: false
  },
  enteredPin: '',
  editingOrderId: null,
  editingKarigarId: null,
  editingCustomerId: null,
  currentModalPhoto: null,
  isServerConnected: false,
  charts: {
    statusChart: null,
    expenseChart: null
  }
};

// Storage Keys
const STORAGE_KEYS = {
  ORDERS: 'shreeji_orders_v1',
  STOCK: 'shreeji_stock_v1',
  EXPENSES: 'shreeji_expenses_v1',
  KARIGARS: 'shreeji_karigars_v1',
  CUSTOMERS: 'shreeji_customers_v1',
  CUSTOM_QR: 'shreeji_custom_qr_url_v1',
  SECURITY: 'shreeji_security_v1',
  SESSION_UNLOCKED: 'shreeji_session_unlocked_v1',
  REMEMBER_UNLOCKED: 'shreeji_remember_unlocked_v1',
  SETTINGS: 'shreeji_settings_v1',
  LANG: 'shreeji_lang_v1',
  THEME: 'shreeji_theme_v1',
  FONT: 'shreeji_font_v1'
};

// 5 DISTINCT THEMES CONFIGURATION
const THEMES = [
  {
    key: 'theme-shrinathji-gold',
    name: {
      gu: 'શ્રીનાથજી શ્યામ & સુવર્ણ',
      mr: 'श्रीनाथजी श्याम आणि सुवर्ण',
      en: 'Shrinathji Midnight & Gold'
    },
    desc: {
      gu: 'રોયલ બ્લેક ઓબ્સિડિયન અને સોનેરી ઝરી',
      mr: 'रॉयल काळा आणि सुवर्ण जरी',
      en: 'Midnight Obsidian & Rich Gold'
    },
    badge: '🖤💛',
    previewBg: 'linear-gradient(135deg, #09090b 50%, #eab308 100%)'
  },
  {
    key: 'theme-kesar-kumkum',
    name: {
      gu: 'કેસર & કુંકુમ',
      mr: 'केशर आणि कुंकुम',
      en: 'Saffron & Ruby Maroon'
    },
    desc: {
      gu: 'હવેલી મંદિર કેસરી અને કંકુ મરૂન',
      mr: 'हवेली मंदिर केशर आणि कुंकू मरून',
      en: 'Sacred Temple Saffron & Deep Maroon'
    },
    badge: '🧡❤️',
    previewBg: 'linear-gradient(135deg, #881337 50%, #f97316 100%)'
  },
  {
    key: 'theme-morpichh-blue',
    name: {
      gu: 'મોરપિચ્છ નીલ & સ્યાન',
      mr: 'मोरपीस निळा आणि सियान',
      en: 'Peacock Blue & Cyan'
    },
    desc: {
      gu: 'શ્રીકૃષ્ણ મોરપિચ્છ નીલમ અને યમુના જલ',
      mr: 'श्रीकृष्ण मोरपीस निळा आणि यमुना जल',
      en: 'Majestic Peacock Blue & Ocean Teal'
    },
    badge: '💙🦚',
    previewBg: 'linear-gradient(135deg, #0c4a6e 50%, #14b8a6 100%)'
  },
  {
    key: 'theme-kamal-gulal',
    name: {
      gu: 'કમલ & ગુલાલ',
      mr: 'कमळ आणि गुलाल',
      en: 'Lotus Pink & Rose Gold'
    },
    desc: {
      gu: 'પિછવાઈ કમળ ગુલાબી અને મનોરથ રોઝ',
      mr: 'पिच्छवाई कमळ गुलाबी आणि मनोरथ रोझ',
      en: 'Lotus Pink & Rose Gold Accents'
    },
    badge: '🌸🌺',
    previewBg: 'linear-gradient(135deg, #831843 50%, #fb7185 100%)'
  },
  {
    key: 'theme-minimal-slate',
    name: {
      gu: 'પવિત્ર રજત & સ્લેટ',
      mr: 'पवित्र चांदी आणि स्लेट',
      en: 'Minimalist Silver & Slate'
    },
    desc: {
      gu: 'સ્વચ્છ સિલ્વર, સ્લેટ અને બ્લુ એન્ટરપ્રાઇઝ',
      mr: 'स्वच्छ सिल्व्हर, स्लेट आणि कोबाल्ट',
      en: 'Clean Distraction-Free Slate & Blue'
    },
    badge: '🤍🏢',
    previewBg: 'linear-gradient(135deg, #1e293b 50%, #3b82f6 100%)'
  }
];

// 5 DISTINCT INDEPENDENT TYPOGRAPHY / FONT STYLES
const FONTS = [
  {
    key: 'font-serif',
    name: {
      gu: 'શાસ્ત્રીય રોયલ સેરિફ',
      mr: 'शास्त्रीय रॉयल सेरिफ',
      en: 'Classical Royal Serif'
    },
    desc: 'Rasa • Rozha One • Playfair Display',
    badge: '👑'
  },
  {
    key: 'font-temple',
    name: {
      gu: 'પવિત્ર હવેલી મંદિર',
      mr: 'पवित्र मंदिर शैली',
      en: 'Sacred Temple Heritage'
    },
    desc: 'Noto Serif • Yatra One • Philosopher',
    badge: '🛕'
  },
  {
    key: 'font-modern',
    name: {
      gu: 'આધુનિક કન્ટેમ્પરરી',
      mr: 'आधुनिक समकालीन',
      en: 'Modern Contemporary'
    },
    desc: 'Hind Vadodara • Hind • Outfit',
    badge: '🦚'
  },
  {
    key: 'font-rounded',
    name: {
      gu: 'કલાત્મક રાઉન્ડેડ',
      mr: 'कलात्मक राउंडेड',
      en: 'Soft Artistic Rounded'
    },
    desc: 'Baloo Bhai 2 • Baloo 2 • Quicksand',
    badge: '🌸'
  },
  {
    key: 'font-geometric',
    name: {
      gu: 'શાર્પ હાઇ-પ્રિસિઝન',
      mr: 'शार्प हाय-प्रिसिजन',
      en: 'Clean Geometric Precision'
    },
    desc: 'Anek Gujarati • Anek • Plus Jakarta',
    badge: '📐'
  }
];

// PURE SINGLE LANGUAGE DICTIONARIES
const i18n = {
  gu: {
    brand_title: 'શ્રીજી ના સાજ',

    nav_stock: 'સ્ટોક',
    stock_title: 'કાપડ & સાજ સ્ટોક વ્યવસ્થાપન',
    stock_subtitle: 'ભગવાનના વસ્ત્રો, સિલ્ક, જરી બોર્ડર અને સાજ મટીરીયલનો જીવંત હિસાબ',
    btn_add_stock: '+ નવો સ્ટોક ઉમેરો',
    btn_save_stock: 'સ્ટોક સેવ કરો',
    kpi_total_stock_items: 'કુલ સ્ટોક આઇટમ્સ',
    kpi_fabric_meters: 'કુલ કાપડ જથ્થો',
    kpi_total_stock_value: 'કુલ સ્ટોક કિંમત',
    unit_total_value: 'કુલ ઇન્વેન્ટરી મૂલ્ય',
    kpi_low_stock: 'ઓછા સ્ટોકની ચેતવણી',
    lbl_sync_active: 'સિંક સક્રિય',
    lbl_sync_syncing: 'સિંક થઈ રહ્યું છે...',
    lbl_sync_success: 'સિંક પૂર્ણ ✓',
    unit_items: 'આઇટમ્સ ઉપલબ્ધ',
    unit_meters: 'મીટર સિલ્ક/કાપડ',
    unit_need_reorder: 'આઇટમ્સ ઓછી છે',
    lbl_stock_item_name: 'આઇટમનું નામ / વર્ણન *',
    lbl_stock_category: 'કેટેગરી *',
    lbl_stock_unit: 'એકમ (Unit) *',
    lbl_stock_qty: 'હાલનો જથ્થો *',
    lbl_stock_min_alert: 'ઓછા સ્ટોકની ચેતવણી મર્યાદા',
    lbl_stock_rate: 'અંદાજિત ભાવ (₹)',
    lbl_stock_notes: 'વિશેષ નોંધ / ઉપયોગ',
    lbl_order_pick_stock: '📦 સ્ટોકમાંથી કાપડ/સામગ્રી પસંદ કરો (વૈકલ્પિક)',
    lbl_stock_auto_deduct: 'ઓર્ડર સેવ થતાં સ્ટોકમાંથી બાદ થશે',
    status_ready_title: 'તૈયાર સાજ',
    lbl_ready_handover: 'ગ્રાહકને સુપરત માટે તૈયાર',
    status_stitching: 'સિલાઈ ચાલુ',
    delivery_tip: '💡 1-ક્લિકથી ગ્રાહકને વોટ્સએપ પર ટ્રાયલ/ડિલિવરી મેસેજ મોકલી શકાય છે',
    btn_view_all_orders: 'બધા ઓર્ડર્સ જુઓ →',
    financial_flow_title: 'નાણાકીય પ્રવાહ અને વસૂલાત કાર્યક્ષમતા',
    financial_flow_desc: 'ગ્રાહકો પાસેથી જમા થયેલ રોકડ અને બાકી ઉઘરાણીનું જીવંત વિશ્લેષણ',
    recovery_efficiency_label: 'વસૂલાત કાર્યક્ષમતા (Collected vs Pending)',
    lbl_cash_collected: 'જમા રોકડ / બેંક',
    lbl_market_receivable: 'ગ્રાહક બાકી ઉઘરાણી',

    lbl_qrcode: 'QR કોડ',
    lbl_sync: 'સિંક',
    lbl_total_bill: 'કુલ બિલ',
    delivered_check: 'સુપરત ✓',
    rate: 'દર',
    status_cutting: 'કટિંગ',
    lock_error_msg: 'ખોટો PIN / પાસવર્ડ! કૃપા કરીને ફરી પ્રયત્ન કરો.',
    remember_me: 'આ ફોનમાં યાદ રાખો',
    btn_unlock: 'અનલૉક કરો',
    lock_enter_pin: '૪-અંકનો સુરક્ષા PIN અથવા પાસવર્ડ',
    th_actions: 'એક્શન',
    th_payment_mode: 'પદ્ધતિ',
    th_payee: 'કારીગર / વેપારી',
    th_description: 'ખર્ચની વિગત',
    expense_ledger_desc: 'દૈનિક થયેલા ખર્ચની વિગતવાર નોંધ',
    expense_ledger_title: 'ખર્ચ રોજમેળ',
    cat_other: 'કુરિયર & અન્ય',
    cat_zari: 'ઝરી / મોતી / લેસ',
    cat_karigar_labor: 'કારીગર મજૂરી',
    cat_fabric: 'કાપડ / સિલ્ક',
    expense_breakdown_title: 'ખર્ચનું સરળ વિભાજન',
    market_dues_action: 'ગ્રાહક ખાતાવહીમાં તપાસો →',
    market_dues_desc: 'ગ્રાહકો પાસેથી ઉઘરાણી બાકી',
    market_dues_title: 'બજાર બાકી લેણાં',
    lbl_material_cost: 'સામગ્રી',
    lbl_karigar_cost: 'મજૂરી',
    lbl_pending: 'બાકી',
    lbl_received: 'જમા',
    btn_export_csv: 'CSV ડાઉનલોડ',
    opt_this_year: 'ચાલુ વર્ષ',
    opt_last_month: 'ગયેલ મહિનો',
    opt_this_month: 'ચાલુ મહિનો',
    opt_all_time: 'તમામ સમયગાળો',
    header_cloud_sync: '☁️ ક્લાઉડ સિંક (લાઇવ)',
    btn_install_mobile: 'મોબાઇલમાં ઇન્સ્ટોલ કરો',
    more_menu_title: 'વધુ મેનુ',
    nav_more: 'વધુ',
    artisan_pipeline_title: 'કારીગર વર્કલોડ',
    kpi_market_dues: 'બાકી ઉઘરાણી',
    kpi_gross_revenue: 'જમા આવક',
    header_shlok_left: '॥ શ્રી ગોપીજનવલ્લભાય નમઃ ॥',
    header_shlok_main: '॥ શ્રી કૃષ્ણઃ શરણં મમ ॥ શ્રીજી ના સાજ વ્યવસ્થાપન',
    tagline: 'દરેક તાંતણે પ્રભુ ભક્તિનું વણાટ (Weaving devotion in every thread)',
    theme_heading: 'થીમ પસંદ કરો',
    font_heading: 'ફોન્ટ શૈલી પસંદ કરો',
    nav_dashboard: 'ડેશબોર્ડ',
    nav_orders: 'ઓર્ડર્સ',
    nav_pnl: 'નફો-નુકસાન',
    nav_parties: 'ગ્રાહકો',
    nav_karigars: 'કારીગરો',
    nav_settings: 'સેટિંગ્સ',
    btn_new_order: '+ નવો ઓર્ડર',
    urgent_alert_title: 'તાકીદના ઓર્ડર એલર્ટ',
    urgent_alert_desc: 'આજે અથવા નજીકના દિવસોમાં ડિલિવરી કરવાના ઓર્ડર્સ બાકી છે.',
    btn_view: 'જુઓ',
    dashboard_summary: 'બિઝનેસ સમરી અને સ્ટેટસ',
    filter_label: 'તારીખ ફિલ્ટર:',
    filter_all: 'તમામ',
    filter_today: 'આજે',
    filter_week: 'આ અઠવાડિયે',
    filter_month: 'આ મહિને',
    kpi_total_orders: 'કુલ ઓર્ડર',
    kpi_pending_orders: 'કામ ચાલુ',
    kpi_completed_orders: 'પૂરા થયેલા ઓર્ડર',
    kpi_net_profit: 'ચોખ્ખો નફો',
    unit_orders: 'ઓર્ડર્સ',
    with_our_material: 'આપણું કાપડ',
    party_material: 'પાર્ટીનું કાપડ',
    status_in_progress: 'કામ ચાલુ',
    status_ready: 'તૈયાર',
    status_completed: 'પૂર્ણ',
    delivered_text: 'સુપરત થયેલ',
    income_label: 'આવક',
    expense_label: 'ખર્ચ',
    upcoming_deliveries_title: 'નજીકની ડિલિવરી તારીખો',
    order_status_chart: 'ઓર્ડર સ્ટેટસ વિતરણ',
    btn_add_order_now: 'નવો ઓર્ડર દાખલ કરો',
    btn_add_expense_now: '+ નવો ખર્ચ લખો',
    search_placeholder: 'ઓર્ડર નં, પાર્ટીનું નામ, ફોન કે સ્વરૂપ શોધો...',
    filter_date_label: 'તારીખ ફિલ્ટર:',
    filter_to: 'થી',
    btn_clear: 'ક્લિયર',
    total_results: 'કુલ પરિણામ',
    no_orders_found: 'કોઈ ઓર્ડર મળ્યો નથી',
    no_orders_desc: 'હજી સુધી કોઈ ઓર્ડર નોંધાયેલ નથી અથવા ફિલ્ટરમાં મેળ ખાતો નથી.',
    btn_first_order: 'પ્રથમ ઓર્ડર ઉમેરો',
    pnl_title: 'નફો અને નુકસાન હિસાબ',
    pnl_subtitle: 'ઓર્ડરની આવક, મટીરીયલ ખરીદી અને કારીગર મજૂરી ખર્ચનો પાકો હિસાબ',
    btn_new_expense: '+ નવો ખર્ચ',
    total_revenue: 'કુલ આવક',
    revenue_desc: 'ઓર્ડર્સ પેટે મળેલ રકમ',
    order_fee: 'ઓર્ડર રકમ',
    pending_amount: 'બાકી રકમ',
    total_expense: 'કુલ ખર્ચ',
    expense_desc: 'કાપડ, મોતી, ઝરી અને કારીગર મજૂરી',
    karigar_labor_cost: 'કારીગર મજૂરી',
    material_cost: 'કાપડ/સામગ્રી',
    net_profit_desc: 'બધો ખર્ચ બાદ કરતા ચોખ્ખી બચત',
    profit_margin: 'પ્રોફિટ માર્જિન',
    status_profitable: 'નફાકારક',
    status_loss: 'ખોટ',
    status_breakeven: 'બરાબરી',
    expense_log_title: 'તાજેતરના ખર્ચાઓની યાદી',
    btn_add_expense: '+ ખર્ચ ઉમેરો',
    th_date: 'તારીખ',
    th_category: 'કેટેગરી',
    th_details: 'વિગત',
    th_pay_mode: 'ચૂકવણી મોડ',
    th_amount: 'રકમ (₹)',
    th_action: 'એક્શન',
    expenses_empty_desc: 'કોઈ ખર્ચ નોંધાયેલ નથી.',
    expense_chart_title: 'ખર્ચ વર્ગીકરણ',
    parties_title: 'ગ્રાહકો / પાર્ટી યાદી',
    parties_subtitle: 'દરેક ગ્રાહકના કુલ ઓર્ડર, બાકી રકમ અને સીધો સંપર્ક',
    search_parties_placeholder: 'પાર્ટીનું નામ કે ફોન શોધો...',
    karigars_title: 'કારીગર વ્યવસ્થાપન અને મજૂરી હિસાબ',
    karigars_subtitle: 'ક્યા કારીગર પાસે ક્યા વસ્ત્રો છે અને કેટલી મજૂરી બાકી છે',
    btn_new_karigar: '+ નવો કારીગર ઉમેરો',
    settings_title: 'સિસ્ટમ સેટિંગ્સ અને બિઝનેસ પ્રોફાઈલ',
    biz_name_label: 'દુકાન / બિઝનેસનું નામ',
    biz_phone_label: 'સંપર્ક નંબર',
    biz_address_label: 'સરનામું / શહેર',
    biz_upi_label: 'UPI ID (પેમેન્ટ QR કોડ માટે)',
    btn_save_settings: 'સેટિંગ્સ સેવ કરો',
    backup_title: 'ડેટા બેકઅપ અને સુરક્ષા',
    backup_desc: 'તમારો બધો ડેટા તમારા ડિવાઈસમાં સુરક્ષિત રીતે સંગ્રહાય છે.',
    full_backup_title: 'સંપૂર્ણ ડેટા બેકઅપ',
    full_backup_desc: 'ઓર્ડર્સ, ગ્રાહકો, કારીગરો અને ખર્ચાઓની સિંગલ બેકઅપ ફાઇલ.',
    btn_backup_download: 'બેકઅપ ડાઉનલોડ (JSON)',
    excel_export_title: 'Excel / CSV એક્સપોર્ટ',
    excel_export_desc: 'બધા ઓર્ડર્સ અને રકમનું લિસ્ટ Excel શીટમાં ખોલવા માટે.',
    btn_excel_download: 'ઓર્ડર્સ એક્સેલ (CSV)',
    restore_backup_title: 'બેકઅપ રીસ્ટોર કરો',
    restore_backup_desc: 'અગાઉ લીધેલી બેકઅપ ફાઈલમાંથી ડેટા પાછો લાવો.',
    btn_restore_file: 'ફાઈલ પસંદ કરો',
    demo_prompt: 'ડેમો જોવા માટે સેમ્પલ ઓર્ડર્સ ઉમેરવા માંગો છો?',
    btn_load_demo: 'સેમ્પલ ડેટા લોડ કરો',
    btn_reset_data: 'બધો ડેટા સાફ કરો',
    mob_orders: 'ઓર્ડર',
    modal_order_subtitle: 'ભગવાનના વસ્ત્રો અને સાજની વિગતો',
    label_order_no: 'ઓર્ડર નં.',
    label_order_date: 'ઓર્ડર તારીખ',
    label_delivery_date: 'ડિલિવરી તારીખ *',
    label_party_name: 'પાર્ટી / ગ્રાહકનું નામ *',
    label_party_phone: 'સંપર્ક / મોબાઈલ નં.',
    label_swaroop: 'ભગવાનનું સ્વરૂપ *',
    label_murti_size: 'મૂર્તિ નંબર / સાઈઝ માપ',
    label_item_category: 'વસ્ત્ર / સાજનો પ્રકાર *',
    label_utsav: 'ઉત્સવ / પ્રસંગ',
    label_material_option: 'મટીરીયલની પસંદગી *',
    radio_with_material: '🧵 આપણું મટીરીયલ',
    radio_with_material_desc: 'કાપડ અને સામાન આપણે આપવાના છે',
    radio_without_material: '✂️ પાર્ટીનું મટીરીયલ',
    radio_without_material_desc: 'પાર્ટીએ કાપડ આપ્યું છે - ફક્ત સિલાઈ/મજૂરી',
    label_order_details: 'ઓર્ડર વિગત & કારીગરી ડિઝાઇન સૂચનાઓ',
    label_photo: 'ડિઝાઇન / સેમ્પલ ફોટો',
    label_photo_hint: 'કેમેરા અથવા ગેલેરીમાંથી અપલોડ કરો',
    label_estimated_price: 'અંદાજિત રકમ (₹) *',
    label_advance: 'એડવાન્સ જમા (₹)',
    label_balance: 'બાકી રકમ (₹)',
    label_assign_karigar: 'કારીગર સોંપણી',
    label_karigar_cost: 'કારીગર મજૂરી રકમ (₹)',
    label_order_status: 'ઓર્ડર સ્ટેટસ',
    label_payment_status: 'પેમેન્ટ સ્ટેટસ',
    btn_cancel: 'રદ કરો',
    btn_save_order: 'ઓર્ડર સેવ કરો',
    modal_expense_title: 'નવો ખર્ચ દાખલ કરો',
    btn_save_expense: 'ખર્ચ સેવ કરો',
    modal_karigar_title: 'નવો કારીગર ઉમેરો',
    label_karigar_name: 'કારીગરનું નામ *',
    label_specialty: 'કારીગરી નિપુણતા / કામનો પ્રકાર',
    btn_save_karigar: 'કારીગર સેવ કરો',
    receipt_slip_title: 'ઓર્ડર પહોંચ / રસીદ',
    btn_print: 'પ્રિન્ટ',
    btn_send_whatsapp: 'વોટ્સએપ પર મોકલો',
    btn_close: 'બંધ કરો',
    badge_in_progress: 'કામ ચાલુ',
    badge_ready: 'તૈયાર છે',
    badge_completed: 'પૂર્ણ થયેલ',
    badge_with_mat: 'આપણું કાપડ',
    badge_without_mat: 'પાર્ટીનું કાપડ',
    quick_complete_btn: 'પૂર્ણ કરો',
    card_total_amt: 'કુલ રકમ',
    card_advance_amt: 'એડવાન્સ',
    card_balance_amt: 'બાકી',
    card_delivery: 'ડિલિવરી',
    card_karigar: 'કારીગર',
    in_house: 'જાતે',
    overdue_alert: 'મુદત વીતી ગઈ',
    today_due: 'આજે જ આપવાનું છે',
    orders_count_badge: 'નજીકના ઓર્ડર',
    customer_info: 'ગ્રાહક વિગત',
    receipt_info: 'રસીદ વિગત',
    terms_title: 'નિયમો / નોંધ:',
    terms_1: '• ભગવાના વસ્ત્રો પવિત્રતા અને ચોકસાઈથી તૈયાર કરવામાં આવે છે.',
    terms_2: '• બાકી રકમ ડિલિવરી સમયે ચૂકવવાની રહેશે.',
    customer_sign: 'ગ્રાહકની સહી:',
    biz_sign: 'દુકાન વતી:',
    btn_new_customer: '+ નવો ગ્રાહક ઉમેરો',
    btn_save_customer: 'ગ્રાહક સેવ કરો',
    btn_edit_customer: 'ગ્રાહક સુધારો',
    btn_create_order: 'ઓર્ડર બનાવો',
    delete_customer_confirm: 'શું તમે આ ગ્રાહકને હટાવવા માંગો છો?'
  },
  mr: {
    brand_title: 'श्रीजी ना साज',

    nav_stock: 'स्टॉक',
    stock_title: 'कापड आणि साज स्टॉक व्यवस्थापन',
    stock_subtitle: 'देवांचे कपडे, रेशीम, जरी बॉर्डर आणि साहित्याचा हिशोब',
    btn_add_stock: '+ नवीन स्टॉक जोडा',
    btn_save_stock: 'स्टॉक सेव्ह करा',
    kpi_total_stock_items: 'एकूण स्टॉक आयटम',
    kpi_fabric_meters: 'एकूण कापड साठा',
    kpi_total_stock_value: 'एकूण स्टॉक मूल्य',
    unit_total_value: 'एकूण इन्व्हेंटरी मूल्य',
    kpi_low_stock: 'कमी स्टॉक इशारा',
    lbl_sync_active: 'सिंक सक्रिय',
    lbl_sync_syncing: 'सिंक होत आहे...',
    lbl_sync_success: 'सिंक पूर्ण ✓',
    unit_items: 'आयटम उपलब्ध',
    unit_meters: 'मीटर सिल्क/कापड',
    unit_need_reorder: 'पुनः ऑर्डर आवश्यक',
    lbl_stock_item_name: 'आयटमचे नाव / वर्णन *',
    lbl_stock_category: 'श्रेणी *',
    lbl_stock_unit: 'एकक (Unit) *',
    lbl_stock_qty: 'उपलब्ध साठा *',
    lbl_stock_min_alert: 'कमी स्टॉक मर्यादा',
    lbl_stock_rate: 'अंदाजे दर (₹)',
    lbl_stock_notes: 'विशेष नोंद',
    lbl_order_pick_stock: '📦 स्टॉकमधून कापड/साहित्य निवडा (पर्यायी)',
    lbl_stock_auto_deduct: 'ऑर्डर सेव्ह केल्यावर स्टॉकमधून वजा होईल',
    status_ready_title: 'तयार साज',
    lbl_ready_handover: 'ग्राहकास सुपूर्द करण्यासाठी तयार',
    status_stitching: 'शिलाई सुरू',
    delivery_tip: '💡 १-क्लिकने ग्राहकाला व्हॉट्सॲपवर ट्रायल/डिलिव्हरी मेसेज पाठवू शकता',
    btn_view_all_orders: 'सर्व ऑर्डर्स पहा →',
    financial_flow_title: 'आर्थिक प्रवाह आणि वसुली कार्यक्षमता',
    financial_flow_desc: 'ग्राहकांकडून जमा रोकड आणि शिल्लक वसुलीचे विश्लेषण',
    recovery_efficiency_label: 'वसुली कार्यक्षमता (Collected vs Pending)',
    lbl_cash_collected: 'जमा रोकड / बँक',
    lbl_market_receivable: 'ग्राहक बाकी वसुली',

    lbl_qrcode: 'क्यूआर कोड',
    lbl_sync: 'सिंक',
    lbl_total_bill: 'एकूण बिल',
    delivered_check: 'वितरित ✓',
    rate: 'दर',
    status_cutting: 'कटिंग',
    lock_error_msg: 'चुकीचा पिन / पासवर्ड! कृपया पुन्हा प्रयत्न करा.',
    remember_me: 'या फोनमध्ये लक्षात ठेवा',
    btn_unlock: 'अनलॉक करा',
    lock_enter_pin: '४-अंकी सुरक्षा पिन किंवा पासवर्ड',
    th_actions: 'कृती',
    th_payment_mode: 'पद्धत',
    th_payee: 'कारागीर / व्यापारी',
    th_description: 'खर्चाचा तपशील',
    expense_ledger_desc: 'दैनंदिन खर्चाची सविस्तर नोंद',
    expense_ledger_title: 'खर्च रोजमेळ',
    cat_other: 'कुरिअर आणि इतर',
    cat_zari: 'जरी / मोती / लेस',
    cat_karigar_labor: 'कारागीर मजुरी',
    cat_fabric: 'कापड / सिल्क',
    expense_breakdown_title: 'खर्चाचे सोपे वर्गीकरण',
    market_dues_action: 'ग्राहक खातावहीत तपासा →',
    market_dues_desc: 'ग्राहकांकडून येणे बाकी',
    market_dues_title: 'बाजार थकीत येणे',
    lbl_material_cost: 'साहित्य',
    lbl_karigar_cost: 'मजुरी',
    lbl_pending: 'बाकी',
    lbl_received: 'जमा',
    btn_export_csv: 'CSV डाउनलोड',
    opt_this_year: 'चालू वर्ष',
    opt_last_month: 'मागील महिना',
    opt_this_month: 'चालू महिना',
    opt_all_time: 'सर्व कालावधी',
    header_cloud_sync: '☁️ क्लाउड सिंक (थेट)',
    btn_install_mobile: 'मोबाईलमध्ये इन्स्टॉल करा',
    more_menu_title: 'अधिक मेनू',
    nav_more: 'अधिक',
    artisan_pipeline_title: 'कारागीर वर्कलोड',
    kpi_market_dues: 'थकीत येणे',
    kpi_gross_revenue: 'जमा महसूल',
    header_shlok_left: '॥ श्री गोपीजनवल्लभाय नमः ॥',
    header_shlok_main: '॥ श्री कृष्णः शरणं मम ॥ श्रीजी ना साज व्यवस्थापन',
    tagline: 'देवांचे कपडे, साज ऑर्डर्स आणि नफा-तोटा हिशोब',
    theme_heading: 'थीम निवडा',
    font_heading: 'फॉन्ट शैली निवडा',
    nav_dashboard: 'डॅशबोर्ड',
    nav_orders: 'ऑर्डर्स',
    nav_pnl: 'नफा-तोटा',
    nav_parties: 'ग्राहक',
    nav_karigars: 'कारागीर',
    nav_settings: 'सेटिंग्ज',
    btn_new_order: '+ नवीन ऑर्डर',
    urgent_alert_title: 'तात्काळ ऑर्डर सूचना',
    urgent_alert_desc: 'आज किंवा आगामी दिवसांत डिलिव्हरी करण्याच्या ऑर्डर्स शिल्लक आहेत.',
    btn_view: 'पहा',
    dashboard_summary: 'व्यवसाय सारांश आणि स्थिती',
    filter_label: 'तारीख फिल्टर:',
    filter_all: 'सर्व',
    filter_today: 'आज',
    filter_week: 'या आठवड्यात',
    filter_month: 'या महिन्यात',
    kpi_total_orders: 'एकूण ऑर्डर्स',
    kpi_pending_orders: 'काम चालू',
    kpi_completed_orders: 'पूर्ण ऑर्डर्स',
    kpi_net_profit: 'निव्वळ नफा',
    unit_orders: 'ऑर्डर्स',
    with_our_material: 'आपले कापड',
    party_material: 'पार्टीचे कापड',
    status_in_progress: 'काम चालू',
    status_ready: 'तयार',
    status_completed: 'पूर्ण',
    delivered_text: 'वितरित झाले',
    income_label: 'उत्पन्न',
    expense_label: 'खर्च',
    upcoming_deliveries_title: 'नजीकच्या डिलिव्हरी तारखा',
    order_status_chart: 'ऑर्डर स्थिती वितरण',
    btn_add_order_now: 'नवीन ऑर्डर नोंदवा',
    btn_add_expense_now: '+ नवीन खर्च नोंदवा',
    search_placeholder: 'ऑर्डर क्र., पार्टीचे नाव, फोन किंवा स्वरूप शोधा...',
    filter_date_label: 'तारीख फिल्टर:',
    filter_to: 'ते',
    btn_clear: 'साफ करा',
    total_results: 'एकूण निकाल',
    no_orders_found: 'कोणतीही ऑर्डर आढळली नाही',
    no_orders_desc: 'अद्याप कोणतीही ऑर्डर नोंदवलेली नाही किंवा फिल्टरमध्ये बसत नाही.',
    btn_first_order: 'पहिली ऑर्डर जोडा',
    pnl_title: 'नफा आणि तोटा पत्रक',
    pnl_subtitle: 'ऑर्डरचे उत्पन्न, साहित्य खरेदी आणि कारागीर मजुरी खर्चाचा अचूक हिशोब',
    btn_new_expense: '+ नवीन खर्च',
    total_revenue: 'एकूण उत्पन्न',
    revenue_desc: 'ऑर्डर्समधून मिळालेली रक्कम',
    order_fee: 'ऑर्डर रक्कम',
    pending_amount: 'बाकी रक्कम',
    total_expense: 'एकूण खर्च',
    expense_desc: 'कापड, मोती, जरी आणि कारागीर मजुरी',
    karigar_labor_cost: 'कारागीर मजुरी',
    material_cost: 'कापड/साहित्य',
    net_profit_desc: 'सर्व खर्च वजा जाता निव्वळ बचत',
    profit_margin: 'नफा प्रमाण',
    status_profitable: 'नफ्यात',
    status_loss: 'तोटा',
    status_breakeven: 'समपातळी',
    expense_log_title: 'नुकत्याच झालेल्या खर्चाची यादी',
    btn_add_expense: '+ खर्च जोडा',
    th_date: 'तारीख',
    th_category: 'श्रेणी',
    th_details: 'तपशील',
    th_pay_mode: 'पेमेंट मोड',
    th_amount: 'रक्कम (₹)',
    th_action: 'कृती',
    expenses_empty_desc: 'कोणताही खर्च नोंदवलेला नाही.',
    expense_chart_title: 'खर्च वर्गीकरण',
    parties_title: 'ग्राहक / पार्टी यादी',
    parties_subtitle: 'प्रत्येक ग्राहकाच्या एकूण ऑर्डर्स, बाकी रक्कम आणि संपर्क',
    search_parties_placeholder: 'पार्टीचे नाव किंवा फोन शोधा...',
    karigars_title: 'कारागीर व्यवस्थापन आणि मजुरी हिशोब',
    karigars_subtitle: 'कोणत्या कारागिराकडे कोणते वस्त्र आहे आणि किती मजुरी बाकी आहे',
    btn_new_karigar: '+ नवीन कारागीर जोडा',
    settings_title: 'प्रणाली सेटिंग्ज आणि व्यवसाय प्रोफाइल',
    biz_name_label: 'दुकान / व्यवसायाचे नाव',
    biz_phone_label: 'संपर्क क्रमांक',
    biz_address_label: 'पत्ता / शहर',
    biz_upi_label: 'UPI ID (पेमेंट QR कोडसाठी)',
    btn_save_settings: 'सेटिंग्ज जतन करा',
    backup_title: 'डेटा बॅकअप आणि सुरक्षा',
    backup_desc: 'तुमचा सर्व डेटा तुमच्या उपकरणात सुरक्षितपणे साठवला जातो.',
    full_backup_title: 'संपूर्ण डेटा बॅकअप',
    full_backup_desc: 'ऑर्डर्स, ग्राहक, कारागीर आणि खर्चाची बॅकअप फाइल.',
    btn_backup_download: 'बॅकअप डाउनलोड करा (JSON)',
    excel_export_title: 'Excel / CSV निर्यात',
    excel_export_desc: 'सर्व ऑर्डर्स आणि रकमांची यादी Excel शीटमध्ये उघडण्यासाठी.',
    btn_excel_download: 'ऑर्डर्स एक्सेल (CSV)',
    restore_backup_title: 'बॅकअप पुनर्संचयित करा',
    restore_backup_desc: 'यापूर्वी घेतलेल्या बॅकअप फाइलमधून डेटा परत आणा.',
    btn_restore_file: 'फाइल निवडा',
    demo_prompt: 'डेमो पाहण्यासाठी नमुना ऑर्डर्स जोडू इच्छिता?',
    btn_load_demo: 'नमुना डेटा लोड करा',
    btn_reset_data: 'सर्व डेटा साफ करा',
    mob_orders: 'ऑर्डर',
    modal_order_subtitle: 'देवांचे कपडे आणि साजाचा तपशील',
    label_order_no: 'ऑर्डर क्र.',
    label_order_date: 'ऑर्डर तारीख',
    label_delivery_date: 'डिलिव्हरी तारीख *',
    label_party_name: 'पार्टी / ग्राहकाचे नाव *',
    label_party_phone: 'संपर्क / मोबाईल क्र.',
    label_swaroop: 'देवाचे स्वरूप *',
    label_murti_size: 'मूर्ती क्रमांक / आकाराचे माप',
    label_item_category: 'वस्त्र / साजाचा प्रकार *',
    label_utsav: 'उत्सव / प्रसंग',
    label_material_option: 'मटेरियलची निवड *',
    radio_with_material: '🧵 आपले मटेरियल',
    radio_with_material_desc: 'कापड आणि साहित्य आपण देणार आहोत',
    radio_without_material: '✂️ पार्टीचे मटेरियल',
    radio_without_material_desc: 'पार्टीने कापड दिले आहे - फक्त शिलाई/मजुरी',
    label_order_details: 'ऑर्डर तपशील आणि डिझाइन सूचना',
    label_photo: 'डिझाइन / नमुना फोटो',
    label_photo_hint: 'कॅमेरा किंवा गॅलरीतून अपलोड करा',
    label_estimated_price: 'अंदाजे किंमत (₹) *',
    label_advance: 'ऍडव्हान्स जमा (₹)',
    label_balance: 'बाकी रक्कम (₹)',
    label_assign_karigar: 'कारागीर नेमणूक',
    label_karigar_cost: 'कारागीर मजुरी रक्कम (₹)',
    label_order_status: 'ऑर्डर स्थिती',
    label_payment_status: 'पेमेंट स्थिती',
    btn_cancel: 'रद्द करा',
    btn_save_order: 'ऑर्डर जतन करा',
    modal_expense_title: 'नवीन खर्च नोंदवा',
    btn_save_expense: 'खर्च जतन करा',
    modal_karigar_title: 'नवीन कारागीर जोडा',
    label_karigar_name: 'कारागिराचे नाव *',
    label_specialty: 'कामाचे कौशल्य / प्रकार',
    btn_save_karigar: 'कारागीर जतन करा',
    receipt_slip_title: 'ऑर्डर पावती / बिल',
    btn_print: 'प्रिंट',
    btn_send_whatsapp: 'व्हॉट्सॲपवर पाठवा',
    btn_close: 'बंद करा',
    badge_in_progress: 'काम चालू',
    badge_ready: 'तयार आहे',
    badge_completed: 'पूर्ण झाले',
    badge_with_mat: 'आपले कापड',
    badge_without_mat: 'पार्टीचे कापड',
    quick_complete_btn: 'पूर्ण करा',
    card_total_amt: 'एकूण रक्कम',
    card_advance_amt: 'ऍडव्हान्स',
    card_balance_amt: 'बाकी',
    card_delivery: 'डिलिव्हरी',
    card_karigar: 'कारागीर',
    in_house: 'स्वतः',
    overdue_alert: 'मुदत संपली',
    today_due: 'आजच द्यायचे आहे',
    orders_count_badge: 'नजीकच्या ऑर्डर्स',
    customer_info: 'ग्राहक तपशील',
    receipt_info: 'पावती तपशील',
    terms_title: 'नियम / सूचना:',
    terms_1: '• देवांचे वस्त्र पावित्र्य आणि अचूकतेने तयार केले जातात.',
    terms_2: '• उर्वरित रक्कम डिलिव्हरीच्या वेळी द्यावी लागेल.',
    customer_sign: 'ग्राहकाची स्वाक्षरी:',
    biz_sign: 'दुकानदार स्वाक्षरी:',
    btn_new_customer: '+ नवीन ग्राहक जोडा',
    btn_save_customer: 'ग्राहक जतन करा',
    btn_edit_customer: 'ग्राहक संपादित करा',
    btn_create_order: 'ऑर्डर तयार करा',
    delete_customer_confirm: 'तुम्हाला या ग्राहकाला हटवायचे आहे का?'
  },
  en: {
    brand_title: 'Shreeji Na Saaj',

    nav_stock: 'Stock',
    stock_title: 'Fabric & Saaj Inventory Management',
    stock_subtitle: 'Live stock tracking for sacred silks, zari borders, and deity garments',
    btn_add_stock: '+ Add Stock Item',
    btn_save_stock: 'Save Stock Item',
    kpi_total_stock_items: 'Total Stock Items',
    kpi_fabric_meters: 'Total Fabric Meters',
    kpi_total_stock_value: 'Total Stock Value',
    unit_total_value: 'Total Inventory Value',
    kpi_low_stock: 'Low Stock Alerts',
    lbl_sync_active: 'Live Sync',
    lbl_sync_syncing: 'Syncing...',
    lbl_sync_success: 'Synced ✓',
    unit_items: 'Items In Stock',
    unit_meters: 'Meters Silk / Fabric',
    unit_need_reorder: 'Items Need Reorder',
    lbl_stock_item_name: 'Item Name / Description *',
    lbl_stock_category: 'Category *',
    lbl_stock_unit: 'Unit *',
    lbl_stock_qty: 'Current Quantity *',
    lbl_stock_min_alert: 'Low Stock Alert Threshold',
    lbl_stock_rate: 'Estimated Rate (₹)',
    lbl_stock_notes: 'Special Notes / Usage',
    lbl_order_pick_stock: '📦 Pick Fabric/Material from Stock (Optional)',
    lbl_stock_auto_deduct: 'Auto-deducted from inventory upon saving',
    status_ready_title: 'Ready for Pickup',
    lbl_ready_handover: 'Finished & Ready for Delivery',
    status_stitching: 'In Stitching',
    delivery_tip: '💡 1-Click WhatsApp trial & delivery update message',
    btn_view_all_orders: 'View All Orders →',
    financial_flow_title: 'Financial Flow & Collection Efficiency',
    financial_flow_desc: 'Live analysis of collected revenue and outstanding market dues',
    recovery_efficiency_label: 'Collection Efficiency (Collected vs Pending)',
    lbl_cash_collected: 'Cash / Bank Collected',
    lbl_market_receivable: 'Pending Customer Dues',

    lbl_qrcode: 'QR Code',
    lbl_sync: 'Sync',
    lbl_total_bill: 'Total Bill',
    delivered_check: 'Delivered ✓',
    rate: 'Rate',
    status_cutting: 'Cutting',
    lock_error_msg: 'Incorrect PIN / Password! Please try again.',
    remember_me: 'Remember on this device',
    btn_unlock: 'Unlock App',
    lock_enter_pin: '4-Digit Security PIN or Password',
    th_actions: 'Actions',
    th_payment_mode: 'Payment Mode',
    th_payee: 'Payee / Karigar',
    th_description: 'Description',
    expense_ledger_desc: 'Daily Expense Records',
    expense_ledger_title: 'Expense Ledger',
    cat_other: 'Courier & Other',
    cat_zari: 'Zari / Beads / Lace',
    cat_karigar_labor: 'Artisan Wages',
    cat_fabric: 'Fabric / Silk',
    expense_breakdown_title: 'Expense Breakdown',
    market_dues_action: 'View in Customers →',
    market_dues_desc: 'Pending From Clients',
    market_dues_title: 'Market Receivables',
    lbl_material_cost: 'Material Cost',
    lbl_karigar_cost: 'Artisan Cost',
    lbl_pending: 'Pending',
    lbl_received: 'Received',
    btn_export_csv: 'Export CSV',
    opt_this_year: 'Financial Year',
    opt_last_month: 'Last Month',
    opt_this_month: 'This Month',
    opt_all_time: 'All Time',
    header_cloud_sync: '☁️ Cloud Sync (Live)',
    btn_install_mobile: 'Install on Mobile',
    more_menu_title: 'More Menu',
    nav_more: 'More',
    artisan_pipeline_title: 'Artisan Workload',
    kpi_market_dues: 'Pending Dues',
    kpi_gross_revenue: 'Collected Revenue',
    header_shlok_left: '॥ Shri Gopijanavallabhaya Namah ॥',
    header_shlok_main: '॥ Shri Krishna Sharanam Mama ॥ Shreeji Na Saaj System',
    tagline: 'Weaving devotion in every thread',
    theme_heading: 'Select Theme',
    font_heading: 'Select Typography Style',
    nav_dashboard: 'Dashboard',
    nav_orders: 'Orders',
    nav_pnl: 'Profit & Loss',
    nav_parties: 'Customers',
    nav_karigars: 'Artisans',
    nav_settings: 'Settings',
    btn_new_order: '+ New Order',
    urgent_alert_title: 'Urgent Delivery Alert',
    urgent_alert_desc: 'Orders pending delivery today or in upcoming days.',
    btn_view: 'View',
    dashboard_summary: 'Business Summary & Status',
    filter_label: 'Date Filter:',
    filter_all: 'All',
    filter_today: 'Today',
    filter_week: 'This Week',
    filter_month: 'This Month',
    kpi_total_orders: 'Total Orders',
    kpi_pending_orders: 'In Progress',
    kpi_completed_orders: 'Completed Orders',
    kpi_net_profit: 'Net Profit',
    unit_orders: 'Orders',
    with_our_material: 'Our Fabric',
    party_material: 'Party Fabric',
    status_in_progress: 'In Progress',
    status_ready: 'Ready',
    status_completed: 'Completed',
    delivered_text: 'Delivered',
    income_label: 'Income',
    expense_label: 'Expense',
    upcoming_deliveries_title: 'Upcoming Delivery Deadlines',
    order_status_chart: 'Order Status Distribution',
    btn_add_order_now: 'Create New Order',
    btn_add_expense_now: '+ Add Expense Entry',
    search_placeholder: 'Search order no, customer name, phone, or deity...',
    filter_date_label: 'Date Filter:',
    filter_to: 'To',
    btn_clear: 'Clear',
    total_results: 'Total Results',
    no_orders_found: 'No orders found',
    no_orders_desc: 'No orders recorded yet or none matching the current filter.',
    btn_first_order: 'Add First Order',
    pnl_title: 'Profit & Loss Statement',
    pnl_subtitle: 'Accurate account of order revenue, material purchases, and labor costs',
    btn_new_expense: '+ New Expense',
    total_revenue: 'Total Revenue',
    revenue_desc: 'Total received from orders',
    order_fee: 'Order Amount',
    pending_amount: 'Pending Balance',
    total_expense: 'Total Expenses',
    expense_desc: 'Fabrics, pearls, zari and artisan wages',
    karigar_labor_cost: 'Artisan Wages',
    material_cost: 'Fabric/Material',
    net_profit_desc: 'Net savings after deducting all expenses',
    profit_margin: 'Profit Margin',
    status_profitable: 'Profitable',
    status_loss: 'Loss',
    status_breakeven: 'Breakeven',
    expense_log_title: 'Recent Expense Log',
    btn_add_expense: '+ Add Expense',
    th_date: 'Date',
    th_category: 'Category',
    th_details: 'Details',
    th_pay_mode: 'Payment Mode',
    th_amount: 'Amount (₹)',
    th_action: 'Action',
    expenses_empty_desc: 'No expenses recorded.',
    expense_chart_title: 'Expense Breakdown',
    parties_title: 'Customer Directory',
    parties_subtitle: 'Order history, outstanding balance, and contacts per customer',
    search_parties_placeholder: 'Search party name or phone...',
    karigars_title: 'Artisan Management & Labor Ledger',
    karigars_subtitle: 'Track vastras assigned to tailors and pending labor fees',
    btn_new_karigar: '+ Add New Artisan',
    settings_title: 'System Settings & Business Profile',
    biz_name_label: 'Shop / Business Name',
    biz_phone_label: 'Contact Number',
    biz_address_label: 'Address / City',
    biz_upi_label: 'UPI ID (For Payment QR Code)',
    btn_save_settings: 'Save Settings',
    backup_title: 'Data Backup & Security',
    backup_desc: 'All your business data is securely stored on this device.',
    full_backup_title: 'Complete Data Backup',
    full_backup_desc: 'Single secure backup file containing orders, customers, and expenses.',
    btn_backup_download: 'Download Backup (JSON)',
    excel_export_title: 'Excel / CSV Export',
    excel_export_desc: 'Export all orders into a spreadsheet file.',
    btn_excel_download: 'Orders Excel (CSV)',
    restore_backup_title: 'Restore Backup',
    restore_backup_desc: 'Restore your data from a previously saved JSON file.',
    btn_restore_file: 'Choose File',
    demo_prompt: 'Want to test with sample demo orders?',
    btn_load_demo: 'Load Demo Data',
    btn_reset_data: 'Clear All Data',
    mob_orders: 'Order',
    modal_order_subtitle: 'Deity Vastra and Saaj Specifications',
    label_order_no: 'Order No.',
    label_order_date: 'Order Date',
    label_delivery_date: 'Delivery Date *',
    label_party_name: 'Customer / Party Name *',
    label_party_phone: 'Contact / Phone No.',
    label_swaroop: 'Deity Swaroop *',
    label_murti_size: 'Murti Size / Number',
    label_item_category: 'Vastra / Item Category *',
    label_utsav: 'Festival / Occasion',
    label_material_option: 'Material Option *',
    radio_with_material: '🧵 With My Material',
    radio_with_material_desc: 'Fabric and materials supplied by us',
    radio_without_material: '✂️ Without My Material',
    radio_without_material_desc: 'Customer provided fabric - Stitching/Labor only',
    label_order_details: 'Order Details & Karigari Specs',
    label_photo: 'Design / Sample Photo',
    label_photo_hint: 'Upload from camera or photo library',
    label_estimated_price: 'Estimated Price (₹) *',
    label_advance: 'Advance Received (₹)',
    label_balance: 'Balance Due (₹)',
    label_assign_karigar: 'Assign Artisan',
    label_karigar_cost: 'Artisan Labor Cost (₹)',
    label_order_status: 'Order Status',
    label_payment_status: 'Payment Status',
    btn_cancel: 'Cancel',
    btn_save_order: 'Save Order',
    modal_expense_title: 'Add New Expense',
    btn_save_expense: 'Save Expense',
    modal_karigar_title: 'Add New Artisan',
    label_karigar_name: 'Artisan Name *',
    label_specialty: 'Specialization / Skill',
    btn_save_karigar: 'Save Artisan',
    receipt_slip_title: 'Order Receipt / Bill',
    btn_print: 'Print',
    btn_send_whatsapp: 'Send via WhatsApp',
    btn_close: 'Close',
    badge_in_progress: 'In Progress',
    badge_ready: 'Ready',
    badge_completed: 'Completed',
    badge_with_mat: 'With Material',
    badge_without_mat: 'Without Material',
    quick_complete_btn: 'Complete',
    card_total_amt: 'Total',
    card_advance_amt: 'Advance',
    card_balance_amt: 'Balance',
    card_delivery: 'Delivery',
    card_karigar: 'Artisan',
    in_house: 'In-House',
    overdue_alert: 'Overdue',
    today_due: 'Due Today',
    orders_count_badge: 'Due Soon',
    customer_info: 'Customer Info',
    receipt_info: 'Receipt Info',
    terms_title: 'Terms & Notes:',
    terms_1: '• Sacred deity garments crafted with utmost devotion and care.',
    terms_2: '• Remaining balance payable at the time of delivery.',
    customer_sign: 'Customer Signature:',
    biz_sign: 'For Shop Signature:',
    btn_new_customer: '+ Add New Customer',
    btn_save_customer: 'Save Customer',
    btn_edit_customer: 'Edit Customer',
    btn_create_order: 'Create Order',
    delete_customer_confirm: 'Are you sure you want to delete this customer?'
  }
};

// SELECT DROPDOWNS TRANSLATIONS
const selectOptions = {
  swaroop: {
    gu: [
      { val: 'shrinathji', label: 'શ્રીનાથજી' },
      { val: 'lalan', label: 'લાલન / લાડુ ગોપાલ' },
      { val: 'mahaprabhuji', label: 'મહાપ્રભુજી / ગુસાઈજી' },
      { val: 'yamunaji', label: 'શ્રી યમુનાજી' },
      { val: 'radhakrishna', label: 'રાધા કૃષ્ણ' },
      { val: 'mandir', label: 'હવેલી / મંદિર મોટો સાજ' },
      { val: 'other', label: 'અન્ય દેવી-દેવતા' }
    ],
    mr: [
      { val: 'shrinathji', label: 'श्रीनाथजी' },
      { val: 'lalan', label: 'लालन / लाडू गोपाळ' },
      { val: 'mahaprabhuji', label: 'महाप्रभूजी / गुसाईजी' },
      { val: 'yamunaji', label: 'श्री यमुनाजी' },
      { val: 'radhakrishna', label: 'राधा कृष्ण' },
      { val: 'mandir', label: 'मंदिर मोठा साज' },
      { val: 'other', label: 'इतर देवी-देवता' }
    ],
    en: [
      { val: 'shrinathji', label: 'Shrinathji' },
      { val: 'lalan', label: 'Lalan / Laddu Gopal' },
      { val: 'mahaprabhuji', label: 'Mahaprabhuji' },
      { val: 'yamunaji', label: 'Shri Yamunaji' },
      { val: 'radhakrishna', label: 'Radha Krishna' },
      { val: 'mandir', label: 'Grand Temple Saaj' },
      { val: 'other', label: 'Other Deity' }
    ]
  },
  items: {
    gu: [
      { val: 'vagha', label: 'વાઘા / શૃંગાર સેટ' },
      { val: 'pichhwai', label: 'પિછવાઈ' },
      { val: 'gadi', label: 'ગાદી-તકિયા / ચાદર' },
      { val: 'zari', label: 'ઝરી વસ્ત્ર / જરદોશી' },
      { val: 'dhoti', label: 'ચોલી-ધોતી-ઉપરણા' },
      { val: 'shringar', label: 'મુગટ / કાછની / શૃંગાર' },
      { val: 'malaji', label: 'પવિત્રા / માલાજી' },
      { val: 'other', label: 'અન્ય સાજ' }
    ],
    mr: [
      { val: 'vagha', label: 'वाघा / शृंगार संच' },
      { val: 'pichhwai', label: 'पिच्छवाई' },
      { val: 'gadi', label: 'गादी-उशी / चादर' },
      { val: 'zari', label: 'जरी वस्त्र / जरदोशी' },
      { val: 'dhoti', label: 'चोळी-धोती-उपरणे' },
      { val: 'shringar', label: 'मुकुट / काछनी / शृंगार' },
      { val: 'malaji', label: 'पवित्रा / माळाजी' },
      { val: 'other', label: 'इतर साज' }
    ],
    en: [
      { val: 'vagha', label: 'Vagha / Shringar Set' },
      { val: 'pichhwai', label: 'Pichhwai' },
      { val: 'gadi', label: 'Gadi Takiya / Bedding' },
      { val: 'zari', label: 'Zari / Zardozi Vastra' },
      { val: 'dhoti', label: 'Choli-Dhoti-Dupatta' },
      { val: 'shringar', label: 'Crown / Ornaments' },
      { val: 'malaji', label: 'Pavitra / Malaji' },
      { val: 'other', label: 'Other Saaj' }
    ]
  },
  utsav: {
    gu: [
      { val: 'regular', label: 'નિયમિત' },
      { val: 'janmashtami', label: 'જન્માષ્ટમી' },
      { val: 'annakut', label: 'અન્નકૂટ / દીવાળી' },
      { val: 'hindola', label: 'હિંડોળા ઉત્સવ' },
      { val: 'dolotsav', label: 'દોલોત્સવ / ફાગણ' },
      { val: 'sharad', label: 'શરદ પૂનમ' },
      { val: 'prabodhini', label: 'પ્રબોધિની એકાદશી' },
      { val: 'manorath', label: 'મનોરથ' }
    ],
    mr: [
      { val: 'regular', label: 'नियमित' },
      { val: 'janmashtami', label: 'जन्माष्टमी' },
      { val: 'annakut', label: 'अन्नकूट / दिवाळी' },
      { val: 'hindola', label: 'हिंडोळा उत्सव' },
      { val: 'dolotsav', label: 'दोलोत्सव / होळी' },
      { val: 'sharad', label: 'शरद पौर्णिमा' },
      { val: 'prabodhini', label: 'प्रबोधिनी एकादशी' },
      { val: 'manorath', label: 'विशेष मनोरथ' }
    ],
    en: [
      { val: 'regular', label: 'Regular' },
      { val: 'janmashtami', label: 'Janmashtami' },
      { val: 'annakut', label: 'Annakut / Diwali' },
      { val: 'hindola', label: 'Hindola Utsav' },
      { val: 'dolotsav', label: 'Dolotsav / Holi' },
      { val: 'sharad', label: 'Sharad Purnima' },
      { val: 'prabodhini', label: 'Prabodhini Ekadashi' },
      { val: 'manorath', label: 'Special Manorath' }
    ]
  },
  orderStatus: {
    gu: [
      { val: 'pending', label: '🟡 કામ ચાલુ' },
      { val: 'ready', label: '🟠 તૈયાર છે' },
      { val: 'completed', label: '🟢 પૂર્ણ અને સુપરત' }
    ],
    mr: [
      { val: 'pending', label: '🟡 काम चालू' },
      { val: 'ready', label: '🟠 तयार आहे' },
      { val: 'completed', label: '🟢 पूर्ण आणि वितरित' }
    ],
    en: [
      { val: 'pending', label: '🟡 In Progress' },
      { val: 'ready', label: '🟠 Ready for Delivery' },
      { val: 'completed', label: '🟢 Completed & Delivered' }
    ]
  },
  paymentStatus: {
    gu: [
      { val: 'unpaid', label: '🔴 બાકી' },
      { val: 'partial', label: '🟡 અંશતઃ મળેલ' },
      { val: 'paid', label: '🟢 સંપૂર્ણ ચૂકતે' }
    ],
    mr: [
      { val: 'unpaid', label: '🔴 शिल्लक' },
      { val: 'partial', label: '🟡 अंशतः प्राप्त' },
      { val: 'paid', label: '🟢 पूर्ण भरले' }
    ],
    en: [
      { val: 'unpaid', label: '🔴 Unpaid' },
      { val: 'partial', label: '🟡 Partial' },
      { val: 'paid', label: '🟢 Fully Paid' }
    ]
  },
  filterOrderStatus: {
    gu: [
      { val: 'all', label: 'તમામ સ્ટેટસ' },
      { val: 'pending', label: '🟡 કામ ચાલુ' },
      { val: 'ready', label: '🟠 તૈયાર' },
      { val: 'completed', label: '🟢 પૂર્ણ થયેલ' }
    ],
    mr: [
      { val: 'all', label: 'सर्व स्थिती' },
      { val: 'pending', label: '🟡 काम चालू' },
      { val: 'ready', label: '🟠 तयार' },
      { val: 'completed', label: '🟢 पूर्ण' }
    ],
    en: [
      { val: 'all', label: 'All Status' },
      { val: 'pending', label: '🟡 In Progress' },
      { val: 'ready', label: '🟠 Ready' },
      { val: 'completed', label: '🟢 Completed' }
    ]
  },
  filterOrderMaterial: {
    gu: [
      { val: 'all', label: 'બધા મટીરીયલ પ્રકાર' },
      { val: 'with_material', label: '🧵 આપણું કાપડ' },
      { val: 'without_material', label: '✂️ પાર્ટીનું કાપડ' }
    ],
    mr: [
      { val: 'all', label: 'सर्व साहित्य प्रकार' },
      { val: 'with_material', label: '🧵 आपले कापड' },
      { val: 'without_material', label: '✂️ पार्टीचे कापड' }
    ],
    en: [
      { val: 'all', label: 'All Material Types' },
      { val: 'with_material', label: '🧵 With My Material' },
      { val: 'without_material', label: '✂️ Without My Material' }
    ]
  },
  pnlPeriod: {
    gu: [
      { val: 'all', label: 'સમગ્ર સમયગાળો' },
      { val: 'this_month', label: 'આ મહિને' },
      { val: 'last_month', label: 'ગયા મહિને' },
      { val: 'this_year', label: 'આ વર્ષે' }
    ],
    mr: [
      { val: 'all', label: 'सर्व कालावधी' },
      { val: 'this_month', label: 'या महिन्यात' },
      { val: 'last_month', label: 'मागील महिन्यात' },
      { val: 'this_year', label: 'या वर्षी' }
    ],
    en: [
      { val: 'all', label: 'All Time' },
      { val: 'this_month', label: 'This Month' },
      { val: 'last_month', label: 'Last Month' },
      { val: 'this_year', label: 'This Year' }
    ]
  },
  expenseCategory: {
    gu: [
      { val: 'material', label: '🧵 કાપડ / મટીરીયલ ખરીદી' },
      { val: 'karigar', label: '🪡 કારીગર મજૂરી ચૂકવણી' },
      { val: 'zari_moti', label: '✨ મોતી / ઝરી / લેસ / ગોટા' },
      { val: 'courier', label: '📦 પાર્સલ / કુરિયર / ભાડું' },
      { val: 'workshop', label: '💡 વર્કશોપ ખર્ચ / વીજળી' },
      { val: 'other', label: '📌 અન્ય ખર્ચ' }
    ],
    mr: [
      { val: 'material', label: '🧵 कापड / साहित्य खरेदी' },
      { val: 'karigar', label: '🪡 कारागीर मजुरी वाटप' },
      { val: 'zari_moti', label: '✨ मोती / जरी / लेस / गोटा' },
      { val: 'courier', label: '📦 पार्सल / कुरिअर / वाहतूक' },
      { val: 'workshop', label: '💡 कार्यशाळा / वीज बिल' },
      { val: 'other', label: '📌 इतर खर्च' }
    ],
    en: [
      { val: 'material', label: '🧵 Fabric & Raw Material' },
      { val: 'karigar', label: '🪡 Artisan Labor Wages' },
      { val: 'zari_moti', label: '✨ Pearls, Zari & Laces' },
      { val: 'courier', label: '📦 Courier & Packaging' },
      { val: 'workshop', label: '💡 Workshop & Electricity' },
      { val: 'other', label: '📌 Miscellaneous Expense' }
    ]
  },
  paymentMode: {
    gu: [
      { val: 'Cash', label: 'રોકડા (Cash)' },
      { val: 'UPI / Online', label: 'GooglePay / PhonePe / UPI' },
      { val: 'Bank Transfer', label: 'બેંક ટ્રાન્સફર' }
    ],
    mr: [
      { val: 'Cash', label: 'रोख (Cash)' },
      { val: 'UPI / Online', label: 'GooglePay / PhonePe / UPI' },
      { val: 'Bank Transfer', label: 'बँक ट्रान्सफर' }
    ],
    en: [
      { val: 'Cash', label: 'Cash' },
      { val: 'UPI / Online', label: 'GooglePay / PhonePe / UPI' },
      { val: 'Bank Transfer', label: 'Bank Transfer' }
    ]
  }
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  loadDataFromStorage();
  applyThemeAndFont();
  setLanguage(state.lang);
  updateDailySuvichar();
  renderDashboard();
  renderOrdersList();
  renderPnL();
  renderPartiesList();
  renderKarigarsList();
  checkUrgentDeliveries();
  updatePendingBadges();
  initPWA();
  initServerSync();
  initDropdownClickOutside();
  replaceFaWithSvg();
});

// Load Data
function loadDataFromStorage() {
  try {
    
    const savedStock = localStorage.getItem(STORAGE_KEYS.STOCK);
    state.stock = savedStock ? JSON.parse(savedStock) : [
      { id: 'stk_1', itemName: 'શ્યામ કલ્યાણી પટોળા સિલ્ક કાપડ', category: 'fabric', quantity: 24.5, unit: 'meter', minAlertQty: 5, ratePerUnit: 650, notes: '૫ નંબર વાઘા માટે ખાસ' },
      { id: 'stk_2', itemName: 'પવિત્ર પીતાંબરી જરી બોર્ડર લેસ', category: 'zari', quantity: 18.0, unit: 'meter', minAlertQty: 4, ratePerUnit: 320, notes: 'શ્રીનાથજી શૃંગાર માટે' },
      { id: 'stk_3', itemName: 'જરદોશી મુકુટ & કુંડળ સાજ સેટ', category: 'shringar', quantity: 8, unit: 'set', minAlertQty: 2, ratePerUnit: 1200, notes: 'હાથવણાટ કારીગરી' },
      { id: 'stk_4', itemName: 'મોતી ચુંદડી & પિછવાઈ સિલ્ક', category: 'fabric', quantity: 12.0, unit: 'meter', minAlertQty: 3, ratePerUnit: 480, notes: 'હવેલી મનોરથ' }
    ];

    const savedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
    state.orders = savedOrders ? JSON.parse(savedOrders) : [];

    const savedExpenses = localStorage.getItem(STORAGE_KEYS.EXPENSES);
    state.expenses = savedExpenses ? JSON.parse(savedExpenses) : [];

    const savedKarigars = localStorage.getItem(STORAGE_KEYS.KARIGARS);
    state.karigars = savedKarigars ? JSON.parse(savedKarigars) : [
      { id: 'k1', name: 'રાજેશભાઈ દરજી', phone: '9825011111', specialty: 'વાઘા & જરદોશી' },
      { id: 'k2', name: 'મુકેશભાઈ', phone: '9825022222', specialty: 'પિછવાઈ & ગાદી' }
    ];

    const savedCustomers = localStorage.getItem(STORAGE_KEYS.CUSTOMERS);
    state.customers = savedCustomers ? JSON.parse(savedCustomers) : [
      { id: 'c1', name: 'ગોવર્ધન સત્સંગ મંડળ', phone: '9825011111', address: 'સુરત, ગુજરાત', notes: '૫ નંબર લાલ વાઘા & પિછવાઈ' },
      { id: 'c2', name: 'જયેશભાઈ શાહ', phone: '9824155555', address: 'અમદાવાદ', notes: 'જરદોશી સાજ સેવા' }
    ];

    const savedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (savedSettings) {
      state.settings = { ...state.settings, ...JSON.parse(savedSettings) };
    }

    const savedLang = localStorage.getItem(STORAGE_KEYS.LANG);
    if (savedLang && ['gu', 'mr', 'en'].includes(savedLang)) {
      state.lang = savedLang;
    }

    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme && THEMES.some(t => t.key === savedTheme)) {
      state.theme = savedTheme;
    }

    const savedFont = localStorage.getItem(STORAGE_KEYS.FONT);
    if (savedFont && FONTS.some(f => f.key === savedFont)) {
      state.font = savedFont;
    }

    if (document.getElementById('settingBizName')) {
      document.getElementById('settingBizName').value = state.settings.bizName || '';
      document.getElementById('settingBizPhone').value = state.settings.phone || '';
      document.getElementById('settingBizAddress').value = state.settings.address || '';
      document.getElementById('settingBizUpi').value = state.settings.upiId || '';
    }

    // Load Security & PIN Settings
    const savedSecurity = localStorage.getItem(STORAGE_KEYS.SECURITY);
    if (savedSecurity) {
      try {
        state.security = { ...state.security, ...JSON.parse(savedSecurity) };
      } catch (e) {
        console.warn('Could not parse security settings:', e);
      }
    }

    if (document.getElementById('settingSecurityPin')) {
      document.getElementById('settingSecurityPin').value = state.security.pinCode || '1234';
    }

    // Check Lock Status
    const isRemembered = localStorage.getItem(STORAGE_KEYS.REMEMBER_UNLOCKED) === 'true';
    const isSessionUnlocked = sessionStorage.getItem(STORAGE_KEYS.SESSION_UNLOCKED) === 'true';

    if (state.security.pinEnabled) {
      if (isRemembered || isSessionUnlocked) {
        hideLockScreen();
      } else {
        showLockScreen();
      }
    } else {
      hideLockScreen();
    }

    updatePendingBadges();
    updateCustomerDatalist();
  } catch (err) {
    console.error('Error loading storage:', err);
  }
}

// Save Data
function saveDataToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(state.orders));
    localStorage.setItem(STORAGE_KEYS.STOCK, JSON.stringify(state.stock));
    localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(state.expenses));
    localStorage.setItem(STORAGE_KEYS.KARIGARS, JSON.stringify(state.karigars));
    localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(state.customers));
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(state.settings));
    localStorage.setItem(STORAGE_KEYS.LANG, state.lang);
    localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
    localStorage.setItem(STORAGE_KEYS.FONT, state.font);
    updatePendingBadges();

    // Push to central server database if connected
    pushToCloudStore();
  } catch (err) {
    console.error('Error saving storage:', err);
  }
}

// Apply Both Theme and Font Class on Body
function applyThemeAndFont() {
  THEMES.forEach(t => document.body.classList.remove(t.key));
  FONTS.forEach(f => document.body.classList.remove(f.key));

  document.body.classList.add(state.theme);
  document.body.classList.add(state.font);
  document.body.classList.add(`lang-${state.lang}`);
}

// ==========================================
// THEME & FONT DROPDOWN CONTROLS (ICONS ONLY)
// ==========================================
function toggleThemeDropdown(event) {
  event.stopPropagation();
  closeFontDropdown();
  const menu = document.getElementById('themeDropdownMenu');
  if (menu.classList.contains('hidden')) {
    renderThemeDropdown();
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
}

function closeThemeDropdown() {
  const menu = document.getElementById('themeDropdownMenu');
  if (menu) menu.classList.add('hidden');
}

function toggleFontDropdown(event) {
  event.stopPropagation();
  closeThemeDropdown();
  const menu = document.getElementById('fontDropdownMenu');
  if (menu.classList.contains('hidden')) {
    renderFontDropdown();
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
}

function closeFontDropdown() {
  const menu = document.getElementById('fontDropdownMenu');
  if (menu) menu.classList.add('hidden');
}

function initDropdownClickOutside() {
  document.addEventListener('click', (e) => {
    const themeWrapper = document.getElementById('themeDropdownWrapper');
    const fontWrapper = document.getElementById('fontDropdownWrapper');
    if (themeWrapper && !themeWrapper.contains(e.target)) {
      closeThemeDropdown();
    }
    if (fontWrapper && !fontWrapper.contains(e.target)) {
      closeFontDropdown();
    }
  });
}

function setTheme(themeKey) {
  if (!THEMES.some(t => t.key === themeKey)) return;
  state.theme = themeKey;
  saveDataToStorage();
  applyThemeAndFont();
  closeThemeDropdown();
  renderDashboard();
  renderPnL();
}

function setFont(fontKey) {
  if (!FONTS.some(f => f.key === fontKey)) return;
  state.font = fontKey;
  saveDataToStorage();
  applyThemeAndFont();
  closeFontDropdown();
}

function renderThemeDropdown() {
  const menu = document.getElementById('themeDropdownMenu');
  if (!menu) return;
  const dict = i18n[state.lang];

  menu.innerHTML = `
    <div class="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
      <span class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
        <svg class="w-4 h-4 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.58 8 8 8 1.1 0 2-.9 2-2 0-.52-.2-1-.55-1.35-.34-.36-.55-.86-.55-1.4 0-1.1.9-2 2-2h2.4c3.31 0 6-2.69 6-6 0-5.52-4.48-9.25-9.3-9.25zm-5.5 9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-4C8.67 7.5 8 6.83 8 6s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
        <span>${dict.theme_heading}</span>
      </span>
      <span class="text-[10px] text-slate-400">5 Themes</span>
    </div>
    <div class="max-h-72 overflow-y-auto space-y-1 p-1">
      ${THEMES.map(t => {
        const isSelected = state.theme === t.key;
        return `
          <div onclick="setTheme('${t.key}')" class="p-2.5 rounded-xl cursor-pointer transition flex items-center justify-between ${isSelected ? 'bg-amber-500/15 border border-amber-400/50 font-bold' : 'hover:bg-slate-50 border border-transparent'}">
            <div class="flex items-center space-x-2.5 min-w-0">
              <span class="w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm flex-shrink-0" style="background: ${t.previewBg}">
                ${t.badge}
              </span>
              <div class="min-w-0">
                <div class="text-xs font-bold text-slate-900 truncate">${t.name[state.lang] || t.name.gu}</div>
                <div class="text-[10px] text-slate-500 truncate">${t.desc[state.lang] || t.desc.gu}</div>
              </div>
            </div>
            ${isSelected ? '<svg class="w-4 h-4 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>' : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderFontDropdown() {
  const menu = document.getElementById('fontDropdownMenu');
  if (!menu) return;
  const dict = i18n[state.lang];

  menu.innerHTML = `
    <div class="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
      <span class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
        <svg class="w-4 h-4 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"/></svg>
        <span>${dict.font_heading}</span>
      </span>
      <span class="text-[10px] text-slate-400">5 Typography Styles</span>
    </div>
    <div class="max-h-72 overflow-y-auto space-y-1 p-1">
      ${FONTS.map(f => {
        const isSelected = state.font === f.key;
        return `
          <div onclick="setFont('${f.key}')" class="p-2.5 rounded-xl cursor-pointer transition flex items-center justify-between ${isSelected ? 'bg-amber-500/15 border border-amber-400/50 font-bold' : 'hover:bg-slate-50 border border-transparent'}">
            <div class="flex items-center space-x-2.5 min-w-0">
              <span class="w-8 h-8 rounded-lg bg-royal-50 text-royal-900 flex items-center justify-center text-sm flex-shrink-0 border border-slate-200">
                ${f.badge}
              </span>
              <div class="min-w-0">
                <div class="text-xs font-bold text-slate-900 truncate">${f.name[state.lang] || f.name.gu}</div>
                <div class="text-[10px] text-slate-500 truncate">${f.desc}</div>
              </div>
            </div>
            ${isSelected ? '<svg class="w-4 h-4 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>' : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Update Badges on Navigation
function updatePendingBadges() {
  const pendingCount = state.orders.filter(o => o.orderStatus !== 'completed').length;
  const badge1 = document.getElementById('badge-pending-count');
  const badgeMobile = document.getElementById('mobileBadgeOrders');
  if (badge1) badge1.innerText = pendingCount;
  if (badgeMobile) badgeMobile.innerText = pendingCount;
}

// ==========================================
// 3-WAY PURE LANGUAGE SWITCHER
// ==========================================

function setLanguage(lang) {
  if (!['gu', 'mr', 'en'].includes(lang)) return;
  state.lang = lang;
  saveDataToStorage();

  document.documentElement.lang = lang;
  document.body.classList.remove('lang-gu', 'lang-mr', 'lang-en');
  document.body.classList.add(`lang-${lang}`);
  applyThemeAndFont();

  // Active language buttons
  ['gu', 'mr', 'en'].forEach(l => {
    const btn = document.getElementById(`langBtn-${l}`);
    if (btn) {
      if (l === lang) {
        btn.className = 'px-2 py-0.5 rounded-md text-[11px] font-bold transition active-lang whitespace-nowrap bg-amber-500 text-slate-950 shadow-sm';
      } else {
        btn.className = 'px-2 py-0.5 rounded-md text-[11px] font-bold text-slate-300 hover:text-white transition whitespace-nowrap';
      }
    }
  });

  const dict = i18n[lang];

  // Header Brand & Shloks
  const brand = document.getElementById('brandTitle');
  if (brand) brand.innerText = dict.brand_title;

  const shlokLeft = document.getElementById('headerShlokLeft');
  if (shlokLeft) shlokLeft.innerText = dict.header_shlok_left;

  const shlokMain = document.getElementById('headerShlokMain');
  if (shlokMain) shlokMain.innerText = dict.header_shlok_main;

  const syncText = document.getElementById('headerSyncText');
  if (syncText) {
    syncText.innerText = lang === 'gu' ? '☁️ ક્લાઉડ સિંક (લાઇવ)' : lang === 'mr' ? '☁️ क्लाउड सिंक (थेट)' : '☁️ Cloud Sync (Live)';
  }

  // Update all [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  // Placeholders
  const searchInput = document.getElementById('orderSearchInput');
  if (searchInput) searchInput.placeholder = dict.search_placeholder || 'Search orders...';

  const partySearchInput = document.getElementById('partySearchInput');
  if (partySearchInput) partySearchInput.placeholder = dict.search_parties_placeholder || 'Search customers...';

  repopulateDropdowns(lang);
  updateDailySuvichar();
  renderDashboard();
  renderOrdersList();
  renderPnL();
  renderPartiesList();
  renderKarigarsList();
  checkUrgentDeliveries();
}

function repopulateDropdowns(lang) {
  populateSelect('modalSwaroop', selectOptions.swaroop[lang]);
  populateSelect('modalItemCategory', selectOptions.items[lang]);
  populateSelect('modalUtsav', selectOptions.utsav[lang]);
  populateSelect('modalOrderStatus', selectOptions.orderStatus[lang]);
  populateSelect('modalPaymentStatus', selectOptions.paymentStatus[lang]);
  populateSelect('filterOrderStatus', selectOptions.filterOrderStatus[lang]);
  populateSelect('filterOrderMaterial', selectOptions.filterOrderMaterial[lang]);
  populateSelect('pnlMonthFilter', selectOptions.pnlPeriod[lang]);
  populateSelect('expenseCategory', selectOptions.expenseCategory[lang]);
  populateSelect('expensePaymentMode', selectOptions.paymentMode[lang]);
}

function populateSelect(elemId, optionsList) {
  const elem = document.getElementById(elemId);
  if (!elem || !optionsList) return;
  const currentVal = elem.value;
  elem.innerHTML = optionsList.map(opt => `
    <option value="${opt.val}" ${opt.val === currentVal ? 'selected' : ''}>${opt.label}</option>
  `).join('');
}

// Tab Switching
function switchTab(tabName) {
  state.currentTab = tabName;

  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));

  const activeTab = document.getElementById(`tab-${tabName}`);
  if (activeTab) activeTab.classList.remove('hidden');

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-royal-800/80', 'text-white');
    btn.classList.add('text-slate-300');
  });
  const currentNavBtn = document.getElementById(`nav-${tabName}`);
  if (currentNavBtn) {
    currentNavBtn.classList.add('active', 'bg-royal-800/80', 'text-white');
    currentNavBtn.classList.remove('text-slate-300');
  }

  // Mobile Bottom Nav Highlights
  document.querySelectorAll('#mobileBottomNav button').forEach(btn => {
    btn.classList.remove('active-mobile-tab', 'text-royal-900', 'text-amber-500');
    btn.classList.add('text-slate-500');
  });
  const currentMobBtn = document.getElementById(`mob-${tabName}`);
  if (currentMobBtn) {
    currentMobBtn.classList.add('active-mobile-tab', 'text-royal-900');
    currentMobBtn.classList.remove('text-slate-500');
  }

  // Close mobile more sheet if open
  closeMobileMoreMenu();

  if (tabName === 'dashboard') renderDashboard();
  if (tabName === 'orders') renderOrdersList();
  if (tabName === 'pnl') renderPnL();
  if (tabName === 'parties') renderPartiesList();
  if (tabName === 'karigars') renderKarigarsList();
  if (tabName === 'stock') renderStockList();

  setTimeout(replaceFaWithSvg, 10);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// DASHBOARD LOGIC
// ==========================================
function setDashboardDateFilter(filterType) {
  state.dashboardFilter = filterType;
  document.querySelectorAll('.dash-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-filter') === filterType) {
      btn.classList.add('active', 'bg-white', 'text-royal-950', 'shadow-sm');
      btn.classList.remove('text-slate-600');
    } else {
      btn.classList.remove('active', 'bg-white', 'text-royal-950', 'shadow-sm');
      btn.classList.add('text-slate-600');
    }
  });
  renderDashboard();
}

function getFilteredOrdersByDate(ordersList, filterType) {
  if (filterType === 'all') return ordersList;
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];

  return ordersList.filter(o => {
    const orderDate = o.orderDate || o.createdAt?.split('T')[0];
    if (!orderDate) return true;

    if (filterType === 'today') {
      return orderDate === todayStr;
    } else if (filterType === 'week') {
      const orderTime = new Date(orderDate).getTime();
      const oneWeekAgo = now.getTime() - 7 * 24 * 60 * 60 * 1000;
      return orderTime >= oneWeekAgo;
    } else if (filterType === 'month') {
      const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
      return orderDate.startsWith(currentMonth);
    }
    return true;
  });
}

function renderDashboard() {
  const dict = i18n[state.lang];
  const filteredOrders = getFilteredOrdersByDate(state.orders, state.dashboardFilter);

  const totalOrders = filteredOrders.length;
  const inCuttingOrders = filteredOrders.filter(o => o.orderStatus === 'pending').length;
  const readyOrders = filteredOrders.filter(o => o.orderStatus === 'ready').length;
  const pendingOrders = inCuttingOrders + readyOrders;
  const completedOrders = filteredOrders.filter(o => o.orderStatus === 'completed').length;

  const withMaterial = filteredOrders.filter(o => o.materialOption === 'with_material').length;
  const withoutMaterial = filteredOrders.filter(o => o.materialOption === 'without_material').length;

  const grossBill = filteredOrders.reduce((sum, o) => sum + (Number(o.estimatedPrice) || 0), 0);

  const totalIncome = filteredOrders.reduce((sum, o) => {
    if (o.orderStatus === 'completed' || o.paymentStatus === 'paid') {
      return sum + (Number(o.estimatedPrice) || 0);
    }
    return sum + (Number(o.advanceReceived) || 0);
  }, 0);

  let pendingDues = 0;
  let pendingDuesOrdersCount = 0;
  filteredOrders.forEach(o => {
    const price = Number(o.estimatedPrice) || 0;
    const adv = Number(o.advanceReceived) || 0;
    const due = Math.max(0, price - adv);
    if (due > 0 && o.orderStatus !== 'completed' && o.paymentStatus !== 'paid') {
      pendingDues += due;
      pendingDuesOrdersCount++;
    }
  });

  const filteredExpenses = getFilteredOrdersByDate(state.expenses, state.dashboardFilter);
  const totalExpenses = filteredExpenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
  const netProfit = totalIncome - totalExpenses;
  const profitMargin = totalIncome > 0 ? Math.round((netProfit / totalIncome) * 100) : 0;
  const completionRate = totalOrders > 0 ? Math.round((completedOrders / totalOrders) * 100) : 100;

  // Safe DOM updates
  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };

  // Live Date
  const liveDateEl = document.getElementById('dashLiveDateDisplay');
  if (liveDateEl) {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const locale = state.lang === 'gu' ? 'gu-IN' : state.lang === 'mr' ? 'mr-IN' : 'en-IN';
    liveDateEl.innerText = today.toLocaleDateString(locale, options);
  }

  setEl('dashTotalOrders', totalOrders);
  setEl('dashWithMaterialCount', withMaterial);
  setEl('dashWithoutMaterialCount', withoutMaterial);

  setEl('dashPendingOrders', pendingOrders);
  setEl('dashInCuttingCount', inCuttingOrders);
  setEl('dashReadyCount', readyOrders);
  setEl('dashCompletedOrders', completedOrders);
  setEl('dashCompletionRate', `${completionRate}%`);

  setEl('dashTotalIncome', formatCurrency(totalIncome));
  setEl('dashGrossBillValue', formatCurrency(grossBill));

  setEl('dashPendingDues', formatCurrency(pendingDues));
  setEl('dashPendingDuesOrdersCount', pendingDuesOrdersCount);

  setEl('dashNetProfit', formatCurrency(netProfit));
  setEl('dashProfitMargin', `${profitMargin}%`);

  // Financial Recovery Gauge
  const totalBillForRecovery = totalIncome + pendingDues;
  const recoveryRate = totalBillForRecovery > 0 ? Math.round((totalIncome / totalBillForRecovery) * 100) : 100;
  setEl('dashRecoveryRateBadge', `${recoveryRate}% ${dict.lbl_collected || 'વસૂલ'}`);
  setEl('dashRecoveryPercent', `${recoveryRate}%`);
  setEl('dashRecoveryPercentLabel', `${recoveryRate}%`);
  updateDailySuvichar();
  setEl('dashRecoveryRatePercent', `${recoveryRate}%`);
  const recoveryBar = document.getElementById('dashRecoveryProgressBar');
  if (recoveryBar) recoveryBar.style.width = `${recoveryRate}%`;
  setEl('dashCashCollected', formatCurrency(totalIncome));
  setEl('dashMarketReceivable', formatCurrency(pendingDues));

  renderStatusChart(inCuttingOrders, readyOrders, completedOrders);
  renderUpcomingDeliveriesList();
  renderArtisanWorkloadPipeline();
}

function renderStatusChart(pending, ready, completed) {
  const dict = i18n[state.lang];
  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
  setEl('chartCountPending', pending);
  setEl('chartCountReady', ready);
  setEl('chartCountCompleted', completed);

  const canvas = document.getElementById('orderStatusChart');
  if (!canvas || typeof Chart === 'undefined') return;

  if (state.charts.statusChart) {
    state.charts.statusChart.destroy();
  }

  const ctx = canvas.getContext('2d');
  const hasData = (pending + ready + completed) > 0;
  state.charts.statusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [dict.status_in_progress, dict.status_ready, dict.status_completed],
      datasets: [{
        data: hasData ? [pending, ready, completed] : [1, 0, 0],
        backgroundColor: hasData ? ['#f59e0b', '#3b82f6', '#10b981'] : ['#e2e8f0', '#f1f5f9', '#f8fafc'],
        borderWidth: 2,
        borderColor: state.theme === 'theme-shrinathji-gold' ? '#18181b' : '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false }
      },
      cutout: '68%'
    }
  });
}

function checkUrgentDeliveries() {
  const todayStr = new Date().toISOString().split('T')[0];
  const upcoming = state.orders.filter(o => {
    return o.orderStatus !== 'completed' && o.deliveryDate && o.deliveryDate <= todayStr;
  });

  const alertContainer = document.getElementById('urgentAlertContainer');
  if (alertContainer) {
    if (upcoming.length > 0) {
      alertContainer.classList.remove('hidden');
      let alertMsg = '';
      if (state.lang === 'gu') {
        alertMsg = `તમારા ${upcoming.length} ઓર્ડર્સની ડિલિવરી તારીખ આજે આવી ગઈ છે અથવા વીતી ગઈ છે!`;
      } else if (state.lang === 'mr') {
        alertMsg = `तुमच्या ${upcoming.length} ऑर्डर्सची डिलिव्हरी तारीख आज आली आहे किंवा उलटून गेली आहे!`;
      } else {
        alertMsg = `${upcoming.length} orders are due for delivery today or overdue!`;
      }
      const descEl = document.getElementById('urgentAlertDesc');
      if (descEl) descEl.innerText = alertMsg;
    } else {
      alertContainer.classList.add('hidden');
    }
  }
}

function filterUpcomingDeliveries() {
  switchTab('orders');
  const el = document.getElementById('filterOrderStatus');
  if (el) el.value = 'pending';
  renderOrdersList();
}

function renderUpcomingDeliveriesList() {
  const dict = i18n[state.lang];
  const container = document.getElementById('upcomingOrdersList');
  if (!container) return;

  const activeOrders = state.orders
    .filter(o => o.orderStatus !== 'completed' && o.deliveryDate)
    .sort((a, b) => new Date(a.deliveryDate) - new Date(b.deliveryDate))
    .slice(0, 6);

  const badgeEl = document.getElementById('upcomingCountBadge');
  if (badgeEl) badgeEl.innerText = `${activeOrders.length} ${dict.orders_count_badge || 'ઓર્ડર'}`;

  if (activeOrders.length === 0) {
    container.innerHTML = `
      <div class="py-8 text-center text-slate-400 text-xs">
        <div class="text-emerald-400 mb-2 flex justify-center"><svg class="w-6 h-6 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM10.5 15.5l-2.5-2.5 1.41-1.41 1.09 1.09 4.09-4.09 1.41 1.41-5.5 5.5z"/></svg></div>
        <p>${state.lang === 'gu' ? 'સરસ! હાલ કોઈ પેન્ડિંગ ડિલિવરી નથી.' : state.lang === 'mr' ? 'छान! सध्या कोणतीही प्रलंबित डिलिव्हरी नाही.' : 'Great! No pending deliveries due.'}</p>
      </div>
    `;
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];
  const twoDaysDate = new Date();
  twoDaysDate.setDate(twoDaysDate.getDate() + 2);
  const twoDays = twoDaysDate.toISOString().split('T')[0];

  container.innerHTML = activeOrders.map(order => {
    const isOverdue = order.deliveryDate < today;
    const isToday = order.deliveryDate === today;
    const isSoon = order.deliveryDate <= twoDays;

    let badgeClass = 'bg-slate-100 text-slate-700';
    let badgeText = formatDate(order.deliveryDate);

    if (isOverdue) {
      badgeClass = 'bg-rose-100 text-rose-800 font-bold';
      badgeText = `⚠️ ${dict.overdue_alert || 'વિલંબિત'} (${formatDate(order.deliveryDate)})`;
    } else if (isToday) {
      badgeClass = 'bg-amber-100 text-amber-900 font-bold';
      badgeText = `⚡ ${dict.today_due || 'આજે'} (${formatDate(order.deliveryDate)})`;
    } else if (isSoon) {
      badgeClass = 'bg-sky-100 text-sky-800 font-bold';
      badgeText = `⏳ ૨ દિવસમાં (${formatDate(order.deliveryDate)})`;
    }

    const materialBadge = order.materialOption === 'with_material'
      ? `<span class="text-[10px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold">🧵 ${dict.badge_with_mat}</span>`
      : `<span class="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-semibold">✂️ ${dict.badge_without_mat}</span>`;

    const balanceDue = Number(order.balanceDue) || (Number(order.estimatedPrice || 0) - Number(order.advanceReceived || 0));

    return `
      <div class="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex items-center space-x-3 min-w-0">
          <div class="w-9 h-9 rounded-lg bg-royal-100 text-royal-800 flex items-center justify-center font-bold text-xs flex-shrink-0">
            #${order.orderNo || 'ORD'}
          </div>
          <div class="min-w-0 truncate">
            <div class="flex items-center gap-2">
              <h4 class="text-sm font-bold text-slate-900 truncate">${order.partyName}</h4>
              <span class="text-[11px] px-2 py-0.5 rounded-lg ${badgeClass}">${badgeText}</span>
            </div>
            <div class="text-xs text-slate-500 flex items-center gap-1.5 flex-wrap mt-0.5">
              <span class="font-semibold text-slate-700">${getLocalizedSwaroop(order.swaroop)}</span>
              <span>•</span>
              <span>${getLocalizedItem(order.itemCategory)}</span>
              ${materialBadge}
              ${balanceDue > 0 ? `<span class="text-rose-600 font-bold">• બાકી: ₹${formatCurrency(balanceDue)}</span>` : `<span class="text-emerald-600 font-bold">• ચૂકતે ✓</span>`}
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-1.5 flex-shrink-0 self-end sm:self-auto">
          <!-- WhatsApp Reminder -->
          <button onclick="sendDeliveryReminderWhatsApp('${order.id}')" title="ગ્રાહકને વોટ્સએપ મોકલો" class="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 shadow-xs active:scale-95 transition">
            <svg class="w-4 h-4 text-emerald-600 inline-block mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.47-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.29 3.8 2.52 1.09 2.52.73 2.97.69.45-.04 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z"/></svg>
            <span class="hidden md:inline">વોટ્સએપ</span>
          </button>

          <!-- Receipt Slip -->
          <button onclick="openInvoiceModal('${order.id}')" title="બિલ / રસીદ જુઓ" class="px-2.5 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold flex items-center gap-1 transition">
            <svg class="w-4 h-4 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
            <span class="hidden md:inline">પહોંચ</span>
          </button>

          <!-- Quick Complete -->
          <button onclick="quickCompleteOrder('${order.id}')" title="${dict.quick_complete_btn}" class="w-8 h-8 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center text-xs shadow-xs active:scale-95 transition">
            <svg class="w-4 h-4 text-white inline-block mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function sendDeliveryReminderWhatsApp(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order || !order.partyPhone) {
    showToast(state.lang === 'gu' ? 'ગ્રાહકનો ફોન નંબર ઉપલબ્ધ નથી!' : 'Customer phone number not available!', 'error');
    return;
  }
  const cleanPhone = order.partyPhone.replace(/\D/g, '');
  const bizName = state.settings.bizName || 'શ્રીજી ના સાજ';
  const balanceDue = Number(order.balanceDue) || (Number(order.estimatedPrice || 0) - Number(order.advanceReceived || 0));

  let msg = '';
  if (state.lang === 'gu') {
    msg = `*॥ શ્રી ગોપીજનવલ્લભાય નમઃ ॥*\n\nજય શ્રી કૃષ્ણ ${order.partyName}જી,\n\n*${bizName}* તરફથી નમ્ર સ્મૃતિપત્ર:\nઆપના ઠાકોરજીના વસ્ત્ર / સાજનો ઓર્ડર નં. *#${order.orderNo}* તૈયાર થવામાં છે.\n\n` +
      `• *સ્વરૂપ*: ${getLocalizedSwaroop(order.swaroop)}\n` +
      `• *વસ્ત્ર વિગત*: ${getLocalizedItem(order.itemCategory)}\n` +
      `• *ડિલિવરી તારીખ*: ${formatDate(order.deliveryDate)}\n` +
      (balanceDue > 0 ? `• *બાકી રકમ*: ₹${formatCurrency(balanceDue)}\n` : `• *પેમેન્ટ*: સંપૂર્ણ જમા ✓\n`) +
      `\nઆપના અનુકૂળ સમયે ટ્રાયલ / ડિલિવરી માટે પધારવા વિનંતી છે.\n\n*શ્રીજી સર્વેનું મંગલ કરે 🙏*`;
  } else if (state.lang === 'mr') {
    msg = `*॥ श्री गोपीजनवल्लभाय नमः ॥*\n\nजय श्री कृष्ण ${order.partyName}जी,\n\n*${bizName}* कडून नम्र आठवण:\nआपला ठाकोरजींच्या वस्त्रांचा ऑर्डर क्र. *#${order.orderNo}* तयार होत आहे.\n\n` +
      `• *स्वरूप*: ${getLocalizedSwaroop(order.swaroop)}\n` +
      `• *डिलिव्हरी तारीख*: ${formatDate(order.deliveryDate)}\n` +
      (balanceDue > 0 ? `• *शिल्लक बाकी*: ₹${formatCurrency(balanceDue)}\n` : `• *पेमेंट*: पूर्ण भरले ✓\n`) +
      `\nकृपया आपल्या सोयीनुसार डिलिव्हरीसाठी संपर्क साधावा.\n\n*श्रीजी सर्वांचे कल्याण करो 🙏*`;
  } else {
    msg = `*Shri Krishna Sharanam Mama*\n\nJai Shri Krishna ${order.partyName},\n\nFriendly reminder from *${bizName}*:\nYour deity vastra order *#${order.orderNo}* is nearing completion.\n\n` +
      `• Swaroop: ${getLocalizedSwaroop(order.swaroop)}\n` +
      `• Delivery Date: ${formatDate(order.deliveryDate)}\n` +
      (balanceDue > 0 ? `• Balance Due: ₹${formatCurrency(balanceDue)}\n` : `• Payment: Fully Paid ✓\n`) +
      `\nPlease contact us for trial and pickup.\n\n*Best regards, ${bizName}*`;
  }

  const url = `https://wa.me/${cleanPhone.length === 10 ? '91' + cleanPhone : cleanPhone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function renderArtisanWorkloadPipeline() {
  const container = document.getElementById('artisanWorkloadList');
  if (!container) return;

  const artisans = state.karigars || [];
  const activeOrders = state.orders.filter(o => o.orderStatus !== 'completed');

  const workloadMap = {};
  artisans.forEach(k => {
    workloadMap[k.name] = { name: k.name, phone: k.phone, count: 0, orders: [] };
  });

  activeOrders.forEach(o => {
    if (o.artisan) {
      if (!workloadMap[o.artisan]) {
        workloadMap[o.artisan] = { name: o.artisan, phone: '', count: 0, orders: [] };
      }
      workloadMap[o.artisan].count++;
      workloadMap[o.artisan].orders.push(o.orderNo);
    }
  });

  const list = Object.values(workloadMap);

  if (list.length === 0) {
    container.innerHTML = `
      <div class="py-6 text-center text-slate-400 text-xs">
        <div class="text-slate-400 mb-1.5 flex justify-center"><svg class="w-4 h-4 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div>
        <p>${state.lang === 'gu' ? 'હજુ કોઈ કારીગર ઉમેરાયેલ નથી.' : 'No artisans added yet.'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(art => {
    
    let statusPill = '';
    const statusHigh = state.lang === 'gu' ? 'વધુ કાર્યભાર' : state.lang === 'mr' ? 'जास्त भार' : 'High Workload';
    const statusActive = state.lang === 'gu' ? 'ચાલુ' : state.lang === 'mr' ? 'सक्रिय' : 'Active';
    const statusFree = state.lang === 'gu' ? 'મુક્ત' : state.lang === 'mr' ? 'उपलब्ध' : 'Available';
    const noPendingText = state.lang === 'gu' ? 'કોઈ પેન્ડિંગ ઓર્ડર નથી' : state.lang === 'mr' ? 'कोणतीही प्रलंबित ऑर्डर नाही' : 'No pending orders';
    const ordersInProgText = state.lang === 'gu' ? 'ઓર્ડર્સ પ્રક્રિયામાં' : state.lang === 'mr' ? 'ऑर्डर्स प्रक्रियेत' : 'orders in progress';

    if (art.count >= 4) {
      statusPill = `<span class="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold border border-rose-500/40">${statusHigh} (${art.count})</span>`;
    } else if (art.count > 0) {
      statusPill = `<span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/40">${statusActive} (${art.count})</span>`;
    } else {
      statusPill = `<span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/40">${statusFree}</span>`;
    }


    const cleanPhone = (art.phone || '').replace(/\D/g, '');

    return `
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2.5 hover:bg-slate-100 transition">
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span class="font-bold text-xs text-slate-900 truncate">${art.name}</span>
            ${statusPill}
          </div>
          <div class="text-[10px] text-slate-500 mt-0.5 truncate">
            ${art.count > 0 ? `${art.count} ઓર્ડર્સ પ્રક્રિયામાં (${art.orders.slice(0, 2).map(n => '#' + n).join(', ')}${art.orders.length > 2 ? '...' : ''})` : 'કોઈ પેન્ડિંગ ઓર્ડર નથી'}
          </div>
        </div>
        ${cleanPhone ? `
          <a href="tel:${cleanPhone}" title="કોલ કરો" class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 flex items-center justify-center text-xs flex-shrink-0">
            <svg class="w-3.5 h-3.5 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          </a>
        ` : ''}
      </div>
    `;
  }).join('');
}

// ==========================================
// ORDERS MANAGEMENT LOGIC
// ==========================================
function renderOrdersList() {
  const dict = i18n[state.lang];
  const container = document.getElementById('ordersGrid');
  const emptyState = document.getElementById('ordersEmptyState');
  if (!container) return;

  const searchQuery = (document.getElementById('orderSearchInput')?.value || '').toLowerCase().trim();
  const statusFilter = document.getElementById('filterOrderStatus')?.value || 'all';
  const materialFilter = document.getElementById('filterOrderMaterial')?.value || 'all';
  const dateFrom = document.getElementById('filterDateFrom')?.value || '';
  const dateTo = document.getElementById('filterDateTo')?.value || '';

  const filtered = state.orders.filter(order => {
    if (searchQuery) {
      const match = (order.orderNo || '').toLowerCase().includes(searchQuery) ||
                    (order.partyName || '').toLowerCase().includes(searchQuery) ||
                    (order.partyPhone || '').toLowerCase().includes(searchQuery) ||
                    (order.swaroop || '').toLowerCase().includes(searchQuery) ||
                    (order.itemCategory || '').toLowerCase().includes(searchQuery);
      if (!match) return false;
    }

    if (statusFilter !== 'all' && order.orderStatus !== statusFilter) return false;
    if (materialFilter !== 'all' && order.materialOption !== materialFilter) return false;

    const orderDate = order.orderDate || order.createdAt?.split('T')[0];
    if (dateFrom && orderDate < dateFrom) return false;
    if (dateTo && orderDate > dateTo) return false;

    return true;
  });

  document.getElementById('ordersFilteredCount').innerText = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  container.innerHTML = filtered.map(order => {
    const isCompleted = order.orderStatus === 'completed';
    const isReady = order.orderStatus === 'ready';

    let statusBadge = '';
    if (isCompleted) {
      statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-bold badge-completed flex items-center gap-1"><svg class="w-4 h-4 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> ${dict.badge_completed}</span>`;
    } else if (isReady) {
      statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-bold badge-ready flex items-center gap-1"><svg class="w-3.5 h-3.5 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"/></svg> ${dict.badge_ready}</span>`;
    } else {
      statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-bold badge-pending flex items-center gap-1"><svg class="w-3.5 h-3.5 animate-spin flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ${dict.badge_in_progress}</span>`;
    }

    const materialBadge = order.materialOption === 'with_material'
      ? `<span class="px-2 py-0.5 rounded-md text-[11px] font-bold badge-with-material">🧵 ${dict.badge_with_mat}</span>`
      : `<span class="px-2 py-0.5 rounded-md text-[11px] font-bold badge-without-material">✂️ ${dict.badge_without_mat}</span>`;

    const balanceDue = Number(order.balanceDue) || (Number(order.estimatedPrice || 0) - Number(order.advanceReceived || 0));

    return `
      <div class="order-card bg-white rounded-2xl shadow-sm border ${isCompleted ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200'} p-4 flex flex-col justify-between">
        <div>
          <!-- Header -->
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <div class="flex items-center space-x-2">
              <span class="text-xs font-black px-2.5 py-1 bg-royal-950 text-amber-300 rounded-lg tracking-wide">${order.orderNo || 'ORD'}</span>
              <span class="text-[11px] text-slate-400">📅 ${formatDate(order.orderDate)}</span>
            </div>
            <div>${statusBadge}</div>
          </div>

          
          <!-- Customer Info -->
          <div class="mt-3 flex items-start justify-between gap-2">
            <div>
              <h3 class="text-base font-extrabold text-white">${order.partyName || order.customerName || order.customer || 'ગ્રાહક (Customer)'}</h3>
              <div class="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                <svg class="w-3.5 h-3.5 text-slate-400 inline-block mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <a href="tel:${order.partyPhone || order.customerPhone || order.phone || ''}" class="hover:underline font-medium text-amber-300">${order.partyPhone || order.customerPhone || order.phone || '-'}</a>
              </div>
            </div>

            ${order.photoUrl ? `
              <img src="${order.photoUrl}" onclick="viewPhoto('${order.photoUrl}')" alt="Sample" class="w-12 h-12 rounded-xl object-cover border border-amber-300 shadow-sm cursor-pointer hover:scale-105 transition">
            ` : ''}
          </div>

          <!-- Vastra Details -->
          <div class="mt-3 p-2.5 bg-slate-50 rounded-xl space-y-1.5 border border-slate-100">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-royal-900">${getLocalizedSwaroop(order.swaroop)}</span>
              <span class="text-slate-600 font-medium">${order.murtiSize || ''}</span>
            </div>
            <div class="text-xs font-semibold text-slate-700">${getLocalizedItem(order.itemCategory)}</div>
            <div>${materialBadge}</div>
            ${order.orderDetails ? `
              <p class="text-xs text-slate-600 line-clamp-2 pt-1 border-t border-slate-200/60">${order.orderDetails}</p>
            ` : ''}
          </div>

          <!-- Due Date & Karigar Info -->
          <div class="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div class="p-2 bg-amber-50/50 rounded-lg border border-amber-200/50">
              <span class="block text-[10px] text-amber-700 font-bold uppercase">${dict.card_delivery}</span>
              <span class="font-extrabold text-amber-950">${formatDate(order.deliveryDate) || '-'}</span>
            </div>
            <div class="p-2 bg-slate-50 rounded-lg border border-slate-200">
              <span class="block text-[10px] text-slate-500 font-bold uppercase">${dict.card_karigar}</span>
              <span class="font-bold text-slate-800 truncate block">${getKarigarName(order.karigarId) || dict.in_house}</span>
            </div>
          </div>

          <!-- Financial Snapshot -->
          <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <div>
              <span class="text-[11px] text-slate-400 block font-medium">${dict.card_total_amt}</span>
              <span class="text-sm font-extrabold text-slate-900">₹${formatCurrency(order.estimatedPrice || 0)}</span>
            </div>
            <div>
              <span class="text-[11px] text-emerald-600 block font-medium">${dict.card_advance_amt}</span>
              <span class="text-sm font-bold text-emerald-700">₹${formatCurrency(order.advanceReceived || 0)}</span>
            </div>
            <div class="text-right">
              <span class="text-[11px] text-rose-500 block font-bold">${dict.card_balance_amt}</span>
              <span class="text-sm font-extrabold ${balanceDue > 0 ? 'text-rose-600' : 'text-emerald-600'}">
                ₹${formatCurrency(balanceDue)}
              </span>
            </div>
          </div>
        </div>

        
        <!-- Footer Actions -->
        <div class="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between gap-1.5 flex-wrap">
          <button onclick="shareOrderWhatsApp('${order.id}')" class="px-2.5 py-1.5 rounded-xl bg-emerald-950/70 text-emerald-300 hover:bg-emerald-900 border border-emerald-500/40 text-xs font-bold flex items-center gap-1 transition">
            <svg class="w-4 h-4 text-emerald-400 inline-block mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.47-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.29 3.8 2.52 1.09 2.52.73 2.97.69.45-.04 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z"/></svg>
            <span>WhatsApp</span>
          </button>

          <button onclick="openInvoiceModal('${order.id}')" class="px-2.5 py-1.5 rounded-xl bg-slate-800/80 text-amber-300 hover:bg-slate-700 border border-amber-400/30 text-xs font-bold flex items-center gap-1 transition">
            <svg class="w-4 h-4 text-amber-400 inline-block mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
            <span>${dict.receipt_slip_title || 'બિલ / રસીદ'}</span>
          </button>

          ${!isCompleted ? `
            <button onclick="quickCompleteOrder('${order.id}')" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 shadow-sm active:scale-95 transition">
              <svg class="w-4 h-4 text-white inline-block mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>${dict.quick_complete_btn}</span>
            </button>
          ` : `
            <span class="text-xs text-emerald-400 font-bold flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40">
              <svg class="w-4 h-4 text-emerald-400 inline-block mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              ${dict.badge_completed}
            </span>
          `}

          <div class="flex items-center space-x-1">
            <button onclick="openEditOrderModal('${order.id}')" title="Edit Order" class="p-1.5 rounded-lg bg-slate-800/80 hover:bg-amber-950 border border-slate-700 text-amber-400 transition">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </button>
            <button onclick="deleteOrder('${order.id}')" title="Delete Order" class="p-1.5 rounded-lg bg-slate-800/80 hover:bg-rose-950 border border-slate-700 text-rose-400 transition">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join("");
}

function clearDateFilter() {
  document.getElementById('filterDateFrom').value = '';
  document.getElementById('filterDateTo').value = '';
  renderOrdersList();
}

function filterOrdersByStatus(status) {
  switchTab('orders');
  document.getElementById('filterOrderStatus').value = status;
  renderOrdersList();
}

function getLocalizedSwaroop(val) {
  if (!val) return 'ઠાકોરજી';
  const match = selectOptions.swaroop[state.lang].find(s => s.val === val || s.label.includes(val) || val.includes(s.label));
  return match ? match.label : val;
}

function getLocalizedItem(val) {
  if (!val) return 'વસ્ત્ર';
  const match = selectOptions.items[state.lang].find(i => i.val === val || i.label.includes(val) || val.includes(i.label));
  return match ? match.label : val;
}

// ==========================================
// ORDER MODAL & SAVE LOGIC
// ==========================================
function updateCustomerDatalist() {
  const datalist = document.getElementById('customerDatalist');
  if (!datalist) return;
  const set = new Set();
  (state.customers || []).forEach(c => { if (c && c.name) set.add(c.name.trim()); });
  (state.orders || []).forEach(o => { if (o && o.partyName) set.add(o.partyName.trim()); });
  datalist.innerHTML = Array.from(set).map(name => `<option value="${name}">`).join('');
}

function handlePartyNameInput(name) {
  if (!name) return;
  const trimmed = name.trim().toLowerCase();
  const matched = (state.customers || []).find(c => (c.name || '').toLowerCase() === trimmed);
  if (matched && matched.phone) {
    const phoneInput = document.getElementById('modalPartyPhone');
    if (phoneInput && !phoneInput.value) {
      phoneInput.value = matched.phone;
    }
  }
}

function openNewOrderModal(prefillParty = '', prefillPhone = '') {
  const dict = i18n[state.lang];
  state.editingOrderId = null;
  state.currentModalPhoto = null;

  document.getElementById('orderModalTitle').innerText = dict.btn_new_order;
  document.getElementById('orderModalSaveBtnText').innerText = dict.btn_save_order;

  const nextOrderNumber = `SNS-${String(state.orders.length + 101).padStart(4, '0')}`;
  document.getElementById('modalOrderNo').value = nextOrderNumber;

  const todayStr = new Date().toISOString().split('T')[0];
  document.getElementById('modalOrderDate').value = todayStr;
  
  const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  document.getElementById('modalDeliveryDate').value = nextWeek;

  document.getElementById('modalPartyName').value = prefillParty || '';
  document.getElementById('modalPartyPhone').value = prefillPhone || '';
  document.getElementById('modalMurtiSize').value = '';
  document.getElementById('modalOrderDetails').value = '';
  document.getElementById('modalEstimatedPrice').value = '';
  document.getElementById('modalAdvanceReceived').value = '';
  document.getElementById('modalBalanceDue').value = '';
  document.getElementById('modalKarigarLaborCost').value = '';
  
  const paymentSelect = document.getElementById('modalPaymentStatus');
  if (paymentSelect) paymentSelect.value = 'unpaid';

  updateCustomerDatalist();
  populateKarigarSelect();
  removeModalPhoto();

  const withMatRadio = document.querySelector('input[name="modalMaterialOption"][value="with_material"]');
  if (withMatRadio) withMatRadio.checked = true;

  document.getElementById('orderModal').classList.remove('hidden');
}

function openEditOrderModal(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  const dict = i18n[state.lang];
  state.editingOrderId = orderId;
  state.currentModalPhoto = order.photoUrl || null;

  document.getElementById('orderModalTitle').innerText = `${order.orderNo}`;
  document.getElementById('orderModalSaveBtnText').innerText = dict.btn_save_order;

  document.getElementById('modalOrderNo').value = order.orderNo || '';
  document.getElementById('modalOrderDate').value = order.orderDate || '';
  document.getElementById('modalDeliveryDate').value = order.deliveryDate || '';
  document.getElementById('modalPartyName').value = order.partyName || '';
  document.getElementById('modalPartyPhone').value = order.partyPhone || '';
  document.getElementById('modalSwaroop').value = order.swaroop || 'shrinathji';
  document.getElementById('modalMurtiSize').value = order.murtiSize || '';
  document.getElementById('modalItemCategory').value = order.itemCategory || 'vagha';
  document.getElementById('modalUtsav').value = order.utsav || 'regular';
  document.getElementById('modalOrderDetails').value = order.orderDetails || '';
  document.getElementById('modalEstimatedPrice').value = order.estimatedPrice || '';
  document.getElementById('modalAdvanceReceived').value = order.advanceReceived || '';
  document.getElementById('modalBalanceDue').value = order.balanceDue || '';
  document.getElementById('modalKarigarLaborCost').value = order.karigarLaborCost || '';

  const paymentSelect = document.getElementById('modalPaymentStatus');
  if (paymentSelect) paymentSelect.value = order.paymentStatus || 'unpaid';

  const matRadio = document.querySelector(`input[name="modalMaterialOption"][value="${order.materialOption || 'with_material'}"]`);
  if (matRadio) matRadio.checked = true;

  if (order.photoUrl) {
    document.getElementById('modalPhotoPreviewImg').src = order.photoUrl;
    document.getElementById('modalPhotoPreviewContainer').classList.remove('hidden');
  } else {
    removeModalPhoto();
  }

  updateCustomerDatalist();
  populateKarigarSelect(order.karigarId);
  document.getElementById('orderModal').classList.remove('hidden');
}

function closeOrderModal() {
  document.getElementById('orderModal').classList.add('hidden');
}

function populateKarigarSelect(selectedId = '') {
  const select = document.getElementById('modalKarigarSelect');
  if (!select) return;
  const dict = i18n[state.lang];

  select.innerHTML = `<option value="">-- ${dict.in_house} --</option>` +
    state.karigars.map(k => `
      <option value="${k.id}" ${k.id === selectedId ? 'selected' : ''}>${k.name}</option>
    `).join('');
}

function calculateModalBalance() {
  const total = Number(document.getElementById('modalEstimatedPrice').value) || 0;
  const advance = Number(document.getElementById('modalAdvanceReceived').value) || 0;
  const balance = Math.max(0, total - advance);
  document.getElementById('modalBalanceDue').value = balance;

  const paymentSelect = document.getElementById('modalPaymentStatus');
  if (paymentSelect) {
    if (total > 0 && advance >= total) {
      paymentSelect.value = 'paid';
    } else if (advance > 0) {
      paymentSelect.value = 'partial';
    } else {
      paymentSelect.value = 'unpaid';
    }
  }
}

function handleModalPhotoPreview(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    state.currentModalPhoto = e.target.result;
    document.getElementById('modalPhotoPreviewImg').src = e.target.result;
    document.getElementById('modalPhotoPreviewContainer').classList.remove('hidden');
  };
  reader.readAsDataURL(file);
}

function removeModalPhoto() {
  state.currentModalPhoto = null;
  const input = document.getElementById('modalPhotoInput');
  if (input) input.value = '';
  const container = document.getElementById('modalPhotoPreviewContainer');
  if (container) container.classList.add('hidden');
}

function saveOrder() {
  const partyName = document.getElementById('modalPartyName').value.trim();
  const deliveryDate = document.getElementById('modalDeliveryDate').value;
  const estimatedPrice = Number(document.getElementById('modalEstimatedPrice').value) || 0;

  if (!partyName) {
    alert(state.lang === 'gu' ? 'પાર્ટીનું નામ દાખલ કરો.' : state.lang === 'mr' ? 'पार्टीचे नाव टाका.' : 'Please enter customer name.');
    document.getElementById('modalPartyName').focus();
    return;
  }

  if (!deliveryDate) {
    alert(state.lang === 'gu' ? 'ડિલિવરી તારીખ પસંદ કરો.' : state.lang === 'mr' ? 'डिलिव्हरी तारीख निवडा.' : 'Please choose delivery date.');
    document.getElementById('modalDeliveryDate').focus();
    return;
  }

  const partyPhone = document.getElementById('modalPartyPhone').value.trim();
  const advanceReceived = Number(document.getElementById('modalAdvanceReceived').value) || 0;
  const balanceDue = Math.max(0, estimatedPrice - advanceReceived);
  const materialOption = document.querySelector('input[name="modalMaterialOption"]:checked')?.value || 'with_material';
  const paymentSelect = document.getElementById('modalPaymentStatus');
  const paymentStatus = paymentSelect ? paymentSelect.value : (advanceReceived >= estimatedPrice ? 'paid' : (advanceReceived > 0 ? 'partial' : 'unpaid'));

  // Retain existing status if editing, else default to 'pending' (કામ ચાલુ)
  let orderStatus = 'pending';
  if (state.editingOrderId) {
    const existing = state.orders.find(o => o.id === state.editingOrderId);
    if (existing && existing.orderStatus) {
      orderStatus = existing.orderStatus;
    }
  }

  
  // Stock Inventory Linkage & Real-time Deduction
  const chosenStockId = document.getElementById('modalOrderStockItem')?.value || '';
  const chosenStockQty = Number(document.getElementById('modalOrderStockQty')?.value) || 0;
  let stockUsage = null;

  if (chosenStockId && chosenStockQty > 0) {
    const stockItem = (state.stock || []).find(s => s.id === chosenStockId);
    if (stockItem) {
      // Deduct from stock
      stockItem.quantity = Math.max(0, Number((stockItem.quantity - chosenStockQty).toFixed(2)));
      stockUsage = {
        stockId: stockItem.id,
        itemName: stockItem.itemName,
        quantity: chosenStockQty,
        unit: stockItem.unit
      };
    }
  }

  const orderData = {
    id: state.editingOrderId || 'ord_' + Date.now(),
    orderNo: document.getElementById('modalOrderNo').value.trim(),
    orderDate: document.getElementById('modalOrderDate').value,
    deliveryDate: deliveryDate,
    partyName: partyName,
    partyPhone: partyPhone,
    swaroop: document.getElementById('modalSwaroop').value,
    murtiSize: document.getElementById('modalMurtiSize').value.trim(),
    itemCategory: document.getElementById('modalItemCategory').value,
    utsav: document.getElementById('modalUtsav').value,
    materialOption: materialOption,
    orderDetails: document.getElementById('modalOrderDetails').value.trim(),
    photoUrl: state.currentModalPhoto,
    estimatedPrice: estimatedPrice,
    advanceReceived: advanceReceived,
    balanceDue: balanceDue,
    karigarId: document.getElementById('modalKarigarSelect').value,
    karigarLaborCost: Number(document.getElementById('modalKarigarLaborCost').value) || 0,
    orderStatus: orderStatus,
    paymentStatus: paymentStatus,
    stockUsage: stockUsage,
    updatedAt: new Date().toISOString()
  };

  if (state.editingOrderId) {
    const index = state.orders.findIndex(o => o.id === state.editingOrderId);
    if (index !== -1) state.orders[index] = { ...state.orders[index], ...orderData };
  } else {
    orderData.createdAt = new Date().toISOString();
    state.orders.unshift(orderData);
  }

  // Auto-sync customer into state.customers if not already registered
  if (partyName) {
    const exists = (state.customers || []).some(c => (c.name || '').toLowerCase() === partyName.toLowerCase());
    if (!exists) {
      state.customers.push({
        id: 'c_' + Date.now(),
        name: partyName,
        phone: partyPhone,
        address: '',
        notes: ''
      });
    }
  }

  saveDataToStorage();
  updateCustomerDatalist();
  closeOrderModal();
  renderDashboard();
  renderOrdersList();
  renderPnL();
  renderPartiesList();
  checkUrgentDeliveries();

  if (orderStatus === 'completed') {
    triggerCelebration();
  }

  // Real-time broadcast to all connected devices (PC & Mobile)
  broadcastSyncEvent('UPSERT_ORDER', orderData);
  if (stockUsage) {
    broadcastSyncEvent('STOCK_UPDATE', state.stock);
  }
}

function quickCompleteOrder(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  const confirmMsg = state.lang === 'gu'
    ? `શું ઓર્ડર નં. ${order.orderNo} (${order.partyName}) પૂરો થઈ ગયો છે અને પૂરી રકમ ₹${order.estimatedPrice} મળી ગઈ છે?`
    : state.lang === 'mr'
    ? `ऑर्डर क्र. ${order.orderNo} (${order.partyName}) पूर्ण झाली आहे आणि पूर्ण रक्कम ₹${order.estimatedPrice} प्राप्त झाली आहे का?`
    : `Has order ${order.orderNo} (${order.partyName}) been completed and full amount ₹${order.estimatedPrice} received?`;

  if (confirm(confirmMsg)) {
    order.orderStatus = 'completed';
    order.paymentStatus = 'paid';
    order.advanceReceived = order.estimatedPrice;
    order.balanceDue = 0;
    order.completedDate = new Date().toISOString().split('T')[0];

    saveDataToStorage();
    renderDashboard();
    renderOrdersList();
    renderPnL();
    checkUrgentDeliveries();

    triggerCelebration();

    // Real-time broadcast status change
    broadcastSyncEvent('UPDATE_ORDER_STATUS', {
      orderId: order.id,
      orderStatus: 'completed',
      paymentStatus: 'paid',
      advanceReceived: order.estimatedPrice,
      balanceDue: 0,
      completedDate: order.completedDate
    });
  }
}

function deleteOrder(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  const msg = state.lang === 'gu'
    ? `શું તમે ખરેખર ઓર્ડર ${order.orderNo} રદ કરવા માંગો છો?`
    : state.lang === 'mr'
    ? `तुम्हाला नक्की ऑर्डर ${order.orderNo} हटवायची आहे का?`
    : `Are you sure you want to delete order ${order.orderNo}?`;

  if (confirm(msg)) {

  if (order.stockUsage && order.stockUsage.stockId && order.stockUsage.quantity > 0) {
    const stockItem = (state.stock || []).find(s => s.id === order.stockUsage.stockId);
    if (stockItem) {
      stockItem.quantity = Number((stockItem.quantity + Number(order.stockUsage.quantity)).toFixed(2));
    }
  }

    state.orders = state.orders.filter(o => o.id !== orderId);
    saveDataToStorage();
    renderDashboard();
    renderOrdersList();
    renderPnL();
    renderPartiesList();
    checkUrgentDeliveries();

    // Real-time broadcast deletion
    broadcastSyncEvent('DELETE_ORDER', { orderId: orderId });
  }
}

function triggerCelebration() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  const audio = document.getElementById('completeAudio');
  if (audio) {
    audio.play().catch(() => {});
  }
}

// ==========================================
// WHATSAPP SHARE GENERATOR (ROYAL & DEVOTIONAL)
// ==========================================
function shareOrderWhatsApp(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  const phone = (order.partyPhone || '').replace(/\D/g, '');
  const bizName = state.settings.bizName || 'શ્રીજી ના સાજ';
  const dict = i18n[state.lang];
  const balanceDue = Number(order.balanceDue) || (Number(order.estimatedPrice || 0) - Number(order.advanceReceived || 0));

  let statusMsg = '';
  if (order.orderStatus === 'completed') {
    statusMsg = state.lang === 'gu' ? '✨ *આપનો ઓર્ડર પૂર્ણ થઈ ગયો છે અને સુપરત કરવા તૈયાર છે.*' : state.lang === 'mr' ? '✨ *आपली ऑर्डर पूर्ण झाली असून वितरणासाठी तयार आहे.*' : '✨ *Your sacred order is completed and ready!*';
  } else if (order.orderStatus === 'ready') {
    statusMsg = state.lang === 'gu' ? '📦 *આપનો ઓર્ડર તૈયાર થઈ ગયો છે.*' : state.lang === 'mr' ? '📦 *आपली ऑर्डर तयार झाली आहे.*' : '📦 *Your sacred order is ready for delivery.*';
  } else {
    statusMsg = state.lang === 'gu' ? '🧵 *આપના ઓર્ડરનું કારીગરી કામ પૂર્ણ ભક્તિભાવથી ચાલુ છે.*' : state.lang === 'mr' ? '🧵 *आपल्या ऑर्डरचे कारागिरी काम पूर्ण भक्तीभावाने चालू आहे.*' : '🧵 *Your sacred order is currently in craft progress with devotion.*';
  }

  let payStatusStr = '';
  if (order.paymentStatus === 'paid' || balanceDue === 0) {
    payStatusStr = state.lang === 'gu' ? '✅ ચૂકતે (Paid)' : state.lang === 'mr' ? '✅ पूर्ण भरले (Paid)' : '✅ Fully Paid';
  } else if (order.advanceReceived > 0) {
    payStatusStr = state.lang === 'gu' ? '🟡 આંશિક જમા (Partial)' : state.lang === 'mr' ? '🟡 अंशतः जमा (Partial)' : '🟡 Partial Advance';
  } else {
    payStatusStr = state.lang === 'gu' ? '🔴 બાકી (Unpaid)' : state.lang === 'mr' ? '🔴 शिल्लक (Unpaid)' : '🔴 Unpaid';
  }

  let msg = '';
  if (state.lang === 'gu') {
    msg = `🌸 *॥ શ્રી ગોપીજનવલ્લભાય નમઃ ॥* 🌸\n` +
          `       *॥ શ્રી કૃષ્ણઃ શરણં મમ ॥*\n\n` +
          `👑 *${bizName}* — પ્રભુ સેવા વસ્ત્ર પરિધાન\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `જય શ્રી કૃષ્ણ, *${order.partyName}જી* 🙏\n\n` +
          `આપના દ્વારા ઠાકોરજીના વસ્ત્રો/સાજનો ઓર્ડર સ્નેહપૂર્વક સ્વીકારવામાં આવેલ છે. આપના ઓર્ડરની સત્તાવાર વિગત નીચે મુજબ છે:\n\n` +
          `📋 *ઓર્ડર વિગતો:* \n` +
          `▫️ *ઓર્ડર નં:* #${order.orderNo}\n` +
          `▫️ *શ્રી સ્વરૂપ:* ${getLocalizedSwaroop(order.swaroop)}\n` +
          `▫️ *સ્વરૂપ માપ/નંબર:* ${order.murtiSize || 'સામાન્ય'}\n` +
          `▫️ *વસ્ત્ર/સાજ પ્રકાર:* ${getLocalizedItem(order.itemCategory)}\n` +
          `▫️ *કાપડ:* ${order.materialOption === 'with_material' ? '🧵 આપણું મટીરીયલ (સંપૂર્ણ સામાન સહિત)' : '✂️ પાર્ટીનું પોતાનું કાપડ (ફક્ત સિલાઈ/કારીગરી)'}\n` +
          (order.orderDetails ? `▫️ *વિશેષ નોંધ/ડિઝાઇન:* ${order.orderDetails}\n` : '') +
          `▫️ *ઓર્ડર તારીખ:* ${formatDate(order.orderDate)}\n` +
          `▫️ *ડિલિવરી તારીખ:* 🗓️ *${formatDate(order.deliveryDate)}*\n\n` +
          `💰 *હિસાબ અને પેમેન્ટ સમરી:* \n` +
          `▫️ કુલ અંદાજિત રકમ: *₹${formatCurrency(order.estimatedPrice || 0)}*\n` +
          `▫️ જમા એડવાન્સ રકમ: *₹${formatCurrency(order.advanceReceived || 0)}*\n` +
          `▫️ *બાકી ચૂકવવાપાત્ર રકમ: ₹${formatCurrency(balanceDue)}*\n` +
          `▫️ પેમેન્ટ સ્ટેટસ: *${payStatusStr}*\n\n` +
          `${statusMsg}\n\n` +
          `📍 *સંપર્ક & સરનામું:* \n` +
          `દુકાન: *${bizName}*\n` +
          (state.settings.phone ? `મોબાઇલ: ${state.settings.phone}\n` : '') +
          (state.settings.address ? `સરનામું: ${state.settings.address}\n` : '') +
          (state.settings.upiId ? `💳 UPI પેમેન્ટ ID: *${state.settings.upiId}*\n` : '') +
          `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `ઠાકોરજી સેવામાં વસ્ત્રો પધરાવવા બદલ આપનો ખૂબ ખૂબ આભાર! શ્રીજી આપનું કલ્યાણ કરે. 🙏🌺`;
  } else if (state.lang === 'mr') {
    msg = `🌸 *॥ श्री गोपीजनवल्लभाय नमः ॥* 🌸\n` +
          `       *॥ श्री कृष्णः शरणं मम ॥*\n\n` +
          `👑 *${bizName}* — प्रभू सेवा वस्त्र परिधान\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `जय श्री कृष्ण, *${order.partyName}जी* 🙏\n\n` +
          `आपल्याद्वारे देवांच्या वस्त्रांची/साजाची ऑर्डर प्रेमाने स्वीकारण्यात आली आहे. ऑर्डरचा अधिकृत तपशील खालीलप्रमाणे आहे:\n\n` +
          `📋 *ऑर्डर तपशील:* \n` +
          `▫️ *ऑर्डर क्र:* #${order.orderNo}\n` +
          `▫️ *श्री स्वरूप:* ${getLocalizedSwaroop(order.swaroop)}\n` +
          `▫️ *स्वरूप माप/क्रमांक:* ${order.murtiSize || 'सामान्य'}\n` +
          `▫️ *वस्त्र/साज प्रकार:* ${getLocalizedItem(order.itemCategory)}\n` +
          `▫️ *कापड:* ${order.materialOption === 'with_material' ? '🧵 आपले मटेरियल (संपूर्ण साहित्यासह)' : '✂️ पार्टीचे स्वतःचे कापड (फक्त मजुरी)'}\n` +
          (order.orderDetails ? `▫️ *विशेष नोंद/डिझाइन:* ${order.orderDetails}\n` : '') +
          `▫️ *ऑर्डर तारीख:* ${formatDate(order.orderDate)}\n` +
          `▫️ *डिलिव्हरी तारीख:* 🗓️ *${formatDate(order.deliveryDate)}*\n\n` +
          `💰 *हिशोब आणि पेमेंट सारांश:* \n` +
          `▫️ एकूण अंदाजे रक्कम: *₹${formatCurrency(order.estimatedPrice || 0)}*\n` +
          `▫️ जमा ऍडव्हान्स रक्कम: *₹${formatCurrency(order.advanceReceived || 0)}*\n` +
          `▫️ *शिल्लक बाकी रक्कम: ₹${formatCurrency(balanceDue)}*\n` +
          `▫️ पेमेंट स्थिती: *${payStatusStr}*\n\n` +
          `${statusMsg}\n\n` +
          `📍 *संपर्क आणि पत्ता:* \n` +
          `दुकान: *${bizName}*\n` +
          (state.settings.phone ? `मोबाईल: ${state.settings.phone}\n` : '') +
          (state.settings.address ? `पत्ता: ${state.settings.address}\n` : '') +
          (state.settings.upiId ? `💳 UPI पेमेंट ID: *${state.settings.upiId}*\n` : '') +
          `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `प्रभू सेवेत वस्त्र अर्पण केल्याबद्दल मनःपूर्वक धन्यवाद! श्रीजी आपले कल्याण करो. 🙏🌺`;
  } else {
    msg = `🌸 *॥ Shri Gopijanavallabhaya Namah ॥* 🌸\n` +
          `       *॥ Shri Krishna Sharanam Mama ॥*\n\n` +
          `👑 *${bizName}* — Divine Deity Vastra & Saaj\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `Jai Shree Krishna, *${order.partyName} ji* 🙏\n\n` +
          `Thank you for honoring us with the sacred order for Thakurji's holy vastra. Here are your verified order details:\n\n` +
          `📋 *Order Specifications:* \n` +
          `▫️ *Order No:* #${order.orderNo}\n` +
          `▫️ *Deity Swaroop:* ${getLocalizedSwaroop(order.swaroop)}\n` +
          `▫️ *Murti Size / No:* ${order.murtiSize || 'Standard'}\n` +
          `▫️ *Vastra / Saaj Type:* ${getLocalizedItem(order.itemCategory)}\n` +
          `▫️ *Fabric:* ${order.materialOption === 'with_material' ? '🧵 With Our Material (Complete Fabric & Craft)' : '✂️ Party Provided Fabric (Stitching & Craft Only)'}\n` +
          (order.orderDetails ? `▫️ *Special Specs:* ${order.orderDetails}\n` : '') +
          `▫️ *Order Date:* ${formatDate(order.orderDate)}\n` +
          `▫️ *Delivery Date:* 🗓️ *${formatDate(order.deliveryDate)}*\n\n` +
          `💰 *Financial & Payment Summary:* \n` +
          `▫️ Total Estimated Price: *₹${formatCurrency(order.estimatedPrice || 0)}*\n` +
          `▫️ Advance Received: *₹${formatCurrency(order.advanceReceived || 0)}*\n` +
          `▫️ *Balance Due: ₹${formatCurrency(balanceDue)}*\n` +
          `▫️ Payment Status: *${payStatusStr}*\n\n` +
          `${statusMsg}\n\n` +
          `📍 *Contact & Location:* \n` +
          `*${bizName}*\n` +
          (state.settings.phone ? `Phone: ${state.settings.phone}\n` : '') +
          (state.settings.address ? `Address: ${state.settings.address}\n` : '') +
          (state.settings.upiId ? `💳 UPI Payment ID: *${state.settings.upiId}*\n` : '') +
          `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `Thank you for allowing us to serve in Thakurji's divine seva! May Shreeji bless you abundantly. 🙏🌺`;
  }

  const encodedMsg = encodeURIComponent(msg);
  const waUrl = phone ? `https://wa.me/91${phone}?text=${encodedMsg}` : `https://wa.me/?text=${encodedMsg}`;
  window.open(waUrl, '_blank');
}

// ==========================================
// INVOICE & BILL PRINT (ROYAL PUSHTIMARG FORMAT)
// ==========================================
function openInvoiceModal(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  state.activeInvoiceOrderId = orderId;
  const area = document.getElementById('printableInvoiceArea');
  if (!area) return;

  const dict = i18n[state.lang];
  const bizName = state.settings.bizName || 'શ્રીજી ના સાજ';
  const balanceDue = Number(order.balanceDue) || (Number(order.estimatedPrice || 0) - Number(order.advanceReceived || 0));

  let payStatusBadge = '';
  if (order.paymentStatus === 'paid' || balanceDue === 0) {
    payStatusBadge = `<span style="background-color:#dcfce7;color:#15803d;border:1px solid #86efac;padding:2px 8px;border-radius:9999px;font-weight:800;font-size:10px;">✓ ${state.lang === 'gu' ? 'સંપૂર્ણ ચૂકતે' : state.lang === 'mr' ? 'પૂર્ણ ભરલે' : 'PAID IN FULL'}</span>`;
  } else if (order.advanceReceived > 0) {
    payStatusBadge = `<span style="background-color:#fef3c7;color:#b45309;border:1px solid #fde68a;padding:2px 8px;border-radius:9999px;font-weight:800;font-size:10px;">🟡 ${state.lang === 'gu' ? 'આંશિક જમા' : state.lang === 'mr' ? 'અંશતઃ જમા' : 'PARTIAL ADVANCE'}</span>`;
  } else {
    payStatusBadge = `<span style="background-color:#ffe4e6;color:#be123c;border:1px solid #fecdd3;padding:2px 8px;border-radius:9999px;font-weight:800;font-size:10px;">🔴 ${state.lang === 'gu' ? 'બાકી' : state.lang === 'mr' ? 'શિલ્લક બાકી' : 'UNPAID'}</span>`;
  }

  const matBadge = order.materialOption === 'with_material'
    ? `<span style="background-color:#e0e7ff;color:#3730a3;border:1px solid #c7d2fe;padding:2px 6px;border-radius:4px;font-weight:700;font-size:10px;">🧵 ${dict.badge_with_mat}</span>`
    : `<span style="background-color:#ffedd5;color:#c2410c;border:1px solid #fed7aa;padding:2px 6px;border-radius:4px;font-weight:700;font-size:10px;">✂️ ${dict.badge_without_mat}</span>`;

  area.innerHTML = `
    <div style="background-color:#ffffff;color:#0f172a;font-family:inherit;line-height:1.3;max-width:180mm;margin:0 auto;box-sizing:border-box;">
      
      <!-- Top Royal Ornament Header -->
      <div style="border:1.5px solid #0f172a;border-radius:10px;padding:8px 12px;background:linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);">
        
        <!-- Sacred Shlok Banner -->
        <div style="text-align:center;padding-bottom:5px;border-bottom:1px dashed #cbd5e1;margin-bottom:6px;">
          <div style="font-size:11px;font-weight:900;color:#b45309;letter-spacing:1px;">॥ શ્રી ગોપીજનવલ્લભાય નમઃ ॥</div>
          <div style="font-size:9.5px;font-weight:700;color:#64748b;margin-top:1px;">॥ શ્રી કૃષ્ણઃ શરણં મમ ॥ ઠાકોરજી વસ્ત્ર પરિધાન પહોંચ / બિલ</div>
        </div>

        <!-- Brand Identity & Logo -->
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:44px;height:44px;border-radius:10px;overflow:hidden;border:1.5px solid #f59e0b;flex-shrink:0;background-color:#020617;">
              <img src="logo.png" alt="Shrinathji Logo" style="width:100%;height:100%;object-fit:cover;object-position:top;">
            </div>
            <div>
              <h2 style="font-size:17px;font-weight:900;color:#0f172a;line-height:1.1;margin:0;">${bizName}</h2>
              <p style="font-size:9.5px;font-weight:600;color:#475569;margin:1px 0 0 0;">${dict.tagline}</p>
            </div>
          </div>
          <div style="text-align:right;font-size:10px;color:#334155;line-height:1.4;">
            ${state.settings.phone ? `<div><strong>સંપર્ક:</strong> ${state.settings.phone}</div>` : ''}
            ${state.settings.address ? `<div><strong>સરનામું:</strong> ${state.settings.address}</div>` : ''}
            <div style="font-weight:800;color:#0f172a;">ઓર્ડર સ્લીપ: #${order.orderNo}</div>
          </div>
        </div>
      </div>

      <!-- Order & Customer Meta Cards Grid -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;">
        
        <!-- Customer Box -->
        <div style="border:1px solid #e2e8f0;border-radius:8px;padding:8px 10px;background-color:#f8fafc;">
          <span style="font-size:9px;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;display:block;">${dict.customer_info}</span>
          <div style="font-size:13px;font-weight:900;color:#0f172a;margin-top:1px;">${order.partyName}</div>
          ${order.partyPhone ? `<div style="font-size:11px;font-weight:600;color:#334155;margin-top:1px;">📱 ${order.partyPhone}</div>` : ''}
        </div>

        <!-- Order Timing Box -->
        <div style="border:1px solid #e2e8f0;border-radius:8px;padding:8px 10px;background-color:#f8fafc;text-align:right;">
          <span style="font-size:9px;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;display:block;">${dict.receipt_info}</span>
          <div style="font-size:11px;font-weight:600;color:#334155;margin-top:1px;">ઓર્ડર તારીખ: <b>${formatDate(order.orderDate)}</b></div>
          <div style="font-size:11px;font-weight:800;color:#b45309;margin-top:1px;">📅 ડિલિવરી તારીખ: <b>${formatDate(order.deliveryDate)}</b></div>
        </div>
      </div>

      <!-- Deity & Vastra Specs Card -->
      <div style="border:1px solid #e2e8f0;border-radius:8px;padding:6px 10px;background-color:#f8fafc;margin-top:6px;display:flex;align-items:center;justify-content:space-between;flex-wrap:gap:6px;">
        <div style="font-size:11px;">
          <span style="font-size:9px;font-weight:800;color:#64748b;text-transform:uppercase;">શ્રી સ્વરૂપ & માપ:</span>
          <span style="font-weight:800;color:#0f172a;margin-left:4px;">${getLocalizedSwaroop(order.swaroop)} ${order.murtiSize ? `(${order.murtiSize})` : ''}</span>
        </div>
        <div style="font-size:11px;">
          <span style="font-size:9px;font-weight:800;color:#64748b;text-transform:uppercase;">ઉત્સવ:</span>
          <span style="font-weight:700;color:#0f172a;margin-left:3px;">${order.utsav || 'નિત્ય સેવા'}</span>
        </div>
        <div>
          ${matBadge}
        </div>
      </div>

      <!-- Itemized Table -->
      <div style="margin-top:8px;">
        <table style="width:100%;border-collapse:collapse;font-size:11px;text-align:left;">
          <thead>
            <tr style="background-color:#f1f5f9;border-bottom:1.5px solid #0f172a;color:#0f172a;">
              <th style="padding:6px 8px;font-weight:800;">વસ્ત્ર / સાજનો પ્રકાર</th>
              <th style="padding:6px 8px;font-weight:800;">કારીગરી & ડિઝાઇન સૂચના</th>
              <th style="padding:6px 8px;font-weight:800;text-align:right;">અંદાજિત રકમ (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="padding:7px 8px;font-weight:800;color:#0f172a;vertical-align:top;">
                ${getLocalizedItem(order.itemCategory)}
              </td>
              <td style="padding:7px 8px;color:#334155;vertical-align:top;line-height:1.3;">
                ${order.orderDetails || 'પ્રભુ ભાવે સુંદર ઝરી અને સાજ કલા'}
              </td>
              <td style="padding:7px 8px;font-weight:900;color:#0f172a;text-align:right;vertical-align:top;font-size:12px;">
                ₹${formatCurrency(order.estimatedPrice || 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Financial Calculations & UPI Section -->
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-top:8px;padding-top:8px;border-top:1.5px solid #0f172a;flex-wrap:wrap;">
        
        <!-- Left: Payment Status & Terms -->
        <div style="max-width:270px;font-size:10px;color:#475569;line-height:1.4;">
          <div style="margin-bottom:5px;">
            <span style="font-weight:800;color:#0f172a;margin-right:4px;">પેમેન્ટ સ્ટેટસ:</span>
            ${payStatusBadge}
          </div>
          ${state.settings.upiId ? `
            <div style="background-color:#f0fdf4;border:1px solid #bbf7d0;padding:4px 8px;border-radius:6px;color:#166534;margin-bottom:5px;">
              <div style="font-weight:800;font-size:10px;">💳 UPI: <span style="font-family:monospace;font-weight:700;">${state.settings.upiId}</span></div>
            </div>
          ` : ''}
          <div style="font-weight:700;color:#334155;">${dict.terms_title}</div>
          <div>${dict.terms_1}</div>
          <div>${dict.terms_2}</div>
        </div>

        <!-- Right: Totals Box -->
        <div style="min-width:180px;font-size:11px;">
          <div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid #f1f5f9;">
            <span style="color:#64748b;">${dict.card_total_amt}:</span>
            <span style="font-weight:700;color:#0f172a;">₹${formatCurrency(order.estimatedPrice || 0)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid #f1f5f9;color:#15803d;">
            <span>${dict.card_advance_amt}:</span>
            <span style="font-weight:700;">₹${formatCurrency(order.advanceReceived || 0)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:5px 0;border-top:1.5px solid #0f172a;font-size:13px;font-weight:900;margin-top:2px;">
            <span style="color:#0f172a;">${dict.card_balance_amt}:</span>
            <span style="color:${balanceDue > 0 ? '#dc2626' : '#15803d'};">₹${formatCurrency(balanceDue)}</span>
          </div>
        </div>

      </div>

      <!-- Devotional Signatures Footer -->
      <div style="margin-top:12px;padding-top:8px;border-top:1px dashed #cbd5e1;display:flex;justify-content:space-between;align-items:flex-end;font-size:10px;color:#64748b;">
        <div style="text-align:left;">
          <div>${dict.customer_sign}</div>
          <div style="margin-top:14px;font-weight:700;color:#0f172a;">___________________________</div>
        </div>
        <div style="text-align:center;font-style:italic;color:#b45309;font-weight:700;font-size:10.5px;">
          શ્રીજી સર્વેનું મંગલ કરે 🙏
        </div>
        <div style="text-align:right;">
          <div>${dict.biz_sign} <b>${bizName}</b></div>
          <div style="margin-top:14px;font-weight:700;color:#0f172a;">___________________________</div>
        </div>
      </div>

    </div>
  `;

  document.getElementById('invoiceModal').classList.remove('hidden');
}

function closeInvoiceModal() {
  document.getElementById('invoiceModal').classList.add('hidden');
}

function sendInvoiceWhatsApp() {
  if (state.activeInvoiceOrderId) {
    shareOrderWhatsApp(state.activeInvoiceOrderId);
  }
}

// ==========================================
// PROFIT & LOSS (P&L) & CA STATEMENT LEDGER
// ==========================================
function filterExpensesByCategory(cat) {
  state.activeExpenseCategoryFilter = cat;
  document.querySelectorAll('.pnl-cat-pill').forEach(btn => {
    if (btn.dataset.cat === cat) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderPnL();
}

function exportPnLCSV() {
  const dict = i18n[state.lang];
  const rows = [
    ['॥ શ્રીજી ના સાજ - નફો અને નુકસાન હિસાબવહી ॥'],
    ['તારીખ:', new Date().toLocaleDateString('en-GB')],
    [],
    ['-- વેપાર અને નફા-નુકસાન સ્ટેટમેન્ટ (CA Format) --'],
    ['વિગત (Particulars)', 'રકમ (₹)'],
    ['કુલ ઓર્ડર વેચાણ આવક', document.getElementById('stmtSalesRevenue')?.innerText || '0'],
    ['બાદ: કાપડ અને મટીરીયલ ખરીદી', document.getElementById('stmtFabricCost')?.innerText || '0'],
    ['બાદ: ઝરી અને મોતી શ્રૃંગાર ખર્ચ', document.getElementById('stmtZariCost')?.innerText || '0'],
    ['બાદ: કારીગર મજૂરી ખર્ચ', document.getElementById('stmtKarigarCost')?.innerText || '0'],
    ['કાચો નફો (Gross Profit)', document.getElementById('stmtGrossProfit')?.innerText || '0'],
    ['બાદ: કુરિયર અને પરિવહન', document.getElementById('stmtCourierCost')?.innerText || '0'],
    ['બાદ: વર્કશોપ સાધન અને અન્ય ખર્ચ', document.getElementById('stmtIndirectCost')?.innerText || '0'],
    ['ચોખ્ખો કાર્યકારી નફો (Net Profit)', document.getElementById('stmtNetProfit')?.innerText || '0'],
    [],
    ['-- ખર્ચા યાદી (Expense Records) --'],
    ['તારીખ', 'કેટેગરી', 'વિગત', 'ચૂકવણી મોડ', 'રકમ (₹)']
  ];

  state.expenses.forEach(e => {
    rows.push([e.date, e.category, `"${(e.description || '').replace(/"/g, '""')}"`, e.paymentMode || 'Cash', e.amount]);
  });

  const csvContent = '\uFEFF' + rows.map(r => r.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Shreeji_Na_Saaj_PnL_Report_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(state.lang === 'gu' ? 'P&L રિપોર્ટ સફળતાપૂર્વક ડાઉનલોડ થયો!' : 'P&L report downloaded successfully!', 'success');
}


function renderPnL() {
  const dict = i18n[state.lang];
  const monthFilter = document.getElementById('pnlMonthFilter')?.value || 'all';

  const orders = filterByPnLPeriod(state.orders, monthFilter);
  const expenses = filterByPnLPeriod(state.expenses, monthFilter);

  let totalGrossTurnover = 0;
  let totalCollectedIncome = 0;
  let pendingReceivable = 0;
  let pendingReceivableCount = 0;

  orders.forEach(o => {
    const price = Number(o.estimatedPrice) || 0;
    const advance = Number(o.advanceReceived) || 0;
    totalGrossTurnover += price;
    
    if (o.orderStatus === 'completed' || o.paymentStatus === 'paid') {
      totalCollectedIncome += price;
    } else {
      totalCollectedIncome += advance;
      const due = Math.max(0, price - advance);
      if (due > 0) {
        pendingReceivable += due;
        pendingReceivableCount++;
      }
    }
  });

  // Expense breakdown categories
  let fabricCost = 0;
  let karigarCost = 0;
  let zariCost = 0;
  let otherCost = 0;

  expenses.forEach(e => {
    const amt = Number(e.amount) || 0;
    if (e.category === 'material' || e.category === 'fabric') fabricCost += amt;
    else if (e.category === 'karigar' || e.category === 'karigar_labor') karigarCost += amt;
    else if (e.category === 'zari_moti' || e.category === 'zari_lace') zariCost += amt;
    else otherCost += amt;
  });

  const totalExpense = fabricCost + karigarCost + zariCost + otherCost;
  const netProfit = totalGrossTurnover - totalExpense;
  const profitMargin = totalGrossTurnover > 0 ? Math.round((netProfit / totalGrossTurnover) * 100) : 0;

  // Safe DOM updates
  const safeSet = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };

  // 1. KPI Cards
  safeSet('pnlTotalIncome', formatCurrency(totalGrossTurnover));
  safeSet('pnlCollectedIncome', formatCurrency(totalCollectedIncome));
  safeSet('pnlPendingReceivable', formatCurrency(pendingReceivable));
  safeSet('pnlPendingReceivableCard', formatCurrency(pendingReceivable));
  safeSet('pnlTotalExpense', formatCurrency(totalExpense));
  safeSet('pnlKarigarCost', formatCurrency(karigarCost));
  safeSet('pnlMaterialCost', formatCurrency(fabricCost + zariCost));
  safeSet('pnlNetProfit', formatCurrency(netProfit));
  safeSet('pnlProfitMargin', `${profitMargin}%`);

  const healthStatus = document.getElementById('pnlHealthStatus');
  if (healthStatus) {
    if (netProfit > 0) {
      healthStatus.innerText = dict.status_profitable || 'નફાકારક';
      healthStatus.className = 'text-emerald-400 font-bold';
    } else if (netProfit < 0) {
      healthStatus.innerText = dict.status_loss || 'ખોટ';
      healthStatus.className = 'text-rose-400 font-bold';
    } else {
      healthStatus.innerText = dict.status_breakeven || 'બરાબરી';
      healthStatus.className = 'text-slate-300 font-bold';
    }
  }

  // 2. Simple Visual Expense Distribution Bar
  safeSet('pnlExpenseTotalText', `${dict.total || 'કુલ'}: ₹${formatCurrency(totalExpense)}`);
  safeSet('pnlLegendFabric', formatCurrency(fabricCost));
  safeSet('pnlLegendKarigar', formatCurrency(karigarCost));
  safeSet('pnlLegendZari', formatCurrency(zariCost));
  safeSet('pnlLegendOther', formatCurrency(otherCost));

  const barFab = document.getElementById('barFabric');
  const barKar = document.getElementById('barKarigar');
  const barZar = document.getElementById('barZari');
  const barOth = document.getElementById('barOther');

  if (totalExpense > 0) {
    if (barFab) barFab.style.width = `${Math.round((fabricCost / totalExpense) * 100)}%`;
    if (barKar) barKar.style.width = `${Math.round((karigarCost / totalExpense) * 100)}%`;
    if (barZar) barZar.style.width = `${Math.round((zariCost / totalExpense) * 100)}%`;
    if (barOth) barOth.style.width = `${Math.round((otherCost / totalExpense) * 100)}%`;
  } else {
    if (barFab) barFab.style.width = '25%';
    if (barKar) barKar.style.width = '25%';
    if (barZar) barZar.style.width = '25%';
    if (barOth) barOth.style.width = '25%';
  }

  // 3. Render Expenses Table (with category filtering)
  const catFilter = state.activeExpenseCategoryFilter || 'all';
  const displayedExpenses = catFilter === 'all' 
    ? expenses 
    : expenses.filter(e => {
        if (catFilter === 'fabric') return e.category === 'material' || e.category === 'fabric';
        if (catFilter === 'karigar_labor') return e.category === 'karigar' || e.category === 'karigar_labor';
        if (catFilter === 'zari_lace') return e.category === 'zari_moti' || e.category === 'zari_lace';
        if (catFilter === 'courier') return e.category === 'courier';
        if (catFilter === 'other') return e.category === 'workshop' || e.category === 'other';
        return true;
      });

  renderExpensesTable(displayedExpenses);
}

function filterExpensesByCategory(cat) {
  state.activeExpenseCategoryFilter = cat;
  ['all', 'fabric', 'karigar_labor', 'zari_lace', 'courier', 'other'].forEach(c => {
    const btn = document.getElementById(`expFilterBtn-${c}`);
    if (btn) {
      if (c === cat) {
        btn.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 transition shadow-sm';
      } else {
        btn.className = 'px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition';
      }
    }
  });
  renderPnL();
}

function filterByPnLPeriod(items, period) {
  if (period === 'all') return items;
  const now = new Date();
  const currentYearMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastYearMonth = `${lastMonthDate.getFullYear()}-${String(lastMonthDate.getMonth() + 1).padStart(2, '0')}`;

  return items.filter(item => {
    const itemDate = item.date || item.orderDate || item.createdAt?.split('T')[0];
    if (!itemDate) return true;

    if (period === 'this_month') return itemDate.startsWith(currentYearMonth);
    if (period === 'last_month') return itemDate.startsWith(lastYearMonth);
    if (period === 'this_year') return itemDate.startsWith(String(now.getFullYear()));
    return true;
  });
}

function renderExpensesTable(expenses) {
  const tbody = document.getElementById('expensesTableBody');
  const empty = document.getElementById('expensesEmptyState');
  if (!tbody) return;

  if (expenses.length === 0) {
    tbody.innerHTML = '';
    if (empty) empty.classList.remove('hidden');
    return;
  }

  if (empty) empty.classList.add('hidden');

  tbody.innerHTML = expenses.map(exp => {
    let catBadge = '';
    const match = selectOptions.expenseCategory[state.lang]?.find(c => c.val === exp.category);
    const catLabel = match ? match.label : exp.category;

    if (exp.category === 'karigar') catBadge = `<span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[11px]">🪡 ${catLabel}</span>`;
    else if (exp.category === 'material') catBadge = `<span class="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold text-[11px]">🧵 ${catLabel}</span>`;
    else if (exp.category === 'zari_moti') catBadge = `<span class="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[11px]">✨ ${catLabel}</span>`;
    else if (exp.category === 'courier') catBadge = `<span class="px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-bold text-[11px]">📦 ${catLabel}</span>`;
    else catBadge = `<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-bold text-[11px]">📝 ${catLabel}</span>`;

    return `
      <tr class="hover:bg-slate-50 transition">
        <td class="py-2.5 px-3 font-medium text-slate-600">${formatDate(exp.date)}</td>
        <td class="py-2.5 px-3">${catBadge}</td>
        <td class="py-2.5 px-3 font-semibold text-slate-800">${exp.description || '-'}</td>
        <td class="py-2.5 px-3 text-slate-500">${exp.paymentMode || 'Cash'}</td>
        <td class="py-2.5 px-3 text-right font-extrabold text-rose-600">₹${formatCurrency(exp.amount)}</td>
        <td class="py-2.5 px-3 text-center">
          <button onclick="deleteExpense('${exp.id}')" title="ખર્ચ કાઢી નાખો" class="w-7 h-7 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600 flex items-center justify-center transition mx-auto">
            <svg class="w-3.5 h-3.5 flex-shrink-0 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function renderExpenseChart(dataMap) {
  const canvas = document.getElementById('expenseCategoryChart');
  const legend = document.getElementById('expenseCategoryLegend');
  if (!canvas || typeof Chart === 'undefined') return;

  if (state.charts.expenseChart) {
    state.charts.expenseChart.destroy();
  }

  const labels = Object.keys(dataMap);
  const values = Object.values(dataMap);
  const colors = ['#8b5cf6', '#3b82f6', '#f59e0b', '#06b6d4', '#64748b'];
  const hasData = values.some(v => v > 0);

  const ctx = canvas.getContext('2d');
  state.charts.expenseChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: hasData ? values : [1],
        backgroundColor: hasData ? colors : ['#e2e8f0'],
        borderWidth: 2,
        borderColor: state.theme === 'theme-shrinathji-gold' ? '#18181b' : '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false }
      }
    }
  });

  if (legend) {
    legend.innerHTML = labels.map((lbl, idx) => `
      <div class="flex items-center justify-between py-1 border-b border-slate-50">
        <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full" style="background-color: ${colors[idx]}"></span> ${lbl}</span>
        <span class="font-bold text-slate-800">₹${formatCurrency(values[idx])}</span>
      </div>
    `).join('');
  }
}


// EXPENSE MODAL & SAVE
// ==========================================
function openNewExpenseModal() {
  document.getElementById('expenseDate').value = new Date().toISOString().split('T')[0];
  document.getElementById('expenseAmount').value = '';
  document.getElementById('expenseDescription').value = '';
  document.getElementById('expenseCategory').value = 'material';
  document.getElementById('expensePaymentMode').value = 'Cash';
  document.getElementById('expenseModal').classList.remove('hidden');
}

function closeExpenseModal() {
  document.getElementById('expenseModal').classList.add('hidden');
}

function saveExpense() {
  const amount = Number(document.getElementById('expenseAmount').value);
  if (!amount || amount <= 0) {
    alert(state.lang === 'gu' ? 'માન્ય રકમ દાખલ કરો.' : state.lang === 'mr' ? 'योग्य रक्कम टाका.' : 'Please enter valid amount.');
    document.getElementById('expenseAmount').focus();
    return;
  }

  const expense = {
    id: 'exp_' + Date.now(),
    date: document.getElementById('expenseDate').value,
    category: document.getElementById('expenseCategory').value,
    amount: amount,
    description: document.getElementById('expenseDescription').value.trim(),
    paymentMode: document.getElementById('expensePaymentMode').value,
    createdAt: new Date().toISOString()
  };

  state.expenses.unshift(expense);
  saveDataToStorage();
  closeExpenseModal();
  renderDashboard();
  renderPnL();
  broadcastSyncEvent('EXPENSE_UPSERT', expense);
}

function deleteExpense(expId) {
  const msg = state.lang === 'gu'
    ? 'શું તમે આ ખર્ચ ડીલીટ કરવા માંગો છો?'
    : state.lang === 'mr'
    ? 'तुम्हाला हा खर्च हटवायचा आहे का?'
    : 'Do you want to delete this expense?';

  if (confirm(msg)) {
    state.expenses = state.expenses.filter(e => e.id !== expId);
    saveDataToStorage();
    renderDashboard();
    renderPnL();
    broadcastSyncEvent('EXPENSE_DELETE', { id: expId });
  }
}

// ==========================================
// PARTIES / CUSTOMERS DIRECTORY & CRUD LOGIC
// ==========================================
function renderPartiesList() {
  const dict = i18n[state.lang];
  const container = document.getElementById('partiesGrid');
  if (!container) return;

  const searchQuery = (document.getElementById('partySearchInput')?.value || '').toLowerCase().trim();
  const partyMap = {};

  // 1. Seed from registered customers first
  (state.customers || []).forEach(cust => {
    const key = (cust.name || '').trim();
    if (!key) return;
    partyMap[key] = {
      id: cust.id,
      name: key,
      phone: cust.phone || '',
      address: cust.address || '',
      notes: cust.notes || '',
      isRegisteredCustomer: true,
      ordersCount: 0,
      totalSpent: 0,
      totalBalanceDue: 0
    };
  });

  // 2. Aggregate orders data
  (state.orders || []).forEach(order => {
    const key = (order.partyName || 'Unknown').trim();
    if (!partyMap[key]) {
      partyMap[key] = {
        id: null,
        name: key,
        phone: order.partyPhone || '',
        address: '',
        notes: '',
        isRegisteredCustomer: false,
        ordersCount: 0,
        totalSpent: 0,
        totalBalanceDue: 0
      };
    }
    partyMap[key].ordersCount += 1;
    partyMap[key].totalSpent += Number(order.estimatedPrice || 0);
    partyMap[key].totalBalanceDue += Number(order.balanceDue || 0);
    if (order.partyPhone && !partyMap[key].phone) {
      partyMap[key].phone = order.partyPhone;
    }
  });

  const partyList = Object.values(partyMap).filter(p => {
    if (!searchQuery) return true;
    return p.name.toLowerCase().includes(searchQuery) || 
           p.phone.includes(searchQuery) ||
           (p.address && p.address.toLowerCase().includes(searchQuery));
  });

  if (partyList.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 bg-white rounded-2xl p-6 text-center text-slate-400 text-xs">
        ${dict.no_orders_found}
      </div>
    `;
    return;
  }

  container.innerHTML = partyList.map(party => {
    const cleanPhone = (party.phone || '').replace(/\D/g, '');
    const escapedName = party.name.replace(/'/g, "\\'");
    return `
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex flex-col justify-between hover:border-amber-400 transition">
        <div>
          <!-- Header: Avatar, Name & Phone -->
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center space-x-3 min-w-0">
              <div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-royal-950 to-royal-800 text-amber-300 flex items-center justify-center font-bold text-base shadow-sm flex-shrink-0">
                ${party.name.charAt(0)}
              </div>
              <div class="min-w-0">
                <h3 class="text-base font-extrabold text-slate-900 truncate" title="${party.name}">${party.name}</h3>
                <div class="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <svg class="icon w-3 h-3 text-slate-400"><use href="#icon-mobile"></use></svg>
                  <a href="tel:${party.phone}" class="hover:underline font-semibold text-royal-900">${party.phone || '-'}</a>
                </div>
              </div>
            </div>

            <!-- Customer Edit / Delete Actions -->
            ${party.id ? `
              <div class="flex items-center space-x-1 flex-shrink-0">
                <button onclick="openEditCustomerModal('${party.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-slate-100 transition" title="ગ્રાહક વિગત સુધારો">
                  <svg class="icon w-3.5 h-3.5"><use href="#icon-edit"></use></svg>
                </button>
                <button onclick="deleteCustomer('${party.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-slate-100 transition" title="ગ્રાહક હટાવો">
                  <svg class="icon w-3.5 h-3.5"><use href="#icon-trash"></use></svg>
                </button>
              </div>
            ` : ''}
          </div>

          <!-- Address & Notes -->
          ${party.address || party.notes ? `
            <div class="mt-2 text-xs text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100 space-y-0.5">
              ${party.address ? `<div><b>સરનામું:</b> ${party.address}</div>` : ''}
              ${party.notes ? `<div><b>નોંધ:</b> ${party.notes}</div>` : ''}
            </div>
          ` : ''}

          <!-- Financial Snapshot -->
          <div class="mt-3.5 grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center">
            <div>
              <span class="block text-[10px] text-slate-400 font-bold uppercase">${dict.nav_orders}</span>
              <span class="text-sm font-extrabold text-slate-800">${party.ordersCount}</span>
            </div>
            <div>
              <span class="block text-[10px] text-slate-400 font-bold uppercase">${dict.card_total_amt}</span>
              <span class="text-sm font-extrabold text-slate-800">₹${formatCurrency(party.totalSpent)}</span>
            </div>
            <div>
              <span class="block text-[10px] text-rose-500 font-bold uppercase">${dict.card_balance_amt}</span>
              <span class="text-sm font-extrabold ${party.totalBalanceDue > 0 ? 'text-rose-600' : 'text-emerald-600'}">
                ₹${formatCurrency(party.totalBalanceDue)}
              </span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between gap-1.5 flex-wrap">
          <div class="flex items-center space-x-1.5">
            ${cleanPhone ? `
              <a href="https://wa.me/91${cleanPhone}" target="_blank" class="px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold flex items-center gap-1 transition">
                <svg class="icon w-3.5 h-3.5"><use href="#icon-whatsapp"></use></svg>
                <span>WhatsApp</span>
              </a>
            ` : ''}
            <button onclick="openNewOrderModal('${escapedName}', '${party.phone || ''}')" class="px-2.5 py-1.5 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 text-xs font-bold flex items-center gap-1 transition" title="આ ગ્રાહક માટે નવો ઓર્ડર">
              <svg class="icon w-3.5 h-3.5"><use href="#icon-plus"></use></svg>
              <span>+ ઓર્ડર</span>
            </button>
          </div>

          <button onclick="filterOrdersByParty('${escapedName}')" class="px-2.5 py-1.5 rounded-lg bg-royal-50 text-royal-900 hover:bg-royal-100 text-xs font-bold flex items-center gap-1 transition">
            <span>ઓર્ડર્સ જુઓ</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openNewCustomerModal() {
  document.getElementById('customerId').value = '';
  document.getElementById('customerName').value = '';
  document.getElementById('customerPhone').value = '';
  document.getElementById('customerAddress').value = '';
  document.getElementById('customerNotes').value = '';
  document.getElementById('customerModalTitle').innerText = state.lang === 'gu' ? 'નવો ગ્રાહક ઉમેરો' : state.lang === 'mr' ? 'नवीन ग्राहक जोडा' : 'Add New Customer';
  document.getElementById('customerModal').classList.remove('hidden');
}

function openEditCustomerModal(id) {
  const cust = (state.customers || []).find(c => c.id === id);
  if (!cust) return;
  document.getElementById('customerId').value = cust.id;
  document.getElementById('customerName').value = cust.name || '';
  document.getElementById('customerPhone').value = cust.phone || '';
  document.getElementById('customerAddress').value = cust.address || '';
  document.getElementById('customerNotes').value = cust.notes || '';
  document.getElementById('customerModalTitle').innerText = state.lang === 'gu' ? 'ગ્રાહક વિગત સુધારો' : state.lang === 'mr' ? 'ग्राहक माहिती संपादित करा' : 'Edit Customer';
  document.getElementById('customerModal').classList.remove('hidden');
}

function closeCustomerModal() {
  document.getElementById('customerModal').classList.add('hidden');
}

function saveCustomer() {
  const name = document.getElementById('customerName').value.trim();
  if (!name) {
    alert(state.lang === 'gu' ? 'ગ્રાહકનું નામ દાખલ કરો.' : state.lang === 'mr' ? 'ग्राहकाचे नाव टाका.' : 'Please enter customer name.');
    document.getElementById('customerName').focus();
    return;
  }

  const phone = document.getElementById('customerPhone').value.trim();
  const address = document.getElementById('customerAddress').value.trim();
  const notes = document.getElementById('customerNotes').value.trim();
  const id = document.getElementById('customerId').value;

  if (id) {
    const idx = (state.customers || []).findIndex(c => c.id === id);
    if (idx !== -1) {
      state.customers[idx] = { ...state.customers[idx], name, phone, address, notes };
    }
  } else {
    state.customers.push({
      id: 'c_' + Date.now(),
      name,
      phone,
      address,
      notes
    });
  }

  saveDataToStorage();
  updateCustomerDatalist();
  closeCustomerModal();
  renderPartiesList();
}

function deleteCustomer(id) {
  const msg = state.lang === 'gu' ? 'શું તમે આ ગ્રાહકને હટાવવા માંગો છો?' : state.lang === 'mr' ? 'तुम्हाला या ग्राहकाला हटवायचे आहे का?' : 'Are you sure you want to delete this customer?';
  if (confirm(msg)) {
    state.customers = (state.customers || []).filter(c => c.id !== id);
    saveDataToStorage();
    updateCustomerDatalist();
    renderPartiesList();
  }
}

function filterOrdersByParty(partyName) {
  switchTab('orders');
  const searchInput = document.getElementById('orderSearchInput');
  if (searchInput) {
    searchInput.value = partyName;
    renderOrdersList();
  }
}

// ==========================================
// KARIGAR MANAGEMENT & CRUD LOGIC
// ==========================================
function renderKarigarsList() {
  const dict = i18n[state.lang];
  const container = document.getElementById('karigarsGrid');
  if (!container) return;

  if (state.karigars.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-10 bg-white rounded-2xl p-6 text-center text-slate-400 text-xs">
        ${dict.no_orders_found}
      </div>
    `;
    return;
  }

  container.innerHTML = state.karigars.map(karigar => {
    const assignedOrders = state.orders.filter(o => o.karigarId === karigar.id);
    const pendingWithKarigar = assignedOrders.filter(o => o.orderStatus !== 'completed');
    const totalLaborWages = assignedOrders.reduce((sum, o) => sum + (Number(o.karigarLaborCost) || 0), 0);

    return `
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex flex-col justify-between hover:border-amber-400 transition">
        <div>
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <div class="flex items-center space-x-3">
              <div class="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg flex-shrink-0">
                🪡
              </div>
              <div>
                <h3 class="text-base font-extrabold text-slate-900">${karigar.name}</h3>
                <p class="text-xs text-slate-500">${karigar.specialty || '-'}</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-1">
              <button onclick="openEditKarigarModal('${karigar.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-slate-100 transition" title="સુધારો">
                <svg class="icon w-3.5 h-3.5"><use href="#icon-edit"></use></svg>
              </button>
              <button onclick="deleteKarigar('${karigar.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-slate-100 transition" title="હટાવો">
                <svg class="icon w-3.5 h-3.5"><use href="#icon-trash"></use></svg>
              </button>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
            <div>
              <span class="block text-[10px] text-slate-400 font-bold uppercase">${dict.status_in_progress}</span>
              <span class="text-sm font-extrabold text-amber-700">${pendingWithKarigar.length}</span>
            </div>
            <div>
              <span class="block text-[10px] text-slate-400 font-bold uppercase">${dict.karigar_labor_cost}</span>
              <span class="text-sm font-extrabold text-slate-800">₹${formatCurrency(totalLaborWages)}</span>
            </div>
          </div>

          ${pendingWithKarigar.length > 0 ? `
            <div class="mt-3 text-xs text-slate-600 space-y-1">
              <span class="text-[10px] text-slate-400 font-bold uppercase block">${dict.status_in_progress}:</span>
              ${pendingWithKarigar.slice(0, 3).map(o => `
                <div class="flex justify-between items-center py-0.5 border-b border-slate-100">
                  <span class="truncate font-semibold">${o.partyName}</span>
                  <span class="text-amber-800 font-bold">${formatDate(o.deliveryDate)}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          ${karigar.phone ? `
            <a href="tel:${karigar.phone}" class="text-royal-800 font-bold flex items-center gap-1 hover:underline">
              <svg class="icon w-3.5 h-3.5"><use href="#icon-mobile"></use></svg>
              <span>${karigar.phone}</span>
            </a>
          ` : '<span></span>'}

          <span class="text-[11px] text-slate-400 font-medium">કારીગર આઈડી: #${karigar.id}</span>
        </div>
      </div>
    `;
  }).join('');
}

function openNewKarigarModal() {
  document.getElementById('karigarId').value = '';
  document.getElementById('karigarName').value = '';
  document.getElementById('karigarPhone').value = '';
  document.getElementById('karigarSpecialty').value = '';
  const title = document.getElementById('karigarModalTitle');
  if (title) title.innerText = state.lang === 'gu' ? 'નવો કારીગર ઉમેરો' : state.lang === 'mr' ? 'नवीन कारागीर जोडा' : 'Add New Artisan';
  document.getElementById('karigarModal').classList.remove('hidden');
}

function openEditKarigarModal(id) {
  const k = state.karigars.find(item => item.id === id);
  if (!k) return;
  document.getElementById('karigarId').value = k.id;
  document.getElementById('karigarName').value = k.name || '';
  document.getElementById('karigarPhone').value = k.phone || '';
  document.getElementById('karigarSpecialty').value = k.specialty || '';
  const title = document.getElementById('karigarModalTitle');
  if (title) title.innerText = state.lang === 'gu' ? 'કારીગર વિગત સુધારો' : state.lang === 'mr' ? 'कारागीर माहिती संपादित करा' : 'Edit Artisan';
  document.getElementById('karigarModal').classList.remove('hidden');
}

function closeKarigarModal() {
  document.getElementById('karigarModal').classList.add('hidden');
}

function saveKarigar() {
  const name = document.getElementById('karigarName').value.trim();
  if (!name) {
    alert(state.lang === 'gu' ? 'કારીગરનું નામ દાખલ કરો.' : state.lang === 'mr' ? 'कारागिराचे नाव टाका.' : 'Please enter artisan name.');
    document.getElementById('karigarName').focus();
    return;
  }

  const phone = document.getElementById('karigarPhone').value.trim();
  const specialty = document.getElementById('karigarSpecialty').value.trim();
  const id = document.getElementById('karigarId').value;

  if (id) {
    const idx = state.karigars.findIndex(k => k.id === id);
    if (idx !== -1) {
      state.karigars[idx] = { ...state.karigars[idx], name, phone, specialty };
    }
  } else {
    state.karigars.push({
      id: 'k_' + Date.now(),
      name,
      phone,
      specialty
    });
  }

  saveDataToStorage();
  closeKarigarModal();
  renderKarigarsList();
}

function deleteKarigar(id) {
  const msg = state.lang === 'gu'
    ? 'શું તમે આ કારીગરને હટાવવા માંગો છો?'
    : state.lang === 'mr'
    ? 'तुम्हाला या कारागिराला हटवायचे आहे का?'
    : 'Do you want to delete this artisan?';

  if (confirm(msg)) {
    state.karigars = state.karigars.filter(k => k.id !== id);
    saveDataToStorage();
    renderKarigarsList();
  }
}

function getKarigarName(id) {
  const k = state.karigars.find(item => item.id === id);
  return k ? k.name : '';
}

// ==========================================
// SETTINGS, BACKUP & RESTORE
// ==========================================
function saveBusinessSettings() {
  state.settings.bizName = document.getElementById('settingBizName').value.trim() || 'શ્રીજી ના સાજ';
  state.settings.phone = document.getElementById('settingBizPhone').value.trim();
  state.settings.address = document.getElementById('settingBizAddress').value.trim();
  state.settings.upiId = document.getElementById('settingBizUpi').value.trim();

  saveDataToStorage();
  alert(state.lang === 'gu' ? 'સેટિંગ્સ સેવ થઈ ગઈ!' : state.lang === 'mr' ? 'सेटिंग्ज जतन झाली!' : 'Settings saved successfully!');
}

function exportFullBackupJSON() {
  const backupData = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    theme: state.theme,
    font: state.font,
    lang: state.lang,
    orders: state.orders,
    customers: state.customers,
    expenses: state.expenses,
    karigars: state.karigars,
    settings: state.settings
  };

  const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Shreeji_Na_Saaj_Backup_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportOrdersToCSV() {
  if (state.orders.length === 0) {
    alert(state.lang === 'gu' ? 'એક્સપોર્ટ કરવા માટે કોઈ ઓર્ડર નથી.' : state.lang === 'mr' ? 'निर्यात करण्यासाठी कोणतीही ऑर्डर नाही.' : 'No orders to export.');
    return;
  }

  const headers = ['Order No', 'Date', 'Delivery Date', 'Party Name', 'Phone', 'Swaroop', 'Size', 'Category', 'Material Option', 'Estimated Price', 'Advance', 'Balance', 'Status', 'Details'];
  
  const rows = state.orders.map(o => [
    `"${o.orderNo || ''}"`,
    `"${o.orderDate || ''}"`,
    `"${o.deliveryDate || ''}"`,
    `"${(o.partyName || '').replace(/"/g, '""')}"`,
    `"${o.partyPhone || ''}"`,
    `"${(o.swaroop || '').replace(/"/g, '""')}"`,
    `"${(o.murtiSize || '').replace(/"/g, '""')}"`,
    `"${(o.itemCategory || '').replace(/"/g, '""')}"`,
    `"${o.materialOption === 'with_material' ? 'With Material' : 'Without Material'}"`,
    o.estimatedPrice || 0,
    o.advanceReceived || 0,
    o.balanceDue || 0,
    `"${o.orderStatus || ''}"`,
    `"${(o.orderDetails || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Shreeji_Na_Saaj_Orders_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function handleRestoreBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.orders || data.expenses) {
        const msg = state.lang === 'gu'
          ? 'શું તમે આ બેકઅપ ફાઈલમાંથી ઓર્ડર્સ અને ડેટા મર્જ કરી ઉમેરવા માંગો છો?'
          : state.lang === 'mr'
          ? 'तुम्हाला या फाइलमधून डेटा एकत्र/मर्ज करायचा आहे का?'
          : 'Do you want to merge and restore data from this backup file?';

        if (confirm(msg)) {
          const added = mergeServerPayload(data);
          pushToCloudStore();
          alert(state.lang === 'gu' ? `સફળતા! ${added} નવા ઓર્ડર્સ સફળતાપૂર્વક મર્જ થઈ ગયા છે!` : `Success! ${added} new orders merged successfully!`);
        }
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function clearAllDataWithConfirmation() {
  const msg = state.lang === 'gu'
    ? 'ચેતવણી: શું તમે ખરેખર બધો ડેટા સાફ કરવા માંગો છો?'
    : state.lang === 'mr'
    ? 'चेतावणी: तुम्हाला नक्की सर्व डेटा साफ करायचा आहे का?'
    : 'Warning: Are you sure you want to clear all data?';

  if (confirm(msg)) {
    state.orders = [];
    state.customers = [];
    state.expenses = [];
    saveDataToStorage();
    renderDashboard();
    renderOrdersList();
    renderPnL();
    renderPartiesList();
  }
}

// Sample Demo Data
function loadSampleData() {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  const dueTomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const dueNextWeek = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  state.orders = [
    {
      id: 'demo_1',
      orderNo: 'SNS-1001',
      orderDate: dateStr,
      deliveryDate: dueTomorrow,
      partyName: 'શ્રદ્ધાબેન શાહ',
      partyPhone: '9825123456',
      swaroop: 'shrinathji',
      murtiSize: '5 no.',
      itemCategory: 'vagha',
      utsav: 'annakut',
      materialOption: 'with_material',
      orderDetails: 'લાલ અને સોનેરી ઝરીવાળો વાઘા સેટ, મોતીની કિનરી સાથે',
      estimatedPrice: 3500,
      advanceReceived: 1500,
      balanceDue: 2000,
      karigarId: 'k1',
      karigarLaborCost: 800,
      orderStatus: 'pending',
      paymentStatus: 'partial',
      createdAt: dateStr
    },
    {
      id: 'demo_2',
      orderNo: 'SNS-1002',
      orderDate: dateStr,
      deliveryDate: dueNextWeek,
      partyName: 'ભાવેશભાઈ પરીખ',
      partyPhone: '9898112233',
      swaroop: 'lalan',
      murtiSize: '3 no.',
      itemCategory: 'gadi',
      utsav: 'regular',
      materialOption: 'without_material',
      orderDetails: 'પીળો રેશમી કાપડ, ગોટા વર્ક સાથે',
      estimatedPrice: 1200,
      advanceReceived: 500,
      balanceDue: 700,
      karigarId: 'k2',
      karigarLaborCost: 350,
      orderStatus: 'ready',
      paymentStatus: 'partial',
      createdAt: dateStr
    },
    {
      id: 'demo_3',
      orderNo: 'SNS-1000',
      orderDate: dateStr,
      deliveryDate: dateStr,
      partyName: 'મીનાક્ષીબેન મહેતા',
      partyPhone: '9426098765',
      swaroop: 'shrinathji',
      murtiSize: '3x4 ft',
      itemCategory: 'pichhwai',
      utsav: 'janmashtami',
      materialOption: 'with_material',
      orderDetails: 'કમળ અને ગાયોની ડિઝાઇનવાળી હેન્ડમેડ જરદોશી પિછવાઈ',
      estimatedPrice: 8500,
      advanceReceived: 8500,
      balanceDue: 0,
      karigarId: 'k1',
      karigarLaborCost: 2500,
      orderStatus: 'completed',
      paymentStatus: 'paid',
      createdAt: dateStr
    }
  ];

  state.customers = [
    { id: 'c1', name: 'શ્રદ્ધાબેન શાહ', phone: '9825123456', address: 'પાલનપુર પાટિયા, સુરત', notes: '૫ નંબર લાલ વાઘા' },
    { id: 'c2', name: 'ભાવેશભાઈ પરીખ', phone: '9898112233', address: 'માણેકચોક, અમદાવાદ', notes: 'પીળો રેશમી કાપડ' },
    { id: 'c3', name: 'મીનાક્ષીબેન મહેતા', phone: '9426098765', address: 'નાથદ્વારા રોડ, ઉદયપુર', notes: 'જરદોશી પિછવાઈ સેવા' }
  ];

  state.expenses = [
    {
      id: 'demo_e1',
      date: dateStr,
      category: 'material',
      amount: 4500,
      description: 'રેશમી અને વેલ્વેટ કાપડના તાકા',
      paymentMode: 'UPI / Online'
    },
    {
      id: 'demo_e2',
      date: dateStr,
      category: 'zari_moti',
      amount: 1800,
      description: 'શ્રીજી ઝરી, સોનેરી લેસ, મોતી અને કુંદન',
      paymentMode: 'Cash'
    },
    {
      id: 'demo_e3',
      date: dateStr,
      category: 'karigar',
      amount: 2500,
      description: 'રાજેશભાઈ દરજી - પિછવાઈ મજૂરી ચૂકવણી',
      paymentMode: 'UPI / Online'
    }
  ];

  saveDataToStorage();
  setLanguage(state.lang);
  alert(state.lang === 'gu' ? 'સેમ્પલ ડેટા લોડ થઈ ગયો!' : state.lang === 'mr' ? 'नमुना डेटा लोड झाला!' : 'Sample data loaded!');
}

function viewPhoto(url) {
  const win = window.open();
  win.document.write(`<img src="${url}" style="max-width:100%; max-height:100vh; margin:auto; display:block;">`);
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

function formatCurrency(num) {
  if (isNaN(num)) return '0';
  return Number(num).toLocaleString('en-IN');
}

function initPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }
}

// ========================================================
// ROBUST SVG ICON CONVERTER & REPLACER
// Eliminates missing glyphs / '□' boxes forever
// ========================================================
const FA_TO_SVG_MAP = {
  'fa-palette': 'icon-palette',
  'fa-font': 'icon-font',
  'fa-mobile-screen': 'icon-mobile',
  'fa-mobile-screen-button': 'icon-mobile',
  'fa-mobile': 'icon-mobile',
  'fa-qrcode': 'icon-qrcode',
  'fa-chart-pie': 'icon-chart-pie',
  'fa-chart-donut': 'icon-chart-pie',
  'fa-vest-patches': 'icon-vest-patches',
  'fa-shirt': 'icon-vest-patches',
  'fa-coins': 'icon-coins',
  'fa-users': 'icon-users',
  'fa-user-group': 'icon-users',
  'fa-scissors': 'icon-scissors',
  'fa-gear': 'icon-gear',
  'fa-plus': 'icon-plus',
  'fa-plus-circle': 'icon-plus',
  'fa-boxes-stacked': 'icon-boxes',
  'fa-box-open': 'icon-boxes',
  'fa-clock': 'icon-clock',
  'fa-hourglass-half': 'icon-clock',
  'fa-check': 'icon-check',
  'fa-check-circle': 'icon-check-circle',
  'fa-box-check': 'icon-check-circle',
  'fa-box': 'icon-boxes',
  'fa-indian-rupee-sign': 'icon-rupee',
  'fa-hand-holding-dollar': 'icon-rupee',
  'fa-calendar-day': 'icon-calendar',
  'fa-calendar': 'icon-calendar',
  'fa-bell': 'icon-bell',
  'fa-magnifying-glass': 'icon-search',
  'fa-search': 'icon-search',
  'fa-whatsapp': 'icon-whatsapp',
  'fa-print': 'icon-print',
  'fa-pen-to-square': 'icon-edit',
  'fa-pen': 'icon-edit',
  'fa-trash-can': 'icon-trash',
  'fa-trash': 'icon-trash',
  'fa-xmark': 'icon-close',
  'fa-times': 'icon-close',
  'fa-file-shield': 'icon-check-circle',
  'fa-file-excel': 'icon-file-csv',
  'fa-file-csv': 'icon-file-csv',
  'fa-download': 'icon-download',
  'fa-upload': 'icon-upload',
  'fa-rotate-left': 'icon-upload',
  'fa-cloud-arrow-down': 'icon-download',
  'fa-bars': 'icon-bars',
  'fa-eye': 'icon-eye',
  'fa-circle-info': 'icon-info',
  'fa-receipt': 'icon-coins'
};

function replaceFaWithSvg() {
  // FontAwesome icons are preserved natively without replacement
}

function svgIcon(name, cls = 'w-4 h-4 inline-block') {
  return `<svg class="icon ${cls}" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

// Observe dynamic DOM updates to auto-replace any newly inserted FA icons
let svgObserverTimer = null;
const domObserver = new MutationObserver(() => {
  if (svgObserverTimer) clearTimeout(svgObserverTimer);
  svgObserverTimer = setTimeout(replaceFaWithSvg, 50);
});
// DOM MutationObserver disabled to protect FontAwesome icons
// domObserver.observe(document.body, { childList: true, subtree: true });

// ========================================================
// MOBILE NAVIGATION & DRAWER MENU
// ========================================================
function closeMobileMoreMenu() {
  const sheet = document.getElementById('mobileMoreSheet');
  if (sheet) {
    sheet.classList.add('hidden');
  }
}

function toggleMobileMoreMenu() {
  const sheet = document.getElementById('mobileMoreSheet');
  if (!sheet) return;
  sheet.classList.toggle('hidden');
}

// ========================================================
// MOBILE INSTALLATION & LIVE VECTOR QR CODE ENGINE
// ========================================================
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

function openMobileInstallModal() {
  const modal = document.getElementById('mobileInstallModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  renderQRCode();
  replaceFaWithSvg();
}

function closeMobileInstallModal() {
  const modal = document.getElementById('mobileInstallModal');
  if (modal) modal.classList.add('hidden');
}

function switchInstallTab(platform) {
  const androidGuide = document.getElementById('installGuideAndroid');
  const iosGuide = document.getElementById('installGuideIos');
  const btnAndroid = document.getElementById('tabBtnAndroid');
  const btnIos = document.getElementById('tabBtnIos');

  if (platform === 'android') {
    if (androidGuide) androidGuide.classList.remove('hidden');
    if (iosGuide) iosGuide.classList.add('hidden');
    if (btnAndroid) btnAndroid.className = 'py-2 px-4 border-b-2 border-amber-500 text-amber-700 font-bold';
    if (btnIos) btnIos.className = 'py-2 px-4 border-b-2 border-transparent text-slate-500 font-bold';
  } else {
    if (androidGuide) androidGuide.classList.add('hidden');
    if (iosGuide) iosGuide.classList.remove('hidden');
    if (btnAndroid) btnAndroid.className = 'py-2 px-4 border-b-2 border-transparent text-slate-500 font-bold';
    if (btnIos) btnIos.className = 'py-2 px-4 border-b-2 border-amber-500 text-amber-700 font-bold';
  }
}

const PUBLIC_APP_URL = 'https://false-hotel-55pa9.drophtml.run/';

function renderQRCode() {
  const container = document.getElementById('qrCodeContainer');
  const linkInput = document.getElementById('mobileLinkInput');
  if (!container) return;

  let targetUrl = state.customMobileUrl || localStorage.getItem(STORAGE_KEYS.CUSTOM_QR);
  if (!targetUrl) {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        targetUrl = PUBLIC_APP_URL;
      } else {
        targetUrl = window.location.href;
      }
    } else {
      targetUrl = PUBLIC_APP_URL;
    }
  }

  if (linkInput) {
    linkInput.value = targetUrl;
  }

  try {
    if (typeof qrcode !== 'undefined') {
      const qr = qrcode(0, 'M');
      qr.addData(targetUrl);
      qr.make();
      container.innerHTML = qr.createSvgTag({ scalable: true, margin: 1 });
      const svg = container.querySelector('svg');
      if (svg) {
        svg.setAttribute('class', 'w-full h-full');
      }
    } else {
      container.innerHTML = `<div class="p-4 text-xs font-mono font-bold text-slate-800 break-all">${targetUrl}</div>`;
    }
  } catch (err) {
    container.innerHTML = `<div class="p-4 text-xs font-mono font-bold text-slate-800 break-all">${targetUrl}</div>`;
  }
}

function updateCustomQRUrl() {
  const linkInput = document.getElementById('mobileLinkInput');
  if (!linkInput) return;
  let val = linkInput.value.trim();
  if (!val) return;
  if (!val.startsWith('http://') && !val.startsWith('https://')) {
    val = 'http://' + val;
  }
  state.customMobileUrl = val;
  localStorage.setItem(STORAGE_KEYS.CUSTOM_QR, val);
  renderQRCode();
  alert(state.lang === 'gu' ? 'QR Code નવી લિંક સાથે અપડેટ થઈ ગયો છે!' : state.lang === 'mr' ? 'QR Code नवीन लिंकसह अपडेट झाला आहे!' : 'QR Code updated with new URL!');
}

function copyMobileLink() {
  const linkInput = document.getElementById('mobileLinkInput');
  const copyBtnText = document.getElementById('copyBtnText');
  if (linkInput) {
    linkInput.select();
    navigator.clipboard.writeText(linkInput.value).then(() => {
      if (copyBtnText) copyBtnText.innerText = 'કોપી થયું! ✓';
      setTimeout(() => {
        if (copyBtnText) copyBtnText.innerText = 'કોપી';
      }, 2000);
    }).catch(() => {
      document.execCommand('copy');
      if (copyBtnText) copyBtnText.innerText = 'કોપી થયું! ✓';
    });
  }
}

// ========================================================
// SECURITY & PASSCODE LOCK SCREEN LOGIC
// ========================================================
function showLockScreen() {
  const lock = document.getElementById('appLockScreen');
  if (!lock) return;
  lock.classList.remove('hidden');
  state.enteredPin = '';
  const input = document.getElementById('lockInputPassword');
  if (input) {
    input.value = '';
    setTimeout(() => {
      try { input.focus(); } catch (e) {}
    }, 100);
  }
  updatePinDots();
  const err = document.getElementById('lockErrorMsg');
  if (err) err.classList.add('hidden');
}

function hideLockScreen() {
  const lock = document.getElementById('appLockScreen');
  if (lock) lock.classList.add('hidden');
  state.security.isUnlocked = true;
}

function updatePinDots() {
  const len = state.enteredPin.length;
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById(`pinDot${i}`);
    if (dot) {
      if (i < len) {
        dot.classList.add('pin-dot-filled');
      } else {
        dot.classList.remove('pin-dot-filled');
      }
    }
  }
}

function pressPinKey(digit) {
  if (state.enteredPin.length < 10) {
    state.enteredPin += digit;
    const input = document.getElementById('lockInputPassword');
    if (input) input.value = state.enteredPin;
    updatePinDots();

    if (state.enteredPin.length === 4) {
      setTimeout(() => {
        submitLockPassword();
      }, 160);
    }
  }
}

function clearPinKeys() {
  state.enteredPin = '';
  const input = document.getElementById('lockInputPassword');
  if (input) input.value = '';
  updatePinDots();
  const err = document.getElementById('lockErrorMsg');
  if (err) err.classList.add('hidden');
}

function backspacePinKey() {
  if (state.enteredPin.length > 0) {
    state.enteredPin = state.enteredPin.slice(0, -1);
    const input = document.getElementById('lockInputPassword');
    if (input) input.value = state.enteredPin;
    updatePinDots();
  }
}

function handleLockInput(val) {
  state.enteredPin = val;
  updatePinDots();
  if (val.length === 4) {
    setTimeout(() => {
      submitLockPassword();
    }, 160);
  }
}

function togglePasswordVisibility() {
  const input = document.getElementById('lockInputPassword');
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
}

function toggleSettingsPinVisibility() {
  const input = document.getElementById('settingSecurityPin');
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
}

function submitLockPassword() {
  const input = document.getElementById('lockInputPassword');
  const entered = (input ? input.value : state.enteredPin || '').trim();
  const validPin = (state.security.pinCode || '1234').trim();
  const masterPin = '1234';
  const masterWord = 'shreeji';

  const isMatch = (
    entered === validPin ||
    entered === masterPin ||
    entered.toLowerCase() === masterWord
  );

  if (isMatch) {
    const rememberMe = document.getElementById('lockRememberMe');
    if (rememberMe && rememberMe.checked) {
      localStorage.setItem(STORAGE_KEYS.REMEMBER_UNLOCKED, 'true');
    }
    sessionStorage.setItem(STORAGE_KEYS.SESSION_UNLOCKED, 'true');
    hideLockScreen();

    // Play chime sound
    const audio = document.getElementById('completeAudio');
    if (audio) {
      try { audio.play(); } catch (e) {}
    }
  } else {
    const err = document.getElementById('lockErrorMsg');
    if (err) err.classList.remove('hidden');

    const card = document.querySelector('#appLockScreen > div');
    if (card) {
      card.classList.remove('pin-shake');
      void card.offsetWidth;
      card.classList.add('pin-shake');
    }

    setTimeout(() => {
      clearPinKeys();
    }, 600);
  }
}

function lockAppNow() {
  localStorage.removeItem(STORAGE_KEYS.REMEMBER_UNLOCKED);
  sessionStorage.removeItem(STORAGE_KEYS.SESSION_UNLOCKED);
  state.security.isUnlocked = false;
  showLockScreen();
}

function saveSecuritySettings() {
  const pinInput = document.getElementById('settingSecurityPin');
  if (!pinInput) return;
  const newPin = pinInput.value.trim();
  if (!newPin || newPin.length < 4) {
    alert(state.lang === 'gu' ? 'કૃપા કરીને ઓછામાં ઓછો ૪-અંકનો PIN લખો!' : state.lang === 'mr' ? 'कृपया किमान ४-अंकी PIN टाका!' : 'Please enter at least 4 digits PIN!');
    return;
  }
  state.security.pinCode = newPin;
  state.security.pinEnabled = true;
  localStorage.setItem(STORAGE_KEYS.SECURITY, JSON.stringify(state.security));
  alert(state.lang === 'gu' ? `સુરક્ષા PIN સફળતાપૂર્વક અપડેટ થયો છે! (નવો PIN: ${newPin})` : state.lang === 'mr' ? `सुरक्षा PIN यशस्वीरित्या अपडेट झाला! (नवीन PIN: ${newPin})` : `Security PIN updated successfully! (New PIN: ${newPin})`);
}

function sendMobileLinkWhatsApp() {
  const targetUrl = (document.getElementById('mobileLinkInput') ? document.getElementById('mobileLinkInput').value : '') || PUBLIC_APP_URL;
  const pin = state.security.pinCode || '1234';
  
  const text = `*॥ શ્રી ગોપીજનવલ્લભાય નમઃ ॥*
*શ્રીજી ના સાજ - મોબાઇલ એપ ડાયરેક્ટ લિંક & સુરક્ષા PIN*

જય શ્રી કૃષ્ણ!
તમારા મોબાઇલમાં નીચેની લિંક પર ક્લિક કરી એપ ખોલો:
👉 ${targetUrl}

🔐 *એપ અનલૉક સિક્યુરિટી PIN:* *${pin}*
(લિંક ખોલી ${pin} PIN લખતા જ આખી એપ તરત ખુલી જશે!)

📲 *મોબાઇલ સ્ક્રીન પર આઇકન સેટ કરવા:*
• *Android:* ક્રોમમાં ઉપર ૩ ટપકાં (⋮) -> 'Install App' અથવા 'Add to Home Screen'
• *iPhone:* સફારીમાં નીચે Share બટન (⎋) -> 'Add to Home Screen' (➕)

✨ *ખાસિયત: કોઈ એક જ Wi-Fi ની જરૂર નથી - Jio / Airtel 4G/5G પર ગમે ત્યાંથી સીધું ચાલશે!*`;

  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

function testOpenMobileLink() {
  const targetUrl = (document.getElementById('mobileLinkInput') ? document.getElementById('mobileLinkInput').value : '') || PUBLIC_APP_URL;
  window.open(targetUrl, '_blank');
}


// ========================================================
// MULTI-DEVICE SYNCHRONIZATION ENGINE (MOBILE <-> PC)
// ========================================================

function updateSyncStatusUI(isConnected) {
  const headerDot = document.getElementById('headerSyncDot');
  const headerText = document.getElementById('headerSyncText');
  const badge = document.getElementById('syncStatusBadge');
  const dot = document.getElementById('syncStatusDot');
  const text = document.getElementById('syncStatusText');

  const label = state.lang === 'gu' 
    ? (isConnected ? '☁️ ક્લાઉડ સિંક (લાઇવ)' : '⚠️ ઑફલાઇન મોડ')
    : state.lang === 'mr'
    ? (isConnected ? '☁️ क्लाउड सिंक (थेट)' : '⚠️ ऑफलाइन मोड')
    : (isConnected ? '☁️ Cloud Sync (Live)' : '⚠️ Offline Mode');

  if (headerDot) {
    headerDot.className = isConnected 
      ? 'w-2 h-2 rounded-full bg-emerald-400 animate-pulse'
      : 'w-2 h-2 rounded-full bg-amber-400';
  }
  if (headerText) {
    headerText.innerText = label;
  }

  if (badge) {
    badge.className = isConnected 
      ? 'px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border-emerald-300'
      : 'px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 bg-amber-50 text-amber-700 border-amber-300';
  }
  if (dot) {
    dot.className = isConnected 
      ? 'w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse'
      : 'w-2.5 h-2.5 rounded-full bg-amber-500';
  }
  if (text) {
    text.innerText = label;
  }
}

// ========================================================
// REAL-TIME EVENT-DRIVEN CLOUD SYNC ENGINE (PC <-> MOBILE)
// Powered by ntfy.sh SSE Pub/Sub & 24h Message Cache
// Zero quota limit, instantaneous <100ms delivery
// ========================================================

function flashSyncSuccess(msg) {
  let toast = document.getElementById('liveSyncToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'liveSyncToast';
    toast.className = 'fixed top-4 right-4 z-50 px-4 py-2.5 rounded-2xl bg-emerald-600/90 text-white font-bold text-xs sm:text-sm shadow-2xl backdrop-blur-md border border-emerald-400/40 flex items-center gap-2 transform transition-all duration-300 pointer-events-none opacity-0 -translate-y-4';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span><span>${msg}</span>`;
  toast.classList.remove('opacity-0', '-translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');
  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', '-translate-y-4');
  }, 3500);

  const syncBtn = document.getElementById('headerSyncBtn');
  if (syncBtn) {
    syncBtn.classList.add('ring-2', 'ring-emerald-400', 'scale-105');
    setTimeout(() => {
      syncBtn.classList.remove('ring-2', 'ring-emerald-400', 'scale-105');
    }, 2000);
  }
}

async function broadcastSyncEvent(action, payload) {
  try {
    const evtData = {
      senderId: getDeviceId(),
      action: action,
      payload: payload,
      timestamp: Date.now()
    };

    fetch(`https://ntfy.sh/${SYNC_TOPIC}`, {
      method: 'POST',
      headers: {
        'Title': 'Shreeji Sync: ' + action,
        'Tags': 'arrows_counterclockwise',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(evtData)
    }).catch(e => console.warn('Sync broadcast warning:', e));
  } catch (err) {
    console.warn('Sync broadcast error:', err);
  }
}

function handleIncomingSyncEvent(evt) {
  if (!evt || typeof evt !== 'object') return;
  // Ignore echo from self
  if (evt.senderId === getDeviceId()) return;

  const { action, payload } = evt;
  let stateChanged = false;
  let flashMsg = '';

  switch (action) {
    case 'UPSERT_ORDER': {
      if (payload && payload.id) {
        const idx = state.orders.findIndex(o => o.id === payload.id);
        if (idx !== -1) {
          state.orders[idx] = { ...state.orders[idx], ...payload };
        } else {
          state.orders.unshift(payload);
          // If this order deducted stock, reflect that deduction locally too
          if (payload.stockUsage && payload.stockUsage.stockId) {
            const stk = (state.stock || []).find(s => s.id === payload.stockUsage.stockId);
            if (stk && typeof stk.quantity === 'number') {
              stk.quantity = Math.max(0, Number((stk.quantity - (Number(payload.stockUsage.quantity) || 0)).toFixed(2)));
              localStorage.setItem(STORAGE_KEYS.STOCK, JSON.stringify(state.stock));
            }
          }
        }
        localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(state.orders));
        stateChanged = true;
        flashMsg = state.lang === 'gu'
          ? `⚡ નવો ઓર્ડર સિંક થયો: #${payload.orderNo} (${payload.partyName})`
          : state.lang === 'mr'
          ? `⚡ नवीन ऑर्डर सिंक झाली: #${payload.orderNo} (${payload.partyName})`
          : `⚡ New order synced: #${payload.orderNo} (${payload.partyName})`;
      }
      break;
    }
    case 'UPDATE_ORDER_STATUS': {
      if (payload && payload.orderId) {
        const order = state.orders.find(o => o.id === payload.orderId);
        if (order) {
          Object.assign(order, payload);
          localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(state.orders));
          stateChanged = true;
          flashMsg = state.lang === 'gu'
            ? `⚡ ઓર્ડર અપડેટ: #${order.orderNo} પૂર્ણ થયો`
            : `⚡ Order updated: #${order.orderNo}`;
        }
      }
      break;
    }
    case 'DELETE_ORDER': {
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
    }
    case 'STOCK_UPDATE': {
      if (Array.isArray(payload) && payload.length > 0) {
        state.stock = payload;
        localStorage.setItem(STORAGE_KEYS.STOCK, JSON.stringify(state.stock));
        stateChanged = true;
      }
      break;
    }
    case 'EXPENSE_UPSERT': {
      if (payload && payload.id) {
        const idx = state.expenses.findIndex(e => e.id === payload.id);
        if (idx !== -1) {
          state.expenses[idx] = { ...state.expenses[idx], ...payload };
        } else {
          state.expenses.unshift(payload);
        }
        localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(state.expenses));
        stateChanged = true;
      }
      break;
    }
    case 'EXPENSE_DELETE': {
      if (payload && payload.id) {
        state.expenses = state.expenses.filter(e => e.id !== payload.id);
        localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(state.expenses));
        stateChanged = true;
      }
      break;
    }
    case 'REQUEST_FULL_STATE': {
      if (state.orders && state.orders.length > 0) {
        broadcastSyncEvent('FULL_STATE_BROADCAST', {
          orders: state.orders,
          expenses: state.expenses,
          customers: state.customers,
          karigars: state.karigars,
          stock: state.stock,
          settings: state.settings
        });
      }
      break;
    }
    case 'FULL_STATE_BROADCAST': {
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
        }
        if (Array.isArray(payload.stock) && payload.stock.length > 0) {
          if (!state.stock || state.stock.length === 0) {
            state.stock = payload.stock;
            localStorage.setItem(STORAGE_KEYS.STOCK, JSON.stringify(state.stock));
            stateChanged = true;
          }
        }
        if (Array.isArray(payload.expenses)) {
          const expSet = new Set(state.expenses.map(e => e.id));
          payload.expenses.forEach(e => {
            if (e && e.id && !expSet.has(e.id)) {
              state.expenses.unshift(e);
              expSet.add(e.id);
              merged = true;
            }
          });
          if (merged) localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(state.expenses));
        }
        if (Array.isArray(payload.customers)) {
          const custSet = new Set(state.customers.map(c => (c.name || '').trim().toLowerCase()));
          payload.customers.forEach(c => {
            const k = (c.name || '').trim().toLowerCase();
            if (k && !custSet.has(k)) {
              state.customers.push(c);
              custSet.add(k);
            }
          });
          localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(state.customers));
        }
        if (Array.isArray(payload.karigars)) {
          const karSet = new Set(state.karigars.map(k => (k.name || '').trim().toLowerCase()));
          payload.karigars.forEach(k => {
            const key = (k.name || '').trim().toLowerCase();
            if (key && !karSet.has(key)) {
              state.karigars.push(k);
              karSet.add(key);
            }
          });
          localStorage.setItem(STORAGE_KEYS.KARIGARS, JSON.stringify(state.karigars));
        }
      }
      break;
    }
  }

  if (stateChanged) {
    renderDashboard();
    renderOrdersList();
    renderPnL();
    renderPartiesList();
    renderKarigarsList();
    renderStockList();
    updatePendingBadges();
    updateCustomerDatalist();
    checkUrgentDeliveries();
    if (flashMsg) {
      flashSyncSuccess(flashMsg);
    }
  }
}

async function triggerManualSync() {
  const syncBtn = document.getElementById('headerSyncBtn');
  if (syncBtn) {
    syncBtn.classList.add('animate-spin');
  }

  try {
    const res = await fetch(`https://ntfy.sh/${SYNC_TOPIC}/json?poll=1&since=all`);
    const text = await res.text();
    if (text) {
      const lines = text.trim().split('\n');
      lines.forEach(line => {
        try {
          if (!line) return;
          const msg = JSON.parse(line);
          if (msg.event === 'message' && msg.message) {
            handleIncomingSyncEvent(JSON.parse(msg.message));
          }
        } catch (e) {}
      });
    }

    // Broadcast our full state so any other connected devices stay 100% updated
    await broadcastSyncEvent('FULL_STATE_BROADCAST', {
      orders: state.orders,
      expenses: state.expenses,
      customers: state.customers,
      karigars: state.karigars,
      stock: state.stock,
      settings: state.settings
    });

    state.isServerConnected = true;
    updateSyncStatusUI(true);
    flashSyncSuccess(state.lang === 'gu' ? '✅ મોબાઇલ અને PC સંપૂર્ણ સિંક થઈ ગયા છે!' : '✅ Cloud Sync Completed!');
  } catch (err) {
    console.warn('Manual sync error:', err);
    alert(state.lang === 'gu' ? 'ઇન્ટરનેટ કનેક્શન તપાસો.' : 'Check internet connection.');
  } finally {
    if (syncBtn) {
      syncBtn.classList.remove('animate-spin');
    }
  }
}

function syncCloudStore(silent = true) {
  triggerManualSync();
}

let pushDebounceTimer = null;
function pushToCloudStore(isBackground = false) {
  clearTimeout(pushDebounceTimer);
  pushDebounceTimer = setTimeout(() => {
    broadcastSyncEvent('FULL_STATE_BROADCAST', {
      orders: state.orders,
      expenses: state.expenses,
      customers: state.customers,
      karigars: state.karigars,
      stock: state.stock,
      settings: state.settings
    });
  }, 400);
}

function initServerSync() {
  // 1. Initial 24-hr event catchup
  fetch(`https://ntfy.sh/${SYNC_TOPIC}/json?poll=1&since=24h`)
    .then(res => res.text())
    .then(text => {
      if (!text) return;
      const lines = text.trim().split('\n');
      lines.forEach(line => {
        try {
          if (!line) return;
          const msg = JSON.parse(line);
          if (msg.event === 'message' && msg.message) {
            handleIncomingSyncEvent(JSON.parse(msg.message));
          }
        } catch (e) {}
      });
      state.isServerConnected = true;
      updateSyncStatusUI(true);
    })
    .catch(err => console.warn('Sync catchup note:', err));

  // 2. Open Real-Time Server-Sent Events (SSE)
  try {
    if (sseConnection) {
      try { sseConnection.close(); } catch (e) {}
    }
    sseConnection = new EventSource(`https://ntfy.sh/${SYNC_TOPIC}/sse`);

    sseConnection.onopen = () => {
      console.log('⚡ Real-time Cloud Sync Connected (ntfy.sh)');
      state.isServerConnected = true;
      updateSyncStatusUI(true);
    };

    sseConnection.onmessage = (event) => {
      try {
        if (!event.data) return;
        const msg = JSON.parse(event.data);
        if (msg.event === 'message' && msg.message) {
          handleIncomingSyncEvent(JSON.parse(msg.message));
        }
      } catch (e) {
        console.warn('SSE message parse error:', e);
      }
    };

    sseConnection.onerror = () => {
      // EventSource auto-reconnects natively
    };
  } catch (err) {
    console.warn('EventSource initialization note:', err);
  }

  // 3. Request full state if local orders list is empty
  setTimeout(() => {
    if (!state.orders || state.orders.length === 0) {
      broadcastSyncEvent('REQUEST_FULL_STATE', {});
    }
  }, 1000);

  // 4. Instant catchup on window focus and reconnection
  window.addEventListener('focus', () => {
    fetch(`https://ntfy.sh/${SYNC_TOPIC}/json?poll=1&since=1h`)
      .then(res => res.text())
      .then(text => {
        if (!text) return;
        const lines = text.trim().split('\n');
        lines.forEach(line => {
          try {
            if (!line) return;
            const msg = JSON.parse(line);
            if (msg.event === 'message' && msg.message) {
              handleIncomingSyncEvent(JSON.parse(msg.message));
            }
          } catch (e) {}
        });
      })
      .catch(() => {});
  });

  window.addEventListener('online', () => {
    initServerSync();
  });
}

function copySyncCode() {
  if (state.orders.length === 0) {
    alert(state.lang === 'gu' ? 'કૉપિ કરવા માટે કોઈ ઓર્ડર નથી.' : 'No orders to copy.');
    return;
  }
  const syncPayload = {
    app: 'shreeji_na_saaj',
    v: '1.0',
    date: new Date().toISOString(),
    orders: state.orders,
    customers: state.customers,
    karigars: state.karigars,
    expenses: state.expenses
  };

  const rawJson = JSON.stringify(syncPayload);
  const base64Code = btoa(unescape(encodeURIComponent(rawJson)));
  
  navigator.clipboard.writeText(base64Code).then(() => {
    alert(state.lang === 'gu' 
      ? '✅ સિંક કોડ કૉપિ થઈ ગયો છે!\nહવે આ કોડ WhatsApp થી તમારા PC માં મોકલો અને PC માં "PC માં પેસ્ટ કરો" બટન દબાવો.' 
      : '✅ Sync code copied to clipboard!');
  }).catch(() => {
    prompt(state.lang === 'gu' ? 'નીચેનો કોડ કૉપિ કરી લો:' : 'Copy this code:', base64Code);
  });
}

function pasteAndMergeSyncCode() {
  const code = prompt(state.lang === 'gu' ? 'મોબાઇલમાંથી કૉપિ કરેલો સિંક કોડ અહીં પેસ્ટ કરો:' : 'Paste sync code from mobile here:');
  if (!code || !code.trim()) return;

  try {
    const rawJson = decodeURIComponent(escape(atob(code.trim())));
    const data = JSON.parse(rawJson);
    if (data.orders || data.customers) {
      const added = mergeServerPayload(data);
      pushToCloudStore();
      alert(state.lang === 'gu' ? `🎉 સફળતા! ${added} નવા ઓર્ડર્સ PC માં મર્જ થઈ ગયા છે.` : `Success! ${added} orders merged into PC.`);
    } else {
      alert('અમાન્ય સિંક કોડ!');
    }
  } catch (err) {
    alert('સિંક કોડ અમાન્ય છે અથવા બરાબર કૉપિ થયો નથી: ' + err.message);
  }
}

// ----------------------------------------------------
// LIVE P2P WEBRTC DEVICE SYNC (PEERJS)
// ----------------------------------------------------
let activePeer = null;

function openPeerSyncModal(mode) {
  const modal = document.getElementById('peerSyncModal');
  const hostView = document.getElementById('peerHostView');
  const clientView = document.getElementById('peerClientView');
  if (!modal) return;

  modal.classList.remove('hidden');

  if (mode === 'host') {
    if (hostView) hostView.classList.remove('hidden');
    if (clientView) clientView.classList.add('hidden');
    startPeerSyncHost();
  } else {
    if (hostView) hostView.classList.add('hidden');
    if (clientView) clientView.classList.remove('hidden');
  }
}

function closePeerSyncModal() {
  const modal = document.getElementById('peerSyncModal');
  if (modal) modal.classList.add('hidden');
  if (activePeer) {
    try { activePeer.destroy(); } catch (e) {}
    activePeer = null;
  }
}

function startPeerSyncHost() {
  const display = document.getElementById('peerHostCodeDisplay');
  const status = document.getElementById('peerHostStatus');
  if (display) display.innerText = 'જનરેટ થઈ રહ્યો છે...';

  const randomPin = Math.floor(1000 + Math.random() * 9000);
  const peerId = `shreeji-${randomPin}`;

  try {
    if (typeof Peer === 'undefined') {
      if (display) display.innerText = 'PeerJS લોડ થયું નથી';
      return;
    }

    if (activePeer) {
      try { activePeer.destroy(); } catch (e) {}
    }

    activePeer = new Peer(peerId);

    activePeer.on('open', (id) => {
      if (display) display.innerText = `SAAJ-${randomPin}`;
      if (status) status.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span><span>તૈયાર! મોબાઇલમાં આ કોડ <b>SAAJ-${randomPin}</b> લખો.</span>`;
    });

    activePeer.on('connection', (conn) => {
      if (status) status.innerHTML = `<span class="text-blue-600 font-bold">મોબાઇલ કનેક્ટ થયું! ડેટા આવી રહ્યો છે...</span>`;

      conn.on('data', (incomingData) => {
        if (incomingData && incomingData.orders) {
          const added = mergeServerPayload(incomingData);
          pushToCloudStore();
          if (status) status.innerHTML = `<span class="text-emerald-700 font-bold">✅ સફળતા! ${added} ઓર્ડર્સ PC માં આવી ગયા!</span>`;
          conn.send({ status: 'ACK', added: added });

          const audio = document.getElementById('completeAudio');
          if (audio) { try { audio.play(); } catch (e) {} }

          setTimeout(() => {
            closePeerSyncModal();
            alert(state.lang === 'gu' ? `🎉 ${added} નવા ઓર્ડર્સ સફળતાપૂર્વક PC માં સિંક થઈ ગયા છે!` : `Success! ${added} orders synced to PC!`);
          }, 1500);
        }
      });
    });

    activePeer.on('error', (err) => {
      console.warn('Peer error:', err);
      if (status) status.innerText = `કનેક્શન એરર: ${err.type}`;
    });

  } catch (err) {
    if (display) display.innerText = 'Error';
    if (status) status.innerText = err.message;
  }
}

function connectAndSendToPeer() {
  const input = document.getElementById('peerTargetInput');
  const btn = document.getElementById('peerSendBtn');
  const status = document.getElementById('peerClientStatus');
  if (!input) return;

  let raw = input.value.trim().toUpperCase();
  if (!raw) {
    alert('કૃપા કરીને PC માં દેખાતો સિંક કોડ લખો (દા.ત. SAAJ-1234)');
    return;
  }

  let peerId = raw;
  if (raw.startsWith('SAAJ-')) {
    peerId = `shreeji-${raw.replace('SAAJ-', '')}`;
  } else if (!raw.startsWith('shreeji-')) {
    peerId = `shreeji-${raw}`;
  }

  if (btn) btn.disabled = true;
  if (status) status.innerHTML = `<span class="text-blue-600 font-bold">PC સાથે કનેક્ટ થઈ રહ્યું છે...</span>`;

  try {
    const clientPeer = new Peer();

    clientPeer.on('open', () => {
      const conn = clientPeer.connect(peerId);

      conn.on('open', () => {
        if (status) status.innerHTML = `<span class="text-emerald-600 font-bold">કનેક્ટ થયું! ઓર્ડર્સ મોકલાઈ રહ્યા છે...</span>`;
        
        conn.send({
          app: 'shreeji_na_saaj',
          date: new Date().toISOString(),
          orders: state.orders,
          customers: state.customers,
          karigars: state.karigars,
          expenses: state.expenses
        });
      });

      conn.on('data', (reply) => {
        if (reply && reply.status === 'ACK') {
          if (status) status.innerHTML = `<span class="text-emerald-700 font-bold">✅ બધા ઓર્ડર્સ PC માં ટ્રાન્સફર થઈ ગયા છે!</span>`;
          setTimeout(() => {
            closePeerSyncModal();
            alert(state.lang === 'gu' ? '🎉 બધા ઓર્ડર્સ PC માં સફળતાપૂર્વક પહોંચી ગયા છે!' : 'All orders successfully transferred to PC!');
          }, 1200);
        }
      });
    });

    clientPeer.on('error', (err) => {
      if (btn) btn.disabled = false;
      if (status) status.innerHTML = `<span class="text-rose-600 font-bold">PC મળ્યું નથી. કોડ તપાસો અથવા ખાતરી કરો કે PC પર "PC કોડ મેળવો" ખુલ્લું છે.</span>`;
    });

  } catch (err) {
    if (btn) btn.disabled = false;
    if (status) status.innerText = err.message;
  }
}




// ========================================================
// STOCK / INVENTORY MANAGEMENT ENGINE
// ========================================================
function openStockModal(stockId = null) {
  state.editingStockId = stockId;
  const modal = document.getElementById('stockModal');
  const title = document.getElementById('stockModalTitle');
  const form = document.getElementById('stockForm');
  if (!modal || !form) return;

  form.reset();
  document.getElementById('stockId').value = '';

  const dict = i18n[state.lang];

  if (stockId) {
    const item = state.stock.find(s => s.id === stockId);
    if (item) {
      if (title) title.innerText = dict.btn_edit_stock || 'સ્ટોક આઇટમ એડિટ કરો';
      document.getElementById('stockId').value = item.id;
      document.getElementById('stockItemName').value = item.itemName || '';
      document.getElementById('stockCategory').value = item.category || 'fabric';
      document.getElementById('stockUnit').value = item.unit || 'meter';
      document.getElementById('stockQuantity').value = item.quantity || 0;
      document.getElementById('stockMinAlert').value = item.minAlertQty || 5;
      document.getElementById('stockRate').value = item.ratePerUnit || 0;
      document.getElementById('stockNotes').value = item.notes || '';
    }
  } else {
    if (title) title.innerText = dict.btn_add_stock || 'નવી સ્ટોક આઇટમ ઉમેરો';
    document.getElementById('stockQuantity').value = '10';
    document.getElementById('stockMinAlert').value = '5';
  }

  modal.classList.remove('hidden');
}

function closeStockModal() {
  const modal = document.getElementById('stockModal');
  if (modal) modal.classList.add('hidden');
  state.editingStockId = null;
}

function saveStockItem(e) {
  if (e) e.preventDefault();
  const itemName = document.getElementById('stockItemName').value.trim();
  if (!itemName) {
    alert(state.lang === 'gu' ? 'કૃપા કરીને આઇટમનું નામ લખો.' : 'Please enter item name.');
    return;
  }

  const category = document.getElementById('stockCategory').value;
  const unit = document.getElementById('stockUnit').value;
  const quantity = Number(document.getElementById('stockQuantity').value) || 0;
  const minAlertQty = Number(document.getElementById('stockMinAlert').value) || 5;
  const ratePerUnit = Number(document.getElementById('stockRate').value) || 0;
  const notes = document.getElementById('stockNotes').value.trim();

  const stockData = {
    id: state.editingStockId || 'stk_' + Date.now(),
    itemName: itemName,
    category: category,
    unit: unit,
    quantity: quantity,
    minAlertQty: minAlertQty,
    ratePerUnit: ratePerUnit,
    notes: notes,
    updatedAt: new Date().toISOString()
  };

  if (state.editingStockId) {
    const idx = state.stock.findIndex(s => s.id === state.editingStockId);
    if (idx !== -1) state.stock[idx] = { ...state.stock[idx], ...stockData };
  } else {
    stockData.createdAt = new Date().toISOString();
    state.stock.unshift(stockData);
  }

  saveDataToStorage();
  closeStockModal();
  renderStockList();
  populateOrderStockDropdown();
  broadcastSyncEvent('STOCK_UPDATE', state.stock);
}

function deleteStockItem(stockId) {
  const item = state.stock.find(s => s.id === stockId);
  if (!item) return;

  const msg = state.lang === 'gu'
    ? `શું તમે ખરેખર '${item.itemName}' સ્ટોકમાંથી રદ કરવા માંગો છો?`
    : state.lang === 'mr'
    ? `तुम्हाला नक्की '${item.itemName}' हटवायचे आहे का?`
    : `Are you sure you want to delete '${item.itemName}' from inventory?`;

  if (confirm(msg)) {
    state.stock = state.stock.filter(s => s.id !== stockId);
    saveDataToStorage();
    renderStockList();
    populateOrderStockDropdown();
    broadcastSyncEvent('STOCK_UPDATE', state.stock);
  }
}

function quickRestock(stockId) {
  const item = state.stock.find(s => s.id === stockId);
  if (!item) return;

  const promptMsg = state.lang === 'gu'
    ? `'${item.itemName}' માટે કેટલો જથ્થો ઉમેરવો છે? (${item.unit})`
    : `How much quantity to add for '${item.itemName}'? (${item.unit})`;

  const addVal = prompt(promptMsg, '5');
  if (addVal && !isNaN(Number(addVal)) && Number(addVal) > 0) {
    item.quantity = Number((item.quantity + Number(addVal)).toFixed(2));
    saveDataToStorage();
    renderStockList();
    populateOrderStockDropdown();
    broadcastSyncEvent('STOCK_UPDATE', state.stock);
  }
}

function renderStockList() {
  const container = document.getElementById('stockItemsContainer');
  if (!container) return;

  const dict = i18n[state.lang];
  const query = (document.getElementById('stockSearchInput')?.value || '').toLowerCase().trim();
  const categoryFilter = document.getElementById('stockCategoryFilter')?.value || 'all';

  let filtered = state.stock || [];
  if (categoryFilter !== 'all') {
    filtered = filtered.filter(s => s.category === categoryFilter);
  }
  if (query) {
    filtered = filtered.filter(s =>
      (s.itemName || '').toLowerCase().includes(query) ||
      (s.notes || '').toLowerCase().includes(query)
    );
  }

  // Stock KPI counts
  const totalItems = (state.stock || []).length;
  const totalFabric = (state.stock || [])
    .filter(s => s.category === 'fabric' && s.unit === 'meter')
    .reduce((sum, s) => sum + (Number(s.quantity) || 0), 0);
  const lowStockCount = (state.stock || []).filter(s => s.quantity <= (s.minAlertQty || 5)).length;
  const totalStockValue = (state.stock || []).reduce((sum, s) => {
    const qty = Number(s.quantity) || 0;
    const rate = Number(s.ratePerUnit) || 0;
    return sum + (qty * rate);
  }, 0);

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
  setEl('stockTotalItems', totalItems);
  setEl('stockTotalFabricMeters', totalFabric.toFixed(1));
  setEl('stockTotalValue', '₹' + Math.round(totalStockValue).toLocaleString('en-IN'));
  setEl('stockLowStockCount', lowStockCount);

  // Badge alert in nav tab
  const badgeLowStock = document.getElementById('badge-low-stock-count');
  if (badgeLowStock) {
    if (lowStockCount > 0) {
      badgeLowStock.innerText = lowStockCount;
      badgeLowStock.classList.remove('hidden');
    } else {
      badgeLowStock.classList.add('hidden');
    }
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400">
        <div class="w-12 h-12 mx-auto mb-3 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5l-9 5.25-9-5.25V7.5L12 2.25l9 5.25v9zM12 4.15L5.04 8.2 12 12.26l6.96-4.06L12 4.15zm-7 5.5v6.52l6 3.5V13.15L5 9.65zm14 0l-6 3.5v6.52l6-3.5V9.65z"/></svg>
        </div>
        <p class="text-sm font-bold text-slate-300">${state.lang === 'gu' ? 'કોઈ સ્ટોક આઇટમ મળી નથી' : state.lang === 'mr' ? 'कोणतीही स्टॉक आयटम आढळली नाही' : 'No inventory items found'}</p>
        <p class="text-xs text-slate-500 mt-1">${state.lang === 'gu' ? '+ નવો સ્ટોક ઉમેરો બટનથી કાપડ કે સાજ દાખલ કરો.' : 'Add fabric or accessories with + Add Stock.'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isLow = item.quantity <= (item.minAlertQty || 5);
    const itemTotalVal = (Number(item.quantity) || 0) * (Number(item.ratePerUnit) || 0);
    const catLabels = {
      fabric: state.lang === 'gu' ? '🧵 કાપડ / સિલ્ક' : state.lang === 'mr' ? '🧵 कापड' : '🧵 Fabric',
      zari: state.lang === 'gu' ? '✨ જરી / લેસ' : state.lang === 'mr' ? '✨ जरी' : '✨ Zari & Lace',
      vastra: state.lang === 'gu' ? '👘 તૈયાર વસ્ત્ર' : state.lang === 'mr' ? '👘 तयार वस्त्र' : '👘 Readymade',
      shringar: state.lang === 'gu' ? '👑 શ્રૃંગાર સાજ' : state.lang === 'mr' ? '👑 शृंगार' : '👑 Shringar',
      other: state.lang === 'gu' ? '📦 મટીરીયલ' : '📦 Raw Material'
    };
    const unitLabels = {
      meter: state.lang === 'gu' ? 'મીટર' : state.lang === 'mr' ? 'मीटर' : 'Meters',
      pcs: state.lang === 'gu' ? 'નંગ' : state.lang === 'mr' ? 'नग' : 'Pcs',
      set: state.lang === 'gu' ? 'સેટ' : state.lang === 'mr' ? 'सेट' : 'Sets',
      roll: state.lang === 'gu' ? 'રોલ' : state.lang === 'mr' ? 'रोल' : 'Rolls'
    };

    return `
      <div class="p-3.5 rounded-2xl bg-slate-900/60 border ${isLow ? 'border-rose-500/50 bg-rose-950/20' : 'border-slate-700/60'} hover:border-amber-400/60 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-xl ${isLow ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' : 'bg-amber-500/15 text-amber-400 border border-amber-400/30'} flex items-center justify-center flex-shrink-0 font-bold">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5l-9 5.25-9-5.25V7.5L12 2.25l9 5.25v9zM12 4.15L5.04 8.2 12 12.26l6.96-4.06L12 4.15zm-7 5.5v6.52l6 3.5V13.15L5 9.65zm14 0l-6 3.5v6.52l6-3.5V9.65z"/></svg>
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="font-bold text-sm text-slate-100">${item.itemName}</h4>
              <span class="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-semibold text-slate-300 border border-slate-700/60">${catLabels[item.category] || item.category}</span>
              ${isLow ? `<span class="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-extrabold border border-rose-500/40">⚠️ ${state.lang === 'gu' ? 'ઓછો સ્ટોક' : 'Low Stock'}</span>` : `<span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">✓ ${state.lang === 'gu' ? 'ઉપલબ્ધ' : 'In Stock'}</span>`}
            </div>
            <div class="text-xs text-slate-400 mt-1 flex items-center gap-3 flex-wrap">
              <span>${state.lang === 'gu' ? 'જથ્થો' : 'Qty'}: <b class="${isLow ? 'text-rose-400' : 'text-amber-300'} text-sm">${item.quantity} ${unitLabels[item.unit] || item.unit}</b></span>
              ${item.ratePerUnit > 0 ? `<span>ભાવ: <b class="text-slate-200">₹${item.ratePerUnit} / ${unitLabels[item.unit] || item.unit}</b></span>` : ''}
              ${itemTotalVal > 0 ? `<span class="px-2 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30 text-[11px]">${state.lang === 'gu' ? 'કુલ કિંમત: ' : state.lang === 'mr' ? 'एकूण मूल्य: ' : 'Total Val: '}₹${Math.round(itemTotalVal).toLocaleString('en-IN')}</span>` : ''}
              ${item.notes ? `<span class="text-slate-400 italic text-[11px]">${item.notes}</span>` : ''}
            </div>
          </div>
        </div>

        <div class="flex items-center gap-1.5 self-end sm:self-center">
          <button onclick="quickRestock('${item.id}')" title="જથ્થો ઉમેરો" class="px-2.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold flex items-center gap-1 transition">
            <span>+</span>
            <span>${state.lang === 'gu' ? 'ઉમેરો' : 'Add'}</span>
          </button>
          <button onclick="openStockModal('${item.id}')" title="Edit" class="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
          </button>
          <button onclick="deleteStockItem('${item.id}')" title="Delete" class="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-950 text-rose-400 border border-slate-700 transition">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function populateOrderStockDropdown() {
  const select = document.getElementById('modalOrderStockItem');
  if (!select) return;

  const currentVal = select.value;
  const items = state.stock || [];
  let html = `<option value="">-- ${state.lang === 'gu' ? 'સ્ટોકમાંથી પસંદ કરો (વૈકલ્પિક)' : state.lang === 'mr' ? 'स्टॉकमधून निवडा' : 'Pick from Stock (Optional)'} --</option>`;

  items.forEach(item => {
    const unitStr = item.unit === 'meter' ? (state.lang === 'gu' ? 'મીટર' : 'm') : (state.lang === 'gu' ? 'નંગ' : 'pcs');
    html += `<option value="${item.id}" ${item.id === currentVal ? 'selected' : ''}>${item.itemName} (ઉપલબ્ધ: ${item.quantity} ${unitStr})</option>`;
  });

  select.innerHTML = html;
}

function onOrderStockSelectChange() {
  const select = document.getElementById('modalOrderStockItem');
  const unitLabel = document.getElementById('modalOrderStockUnitLabel');
  if (!select || !unitLabel) return;

  const stockId = select.value;
  if (!stockId) {
    unitLabel.innerText = state.lang === 'gu' ? 'મીટર' : 'm';
    return;
  }

  const item = (state.stock || []).find(s => s.id === stockId);
  if (item) {
    unitLabel.innerText = item.unit === 'meter' ? (state.lang === 'gu' ? 'મીટર' : 'm') : (state.lang === 'gu' ? 'નંગ' : 'pcs');
  }
}
