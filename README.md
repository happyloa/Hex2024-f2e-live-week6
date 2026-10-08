![](https://raw.githubusercontent.com/happyloa/Hex2024-f2e-live-week6/refs/heads/main/public/thumb.webp)

# 六角學院 2024 切版直播班第六週作業 - 內容訂閱網站

此專案為六角學院 2024 切版直播班第六週的切版練習，呈現 Vivre 內容訂閱網站的桌面與行動版介面。

- [線上部署連結](https://vivre.worksbyaaron.com/)
- [設計稿](https://www.figma.com/design/zpJK5cEuejmXdd2Dyth3PC/2024-%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD-W6---%E5%85%A7%E5%AE%B9%E8%A8%82%E9%96%B1%E7%B6%B2%E7%AB%99)

## 使用技術

- [Nuxt 4](https://nuxt.com/) 與 Vue 3，採用檔案路由及元件自動匯入。
- [Tailwind CSS 4](https://tailwindcss.com/)，透過官方 `@tailwindcss/vite` 整合。色彩、字級與字型設定放在 `app/assets/css/main.css` 的 `@theme`。
- [Nuxt Swiper](https://nuxt.com/modules/swiper)，用於行動版輪播。
- [Fontsource](https://fontsource.org/)，自行託管 Noto Serif TC 與 Newsreader 的可變字型。安裝及建置時不需下載 Google Fonts，瀏覽器依頁面使用的字元載入字型子集。
- Prettier 與 `prettier-plugin-tailwindcss`，統一格式及 Tailwind 類別排序。

## 開發環境

建議使用 Node.js 24 LTS 與 npm 12.2 以上；`.node-version` 記錄本次驗證使用的 Node.js 24.21.0。完整支援範圍見 `package.json` 的 `engines`。型別工具使用 TypeScript 5.9，與目前的 Vue 型別檢查器相容。

VS Code 可搭配以下擴充套件：

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 快速開始

```sh
git clone https://github.com/happyloa/Hex2024-f2e-live-week6.git
cd Hex2024-f2e-live-week6
npm ci
npm run dev
```

開啟 `http://localhost:3000/`。Windows PowerShell 若無法執行 `npm`，可使用 `npm.cmd`。

`npm ci` 依鎖檔安裝套件；`postinstall` 會先套用版本限定的依賴修補，再執行 `nuxt prepare`。新增或更新依賴時使用 `npm install`，並一起提交 `package.json` 與 `package-lock.json`。

## 常用指令

| 指令                    | 用途                                  |
| ----------------------- | ------------------------------------- |
| `npm run dev`           | 啟動開發伺服器                        |
| `npm run build`         | 建置正式版 Node.js 伺服器             |
| `npm run preview`       | 預覽已建置的正式版                    |
| `npm run generate`      | 產生靜態網站，輸出至 `.output/public` |
| `npm run typecheck`     | 檢查 Nuxt、Vue 與 TypeScript 型別     |
| `npm run format`        | 格式化原始碼                          |
| `npm run format:check`  | 檢查格式                              |
| `npm run check:patches` | 確認依賴修補的版本及檔案雜湊          |
| `npm run verify`        | 檢查修補、格式與型別，再執行正式建置  |

正式版建置後也可直接執行：

```sh
node .output/server/index.mjs
```

Nuxt 4.6 的伺服器渲染模組在此專案透過 `nitro.externals.inline` 打包，以解析正式版需要的虛擬模組。Vue 也一起打包，避免 Node.js 解析外部 Vue 套件時的警告。專案沒有保留額外的測試套件或測試框架。

## 專案結構

```text
app/
├── app.vue                  共用頁面骨架
├── assets/css/main.css      Tailwind 主題與自行託管字型
├── components/
│   ├── Atom/                按鈕、麵包屑
│   └── Layout/              導覽列、行動版選單、頁尾
└── pages/                   頁面與路由
public/
├── icons/                   圖示
├── images/                  桌面與行動版圖片
├── favicon.ico
├── thumb.webp               README 縮圖
└── ogImage.webp             社群預覽圖片
patches/                     版本限定的依賴修補
scripts/                     安裝時套用與檢查修補
nuxt.config.ts               Nuxt、Vite 與 Nitro 設定
tsconfig.json                Nuxt 4 產生的 TypeScript 設定參照
```

| 頁面檔案（位於 `app/pages`）  | 網址                       | 內容         |
| ----------------------------- | -------------------------- | ------------ |
| `index.vue`                   | `/`                        | 首頁         |
| `about.vue`                   | `/about`                   | 關於我們     |
| `article.vue`                 | `/article`                 | 文章         |
| `login.vue`                   | `/login`                   | 登入介面     |
| `register.vue`                | `/register`                | 註冊介面     |
| `plans/index.vue`             | `/plans`                   | 訂閱方案     |
| `plans/payment/index.vue`     | `/plans/payment`           | 付款介面     |
| `plans/payment/completed.vue` | `/plans/payment/completed` | 付款成功示範 |

## 依賴安全與安裝警告

已移除舊的 Nuxt Google Fonts、Nuxt Tailwind 模組，並更新 Nuxt、Vue、Vue Router、Swiper 及格式工具。`package.json` 的 `allowScripts` 僅授權鎖檔中的 esbuild 安裝腳本；更換 esbuild 版本時需要重新檢視這項授權。

截至 2026-10-08，兩個間接依賴仍沒有上游發布的修正版：

- [`braces@3.0.3`：GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)。本地修補限制解析器及 AST 遞迴深度。
- [`node-forge@1.4.0`：GHSA-86w9-cpqp-85rv](https://github.com/advisories/GHSA-86w9-cpqp-85rv)。依照[上游待合併修正](https://github.com/digitalbazaar/forge/pull/1152)，檢查 RSA DigestAlgorithm 的巢狀元素數量。

另以限定父套件版本的 `overrides` 更新 simple-git 與 glob，並修正 Nuxt DevTools 對 simple-git 4 具名匯出的相容性。修補檔記錄原始與修補後的 SHA-256；版本或內容不符會中止安裝，避免把舊修補套用到未知版本。

原始 `npm audit` 仍回報 11 項 High，皆由上述兩個尚未發布修正版的漏洞及其父依賴衍生，沒有 Critical。套用本地修補不會改寫 npm 的漏洞資料或套件版本，因此不能把這個結果稱為零漏洞。更新相關依賴時，請重新檢查上游修正、`overrides` 與 `patches/`。`npm run verify` 不包含線上漏洞掃描，另以 `npm audit` 檢視最新報告。

## 練習範圍與架構

目前的頁面、共用元件與 Tailwind 主題分工適合這個小型切版練習，無需另外加入狀態管理或 UI 函式庫。若日後持續增加首頁內容，可再把各區塊與重複卡片拆成元件。

登入、註冊、搜尋、方案切換、折扣碼與部分文章連結只有介面，尚未串接後端服務。付款按鈕導向成功頁，沒有實際收款或表單驗證；畫面中的金額與日期也是設計稿的示範資料。

首次進站時，`app.vue` 會在 `sessionStorage` 建立 `isSubscribed=false`；進入付款成功頁後改為 `true`。文章頁依這個值切換內容遮罩，同一分頁重新整理時仍保留狀態。這是前端展示：完整文章已包含在頁面中，使用者也能自行修改狀態。實際會員服務需要在伺服器端處理身分、付款及文章存取權限。
