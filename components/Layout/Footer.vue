<template>
  <!-- 只有在首頁才顯示這塊 -->
  <section v-if="$route.path === '/'" class="px-5 py-12 md:py-20">
    <div
      class="mx-auto flex max-w-[1296px] flex-col items-center justify-between gap-4 text-center text-neutral-500 md:flex-row md:items-start"
    >
      <h3 class="text-h2-sm font-black md:text-h2">想看什麼主題由你決定！</h3>
      <div class="flex flex-col items-center gap-9 md:items-end md:gap-4">
        <p class="text-h4-sm font-bold md:text-h4">歡迎投稿與我們分享</p>
        <AtomButton text="聯絡我們" />
      </div>
    </div>
  </section>
  <footer>
    <p
      class="Newsreader | mx-auto max-w-[1296px] border-t border-neutral-300 p-5 text-center text-fs-1 font-semibold text-primary md:py-6"
    >
      ©Vivre 2024 All right Reserved
    </p>
  </footer>
</template>
