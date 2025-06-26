<script setup>
const isSubscribed = ref(false);

onMounted(() => {
  const saved = sessionStorage.getItem("isSubscribed");
  isSubscribed.value = saved === "true";
});
</script>

<template>
  <!-- Banner 區塊 -->
  <section
    class="mx-auto h-[240px] max-w-[1296px] bg-[url(/images/mobile/article/banner.webp)] bg-cover bg-center bg-no-repeat sm:h-[454px] sm:bg-[url(/images/desktop/article/banner.webp)]"
  ></section>
  <!-- 本文內容 -->
  <section class="px-3 pb-[60px] pt-10 md:pb-[100px] md:pt-20">
    <div class="mx-auto max-w-[856px]">
      <nav
        aria-label="Breadcrumb"
        class="mb-1 flex gap-1.5 py-3 text-fs-1 text-neutral-400 md:mb-5"
      >
        <NuxtLink to="/" class="transition duration-300 hover:text-accent-200">
          首頁
        </NuxtLink>
        <span> / </span>
        <NuxtLink to="/" class="transition duration-300 hover:text-accent-200">
          所有文章
        </NuxtLink>
        <span> / </span>
        <NuxtLink class="pointer-events-none text-accent-200">
          私人島嶼的露營奇遇記
        </NuxtLink>
      </nav>
      <h1 class="mb-2 text-h4 font-black text-neutral-500 md:mb-4 md:text-h1">
        私人島嶼的露營奇遇記
      </h1>
      <time
        datetime="2024-05-01"
        class="mb-7 block text-fs-1 font-semibold text-neutral-300 md:mb-10 md:text-h6 md:font-bold"
        >2024 / 5 / 1</time
      >
      <div class="relative" :class="isSubscribed ? '' : 'mb-6 md:mb-10'">
        <article
          class="flex flex-col gap-6 text-fs-1 text-neutral-500 md:gap-10"
          :class="
            isSubscribed
              ? ''
              : 'pointer-events-none max-h-[563px] overflow-hidden md:max-h-[614px]'
          "
        >
          <p>
            嗨！我是秘境尋蹤小編
            Elly，很高興能與你分享我這段令人心曠神怡的旅程。這不僅僅是一次旅行，更是一場對自然、對內心的深度體悟，一次重新與大自然連結的奇妙旅程。希望透過我的分享，你也能感受到這份自然之美，並找到一份屬於自己的心靈寧靜。
          </p>
          <p>
            這段旅程的開始，是從一個遙遠的小島。我對於這片土地的認識，僅止於一些遊記和照片，對於它的神秘感與未知感讓我充滿了好奇。一艘小船，帶著我穿越海浪，穿過風暴，終於抵達了這片被大自然雕琢的寶地。當我踏上這片島嶼的那一刻，心中充滿了震撼與喜悅。
          </p>
          <figure>
            <picture>
              <source
                media="(max-width: 768px)"
                srcset="/images/mobile/article/content-1.webp"
              />
              <img
                src="/images/desktop/article/content-1.webp"
                alt="私人島嶼的露營奇遇記 1"
                class="w-full"
                loading="lazy"
              />
            </picture>
          </figure>
          <p>
            這個小島並不大，但卻擁有令人驚艷的景色。在午夜的沙灘上，星空如水晶般璀璨，海浪聲如琴音般撫慰著我的心靈。椰林掩映著沙灘，樹影婆娑，彷彿舞者在天空中翩翩起舞。我選擇在沙灘上搭建了我的帳篷，每一天清晨，太陽的第一縷光照在我的臉上，讓我感受到生命的美好。
          </p>
          <p>
            島上的每個角落都充滿了驚喜和挑戰。在叢林中，我發現了許多珍貴的生物，每一種都是大自然的奇蹟。在海邊，我盡情地嬉戲於波濤之間，感受海風撫過臉龐的清涼。我發現，與大自然的親密接觸，讓我感受到了一種無法言喻的喜悅和寧靜。
          </p>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <figure>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcset="/images/mobile/article/content-2.webp"
                />
                <img
                  src="/images/desktop/article/content-2.webp"
                  alt="私人島嶼的露營奇遇記 2"
                  class="w-full"
                  loading="lazy"
                />
              </picture>
            </figure>
            <figure>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcset="/images/mobile/article/content-3.webp"
                />
                <img
                  src="/images/desktop/article/content-3.webp"
                  alt="私人島嶼的露營奇遇記 3"
                  class="w-full"
                  loading="lazy"
                />
              </picture>
            </figure>
          </div>
          <p>
            這段旅程不僅僅是一場對自然的探索，更是對自我的反思與成長。在這片與世隔絕的土地上，我找到了內心深處的平靜與寧靜。我學會了放慢腳步，用心感受身邊的一切，珍惜每一個瞬間。我意識到，生活中最美好的事物往往就在我們身邊，只是我們常常忽略了它們。
          </p>
          <p>
            回想起這段旅程，我深深地感謝大自然賜予我的一切。我決定將這份寧靜與美好分享給更多的人，讓大家一起感受大自然的魅力。如果你也渴望探索未知，尋找內心的寧靜，那就加入我們的訂閱服務吧！讓我們一起展開一場奇幻的旅程，探索無垠的寧靜，感受大自然的美好！讓我們一同進入那片無垠的寧靜，發現生活中的無盡可能性。希望透過這段旅程的分享，你也能找到屬於自己的心靈寧靜，與大自然一同共舞，感受生命的美好！
          </p>
          <figure>
            <picture>
              <source
                media="(max-width: 768px)"
                srcset="/images/mobile/article/content-4.webp"
              />
              <img
                src="/images/desktop/article/content-4.webp"
                alt="私人島嶼的露營奇遇記 4"
                class="w-full"
                loading="lazy"
              />
            </picture>
          </figure>
          <ul class="flex items-center gap-4 text-h6 font-bold text-primary">
            <li class="py-2">
              <a
                href="#"
                class="block rounded bg-primary-300 px-2 py-1 transition duration-300 hover:bg-primary hover:text-white"
                >#秘境尋蹤</a
              >
            </li>
            <li class="py-2">
              <a
                href="#"
                class="block rounded bg-primary-300 px-2 py-1 transition duration-300 hover:bg-primary hover:text-white"
                >#露營點</a
              >
            </li>
            <li class="py-2">
              <a
                href="#"
                class="block rounded bg-primary-300 px-2 py-1 transition duration-300 hover:bg-primary hover:text-white"
                >#山人</a
              >
            </li>
          </ul>
        </article>

        <!-- 底部白色漸層覆蓋層；只有未訂閱才顯示 -->
        <div
          v-if="!isSubscribed"
          class="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white to-transparent"
        ></div>
      </div>
      <!-- 未訂閱時 CTA -->
      <div
        v-if="!isSubscribed"
        class="flex flex-col items-center gap-3 md:gap-4"
      >
        <p class="text-center text-h6 font-bold text-neutral-500">
          本篇為會員專屬文章，<br
            class="block md:hidden"
          />馬上訂閱瀏覽所有內容！
        </p>
        <AtomButton
          text="我要訂閱"
          to="/plans"
          hasIcon
          class="hidden md:flex"
        />
        <AtomButton
          text="我要訂閱"
          to="/plans"
          size="sm"
          hasIcon
          class="flex md:hidden"
        />
      </div>
    </div>
  </section>
  <!-- 延伸閱讀 -->
  <section class="px-3 pb-[60px] md:pb-[100px]">
    <div class="mx-auto max-w-[856px]">
      <h2 class="mb-5 text-h4 font-black text-neutral-500 md:mb-10 md:text-h2">
        延伸閱讀
      </h2>
      <ul class="hidden flex-col gap-10 sm:flex">
        <li>
          <article class="flex gap-6 border-b border-[#E9ECEF] pb-6">
            <img
              src="/images/desktop/article/read-1.webp"
              alt="週末說走就走露營記"
              class="shrink-0"
              loading="lazy"
            />
            <div class="flex max-w-[635px] flex-col">
              <h3 class="mb-2 text-h5 font-black text-neutral-500">
                週末說走就走露營記
              </h3>
              <p class="mb-3 text-fs-1 text-neutral-400">
                遠離塵囂,用全新的眼光重塑生活的舒適本味。徜徉在環山綠野間,在這處隱世私家別墅裡,盡情領略池畔優閒時光,任林間微風撫面,聆聽花鳥嘶啞之音,重拾內心深處的寧靜...
              </p>
              <button
                type="button"
                class="Newsreader | self-end py-2 text-[1.25rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300"
              >
                Read More
              </button>
            </div>
          </article>
        </li>
        <li>
          <article class="flex gap-6 border-b border-[#E9ECEF] pb-6">
            <img
              src="/images/desktop/article/read-2.webp"
              alt="城市野營日記"
              class="shrink-0"
              loading="lazy"
            />
            <div class="flex max-w-[635px] flex-col">
              <h3 class="mb-2 text-h5 font-black text-neutral-500">
                城市野營日記
              </h3>
              <p class="mb-3 text-fs-1 text-neutral-400">
                終於!我實現了一個看似瘋狂的想法—在熟悉的城市裡野營一晚。說實話,一開始我也有點懷疑自己,畢竟眾目睽睽之下搭帳篷實在有點怪異。不過漸漸地,這股初時的侷促不...
              </p>
              <button
                type="button"
                class="Newsreader | self-end py-2 text-[1.25rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300"
              >
                Read More
              </button>
            </div>
          </article>
        </li>
        <li>
          <article class="flex gap-6 border-b border-[#E9ECEF] pb-6">
            <img
              src="/images/desktop/article/read-3.webp"
              alt="和寵物去露營 - 大自然之旅的雙倍體驗"
              class="shrink-0"
              loading="lazy"
            />
            <div class="flex max-w-[635px] flex-col">
              <h3 class="mb-2 text-h5 font-black text-neutral-500">
                和寵物去露營 - 大自然之旅的雙倍體驗
              </h3>
              <p class="mb-3 text-fs-1 text-neutral-400">
                說實話,一開始我有點擔心帶著我的狗狗露營會不會太麻煩。畢竟要照顧牠的飲食起居,還得注意牠的安全。不過這次經驗讓我徹底改觀了!出發前,我特意為狗狗準備了適當...
              </p>
              <button
                type="button"
                class="Newsreader | self-end py-2 text-[1.25rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300"
              >
                Read More
              </button>
            </div>
          </article>
        </li>
      </ul>

      <!-- 行動版輪播 -->
      <ClientOnly>
        <swiper-container
          class="sm:hidden"
          slides-per-view="1.1"
          space-between="24"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          :loop="true"
        >
          <swiper-slide>
            <article class="flex flex-col gap-4 border-b border-[#E9ECEF] pb-6">
              <img
                src="/images/mobile/article/read-1.webp"
                alt="週末說走就走露營記"
                class="w-full"
                loading="lazy"
              />
              <div class="flex max-w-[635px] flex-col">
                <h3 class="mb-2 text-h5 font-black text-neutral-500">
                  週末說走就走露營記
                </h3>
                <p class="mb-3 text-fs-1 text-neutral-400">
                  遠離塵囂,用全新的眼光重塑生活的舒適本味。徜徉在環山綠野間,在這處隱世私家別墅裡,盡情領略池畔優閒時光,任林間微風撫面,聆聽花鳥嘶啞之音,重拾內心深處的寧靜...
                </p>
                <button
                  type="button"
                  class="Newsreader | self-end py-2 text-[1.25rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300"
                >
                  Read More
                </button>
              </div>
            </article>
          </swiper-slide>
          <swiper-slide>
            <article class="flex flex-col gap-4 border-b border-[#E9ECEF] pb-6">
              <img
                src="/images/mobile/article/read-2.webp"
                alt="城市野營日記"
                class="w-full"
                loading="lazy"
              />
              <div class="flex max-w-[635px] flex-col">
                <h3 class="mb-2 text-h5 font-black text-neutral-500">
                  城市野營日記
                </h3>
                <p class="mb-3 text-fs-1 text-neutral-400">
                  終於!我實現了一個看似瘋狂的想法—在熟悉的城市裡野營一晚。說實話,一開始我也有點懷疑自己,畢竟眾目睽睽之下搭帳篷實在有點怪異。不過漸漸地,這股初時的侷促不...
                </p>
                <button
                  type="button"
                  class="Newsreader | self-end py-2 text-[1.25rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300"
                >
                  Read More
                </button>
              </div>
            </article>
          </swiper-slide>
          <swiper-slide>
            <article class="flex flex-col gap-4 border-b border-[#E9ECEF] pb-6">
              <img
                src="/images/mobile/article/read-3.webp"
                alt="和寵物去露營 - 大自然之旅的雙倍體驗"
                class="w-full"
                loading="lazy"
              />
              <div class="flex max-w-[635px] flex-col">
                <h3 class="mb-2 text-h5 font-black text-neutral-500">
                  和寵物去露營 - 大自然之旅的雙倍體驗
                </h3>
                <p class="mb-3 text-fs-1 text-neutral-400">
                  說實話,一開始我有點擔心帶著我的狗狗露營會不會太麻煩。畢竟要照顧牠的飲食起居,還得注意牠的安全。不過這次經驗讓我徹底改觀了!出發前,我特意為狗狗準備了適當...
                </p>
                <button
                  type="button"
                  class="Newsreader | self-end py-2 text-[1.25rem] font-bold tracking-widest text-accent-200 transition duration-300 hover:text-accent-300"
                >
                  Read More
                </button>
              </div>
            </article>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
</template>
