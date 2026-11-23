@echo off
title Shreeji Na Saaj Launcher
cd /d "%~dp0"
echo ==========================================================
echo        ॥ શ્રી ગોપીજનવલ્લભાય નમઃ ॥ શ્રીજી ના સાજ
echo        Shreeji Na Saaj App Starting...
echo ==========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
