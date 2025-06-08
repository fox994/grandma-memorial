@echo off
echo ========================================
echo    阿嬤追思網站 - GitHub Pages 部署
echo ========================================
echo.

echo 正在檢查專案狀態...
if not exist "build" (
    echo 正在建置專案...
    call npm run build
    if errorlevel 1 (
        echo 建置失敗！請檢查錯誤訊息。
        pause
        exit /b 1
    )
    echo 建置完成！
) else (
    echo 發現已存在的 build 資料夾
)

echo.
echo 請確認以下資訊：
echo 1. 您已經在 GitHub 上創建了 repository
echo 2. Repository 名稱為: grandma-memorial
echo 3. 您的 GitHub 用戶名為: fox994
echo.

set /p confirm="確認以上資訊正確嗎？(y/n): "
if /i "%confirm%" neq "y" (
    echo 請先完成 GitHub repository 設定，然後重新執行此腳本。
    pause
    exit /b 0
)

echo.
echo 正在初始化 Git repository...
git init

echo 正在添加所有檔案...
git add .

echo 正在提交變更...
git commit -m "Initial commit: 阿嬤追思網站完整版"

echo 正在添加遠端 repository...
git remote add origin https://github.com/fox994/grandma-memorial.git

echo 正在推送到 GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo 推送失敗！可能的原因：
    echo 1. GitHub repository 不存在
    echo 2. 網路連線問題
    echo 3. 認證問題
    echo.
    echo 請檢查錯誤訊息並手動執行 Git 命令。
    pause
    exit /b 1
)

echo.
echo ========================================
echo           部署完成！
echo ========================================
echo.
echo 您的網站將在幾分鐘內可以通過以下網址訪問：
echo https://fox994.github.io/grandma-memorial/
echo.
echo 請到 GitHub repository 的 Actions 標籤查看部署狀態。
echo.
pause 