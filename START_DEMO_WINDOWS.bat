@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    start http://localhost:8080
    py -m http.server 8080
) else (
    where python >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        start http://localhost:8080
        python -m http.server 8080
    ) else (
        echo Python is not installed. You can also open index.html in Chrome or Edge.
        pause
    )
)
