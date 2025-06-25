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
  <!-- 母親節強檔活動  -->
  <section class="relative overflow-hidden bg-primary-200 p-12 md:py-20">
    <div class="mx-auto flex max-w-[365px] flex-col items-center">
      <p
        class="mb-3 text-center text-h6 font-bold text-accent-200 md:mb-5 md:text-h4 md:font-black"
      >
        \ 母親節強檔活動 /
      </p>
      <h2
        class="mb-6 text-center text-h2-sm font-black text-neutral-500 md:mb-5 md:text-h2"
      >
        家庭訂閱方案限時 7 折
      </h2>
      <ul class="mb-6 flex flex-col gap-4 text-fs-1 text-neutral-400 md:mb-10">
        <li class="flex items-center gap-3">
          <img src="/icons/check.svg" alt="勾勾 icon" />
          每月最新文章無限閱讀
        </li>
        <li class="flex items-center gap-3">
          <img src="/icons/check.svg" alt="勾勾 icon" />
          專屬會員限定內容
        </li>
        <li class="flex items-center gap-3">
          <img src="/icons/check.svg" alt="勾勾 icon" />
          定期電子報
        </li>
        <li class="flex items-center gap-3">
          <img src="/icons/check.svg" alt="勾勾 icon" />
          年度精選禮物
        </li>
        <li class="flex items-center gap-3">
          <img src="/icons/check.svg" alt="勾勾 icon" />
          24 /7 優先客戶服務
        </li>
        <li class="flex items-center gap-3">
          <img src="/icons/check.svg" alt="勾勾 icon" />
          為每個成員量身打造專屬行程
        </li>
      </ul>
      <AtomButton text="我想了解" to="/plans" class="hidden md:block" />
      <AtomButton
        size="sm"
        text="我想了解"
        to="/plans"
        class="block md:hidden"
      />
    </div>
    <img
      src="/images/desktop/home/bg-1.webp"
      alt="母親節活動裝飾 1"
      class="absolute -bottom-2 left-[150px] hidden lg:block xl:left-[324px]"
      loading="lazy"
    />
    <figure>
      <picture>
        <source
          media="(max-width: 1024px)"
          srcset="/images/mobile/home/bg-2.webp"
        />
        <img
          src="/images/desktop/home/bg-2.webp"
          alt="母親節活動裝飾 2"
          class="absolute -bottom-2 -right-[48px] lg:right-[50px] xl:right-[280px]"
          loading="lazy"
        />
      </picture>
    </figure>
  </section>
</template>
