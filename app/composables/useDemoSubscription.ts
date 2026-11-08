export function useDemoSubscription() {
  const isSubscribed = useState("demo-subscription", () => false);

  onMounted(() => {
    try {
      isSubscribed.value = sessionStorage.getItem("isSubscribed") === "true";
    } catch {
      // Storage may be unavailable; keep the in-memory demo state.
    }
  });

  function subscribe() {
    isSubscribed.value = true;
    try {
      sessionStorage.setItem("isSubscribed", "true");
    } catch {
      // The demo still works for this visit without persistence.
    }
  }

  return { isSubscribed: readonly(isSubscribed), subscribe };
}
