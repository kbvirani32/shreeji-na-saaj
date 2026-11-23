@echo off
title Shreeji Na Saaj - Auto Deploy Engine
cls
echo =============================================================
echo   Shreeji Na Saaj - Auto Deploy Background Engine
echo =============================================================
echo.
echo Automatic file monitoring is starting...
echo Keep this window open in background.
echo Whenever you save index.html, styles.css or app.js,
echo it will automatically deploy to the live server!
echo.
"C:\Users\User\AppData\Roaming\Antigravity\bin\agy-node.cmd" "C:\Users\User\Desktop\Shreeji Na Saaj\auto_deploy_watcher.js"
pause
