const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlUrl = 'file:///C:/Users/User/Desktop/Shreeji%20Na%20Saaj/index.html';
const port = 9782;
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

          // 1. Add a sample order to test
          const initRes = await sendCmd('Runtime.evaluate', {
            expression: `
              switchTab('orders');
              state.orders = [{
                id: 'ord_test_delete_1',
                orderNo: 'SN-999',
                partyName: 'શ્રીજી ભક્ત દર્શનભાઈ',
                partyPhone: '9825099999',
                swaroop: 'શ્રીનાથજી',
                itemCategory: 'વાઘા',
                materialOption: 'with_material',
                estimatedPrice: 3500,
                advanceReceived: 1000,
                balanceDue: 2500,
                orderStatus: 'in_progress',
                orderDate: '2026-11-24',
                deliveryDate: '2026-11-28',
                createdAt: new Date().toISOString()
              }];
              saveDataToStorage();
              renderOrdersList();
              ({
                ordersCount: state.orders.length,
                orderNo: state.orders[0].orderNo
              })
            `,
            returnByValue: true
          });
          console.log('1. Order created:', initRes.result.value);

          await new Promise(r => setTimeout(r, 600));

          // 2. Trigger delete confirmation modal
          const openModalRes = await sendCmd('Runtime.evaluate', {
            expression: `
              deleteOrder('ord_test_delete_1');
              ({
                modalVisible: !document.getElementById('deleteConfirmModal').classList.contains('hidden'),
                titleText: document.getElementById('deleteConfirmTitle').innerText,
                descText: document.getElementById('deleteConfirmDesc').innerText
              })
            `,
            returnByValue: true
          });
          console.log('2. Delete modal opened:', openModalRes.result.value);

          await new Promise(r => setTimeout(r, 600));

          // Capture screenshot of the confirmation modal
          const modalShot = await sendCmd('Page.captureScreenshot', { format: 'png' });
          fs.writeFileSync(path.join(outDir, 'order_delete_confirm_modal.png'), Buffer.from(modalShot.data, 'base64'));
          console.log('Saved order_delete_confirm_modal.png');

          // 3. Click Confirm Delete
          const execRes = await sendCmd('Runtime.evaluate', {
            expression: `
              executeDeleteOrder();
              ({
                ordersRemaining: state.orders.length,
                deletedIdsCount: state.deletedOrderIds.length,
                isTombstoned: state.deletedOrderIds.includes('ord_test_delete_1'),
                modalHidden: document.getElementById('deleteConfirmModal').classList.contains('hidden')
              })
            `,
            returnByValue: true
          });
          console.log('3. Deletion executed:', execRes.result.value);

          // 4. Test tombstone protection: simulate cloud sync sending the deleted order back!
          const syncRes = await sendCmd('Runtime.evaluate', {
            expression: `
              // Simulate UPSERT_ORDER of the deleted order
              handleIncomingSyncEvent({
                action: 'UPSERT_ORDER',
                senderId: 'remote_device_test',
                payload: {
                  id: 'ord_test_delete_1',
                  orderNo: 'SN-999',
                  partyName: 'શ્રીજી ભક્ત દર્શનભાઈ'
                }
              });

              // Simulate FULL_STATE_BROADCAST containing the deleted order
              handleIncomingSyncEvent({
                action: 'FULL_STATE_BROADCAST',
                senderId: 'remote_device_test',
                payload: {
                  orders: [{
                    id: 'ord_test_delete_1',
                    orderNo: 'SN-999',
                    partyName: 'શ્રીજી ભક્ત દર્શનભાઈ'
                  }]
                }
              });

              ({
                ordersAfterResurrectAttempt: state.orders.length,
                protectionSuccess: state.orders.length === 0
              })
            `,
            returnByValue: true
          });
          console.log('4. Tombstone sync protection test:', syncRes.result.value);

          await new Promise(r => setTimeout(r, 600));

          // Capture screenshot of empty state after deletion
          const afterShot = await sendCmd('Page.captureScreenshot', { format: 'png' });
          fs.writeFileSync(path.join(outDir, 'orders_after_delete_verified.png'), Buffer.from(afterShot.data, 'base64'));
          console.log('Saved orders_after_delete_verified.png');

          ws.close();
          browser.kill();
          process.exit(0);
        };
      } catch (err) {
        console.error('Error during test:', err);
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
