<script setup>
useSeoMeta({
  title: "首頁 | 2024 切版直播班 - 內容訂閱網站",
  ogTitle: "首頁 | 2024 切版直播班 - 內容訂閱網站",
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
