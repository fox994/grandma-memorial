# 🚀 快速部署指南

## 📋 準備工作

✅ **專案狀態檢查**
- [x] 專案建置成功 (`npm run build`)
- [x] 所有檔案準備完成
- [x] 圖片路徑設定正確
- [x] GitHub Actions 設定完成

## 🎯 三步驟快速部署

### 步驟 1: 創建 GitHub Repository

1. 前往 [GitHub](https://github.com) 並登入
2. 點擊右上角 "+" → "New repository"
3. 設定 Repository：
   - **Name**: `grandma-memorial`
   - **Description**: `緬懷我們親愛的阿嬤 - 追思紀念網站`
   - **Public** ✅
   - **不要** 勾選任何初始化選項

### 步驟 2: 執行自動部署腳本

雙擊執行 `deploy-to-github.bat` 檔案，或在命令提示字元中執行：

```cmd
deploy-to-github.bat
```

腳本會自動：
- 檢查建置狀態
- 初始化 Git
- 上傳所有檔案到 GitHub
- 設定遠端連結

### 步驟 3: 啟用 GitHub Pages

1. 在 GitHub repository 頁面點擊 **"Settings"**
2. 左側選單找到 **"Pages"**
3. Source 設定：
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
4. 點擊 **"Save"**

## 🌐 網站網址

部署完成後，您的網站將可通過以下網址訪問：

```
https://fox994.github.io/grandma-memorial/
```

## ⏱️ 部署時間

- 上傳到 GitHub: 1-2 分鐘
- GitHub Pages 建置: 5-10 分鐘
- 總計: 約 10-15 分鐘

## 🔍 檢查部署狀態

1. 在 GitHub repository 點擊 **"Actions"** 標籤
2. 查看 "Deploy to GitHub Pages" workflow 狀態
3. 綠色勾號 = 部署成功
4. 紅色 X = 部署失敗（點擊查看詳細錯誤）

## 📱 測試清單

部署完成後請測試：

- [ ] 首頁載入正常
- [ ] 阿嬤照片顯示正確
- [ ] 影像專輯投影片功能正常
- [ ] 文字專輯內容完整
- [ ] 手機版響應式設計正常
- [ ] 導航功能正常

## 🆘 常見問題

**Q: 圖片無法顯示？**
A: 確認圖片檔案在 `public/gallery/` 資料夾中

**Q: 網站顯示 404 錯誤？**
A: 檢查 GitHub Pages 設定是否正確啟用

**Q: 部署失敗？**
A: 查看 GitHub Actions 日誌，通常是建置錯誤

**Q: 樣式異常？**
A: 清除瀏覽器快取，等待 5-10 分鐘讓 CDN 更新

## 🎉 完成！

恭喜！您的阿嬤追思網站現在已經上線，可以分享給家人朋友了。

---

**技術支援**: 如有問題請檢查 GitHub Actions 日誌或瀏覽器開發者工具的錯誤訊息。 