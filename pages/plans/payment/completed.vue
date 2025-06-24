<script setup>
useSeoMeta({
  title: "付款成功 | 2024 切版直播班 - 內容訂閱網站",
  ogTitle: "付款成功 | 2024 切版直播班 - 內容訂閱網站",
});
</script>

<template>
  <section class="mx-auto max-w-[636px] px-3 py-[60px] md:py-[100px]">
    <h1
      class="mb-6 flex items-center justify-center gap-3 text-h1-sm font-black text-accent-200 md:mb-10 md:gap-5 md:text-h1"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="size-6 md:size-12"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.062 7.938a1.5 1.5 0 0 1 0 2.124l-21 21a1.5 1.5 0 0 1-2.124 0l-9-9a1.502 1.502 0 0 1 2.124-2.124L24 27.878l19.938-19.94a1.5 1.5 0 0 1 2.124 0"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 7.5A16.5 16.5 0 1 0 40.5 24a1.5 1.5 0 0 1 3 0 19.5 19.5 0 1 1-9.75-16.89 1.5 1.5 0 1 1-1.5 2.595A16.4 16.4 0 0 0 24 7.5"
          fill="currentColor"
        />
      </svg>
      付款成功
    </h1>
    <main
      class="rounded-xl border border-primary-300 bg-white p-6 text-[#09090B] md:p-10"
    >
      <h2 class="mb-6 text-h5 font-black md:text-h4">訂購資訊</h2>
      <section
        class="mb-6 whitespace-nowrap border-y border-neutral-200 py-6 md:mb-10"
      >
        <div class="mb-6 md:mb-10">
          <div class="mb-2 flex items-center justify-between gap-3 md:mb-3">
            <h3 class="text-h6 font-bold md:text-h5 md:font-black">
              輕量型方案
            </h3>
            <span
              class="Newsreader | text-[1rem] font-bold tracking-widest md:text-[1.25rem]"
              >NT 1,188</span
            >
          </div>
          <span class="text-h6 font-bold text-neutral-400">年繳</span>
        </div>
        <div class="font-bold text-neutral-400">
          <div class="mb-4 flex items-center justify-between gap-3">
            <span class="text-h6">開始日</span>
            <span class="Newsreader | tracking-widest">2024 / 5 / 1</span>
          </div>
          <div class="flex items-center justify-between gap-3">
            <span class="text-h6">終止日</span>
            <span class="Newsreader | tracking-widest">2025 / 5 / 1</span>
          </div>
        </div>
      </section>
      <AtomButton text="瀏覽文章" hasIcon to="/" class="hidden md:flex" />
      <AtomButton
        text="瀏覽文章"
        hasIcon
        size="sm"
        to="/"
        class="flex md:hidden"
      />
    </main>
  </section>
</template>
