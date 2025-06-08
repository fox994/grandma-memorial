#!/bin/bash

# 緬懷阿嬤紀念網站部署腳本

echo "🌸 開始部署緬懷阿嬤紀念網站..."

# 安裝依賴
echo "📦 安裝依賴..."
npm install

# 建置專案
echo "🔨 建置專案..."
npm run build

# 部署到 GitHub Pages
echo "🚀 部署到 GitHub Pages..."
npm run deploy

echo "✅ 部署完成！"
echo "🌐 網站將在幾分鐘後在 GitHub Pages 上線"
echo "�� 感謝您為阿嬤建立這個美麗的紀念網站" 