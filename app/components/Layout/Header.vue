<script setup>
const showMobileNav = ref(false);
</script>

<template>
  <header class="sticky top-0 z-40 bg-primary-100/80 backdrop-blur-xs">
    <div
      class="mx-auto flex max-w-[1296px] items-center justify-between border-neutral-300 pt-2 pr-2 pb-1 pl-3 md:border-b md:py-9"
    >
      <div class="flex items-center gap-9">
        <NuxtLink to="/">
          <figure>
            <picture>
              <source
                media="(max-width: 640px)"
                srcset="/images/logo-sm.webp"
              />
              <img src="/images/logo.webp" alt="網站 Logo" />
            </picture>
          </figure>
        </NuxtLink>
        <div class="relative">
          <input
            type="text"
            class="hidden max-w-[276px] rounded-full border border-neutral-200 bg-white py-3 pr-14 pl-5 text-neutral-500 outline-hidden placeholder:text-fs-1 placeholder:text-neutral-300 lg:block"
            placeholder="搜尋文章"
          />
          <img
            src="/icons/search.webp"
            alt="搜尋 icon"
            class="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer"
          />
        </div>
      </div>
      <nav class="hidden lg:block">
        <ul class="flex items-center gap-5 text-h6 font-bold text-neutral-500">
          <li>
            <NuxtLink
              to="#"
              class="px-5 py-2 transition duration-300 hover:text-accent-200"
              >所有文章</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/plans"
              class="px-5 py-2 transition duration-300 hover:text-accent-200"
              :class="$route.path.includes('plans') ? 'text-accent-200' : ''"
              >訂閱方案</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="px-5 py-2 transition duration-300 hover:text-accent-200"
              :class="$route.path.includes('about') ? 'text-accent-200' : ''"
              >關於我們</NuxtLink
            >
          </li>
          <li>
            <AtomButton
              to="/login"
              text="登入 / 註冊"
              class="text-h6! font-bold"
            />
          </li>
        </ul>
      </nav>
      <button
        type="button"
        class="block p-3 lg:hidden"
        @click="showMobileNav = true"
      >
        <img src="/icons/menu.webp" alt="漢堡選單" />
      </button>
    </div>
  </header>

  <!-- 行動版 Modal 導覽選單 -->
  <LayoutMobileNav v-model:show="showMobileNav">
    <div class="relative mb-6">
      <input
        type="text"
        class="w-full rounded-full border border-neutral-200 bg-white py-2 pr-14 pl-5 text-neutral-500 outline-hidden placeholder:text-fs-1 placeholder:text-neutral-300"
        placeholder="搜尋文章"
      />
      <img
        src="/icons/search.webp"
        alt="搜尋 icon"
        class="absolute top-1/2 right-5 -translate-y-1/2"
      />
    </div>

    <ul class="mb-10 flex flex-col gap-6 text-h6 font-bold text-neutral-500">
      <li><NuxtLink to="/" class="block p-3">所有文章</NuxtLink></li>
      <li>
        <NuxtLink
          to="/plans"
          class="block p-3"
          :class="$route.path.includes('plans') ? 'text-accent-200' : ''"
          >訂閱方案</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/about"
          class="block p-3"
          :class="$route.path.includes('about') ? 'text-accent-200' : ''"
          >關於我們</NuxtLink
        >
      </li>
    </ul>

    <AtomButton to="/login" size="sm" text="登入 / 註冊">
      登入 / 註冊
    </AtomButton>
  </LayoutMobileNav>
</template>
