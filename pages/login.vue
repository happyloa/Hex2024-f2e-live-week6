<script setup>
useSeoMeta({
  title: "登入 | 2024 切版直播班 - 內容訂閱網站",
  ogTitle: "登入 | 2024 切版直播班 - 內容訂閱網站",
});
</script>

<template>
  <section class="py-[60px] md:py-[100px]">
    <form
      class="mx-auto max-w-[636px] border-y border-primary-300 bg-white p-6 md:rounded-xl md:border md:p-10"
    >
      <h1 class="mb-6 text-h4 font-black text-accent-200 md:mb-10">登入</h1>
      <!-- 會員帳號 -->
      <div class="mb-4 flex flex-col gap-2 md:gap-3">
        <label for="account">會員帳號</label>
        <input
          type="text"
          id="account"
          name="account"
          placeholder="請輸入會員帳號"
          class="rounded-lg bg-neutral-100 px-4 py-3 placeholder:text-fs-1 placeholder:text-neutral-300 focus:outline-none"
        />
      </div>
      <!-- 密碼 -->
      <div class="mb-6 flex flex-col gap-2 md:mb-10 md:gap-3">
        <label for="password">密碼</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="請輸入密碼"
          class="rounded-lg bg-neutral-100 px-4 py-3 placeholder:text-fs-1 placeholder:text-neutral-300 focus:outline-none"
        />
      </div>
      <AtomButton text="立即登入" hasIcon size="sm" class="mb-6 md:mb-10" />
      <div class="relative mb-6 flex justify-center md:mb-10">
        <hr
          class="absolute left-1/2 top-1/2 z-0 w-full -translate-x-1/2 border-neutral-200"
        />
        <p
          class="relative z-10 bg-white px-3 text-center text-fs-1 text-neutral-300"
        >
          或以其他方式登入
        </p>
      </div>
      <div class="mb-6 flex flex-col gap-2 whitespace-nowrap md:mb-10">
        <button
          type="button"
          class="flex justify-center gap-3 rounded-full bg-neutral-100 p-3 text-h6 font-bold text-neutral-500"
        >
          <img src="/public/icons/google.webp" alt="Google 登入" />
          使用 Google 登入
        </button>
        <button
          type="button"
          class="flex justify-center gap-3 rounded-full bg-neutral-100 p-3 text-h6 font-bold text-neutral-500"
        >
          <img src="/public/icons/facebook.webp" alt="Facebook 登入" />
          使用 Facebook 登入
        </button>
      </div>
      <p
        class="flex items-center justify-center gap-3 whitespace-nowrap text-fs-1 text-neutral-500"
      >
        還不是會員？<NuxtLink to="/register" class="text-accent-200"
          >點此註冊</NuxtLink
        >
      </p>
    </form>
  </section>
</template>
