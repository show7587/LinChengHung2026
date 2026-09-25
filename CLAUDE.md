# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## LinChengHung2026

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
npm run build     # 產出 dist/，模擬正式站建置
npm run preview   # 預覽 build 結果
npm run lint      # ESLint（standard + vue3-recommended），注意會自動 --fix 改檔
```

- 沒有任何測試框架或測試檔；驗證變更的方式是 `npm run build` 成功 + `npm run dev` 目視確認。
- CI 用 Node 20 + `npm ci`，新增/升級套件時必須一併提交更新後的 `frontend/package-lock.json`，否則部署會失敗。
- ESLint 規則：`comma-dangle: always-multiline`（多行物件/陣列結尾一定要逗號）、關閉 `vue/multi-word-component-names`。

## 架構重點

- 啟動流程：`main.js` → `plugins/index.js` 的 `registerPlugins()` 統一註冊 Vuetify 與 router。新的全域 plugin 加在這裡，不要直接改 `main.js`。
- 路由在 `src/router/index.js` **手動定義**（`MainLayout` 為外框，`HomeView` 為子路由）。`vite.config.mjs` 雖然掛了 `unplugin-vue-router` 的 `VueRouter()` plugin，但程式沒有使用它的檔案式自動路由；新增頁面時要自己在 `router/index.js` 加路由。
- Vuetify 元件由 `vite-plugin-vuetify`（`autoImport: true`）自動引入，模板中直接用 `v-*` 元件即可，不需 import。icon 使用 `@mdi/font`（`mdi-*` 名稱）。
- 主題色（primary `#57C7FF`、secondary `#FF4FA3` 等）與 `zhHant` locale 定義在 `src/plugins/vuetify.js`；`src/styles/settings.scss` 是 Vuetify 的 SASS `configFile`，目前也放了全域 body 樣式。
- 政見內容是資料驅動的：`HomeView.vue` 的 `<script setup>` 中 `platformGroups` 陣列，每組有 `title`、`icon`、`color`、`items`，選填 `badge`（例如「規劃中」）。修改政見文字只需改這個陣列，不必動模板。
- 首頁背景的漂浮泡泡（`.bubble-1`〜`.bubble-10` + `@keyframes floatBubble`）全部是 `HomeView.vue` 內的 scoped CSS；頂部 app bar 標題在 `layouts/MainLayout.vue`。

## 部署

push 到 `main` 分支後，GitHub Actions 會自動建置並部署到 GitHub Pages，無需手動操作。

## 已知的坑（沿用自 WanluanDmap 的經驗）

1. `vite.config.mjs` 的 `base: '/LinChengHung2026/'` 必須跟 repo 名稱一致，且所有靜態資源路徑都要用 `import.meta.env.BASE_URL` 組合，不能寫死。
2. 路由使用 `createWebHashHistory`（不是 history 模式），因為 GitHub Pages 靜態託管不方便處理 SPA 404 重導向。

## 後續規劃（尚未實作）

- 「AI 賦能＋LineBot 即時停電/停水/道路施工通知」與「Google Map 萬巒防災地圖」等即時性功能，會在後續階段仿照 WanluanDmap 的地圖／後端資料維護模式（`vue3-google-map` + 本機 .NET API 讀寫 JSON 資料檔）另外開發，目前首頁只先預告這個規劃方向。
