<script setup lang="ts">
const show = defineModel<boolean>("show", { default: false });
const dialog = useTemplateRef<HTMLDialogElement>("dialog");
const route = useRoute();
const close = () => {
  show.value = false;
};

function trapFocus(event: KeyboardEvent) {
  const controls = Array.from(
    dialog.value?.querySelectorAll<HTMLElement>(
      "a[href], button, input, [tabindex]",
    ) ?? [],
  ).filter(
    (element) => element.tabIndex >= 0 && element.getClientRects().length,
  );
  const first = controls.at(0);
  const last = controls.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last?.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first?.focus();
  }
}

watch(() => route.fullPath, close);
watch(
  show,
  (open, _previous, onCleanup) => {
    if (!open) {
      dialog.value?.close();
      return;
    }
    dialog.value?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    onCleanup(() => {
      document.body.style.overflow = overflow;
    });
  },
  { flush: "post" },
);

onMounted(() => {
  const desktop = window.matchMedia("(min-width: 1024px)");
  const onResize = () => {
    if (desktop.matches) close();
  };
  desktop.addEventListener("change", onResize);
  onBeforeUnmount(() => desktop.removeEventListener("change", onResize));
});
</script>

<template>
  <dialog
    id="mobile-navigation"
    ref="dialog"
    aria-label="網站導覽"
    class="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-primary-100 px-3 py-[76px] text-neutral-500"
    @close="close"
    @keydown.tab="trapFocus"
  >
    <button
      type="button"
      autofocus
      class="absolute top-2 right-3 p-3"
      aria-label="關閉導覽選單"
      @click="close"
    >
      <img src="/icons/x.webp" alt="" width="24" height="24" />
    </button>
    <nav aria-label="主要導覽"><slot /></nav>
  </dialog>
</template>
