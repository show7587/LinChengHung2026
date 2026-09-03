# LinChengHung2026

萬巒鄉鄉民代表候選人「林成宏」2026 年參選政見文宣網站。這是第一階段的刻意簡化版本：

- 正式環境是純靜態網站（GitHub Pages），沒有任何後端、沒有資料庫、沒有登入機制。
- 目前只有一個首頁，展示候選人的政見主張（見 `frontend/src/pages/HomeView.vue`），內容分為五大主題：動物與長者福祉、公共空間活化、交通建設、產業與觀光、智慧防災與便民服務。
- 架構刻意模仿 `WanluanDmap`（同帳號 `show7587` 下的姊妹專案）的技術棧：前台 Vue 3 + Vuetify 3 + Vue Router + Vite，部署靠 GitHub Actions（`.github/workflows/deploy.yml`）自動建置並發布到 GitHub Pages。
- 相較 WanluanDmap，本階段**刻意拿掉**了 `vue3-google-map`、`vuex`、`vue-i18n`、後端 API 等元件，因為目前只需要一個純展示用的政見文宣頁，還沒有即時資料或表單需要維護。

## 上線網址

`https://show7587.github.io/LinChengHung2026/`（GitHub Pages 預設網址，未設定自訂網域）

## 開發

```bash
cd frontend
npm install
npm run dev       # http://localhost:3456/LinChengHung2026/
npm run build      # 產出 dist/，模擬正式站建置
```

## 部署

push 到 `main` 分支後，GitHub Actions 會自動建置並部署到 GitHub Pages，無需手動操作。

## 已知的坑（沿用自 WanluanDmap 的經驗）

1. `vite.config.mjs` 的 `base: '/LinChengHung2026/'` 必須跟 repo 名稱一致，且所有靜態資源路徑都要用 `import.meta.env.BASE_URL` 組合，不能寫死。
2. 路由使用 `createWebHashHistory`（不是 history 模式），因為 GitHub Pages 靜態託管不方便處理 SPA 404 重導向。

## 後續規劃（尚未實作）

- 「AI 賦能＋LineBot 即時停電/停水/道路施工通知」與「Google Map 萬巒防災地圖」等即時性功能，會在後續階段仿照 WanluanDmap 的地圖／後端資料維護模式（`vue3-google-map` + 本機 .NET API 讀寫 JSON 資料檔）另外開發，目前首頁只先預告這個規劃方向。
