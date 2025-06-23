<script setup>
definePageMeta({
  breadcrumb: "付款",
});

useSeoMeta({
  title: "付款 | 2024 切版直播班 - 內容訂閱網站",
  ogTitle: "付款 | 2024 切版直播班 - 內容訂閱網站",
  description: `vivre 這個品牌名稱源自法語,意為"生活"、"活著"。它象徵著我們對於高品質生活的熱愛與追求。vivre 旨在成為一個分享美好生活體驗、發掘生活質感的平台。`,
  ogDescription: `vivre 這個品牌名稱源自法語,意為"生活"、"活著"。它象徵著我們對於高品質生活的熱愛與追求。vivre 旨在成為一個分享美好生活體驗、發掘生活質感的平台。`,
  ogImage: "/ogImage.webp",
  twitterCard: "/ogImage.webp",
});
</script>

<template>
  <section class="px-3 pb-[60px] pt-4 md:py-[100px]">
    <div class="mx-auto max-w-[1296px]">
      <AtomBreadcrumb class="mb-2 md:mb-4" />
      <h1
        class="mb-10 text-h1-sm font-black text-neutral-500 md:mb-12 md:text-h1"
      >
        付款
      </h1>
      <form class="grid grid-cols-1 gap-6 text-neutral-500 lg:grid-cols-7">
        <main class="col-span-1 lg:col-span-4">
          <div
            class="mb-6 rounded-xl border border-primary-300 bg-white p-6 md:p-10"
          >
            <h2 class="mb-6 text-h5 font-black text-black md:mb-10 md:text-h4">
              購買人
            </h2>
            <div class="mb-6 flex flex-col gap-4">
              <!-- 姓名 -->
              <div class="flex flex-col gap-3">
                <label for="name">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="請輸入姓名"
                  class="rounded-lg bg-neutral-100 px-4 py-3 placeholder:text-fs-1 placeholder:text-neutral-300 focus:outline-none"
                />
              </div>
              <!-- 密碼 -->
              <div class="flex flex-col gap-3">
                <label for="name">密碼</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="請輸入密碼"
                  class="rounded-lg bg-neutral-100 px-4 py-3 placeholder:text-fs-1 placeholder:text-neutral-300 focus:outline-none"
                />
              </div>
              <!-- 電子信箱 -->
              <div class="flex flex-col gap-3">
                <label for="name">電子信箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="請輸入電子信箱"
                  class="rounded-lg bg-neutral-100 px-4 py-3 placeholder:text-fs-1 placeholder:text-neutral-300 focus:outline-none"
                />
              </div>
            </div>
            <!-- 記住我的資訊 -->
            <div class="flex items-center">
              <div class="p-2">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  class="block size-4 accent-accent-200"
                />
              </div>
              <label for="remember-me" class="text-fs-1 text-neutral-800"
                >記住我的資訊</label
              >
            </div>
          </div>
          <div
            class="rounded-xl border border-primary-300 bg-white p-6 md:p-10"
          >
            <h2 class="mb-6 text-h5 font-bold text-black md:mb-10">付款方式</h2>
            <div class="mb-6 md:mb-10">
              <h3 class="Newsreader | mb-1 font-bold tracking-widest md:mb-4">
                Pay With
              </h3>
              <!-- 信用卡 -->
              <div class="flex items-center">
                <div class="p-2">
                  <input
                    type="radio"
                    id="credit-card"
                    name="credit-card"
                    class="block size-4 accent-accent-200"
                    checked
                  />
                </div>
                <label for="credit-card" class="text-fs-1 text-neutral-800"
                  >信用卡</label
                >
              </div>
            </div>
            <div class="mb-6 grid grid-cols-2 gap-6">
              <!-- 信用卡號碼 -->
              <div class="col-span-2 flex flex-col gap-3">
                <label for="card-number">信用卡號碼</label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="1234 5678 1234 5678"
                  class="rounded-lg bg-neutral-100 px-4 py-3 placeholder:text-fs-1 placeholder:text-neutral-300 focus:outline-none"
                />
              </div>
              <!-- 過期日 -->
              <div class="col-span-1 flex flex-col gap-3">
                <label for="expiry-date">過期日</label>
                <input
                  type="text"
                  id="expiry-date"
                  name="expiry-date"
                  placeholder="MM/YY"
                  class="rounded-lg bg-neutral-100 px-4 py-3 placeholder:text-fs-1 placeholder:text-neutral-300 focus:outline-none"
                />
              </div>
              <!-- 驗證碼 -->
              <div class="col-span-1 flex flex-col gap-3">
                <label for="cvv">驗證碼</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="CVV"
                  maxlength="3"
                  class="rounded-lg bg-neutral-100 px-4 py-3 placeholder:text-fs-1 placeholder:text-neutral-300 focus:outline-none"
                />
              </div>
            </div>
            <!-- 記住卡片資訊 -->
            <div class="flex items-center">
              <div class="p-2">
                <input
                  type="checkbox"
                  id="remember-card"
                  name="remember-card"
                  class="block size-4 accent-accent-200"
                />
              </div>
              <label for="remember-card" class="text-fs-1 text-neutral-800"
                >記住卡片資訊</label
              >
            </div>
          </div>
        </main>
        <aside
          class="col-span-1 flex flex-col gap-6 self-start rounded-xl border border-accent-200 bg-white p-6 text-neutral-500 md:gap-10 md:p-10 lg:col-span-3"
        >
          <h2 class="text-h5 font-black text-accent-200 md:text-h4">
            訂單資訊
          </h2>
          <div class="border-y border-neutral-200 py-6">
            <div
              class="mb-3 flex items-center justify-between gap-3 text-[#09090B]"
            >
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
          <!-- 折扣碼 -->
          <div class="flex flex-col gap-3">
            <label for="coupon">折扣碼</label>
            <div class="flex items-center gap-3">
              <input
                type="text"
                id="coupon"
                name="coupon"
                placeholder="請輸入折扣碼"
                class="w-full rounded-lg bg-neutral-100 px-4 py-3 placeholder:text-fs-1 placeholder:text-neutral-300 focus:outline-none"
              />
              <AtomButton intent="gray" size="sm" text="套用" />
            </div>
          </div>
          <!-- 小計 -->
          <div class="border-y border-neutral-200 py-6 text-h6 font-bold">
            <div class="mb-3 flex items-center justify-between gap-3">
              <span>小計</span>
              <span
                class="Newsreader | text-[1rem] tracking-widest md:text-[1.25rem]"
                >NT 1,188</span
              >
            </div>
            <div class="flex items-center justify-between gap-3">
              <span>折扣</span>
              <span
                class="Newsreader | text-[1rem] tracking-widest md:text-[1.25rem]"
                >0</span
              >
            </div>
          </div>
          <div class="flex justify-between gap-3 font-bold tracking-widest">
            <span class="text-h6 text-neutral-500">總計</span>
            <span
              class="Newsreader | text-[1.5rem] text-[#09090B] md:text-[1.75rem]"
              >NT 1,188</span
            >
          </div>
          <AtomButton text="立即付款" hasIcon class="hidden md:flex" />
          <AtomButton
            text="立即付款"
            hasIcon
            size="sm"
            class="flex md:hidden"
          />
        </aside>
      </form>
    </div>
  </section>
</template>
