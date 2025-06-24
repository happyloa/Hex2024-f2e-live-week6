<script setup>
definePageMeta({
  breadcrumb: "訂閱方案",
});

useSeoMeta({
  title: "訂閱方案 | 2024 切版直播班 - 內容訂閱網站",
  ogTitle: "訂閱方案 | 2024 切版直播班 - 內容訂閱網站",
});
</script>

<template>
  <section class="px-3 pb-[60px] pt-4 md:py-[100px]">
    <div class="mx-auto max-w-[1296px]">
      <AtomBreadcrumb class="mb-2 md:mb-5" />
      <h1
        class="mb-10 text-h1-sm font-black text-neutral-500 md:mb-[60px] md:text-h1"
      >
        訂閱方案
      </h1>
      <div
        class="mx-auto mb-6 flex max-w-[416px] justify-center text-h6 md:mb-10 md:gap-6"
      >
        <button type="button" class="flex-1 bg-accent-200 p-3 text-white">
          年繳
        </button>
        <button
          type="button"
          class="flex-1 bg-transparent p-3 text-neutral-400 transition duration-300 hover:bg-accent-200 hover:text-white"
        >
          月繳
        </button>
      </div>
      <main>
        <ul class="grid gap-6 text-neutral-400 lg:grid-cols-3">
          <li
            class="rounded-xl border border-primary-300 bg-white p-6 transition duration-300 md:p-10"
          >
            <article class="flex h-full flex-col">
              <header class="mb-9 text-center md:mb-[60px] md:pb-10">
                <h2 class="mb-4 text-h6 font-bold md:text-h5 md:font-black">
                  輕量型
                </h2>
                <h3
                  class="Newsreader | text-[2rem] font-bold tracking-widest md:text-[2.5rem] md:leading-[48px]"
                >
                  NT 99
                  <span class="NotoSerifTc | text-h5 font-black md:text-h4"
                    >/ 月</span
                  >
                </h3>
              </header>
              <ul
                class="mb-[60px] flex flex-col gap-7 text-h6 font-bold md:gap-6 md:text-h5"
              >
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />每月最新文章無限閱讀
                </li>
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />專屬會員限定內容
                </li>
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />定期電子報
                </li>
              </ul>
              <AtomButton
                intent="gray"
                text="我要訂閱"
                to="/plans/payment"
                hasIcon
                class="mt-auto"
              />
            </article>
          </li>
          <li
            class="rounded-xl border border-primary-300 bg-white p-6 transition duration-300 md:p-10"
          >
            <article class="flex h-full flex-col">
              <header class="mb-9 text-center md:mb-[60px] md:pb-10">
                <h2 class="mb-4 text-h6 font-bold md:text-h5 md:font-black">
                  玩咖型
                </h2>
                <h3
                  class="Newsreader | text-[2rem] font-bold tracking-widest md:text-[2.5rem] md:leading-[48px]"
                >
                  NT 159
                  <span class="NotoSerifTc | text-h5 font-black md:text-h4"
                    >/ 月</span
                  >
                </h3>
              </header>
              <ul
                class="mb-[60px] flex flex-col gap-7 text-h6 font-bold md:gap-6 md:text-h5"
              >
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />每月最新文章無限閱讀
                </li>
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />專屬會員限定內容
                </li>
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />定期電子報
                </li>
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />年度精選禮物
                </li>
              </ul>
              <AtomButton
                intent="gray"
                text="我要訂閱"
                to="/plans/payment"
                hasIcon
                class="mt-auto"
              />
            </article>
          </li>
          <li
            class="rounded-xl border-2 border-accent-200 bg-white p-6 transition duration-300 md:p-10"
          >
            <article class="flex h-full flex-col">
              <header class="mb-9 text-center md:mb-[60px]">
                <h2 class="mb-4 text-h6 font-bold md:text-h5 md:font-black">
                  家庭型
                </h2>
                <h3
                  class="Newsreader | mb-4 text-[2rem] font-bold tracking-widest text-accent-200 md:text-[2.5rem] md:leading-[48px]"
                >
                  NT 599
                  <span
                    class="NotoSerifTc | text-h5 font-black text-neutral-300 md:text-h4"
                    >/ 月</span
                  >
                </h3>
                <span
                  class="Newsreader | text-[1.25rem] font-bold leading-[24px] tracking-widest text-neutral-300 line-through md:text-[1.375rem]"
                  >NT 899</span
                >
              </header>
              <ul
                class="mb-[60px] flex flex-col gap-7 text-h6 font-bold text-neutral-500 md:gap-6 md:text-h5"
              >
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled-darker.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />每月最新文章無限閱讀
                </li>
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled-darker.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />專屬會員限定內容
                </li>
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled-darker.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />定期電子報
                </li>
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled-darker.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />年度精選禮物
                </li>
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled-darker.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />24/7 優先客戶服務
                </li>
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled-darker.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />為每個成員量身打造專屬行程
                </li>
                <li class="flex gap-2">
                  <img
                    src="/icons/check-square-filled-darker.webp"
                    alt="打勾 icon"
                    class="size-5 md:size-6"
                  />最多 5 個家庭成員共享
                </li>
              </ul>
              <AtomButton
                text="我要訂閱"
                to="/plans/payment"
                hasIcon
                class="mt-auto"
              />
            </article>
          </li>
        </ul>
      </main>
    </div>
  </section>
</template>
