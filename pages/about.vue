<script setup>
definePageMeta({
  breadcrumb: "關於我們",
});

useSeoMeta({
  title: "關於我們 | 2024 切版直播班 - 內容訂閱網站",
  ogTitle: "關於我們 | 2024 切版直播班 - 內容訂閱網站",
  description: `vivre 這個品牌名稱源自法語,意為"生活"、"活著"。它象徵著我們對於高品質生活的熱愛與追求。vivre 旨在成為一個分享美好生活體驗、發掘生活質感的平台。`,
  ogDescription: `vivre 這個品牌名稱源自法語,意為"生活"、"活著"。它象徵著我們對於高品質生活的熱愛與追求。vivre 旨在成為一個分享美好生活體驗、發掘生活質感的平台。`,
  ogImage: "/ogImage.webp",
  twitterCard: "/ogImage.webp",
});
</script>

<template>
  <!-- Banner 區塊 -->
  <section
    class="mx-auto h-[240px] max-w-[1296px] bg-[url(/images/mobile/about/banner.webp)] bg-cover bg-center bg-no-repeat sm:h-[454px] sm:bg-[url(/images/desktop/about/banner.webp)]"
  ></section>
  <!-- 關於我們主要內容 -->
  <section class="py-6 pb-10 md:py-20">
    <div class="mx-auto max-w-[1296px]">
      <AtomBreadcrumb class="px-3 md:mb-5" />
      <h1
        class="mb-10 px-3 text-h1-sm font-black text-neutral-500 md:mb-20 md:text-h1"
      >
        關於我們
      </h1>
      <article class="mb-6 flex flex-col gap-6 md:mb-[60px] lg:flex-row">
        <figure>
          <picture>
            <source
              media="(max-width: 640px)"
              srcset="/images/mobile/about/about-1.webp"
            />
            <img
              src="/images/desktop/about/about-1.webp"
              alt="關於我們圖片 1"
              class="w-full flex-1"
              loading="lazy"
            />
          </picture>
        </figure>
        <div class="flex-1 px-6 md:px-10">
          <h2
            class="Newsreader | mb-3 text-[1.75rem] font-bold tracking-widest text-neutral-600 md:text-[2rem]"
          >
            Vivre
          </h2>
          <p class="mb-4 text-fs-1 text-neutral-400 md:mb-9">
            vivre
            這個品牌名稱源自法語,意為"生活"、"活著"。它象徵著我們對於高品質生活的熱愛與追求。vivre
            旨在成為一個分享美好生活體驗、發掘生活質感的平台。
          </p>
          <h3 class="mb-3 text-h6 font-bold text-neutral-600">
            我們的品牌價值
          </h3>
          <ul
            class="flex list-inside list-disc flex-col gap-2 pl-2 text-fs-1 text-neutral-400"
          >
            <li>熱愛生活,好奇心永存</li>
            <li>品味獨具,講究生活質感</li>
            <li>分享真實生活,啟發生活靈感</li>
            <li>推廣慢生活哲學,注重內在修為</li>
          </ul>
        </div>
      </article>
      <article class="flex flex-col-reverse gap-6 lg:flex-row">
        <div class="flex-1 px-6 md:px-10">
          <h2
            class="mb-4 text-h2-sm font-black tracking-widest text-neutral-600 md:mb-9 md:text-h2"
          >
            風格特色
          </h2>
          <p class="mb-4 text-fs-1 text-neutral-400 md:mb-9">
            vivre
            所展現的風格特色,可以用知性、親和、用心、優雅與獨特這些詞語來概括。我們講求內容的原創性與探索精神,不跟風追隨潮流話題,而是真誠分享獨特的生活視角與體驗。無論是旅行、美食、居家、時尚等生活領域,我們都希望能夠呈現出與眾不同、縝密入微、內外兼具的見解,給讀者帶來嶄新的感受和啟迪。
          </p>
          <p class="text-fs-1 text-neutral-400 md:mb-9">
            無論您是對美食、旅行、居家生活還是時尚風尚有獨到的見解和體會,只要切合vivre的價值理念與風格調性,我們都熱烈歡迎您加入這個平台,與我們一起分享和交流生活的點點滴滴。
          </p>
        </div>
        <figure>
          <picture>
            <source
              media="(max-width: 640px)"
              srcset="/images/mobile/about/about-2.webp"
            />
            <img
              src="/images/desktop/about/about-2.webp"
              alt="關於我們圖片 2"
              class="w-full flex-1"
              loading="lazy"
            />
          </picture>
        </figure>
      </article>
    </div>
  </section>
  <!-- 大事記 -->
  <section class="bg-primary-200 px-3 py-10 md:py-20">
    <div
      class="mx-auto flex max-w-[1296px] flex-col justify-between gap-6 md:flex-row"
    >
      <h2
        class="whitespace-nowrap text-center text-h2-sm font-black text-neutral-500 md:text-h2"
      >
        大事記
      </h2>
      <div class="flex max-w-[836px] flex-col gap-20">
        <article
          class="flex flex-col items-start gap-6 font-bold md:gap-[72px] lg:flex-row"
        >
          <h3
            class="Newsreader | bg-primary p-3 text-[1rem] text-neutral-100 md:text-[1.5rem]"
          >
            2020
          </h3>
          <div class="flex flex-col gap-6">
            <div class="flex gap-3 md:gap-4">
              <h4
                class="min-w-[38px] whitespace-nowrap text-h6 text-neutral-400 md:min-w-12"
              >
                <span class="Newsreader | md:text-h4">5</span>月
              </h4>
              <p
                class="border-l border-neutral-300 pl-3 text-fs-1 font-semibold text-neutral-600 md:pl-4"
              >
                創辦人茱麗葉、亞歷山大和幾個好友在巴黎開設 vivre
                生活部落格,紀錄分享他們對美好生活的想法和體驗。
              </p>
            </div>
            <div class="flex gap-3 md:gap-4">
              <h4
                class="min-w-[38px] whitespace-nowrap text-h6 text-neutral-400 md:min-w-12"
              >
                <span class="Newsreader | md:text-h4">10</span>月
              </h4>
              <p
                class="border-l border-neutral-300 pl-3 text-fs-1 font-semibold text-neutral-600 md:pl-4"
              >
                部落格內容和讀者人數逐漸累積,決定成立 vivre
                品牌,開發更多元豐富的內容。
              </p>
            </div>
          </div>
        </article>
        <article
          class="flex flex-col items-start gap-6 font-bold md:gap-[72px] lg:flex-row"
        >
          <h3
            class="Newsreader | bg-primary p-3 text-[1rem] text-neutral-100 md:text-[1.5rem]"
          >
            2021
          </h3>
          <div class="flex flex-col gap-6">
            <div class="flex gap-3 md:gap-4">
              <h4
                class="min-w-[38px] whitespace-nowrap text-h6 text-neutral-400 md:min-w-12"
              >
                <span class="Newsreader | md:text-h4">3</span>月
              </h4>
              <p
                class="border-l border-neutral-300 pl-3 text-fs-1 font-semibold text-neutral-600 md:pl-4"
              >
                vivre網站正式上線,除了原創文字內容,還加上了視訊、音訊等多媒體形式。
              </p>
            </div>
            <div class="flex gap-3 md:gap-4">
              <h4
                class="min-w-[38px] whitespace-nowrap text-h6 text-neutral-400 md:min-w-12"
              >
                <span class="Newsreader | md:text-h4">7</span>月
              </h4>
              <p
                class="border-l border-neutral-300 pl-3 text-fs-1 font-semibold text-neutral-600 md:pl-4"
              >
                與法國本土品牌合作,推出 vivre
                首個自有產品線,包括家飾、餐飲用品等生活品味商品。
              </p>
            </div>
            <div class="flex gap-3 md:gap-4">
              <h4
                class="min-w-[38px] whitespace-nowrap text-h6 text-neutral-400 md:min-w-12"
              >
                <span class="Newsreader | md:text-h4">12</span>月
              </h4>
              <p
                class="border-l border-neutral-300 pl-3 text-fs-1 font-semibold text-neutral-600 md:pl-4"
              >
                總瀏覽人次突破 100 萬大關,獲得實體出版社青睞,出版 vivre
                生活風格書籍。
              </p>
            </div>
          </div>
        </article>
        <article
          class="flex flex-col items-start gap-6 font-bold md:gap-[72px] lg:flex-row"
        >
          <h3
            class="Newsreader | bg-primary p-3 text-[1rem] text-neutral-100 md:text-[1.5rem]"
          >
            2022
          </h3>
          <div class="flex flex-col gap-6">
            <div class="flex gap-3 md:gap-4">
              <h4
                class="min-w-[38px] whitespace-nowrap text-h6 text-neutral-400 md:min-w-12"
              >
                <span class="Newsreader | md:text-h4">3</span>月
              </h4>
              <p
                class="border-l border-neutral-300 pl-3 text-fs-1 font-semibold text-neutral-600 md:pl-4"
              >
                推出 vivre 生活風格線上課程,聘請各領域專家開設有深度的付費課程。
              </p>
            </div>
            <div class="flex gap-3 md:gap-4">
              <h4
                class="min-w-[38px] whitespace-nowrap text-h6 text-neutral-400 md:min-w-12"
              >
                <span class="Newsreader | md:text-h4">8</span>月
              </h4>
              <p
                class="border-l border-neutral-300 pl-3 text-fs-1 font-semibold text-neutral-600 md:pl-4"
              >
                vivre 舉辦首屆 vivre
                生活節,線上線下同步展開,現場湧入大批品牌粉絲朋友。
              </p>
            </div>
            <div class="flex gap-3 md:gap-4">
              <h4
                class="min-w-[38px] whitespace-nowrap text-h6 text-neutral-400 md:min-w-12"
              >
                <span class="Newsreader | md:text-h4">10</span>月
              </h4>
              <p
                class="border-l border-neutral-300 pl-3 text-fs-1 font-semibold text-neutral-600 md:pl-4"
              >
                vivre 完成 A 輪融資,獲得知名風投資金青睞。
              </p>
            </div>
          </div>
        </article>
        <article
          class="flex flex-col items-start gap-6 font-bold md:gap-[72px] lg:flex-row"
        >
          <h3
            class="Newsreader | bg-primary p-3 text-[1rem] text-neutral-100 md:text-[1.5rem]"
          >
            2023
          </h3>
          <div class="flex flex-col gap-6">
            <div class="flex gap-3 md:gap-4">
              <h4
                class="min-w-[38px] whitespace-nowrap text-h6 text-neutral-400 md:min-w-12"
              >
                <span class="Newsreader | md:text-h4">1</span>月
              </h4>
              <p
                class="border-l border-neutral-300 pl-3 text-fs-1 font-semibold text-neutral-600 md:pl-4"
              >
                vivre 宣布品牌願景"探索更美好的生活",並推出全新視覺形象。
              </p>
            </div>
            <div class="flex gap-3 md:gap-4">
              <h4
                class="min-w-[38px] whitespace-nowrap text-h6 text-neutral-400 md:min-w-12"
              >
                <span class="Newsreader | md:text-h4">5</span>月
              </h4>
              <p
                class="border-l border-neutral-300 pl-3 text-fs-1 font-semibold text-neutral-600 md:pl-4"
              >
                正式推出付費訂閱會員服務,提供高階獨家內容和會員優惠。
              </p>
            </div>
            <div class="flex gap-3 md:gap-4">
              <h4
                class="min-w-[38px] whitespace-nowrap text-h6 text-neutral-400 md:min-w-12"
              >
                <span class="Newsreader | md:text-h4">9</span>月
              </h4>
              <p
                class="border-l border-neutral-300 pl-3 text-fs-1 font-semibold text-neutral-600 md:pl-4"
              >
                首次評選年度" vivre
                生活風格大獎",表彰在各領域具有開創性的人物及品牌。
              </p>
            </div>
            <div class="flex gap-3 md:gap-4">
              <h4
                class="min-w-[38px] whitespace-nowrap text-h6 text-neutral-400 md:min-w-12"
              >
                <span class="Newsreader | md:text-h4">11</span>月
              </h4>
              <p
                class="border-l border-neutral-300 pl-3 text-fs-1 font-semibold text-neutral-600 md:pl-4"
              >
                首次登場的" vivre
                生活節沙龍"在全球主要城市同步舉行,線上線下吸引百萬人觀看。
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
  <!-- 品牌願景 -->
  <section class="px-3 py-10 md:py-20">
    <div class="mx-auto max-w-[856px] px-3 text-fs-1 text-neutral-400 md:px-10">
      <h2
        class="mb-6 text-center text-h2-sm font-black text-neutral-500 md:mb-9 md:text-h2"
      >
        品牌願景
      </h2>
      <p class="mb-6 md:mb-9">
        我們的目標不僅是為讀者提供高水準的內容,更希望能真正啟發和影響讀者的生活方式與價值觀,引領走向更有意義、品質與質感的生活體驗。我們相信,生活的意義不僅僅在於外在物質條件的滿足,更多的是一種心靈層面的追求,一種對美好事物的不懈向往。因此,vivre
        的定位是成為啟迪現代人內在生活的引路人,給予靈感啟迪,引領讀者去體驗生活的真諦。
      </p>
      <p>
        我們衷心期盼,vivre
        能為現代人的生活帶來無限靈感啟發,讓每個人的生活之路不僅優雅、從容,更有內在的意義與價值,豐富而燦爛。讓我們共同努力,將生活過得更有滋有味!期待您一同加入
        vivre,攜手同行這段美妙的人生旅程。
      </p>
    </div>
  </section>
</template>
