<script setup lang="ts">
const {
  intent = "green",
  size = "lg",
  text = "透過 text prop 來傳入文字",
  hasIcon = false,
  to = "#",
  target = "_self",
  disabled = false,
} = defineProps<{
  intent?: "green" | "gray";
  size?: "lg" | "sm";
  text?: string;
  hasIcon?: boolean;
  to?: string;
  target?: string;
  disabled?: boolean;
}>();

const btnClass = computed(() => [
  intent === "green"
    ? "bg-accent-200 hover:bg-accent-300 text-white"
    : "bg-neutral-100 hover:bg-neutral-200 text-neutral-400 hover:text-neutral-500",

  size === "lg"
    ? "px-6 py-4 text-h6 font-black md:text-h5"
    : "px-5 py-3 text-h6 font-bold",

  disabled
    ? intent === "green"
      ? "bg-neutral-200 pointer-events-none"
      : "bg-neutral-100 text-neutral-300! pointer-events-none"
    : "",
]);
</script>

<template>
  <NuxtLink
    :to="disabled ? undefined : to"
    :target="target"
    class="flex items-center justify-center gap-3 rounded-full whitespace-nowrap transition duration-300"
    :class="btnClass"
    :aria-disabled="disabled"
    :tabindex="disabled ? -1 : undefined"
    @click="disabled && $event.preventDefault()"
  >
    {{ text }}
    <svg
      v-if="hasIcon"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="size === 'lg' ? 'size-6' : 'size-5'"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719a.751.751 0 0 1 1.062-1.062l6 6a.75.75 0 0 1 0 1.062l-6 6a.751.751 0 1 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12"
        :fill="intent === 'green' ? '#ffffff' : '#6C757D'"
      />
    </svg>
  </NuxtLink>
</template>
