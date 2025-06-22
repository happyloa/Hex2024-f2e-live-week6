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
  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxtjs/tailwindcss"],
});
