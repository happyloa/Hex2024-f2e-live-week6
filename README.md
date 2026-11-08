![Vivre 預覽](public/thumb.webp)

# Vivre 內容訂閱網站

六角學院 2024 切版直播班第六週作業，使用 Nuxt 4、Vue 3、Tailwind CSS 4 與 Nuxt Swiper，實作桌面及行動版介面。

- [線上展示](https://vivre.worksbyaaron.com/)
- [設計稿](https://www.figma.com/design/zpJK5cEuejmXdd2Dyth3PC/2024-%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD-W6---%E5%85%A7%E5%AE%B9%E8%A8%82%E9%96%B1%E7%B6%B2%E7%AB%99)

## 開發

使用 `.node-version` 指定的 Node.js 24.22.2 與 npm 12.2 以上。

```sh
npm ci
npm run dev
```

開啟 `http://localhost:3000/`。Windows PowerShell 若阻擋 `npm.ps1`，請改用 `npm.cmd`。

| 指令                | 用途                              |
| ------------------- | --------------------------------- |
| `npm run dev`       | 啟動開發伺服器                    |
| `npm run build`     | 建置正式版 Node.js 伺服器         |
| `npm run preview`   | 預覽正式版                        |
| `npm run generate`  | 產生靜態網站至 `.output/public`   |
| `npm run typecheck` | 檢查 Nuxt、Vue 與 TypeScript 型別 |
| `npm run format`    | 格式化原始碼及排序 Tailwind 類別  |
| `npm run verify`    | 檢查格式、型別及正式版建置        |
| `npm audit`         | 查詢最新依賴漏洞報告              |

Node.js 部署於建置後執行 `node .output/server/index.mjs`；純展示網站也可直接部署 `npm run generate` 的靜態輸出。

## 結構

```text
app/
├── app.vue                 共用頁面骨架
├── assets/css/main.css     Tailwind 主題與 Fontsource 字型
├── components/Atom/        按鈕、麵包屑
├── components/Layout/      導覽、行動選單、頁尾
├── composables/            訂閱示範狀態
└── pages/                  頁面與檔案路由
public/                     WebP 圖片、圖示與網站圖示
nuxt.config.ts              Nuxt 與 Tailwind Vite 整合
```

頁面包含 `/`、`/about`、`/article`、`/login`、`/register`、`/plans`、`/plans/payment` 與 `/plans/payment/completed`。

圖片使用 WebP、響應式來源及明確尺寸；首頁主視覺優先載入，其餘內容圖片延遲載入。Nitro 於建置時預壓縮靜態資源。Noto Serif TC 與 Newsreader 可變字型由 Fontsource 自行託管，依字元載入子集，建置時不依賴 Google Fonts。行動選單使用原生 dialog 處理焦點、Escape 及關閉後的焦點還原。

## 依賴維護

新增或更新套件時，一起提交 `package.json` 與 `package-lock.json`，並執行 `npm run verify`、`npm run generate` 與 `npm audit`。`npm ci` 只透過 `nuxt prepare` 產生型別，沒有本地依賴補丁或修補腳本。`allowScripts` 僅授權鎖檔中的 esbuild 安裝腳本。

- 保留 TypeScript 5.9：TypeScript 7.0.2 與目前 `vue-tsc` 3.3.14 的整合實測無法啟動，待相容後再升級。
- 兩項限定父套件版本的 `overrides` 將 `@vercel/nft` 的 glob 升至 14.0.4、`readdir-glob` 的 minimatch 升至 11.0.5，以修復安全問題。父套件更新後需重新檢查並移除不再需要的覆寫。
- 2026-11-08 的 `npm audit` 沒有 Critical、High 或 Moderate；仍有 7 項 Low，皆來自 [`deepmerge` 的同一項警示](https://github.com/advisories/GHSA-gcqx-w48m-w2h4)及其父依賴。上游尚無修正版；目前呼叫點僅在 Rollup 解析器初始化時合併固定預設設定，不接收請求或使用者輸入。這不等於零漏洞，仍需追蹤上游更新。

## 展示範圍

登入、註冊、搜尋、方案切換、折扣碼及部分連結只有介面，沒有後端服務或實際收款，金額與日期為設計稿示範資料。

付款成功頁會透過 `useDemoSubscription` 更新 `sessionStorage` 的 `isSubscribed`，文章頁據此移除遮罩，同一分頁重新整理仍保留。瀏覽器停用儲存時，退回本次瀏覽的記憶體狀態。完整文章仍在前端，正式會員服務須由伺服器驗證身分、付款與內容存取權限。
