<script setup lang="ts">
const route = useRoute();
const router = useRouter();

/**
 * 依目前網址階層（/plans/checkout → ['plans','checkout']）
 * 累加出每一段完整 path，再呼叫 router.resolve()
 * 就能拿到那一段真正的 route record → 讀 meta.breadcrumb
 */
const crumbs = computed(() => {
  // 先放固定首頁
  const list: Array<{ title: string; href: string; current: boolean }> = [
    { title: "首頁", href: "/", current: route.path === "/" },
  ];

  // 依路徑階層處理
  const segments = route.path.split("/").filter(Boolean); // ['', 'plans', 'checkout'] → ['plans','checkout']
  let cumulative = "";
  segments.forEach((seg, idx) => {
    cumulative += "/" + seg; // /plans  → /plans/checkout
    const resolved = router.resolve(cumulative); // 取得對應的路由資訊
    const record = resolved.matched.at(-1); // 最深那層就是我們要的 record

    if (!record) return; // 找不到就跳過（很少見）

    const title =
      (record.meta as any).breadcrumb ??
      (typeof (record.meta as any).title === "string"
        ? (record.meta as any).title.split(" | ")[0]
        : record.name || seg); // fallback

    list.push({
      title,
      href: resolved.href,
      current: idx === segments.length - 1,
    });
  });

  return list;
});
</script>

<template>
  <nav
    aria-label="Breadcrumb"
    class="flex gap-1.5 py-3 text-fs-1 text-neutral-400"
  >
    <template v-for="(c, i) in crumbs" :key="i">
      <NuxtLink
        :to="c.href"
        :class="[
          'transition duration-300 hover:text-accent-200',
          c.current && 'pointer-events-none text-accent-200',
        ]"
      >
        {{ c.title }}
      </NuxtLink>
      <span v-if="i < crumbs.length - 1"> / </span>
    </template>
  </nav>
</template>
