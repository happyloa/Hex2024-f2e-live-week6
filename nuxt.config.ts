// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  // 網站 meta 設定
  app: {
    head: {
      title: "2024 切版直播班 - 內容訂閱網站",
      htmlAttrs: {
        lang: "zh-Hant",
      },
      meta: [
        {
          name: "description",
          content: `vivre 這個品牌名稱源自法語,意為"生活"、"活著"。它象徵著我們對於高品質生活的熱愛與追求。vivre 旨在成為一個分享美好生活體驗、發掘生活質感的平台。`,
        },
        { property: "og:title", content: "2024 切版直播班 - 內容訂閱網站" },
        {
          property: "og:description",
          content: `vivre 這個品牌名稱源自法語,意為"生活"、"活著"。它象徵著我們對於高品質生活的熱愛與追求。vivre 旨在成為一個分享美好生活體驗、發掘生活質感的平台。`,
        },
        {
          property: "og:image",
          content: "/ogImage.webp",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "zh_TW" },
        { name: "twitter:card", content: "/ogImage.webp" },
        {
          name: "twitter:image",
          content: "/ogImage.webp",
        },
      ],
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],

  // Google Fonts 的相關配置
  googleFonts: {
    families: {
      "Noto+Serif+TC": [600, 700, 900],
      Newsreader: [600, 700, 900],
    },
    download: true,
    inject: true,
    display: "swap",
  },

  css: ["~/assets/css/fonts.css"],
});
