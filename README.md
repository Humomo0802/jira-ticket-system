# Jira 需求開單系統

這是可部署到 GitHub Pages 的靜態網站版本。

## 檔案

- `index.html`
- `styles.css`
- `app.js`
- `.nojekyll`

## GitHub Pages 部署方式

1. 到 GitHub 建立一個新的 repository。
2. 上傳本資料夾內所有檔案到 repository 根目錄。
3. 到 repository 的 `Settings`。
4. 點左側 `Pages`。
5. `Build and deployment` 選：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. 按 `Save`。
7. 等待 GitHub Pages 部署完成。

部署完成後會得到一個網址，例如：

```text
https://你的帳號.github.io/你的repo名稱/
```

## 注意

目前網站會把開單資料備份到 Google Sheet，Apps Script Web App URL 已寫在 `app.js` 裡。

如果未來要真正建立 Jira 工單，請不要把 Jira API token 放在前端。需要另外建立後端 API，由後端呼叫 Jira REST API。

