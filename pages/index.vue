<script setup>
useSeoMeta({
  title: "首頁 | 2024 切版直播班 - 內容訂閱網站",
  ogTitle: "首頁 | 2024 切版直播班 - 內容訂閱網站",
});
</script>

<template>
  <!-- Hero 區塊 -->
  <section class="h-screen py-0 lg:py-20">
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
  <!-- 熱門主題 -->
  <section class="px-3 py-12 md:py-20">
    <div class="mx-auto max-w-[1296px]">
      <h2 class="mb-6 text-h2-sm font-black text-neutral-500 md:text-h2">
        熱門主題
      </h2>
      <ul
        class="grid grid-cols-1 gap-2 text-center text-h6 font-bold text-white sm:grid-cols-2 sm:text-h5 sm:font-black lg:grid-cols-4 lg:gap-6"
      >
        <li
          class="h-[84px] content-center rounded-br-[20px] rounded-tl-[20px] bg-[url(/images/mobile/home/theme-1.webp)] bg-cover bg-center bg-no-repeat sm:h-[200px] sm:bg-[url(/images/desktop/home/theme-1.webp)]"
        >
          <h3>城市漫遊者</h3>
        </li>
        <li
          class="h-[84px] content-center rounded-br-[20px] rounded-tl-[20px] bg-[url(/images/mobile/home/theme-3.webp)] bg-cover bg-center bg-no-repeat sm:h-[200px] sm:bg-[url(/images/desktop/home/theme-3.webp)]"
        >
          <h3>秘境尋蹤人</h3>
        </li>
        <li
          class="h-[84px] content-center rounded-br-[20px] rounded-tl-[20px] bg-[url(/images/mobile/home/theme-5.webp)] bg-cover bg-center bg-no-repeat sm:h-[200px] sm:bg-[url(/images/desktop/home/theme-5.webp)]"
        >
          <h3>品味設計家</h3>
        </li>
        <li
          class="h-[84px] content-center rounded-br-[20px] rounded-tl-[20px] bg-[url(/images/mobile/home/theme-8.webp)] bg-cover bg-center bg-no-repeat sm:h-[200px] sm:bg-[url(/images/desktop/home/theme-8.webp)]"
        >
          <h3>美食探險記</h3>
        </li>
        <li
          class="h-[84px] content-center rounded-br-[20px] rounded-tl-[20px] bg-[url(/images/mobile/home/theme-2.webp)] bg-cover bg-center bg-no-repeat sm:h-[200px] sm:bg-[url(/images/desktop/home/theme-2.webp)]"
        >
          <h3>美學建築誌</h3>
        </li>
        <li
          class="h-[84px] content-center rounded-br-[20px] rounded-tl-[20px] bg-[url(/images/mobile/home/theme-4.webp)] bg-cover bg-center bg-no-repeat sm:h-[200px] sm:bg-[url(/images/desktop/home/theme-4.webp)]"
        >
          <h3>慢活生活行</h3>
        </li>
        <li
          class="h-[84px] content-center rounded-br-[20px] rounded-tl-[20px] bg-[url(/images/mobile/home/theme-6.webp)] bg-cover bg-center bg-no-repeat sm:h-[200px] sm:bg-[url(/images/desktop/home/theme-6.webp)]"
        >
          <h3>工藝匠心賞</h3>
        </li>
        <li
          class="h-[84px] content-center rounded-br-[20px] rounded-tl-[20px] bg-[url(/images/mobile/home/theme-7.webp)] bg-cover bg-center bg-no-repeat sm:h-[200px] sm:bg-[url(/images/desktop/home/theme-7.webp)]"
        >
          <h3>時尚先鋒派</h3>
        </li>
      </ul>
    </div>
  </section>
</template>
