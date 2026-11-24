const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlUrl = 'file:///C:/Users/User/Desktop/Shreeji%20Na%20Saaj/index.html';
const port = 9778;
const outDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\c0c55aaa-1155-4cb1-b6d7-e24ad2e84214';

async function run() {
  const browser = spawn(edgePath, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
    htmlUrl
  ]);

  await new Promise(r => setTimeout(r, 1500));

  http.get(`http://127.0.0.1:${port}/json`, async res => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', async () => {
      try {
        const tabs = JSON.parse(data);
        const pageTab = tabs.find(t => t.type === 'page');
        const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

        let msgId = 1;
        const sendCmd = (method, params = {}) => new Promise((resolve, reject) => {
          const id = msgId++;
          const handler = (evt) => {
            const resp = JSON.parse(evt.data);
            if (resp.id === id) {
              ws.removeEventListener('message', handler);
              if (resp.error) reject(resp.error);
              else resolve(resp.result);
            }
          };
          ws.addEventListener('message', handler);
          ws.send(JSON.stringify({ id, method, params }));
        });

        ws.onopen = async () => {
          await sendCmd('Emulation.setDeviceMetricsOverride', {
            width: 390,
            height: 844,
            deviceScaleFactor: 2,
            mobile: true
          });
          await sendCmd('Page.enable');
          await sendCmd('Runtime.enable');

          // Switch to stock tab and verify
          const evalRes = await sendCmd('Runtime.evaluate', {
            expression: `
              switchTab('stock');
              renderStockList();
              ({
                stockCount: state.stock.length,
                totalVal: document.getElementById('stockTotalValue')?.innerText,
                totalFabric: document.getElementById('stockTotalFabricMeters')?.innerText,
                totalItems: document.getElementById('stockTotalItems')?.innerText,
                activeTabMob: document.getElementById('mob-stock')?.classList.contains('active-mobile-tab'),
                itemCards: document.querySelectorAll('#stockItemsContainer > div').length
              })
            `,
            returnByValue: true
          });

          console.log('Mobile Stock Evaluation:', evalRes.result.value);

          await new Promise(r => setTimeout(r, 1000));

          const screenshot = await sendCmd('Page.captureScreenshot', { format: 'png' });
          fs.writeFileSync(path.join(outDir, 'mobile_stock_verified.png'), Buffer.from(screenshot.data, 'base64'));
          console.log('Saved mobile_stock_verified.png');

          // Also switch back to dashboard to verify mobile dashboard view
          await sendCmd('Runtime.evaluate', {
            expression: `switchTab('dashboard');`
          });
          await new Promise(r => setTimeout(r, 500));
          const dashScreenshot = await sendCmd('Page.captureScreenshot', { format: 'png' });
          fs.writeFileSync(path.join(outDir, 'mobile_dashboard_verified.png'), Buffer.from(dashScreenshot.data, 'base64'));
          console.log('Saved mobile_dashboard_verified.png');

          ws.close();
          browser.kill();
          process.exit(0);
        };
      } catch (err) {
        console.error('Error during CDP:', err);
        browser.kill();
        process.exit(1);
      }
    });
  }).on('error', err => {
    console.error('HTTP get error:', err);
    browser.kill();
    process.exit(1);
  });
}

run();
