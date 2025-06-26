<script setup>
import { useSwiper } from "#imports";

const articleSwiper = ref(null);
const article = useSwiper(articleSwiper);

useSeoMeta({
  title: "首頁 | 2024 切版直播班 - 內容訂閱網站",
  ogTitle: "首頁 | 2024 切版直播班 - 內容訂閱網站",
});
</script>

<template>
  <!-- Hero 區塊 -->
  <section class="h-[90vh] py-0 sm:h-screen lg:py-20">
    <div
      class="mx-auto flex h-full max-w-[1296px] flex-col items-center justify-end bg-[url(/images/mobile/home/banner.webp)] bg-cover bg-center bg-no-repeat px-5 py-12 text-center text-white sm:items-start sm:justify-center sm:bg-[url(/images/desktop/home/banner.webp)] sm:px-[60px]"
    >
      <p class="mb-2 text-h6 font-bold sm:mb-3 sm:text-h5 sm:font-black">
        獻給新世代的生活風格誌
      </p>
      <h1 class="mb-5 text-h1-sm font-black sm:mb-6 sm:text-h1">
        一起探索生活的無限可能
      </h1>
      <AtomButton text="馬上訂閱" to="/plans" hasIcon class="hidden md:flex" />
      <AtomButton
        size="sm"
        text="馬上訂閱"
        to="/plans"
        hasIcon
        class="flex md:hidden"
      />
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
  <!-- 精選文章 -->
  <section class="px-3 py-12 md:py-20">
    <div class="mx-auto max-w-[1296px]">
      <!-- 電腦版 -->
      <div class="hidden grid-cols-3 gap-12 md:grid">
        <!-- 標題 & 導覽 -->
        <div class="flex flex-col justify-between">
          <h2 class="text-h2 font-black text-neutral-500">精選文章</h2>
          <div>
            <span
              class="Newsreader | mb-8 flex gap-2.5 text-fs-1 text-neutral-500"
              >1<span class="text-neutral-400">/</span>5</span
            >
            <div class="flex items-center gap-5 text-neutral-400">
              <button
                type="button"
                class="rounded-full border border-neutral-400 px-4 py-1 transition duration-300 hover:bg-neutral-400 hover:text-primary-200"
              >
                <!-- 左箭頭 -->
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.5 12a.75.75 0 0 0-.75-.75H4.06l4.72-4.719A.751.751 0 0 0 7.72 5.47l-6 6a.75.75 0 0 0 0 1.062l6 6a.75.75 0 1 0 1.06-1.062l-4.72-4.72h17.69a.75.75 0 0 0 .75-.75"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <hr class="w-20 border-neutral-400" />
              <button
                type="button"
                class="rounded-full border border-neutral-400 px-4 py-1 transition duration-300 hover:bg-neutral-400 hover:text-primary-200"
              >
                <!-- 右箭頭 -->
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719a.751.751 0 0 1 1.062-1.062l6 6a.75.75 0 0 1 0 1.062l-6 6a.751.751 0 1 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- 卡片 -->
        <article class="flex flex-col gap-6 border-b border-neutral-500 pb-6">
          <img
            src="/images/desktop/home/articles-1.webp"
            alt="私人島嶼的露營奇遇記"
          />
          <div>
            <h3 class="mb-2 text-h5 font-black text-neutral-500">
              私人島嶼的露營奇遇記
            </h3>
            <p class="text-fs-1 text-neutral-400">
              遠離塵囂,用全新的眼光重塑生活的舒適本味。徜徉在環山綠野間,在這處隱世私家別墅裡,盡情領略池畔優閒時光,任林間微風撫面,聆聽花鳥嘶啞之音,重拾內心深處的寧靜安詳...
            </p>
          </div>
          <button
            type="button"
            class="Newsreader | self-start py-2 text-[1.25rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300"
          >
            Read More
          </button>
        </article>
        <article class="flex flex-col gap-6 border-b border-neutral-500 pb-6">
          <img
            src="/images/desktop/home/articles-2.webp"
            alt="窺探米其林三星主廚的絕密手藝"
          />
          <div>
            <h3 class="mb-2 text-h5 font-black text-neutral-500">
              窺探米其林三星主廚的絕密手藝
            </h3>
            <p class="text-fs-1 text-neutral-400">
              在這間隱世餐廳,來一場味蕾與靈魂的盛宴。幽微燈火下,透過巨匠大師的獨門料理,領略食材中蘊藏的大自然馨香脈絡。營造只屬於你我的私密小宇宙,沉浸其中,品嘗人生至臻至美的風味...
            </p>
          </div>
          <div class="flex items-center justify-between">
            <button
              type="button"
              class="Newsreader | py-2 text-[1.25rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300"
            >
              Read More
            </button>
            <a
              href="#"
              class="block rounded bg-primary-300 px-2 py-1 text-h6 font-bold text-primary transition duration-300 hover:bg-primary hover:text-white"
              >會員專屬</a
            >
          </div>
        </article>
      </div>
      <!-- 手機版 -->
      <div class="block md:hidden">
        <h2 class="mb-6 text-h2-sm font-black text-neutral-500">精選文章</h2>
        <ClientOnly>
          <swiper-container
            class="mb-10"
            ref="articleSwiper"
            slides-per-view="1.1"
            space-between="24"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: true,
            }"
            :loop="true"
          >
            <swiper-slide>
              <article
                class="flex flex-col gap-6 border-b border-neutral-500 pb-6"
              >
                <img
                  src="/images/mobile/home/articles-1.webp"
                  alt="私人島嶼的露營奇遇記"
                />
                <div>
                  <h3 class="mb-2 text-h5 font-black text-neutral-500">
                    私人島嶼的露營奇遇記
                  </h3>
                  <p class="text-fs-1 text-neutral-400">
                    遠離塵囂,用全新的眼光重塑生活的舒適本味。徜徉在環山綠野間,在這處隱世私家別墅裡,盡情領略池畔優閒時光,任林間微風撫面,聆聽花鳥嘶啞之音,重拾內心深處的寧..
                  </p>
                </div>
                <button
                  type="button"
                  class="Newsreader | self-start py-2 text-[1.25rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300"
                >
                  Read More
                </button>
              </article>
            </swiper-slide>
            <swiper-slide>
              <article
                class="flex flex-col gap-6 border-b border-neutral-500 pb-6"
              >
                <img
                  src="/images/mobile/home/articles-2.webp"
                  alt="窺探米其林三星主廚的絕密手藝"
                />
                <div>
                  <h3 class="mb-2 text-h5 font-black text-neutral-500">
                    窺探米其林三星主廚的絕密手藝
                  </h3>
                  <p class="text-fs-1 text-neutral-400">
                    在這間隱世餐廳,來一場味蕾與靈魂的盛宴。幽微燈火下,透過巨匠大師的獨門料理,領略食材中蘊藏的大自然馨香脈絡。營造只屬於你我的私密小宇宙,品嘗人...
                  </p>
                </div>
                <div class="flex items-center justify-between">
                  <button
                    type="button"
                    class="Newsreader | py-2 text-[1.25rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300"
                  >
                    Read More
                  </button>
                  <a
                    href="#"
                    class="block rounded bg-primary-300 px-2 py-1 text-h6 font-bold text-primary transition duration-300 hover:bg-primary hover:text-white"
                    >會員專屬</a
                  >
                </div>
              </article>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
        <div class="flex items-center justify-between gap-3">
          <span class="Newsreader | flex gap-2.5 text-fs-1 text-neutral-500"
            >1<span class="text-neutral-400">/</span>5</span
          >
          <div class="flex items-center gap-5 text-neutral-400">
            <button
              type="button"
              class="rounded-full border border-neutral-400 px-4 py-1 transition duration-300 hover:bg-neutral-400 hover:text-primary-200"
              @click="article.prev()"
            >
              <!-- 左箭頭 -->
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.5 12a.75.75 0 0 0-.75-.75H4.06l4.72-4.719A.751.751 0 0 0 7.72 5.47l-6 6a.75.75 0 0 0 0 1.062l6 6a.75.75 0 1 0 1.06-1.062l-4.72-4.72h17.69a.75.75 0 0 0 .75-.75"
                  fill="currentColor"
                />
              </svg>
            </button>
            <hr class="w-20 border-neutral-400" />
            <button
              type="button"
              class="rounded-full border border-neutral-400 px-4 py-1 transition duration-300 hover:bg-neutral-400 hover:text-primary-200"
              @click="article.next()"
            >
              <!-- 右箭頭 -->
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719a.751.751 0 0 1 1.062-1.062l6 6a.75.75 0 0 1 0 1.062l-6 6a.751.751 0 1 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
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
  <!-- 品味生活 -->
  <section class="px-3 py-12 md:py-20">
    <div class="mx-auto max-w-[1296px]">
      <h2
        class="mb-6 text-h2-sm font-black text-neutral-500 md:mb-10 md:text-h2"
      >
        品味生活
      </h2>
      <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <li>
          <article class="flex flex-col gap-6 md:gap-9">
            <h3
              class="self-start text-h1 font-black text-neutral-400 md:text-[3.25rem]"
            >
              食.
            </h3>
            <figure>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcset="/images/mobile/home/life-1.webp"
                />
                <img
                  src="/images/desktop/home/life-1.webp"
                  alt="品味生活 1"
                  class="w-full"
                  loading="lazy"
                />
              </picture>
            </figure>
            <ul
              class="flex flex-col gap-5 text-h6 font-bold text-neutral-500 md:text-h5 md:font-black"
            >
              <li>｜米其林三星主廚的那些絕活傳奇</li>
              <li>｜探秘成都的地道川味秘技與魅力</li>
              <li>｜義大利釀酒師對於酒的堅持執著</li>
            </ul>
            <button
              type="button"
              class="Newsreader | flex items-center justify-center gap-3 py-2.5 text-[1rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300 md:py-2 md:text-[1.25rem]"
            >
              View More<svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719a.751.751 0 0 1 1.062-1.062l6 6a.75.75 0 0 1 0 1.062l-6 6a.751.751 0 1 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12"
                  fill="currentColor"
                />
              </svg>
            </button>
          </article>
        </li>
        <li>
          <article class="flex flex-col gap-6 md:gap-9">
            <h3
              class="self-start text-h1 font-black text-neutral-400 md:text-[3.25rem]"
            >
              藝.
            </h3>
            <figure class="w-full">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcset="/images/mobile/home/life-2.webp"
                />
                <img
                  src="/images/desktop/home/life-2.webp"
                  alt="品味生活 2"
                  class="w-full"
                  loading="lazy"
                />
              </picture>
            </figure>
            <ul
              class="flex flex-col gap-5 text-h6 font-bold text-neutral-500 md:text-h5 md:font-black"
            >
              <li>｜解構教主級時裝設計大師的獨特美學</li>
              <li>｜當代攝影師鏡頭中的光影離奇</li>
              <li>｜帶你穿縮中世紀，夏季文藝復興展</li>
            </ul>
            <button
              type="button"
              class="Newsreader | flex items-center justify-center gap-3 py-2.5 text-[1rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300 md:py-2 md:text-[1.25rem]"
            >
              View More<svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719a.751.751 0 0 1 1.062-1.062l6 6a.75.75 0 0 1 0 1.062l-6 6a.751.751 0 1 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12"
                  fill="currentColor"
                />
              </svg>
            </button>
          </article>
        </li>
        <li>
          <article class="flex flex-col gap-6 md:gap-9">
            <h3
              class="self-start text-h1 font-black text-neutral-400 md:text-[3.25rem]"
            >
              旅.
            </h3>
            <figure class="w-full">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcset="/images/mobile/home/life-3.webp"
                />
                <img
                  src="/images/desktop/home/life-3.webp"
                  alt="品味生活 3"
                  class="w-full"
                  loading="lazy"
                />
              </picture>
            </figure>
            <ul
              class="flex flex-col gap-5 text-h6 font-bold text-neutral-500 md:text-h5 md:font-black"
            >
              <li>｜遠離喧囂,偶探巴塔哥尼亞終界</li>
              <li>｜東京深度六區,帶你細品極簡魅力</li>
              <li>｜專賣奇珍異寶的東歐地下夜市</li>
            </ul>
            <button
              type="button"
              class="Newsreader | flex items-center justify-center gap-3 py-2.5 text-[1rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300 md:py-2 md:text-[1.25rem]"
            >
              View More<svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719a.751.751 0 0 1 1.062-1.062l6 6a.75.75 0 0 1 0 1.062l-6 6a.751.751 0 1 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12"
                  fill="currentColor"
                />
              </svg>
            </button>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
