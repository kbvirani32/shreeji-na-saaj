const { spawn } = require('child_process');
const http = require('http');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlUrl = 'file:///C:/Users/User/Desktop/Shreeji%20Na%20Saaj/index.html';
const port = 9781;

async function run() {
  const browser = spawn(edgePath, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
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
          await sendCmd('Runtime.enable');

          // Check current orders
          const checkRes = await sendCmd('Runtime.evaluate', {
            expression: `
              // Add a test order if empty to test deletion
              if (!state.orders || state.orders.length === 0) {
                state.orders = [{
                  id: 'test_ord_1',
                  orderNo: 'SN-001',
                  partyName: 'ટેસ્ટ પાર્ટી',
                  partyPhone: '9825000000',
                  swaroop: 'શ્રીનાથજી',
                  itemCategory: 'વાઘા',
                  estimatedPrice: 2500,
                  advanceReceived: 500,
                  orderStatus: 'in_progress',
                  orderDate: '2026-11-24',
                  createdAt: new Date().toISOString()
                }];
                saveDataToStorage();
              }
              const countBefore = state.orders.length;
              const testId = state.orders[0].id;

              // Override confirm to return true
              window.confirm = () => true;

              deleteOrder(testId);
              const countAfter = state.orders.length;

              ({
                countBefore,
                countAfter,
                remainingOrders: state.orders.map(o => o.id)
              })
            `,
            returnByValue: true
          });

          console.log('Test deletion result:', checkRes.result.value);

          ws.close();
          browser.kill();
          process.exit(0);
        };
      } catch (err) {
        console.error('Error:', err);
        browser.kill();
        process.exit(1);
      }
    });
  }).on('error', err => {
    console.error(err);
    browser.kill();
    process.exit(1);
  });
}

run();
