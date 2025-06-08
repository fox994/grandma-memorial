# 部署指南 - 緬懷阿嬤紀念網站

## 🚀 快速部署到 GitHub Pages

### 步驟 1: 準備 GitHub Repository

1. 在 GitHub 上建立新的 repository
   - Repository 名稱建議：`grandma-memorial` 或 `阿嬤追思網站`
   - 設定為 Public（GitHub Pages 免費版需要）

2. 將本地程式碼推送到 GitHub：
```bash
git init
git add .
git commit -m "初始提交：緬懷阿嬤紀念網站"
git branch -M main
git remote add origin https://github.com/你的用戶名/repository名稱.git
git push -u origin main
```

### 步驟 2: 手動部署

```bash
# 安裝依賴
npm install

# 建置專案
npm run build

# 部署到 GitHub Pages
npm run deploy
```

### 步驟 3: 設定 GitHub Pages

1. 前往 GitHub Repository 的 Settings 頁面
2. 在左側選單找到 "Pages"
3. 在 "Source" 部分選擇 "Deploy from a branch"
4. 選擇 `gh-pages` 分支
5. 點擊 "Save"

### 步驟 4: 訪問網站

網站將在以下網址上線：
```
https://你的用戶名.github.io/repository名稱
```

## 🔄 自動部署（推薦）

本專案已包含 GitHub Actions 工作流程，會在每次推送到 main 分支時自動部署。

### 啟用自動部署：

1. 確保 `.github/workflows/deploy.yml` 檔案存在
2. 推送程式碼到 main 分支
3. GitHub Actions 會自動執行建置和部署

## 🛠️ 本地開發

### 安裝依賴
```bash
npm install
```

### 啟動開發伺服器
```bash
npm start
```
開發伺服器會在 `http://localhost:3000` 啟動

### 建置生產版本
```bash
npm run build
```

### 預覽生產版本
```bash
npm install -g serve
serve -s build
```

## 📝 自訂設定

### 修改網站標題和描述

編輯 `public/index.html`：
```html
<title>您的自訂標題</title>
<meta name="description" content="您的自訂描述" />
```

### 修改 GitHub Pages 路徑

如果您的 repository 名稱不是 `grandma-memorial`，請修改 `package.json`：
```json
{
  "homepage": "https://您的用戶名.github.io/您的repository名稱"
}
```

同時修改 `src/App.tsx` 中的 basename：
```tsx
<Router basename="/您的repository名稱">
```

## 🎨 自訂樣式

### 修改顏色主題

編輯 `tailwind.config.js` 中的顏色設定：
```javascript
colors: {
  'warm-gold': '#您的顏色',
  'soft-cream': '#您的顏色',
  'gentle-brown': '#您的顏色',
  'memorial-gray': '#您的顏色',
}
```

### 添加自訂字體

在 `public/index.html` 中添加 Google Fonts 連結，然後在 `tailwind.config.js` 中設定字體家族。

## 🔧 故障排除

### 常見問題

1. **網站顯示 404 錯誤**
   - 檢查 GitHub Pages 設定是否正確
   - 確認 `homepage` 設定是否正確

2. **樣式沒有正確載入**
   - 確認 Tailwind CSS 已正確安裝
   - 檢查 `src/index.css` 是否包含 Tailwind 指令

3. **部署失敗**
   - 檢查 `package.json` 中的 scripts 設定
   - 確認 gh-pages 套件已安裝

### 檢查部署狀態

在 GitHub Repository 的 "Actions" 頁面可以查看部署狀態和錯誤訊息。

## 📞 技術支援

如果遇到技術問題，可以：
1. 檢查 GitHub Actions 的執行日誌
2. 查看瀏覽器的開發者工具控制台
3. 參考 React 和 GitHub Pages 的官方文檔

---

*願這個美麗的紀念網站能永遠保存對阿嬤的愛與思念* 🌸 