<script setup>
const props = defineProps({
  /**
   * 按鈕類型
   * @type {'green' | 'gray'}
   */
  intent: {
    type: String,
    default: "green",
  },
  /**
   * 按鈕尺寸
   * @type {'lg' | 'sm'}
   */
  size: {
    type: String,
    default: "lg",
  },
  /**
   * 按鈕文字
   * @type {String}
   */
  text: {
    type: String,
    default: "透過 text prop 來傳入文字",
  },
  /**
   * 是否有 icon
   * @type {Boolean}
   */
  hasIcon: {
    type: Boolean,
    default: false,
  },
  /**
   * 連結
   * @type {String}
   */
  to: {
    type: String,
    default: "#",
  },
  target: {
    type: String,
    default: "_self",
  },
  /**
   * 是否停用
   * @type {Boolean}
   */
  disabled: {
    type: Boolean,
    default: false,
  },
});
const { intent, size, text, hasIcon, to, target, disabled } = toRefs(props);

/**
 * 動態產生按鈕 class
 */
const btnClass = computed(() => {
  const arr = [
    // intent 顏色相關
    intent.value === "green"
      ? "bg-accent-200 hover:bg-accent-300 text-white"
      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-400 hover:text-neutral-500",

    // size 相關
    size.value === "lg"
      ? "px-6 py-4 text-h6 font-black md:text-h5"
      : "px-5 py-3 text-h6 font-bold",

    // 是否有 icon
    hasIcon.value ? "flex gap-3 items-center" : "",

    // disabled 狀態
    disabled.value ? (intent.value === "green" ? "bg-neutral-200 pointer-events-none" : "bg-neutral-100 !text-neutral-300 pointer-events-none") : "",
  ];
  return arr;
});
</script>

<template>
  <NuxtLink
    :to="to"
    :target="target"
    class="rounded-full transition flex justify-center duration-300"
    :class="btnClass"
    :aria-disabled="disabled"
    tabindex="0"
  >
    {{ text }}
    <svg v-if="hasIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="size === 'lg' ? 'size-6' : 'size-5'">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719a.751.751 0 0 1 1.062-1.062l6 6a.75.75 0 0 1 0 1.062l-6 6a.751.751 0 1 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12" :fill="intent === 'green' ? '#ffffff' : '#6C757D'"/>
    </svg>
  </NuxtLink>
</template>
