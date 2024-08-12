<template>
  <div :class="containerClass">
    <AppTopbarStudent ref="topbarRef" />
    <AppRightMenu />
    <AppSidebarStudent ref="sidebarRef" />
    <div class="layout-content-wrapper">
      <!--      <AppBreadcrumb />-->
      <div class="layout-content">
        <router-view />
      </div>
      <AppFooter />
    </div>
    <AppConfig />
    <div v-if="layoutState.staticMenuMobileActive" class="layout-mask"></div>
  </div>
  <Toast />
</template>

<script lang="ts">
export default { name: "layout-master" };
</script>
<script setup lang="ts">
import { computed, watch, ref, onBeforeUnmount } from "vue";
import { usePrimeVue } from "primevue/config";
import { useLayout } from "@/composables/layout";

const $primevue = usePrimeVue();
const { layoutConfig, layoutState, isSidebarActive } = useLayout();
layoutConfig.value.menuMode = "static";
const outsideClickListener = ref<any>();
const sidebarRef = ref<any>(null);
const topbarRef = ref<any>(null);

watch(isSidebarActive, (newVal) => {
  if (newVal) {
    bindOutsideClickListener();
  } else {
    unbindOutsideClickListener();
  }
});

onBeforeUnmount(() => {
  unbindOutsideClickListener();
});

const containerClass = computed(() => {
  return [
    "layout-container",
    {
      "layout-light": layoutConfig.value.colorScheme === "light",
      "layout-dark": layoutConfig.value.colorScheme === "dark",
      "layout-dim": layoutConfig.value.colorScheme === "dim",
      "layout-static": layoutConfig.value.menuMode === "static",
      "layout-horizontal": layoutConfig.value.menuMode === "horizontal",
      "layout-overlay": layoutConfig.value.menuMode === "overlay",
      "layout-overlay-active": layoutState.value.overlayMenuActive,
      "layout-mobile-active": layoutState.value.staticMenuMobileActive,
      "layout-static-inactive":
        layoutState.value.staticMenuDesktopInactive &&
        layoutConfig.value.menuMode === "static",
      "p-ripple-disabled": $primevue.config.ripple === false,
    },
    "layout-topbar-" + layoutConfig.value.topbarTheme,
    "layout-menu-" + layoutConfig.value.menuTheme,
  ];
});

const bindOutsideClickListener = () => {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event)) {
        layoutState.value.overlayMenuActive = false;
        layoutState.value.overlaySubmenuActive = false;
        layoutState.value.staticMenuMobileActive = false;
        layoutState.value.menuHoverActive = false;
        layoutState.value.rightMenuActive = false;
      }
    };
    document.addEventListener("click", outsideClickListener.value);
  }
};
const unbindOutsideClickListener = () => {
  if (outsideClickListener.value) {
    document.removeEventListener("click", outsideClickListener as any);
    outsideClickListener.value = null;
  }
};
const isOutsideClicked = (event) => {
  if (!sidebarRef.value) return;

  const sidebarEl = sidebarRef?.value.$el;
  const topbarDesktopEl = topbarRef?.value.$el.querySelector(
    ".layout-menu-button-desktop"
  );
  const topbarMobileEl = topbarRef?.value.$el.querySelector(
    ".layout-menu-button-mobile"
  );

  return !(
    sidebarEl.isSameNode(event.target) ||
    sidebarEl.contains(event.target) ||
    topbarDesktopEl.isSameNode(event.target) ||
    topbarDesktopEl.contains(event.target) ||
    topbarMobileEl.isSameNode(event.target) ||
    topbarMobileEl.contains(event.target)
  );
};
</script>
