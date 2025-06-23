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
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/google-fonts", "@nuxtjs/tailwindcss"],

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
