/**
 * ॥ શ્રી ગોપીજનવલ્લભાય નમઃ ॥
 * Shreeji Na Saaj - Automated Background File Watcher & Instant Deployer
 * Automatically detects file edits and deploys the project without any manual steps.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_DIR = 'C:\\Users\\User\\Desktop\\Shreeji Na Saaj';
const DESKTOP_ZIP = 'C:\\Users\\User\\Desktop\\shreeji_na_saaj_vercel.zip';
const TEMP_ZIP = path.join(process.env.TEMP || 'C:\\Temp', 'shreeji_auto_deploy.zip');
const HOOK_FILE = path.join(PROJECT_DIR, 'vercel_hook.txt');

const WATCHED_FILES = new Set([
  'index.html',
  'styles.css',
  'app.js',
  'sw.js',
  'manifest.json',
  'vercel.json'
]);

let isDeploying = false;
let debounceTimer = null;

console.log('\n=============================================================');
console.log(' ॥ શ્રીજી ના સાજ - AUTO DEPLOY ENGINE સક્રિય છે ॥');
console.log('=============================================================');
console.log('👀 ફાઇલો મોનિટર થઈ રહી છે: index.html, styles.css, app.js...');
console.log('💡 કોઈપણ ફાઈલમાં ફેરફાર કરીને સેવ કરશો એટલે આપોઆપ ડિપ્લોય થઈ જશે.\n');

function triggerAutoDeploy(changedFile) {
  if (isDeploying) return;
  isDeploying = true;

  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${timestamp}] 🔔 ફેરફાર ડિટેક્ટ થયો: "${changedFile}"`);
  console.log(`[${timestamp}] 📦 નવું પ્રોજેક્ટ પેકેજ બનાવી રહ્યા છીએ...`);

  try {
    // 1. Package files
    const filesToZip = [
      'index.html',
      'styles.css',
      'app.js',
      'logo.png',
      'manifest.json',
      'sw.js',
      'qrcode.min.js',
      'vercel.json',
      'database.json'
    ];
    const fileListStr = filesToZip.map(f => `'${path.join(PROJECT_DIR, f)}'`).join(',');
    const psCmd = `powershell -NoProfile -Command "Compress-Archive -Path ${fileListStr} -DestinationPath '${DESKTOP_ZIP}' -Force"`;
    execSync(psCmd, { stdio: 'ignore' });

    // Copy to temp zip as well
    fs.copyFileSync(DESKTOP_ZIP, TEMP_ZIP);
    console.log(`[${timestamp}] ✅ ડેસ્કટોપ Zip અપડેટ થઈ ગયું.`);

    // 2. Check if Vercel Deploy Hook exists
    let vercelHookUrl = '';
    if (fs.existsSync(HOOK_FILE)) {
      const hookContent = fs.readFileSync(HOOK_FILE, 'utf8');
      const match = hookContent.match(/https?:\/\/[^\s\r\n]+/);
      if (match) {
        vercelHookUrl = match[0].trim();
      }
    }

    if (vercelHookUrl && vercelHookUrl.startsWith('http')) {
      console.log(`[${timestamp}] 🚀 Vercel Deploy Hook ટ્રિગર કરી રહ્યા છીએ...`);
      try {
        const curlVercel = `curl.exe -s -X POST "${vercelHookUrl}"`;
        execSync(curlVercel, { stdio: 'ignore' });
        console.log(`[${timestamp}] ✨ Vercel પર Auto-Deploy સફળતાપૂર્વક શરૂ થઈ ગયું!`);
      } catch (err) {
        console.log(`[${timestamp}] ⚠️ Vercel hook error:`, err.message);
      }
    }

    // 3. Deploy to instant live server
    console.log(`[${timestamp}] 🌐 લાઈવ ક્લાઉડ સર્વર પર અપલોડ કરી રહ્યા છીએ...`);
    const deployCmd = `curl.exe -s -X POST https://drophtml.page/deploy -H "Content-Type: application/zip" --data-binary "@${TEMP_ZIP}"`;
    const resRaw = execSync(deployCmd, { encoding: 'utf8' });
    
    try {
      const res = JSON.parse(resRaw);
      if (res && res.url) {
        console.log(`[${timestamp}] 🎉 ઓટો-ડિપ્લોય સફળ! લાઈવ URL: ${res.url}\n`);
      } else {
        console.log(`[${timestamp}] ℹ️ ડિપ્લોય રિસ્પોન્સ:`, resRaw);
      }
    } catch(e) {
      console.log(`[${timestamp}] 🚀 અપલોડ પૂર્ણ!`);
    }

  } catch (error) {
    console.error(`[${timestamp}] ❌ ઓટો-ડિપ્લોય દરમિયાન ભૂલ આવી:`, error.message);
  } finally {
    isDeploying = false;
  }
}

// Watch directory for changes
fs.watch(PROJECT_DIR, (eventType, filename) => {
  if (!filename) return;
  const basename = path.basename(filename);

  if (WATCHED_FILES.has(basename)) {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      triggerAutoDeploy(basename);
    }, 800);
  }
});
