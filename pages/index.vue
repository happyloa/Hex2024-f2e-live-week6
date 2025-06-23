<script setup>
useSeoMeta({
  title: "首頁 | 2024 切版直播班 - 內容訂閱網站",
  ogTitle: "首頁 | 2024 切版直播班 - 內容訂閱網站",
  description: `vivre 這個品牌名稱源自法語,意為"生活"、"活著"。它象徵著我們對於高品質生活的熱愛與追求。vivre 旨在成為一個分享美好生活體驗、發掘生活質感的平台。`,
  ogDescription: `vivre 這個品牌名稱源自法語,意為"生活"、"活著"。它象徵著我們對於高品質生活的熱愛與追求。vivre 旨在成為一個分享美好生活體驗、發掘生活質感的平台。`,
  ogImage: "/ogImage.webp",
  twitterCard: "/ogImage.webp",
});
</script>

<template>
  <!-- Hero 區塊 -->
  <section class="h-screen py-0 sm:py-20">
    <div
      class="mx-auto flex h-full max-w-[1296px] flex-col items-center justify-end bg-[url(/images/mobile/home/banner.webp)] bg-cover bg-center bg-no-repeat px-5 py-12 text-center text-white sm:items-start sm:justify-center sm:bg-[url(/images/desktop/home/banner.webp)] sm:px-[60px]"
    >
      <p class="mb-2 text-h6 font-bold sm:mb-3 sm:text-h5 sm:font-black">
        獻給新世代的生活風格誌
      </p>
      <h1 class="mb-5 text-h1-sm font-black sm:mb-6 sm:text-h1">
        一起探索生活的無限可能
      </h1>
      <AtomButton text="馬上訂閱" to="/plans" hasIcon />
    </div>
  </section>
</template>
