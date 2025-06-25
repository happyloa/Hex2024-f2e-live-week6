<script setup lang="ts">
defineProps({
  /**
   * 是否顯示
   * @type {Boolean}
   */
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits<{
  (e: "update:show", value: boolean): void;
}>();

const close = () => {
  emit("update:show", false);
};

/* ---------- 路由變動就自動關 ---------- */
const route = useRoute();
watch(route, () => close());
</script>

<template>
  <Teleport to="body">
    <!-- Transition 做淡入淡出 -->
    <Transition name="fade">
      <nav
        v-if="show"
        class="fixed inset-0 z-50 block bg-primary-100 px-3 py-[76px] lg:hidden"
      >
        <button
          class="absolute right-3 top-2 p-3"
          aria-label="關閉導覽選單"
          @click="close"
        >
          <img src="/icons/x.webp" alt="關閉 icon" />
        </button>

        <slot />
      </nav>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
