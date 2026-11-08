<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const crumbs = computed(() => {
  const list: Array<{ title: string; href: string; current: boolean }> = [
    { title: "首頁", href: "/", current: route.path === "/" },
  ];

  const segments = route.path.split("/").filter(Boolean);
  let cumulative = "";
  segments.forEach((seg, idx) => {
    cumulative += "/" + seg;
    const resolved = router.resolve(cumulative);
    const record = resolved.matched.at(-1);

    if (!record) return;

    const title =
      typeof record.meta.breadcrumb === "string"
        ? record.meta.breadcrumb
        : typeof record.meta.title === "string"
          ? record.meta.title.split(" | ")[0]!
          : String(record.name || seg);

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
    <template v-for="(c, i) in crumbs" :key="c.href">
      <NuxtLink
        :to="c.href"
        :aria-current="c.current ? 'page' : undefined"
        :class="[
          'transition duration-300 hover:text-accent-200',
          c.current && 'pointer-events-none text-accent-200',
        ]"
      >
        {{ c.title }}
      </NuxtLink>
      <span v-if="i < crumbs.length - 1" aria-hidden="true"> / </span>
    </template>
  </nav>
</template>
