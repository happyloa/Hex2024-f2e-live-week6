<script setup>
onMounted(() => {
  // 只在第一次沒有 isSubscribed key 時才寫入，避免之後被覆蓋成 false
  if (
    typeof window !== "undefined" &&
    !sessionStorage.getItem("isSubscribed")
  ) {
    sessionStorage.setItem("isSubscribed", "false");
  }
});
</script>

<template>
  <div class="bg-primary-100 selection:bg-accent-200 selection:text-white">
    <NuxtRouteAnnouncer />
    <LayoutHeader />
    <NuxtPage />
    <LayoutFooter />
  </div>
</template>
