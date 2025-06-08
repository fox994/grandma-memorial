# GitHub Pages 部署指南

## 📋 部署前檢查清單

### ✅ 專案準備狀態
- [x] 專案建置成功 (`npm run build`)
- [x] 所有圖片路徑正確
- [x] 響應式設計完善
- [x] 內容完整（詩詞、文章、照片）
- [x] 背景圖片正確載入

## 🚀 部署步驟

### 步驟 1: 創建 GitHub Repository

1. 登入您的 GitHub 帳號
2. 點擊右上角的 "+" 按鈕，選擇 "New repository"
3. 填寫 Repository 資訊：
   - **Repository name**: `grandma-memorial` (或您喜歡的名稱)
   - **Description**: `緬懷我們親愛的阿嬤 - 追思紀念網站`
   - **Visibility**: Public (GitHub Pages 免費版需要 Public)
   - **Initialize**: 不要勾選任何選項（因為我們已有本地專案）

### 步驟 2: 上傳專案到 GitHub

在您的專案資料夾中執行以下命令：

```bash
# 初始化 Git repository（如果還沒有的話）
git init

# 添加所有檔案
git add .

# 提交變更
git commit -m "Initial commit: 阿嬤追思網站完整版"

# 添加遠端 repository（請替換成您的 GitHub 用戶名和 repository 名稱）
git remote add origin https://github.com/fox994/grandma-memorial.git

# 推送到 GitHub
git push -u origin main
```

### 步驟 3: 啟用 GitHub Pages

1. 在 GitHub repository 頁面，點擊 "Settings" 標籤
2. 在左側選單中找到 "Pages"
3. 在 "Source" 部分：
   - 選擇 "Deploy from a branch"
   - Branch: 選擇 "main"
   - Folder: 選擇 "/ (root)"
4. 點擊 "Save"

### 步驟 4: 等待部署完成

- GitHub 會自動開始建置和部署
- 通常需要 5-10 分鐘
- 完成後會顯示網站 URL：`https://fox994.github.io/grandma-memorial/`

## 🔧 自動部署設定（推薦）

我們已經為您準備了 GitHub Actions 自動部署設定。當您推送代碼到 GitHub 時，會自動建置和部署。

### 檢查 GitHub Actions 設定

確認 `.github/workflows/deploy.yml` 檔案存在且內容正確：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## 📝 重要設定說明

### package.json 設定
確認 `package.json` 中的 `homepage` 設定正確：
```json
{
  "homepage": "https://fox994.github.io/grandma-memorial/"
}
```

### 圖片路徑設定
我們已經使用 `${process.env.PUBLIC_URL}` 來確保圖片路徑在 GitHub Pages 上正確顯示。

## 🌐 訪問您的網站

部署完成後，您可以通過以下 URL 訪問網站：
```
https://fox994.github.io/grandma-memorial/
```

## 🔄 更新網站

當您需要更新網站內容時：

1. 在本地修改檔案
2. 提交變更：
   ```bash
   git add .
   git commit -m "更新內容描述"
   git push
   ```
3. GitHub Actions 會自動重新部署

## 🛠️ 故障排除

### 常見問題

1. **圖片無法顯示**
   - 檢查圖片檔案是否在 `public/gallery/` 資料夾中
   - 確認圖片路徑使用 `${process.env.PUBLIC_URL}`

2. **CSS 樣式異常**
   - 清除瀏覽器快取
   - 檢查 `homepage` 設定是否正確

3. **部署失敗**
   - 檢查 GitHub Actions 日誌
   - 確認 `npm run build` 在本地能成功執行

4. **404 錯誤**
   - 確認 GitHub Pages 設定正確
   - 檢查 repository 是否為 Public

### 檢查部署狀態

1. 在 GitHub repository 中點擊 "Actions" 標籤
2. 查看最新的 workflow 執行狀態
3. 如果失敗，點擊查看詳細錯誤訊息

## 📱 測試建議

部署完成後，建議在以下環境測試：

- **桌面瀏覽器**: Chrome, Firefox, Safari, Edge
- **手機瀏覽器**: iOS Safari, Android Chrome
- **平板**: iPad, Android 平板

測試項目：
- [ ] 首頁圖片正常顯示
- [ ] 影像專輯投影片功能正常
- [ ] 文字專輯內容完整顯示
- [ ] 響應式設計在各種螢幕尺寸下正常
- [ ] 導航功能正常

## 🎉 完成！

恭喜！您的阿嬤追思網站現在已經成功部署到 GitHub Pages，全世界的人都可以訪問這個美麗的紀念網站了。

## 📞 技術支援

如果在部署過程中遇到任何問題，請檢查：
1. GitHub Actions 執行日誌
2. 瀏覽器開發者工具的錯誤訊息
3. 確認所有檔案都已正確上傳到 GitHub 