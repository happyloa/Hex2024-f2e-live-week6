![](https://raw.githubusercontent.com/happyloa/Hex2024-f2e-live-week6/refs/heads/main/public/thumb.webp)

# 六角學院 2024 切版直播班第六週作業 - 內容訂閱網站

此專案為六角學院 2024 切版直播班的第六週作業之成品

- [線上部署連結](https://vivre.worksbyaaron.com/)
- [設計稿](https://www.figma.com/design/zpJK5cEuejmXdd2Dyth3PC/2024-%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD-W6---%E5%85%A7%E5%AE%B9%E8%A8%82%E9%96%B1%E7%B6%B2%E7%AB%99)

## 使用技術

- [Nuxt3](https://nuxt.com/)（Vue 加強版）
- [Tailwind CSS](https://tailwindcss.com/)

## 開發環境設置

建議使用 [VSCode](https://code.visualstudio.com/) 搭配

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 快速開始

**專案設置（Project setup）**

將專案複製到本地端

```sh
$ git clone https://github.com/happyloa/Hex2024-f2e-live-week6.git
```

套件安裝

```sh
$ cd hex2024-f2e-live-week6
$ npm install
```

**執行專案（Start the server）**

```sh
$ npm run dev
```

在瀏覽器上輸入

```
http://localhost:3000/
```

即可在本地端預覽專案

## 頁面路徑（Router Link）

位於 `pages`

結構說明

```
pages
├── plans              訂閱方案頁面（/plans）
├── about              關於我們頁面（/about）
├── article            文章頁面（/article）
├── index              首頁（/）
├── login              登入頁面（/login）
└── register           註冊頁面（/register）
```

## 元件檔案（Components）

位於 `components`

結構說明

```
components

├── Atom               頁面上的小型元件（按鈕、麵包屑）
└── Layout             版面元件（導覽選單、頁尾）
```

## 靜態檔案

位於 `public`

結構說明

```
public
├── icons              在網站上使用的各式 icon
├── images             電腦版 & 行動版圖片
├── favicon.ico        網站的 favicon
├── thumb.webp         文件上用的縮圖
└── ogImage.webp       將網站連結貼到社群媒體時出現的預覽圖片
```

## 使用的套件 & 工具

- [Nuxt Google Fonts](https://google-fonts.nuxtjs.org/)
- [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/)
- [Nuxt Swiper](https://nuxt.com/modules/swiper)
- [TinyPNG](https://tinypng.com/)
- [ChatGPT o3](https://openai.com/)
